<template>
  <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
    <article class="prose dark:prose-invert max-w-none">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2">
        {{ $t('tools.password-generator.article.title') }}
      </h2>

      <!-- 功能介绍及应用场景 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {{ $t('tools.password-generator.article.features.title') }}
        </h3>
        <p v-html="$t('tools.password-generator.article.features.description')"></p>
        
        <h4 class="text-lg font-medium mt-4 text-gray-800 dark:text-gray-300">
          {{ $t('tools.password-generator.article.features.useCases.title') }}
        </h4>
        <ul>
          <li>{{ $t('tools.password-generator.article.features.useCases.items.0') }}</li>
          <li>{{ $t('tools.password-generator.article.features.useCases.items.1') }}</li>
          <li>{{ $t('tools.password-generator.article.features.useCases.items.2') }}</li>
          <li>{{ $t('tools.password-generator.article.features.useCases.items.3') }}</li>
          <li>{{ $t('tools.password-generator.article.features.useCases.items.4') }}</li>
          <li>{{ $t('tools.password-generator.article.features.useCases.items.5') }}</li>
          <li>{{ $t('tools.password-generator.article.features.useCases.items.6') }}</li>
        </ul>
      </section>

      <!-- 常见问题解答 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {{ $t('tools.password-generator.article.faq.title') }}
        </h3>
        
        <div class="mb-4">
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-300">
            {{ $t('tools.password-generator.article.faq.items.0.question') }}
          </h4>
          <p>{{ $t('tools.password-generator.article.faq.items.0.answer') }}</p>
        </div>
        
        <div class="mb-4">
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-300">
            {{ $t('tools.password-generator.article.faq.items.1.question') }}
          </h4>
          <p>{{ $t('tools.password-generator.article.faq.items.1.answer') }}</p>
        </div>
        
        <div class="mb-4">
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-300">
            {{ $t('tools.password-generator.article.faq.items.2.question') }}
          </h4>
          <p>{{ $t('tools.password-generator.article.faq.items.2.answer') }}</p>
        </div>
        
        <div class="mb-4">
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-300">
            {{ $t('tools.password-generator.article.faq.items.3.question') }}
          </h4>
          <p>{{ $t('tools.password-generator.article.faq.items.3.answer') }}</p>
        </div>
        
        <div class="mb-4">
          <h4 class="text-lg font-medium text-gray-800 dark:text-gray-300">
            {{ $t('tools.password-generator.article.faq.items.4.question') }}
          </h4>
          <p>{{ $t('tools.password-generator.article.faq.items.4.answer') }}</p>
        </div>
      </section>

      <!-- 操作指南 -->
      <section>
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {{ $t('tools.password-generator.article.guide.title') }}
        </h3>
        <ol class="list-decimal pl-6 space-y-2">
          <li>{{ $t('tools.password-generator.article.guide.steps.0') }}</li>
          <li>{{ $t('tools.password-generator.article.guide.steps.1') }}</li>
          <li>{{ $t('tools.password-generator.article.guide.steps.2') }}</li>
          <li>{{ $t('tools.password-generator.article.guide.steps.3') }}</li>
          <li>{{ $t('tools.password-generator.article.guide.steps.4') }}</li>
          <li>{{ $t('tools.password-generator.article.guide.steps.5') }}</li>
          <li>{{ $t('tools.password-generator.article.guide.steps.6') }}</li>
          <li>{{ $t('tools.password-generator.article.guide.steps.7') }}</li>
          <li>{{ $t('tools.password-generator.article.guide.steps.8') }}</li>
        </ol>
      </section>
      
      <!-- 结尾 -->
      <section class="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p>{{ $t('tools.password-generator.article.conclusion') }}</p>
      </section>
    </article>
  </div>
</template>

<script setup>
// 无需额外脚本逻辑，仅使用i18n翻译
</script> 