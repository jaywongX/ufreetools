<template>
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
    <div class="container-custom py-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- 版权信息 -->
        <div class="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
          © {{ new Date().getFullYear() }} ufreetools. 保留所有权利.
        </div>
        
        <!-- 页脚导航 -->
        <div class="flex space-x-4">
          <a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
            关于我们
          </a>
          <a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
            隐私政策
          </a>
          <a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
            使用条款
          </a>
          <a href="#" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
            联系我们
          </a>
        </div>
      </div>
    </div>
  </footer>
</template> 