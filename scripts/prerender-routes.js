/**
 * 预渲染路由生成脚本
 * 
 * 从 locale 文件中提取所有工具 ID，结合语言和静态页面，
 * 生成完整的预渲染路由列表。
 * 
 * 用法: node scripts/prerender-routes.js
 * 输出: 控制台输出 JSON 格式的路由数组
 */

import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  ALL_LANGS,
  PRIORITY_LANGS,
  STATIC_PAGES,
  CATEGORY_PAGES,
  PRIORITY_TOOL_IDS
} from './rendering-strategy.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

/**
 * 从 App.vue 中提取所有工具 ID
 */
async function getToolIds() {
  const appVuePath = join(projectRoot, 'src', 'App.vue');
  try {
    const content = await readFile(appVuePath, 'utf-8');
    
    // 匹配 id: 'xxx' 模式，只提取工具 ID（排除分类和标签）
    const toolIdRegex = /^\s*id:\s*'([\w-]+)',\s*$/gm;
    const toolIds = [];
    let match;
    
    // 跳过前13个匹配（分类和标签）
    let count = 0;
    while ((match = toolIdRegex.exec(content)) !== null) {
      count++;
      if (count > 13) { // 跳过分类和标签
        toolIds.push(match[1]);
      }
    }
    
    // 去重并排序
    return [...new Set(toolIds)].sort();
  } catch (err) {
    console.error('Error reading App.vue:', err);
    return [];
  }
}

/**
 * 生成完整的预渲染路由列表
 */
function parseEnvList(value, fallback) {
  if (!value || !value.trim()) return fallback;
  return value
    .split(',')
    .map(v => v.trim())
    .filter(Boolean);
}

function parseEnvBoolean(value, fallback = true) {
  if (value === undefined) return fallback;
  return !['false', '0', 'no'].includes(String(value).toLowerCase());
}

function getPrerenderConfig(toolIds) {
  const mode = process.env.PRERENDER_MODE || 'core';
  const includeStaticPages = parseEnvBoolean(process.env.PRERENDER_INCLUDE_STATIC, true);
  const includeCategories = parseEnvBoolean(process.env.PRERENDER_INCLUDE_CATEGORIES, true);
  const defaultToolLimit = Number.parseInt(process.env.PRERENDER_DEFAULT_TOOL_LIMIT || '50', 10);
  const toolLimit = Number.parseInt(process.env.PRERENDER_TOOL_LIMIT || `${defaultToolLimit}`, 10);

  const languages = parseEnvList(
    process.env.PRERENDER_LANGS,
    mode === 'all' ? ALL_LANGS : PRIORITY_LANGS
  ).filter(lang => ALL_LANGS.includes(lang));

  let selectedToolIds = toolIds;
  // if (mode === 'all') {
  //   selectedToolIds = toolIds;
  // } else {
  //   // 选择特定的工具
  //   const coreTools = PRIORITY_TOOL_IDS.filter(id => toolIds.includes(id));
  //   selectedToolIds = Number.isFinite(toolLimit) && toolLimit > 0
  //     ? coreTools.slice(0, toolLimit)
  //     : coreTools;
  // }

  return {
    mode,
    languages,
    includeStaticPages,
    includeCategories,
    toolIds: selectedToolIds
  };
}

async function generateRoutes() {
  const toolIds = await getToolIds();
  const config = getPrerenderConfig(toolIds);
  const routes = [];

  for (const lang of config.languages) {
    // 静态页面
    if (config.includeStaticPages) {
      for (const page of STATIC_PAGES) {
        routes.push(page ? `/${lang}/${page}` : `/${lang}`);
      }
    }

    // 分类页面
    if (config.includeCategories) {
      for (const cat of CATEGORY_PAGES) {
        routes.push(`/${lang}/category/${cat}`);
      }
    }

    // 工具页面
    for (const toolId of config.toolIds) {
      routes.push(`/${lang}/tool/${toolId}`);
    }
  }

  return routes;
}

// 执行并输出
const routes = await generateRoutes();

// 如果是命令行调用，输出 JSON
if (process.argv[1] && process.argv[1].includes('prerender-routes')) {
  console.log(JSON.stringify(routes, null, 2));
}

export { generateRoutes, getPrerenderConfig };
