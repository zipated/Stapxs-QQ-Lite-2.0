import { defineConfig } from 'vite'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ViteYaml from '@modyfi/vite-plugin-yaml'

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 8080
    },
    root: './src/renderer',
    plugins: [
        vue(),
        vueDevTools(),
        ViteYaml(),
        VitePWA({ registerType: 'autoUpdate' })
    ],
    resolve: {
        alias: {
            '@renderer': resolve(__dirname, 'src/renderer/src')
        }
    },
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
})
