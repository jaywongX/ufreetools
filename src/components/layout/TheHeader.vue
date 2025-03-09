<template>
  <header class="bg-white dark:bg-gray-800 shadow-md h-16 px-4 flex items-center justify-between">
    <!-- 左侧区域 - 可以放置面包屑导航或其他控件 -->
    <div class="flex items-center">
      <!-- 此处可以根据需要添加内容 -->
    </div>
    
    <!-- 搜索框 - 居中显示 -->
    <div class="flex-1 max-w-2xl mx-auto search-container">
      <div class="relative w-full">
        <input
          type="text"
          v-model="searchQuery"
          @keyup.enter="performSearch"
          placeholder="搜索工具或输入关键词..."
          class="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
        />
        <button 
          @click="performSearch" 
          class="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        
        <!-- 搜索结果下拉面板 -->
        <div 
          v-if="searchResults.length > 0 && searchQuery && !hideResults" 
          class="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 max-h-80 overflow-y-auto"
        >
          <!-- 标签匹配结果 -->
          <div v-if="matchedTags.length > 0" class="px-3 py-2">
            <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">标签:</div>
            <div class="flex flex-wrap gap-1 mb-2">
              <div 
                v-for="tag in matchedTags.slice(0, 5)" 
                :key="tag.id"
                @click="navigateToTag(tag.id)"
                class="cursor-pointer hover:shadow-sm"
              >
                <TagBadge :tag-id="tag.id" />
              </div>
            </div>
          </div>
          
          <!-- 分隔线 -->
          <div v-if="matchedTags.length > 0 && matchedTools.length > 0" class="border-t border-gray-200 dark:border-gray-700 my-1"></div>
          
          <!-- 工具匹配结果 -->
          <div class="text-xs text-gray-500 dark:text-gray-400 px-3 py-1" v-if="matchedTools.length > 0">工具:</div>
          <div
            v-for="result in matchedTools.slice(0, 6)"
            :key="result.id"
            @click="navigateToTool(result.id)"
            class="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            <div class="flex items-start">
              <div class="w-7 h-7 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="result.icon" />
                </svg>
              </div>
              <div>
                <div class="font-medium text-sm">{{ result.name }}</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">{{ result.category }}</div>
              </div>
            </div>
          </div>
          
          <!-- 查看更多结果的链接 -->
          <div 
            v-if="hasMoreResults" 
            @click="viewAllResults" 
            class="text-center text-sm text-primary dark:text-primary-light py-2 border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
          >
            查看全部{{ totalResults }}个结果
          </div>
        </div>
      </div>
    </div>
    
    <!-- 右侧操作区域 -->
    <div class="flex items-center space-x-4">
      <!-- 主题切换按钮 -->
      <button 
        @click="toggleDarkMode" 
        class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        aria-label="切换主题"
      >
        <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
      
      <!-- 关于我们链接 -->
      <router-link 
        to="/about" 
        class="p-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light focus:outline-none"
      >
        关于我们
      </router-link>
      
      <!-- 可以添加更多右侧按钮，如登录、联系我们等 -->
    </div>
  </header>
</template>

<script setup>
import { ref, inject, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import TagBadge from '../ui/TagBadge.vue'

const router = useRouter()

// 注入
const sidebarOpen = inject('sidebarOpen')
const darkMode = inject('darkMode')
const allTools = inject('allTools')
const allTags = inject('allTags')

// 搜索状态
const searchQuery = ref('')
const hideResults = ref(false)

// 切换侧边栏
function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

// 切换暗色模式
function toggleDarkMode() {
  darkMode.value = !darkMode.value
  
  if (darkMode.value) {
    localStorage.setItem('darkMode', 'true')
  } else {
    localStorage.setItem('darkMode', 'false')
  }
}

// 匹配的标签
const matchedTags = computed(() => {
  if (!searchQuery.value) return []
  
  const query = searchQuery.value.toLowerCase().trim()
  return allTags
    .filter(tag => 
      tag.id.toLowerCase().includes(query) || 
      tag.name.toLowerCase().includes(query)
    )
    .sort((a, b) => {
      // 精确匹配的排在前面
      const aExact = a.id.toLowerCase() === query || a.name.toLowerCase() === query
      const bExact = b.id.toLowerCase() === query || b.name.toLowerCase() === query
      
      if (aExact && !bExact) return -1
      if (!aExact && bExact) return 1
      return 0
    })
})

// 匹配的工具
const matchedTools = computed(() => {
  if (!searchQuery.value) return []
  
  const query = searchQuery.value.toLowerCase().trim()
  
  // 获取匹配标签ID列表
  const tagIds = matchedTags.value.map(tag => tag.id)
  
  return allTools.value
    .filter(tool => {
      const nameMatch = tool.name && tool.name.toLowerCase().includes(query)
      const descMatch = tool.description && tool.description.toLowerCase().includes(query)
      const tagMatch = tool.tags && Array.isArray(tool.tags) && tool.tags.some(tagId => tagIds.includes(tagId))
      
      return nameMatch || descMatch || tagMatch
    })
    .sort((a, b) => {
      // 精确匹配名称的排在前面
      const aExact = a.name.toLowerCase() === query
      const bExact = b.name.toLowerCase() === query
      
      if (aExact && !bExact) return -1
      if (!aExact && bExact) return 1
      return 0
    })
})

// 合并搜索结果
const searchResults = computed(() => {
  return [...matchedTags.value, ...matchedTools.value]
})

// 总结果数量
const totalResults = computed(() => {
  return matchedTags.value.length + matchedTools.value.length
})

// 是否有更多未显示的结果
const hasMoreResults = computed(() => {
  return matchedTags.value.length > 5 || matchedTools.value.length > 6
})

// 执行搜索
function performSearch() {
  if (!searchQuery.value.trim()) return
  
  // 如果只有一个精确匹配的标签，直接跳转到该标签页
  if (matchedTags.value.length === 1 && 
      (matchedTags.value[0].id.toLowerCase() === searchQuery.value.toLowerCase() || 
       matchedTags.value[0].name.toLowerCase() === searchQuery.value.toLowerCase()) &&
      matchedTools.value.length === 0) {
    navigateToTag(matchedTags.value[0].id)
    return
  }
  
  // 否则跳转到搜索结果页
  router.push({
    path: '/search',
    query: { q: searchQuery.value }
  })
  hideResults.value = true
}

// 跳转到工具页面
function navigateToTool(toolId) {
  router.push(`/tool/${toolId}`)
  hideResults.value = true
}

// 跳转到标签页面
function navigateToTag(tagId) {
  router.push(`/tag/${tagId}`)
  hideResults.value = true
}

// 查看所有搜索结果
function viewAllResults() {
  router.push({
    path: '/search',
    query: { q: searchQuery.value }
  })
  hideResults.value = true
}

// 点击页面其他区域时隐藏搜索结果
function handleClickOutside(event) {
  const searchContainer = document.querySelector('.search-container')
  if (searchContainer && !searchContainer.contains(event.target)) {
    hideResults.value = true
  }
}

// 监听路由变化，清空搜索
watch(() => router.currentRoute.value.path, () => {
  searchQuery.value = ''
  hideResults.value = false
})

// 监听搜索框焦点
watch(searchQuery, () => {
  hideResults.value = false
})

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* 确保搜索结果面板能够正确显示 */
.search-container {
  position: relative;
  z-index: 50;
}
</style>