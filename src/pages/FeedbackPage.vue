<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">反馈与建议</h1>
    
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <p class="mb-6 text-gray-600 dark:text-gray-300">
        我们非常重视您的反馈和建议，这将帮助我们不断改进和优化网站。请使用以下邮件模板向我们发送您的想法。
      </p>
      
      <div class="space-y-6">
        <!-- 反馈类型 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            反馈类型
          </label>
          <div class="flex flex-wrap gap-4">
            <label v-for="type in feedbackTypes" :key="type.value" class="inline-flex items-center">
              <input 
                type="radio" 
                :value="type.value" 
                v-model="feedbackType"
                class="h-4 w-4 text-primary focus:ring-primary-light border-gray-300 dark:border-gray-600"
              >
              <span class="ml-2 text-gray-700 dark:text-gray-300">{{ type.label }}</span>
            </label>
          </div>
        </div>
        
        <!-- 反馈标题 -->
        <div>
          <label for="feedback-title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            反馈标题
          </label>
          <input 
            type="text" 
            id="feedback-title" 
            v-model="title"
            placeholder="简短描述您的反馈"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
          >
        </div>
        
        <!-- 反馈详情 -->
        <div>
          <label for="feedback-details" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            详细描述
          </label>
          <textarea 
            id="feedback-details" 
            v-model="details"
            rows="6" 
            placeholder="请详细描述您的问题或建议..."
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>
        
        <!-- 邮件生成结果预览 -->
        <div v-if="title || details" class="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-gray-50 dark:bg-gray-900">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">邮件内容预览：</h3>
          <div class="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line">
{{ emailTemplate }}
          </div>
        </div>
        
        <!-- 发送邮件按钮 -->
        <div class="flex justify-end">
          <a 
            :href="mailtoLink" 
            class="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors inline-flex items-center"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            通过邮件发送反馈
          </a>
        </div>
      </div>
    </div>
    
    <!-- 直接联系方式 -->
    <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">直接联系我们</h2>
      <p class="text-blue-700 dark:text-blue-300 mb-4">
        您也可以直接发送邮件至：
      </p>
      <div class="flex items-center bg-white dark:bg-gray-800 p-3 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <a href="mailto:support@ufreetools.com" class="ml-2 text-blue-600 dark:text-blue-400 hover:underline">
          support@ufreetools.com
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 反馈表单数据
const feedbackType = ref('suggestion')
const title = ref('')
const details = ref('')

// 反馈类型选项
const feedbackTypes = [
  { value: 'suggestion', label: '功能建议' },
  { value: 'bug', label: '问题报告' },
  { value: 'improvement', label: '改进意见' },
  { value: 'other', label: '其他' }
]

// 获取反馈类型文本
const getFeedbackTypeText = computed(() => {
  const selectedType = feedbackTypes.find(type => type.value === feedbackType.value)
  return selectedType ? selectedType.label : '反馈'
})

// 生成邮件模板
const emailTemplate = computed(() => {
  let template = `主题: [${getFeedbackTypeText.value}] ${title.value || '关于ufreetools的反馈'}\n\n`
  template += `反馈类型: ${getFeedbackTypeText.value}\n\n`
  
  if (details.value) {
    template += `详细描述:\n${details.value}\n\n`
  }
  
  template += `---------------------\n`
  template += `浏览器信息: ${navigator.userAgent}\n`
  template += `页面路径: ${window.location.href}\n`
  template += `---------------------\n\n`
  template += `此邮件由ufreetools反馈页面生成。`
  
  return template
})

// 生成mailto链接
const mailtoLink = computed(() => {
  const subject = encodeURIComponent(`[${getFeedbackTypeText.value}] ${title.value || '关于ufreetools的反馈'}`)
  const body = encodeURIComponent(emailTemplate.value)
  
  return `mailto:support@ufreetools.com?subject=${subject}&body=${body}`
})
</script> 