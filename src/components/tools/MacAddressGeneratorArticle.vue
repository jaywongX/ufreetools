<template>
    <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <article class="article-container prose dark:prose-invert max-w-none">
            <h2 class="text-3xl font-bold mb-6">{{ $t('tools.mac-address-generator.article.title') }}</h2>

            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.mac-address-generator.article.functionTitle') }}</h2>

                <h3 class="text-xl font-semibold mb-3">{{ $t('tools.mac-address-generator.article.useCasesTitle') }}</h3>
                <ul class="list-disc pl-6 mb-6 space-y-2">
                    <li v-html="$t('tools.mac-address-generator.article.useCase1')"></li>
                    <li v-html="$t('tools.mac-address-generator.article.useCase2')"></li>
                    <li v-html="$t('tools.mac-address-generator.article.useCase3')"></li>
                    <li v-html="$t('tools.mac-address-generator.article.useCase4')"></li>
                    <li v-html="$t('tools.mac-address-generator.article.useCase5')"></li>
                    <li v-html="$t('tools.mac-address-generator.article.useCase6')"></li>
                </ul>

                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                    <h4 class="font-bold text-blue-700 dark:text-blue-300">{{
                        $t('tools.mac-address-generator.article.tipTitle') }}</h4>
                    <p class="text-blue-600 dark:text-blue-200">{{
                        $t('tools.mac-address-generator.article.tipContent') }}</p>
                </div>

                <div class="space-y-4" v-html="$t('tools.mac-address-generator.article.conclusion')"></div>
            </section>

            <section class="mb-10" itemscope itemtype="https://schema.org/FAQPage">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.mac-address-generator.article.faqTitle') }}</h2>

                <div class="space-y-6">
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.mac-address-generator.article.faq1Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text">{{ $t('tools.mac-address-generator.article.faq1Answer') }}</div>
                        </div>
                    </div>

                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.mac-address-generator.article.faq2Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text">{{ $t('tools.mac-address-generator.article.faq2Answer') }}</div>
                        </div>
                    </div>

                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.mac-address-generator.article.faq3Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text">{{ $t('tools.mac-address-generator.article.faq3Answer') }}</div>
                        </div>
                    </div>

                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.mac-address-generator.article.faq4Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text">{{ $t('tools.mac-address-generator.article.faq4Answer') }}</div>
                        </div>
                    </div>

                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.mac-address-generator.article.faq5Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text">{{ $t('tools.mac-address-generator.article.faq5Answer') }}</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.mac-address-generator.article.tutorialTitle') }}</h2>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            1</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.mac-address-generator.article.step1Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11">{{ $t('tools.mac-address-generator.article.step1Description') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.mac-address-generator.article.step1Note') }}</p>
                </div>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            2</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.mac-address-generator.article.step2Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11">{{ $t('tools.mac-address-generator.article.step2Description') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.mac-address-generator.article.step2Note') }}</p>
                </div>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            3</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.mac-address-generator.article.step3Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11">{{ $t('tools.mac-address-generator.article.step3Description') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.mac-address-generator.article.step3Note') }}</p>
                </div>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            4</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.mac-address-generator.article.step4Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11">{{ $t('tools.mac-address-generator.article.step4Description') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.mac-address-generator.article.step4Note') }}</p>
                </div>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            5</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.mac-address-generator.article.step5Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11">{{ $t('tools.mac-address-generator.article.step5Description') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.mac-address-generator.article.step5Note') }}</p>
                </div>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            6</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.mac-address-generator.article.step6Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11">{{ $t('tools.mac-address-generator.article.step6Description') }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.mac-address-generator.article.step6Note') }}</p>
                </div>

                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mt-8">
                    <h4 class="font-bold text-green-700 dark:text-green-300">{{
                        $t('tools.mac-address-generator.article.successTitle') }}</h4>
                    <p class="text-green-600 dark:text-green-200">{{
                        $t('tools.mac-address-generator.article.successContent') }}</p>
                </div>
            </section>

            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.mac-address-generator.article.relatedToolsTitle') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a :href="$t('tools.mac-address-generator.article.relatedTool1Url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t('tools.mac-address-generator.article.relatedTool1Name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.mac-address-generator.article.relatedTool1Description') }}</p>
                    </a>

                    <a :href="$t('tools.mac-address-generator.article.relatedTool2Url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t('tools.mac-address-generator.article.relatedTool2Name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.mac-address-generator.article.relatedTool2Description') }}</p>
                    </a>

                    <a :href="$t('tools.mac-address-generator.article.relatedTool3Url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t('tools.mac-address-generator.article.relatedTool3Name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.mac-address-generator.article.relatedTool3Description') }}</p>
                    </a>

                    <a :href="$t('tools.mac-address-generator.article.relatedTool4Url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t('tools.mac-address-generator.article.relatedTool4Name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.mac-address-generator.article.relatedTool4Description') }}</p>
                    </a>
                </div>
            </section>

            <section class="mb-6">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.mac-address-generator.article.relatedToolsTitle') }}</h2>
                <ul class="space-y-4">
                    <li class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="$t('tools.mac-address-generator.article.reference1Url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">{{
                                $t('tools.mac-address-generator.article.reference1Name') }}</a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.mac-address-generator.article.reference1Description') }}</p>
                    </li>
                    <li class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="$t('tools.mac-address-generator.article.reference2Url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">{{
                                $t('tools.mac-address-generator.article.reference2Name') }}</a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.mac-address-generator.article.reference2Description') }}</p>
                    </li>
                    <li class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="$t('tools.mac-address-generator.article.reference3Url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">{{
                                $t('tools.mac-address-generator.article.reference3Name') }}</a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.mac-address-generator.article.reference3Description') }}</p>
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
.article-container {
    font-size: 16px;
    line-height: 1.6;
}

.article-container h1,
.article-container h2,
.article-container h3,
.article-container h4 {
    color: inherit;
    line-height: 1.3;
}

.article-container a {
    color: #3b82f6;
    text-decoration: none;
}

.article-container a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .article-container {
        font-size: 15px;
    }
}
</style>
