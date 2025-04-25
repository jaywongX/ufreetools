<template>
  <div class="article-container mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
    <h1 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{{ $t('tools.image-cropper.article.title') }}</h1>
    
    <!-- Introduction Section -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{{ $t('tools.image-cropper.article.introduction.title') }}</h2>
      <p class="mb-3 text-gray-700 dark:text-gray-300" v-html="$t('tools.image-cropper.article.introduction.p1')"></p>
      <p class="mb-3 text-gray-700 dark:text-gray-300" v-html="$t('tools.image-cropper.article.introduction.p2')"></p>
      
      <h3 class="text-lg font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.image-cropper.article.applications.title') }}</h3>
      <ul class="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300">
        <li class="mb-2" v-html="$t('tools.image-cropper.article.applications.item1')"></li>
        <li class="mb-2" v-html="$t('tools.image-cropper.article.applications.item2')"></li>
        <li class="mb-2" v-html="$t('tools.image-cropper.article.applications.item3')"></li>
        <li class="mb-2" v-html="$t('tools.image-cropper.article.applications.item4')"></li>
        <li class="mb-2" v-html="$t('tools.image-cropper.article.applications.item5')"></li>
      </ul>
      
      <p class="mb-3 text-gray-700 dark:text-gray-300" v-html="$t('tools.image-cropper.article.introduction.p3')"></p>
    </section>
    
    <!-- Tutorial Section -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{{ $t('tools.image-cropper.article.tutorial.title') }}</h2>
      <div class="space-y-4">
        <div class="p-3 border border-gray-200 dark:border-gray-700 rounded-md">
          <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.image-cropper.article.tutorial.step1.title') }}</h3>
          <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.image-cropper.article.tutorial.step1.content')"></p>
        </div>
        
        <div class="p-3 border border-gray-200 dark:border-gray-700 rounded-md">
          <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.image-cropper.article.tutorial.step2.title') }}</h3>
          <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.image-cropper.article.tutorial.step2.content')"></p>
        </div>
        
        <div class="p-3 border border-gray-200 dark:border-gray-700 rounded-md">
          <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.image-cropper.article.tutorial.step3.title') }}</h3>
          <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.image-cropper.article.tutorial.step3.content')"></p>
        </div>
        
        <div class="p-3 border border-gray-200 dark:border-gray-700 rounded-md">
          <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.image-cropper.article.tutorial.step4.title') }}</h3>
          <p class="text-gray-700 dark:text-gray-300" v-html="$t('tools.image-cropper.article.tutorial.step4.content')"></p>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section with Schema.org structured data -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.image-cropper.article.faq.title') }}</h2>
      
      <div class="space-y-4" itemscope itemtype="https://schema.org/FAQPage">
        <div v-for="(faq, index) in faqs" :key="index" class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200" itemprop="name">{{ faq.question }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div class="text-gray-700 dark:text-gray-300" itemprop="text" v-html="faq.answer"></div>
          </div>
        </div>
      </div>
    </section>
      
    <!-- 相关工具和参考资源 -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{{ $t('tools.image-cropper.article.relatedTools.title') }}</h2>
      <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
        <li>
          <a :href="$t('tools.image-cropper.article.relatedTools.tool1.url')" target="_blank" class="inline-flex items-center text-primary dark:text-primary-light hover:underline">
            {{ $t('tools.image-cropper.article.relatedTools.tool1.name') }} : {{ $t('tools.image-cropper.article.relatedTools.tool1.description') }}
            <svg class="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </li>
        <li>
          <a :href="$t('tools.image-cropper.article.relatedTools.tool2.url')" target="_blank" class="inline-flex items-center text-primary dark:text-primary-light hover:underline">
            {{ $t('tools.image-cropper.article.relatedTools.tool2.name') }} : {{ $t('tools.image-cropper.article.relatedTools.tool2.description') }}
            <svg class="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </li>
        <li>
          <a :href="$t('tools.image-cropper.article.relatedTools.tool3.url')" target="_blank" class="inline-flex items-center text-primary dark:text-primary-light hover:underline">
            {{ $t('tools.image-cropper.article.relatedTools.tool3.name') }} : {{ $t('tools.image-cropper.article.relatedTools.tool3.description') }}
            <svg class="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </li>
      </ul>
    </section>
    
    <!-- References Section -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{{ $t('tools.image-cropper.article.references.title') }}</h2>
      <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
        <li>
          <a :href="$t('tools.image-cropper.article.references.ref1.url')" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary dark:text-primary-light hover:underline">
            {{ $t('tools.image-cropper.article.references.ref1.name') }}
            <svg class="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </li>
        <li>
          <a :href="$t('tools.image-cropper.article.references.ref2.url')" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary dark:text-primary-light hover:underline">
            {{ $t('tools.image-cropper.article.references.ref2.name') }}
            <svg class="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </li>
        <li>
          <a :href="$t('tools.image-cropper.article.references.ref3.url')" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary dark:text-primary-light hover:underline">
            {{ $t('tools.image-cropper.article.references.ref3.name') }}
            <svg class="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useInternationalizedRoute } from '../../composables/useInternationalizedRoute'

const { t } = useI18n()
const { localizedRoute } = useInternationalizedRoute()

// Related tools data
const relatedTools = [
  {
    id: 'image-resizer',
    name: t('tools.image-cropper.article.relatedTools.tool1.name'),
    description: t('tools.image-cropper.article.relatedTools.tool1.description'),
    url: t('tools.image-cropper.article.relatedTools.tool1.url')
  },
  {
    id: 'image-compressor',
    name: t('tools.image-cropper.article.relatedTools.tool2.name'),
    description: t('tools.image-cropper.article.relatedTools.tool2.description'),
    url: t('tools.image-cropper.article.relatedTools.tool2.url')
  },
  {
    id: 'image-converter',
    name: t('tools.image-cropper.article.relatedTools.tool3.name'),
    description: t('tools.image-cropper.article.relatedTools.tool3.description'),
    url: t('tools.image-cropper.article.relatedTools.tool3.url')
  }
]

// FAQ data for the component
const faqs = computed(() => [
  {
    question: t('tools.image-cropper.article.faq.q1'),
    answer: t('tools.image-cropper.article.faq.a1')
  },
  {
    question: t('tools.image-cropper.article.faq.q2'),
    answer: t('tools.image-cropper.article.faq.a2')
  },
  {
    question: t('tools.image-cropper.article.faq.q3'),
    answer: t('tools.image-cropper.article.faq.a3')
  },
  {
    question: t('tools.image-cropper.article.faq.q4'),
    answer: t('tools.image-cropper.article.faq.a4')
  },
  {
    question: t('tools.image-cropper.article.faq.q5'),
    answer: t('tools.image-cropper.article.faq.a5')
  }
])
</script>
