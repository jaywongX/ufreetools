<template>
  <div class="article-container bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6 mt-6">
    <article class="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none">
      <h2>{{ $t('tools.vertical-to-horizontal-image.article.title') }}</h2>
      
      <section>
        <h3>{{ $t('tools.vertical-to-horizontal-image.article.intro.title') }}</h3>
        <div v-html="$t('tools.vertical-to-horizontal-image.article.intro.content')"></div>
      </section>
      
      <section>
        <h3>{{ $t('tools.vertical-to-horizontal-image.article.faq.title') }}</h3>
        <div class="mb-4">
          <h4>{{ $t('tools.vertical-to-horizontal-image.article.faq.q1') }}</h4>
          <p>{{ $t('tools.vertical-to-horizontal-image.article.faq.a1') }}</p>
        </div>
        <div class="mb-4">
          <h4>{{ $t('tools.vertical-to-horizontal-image.article.faq.q2') }}</h4>
          <p>{{ $t('tools.vertical-to-horizontal-image.article.faq.a2') }}</p>
        </div>
        <div class="mb-4">
          <h4>{{ $t('tools.vertical-to-horizontal-image.article.faq.q3') }}</h4>
          <p>{{ $t('tools.vertical-to-horizontal-image.article.faq.a3') }}</p>
        </div>
        <div class="mb-4">
          <h4>{{ $t('tools.vertical-to-horizontal-image.article.faq.q4') }}</h4>
          <p>{{ $t('tools.vertical-to-horizontal-image.article.faq.a4') }}</p>
        </div>
        <div class="mb-4">
          <h4>{{ $t('tools.vertical-to-horizontal-image.article.faq.q5') }}</h4>
          <p>{{ $t('tools.vertical-to-horizontal-image.article.faq.a5') }}</p>
        </div>
        <div class="mb-4">
          <h4>{{ $t('tools.vertical-to-horizontal-image.article.faq.q6') }}</h4>
          <p>{{ $t('tools.vertical-to-horizontal-image.article.faq.a6') }}</p>
        </div>
      </section>
      
      <section>
        <h3>{{ $t('tools.vertical-to-horizontal-image.article.tutorial.title') }}</h3>
        <ol class="tutorial-steps">
          <li>{{ $t('tools.vertical-to-horizontal-image.article.tutorial.step1') }}</li>
          <li>{{ $t('tools.vertical-to-horizontal-image.article.tutorial.step2') }}</li>
          <li>{{ $t('tools.vertical-to-horizontal-image.article.tutorial.step3') }}</li>
          <li>{{ $t('tools.vertical-to-horizontal-image.article.tutorial.step4') }}</li>
          <li>{{ $t('tools.vertical-to-horizontal-image.article.tutorial.step5') }}</li>
          <li>{{ $t('tools.vertical-to-horizontal-image.article.tutorial.step6') }}</li>
          <li>{{ $t('tools.vertical-to-horizontal-image.article.tutorial.step7') }}</li>
          <li>{{ $t('tools.vertical-to-horizontal-image.article.tutorial.step8') }}</li>
          <li>{{ $t('tools.vertical-to-horizontal-image.article.tutorial.step9') }}</li>
        </ol>
      </section>
    </article>
  </div>
</template>

<script setup>
// No additional script needed as we're using internationalization directly
</script>

<style scoped>
.article-container {
  margin-top: 2rem;
}

.prose h2 {
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.prose h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.prose h4 {
  font-weight: 600;
  color: var(--color-gray-800);
  margin-bottom: 0.5rem;
}

.tutorial-steps li {
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 0.5rem;
}

.dark .prose h4 {
  color: var(--color-gray-200);
}

@media (max-width: 640px) {
  .article-container {
    padding: 1rem;
  }
}
</style>
