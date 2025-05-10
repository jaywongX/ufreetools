<template>
  <div>
    <!-- 分类页面标题 -->
    <div class="mb-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ $t(`categories.${categoryId}.title`) }}</h1>
      <p class="text-gray-600 dark:text-gray-300">{{ $t(`categories.${categoryId}.description`) }}</p>
    </div>

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
// 当从 URL 读取 categoryId 时，将连字符转回下划线
const categoryId = computed(() => route.params.id.replace(/-/g, '_'))

// 使用注入的全局工具列表，而不是本地定义
const allTools = inject('allTools')

// 筛选当前分类的工具
const tools = computed(() => {
  if (!categoryId.value) return []
  return allTools.value.filter(tool => tool.categoryId === categoryId.value)
})

</script> 