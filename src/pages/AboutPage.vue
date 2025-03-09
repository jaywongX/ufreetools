<template>
  <div class="max-w-4xl mx-auto">
    <!-- 标题部分 -->
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">关于 ufreetools</h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        免费、实用的在线工具集，为开发者和创作者提供便捷解决方案
      </p>
    </div>
    
    <!-- 主要内容 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">我们的使命</h2>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          ufreetools 致力于为开发者、设计师和网络创作者提供高质量的免费在线工具。我们相信技术应该降低创作门槛，而不是设置障碍。
        </p>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          我们的目标是创建一个一站式工具平台，无需安装、无需注册，让您能够即时获取和使用所需的专业工具。
        </p>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">我们提供什么</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div class="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 class="font-medium text-gray-800 dark:text-gray-200">开发工具</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              为程序员和开发者提供格式化、验证、编码转换等各类专业工具，提高开发效率。
            </p>
          </div>
          
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div class="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <h3 class="font-medium text-gray-800 dark:text-gray-200">设计工具</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              色彩搭配、图表生成、流程设计，帮助设计师和产品经理实现创意可视化。
            </p>
          </div>
          
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div class="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 class="font-medium text-gray-800 dark:text-gray-200">安全工具</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              提供加密、解密、哈希计算等安全相关工具，保护您的数据和隐私。
            </p>
          </div>
          
          <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div class="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <h3 class="font-medium text-gray-800 dark:text-gray-200">文本处理</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              多种文本转换、清理和格式化工具，让内容创作更加高效。
            </p>
          </div>
        </div>
      </section>
      
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">我们的优势</h2>
        <ul class="space-y-3 text-gray-700 dark:text-gray-300">
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>完全免费：</strong>所有工具免费使用，无隐藏费用</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>注重隐私：</strong>所有处理都在本地完成，不上传敏感数据</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>持续更新：</strong>定期添加新工具和功能改进</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>响应式设计：</strong>在任何设备上都能获得良好体验</span>
          </li>
        </ul>
      </section>
    </div>
    
    <!-- 联系部分 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">联系我们</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-6">
        我们非常重视您的反馈和建议。如果您有任何问题、建议或合作意向，请随时通过以下方式联系我们：
      </p>
      
      <div class="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <a href="mailto:support@ufreetools.com" class="text-primary dark:text-primary-light hover:underline">
          support@ufreetools.com
        </a>
      </div>
      
      <p class="text-gray-700 dark:text-gray-300">
        我们会在1-2个工作日内回复您的邮件。感谢您的支持与关注！
      </p>
    </div>
  </div>
</template> 