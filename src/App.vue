<template>
  <div class="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <!-- 左侧导航栏 -->
    <SideNav />
    
    <!-- 右侧内容区域 -->
    <div class="flex-1 flex flex-col">
      <TheHeader />
      <main class="flex-1 p-6 overflow-auto">
        <router-view />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, provide, onMounted, watch, computed, markRaw } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import SideNav from './components/layout/SideNav.vue'
import PasswordStrengthChecker from './components/tools/PasswordStrengthChecker.vue'

// 创建侧边栏状态并提供给所有子组件
const sidebarOpen = ref(true)
provide('sidebarOpen', sidebarOpen)

// 暗黑模式状态
const darkMode = ref(false)
provide('darkMode', darkMode)

// 工具分类定义
const categories = ref([
  { 
    id: 'dev', 
    title: '开发工具', 
    name: '开发工具',
    description: '为开发者提供的编程、调试和优化工具',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  { 
    id: 'convert', 
    title: '转换工具', 
    name: '转换工具',
    description: '各种文件格式之间的转换工具',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
  },
  { 
    id: 'design', 
    title: '设计工具', 
    name: '设计工具',
    description: '辅助设计师创建和优化视觉作品的工具',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
  },
  { 
    id: 'text', 
    title: '文本与编辑', 
    name: '文本与编辑',
    description: '处理、编辑和转换文本内容的工具',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
  },
  { 
    id: 'image', 
    title: '图像与多媒体', 
    name: '图像与多媒体',
    description: '图像处理、优化和转换工具',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  { 
    id: 'network', 
    title: '网络与协议工具', 
    name: '网络与协议',
    description: '网络分析、调试和测试工具',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
  },
  { 
    id: 'crypto', 
    title: '密码与安全', 
    name: '密码与安全',
    description: '密码生成、加密、解密与安全工具',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  { 
    id: 'utility', 
    title: '实用效率', 
    name: '实用效率',
    description: '各种实用的日常工具',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  }
])
provide('categories', categories.value)

// 全局标签定义 - 调整颜色和分组
const allTags = ref([
  // 开发相关标签
  { id: 'json', name: 'JSON', color: 'blue' },
  { id: 'code', name: '代码', color: 'red' },
  { id: 'dev', name: '开发', color: 'orange' },
  { id: 'frontend', name: '前端', color: 'orange' },
  { id: 'backend', name: '后端', color: 'orange' },
  { id: 'regex', name: '正则表达式', color: 'red' },
  { id: 'api', name: 'API', color: 'blue' },
  { id: 'debug', name: '调试', color: 'orange' },
  
  // 格式化/转换相关
  { id: 'format', name: '格式化', color: 'green' },
  { id: 'convert', name: '转换', color: 'yellow' },
  { id: 'compress', name: '压缩', color: 'emerald' },
  
  // 设计相关
  { id: 'color', name: '颜色', color: 'purple' },
  { id: 'design', name: '设计', color: 'cyan' },
  { id: 'css', name: 'CSS', color: 'purple' },
  { id: 'gradient', name: '渐变', color: 'pink' },
  { id: 'image', name: '图像', color: 'pink' },
  { id: 'svg', name: 'SVG', color: 'purple' },
  
  // 文本相关
  { id: 'text', name: '文本', color: 'gray' },
  { id: 'markdown', name: 'Markdown', color: 'lime' },
  { id: 'parse', name: '解析', color: 'cyan' },
  
  // 安全相关
  { id: 'crypto', name: '加密', color: 'indigo' },
  { id: 'security', name: '安全', color: 'amber' },
  { id: 'hash', name: '哈希', color: 'indigo' },
  { id: 'jwt', name: 'JWT', color: 'indigo' },
  
  // 网络相关
  { id: 'network', name: '网络', color: 'teal' },
  { id: 'http', name: 'HTTP', color: 'teal' },
  { id: 'url', name: 'URL', color: 'teal' },
  
  // 通用功能
  { id: 'generate', name: '生成', color: 'rose' },
  { id: 'analyze', name: '分析', color: 'amber' },
  { id: 'validate', name: '验证', color: 'amber' },
  { id: 'optimize', name: '优化', color: 'emerald' },
  { id: 'utility', name: '实用', color: 'gray' },
  { id: 'diagram', name: '图表', color: 'teal' },
  { id: 'flowchart', name: '流程图', color: 'teal' },
  { id: 'visualization', name: '可视化', color: 'cyan' },
  { id: 'crop', name: '裁剪', color: 'pink' },
  { id: 'resize', name: '调整大小', color: 'pink' },
  { id: 'rotate', name: '旋转', color: 'pink' },
  { id: 'edit', name: '编辑', color: 'pink' },
  { id: 'filter', name: '滤镜', color: 'pink' },
  { id: 'effects', name: '特效', color: 'pink' },
  { id: 'photo', name: '照片', color: 'pink' },
  { id: 'watermark', name: '水印', color: 'pink' },
  { id: 'copyright', name: '版权', color: 'amber' },
  { id: 'branding', name: '品牌', color: 'indigo' },
  { id: 'batch', name: '批量处理', color: 'blue' },
  { id: 'compression', name: '压缩', color: 'green' },
  { id: 'metadata', name: '元数据', color: 'indigo' },
  { id: 'exif', name: 'EXIF', color: 'purple' },
  { id: 'ascii', name: 'ASCII艺术', color: 'orange' },
  { id: 'art', name: '艺术效果', color: 'pink' },
  { id: 'document', name: '证件', color: 'teal' },
  { id: 'portrait', name: '人像', color: 'rose' },
  { id: 'pixelate', name: '像素化', color: 'blue' },
  { id: 'retro', name: '复古', color: 'amber' },
  { id: 'gif', name: 'GIF', color: 'indigo' },
  { id: 'animation', name: '动画', color: 'emerald' },
  { id: 'frames', name: '帧', color: 'lime' },
])
provide('allTags', allTags)

// 全局工具列表数据（重新组织分类和标签）
const allTools = ref([
  // 开发工具
  { 
    id: 'json-formatter', 
    name: 'JSON格式化', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '在线JSON格式化与验证工具，支持压缩和美化', 
    path: '/tools/json-formatter',
    component: 'JSONFormatter',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['json', 'format', 'dev', 'validate']
  },
  { 
    id: 'regex-tester', 
    name: '正则表达式测试', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '测试和验证正则表达式，实时查看匹配结果', 
    path: '/tools/regex-tester',
    component: 'RegexTester',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['regex', 'test', 'dev', 'validate']
  },
  { 
    id: 'sql-formatter', 
    name: 'SQL格式化', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '在线SQL格式化与验证工具，支持压缩和美化',
    path: '/tools/sql-formatter',
    component: 'SQLFormatter',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['sql','format','dev','validate']
  },
  { 
    id: 'git-conflict-resolver', 
    name: 'Git冲突解决模拟器', 
    category: '代码处理工具', 
    categoryId: 'dev',
    description: '模拟Git合并冲突场景，练习解决代码冲突', 
    path: '/tools/git-conflict-resolver',
    component: 'GitConflictResolver',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['git', 'code', 'dev', 'utility']
  },
  { 
    id: 'javascript-formatter', 
    name: 'JavaScript格式化', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '在线JavaScript格式化与验证工具，支持压缩和美化',
    path: '/tools/javascript-formatter',
    component: 'JavaScriptFormatter',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['javascript','format','dev','validate']
  },
  { 
    id: 'code-highlighter', 
    name: '代码高亮', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '在线代码高亮工具，支持多种语言',
    path: '/tools/code-highlighter',
    component: 'CodeHighlighter',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['code','dev','highlight']
  },
  { 
    id: 'html-entity-encoder', 
    name: 'HTML实体编码', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '在线HTML实体编码工具，支持多种编码格式',
    path: '/tools/html-entity-encoder',
    component: 'HtmlEntityEncoder',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['html','dev','encode']
  },
  { 
    id: 'jwt-debugger', 
    name: 'JWT调试工具', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '解析、验证和调试JWT令牌的在线工具', 
    path: '/tools/jwt-debugger',
    component: 'JwtDebugger',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    tags: ['jwt', 'security', 'debug', 'dev']
  },
  { 
    id: 'openapi-ts-client', 
    name: 'OpenAPI→TS客户端', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '根据OpenAPI规范自动生成TypeScript接口和API客户端代码', 
    path: '/tools/openapi-ts-client',
    component: 'OpenApiGenerator',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['api', 'dev', 'frontend', 'generate']
  },
  { 
    id: 'mock-api-generator', 
    name: 'Mock API生成器', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '根据OpenAPI规范自动生成Mock API',
    path: '/tools/mock-api-generator',
    component: 'MockAPIGenerator',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['api','dev','mock']
  },
  { 
    id: 'code-complexity-analyzer', 
    name: '代码复杂度分析', 
    category: '代码处理工具', 
    categoryId: 'dev',
    description: '分析JavaScript代码的圈复杂度、Halstead度量和维护指数', 
    path: '/tools/code-complexity-analyzer',
    component: 'CodeComplexity',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['code', 'analyze', 'performance', 'dev']
  },
  { 
    id: 'code-diff', 
    name: '代码差异对比', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '在线对比两个代码文件的差异，支持多种语言',
    path: '/tools/code-diff',
    component: 'CodeDiff',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['code', 'utility', 'dev']
  },
  { 
    id: 'code-formatter', 
    name: '代码格式化', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '在线代码格式化与验证工具，支持多种语言',
    path: '/tools/code-formatter',
    component: 'CodeFormatter',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['code','format','dev','validate']
  },
  { 
    id: 'code-obfuscator', 
    name: '代码混淆', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '对JavaScript和CSS代码进行混淆处理，提高代码安全性', 
    path: '/tools/code-obfuscator',
    component: 'CodeObfuscator',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['code', 'security', 'frontend', 'optimize']
  },
  { 
    id: 'user-agent-generator', 
    name: 'User-Agent生成器', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '生成各种浏览器和设备的User-Agent字符串',
    path: '/tools/user-agent-generator',
    component: 'UserAgentGenerator',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['user-agent','dev','generate']
  },

  // 设计工具
  { 
    id: 'qr-code-generator', 
    name: '二维码生成器', 
    category: '设计工具', 
    categoryId: 'design',
    description: '自定义生成清晰的二维码图片', 
    path: '/tools/qr-code-generator',
    component: 'QRCodeGenerator',
    icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
    tags: ['generate', 'image', 'utility']
  },
  { 
    id: 'color-picker', 
    name: '颜色选择器', 
    category: '设计工具', 
    categoryId: 'design',
    description: '强大的颜色选择和调整工具，支持多种颜色格式', 
    path: '/tools/color-picker',
    component: 'ColorPicker',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['color', 'design', 'ui', 'hex', 'rgb']
  },
  { 
    id: 'color-scheme-generator', 
    name: '配色方案生成', 
    category: '设计工具', 
    categoryId: 'design',
    description: '基于色彩理论生成和谐的配色方案', 
    path: '/tools/color-scheme-generator',
    component: 'ColorSchemeGenerator',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['color', 'design', 'generate']
  },
  { 
    id: 'css-gradient-generator', 
    name: 'CSS渐变生成器', 
    category: '设计工具', 
    categoryId: 'design',
    description: '简单易用的CSS渐变背景生成工具', 
    path: '/tools/css-gradient-generator',
    component: 'CssGradientGenerator',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['css', 'design', 'gradient', 'generate', 'color']
  },
  {
    id: 'flowchart-generator',
    name: '流程图生成器',
    category: '设计工具',
    categoryId: 'design', 
    description: '使用 Mermaid 语法创建专业的流程图、时序图、甘特图等图表',
    path: '/tools/flowchart-generator',
    component: 'FlowchartGenerator',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    tags: ['design', 'diagram', 'flowchart', 'visualization', 'dev']
  },
  {
    id:'diagram-examples',
    name:'图表示例',
    category:'设计工具',
    categoryId:'design',
    description:'展示各种图表示例，包括流程图、时序图、甘特图等',
    path:'/tools/diagram-examples',
    component:'DiagramExamples',
    icon:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    tags:['design','diagram','example','visualization']
  },

  // 文本与编辑
  { 
    id: 'markdown-editor', 
    name: 'Markdown编辑器', 
    category: '文本与编辑', 
    categoryId: 'text',
    description: '简洁易用的Markdown编辑与预览工具', 
    path: '/tools/markdown-editor',
    component: 'MarkdownEditor',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    tags: ['markdown', 'text', 'editor']
  },
  {
    id:'markdown-to-html',
    name:'Markdown转HTML',
    category:'文本与编辑',
    categoryId:'text',
    description:'将Markdown文本转换为HTML代码',
    path:'/tools/markdown-to-html',
    component:'MarkdownToHtml',
    icon:'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    tags:['markdown','text','editor']
  },
  {
    id:'xml-formatter',
    name:'XML格式化',
    category:'文本与编辑',
    categoryId:'text',
    description:'格式化XML代码，提升可读性',
    path:'/tools/xml-formatter',
    component:'XmlFormatter',
    icon:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    tags:['xml','text','format']
  },
  {
    id:'css-formatter',
    name:'CSS格式化',
    category:'文本与编辑',
    categoryId:'text',
    description:'格式化CSS代码，提升可读性',
    path:'/tools/css-formatter',
    component:'CssFormatter',
    icon:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    tags:['css','text','format']
  },
  { 
    id: 'sensitive-word-filter', 
    name: '敏感词过滤', 
    category: '文本与编辑', 
    categoryId: 'text',
    description: '检测和过滤文本中的敏感词汇，支持自定义敏感词库', 
    path: '/tools/sensitive-word-filter',
    component: 'SensitiveWordFilter',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['text', 'security', 'filter']
  },
  
  // 图像与多媒体
  {
    id: 'image-compressor',
    name: '图片压缩',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '高效无损的图片压缩工具',
    path: '/tools/image-compressor',
    component: 'ImageCompressor',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'compress', 'optimize']
  },
  {
    id: 'image-batch-resizer',
    name: '图片批量调整',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '批量调整多张图片尺寸，支持按像素或百分比调整，保持纵横比，多种输出格式',
    path: '/tools/image-batch-resizer',
    component: 'ImageBatchResizer',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'resize', 'batch', 'compression', 'quality']
  },
  {
    id: 'id-photo-maker',
    name: '证件照生成器',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '快速制作标准尺寸证件照，支持一寸、二寸等多种规格，可自定义背景颜色和自动抠图',
    path: '/tools/id-photo-maker',
    component: 'IdPhotoMaker',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'portrait', 'document', 'photo', 'resize']
  },
  {
    id: 'image-watermark',
    name: '图片水印',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '为图片添加文字水印或Logo水印，支持调整位置、透明度和旋转角度',
    path: '/tools/image-watermark',
    component: 'ImageWatermark',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'watermark', 'edit', 'copyright', 'branding']
  },
  {
    id: 'image-cropper',
    name: '图片裁剪器',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '裁剪、旋转和翻转图片，调整尺寸和长宽比',
    path: '/tools/image-cropper',
    component: 'ImageCropper',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'crop', 'resize', 'rotate', 'edit']
  },
  {
    id: 'gif-frame-extractor',
    name: 'GIF帧提取器',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '轻松分解GIF动画为单独的帧，支持多种输出格式，可以导出为PNG/JPEG/WebP或打包下载所有帧',
    path: '/tools/gif-frame-extractor',
    component: 'GifFrameExtractor',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'gif', 'animation', 'frames', 'convert']
  },
  { 
    id: 'svg-optimizer', 
    name: 'SVG优化器', 
    category: '图像与多媒体', 
    categoryId: 'image',
    description: '优化SVG文件大小，提升加载性能', 
    path: '/tools/svg-optimizer',
    component: 'SvgOptimizer',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['svg', 'image', 'optimize', 'design']
  },
  {
    id: 'image-filters',
    name: '图片滤镜',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '为图片应用各种效果滤镜，包括灰度、反色、褐色、模糊等',
    path: '/tools/image-filters',
    component: 'ImageFilters',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'filter', 'edit', 'effects', 'photo']
  },
  {
    id: 'image-exif-viewer',
    name: '图片元数据查看',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '查看和导出图片的EXIF元数据，包括相机型号、拍摄时间、GPS位置等信息',
    path: '/tools/image-exif-viewer',
    component: 'ImageExifViewer',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'metadata', 'exif', 'photo', 'analyze']
  },
  {
    id: 'image-to-ascii',
    name: '图片转ASCII艺术',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '将图片转换为由ASCII字符组成的艺术作品，支持多种字符集和样式设置',
    path: '/tools/image-to-ascii',
    component: 'ImageToAscii',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'ascii', 'art', 'convert', 'text']
  },
  {
    id: 'image-mosaic-generator',
    name: '图片马赛克生成器',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '将图片转换为马赛克风格，支持调整马赛克大小、颜色模式和效果，打造复古游戏风格',
    path: '/tools/image-mosaic-generator',
    component: 'ImageMosaicGenerator',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'mosaic', 'art', 'retro', 'effects']
  },
  {
    id: 'image-pixelator',
    name: '图片像素化',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '将图片转换为像素风格艺术，支持调整像素大小、颜色模式和效果，打造复古游戏风格',
    path: '/tools/image-pixelator',
    component: 'ImagePixelator',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'pixelate', 'art', 'retro', 'effects']
  },
  
  // 转换工具
  {
    id:'base64-encoder-decoder',
    name:'base64编码解码',
    category:'转换工具',
    categoryId:'convert',
    description:'base64编码解码工具',
    path:'/tools/base64-encoder-decoder',
    component:'Base64EncoderDecoder',
    icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['convert','base64','encode','decode']
  },
  { 
    id: 'csv-json-converter', 
    name: 'CSV/JSON转换', 
    category: '转换工具', 
    categoryId: 'convert',
    description: 'CSV与JSON格式互相转换工具，支持自定义分隔符', 
    path: '/tools/csv-json-converter',
    component: 'CsvJsonConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'json', 'csv', 'data']
  },
  { 
    id: 'number-converter', 
    name: '进制转换工具', 
    category: '转换工具', 
    categoryId: 'convert',
    description: '在二进制、八进制、十进制和十六进制等多种进制间转换', 
    path: '/tools/number-converter',
    component: 'NumberConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'number', 'utility']
  },
  {
    id:'timestamp-converter',
    name:'时间戳转换器',
    category:'转换工具',
    categoryId:'convert',
    description:'时间戳转换器',
    path:'/tools/timestamp-converter',
    component:'TimestampConverter',
    icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['convert','timestamp','date','time']
  },
  {
    id:'url-encode-decode',
    name:'URL编码解码',
    category:'转换工具',
    categoryId:'convert',
    description:'URL编码解码工具',
    path:'/tools/url-encode-decode',
    component:'UrlEncodeDecode',
    icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['convert','url','encode','decode']
  },
  {
    id:'xml-json-converter',
    name:'XML/JSON转换',
    category:'转换工具',
    categoryId:'convert',
    description:'XML/JSON转换工具',
    path:'/tools/xml-json-converter',
    component:'XmlJsonConverter',
    icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['convert','xml','json','data']
  },
  {
    id:'yaml-json-converter',
    name:'YAML/JSON转换',
    category:'转换工具',
    categoryId:'convert',
    description:'YAML/JSON转换工具',
    path:'/tools/yaml-json-converter',
    component:'YamlJsonConverter',
    icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['convert','yaml','json','data']
  },
  
  // 网络与协议
  {
    id: 'api-request-tool',
    name: 'API请求工具',
    category: '网络与协议工具',
    categoryId: 'network',
    description: '类似Hoppscotch的API测试工具，支持多种HTTP方法',
    path: '/tools/api-request-tool',
    component: 'ApiRequestTool',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['api', 'network', 'http', 'dev']
  },
  { 
    id: 'http-header-security-checker', 
    name: 'HTTP头安全检测', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '分析网站的HTTP响应头，检测CSP、HSTS等安全配置', 
    path: '/tools/http-header-security-checker',
    component: 'HttpHeaderSecurityChecker',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    tags: ['security', 'http', 'network', 'analyze']
  },
  { 
    id: 'request-header-editor', 
    name: '请求头批量编辑器', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '使用Headers API批量编辑、验证和格式化HTTP请求头', 
    path: '/tools/request-header-editor',
    component: 'RequestHeaderEditor',
    icon: 'M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z',
    tags: ['http', 'network', 'format']
  },
  {
    id: 'cors-generator',
    name: 'CORS生成器',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'CORS生成器',
    path: '/tools/cors-generator',
    component: 'CorsGenerator',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'cors', 'generate']
  },
  {
    id: 'curl-converter',
    name: 'Curl转换器',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'Curl转换器',
    path: '/tools/curl-converter',
    component: 'CurlConverter',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'curl', 'convert']
  },
  {
    id: 'grpc-debugger',
    name: 'gRPC调试器',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'gRPC调试器',
    path: '/tools/grpc-debugger',
    component: 'GrpcDebugger',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'grpc', 'debug']
  },
  { 
    id: 'network-speed-test', 
    name: '网络测速工具', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '测量资源加载时间，分析网络连接质量和性能', 
    path: '/tools/network-speed-test',
    component: 'NetworkSpeedTest',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    tags: ['network', 'performance', 'analyze']
  },
  { 
    id: 'page-redirect-checker', 
    name: '页面重定向检查器', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '检测和分析网页的重定向链，包括重定向类型和性能影响', 
    path: '/tools/page-redirect-checker',
    component: 'PageRedirectChecker',
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    tags: ['network', 'analyze', 'http']
  },
  { 
    id: 'http-proxy-detector', 
    name: '前端代理检测器', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '检测您的连接是否使用了HTTP代理，分析代理相关的头信息', 
    path: '/tools/http-proxy-detector',
    component: 'HttpProxyDetector',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'http', 'security', 'analyze']
  },
  { 
    id: 'user-agent-generator', 
    name: 'User-Agent生成器', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '生成各种浏览器和设备的User-Agent字符串', 
    path: '/tools/user-agent-generator',
    component: 'UserAgentGenerator',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'generate', 'http']
  },
  { 
    id: 'url-parameter-parser', 
    name: 'URL参数解析器', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '解析和查看URL查询参数，支持多种格式转换和导出选项', 
    path: '/tools/url-parameter-parser',
    component: 'UrlParamsParser',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['url', 'network', 'parse']
  },
  {
    id: 'http-status-codes',
    name: 'HTTP状态码查询',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'HTTP状态码查询',
    path: '/tools/http-status-codes',
    component: 'HttpStatusCodeLookup',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'http', 'status', 'code']
  },
  {
    id: 'ip-lookup',
    name: 'IP地址查询',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'IP地址查询',
    path: '/tools/ip-lookup',
    component: 'IpLookup',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'ip', 'lookup']
  },
  {
    id: 'mqtt-tester',
    name: 'MQTT测试器',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'MQTT测试器',
    path: '/tools/mqtt-tester',
    component: 'MqttTester',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'mqtt', 'test']
  },
  {
    id: "websocket-tester",
    name: "WebSocket测试器",
    category: "网络与协议工具",
    categoryId: "network",
    description: "WebSocket测试器",
    path: "/tools/websocket-tester",
    component: "WebSocketTester",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    tags: ['network', 'websocket', 'test']
  },
  
  // 加密安全工具
  {
    id:'password-generator',
    name:'密码生成器',
    category:'密码与安全',
    categoryId:'crypto',
    description:'密码生成器',
    path:'/tools/password-generator',
    component:'PasswordGenerator',
    icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['crypto','password','generate']
  },
  {
    id:'password-strength-checker',
    name:'密码强度检测器',
    category:'密码与安全',
    categoryId:'crypto',
    description:'密码强度检测器',
    path:'/tools/password-strength-checker',
    component:'PasswordStrengthChecker',
    icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['crypto','password','check']
  },
  {
    id:'hash-calculator',
    name:'Hash计算器',
    category:'密码与安全',
    categoryId:'crypto',
    description:'Hash计算器',
    path:'/tools/hash-calculator',
    component:'HashCalculator',
    icon:'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags:['crypto','hash','calculate']
  },
  {
    id:'rsa-crypto',
    name:'RSA加密解密',
    category:'密码与安全',
    categoryId:'crypto',
    description:'RSA加密解密',
    path:'/tools/rsa-crypto',
    component:'RsaCrypto',
    icon:'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags:['crypto','rsa','encrypt','decrypt']
  },
  {
    id:'sm2-crypto',
    name:'SM2加密解密',
    category:'密码与安全',
    categoryId:'crypto',
    description:'SM2加密解密',
    path:'/tools/sm2-crypto',
    component:'Sm2Crypto',
    icon:'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags:['crypto','sm2','encrypt','decrypt']
  },
  {
    id:'symmetric-crypto',
    name:'对称加密解密',
    category:'密码与安全',
    categoryId:'crypto',
    description:'对称加密解密',
    path:'/tools/symmetric-crypto',
    component:'SymmetricCrypto',
    icon:'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags:['crypto','symmetric','encrypt','decrypt']
  },
  { 
    id: 'hmac-calculator', 
    name: 'HMAC计算工具', 
    category: '密码与安全', 
    categoryId: 'crypto',
    description: '使用密钥生成消息认证码，支持多种哈希算法和输出格式', 
    path: '/tools/hmac-calculator',
    component: 'HmacCalculator',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['crypto', 'hash', 'security', 'generate']
  },
])
provide('allTools', allTools.value || allTools)

