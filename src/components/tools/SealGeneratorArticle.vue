<template>
  <div class="mt-8 bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700">
    <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
      {{ $t('tools.seal-generator.article.title') }}
    </h1>

    <!-- 功能介绍与应用场景 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        {{ $t('tools.seal-generator.article.intro.title') }}
      </h2>
      <div class="text-gray-600 dark:text-gray-400 space-y-4">
        <p class="leading-relaxed" v-html="$t('tools.seal-generator.article.intro.p1')"></p>
        <p class="leading-relaxed" v-html="$t('tools.seal-generator.article.intro.p2')"></p>
        <p class="leading-relaxed" v-html="$t('tools.seal-generator.article.intro.p3')"></p>
      </div>
    </section>

    <!-- 操作指南或教程 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        {{ $t('tools.seal-generator.article.tutorial.title') }}
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.seal-generator.article.tutorial.intro') }}
      </p>

      <div class="space-y-6 mt-4">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.seal-generator.article.tutorial.step1.title') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {{ $t('tools.seal-generator.article.tutorial.step1.description') }}
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.seal-generator.article.tutorial.step2.title') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {{ $t('tools.seal-generator.article.tutorial.step2.description') }}
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.seal-generator.article.tutorial.step3.title') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {{ $t('tools.seal-generator.article.tutorial.step3.description') }}
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.seal-generator.article.tutorial.step4.title') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {{ $t('tools.seal-generator.article.tutorial.step4.description') }}
          </p>
        </div>
      </div>
    </section>

    <!-- 常见问题解答 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        {{ $t('tools.seal-generator.article.faq.title') }}
      </h2>

      <div class="space-y-6 mt-4" itemscope itemtype="https://schema.org/FAQPage">
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2" itemprop="name">
            {{ $t('tools.seal-generator.article.faq.q1') }}
          </h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p class="text-gray-600 dark:text-gray-400" itemprop="text" v-html="$t('tools.seal-generator.article.faq.a1')">
            </p>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2" itemprop="name">
            {{ $t('tools.seal-generator.article.faq.q2') }}
          </h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p class="text-gray-600 dark:text-gray-400" itemprop="text" v-html="$t('tools.seal-generator.article.faq.a2')">
            </p>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2" itemprop="name">
            {{ $t('tools.seal-generator.article.faq.q3') }}
          </h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p class="text-gray-600 dark:text-gray-400" itemprop="text" v-html="$t('tools.seal-generator.article.faq.a3')">
            </p>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2" itemprop="name">
            {{ $t('tools.seal-generator.article.faq.q4') }}
          </h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p class="text-gray-600 dark:text-gray-400" itemprop="text" v-html="$t('tools.seal-generator.article.faq.a4')">
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 相关工具 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        {{ $t('tools.seal-generator.article.relatedTools.title') }}
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.seal-generator.article.relatedTools.description') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.seal-generator.article.relatedTools.tool1.name') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-3">
            {{ $t('tools.seal-generator.article.relatedTools.tool1.description') }}
          </p>
          <a 
            :href="$t('tools.seal-generator.article.relatedTools.tool1.url')" 
            target="_blank" 
            class="text-primary hover:underline"
          >
            {{ $t('tools.seal-generator.article.relatedTools.tool1.name') }} &rarr;
          </a>
        </div>

        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.seal-generator.article.relatedTools.tool2.name') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-3">
            {{ $t('tools.seal-generator.article.relatedTools.tool2.description') }}
          </p>
          <a 
            :href="$t('tools.seal-generator.article.relatedTools.tool2.url')" 
            target="_blank" 
            class="text-primary hover:underline"
          >
            {{ $t('tools.seal-generator.article.relatedTools.tool2.name') }} &rarr;
          </a>
        </div>

        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.seal-generator.article.relatedTools.tool3.name') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-3">
            {{ $t('tools.seal-generator.article.relatedTools.tool3.description') }}
          </p>
          <a 
            :href="$t('tools.seal-generator.article.relatedTools.tool3.url')" 
            target="_blank" 
            class="text-primary hover:underline"
          >
            {{ $t('tools.seal-generator.article.relatedTools.tool3.name') }} &rarr;
          </a>
        </div>
      </div>
    </section>

    <!-- 更多资源 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        {{ $t('tools.seal-generator.article.resources.title') }}
      </h2>

      <div class="space-y-4 mt-4">
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.seal-generator.article.resources.resource1.name') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-3">
            {{ $t('tools.seal-generator.article.resources.resource1.description') }}
          </p>
          <a 
            :href="$t('tools.seal-generator.article.resources.resource1.url')" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-primary hover:underline"
          >
            {{ $t('tools.seal-generator.article.resources.resource1.name') }} &rarr;
          </a>
        </div>

        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.seal-generator.article.resources.resource2.name') }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-3">
            {{ $t('tools.seal-generator.article.resources.resource2.description') }}
          </p>
          <a 
            :href="$t('tools.seal-generator.article.resources.resource2.url')" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-primary hover:underline"
          >
            {{ $t('tools.seal-generator.article.resources.resource2.name') }} &rarr;
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>

.article-container h1 {
  @apply mt-8 mb-6 text-3xl font-bold;
}

.article-container h2 {
  @apply mt-6 mb-4 text-2xl font-semibold;
}

.article-container h3 {
  @apply mt-4 mb-2 text-xl font-medium;
}

@media (max-width: 768px) {
  .article-container {
    padding: 1rem;
  }
}
</style>
