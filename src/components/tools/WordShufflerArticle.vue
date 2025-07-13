<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <article class="prose dark:prose-invert max-w-none">
      <h2 class="text-2xl font-bold mb-4">{{ $t('tools.word-shuffler.article.title') }}</h2>

      <!-- 工具功能介绍 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.word-shuffler.article.features.title') }}</h3>
        <div class="prose dark:prose-invert max-w-none" v-html="$t('tools.word-shuffler.article.features.description')"></div>
        
        <!-- 主要功能列表 -->
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.primaryFeatures.0.title') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.primaryFeatures.0.description') }}</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.primaryFeatures.1.title') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.primaryFeatures.1.description') }}</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.primaryFeatures.2.title') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.primaryFeatures.2.description') }}</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.primaryFeatures.3.title') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.primaryFeatures.3.description') }}</p>
          </div>
        </div>
      </section>

      <!-- 使用指南 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.word-shuffler.article.howToUse.title') }}</h3>
        <ol class="list-decimal pl-6 space-y-2">
          <li class="text-gray-700 dark:text-gray-300">
            <span class="font-medium">{{ $t('tools.word-shuffler.stepLabel') }} 1:</span> {{ $t('tools.word-shuffler.article.howToUse.steps.0') }}
          </li>
          <li class="text-gray-700 dark:text-gray-300">
            <span class="font-medium">{{ $t('tools.word-shuffler.stepLabel') }} 2:</span> {{ $t('tools.word-shuffler.article.howToUse.steps.1') }}
          </li>
          <li class="text-gray-700 dark:text-gray-300">
            <span class="font-medium">{{ $t('tools.word-shuffler.stepLabel') }} 3:</span> {{ $t('tools.word-shuffler.article.howToUse.steps.2') }}
          </li>
          <li class="text-gray-700 dark:text-gray-300">
            <span class="font-medium">{{ $t('tools.word-shuffler.stepLabel') }} 4:</span> {{ $t('tools.word-shuffler.article.howToUse.steps.3') }}
          </li>
          <li class="text-gray-700 dark:text-gray-300">
            <span class="font-medium">{{ $t('tools.word-shuffler.stepLabel') }} 5:</span> {{ $t('tools.word-shuffler.article.howToUse.steps.4') }}
          </li>
          <li class="text-gray-700 dark:text-gray-300">
            <span class="font-medium">{{ $t('tools.word-shuffler.stepLabel') }} 6:</span> {{ $t('tools.word-shuffler.article.howToUse.steps.5') }}
          </li>
        </ol>
      </section>

      <!-- 应用场景 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.word-shuffler.article.useCases.title') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.useCases.examples.0.title') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.useCases.examples.0.description') }}</p>
          </div>
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.useCases.examples.1.title') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.useCases.examples.1.description') }}</p>
          </div>
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.useCases.examples.2.title') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.useCases.examples.2.description') }}</p>
          </div>
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.useCases.examples.3.title') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.useCases.examples.3.description') }}</p>
          </div>
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.useCases.examples.4.title') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.useCases.examples.4.description') }}</p>
          </div>
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.useCases.examples.5.title') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.useCases.examples.5.description') }}</p>
          </div>
        </div>
      </section>

      <!-- 常见问题 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.word-shuffler.article.faqs.title') }}</h3>
        <div class="space-y-4">
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.faqs.questions.0.question') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.faqs.questions.0.answer') }}</p>
          </div>
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.faqs.questions.1.question') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.faqs.questions.1.answer') }}</p>
          </div>
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.faqs.questions.2.question') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.faqs.questions.2.answer') }}</p>
          </div>
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.faqs.questions.3.question') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.faqs.questions.3.answer') || $t('tools.word-shuffler.article.faqs.questions.3.description') }}</p>
          </div>
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.faqs.questions.4.question') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.faqs.questions.4.answer') }}</p>
          </div>
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.faqs.questions.5.question') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.faqs.questions.5.answer') }}</p>
          </div>
          <div class="border dark:border-gray-700 rounded-lg p-4">
            <h4 class="font-medium text-lg mb-2">{{ $t('tools.word-shuffler.article.faqs.questions.6.question') }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('tools.word-shuffler.article.faqs.questions.6.answer') }}</p>
          </div>
        </div>
      </section>
      
      <!-- 高级使用技巧 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.word-shuffler.article.advancedTips.title') }}</h3>
        <div class="prose dark:prose-invert max-w-none" v-html="$t('tools.word-shuffler.article.advancedTips.description')"></div>
        <ul class="mt-4 list-disc pl-6 space-y-2">
          <li class="text-gray-700 dark:text-gray-300">{{ $t('tools.word-shuffler.article.advancedTips.tips.0') }}</li>
          <li class="text-gray-700 dark:text-gray-300">{{ $t('tools.word-shuffler.article.advancedTips.tips.1') }}</li>
          <li class="text-gray-700 dark:text-gray-300">{{ $t('tools.word-shuffler.article.advancedTips.tips.2') }}</li>
          <li class="text-gray-700 dark:text-gray-300">{{ $t('tools.word-shuffler.article.advancedTips.tips.3') }}</li>
          <li class="text-gray-700 dark:text-gray-300">{{ $t('tools.word-shuffler.article.advancedTips.tips.4') }}</li>
          <li class="text-gray-700 dark:text-gray-300">{{ $t('tools.word-shuffler.article.advancedTips.tips.5') }}</li>
          <li class="text-gray-700 dark:text-gray-300">{{ $t('tools.word-shuffler.article.advancedTips.tips.6') }}</li>
          <li class="text-gray-700 dark:text-gray-300">{{ $t('tools.word-shuffler.article.advancedTips.tips.7') }}</li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script setup>
// No additional script needed as this is primarily a display component
// using translations from the i18n system
</script>
