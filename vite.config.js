import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import inject from '@rollup/plugin-inject'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动注入 Buffer（确保所有依赖能用）
    inject({
      Buffer: ['buffer', 'Buffer'],
    })
  ],
  resolve: {
    alias: {
      // 提供浏览器兼容版本的 Node.js 模块
      path: 'path-browserify',
      stream: 'stream-browserify',
      util: 'util/',
      buffer: 'buffer/',   // ✅ 改这里，用完整实现
      os: 'os-browserify/browser'
    }
  },
  define: process.env.VITEST
    ? {}  // 测试环境下不重定义 process
    : {
      'process.env': {},
      'process.platform': JSON.stringify('browser'),
      'process.version': JSON.stringify(''),
      global: 'window',
      osEOL: JSON.stringify('\n'),
    },
  optimizeDeps: {
    include: ['buffer'],  // ✅ 强制预构建 buffer
    esbuildOptions: {
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
      output: {
        manualChunks: {
          vendor: ['buffer', 'process'],
        },
      },
    },
  },
  test: {
    setupFiles: ['./tests/setup.js', './tests/componentTestSetup.js'],
    testTimeout: 10000,
    globals: true,
    environment: 'jsdom',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    env: {
      VITEST: 'true'
    }
  }
})
