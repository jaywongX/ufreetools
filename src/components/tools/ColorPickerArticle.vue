<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <article class="prose dark:prose-invert max-w-none">
      <h2 class="text-2xl font-bold mb-4">{{ $t('tools.color-picker.article.title') }}</h2>

      <!-- 功能介绍和应用场景 -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          {{ $t('tools.color-picker.article.features.title') }}
        </h3>
        <div class="text-gray-600 dark:text-gray-400 space-y-4" v-html="$t('tools.color-picker.article.features.description')"></div>
        
        <div class="mt-6">
          <h4 class="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
            {{ $t('tools.color-picker.article.features.useCases.title') }}
          </h4>
          <ul class="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
            <li v-html="$t('tools.color-picker.article.features.useCases.items[0]')"></li>
            <li v-html="$t('tools.color-picker.article.features.useCases.items[1]')"></li>
            <li v-html="$t('tools.color-picker.article.features.useCases.items[2]')"></li>
            <li v-html="$t('tools.color-picker.article.features.useCases.items[3]')"></li>
            <li v-html="$t('tools.color-picker.article.features.useCases.items[4]')"></li>
            <li v-html="$t('tools.color-picker.article.features.useCases.items[5]')"></li>
          </ul>
        </div>
      </div>

      <!-- 常见问题解答 -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          {{ $t('tools.color-picker.article.faq.title') }}
        </h3>
        <div class="space-y-4">
          <div class="pb-4 border-b border-gray-200 dark:border-gray-700">
            <h4 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
              {{ $t('tools.color-picker.article.faq.items[0].question') }}
            </h4>
            <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.color-picker.article.faq.items[0].answer')"></div>
          </div>
          <div class="pb-4 border-b border-gray-200 dark:border-gray-700">
            <h4 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
              {{ $t('tools.color-picker.article.faq.items[1].question') }}
            </h4>
            <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.color-picker.article.faq.items[1].answer')"></div>
          </div>
          <div class="pb-4 border-b border-gray-200 dark:border-gray-700">
            <h4 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
              {{ $t('tools.color-picker.article.faq.items[2].question') }}
            </h4>
            <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.color-picker.article.faq.items[2].answer')"></div>
          </div>
          <div class="pb-4 border-b border-gray-200 dark:border-gray-700">
            <h4 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
              {{ $t('tools.color-picker.article.faq.items[3].question') }}
            </h4>
            <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.color-picker.article.faq.items[3].answer')"></div>
          </div>
          <div class="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
            <h4 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
              {{ $t('tools.color-picker.article.faq.items[4].question') }}
            </h4>
            <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.color-picker.article.faq.items[4].answer')"></div>
          </div>
        </div>
      </div>

      <!-- 操作指南 -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          {{ $t('tools.color-picker.article.guide.title') }}
        </h3>
        <div class="space-y-4 text-gray-600 dark:text-gray-400">
          <div v-html="$t('tools.color-picker.article.guide.step1')"></div>
          <div v-html="$t('tools.color-picker.article.guide.step2')"></div>
          <div v-html="$t('tools.color-picker.article.guide.step3')"></div>
          <div v-html="$t('tools.color-picker.article.guide.step4')"></div>
          <div v-html="$t('tools.color-picker.article.guide.step5')"></div>
        </div>
      </div>

      <!-- 结论 -->
      <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.color-picker.article.conclusion')"></div>
    </article>
  </div>
</template>

<script setup>
// 无需额外的脚本逻辑
</script> 