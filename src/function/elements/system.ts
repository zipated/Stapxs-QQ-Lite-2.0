/**
 * 登录状态记录（地址、密钥、状态等）
 */
export interface LoginCacheElem {
    address: string,
    token: string,
    status: boolean
}

export interface PopInfoElem {
    id: number,
    svg: string,
    text: string,
    autoClose?: boolean
}

export interface BotActionElem {
    action: string,
    params?: { [key: string]: any },
    echo?: string
}

export interface MsgIdInfoElem {
    gid?: number,
    uid?: number,
    seqid?: number
}

export interface ContributorElem {
    url: string,
    link: string,
    title: string
    isMe: boolean
    isSuperThakns: boolean
}

export interface NotificationElem {
    body: string,
    tag: string,
    icon: string,
    image?: string
    requireInteraction: boolean
}

export interface NotifyInfo {
    base_type: string,

    title: string,
    body: string,
    tag: string,
    icon: string,
    image?: string,
    type: string,
    is_important: boolean
}
