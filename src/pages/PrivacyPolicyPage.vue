<template>
  <div class="max-w-6xl mx-auto py-8 px-4 sm:px-6">
    <div class="mb-8 text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h1 class="text-3xl font-bold mb-3 text-primary-600 dark:text-primary-400">{{ $t('privacyPolicy.title') }}</h1>
      <p class="text-gray-600 dark:text-gray-400 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {{ $t('privacyPolicy.lastUpdated') }}: {{ lastUpdated }}
      </p>
    </div>

    <div class="flex flex-col lg:flex-row gap-6">
      <!-- 目录侧边栏 -->
      <div class="lg:w-1/4 sticky top-4 self-start">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 class="text-lg font-medium mb-3 text-blue-700 dark:text-blue-300">{{ $t('privacyPolicy.tableOfContents') }}</h3>
          <ul class="space-y-2">
            <li><a href="#introduction" class="hover:text-blue-600 dark:hover:text-blue-300 block transition-colors">{{ $t('privacyPolicy.introduction') }}</a></li>
            <li><a href="#information-collection" class="hover:text-blue-600 dark:hover:text-blue-300 block transition-colors">{{ $t('privacyPolicy.informationCollection') }}</a></li>
            <li><a href="#data-processors" class="hover:text-blue-600 dark:hover:text-blue-300 block transition-colors">{{ $t('privacyPolicy.dataProcessors') }}</a></li>
            <li><a href="#information-use" class="hover:text-blue-600 dark:hover:text-blue-300 block transition-colors">{{ $t('privacyPolicy.informationUse') }}</a></li>
            <li><a href="#cookies" class="hover:text-blue-600 dark:hover:text-blue-300 block transition-colors">{{ $t('privacyPolicy.cookies') }}</a></li>
            <li><a href="#advertising" class="hover:text-blue-600 dark:hover:text-blue-300 block transition-colors">{{ $t('privacyPolicy.advertising') }}</a></li>
            <li><a href="#third-party" class="hover:text-blue-600 dark:hover:text-blue-300 block transition-colors">{{ $t('privacyPolicy.thirdParty') }}</a></li>
            <li><a href="#gdpr" class="hover:text-blue-600 dark:hover:text-blue-300 block transition-colors">{{ $t('privacyPolicy.gdpr') }}</a></li>
            <li><a href="#security" class="hover:text-blue-600 dark:hover:text-blue-300 block transition-colors">{{ $t('privacyPolicy.security') }}</a></li>
            <li><a href="#changes" class="hover:text-blue-600 dark:hover:text-blue-300 block transition-colors">{{ $t('privacyPolicy.changes') }}</a></li>
            <li><a href="#contact" class="hover:text-blue-600 dark:hover:text-blue-300 block transition-colors">{{ $t('privacyPolicy.contact') }}</a></li>
          </ul>
        </div>
      </div>

      <!-- 正文内容 -->
      <div class="lg:w-3/4 prose dark:prose-invert max-w-none">
        <section id="introduction" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('privacyPolicy.introduction') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('privacyPolicy.introductionText') }}
          </p>
        </section>

        <section id="information-collection" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('privacyPolicy.informationCollection') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('privacyPolicy.informationCollectionText') }}
          </p>
        </section>

        <section id="data-processors" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('privacyPolicy.dataProcessors') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('privacyPolicy.dataProcessorsText') }}
          </p>
        </section>

        <section id="information-use" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('privacyPolicy.informationUse') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('privacyPolicy.informationUseText') }}
          </p>
        </section>

        <section id="cookies" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('privacyPolicy.cookies') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('privacyPolicy.cookiesText') }}
          </p>
        </section>

        <section id="advertising" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('privacyPolicy.advertising') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('privacyPolicy.advertisingText') }}
          </p>
        </section>

        <section id="third-party" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('privacyPolicy.thirdParty') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('privacyPolicy.thirdPartyText') }}
          </p>
        </section>

        <section id="gdpr" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('privacyPolicy.gdpr') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('privacyPolicy.gdprText') }}
          </p>
        </section>

        <section id="security" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('privacyPolicy.security') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('privacyPolicy.securityText') }}
          </p>
        </section>

        <section id="changes" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('privacyPolicy.changes') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('privacyPolicy.changesText') }}
          </p>
        </section>

        <section id="contact" class="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 border-b pb-2">
            {{ $t('privacyPolicy.contact') }}
          </h2>
          <p class="leading-relaxed">
            {{ $t('privacyPolicy.contactText') }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import { useMetaInfo } from '../mixins/metaInfoMixin';

// 使用元信息钩子
const { updateMetaInfo } = useMetaInfo('privacyPolicy.title', 'privacyPolicy.introduction');

// 在组件挂载和更新时更新元信息
onMounted(() => {
  updateMetaInfo();
});

onUpdated(() => {
  updateMetaInfo();
});

const lastUpdated = ref('2025-04-13');
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