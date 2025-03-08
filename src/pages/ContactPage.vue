<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="mb-6 text-sm">
      <router-link to="/" class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
        首页
      </router-link>
      <span class="mx-2 text-gray-400">/</span>
      <span class="text-gray-700 dark:text-gray-300">联系我们</span>
    </div>
    
    <!-- 页面标题 -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold">联系我们</h1>
      <p class="text-gray-600 dark:text-gray-300 mt-2">有任何问题或建议，请随时与我们联系</p>
    </div>
    
    <!-- 联系表单 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 class="text-xl font-semibold mb-4">给我们发送消息</h2>
        
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">您的姓名</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              required
            />
          </div>
          
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">电子邮箱</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              required
            />
          </div>
          
          <div class="mb-4">
            <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">主题</label>
            <input 
              type="text" 
              id="subject" 
              v-model="formData.subject" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              required
            />
          </div>
          
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">消息内容</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              rows="5"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full py-2 px-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-200"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">发送中...</span>
            <span v-else>发送消息</span>
          </button>
        </form>
      </div>
      
      <!-- 联系信息 -->
      <div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h2 class="text-xl font-semibold mb-4">联系方式</h2>
          
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="text-primary mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">电子邮箱</h3>
                <p class="text-gray-600 dark:text-gray-400">support@yourtoolsite.com</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="text-primary mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">社交媒体</h3>
                <div class="flex space-x-2 mt-1">
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary">
                    <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary">
                    <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                      <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary">
                    <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- FAQ区域 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold mb-4">常见问题</h2>
          
          <div class="space-y-4">
            <div>
              <h3 class="font-medium text-gray-800 dark:text-gray-200">如何提交新工具建议？</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                您可以通过联系表单向我们提交新工具建议，我们会尽快回复您。
              </p>
            </div>
            
            <div>
              <h3 class="font-medium text-gray-800 dark:text-gray-200">工具使用是否需要付费？</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                所有工具均为免费使用，我们致力于提供高质量的在线工具服务。
              </p>
            </div>
            
            <div>
              <h3 class="font-medium text-gray-800 dark:text-gray-200">如何报告工具问题？</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                您可以通过联系表单详细描述您遇到的问题，包括使用的浏览器、设备等信息，以帮助我们更好地解决问题。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

function submitForm() {
  isSubmitting.value = true
  
  // 模拟表单提交
  setTimeout(() => {
    alert('消息发送成功！我们会尽快回复您。')
    
    // 重置表单
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    isSubmitting.value = false
  }, 1500)
}
</script> 