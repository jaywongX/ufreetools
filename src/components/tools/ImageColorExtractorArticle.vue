<template>
  <div class="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
      {{ $t('tools.image-color-extractor.article.title') }}
    </h2>

    <!-- 功能介绍和应用场景 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        {{ $t('tools.image-color-extractor.article.features.title') }}
      </h3>
      <div class="text-gray-600 dark:text-gray-400 space-y-4" v-html="$t('tools.image-color-extractor.article.features.description')"></div>
      
      <div class="mt-6">
        <h4 class="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
          {{ $t('tools.image-color-extractor.article.features.useCases.title') }}
        </h4>
        <ul class="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
          <li v-for="(item, index) in $t('tools.image-color-extractor.article.features.useCases.items')" 
              :key="index" 
              v-html="item">
          </li>
        </ul>
      </div>
    </div>

    <!-- 常见问题解答 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        {{ $t('tools.image-color-extractor.article.faq.title') }}
      </h3>
      <div class="space-y-4">
        <div v-for="(item, index) in $t('tools.image-color-extractor.article.faq.items')" :key="index" class="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
          <h4 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">{{ item.question }}</h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="item.answer"></div>
        </div>
      </div>
    </div>

    <!-- 操作指南 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        {{ $t('tools.image-color-extractor.article.guide.title') }}
      </h3>
      <div class="space-y-4 text-gray-600 dark:text-gray-400">
        <div v-html="$t('tools.image-color-extractor.article.guide.step1')"></div>
        <div v-html="$t('tools.image-color-extractor.article.guide.step2')"></div>
        <div v-html="$t('tools.image-color-extractor.article.guide.step3')"></div>
        <div v-html="$t('tools.image-color-extractor.article.guide.step4')"></div>
        <div v-html="$t('tools.image-color-extractor.article.guide.step5')"></div>
      </div>
    </div>

    <!-- 结论 -->
    <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.image-color-extractor.article.conclusion')"></div>
  </div>
</template>

<script setup>
// 无需额外的脚本逻辑
</script> 