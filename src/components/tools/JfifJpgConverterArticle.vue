<template>
  <div class="article-container">
    <div class="prose max-w-none">
      <h1 id="jfif-to-jpg-converter">{{ $t('tools.jfif-jpg-converter.article.title') }}</h1>
      
      <!-- 工具功能介绍和应用场景 -->
      <section>
        <h2 id="introduction">{{ $t('tools.jfif-jpg-converter.article.introduction.title') }}</h2>
        <p v-html="$t('tools.jfif-jpg-converter.article.introduction.content')"></p>
        
        <h3 id="what-is-jfif">{{ $t('tools.jfif-jpg-converter.article.whatIsJfif.title') }}</h3>
        <p v-html="$t('tools.jfif-jpg-converter.article.whatIsJfif.content')"></p>
        
        <h3 id="why-convert">{{ $t('tools.jfif-jpg-converter.article.whyConvert.title') }}</h3>
        <p v-html="$t('tools.jfif-jpg-converter.article.whyConvert.content')"></p>
        
        <h3 id="use-cases">{{ $t('tools.jfif-jpg-converter.article.useCases.title') }}</h3>
        <ul>
          <li v-html="$t('tools.jfif-jpg-converter.article.useCases.list[0]')"></li>
          <li v-html="$t('tools.jfif-jpg-converter.article.useCases.list[1]')"></li>
          <li v-html="$t('tools.jfif-jpg-converter.article.useCases.list[2]')"></li>
          <li v-html="$t('tools.jfif-jpg-converter.article.useCases.list[3]')"></li>
          <li v-html="$t('tools.jfif-jpg-converter.article.useCases.list[4]')"></li>
          <li v-html="$t('tools.jfif-jpg-converter.article.useCases.list[5]')"></li>
          <li v-html="$t('tools.jfif-jpg-converter.article.useCases.list[6]')"></li>
        </ul>
        
        <h3 id="platforms">{{ $t('tools.jfif-jpg-converter.article.platforms.title') }}</h3>
        <p v-html="$t('tools.jfif-jpg-converter.article.platforms.content')"></p>
        <div class="platform-boxes">
          <div class="platform-box">
            <h4 v-html="$t('tools.jfif-jpg-converter.article.platforms.list[0].title')"></h4>
            <p v-html="$t('tools.jfif-jpg-converter.article.platforms.list[0].description')"></p>
          </div>
          <div class="platform-box">
            <h4 v-html="$t('tools.jfif-jpg-converter.article.platforms.list[1].title')"></h4>
            <p v-html="$t('tools.jfif-jpg-converter.article.platforms.list[1].description')"></p>
          </div>
          <div class="platform-box">
            <h4 v-html="$t('tools.jfif-jpg-converter.article.platforms.list[2].title')"></h4>
            <p v-html="$t('tools.jfif-jpg-converter.article.platforms.list[2].description')"></p>
          </div>
          <div class="platform-box">
            <h4 v-html="$t('tools.jfif-jpg-converter.article.platforms.list[3].title')"></h4>
            <p v-html="$t('tools.jfif-jpg-converter.article.platforms.list[3].description')"></p>
          </div>
        </div>
      </section>
      
      <!-- 操作指南 -->
      <section>
        <h2 id="tutorial">{{ $t('tools.jfif-jpg-converter.article.tutorial.title') }}</h2>
        <p v-html="$t('tools.jfif-jpg-converter.article.tutorial.introduction')"></p>
        
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[0].title')"></h4>
              <p v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[0].description')"></p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[1].title')"></h4>
              <p v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[1].description')"></p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[2].title')"></h4>
              <p v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[2].description')"></p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[3].title')"></h4>
              <p v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[3].description')"></p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[4].title')"></h4>
              <p v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[4].description')"></p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">6</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[5].title')"></h4>
              <p v-html="$t('tools.jfif-jpg-converter.article.tutorial.steps[5].description')"></p>
            </div>
          </div>
        </div>
        
        <h3 id="tips">{{ $t('tools.jfif-jpg-converter.article.tutorial.tips.title') }}</h3>
        <ul>
          <li v-html="$t('tools.jfif-jpg-converter.article.tutorial.tips.list[0]')"></li>
          <li v-html="$t('tools.jfif-jpg-converter.article.tutorial.tips.list[1]')"></li>
          <li v-html="$t('tools.jfif-jpg-converter.article.tutorial.tips.list[2]')"></li>
          <li v-html="$t('tools.jfif-jpg-converter.article.tutorial.tips.list[3]')"></li>
          <li v-html="$t('tools.jfif-jpg-converter.article.tutorial.tips.list[4]')"></li>
        </ul>
      </section>
      
      <!-- FAQ部分 -->
      <section>
        <h2 id="faq">{{ $t('tools.jfif-jpg-converter.article.faq.title') }}</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3 id="faq-0" v-html="$t('tools.jfif-jpg-converter.article.faq.questions[0].question')"></h3>
            <div v-html="$t('tools.jfif-jpg-converter.article.faq.questions[0].answer')"></div>
          </div>
          <div class="faq-item">
            <h3 id="faq-1" v-html="$t('tools.jfif-jpg-converter.article.faq.questions[1].question')"></h3>
            <div v-html="$t('tools.jfif-jpg-converter.article.faq.questions[1].answer')"></div>
          </div>
          <div class="faq-item">
            <h3 id="faq-2" v-html="$t('tools.jfif-jpg-converter.article.faq.questions[2].question')"></h3>
            <div v-html="$t('tools.jfif-jpg-converter.article.faq.questions[2].answer')"></div>
          </div>
          <div class="faq-item">
            <h3 id="faq-3" v-html="$t('tools.jfif-jpg-converter.article.faq.questions[3].question')"></h3>
            <div v-html="$t('tools.jfif-jpg-converter.article.faq.questions[3].answer')"></div>
          </div>
          <div class="faq-item">
            <h3 id="faq-4" v-html="$t('tools.jfif-jpg-converter.article.faq.questions[4].question')"></h3>
            <div v-html="$t('tools.jfif-jpg-converter.article.faq.questions[4].answer')"></div>
          </div>
          <div class="faq-item">
            <h3 id="faq-5" v-html="$t('tools.jfif-jpg-converter.article.faq.questions[5].question')"></h3>
            <div v-html="$t('tools.jfif-jpg-converter.article.faq.questions[5].answer')"></div>
          </div>
          <div class="faq-item">
            <h3 id="faq-6" v-html="$t('tools.jfif-jpg-converter.article.faq.questions[6].question')"></h3>
            <div v-html="$t('tools.jfif-jpg-converter.article.faq.questions[6].answer')"></div>
          </div>
        </div>
      </section>
      
      <!-- 相关工具和参考资源 -->
      <section>
        <h2 id="related-tools">{{ $t('tools.jfif-jpg-converter.article.relatedTools.title') }}</h2>
        <p v-html="$t('tools.jfif-jpg-converter.article.relatedTools.introduction')"></p>
        <ul class="tool-links">
          <li>
            <a :href="$t('tools.jfif-jpg-converter.article.relatedTools.list[0].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jfif-jpg-converter.article.relatedTools.list[0].name')"></a> - 
            <span v-html="$t('tools.jfif-jpg-converter.article.relatedTools.list[0].description')"></span>
          </li>
          <li>
            <a :href="$t('tools.jfif-jpg-converter.article.relatedTools.list[1].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jfif-jpg-converter.article.relatedTools.list[1].name')"></a> - 
            <span v-html="$t('tools.jfif-jpg-converter.article.relatedTools.list[1].description')"></span>
          </li>
          <li>
            <a :href="$t('tools.jfif-jpg-converter.article.relatedTools.list[2].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jfif-jpg-converter.article.relatedTools.list[2].name')"></a> - 
            <span v-html="$t('tools.jfif-jpg-converter.article.relatedTools.list[2].description')"></span>
          </li>
        </ul>
        
        <h3 id="resources">{{ $t('tools.jfif-jpg-converter.article.resources.title') }}</h3>
        <ul class="resource-links">
          <li>
            <a :href="$t('tools.jfif-jpg-converter.article.resources.list[0].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jfif-jpg-converter.article.resources.list[0].name')"></a> - 
            <span v-html="$t('tools.jfif-jpg-converter.article.resources.list[0].description')"></span>
          </li>
          <li>
            <a :href="$t('tools.jfif-jpg-converter.article.resources.list[1].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jfif-jpg-converter.article.resources.list[1].name')"></a> - 
            <span v-html="$t('tools.jfif-jpg-converter.article.resources.list[1].description')"></span>
          </li>
          <li>
            <a :href="$t('tools.jfif-jpg-converter.article.resources.list[2].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jfif-jpg-converter.article.resources.list[2].name')"></a> - 
            <span v-html="$t('tools.jfif-jpg-converter.article.resources.list[2].description')"></span>
          </li>
        </ul>
      </section>
      
      <!-- 结论 -->
      <section>
        <h2 id="conclusion">{{ $t('tools.jfif-jpg-converter.article.conclusion.title') }}</h2>
        <p v-html="$t('tools.jfif-jpg-converter.article.conclusion.content')"></p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JfifJpgConverterArticle'
}
</script>

