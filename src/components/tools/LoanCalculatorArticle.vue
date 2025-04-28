<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <article class="prose dark:prose-invert max-w-none">
      <h1 class="text-2xl font-bold mb-4">{{ $t('tools.loan-calculator.article.title') }}</h1>
      
      <!-- 介绍部分 -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.loan-calculator.article.intro.title') }}</h2>
        <div v-html="$t('tools.loan-calculator.article.intro.p1')"></div>
        <div class="my-2" v-html="$t('tools.loan-calculator.article.intro.p2')"></div>
        <div class="my-2" v-html="$t('tools.loan-calculator.article.intro.p3')"></div>
      </div>
      
      <!-- 应用场景 -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.loan-calculator.article.useCases.title') }}</h2>
        <div class="mb-3" v-html="$t('tools.loan-calculator.article.useCases.case1')"></div>
        <div class="mb-3" v-html="$t('tools.loan-calculator.article.useCases.case2')"></div>
        <div class="mb-3" v-html="$t('tools.loan-calculator.article.useCases.case3')"></div>
        <div class="mb-3" v-html="$t('tools.loan-calculator.article.useCases.case4')"></div>
        <div class="mb-3" v-html="$t('tools.loan-calculator.article.useCases.case5')"></div>
      </div>
      
      <!-- 贷款计算方法 -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.loan-calculator.article.loanMethods.title') }}</h2>
        <div class="mb-4">
          <h3 class="text-xl font-medium mb-2">{{ $t('tools.loan-calculator.article.loanMethods.method1.title') }}</h3>
          <div v-html="$t('tools.loan-calculator.article.loanMethods.method1.description')"></div>
        </div>
        
        <div class="mb-4">
          <h3 class="text-xl font-medium mb-2">{{ $t('tools.loan-calculator.article.loanMethods.method2.title') }}</h3>
          <div v-html="$t('tools.loan-calculator.article.loanMethods.method2.description')"></div>
        </div>
      </div>
      
      <!-- 使用教程 -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.loan-calculator.article.tutorial.title') }}</h2>
        <p class="mb-4">{{ $t('tools.loan-calculator.article.tutorial.intro') }}</p>
        
        <div class="mb-4">
          <h3 class="text-xl font-medium mb-2">{{ $t('tools.loan-calculator.article.tutorial.step1.title') }}</h3>
          <div v-html="$t('tools.loan-calculator.article.tutorial.step1.description')"></div>
        </div>
        
        <div class="mb-4">
          <h3 class="text-xl font-medium mb-2">{{ $t('tools.loan-calculator.article.tutorial.step2.title') }}</h3>
          <div v-html="$t('tools.loan-calculator.article.tutorial.step2.description')"></div>
        </div>
        
        <div class="mb-4">
          <h3 class="text-xl font-medium mb-2">{{ $t('tools.loan-calculator.article.tutorial.step3.title') }}</h3>
          <div v-html="$t('tools.loan-calculator.article.tutorial.step3.description')"></div>
        </div>
        
        <div class="mb-4">
          <h3 class="text-xl font-medium mb-2">{{ $t('tools.loan-calculator.article.tutorial.step4.title') }}</h3>
          <div v-html="$t('tools.loan-calculator.article.tutorial.step4.description')"></div>
        </div>
      </div>
      
      <!-- FAQ 部分 - 使用 Schema.org 结构化数据 -->
      <div class="mb-8" itemscope itemtype="https://schema.org/FAQPage">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.loan-calculator.article.faq.title') }}</h2>
        
        <div class="mb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 class="text-xl font-medium mb-2" itemprop="name">{{ $t('tools.loan-calculator.article.faq.q1') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.loan-calculator.article.faq.a1')"></div>
          </div>
        </div>
        
        <div class="mb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 class="text-xl font-medium mb-2" itemprop="name">{{ $t('tools.loan-calculator.article.faq.q2') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.loan-calculator.article.faq.a2')"></div>
          </div>
        </div>
        
        <div class="mb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 class="text-xl font-medium mb-2" itemprop="name">{{ $t('tools.loan-calculator.article.faq.q3') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.loan-calculator.article.faq.a3')"></div>
          </div>
        </div>
        
        <div class="mb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 class="text-xl font-medium mb-2" itemprop="name">{{ $t('tools.loan-calculator.article.faq.q4') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.loan-calculator.article.faq.a4')"></div>
          </div>
        </div>
        
        <div class="mb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 class="text-xl font-medium mb-2" itemprop="name">{{ $t('tools.loan-calculator.article.faq.q5') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.loan-calculator.article.faq.a5')"></div>
          </div>
        </div>
      </div>
      
      <!-- 相关工具 -->
      <!-- <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.loan-calculator.article.relatedTools.title') }}</h2>
        <p>{{ $t('tools.loan-calculator.article.relatedTools.description') }}</p>
        <ul class="list-disc pl-6 mt-3">
          <li class="mb-2">
            <a :href="$t('tools.loan-calculator.article.relatedTools.tool1.url')" 
               class="text-primary hover:underline" 
               target="_blank">
              {{ $t('tools.loan-calculator.article.relatedTools.tool1.name') }}
            </a> - 
            {{ $t('tools.loan-calculator.article.relatedTools.tool1.description') }}
          </li>
          <li class="mb-2">
            <a :href="$t('tools.loan-calculator.article.relatedTools.tool2.url')" 
               class="text-primary hover:underline" 
               target="_blank">
              {{ $t('tools.loan-calculator.article.relatedTools.tool2.name') }}
            </a> - 
            {{ $t('tools.loan-calculator.article.relatedTools.tool2.description') }}
          </li>
          <li class="mb-2">
            <a :href="$t('tools.loan-calculator.article.relatedTools.tool3.url')" 
               class="text-primary hover:underline" 
               target="_blank">
              {{ $t('tools.loan-calculator.article.relatedTools.tool3.name') }}
            </a> - 
            {{ $t('tools.loan-calculator.article.relatedTools.tool3.description') }}
          </li>
          <li class="mb-2">
            <a :href="$t('tools.loan-calculator.article.relatedTools.tool4.url')" 
               class="text-primary hover:underline" 
               target="_blank">
              {{ $t('tools.loan-calculator.article.relatedTools.tool4.name') }}
            </a> - 
            {{ $t('tools.loan-calculator.article.relatedTools.tool4.description') }}
          </li>
        </ul>
      </div> -->
      
      <!-- 权威资源 -->
      <!-- <div class="mb-4">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.loan-calculator.article.resources.title') }}</h2>
        <ul class="list-disc pl-6">
          <li class="mb-2">
            <a :href="$t('tools.loan-calculator.article.resources.resource1.url')" 
               class="text-primary hover:underline" 
               target="_blank" 
               rel="noopener noreferrer">
              {{ $t('tools.loan-calculator.article.resources.resource1.name') }}
            </a> - 
            {{ $t('tools.loan-calculator.article.resources.resource1.description') }}
          </li>
          <li class="mb-2">
            <a :href="$t('tools.loan-calculator.article.resources.resource2.url')" 
               class="text-primary hover:underline" 
               target="_blank" 
               rel="noopener noreferrer">
              {{ $t('tools.loan-calculator.article.resources.resource2.name') }}
            </a> - 
            {{ $t('tools.loan-calculator.article.resources.resource2.description') }}
          </li>
          <li class="mb-2">
            <a :href="$t('tools.loan-calculator.article.resources.resource3.url')" 
               class="text-primary hover:underline" 
               target="_blank" 
               rel="noopener noreferrer">
              {{ $t('tools.loan-calculator.article.resources.resource3.name') }}
            </a> - 
            {{ $t('tools.loan-calculator.article.resources.resource3.description') }}
          </li>
        </ul>
      </div> -->
    </article>
  </div>
</template>

<script setup>
// 组件逻辑
</script> 