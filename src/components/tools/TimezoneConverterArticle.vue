<template>
  <div class="timezone-converter-article mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
    <h2 class="text-2xl font-bold mb-4">{{ $t('tools.timezone-converter.article.title') }}</h2>
    
    <div class="article-content prose dark:prose-invert max-w-none">
      <!-- 功能介绍 -->
      <h3>{{ $t('tools.timezone-converter.article.features.title') }}</h3>
      <p v-html="$t('tools.timezone-converter.article.features.description')"></p>
      
      <!-- 应用场景 -->
      <h4>{{ $t('tools.timezone-converter.article.features.useCases.title') }}</h4>
      <ul>
        <li v-html="$t('tools.timezone-converter.article.features.useCases.items[0]')"></li>
        <li v-html="$t('tools.timezone-converter.article.features.useCases.items[1]')"></li>
        <li v-html="$t('tools.timezone-converter.article.features.useCases.items[2]')"></li>
        <li v-html="$t('tools.timezone-converter.article.features.useCases.items[3]')"></li>
        <li v-html="$t('tools.timezone-converter.article.features.useCases.items[4]')"></li>
        <li v-html="$t('tools.timezone-converter.article.features.useCases.items[5]')"></li>
      </ul>
      
      <!-- FAQ部分 -->
      <h3>{{ $t('tools.timezone-converter.article.faq.title') }}</h3>
      <div class="mb-4">
        <h4 class="font-medium">{{ $t('tools.timezone-converter.article.faq.items[0].question') }}</h4>
        <p>{{ $t('tools.timezone-converter.article.faq.items[0].answer') }}</p>
      </div>
      <div class="mb-4">
        <h4 class="font-medium">{{ $t('tools.timezone-converter.article.faq.items[1].question') }}</h4>
        <p>{{ $t('tools.timezone-converter.article.faq.items[1].answer') }}</p>
      </div>
      <div class="mb-4">
        <h4 class="font-medium">{{ $t('tools.timezone-converter.article.faq.items[2].question') }}</h4>
        <p>{{ $t('tools.timezone-converter.article.faq.items[2].answer') }}</p>
      </div>
      <div class="mb-4">
        <h4 class="font-medium">{{ $t('tools.timezone-converter.article.faq.items[3].question') }}</h4>
        <p>{{ $t('tools.timezone-converter.article.faq.items[3].answer') }}</p>
      </div>
      <div class="mb-4">
        <h4 class="font-medium">{{ $t('tools.timezone-converter.article.faq.items[4].question') }}</h4>
        <p>{{ $t('tools.timezone-converter.article.faq.items[4].answer') }}</p>
      </div>
      
      <!-- 操作指南 -->
      <h3>{{ $t('tools.timezone-converter.article.guide.title') }}</h3>
      <ol class="list-decimal pl-5">
        <li class="mb-2" v-html="$t('tools.timezone-converter.article.guide.steps[0]')"></li>
        <li class="mb-2" v-html="$t('tools.timezone-converter.article.guide.steps[1]')"></li>
        <li class="mb-2" v-html="$t('tools.timezone-converter.article.guide.steps[2]')"></li>
        <li class="mb-2" v-html="$t('tools.timezone-converter.article.guide.steps[3]')"></li>
        <li class="mb-2" v-html="$t('tools.timezone-converter.article.guide.steps[4]')"></li>
        <li class="mb-2" v-html="$t('tools.timezone-converter.article.guide.steps[5]')"></li>
        <li class="mb-2" v-html="$t('tools.timezone-converter.article.guide.steps[6]')"></li>
      </ol>
      
      <!-- 结论 -->
      <p class="mt-6">{{ $t('tools.timezone-converter.article.conclusion') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimezoneConverterArticle'
}
</script> 