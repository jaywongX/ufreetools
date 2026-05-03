import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config.js';

/**
 * 预渲染构建配置
 *
 * 注意：此配置仅用于构建 SPA。
 * 实际的预渲染由 scripts/puppeteer-prerender.js 使用 Puppeteer 完成，
 * 在真实浏览器环境中渲染页面，避免 SSR 的兼容性问题。
 */
export default mergeConfig(
  baseConfig,
  defineConfig({
    // 可以在这里添加预渲染特定的构建配置
    build: {
      // 确保生成 source map 便于调试（可选）
      sourcemap: false,
    }
  })
);
