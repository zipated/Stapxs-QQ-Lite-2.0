/// <reference types="vite/client" />

declare module 'vue3-danmaku'
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare interface Window {
    moYu: any
    _AMapSecurityConfig: string | undefined
    createMap: (key: string | undefined, msgId: string, point: {
        lat: number,
        lng: number
    }) => void
}
