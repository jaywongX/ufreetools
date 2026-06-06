<template>
  <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
    <article class="article-container prose dark:prose-invert max-w-none">
      <h2 class="text-3xl font-bold mb-6">{{ tt('title') }}</h2>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">{{ tt('functionTitle') }}</h2>
        <h3 class="text-xl font-semibold mb-3">{{ tt('useCasesTitle') }}</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li v-for="key in useCases" :key="key" v-html="tt(key)"></li>
        </ul>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <h4 class="font-bold text-blue-700 dark:text-blue-300">{{ tt('tipTitle') }}</h4>
          <p class="text-blue-600 dark:text-blue-200">{{ tt('tipContent') }}</p>
        </div>
        <div class="space-y-4" v-html="tt('conclusion')"></div>
      </section>

      <section class="mb-10" itemscope itemtype="https://schema.org/FAQPage">
        <h2 class="text-2xl font-semibold mb-6">{{ tt('faqTitle') }}</h2>
        <div class="space-y-6">
          <div v-for="num in 5" :key="num" class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-semibold mb-2" itemprop="name">{{ tt(`faq${num}Question`) }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">{{ tt(`faq${num}Answer`) }}</div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-6">{{ tt('tutorialTitle') }}</h2>
        <div v-for="num in 6" :key="num" class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div class="flex items-center mb-2">
            <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">{{ num }}</div>
            <h3 class="text-xl font-semibold">{{ tt(`step${num}Title`) }}</h3>
          </div>
          <p class="mb-2 ml-11">{{ tt(`step${num}Description`) }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{ tt(`step${num}Note`) }}</p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mt-8">
          <h4 class="font-bold text-green-700 dark:text-green-300">{{ tt('successTitle') }}</h4>
          <p class="text-green-600 dark:text-green-200">{{ tt('successContent') }}</p>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-6">{{ tt('relatedToolsTitle') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a v-for="num in 4" :key="num" :href="tt(`relatedTool${num}Url`)" target="_blank" rel="noopener noreferrer" class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <h3 class="font-semibold mb-2">{{ tt(`relatedTool${num}Name`) }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ tt(`relatedTool${num}Description`) }}</p>
          </a>
        </div>
      </section>

      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-4">{{ tt('relatedToolsTitle') }}</h2>
        <ul class="space-y-4">
          <li v-for="num in 3" :key="num" class="border-l-4 border-gray-300 pl-4 py-1">
            <a :href="tt(`reference${num}Url`)" target="_blank" rel="noopener noreferrer" class="font-medium hover:text-blue-600">{{ tt(`reference${num}Name`) }}</a>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ tt(`reference${num}Description`) }}</p>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  toolId: { type: String, required: true }
})

const { t } = useI18n()
const useCases = ['useCase1', 'useCase2', 'useCase3', 'useCase4', 'useCase5', 'useCase6']
const tt = key => t(`tools.${props.toolId}.article.${key}`)
</script>

<style scoped>
.article-container {
  font-size: 16px;
  line-height: 1.6;
}

.article-container h1,
.article-container h2,
.article-container h3,
.article-container h4 {
  color: inherit;
  line-height: 1.3;
}

.article-container a {
  color: #3b82f6;
  text-decoration: none;
}

.article-container a:hover {
  text-decoration: underline;
}
</style>
