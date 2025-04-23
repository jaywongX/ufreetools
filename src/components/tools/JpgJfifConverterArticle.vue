<template>
  <div class="article-container">
    <div class="prose max-w-none">
      <h1 id="jpg-to-jfif-converter">{{ $t('tools.jpg-jfif-converter.article.title') }}</h1>
      
      <!-- 工具功能介绍和应用场景 -->
      <section>
        <h2 id="introduction">{{ $t('tools.jpg-jfif-converter.article.introduction.title') }}</h2>
        <p v-html="$t('tools.jpg-jfif-converter.article.introduction.content')"></p>
        
        <!-- 增加与JFIF、JPG和其他格式的比较 -->
        <div class="format-comparison">
          <h3 id="format-comparison">{{ $t('tools.jpg-jfif-converter.article.formatComparison.title') }}</h3>
          <p v-html="$t('tools.jpg-jfif-converter.article.formatComparison.content')"></p>
          <div class="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>{{ $t('tools.jpg-jfif-converter.article.formatComparison.table.feature') }}</th>
                  <th>JFIF</th>
                  <th>JPEG/JPG</th>
                  <th>PNG</th>
                  <th>PDF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[0].feature')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[0].jfif')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[0].jpeg')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[0].png')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[0].pdf')"></td>
                </tr>
                <tr>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[1].feature')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[1].jfif')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[1].jpeg')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[1].png')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[1].pdf')"></td>
                </tr>
                <tr>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[2].feature')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[2].jfif')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[2].jpeg')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[2].png')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[2].pdf')"></td>
                </tr>
                <tr>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[3].feature')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[3].jfif')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[3].jpeg')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[3].png')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[3].pdf')"></td>
                </tr>
                <tr>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[4].feature')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[4].jfif')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[4].jpeg')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[4].png')"></td>
                  <td v-html="$t('tools.jpg-jfif-converter.article.formatComparison.table.rows[4].pdf')"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <h3 id="what-is-jfif">{{ $t('tools.jpg-jfif-converter.article.whatIsJfif.title') }}</h3>
        <p v-html="$t('tools.jpg-jfif-converter.article.whatIsJfif.content')"></p>
        
        <h3 id="why-convert">{{ $t('tools.jpg-jfif-converter.article.whyConvert.title') }}</h3>
        <p v-html="$t('tools.jpg-jfif-converter.article.whyConvert.content')"></p>
        
        <h3 id="use-cases">{{ $t('tools.jpg-jfif-converter.article.useCases.title') }}</h3>
        <ul>
          <li v-html="$t('tools.jpg-jfif-converter.article.useCases.list[0]')"></li>
          <li v-html="$t('tools.jpg-jfif-converter.article.useCases.list[1]')"></li>
          <li v-html="$t('tools.jpg-jfif-converter.article.useCases.list[2]')"></li>
          <li v-html="$t('tools.jpg-jfif-converter.article.useCases.list[3]')"></li>
          <li v-html="$t('tools.jpg-jfif-converter.article.useCases.list[4]')"></li>
          <li v-html="$t('tools.jpg-jfif-converter.article.useCases.list[5]')"></li>
          <li v-html="$t('tools.jpg-jfif-converter.article.useCases.list[6]')"></li>
        </ul>
        
        <!-- 添加更多格式转换信息 -->
        <h3 id="other-conversions">{{ $t('tools.jpg-jfif-converter.article.otherConversions.title') }}</h3>
        <p v-html="$t('tools.jpg-jfif-converter.article.otherConversions.content')"></p>
        <div class="conversion-options">
          <div class="conversion-option">
            <h4 v-html="$t('tools.jpg-jfif-converter.article.otherConversions.options[0].title')"></h4>
            <p v-html="$t('tools.jpg-jfif-converter.article.otherConversions.options[0].description')"></p>
          </div>
          <div class="conversion-option">
            <h4 v-html="$t('tools.jpg-jfif-converter.article.otherConversions.options[1].title')"></h4>
            <p v-html="$t('tools.jpg-jfif-converter.article.otherConversions.options[1].description')"></p>
          </div>
          <div class="conversion-option">
            <h4 v-html="$t('tools.jpg-jfif-converter.article.otherConversions.options[2].title')"></h4>
            <p v-html="$t('tools.jpg-jfif-converter.article.otherConversions.options[2].description')"></p>
          </div>
          <div class="conversion-option">
            <h4 v-html="$t('tools.jpg-jfif-converter.article.otherConversions.options[3].title')"></h4>
            <p v-html="$t('tools.jpg-jfif-converter.article.otherConversions.options[3].description')"></p>
          </div>
        </div>
        
        <h3 id="platforms">{{ $t('tools.jpg-jfif-converter.article.platforms.title') }}</h3>
        <p v-html="$t('tools.jpg-jfif-converter.article.platforms.content')"></p>
        <div class="platform-boxes">
          <div class="platform-box">
            <h4 v-html="$t('tools.jpg-jfif-converter.article.platforms.list[0].title')"></h4>
            <p v-html="$t('tools.jpg-jfif-converter.article.platforms.list[0].description')"></p>
          </div>
          <div class="platform-box">
            <h4 v-html="$t('tools.jpg-jfif-converter.article.platforms.list[1].title')"></h4>
            <p v-html="$t('tools.jpg-jfif-converter.article.platforms.list[1].description')"></p>
          </div>
          <div class="platform-box">
            <h4 v-html="$t('tools.jpg-jfif-converter.article.platforms.list[2].title')"></h4>
            <p v-html="$t('tools.jpg-jfif-converter.article.platforms.list[2].description')"></p>
          </div>
          <div class="platform-box">
            <h4 v-html="$t('tools.jpg-jfif-converter.article.platforms.list[3].title')"></h4>
            <p v-html="$t('tools.jpg-jfif-converter.article.platforms.list[3].description')"></p>
          </div>
        </div>
      </section>
      
      <!-- 操作指南 -->
      <section>
        <h2 id="tutorial">{{ $t('tools.jpg-jfif-converter.article.tutorial.title') }}</h2>
        <p v-html="$t('tools.jpg-jfif-converter.article.tutorial.introduction')"></p>
        
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[0].title')"></h4>
              <p v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[0].description')"></p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[1].title')"></h4>
              <p v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[1].description')"></p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[2].title')"></h4>
              <p v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[2].description')"></p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[3].title')"></h4>
              <p v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[3].description')"></p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[4].title')"></h4>
              <p v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[4].description')"></p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">6</div>
            <div class="step-content">
              <h4 v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[5].title')"></h4>
              <p v-html="$t('tools.jpg-jfif-converter.article.tutorial.steps[5].description')"></p>
            </div>
          </div>
        </div>
        
        <!-- 添加特定平台指南 -->
        <h3 id="specific-platform">{{ $t('tools.jpg-jfif-converter.article.specificPlatform.title') }}</h3>
        <div class="platform-guide">
          <h4 id="windows-10-guide">{{ $t('tools.jpg-jfif-converter.article.specificPlatform.windows10.title') }}</h4>
          <p v-html="$t('tools.jpg-jfif-converter.article.specificPlatform.windows10.intro')"></p>
          <ol class="platform-steps">
            <li v-html="$t('tools.jpg-jfif-converter.article.specificPlatform.windows10.steps[0]')"></li>
            <li v-html="$t('tools.jpg-jfif-converter.article.specificPlatform.windows10.steps[1]')"></li>
            <li v-html="$t('tools.jpg-jfif-converter.article.specificPlatform.windows10.steps[2]')"></li>
            <li v-html="$t('tools.jpg-jfif-converter.article.specificPlatform.windows10.steps[3]')"></li>
            <li v-html="$t('tools.jpg-jfif-converter.article.specificPlatform.windows10.steps[4]')"></li>
            <li v-html="$t('tools.jpg-jfif-converter.article.specificPlatform.windows10.steps[5]')"></li>
            <li v-html="$t('tools.jpg-jfif-converter.article.specificPlatform.windows10.steps[6]')"></li>
          </ol>
        </div>
        
        <h3 id="tips">{{ $t('tools.jpg-jfif-converter.article.tutorial.tips.title') }}</h3>
        <ul>
          <li v-html="$t('tools.jpg-jfif-converter.article.tutorial.tips.list[0]')"></li>
          <li v-html="$t('tools.jpg-jfif-converter.article.tutorial.tips.list[1]')"></li>
          <li v-html="$t('tools.jpg-jfif-converter.article.tutorial.tips.list[2]')"></li>
          <li v-html="$t('tools.jpg-jfif-converter.article.tutorial.tips.list[3]')"></li>
          <li v-html="$t('tools.jpg-jfif-converter.article.tutorial.tips.list[4]')"></li>
        </ul>
      </section>
      
      <!-- FAQ部分 - 添加结构化数据属性 -->
      <section itemscope itemtype="https://schema.org/FAQPage">
        <h2 id="faq">{{ $t('tools.jpg-jfif-converter.article.faq.title') }}</h2>
        <div class="faq-list">
          <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 id="faq-0" itemprop="name" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[0].question')"></h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[0].answer')"></div>
            </div>
          </div>
          <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 id="faq-1" itemprop="name" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[1].question')"></h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[1].answer')"></div>
            </div>
          </div>
          <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 id="faq-2" itemprop="name" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[2].question')"></h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[2].answer')"></div>
            </div>
          </div>
          <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 id="faq-3" itemprop="name" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[3].question')"></h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[3].answer')"></div>
            </div>
          </div>
          <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 id="faq-4" itemprop="name" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[4].question')"></h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[4].answer')"></div>
            </div>
          </div>
          <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 id="faq-5" itemprop="name" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[5].question')"></h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[5].answer')"></div>
            </div>
          </div>
          <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 id="faq-6" itemprop="name" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[6].question')"></h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[6].answer')"></div>
            </div>
          </div>
          
          <!-- 添加涵盖其他关键词的FAQ条目 -->
          <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 id="faq-7" itemprop="name" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[7].question')"></h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[7].answer')"></div>
            </div>
          </div>
          <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 id="faq-8" itemprop="name" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[8].question')"></h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[8].answer')"></div>
            </div>
          </div>
          <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 id="faq-9" itemprop="name" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[9].question')"></h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.jpg-jfif-converter.article.faq.questions[9].answer')"></div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 相关工具和参考资源 -->
      <section>
        <h2 id="related-tools">{{ $t('tools.jpg-jfif-converter.article.relatedTools.title') }}</h2>
        <p v-html="$t('tools.jpg-jfif-converter.article.relatedTools.introduction')"></p>
        <ul class="tool-links">
          <li>
            <a :href="$t('tools.jpg-jfif-converter.article.relatedTools.list[0].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jpg-jfif-converter.article.relatedTools.list[0].name')"></a> - 
            <span v-html="$t('tools.jpg-jfif-converter.article.relatedTools.list[0].description')"></span>
          </li>
          <li>
            <a :href="$t('tools.jpg-jfif-converter.article.relatedTools.list[1].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jpg-jfif-converter.article.relatedTools.list[1].name')"></a> - 
            <span v-html="$t('tools.jpg-jfif-converter.article.relatedTools.list[1].description')"></span>
          </li>
          <li>
            <a :href="$t('tools.jpg-jfif-converter.article.relatedTools.list[2].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jpg-jfif-converter.article.relatedTools.list[2].name')"></a> - 
            <span v-html="$t('tools.jpg-jfif-converter.article.relatedTools.list[2].description')"></span>
          </li>
        </ul>
        
        <h3 id="resources">{{ $t('tools.jpg-jfif-converter.article.resources.title') }}</h3>
        <ul class="resource-links">
          <li>
            <a :href="$t('tools.jpg-jfif-converter.article.resources.list[0].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jpg-jfif-converter.article.resources.list[0].name')"></a> - 
            <span v-html="$t('tools.jpg-jfif-converter.article.resources.list[0].description')"></span>
          </li>
          <li>
            <a :href="$t('tools.jpg-jfif-converter.article.resources.list[1].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jpg-jfif-converter.article.resources.list[1].name')"></a> - 
            <span v-html="$t('tools.jpg-jfif-converter.article.resources.list[1].description')"></span>
          </li>
          <li>
            <a :href="$t('tools.jpg-jfif-converter.article.resources.list[2].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jpg-jfif-converter.article.resources.list[2].name')"></a> - 
            <span v-html="$t('tools.jpg-jfif-converter.article.resources.list[2].description')"></span>
          </li>
          <!-- 添加更多外部资源 -->
          <li v-if="$t('tools.jpg-jfif-converter.article.resources.list[3]')">
            <a :href="$t('tools.jpg-jfif-converter.article.resources.list[3].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jpg-jfif-converter.article.resources.list[3].name')"></a> - 
            <span v-html="$t('tools.jpg-jfif-converter.article.resources.list[3].description')"></span>
          </li>
          <li v-if="$t('tools.jpg-jfif-converter.article.resources.list[4]')">
            <a :href="$t('tools.jpg-jfif-converter.article.resources.list[4].url')" target="_blank" rel="noopener noreferrer" v-html="$t('tools.jpg-jfif-converter.article.resources.list[4].name')"></a> - 
            <span v-html="$t('tools.jpg-jfif-converter.article.resources.list[4].description')"></span>
          </li>
        </ul>
      </section>
      
      <!-- 结论 -->
      <section>
        <h2 id="conclusion">{{ $t('tools.jpg-jfif-converter.article.conclusion.title') }}</h2>
        <p v-html="$t('tools.jpg-jfif-converter.article.conclusion.content')"></p>
        
        <!-- 添加CTA按钮 -->
        <div class="cta-container">
          <button class="cta-button" @click="scrollToTool">
            {{ $t('tools.jpg-jfif-converter.article.conclusion.cta') }}
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JpgJfifConverterArticle',
  methods: {
    scrollToTool() {
      // 滚动到页面顶部的工具部分
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
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

.comparison-table table {
  @apply w-full border-collapse my-4;
}

.comparison-table th, .comparison-table td {
  @apply border border-gray-300 dark:border-gray-600 p-2 text-sm;
}

.comparison-table th {
  @apply bg-gray-100 dark:bg-gray-700;
}

.conversion-options {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4 mt-4;
}

.conversion-option {
  @apply bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600;
}

.platform-steps {
  @apply list-decimal pl-6 my-4 space-y-2;
}

.cta-container {
  @apply flex justify-center mt-8;
}

.cta-button {
  @apply px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition;
}
</style> 