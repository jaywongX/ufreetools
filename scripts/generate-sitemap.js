/**
 * 自动生成 sitemap.xml 的脚本
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 网站基础 URL
const BASE_URL = 'https://ufreetools.com';
// 当前日期，格式为 YYYY-MM-DD
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// 支持的语言
const LANGUAGES = ['en', 'zh'];

// 核心页面
const CORE_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/tags', priority: '0.7', changefreq: 'weekly' },
  { path: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
  { path: '/terms', priority: '0.5', changefreq: 'yearly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/feedback', priority: '0.6', changefreq: 'monthly' },
];

// 标签页面
const TAGS = [
  'code', 'dev', 'convert', 'utility', 'image', 'text', 'security', 
  'format', 'validate', 'design', 'frontend', 'data', 'web'
];

// 工具页面
const TOOLS = [
  // 'api-request-tool',
  'base64-encoder-decoder',
  'bmi-calculator',
  'code-beautifier',
  'code-complexity-analyzer',
  'code-diff',
  'code-formatter',
  'code-obfuscator',
  'color-picker',
  'color-scheme-generator',
  'cookie-manager',
  'cors-generator',
  'countdown-generator',
  'css-formatter',
  'css-gradient-generator',
  'csv-json-converter',
  'curl-converter',
  'currency-converter',
  'diagram-examples',
  'drawing-board',
  'flowchart-generator',
  'gif-frame-extractor',
  'git-conflict-resolver',
  'grpc-debugger',
  'hash-calculator',
  'hmac-calculator',
  'holiday-calendar',
  'html-entity-encoder',
  'html-formatter',
  'http-header-security-checker',
  'http-proxy-detector',
  'http-status-code-lookup',
  'id-photo-maker',
  'image-batch-resizer',
  'image-color-extractor',
  'image-compressor',
  'image-cropper',
  'image-exif-viewer',
  'image-filters',
  'image-mosaic-generator',
  'image-pixelator',
  'image-to-ascii',
  'image-watermark',
  'income-tax-calculator',
  'ip-lookup',
  'javascript-formatter',
  'javascript-obfuscator',
  'json-formatter',
  'jwt-debugger',
  'latex-formula-generator',
  'loan-calculator',
  'markdown-editor',
  'markdown-to-html',
  'mock-api-generator',
  'mqtt-tester',
  'name-generator',
  'network-speed-test',
  'number-converter',
  'openapi-generator',
  'page-redirect-checker',
  'password-generator',
  'password-strength-checker',
  'pomodoro-timer',
  'qr-code-generator',
  'regex-tester',
  'request-header-editor',
  'rsa-crypto',
  'sensitive-word-filter',
  'sm2-crypto',
  'sql-formatter',
  'svg-optimizer',
  'symmetric-crypto',
  'timestamp-converter',
  'todo-list',
  'travel-budget-planner',
  'url-encode-decode',
  'url-params-parser',
  'user-agent-generator',
  'user-agent-parser',
  'uuid-generator',
  'websocket-tester',
  'xml-formatter',
  'xml-json-converter',
  'yaml-json-converter',
];

// 生成 XML 条目
function generateUrlEntry(path, priority, changefreq) {
  return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// 生成完整的 sitemap XML
function generateSitemap() {
  let entries = [];
  
  // 添加根URL
  entries.push(generateUrlEntry('/', '1.0', 'weekly'));
  
  // 为各种语言生成URL
  for (const lang of LANGUAGES) {
    // 核心页面
    for (const page of CORE_PAGES) {
      if (page.path === '/') continue; // 跳过根路径，已添加
      entries.push(generateUrlEntry(`/${lang}${page.path}`, page.priority, page.changefreq));
    }
    
    // 标签页面
    for (const tag of TAGS) {
      entries.push(generateUrlEntry(`/${lang}/tag/${tag}`, '0.7', 'weekly'));
    }
    
    // 工具页面
    for (const tool of TOOLS) {
      entries.push(generateUrlEntry(`/${lang}/tool/${tool}`, '0.8', 'monthly'));
    }
  }
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${entries.join('\n')}
</urlset>`;

  // 写入文件
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml 已成功生成');
  console.log(`✓ 共生成 ${entries.length} 个URL条目`);
  console.log(`✓ 支持的语言: ${LANGUAGES.join(', ')}`);
}

// 执行生成
generateSitemap(); 