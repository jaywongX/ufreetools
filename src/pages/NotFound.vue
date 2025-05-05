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
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

// 使用国际化路由辅助函数
const { localizedRoute } = useInternationalizedRoute()

const { t } = useI18n()

// 设置页面元数据 - 确保状态码正确
useHead({
  title: '404 - Page Not Found',
  meta: [
    { name: 'status-code', content: '404' }
  ]
})

onMounted(() => {
  // 设置正确的HTTP状态码为404
  document.title = t('notFound.pageTitle') || '404 - Page Not Found'
  
  // 这行是关键 - 告诉搜索引擎这是一个404页面
  const meta = document.createElement('meta')
  meta.name = 'prerender-status-code'
  meta.content = '404'
  document.head.appendChild(meta)
  
  // 为Netlify、Vercel等静态托管服务设置状态码
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href)
    // 尝试通知服务器这是404页面
    if (typeof window.__NUXT__ !== 'undefined') {
      // Nuxt支持
      window.__NUXT__.state.statusCode = 404
    }
  }
})
</script>

<style scoped>
.not-found-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
</style>
