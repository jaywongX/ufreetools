<template>
    <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <article class="article-container prose dark:prose-invert max-w-none">
            <h2 class="text-3xl font-bold mb-6">{{ $t('tools.malaysia-address-generator.article.title') }}</h2>

            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.malaysia-address-generator.article.functionTitle') }}</h2>
                <h3 class="text-xl font-semibold mb-3">{{ $t('tools.malaysia-address-generator.article.useCasesTitle') }}</h3>
                <ul class="list-disc pl-6 mb-6 space-y-2">
                    <li v-html="$t('tools.malaysia-address-generator.article.useCase1')"></li>
                    <li v-html="$t('tools.malaysia-address-generator.article.useCase2')"></li>
                    <li v-html="$t('tools.malaysia-address-generator.article.useCase3')"></li>
                    <li v-html="$t('tools.malaysia-address-generator.article.useCase4')"></li>
                    <li v-html="$t('tools.malaysia-address-generator.article.useCase5')"></li>
                    <li v-html="$t('tools.malaysia-address-generator.article.useCase6')"></li>
                </ul>
                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                    <h4 class="font-bold text-blue-700 dark:text-blue-300">{{ $t('tools.malaysia-address-generator.article.tipTitle') }}</h4>
                    <p class="text-blue-600 dark:text-blue-200">{{ $t('tools.malaysia-address-generator.article.tipContent') }}</p>
                </div>
                <div class="space-y-4" v-html="$t('tools.malaysia-address-generator.article.conclusion')"></div>
            </section>

            <section class="mb-10" itemscope itemtype="https://schema.org/FAQPage">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.malaysia-address-generator.article.faqTitle') }}</h2>
                <div class="space-y-6">
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{ $t('tools.malaysia-address-generator.article.faq1Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text">{{ $t('tools.malaysia-address-generator.article.faq1Answer') }}</div>
                        </div>
                    </div>
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{ $t('tools.malaysia-address-generator.article.faq2Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text">{{ $t('tools.malaysia-address-generator.article.faq2Answer') }}</div>
                        </div>
                    </div>
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{ $t('tools.malaysia-address-generator.article.faq3Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text">{{ $t('tools.malaysia-address-generator.article.faq3Answer') }}</div>
                        </div>
                    </div>
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{ $t('tools.malaysia-address-generator.article.faq4Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text">{{ $t('tools.malaysia-address-generator.article.faq4Answer') }}</div>
                        </div>
                    </div>
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{ $t('tools.malaysia-address-generator.article.faq5Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text">{{ $t('tools.malaysia-address-generator.article.faq5Answer') }}</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.malaysia-address-generator.article.tutorialTitle') }}</h2>
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg" v-for="i in 6" :key="i">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">{{ i }}</div>
                        <h3 class="text-xl font-semibold">{{ $t(`tools.malaysia-address-generator.article.step${i}Title`) }}</h3>
                    </div>
                    <p class="mb-2 ml-11">{{ $t(`tools.malaysia-address-generator.article.step${i}Description`) }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{ $t(`tools.malaysia-address-generator.article.step${i}Note`) }}</p>
                </div>
                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mt-8">
                    <h4 class="font-bold text-green-700 dark:text-green-300">{{ $t('tools.malaysia-address-generator.article.successTitle') }}</h4>
                    <p class="text-green-600 dark:text-green-200">{{ $t('tools.malaysia-address-generator.article.successContent') }}</p>
                </div>
            </section>

            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.malaysia-address-generator.article.relatedToolsTitle') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a v-for="i in 4" :key="i" :href="$t(`tools.malaysia-address-generator.article.relatedTool${i}Url`)" target="_blank" rel="noopener noreferrer" class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t(`tools.malaysia-address-generator.article.relatedTool${i}Name`) }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t(`tools.malaysia-address-generator.article.relatedTool${i}Description`) }}</p>
                    </a>
                </div>
            </section>

            <section class="mb-6">
                <ul class="space-y-4">
                    <li v-for="i in 3" :key="i" class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="$t(`tools.malaysia-address-generator.article.reference${i}Url`)" target="_blank" rel="noopener noreferrer" class="font-medium hover:text-blue-600">{{ $t(`tools.malaysia-address-generator.article.reference${i}Name`) }}</a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t(`tools.malaysia-address-generator.article.reference${i}Description`) }}</p>
                    </li>
                </ul>
            </section>
        </article>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
useI18n()
</script>

<style scoped>
.article-container { font-size: 16px; line-height: 1.6; }
.article-container h1, .article-container h2, .article-container h3, .article-container h4 { color: inherit; line-height: 1.3; }
.article-container a { color: #3b82f6; text-decoration: none; }
.article-container a:hover { text-decoration: underline; }
@media (max-width: 768px) { .article-container { font-size: 15px; } }
</style>