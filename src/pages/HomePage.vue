<template>
  <div>
    <!-- 标签筛选部分 -->
    <section class="mb-6">
      <TagFilter v-model="selectedTags" />
      
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
    
    <!-- 热门标签部分，只在未选择标签时显示 -->
    <section v-if="selectedTags.length === 0" class="mt-10">
      <h2 class="text-xl font-bold mb-4">按标签浏览</h2>
      <div class="flex flex-wrap gap-3">
        <div 
          v-for="tag in allTags.slice(0, 12)" 
          :key="tag.id"
          @click="addTagToFilter(tag.id)"
          class="tag-card bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 cursor-pointer hover:shadow-md transition-shadow"
        >
          <div class="flex items-center">
            <TagBadge :tag-id="tag.id" />
            <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">
              {{ toolsByTag[tag.id].length }}个工具
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, inject, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TagFilter from '../components/ui/TagFilter.vue'
import TagBadge from '../components/ui/TagBadge.vue'
import ToolCard from '../components/ui/ToolCard.vue'

const route = useRoute()
const router = useRouter()

// 注入全局数据
const allTools = inject('allTools')
const categories = inject('categories')
const allTags = inject('allTags')
const toolsByTag = inject('toolsByTag')

// 已选标签
const selectedTags = ref([])

// 从URL获取标签筛选参数
function getTagsFromUrl() {
  const tagsParam = route.query.tags
  if (!tagsParam) return []
  
  // 支持单个标签或多个标签（逗号分隔）
  return Array.isArray(tagsParam) 
    ? tagsParam 
    : tagsParam.split(',').map(tag => tag.trim()).filter(Boolean)
}

// 更新URL以反映当前筛选的标签
function updateUrlWithTags() {
  if (selectedTags.value.length === 0) {
    // 如果没有选择任何标签，则移除URL参数
    if (route.query.tags) {
      router.replace({
        query: { ...route.query, tags: undefined }
      })
    }
    return
  }
  
  // 更新URL，但不触发新的导航
  router.replace({
    query: { ...route.query, tags: selectedTags.value.join(',') }
  })
}

// 根据所选标签筛选工具
const filteredTools = computed(() => {
  if (selectedTags.value.length === 0) return []
  
  return allTools.value.filter(tool => {
    // 检查工具是否包含所有选定的标签
    return selectedTags.value.every(tag => tool.tags.includes(tag))
  })
})

// 添加标签到筛选器
function addTagToFilter(tagId) {
  if (!selectedTags.value.includes(tagId)) {
    selectedTags.value.push(tagId)
    updateUrlWithTags()
  }
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
  return Array.isArray(allTools) ? allTools : (allTools.value || [])
})

// 使用 toolsArray 而不是直接使用 allTools
const featuredTools = computed(() => {
  return toolsArray.value.slice(0, 6)
})

const popularTools = computed(() => {
  const tools = [...toolsArray.value]
  // 随机排序以模拟"热门"工具
  return tools.sort(() => 0.5 - Math.random()).slice(0, 6)
})

const newTools = computed(() => {
  return [...toolsArray.value].reverse().slice(0, 4)
})

// 组件挂载时，同步URL和选中标签状态
onMounted(() => {
  selectedTags.value = getTagsFromUrl()
})
</script>

<style scoped>
.tag-card {
  min-width: 140px;
  transition: all 0.2s ease;
}

.tag-card:hover {
  transform: translateY(-2px);
}
</style>