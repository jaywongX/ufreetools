<template>
    <div class="mt-8 bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700">
  
      <h2 class="text-2xl sm:text-3xl font-bold mb-6">{{ $t('tools.rsa-signature-verifier.article.title') }}</h2>
  
      <!-- 工具功能介绍与应用场景 -->
      <section class="mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4">{{ $t('tools.rsa-signature-verifier.article.introduction.title') }}</h2>
        <p class="mb-3">{{ $t('tools.rsa-signature-verifier.article.introduction.p1') }}</p>
        <p class="mb-3">{{ $t('tools.rsa-signature-verifier.article.introduction.p2') }}</p>
        
        <h3 class="text-lg font-semibold mt-6 mb-3">{{ $t('tools.rsa-signature-verifier.article.useCases.title') }}</h3>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">{{ $t('tools.rsa-signature-verifier.article.useCases.case1') }}</li>
          <li class="mb-2">{{ $t('tools.rsa-signature-verifier.article.useCases.case2') }}</li>
          <li class="mb-2">{{ $t('tools.rsa-signature-verifier.article.useCases.case3') }}</li>
          <li class="mb-2">{{ $t('tools.rsa-signature-verifier.article.useCases.case4') }}</li>
        </ul>
        
        <p class="mb-3">{{ $t('tools.rsa-signature-verifier.article.introduction.p3') }}</p>
        <p class="mb-3">{{ $t('tools.rsa-signature-verifier.article.introduction.p4') }}</p>
      </section>
  
      <!-- 操作指南或教程 -->
      <section class="mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4">{{ $t('tools.rsa-signature-verifier.article.tutorial.title') }}</h2>
        
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <h3 class="text-lg font-semibold mb-3">{{ $t('tools.rsa-signature-verifier.article.tutorial.step1.title') }}</h3>
          <p class="mb-2">{{ $t('tools.rsa-signature-verifier.article.tutorial.step1.description') }}</p>
          <ul class="list-disc pl-6 mb-3">
            <li>{{ $t('tools.rsa-signature-verifier.article.tutorial.step1.option1') }}</li>
            <li>{{ $t('tools.rsa-signature-verifier.article.tutorial.step1.option2') }}</li>
          </ul>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <h3 class="text-lg font-semibold mb-3">{{ $t('tools.rsa-signature-verifier.article.tutorial.step2.title') }}</h3>
          <p class="mb-2">{{ $t('tools.rsa-signature-verifier.article.tutorial.step2.description') }}</p>
          <ul class="list-disc pl-6 mb-3">
            <li>{{ $t('tools.rsa-signature-verifier.article.tutorial.step2.option1') }}</li>
            <li>{{ $t('tools.rsa-signature-verifier.article.tutorial.step2.option2') }}</li>
            <li>{{ $t('tools.rsa-signature-verifier.article.tutorial.step2.option3') }}</li>
          </ul>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <h3 class="text-lg font-semibold mb-3">{{ $t('tools.rsa-signature-verifier.article.tutorial.step3.title') }}</h3>
          <p class="mb-2">{{ $t('tools.rsa-signature-verifier.article.tutorial.step3.description') }}</p>
          <ul class="list-disc pl-6 mb-3">
            <li>{{ $t('tools.rsa-signature-verifier.article.tutorial.step3.option1') }}</li>
            <li>{{ $t('tools.rsa-signature-verifier.article.tutorial.step3.option2') }}</li>
          </ul>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <h3 class="text-lg font-semibold mb-3">{{ $t('tools.rsa-signature-verifier.article.tutorial.step4.title') }}</h3>
          <p class="mb-2">{{ $t('tools.rsa-signature-verifier.article.tutorial.step4.description') }}</p>
        </div>
        
        <p class="italic text-sm">{{ $t('tools.rsa-signature-verifier.article.tutorial.note') }}</p>
      </section>
  
      <!-- 用户常见问题解答（FAQ） -->
      <section class="mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4">{{ $t('tools.rsa-signature-verifier.article.faq.title') }}</h2>
        
        <div itemscope itemtype="https://schema.org/FAQPage">
          <div class="mb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 itemprop="name" class="text-lg font-semibold mb-2">{{ $t('tools.rsa-signature-verifier.article.faq.q1') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" class="pl-4 border-l-4 border-gray-300">
                <p>{{ $t('tools.rsa-signature-verifier.article.faq.a1') }}</p>
              </div>
            </div>
          </div>
          
          <div class="mb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 itemprop="name" class="text-lg font-semibold mb-2">{{ $t('tools.rsa-signature-verifier.article.faq.q2') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" class="pl-4 border-l-4 border-gray-300">
                <p>{{ $t('tools.rsa-signature-verifier.article.faq.a2') }}</p>
              </div>
            </div>
          </div>
          
          <div class="mb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 itemprop="name" class="text-lg font-semibold mb-2">{{ $t('tools.rsa-signature-verifier.article.faq.q3') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" class="pl-4 border-l-4 border-gray-300">
                <p>{{ $t('tools.rsa-signature-verifier.article.faq.a3') }}</p>
              </div>
            </div>
          </div>
          
          <div class="mb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 itemprop="name" class="text-lg font-semibold mb-2">{{ $t('tools.rsa-signature-verifier.article.faq.q4') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" class="pl-4 border-l-4 border-gray-300">
                <p>{{ $t('tools.rsa-signature-verifier.article.faq.a4') }}</p>
              </div>
            </div>
          </div>
          
          <div class="mb-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 itemprop="name" class="text-lg font-semibold mb-2">{{ $t('tools.rsa-signature-verifier.article.faq.q5') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" class="pl-4 border-l-4 border-gray-300">
                <p>{{ $t('tools.rsa-signature-verifier.article.faq.a5') }}</p>
                <p class="mt-2">{{ $t('tools.rsa-signature-verifier.article.faq.a5_extra') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 相关资源 -->
      <section class="mb-8">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4">{{ $t('tools.rsa-signature-verifier.article.resources.title') }}</h2>
        <p class="mb-3">{{ $t('tools.rsa-signature-verifier.article.resources.description') }}</p>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">
            <a href="https://www.ufreetools.com/tool/hash-calculator" target="_blank" class="text-blue-600 hover:underline">
              {{ $t('tools.rsa-signature-verifier.article.resources.tool1') }}
            </a>
          </li>
          <li class="mb-2">
            <a href="https://www.ufreetools.com/tool/base64-encoder-decoder" target="_blank" class="text-blue-600 hover:underline">
              {{ $t('tools.rsa-signature-verifier.article.resources.tool2') }}
            </a>
          </li>
          <li class="mb-2">
            <a href="https://www.ufreetools.com/tool/jwt-debugger" target="_blank" class="text-blue-600 hover:underline">
              {{ $t('tools.rsa-signature-verifier.article.resources.tool3') }}
            </a>
          </li>
        </ul>
        
        <h3 class="text-lg font-semibold mt-6 mb-3">{{ $t('tools.rsa-signature-verifier.article.resources.external.title') }}</h3>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">
            <a href="https://www.rfc-editor.org/rfc/rfc8017" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
              {{ $t('tools.rsa-signature-verifier.article.resources.external.resource1') }}
            </a>
          </li>
          <li class="mb-2">
            <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
              {{ $t('tools.rsa-signature-verifier.article.resources.external.resource2') }}
            </a>
          </li>
        </ul>
      </section>
  
      <!-- 结论 -->
      <section class="mb-4">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4">{{ $t('tools.rsa-signature-verifier.article.conclusion.title') }}</h2>
        <p class="mb-3">{{ $t('tools.rsa-signature-verifier.article.conclusion.p1') }}</p>
        <p class="mb-3">{{ $t('tools.rsa-signature-verifier.article.conclusion.p2') }}</p>
      </section>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  </script>