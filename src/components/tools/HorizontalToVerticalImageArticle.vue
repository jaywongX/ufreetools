<template>
  <div class="article-container bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6 mt-6">
    <article class="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none">
      <h2>{{ $t('tools.horizontal-to-vertical-image.article.title') }}</h2>
      
      <section>
        <h3>{{ $t('tools.horizontal-to-vertical-image.article.intro.title') }}</h3>
        <div v-html="$t('tools.horizontal-to-vertical-image.article.intro.content')"></div>
      </section>
      
      <section>
        <h3>{{ $t('tools.horizontal-to-vertical-image.article.useCases.title') }}</h3>
        <ul>
          <li v-html="$t('tools.horizontal-to-vertical-image.article.useCases.case1')"></li>
          <li v-html="$t('tools.horizontal-to-vertical-image.article.useCases.case2')"></li>
          <li v-html="$t('tools.horizontal-to-vertical-image.article.useCases.case3')"></li>
          <li v-html="$t('tools.horizontal-to-vertical-image.article.useCases.case4')"></li>
          <li v-html="$t('tools.horizontal-to-vertical-image.article.useCases.case5')"></li>
        </ul>
      </section>
      
      <section>
        <h3>{{ $t('tools.horizontal-to-vertical-image.article.faq.title') }}</h3>
        <div class="mb-4">
          <h4>{{ $t('tools.horizontal-to-vertical-image.article.faq.q1') }}</h4>
          <p>{{ $t('tools.horizontal-to-vertical-image.article.faq.a1') }}</p>
        </div>
        <div class="mb-4">
          <h4>{{ $t('tools.horizontal-to-vertical-image.article.faq.q2') }}</h4>
          <p>{{ $t('tools.horizontal-to-vertical-image.article.faq.a2') }}</p>
        </div>
        <div class="mb-4">
          <h4>{{ $t('tools.horizontal-to-vertical-image.article.faq.q3') }}</h4>
          <p>{{ $t('tools.horizontal-to-vertical-image.article.faq.a3') }}</p>
        </div>
        <div class="mb-4">
          <h4>{{ $t('tools.horizontal-to-vertical-image.article.faq.q4') }}</h4>
          <p>{{ $t('tools.horizontal-to-vertical-image.article.faq.a4') }}</p>
        </div>
        <div class="mb-4">
          <h4>{{ $t('tools.horizontal-to-vertical-image.article.faq.q5') }}</h4>
          <p>{{ $t('tools.horizontal-to-vertical-image.article.faq.a5') }}</p>
        </div>
      </section>
      
      <section>
        <h3>{{ $t('tools.horizontal-to-vertical-image.article.tutorial.title') }}</h3>
        <ol>
          <li>{{ $t('tools.horizontal-to-vertical-image.article.tutorial.step1') }}</li>
          <li>{{ $t('tools.horizontal-to-vertical-image.article.tutorial.step2') }}</li>
          <li>{{ $t('tools.horizontal-to-vertical-image.article.tutorial.step3') }}</li>
          <li>{{ $t('tools.horizontal-to-vertical-image.article.tutorial.step4') }}</li>
          <li>{{ $t('tools.horizontal-to-vertical-image.article.tutorial.step5') }}</li>
          <li>{{ $t('tools.horizontal-to-vertical-image.article.tutorial.step6') }}</li>
          <li>{{ $t('tools.horizontal-to-vertical-image.article.tutorial.step7') }}</li>
          <li>{{ $t('tools.horizontal-to-vertical-image.article.tutorial.step8') }}</li>
        </ol>
      </section>
      
      <section>
        <h3>{{ $t('tools.horizontal-to-vertical-image.article.conclusion.title') }}</h3>
        <p>{{ $t('tools.horizontal-to-vertical-image.article.conclusion.content') }}</p>
      </section>
    </article>
  </div>
</template>

<script setup>
// No additional script setup needed
</script>
