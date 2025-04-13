<template>
  <div class="mt-8 bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
      {{ $t('tools.svg-optimizer.article.title') }}
    </h2>

    <!-- 功能介绍 -->
    <section class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.svg-optimizer.article.features.title') }}
      </h3>
      <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.svg-optimizer.article.features.description')"></div>
      
      <!-- 应用场景 -->
      <div class="mt-6">
        <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
          {{ $t('tools.svg-optimizer.article.features.useCases.title') }}
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
          <li v-html="$t('tools.svg-optimizer.article.features.useCases.items[0]')"></li>
          <li v-html="$t('tools.svg-optimizer.article.features.useCases.items[1]')"></li>
          <li v-html="$t('tools.svg-optimizer.article.features.useCases.items[2]')"></li>
          <li v-html="$t('tools.svg-optimizer.article.features.useCases.items[3]')"></li>
          <li v-html="$t('tools.svg-optimizer.article.features.useCases.items[4]')"></li>
          <li v-html="$t('tools.svg-optimizer.article.features.useCases.items[5]')"></li>
        </ul>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.svg-optimizer.article.faq.title') }}
      </h3>
      <div class="space-y-6">
        <div class="border-b border-gray-200 dark:border-gray-700 pb-5">
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2" v-html="$t('tools.svg-optimizer.article.faq.items[0].question')"></h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.svg-optimizer.article.faq.items[0].answer')"></div>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700 pb-5">
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2" v-html="$t('tools.svg-optimizer.article.faq.items[1].question')"></h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.svg-optimizer.article.faq.items[1].answer')"></div>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700 pb-5">
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2" v-html="$t('tools.svg-optimizer.article.faq.items[2].question')"></h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.svg-optimizer.article.faq.items[2].answer')"></div>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700 pb-5">
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2" v-html="$t('tools.svg-optimizer.article.faq.items[3].question')"></h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.svg-optimizer.article.faq.items[3].answer')"></div>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700 pb-5">
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2" v-html="$t('tools.svg-optimizer.article.faq.items[4].question')"></h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.svg-optimizer.article.faq.items[4].answer')"></div>
        </div>
      </div>
    </section>

    <!-- 操作指南 -->
    <section class="mb-8">
      <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.svg-optimizer.article.guide.title') }}
      </h3>
      <ol class="list-decimal pl-6 space-y-4 text-gray-600 dark:text-gray-400">
        <li v-html="$t('tools.svg-optimizer.article.guide.step1')"></li>
        <li v-html="$t('tools.svg-optimizer.article.guide.step2')"></li>
        <li v-html="$t('tools.svg-optimizer.article.guide.step3')"></li>
        <li v-html="$t('tools.svg-optimizer.article.guide.step4')"></li>
        <li v-html="$t('tools.svg-optimizer.article.guide.step5')"></li>
        <li v-html="$t('tools.svg-optimizer.article.guide.step6')"></li>
        <li v-html="$t('tools.svg-optimizer.article.guide.step7')"></li>
      </ol>
    </section>

    <!-- 结论 -->
    <section>
      <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.svg-optimizer.article.conclusion')"></div>
    </section>
  </div>
</template>

<script setup>
// 不需要额外逻辑
</script>
