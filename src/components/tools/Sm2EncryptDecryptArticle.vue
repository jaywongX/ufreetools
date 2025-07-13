<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <article class="prose dark:prose-invert max-w-none">
      <h2 class="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        {{ t('tools.sm2-encrypt-decrypt.article.title') }}
      </h2>

      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          {{ t('tools.sm2-encrypt-decrypt.article.introduction.title') }}
        </h2>
        <p class="mb-4 text-gray-700 dark:text-gray-300">
          {{ t('tools.sm2-encrypt-decrypt.article.introduction.p1') }}
        </p>
        <p class="mb-4 text-gray-700 dark:text-gray-300">
          {{ t('tools.sm2-encrypt-decrypt.article.introduction.p2') }}
        </p>
        <p class="mb-4 text-gray-700 dark:text-gray-300">
          {{ t('tools.sm2-encrypt-decrypt.article.introduction.p3') }}
        </p>

        <h3 class="text-lg font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">
          {{ t('tools.sm2-encrypt-decrypt.article.useCases.title') }}
        </h3>
        <ul class="list-disc list-inside mb-4 ml-4 text-gray-700 dark:text-gray-300 space-y-2">
          <li>{{ t('tools.sm2-encrypt-decrypt.article.useCases.item1') }}</li>
          <li>{{ t('tools.sm2-encrypt-decrypt.article.useCases.item2') }}</li>
          <li>{{ t('tools.sm2-encrypt-decrypt.article.useCases.item3') }}</li>
          <li>{{ t('tools.sm2-encrypt-decrypt.article.useCases.item4') }}</li>
          <li>{{ t('tools.sm2-encrypt-decrypt.article.useCases.item5') }}</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          {{ t('tools.sm2-encrypt-decrypt.article.guide.title') }}
        </h2>
        
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            {{ t('tools.sm2-encrypt-decrypt.article.guide.step1.title') }}
          </h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">{{ t('tools.sm2-encrypt-decrypt.article.guide.step1.description') }}</p>
          <ul class="list-disc list-inside mb-4 ml-4 text-gray-700 dark:text-gray-300">
            <li>{{ t('tools.sm2-encrypt-decrypt.article.guide.step1.option1') }}</li>
            <li>{{ t('tools.sm2-encrypt-decrypt.article.guide.step1.option2') }}</li>
            <li>{{ t('tools.sm2-encrypt-decrypt.article.guide.step1.option3') }}</li>
          </ul>
        </div>

        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            {{ t('tools.sm2-encrypt-decrypt.article.guide.step2.title') }}
          </h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">{{ t('tools.sm2-encrypt-decrypt.article.guide.step2.description') }}</p>
          <ul class="list-disc list-inside mb-4 ml-4 text-gray-700 dark:text-gray-300">
            <li>{{ t('tools.sm2-encrypt-decrypt.article.guide.step2.option1') }}</li>
            <li>{{ t('tools.sm2-encrypt-decrypt.article.guide.step2.option2') }}</li>
            <li>{{ t('tools.sm2-encrypt-decrypt.article.guide.step2.option3') }}</li>
            <li>{{ t('tools.sm2-encrypt-decrypt.article.guide.step2.option4') }}</li>
          </ul>
        </div>

        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            {{ t('tools.sm2-encrypt-decrypt.article.guide.step3.title') }}
          </h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">{{ t('tools.sm2-encrypt-decrypt.article.guide.step3.description') }}</p>
          <ul class="list-disc list-inside mb-4 ml-4 text-gray-700 dark:text-gray-300">
            <li>{{ t('tools.sm2-encrypt-decrypt.article.guide.step3.option1') }}</li>
            <li>{{ t('tools.sm2-encrypt-decrypt.article.guide.step3.option2') }}</li>
          </ul>
        </div>

        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            {{ t('tools.sm2-encrypt-decrypt.article.guide.step4.title') }}
          </h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">{{ t('tools.sm2-encrypt-decrypt.article.guide.step4.description') }}</p>
        </div>
      </section>

      <section class="mb-8" itemscope itemtype="https://schema.org/FAQPage">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          {{ t('tools.sm2-encrypt-decrypt.article.faq.title') }}
        </h2>

        <div class="space-y-6">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200" itemprop="name">
              {{ t('tools.sm2-encrypt-decrypt.article.faq.q1') }}
            </h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div class="text-gray-700 dark:text-gray-300" itemprop="text">
                <p>{{ t('tools.sm2-encrypt-decrypt.article.faq.a1') }}</p>
              </div>
            </div>
          </div>

          <div class="border-b border-gray-200 dark:border-gray-700 pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200" itemprop="name">
              {{ t('tools.sm2-encrypt-decrypt.article.faq.q2') }}
            </h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div class="text-gray-700 dark:text-gray-300" itemprop="text">
                <p>{{ t('tools.sm2-encrypt-decrypt.article.faq.a2') }}</p>
              </div>
            </div>
          </div>

          <div class="border-b border-gray-200 dark:border-gray-700 pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200" itemprop="name">
              {{ t('tools.sm2-encrypt-decrypt.article.faq.q3') }}
            </h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div class="text-gray-700 dark:text-gray-300" itemprop="text">
                <p>{{ t('tools.sm2-encrypt-decrypt.article.faq.a3') }}</p>
              </div>
            </div>
          </div>

          <div class="border-b border-gray-200 dark:border-gray-700 pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200" itemprop="name">
              {{ t('tools.sm2-encrypt-decrypt.article.faq.q4') }}
            </h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div class="text-gray-700 dark:text-gray-300" itemprop="text">
                <p>{{ t('tools.sm2-encrypt-decrypt.article.faq.a4') }}</p>
              </div>
            </div>
          </div>

          <div class="border-b border-gray-200 dark:border-gray-700 pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200" itemprop="name">
              {{ t('tools.sm2-encrypt-decrypt.article.faq.q5') }}
            </h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div class="text-gray-700 dark:text-gray-300" itemprop="text">
                <p>{{ t('tools.sm2-encrypt-decrypt.article.faq.a5') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          {{ t('tools.sm2-encrypt-decrypt.article.comparison.title') }}
        </h2>
        <p class="mb-4 text-gray-700 dark:text-gray-300">
          {{ t('tools.sm2-encrypt-decrypt.article.comparison.p1') }}
        </p>
        <p class="mb-4 text-gray-700 dark:text-gray-300">
          {{ t('tools.sm2-encrypt-decrypt.article.comparison.p2') }}
        </p>
        <p class="mb-4 text-gray-700 dark:text-gray-300">
          {{ t('tools.sm2-encrypt-decrypt.article.comparison.p3') }}
          <a href="https://www.ufreetools.com/tool/rsa-encrypt-decrypt" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            {{ t('tools.sm2-encrypt-decrypt.article.comparison.linkText') }}
          </a>
        </p>
      </section>

      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          {{ t('tools.sm2-encrypt-decrypt.article.references.title') }}
        </h2>
        <ul class="list-disc list-inside mb-4 ml-4 text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            <a href="https://en.wikipedia.org/wiki/SM2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              {{ t('tools.sm2-encrypt-decrypt.article.references.link1') }}
            </a>
          </li>
          <li>
            <a href="https://www.oscca.gov.cn/sca/xxgk/2010-12/17/1002386/files/b791a9f908bb4803875ab6aeeb7b4e03.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              {{ t('tools.sm2-encrypt-decrypt.article.references.link2') }}
            </a>
          </li>
          <li>
            <a href="https://www.oscca.gov.cn/sca/xxgk/2010-12/17/1002386/files/b791a9f908bb4803875ab6aeeb7b4e03.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              {{ t('tools.sm2-encrypt-decrypt.article.references.link3') }}
            </a>
          </li>
        </ul>
      </section>

      <div class="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
        <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
          {{ t('tools.sm2-encrypt-decrypt.article.relatedTools.title') }}
        </h3>
        <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            <a href="https://www.ufreetools.com/tool/rsa-encrypt-decrypt" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              {{ t('tools.sm2-encrypt-decrypt.article.relatedTools.tool1') }}
            </a>
          </li>
          <li>
            <a href="https://www.ufreetools.com/tool/hash-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              {{ t('tools.sm2-encrypt-decrypt.article.relatedTools.tool2') }}
            </a>
          </li>
          <li>
            <a href="https://www.ufreetools.com/tool/symmetric-crypto" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              {{ t('tools.sm2-encrypt-decrypt.article.relatedTools.tool3') }}
            </a>
          </li>
          <li>
            <a href="https://www.ufreetools.com/tool/password-generator" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              {{ t('tools.sm2-encrypt-decrypt.article.relatedTools.tool4') }}
            </a>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script> 