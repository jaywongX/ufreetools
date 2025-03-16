<template>
  <div>
    <!-- 分类页面标题 -->
    <div class="mb-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ categoryTitle }}</h1>
      <p class="text-gray-600 dark:text-gray-300">{{ categoryDescription }}</p>
    </div>

    <!-- 标签筛选 -->
    <section class="mb-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold">标签筛选</h2>
      </div>

      <!-- 标签列表 -->
      <div class="flex flex-wrap gap-3">
        <div 
          v-for="tag in (Array.isArray(allTags) ? allTags.slice(0, 12) : [])" 
          :key="tag.id"
          @click="addTagToFilter(tag.id)"
          :class="[
            'tag-card bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 cursor-pointer hover:shadow-md transition-shadow',
            selectedTags[0] === tag.id ? 'ring-2 ring-primary dark:ring-primary-light' : ''
          ]"
        >
          <div class="flex items-center">
            <TagBadge :tag-id="tag.id" />
          </div>
        </div>
      </div>
    </section>

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
import { ref, computed, onMounted, inject } from 'vue'
import { useRoute } from 'vue-router'
import TagBadge from '../components/ui/TagBadge.vue'

const route = useRoute()

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

// 注入全局数据
const allTags = inject('allTags', [])
const allTools = inject('allTools', [])

// 已选标签
const selectedTags = ref([])

// 添加标签到筛选器
function addTagToFilter(tagId) {
  // 如果点击的是当前选中的标签，则清除选择
  if (selectedTags.value[0] === tagId) {
    selectedTags.value = []
  } else {
    // 否则替换为新标签
    selectedTags.value = [tagId]
  }
}

// 根据所选标签和分类筛选工具
const tools = computed(() => {
  if (!categoryId.value) return []
  
  // 确保正确访问 allTools 的值
  const toolsArray = Array.isArray(allTools) ? allTools : 
                    (allTools?.value && Array.isArray(allTools.value) ? allTools.value : [])
  
  let filteredTools = toolsArray.filter(tool => tool.categoryId === categoryId.value)
  
  // 如果有选中的标签，进一步筛选
  if (selectedTags.value.length > 0) {
    filteredTools = filteredTools.filter(tool => 
      tool.tags && tool.tags.includes(selectedTags.value[0])
    )
  }
  
  return filteredTools
})
</script>

<style scoped>
.tag-card {
  min-width: 80px;
  transition: all 0.2s ease;
}

.tag-card:hover {
  transform: translateY(-2px);
}
</style> 