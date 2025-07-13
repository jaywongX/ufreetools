<template>
<div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <article class="prose dark:prose-invert max-w-none">
      <h2 class="text-2xl font-bold mb-4">{{ $t('tools.http-proxy-detector.article.title') }}</h2>
      
      <!-- 功能介绍与应用场景 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.http-proxy-detector.article.intro.title') }}</h2>
      <p v-html="$t('tools.http-proxy-detector.article.intro.p1')"></p>
      <p v-html="$t('tools.http-proxy-detector.article.intro.p2')"></p>
      <p v-html="$t('tools.http-proxy-detector.article.intro.p3')"></p>
      
      <!-- 应用场景列表 -->
      <h3 class="text-lg font-medium mt-4 mb-2">{{ $t('tools.http-proxy-detector.article.useCases.title') }}</h3>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2" v-html="$t('tools.http-proxy-detector.article.useCases.case1')"></li>
        <li class="mb-2" v-html="$t('tools.http-proxy-detector.article.useCases.case2')"></li>
        <li class="mb-2" v-html="$t('tools.http-proxy-detector.article.useCases.case3')"></li>
        <li class="mb-2" v-html="$t('tools.http-proxy-detector.article.useCases.case4')"></li>
        <li class="mb-2" v-html="$t('tools.http-proxy-detector.article.useCases.case5')"></li>
      </ul>
      
      <!-- 操作指南 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.http-proxy-detector.article.tutorial.title') }}</h2>
      <p v-html="$t('tools.http-proxy-detector.article.tutorial.intro')"></p>
      
      <div class="mb-6 mt-4 space-y-4">
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.http-proxy-detector.article.tutorial.step1.title') }}</h3>
          <p v-html="$t('tools.http-proxy-detector.article.tutorial.step1.description')"></p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.http-proxy-detector.article.tutorial.step2.title') }}</h3>
          <p v-html="$t('tools.http-proxy-detector.article.tutorial.step2.description')"></p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.http-proxy-detector.article.tutorial.step3.title') }}</h3>
          <p v-html="$t('tools.http-proxy-detector.article.tutorial.step3.description')"></p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.http-proxy-detector.article.tutorial.step4.title') }}</h3>
          <p v-html="$t('tools.http-proxy-detector.article.tutorial.step4.description')"></p>
        </div>
      </div>
      
      <!-- 网络代理检测技术解析 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.http-proxy-detector.article.techniques.title') }}</h2>
      <p v-html="$t('tools.http-proxy-detector.article.techniques.intro')"></p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <h4 class="font-medium mb-2">{{ $t('tools.http-proxy-detector.article.techniques.method1.title') }}</h4>
          <p v-html="$t('tools.http-proxy-detector.article.techniques.method1.description')"></p>
        </div>
        
        <div class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <h4 class="font-medium mb-2">{{ $t('tools.http-proxy-detector.article.techniques.method2.title') }}</h4>
          <p v-html="$t('tools.http-proxy-detector.article.techniques.method2.description')"></p>
        </div>
        
        <div class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <h4 class="font-medium mb-2">{{ $t('tools.http-proxy-detector.article.techniques.method3.title') }}</h4>
          <p v-html="$t('tools.http-proxy-detector.article.techniques.method3.description')"></p>
        </div>
        
        <div class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <h4 class="font-medium mb-2">{{ $t('tools.http-proxy-detector.article.techniques.method4.title') }}</h4>
          <p v-html="$t('tools.http-proxy-detector.article.techniques.method4.description')"></p>
        </div>
      </div>
      
      <!-- FAQ 部分 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.http-proxy-detector.article.faq.title') }}</h2>
      <div itemscope itemtype="https://schema.org/FAQPage">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 itemprop="name" class="text-lg font-medium mb-2">{{ $t('tools.http-proxy-detector.article.faq.q1') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.http-proxy-detector.article.faq.a1')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 itemprop="name" class="text-lg font-medium mb-2">{{ $t('tools.http-proxy-detector.article.faq.q2') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.http-proxy-detector.article.faq.a2')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 itemprop="name" class="text-lg font-medium mb-2">{{ $t('tools.http-proxy-detector.article.faq.q3') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.http-proxy-detector.article.faq.a3')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 itemprop="name" class="text-lg font-medium mb-2">{{ $t('tools.http-proxy-detector.article.faq.q4') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.http-proxy-detector.article.faq.a4')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 itemprop="name" class="text-lg font-medium mb-2">{{ $t('tools.http-proxy-detector.article.faq.q5') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.http-proxy-detector.article.faq.a5')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4">
          <h3 itemprop="name" class="text-lg font-medium mb-2">{{ $t('tools.http-proxy-detector.article.faq.q6') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.http-proxy-detector.article.faq.a6')"></div>
          </div>
        </div>
      </div>
      
      <!-- 相关工具 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.http-proxy-detector.article.relatedTools.title') }}</h2>
      <p v-html="$t('tools.http-proxy-detector.article.relatedTools.description')"></p>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        <li class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <a :href="$t('tools.http-proxy-detector.article.relatedTools.tool1.url')" class="text-primary hover:text-primary-dark font-medium" target="_blank">{{ $t('tools.http-proxy-detector.article.relatedTools.tool1.name') }}</a>
          <p class="text-sm text-gray-600 dark:text-gray-400" v-html="$t('tools.http-proxy-detector.article.relatedTools.tool1.description')"></p>
        </li>
        <li class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <a :href="$t('tools.http-proxy-detector.article.relatedTools.tool2.url')" class="text-primary hover:text-primary-dark font-medium" target="_blank">{{ $t('tools.http-proxy-detector.article.relatedTools.tool2.name') }}</a>
          <p class="text-sm text-gray-600 dark:text-gray-400" v-html="$t('tools.http-proxy-detector.article.relatedTools.tool2.description')"></p>
        </li>
        <li class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <a :href="$t('tools.http-proxy-detector.article.relatedTools.tool3.url')" class="text-primary hover:text-primary-dark font-medium" target="_blank">{{ $t('tools.http-proxy-detector.article.relatedTools.tool3.name') }}</a>
          <p class="text-sm text-gray-600 dark:text-gray-400" v-html="$t('tools.http-proxy-detector.article.relatedTools.tool3.description')"></p>
        </li>
        <li class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <a :href="$t('tools.http-proxy-detector.article.relatedTools.tool4.url')" class="text-primary hover:text-primary-dark font-medium" target="_blank">{{ $t('tools.http-proxy-detector.article.relatedTools.tool4.name') }}</a>
          <p class="text-sm text-gray-600 dark:text-gray-400" v-html="$t('tools.http-proxy-detector.article.relatedTools.tool4.description')"></p>
        </li>
      </ul>
      
      <!-- 外部资源 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.http-proxy-detector.article.resources.title') }}</h2>
      <ul class="mb-2">
        <li class="mb-3">
          <a :href="$t('tools.http-proxy-detector.article.resources.resource1.url')" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-dark font-medium">{{ $t('tools.http-proxy-detector.article.resources.resource1.name') }}</a>
          <p class="text-sm text-gray-600 dark:text-gray-400" v-html="$t('tools.http-proxy-detector.article.resources.resource1.description')"></p>
        </li>
        <li class="mb-3">
          <a :href="$t('tools.http-proxy-detector.article.resources.resource2.url')" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-dark font-medium">{{ $t('tools.http-proxy-detector.article.resources.resource2.name') }}</a>
          <p class="text-sm text-gray-600 dark:text-gray-400" v-html="$t('tools.http-proxy-detector.article.resources.resource2.description')"></p>
        </li>
        <li class="mb-3">
          <a :href="$t('tools.http-proxy-detector.article.resources.resource3.url')" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-dark font-medium">{{ $t('tools.http-proxy-detector.article.resources.resource3.name') }}</a>
          <p class="text-sm text-gray-600 dark:text-gray-400" v-html="$t('tools.http-proxy-detector.article.resources.resource3.description')"></p>
        </li>
      </ul>
    </article>
  </div>
</template>