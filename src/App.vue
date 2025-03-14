<template>
  <div class="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
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

// 全局标签定义 - 核心标签
const allTags = ref([
  // 开发工具相关
  { id: 'dev', name: '开发', color: 'blue' },
  { id: 'json', name: 'JSON', color: 'blue' },
  { id: 'regex', name: '正则', color: 'red' },
  { id: 'api', name: 'API', color: 'teal' },
  
  // 格式化与转换
  { id: 'format', name: '格式化', color: 'green' },
  { id: 'convert', name: '转换', color: 'yellow' },
  { id: 'base64', name: 'Base64', color: 'indigo' },
  { id: 'time', name: '时间', color: 'amber' },
  
  // 文本处理
  { id: 'text', name: '文本', color: 'gray' },
  { id: 'markdown', name: 'Markdown', color: 'lime' },
  
  // 安全相关
  { id: 'crypto', name: '加密', color: 'red' },
  { id: 'security', name: '安全', color: 'amber' },
  { id: 'hash', name: '哈希', color: 'purple' },
  
  // 网络相关
  { id: 'network', name: '网络', color: 'cyan' },
  { id: 'http', name: 'HTTP', color: 'teal' },
  
  // 通用功能
  { id: 'generate', name: '生成', color: 'rose' },
  { id: 'utility', name: '实用', color: 'gray' },
  { id: 'test', name: '测试', color: 'orange' }
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
    tags: ['json', 'format', 'dev']
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
    tags: ['dev', 'test']
  },
  { 
    id: 'xml-formatter', 
    name: 'XML格式化', 
    category: '开发工具', 
    categoryId: 'dev',
    description: 'XML文档格式化工具', 
    path: '/tools/xml-formatter',
    component: 'XmlFormatter',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['xml', 'format', 'dev']
  },
  { 
    id: 'jwt-debugger', 
    name: 'JWT调试器', 
    category: '开发工具', 
    categoryId: 'dev',
    description: 'JWT令牌解析和验证工具', 
    path: '/tools/jwt-debugger',
    component: 'JwtDebugger',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['dev', 'security']
  },
  { 
    id: 'code-diff', 
    name: '代码对比', 
    category: '开发工具', 
    categoryId: 'dev',
    description: '代码差异对比工具', 
    path: '/tools/code-diff',
    component: 'CodeDiff',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['dev', 'utility']
  },
  {
    id: 'code-obfuscator',
    name: '代码混淆',
    category: '开发工具',
    categoryId: 'dev',
    description: '代码混淆工具，提高代码安全性',
    path: '/tools/code-obfuscator',
    component: 'CodeObfuscator',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['dev', 'security']
  },
  // {
  //   id: 'code-complexity',
  //   name: '代码复杂度',
  //   category: '开发工具',
  //   categoryId: 'dev',
  //   description: '代码复杂度分析工具',
  //   path: '/tools/code-complexity',
  //   component: 'CodeComplexity',
  //   icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  //   tags: ['dev', 'utility']
  // },
  // {
  //   id: 'code-formatter',
  //   name: '代码格式化',
  //   category: '开发工具',
  //   categoryId: 'dev',
  //   description: '通用代码格式化工具',
  //   path: '/tools/code-formatter',
  //   component: 'CodeFormatter',
  //   icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  //   tags: ['dev', 'format']
  // },
  // {
  //   id: 'code-highlighter',
  //   name: '代码高亮',
  //   category: '开发工具',
  //   categoryId: 'dev',
  //   description: '代码语法高亮工具',
  //   path: '/tools/code-highlighter',
  //   component: 'CodeHighlighter',
  //   icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  //   tags: ['dev', 'utility']
  // },
  {
    id: 'git-conflict-resolver',
    name: 'Git冲突解决',
    category: '开发工具',
    categoryId: 'dev',
    description: 'Git冲突解决工具',
    path: '/tools/git-conflict-resolver',
    component: 'GitConflictResolver',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['dev', 'utility']
  },
  {
    id: 'openapi-generator',
    name: 'OpenAPI生成',
    category: '开发工具',
    categoryId: 'dev',
    description: 'OpenAPI文档生成工具',
    path: '/tools/openapi-generator',
    component: 'OpenApiGenerator',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['dev', 'api']
  },
  {
    id: 'cors-generator',
    name: 'CORS配置生成',
    category: '开发工具',
    categoryId: 'dev',
    description: 'CORS跨域配置生成工具',
    path: '/tools/cors-generator',
    component: 'CorsGenerator',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['dev', 'network']
  },
  {
    id: 'grpc-debugger',
    name: 'gRPC调试',
    category: '开发工具',
    categoryId: 'dev',
    description: 'gRPC接口调试工具',
    path: '/tools/grpc-debugger',
    component: 'GrpcDebugger',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['dev', 'network']
  },
  // 网络工具
  {
    id: 'api-request-tool',
    name: 'API请求工具',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'HTTP API测试工具',
    path: '/tools/api-request-tool',
    component: 'ApiRequestTool',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'api', 'http']
  },
  {
    id: 'websocket-tester',
    name: 'WebSocket测试',
    category: '开发工具',
    categoryId: 'dev',
    description: 'WebSocket连接测试工具',
    path: '/tools/websocket-tester',
    component: 'WebSocketTester',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'websocket']
  },
  {
    id: 'mqtt-tester',
    name: 'MQTT测试',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'MQTT协议测试工具',
    path: '/tools/mqtt-tester',
    component: 'MqttTester',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'mqtt']
  },
  {
    id: 'network-speed-test',
    name: '网络速度测试',
    category: '网络与协议工具',
    categoryId: 'network',
    description: '网络连接速度测试工具',
    path: '/tools/network-speed-test',
    component: 'NetworkSpeedTest',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'test']
  },
  {
    id: 'http-proxy-detector',
    name: 'HTTP代理检测',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'HTTP代理服务器检测工具',
    path: '/tools/http-proxy-detector',
    component: 'HttpProxyDetector',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'security']
  },
  {
    id: 'url-params-parser',
    name: 'URL参数解析',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'URL参数解析工具',
    path: '/tools/url-params-parser',
    component: 'UrlParamsParser',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'utility']
  },
  {
    id: 'url-encode-decode',
    name: 'URL编解码',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'URL编码解码工具',
    path: '/tools/url-encode-decode',
    component: 'UrlEncodeDecode',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'convert']
  },
  {
    id: 'ip-lookup',
    name: 'IP查询',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'IP地址查询工具',
    path: '/tools/ip-lookup',
    component: 'IpLookup',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'utility']
  },
  {
    id: 'page-redirect-checker',
    name: '页面重定向检查',
    category: '网络与协议工具',
    categoryId: 'network',
    description: '页面重定向检查工具',
    path: '/tools/page-redirect-checker',
    component: 'PageRedirectChecker',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'utility']
  },
  {
    id: 'request-header-editor',
    name: '请求头编辑',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'HTTP请求头编辑工具',
    path: '/tools/request-header-editor',
    component: 'RequestHeaderEditor',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'utility']
  },
  {
    id: 'http-header-security-checker',
    name: 'HTTP安全头检查',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'HTTP安全头检查工具',
    path: '/tools/http-header-security-checker',
    component: 'HttpHeaderSecurityChecker',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'security']
  },
  {
    id: 'http-status-code-lookup',
    name: 'HTTP状态码查询',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'HTTP状态码查询工具',
    path: '/tools/http-status-code-lookup',
    component: 'HttpStatusCodeLookup',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'utility']
  },
  {
    id: 'user-agent-parser',
    name: 'UA解析',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'User-Agent解析工具',
    path: '/tools/user-agent-parser',
    component: 'UserAgentParser',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'utility']
  },
  {
    id: 'user-agent-generator',
    name: 'UA生成',
    category: '网络与协议工具',
    categoryId: 'network',
    description: 'User-Agent生成工具',
    path: '/tools/user-agent-generator',
    component: 'UserAgentGenerator',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    tags: ['network', 'utility']
  },
  // 图像工具
  {
    id: 'image-mosaic-generator',
    name: '图片马赛克',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '图片马赛克生成工具',
    path: '/tools/image-mosaic-generator',
    component: 'ImageMosaicGenerator',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image']
  },
  {
    id: 'image-pixelator',
    name: '图片像素化',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '图片像素化工具',
    path: '/tools/image-pixelator',
    component: 'ImagePixelator',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image']
  },
  {
    id: 'image-to-ascii',
    name: '图片转ASCII',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '图片转ASCII工具',
    path: '/tools/image-to-ascii',
    component: 'ImageToAscii',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'convert']
  },
  {
    id: 'image-exif-viewer',
    name: '图片EXIF查看',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '图片EXIF信息查看工具',
    path: '/tools/image-exif-viewer',
    component: 'ImageExifViewer',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'utility']
  },
  {
    id: 'image-batch-resizer',
    name: '图片批量缩放',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '图片批量缩放工具',
    path: '/tools/image-batch-resizer',
    component: 'ImageBatchResizer',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'utility']
  },
  {
    id: 'image-color-extractor',
    name: '图片颜色提取',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '图片颜色提取工具',
    path: '/tools/image-color-extractor',
    component: 'ImageColorExtractor',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'utility']
  },
  {
    id: 'gif-frame-extractor',
    name: 'GIF帧提取',
    category: '图像与多媒体',
    categoryId: 'image',
    description: 'GIF帧提取工具',
    path: '/tools/gif-frame-extractor',
    component: 'GifFrameExtractor',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'utility']
  },
  {
    id: 'id-photo-maker',
    name: '证件照制作',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '证件照制作工具',
    path: '/tools/id-photo-maker',
    component: 'IdPhotoMaker',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image', 'utility']
  },
  // 转换工具
  {
    id: 'number-converter',
    name: '进制转换',
    category: '转换工具',
    categoryId: 'convert',
    description: '数字进制转换工具',
    path: '/tools/number-converter',
    component: 'NumberConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert']
  },
  {
    id: 'base64-encoder-decoder',
    name: 'Base64编解码',
    category: '转换工具',
    categoryId: 'convert',
    description: 'Base64编码解码工具',
    path: '/tools/base64-encoder-decoder',
    component: 'Base64EncoderDecoder',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'base64']
  },
  {
    id: 'yaml-json-converter',
    name: 'YAML/JSON转换',
    category: '转换工具',
    categoryId: 'convert',
    description: 'YAML和JSON格式互转工具',
    path: '/tools/yaml-json-converter',
    component: 'YamlJsonConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'json']
  },
  {
    id: 'xml-json-converter',
    name: 'XML/JSON转换',
    category: '转换工具',
    categoryId: 'convert',
    description: 'XML和JSON格式互转工具',
    path: '/tools/xml-json-converter',
    component: 'XmlJsonConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'json']
  },
  {
    id: 'timestamp-converter',
    name: '时间戳转换',
    category: '转换工具',
    categoryId: 'convert',
    description: '时间戳转换工具',
    path: '/tools/timestamp-converter',
    component: 'TimestampConverter',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    tags: ['convert', 'time']
  },
  // 开发工具
  // {
  //   id: 'html-formatter',
  //   name: 'HTML格式化',
  //   category: '开发工具',
  //   categoryId: 'dev',
  //   description: 'HTML代码格式化工具',
  //   path: '/tools/html-formatter',
  //   component: 'HtmlFormatter',
  //   icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  //   tags: ['dev', 'format']
  // },
  // {
  //   id: 'css-formatter',
  //   name: 'CSS格式化',
  //   category: '开发工具',
  //   categoryId: 'dev',
  //   description: 'CSS代码格式化工具',
  //   path: '/tools/css-formatter',
  //   component: 'CssFormatter',
  //   icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  //   tags: ['dev', 'format']
  // },
  // {
  //   id: 'javascript-formatter',
  //   name: 'JavaScript格式化',
  //   category: '开发工具',
  //   categoryId: 'dev',
  //   description: 'JavaScript代码格式化工具',
  //   path: '/tools/javascript-formatter',
  //   component: 'JavaScriptFormatter',
  //   icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  //   tags: ['dev', 'format']
  // },
  // {
  //   id: 'sql-formatter',
  //   name: 'SQL格式化',
  //   category: '开发工具',
  //   categoryId: 'dev',
  //   description: 'SQL代码格式化工具',
  //   path: '/tools/sql-formatter',
  //   component: 'SQLFormatter',
  //   icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  //   tags: ['dev', 'format']
  // },
  {
    id: 'mock-api-generator',
    name: 'Mock API生成',
    category: '开发工具',
    categoryId: 'dev',
    description: 'Mock API数据生成工具',
    path: '/tools/mock-api-generator',
    component: 'MockAPIGenerator',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    tags: ['dev', 'api', 'generate']
  },
  // 文本工具
  {
    id: 'markdown-editor',
    name: 'Markdown编辑器',
    category: '文本与编辑',
    categoryId: 'text',
    description: 'Markdown在线编辑工具',
    path: '/tools/markdown-editor',
    component: 'MarkdownEditor',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    tags: ['text', 'markdown']
  },
  {
    id: 'markdown-to-html',
    name: 'Markdown转HTML',
    category: '文本与编辑',
    categoryId: 'text',
    description: 'Markdown转HTML工具',
    path: '/tools/markdown-to-html',
    component: 'MarkdownToHtml',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    tags: ['text', 'markdown', 'convert']
  },
  {
    id: 'html-entity-encoder',
    name: 'HTML实体编码',
    category: '文本与编辑',
    categoryId: 'text',
    description: 'HTML实体编码转换工具',
    path: '/tools/html-entity-encoder',
    component: 'HtmlEntityEncoder',
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    tags: ['text', 'convert']
  },
  // 设计工具
  {
    id: 'color-picker',
    name: '颜色选择器',
    category: '设计工具',
    categoryId: 'design',
    description: '颜色选择和转换工具',
    path: '/tools/color-picker',
    component: 'ColorPicker',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['design']
  },
  {
    id: 'color-scheme-generator',
    name: '配色方案生成',
    category: '设计工具',
    categoryId: 'design',
    description: '配色方案生成工具',
    path: '/tools/color-scheme-generator',
    component: 'ColorSchemeGenerator',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['design']
  },
  {
    id: 'css-gradient-generator',
    name: 'CSS渐变生成',
    category: '设计工具',
    categoryId: 'design',
    description: 'CSS渐变效果生成工具',
    path: '/tools/css-gradient-generator',
    component: 'CssGradientGenerator',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    tags: ['design']
  },
  // 图像工具
  {
    id: 'image-compressor',
    name: '图片压缩',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '图片压缩工具',
    path: '/tools/image-compressor',
    component: 'ImageCompressor',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image']
  },
  {
    id: 'image-filters',
    name: '图片滤镜',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '图片滤镜效果工具',
    path: '/tools/image-filters',
    component: 'ImageFilters',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image']
  },
  {
    id: 'image-cropper',
    name: '图片裁剪',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '图片裁剪工具',
    path: '/tools/image-cropper',
    component: 'ImageCropper',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image']
  },
  {
    id: 'image-watermark',
    name: '图片水印',
    category: '图像与多媒体',
    categoryId: 'image',
    description: '图片水印添加工具',
    path: '/tools/image-watermark',
    component: 'ImageWatermark',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    tags: ['image']
  },
  // 安全工具
  {
    id: 'hash-calculator',
    name: '哈希计算',
    category: '密码与安全',
    categoryId: 'crypto',
    description: '各种哈希算法计算工具',
    path: '/tools/hash-calculator',
    component: 'HashCalculator',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['security', 'hash']
  },
  {
    id: 'rsa-crypto',
    name: 'RSA加解密',
    category: '密码与安全',
    categoryId: 'crypto',
    description: 'RSA加密解密工具',
    path: '/tools/rsa-crypto',
    component: 'RsaCrypto',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['security', 'crypto']
  },
  {
    id: 'symmetric-crypto',
    name: '对称加密',
    category: '密码与安全',
    categoryId: 'crypto',
    description: '对称加密解密工具',
    path: '/tools/symmetric-crypto',
    component: 'SymmetricCrypto',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['security', 'crypto']
  },
  {
    id: 'sm2-crypto',
    name: 'SM2加密',
    category: '密码与安全',
    categoryId: 'crypto',
    description: '国密SM2加密工具',
    path: '/tools/sm2-crypto',
    component: 'Sm2Crypto',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['security', 'crypto']
  },
  {
    id: 'password-generator',
    name: '密码生成',
    category: '密码与安全',
    categoryId: 'crypto',
    description: '安全密码生成工具',
    path: '/tools/password-generator',
    component: 'PasswordGenerator',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    tags: ['security', 'generate']
  },
  // 实用工具
  {
    id: 'qrcode-generator',
    name: '二维码生成',
    category: '实用效率',
    categoryId: 'utility',
    description: '二维码生成工具',
    path: '/tools/qrcode-generator',
    component: 'QRCodeGenerator',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    tags: ['utility', 'generate']
  }
])

// 对所有工具添加路径和组件映射
allTools.value.forEach(tool => {
  if (!tool.path) {
    tool.path = `/tools/${tool.id}`
  }
  
  if (!tool.component && tool.name) {
    const componentName = tool.name.replace(/\s+/g, '')
    tool.component = componentName
  }
})

// 提供响应式数据
provide('allTools', allTools)
provide('allTags', allTags)
provide('categories', categories)

// 按标签分组的工具
const toolsByTag = computed(() => {
  const result = {}
  
  // 初始化每个标签的空数组
  allTags.value.forEach(tag => {
    result[tag.id] = []
  })
  
  // 根据标签分组工具
  allTools.value.forEach(tool => {
    if (tool.tags) {
      tool.tags.forEach(tagId => {
        if (result[tagId]) {
          result[tagId].push(tool)
        }
      })
    }
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