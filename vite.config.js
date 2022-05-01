/**
 * Vite相关配置
 * 更多配置参考： vitejs.dev/config/
 */

import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import alias from '@rollup/plugin-alias'

export default ({ mode }) => defineConfig({
  base: './',
  plugins: [alias(), vue()],
  build: {
    outDir: 'build-' + mode
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: loadEnv(mode, process.cwd()).VITE_APP_PROXY,
        changeOrigin: true,
        rewrite: (url) => url.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
