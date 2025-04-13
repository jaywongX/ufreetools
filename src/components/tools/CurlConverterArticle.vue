// src/components/tools/CurlConverterArticle.vue
<template>
  <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">{{ $t('tools.curl-converter.article.title') }}</h2>
    
    <!-- 功能介绍 -->
    <div class="mb-6">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.curl-converter.article.features.title') }}</h3>
      <div class="text-gray-700 dark:text-gray-300" v-html="$t('tools.curl-converter.article.features.description')"></div>
      
      <!-- 应用场景 -->
      <div class="mt-4">
        <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.curl-converter.article.features.useCases.title') }}</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li v-html="$t('tools.curl-converter.article.features.useCases.items[0]')"></li>
          <li v-html="$t('tools.curl-converter.article.features.useCases.items[1]')"></li>
          <li v-html="$t('tools.curl-converter.article.features.useCases.items[2]')"></li>
          <li v-html="$t('tools.curl-converter.article.features.useCases.items[3]')"></li>
          <li v-html="$t('tools.curl-converter.article.features.useCases.items[4]')"></li>
          <li v-html="$t('tools.curl-converter.article.features.useCases.items[5]')"></li>
        </ul>
      </div>
    </div>
    
    <!-- FAQ -->
    <div class="mb-6">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.curl-converter.article.faq.title') }}</h3>
      <div class="space-y-4">
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.curl-converter.article.faq.items[0].question') }}</h4>
          <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.curl-converter.article.faq.items[0].answer')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.curl-converter.article.faq.items[1].question') }}</h4>
          <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.curl-converter.article.faq.items[1].answer')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.curl-converter.article.faq.items[2].question') }}</h4>
          <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.curl-converter.article.faq.items[2].answer')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.curl-converter.article.faq.items[3].question') }}</h4>
          <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.curl-converter.article.faq.items[3].answer')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.curl-converter.article.faq.items[4].question') }}</h4>
          <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.curl-converter.article.faq.items[4].answer')"></p>
        </div>
      </div>
    </div>
    
    <!-- 使用指南 -->
    <div class="mb-6">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{{ $t('tools.curl-converter.article.guide.title') }}</h3>
      <ol class="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
        <li v-html="$t('tools.curl-converter.article.guide.steps[0]')"></li>
        <li v-html="$t('tools.curl-converter.article.guide.steps[1]')"></li>
        <li v-html="$t('tools.curl-converter.article.guide.steps[2]')"></li>
        <li v-html="$t('tools.curl-converter.article.guide.steps[3]')"></li>
        <li v-html="$t('tools.curl-converter.article.guide.steps[4]')"></li>
        <li v-html="$t('tools.curl-converter.article.guide.steps[5]')"></li>
        <li v-html="$t('tools.curl-converter.article.guide.steps[6]')"></li>
      </ol>
    </div>
    
    <!-- 结论 -->
    <div class="text-gray-700 dark:text-gray-300" v-html="$t('tools.curl-converter.article.conclusion')"></div>
  </div>
</template>