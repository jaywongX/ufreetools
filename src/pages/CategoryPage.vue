<template>
  <div>
    <!-- 分类页面标题 -->
    <div class="mb-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ categoryTitle }}</h1>
      <p class="text-gray-600 dark:text-gray-300">{{ categoryDescription }}</p>
    </div>

    <!-- 工具筛选 -->
    <div class="mb-6 flex flex-wrap gap-3">
      <button 
        class="px-3 py-1 text-sm rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary-light"
      >
        全部
      </button>
      <button 
        v-for="tag in popularTags" 
        :key="tag"
        class="px-3 py-1 text-sm rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary-light"
      >
        {{ tag }}
      </button>
    </div>

    <!-- 工具列表 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div 
        v-for="tool in tools" 
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
        <router-link :to="`/tool/${tool.id}`" class="text-sm text-primary dark:text-primary-light hover:underline">
          使用工具
        </router-link>
      </div>
    </div>

    <!-- 无结果 -->
    <div v-if="tools.length === 0" class="text-center py-12">
      <p class="text-gray-500 dark:text-gray-400">该分类下暂无工具</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 获取分类ID
const categoryId = computed(() => route.params.id)

// 分类信息
const categoryInfo = ref({
  dev: { title: '开发工具', description: '为开发者提供的编程、调试和优化工具' },
  design: { title: '设计工具', description: '辅助设计师创建和优化视觉作品的工具' },
  text: { title: '文本工具', description: '处理、编辑和转换文本内容的工具' },
  image: { title: '图像与多媒体工具', description: '图像处理、优化和转换工具' },
  convert: { title: '转换工具', description: '各种文件格式之间的转换工具' }
})

// 分类标题和描述
const categoryTitle = computed(() => {
  return categoryInfo.value[categoryId.value]?.title || '分类工具'
})

const categoryDescription = computed(() => {
  return categoryInfo.value[categoryId.value]?.description || '实用工具集合'
})

// 流行标签
const popularTags = ref(['常用', '最新', '热门', '高级'])

// 示例工具数据
const allTools = ref([
  { id: 1, name: 'JSON格式化', category: '开发工具', description: '在线JSON格式化与验证工具，支持压缩和美化', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 2, name: '颜色选择器', category: '设计工具', description: '强大的颜色选择与调色板生成工具', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01', categoryId: 'design' },
  { id: 3, name: 'Markdown编辑器', category: '文本工具', description: '简洁易用的Markdown编辑与预览工具', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', categoryId: 'text' },
  { id: 4, name: '图片压缩', category: '图像与多媒体工具', description: '高效无损的图片压缩工具', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', categoryId: 'image' },
  { id: 5, name: '正则表达式测试', category: '开发工具', description: '在线正则表达式测试与调试工具', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', categoryId: 'dev' },
  { id: 6, name: 'CSS渐变生成器', category: '设计工具', description: '简单易用的CSS渐变背景生成工具', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01', categoryId: 'design' },
  { id: 7, name: '二维码生成器', category: '通用工具', description: '自定义生成清晰的二维码图片', icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z', categoryId: 'convert' },
  { id: 8, name: 'SVG优化器', category: '图像与多媒体工具', description: '优化SVG文件大小，提升加载性能', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', categoryId: 'image' }
])

// 筛选当前分类的工具
const tools = computed(() => {
  if (!categoryId.value) return []
  return allTools.value.filter(tool => tool.categoryId === categoryId.value)
})
</script> 