<template>
  <div>
    <!-- 分类页面标题 -->
    <div class="mb-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ $t(`categories.${categoryId}.title`, categoryTitle) }}</h1>
      <p class="text-gray-600 dark:text-gray-300">{{ $t(`categories.${categoryId}.description`, categoryDescription) }}</p>
    </div>

    <!-- 工具筛选 -->
    <div class="mb-6 flex flex-wrap gap-3">
      <button 
        class="px-3 py-1 text-sm rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary-light"
      >
        {{ $t('common.all') }}
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
            <h3 class="font-medium">{{ $t(`tools.${tool.id}.name`, tool.name) }}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t(`categories.${tool.categoryId}`, tool.category) }}</p>
          </div>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-3 flex-grow">{{ $t(`tools.${tool.id}.description`, tool.description) }}</p>
        <router-link :to="`/tool/${tool.id}`" class="text-sm text-primary dark:text-primary-light hover:underline">
          {{ $t('common.useTool') }}
        </router-link>
      </div>
    </div>

    <!-- 无结果 -->
    <div v-if="tools.length === 0" class="text-center py-12">
      <p class="text-gray-500 dark:text-gray-400">{{ $t('common.noToolsInCategory') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

// 获取分类ID
const categoryId = computed(() => route.params.id)

// 分类信息
const categoryInfo = ref({
  dev: { title: '开发工具', description: '为开发者提供的编程、调试和优化工具' },
  design: { title: '设计工具', description: '辅助设计师创建和优化视觉作品的工具' },
  text: { title: '文本与编辑', description: '处理、编辑和转换文本内容的工具' },
  image: { title: '图像与多媒体', description: '图像处理、优化和转换工具' },
  convert: { title: '转换工具', description: '各种文件格式之间的转换工具' }
})

// 分类标题和描述
const categoryTitle = computed(() => {
  return categoryInfo.value[categoryId.value]?.title || '分类工具'
})

const categoryDescription = computed(() => {
  return categoryInfo.value[categoryId.value]?.description || '实用效率集合'
})

// 流行标签
const popularTags = ref(['常用', '最新', '热门', '高级'])

// 使用注入的全局工具列表，而不是本地定义
const allTools = inject('allTools')

// 筛选当前分类的工具
const tools = computed(() => {
  if (!categoryId.value) return []
  return allTools.value.filter(tool => tool.categoryId === categoryId.value)
})
</script> 