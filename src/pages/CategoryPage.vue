<template>
  <div>
    <!-- 分类页面标题 -->
    <div class="mb-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ $t(`categories.${categoryId}.title`, categoryTitle) }}</h1>
      <p class="text-gray-600 dark:text-gray-300">{{ $t(`categories.${categoryId}.description`, categoryDescription) }}</p>
    </div>

    <!-- 工具筛选 -->
    <!-- <div class="mb-6 flex flex-wrap gap-3">
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
    </div> -->

    <!-- 工具列表 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ToolCard 
        v-for="tool in tools" 
        :key="tool.id"
        :tool="tool"
      />
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
import ToolCard from '../components/ui/ToolCard.vue'
import { useInternationalizedRoute } from '../composables/useInternationalizedRoute'

const route = useRoute()
const { t } = useI18n()
const { localizedRoute } = useInternationalizedRoute()

// 获取分类ID
const categoryId = computed(() => route.params.id)

// 分类信息
const categoryInfo = ref({
  dev: { title: '开发工具', description: '为开发者提供的编程、调试和优化工具' },
  design: { title: '设计工具', description: '辅助设计师创建和优化视觉作品的工具' },
  convert: { title: '转换工具', description: '各种文件格式之间的转换工具' },
  text: { title: '文本编辑', description: '处理、编辑和转换文本内容的工具' },
  image: { title: '图像处理', description: '图像处理、优化和转换工具' },
  network: { title: '网络工具', description: '网络分析、调试和测试工具' },
  crypto: { title: '密码安全', description: '密码生成、加密、解密与安全工具' },
  utility: { title: '实用工具', description: '各种实用的日常工具' },
})

// 分类标题和描述
const categoryTitle = computed(() => {
  return categoryInfo.value[categoryId.value]?.title
})

const categoryDescription = computed(() => {
  return categoryInfo.value[categoryId.value]?.description
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