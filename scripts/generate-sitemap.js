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

// 分类页面
const CATEGORIES = [
  'dev', 'convert', 'design', 'text', 'image', 'network', 'security', 'utility'
];

// 标签页面
const TAGS = [
  'code', 'dev', 'convert', 'utility', 'image', 'text', 'security', 
  'format', 'validate', 'design', 'frontend', 'backend', 'data', 'web'
];

// 工具页面
const TOOLS = [
  'json-formatter', 'json-validator', 'html-formatter', 'css-formatter', 
  'javascript-formatter', 'xml-formatter', 'sql-formatter', 'markdown-editor',
  'image-compressor', 'image-cropper', 'color-picker', 'gradient-generator',
  'password-generator', 'password-strength-checker', 'base64-encoder-decoder',
  'url-encoder-decoder', 'hash-calculator', 'qr-code-generator', 'code-diff',
  'code-obfuscator', 'csv-to-json', 'yaml-json-converter', 'regex-tester',
  'json-to-typescript', 'api-request-tool', 'http-status-code-lookup', 'ip-lookup'
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
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 核心页面 -->
${CORE_PAGES.map(page => generateUrlEntry(page.path, page.priority, page.changefreq)).join('\n')}
  
  <!-- 分类页面 -->
${CATEGORIES.map(cat => generateUrlEntry(`/category/${cat}`, '0.8', 'weekly')).join('\n')}
  
  <!-- 标签页面 -->
${TAGS.map(tag => generateUrlEntry(`/tag/${tag}`, '0.7', 'weekly')).join('\n')}
  
  <!-- 工具页面 -->
${TOOLS.map(tool => generateUrlEntry(`/tool/${tool}`, '0.8', 'monthly')).join('\n')}
</urlset>`;

  // 写入文件
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml 已成功生成');
}

// 执行生成
generateSitemap(); 