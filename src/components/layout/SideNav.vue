<template>
  <aside 
    class="min-h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300"
    :class="{ 'w-16': !sidebarOpen, 'w-64': sidebarOpen }"
  >
    <!-- 站点标题和Logo -->
    <div class="h-16 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
      <router-link to="/" class="flex items-center">
        <!-- 仅在展开时显示文字 -->
        <span v-if="sidebarOpen" class="font-bold text-xl text-primary">ufreetools</span>
        <!-- 收起时只显示图标 -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      </router-link>
      
      <!-- 展开/收起按钮 -->
      <button 
        @click="toggleSidebar"
        class="ml-auto text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="sidebarOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    
    <!-- 导航内容 -->
    <div class="overflow-y-auto h-[calc(100vh-64px)] scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
      <nav class="p-4">
        <div class="mb-4">
          <h2 v-if="sidebarOpen" class="font-medium text-sm text-gray-500 dark:text-gray-400 px-3 mb-2">主导航</h2>
          <router-link 
            to="/" 
            class="block py-2 px-3 rounded-md mb-1 font-medium transition-colors"
            :class="isActive('/') ? 'bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary-light' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
          >
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span v-if="sidebarOpen" class="ml-2">首页</span>
            </div>
          </router-link>
          
          <router-link 
            to="/tags" 
            class="block py-2 px-3 rounded-md mb-1 font-medium transition-colors"
            :class="isActive('/tags') ? 'bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary-light' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
          >
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span v-if="sidebarOpen" class="ml-2">标签云</span>
            </div>
          </router-link>
        </div>
        
        <!-- 工具分类 -->
        <div>
          <h2 v-if="sidebarOpen" class="font-medium text-sm text-gray-500 dark:text-gray-400 px-3 mb-2">工具分类</h2>
          <div v-for="category in categories" :key="category.id" class="mb-1">
            <!-- 分类标题 -->
            <div class="flex items-center">
              <router-link 
                :to="`/category/${category.id}`" 
                class="flex-1 block py-2 px-3 rounded-md font-medium transition-colors"
                :class="isActive(`/category/${category.id}`) ? 'bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary-light' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon" />
                    </svg>
                    <span v-if="sidebarOpen" class="ml-2">{{ category.name }}</span>
                  </div>
                  <span v-if="sidebarOpen && toolsByCategory && toolsByCategory[category.id]" 
                    class="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                  >
                    {{ toolsByCategory[category.id].length }}
                  </span>
                </div>
              </router-link>
              
              <!-- 展开/折叠按钮 - 仅在侧边栏展开时显示 -->
              <button 
                v-if="sidebarOpen && toolsByCategory[category.id]?.length > 0"
                @click="toggleCategory(category.id)"
                class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                :aria-label="expandedCategories[category.id] ? '折叠分类' : '展开分类'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{ 'rotate-180': expandedCategories[category.id] }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <!-- 分类下的工具列表 - 仅在展开时显示 -->
            <div v-if="sidebarOpen && expandedCategories[category.id] && toolsByCategory[category.id]?.length > 0"
                 class="ml-5 pl-4 border-l border-gray-200 dark:border-gray-700 my-1 py-1">
              <router-link 
                v-for="tool in toolsByCategory[category.id]" 
                :key="tool.id"
                :to="`/tool/${tool.id}`"
                class="block py-1.5 px-3 rounded-md text-sm transition-colors"
                :class="isActive(`/tool/${tool.id}`) ? 'text-primary dark:text-primary-light font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'"
              >
                {{ tool.name }}
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { inject, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

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
</script>

<style>
/* 添加过渡动画 */
.transition-all {
  transition-property: all;
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