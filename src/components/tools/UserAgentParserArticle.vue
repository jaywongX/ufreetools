<template>
  <div class="p-6 bg-white dark:bg-gray-800 rounded-lg mt-8 border border-gray-200 dark:border-gray-700">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
      {{ $t('tools.user-agent-parser.article.title') }}
    </h2>
    
    <!-- 功能介绍 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        {{ $t('tools.user-agent-parser.article.features.title') }}
      </h3>
      <div class="text-gray-600 dark:text-gray-400 mb-4" v-html="$t('tools.user-agent-parser.article.features.description')"></div>
      
      <!-- 应用场景 -->
      <h4 class="font-medium text-lg mb-3 text-gray-700 dark:text-gray-300">
        {{ $t('tools.user-agent-parser.article.features.useCases.title') }}
      </h4>
      <ul class="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
        <li v-html="$t('tools.user-agent-parser.article.features.useCases.items[0]')"></li>
        <li v-html="$t('tools.user-agent-parser.article.features.useCases.items[1]')"></li>
        <li v-html="$t('tools.user-agent-parser.article.features.useCases.items[2]')"></li>
        <li v-html="$t('tools.user-agent-parser.article.features.useCases.items[3]')"></li>
        <li v-html="$t('tools.user-agent-parser.article.features.useCases.items[4]')"></li>
        <li v-html="$t('tools.user-agent-parser.article.features.useCases.items[5]')"></li>
      </ul>
    </div>
    
    <!-- 常见问题 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        {{ $t('tools.user-agent-parser.article.faq.title') }}
      </h3>
      <div class="space-y-4">
        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h4 class="font-medium mb-2 text-gray-700 dark:text-gray-300" v-html="$t('tools.user-agent-parser.article.faq.items[0].question')"></h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.user-agent-parser.article.faq.items[0].answer')"></div>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h4 class="font-medium mb-2 text-gray-700 dark:text-gray-300" v-html="$t('tools.user-agent-parser.article.faq.items[1].question')"></h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.user-agent-parser.article.faq.items[1].answer')"></div>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h4 class="font-medium mb-2 text-gray-700 dark:text-gray-300" v-html="$t('tools.user-agent-parser.article.faq.items[2].question')"></h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.user-agent-parser.article.faq.items[2].answer')"></div>
        </div>
        <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
          <h4 class="font-medium mb-2 text-gray-700 dark:text-gray-300" v-html="$t('tools.user-agent-parser.article.faq.items[3].question')"></h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.user-agent-parser.article.faq.items[3].answer')"></div>
        </div>
        <div>
          <h4 class="font-medium mb-2 text-gray-700 dark:text-gray-300" v-html="$t('tools.user-agent-parser.article.faq.items[4].question')"></h4>
          <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.user-agent-parser.article.faq.items[4].answer')"></div>
        </div>
      </div>
    </div>
    
    <!-- 操作指南 -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        {{ $t('tools.user-agent-parser.article.guide.title') }}
      </h3>
      <ol class="list-decimal pl-6 space-y-3 text-gray-600 dark:text-gray-400">
        <li class="pb-3" v-html="$t('tools.user-agent-parser.article.guide.step1')"></li>
        <li class="pb-3" v-html="$t('tools.user-agent-parser.article.guide.step2')"></li>
        <li class="pb-3" v-html="$t('tools.user-agent-parser.article.guide.step3')"></li>
        <li class="pb-3" v-html="$t('tools.user-agent-parser.article.guide.step4')"></li>
        <li v-html="$t('tools.user-agent-parser.article.guide.step5')"></li>
      </ol>
    </div>
    
    <!-- 结论 -->
    <div class="text-gray-600 dark:text-gray-400" v-html="$t('tools.user-agent-parser.article.conclusion')"></div>
  </div>
</template> 