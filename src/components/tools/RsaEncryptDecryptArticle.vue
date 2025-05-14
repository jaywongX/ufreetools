<template>
  <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.title') }}</h1>
    
    <!-- 工具介绍 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.introTitle') }}</h2>
      <p class="mb-3 text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.intro1')"></p>
      <p class="mb-3 text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.intro2')"></p>
      <p class="mb-3 text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.intro3')"></p>
    </section>
    
    <!-- 应用场景 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.useCasesTitle') }}</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
        <li v-html="$t('tools.rsa-encrypt-decrypt.article.useCase1')"></li>
        <li v-html="$t('tools.rsa-encrypt-decrypt.article.useCase2')"></li>
        <li v-html="$t('tools.rsa-encrypt-decrypt.article.useCase3')"></li>
        <li v-html="$t('tools.rsa-encrypt-decrypt.article.useCase4')"></li>
      </ul>
    </section>
    
    <!-- 常见问题 - 使用结构化标记 -->
    <section class="mb-10">
      <h2 id="faq" class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.faqTitle') }}</h2>
      
      <!-- 结构化数据标记 (Schema.org FAQPage) -->
      <div itemscope itemtype="https://schema.org/FAQPage">
        <!-- FAQ 1 -->
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-6">
          <h3 itemprop="name" class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.faq1q') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.faq1a')"></div>
          </div>
        </div>
        
        <!-- FAQ 2 -->
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-6">
          <h3 itemprop="name" class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.faq2q') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.faq2a')"></div>
          </div>
        </div>
        
        <!-- FAQ 3 -->
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-6">
          <h3 itemprop="name" class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.faq3q') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.faq3a')"></div>
          </div>
        </div>
        
        <!-- FAQ 4 -->
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-6">
          <h3 itemprop="name" class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.faq4q') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.faq4a')"></div>
          </div>
        </div>
        
        <!-- FAQ 5 -->
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-6">
          <h3 itemprop="name" class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.faq5q') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.faq5a')"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 操作指南 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.tutorialTitle') }}</h2>
      <p class="mb-5 text-gray-700 dark:text-gray-300">{{ $t('tools.rsa-encrypt-decrypt.article.tutorialIntro') }}</p>
      
      <!-- 步骤 1 -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.step1Title') }}</h3>
        <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.step1')"></p>
      </div>
      
      <!-- 步骤 2 -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.step2Title') }}</h3>
        <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.step2')"></p>
      </div>
      
      <!-- 步骤 3 -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.step3Title') }}</h3>
        <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.step3')"></p>
      </div>
      
      <!-- 步骤 4 -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.step4Title') }}</h3>
        <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.rsa-encrypt-decrypt.article.step4')"></p>
      </div>
    </section>
    
    <!-- 相关工具 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.relatedToolsTitle') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- 相关工具 1 -->
        <a href="https://www.ufreetools.com/tool/hash-calculator" target="_blank" class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <h3 class="font-medium mb-1 text-primary">{{ $t('tools.rsa-encrypt-decrypt.article.relatedTool1') }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.rsa-encrypt-decrypt.article.relatedTool1Desc') }}</p>
        </a>
        
        <!-- 相关工具 2 -->
        <a href="https://www.ufreetools.com/tool/password-generator" target="_blank" class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <h3 class="font-medium mb-1 text-primary">{{ $t('tools.rsa-encrypt-decrypt.article.relatedTool2') }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.rsa-encrypt-decrypt.article.relatedTool2Desc') }}</p>
        </a>
        
        <!-- 相关工具 3 -->
        <a href="https://www.ufreetools.com/tool/symmetric-crypto" target="_blank" class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <h3 class="font-medium mb-1 text-primary">{{ $t('tools.rsa-encrypt-decrypt.article.relatedTool3') }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.rsa-encrypt-decrypt.article.relatedTool3Desc') }}</p>
        </a>
        
        <!-- 相关工具 4 -->
        <a href="https://www.ufreetools.com/tool/base64-encoder-decoder" target="_blank" class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <h3 class="font-medium mb-1 text-primary">{{ $t('tools.rsa-encrypt-decrypt.article.relatedTool4') }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.rsa-encrypt-decrypt.article.relatedTool4Desc') }}</p>
        </a>
      </div>
    </section>
    
    <!-- 资源链接 -->
    <section>
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.rsa-encrypt-decrypt.article.resourcesTitle') }}</h2>
      <ul class="space-y-2">
        <li>
          <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            {{ $t('tools.rsa-encrypt-decrypt.article.resource1') }}
          </a>
        </li>
        <li>
          <a href="https://tools.ietf.org/html/rfc8017" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            {{ $t('tools.rsa-encrypt-decrypt.article.resource2') }}
          </a>
        </li>
        <li>
          <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r5.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            {{ $t('tools.rsa-encrypt-decrypt.article.resource3') }}
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
// No additional setup logic needed
</script>

<style scoped>
/* 优化移动端显示 */
@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
  
  h2 {
    font-size: 1.25rem;
  }
  
  h3 {
    font-size: 1.1rem;
  }
}

/* 添加更好的内容阅读体验 */
p {
  line-height: 1.6;
}

/* 链接样式优化 */
a:hover {
  text-decoration: underline;
}

/* 列表样式优化 */
ul.list-disc li {
  margin-bottom: 0.5rem;
}

/* 文章内容区域额外样式 */
section {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 2rem;
}

section:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
</style>