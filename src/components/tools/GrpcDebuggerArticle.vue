<template>
  <div class="mt-12 bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700">
    <h2 class="text-2xl font-bold mb-6">{{ $t('tools.grpc-debugger.article.title') }}</h2>
    
    <!-- 功能介绍部分 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">{{ $t('tools.grpc-debugger.article.features.title') }}</h3>
      <div class="mb-4" v-html="$t('tools.grpc-debugger.article.features.description')"></div>
      
      <!-- 应用场景 -->
      <div>
        <h4 class="text-lg font-medium mb-3">{{ $t('tools.grpc-debugger.article.features.useCases.title') }}</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li v-html="$t('tools.grpc-debugger.article.features.useCases.items[0]')"></li>
          <li v-html="$t('tools.grpc-debugger.article.features.useCases.items[1]')"></li>
          <li v-html="$t('tools.grpc-debugger.article.features.useCases.items[2]')"></li>
          <li v-html="$t('tools.grpc-debugger.article.features.useCases.items[3]')"></li>
          <li v-html="$t('tools.grpc-debugger.article.features.useCases.items[4]')"></li>
          <li v-html="$t('tools.grpc-debugger.article.features.useCases.items[5]')"></li>
        </ul>
      </div>
    </div>
    
    <!-- FAQ部分 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">{{ $t('tools.grpc-debugger.article.faq.title') }}</h3>
      <div class="space-y-4">
        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h4 class="text-lg font-medium mb-2">{{ $t('tools.grpc-debugger.article.faq.items[0].question') }}</h4>
          <div v-html="$t('tools.grpc-debugger.article.faq.items[0].answer')"></div>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h4 class="text-lg font-medium mb-2">{{ $t('tools.grpc-debugger.article.faq.items[1].question') }}</h4>
          <div v-html="$t('tools.grpc-debugger.article.faq.items[1].answer')"></div>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h4 class="text-lg font-medium mb-2">{{ $t('tools.grpc-debugger.article.faq.items[2].question') }}</h4>
          <div v-html="$t('tools.grpc-debugger.article.faq.items[2].answer')"></div>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h4 class="text-lg font-medium mb-2">{{ $t('tools.grpc-debugger.article.faq.items[3].question') }}</h4>
          <div v-html="$t('tools.grpc-debugger.article.faq.items[3].answer')"></div>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h4 class="text-lg font-medium mb-2">{{ $t('tools.grpc-debugger.article.faq.items[4].question') }}</h4>
          <div v-html="$t('tools.grpc-debugger.article.faq.items[4].answer')"></div>
        </div>
      </div>
    </div>
    
    <!-- 操作指南 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">{{ $t('tools.grpc-debugger.article.guide.title') }}</h3>
      <ol class="list-decimal pl-6 space-y-3">
        <li v-html="$t('tools.grpc-debugger.article.guide.step1')"></li>
        <li v-html="$t('tools.grpc-debugger.article.guide.step2')"></li>
        <li v-html="$t('tools.grpc-debugger.article.guide.step3')"></li>
        <li v-html="$t('tools.grpc-debugger.article.guide.step4')"></li>
        <li v-html="$t('tools.grpc-debugger.article.guide.step5')"></li>
        <li v-html="$t('tools.grpc-debugger.article.guide.step6')"></li>
        <li v-html="$t('tools.grpc-debugger.article.guide.step7')"></li>
      </ol>
    </div>
    
    <!-- 结论 -->
    <div>
      <p v-html="$t('tools.grpc-debugger.article.conclusion')"></p>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script> 