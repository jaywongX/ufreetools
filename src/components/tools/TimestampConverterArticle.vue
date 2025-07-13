<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <article class="prose dark:prose-invert max-w-none">
      <h2 class="text-2xl font-bold mb-4">{{ $t('tools.timestamp-converter.article.title') }}</h2>

      <!-- 功能介绍及应用场景 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.timestamp-converter.article.overview.title') }}</h3>
        <div class="space-y-3" v-html="$t('tools.timestamp-converter.article.overview.content')"></div>
        
        <h4 class="text-lg font-medium mt-6 mb-3">{{ $t('tools.timestamp-converter.article.useCases.title') }}</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li v-for="(useCase, index) in $tm('tools.timestamp-converter.article.useCases.items')" :key="index">
            <h5 class="font-medium inline">{{ useCase.title }}</h5>: {{ useCase.description }}
          </li>
        </ul>
      </section>
      
      <!-- 操作指南 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.timestamp-converter.article.guide.title') }}</h3>
        <div class="space-y-2 mb-4" v-html="$t('tools.timestamp-converter.article.guide.intro')"></div>
        
        <div class="space-y-4">
          <div v-for="(step, index) in $tm('tools.timestamp-converter.article.guide.steps')" :key="index" class="pl-6 relative">
            <span class="absolute left-0 font-bold">{{ index + 1 }}.</span>
            <h4 class="font-medium">{{ step.title }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ step.description }}</p>
          </div>
        </div>
      </section>
      
      <!-- 时间戳原理 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.timestamp-converter.article.principles.title') }}</h3>
        <div class="space-y-2" v-html="$t('tools.timestamp-converter.article.principles.content')"></div>
      </section>
      
      <!-- FAQ部分 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.timestamp-converter.article.faq.title') }}</h3>
        
        <div class="space-y-6">
          <div v-for="(item, index) in $tm('tools.timestamp-converter.article.faq.items')" :key="index" class="border-b border-gray-200 dark:border-gray-800 pb-4 last:border-b-0">
            <h4 class="font-medium mb-2">{{ item.question }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ item.answer }}</p>
          </div>
        </div>
      </section>
      
      <!-- 最佳实践 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.timestamp-converter.article.bestPractices.title') }}</h3>
        
        <ul class="list-disc pl-6 space-y-2">
          <li v-for="(practice, index) in $tm('tools.timestamp-converter.article.bestPractices.items')" :key="index">
            {{ practice }}
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script setup>
// 无需额外的脚本逻辑
</script> 