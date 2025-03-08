<template>
  <header class="bg-white dark:bg-gray-800 shadow-md">
    <div class="container mx-auto px-6">
      <div class="flex justify-between h-16 items-center">
        <!-- 左侧Logo区域 -->
        <div class="flex items-center">
          <router-link to="/" class="font-bold text-xl text-primary">开发工具站</router-link>
        </div>
        
        <!-- 右侧工具栏 -->
        <div class="flex items-center space-x-6">
          <!-- 搜索框 -->
          <div class="relative">
            <input
              type="text"
              placeholder="搜索工具..."
              class="w-64 px-3 py-2 pr-10 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <button class="absolute right-3 top-2 text-gray-500 dark:text-gray-400 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          <!-- 功能按钮 -->
          <button class="text-gray-500 dark:text-gray-400 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button class="text-gray-500 dark:text-gray-400 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          <button class="text-gray-500 dark:text-gray-400 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>