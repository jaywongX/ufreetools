<template>
    <div class="article-container mt-8 prose dark:prose-invert max-w-none">
      <h2 class="text-2xl font-bold mb-6">{{ $t('tools.cash-app-fee-calculator.article.title') }}</h2>
      
      <!-- 工具功能介绍 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.cash-app-fee-calculator.article.intro.title') }}</h3>
        <p v-html="$t('tools.cash-app-fee-calculator.article.intro.content1')"></p>
        <p v-html="$t('tools.cash-app-fee-calculator.article.intro.content2')"></p>
      </section>
      
      <!-- 应用场景 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.cash-app-fee-calculator.article.applications.title') }}</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            <strong>{{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.0.title') }}:</strong> 
            {{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.0.description') }}
          </li>
          <li>
            <strong>{{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.1.title') }}:</strong> 
            {{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.1.description') }}
          </li>
          <li>
            <strong>{{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.2.title') }}:</strong> 
            {{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.2.description') }}
          </li>
          <li>
            <strong>{{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.3.title') }}:</strong> 
            {{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.3.description') }}
          </li>
          <li>
            <strong>{{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.4.title') }}:</strong> 
            {{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.4.description') }}
          </li>
          <li>
            <strong>{{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.5.title') }}:</strong> 
            {{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.5.description') }}
          </li>
          <li>
            <strong>{{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.6.title') }}:</strong> 
            {{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.6.description') }}
          </li>
          <li>
            <strong>{{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.7.title') }}:</strong> 
            {{ $t('tools.cash-app-fee-calculator.article.applications.scenarios.7.description') }}
          </li>
        </ul>
      </section>
      
      <!-- 操作指南 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.cash-app-fee-calculator.article.guide.title') }}</h3>
        <ol class="list-decimal pl-6 space-y-4">
          <li>
            <h4 class="font-medium">{{ $t('tools.cash-app-fee-calculator.article.guide.steps.0.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.guide.steps.0.description') }}</p>
          </li>
          <li>
            <h4 class="font-medium">{{ $t('tools.cash-app-fee-calculator.article.guide.steps.1.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.guide.steps.1.description') }}</p>
          </li>
          <li>
            <h4 class="font-medium">{{ $t('tools.cash-app-fee-calculator.article.guide.steps.2.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.guide.steps.2.description') }}</p>
          </li>
          <li>
            <h4 class="font-medium">{{ $t('tools.cash-app-fee-calculator.article.guide.steps.3.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.guide.steps.3.description') }}</p>
          </li>
          <li>
            <h4 class="font-medium">{{ $t('tools.cash-app-fee-calculator.article.guide.steps.4.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.guide.steps.4.description') }}</p>
          </li>
          <li>
            <h4 class="font-medium">{{ $t('tools.cash-app-fee-calculator.article.guide.steps.5.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.guide.steps.5.description') }}</p>
          </li>
          <li>
            <h4 class="font-medium">{{ $t('tools.cash-app-fee-calculator.article.guide.steps.6.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.guide.steps.6.description') }}</p>
          </li>
        </ol>
      </section>
      
      <!-- 常见问题 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.cash-app-fee-calculator.article.faq.title') }}</h3>
        <div class="space-y-4">
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.faq.items.0.question') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.faq.items.0.answer') }}</p>
          </div>
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.faq.items.1.question') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.faq.items.1.answer') }}</p>
          </div>
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.faq.items.2.question') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.faq.items.2.answer') }}</p>
          </div>
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.faq.items.3.question') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.faq.items.3.answer') }}</p>
          </div>
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.faq.items.4.question') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.faq.items.4.answer') }}</p>
          </div>
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.faq.items.5.question') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.faq.items.5.answer') }}</p>
          </div>
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.faq.items.6.question') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.faq.items.6.answer') }}</p>
          </div>
          <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.faq.items.7.question') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.faq.items.7.answer') }}</p>
          </div>
        </div>
      </section>
      
      <!-- 费用类型说明 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.cash-app-fee-calculator.article.feeTypes.title') }}</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.0.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.0.description') }}</p>
          </div>
          <div>
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.1.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.1.description') }}</p>
          </div>
          <div>
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.2.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.2.description') }}</p>
          </div>
          <div>
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.3.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.3.description') }}</p>
          </div>
          <div>
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.4.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.4.description') }}</p>
          </div>
          <div>
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.5.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.5.description') }}</p>
          </div>
          <div>
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.6.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.6.description') }}</p>
          </div>
          <div>
            <h4 class="font-medium mb-2">{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.7.title') }}</h4>
            <p>{{ $t('tools.cash-app-fee-calculator.article.feeTypes.items.7.description') }}</p>
          </div>
        </div>
      </section>
      
      <!-- 其他提示 -->
      <section class="mb-8">
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.cash-app-fee-calculator.article.tips.title') }}</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>{{ $t('tools.cash-app-fee-calculator.article.tips.items.0') }}</li>
          <li>{{ $t('tools.cash-app-fee-calculator.article.tips.items.1') }}</li>
          <li>{{ $t('tools.cash-app-fee-calculator.article.tips.items.2') }}</li>
          <li>{{ $t('tools.cash-app-fee-calculator.article.tips.items.3') }}</li>
          <li>{{ $t('tools.cash-app-fee-calculator.article.tips.items.4') }}</li>
          <li>{{ $t('tools.cash-app-fee-calculator.article.tips.items.5') }}</li>
          <li>{{ $t('tools.cash-app-fee-calculator.article.tips.items.6') }}</li>
          <li>{{ $t('tools.cash-app-fee-calculator.article.tips.items.7') }}</li>
        </ul>
      </section>
      
      <!-- 总结 -->
      <section>
        <h3 class="text-xl font-semibold mb-4">{{ $t('tools.cash-app-fee-calculator.article.conclusion.title') }}</h3>
        <p v-html="$t('tools.cash-app-fee-calculator.article.conclusion.content')"></p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CashAppFeeCalculatorArticle'
  }
  </script>