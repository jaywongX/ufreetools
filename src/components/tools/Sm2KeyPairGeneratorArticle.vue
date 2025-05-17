<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <article class="prose prose-lg max-w-none dark:prose-invert">
      <!-- 工具标题 -->
      <h1 class="text-3xl font-bold mb-6">{{ $t('tools.sm2-key-pair-generator.article.title') }}</h1>
      
      <!-- 功能介绍与应用场景 -->
      <section>
        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('tools.sm2-key-pair-generator.article.introTitle') }}</h2>
        <p v-html="$t('tools.sm2-key-pair-generator.article.introPara1')"></p>
        <p v-html="$t('tools.sm2-key-pair-generator.article.introPara2')"></p>
        
        <h3 class="text-xl font-medium mt-6 mb-3">{{ $t('tools.sm2-key-pair-generator.article.useCaseTitle') }}</h3>
        <ul>
          <li v-html="$t('tools.sm2-key-pair-generator.article.useCase1')"></li>
          <li v-html="$t('tools.sm2-key-pair-generator.article.useCase2')"></li>
          <li v-html="$t('tools.sm2-key-pair-generator.article.useCase3')"></li>
          <li v-html="$t('tools.sm2-key-pair-generator.article.useCase4')"></li>
        </ul>
        <p v-html="$t('tools.sm2-key-pair-generator.article.standardInfo')"></p>
      </section>
      
      <!-- 操作指南或教程 -->
      <section>
        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('tools.sm2-key-pair-generator.article.tutorialTitle') }}</h2>
        <p v-html="$t('tools.sm2-key-pair-generator.article.tutorialIntro')"></p>
        
        <div class="my-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
          <h3 class="text-xl font-medium mb-4">{{ $t('tools.sm2-key-pair-generator.article.step1Title') }}</h3>
          <p v-html="$t('tools.sm2-key-pair-generator.article.step1Desc')"></p>
          
          <h3 class="text-xl font-medium mt-6 mb-4">{{ $t('tools.sm2-key-pair-generator.article.step2Title') }}</h3>
          <p v-html="$t('tools.sm2-key-pair-generator.article.step2Desc')"></p>
          
          <h3 class="text-xl font-medium mt-6 mb-4">{{ $t('tools.sm2-key-pair-generator.article.step3Title') }}</h3>
          <p v-html="$t('tools.sm2-key-pair-generator.article.step3Desc')"></p>
          
          <h3 class="text-xl font-medium mt-6 mb-4">{{ $t('tools.sm2-key-pair-generator.article.step4Title') }}</h3>
          <p v-html="$t('tools.sm2-key-pair-generator.article.step4Desc')"></p>
        </div>
        
        <div class="my-6">
          <h3 class="text-xl font-medium mb-4">{{ $t('tools.sm2-key-pair-generator.article.relatedToolsTitle') }}</h3>
          <p v-html="$t('tools.sm2-key-pair-generator.article.relatedToolsDesc')"></p>
          <ul class="my-4">
            <li class="mb-2">
              <a href="https://www.ufreetools.com/tool/rsa-key-pair-generator" 
                 class="text-blue-600 hover:underline dark:text-blue-400" 
                 target="_blank">{{ $t('tools.sm2-key-pair-generator.article.relatedTool1') }}</a>
            </li>
            <li class="mb-2">
              <a href="https://www.ufreetools.com/tool/hash-calculator" 
                 class="text-blue-600 hover:underline dark:text-blue-400" 
                 target="_blank">{{ $t('tools.sm2-key-pair-generator.article.relatedTool2') }}</a>
            </li>
          </ul>
        </div>
      </section>
      
      <!-- 用户常见问题解答 -->
      <section>
        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('tools.sm2-key-pair-generator.article.faqTitle') }}</h2>
        
        <div class="my-6" itemscope itemtype="https://schema.org/FAQPage">
          <div class="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-xl font-medium mb-2" itemprop="name">{{ $t('tools.sm2-key-pair-generator.article.faq1Question') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.sm2-key-pair-generator.article.faq1Answer')"></div>
            </div>
          </div>
          
          <div class="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-xl font-medium mb-2" itemprop="name">{{ $t('tools.sm2-key-pair-generator.article.faq2Question') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.sm2-key-pair-generator.article.faq2Answer')"></div>
            </div>
          </div>
          
          <div class="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-xl font-medium mb-2" itemprop="name">{{ $t('tools.sm2-key-pair-generator.article.faq3Question') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.sm2-key-pair-generator.article.faq3Answer')"></div>
            </div>
          </div>
          
          <div class="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-xl font-medium mb-2" itemprop="name">{{ $t('tools.sm2-key-pair-generator.article.faq4Question') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.sm2-key-pair-generator.article.faq4Answer')"></div>
            </div>
          </div>
          
          <div class="mb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-xl font-medium mb-2" itemprop="name">{{ $t('tools.sm2-key-pair-generator.article.faq5Question') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.sm2-key-pair-generator.article.faq5Answer')"></div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 相关资源 -->
      <section>
        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('tools.sm2-key-pair-generator.article.resourcesTitle') }}</h2>
        <p v-html="$t('tools.sm2-key-pair-generator.article.resourcesDesc')"></p>
        <ul class="my-4">
          <li class="mb-2">
            <a href="http://www.gmbz.org.cn/main/viewfile/20180108023812835219.html" 
               class="text-blue-600 hover:underline dark:text-blue-400" 
               target="_blank" 
               rel="noopener noreferrer">{{ $t('tools.sm2-key-pair-generator.article.resource1') }}</a>
          </li>
          <li class="mb-2">
            <a href="https://www.oscca.gov.cn/sca/xxgk/bzgf.shtml" 
               class="text-blue-600 hover:underline dark:text-blue-400" 
               target="_blank" 
               rel="noopener noreferrer">{{ $t('tools.sm2-key-pair-generator.article.resource2') }}</a>
          </li>
          <li class="mb-2">
            <a href="https://www.iso.org/standard/76382.html" 
               class="text-blue-600 hover:underline dark:text-blue-400" 
               target="_blank" 
               rel="noopener noreferrer">{{ $t('tools.sm2-key-pair-generator.article.resource3') }}</a>
          </li>
        </ul>
      </section>
      
      <!-- 结论 -->
      <section>
        <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('tools.sm2-key-pair-generator.article.conclusionTitle') }}</h2>
        <p v-html="$t('tools.sm2-key-pair-generator.article.conclusionPara')"></p>
      </section>
    </article>
  </div>
</template>

<script setup>
// No additional script needed
</script> 