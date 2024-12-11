package cn.stapxs.qqweb.connector;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Onebot")
public class OnebotPlugin extends Plugin {

    private Onebot.WebSocketClient webSocketClient = null;
    private final Onebot implementation = new Onebot();

    public void sendNotify(String type, String data) {
        JSObject ret = new JSObject();
        ret.put("type", type);
        ret.put("data", data);
        this.notifyListeners("onebot:event", ret);
    }

    @PluginMethod
    public void connect(PluginCall call) {
        String value = call.getString("url");

        JSObject ret = new JSObject();
        webSocketClient = implementation.connect(this, webSocketClient, value);
        ret.put("value", true);
        call.resolve(ret);
    }

    @PluginMethod
    public void send(PluginCall call) {
        String value = call.getString("data");

        JSObject ret = new JSObject();
        ret.put("value", implementation.send(webSocketClient, value));
        call.resolve(ret);
    }

    @PluginMethod
    public void close(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", implementation.close(webSocketClient));
        call.resolve(ret);
    }
}
