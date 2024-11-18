import axios from 'axios'

import { BrowserWindow, TouchBar, nativeImage } from 'electron'
const { TouchBarButton, TouchBarScrubber, TouchBarPopover, TouchBarSpacer, TouchBarLabel } = TouchBar

export class touchBar {
    win: BrowserWindow

    touchBarScrubber = new TouchBarScrubber({
        overlayStyle: 'outline',
        showArrowButtons: false,
        continuous: true,
        mode: 'free',
        items: [],
        select: (index) => {
            const id = this.itemList[index].id
            this.win.webContents.send('app:jumpChat', {
                userId: id,
                messageId: 0
            })
        }
    })
    search = new TouchBarButton({
        icon: nativeImage.createFromNamedImage('NSImageNameTouchBarSearchTemplate', [-1, 0, 1]).resize({ width: 20, height: 20 }),
        click: () => {
            this.win.webContents.send('app:changeTab', 'Friends')
        }
    })

    baseView = [
        this.search,
        new TouchBarPopover({
            icon: nativeImage.createFromNamedImage('NSImageNameListViewTemplate', [-1, 0, 1]).resize({ width: 20, height: 20 }),
            items: new TouchBar({ items: [ this.touchBarScrubber ]
        }), showCloseButton: true}),
        new TouchBarSpacer({ size: 'flexible' })
    ]

    // ====================================

    itemList: { id: number, name: string, image: string }[] = []
    constructor(win: BrowserWindow) {
        this.win = win
        this.win.setTouchBar(new TouchBar({ items: [this.search]}))
    }

    flush(messageList: { id: number, name: string, image: string }[]) {
        this.itemList = messageList
        this.touchBarScrubber.items = messageList.map((item) => {
            return {
                label: item.name
            }
        })
        this.win.setTouchBar(new TouchBar({ items: this.baseView}))
    }

    newMsgNum = 0
    async newMessage(data: { id: number, image: string, name: string, msg: string }) {
        if(data === undefined) {
            this.win.setTouchBar(new TouchBar({ items: this.baseView}))
            this.newMsgNum = 0
            return
        }
        this.newMsgNum++
        const response = await axios.get(data.image, {
            responseType: 'arraybuffer'
        })
        let image = nativeImage.createFromBuffer(response.data)
        image = image.resize({ width: 25, height: 25 })
        // 创建 poper
        const popover = new TouchBarPopover({
            icon: nativeImage.createFromNamedImage('NSImageNameTouchBarNewMessageTemplate', [-1, 0, 1]).resize({ width: 20, height: 20 }),
            label: this.newMsgNum.toString(),
            items: new TouchBar({
                items: [
                    new TouchBarButton({ icon: image, iconPosition: 'right', enabled: false, backgroundColor: '#000'}),
                    new TouchBarButton({ label: data.name ?? '', click: () => {
                        this.win.webContents.send('app:jumpChat', {
                            userId: data.id,
                            messageId: 0
                        })
                        this.win.setTouchBar(new TouchBar({ items: this.baseView}))
                    }}),
                    new TouchBarSpacer({ size: 'small' }),
                    new TouchBarLabel({ label: data.msg ?? '' })
                ]
            }),
            showCloseButton: true
        })
        this.win.setTouchBar(new TouchBar({ items: this.baseView.concat(popover)}))
    }
}