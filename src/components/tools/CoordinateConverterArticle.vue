<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden my-6">
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {{ t('tools.coordinate-converter.article.title') }}
      </h2>
      
      <p class="text-gray-700 dark:text-gray-300 mb-6">
        {{ t('tools.coordinate-converter.article.introduction') }}
      </p>
      
      <!-- Why needed section -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {{ t('tools.coordinate-converter.article.whyNeeded.title') }}
        </h2>
        <p class="text-gray-700 dark:text-gray-300 mb-3">
          {{ t('tools.coordinate-converter.article.whyNeeded.p1') }}
        </p>
        <p class="text-gray-700 dark:text-gray-300">
          {{ t('tools.coordinate-converter.article.whyNeeded.p2') }}
        </p>
      </div>
      
      <!-- Coordinate Systems section -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {{ t('tools.coordinate-converter.article.systems.title') }}
        </h2>
        
        <div class="mb-4">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {{ t('tools.coordinate-converter.article.systems.wgs84.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.systems.wgs84.description') }}
          </p>
        </div>
        
        <div class="mb-4">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {{ t('tools.coordinate-converter.article.systems.gcj02.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.systems.gcj02.description') }}
          </p>
        </div>
        
        <div class="mb-4">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {{ t('tools.coordinate-converter.article.systems.bd09.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.systems.bd09.description') }}
          </p>
        </div>
        
        <div class="mb-4">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {{ t('tools.coordinate-converter.article.systems.webmercator.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.systems.webmercator.description') }}
          </p>
        </div>
        
        <div class="mb-4">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {{ t('tools.coordinate-converter.article.systems.utm.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.systems.utm.description') }}
          </p>
        </div>
      </div>
      
      <!-- Use Cases section -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {{ t('tools.coordinate-converter.article.useCases.title') }}
        </h2>
        
        <div class="mb-3">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {{ t('tools.coordinate-converter.article.useCases.case1.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.useCases.case1.description') }}
          </p>
        </div>
        
        <div class="mb-3">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {{ t('tools.coordinate-converter.article.useCases.case2.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.useCases.case2.description') }}
          </p>
        </div>
        
        <div class="mb-3">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {{ t('tools.coordinate-converter.article.useCases.case3.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.useCases.case3.description') }}
          </p>
        </div>
        
        <div class="mb-3">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {{ t('tools.coordinate-converter.article.useCases.case4.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.useCases.case4.description') }}
          </p>
        </div>
      </div>
      
      <!-- How to Use section -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {{ t('tools.coordinate-converter.article.howToUse.title') }}
        </h2>
        <p class="text-gray-700 dark:text-gray-300 mb-3">
          {{ t('tools.coordinate-converter.article.howToUse.introduction') }}
        </p>
        
        <div class="mb-3">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {{ t('tools.coordinate-converter.article.howToUse.step1.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.howToUse.step1.description') }}
          </p>
        </div>
        
        <div class="mb-3">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {{ t('tools.coordinate-converter.article.howToUse.step2.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.howToUse.step2.description') }}
          </p>
        </div>
        
        <div class="mb-3">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {{ t('tools.coordinate-converter.article.howToUse.step3.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.howToUse.step3.description') }}
          </p>
        </div>
        
        <div class="mb-3">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {{ t('tools.coordinate-converter.article.howToUse.step4.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.howToUse.step4.description') }}
          </p>
        </div>
        
        <div class="mb-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {{ t('tools.coordinate-converter.article.howToUse.example.title') }}
          </h3>
          <p class="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
            {{ t('tools.coordinate-converter.article.howToUse.example.description') }}
          </p>
        </div>
      </div>
      
      <!-- Best Practices section -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {{ t('tools.coordinate-converter.article.tips.title') }}
        </h2>
        
        <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
          <li>{{ t('tools.coordinate-converter.article.tips.tip1') }}</li>
          <li>{{ t('tools.coordinate-converter.article.tips.tip2') }}</li>
          <li>{{ t('tools.coordinate-converter.article.tips.tip3') }}</li>
          <li>{{ t('tools.coordinate-converter.article.tips.tip4') }}</li>
        </ul>
      </div>
      
      <!-- FAQ section with structured data -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {{ t('tools.coordinate-converter.article.faq.title') }}
        </h2>
        
        <!-- Schema.org FAQPage structured data -->
        <div class="space-y-4" itemscope itemtype="https://schema.org/FAQPage">
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 itemprop="name" class="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {{ t('tools.coordinate-converter.article.faq.q1') }}
            </h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text" class="text-gray-700 dark:text-gray-300">
                {{ t('tools.coordinate-converter.article.faq.a1') }}
              </p>
            </div>
          </div>
          
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 itemprop="name" class="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {{ t('tools.coordinate-converter.article.faq.q2') }}
            </h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text" class="text-gray-700 dark:text-gray-300">
                {{ t('tools.coordinate-converter.article.faq.a2') }}
              </p>
            </div>
          </div>
          
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 itemprop="name" class="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {{ t('tools.coordinate-converter.article.faq.q3') }}
            </h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text" class="text-gray-700 dark:text-gray-300">
                {{ t('tools.coordinate-converter.article.faq.a3') }}
              </p>
            </div>
          </div>
          
          <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 itemprop="name" class="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {{ t('tools.coordinate-converter.article.faq.q4') }}
            </h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text" class="text-gray-700 dark:text-gray-300">
                {{ t('tools.coordinate-converter.article.faq.a4') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Conclusion -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {{ t('tools.coordinate-converter.article.conclusion.title') }}
        </h2>
        <p class="text-gray-700 dark:text-gray-300">
          {{ t('tools.coordinate-converter.article.conclusion.text') }}
        </p>
      </div>
      
      <!-- Related tools with internal links -->
      <div>
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {{ t('tools.coordinate-converter.article.relatedTools.title') }}
        </h2>
        
        <!-- <div class="space-y-3">
          <div v-for="(tool, index) in t('tools.coordinate-converter.article.relatedTools.tools')" :key="index" class="p-4 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <a :href="tool.url" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              {{ tool.name }}
            </a>
            <p class="text-gray-700 dark:text-gray-300 mt-1">
              {{ tool.description }}
            </p>
          </div>
        </div> -->
        
        <!-- External authoritative links -->
        <div class="mt-6">
          <p class="text-gray-700 dark:text-gray-300">
            {{ t('tools.coordinate-converter.article.externalLinks.intro') }}
            <a href="https://en.wikipedia.org/wiki/Geographic_coordinate_system" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 hover:underline">
              {{ t('tools.coordinate-converter.article.externalLinks.wikipedia') }}
            </a>
            |
            <a href="https://epsg.io/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 hover:underline">
              {{ t('tools.coordinate-converter.article.externalLinks.epsg') }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script> 