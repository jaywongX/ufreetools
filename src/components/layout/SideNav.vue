<template>
  <div class="h-full">
    <aside 
      class="min-h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 fixed top-0 left-0 z-40 overflow-hidden"
      :class="{ 'w-16': !sidebarOpen, 'w-64': sidebarOpen }"
    >
      <!-- 站点标题和Logo -->
      <div class="h-16 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
        <router-link :to="localizedRoute('/')" class="flex items-center">
          <!-- Logo图标始终显示 -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          <!-- 文字部分使用transition -->
          <span v-if="sidebarOpen" class="font-bold text-xl text-primary ml-2 transition-opacity duration-300">ufreetools</span>
        </router-link>
      </div>
      
      <!-- 导航内容 -->
      <div class="overflow-y-auto h-[calc(100vh-64px)] scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        <nav class="p-4">
          <div class="mb-4">
            <h2 v-if="sidebarOpen" class="font-medium text-sm text-gray-500 dark:text-gray-400 px-3 mb-2 transition-opacity duration-300">
              {{ $t('common.navigation') }}
            </h2>
            <router-link 
              :to="localizedRoute('/')" 
              class="block py-2 px-3 rounded-md mb-1 font-medium transition-colors"
              :class="isActive('/') ? 'bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary-light' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span v-if="sidebarOpen" class="ml-2">{{ $t('header.home') }}</span>
              </div>
            </router-link>
            
            <router-link 
              :to="localizedRoute('/tags')" 
              class="block py-2 px-3 rounded-md mb-1 font-medium transition-colors"
              :class="isActive('/tags') ? 'bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary-light' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span v-if="sidebarOpen" class="ml-2">{{ $t('tags.title') }}</span>
              </div>
            </router-link>
          </div>
          
          <!-- 工具分类 -->
          <div>
            <h2 v-if="sidebarOpen" class="font-medium text-sm text-gray-500 dark:text-gray-400 px-3 mb-2 transition-opacity duration-300">
              {{ $t('categories.title') }}
            </h2>
            <div v-for="category in categories" :key="category.id" class="mb-1">
              <div 
                class="flex items-center justify-between px-3 py-2 cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                @click="toggleCategory(category.id)"
              >
                <!-- 分类图标和名称 -->
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon" />
                  </svg>
                  <span v-if="sidebarOpen" class="ml-2 transition-opacity duration-300">
                    {{ $t(`categories.${category.id}`) }}
                  </span>
                </div>
                <!-- 展开/折叠按钮 -->
                <button 
                  v-if="sidebarOpen && toolsByCategory[category.id]?.length > 0"
                  class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none transition-opacity duration-300"
                  :aria-label="expandedCategories[category.id] ? $t('common.collapse') : $t('common.expand')"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300" :class="{ 'rotate-180': expandedCategories[category.id] }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <!-- 分类下的工具列表 -->
              <div v-if="sidebarOpen && expandedCategories[category.id] && toolsByCategory[category.id]?.length > 0"
                   class="ml-5 pl-4 border-l border-gray-200 dark:border-gray-700 my-1 py-1 transition-all duration-300">
                <router-link 
                  v-for="tool in toolsByCategory[category.id]" 
                  :key="tool.id"
                  :to="localizedRoute(`/tool/${tool.id.toString()}`)"
                  class="block py-1.5 px-3 rounded-md text-sm transition-all duration-300"
                  :class="isActive(`/tool/${tool.id.toString()}`) ? 'text-primary dark:text-primary-light font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'"
                >
                  {{ tool.name }}
                </router-link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </aside>
    <div :class="{ 'w-16': !sidebarOpen, 'w-64': sidebarOpen }" class="flex-shrink-0 transition-all duration-300"></div>
  </div>
</template>

<script setup>
import { inject, computed, ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useInternationalizedRoute } from '../../composables/useInternationalizedRoute'

const route = useRoute()
const sidebarOpen = inject('sidebarOpen')
const categories = inject('categories')
const toolsByCategory = inject('toolsByCategory')

// 跟踪哪些分类是展开的
const expandedCategories = ref({})

// 切换分类的展开/折叠状态
function toggleCategory(categoryId) {
  expandedCategories.value[categoryId] = !expandedCategories.value[categoryId]
}

// 检查当前路由是否激活
function isActive(path) {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

// 切换侧边栏展开/关闭状态
function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

// 初始化展开状态
onMounted(() => {
  // 根据当前路由自动展开对应的分类
  const currentCategory = route.path.split('/')[2] // 获取路由中的分类ID
  if (currentCategory) {
    expandedCategories.value[currentCategory] = true
  }
})

// 监听路由变化
watch(
  () => route.path,
  (newPath) => {
    const categoryId = newPath.split('/')[2]
    if (categoryId && !expandedCategories.value[categoryId]) {
      expandedCategories.value[categoryId] = true
    }
  }
)

// 使用国际化路由辅助函数
const { localizedRoute } = useInternationalizedRoute()
</script>

<style>
/* 添加过渡动画 */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.rotate-180 {
  transform: rotate(180deg);
}

/* 自定义滚动条样式 */
.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
  border-radius: 2px;
}

.dark .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
  background-color: #4b5563;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background-color: transparent;
}
</style> 