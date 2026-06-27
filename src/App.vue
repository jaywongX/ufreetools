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
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { setLanguage } from './main';
import { supportedLanguages } from './config/languages';

const route = useRoute()
const { locale, t } = useI18n()

// 创建侧边栏状态并提供给所有子组件
const sidebarOpen = ref(true)
provide('sidebarOpen', sidebarOpen)

const darkMode = ref(true)
provide('darkMode', darkMode)

// 工具分类定义
const categories = ref([
  {
    id: 'ai',
    title: 'AI工具',
    name: 'AI工具',
    description: '基于人工智能技术的智能工具和服务',
    icon: 'M12 4.5C7 4.5 3 8 3 12s4 7.5 9 7.5 9-3.5 9-7.5S17 4.5 12 4.5zM12 15a3 3 0 100-6 3 3 0 000 6z'
  },
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
  },
  {
    id: 'pdf',
    title: 'PDF工具',
    name: 'PDF工具',
    description: 'PDF文件的创建、编辑、转换与优化工具',
    icon: 'M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm3 3h2v2H7V9zm0 3h2v2H7v-2zm0 3h2v2H7v-2zm5-6h2v2h-2V9zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2z'
  },
  {
    id: 'audio',
    title: '音频工具',
    name: '音频工具',
    description: '音频文件的创建、编辑、转换与优化工具',
    icon: "M11 5L6 9H2v6h4l5 4V5z M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
  },
  {
    id: 'printing_3d',
    title: '3D打印',
    name: '3D打印',
    description: '3D打印模型生成、优化和转换工具',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
  },
  {
    id: 'address',
    title: '地址生成器',
    name: '地址生成器',
    description: '各国地址生成工具',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15.5 11a3 3 0 11-6 0 3 3 0 016 0z'
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
  {
    id: 'html-entity-encoder',
    name: t('tools.html-entity-encoder.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.html-entity-encoder.description'),
    path: '/tools/html-entity-encoder',
    component: 'HtmlEntityEncoder',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['html', 'dev', 'encode']
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
    tags: ['api', 'dev', 'mock']
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
    tags: ['html', 'dev', 'format']
  },
  {
    id: 'json-diff-checker',
    name: t('tools.json-diff-checker.name'),
    category: t(`categories.dev.title`),
    categoryId: 'dev',
    description: t('tools.json-diff-checker.description'),
    path: '/tools/json-diff-checker',
    component: 'JsonDiffChecker',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['json', 'dev', 'check']
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
    id: 'diagram-examples',
    name: '图表示例',
    category: '设计工具',
    categoryId: 'design',
    description: '展示各种图表示例，包括流程图、时序图、甘特图等',
    path: '/tools/diagram-examples',
    component: 'DiagramExamples',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    tags: ['design', 'diagram', 'example', 'visualization']
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
    id: 'markdown-to-html',
    name: 'Markdown转HTML',
    category: '文本编辑',
    categoryId: 'text',
    description: '将Markdown文本转换为HTML代码',
    path: '/tools/markdown-to-html',
    component: 'MarkdownToHtml',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    tags: ['markdown', 'text', 'editor']
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
  {
    id: 'remove-duplicates-excel',
    name: t('tools.remove-duplicates-excel.name'),
    category: t(`categories.text.title`),
    categoryId: 'text',
    description: t('tools.remove-duplicates-excel.description'),
    path: '/tools/remove-duplicates-excel',
    component: 'RemoveDuplicatesExcel',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    tags: ['remove']
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
  {
    id: 'invert-image-colors',
    name: t('tools.invert-image-colors.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.invert-image-colors.description'),
    path: '/tools/invert-image-colors',
    component: 'InvertImageColors',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'invert', 'color', 'edit', 'batch', 'utility']
  },
  {
    id: 'resize-to-1024x576-image',
    name: t('tools.resize-to-1024x576-image.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.resize-to-1024x576-image.description'),
    path: '/tools/resize-to-1024x576-image',
    component: 'ResizeTo1024x576Image',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'resize', 'youtube', 'thumbnail', 'social-media', 'video']
  },
  {
    id: 'reduce-image-size-in-kb-mb',
    name: t('tools.reduce-image-size-in-kb-mb.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.reduce-image-size-in-kb-mb.description'),
    path: '/tools/reduce-image-size-in-kb-mb',
    component: 'ReduceImageSizeInKbMb',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'compress', 'optimize', 'resize', 'photo', 'quality', 'reduce', 'batch', 'utility']
  },
  {
    id: 'round-corners-image',
    name: t('tools.round-corners-image.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.round-corners-image.description'),
    path: '/tools/round-corners-image',
    component: 'RoundCornersImage',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'round', 'corner', 'radius', 'edit', 'photo', 'utility']
  },
  {
    id: 'add-text-to-gif',
    name: t('tools.add-text-to-gif.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.add-text-to-gif.description'),
    path: '/tools/add-text-to-gif',
    component: 'AddTextToGIF',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'gif', 'edit', 'photo']
  },
  {
    id: 'blur-image-background',
    name: t('tools.blur-image-background.name'),
    category: t(`categories.image.title`),
    categoryId: 'image',
    description: t('tools.blur-image-background.description'),
    path: '/tools/blur-image-background',
    component: 'BlurImageBackground',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'background']
  },
  {
    id: 'image-to-svg',
    name: t('tools.image-to-svg.name'),
    category: t(`categories.convert.title`),
    categoryId: 'image',
    description: t('tools.image-to-svg.description'),
    path: '/tools/image-to-svg',
    component: 'ImageToSvg',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'image', 'svg']
  },
  {
    id: 'exif-viewer',
    name: t('tools.exif-viewer.name'),
    category: t(`categories.convert.title`),
    categoryId: 'image',
    description: t('tools.exif-viewer.description'),
    path: '/tools/exif-viewer',
    component: 'ExifViewer',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'image']
  },
  {
    id: 'exif-remover',
    name: t('tools.exif-remover.name'),
    category: t(`categories.convert.title`),
    categoryId: 'image',
    description: t('tools.exif-remover.description'),
    path: '/tools/exif-remover',
    component: 'ExifRemover',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'image']
  },
  {
    id: 'image-base64-converter',
    name: t('tools.image-base64-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'image',
    description: t('tools.image-base64-converter.description'),
    path: '/tools/image-base64-converter',
    component: 'ImageBase64Converter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'image']
  },
  {
    id: 'image-to-ico',
    name: t('tools.image-to-ico.name'),
    category: t(`categories.convert.title`),
    categoryId: 'image',
    description: t('tools.image-to-ico.description'),
    path: '/tools/image-to-ico',
    component: 'ImageToIco',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'image']
  },
  {
    id: 'image-to-jpg',
    name: t('tools.image-to-jpg.name'),
    category: t(`categories.convert.title`),
    categoryId: 'image',
    description: t('tools.image-to-jpg.description'),
    path: '/tools/image-to-jpg',
    component: 'ImageToJpg',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'image']
  },
  {
    id: 'image-to-png',
    name: t('tools.image-to-png.name'),
    category: t(`categories.convert.title`),
    categoryId: 'image',
    description: t('tools.image-to-png.description'),
    path: '/tools/image-to-png',
    component: 'ImageToPng',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'image']
  },
  {
    id: 'image-to-webp',
    name: t('tools.image-to-webp.name'),
    category: t(`categories.convert.title`),
    categoryId: 'image',
    description: t('tools.image-to-webp.description'),
    path: '/tools/image-to-webp',
    component: 'ImageToWebp',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'image']
  },
  {
    id: 'gif-compressor',
    name: t('tools.gif-compressor.name'),
    category: t(`categories.convert.title`),
    categoryId: 'image',
    description: t('tools.gif-compressor.description'),
    path: '/tools/gif-compressor',
    component: 'GifCompressor',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['gif', 'compress']
  },
  {
    id: 'image-to-text-converter',
    name: t('tools.image-to-text-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'image',
    description: t('tools.image-to-text-converter.description'),
    path: '/tools/image-to-text-converter',
    component: 'ImageToTextConverter',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    tags: ['image', 'text', 'extract', 'convert']
  },
  {
    id: 'text-to-image-converter',
    name: t('tools.text-to-image-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'image',
    description: t('tools.text-to-image-converter.description'),
    path: '/tools/text-to-image-converter',
    component: 'TextToImageConverter',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    tags: ['image', 'text', 'extract', 'convert']
  },

  // 转换工具
  {
    id: 'base64-encoder-decoder',
    name: t('tools.base64-encoder-decoder.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.base64-encoder-decoder.description'),
    path: '/tools/base64-encoder-decoder',
    component: 'Base64EncoderDecoder',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['convert', 'base64', 'encode', 'decode']
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
    id: 'timestamp-converter',
    name: t('tools.timestamp-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.timestamp-converter.description'),
    path: '/tools/timestamp-converter',
    component: 'TimestampConverter',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['convert', 'timestamp', 'date', 'time']
  },
  {
    id: 'url-encode-decode',
    name: t('tools.url-encode-decode.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.url-encode-decode.description'),
    path: '/tools/url-encode-decode',
    component: 'UrlEncodeDecode',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['convert', 'url', 'encode', 'decode']
  },
  {
    id: 'xml-json-converter',
    name: t('tools.xml-json-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.xml-json-converter.description'),
    path: '/tools/xml-json-converter',
    component: 'XmlJsonConverter',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['convert', 'xml', 'json', 'data']
  },
  {
    id: 'xml-formatter',
    name: t('tools.xml-formatter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.xml-formatter.description'),
    path: '/tools/xml-formatter',
    component: 'XmlFormatter',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    tags: ['xml', 'text', 'format']
  },
  {
    id: 'yaml-json-converter',
    name: t('tools.yaml-json-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.yaml-json-converter.description'),
    path: '/tools/yaml-json-converter',
    component: 'YamlJsonConverter',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['convert', 'yaml', 'json', 'data']
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
  {
    id: 'code-to-image-converter',
    name: t('tools.code-to-image-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.code-to-image-converter.description'),
    path: '/tools/code-to-image-converter',
    component: 'CodeToImageConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'image', 'code']
  },
  {
    id: 'text-to-handwriting-converter',
    name: t('tools.text-to-handwriting-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.text-to-handwriting-converter.description'),
    path: '/tools/text-to-handwriting-converter',
    component: 'TextToHandwritingConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'image', 'text']
  },
  {
    id: 'numbers-to-words-converter',
    name: t('tools.numbers-to-words-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.numbers-to-words-converter.description'),
    path: '/tools/numbers-to-words-converter',
    component: 'NumbersToWordsConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'number', 'word']
  },
  {
    id: 'bionic-reading-converter',
    name: t('tools.bionic-reading-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.bionic-reading-converter.description'),
    path: '/tools/bionic-reading-converter',
    component: 'BionicReadingConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'bionic', 'reading']
  },
  {
    id: 'excel-to-csv-converter',
    name: t('tools.excel-to-csv-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.excel-to-csv-converter.description'),
    path: '/tools/excel-to-csv-converter',
    component: 'ExcelToCsvConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'csv']
  },
  {
    id: 'csv-to-excel-converter',
    name: t('tools.csv-to-excel-converter.name'),
    category: t(`categories.convert.title`),
    categoryId: 'convert',
    description: t('tools.csv-to-excel-converter.description'),
    path: '/tools/csv-to-excel-converter',
    component: 'CsvToExcelConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'csv']
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
  {
    id: 'api-request-tool',
    name: t('tools.api-request-tool.name'),
    category: t(`categories.network.title`),
    categoryId: 'network',
    description: t('tools.api-request-tool.description'),
    path: '/tools/api-request-tool',
    component: 'ApiRequestTool',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'ip']
  }, 

  // 加密安全工具
  {
    id: 'password-generator',
    name: t('tools.password-generator.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.password-generator.description'),
    path: '/tools/password-generator',
    component: 'PasswordGenerator',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['crypto', 'password', 'generate']
  },
  {
    id: 'password-strength-checker',
    name: t('tools.password-strength-checker.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.password-strength-checker.description'),
    path: '/tools/password-strength-checker',
    component: 'PasswordStrengthChecker',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['crypto', 'password', 'check']
  },
  {
    id: 'hash-calculator',
    name: t('tools.hash-calculator.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.hash-calculator.description'),
    path: '/tools/hash-calculator',
    component: 'HashCalculator',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['crypto', 'hash']
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
    id: 'symmetric-crypto',
    name: t('tools.symmetric-crypto.name'),
    category: t(`categories.crypto.title`),
    categoryId: 'crypto',
    description: t('tools.symmetric-crypto.description'),
    path: '/tools/symmetric-crypto',
    component: 'SymmetricCrypto',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['crypto', 'encrypt', 'decrypt']
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
  {
    id: 'comparing-fractions-calculator',
    name: t('tools.comparing-fractions-calculator.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.comparing-fractions-calculator.description'),
    path: '/tools/comparing-fractions-calculator',
    component: 'ComparingFractionsCalculator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['calculator']
  },
  {
    id: 'us-address-generator',
    name: t('tools.us-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.us-address-generator.description'),
    path: '/tools/us-address-generator',
    component: 'UsAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'malta-address-generator',
    name: t('tools.malta-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.malta-address-generator.description'),
    path: '/tools/malta-address-generator',
    component: 'MaltaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'hk-address-generator',
    name: t('tools.hk-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.hk-address-generator.description'),
    path: '/tools/hk-address-generator',
    component: 'HkAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'turkey-address-generator',
    name: t('tools.turkey-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.turkey-address-generator.description'),
    path: '/tools/turkey-address-generator',
    component: 'TurkeyAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'france-address-generator',
    name: t('tools.france-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.france-address-generator.description'),
    path: '/tools/france-address-generator',
    component: 'FranceAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'finland-address-generator',
    name: t('tools.finland-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.finland-address-generator.description'),
    path: '/tools/finland-address-generator',
    component: 'FinlandAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'vietnam-address-generator',
    name: t('tools.vietnam-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.vietnam-address-generator.description'),
    path: '/tools/vietnam-address-generator',
    component: 'VietnamAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'netherlands-address-generator',
    name: t('tools.netherlands-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.netherlands-address-generator.description'),
    path: '/tools/netherlands-address-generator',
    component: 'NetherlandsAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'malaysia-address-generator',
    name: t('tools.malaysia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.malaysia-address-generator.description'),
    path: '/tools/malaysia-address-generator',
    component: 'MalaysiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'thailand-address-generator',
    name: t('tools.thailand-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.thailand-address-generator.description'),
    path: '/tools/thailand-address-generator',
    component: 'ThailandAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'india-address-generator',
    name: t('tools.india-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.india-address-generator.description'),
    path: '/tools/india-address-generator',
    component: 'IndiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'pakistan-address-generator',
    name: t('tools.pakistan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.pakistan-address-generator.description'),
    path: '/tools/pakistan-address-generator',
    component: 'PakistanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'italy-address-generator',
    name: t('tools.italy-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.italy-address-generator.description'),
    path: '/tools/italy-address-generator',
    component: 'ItalyAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'spain-address-generator',
    name: t('tools.spain-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.spain-address-generator.description'),
    path: '/tools/spain-address-generator',
    component: 'SpainAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'russia-address-generator',
    name: t('tools.russia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.russia-address-generator.description'),
    path: '/tools/russia-address-generator',
    component: 'RussiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'kazakhstan-address-generator',
    name: t('tools.kazakhstan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.kazakhstan-address-generator.description'),
    path: '/tools/kazakhstan-address-generator',
    component: 'KazakhstanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'mexico-address-generator',
    name: t('tools.mexico-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.mexico-address-generator.description'),
    path: '/tools/mexico-address-generator',
    component: 'MexicoAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'world-address-generator',
    name: t('tools.world-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.world-address-generator.description'),
    path: '/tools/world-address-generator',
    component: 'WorldAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator', 'world', 'global']
  },
  {
    id: 'philippines-address-generator',
    name: t('tools.philippines-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.philippines-address-generator.description'),
    path: '/tools/philippines-address-generator',
    component: 'PhilippinesAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'taiwan-address-generator',
    name: t('tools.taiwan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.taiwan-address-generator.description'),
    path: '/tools/taiwan-address-generator',
    component: 'TaiwanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'jp-address-generator',
    name: t('tools.jp-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.jp-address-generator.description'),
    path: '/tools/jp-address-generator',
    component: 'JpAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'ca-address-generator',
    name: t('tools.ca-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.ca-address-generator.description'),
    path: '/tools/ca-address-generator',
    component: 'CaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'mac-address-generator',
    name: t('tools.mac-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.mac-address-generator.description'),
    path: '/tools/mac-address-generator',
    component: 'MacAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'cn-address-generator',
    name: t('tools.cn-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.cn-address-generator.description'),
    path: '/tools/cn-address-generator',
    component: 'CnAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'sg-address-generator',
    name: t('tools.sg-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.sg-address-generator.description'),
    path: '/tools/sg-address-generator',
    component: 'SgAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'uk-address-generator',
    name: t('tools.uk-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.uk-address-generator.description'),
    path: '/tools/uk-address-generator',
    component: 'UkAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'kr-address-generator',
    name: t('tools.kr-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.kr-address-generator.description'),
    path: '/tools/kr-address-generator',
    component: 'KrAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'au-address-generator',
    name: t('tools.au-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.au-address-generator.description'),
    path: '/tools/au-address-generator',
    component: 'AuAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'ng-address-generator',
    name: t('tools.ng-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.ng-address-generator.description'),
    path: '/tools/ng-address-generator',
    component: 'NgAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'de-address-generator',
    name: t('tools.de-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.de-address-generator.description'),
    path: '/tools/de-address-generator',
    component: 'DeAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'indonesia-address-generator',
    name: t('tools.indonesia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.indonesia-address-generator.description'),
    path: '/tools/indonesia-address-generator',
    component: 'IndonesiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'bangladesh-address-generator',
    name: t('tools.bangladesh-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.bangladesh-address-generator.description'),
    path: '/tools/bangladesh-address-generator',
    component: 'BangladeshAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'saudi-arabia-address-generator',
    name: t('tools.saudi-arabia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.saudi-arabia-address-generator.description'),
    path: '/tools/saudi-arabia-address-generator',
    component: 'SaudiArabiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'uae-address-generator',
    name: t('tools.uae-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.uae-address-generator.description'),
    path: '/tools/uae-address-generator',
    component: 'UaeAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'israel-address-generator',
    name: t('tools.israel-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.israel-address-generator.description'),
    path: '/tools/israel-address-generator',
    component: 'IsraelAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'qatar-address-generator',
    name: t('tools.qatar-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.qatar-address-generator.description'),
    path: '/tools/qatar-address-generator',
    component: 'QatarAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'portugal-address-generator',
    name: t('tools.portugal-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.portugal-address-generator.description'),
    path: '/tools/portugal-address-generator',
    component: 'PortugalAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'poland-address-generator',
    name: t('tools.poland-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.poland-address-generator.description'),
    path: '/tools/poland-address-generator',
    component: 'PolandAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'sweden-address-generator',
    name: t('tools.sweden-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.sweden-address-generator.description'),
    path: '/tools/sweden-address-generator',
    component: 'SwedenAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'switzerland-address-generator',
    name: t('tools.switzerland-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.switzerland-address-generator.description'),
    path: '/tools/switzerland-address-generator',
    component: 'SwitzerlandAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'belgium-address-generator',
    name: t('tools.belgium-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.belgium-address-generator.description'),
    path: '/tools/belgium-address-generator',
    component: 'BelgiumAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'austria-address-generator',
    name: t('tools.austria-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.austria-address-generator.description'),
    path: '/tools/austria-address-generator',
    component: 'AustriaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'ireland-address-generator',
    name: t('tools.ireland-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.ireland-address-generator.description'),
    path: '/tools/ireland-address-generator',
    component: 'IrelandAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'denmark-address-generator',
    name: t('tools.denmark-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.denmark-address-generator.description'),
    path: '/tools/denmark-address-generator',
    component: 'DenmarkAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'norway-address-generator',
    name: t('tools.norway-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.norway-address-generator.description'),
    path: '/tools/norway-address-generator',
    component: 'NorwayAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'greece-address-generator',
    name: t('tools.greece-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.greece-address-generator.description'),
    path: '/tools/greece-address-generator',
    component: 'GreeceAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'albania-address-generator',
    name: t('tools.albania-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.albania-address-generator.description'),
    path: '/tools/albania-address-generator',
    component: 'AlbaniaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'andorra-address-generator',
    name: t('tools.andorra-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.andorra-address-generator.description'),
    path: '/tools/andorra-address-generator',
    component: 'AndorraAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'belarus-address-generator',
    name: t('tools.belarus-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.belarus-address-generator.description'),
    path: '/tools/belarus-address-generator',
    component: 'BelarusAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'bosnia-and-herzegovina-address-generator',
    name: t('tools.bosnia-and-herzegovina-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.bosnia-and-herzegovina-address-generator.description'),
    path: '/tools/bosnia-and-herzegovina-address-generator',
    component: 'BosniaAndHerzegovinaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'bulgaria-address-generator',
    name: t('tools.bulgaria-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.bulgaria-address-generator.description'),
    path: '/tools/bulgaria-address-generator',
    component: 'BulgariaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'croatia-address-generator',
    name: t('tools.croatia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.croatia-address-generator.description'),
    path: '/tools/croatia-address-generator',
    component: 'CroatiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'czechia-address-generator',
    name: t('tools.czechia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.czechia-address-generator.description'),
    path: '/tools/czechia-address-generator',
    component: 'CzechiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'estonia-address-generator',
    name: t('tools.estonia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.estonia-address-generator.description'),
    path: '/tools/estonia-address-generator',
    component: 'EstoniaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'holy-see-vatican-address-generator',
    name: t('tools.holy-see-vatican-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.holy-see-vatican-address-generator.description'),
    path: '/tools/holy-see-vatican-address-generator',
    component: 'HolySeeVaticanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'hungary-address-generator',
    name: t('tools.hungary-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.hungary-address-generator.description'),
    path: '/tools/hungary-address-generator',
    component: 'HungaryAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'iceland-address-generator',
    name: t('tools.iceland-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.iceland-address-generator.description'),
    path: '/tools/iceland-address-generator',
    component: 'IcelandAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'latvia-address-generator',
    name: t('tools.latvia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.latvia-address-generator.description'),
    path: '/tools/latvia-address-generator',
    component: 'LatviaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'liechtenstein-address-generator',
    name: t('tools.liechtenstein-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.liechtenstein-address-generator.description'),
    path: '/tools/liechtenstein-address-generator',
    component: 'LiechtensteinAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'lithuania-address-generator',
    name: t('tools.lithuania-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.lithuania-address-generator.description'),
    path: '/tools/lithuania-address-generator',
    component: 'LithuaniaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'luxembourg-address-generator',
    name: t('tools.luxembourg-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.luxembourg-address-generator.description'),
    path: '/tools/luxembourg-address-generator',
    component: 'LuxembourgAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'moldova-address-generator',
    name: t('tools.moldova-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.moldova-address-generator.description'),
    path: '/tools/moldova-address-generator',
    component: 'MoldovaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'monaco-address-generator',
    name: t('tools.monaco-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.monaco-address-generator.description'),
    path: '/tools/monaco-address-generator',
    component: 'MonacoAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'montenegro-address-generator',
    name: t('tools.montenegro-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.montenegro-address-generator.description'),
    path: '/tools/montenegro-address-generator',
    component: 'MontenegroAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'north-macedonia-address-generator',
    name: t('tools.north-macedonia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.north-macedonia-address-generator.description'),
    path: '/tools/north-macedonia-address-generator',
    component: 'NorthMacedoniaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'romania-address-generator',
    name: t('tools.romania-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.romania-address-generator.description'),
    path: '/tools/romania-address-generator',
    component: 'RomaniaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'san-marino-address-generator',
    name: t('tools.san-marino-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.san-marino-address-generator.description'),
    path: '/tools/san-marino-address-generator',
    component: 'SanMarinoAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'serbia-address-generator',
    name: t('tools.serbia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.serbia-address-generator.description'),
    path: '/tools/serbia-address-generator',
    component: 'SerbiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'slovakia-address-generator',
    name: t('tools.slovakia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.slovakia-address-generator.description'),
    path: '/tools/slovakia-address-generator',
    component: 'SlovakiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'slovenia-address-generator',
    name: t('tools.slovenia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.slovenia-address-generator.description'),
    path: '/tools/slovenia-address-generator',
    component: 'SloveniaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'ukraine-address-generator',
    name: t('tools.ukraine-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.ukraine-address-generator.description'),
    path: '/tools/ukraine-address-generator',
    component: 'UkraineAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'afghanistan-address-generator',
    name: t('tools.afghanistan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.afghanistan-address-generator.description'),
    path: '/tools/afghanistan-address-generator',
    component: 'AfghanistanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'armenia-address-generator',
    name: t('tools.armenia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.armenia-address-generator.description'),
    path: '/tools/armenia-address-generator',
    component: 'ArmeniaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'azerbaijan-address-generator',
    name: t('tools.azerbaijan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.azerbaijan-address-generator.description'),
    path: '/tools/azerbaijan-address-generator',
    component: 'AzerbaijanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'bahrain-address-generator',
    name: t('tools.bahrain-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.bahrain-address-generator.description'),
    path: '/tools/bahrain-address-generator',
    component: 'BahrainAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'bhutan-address-generator',
    name: t('tools.bhutan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.bhutan-address-generator.description'),
    path: '/tools/bhutan-address-generator',
    component: 'BhutanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'brunei-address-generator',
    name: t('tools.brunei-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.brunei-address-generator.description'),
    path: '/tools/brunei-address-generator',
    component: 'BruneiAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'cambodia-address-generator',
    name: t('tools.cambodia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.cambodia-address-generator.description'),
    path: '/tools/cambodia-address-generator',
    component: 'CambodiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'cyprus-address-generator',
    name: t('tools.cyprus-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.cyprus-address-generator.description'),
    path: '/tools/cyprus-address-generator',
    component: 'CyprusAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'georgia-address-generator',
    name: t('tools.georgia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.georgia-address-generator.description'),
    path: '/tools/georgia-address-generator',
    component: 'GeorgiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'iran-address-generator',
    name: t('tools.iran-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.iran-address-generator.description'),
    path: '/tools/iran-address-generator',
    component: 'IranAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'iraq-address-generator',
    name: t('tools.iraq-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.iraq-address-generator.description'),
    path: '/tools/iraq-address-generator',
    component: 'IraqAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'jordan-address-generator',
    name: t('tools.jordan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.jordan-address-generator.description'),
    path: '/tools/jordan-address-generator',
    component: 'JordanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'kuwait-address-generator',
    name: t('tools.kuwait-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.kuwait-address-generator.description'),
    path: '/tools/kuwait-address-generator',
    component: 'KuwaitAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'kyrgyzstan-address-generator',
    name: t('tools.kyrgyzstan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.kyrgyzstan-address-generator.description'),
    path: '/tools/kyrgyzstan-address-generator',
    component: 'KyrgyzstanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'laos-address-generator',
    name: t('tools.laos-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.laos-address-generator.description'),
    path: '/tools/laos-address-generator',
    component: 'LaosAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'lebanon-address-generator',
    name: t('tools.lebanon-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.lebanon-address-generator.description'),
    path: '/tools/lebanon-address-generator',
    component: 'LebanonAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'maldives-address-generator',
    name: t('tools.maldives-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.maldives-address-generator.description'),
    path: '/tools/maldives-address-generator',
    component: 'MaldivesAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'mongolia-address-generator',
    name: t('tools.mongolia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.mongolia-address-generator.description'),
    path: '/tools/mongolia-address-generator',
    component: 'MongoliaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'myanmar-address-generator',
    name: t('tools.myanmar-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.myanmar-address-generator.description'),
    path: '/tools/myanmar-address-generator',
    component: 'MyanmarAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'nepal-address-generator',
    name: t('tools.nepal-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.nepal-address-generator.description'),
    path: '/tools/nepal-address-generator',
    component: 'NepalAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'north-korea-address-generator',
    name: t('tools.north-korea-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.north-korea-address-generator.description'),
    path: '/tools/north-korea-address-generator',
    component: 'NorthKoreaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'oman-address-generator',
    name: t('tools.oman-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.oman-address-generator.description'),
    path: '/tools/oman-address-generator',
    component: 'OmanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'palestine-address-generator',
    name: t('tools.palestine-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.palestine-address-generator.description'),
    path: '/tools/palestine-address-generator',
    component: 'PalestineAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'sri-lanka-address-generator',
    name: t('tools.sri-lanka-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.sri-lanka-address-generator.description'),
    path: '/tools/sri-lanka-address-generator',
    component: 'SriLankaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'syria-address-generator',
    name: t('tools.syria-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.syria-address-generator.description'),
    path: '/tools/syria-address-generator',
    component: 'SyriaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'tajikistan-address-generator',
    name: t('tools.tajikistan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.tajikistan-address-generator.description'),
    path: '/tools/tajikistan-address-generator',
    component: 'TajikistanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'timor-leste-address-generator',
    name: t('tools.timor-leste-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.timor-leste-address-generator.description'),
    path: '/tools/timor-leste-address-generator',
    component: 'TimorLesteAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'turkmenistan-address-generator',
    name: t('tools.turkmenistan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.turkmenistan-address-generator.description'),
    path: '/tools/turkmenistan-address-generator',
    component: 'TurkmenistanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'uzbekistan-address-generator',
    name: t('tools.uzbekistan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.uzbekistan-address-generator.description'),
    path: '/tools/uzbekistan-address-generator',
    component: 'UzbekistanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'yemen-address-generator',
    name: t('tools.yemen-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.yemen-address-generator.description'),
    path: '/tools/yemen-address-generator',
    component: 'YemenAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'antigua-and-barbuda-address-generator',
    name: t('tools.antigua-and-barbuda-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.antigua-and-barbuda-address-generator.description'),
    path: '/tools/antigua-and-barbuda-address-generator',
    component: 'AntiguaAndBarbudaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'argentina-address-generator',
    name: t('tools.argentina-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.argentina-address-generator.description'),
    path: '/tools/argentina-address-generator',
    component: 'ArgentinaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'bahamas-address-generator',
    name: t('tools.bahamas-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.bahamas-address-generator.description'),
    path: '/tools/bahamas-address-generator',
    component: 'BahamasAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'barbados-address-generator',
    name: t('tools.barbados-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.barbados-address-generator.description'),
    path: '/tools/barbados-address-generator',
    component: 'BarbadosAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'belize-address-generator',
    name: t('tools.belize-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.belize-address-generator.description'),
    path: '/tools/belize-address-generator',
    component: 'BelizeAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'bolivia-address-generator',
    name: t('tools.bolivia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.bolivia-address-generator.description'),
    path: '/tools/bolivia-address-generator',
    component: 'BoliviaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'brazil-address-generator',
    name: t('tools.brazil-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.brazil-address-generator.description'),
    path: '/tools/brazil-address-generator',
    component: 'BrazilAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'chile-address-generator',
    name: t('tools.chile-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.chile-address-generator.description'),
    path: '/tools/chile-address-generator',
    component: 'ChileAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'colombia-address-generator',
    name: t('tools.colombia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.colombia-address-generator.description'),
    path: '/tools/colombia-address-generator',
    component: 'ColombiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'costa-rica-address-generator',
    name: t('tools.costa-rica-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.costa-rica-address-generator.description'),
    path: '/tools/costa-rica-address-generator',
    component: 'CostaRicaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'cuba-address-generator',
    name: t('tools.cuba-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.cuba-address-generator.description'),
    path: '/tools/cuba-address-generator',
    component: 'CubaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'dominica-address-generator',
    name: t('tools.dominica-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.dominica-address-generator.description'),
    path: '/tools/dominica-address-generator',
    component: 'DominicaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'dominican-republic-address-generator',
    name: t('tools.dominican-republic-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.dominican-republic-address-generator.description'),
    path: '/tools/dominican-republic-address-generator',
    component: 'DominicanRepublicAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'ecuador-address-generator',
    name: t('tools.ecuador-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.ecuador-address-generator.description'),
    path: '/tools/ecuador-address-generator',
    component: 'EcuadorAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'el-salvador-address-generator',
    name: t('tools.el-salvador-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.el-salvador-address-generator.description'),
    path: '/tools/el-salvador-address-generator',
    component: 'ElSalvadorAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'grenada-address-generator',
    name: t('tools.grenada-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.grenada-address-generator.description'),
    path: '/tools/grenada-address-generator',
    component: 'GrenadaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'guatemala-address-generator',
    name: t('tools.guatemala-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.guatemala-address-generator.description'),
    path: '/tools/guatemala-address-generator',
    component: 'GuatemalaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'guyana-address-generator',
    name: t('tools.guyana-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.guyana-address-generator.description'),
    path: '/tools/guyana-address-generator',
    component: 'GuyanaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'haiti-address-generator',
    name: t('tools.haiti-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.haiti-address-generator.description'),
    path: '/tools/haiti-address-generator',
    component: 'HaitiAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'honduras-address-generator',
    name: t('tools.honduras-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.honduras-address-generator.description'),
    path: '/tools/honduras-address-generator',
    component: 'HondurasAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'jamaica-address-generator',
    name: t('tools.jamaica-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.jamaica-address-generator.description'),
    path: '/tools/jamaica-address-generator',
    component: 'JamaicaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'nicaragua-address-generator',
    name: t('tools.nicaragua-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.nicaragua-address-generator.description'),
    path: '/tools/nicaragua-address-generator',
    component: 'NicaraguaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'panama-address-generator',
    name: t('tools.panama-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.panama-address-generator.description'),
    path: '/tools/panama-address-generator',
    component: 'PanamaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'paraguay-address-generator',
    name: t('tools.paraguay-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.paraguay-address-generator.description'),
    path: '/tools/paraguay-address-generator',
    component: 'ParaguayAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'peru-address-generator',
    name: t('tools.peru-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.peru-address-generator.description'),
    path: '/tools/peru-address-generator',
    component: 'PeruAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'saint-kitts-and-nevis-address-generator',
    name: t('tools.saint-kitts-and-nevis-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.saint-kitts-and-nevis-address-generator.description'),
    path: '/tools/saint-kitts-and-nevis-address-generator',
    component: 'SaintKittsAndNevisAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'saint-lucia-address-generator',
    name: t('tools.saint-lucia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.saint-lucia-address-generator.description'),
    path: '/tools/saint-lucia-address-generator',
    component: 'SaintLuciaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'saint-vincent-and-the-grenadines-address-generator',
    name: t('tools.saint-vincent-and-the-grenadines-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.saint-vincent-and-the-grenadines-address-generator.description'),
    path: '/tools/saint-vincent-and-the-grenadines-address-generator',
    component: 'SaintVincentAndTheGrenadinesAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'suriname-address-generator',
    name: t('tools.suriname-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.suriname-address-generator.description'),
    path: '/tools/suriname-address-generator',
    component: 'SurinameAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'trinidad-and-tobago-address-generator',
    name: t('tools.trinidad-and-tobago-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.trinidad-and-tobago-address-generator.description'),
    path: '/tools/trinidad-and-tobago-address-generator',
    component: 'TrinidadAndTobagoAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'uruguay-address-generator',
    name: t('tools.uruguay-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.uruguay-address-generator.description'),
    path: '/tools/uruguay-address-generator',
    component: 'UruguayAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'venezuela-address-generator',
    name: t('tools.venezuela-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.venezuela-address-generator.description'),
    path: '/tools/venezuela-address-generator',
    component: 'VenezuelaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'algeria-address-generator',
    name: t('tools.algeria-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.algeria-address-generator.description'),
    path: '/tools/algeria-address-generator',
    component: 'AlgeriaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'angola-address-generator',
    name: t('tools.angola-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.angola-address-generator.description'),
    path: '/tools/angola-address-generator',
    component: 'AngolaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'benin-address-generator',
    name: t('tools.benin-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.benin-address-generator.description'),
    path: '/tools/benin-address-generator',
    component: 'BeninAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'botswana-address-generator',
    name: t('tools.botswana-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.botswana-address-generator.description'),
    path: '/tools/botswana-address-generator',
    component: 'BotswanaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'burkina-faso-address-generator',
    name: t('tools.burkina-faso-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.burkina-faso-address-generator.description'),
    path: '/tools/burkina-faso-address-generator',
    component: 'BurkinaFasoAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'burundi-address-generator',
    name: t('tools.burundi-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.burundi-address-generator.description'),
    path: '/tools/burundi-address-generator',
    component: 'BurundiAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'cabo-verde-address-generator',
    name: t('tools.cabo-verde-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.cabo-verde-address-generator.description'),
    path: '/tools/cabo-verde-address-generator',
    component: 'CaboVerdeAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'cameroon-address-generator',
    name: t('tools.cameroon-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.cameroon-address-generator.description'),
    path: '/tools/cameroon-address-generator',
    component: 'CameroonAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'central-african-republic-address-generator',
    name: t('tools.central-african-republic-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.central-african-republic-address-generator.description'),
    path: '/tools/central-african-republic-address-generator',
    component: 'CentralAfricanRepublicAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'chad-address-generator',
    name: t('tools.chad-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.chad-address-generator.description'),
    path: '/tools/chad-address-generator',
    component: 'ChadAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'comoros-address-generator',
    name: t('tools.comoros-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.comoros-address-generator.description'),
    path: '/tools/comoros-address-generator',
    component: 'ComorosAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'republic-of-the-congo-address-generator',
    name: t('tools.republic-of-the-congo-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.republic-of-the-congo-address-generator.description'),
    path: '/tools/republic-of-the-congo-address-generator',
    component: 'RepublicOfTheCongoAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'democratic-republic-of-the-congo-address-generator',
    name: t('tools.democratic-republic-of-the-congo-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.democratic-republic-of-the-congo-address-generator.description'),
    path: '/tools/democratic-republic-of-the-congo-address-generator',
    component: 'DemocraticRepublicOfTheCongoAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'djibouti-address-generator',
    name: t('tools.djibouti-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.djibouti-address-generator.description'),
    path: '/tools/djibouti-address-generator',
    component: 'DjiboutiAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'egypt-address-generator',
    name: t('tools.egypt-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.egypt-address-generator.description'),
    path: '/tools/egypt-address-generator',
    component: 'EgyptAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'equatorial-guinea-address-generator',
    name: t('tools.equatorial-guinea-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.equatorial-guinea-address-generator.description'),
    path: '/tools/equatorial-guinea-address-generator',
    component: 'EquatorialGuineaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'eritrea-address-generator',
    name: t('tools.eritrea-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.eritrea-address-generator.description'),
    path: '/tools/eritrea-address-generator',
    component: 'EritreaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'eswatini-address-generator',
    name: t('tools.eswatini-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.eswatini-address-generator.description'),
    path: '/tools/eswatini-address-generator',
    component: 'EswatiniAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'ethiopia-address-generator',
    name: t('tools.ethiopia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.ethiopia-address-generator.description'),
    path: '/tools/ethiopia-address-generator',
    component: 'EthiopiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'gabon-address-generator',
    name: t('tools.gabon-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.gabon-address-generator.description'),
    path: '/tools/gabon-address-generator',
    component: 'GabonAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'gambia-address-generator',
    name: t('tools.gambia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.gambia-address-generator.description'),
    path: '/tools/gambia-address-generator',
    component: 'GambiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'ghana-address-generator',
    name: t('tools.ghana-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.ghana-address-generator.description'),
    path: '/tools/ghana-address-generator',
    component: 'GhanaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'guinea-address-generator',
    name: t('tools.guinea-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.guinea-address-generator.description'),
    path: '/tools/guinea-address-generator',
    component: 'GuineaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'guinea-bissau-address-generator',
    name: t('tools.guinea-bissau-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.guinea-bissau-address-generator.description'),
    path: '/tools/guinea-bissau-address-generator',
    component: 'GuineaBissauAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'cote-d-ivoire-address-generator',
    name: t('tools.cote-d-ivoire-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.cote-d-ivoire-address-generator.description'),
    path: '/tools/cote-d-ivoire-address-generator',
    component: 'CoteDIvoireAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'kenya-address-generator',
    name: t('tools.kenya-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.kenya-address-generator.description'),
    path: '/tools/kenya-address-generator',
    component: 'KenyaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'lesotho-address-generator',
    name: t('tools.lesotho-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.lesotho-address-generator.description'),
    path: '/tools/lesotho-address-generator',
    component: 'LesothoAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'liberia-address-generator',
    name: t('tools.liberia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.liberia-address-generator.description'),
    path: '/tools/liberia-address-generator',
    component: 'LiberiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'libya-address-generator',
    name: t('tools.libya-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.libya-address-generator.description'),
    path: '/tools/libya-address-generator',
    component: 'LibyaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'madagascar-address-generator',
    name: t('tools.madagascar-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.madagascar-address-generator.description'),
    path: '/tools/madagascar-address-generator',
    component: 'MadagascarAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'malawi-address-generator',
    name: t('tools.malawi-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.malawi-address-generator.description'),
    path: '/tools/malawi-address-generator',
    component: 'MalawiAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'mali-address-generator',
    name: t('tools.mali-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.mali-address-generator.description'),
    path: '/tools/mali-address-generator',
    component: 'MaliAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'mauritania-address-generator',
    name: t('tools.mauritania-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.mauritania-address-generator.description'),
    path: '/tools/mauritania-address-generator',
    component: 'MauritaniaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'mauritius-address-generator',
    name: t('tools.mauritius-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.mauritius-address-generator.description'),
    path: '/tools/mauritius-address-generator',
    component: 'MauritiusAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'morocco-address-generator',
    name: t('tools.morocco-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.morocco-address-generator.description'),
    path: '/tools/morocco-address-generator',
    component: 'MoroccoAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'mozambique-address-generator',
    name: t('tools.mozambique-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.mozambique-address-generator.description'),
    path: '/tools/mozambique-address-generator',
    component: 'MozambiqueAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'namibia-address-generator',
    name: t('tools.namibia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.namibia-address-generator.description'),
    path: '/tools/namibia-address-generator',
    component: 'NamibiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'niger-address-generator',
    name: t('tools.niger-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.niger-address-generator.description'),
    path: '/tools/niger-address-generator',
    component: 'NigerAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'rwanda-address-generator',
    name: t('tools.rwanda-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.rwanda-address-generator.description'),
    path: '/tools/rwanda-address-generator',
    component: 'RwandaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'sao-tome-and-principe-address-generator',
    name: t('tools.sao-tome-and-principe-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.sao-tome-and-principe-address-generator.description'),
    path: '/tools/sao-tome-and-principe-address-generator',
    component: 'SaoTomeAndPrincipeAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'senegal-address-generator',
    name: t('tools.senegal-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.senegal-address-generator.description'),
    path: '/tools/senegal-address-generator',
    component: 'SenegalAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'seychelles-address-generator',
    name: t('tools.seychelles-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.seychelles-address-generator.description'),
    path: '/tools/seychelles-address-generator',
    component: 'SeychellesAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'sierra-leone-address-generator',
    name: t('tools.sierra-leone-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.sierra-leone-address-generator.description'),
    path: '/tools/sierra-leone-address-generator',
    component: 'SierraLeoneAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'somalia-address-generator',
    name: t('tools.somalia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.somalia-address-generator.description'),
    path: '/tools/somalia-address-generator',
    component: 'SomaliaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'south-africa-address-generator',
    name: t('tools.south-africa-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.south-africa-address-generator.description'),
    path: '/tools/south-africa-address-generator',
    component: 'SouthAfricaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'south-sudan-address-generator',
    name: t('tools.south-sudan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.south-sudan-address-generator.description'),
    path: '/tools/south-sudan-address-generator',
    component: 'SouthSudanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'sudan-address-generator',
    name: t('tools.sudan-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.sudan-address-generator.description'),
    path: '/tools/sudan-address-generator',
    component: 'SudanAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'tanzania-address-generator',
    name: t('tools.tanzania-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.tanzania-address-generator.description'),
    path: '/tools/tanzania-address-generator',
    component: 'TanzaniaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'togo-address-generator',
    name: t('tools.togo-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.togo-address-generator.description'),
    path: '/tools/togo-address-generator',
    component: 'TogoAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'tunisia-address-generator',
    name: t('tools.tunisia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.tunisia-address-generator.description'),
    path: '/tools/tunisia-address-generator',
    component: 'TunisiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'uganda-address-generator',
    name: t('tools.uganda-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.uganda-address-generator.description'),
    path: '/tools/uganda-address-generator',
    component: 'UgandaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'zambia-address-generator',
    name: t('tools.zambia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.zambia-address-generator.description'),
    path: '/tools/zambia-address-generator',
    component: 'ZambiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'zimbabwe-address-generator',
    name: t('tools.zimbabwe-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.zimbabwe-address-generator.description'),
    path: '/tools/zimbabwe-address-generator',
    component: 'ZimbabweAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'fiji-address-generator',
    name: t('tools.fiji-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.fiji-address-generator.description'),
    path: '/tools/fiji-address-generator',
    component: 'FijiAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'kiribati-address-generator',
    name: t('tools.kiribati-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.kiribati-address-generator.description'),
    path: '/tools/kiribati-address-generator',
    component: 'KiribatiAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'marshall-islands-address-generator',
    name: t('tools.marshall-islands-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.marshall-islands-address-generator.description'),
    path: '/tools/marshall-islands-address-generator',
    component: 'MarshallIslandsAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'micronesia-address-generator',
    name: t('tools.micronesia-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.micronesia-address-generator.description'),
    path: '/tools/micronesia-address-generator',
    component: 'MicronesiaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'nauru-address-generator',
    name: t('tools.nauru-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.nauru-address-generator.description'),
    path: '/tools/nauru-address-generator',
    component: 'NauruAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'new-zealand-address-generator',
    name: t('tools.new-zealand-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.new-zealand-address-generator.description'),
    path: '/tools/new-zealand-address-generator',
    component: 'NewZealandAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'palau-address-generator',
    name: t('tools.palau-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.palau-address-generator.description'),
    path: '/tools/palau-address-generator',
    component: 'PalauAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'papua-new-guinea-address-generator',
    name: t('tools.papua-new-guinea-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.papua-new-guinea-address-generator.description'),
    path: '/tools/papua-new-guinea-address-generator',
    component: 'PapuaNewGuineaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'samoa-address-generator',
    name: t('tools.samoa-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.samoa-address-generator.description'),
    path: '/tools/samoa-address-generator',
    component: 'SamoaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'solomon-islands-address-generator',
    name: t('tools.solomon-islands-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.solomon-islands-address-generator.description'),
    path: '/tools/solomon-islands-address-generator',
    component: 'SolomonIslandsAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'tonga-address-generator',
    name: t('tools.tonga-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.tonga-address-generator.description'),
    path: '/tools/tonga-address-generator',
    component: 'TongaAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'tuvalu-address-generator',
    name: t('tools.tuvalu-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.tuvalu-address-generator.description'),
    path: '/tools/tuvalu-address-generator',
    component: 'TuvaluAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'vanuatu-address-generator',
    name: t('tools.vanuatu-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.vanuatu-address-generator.description'),
    path: '/tools/vanuatu-address-generator',
    component: 'VanuatuAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'kosovo-address-generator',
    name: t('tools.kosovo-address-generator.name'),
    category: t(`categories.address.title`),
    categoryId: 'address',
    description: t('tools.kosovo-address-generator.description'),
    path: '/tools/kosovo-address-generator',
    component: 'KosovoAddressGenerator',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['generator']
  },
  {
    id: 'random-ip-generator',
    name: t('tools.random-ip-generator.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.random-ip-generator.description'),
    path: '/tools/random-ip-generator',
    component: 'RandomIpGenerator',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['generator', 'network']
  },
  {
    id: 'what-to-eat',
    name: t('tools.what-to-eat.name'),
    category: t(`categories.utility.title`),
    categoryId: 'utility',
    description: t('tools.what-to-eat.description'),
    path: '/tools/what-to-eat',
    component: 'WhatToEat',
    icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
    tags: ['']
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
  {
    id: 'lidar-point-cloud-viewer',
    name: t('tools.lidar-point-cloud-viewer.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.lidar-point-cloud-viewer.description'),
    path: '/tools/lidar-point-cloud-viewer',
    component: 'LidarPointCloudViewer',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['lidar', 'point', 'cloud', 'viewer']
  },
  {
    id: 'coordinate-picker-and-latitude-longitude-query-tool',
    name: t('tools.coordinate-picker-and-latitude-longitude-query-tool.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.coordinate-picker-and-latitude-longitude-query-tool.description'),
    path: '/tools/coordinate-picker-and-latitude-longitude-query-tool',
    component: 'CoordinatePickerAndLatitudeLongitudeQueryTool',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['coordinate']
  },
  {
    id: 'geodetic-measurement-calculator',
    name: t('tools.geodetic-measurement-calculator.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.geodetic-measurement-calculator.description'),
    path: '/tools/geodetic-measurement-calculator',
    component: 'GeodeticMeasurementCalculator',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['calculator', 'geodetic']
  },
  {
    id: 'elevation-contour-generator',
    name: t('tools.elevation-contour-generator.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.elevation-contour-generator.description'),
    path: '/tools/elevation-contour-generator',
    component: 'ElevationContourGenerator',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['generator']
  },
  {
    id: 'sheet-divider-calculator',
    name: t('tools.sheet-divider-calculator.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.sheet-divider-calculator.description'),
    path: '/tools/sheet-divider-calculator',
    component: 'SheetDividerCalculator',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['calculator']
  },
  {
    id: 'gnss-time-converter',
    name: t('tools.gnss-time-converter.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.gnss-time-converter.description'),
    path: '/tools/gnss-time-converter',
    component: 'GnssTimeConverter',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['timer', 'converter']
  },
  {
    id: 'baseline-calculator',
    name: t('tools.baseline-calculator.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.baseline-calculator.description'),
    path: '/tools/baseline-calculator',
    component: 'BaselineCalculator',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['calculator']
  },
  {
    id: 'area-perimeter-calculator',
    name: t('tools.area-perimeter-calculator.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.area-perimeter-calculator.description'),
    path: '/tools/area-perimeter-calculator',
    component: 'AreaPerimeterCalculator',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['calculator']
  },
  {
    id: 'coordinate-format-converter',
    name: t('tools.coordinate-format-converter.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.coordinate-format-converter.description'),
    path: '/tools/coordinate-format-converter',
    component: 'CoordinateFormatConverter',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['converter']
  },
  {
    id: 'projection-zone-finder',
    name: t('tools.projection-zone-finder.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.projection-zone-finder.description'),
    path: '/tools/projection-zone-finder',
    component: 'ProjectionZoneFinder',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['projection']
  },
  {
    id: 'coordinate-trajectory-comparator',
    name: t('tools.coordinate-trajectory-comparator.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.coordinate-trajectory-comparator.description'),
    path: '/tools/coordinate-trajectory-comparator',
    component: 'CoordinateTrajectoryComparator',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['coordinate']
  },
  {
    id: 'seven-parameter-transformer',
    name: t('tools.seven-parameter-transformer.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.seven-parameter-transformer.description'),
    path: '/tools/seven-parameter-transformer',
    component: 'SevenParameterTransformer',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['coordinate']
  },
  {
    id: 'four-parameter-transformer',
    name: t('tools.four-parameter-transformer.name'),
    category: t(`categories.surveying_and_mapping.title`),
    categoryId: 'surveying_and_mapping',
    description: t('tools.four-parameter-transformer.description'),
    path: '/tools/four-parameter-transformer',
    component: 'FourParameterTransformer',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    tags: ['coordinate']
  },

  // AI工具
  {
    id: 'imgly-remove-image-background',
    name: t('tools.imgly-remove-image-background.name'),
    category: t(`categories.ai.title`),
    categoryId: 'ai',
    description: t('tools.imgly-remove-image-background.description'),
    path: '/tools/imgly-remove-image-background',
    component: 'ImglyRemoveImageBackground',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['ai', 'image', 'background', 'remove']
  },
  {
    id: 'ai-profile-photo-analyzer',
    name: t('tools.ai-profile-photo-analyzer.name'),
    category: t(`categories.ai.title`),
    categoryId: 'ai',
    description: t('tools.ai-profile-photo-analyzer.description'),
    path: '/tools/ai-profile-photo-analyzer',
    component: 'AIProfilePhotoAnalyzer',
    icon: 'M12 4.5C7 4.5 3 8 3 12s4 7.5 9 7.5 9-3.5 9-7.5S17 4.5 12 4.5zM12 15a3 3 0 100-6 3 3 0 000 6z',
    tags: ['ai', 'image', 'colorizer', 'color', 'black', 'photo', 'retouch']
  },
  {
    id: 'ai-age-gender-estimator',
    name: t('tools.ai-age-gender-estimator.name'),
    category: t(`categories.ai.title`),
    categoryId: 'ai',
    description: t('tools.ai-age-gender-estimator.description'),
    path: '/tools/ai-age-gender-estimator',
    component: 'AIAgeGenderEstimator',
    icon: 'M12 4.5C7 4.5 3 8 3 12s4 7.5 9 7.5 9-3.5 9-7.5S17 4.5 12 4.5zM12 15a3 3 0 100-6 3 3 0 000 6z',
    tags: ['ai', 'image', 'age', 'gender', 'estimator', 'face', 'recognition', 'photo', 'retouch']
  },
  {
    id: 'ai-multi-face-tagger',
    name: t('tools.ai-multi-face-tagger.name'),
    category: t(`categories.ai.title`),
    categoryId: 'ai',
    description: t('tools.ai-multi-face-tagger.description'),
    path: '/tools/ai-multi-face-tagger',
    component: 'AIMultiFaceTagger',
    icon: 'M12 4.5C7 4.5 3 8 3 12s4 7.5 9 7.5 9-3.5 9-7.5S17 4.5 12 4.5zM12 15a3 3 0 100-6 3 3 0 000 6z',
    tags: ['ai', 'image', 'face', 'recognition', 'photo', 'retouch']
  },
  {
    id: 'ai-face-landmark-painter',
    name: t('tools.ai-face-landmark-painter.name'),
    category: t(`categories.ai.title`),
    categoryId: 'ai',
    description: t('tools.ai-face-landmark-painter.description'),
    path: '/tools/ai-face-landmark-painter',
    component: 'AIFaceLandmarkPainter',
    icon: 'M12 4.5C7 4.5 3 8 3 12s4 7.5 9 7.5 9-3.5 9-7.5S17 4.5 12 4.5zM12 15a3 3 0 100-6 3 3 0 000 6z',
    tags: ['ai', 'image', 'face', 'recognition', 'photo', 'retouch']
  },
  {
    id: 'ai-face-morph-blend',
    name: t('tools.ai-face-morph-blend.name'),
    category: t(`categories.ai.title`),
    categoryId: 'ai',
    description: t('tools.ai-face-morph-blend.description'),
    path: '/tools/ai-face-morph-blend',
    component: 'AIFaceMorphBlend',
    icon: 'M12 4.5C7 4.5 3 8 3 12s4 7.5 9 7.5 9-3.5 9-7.5S17 4.5 12 4.5zM12 15a3 3 0 100-6 3 3 0 000 6z',
    tags: ['ai', 'image', 'face', 'recognition', 'photo']
  },
  {
    id: 'ai-facial-heatmap-visualizer',
    name: t('tools.ai-facial-heatmap-visualizer.name'),
    category: t(`categories.ai.title`),
    categoryId: 'ai',
    description: t('tools.ai-facial-heatmap-visualizer.description'),
    path: '/tools/ai-facial-heatmap-visualizer',
    component: 'AIFacialHeatmapVisualizer',
    icon: 'M12 4.5C7 4.5 3 8 3 12s4 7.5 9 7.5 9-3.5 9-7.5S17 4.5 12 4.5zM12 15a3 3 0 100-6 3 3 0 000 6z',
    tags: ['ai', 'image', 'face', 'heatmap', 'visualizer', 'photo']
  },
  {
    id: 'ai-facial-focus-zoomer',
    name: t('tools.ai-facial-focus-zoomer.name'),
    category: t(`categories.ai.title`),
    categoryId: 'ai',
    description: t('tools.ai-facial-focus-zoomer.description'),
    path: '/tools/ai-facial-focus-zoomer',
    component: 'AIFacialFocusZoomer',
    icon: 'M12 4.5C7 4.5 3 8 3 12s4 7.5 9 7.5 9-3.5 9-7.5S17 4.5 12 4.5zM12 15a3 3 0 100-6 3 3 0 000 6z',
    tags: ['ai', 'image', 'face', 'heatmap', 'visualizer', 'photo']
  },

  // PDF工具
  {
    id: 'pdf-to-word-converter',
    name: t('tools.pdf-to-word-converter.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.pdf-to-word-converter.description'),
    path: '/tools/pdf-to-word-converter',
    component: 'PDFToWordConverter',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf', 'word', 'converter']
  },
  {
    id: 'pdf-to-excel-converter',
    name: t('tools.pdf-to-excel-converter.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.pdf-to-excel-converter.description'),
    path: '/tools/pdf-to-excel-converter',
    component: 'PDFToExcelConverter',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf', 'converter']
  },
  {
    id: 'pdf-to-ppt-converter',
    name: t('tools.pdf-to-ppt-converter.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.pdf-to-ppt-converter.description'),
    path: '/tools/pdf-to-ppt-converter',
    component: 'PDFToPPTConverter',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf', 'converter']
  },
  {
    id: 'pdf-to-image-converter',
    name: t('tools.pdf-to-image-converter.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.pdf-to-image-converter.description'),
    path: '/tools/pdf-to-image-converter',
    component: 'PDFToImageConverter',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf', 'image', 'converter']
  },
  {
    id: 'image-to-pdf-converter',
    name: t('tools.image-to-pdf-converter.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.image-to-pdf-converter.description'),
    path: '/tools/image-to-pdf-converter',
    component: 'ImageToPdfConverter',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf', 'image', 'converter']
  },
  {
    id: 'merge-pdf-online',
    name: t('tools.merge-pdf-online.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.merge-pdf-online.description'),
    path: '/tools/merge-pdf-online',
    component: 'MergePdfOnline',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf']
  },
  {
    id: 'pdf-splitter',
    name: t('tools.pdf-splitter.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.pdf-splitter.description'),
    path: '/tools/pdf-splitter',
    component: 'PDFSplitter',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf']
  },
  {
    id: 'pdf-watermark',
    name: t('tools.pdf-watermark.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.pdf-watermark.description'),
    path: '/tools/pdf-watermark',
    component: 'PDFWatermark',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf', 'watermark']
  },
  {
    id: 'pdf-encrypt',
    name: t('tools.pdf-encrypt.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.pdf-encrypt.description'),
    path: '/tools/pdf-encrypt',
    component: 'PdfEncrypt',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf', 'encrypt']
  },
  {
    id: 'pdf-decrypt',
    name: t('tools.pdf-decrypt.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.pdf-decrypt.description'),
    path: '/tools/pdf-decrypt',
    component: 'PdfDecrypt',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf', 'decrypt']
  },
  {
    id: 'pdf-compressor',
    name: t('tools.pdf-compressor.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.pdf-compressor.description'),
    path: '/tools/pdf-compressor',
    component: 'PdfCompressor',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf', 'compressor']
  },
  {
    id: 'pdf-rotator',
    name: t('tools.pdf-rotator.name'),
    category: t(`categories.pdf.title`),
    categoryId: 'pdf',
    description: t('tools.pdf-rotator.description'),
    path: '/tools/pdf-rotator',
    component: 'PdfRotator',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    tags: ['pdf']
  },

  // 音频工具
  {
    id: 'audio-to-mp3',
    name: t('tools.audio-to-mp3.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-mp3.description'),
    path: '/tools/audio-to-mp3',
    component: 'AudioToMp3',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-to-m4a',
    name: t('tools.audio-to-m4a.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-m4a.description'),
    path: '/tools/audio-to-m4a',
    component: 'AudioToM4a',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-to-wav',
    name: t('tools.audio-to-wav.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-wav.description'),
    path: '/tools/audio-to-wav',
    component: 'AudioToWav',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-to-pcm',
    name: t('tools.audio-to-pcm.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-pcm.description'),
    path: '/tools/audio-to-pcm',
    component: 'AudioToPcm',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-to-midi',
    name: t('tools.audio-to-midi.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-midi.description'),
    path: '/tools/audio-to-midi',
    component: 'AudioToMidi',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-to-animate',
    name: t('tools.audio-to-animate.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-animate.description'),
    path: '/tools/audio-to-animate',
    component: 'AudioToAnimate',
    icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-to-srt',
    name: t('tools.audio-to-srt.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-srt.description'),
    path: '/tools/audio-to-srt',
    component: 'AudioToSrt',
    icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-to-flac',
    name: t('tools.audio-to-flac.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-flac.description'),
    path: '/tools/audio-to-flac',
    component: 'AudioToFlac',
    icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-to-aac',
    name: t('tools.audio-to-aac.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-aac.description'),
    path: '/tools/audio-to-aac',
    component: 'AudioToAac',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-to-opus',
    name: t('tools.audio-to-opus.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-opus.description'),
    path: '/tools/audio-to-opus',
    component: 'AudioToOpus',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-to-ac3',
    name: t('tools.audio-to-ac3.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-ac3.description'),
    path: '/tools/audio-to-ac3',
    component: 'AudioToAc3',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-to-text',
    name: t('tools.audio-to-text.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-text.description'),
    path: '/tools/audio-to-text',
    component: 'AudioToText',
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
    tags: ['audio', 'convert', 'text']
  },
  {
    id: 'audio-to-ogg',
    name: t('tools.audio-to-ogg.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-to-ogg.description'),
    path: '/tools/audio-to-ogg',
    component: 'AudioToOgg',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 3 2s3 .895 3 3 3zM9 10l12-3',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-visual-editor',
    name: t('tools.audio-visual-editor.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-visual-editor.description'),
    path: '/tools/audio-visual-editor',
    component: 'AudioVisualEditor',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    tags: ['audio', 'edit']
  },
  {
    id: 'audio-volume-editor',
    name: t('tools.audio-volume-editor.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-volume-editor.description'),
    path: '/tools/audio-volume-editor',
    component: 'AudioVolumeEditor',
    icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-joiner',
    name: t('tools.audio-joiner.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-joiner.description'),
    path: '/tools/audio-joiner',
    component: 'AudioJoiner',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-reverse',
    name: t('tools.audio-reverse.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-reverse.description'),
    path: '/tools/audio-reverse',
    component: 'AudioReverse',
    icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-speed',
    name: t('tools.audio-speed.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-speed.description'),
    path: '/tools/audio-speed',
    component: 'AudioSpeed',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    tags: ['audio', 'convert']
  },
  {
    id: 'audio-loop',
    name: t('tools.audio-loop.name'),
    category: t(`categories.convert.title`),
    categoryId: 'audio',
    description: t('tools.audio-loop.description'),
    path: '/tools/audio-loop',
    component: 'AudioLoop',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    tags: ['audio', 'convert']
  },

  // 3D打印工具
  {
    id: 'stl-to-3mf-converter',
    name: t('tools.stl-to-3mf-converter.name'),
    category: t(`categories.printing_3d.title`),
    categoryId: 'printing_3d',
    description: t('tools.stl-to-3mf-converter.description'),
    path: '/tools/stl-to-3mf-converter',
    component: 'StlTo3mfConverter',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    tags: ['convert']
  },
  {
    id: 'stl-to-obj-converter',
    name: t('tools.stl-to-obj-converter.name'),
    category: t(`categories.printing_3d.title`),
    categoryId: 'printing_3d',
    description: t('tools.stl-to-obj-converter.description'),
    path: '/tools/stl-to-obj-converter',
    component: 'StlToObjConverter',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    tags: ['convert']
  },
  {
    id: 'stl-3mf-model-viewer',
    name: t('tools.stl-3mf-model-viewer.name'),
    category: t(`categories.printing_3d.title`),
    categoryId: 'printing_3d',
    description: t('tools.stl-3mf-model-viewer.description'),
    path: '/tools/stl-3mf-model-viewer',
    component: 'Stl3mfModelViewer',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    tags: []
  },
  {
    id: 'gcode-viewer',
    name: t('tools.gcode-viewer.name'),
    category: t(`categories.printing_3d.title`),
    categoryId: 'printing_3d',
    description: t('tools.gcode-viewer.description'),
    path: '/tools/gcode-viewer',
    component: 'GCodeViewer',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: []
  },
  {
    id: 'obj-to-stl-converter',
    name: t('tools.obj-to-stl-converter.name'),
    category: t(`categories.printing_3d.title`),
    categoryId: 'printing_3d',
    description: t('tools.obj-to-stl-converter.description'),
    path: '/tools/obj-to-stl-converter',
    component: 'ObjToStlConverter',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    tags: ['convert']
  },
  {
    id: '3mf-to-stl-converter',
    name: t('tools.3mf-to-stl-converter.name'),
    category: t(`categories.printing_3d.title`),
    categoryId: 'printing_3d',
    description: t('tools.3mf-to-stl-converter.description'),
    path: '/tools/3mf-to-stl-converter',
    component: 'ThreeMfToStlConverter',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    tags: ['convert']
  },
  {
    id: 'stl-to-glb-converter',
    name: t('tools.stl-to-glb-converter.name'),
    category: t(`categories.printing_3d.title`),
    categoryId: 'printing_3d',
    description: t('tools.stl-to-glb-converter.description'),
    path: '/tools/stl-to-glb-converter',
    component: 'StlToGlbConverter',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    tags: ['convert']
  },
  {
    id: 'glb-to-stl-converter',
    name: t('tools.glb-to-stl-converter.name'),
    category: t(`categories.printing_3d.title`),
    categoryId: 'printing_3d',
    description: t('tools.glb-to-stl-converter.description'),
    path: '/tools/glb-to-stl-converter',
    component: 'GlbToStlConverter',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    tags: ['convert']
  },
  {
    id: 'obj-to-3mf-converter',
    name: t('tools.obj-to-3mf-converter.name'),
    category: t(`categories.printing_3d.title`),
    categoryId: 'printing_3d',
    description: t('tools.obj-to-3mf-converter.description'),
    path: '/tools/obj-to-3mf-converter',
    component: 'ObjToThreeMfConverter',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    tags: ['convert']
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
        result[tagId].push(markRaw({ ...tool }))
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
      result[tool.categoryId].push(markRaw({ ...tool }))
    }
  })

  return markRaw(result)
})
provide('toolsByCategory', toolsByCategory)

// 在组件挂载时检查本地存储中的暗黑模式设置
onMounted(() => {
  const savedMode = localStorage.getItem('darkMode');
  const darkMode = savedMode === null ? true : savedMode === 'true';

  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
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

// 当路由变化时，根据路由参数更新语言
watch(() => route.params.lang, (newLang) => {
  if (newLang && locale.value !== newLang && supportedLanguages.includes(newLang)) {
    setLanguage(newLang, route.params.id);
  }
})
</script>