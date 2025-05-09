<template>
  <!-- Bottom Navigation for Mobile Only -->
  <nav class="fixed bottom-0 inset-x-0 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 z-40">
    <!-- Main Navigation Bar with Horizontal Scroll -->
    <div class="flex overflow-x-auto scrollbar-hide py-1">
      <!-- Home Button -->
      <button 
        @click="navigateTo('/')" 
        class="flex flex-col items-center justify-center py-2 px-3 min-w-[70px]"
        :class="isActive('/') ? 'text-primary dark:text-primary-light font-medium' : 'text-gray-600 dark:text-gray-400'"
      >
        <div class="w-6 h-6 mb-1 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <span class="text-xs">主页</span>
      </button>
      
      <!-- All Category Navigation Buttons -->
      <button 
        v-for="category in allCategories" 
        :key="category.id"
        @click="toggleCategory(category.id)"
        class="flex flex-col items-center justify-center py-2 px-3 min-w-[70px]"
        :class="activeCategoryId === category.id ? 'text-primary dark:text-primary-light font-medium' : 'text-gray-600 dark:text-gray-400'"
      >
        <div class="w-6 h-6 mb-1 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getCategoryIcon(category.id)" />
          </svg>
        </div>
        <span class="text-xs truncate">{{ $t(`categories.${category.id}.title`) }}</span>
      </button>
    </div>
    
    <!-- Tool Category Drawer -->
    <transition name="slide-up">
      <div 
        v-if="activeCategoryId && showDrawer" 
        class="fixed bottom-[56px] left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 max-h-[80vh] overflow-y-auto z-50"
        @click.stop
      >
        <!-- Drawer Header -->
        <div class="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3 px-4 flex justify-between items-center z-10">
          <h3 class="font-medium">{{ activeCategoryId ? $t(`categories.${activeCategoryId}`) : '' }}</h3>
          <button @click="closeDrawer" class="p-1 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Tool List -->
        <div class="divide-y divide-gray-200 dark:divide-gray-700">
          <a
            v-for="tool in categoryTools"
            :key="tool.id"
            :href="getToolLink(tool.id)"
            class="block py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            @click.prevent="goToTool(tool.id)"
          >
            <div class="flex items-center">
              <div>
                <div class="font-medium">{{ $t(`tools.${tool.id}.name`) }}</div>
                <div class="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{{ $t(`tools.${tool.id}.description`) }}</div>
              </div>
            </div>
          </a>
        </div>
        
        <!-- Empty State -->
        <div v-if="categoryTools.length === 0" class="py-8 text-center text-gray-500 dark:text-gray-400">
          <p>{{ $t('common.noTools') }}</p>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, inject, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useInternationalizedRoute } from '../../composables/useInternationalizedRoute'

const route = useRoute()
const router = useRouter()
const { localizedRoute } = useInternationalizedRoute()

// Inject global data
const categories = inject('categories', [])
const allTools = inject('allTools', { value: [] })

// Selected category state
const activeCategoryId = ref(null)
const showDrawer = ref(false)

// Get all categories - used in bottom nav
const allCategories = computed(() => {
  return categories
})

// Category icon paths
function getCategoryIcon(categoryId) {
  const iconMap = {
    dev: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    design: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    convert: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    text: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    image: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    network: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    crypto: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    utility: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    surveying_and_mapping: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
  }
  
  return iconMap[categoryId]
}

// Get tools for the active category
const categoryTools = computed(() => {
  if (!activeCategoryId.value) return []
  
  // 从allTools中过滤出属于当前分类的工具
  return allTools.value.filter(tool => tool.categoryId === activeCategoryId.value)
})

// Check if a route is active
function isActive(path) {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

// Toggle category drawer
function toggleCategory(categoryId) {
  if (activeCategoryId.value === categoryId && showDrawer.value) {
    closeDrawer()
  } else {
    activeCategoryId.value = categoryId
    showDrawer.value = true
    // 当抽屉打开时，阻止背景滚动
    document.body.style.overflow = 'hidden'
  }
}

// Close the drawer
function closeDrawer() {
  showDrawer.value = false
  // 恢复背景滚动
  document.body.style.overflow = ''
}

// Handle navigation
function navigateTo(path) {
  router.push(localizedRoute(path))
  closeDrawer()
}

// 获取工具链接
function getToolLink(toolId) {
  return localizedRoute(`/tool/${toolId}`)
}

// 跳转到工具页面
function goToTool(toolId) {
  closeDrawer()
  router.push(localizedRoute(`/tool/${toolId}`))
}

// Watch route changes to close drawer
watch(() => route.path, () => {
  closeDrawer()
})

// 确保组件销毁时恢复滚动
onBeforeUnmount(() => {
  document.body.style.overflow = ''
})

// Initialize based on current route
onMounted(() => {
  // Determine if current route is a tool and set the active category
  const currentPath = route.path
  const toolMatch = /\/tool\/(.+)/.exec(currentPath)
  
  if (toolMatch && toolMatch[1]) {
    const toolId = toolMatch[1]
    const tool = allTools.value.find(t => t.id === toolId)
    
    if (tool && tool.categoryId) {
      activeCategoryId.value = tool.categoryId
    }
  }
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

/* Add indicator for overflow */
.overflow-x-auto {
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
}

.overflow-x-auto > button {
  scroll-snap-align: start;
}
</style>