<style scoped>
.article-container {
  @apply mt-12 bg-white dark:bg-gray-800 rounded-lg shadow p-6;
}

.prose {
  @apply text-gray-800 dark:text-gray-200;
}

.prose h1 {
  @apply text-3xl font-bold mb-6 text-gray-900 dark:text-white;
}

.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100 pb-2 border-b border-gray-200 dark:border-gray-700;
}

.prose h3 {
  @apply text-xl font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-200;
}

.prose h4 {
  @apply text-lg font-medium mt-4 mb-2 text-gray-700 dark:text-gray-300;
}

.prose p {
  @apply my-4 leading-relaxed;
}

.prose ul {
  @apply list-disc pl-6 my-4 space-y-2;
}

.prose a {
  @apply text-blue-600 dark:text-blue-400 hover:underline;
}

.platform-boxes {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4 my-6;
}

.platform-box {
  @apply bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600;
}

.steps {
  @apply space-y-6 my-6;
}

.step {
  @apply flex items-start;
}

.step-number {
  @apply flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mr-4;
}

.step-content {
  @apply flex-grow;
}

.faq-list {
  @apply space-y-6 my-6;
}

.faq-item {
  @apply bg-gray-50 dark:bg-gray-700 p-5 rounded-lg border border-gray-200 dark:border-gray-600;
}

.faq-item h3 {
  @apply text-lg font-medium mb-3 text-gray-800 dark:text-gray-100;
}

.tool-links, .resource-links {
  @apply space-y-3;
}
</style> 