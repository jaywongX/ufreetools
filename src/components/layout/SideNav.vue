<template>
  <aside class="w-64 bg-white dark:bg-gray-800 h-[calc(100vh-64px)] flex flex-col">
    <div class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
      <div class="p-6">
        <!-- 导航菜单 -->
        <nav class="space-y-6">
          <!-- 开发工具 -->
          <div>
            <div 
              class="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
              @click="toggleCategory('dev')"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>开发工具</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{'rotate-180': !expandedCategories.dev}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul class="ml-7 space-y-1 overflow-hidden transition-all" :class="{'h-0': !expandedCategories.dev, 'py-1': expandedCategories.dev}">
              <li>
                <router-link 
                  to="/tool/1" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  JSON格式化
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/14" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  Mock API生成器
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/13" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  SQL格式化
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/12" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  时间戳转换
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/5" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  正则表达式测试
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/11" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  Base64编解码
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/9" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  代码美化/压缩
                </router-link>
              </li>
              <li>
                <router-link to="/tool/10" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block">
                  代码差异比较
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/15" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  HTTP状态码查询
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/18" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  URL编码/解码
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/19" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  HTML实体编码
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/20" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  XML解析/格式化
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/22" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  CSS压缩/美化
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/23" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  WebSocket测试
                </router-link>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-500 text-sm py-1 block">
                  查看全部...
                </a>
              </li>
            </ul>
          </div>
          
          <!-- 设计工具 -->
          <div>
            <div 
              class="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
              @click="toggleCategory('design')"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <span>设计工具</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{'rotate-180': !expandedCategories.design}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul class="ml-7 space-y-1 overflow-hidden transition-all" :class="{'h-0': !expandedCategories.design, 'py-1': expandedCategories.design}">
              <li>
                <router-link to="/tool/2" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block">
                  颜色选择器
                </router-link>
              </li>
              <li>
                <router-link to="/tool/6" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block">
                  CSS渐变生成器
                </router-link>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-500 text-sm py-1 block">
                  查看全部...
                </a>
              </li>
            </ul>
          </div>
          
          <!-- 文本工具 -->
          <div>
            <div 
              class="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
              @click="toggleCategory('text')"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#EC4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>文本工具</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{'rotate-180': !expandedCategories.text}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul class="ml-7 space-y-1 overflow-hidden transition-all" :class="{'h-0': !expandedCategories.text, 'py-1': expandedCategories.text}">
              <li>
                <router-link to="/tool/3" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block">
                  Markdown编辑器
                </router-link>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-500 text-sm py-1 block">
                  查看全部...
                </a>
              </li>
            </ul>
          </div>
          
          <!-- 图像工具 -->
          <div>
            <div 
              class="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
              @click="toggleCategory('image')"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>图像工具</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{'rotate-180': !expandedCategories.image}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul class="ml-7 space-y-1 overflow-hidden transition-all" :class="{'h-0': !expandedCategories.image, 'py-1': expandedCategories.image}">
              <li>
                <router-link to="/tool/4" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block">
                  图片压缩
                </router-link>
              </li>
              <li>
                <router-link to="/tool/8" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block">
                  SVG优化器
                </router-link>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-500 text-sm py-1 block">
                  查看全部...
                </a>
              </li>
            </ul>
          </div>
          
          <!-- 转换工具 -->
          <div>
            <div 
              class="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
              @click="toggleCategory('convert')"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span>转换工具</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{'rotate-180': !expandedCategories.convert}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul class="ml-7 space-y-1 overflow-hidden transition-all" :class="{'h-0': !expandedCategories.convert, 'py-1': expandedCategories.convert}">
              <li>
                <router-link to="/tool/7" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block">
                  二维码生成器
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/24" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  YAML/JSON转换
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/25" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  Markdown转HTML
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/44" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  CSV/JSON转换
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/45" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  进制转换工具
                </router-link>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-500 text-sm py-1 block">
                  查看全部...
                </a>
              </li>
            </ul>
          </div>
          
          <!-- 数据与加密工具 -->
          <div>
            <div 
              class="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
              @click="toggleCategory('crypto')"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>数据与加密工具</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{'rotate-180': !expandedCategories.crypto}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul class="ml-7 space-y-1 overflow-hidden transition-all" :class="{'h-0': !expandedCategories.crypto, 'py-1': expandedCategories.crypto}">
              <li>
                <router-link 
                  to="/tool/27" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  密码生成器
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/28" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  密码强度检测
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/29" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  哈希运算
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/30" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  RSA算法
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/31" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  SM2算法
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/37" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  对称加密算法
                </router-link>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-500 text-sm py-1 block">
                  查看全部...
                </a>
              </li>
            </ul>
          </div>
          
          <!-- 网络与协议工具 -->
          <div>
            <div 
              class="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
              @click="toggleCategory('network')"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>网络与协议工具</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{'rotate-180': !expandedCategories.network}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul class="ml-7 space-y-1 overflow-hidden transition-all" :class="{'h-0': !expandedCategories.network, 'py-1': expandedCategories.network}">
              <li>
                <router-link 
                  to="/tool/32" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  API请求工具
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/33" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  CORS配置生成器
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/34" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  MQTT消息测试
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/35" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  cURL转代码
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/36" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  gRPC调试器
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/46" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  User-Agent生成器
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/48" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  URL参数解析器
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/49" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  前端代理检测器
                </router-link>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-500 text-sm py-1 block">
                  更多工具即将上线...
                </a>
              </li>
            </ul>
          </div>
          
          <!-- 添加新的代码处理工具类别 -->
          <div>
            <div 
              class="flex items-center justify-between text-gray-700 dark:text-gray-300 mb-2 cursor-pointer"
              @click="toggleCategory('codeproc')"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>代码处理工具</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{'rotate-180': !expandedCategories.codeproc}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul class="ml-7 space-y-1 overflow-hidden transition-all" :class="{'h-0': !expandedCategories.codeproc, 'py-1': expandedCategories.codeproc}">
              <li>
                <router-link 
                  to="/tool/38" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  代码混淆
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/39" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  OpenAPI→TS客户端
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/42" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  代码片段管理器
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/tool/43" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light text-sm py-1 block"
                  active-class="text-primary dark:text-primary-light font-medium"
                >
                  敏感词过滤
                </router-link>
              </li>
              <li>
                <a href="#" class="text-gray-500 dark:text-gray-500 text-sm py-1 block">
                  更多代码处理工具即将上线...
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 监听路由变化
watch(() => route.path, (newPath) => {
  console.log('当前路由路径:', newPath)
})

// 定义各分类是否展开的状态
const expandedCategories = reactive({
  dev: true,
  design: true,
  text: true,
  image: true,
  convert: true,
  crypto: true,
  network: true,
  codeproc: true // 新增代码处理工具类别
})

// 添加手动导航功能进行测试
function testNavigation(toolId) {
  console.log('尝试导航到工具:', toolId)
  router.push(`/tool/${toolId}`)
}

// 切换分类展开/收起状态
function toggleCategory(category) {
  expandedCategories[category] = !expandedCategories[category]
}
</script>

<style>
/* 添加过渡动画 */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.rotate-180 {
  transform: rotate(180deg);
}

/* 自定义滚动条样式 */
.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
  border-radius: 2px;
}

.dark .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
  background-color: #4b5563;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background-color: transparent;
}
</style> 