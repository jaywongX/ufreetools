<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <article class="prose dark:prose-invert max-w-none">
      <h1 class="text-2xl font-bold mb-4">{{ $t('tools.mock-api-generator.article.title') }}</h1>

      <!-- 功能介绍及应用场景 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.mock-api-generator.article.overview.title') }}</h3>
        <div class="space-y-3" v-html="$t('tools.mock-api-generator.article.overview.content')"></div>
        
        <h4 class="text-lg font-medium mt-6 mb-3">{{ $t('tools.mock-api-generator.article.useCases.title') }}</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li v-for="(useCase, index) in $tm('tools.mock-api-generator.article.useCases.items')" :key="index">
            <h5 class="font-medium inline">{{ useCase.title }}</h5>: {{ useCase.description }}
          </li>
        </ul>
      </section>
      
      <!-- 操作指南 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.mock-api-generator.article.guide.title') }}</h3>
        <div class="space-y-2 mb-4" v-html="$t('tools.mock-api-generator.article.guide.intro')"></div>
        
        <div class="space-y-4">
          <div v-for="(step, index) in $tm('tools.mock-api-generator.article.guide.steps')" :key="index" class="pl-6 relative">
            <span class="absolute left-0 font-bold">{{ index + 1 }}.</span>
            <h4 class="font-medium">{{ step.title }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ step.description }}</p>
          </div>
        </div>
      </section>
      
      <!-- Mock数据最佳实践 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.mock-api-generator.article.bestPractices.title') }}</h3>
        <div class="space-y-2 mb-4" v-html="$t('tools.mock-api-generator.article.bestPractices.intro')"></div>
        
        <div class="space-y-4">
          <div v-for="(practice, index) in $tm('tools.mock-api-generator.article.bestPractices.items')" :key="index" class="pl-6 relative">
            <span class="absolute left-0 font-bold">{{ index + 1 }}.</span>
            <p class="text-gray-600 dark:text-gray-400">{{ practice }}</p>
          </div>
        </div>
      </section>
      
      <!-- FAQ部分 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.mock-api-generator.article.faq.title') }}</h3>
        
        <div class="space-y-6">
          <div v-for="(item, index) in $tm('tools.mock-api-generator.article.faq.items')" :key="index" class="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-b-0">
            <h4 class="font-medium mb-2">{{ item.question }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ item.answer }}</p>
          </div>
        </div>
      </section>
      
      <!-- 高级技巧 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.mock-api-generator.article.advancedTips.title') }}</h3>
        <div class="space-y-2 mb-4" v-html="$t('tools.mock-api-generator.article.advancedTips.intro')"></div>
        
        <ul class="list-disc pl-6 space-y-2">
          <li v-for="(tip, index) in $tm('tools.mock-api-generator.article.advancedTips.items')" :key="index">
            {{ tip }}
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script setup>
// 无需额外的脚本逻辑
</script> 