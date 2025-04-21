<template>
  <div class="container mx-auto px-4 py-8">
    <SeoHead 
      :title="$t('feedback.title')"
      :description="$t('feedback.description')"
    />
    <h1 class="text-3xl font-bold mb-6">{{ $t('feedback.title') }}</h1>
    
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <p class="text-gray-700 dark:text-gray-300 mb-6">
        {{ $t('feedback.description') }}
      </p>
      
      <!-- 邮件发送指南 -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{{ $t('feedback.howToSend') }}</h2>
        <div class="space-y-4">
          <p class="text-gray-600 dark:text-gray-300">
            {{ $t('feedback.emailInstructions') }}
          </p>
          
          <div class="flex justify-center my-6">
            <a 
              href="mailto:support@ufreetools.com?subject=UFreeTools反馈" 
              class="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ $t('feedback.sendEmail') }}
            </a>
          </div>
        </div>
      </div>
      
      <!-- 反馈示例 -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{{ $t('feedback.exampleTitle') }}</h2>
        
        <div class="space-y-6">
          <!-- 一般反馈示例 -->
          <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <h3 class="font-medium text-gray-800 dark:text-white mb-2">{{ $t('feedback.typeGeneral') }}</h3>
            <pre class="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap font-mono bg-gray-100 dark:bg-gray-800 p-3 rounded">
{{ $t('feedback.exampleGeneral') }}</pre>
          </div>
          
          <!-- 错误报告示例 -->
          <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <h3 class="font-medium text-gray-800 dark:text-white mb-2">{{ $t('feedback.typeBug') }}</h3>
            <pre class="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap font-mono bg-gray-100 dark:bg-gray-800 p-3 rounded">
{{ $t('feedback.exampleBug') }}</pre>
          </div>
          
          <!-- 功能请求示例 -->
          <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <h3 class="font-medium text-gray-800 dark:text-white mb-2">{{ $t('feedback.typeFeature') }}</h3>
            <pre class="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap font-mono bg-gray-100 dark:bg-gray-800 p-3 rounded">
{{ $t('feedback.exampleFeature') }}</pre>
          </div>
        </div>
      </div>
      
      <!-- 其他联系方式 -->
      <div>
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{{ $t('feedback.additionalContact') }}</h2>
        <p class="text-gray-600 dark:text-gray-300">
          {{ $t('feedback.responseTime') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import SeoHead from '../components/seo/SeoHead.vue'
// 用于访问国际化文本
useI18n()
</script>