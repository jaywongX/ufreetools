<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <article class="prose dark:prose-invert max-w-none">
      <h2 class="text-2xl font-bold mb-4">{{ $t('tools.sensitive-word-filter.article.title') }}</h2>

      <div class="article-content prose dark:prose-invert max-w-none">
        <!-- 功能介绍 -->
        <h3>{{ $t('tools.sensitive-word-filter.article.functionality.title') }}</h3>
        <p v-html="$t('tools.sensitive-word-filter.article.functionality.description')"></p>
        
        <!-- 应用场景 -->
        <h4>{{ $t('tools.sensitive-word-filter.article.useCases.title') }}</h4>
        <ul>
          <li v-html="$t('tools.sensitive-word-filter.article.useCases.list[0]')"></li>
          <li v-html="$t('tools.sensitive-word-filter.article.useCases.list[1]')"></li>
          <li v-html="$t('tools.sensitive-word-filter.article.useCases.list[2]')"></li>
          <li v-html="$t('tools.sensitive-word-filter.article.useCases.list[3]')"></li>
          <li v-html="$t('tools.sensitive-word-filter.article.useCases.list[4]')"></li>
          <li v-html="$t('tools.sensitive-word-filter.article.useCases.list[5]')"></li>
        </ul>
        
        <!-- FAQ部分 -->
        <h3>{{ $t('tools.sensitive-word-filter.article.faq.title') }}</h3>
        <div class="mb-4">
          <h4 class="font-medium">{{ $t('tools.sensitive-word-filter.article.faq.items[0].question') }}</h4>
          <p>{{ $t('tools.sensitive-word-filter.article.faq.items[0].answer') }}</p>
        </div>
        <div class="mb-4">
          <h4 class="font-medium">{{ $t('tools.sensitive-word-filter.article.faq.items[1].question') }}</h4>
          <p>{{ $t('tools.sensitive-word-filter.article.faq.items[1].answer') }}</p>
        </div>
        <div class="mb-4">
          <h4 class="font-medium">{{ $t('tools.sensitive-word-filter.article.faq.items[2].question') }}</h4>
          <p>{{ $t('tools.sensitive-word-filter.article.faq.items[2].answer') }}</p>
        </div>
        <div class="mb-4">
          <h4 class="font-medium">{{ $t('tools.sensitive-word-filter.article.faq.items[3].question') }}</h4>
          <p>{{ $t('tools.sensitive-word-filter.article.faq.items[3].answer') }}</p>
        </div>
        <div class="mb-4">
          <h4 class="font-medium">{{ $t('tools.sensitive-word-filter.article.faq.items[4].question') }}</h4>
          <p>{{ $t('tools.sensitive-word-filter.article.faq.items[4].answer') }}</p>
        </div>
        
        <!-- 操作指南 -->
        <h3>{{ $t('tools.sensitive-word-filter.article.tutorial.title') }}</h3>
        <ol class="list-decimal pl-5">
          <li class="mb-2" v-html="$t('tools.sensitive-word-filter.article.tutorial.steps[0]')"></li>
          <li class="mb-2" v-html="$t('tools.sensitive-word-filter.article.tutorial.steps[1]')"></li>
          <li class="mb-2" v-html="$t('tools.sensitive-word-filter.article.tutorial.steps[2]')"></li>
          <li class="mb-2" v-html="$t('tools.sensitive-word-filter.article.tutorial.steps[3]')"></li>
          <li class="mb-2" v-html="$t('tools.sensitive-word-filter.article.tutorial.steps[4]')"></li>
          <li class="mb-2" v-html="$t('tools.sensitive-word-filter.article.tutorial.steps[5]')"></li>
        </ol>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'SensitiveWordFilterArticle'
}
</script> 