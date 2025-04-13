<template>
  <div class="mt-8 bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
      {{ $t('tools.request-header-editor.article.title') }}
    </h2>

    <!-- 功能介绍 -->
    <section class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.request-header-editor.article.features.title') }}
      </h3>
      <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.request-header-editor.article.features.description')"></div>
      
      <!-- 应用场景 -->
      <div class="mt-6">
        <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
          {{ $t('tools.request-header-editor.article.features.useCases.title') }}
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
          <li v-for="(item, index) in $tm('tools.request-header-editor.article.features.useCases.items')" 
              :key="index" 
              v-html="item"></li>
        </ul>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.request-header-editor.article.faq.title') }}
      </h3>
      <div class="space-y-6">
        <div v-for="(faq, index) in $tm('tools.request-header-editor.article.faq.items')" :key="index" class="border-b border-gray-200 dark:border-gray-700 pb-5">
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2" v-html="faq.question"></h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="faq.answer"></div>
        </div>
      </div>
    </section>

    <!-- 操作指南 -->
    <section class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.request-header-editor.article.guide.title') }}
      </h3>
      <ol class="list-decimal pl-6 space-y-4 text-gray-600 dark:text-gray-400">
        <li v-html="$t('tools.request-header-editor.article.guide.step1')"></li>
        <li v-html="$t('tools.request-header-editor.article.guide.step2')"></li>
        <li v-html="$t('tools.request-header-editor.article.guide.step3')"></li>
        <li v-html="$t('tools.request-header-editor.article.guide.step4')"></li>
        <li v-html="$t('tools.request-header-editor.article.guide.step5')"></li>
        <li v-html="$t('tools.request-header-editor.article.guide.step6')"></li>
        <li v-html="$t('tools.request-header-editor.article.guide.step7')"></li>
      </ol>
    </section>

    <!-- 结论 -->
    <section>
      <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.request-header-editor.article.conclusion')"></div>
    </section>
  </div>
</template>

<script setup>
// 组件不需要额外的逻辑
</script>
