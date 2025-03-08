<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="mb-6 text-sm">
      <router-link to="/" class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
        首页
      </router-link>
      <span class="mx-2 text-gray-400">/</span>
      <span class="text-gray-700 dark:text-gray-300">搜索结果</span>
    </div>
    
    <!-- 搜索结果 -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold mb-2">搜索结果: "{{ searchQuery }}"</h1>
      
      <!-- 相关标签推荐 -->
      <div v-if="relatedTags.length > 0" class="mb-6">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">相关标签:</p>
        <div class="flex flex-wrap gap-2">
          <router-link
            v-for="tag in relatedTags"
            :key="tag.id"
            :to="`/?tags=${tag.id}`"
            class="tag-link"
          >
            <TagBadge :tag-id="tag.id" />
          </router-link>
        </div>
      </div>
      
      <!-- 搜索结果列表 -->
      <div v-if="searchResults.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ToolCard 
          v-for="tool in searchResults" 
          :key="tool.id"
          :tool="tool"
          @tag-click="navigateToTag"
        />
      </div>
      <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center">
        <p class="text-gray-600 dark:text-gray-400">没有找到匹配的工具</p>
        <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">尝试使用其他关键词或浏览标签</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TagBadge from '../components/ui/TagBadge.vue'
import ToolCard from '../components/ui/ToolCard.vue'

const route = useRoute()
const router = useRouter()

// 注入全局数据
const allTools = inject('allTools')
const allTags = inject('allTags')

// 从URL获取搜索查询
const searchQuery = computed(() => route.query.q || '')

// 搜索结果
const searchResults = computed(() => {
  if (!searchQuery.value) return []
  
  const query = searchQuery.value.toLowerCase().trim()
  
  // 寻找可能匹配的标签
  const tagMatches = allTags.value
    .filter(tag => 
      tag.name.toLowerCase().includes(query) || 
      tag.id.toLowerCase().includes(query)
    )
    .map(tag => tag.id)
  
  // 搜索工具名称、描述、类别和标签
  return allTools.value.filter(tool => 
    tool.name.toLowerCase().includes(query) || 
    tool.description.toLowerCase().includes(query) || 
    tool.category.toLowerCase().includes(query) ||
    tool.tags.some(tagId => tagMatches.includes(tagId))
  )
})

// 相关标签推荐
const relatedTags = computed(() => {
  if (!searchQuery.value) return []
  
  const query = searchQuery.value.toLowerCase().trim()
  
  // 找出与查询相关的标签
  return allTags.value
    .filter(tag => 
      tag.name.toLowerCase().includes(query) || 
      tag.id.toLowerCase().includes(query)
    )
    .slice(0, 5) // 最多显示5个相关标签
})

// 导航到标签页面
function navigateToTag(tagId) {
  router.push(`/?tags=${tagId}`)
}

// 监听路由变化更新标题
watch(() => route.query.q, (newQuery) => {
  if (newQuery) {
    document.title = `搜索结果: ${newQuery} - 工具集`
  }
})

// 设置页面标题
onMounted(() => {
  if (searchQuery.value) {
    document.title = `搜索结果: ${searchQuery.value} - 工具集`
  }
})
</script>

<style scoped>
.tag-link {
  transition: all 0.2s;
}

.tag-link:hover {
  transform: translateY(-1px);
}
</style> 