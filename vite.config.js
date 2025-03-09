import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 提供浏览器兼容版本的 Node.js 模块
      path: 'path-browserify',
      stream: 'stream-browserify',
      util: 'util/',
      buffer: 'buffer/',
      // 为 os 模块提供一个简单的替代实现
      os: 'os-browserify/browser'
    }
  },
  define: {
    // 为 Node.js 模块提供全局变量
    'process.env': {},
    'process.platform': JSON.stringify('browser'),
    'process.version': JSON.stringify(''),
    'global': 'window',
    // Buffer polyfill
    'Buffer': ['buffer', 'Buffer'],
    // 为一些 Node.js 全局变量提供替代值
    'os.EOL': JSON.stringify('\n')
  },
  optimizeDeps: {
    esbuildOptions: {
      // 告诉 esbuild 处理这些 Node.js 模块
      define: {
        global: 'globalThis',
      },
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      // 提供这些依赖的浏览器版本
      output: {
        manualChunks: {
          vendor: ['buffer', 'process'],
        },
      },
    },
  }
})
