<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <!-- <div class="prose max-w-none dark:prose-invert"> -->
      <h1 class="text-2xl font-bold mb-4">{{ $t('tools.x509-certificate-decoder.article.title') }}</h1>
      
      <!-- Tool Introduction and Use Cases -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-3">{{ $t('tools.x509-certificate-decoder.article.introduction.title') }}</h2>
        <p class="mb-4" v-html="$t('tools.x509-certificate-decoder.article.introduction.p1')"></p>
        <p class="mb-4" v-html="$t('tools.x509-certificate-decoder.article.introduction.p2')"></p>
        
        <!-- Use Cases -->
        <h3 class="text-lg font-semibold mb-3">{{ $t('tools.x509-certificate-decoder.article.useCases.title') }}</h3>
        <ul class="list-disc pl-5 mb-4">
          <li class="mb-2" v-html="$t('tools.x509-certificate-decoder.article.useCases.case1')"></li>
          <li class="mb-2" v-html="$t('tools.x509-certificate-decoder.article.useCases.case2')"></li>
          <li class="mb-2" v-html="$t('tools.x509-certificate-decoder.article.useCases.case3')"></li>
          <li class="mb-2" v-html="$t('tools.x509-certificate-decoder.article.useCases.case4')"></li>
          <li class="mb-2" v-html="$t('tools.x509-certificate-decoder.article.useCases.case5')"></li>
        </ul>
      </section>
      
      <!-- FAQ Section with Schema.org Markup -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-3">{{ $t('tools.x509-certificate-decoder.article.faq.title') }}</h2>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 itemprop="name" class="font-medium mb-2">{{ $t('tools.x509-certificate-decoder.article.faq.q1') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.x509-certificate-decoder.article.faq.a1')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 itemprop="name" class="font-medium mb-2">{{ $t('tools.x509-certificate-decoder.article.faq.q2') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.x509-certificate-decoder.article.faq.a2')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 itemprop="name" class="font-medium mb-2">{{ $t('tools.x509-certificate-decoder.article.faq.q3') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.x509-certificate-decoder.article.faq.a3')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 itemprop="name" class="font-medium mb-2">{{ $t('tools.x509-certificate-decoder.article.faq.q4') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.x509-certificate-decoder.article.faq.a4')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 itemprop="name" class="font-medium mb-2">{{ $t('tools.x509-certificate-decoder.article.faq.q5') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.x509-certificate-decoder.article.faq.a5')"></div>
          </div>
        </div>
      </section>
      
      <!-- Tutorial Section -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-3">{{ $t('tools.x509-certificate-decoder.article.tutorial.title') }}</h2>
        
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.x509-certificate-decoder.article.tutorial.step1.title') }}</h3>
          <p v-html="$t('tools.x509-certificate-decoder.article.tutorial.step1.content')"></p>
          <!-- <img src="/img/tools/x509-decoder-upload.png" alt="Upload certificate" class="my-3 rounded-lg shadow-md"> -->
        </div>
        
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.x509-certificate-decoder.article.tutorial.step2.title') }}</h3>
          <p v-html="$t('tools.x509-certificate-decoder.article.tutorial.step2.content')"></p>
          <!-- <img src="/img/tools/x509-decoder-decode.png" alt="Decode certificate" class="my-3 rounded-lg shadow-md"> -->
        </div>
        
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.x509-certificate-decoder.article.tutorial.step3.title') }}</h3>
          <p v-html="$t('tools.x509-certificate-decoder.article.tutorial.step3.content')"></p>
          <!-- <img src="/img/tools/x509-decoder-analyze.png" alt="Analyze certificate" class="my-3 rounded-lg shadow-md"> -->
        </div>
        
        <div class="mb-6">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.x509-certificate-decoder.article.tutorial.step4.title') }}</h3>
          <p v-html="$t('tools.x509-certificate-decoder.article.tutorial.step4.content')"></p>
          <!-- <img src="/img/tools/x509-decoder-export.png" alt="Export reports" class="my-3 rounded-lg shadow-md"> -->
        </div>
      </section>
      
      <!-- Additional Resources -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-3">{{ $t('tools.x509-certificate-decoder.article.resources.title') }}</h2>
        <p class="mb-3" v-html="$t('tools.x509-certificate-decoder.article.resources.intro')"></p>
        
        <h3 class="text-lg font-medium mb-2">{{ $t('tools.x509-certificate-decoder.article.resources.relatedTools') }}</h3>
        <ul class="list-disc pl-5 mb-4">
          <li class="mb-2">
            <a href="https://www.ufreetools.com/tool/hash-calculator" target="_blank" class="text-blue-600 hover:underline">
              {{ $t('tools.x509-certificate-decoder.article.resources.tool1') }}
            </a>
          </li>
          <li class="mb-2">
            <a href="https://www.ufreetools.com/tool/base64-encoder-decoder" target="_blank" class="text-blue-600 hover:underline">
              {{ $t('tools.x509-certificate-decoder.article.resources.tool2') }}
            </a>
          </li>
          <li class="mb-2">
            <a href="https://www.ufreetools.com/tool/jwt-debugger" target="_blank" class="text-blue-600 hover:underline">
              {{ $t('tools.x509-certificate-decoder.article.resources.tool3') }}
            </a>
          </li>
        </ul>
        
        <h3 class="text-lg font-medium mb-2">{{ $t('tools.x509-certificate-decoder.article.resources.externalLinks') }}</h3>
        <ul class="list-disc pl-5 mb-4">
          <li class="mb-2">
            <a href="https://www.ietf.org/rfc/rfc5280.txt" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
              {{ $t('tools.x509-certificate-decoder.article.resources.external1') }}
            </a>
          </li>
          <li class="mb-2">
            <a href="https://en.wikipedia.org/wiki/X.509" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
              {{ $t('tools.x509-certificate-decoder.article.resources.external2') }}
            </a>
          </li>
          <li class="mb-2">
            <a href="https://www.ssl.com/faqs/what-is-an-x-509-certificate/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
              {{ $t('tools.x509-certificate-decoder.article.resources.external3') }}
            </a>
          </li>
        </ul>
      </section>
      
      <!-- Conclusion -->
      <section class="mb-4">
        <h2 class="text-xl font-semibold mb-3">{{ $t('tools.x509-certificate-decoder.article.conclusion.title') }}</h2>
        <p v-html="$t('tools.x509-certificate-decoder.article.conclusion.content')"></p>
      </section>
    </div>
  </template>
  
  <script setup>
  // No script needed for this static article component
  </script>