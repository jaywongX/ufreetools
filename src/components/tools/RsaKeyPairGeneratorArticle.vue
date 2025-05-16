<template>
  <div class="mt-8 bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700">

    <!-- Article content -->
    <div class="prose max-w-none dark:prose-invert">
      <h1 class="text-3xl font-bold mb-6">{{ $t('tools.rsa-key-pair-generator.article.title') }}</h1>

      <!-- Introduction -->
      <section>
        <p v-html="$t('tools.rsa-key-pair-generator.article.intro')"></p>
      </section>

      <!-- Key features section -->
      <section class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.rsa-key-pair-generator.article.featuresTitle') }}</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li v-html="$t('tools.rsa-key-pair-generator.article.feature1')"></li>
          <li v-html="$t('tools.rsa-key-pair-generator.article.feature2')"></li>
          <li v-html="$t('tools.rsa-key-pair-generator.article.feature3')"></li>
          <li v-html="$t('tools.rsa-key-pair-generator.article.feature4')"></li>
          <li v-html="$t('tools.rsa-key-pair-generator.article.feature5')"></li>
        </ul>
      </section>

      <!-- Use cases section -->
      <section class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.rsa-key-pair-generator.article.useCasesTitle') }}</h2>

        <h3 class="text-xl font-medium mt-6 mb-3">{{ $t('tools.rsa-key-pair-generator.article.useCase1Title') }}</h3>
        <p v-html="$t('tools.rsa-key-pair-generator.article.useCase1Desc')"></p>

        <h3 class="text-xl font-medium mt-6 mb-3">{{ $t('tools.rsa-key-pair-generator.article.useCase2Title') }}</h3>
        <p v-html="$t('tools.rsa-key-pair-generator.article.useCase2Desc')"></p>

        <h3 class="text-xl font-medium mt-6 mb-3">{{ $t('tools.rsa-key-pair-generator.article.useCase3Title') }}</h3>
        <p v-html="$t('tools.rsa-key-pair-generator.article.useCase3Desc')"></p>

        <h3 class="text-xl font-medium mt-6 mb-3">{{ $t('tools.rsa-key-pair-generator.article.useCase4Title') }}</h3>
        <p v-html="$t('tools.rsa-key-pair-generator.article.useCase4Desc')"></p>

        <div class="my-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <p class="italic" v-html="$t('tools.rsa-key-pair-generator.article.relatedToolsText')"></p>
          <ul class="mt-2 space-y-1">
            <li>
              <a href="https://www.ufreetools.com/tool/hash-calculator" target="_blank"
                class="text-blue-600 dark:text-blue-400 hover:underline">
                {{ $t('tools.rsa-key-pair-generator.article.relatedTool1') }}
              </a>
            </li>
            <li>
              <a href="https://www.ufreetools.com/tool/unified-credit-code-generator" target="_blank"
                class="text-blue-600 dark:text-blue-400 hover:underline">
                {{ $t('tools.rsa-key-pair-generator.article.relatedTool2') }}
              </a>
            </li>
          </ul>
        </div>
      </section>

      <!-- Step-by-step tutorial -->
      <section class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.rsa-key-pair-generator.article.tutorialTitle') }}</h2>

        <div class="mb-6">
          <h3 class="text-xl font-medium mb-3">{{ $t('tools.rsa-key-pair-generator.article.step1Title') }}</h3>
          <p v-html="$t('tools.rsa-key-pair-generator.article.step1Desc')"></p>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-medium mb-3">{{ $t('tools.rsa-key-pair-generator.article.step2Title') }}</h3>
          <p v-html="$t('tools.rsa-key-pair-generator.article.step2Desc')"></p>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-medium mb-3">{{ $t('tools.rsa-key-pair-generator.article.step3Title') }}</h3>
          <p v-html="$t('tools.rsa-key-pair-generator.article.step3Desc')"></p>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-medium mb-3">{{ $t('tools.rsa-key-pair-generator.article.step4Title') }}</h3>
          <p v-html="$t('tools.rsa-key-pair-generator.article.step4Desc')"></p>
        </div>
      </section>

      <!-- FAQ section -->
      <section class="mt-8">
        <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.rsa-key-pair-generator.article.faqTitle') }}</h2>

        <div class="space-y-6">
          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="text-xl font-medium mb-2">{{ $t('tools.rsa-key-pair-generator.article.faq1Question') }}</h3>
            <p v-html="$t('tools.rsa-key-pair-generator.article.faq1Answer')"></p>
          </div>

          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="text-xl font-medium mb-2">{{ $t('tools.rsa-key-pair-generator.article.faq2Question') }}</h3>
            <p v-html="$t('tools.rsa-key-pair-generator.article.faq2Answer')"></p>
          </div>

          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="text-xl font-medium mb-2">{{ $t('tools.rsa-key-pair-generator.article.faq3Question') }}</h3>
            <p v-html="$t('tools.rsa-key-pair-generator.article.faq3Answer')"></p>
          </div>

          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="text-xl font-medium mb-2">{{ $t('tools.rsa-key-pair-generator.article.faq4Question') }}</h3>
            <p v-html="$t('tools.rsa-key-pair-generator.article.faq4Answer')"></p>
          </div>

          <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 class="text-xl font-medium mb-2">{{ $t('tools.rsa-key-pair-generator.article.faq5Question') }}</h3>
            <p v-html="$t('tools.rsa-key-pair-generator.article.faq5Answer')"></p>
          </div>
        </div>
      </section>

      <!-- References section -->
      <section class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.rsa-key-pair-generator.article.referencesTitle') }}</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r5.pdf" target="_blank"
              rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">
              {{ $t('tools.rsa-key-pair-generator.article.reference1') }}
            </a>
          </li>
          <li>
            <a href="https://www.rfc-editor.org/rfc/rfc8017" target="_blank" rel="noopener noreferrer"
              class="text-blue-600 dark:text-blue-400 hover:underline">
              {{ $t('tools.rsa-key-pair-generator.article.reference2') }}
            </a>
          </li>
          <li>
            <a href="https://csrc.nist.gov/pubs/fips/186-5/final" target="_blank" rel="noopener noreferrer"
              class="text-blue-600 dark:text-blue-400 hover:underline">
              {{ $t('tools.rsa-key-pair-generator.article.reference3') }}
            </a>
          </li>
        </ul>
      </section>

      <!-- Conclusion -->
      <section class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.rsa-key-pair-generator.article.conclusionTitle') }}</h2>
        <p v-html="$t('tools.rsa-key-pair-generator.article.conclusionText')"></p>
      </section>
    </div>
  </div>
</template>

<script setup>
// No additional script needed
</script>