<template>
  <div>
    <!-- 标签筛选标题行 -->
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

    <!-- 当有选定标签时显示的结果 -->
    <div v-if="selectedTags.length > 0">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">筛选结果 ({{ filteredTools.length }})</h2>
      </div>
      
      <div v-if="filteredTools.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <ToolCard 
          v-for="tool in filteredTools" 
          :key="tool.id" 
          :tool="tool"
          @tag-click="addTagToFilter"
        />
      </div>
      
      <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center mb-10">
        <p class="text-gray-600 dark:text-gray-400">没有符合所选标签的工具</p>
      </div>
    </div>
  
    <!-- 最近使用部分 -->
    <section v-if="selectedTags.length === 0 && recentTools.length > 0" class="mb-10">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">最近使用</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ToolCard 
          v-for="tool in recentTools" 
          :key="tool.id"
          :tool="tool"
          @tag-click="addTagToFilter"
        />
      </div>
    </section>
  
    <!-- 热门工具部分 -->
    <section v-if="selectedTags.length === 0" class="mb-10">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">热门工具</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ToolCard 
          v-for="tool in popularTools" 
          :key="tool.id"
          :tool="tool"
          @tag-click="addTagToFilter"
        />
      </div>
    </section>
  
    <!-- 最新添加部分 -->
    <section v-if="selectedTags.length === 0">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">最新添加</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ToolCard 
          v-for="tool in newTools" 
          :key="tool.id"
          :tool="tool"
          @tag-click="addTagToFilter"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, inject, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TagBadge from '../components/ui/TagBadge.vue'
import ToolCard from '../components/ui/ToolCard.vue'
import { getHistory } from '../services/historyService'

const route = useRoute()
const router = useRouter()

// 注入全局数据
const allTools = inject('allTools', [])
const categories = inject('categories', [])
const allTags = inject('allTags', [])
const toolsByTag = inject('toolsByTag', {})

// 已选标签
const selectedTags = ref([])

// 最近使用的工具
const recentTools = ref([])

// 从URL获取标签筛选参数
function getTagsFromUrl() {
  const tagParam = route.query.tags
  if (!tagParam) return []
  // 只取第一个标签
  return [tagParam]
}

// 更新URL以反映当前筛选的标签
function updateUrlWithTags() {
  if (selectedTags.value.length === 0) {
    // 如果没有选择标签，则移除URL参数
    if (route.query.tags) {
      router.replace({
        query: { ...route.query, tags: undefined }
      })
    }
    return
  }
  
  // 只使用第一个标签更新URL
  router.replace({
    query: { ...route.query, tags: selectedTags.value[0] }
  })
}

// 根据所选标签筛选工具
const filteredTools = computed(() => {
  if (selectedTags.value.length === 0) return []
  if (!Array.isArray(allTools)) return []
  
  // 只使用第一个标签进行筛选
  const selectedTag = selectedTags.value[0]
  return allTools.filter(tool => tool.tags.includes(selectedTag))
})

// 添加清除选中标签的方法
function clearSelectedTags() {
  selectedTags.value = []
  updateUrlWithTags()
}

// 添加标签到筛选器
function addTagToFilter(tagId) {
  // 如果点击的是当前选中的标签，则清除选择
  if (selectedTags.value[0] === tagId) {
    selectedTags.value = []
  } else {
    // 否则替换为新标签
    selectedTags.value = [tagId]
  }
  updateUrlWithTags()
}

// 监听URL变化，更新选中的标签
watch(() => route.query.tags, () => {
  selectedTags.value = getTagsFromUrl()
}, { immediate: true })

// 监听选中标签的变化，更新URL
watch(selectedTags, () => {
  updateUrlWithTags()
})

// 确保 allTools 是数组
const toolsArray = computed(() => {
  return Array.isArray(allTools) ? allTools : []
})

// 使用 toolsArray 而不是直接使用 allTools
const featuredTools = computed(() => {
  return toolsArray.value.slice(0, 6)
})

const popularTools = computed(() => {
  if (!toolsArray.value.length) return []
  const tools = [...toolsArray.value]
  // 随机排序以模拟"热门"工具
  return tools.sort(() => 0.5 - Math.random()).slice(0, 6)
})

const newTools = computed(() => {
  if (!toolsArray.value.length) return []
  return [...toolsArray.value].reverse().slice(0, 4)
})

// 组件挂载时，同步URL和选中标签状态，加载最近使用的工具
onMounted(() => {
  selectedTags.value = getTagsFromUrl()
  recentTools.value = getHistory()
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

/* 统一滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* 暗色模式滚动条 */
.dark ::-webkit-scrollbar-thumb {
  background: #4b5563;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>