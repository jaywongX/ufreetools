<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">{{ $t('feedback.title') }}</h1>
    
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <p class="text-gray-700 dark:text-gray-300 mb-6">
        {{ $t('feedback.description') }}
      </p>
      
      <form @submit.prevent="submitFeedback" class="space-y-4">
        <!-- 姓名 -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('feedback.nameLabel') }}
          </label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            class="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            :placeholder="$t('feedback.namePlaceholder')"
          />
        </div>
        
        <!-- 邮箱 -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('feedback.emailLabel') }}
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            :placeholder="$t('feedback.emailPlaceholder')"
          />
        </div>
        
        <!-- 反馈类型 -->
        <div>
          <label for="feedbackType" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('feedback.typeLabel') }}
          </label>
          <select
            id="feedbackType"
            v-model="formData.type"
            class="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            <option value="general">{{ $t('feedback.typeGeneral') }}</option>
            <option value="bug">{{ $t('feedback.typeBug') }}</option>
            <option value="feature">{{ $t('feedback.typeFeature') }}</option>
            <option value="other">{{ $t('feedback.typeOther') }}</option>
          </select>
        </div>
        
        <!-- 消息内容 -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('feedback.messageLabel') }}
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="5"
            class="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            :placeholder="$t('feedback.messagePlaceholder')"
          ></textarea>
        </div>
        
        <!-- 提交按钮 -->
        <div>
          <button
            type="submit"
            class="w-full md:w-auto px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? $t('feedback.submitting') : $t('feedback.submit') }}
          </button>
        </div>
        
        <!-- 提交状态提示 -->
        <div v-if="submitStatus" class="mt-4 p-3 rounded-md" :class="submitStatusClass">
          {{ submitStatus }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 表单数据
const formData = ref({
  name: '',
  email: '',
  type: 'general',
  message: ''
})

// 提交状态
const isSubmitting = ref(false)
const submitStatus = ref('')

// 提交状态样式
const submitStatusClass = computed(() => {
  return {
    'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100': submitStatus.value === t('feedback.success'),
    'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100': submitStatus.value === t('feedback.error')
  }
})

// 提交表单
async function submitFeedback() {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  submitStatus.value = ''
  
  try {
    // 提交表单到 Vercel API 路由
    const response = await fetch('/api/submit-feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        type: formData.value.type,
        message: formData.value.message
      })
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.message || '提交反馈时出错')
    }
    
    // 显示服务器返回的成功消息
    submitStatus.value = data.message || t('feedback.success')
    
    // 重置表单
    formData.value = {
      name: '',
      email: '',
      type: 'general',
      message: ''
    }
  } catch (error) {
    // 显示详细错误信息
    submitStatus.value = error.message || t('feedback.error')
  } finally {
    isSubmitting.value = false
  }
}
</script>