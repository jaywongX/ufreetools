<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h1 class="text-center text-6xl font-extrabold text-gray-900 dark:text-white">404</h1>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          {{ $t('errors.pageNotFound') }}
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          {{ $t('errors.pageNotFoundDesc') }}
        </p>
      </div>
      <div class="flex justify-center">
        <router-link :to="localizedRoute('/')" class="btn bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {{ $t('common.backToHome') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import { useInternationalizedRoute } from '../composables/useInternationalizedRoute'

// 使用国际化路由辅助函数
const { localizedRoute } = useInternationalizedRoute()

// 设置页面元数据 - 确保状态码正确
useHead({
  title: '404 - Page Not Found',
  meta: [
    { name: 'status-code', content: '404' }
  ]
})
</script>
