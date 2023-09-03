import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import postCssPxToRem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/styles/index.scss';"
      }
    },
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 1,
          propList: ['*']
        }),
        autoprefixer({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8'
          ],
          grid: true
        })
      ]
    }
  },
  server: {
    port: 8080,
    open: true,
    hmr: {
      overlay: false
    },
    proxy: {
      '/api': {
        target: 'http://rap2api.taobao.org/app/mock/313918',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
