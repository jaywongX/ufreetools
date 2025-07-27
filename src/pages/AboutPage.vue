<template>
  <div class="container-custom py-8">
    <SeoHead 
      :title="$t('about.title')"
      :description="$t('about.description')"
    />
    <div class="max-w-5xl mx-auto">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">{{ $t('about.title') }}</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('about.description') }} <span class="text-primary dark:text-primary-light font-semibold">{{ toolCount }}+</span>
        </p>
      </div>
      
      <!-- 主要内容 -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-10">
        <div class="p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">{{ $t('about.ourMission') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {{ $t('about.missionText') }}
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">{{ $t('about.onlineOnly') }}</h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ $t('about.onlineDescription') }}
              </p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">{{ $t('about.privacy') }}</h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ $t('about.privacyDescription') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 平台优势 -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 md:p-8 mb-12">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">{{ $t('about.whyChooseUs') }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 p-5 rounded-lg">
            <div class="text-primary dark:text-primary-light text-xl mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">{{ $t('about.efficient') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ $t('about.efficientDescription') }}
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 p-5 rounded-lg">
            <div class="text-primary dark:text-primary-light text-xl mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">{{ $t('about.quality') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ $t('about.qualityDescription') }}
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 p-5 rounded-lg">
            <div class="text-primary dark:text-primary-light text-xl mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">{{ $t('about.security') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ $t('about.securityDescription') }}
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 p-5 rounded-lg">
            <div class="text-primary dark:text-primary-light text-xl mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800 dark:text-white mb-2">{{ $t('about.updates') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ $t('about.updatesDescription') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- 用户群体 -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-10">
        <div class="p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">{{ $t('about.ourUsers') }}</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <h3 class="font-semibold text-gray-800 dark:text-white mb-3">{{ $t('about.developers') }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {{ $t('about.developersDescription') }}
              </p>
            </div>
            
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <h3 class="font-semibold text-gray-800 dark:text-white mb-3">{{ $t('about.designers') }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {{ $t('about.designersDescription') }}
              </p>
            </div>
            
            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <h3 class="font-semibold text-gray-800 dark:text-white mb-3">{{ $t('about.generalUsers') }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                {{ $t('about.generalUsersDescription') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import SeoHead from '../components/seo/SeoHead.vue'
const allTools = inject('allTools')

// 计算总工具数量
const toolCount = computed(() => allTools.length)

</script> 