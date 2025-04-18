<template>
  <div class="mt-8 bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700">
    <!-- 文章标题 -->
    <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
      {{ $t('tools.image-compressor.article.title') }}
    </h1>
    
    <!-- 功能介绍和应用场景 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.image-compressor.article.introduction.title') }}
      </h2>
      <div class="prose dark:prose-invert max-w-none">
        <p v-html="$t('tools.image-compressor.article.introduction.p1')"></p>
        <p v-html="$t('tools.image-compressor.article.introduction.p2')"></p>
        <p v-html="$t('tools.image-compressor.article.introduction.p3')"></p>
      </div>
    </section>
    
    <!-- 应用场景 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.image-compressor.article.applications.title') }}
      </h2>
      <div class="prose dark:prose-invert max-w-none">
        <h3 class="text-lg font-medium mb-2">{{ $t('tools.image-compressor.article.applications.scenario1.title') }}</h3>
        <p v-html="$t('tools.image-compressor.article.applications.scenario1.content')"></p>
        
        <h3 class="text-lg font-medium mb-2 mt-4">{{ $t('tools.image-compressor.article.applications.scenario2.title') }}</h3>
        <p v-html="$t('tools.image-compressor.article.applications.scenario2.content')"></p>
        
        <h3 class="text-lg font-medium mb-2 mt-4">{{ $t('tools.image-compressor.article.applications.scenario3.title') }}</h3>
        <p v-html="$t('tools.image-compressor.article.applications.scenario3.content')"></p>
        
        <h3 class="text-lg font-medium mb-2 mt-4">{{ $t('tools.image-compressor.article.applications.scenario4.title') }}</h3>
        <p v-html="$t('tools.image-compressor.article.applications.scenario4.content')"></p>
        
        <h3 class="text-lg font-medium mb-2 mt-4">{{ $t('tools.image-compressor.article.applications.scenario5.title') }}</h3>
        <p v-html="$t('tools.image-compressor.article.applications.scenario5.content')"></p>
      </div>
    </section>
    
    <!-- 操作指南 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.image-compressor.article.guide.title') }}
      </h2>
      <div class="prose dark:prose-invert max-w-none">
        <h3 class="text-lg font-medium mb-2">{{ $t('tools.image-compressor.article.guide.step1.title') }}</h3>
        <p v-html="$t('tools.image-compressor.article.guide.step1.content')"></p>
        
        <h3 class="text-lg font-medium mb-2 mt-4">{{ $t('tools.image-compressor.article.guide.step2.title') }}</h3>
        <p v-html="$t('tools.image-compressor.article.guide.step2.content')"></p>
        
        <h3 class="text-lg font-medium mb-2 mt-4">{{ $t('tools.image-compressor.article.guide.step3.title') }}</h3>
        <p v-html="$t('tools.image-compressor.article.guide.step3.content')"></p>
        
        <h3 class="text-lg font-medium mb-2 mt-4">{{ $t('tools.image-compressor.article.guide.step4.title') }}</h3>
        <p v-html="$t('tools.image-compressor.article.guide.step4.content')"></p>
        
        <h3 class="text-lg font-medium mb-2 mt-4">{{ $t('tools.image-compressor.article.guide.step5.title') }}</h3>
        <p v-html="$t('tools.image-compressor.article.guide.step5.content')"></p>
      </div>
    </section>
    
    <!-- 常见问题解答 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.image-compressor.article.faq.title') }}
      </h2>
      
      <div class="space-y-6" itemscope itemtype="https://schema.org/FAQPage">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h3 itemprop="name" class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            {{ $t('tools.image-compressor.article.faq.q1') }}
          </h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-600 dark:text-gray-300" v-html="$t('tools.image-compressor.article.faq.a1')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h3 itemprop="name" class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            {{ $t('tools.image-compressor.article.faq.q2') }}
          </h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-600 dark:text-gray-300" v-html="$t('tools.image-compressor.article.faq.a2')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h3 itemprop="name" class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            {{ $t('tools.image-compressor.article.faq.q3') }}
          </h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-600 dark:text-gray-300" v-html="$t('tools.image-compressor.article.faq.a3')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h3 itemprop="name" class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            {{ $t('tools.image-compressor.article.faq.q4') }}
          </h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-600 dark:text-gray-300" v-html="$t('tools.image-compressor.article.faq.a4')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <h3 itemprop="name" class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            {{ $t('tools.image-compressor.article.faq.q5') }}
          </h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-600 dark:text-gray-300" v-html="$t('tools.image-compressor.article.faq.a5')"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 相关工具 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.image-compressor.article.relatedTools.title') }}
      </h2>
      <div class="prose dark:prose-invert max-w-none">
        <ul>
          <li v-html="$t('tools.image-compressor.article.relatedTools.tool1')"></li>
          <li v-html="$t('tools.image-compressor.article.relatedTools.tool2')"></li>
          <li v-html="$t('tools.image-compressor.article.relatedTools.tool3')"></li>
        </ul>
      </div>
    </section>
    
    <!-- 外部资源 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.image-compressor.article.resources.title') }}
      </h2>
      <div class="prose dark:prose-invert max-w-none">
        <ul>
          <li v-html="$t('tools.image-compressor.article.resources.resource1')"></li>
          <li v-html="$t('tools.image-compressor.article.resources.resource2')"></li>
          <li v-html="$t('tools.image-compressor.article.resources.resource3')"></li>
        </ul>
      </div>
    </section>
    
    <!-- 总结 -->
    <section>
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {{ $t('tools.image-compressor.article.conclusion.title') }}
      </h2>
      <div class="prose dark:prose-invert max-w-none">
        <p v-html="$t('tools.image-compressor.article.conclusion.content')"></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ImageCompressorArticle'
}
</script>
