<template>
  <div class="max-w-6xl mx-auto py-8 px-4 sm:px-6">
    <div class="mb-8 text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h1 class="text-3xl font-bold mb-3 text-primary-600 dark:text-primary-400">{{ $t('terms.title') }}</h1>
      <p class="text-gray-600 dark:text-gray-400 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {{ $t('terms.lastUpdated') }}: {{ lastUpdated }}
      </p>
    </div>

    <div class="flex flex-col lg:flex-row gap-6">
      <!-- 目录侧边栏 -->
      <div class="lg:w-1/4 sticky top-4 self-start">
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
          <h3 class="text-lg font-medium mb-3 text-green-700 dark:text-green-300">{{ $t('terms.tableOfContents') }}</h3>
          <ul class="space-y-2">
            <li><a href="#acceptance" class="hover:text-green-600 dark:hover:text-green-300 block transition-colors">{{ $t('terms.acceptance') }}</a></li>
            <li><a href="#description" class="hover:text-green-600 dark:hover:text-green-300 block transition-colors">{{ $t('terms.description') }}</a></li>
            <li><a href="#conduct" class="hover:text-green-600 dark:hover:text-green-300 block transition-colors">{{ $t('terms.conduct') }}</a></li>
            <li><a href="#intellectual" class="hover:text-green-600 dark:hover:text-green-300 block transition-colors">{{ $t('terms.intellectual') }}</a></li>
            <li><a href="#advertising" class="hover:text-green-600 dark:hover:text-green-300 block transition-colors">{{ $t('terms.advertising') }}</a></li>
            <li><a href="#user-content" class="hover:text-green-600 dark:hover:text-green-300 block transition-colors">{{ $t('terms.userContent') }}</a></li>
            <li><a href="#limitation" class="hover:text-green-600 dark:hover:text-green-300 block transition-colors">{{ $t('terms.limitation') }}</a></li>
            <li><a href="#warranty" class="hover:text-green-600 dark:hover:text-green-300 block transition-colors">{{ $t('terms.warranty') }}</a></li>
            <li><a href="#changes" class="hover:text-green-600 dark:hover:text-green-300 block transition-colors">{{ $t('terms.changes') }}</a></li>
            <li><a href="#governing" class="hover:text-green-600 dark:hover:text-green-300 block transition-colors">{{ $t('terms.governing') }}</a></li>
            <li><a href="#contact" class="hover:text-green-600 dark:hover:text-green-300 block transition-colors">{{ $t('terms.contact') }}</a></li>
          </ul>
        </div>
      </div>

      <!-- 正文内容 -->
      <div class="lg:w-3/4 prose dark:prose-invert max-w-none">
        <section id="acceptance" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('terms.acceptance') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('terms.acceptanceText') }}
          </p>
        </section>

        <section id="description" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('terms.description') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('terms.descriptionText') }}
          </p>
        </section>

        <section id="conduct" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('terms.conduct') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('terms.conductText') }}
          </p>
        </section>

        <section id="intellectual" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('terms.intellectual') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('terms.intellectualText') }}
          </p>
        </section>

        <section id="advertising" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('terms.advertising') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('terms.advertisingText') }}
          </p>
        </section>

        <section id="user-content" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('terms.userContent') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('terms.userContentText') }}
          </p>
        </section>

        <section id="limitation" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('terms.limitation') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('terms.limitationText') }}
          </p>
        </section>

        <section id="warranty" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('terms.warranty') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('terms.warrantyText') }}
          </p>
        </section>

        <section id="changes" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('terms.changes') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('terms.changesText') }}
          </p>
        </section>

        <section id="governing" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('terms.governing') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('terms.governingText') }}
          </p>
        </section>

        <section id="contact" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('terms.contact') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('terms.contactText') }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useMetaInfo } from '../mixins/metaInfoMixin'

// 使用元信息钩子，指定服务条款页面的标题和描述翻译键
const { updateMetaInfo } = useMetaInfo('terms.title', 'terms.acceptance')

// 在组件挂载和更新时更新元信息
onMounted(() => {
  updateMetaInfo()
})

onUpdated(() => {
  updateMetaInfo()
})

const lastUpdated = ref('2025-04-13')
</script>

<style scoped>
.prose h2 {
  color: var(--color-primary);
}

.prose section {
  transition: all 0.3s ease;
}

.prose section:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

@media (prefers-color-scheme: dark) {
  .prose section:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
}

.sticky {
  position: sticky;
  top: 2rem;
}
</style> 