// 对所有工具添加路径和组件映射
allTools.value.forEach(tool => {
  if (!tool.path) {
    tool.path = `/tools/${tool.id}`
  }
  
  if (!tool.component && tool.name) {
    // 根据工具名称生成组件名称，移除空格
    const componentName = tool.name.replace(/\s+/g, '')
    tool.component = componentName
  }
  
  // 标记工具对象为非响应式
  markRaw(tool)
})

// 按标签分组的工具
const toolsByTag = computed(() => {
  const result = {}
  
  // 初始化每个标签的空数组
  allTags.value.forEach(tag => {
    result[tag.id] = []
  })
  
  // 根据标签分组工具
  allTools.value.forEach(tool => {
    tool.tags.forEach(tagId => {
      if (result[tagId]) {
        result[tagId].push(markRaw({...tool}))
      }
    })
  })
  
  return markRaw(result)
})
provide('toolsByTag', toolsByTag)

// 按分类分组的工具
const toolsByCategory = computed(() => {
  const result = {}
  
  // 初始化每个分类的空数组
  categories.value.forEach(category => {
    result[category.id] = []
  })
  
  // 根据分类分组工具
  allTools.value.forEach(tool => {
    if (result[tool.categoryId]) {
      result[tool.categoryId].push(markRaw({...tool}))
    }
  })
  
  return markRaw(result)
})
provide('toolsByCategory', toolsByCategory)

// 在组件挂载时检查本地存储中的暗黑模式设置
onMounted(() => {
  // 检查是否支持暗黑模式
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  // 从本地存储获取用户设置
  const savedMode = localStorage.getItem('darkMode')
  
  // 设置初始模式
  if (savedMode === 'true' || (savedMode === null && prefersDark)) {
    darkMode.value = true
    document.documentElement.classList.add('dark')
  }
  
  // 监听窗口尺寸变化，在小屏幕上自动折叠导航
  const handleResize = () => {
    if (window.innerWidth < 768) {
      sidebarOpen.value = false
    } else {
      sidebarOpen.value = true
    }
  }
  
  // 初始化
  handleResize()
  
  // 添加事件监听
  window.addEventListener('resize', handleResize)
})

// 监听暗黑模式变化
watch(darkMode, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>