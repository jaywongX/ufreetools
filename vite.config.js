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
      buffer: 'buffer',
      // 为 os 模块提供一个简单的替代实现
      os: 'os-browserify/browser'
    }
  },
  define: process.env.VITEST
    ? {}  // 测试环境下不重定义 process
    : {
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
    minify: 'esbuild', // 使用 esbuild，比 terser 快很多且内存占用少
    target: 'es2015',
    cssCodeSplit: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      treeshake: {
        preset: 'recommended',
        moduleSideEffects: false
      },
      // 提供这些依赖的浏览器版本
      output: {
        chunkSizeWarningLimit: 500,
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Vue 核心生态
            if (id.includes('vue') || id.includes('pinia') || id.includes('@vueuse')) {
              return 'vendor-vue';
            }
            // AI/ML 相关库 (通常很大)
            if (id.includes('@tensorflow') || id.includes('face-api') || id.includes('@mediapipe') || id.includes('@imgly/background-removal')) {
              return 'vendor-ai';
            }
            // 图像处理库 - jimp 依赖保持在一起
            if (id.includes('jimp') || id.includes('@jimp')) {
              return 'vendor-jimp';
            }
            if (id.includes('fabric') || id.includes('pica') || id.includes('cropperjs') || id.includes('gif') || id.includes('html2canvas')) {
              return 'vendor-image';
            }
            // PDF 处理库
            if (id.includes('pdf-lib') || id.includes('pdfjs-dist') || id.includes('qpdf')) {
              return 'vendor-pdf';
            }
            // 加密和安全库
            if (id.includes('crypto-js') || id.includes('node-forge') || id.includes('jose') || id.includes('jsencrypt') || id.includes('sm-crypto')) {
              return 'vendor-crypto';
            }
            // 图表和可视化
            if (id.includes('chart.js') || id.includes('echarts') || id.includes('mermaid')) {
              return 'vendor-charts';
            }
            // 地图相关
            if (id.includes('leaflet') || id.includes('mapbox') || id.includes('@turf') || id.includes('proj4')) {
              return 'vendor-maps';
            }
            // 编辑器
            if (id.includes('monaco-editor') || id.includes('markdown-it') || id.includes('marked')) {
              return 'vendor-editor';
            }
            // 大型库单独分离，其他保持默认
            if (id.includes('three')) {
              return 'vendor-three';
            }
          }
        },
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
    treeShaking: true
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
