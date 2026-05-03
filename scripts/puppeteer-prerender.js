/**
 * 基于 Puppeteer 的预渲染脚本
 *
 * 方案：
 * 1. 先执行 vite build 构建 SPA
 * 2. 启动静态服务器 serving dist 目录
 * 3. 用 Puppeteer 访问每个路由，等待页面渲染完成
 * 4. 将渲染后的 HTML 写回 dist 对应路径
 *
 * 优点：在真实浏览器环境中渲染，无需 mock 任何 API
 */

import { createServer } from 'http';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const distDir = join(projectRoot, 'dist');

// 静态文件服务（用于 Puppeteer 访问）
async function startStaticServer(port = 3456) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf',
    '.xml': 'application/xml',
    '.txt': 'text/plain',
  };

  const server = createServer(async (req, res) => {
    let filePath = join(distDir, decodeURIComponent(req.url).split('?')[0]);
    if (filePath.endsWith('/')) filePath += 'index.html';

    // SPA 回退：如果文件不存在且不是 API 请求，返回 index.html
    if (!existsSync(filePath) && !req.url.startsWith('/api/')) {
      filePath = join(distDir, 'index.html');
    }

    const ext = filePath.slice(filePath.lastIndexOf('.'));
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    try {
      const content = await readFile(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  await new Promise((resolve) => server.listen(port, () => resolve()));
  console.log(`[prerender] Static server running at http://localhost:${port}`);
  return server;
}

// 检查 dist 目录是否存在
async function checkDist() {
  if (!existsSync(distDir)) {
    throw new Error('dist directory not found. Please run "vite build" first.');
  }
  console.log('[prerender] Using existing dist directory');
}

// 生成路由列表
async function generateRoutes() {
  const { generateRoutes: genRoutes } = await import('./prerender-routes.js');
  return await genRoutes();
}

// 预渲染单个路由
async function prerenderRoute(browser, route, baseUrl) {
  const url = `${baseUrl}${route}`;
  const page = await browser.newPage();

  try {
    // 设置 viewport
    await page.setViewport({ width: 1280, height: 800 });

    // 拦截 console 输出，便于调试
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        // 忽略常见的非关键错误
        const text = msg.text();
        if (
          text.includes('favicon') ||
          text.includes('source map') ||
          text.includes('404')
        ) return;
        console.warn(`[${route}] console.${msg.type()}:`, text);
      }
    });

    // 导航到页面
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 60000,
    });

    // 等待 Vue 应用渲染完成
    // 检查 #app 是否有子元素
    await page.waitForFunction(
      () => {
        const app = document.getElementById('app');
        return app && app.children.length > 0;
      },
      { timeout: 30000 }
    );

    // 额外等待，确保异步组件加载完成
    await new Promise((r) => setTimeout(r, 2000));

    // 获取完整的页面 HTML
    const html = await page.content();

    // 确定输出路径
    const outPath = route === '/'
      ? join(distDir, 'index.html')
      : join(distDir, route.replace(/^\//, ''), 'index.html');

    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf-8');

    console.log(`[prerender] ✓ ${route} -> ${outPath.replace(projectRoot, '')}`);
    return { success: true, route };
  } catch (error) {
    console.error(`[prerender] ✗ ${route}:`, error.message);
    return { success: false, route, error: error.message };
  } finally {
    await page.close();
  }
}

// 主函数
async function main() {
  const startTime = Date.now();

  // 1. 检查 dist 目录（由 run-prerender-build.js 提前构建）
  await checkDist();

  // 2. 启动静态服务器
  const port = 3456;
  const server = await startStaticServer(port);
  const baseUrl = `http://localhost:${port}`;

  // 3. 启动 Puppeteer
  console.log('[prerender] Launching Puppeteer...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
    ],
  });

  try {
    // 4. 生成路由列表
    const routes = await generateRoutes();
    console.log(`[prerender] Total routes: ${routes.length}`);

    // 确保根路由存在
    if (!routes.includes('/')) routes.unshift('/');

    // 5. 逐个预渲染
    const results = [];
    const concurrency = 3; // 并发数

    for (let i = 0; i < routes.length; i += concurrency) {
      const batch = routes.slice(i, i + concurrency);
      const batchResults = await Promise.all(
        batch.map((route) => prerenderRoute(browser, route, baseUrl))
      );
      results.push(...batchResults);

      // 进度报告
      const completed = Math.min(i + concurrency, routes.length);
      console.log(`[prerender] Progress: ${completed}/${routes.length}`);
    }

    // 6. 统计结果
    const successCount = results.filter((r) => r.success).length;
    const failCount = results.filter((r) => !r.success).length;
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log('\n[prerender] ==========================');
    console.log(`[prerender] Completed in ${duration}s`);
    console.log(`[prerender] Success: ${successCount}`);
    console.log(`[prerender] Failed: ${failCount}`);
    console.log('[prerender] ==========================\n');

    if (failCount > 0) {
      console.log('[prerender] Failed routes:');
      results
        .filter((r) => !r.success)
        .forEach((r) => console.log(`  - ${r.route}: ${r.error}`));
    }
  } finally {
    await browser.close();
    server.close();
    console.log('[prerender] Browser and server closed.');
  }
}

main().catch((error) => {
  console.error('[prerender] Fatal error:', error);
  process.exit(1);
});
