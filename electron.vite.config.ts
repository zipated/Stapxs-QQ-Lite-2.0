import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ViteYaml from '@modyfi/vite-plugin-yaml'

export default defineConfig({
    main: {
        plugins: [externalizeDepsPlugin()],
    },
    preload: {
        plugins: [externalizeDepsPlugin()],
    },
    renderer: {
        server: {
            port: 8080
        },
        resolve: {
            alias: {
                '@renderer': resolve('src/renderer/src'),
            },
        },
        plugins: [
            vue(),
            vueDevTools(),
            ViteYaml(),
            VitePWA({ registerType: 'autoUpdate' })
        ],
        build: {
            rollupOptions: {
                input: {
                    main: resolve('src/renderer/index.html')
                },
                external: [
                    resolve('src/renderer/src/assets/img/qq-face/docs')
                ]
            }
        }
    },
})
