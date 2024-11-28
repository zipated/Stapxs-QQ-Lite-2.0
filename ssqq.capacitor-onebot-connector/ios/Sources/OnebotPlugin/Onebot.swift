import Foundation
import os

@available(iOS 14.0, *)
@objc public class Onebot: NSObject {

    // 需要返回 type 和 data 两个字段
    var onEvent: ((String, String) -> Void)?

    private var client: WebSocketClient?

    @objc public func connect(_ url: String) {
        let url = URL(string: url)!
        // 使用 GCD 创建 WebSocket 连接
        DispatchQueue.global().async {
            let client = WebSocketClient(url: url, onEvent: { type, data in
                if let onEvent = self.onEvent {
                    onEvent(type, data)
                }
            })
            client.connect()
            // 全局保存 client 对象，避免被销毁
            self.client = client
        }
    }

    @objc public func send(_ data: String) {
        client?.sendMessage(data)
    }

    private class WebSocketClient: NSObject, URLSessionDelegate {
        var onEvent: ((String, String) -> Void)

        private let logger = Logger()

        private var webSocketTask: URLSessionWebSocketTask?
        private let urlSession: URLSession
        private let url: URL
        private var isConnected = false

        // 重试相关
        private var retryAttempts = 0
        private let maxRetryAttempts = 5
        private let retryDelay: TimeInterval = 5.0

        init(url: URL, onEvent: @escaping (String, String) -> Void) {
            self.url = url
            self.onEvent = onEvent
            let configuration = URLSessionConfiguration.default
            self.urlSession = URLSession(configuration: configuration, delegate: nil, delegateQueue: OperationQueue())
            super.init()
        }

        func connect() {
            logger.info("尝试连接到：\(self.url)")
            webSocketTask = urlSession.webSocketTask(with: url)
            webSocketTask?.resume()
            isConnected = true
            receiveMessage()

            // 检查连接状态
            webSocketTask?.sendPing { [weak self] error in
                guard let self = self else { return }

                if let error = error {
                    self.logger.error("连接失败，尝试重连：\(error.localizedDescription)")
                    self.handleConnectionFailure(error)
                } else {
                    self.logger.info("连接成功")
                    // 这儿需将 address 和 token 拆开; token 的部分不一定有
                    // ws://192.168.99.100:3001/?token=123456
                    let address = self.url.absoluteString
                    var token: String? = nil
                    if let urlComponents = URLComponents(url: self.url, resolvingAgainstBaseURL: false) {
                        token = urlComponents.queryItems?.first(where: { $0.name == "token" })?.value
                    }
                    // 拼为 json 字符串
                    let data = try! JSONSerialization.data(
                        withJSONObject: ["address": address, "token": token], options: [])
                    self.onEvent("onopen", String(data: data, encoding: .utf8)!)
                }
            }
        }

        func sendMessage(_ message: String) {
            guard isConnected else { return }
            let message = URLSessionWebSocketTask.Message.string(message)
            webSocketTask?.send(message) { error in
                if let error = error {
                    print("发送消息失败: \(error.localizedDescription)")
                }
            }
        }

        func receiveMessage() {
            webSocketTask?.receive { [weak self] result in
                guard let self = self else { return }
                switch result {
                case .success(let message):
                    switch message {
                    case .string(let text):
                        self.onEvent("onmessage", text)
                    case .data(_):
                        logger.warning("收到二进制消息。")
                    @unknown default:
                        logger.warning("收到未知类型的消息。")
                    }
                    self.receiveMessage() // 继续接收消息
                case .failure(let error):
                    print("接收消息失败: \(error.localizedDescription)")
                    self.handleConnectionFailure(error)
                }
            }
        }

        func disconnect() {
            isConnected = false
            webSocketTask?.cancel(with: .goingAway, reason: nil)
        }

        private func handleConnectionFailure(_ error: Error) {
            isConnected = false
            print("连接失败: \(error.localizedDescription)")

            // 尝试重连
            if retryAttempts < maxRetryAttempts {
                retryAttempts += 1
                print("重试连接 (\(retryAttempts)/\(maxRetryAttempts))...")
                DispatchQueue.global().asyncAfter(deadline: .now() + retryDelay) { [weak self] in
                    self?.connect()
                }
            } else {
                print("达到最大重试次数，放弃连接")
            }
        }
    }
}

