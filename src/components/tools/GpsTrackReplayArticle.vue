<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <article class="prose dark:prose-invert max-w-none">
      <h2 class="text-2xl font-bold mb-4">{{ $t('tools.gps-track-replay.article.title') }}</h2>
    
      <!-- 功能介绍和应用场景 -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.gps-track-replay.article.introTitle') }}</h2>
        <p class="mb-4" v-html="$t('tools.gps-track-replay.article.introPara1')"></p>
        <p class="mb-4" v-html="$t('tools.gps-track-replay.article.introPara2')"></p>
        
        <h3 class="text-xl font-semibold mb-3 mt-6">{{ $t('tools.gps-track-replay.article.useCasesTitle') }}</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li v-html="$t('tools.gps-track-replay.article.useCase1')"></li>
          <li v-html="$t('tools.gps-track-replay.article.useCase2')"></li>
          <li v-html="$t('tools.gps-track-replay.article.useCase3')"></li>
          <li v-html="$t('tools.gps-track-replay.article.useCase4')"></li>
          <li v-html="$t('tools.gps-track-replay.article.useCase5')"></li>
        </ul>
        
        <p class="mb-4" v-html="$t('tools.gps-track-replay.article.introPara3')"></p>
      </section>
      
      <!-- 常见问题解答 -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.gps-track-replay.article.faqTitle') }}</h2>
        
        <div class="space-y-6" itemscope itemtype="https://schema.org/FAQPage">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-medium mb-2" itemprop="name">{{ $t('tools.gps-track-replay.article.faq1Q') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.gps-track-replay.article.faq1A')"></div>
            </div>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-medium mb-2" itemprop="name">{{ $t('tools.gps-track-replay.article.faq2Q') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.gps-track-replay.article.faq2A')"></div>
            </div>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-medium mb-2" itemprop="name">{{ $t('tools.gps-track-replay.article.faq3Q') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.gps-track-replay.article.faq3A')"></div>
            </div>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-medium mb-2" itemprop="name">{{ $t('tools.gps-track-replay.article.faq4Q') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.gps-track-replay.article.faq4A')"></div>
            </div>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-medium mb-2" itemprop="name">{{ $t('tools.gps-track-replay.article.faq5Q') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.gps-track-replay.article.faq5A')"></div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 操作指南 -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.gps-track-replay.article.tutorialTitle') }}</h2>
        
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3">{{ $t('tools.gps-track-replay.article.step1Title') }}</h3>
          <p class="mb-4" v-html="$t('tools.gps-track-replay.article.step1Content')"></p>
          <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-4">
            <p class="text-sm font-medium" v-html="$t('tools.gps-track-replay.article.step1Tip')"></p>
          </div>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3">{{ $t('tools.gps-track-replay.article.step2Title') }}</h3>
          <p class="mb-4" v-html="$t('tools.gps-track-replay.article.step2Content')"></p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3">{{ $t('tools.gps-track-replay.article.step3Title') }}</h3>
          <p class="mb-4" v-html="$t('tools.gps-track-replay.article.step3Content')"></p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3">{{ $t('tools.gps-track-replay.article.step4Title') }}</h3>
          <p class="mb-4" v-html="$t('tools.gps-track-replay.article.step4Content')"></p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3">{{ $t('tools.gps-track-replay.article.step5Title') }}</h3>
          <p class="mb-4" v-html="$t('tools.gps-track-replay.article.step5Content')"></p>
        </div>
      </section>
      
      <!-- 相关资源 -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.gps-track-replay.article.resourcesTitle') }}</h2>
        
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.gps-track-replay.article.relatedToolsTitle') }}</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>
            <a href="https://www.ufreetools.com/tool/coordinate-converter" target="_blank" class="text-blue-600 hover:underline">
              {{ $t('tools.gps-track-replay.article.relatedTool1') }}
            </a>
          </li>
          <!-- <li>
            <a href="https://www.ufreetools.com/tools/geojson-viewer" target="_blank" class="text-blue-600 hover:underline">
              {{ $t('tools.gps-track-replay.article.relatedTool2') }}
            </a>
          </li>
          <li>
            <a href="https://www.ufreetools.com/tools/gpx-editor" target="_blank" class="text-blue-600 hover:underline">
              {{ $t('tools.gps-track-replay.article.relatedTool3') }}
            </a>
          </li> -->
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.gps-track-replay.article.externalResourcesTitle') }}</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>
            <a href="https://www.openstreetmap.org" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
              {{ $t('tools.gps-track-replay.article.externalResource1') }}
            </a>
          </li>
          <li>
            <a href="https://www.gpsvisualizer.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
              {{ $t('tools.gps-track-replay.article.externalResource2') }}
            </a>
          </li>
          <li>
            <a href="https://developers.google.com/kml/documentation" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
              {{ $t('tools.gps-track-replay.article.externalResource3') }}
            </a>
          </li>
        </ul>
      </section>
      
      <!-- 结论 -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.gps-track-replay.article.conclusionTitle') }}</h2>
        <p class="mb-4" v-html="$t('tools.gps-track-replay.article.conclusionPara1')"></p>
        <p class="mb-4" v-html="$t('tools.gps-track-replay.article.conclusionPara2')"></p>
      </section>
    </article>
  </div>
</template>

<script setup>
// 无需特殊逻辑，所有内容通过国际化文本提供
</script>

<style scoped>
.article-container {
  line-height: 1.6;
}

.article-container p {
  margin-bottom: 1rem;
}

.article-container a {
  color: #3b82f6;
  text-decoration: none;
}

.article-container a:hover {
  text-decoration: underline;
}
</style> 