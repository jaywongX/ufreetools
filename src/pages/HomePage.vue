<template>
  <div>
    <!-- 欢迎信息 -->
    <section class="mb-10">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          欢迎使用开发工具站
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
          高效、免费、简洁的在线工具，让您的工作更轻松
        </p>
      </div>
    </section>
  
    <!-- 热门工具 -->
    <section class="mb-10">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">热门工具</h2>
        <a href="#" class="text-primary dark:text-primary-light text-sm hover:underline">查看全部</a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div 
          v-for="tool in popularTools.slice(0, 6)" 
          :key="tool.id"
          class="tool-card flex flex-col"
        >
          <div class="flex items-start mb-3">
            <div class="w-10 h-10 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tool.icon" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium">{{ tool.name }}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ tool.category }}</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-3 flex-grow">{{ tool.description }}</p>
          <router-link :to="`/tool/${tool.id}`" class="text-sm text-primary dark:text-primary-light hover:underline">使用工具</router-link>
        </div>
      </div>
    </section>
  
    <!-- 最新添加 -->
    <section>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">最新添加</h2>
        <a href="#" class="text-primary dark:text-primary-light text-sm hover:underline">查看全部</a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div 
          v-for="tool in newTools.slice(0, 6)" 
          :key="tool.id"
          class="tool-card flex flex-col"
        >
          <div class="flex items-start mb-3">
            <div class="w-10 h-10 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tool.icon" />
              </svg>
            </div>
            <div>
              <h3 class="font-medium">{{ tool.name }}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ tool.category }}</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-3 flex-grow">{{ tool.description }}</p>
          <router-link :to="`/tool/${tool.id}`" class="text-sm text-primary dark:text-primary-light hover:underline">使用工具</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 示例数据
const categories = ref([
  { id: 'dev', name: '开发工具', count: 18, icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { id: 'design', name: '设计工具', count: 12, icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { id: 'text', name: '文本工具', count: 9, icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
  { id: 'image', name: '图像工具', count: 14, icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { id: 'convert', name: '转换工具', count: 7, icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' }
])

const popularTools = ref([
  { id: 1, name: 'JSON格式化', category: '开发工具', description: '在线JSON格式化与验证工具，支持压缩和美化', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { id: 2, name: '颜色选择器', category: '设计工具', description: '强大的颜色选择与调色板生成工具', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
  { id: 3, name: 'Markdown编辑器', category: '文本工具', description: '简洁易用的Markdown编辑与预览工具', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
  { id: 4, name: '图片压缩', category: '图像工具', description: '高效无损的图片压缩工具', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' }
])

const newTools = ref([
  { id: 5, name: '正则表达式测试', category: '开发工具', description: '在线正则表达式测试与调试工具', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { id: 6, name: 'CSS渐变生成器', category: '设计工具', description: '简单易用的CSS渐变背景生成工具', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
  { id: 7, name: '二维码生成器', category: '通用工具', description: '自定义生成清晰的二维码图片', icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z' },
  { id: 8, name: 'SVG优化器', category: '图像工具', description: '优化SVG文件大小，提升加载性能', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' }
])
</script>