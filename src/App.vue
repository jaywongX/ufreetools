<template>
  <div class="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
    <!-- SEO 组件 -->
    <SeoHead />
    <!-- PC端 左侧导航栏 - 只在中等屏幕及以上显示 -->
    <LeftSideNav class="hidden md:block" />
      
    <!-- 右侧内容区域 -->
    <div class="flex-1 flex flex-col">
      <div class="relative">
        <TheHeader />
      </div>
      <main class="flex-1 p-1 md:p-6 overflow-auto">
        <h1 class="sr-only">{{ $t('home.title') }}</h1>
        <router-view />
        <MainAreaFooterAd />
      </main>
      <TheFooter />
    </div>
    
    <!-- 移动端 底部导航栏 - 只在中等屏幕以下显示 -->
    <ButtomSideNav class="md:hidden" />
  </div>
</template>

<script setup>
import { ref, provide, onMounted, watch, computed, markRaw } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import LeftSideNav from './components/layout/LeftSideNav.vue'
import SeoHead from './components/seo/SeoHead.vue'
import MainAreaFooterAd from './components/common/MainAreaFooterAd.vue'
import ButtomSideNav from './components/layout/ButtomSideNav.vue'
// 移除不需要的导入
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'

const route = useRoute()
const { locale, t } = useI18n()

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
    id: 'design', 
    title: '设计工具', 
    name: '设计工具',
    description: '辅助设计师创建和优化视觉作品的工具',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
  },
  { 
    id: 'convert', 
    title: '转换工具', 
    name: '转换工具',
    description: '各种文件格式之间的转换工具',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
  },
  { 
    id: 'text', 
    title: '文本编辑', 
    name: '文本编辑',
    description: '处理、编辑和转换文本内容的工具',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
  },
  { 
    id: 'image', 
    title: '图像处理', 
    name: '图像处理',
    description: '图像处理、优化和转换工具',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  { 
    id: 'network', 
    title: '网络与协议', 
    name: '网络与协议',
    description: '网络分析、调试和测试工具',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
  },
  { 
    id: 'crypto', 
    title: '密码安全', 
    name: '密码安全',
    description: '密码生成、加密、解密与安全工具',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  { 
    id: 'utility', 
    title: '实用效率', 
    name: '实用效率',
    description: '各种实用的日常工具',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  },
  { 
    id: 'surveying_and_mapping', 
    title: '测绘工具', 
    name: '测绘工具',
    description: '各种测绘工具',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
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
  { id: 'regex', name: '正则', color: 'red' },
  { id: 'api', name: 'API', color: 'blue' },
  { id: 'debug', name: '调试', color: 'orange' },
  { id: 'test', name: '测试', color: 'blue' },
  { id: 'grpc', name: 'gRPC', color: 'orange' },
  
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
  { id: 'text', name: '文本', color: 'lime' },
  { id: 'markdown', name: 'Markdown', color: 'lime' },
  { id: 'parse', name: '解析', color: 'cyan' },

  // 图像相关
  { id: 'photo', name: '照片', color: 'pink' },
  { id: 'watermark', name: '水印', color: 'pink' },
  { id: 'filter', name: '滤镜', color: 'pink' },
  { id: 'ascii', name: 'ASCII艺术', color: 'orange' },
  { id: 'art', name: '艺术效果', color: 'pink' },
  { id: 'pixelate', name: '像素化', color: 'blue' },
  { id: 'exif', name: 'EXIF', color: 'purple' },
  { id: 'retro', name: '复古', color: 'amber' },
  { id: 'gif', name: 'GIF', color: 'indigo' },
  { id: 'animation', name: '动画', color: 'emerald' },
  { id: 'frames', name: '帧', color: 'lime' },
  { id: 'csv', name: 'CSV', color: 'lime' },
  
  // 安全相关
  { id: 'crypto', name: '加密', color: 'indigo' },
  { id: 'security', name: '安全', color: 'amber' },
  { id: 'hash', name: '哈希', color: 'pink' },
  { id: 'jwt', name: 'JWT', color: 'amber' },
  { id: 'password', name: '密码', color: 'rose' },
  { id: 'rsa', name: 'RSA', color: 'amber' },
  { id: 'sm2', name: 'SM2', color: 'pink' },
  { id: 'encrypt', name: '加密', color: 'rose' },
  { id: 'decrypt', name: '解密', color: 'teal' },
  { id: 'check', name: '检查', color: 'teal' },
  
  // 网络相关
  { id: 'network', name: '网络', color: 'teal' },
  { id: 'http', name: 'HTTP', color: 'rose' },
  { id: 'url', name: 'URL', color: 'teal' },
  { id: 'lookup', name: '查找', color: 'emerald' },
  { id: 'status', name: '状态', color: 'amber' },
  { id: 'ip', name: 'IP', color: 'pink' },
  { id: 'html', name: 'HTML', color: 'pink' },
  
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
  { id: 'effects', name: '特效', color: 'pink' },
  { id: 'copyright', name: '版权', color: 'amber' },
  { id: 'branding', name: '品牌', color: 'indigo' },
  { id: 'compression', name: '压缩', color: 'green' },
  { id: 'metadata', name: '元数据', color: 'indigo' },
  { id: 'number', name: '数字', color: 'green' },
  { id: 'latex', name: 'LaTeX', color: 'purple' },
  { id: 'math', name: '数学', color: 'blue' },
  { id: 'formula', name: '公式', color: 'indigo' },
  { id: 'cookie', name: 'Cookie', color: 'amber' },
  { id: 'browser', name: '浏览器', color: 'orange' },
  { id: 'privacy', name: '隐私', color: 'rose' },
  { id: 'time', name: '时间', color: 'cyan' },
  { id: 'date', name: '日期', color: 'teal' },
  { id: 'countdown', name: '倒计时', color: 'yellow' },
  { id: 'productivity', name: '生产力', color: 'emerald' },
  { id: 'timer', name: '计时器', color: 'rose' },
  { id: 'pomodoro', name: '番茄工作法', color: 'red' },
  { id: 'finance', name: '金融', color: 'green' },
  { id: 'loan', name: '贷款', color: 'emerald' },
  { id: 'money', name: '货币', color: 'lime' },
  { id: 'tax', name: '税务', color: 'indigo' },
  { id: 'salary', name: '薪资', color: 'purple' },
  { id: 'health', name: '健康', color: 'teal' },
  { id: 'fitness', name: '健身', color: 'cyan' },
  { id: 'calendar', name: '日历', color: 'amber' },
  { id: 'holiday', name: '节假日', color: 'orange' },
  { id: 'date', name: '日期', color: 'yellow' },
  { id: 'planner', name: '规划', color: 'blue' },
  { id: 'task', name: '任务', color: 'indigo' },
  { id: 'organization', name: '组织', color: 'sky' },
  { id: 'currency', name: '货币', color: 'emerald' },
  { id: 'exchange', name: '汇率', color: 'teal' },
  { id: 'converter', name: '转换器', color: 'cyan' },
  { id: 'drawing', name: '绘图', color: 'rose' },
  { id: 'sketch', name: '草图', color: 'pink' },
  { id: 'art', name: '艺术', color: 'fuchsia' },
  { id: 'creative', name: '创意', color: 'purple' },
  { id: 'timezone', name: '时区', color: 'blue' },
  { id: 'world', name: '世界', color: 'purple' },
  { id: 'clock', name: '时钟', color: 'fuchsia' },
  { id: 'global', name: '全球', color: 'pink' },
  { id: 'international', name: '国际', color: 'rose' },
  { id: 'travel', name: '旅行', color: 'blue' },
  { id: 'budget', name: '预算', color: 'emerald' },
  { id: 'planning', name: '规划', color: 'violet' },
  { id: 'finance', name: '财务', color: 'green' },
  { id: 'expense', name: '支出', color: 'red' },
  { id: 'name', name: '名字', color: 'indigo' },
  { id: 'generator', name: '生成器', color: 'purple' },
  { id: 'random', name: '随机', color: 'fuchsia' },
  { id: 'culture', name: '文化', color: 'pink' },
  { id: 'writing', name: '写作', color: 'orange' },
  { id: 'character', name: '角色', color: 'amber' },
])
provide('allTags', allTags)

// 全局工具列表数据（重新组织分类和标签）
// const allTools = ref([
const allTools = computed(() => [
  // 开发工具
  { 
    id: 'json-formatter', 
    name: t('tools.json-formatter.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.json-formatter.description'),
    path: '/tools/json-formatter',
    component: 'JSONFormatter',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['json', 'format', 'dev', 'validate']
  },
  { 
    id: 'regex-tester', 
    name: t('tools.regex-tester.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.regex-tester.description'),
    path: '/tools/regex-tester',
    component: 'RegexTester',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['regex', 'test', 'dev', 'validate']
  },
  // { 
  //   id: 'sql-formatter', 
  //   name: t('tools.sql-formatter.name'),
  //   category: t(`categories.dev.title`),
  //   categoryId: 'dev',
  //   description: t('tools.sql-formatter.description'),
  //   path: '/tools/sql-formatter',
  //   component: 'SQLFormatter',
  //   icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  //   tags: ['sql','format','dev','validate']
  // },
  { 
    id: 'git-conflict-resolver', 
    name: t('tools.git-conflict-resolver.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.git-conflict-resolver.description'),
    path: '/tools/git-conflict-resolver',
    component: 'GitConflictResolver',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['git', 'code', 'dev', 'utility']
  },
  // { 
  //   id: 'javascript-formatter', 
  //   name: t('tools.javascript-formatter.name'),
  //   category: t(`categories.dev.title`),
  //   categoryId: 'dev',
  //   description: t('tools.javascript-formatter.description'),
  //   path: '/tools/javascript-formatter',
  //   component: 'JavaScriptFormatter',
  //   icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  //   tags: ['javascript','format','dev','validate']
  // },
  // { 
  //   id: 'code-beautifier', 
  //   name: t('tools.code-beautifier.name'),
  //   category: t(`categories.dev.title`),
  //   categoryId: 'dev',
  //   description: t('tools.code-beautifier.description'),
  //   path: '/tools/code-beautifier',
  //   component: 'CodeBeautifier',
  //   icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  //   tags: ['code','dev','highlight']
  // },
  { 
    id: 'html-entity-encoder', 
    name: t('tools.html-entity-encoder.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.html-entity-encoder.description'),
    path: '/tools/html-entity-encoder',
    component: 'HtmlEntityEncoder',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['html','dev','encode']
  },
  { 
    id: 'jwt-debugger', 
    name: t('tools.jwt-debugger.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.jwt-debugger.description'),
    path: '/tools/jwt-debugger',
    component: 'JwtDebugger',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    tags: ['jwt', 'security', 'debug', 'dev']
  },
  { 
    id: 'openapi-generator', 
    name: t('tools.openapi-generator.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.openapi-generator.description'),
    path: '/tools/openapi-generator',
    component: 'OpenApiGenerator',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['api', 'dev', 'frontend', 'generate']
  },
  { 
    id: 'mock-api-generator', 
    name: t('tools.mock-api-generator.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.mock-api-generator.description'),
    path: '/tools/mock-api-generator',
    component: 'MockAPIGenerator',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['api','dev','mock']
  },
  { 
    id: 'code-complexity-analyzer', 
    name: t('tools.code-complexity-analyzer.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.code-complexity-analyzer.description'),
    path: '/tools/code-complexity-analyzer',
    component: 'CodeComplexity',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['code', 'analyze', 'performance', 'dev']
  },
  { 
    id: 'code-diff', 
    name: t('tools.code-diff.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.code-diff.description'),
    path: '/tools/code-diff',
    component: 'CodeDiff',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['code', 'utility', 'dev']
  },
  // { 
  //   id: 'code-formatter', 
  //   name: t('tools.code-formatter.name'),
  //   category: t(`categories.dev.title`),
  //   categoryId: 'dev',
  //   description: t('tools.code-formatter.description'),
  //   path: '/tools/code-formatter',
  //   component: 'CodeFormatter',
  //   icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  //   tags: ['code','format','dev','validate']
  // },
  { 
    id: 'code-obfuscator', 
    name: t('tools.code-obfuscator.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.code-obfuscator.description'),
    path: '/tools/code-obfuscator',
    component: 'CodeObfuscator',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['code', 'security', 'frontend', 'optimize']
  },
  {
     id: 'uuid-generator',
     name: t('tools.uuid-generator.name'),
     category: t(`categories.dev.title`),
     categoryId: 'dev',
     description: t('tools.uuid-generator.description'),
     path: '/tools/uuid-generator',
     component: 'UuidGenerator',
     icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
     tags: ['dev', 'generate']
   },
  {
     id: 'html-formatter',
     name: t('tools.html-formatter.name'),
     category: t(`categories.dev.title`),
     categoryId: 'dev',
     description: t('tools.html-formatter.description'),
     path: '/tools/html-formatter',
     component: 'HtmlFormatter',
     icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
     tags: ['html','dev','format']
   },

  // 设计工具
  { 
    id: 'qr-code-generator', 
    name: t('tools.qr-code-generator.name'),
    category: t(`categories.design.title`),
    categoryId: 'design',
    description: t('tools.qr-code-generator.description'),
    path: '/tools/qr-code-generator',
    component: 'QRCodeGenerator',
    icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
    tags: ['generate', 'image', 'utility']
  },
  { 
    id: 'color-picker', 
    name: t('tools.color-picker.name'),
    category: t(`categories.design.title`),
    categoryId: 'design',
    description: t('tools.color-picker.description'),
    path: '/tools/color-picker',
    component: 'ColorPicker',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['color', 'design', 'ui', 'hex', 'rgb']
  },
  { 
    id: 'color-scheme-generator', 
    name: t('tools.color-scheme-generator.name'),
    category: t(`categories.design.title`),
    categoryId: 'design',
    description: t('tools.color-scheme-generator.description'),
    path: '/tools/color-scheme-generator',
    component: 'ColorSchemeGenerator',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['color', 'design', 'generate']
  },
  { 
    id: 'css-gradient-generator', 
    name: t('tools.css-gradient-generator.name'),
    category: t(`categories.design.title`),
    categoryId: 'design',
    description: t('tools.css-gradient-generator.description'),
    path: '/tools/css-gradient-generator',
    component: 'CssGradientGenerator',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['css', 'design', 'gradient', 'generate', 'color']
  },
  {
    id: 'flowchart-generator',
    name: t('tools.flowchart-generator.name'),
    category: t(`categories.design.title`),
    categoryId: 'design', 
    description: t('tools.flowchart-generator.description'),
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
  { 
    id: 'drawing-board', 
    name: t('tools.drawing-board.name'),
    category: t(`categories.design.title`),
    categoryId: 'design',
    description: t('tools.drawing-board.description'),
    path: '/tools/drawing-board',
    component: 'DrawingBoard',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    tags: ['design', 'drawing', 'sketch', 'art', 'creative']
  },

  // 文本与编辑
  { 
    id: 'markdown-editor', 
    name: t('tools.markdown-editor.name'),
    category: t(`categories.text.title`),
    categoryId: 'text',
    description: t('tools.markdown-editor.description'),
    path: '/tools/markdown-editor',
    component: 'MarkdownEditor',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    tags: ['markdown', 'text', 'editor']
  },
  {
    id:'markdown-to-html',
    name:'Markdown转HTML',
    category:'文本编辑',
    categoryId:'text',
    description:'将Markdown文本转换为HTML代码',
    path:'/tools/markdown-to-html',
    component:'MarkdownToHtml',
    icon:'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    tags:['markdown','text','editor']
  },
  // {
  //   id:'css-formatter',
  //   name:'CSS格式化',
  //   category:'文本与编辑',
  //   categoryId:'text',
  //   description:'格式化CSS代码，提升可读性',
  //   path:'/tools/css-formatter',
  //   component:'CssFormatter',
  //   icon:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  //   tags:['css','text','format']
  // },
  { 
    id: 'sensitive-word-filter', 
    name: t('tools.sensitive-word-filter.name'),
    category: t(`categories.text.title`),
    categoryId: 'text',
    description: t('tools.sensitive-word-filter.description'),
    path: '/tools/sensitive-word-filter',
    component: 'SensitiveWordFilter',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['text', 'security', 'filter']
  },
  {
    id: 'word-shuffler',
    name: t('tools.word-shuffler.name'),
    category: t(`categories.text.title`),
    categoryId: 'text',
    description: t('tools.word-shuffler.description'),
    path: '/tools/word-shuffler',
    component: 'WordShuffler',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    tags: ['text', 'utility', 'random', 'word', 'shuffle', 'edit']
  },
  {
    id: 'asn1-structure-parser',
    name: t('tools.asn1-structure-parser.name'),
    category: t(`categories.text.title`),
    categoryId: 'text',
    description: t('tools.asn1-structure-parser.description'),
    path: '/tools/asn1-structure-parser',
    component: 'Asn1StructureParser', 
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    tags: ['asn1', 'parser', 'structure', 'visualize', 'decode']
  },
  
  // 图像与多媒体
  {
    id: 'image-compressor',
    name: t('tools.image-compressor.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.image-compressor.description'),
    path: '/tools/image-compressor',
    component: 'ImageCompressor',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'compress', 'optimize']
  },
  {
    id: 'image-batch-resizer',
    name: t('tools.image-batch-resizer.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.image-batch-resizer.description'),
    path: '/tools/image-batch-resizer',
    component: 'ImageBatchResizer',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'resize', 'compression', 'quality']
  },
  {
    id: 'image-color-extractor',
    name: t('tools.image-color-extractor.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.image-color-extractor.description'),
    path: '/tools/image-color-extractor',
    component: 'ImageColorExtractor',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'color', 'extract', 'palette', 'design']
  },
  // {
  //   id: 'id-photo-maker',
  //   name: t('tools.id-photo-maker.name'),
  //   category: t(`categories.image.title`),
  //   categoryId: 'image',
  //   description: t('tools.id-photo-maker.description'),
  //   path: '/tools/id-photo-maker',
  //   component: 'IdPhotoMaker',
  //   icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  //   tags: ['image', 'portrait', 'document', 'photo', 'resize']
  // },
  {
    id: 'image-watermark',
    name: t('tools.image-watermark.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.image-watermark.description'),
    path: '/tools/image-watermark',
    component: 'ImageWatermark',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'watermark', 'edit', 'copyright', 'branding']
  },
  {
    id: 'image-cropper',
    name: t('tools.image-cropper.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.image-cropper.description'),
    path: '/tools/image-cropper',
    component: 'ImageCropper',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'crop', 'resize', 'rotate', 'edit']
  },
  {
    id: 'gif-frame-extractor',
    name: t('tools.gif-frame-extractor.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.gif-frame-extractor.description'),
    path: '/tools/gif-frame-extractor',
    component: 'GifFrameExtractor',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'gif', 'animation', 'frames', 'convert']
  },
  { 
    id: 'svg-optimizer', 
    name: t('tools.svg-optimizer.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.svg-optimizer.description'),
    path: '/tools/svg-optimizer',
    component: 'SvgOptimizer',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['svg', 'image', 'optimize', 'design']
  },
  {
    id: 'image-filters',
    name: t('tools.image-filters.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.image-filters.description'),
    path: '/tools/image-filters',
    component: 'ImageFilters',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'filter', 'edit', 'effects', 'photo']
  },
  {
    id: 'image-exif-viewer',
    name: t('tools.image-exif-viewer.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.image-exif-viewer.description'),
    path: '/tools/image-exif-viewer',
    component: 'ImageExifViewer',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'metadata', 'exif', 'photo', 'analyze']
  },
  {
    id: 'image-to-ascii',
    name: t('tools.image-to-ascii.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.image-to-ascii.description'),
    path: '/tools/image-to-ascii',
    component: 'ImageToAscii',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'ascii', 'art', 'convert', 'text']
  },
  {
    id: 'image-mosaic-generator',
    name: t('tools.image-mosaic-generator.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.image-mosaic-generator.description'),
    path: '/tools/image-mosaic-generator',
    component: 'ImageMosaicGenerator',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'mosaic', 'art', 'retro', 'effects']
  },
  {
    id: 'image-pixelator',
    name: t('tools.image-pixelator.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.image-pixelator.description'),
    path: '/tools/image-pixelator',
    component: 'ImagePixelator',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'pixelate', 'art', 'retro', 'effects']
  },
  {
    id: 'vertical-to-horizontal-image',
    name: t('tools.vertical-to-horizontal-image.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.vertical-to-horizontal-image.description'),
    path: '/tools/vertical-to-horizontal-image',
    component: 'VerticalToHorizontalImage',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'convert', 'rotate', 'edit', 'utility']
  },
  {
    id: 'horizontal-to-vertical-image',
    name: t('tools.horizontal-to-vertical-image.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.horizontal-to-vertical-image.description'),
    path: '/tools/horizontal-to-vertical-image',
    component: 'HorizontalToVerticalImage',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'convert', 'rotate', 'edit', 'utility']
  },
  {
    id: 'instagram-post-generator',
    name: t('tools.instagram-post-generator.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.instagram-post-generator.description'),
    path: '/tools/instagram-post-generator',
    component: 'InstagramPostGenerator',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    tags: ['image', 'social', 'media', 'post', 'generator', 'instagram', 'design']
  },
  {
    id: 'jfif-jpg-converter',
    name: t('tools.jfif-jpg-converter.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.jfif-jpg-converter.description'),
    path: '/tools/jfif-jpg-converter',
    component: 'JfifJpgConverter',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'convert', 'jpg', 'jfif', 'jpeg', 'format', 'utility']
  },
  {
    id: 'jpg-jfif-converter',
    name: t('tools.jpg-jfif-converter.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.jpg-jfif-converter.description'),
    path: '/tools/jpg-jfif-converter',
    component: 'JpgJfifConverter',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'convert', 'jpg', 'jfif', 'jpeg', 'format', 'utility']
  },
  {
    id: 'seal-generator',
    name: t('tools.seal-generator.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.seal-generator.description'),
    path: '/tools/seal-generator',
    component: 'SealGenerator',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'seal', 'stamp', 'generator', 'creative', 'logo'],
  },
  
  // 转换工具
  {
    id:'base64-encoder-decoder',
    name: t('tools.base64-encoder-decoder.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.base64-encoder-decoder.description'),
    path: '/tools/base64-encoder-decoder',
    component: 'Base64EncoderDecoder',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['convert','base64','encode','decode']
  },
  { 
    id: 'csv-json-converter', 
    name: t('tools.csv-json-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.csv-json-converter.description'),
    path: '/tools/csv-json-converter',
    component: 'CsvJsonConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'json', 'csv', 'data']
  },
  { 
    id: 'number-converter', 
    name: t('tools.number-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.number-converter.description'),
    path: '/tools/number-converter',
    component: 'NumberConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'number', 'utility']
  },
  {
    id:'timestamp-converter',
    name: t('tools.timestamp-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.timestamp-converter.description'),
    path: '/tools/timestamp-converter',
    component: 'TimestampConverter',
    icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['convert','timestamp','date','time']
  },
  {
    id:'url-encode-decode',
    name: t('tools.url-encode-decode.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.url-encode-decode.description'),
    path: '/tools/url-encode-decode',
    component: 'UrlEncodeDecode',
    icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['convert','url','encode','decode']
  },
  {
    id:'xml-json-converter',
    name: t('tools.xml-json-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.xml-json-converter.description'),
    path: '/tools/xml-json-converter',
    component: 'XmlJsonConverter',
    icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['convert','xml','json','data']
  },
  {
    id:'xml-formatter',
    name: t('tools.xml-formatter.name'),
    category:t(`categories.convert.title`),
    categoryId:'convert',
    description: t('tools.xml-formatter.description'),
    path:'/tools/xml-formatter',
    component:'XmlFormatter',
    icon:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    tags:['xml','text','format']
  },
  {
    id:'yaml-json-converter',
    name: t('tools.yaml-json-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.yaml-json-converter.description'),
    path: '/tools/yaml-json-converter',
    component: 'YamlJsonConverter',
    icon:'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['convert','yaml','json','data']
  },
  { 
    id: 'timezone-converter', 
    name: t('tools.timezone-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.timezone-converter.description'),
    path: '/tools/timezone-converter',
    component: 'TimezoneConverter',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    tags: ['convert', 'time', 'timezone', 'world', 'clock', 'global', 'international', 'travel', 'converter']
  },
  {
    id: 'hex-and-calculator',
    name: t('tools.hex-and-calculator.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.hex-and-calculator.description'),
    path: '/tools/hex-and-calculator',
    component: 'HexAndCalculator',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    tags: ['calculator', 'hex', 'utility', 'number', 'bitwise', 'bitwise-operations', 'and'],
  },
  {
    id: 'hexadecimal-case-converter',
    name: t('tools.hexadecimal-case-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.hexadecimal-case-converter.description'),
    path: '/tools/hexadecimal-case-converter',
    component: 'HexadecimalCaseConverter',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    tags: ['hex', 'converter', 'text', 'format', 'case', 'code', 'utility'],
  },
  {
    id: 'base64-hex-converter',
    name: t('tools.base64-hex-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.base64-hex-converter.description'),
    path: '/tools/base64-hex-converter',
    component: 'Base64HexConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'base64', 'hex', 'encode', 'decode', 'utility']
  },
  
  // 网络与协议
  { 
    id: 'http-header-security-checker', 
    name: t('tools.http-header-security-checker.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.http-header-security-checker.description'),
    path: '/tools/http-header-security-checker',
    component: 'HttpHeaderSecurityChecker',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    tags: ['security', 'http', 'network', 'analyze']
  },
  { 
    id: 'request-header-editor', 
    name: t('tools.request-header-editor.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.request-header-editor.description'),
    path: '/tools/request-header-editor',
    component: 'RequestHeaderEditor',
    icon: 'M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z',
    tags: ['http', 'network', 'format']
  },
  {
    id: 'cors-generator',
    name: t('tools.cors-generator.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.cors-generator.description'),
    path: '/tools/cors-generator',
    component: 'CorsGenerator',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'cors', 'generate']
  },
  {
    id: 'curl-converter',
    name: t('tools.curl-converter.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.curl-converter.description'),
    path: '/tools/curl-converter',
    component: 'CurlConverter',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'curl', 'convert']
  },
  {
    id: 'grpc-debugger',
    name: t('tools.grpc-debugger.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.grpc-debugger.description'),
    path: '/tools/grpc-debugger',
    component: 'GrpcDebugger',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'grpc', 'debug']
  },
  // { 
  //   id: 'network-speed-test', 
  //   name: t('tools.network-speed-test.name'),
  //   category: t(`categories.network.title`),
  //   categoryId: 'network',
  //   description: t('tools.network-speed-test.description'),
  //   path: '/tools/network-speed-test',
  //   component: 'NetworkSpeedTest',
  //   icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  //   tags: ['network', 'performance', 'analyze']
  // },
  // { 
  //   id: 'page-redirect-checker', 
  //   name: t('tools.page-redirect-checker.name'),
  //   category: t(`categories.network.title`),
  //   categoryId: 'network',
  //   description: t('tools.page-redirect-checker.description'),
  //   path: '/tools/page-redirect-checker',
  //   component: 'PageRedirectChecker',
  //   icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
  //   tags: ['network', 'analyze', 'http']
  // },
  { 
    id: 'http-proxy-detector', 
    name: t('tools.http-proxy-detector.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.http-proxy-detector.description'),
    path: '/tools/http-proxy-detector',
    component: 'HttpProxyDetector',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'http', 'security', 'analyze']
  },
  { 
    id: 'user-agent-generator', 
    name: t('tools.user-agent-generator.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.user-agent-generator.description'),
    path: '/tools/user-agent-generator',
    component: 'UserAgentGenerator',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'generate', 'http']
  },
  {
    id: 'user-agent-parser',
    name: t('tools.user-agent-parser.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.user-agent-parser.description'),
    path: '/tools/user-agent-parser',
    component: 'UserAgentParser',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'user-agent', 'parser']
  },
  { 
    id: 'url-params-parser', 
    name: t('tools.url-params-parser.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.url-params-parser.description'),
    path: '/tools/url-params-parser',
    component: 'UrlParamsParser',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['url', 'network', 'parse']
  },
  {
    id: 'http-status-code-lookup',
    name: t('tools.http-status-code-lookup.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.http-status-code-lookup.description'),
    path: '/tools/http-status-code-lookup',
    component: 'HttpStatusCodeLookup',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'http', 'status', 'code']
  },
  {
    id: 'ip-lookup',
    name: t('tools.ip-lookup.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.ip-lookup.description'),
    path: '/tools/ip-lookup',
    component: 'IpLookup',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'ip', 'lookup']
  },
  {
    id: 'mqtt-tester',
    name: t('tools.mqtt-tester.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.mqtt-tester.description'),
    path: '/tools/mqtt-tester',
    component: 'MqttTester',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['network', 'mqtt', 'test']
  },
  {
    id: "websocket-tester",
    name: t('tools.websocket-tester.name'),
    category: t(`categories.network.title`),
    categoryId: "network",
    description: t('tools.websocket-tester.description'),
    path: "/tools/websocket-tester",
    component: "WebSocketTester",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    tags: ['network', 'websocket', 'test']
  },
  { 
    id: 'cookie-manager', 
    name: t('tools.cookie-manager.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.cookie-manager.description'),
    path: '/tools/cookie-manager',
    component: 'CookieManager',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'http', 'browser', 'cookie', 'privacy', 'security']
  },
  
  // 加密安全工具
  {
    id:'password-generator',
    name: t('tools.password-generator.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.password-generator.description'),
    path: '/tools/password-generator',
    component: 'PasswordGenerator',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['crypto','password','generate']
  },
  {
    id:'password-strength-checker',
    name: t('tools.password-strength-checker.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.password-strength-checker.description'),
    path: '/tools/password-strength-checker',
    component: 'PasswordStrengthChecker',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags:['crypto','password','check']
  },
  {
    id:'hash-calculator',
    name: t('tools.hash-calculator.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.hash-calculator.description'),
    path: '/tools/hash-calculator',
    component: 'HashCalculator',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags:['crypto','hash']
  },
  // {
  //   id:'rsa-crypto',
  //   name: t('tools.rsa-crypto.name'),
  //   category: t(`categories.crypto.title`),
  //   categoryId: 'crypto',
  //   description: t('tools.rsa-crypto.description'),
  //   path: '/tools/rsa-crypto',
  //   component: 'RsaCrypto',
  //   icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  //   tags:['crypto','rsa','encrypt','decrypt']
  // },
  // {
  //   id:'sm2-crypto',
  //   name: t('tools.sm2-crypto.name'),
  //   category: t(`categories.crypto.title`),
  //   categoryId: 'crypto',
  //   description: t('tools.sm2-crypto.description'),
  //   path: '/tools/sm2-crypto',
  //   component: 'Sm2Crypto',
  //   icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  //   tags:['crypto','sm2','encrypt','decrypt']
  // },
  {
    id:'symmetric-crypto',
    name: t('tools.symmetric-crypto.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.symmetric-crypto.description'),
    path: '/tools/symmetric-crypto',
    component: 'SymmetricCrypto',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags:['crypto','encrypt','decrypt']
  },
  { 
    id: 'hmac-calculator', 
    name: t('tools.hmac-calculator.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.hmac-calculator.description'),
    path: '/tools/hmac-calculator',
    component: 'HmacCalculator',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['crypto', 'hash', 'security', 'generate']
  },
  { 
    id: 'x509-certificate-decoder', 
    name: t('tools.x509-certificate-decoder.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.x509-certificate-decoder.description'),
    path: '/tools/x509-certificate-decoder',
    component: 'X509CertificateDecoder',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['crypto', 'security', 'certificate', 'x509', 'ssl', 'tls', 'pki', 'analyze', 'decoder']
  },
  { 
    id: 'rsa-encrypt-decrypt', 
    name: t('tools.rsa-encrypt-decrypt.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.rsa-encrypt-decrypt.description'),
    path: '/tools/rsa-encrypt-decrypt',
    component: 'RsaEncryptDecrypt',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['crypto', 'rsa', 'encrypt', 'decrypt', 'security', 'key', 'pkcs', 'pem', 'certificate']
  },
  { 
    id: 'sm2-encrypt-decrypt', 
    name: t('tools.sm2-encrypt-decrypt.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.sm2-encrypt-decrypt.description'),
    path: '/tools/sm2-encrypt-decrypt',
    component: 'Sm2EncryptDecrypt',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['crypto', 'sm2', 'encrypt', 'decrypt', 'security', 'key', 'pem', 'certificate']
  },
  { 
    id: 'rsa-key-pair-generator', 
    name: t('tools.rsa-key-pair-generator.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.rsa-key-pair-generator.description'),
    path: '/tools/rsa-key-pair-generator',
    component: 'RsaKeyPairGenerator',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['rsa', 'crypto', 'security', 'key', 'encrypt', 'decrypt', 'generator', 'keypair']
  },
  { 
    id: 'sm2-key-pair-generator', 
    name: t('tools.sm2-key-pair-generator.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.sm2-key-pair-generator.description'),
    path: '/tools/sm2-key-pair-generator',
    component: 'Sm2KeyPairGenerator',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['sm2', 'crypto', 'security', 'key', 'encrypt', 'decrypt', 'generator', 'keypair']
  },
  { 
    id: 'rsa-signature-verifier', 
    name: t('tools.rsa-signature-verifier.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.rsa-signature-verifier.description'),
    path: '/tools/rsa-signature-verifier',
    component: 'RsaSignatureVerifier',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['rsa', 'crypto', 'security', 'signature', 'verify', 'sign', 'certificate', 'hash']
  },
  { 
    id: 'sm2-signature-verifier', 
    name: t('tools.sm2-signature-verifier.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.sm2-signature-verifier.description'),
    path: '/tools/sm2-signature-verifier',
    component: 'Sm2SignatureVerifier',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['sm2', 'crypto', 'security', 'signature', 'verify', 'sign', 'certificate', 'hash']
  },

  // 实用与效率
  { 
    id: 'latex-formula-generator', 
    name: t('tools.latex-formula-generator.name'),
    category: t(`categories.text.title`),
    categoryId: 'utility',
    description: t('tools.latex-formula-generator.description'),
    path: '/tools/latex-formula-generator',
    component: 'LatexFormulaGenerator',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    tags: ['text', 'latex', 'math', 'formula', 'editor']
  },
  { 
    id: 'countdown-generator', 
    name: t('tools.countdown-generator.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.countdown-generator.description'),
    path: '/tools/countdown-generator',
    component: 'CountdownGenerator',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['utility', 'time', 'date', 'countdown']
  },
  { 
    id: 'pomodoro-timer', 
    name: t('tools.pomodoro-timer.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.pomodoro-timer.description'),
    path: '/tools/pomodoro-timer',
    component: 'PomodoroTimer',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    tags: ['utility', 'time', 'productivity', 'timer', 'pomodoro']
  },
  { 
    id: 'loan-calculator', 
    name: t('tools.loan-calculator.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.loan-calculator.description'),
    path: '/tools/loan-calculator',
    component: 'LoanCalculator',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    tags: ['utility', 'calculator', 'finance', 'loan', 'money']
  },
  { 
    id: 'income-tax-calculator', 
    name: t('tools.income-tax-calculator.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.income-tax-calculator.description'),
    path: '/tools/income-tax-calculator',
    component: 'IncomeTaxCalculator',
    icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z',
    tags: ['utility', 'calculator', 'finance', 'tax', 'salary', 'money']
  },
  { 
    id: 'bmi-calculator', 
    name: t('tools.bmi-calculator.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.bmi-calculator.description'),
    path: '/tools/bmi-calculator',
    component: 'BmiCalculator',
    icon: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
    tags: ['utility', 'calculator', 'health', 'fitness']
  },
  { 
    id: 'holiday-calendar', 
    name: t('tools.holiday-calendar.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.holiday-calendar.description'),
    path: '/tools/holiday-calendar',
    component: 'HolidayCalendar',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['utility', 'calendar', 'holiday', 'date']
  },
  { 
    id: 'todo-list', 
    name: t('tools.todo-list.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.todo-list.description'),
    path: '/tools/todo-list',
    component: 'TodoList',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    tags: ['utility', 'productivity', 'planner', 'task', 'organization']
  },
  { 
    id: 'currency-converter', 
    name: t('tools.currency-converter.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.currency-converter.description'),
    path: '/tools/currency-converter',
    component: 'CurrencyConverter',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    tags: ['utility', 'finance', 'currency', 'converter', 'exchange', 'calculator', 'money']
  },
  { 
    id: 'name-generator', 
    name: t('tools.name-generator.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.name-generator.description'),
    path: '/tools/name-generator',
    component: 'NameGenerator',
    icon: 'M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['utility', 'creative', 'name', 'generator', 'random', 'culture', 'writing', 'character']
  },
  { 
    id: 'travel-budget-planner', 
    name: t('tools.travel-budget-planner.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.travel-budget-planner.description'),
    path: '/tools/travel-budget-planner',
    component: 'TravelBudgetPlanner',
    icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z',
    tags: ['utility', 'travel', 'budget', 'planning', 'finance', 'calculator', 'expense']
  },
  {
    id: 'personal-account-book',
    name: t('tools.personal-account-book.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.personal-account-book.description'),
    path: '/tools/personal-account-book',
    component: 'PersonalAccountBook',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    tags: ['utility', 'finance', 'accounting', 'budget', 'money', 'expense', 'tracker', 'personal', 'account', 'book']
  },
  {
    id: 'cash-app-fee-calculator',
    name: t('tools.cash-app-fee-calculator.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.cash-app-fee-calculator.description'),
    path: '/tools/cash-app-fee-calculator',
    component: 'CashAppFeeCalculator',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    tags: ['utility', 'finance', 'cash', 'app', 'fee', 'calculator', 'money']
  },
  { 
    id: 'id-number-generator', 
    name: t('tools.id-number-generator.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.id-number-generator.description'),
    path: '/tools/id-number-generator',
    component: 'IdNumberGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['utility', 'generator', 'identity', 'china', 'test', 'random']
  },
  { 
    id: 'unified-credit-code-generator', 
    name: t('tools.unified-credit-code-generator.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.unified-credit-code-generator.description'),
    path: '/tools/unified-credit-code-generator',
    component: 'UnifiedCreditCodeGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['utility', 'generator', 'china', 'business', 'test', 'validation', 'code', 'identifier']
  },

  // 测绘工具
  {
    id: 'coordinate-converter',
    name: t('tools.coordinate-converter.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.coordinate-converter.description'),
    path: '/tools/coordinate-converter',
    component: 'CoordinateConverter',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['coordinate', 'conversion', 'gis', 'mapping', 'location', 'utility', 'geography']
  },
  { 
    id: 'gps-track-replay', 
    name: t('tools.gps-track-replay.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.gps-track-replay.description'),
    path: '/tools/gps-track-replay',
    component: 'GpsTrackReplay',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['gps', 'track', 'map', 'navigation', 'location', 'geolocation', 'gpx', 'kml', 'geojson', 'visualization', 'replay', 'route', 'surveying_and_mapping']
  },
  {
    id: 'gaussian-projection',
    name: t('tools.gaussian-projection.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.gaussian-projection.description'),
    path: '/tools/gaussian-projection',
    component: 'GaussianProjection',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['coordinate', 'conversion', 'gis', 'mapping', 'geodetic', 'geography', 'geolocation', 'location', 'projection', 'surveying_and_mapping', 'gauss', 'gaussian']
  },
])
provide('allTools', allTools)

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

// 当路由变化时，根据路由参数更新语言
watch(() => route.params.lang, (newLang) => {
  if (newLang && locale.value !== newLang && ['zh', 'en'].includes(newLang)) {
    locale.value = newLang
    localStorage.setItem('userLanguage', newLang)
  }
})
</script>