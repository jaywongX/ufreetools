import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 这将会把导入的 'path' 模块重定向到 'path-browserify'
    }
  },
  define: {
    // 为 clean-css 和其他 Node.js 模块提供 process.env
    'process.env': {},
    'process.platform': JSON.stringify('browser'),
    'process.version': JSON.stringify(''),
    // 添加其他可能需要的 Node.js 全局变量
    'global': 'window'
  }
})
