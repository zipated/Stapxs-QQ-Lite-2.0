/*
    title: 自动回应
*/

const id = this.msgInfo.group_id ?? this.msgInfo.private_id
const blacklist = []

if (this.isMe && blacklist.indexOf(id) === -1) {
    this.sendMsg('set_msg_emoji_like',
        { 'message_id': this.message.message_id, 'emoji_id': '66' })
}