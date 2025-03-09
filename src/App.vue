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
import { ref, provide, onMounted, watch, computed } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import SideNav from './components/layout/SideNav.vue'

// 创建侧边栏状态并提供给所有子组件
const sidebarOpen = ref(true)
provide('sidebarOpen', sidebarOpen)

// 暗黑模式状态
const darkMode = ref(false)
provide('darkMode', darkMode)

// 工具分类定义
const categories = ref([
  { id: 'dev', name: '开发工具', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { id: 'design', name: '设计工具', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
  { id: 'text', name: '文本工具', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
  { id: 'image', name: '图像工具', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { id: 'convert', name: '转换工具', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { id: 'crypto', name: '加密与安全', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { id: 'network', name: '网络工具', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
  { id: 'utility', name: '实用工具', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { id: 'format', name: '格式化工具', icon: 'M4 6h16M4 12h16M4 18h16' }
])
provide('categories', categories)

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
  { id: 'utility', name: '实用', color: 'gray' }
])
provide('allTags', allTags)

// 全局工具列表数据（重新组织分类和标签）
const allTools = ref([
  // 开发工具
  { 
    id: 1, 
    name: 'JSON格式化', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '在线JSON格式化与验证工具，支持压缩和美化', 
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['json', 'format', 'dev', 'validate']
  },
  { 
    id: 5, 
    name: '正则表达式测试', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '在线正则表达式测试与调试工具', 
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['regex', 'dev', 'text', 'validate']
  },
  { 
    id: 100, 
    name: 'JWT调试工具', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '解析、验证和调试JWT令牌的在线工具', 
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    tags: ['jwt', 'security', 'debug', 'dev']
  },
  { 
    id: 38, 
    name: '代码混淆', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '对JavaScript和CSS代码进行混淆处理，提高代码安全性', 
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['code', 'security', 'frontend', 'optimize']
  },
  {
    id: 39, 
    name: 'OpenAPI→TS客户端', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '根据OpenAPI规范自动生成TypeScript接口和API客户端代码', 
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['api', 'dev', 'frontend', 'generate']
  },
  
  // 设计工具
  { 
    id: 2, 
    name: '颜色选择器', 
    category: '设计工具', 
    categoryId: 'design',
    description: '颜色选择、转换工具，支持HEX、RGB、HSL等多种格式', 
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['color', 'design', 'convert']
  },
  { 
    id: 6, 
    name: 'CSS渐变生成器', 
    category: '设计工具', 
    categoryId: 'design',
    description: '简单易用的CSS渐变背景生成工具', 
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['css', 'design', 'gradient', 'generate', 'color']
  },
  { 
    id: 56, 
    name: '配色方案生成', 
    category: '设计工具', 
    categoryId: 'design',
    description: '基于色彩理论生成和谐的配色方案', 
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['color', 'design', 'generate']
  },
  { 
    id: 8, 
    name: 'SVG优化器', 
    category: '图像与多媒体工具', 
    categoryId: 'image',
    description: '优化SVG文件大小，提升加载性能', 
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['svg', 'image', 'optimize', 'design']
  },
  
  // 文本工具
  { 
    id: 3, 
    name: 'Markdown编辑器', 
    category: '文本工具', 
    categoryId: 'text',
    description: '简洁易用的Markdown编辑与预览工具', 
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    tags: ['markdown', 'text', 'editor']
  },
  { 
    id: 43, 
    name: '敏感词过滤', 
    category: '文本工具', 
    categoryId: 'text',
    description: '检测和过滤文本中的敏感词汇，支持自定义敏感词库', 
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['text', 'security', 'filter']
  },
  
  // 图像工具
  { 
    id: 4, 
    name: '图片压缩', 
    category: '图像与多媒体工具', 
    categoryId: 'image',
    description: '高效无损的图片压缩工具', 
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'compress', 'optimize']
  },
  
  // 转换工具
  { 
    id: 44, 
    name: 'CSV/JSON转换', 
    category: '转换工具', 
    categoryId: 'convert',
    description: 'CSV与JSON格式互相转换工具，支持自定义分隔符', 
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'json', 'csv', 'data']
  },
  { 
    id: 45, 
    name: '进制转换工具', 
    category: '转换工具', 
    categoryId: 'convert',
    description: '在二进制、八进制、十进制和十六进制等多种进制间转换', 
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'number', 'utility']
  },
  
  // 生成工具
  { 
    id: 7, 
    name: '二维码生成器', 
    category: '实用工具', 
    categoryId: 'utility',
    description: '自定义生成清晰的二维码图片', 
    icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
    tags: ['generate', 'image', 'utility']
  },
  
  // 网络工具
  { 
    id: 46, 
    name: 'User-Agent生成器', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '生成各种浏览器和设备的User-Agent字符串', 
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'generate', 'http']
  },
  { 
    id: 48, 
    name: 'URL参数解析器', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '解析和查看URL查询参数，支持多种格式转换和导出选项', 
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['url', 'network', 'parse']
  },
  { 
    id: 50, 
    name: 'API请求工具', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '类似Hoppscotch的API测试工具，支持多种HTTP方法', 
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['api', 'network', 'http', 'dev']
  },
  { 
    id: 52, 
    name: '请求头批量编辑器', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '使用Headers API批量编辑、验证和格式化HTTP请求头', 
    icon: 'M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z',
    tags: ['http', 'network', 'format']
  },
  
  // 加密安全工具
  { 
    id: 54, 
    name: 'HMAC计算工具', 
    category: '数据与加密工具', 
    categoryId: 'crypto',
    description: '使用密钥生成消息认证码，支持多种哈希算法和输出格式', 
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['crypto', 'hash', 'security', 'generate']
  },
  { 
    id: 51, 
    name: 'HTTP头安全检测', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '分析网站的HTTP响应头，检测CSP、HSTS等安全配置', 
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    tags: ['security', 'http', 'network', 'analyze']
  },
  
  // 性能工具
  { 
    id: 40, 
    name: '代码复杂度分析', 
    category: '代码处理工具', 
    categoryId: 'dev',
    description: '分析JavaScript代码的圈复杂度、Halstead度量和维护指数', 
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['code', 'analyze', 'performance', 'dev']
  },
  { 
    id: 53, 
    name: '网络测速工具', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '测量资源加载时间，分析网络连接质量和性能', 
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    tags: ['network', 'performance', 'analyze']
  },
  
  // 更多有用的工具...
  { 
    id: 41, 
    name: 'Git冲突解决模拟器', 
    category: '代码处理工具', 
    categoryId: 'dev',
    description: '模拟Git合并冲突场景，练习解决代码冲突', 
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['git', 'code', 'dev', 'utility']
  },
  { 
    id: 42, 
    name: '代码片段管理器', 
    category: '代码处理工具', 
    categoryId: 'dev',
    description: '保存和管理常用代码片段，提高开发效率', 
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['code', 'utility', 'dev']
  },
  { 
    id: 49, 
    name: '前端代理检测器', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '检测您的连接是否使用了HTTP代理，分析代理相关的头信息', 
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'http', 'security', 'analyze']
  },
  { 
    id: 55, 
    name: '页面重定向检查器', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '检测和分析网页的重定向链，包括重定向类型和性能影响', 
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    tags: ['network', 'analyze', 'http']
  },
  { 
    id: 56, 
    name: 'IP地址查询工具', 
    category: '网络与协议工具', 
    categoryId: 'network',
    description: '查询IP地址的地理位置、ISP和ASN信息，支持IPv4和IPv6', 
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'ip', 'utility']
  },
  { 
    id: 102, 
    name: '图片水印', 
    category: '图像与多媒体工具', 
    categoryId: 'image',
    description: '为图片添加自定义水印，支持调整位置、大小、颜色和透明度', 
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'watermark']
  }
])
provide('allTools', allTools)

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
        result[tagId].push(tool)
      }
    })
  })
  
  return result
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
      result[tool.categoryId].push(tool)
    }
  })
  
  return result
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