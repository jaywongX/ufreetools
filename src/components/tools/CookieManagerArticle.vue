<template>
  <div class="mt-8 bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">{{ $t('tools.cookie-manager.article.title') }}</h2>
    
    <!-- 功能介绍部分 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.cookie-manager.article.features.title') }}</h3>
      <div class="text-gray-600 dark:text-gray-400 space-y-4">
        <p v-html="$t('tools.cookie-manager.article.features.description')"></p>
        
        <h4 class="text-lg font-medium mt-6 mb-3 text-gray-700 dark:text-gray-300">{{ $t('tools.cookie-manager.article.features.useCasesTitle') }}</h4>
        <ul class="list-disc pl-5 space-y-2">
          <li v-html="$t('tools.cookie-manager.article.features.useCases.items[0]')"></li>
          <li v-html="$t('tools.cookie-manager.article.features.useCases.items[1]')"></li>
          <li v-html="$t('tools.cookie-manager.article.features.useCases.items[2]')"></li>
          <li v-html="$t('tools.cookie-manager.article.features.useCases.items[3]')"></li>
          <li v-html="$t('tools.cookie-manager.article.features.useCases.items[4]')"></li>
        </ul>
      </div>
    </div>
    
    <!-- FAQ部分 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.cookie-manager.article.faq.title') }}</h3>
      <div class="space-y-6">
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.cookie-manager.article.faq.items[0].question') }}</h4>
          <p class="text-gray-600 dark:text-gray-400" v-html="$t('tools.cookie-manager.article.faq.items[0].answer')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.cookie-manager.article.faq.items[1].question') }}</h4>
          <p class="text-gray-600 dark:text-gray-400" v-html="$t('tools.cookie-manager.article.faq.items[1].answer')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.cookie-manager.article.faq.items[2].question') }}</h4>
          <p class="text-gray-600 dark:text-gray-400" v-html="$t('tools.cookie-manager.article.faq.items[2].answer')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.cookie-manager.article.faq.items[3].question') }}</h4>
          <p class="text-gray-600 dark:text-gray-400" v-html="$t('tools.cookie-manager.article.faq.items[3].answer')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.cookie-manager.article.faq.items[4].question') }}</h4>
          <p class="text-gray-600 dark:text-gray-400" v-html="$t('tools.cookie-manager.article.faq.items[4].answer')"></p>
        </div>
      </div>
    </div>
    
    <!-- 操作指南部分 -->
    <div class="mb-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.cookie-manager.article.guide.title') }}</h3>
      <div class="space-y-6">
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.cookie-manager.article.guide.step1.title') }}</h4>
          <p class="text-gray-600 dark:text-gray-400" v-html="$t('tools.cookie-manager.article.guide.step1.description')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.cookie-manager.article.guide.step2.title') }}</h4>
          <p class="text-gray-600 dark:text-gray-400" v-html="$t('tools.cookie-manager.article.guide.step2.description')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.cookie-manager.article.guide.step3.title') }}</h4>
          <p class="text-gray-600 dark:text-gray-400" v-html="$t('tools.cookie-manager.article.guide.step3.description')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.cookie-manager.article.guide.step4.title') }}</h4>
          <p class="text-gray-600 dark:text-gray-400" v-html="$t('tools.cookie-manager.article.guide.step4.description')"></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.cookie-manager.article.guide.step5.title') }}</h4>
          <p class="text-gray-600 dark:text-gray-400" v-html="$t('tools.cookie-manager.article.guide.step5.description')"></p>
        </div>
      </div>
    </div>
    
    <!-- 结论部分 -->
    <div>
      <p class="text-gray-600 dark:text-gray-400" v-html="$t('tools.cookie-manager.article.conclusion')"></p>
    </div>
  </div>
</template>

<script setup>
// 不需要额外的脚本逻辑
</script> 