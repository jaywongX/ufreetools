<template>
  <div>
    <!-- 页面标题 -->
    <div class="text-center mb-10">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">关于我们</h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        开发工具站是一个为开发者和设计师精心打造的在线工具集合，我们的目标是提供高效、简洁、易用的工具，帮助您提高工作效率。
      </p>
    </div>
    
    <!-- 我们的使命 -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">我们的使命</h2>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          我们致力于为开发者和设计师提供一站式工具解决方案，让复杂的任务变得简单，让繁琐的工作变得高效。
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          所有工具都经过精心设计，确保界面直观、操作简便，让您能够专注于创造性工作，而不是在工具使用上浪费时间。
        </p>
      </div>
    </section>
    
    <!-- 核心特点 -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-4">核心特点</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div class="text-primary dark:text-primary-light mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium mb-2">高效便捷</h3>
          <p class="text-gray-600 dark:text-gray-300">
            所有工具都经过优化，确保处理速度快、响应及时，帮助您快速完成工作任务。
          </p>
        </div>
        
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div class="text-primary dark:text-primary-light mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium mb-2">安全可靠</h3>
          <p class="text-gray-600 dark:text-gray-300">
            我们重视您的数据安全，所有工具都在本地处理数据，不会上传到服务器，保护您的隐私。
          </p>
        </div>
        
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div class="text-primary dark:text-primary-light mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 class="text-lg font-medium mb-2">精美设计</h3>
          <p class="text-gray-600 dark:text-gray-300">
            简洁清晰的界面设计，支持明暗两种主题模式，让您在任何环境下都能舒适使用。
          </p>
        </div>
      </div>
    </section>
    
    <!-- 联系我们 -->
    <section>
      <h2 class="text-2xl font-bold mb-4">联系我们</h2>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          我们非常重视用户的反馈和建议，如果您有任何问题、意见或合作意向，欢迎通过以下方式联系我们：
        </p>
        <div class="flex flex-col md:flex-row md:space-x-8">
          <div class="mb-4 md:mb-0">
            <h3 class="font-medium mb-2">电子邮件</h3>
            <a href="mailto:contact@example.com" class="text-primary dark:text-primary-light hover:underline">
              contact@example.com
            </a>
          </div>
          <div>
            <h3 class="font-medium mb-2">社交媒体</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template> 