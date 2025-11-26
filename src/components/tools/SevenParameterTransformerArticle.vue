<template>
    <div class="mt-12 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <article class="prose dark:prose-invert max-w-none">
            <h1 class="text-3xl font-bold mb-6">{{ $t('tools.seven-parameter-transformer.article.title') }}</h1>

            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.seven-parameter-transformer.article.functionTitle')
                }}</h2>
                <p class="mb-4" v-html="$t('tools.seven-parameter-transformer.article.intro')"></p>

                <h3 class="text-xl font-semibold mb-3">{{ $t('tools.seven-parameter-transformer.article.useCasesTitle')
                }}</h3>
                <ul class="list-disc pl-6 space-y-2">
                    <li v-html="$t('tools.seven-parameter-transformer.article.useCases.first')"></li>
                    <li v-html="$t('tools.seven-parameter-transformer.article.useCases.second')"></li>
                    <li v-html="$t('tools.seven-parameter-transformer.article.useCases.third')"></li>
                    <li v-html="$t('tools.seven-parameter-transformer.article.useCases.fourth')"></li>
                </ul>

                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mt-6 ">
                    <img src="/public/images/seven-parameter-transformer-logo.png"
                        :alt="$t('tools.seven-parameter-transformer.article.logoAlt')"
                        class="w-full rounded border" loading="lazy" />
                    <div v-html="$t('tools.seven-parameter-transformer.article.tipContent')"></div>
                </div>

                <p class="mt-6" v-html="$t('tools.seven-parameter-transformer.article.conclusion')"></p>
            </section>

            <section class="mb-10" itemscope itemtype="https://schema.org/FAQPage">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.seven-parameter-transformer.article.faqTitle') }}
                </h2>

                <div class="space-y-6">
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold" itemprop="name">{{
                            $t('tools.seven-parameter-transformer.article.faqs.q1.question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text"
                                v-html="$t('tools.seven-parameter-transformer.article.faqs.q1.answer')"></div>
                        </div>
                    </div>

                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold" itemprop="name">{{
                            $t('tools.seven-parameter-transformer.article.faqs.q2.question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text"
                                v-html="$t('tools.seven-parameter-transformer.article.faqs.q2.answer')"></div>
                        </div>
                    </div>

                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold" itemprop="name">{{
                            $t('tools.seven-parameter-transformer.article.faqs.q3.question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text"
                                v-html="$t('tools.seven-parameter-transformer.article.faqs.q3.answer')"></div>
                        </div>
                    </div>

                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold" itemprop="name">{{
                            $t('tools.seven-parameter-transformer.article.faqs.q4.question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text"
                                v-html="$t('tools.seven-parameter-transformer.article.faqs.q4.answer')"></div>
                        </div>
                    </div>

                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold" itemprop="name">{{
                            $t('tools.seven-parameter-transformer.article.faqs.q5.question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text"
                                v-html="$t('tools.seven-parameter-transformer.article.faqs.q5.answer')"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.seven-parameter-transformer.article.tutorialTitle')
                }}</h2>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            1</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.seven-parameter-transformer.article.steps.step1.title') }}</h3>
                    </div>
                    <p class="ml-11">{{ $t('tools.seven-parameter-transformer.article.steps.step1.description') }}</p>
                </div>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            2</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.seven-parameter-transformer.article.steps.step2.title') }}</h3>
                    </div>
                    <p class="ml-11">{{ $t('tools.seven-parameter-transformer.article.steps.step2.description') }}</p>
                </div>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            3</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.seven-parameter-transformer.article.steps.step3.title') }}</h3>
                    </div>
                    <p class="ml-11">{{ $t('tools.seven-parameter-transformer.article.steps.step3.description') }}</p>
                </div>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            4</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.seven-parameter-transformer.article.steps.step4.title') }}</h3>
                    </div>
                    <p class="ml-11">{{ $t('tools.seven-parameter-transformer.article.steps.step4.description') }}</p>
                </div>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            5</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.seven-parameter-transformer.article.steps.step5.title') }}</h3>
                    </div>
                    <p class="ml-11">{{ $t('tools.seven-parameter-transformer.article.steps.step5.description') }}</p>
                </div>

                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            6</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.seven-parameter-transformer.article.steps.step6.title') }}</h3>
                    </div>
                    <p class="ml-11">{{ $t('tools.seven-parameter-transformer.article.steps.step6.description') }}</p>
                </div>

                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mt-8">
                    <h4 class="font-bold text-green-700 dark:text-green-300">{{
                        $t('tools.seven-parameter-transformer.article.successTitle') }}</h4>
                    <p class="text-green-600 dark:text-green-200">{{
                        $t('tools.seven-parameter-transformer.article.successContent') }}</p>
                </div>
            </section>

            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{
                    $t('tools.seven-parameter-transformer.article.relatedToolsTitle') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a :href="$t('tools.seven-parameter-transformer.article.relatedTools.first.url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{
                            $t('tools.seven-parameter-transformer.article.relatedTools.first.name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.seven-parameter-transformer.article.relatedTools.first.description') }}</p>
                    </a>
                    <a :href="$t('tools.seven-parameter-transformer.article.relatedTools.second.url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{
                            $t('tools.seven-parameter-transformer.article.relatedTools.second.name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.seven-parameter-transformer.article.relatedTools.second.description') }}</p>
                    </a>
                    <a :href="$t('tools.seven-parameter-transformer.article.relatedTools.third.url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{
                            $t('tools.seven-parameter-transformer.article.relatedTools.third.name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.seven-parameter-transformer.article.relatedTools.third.description') }}</p>
                    </a>
                    <a :href="$t('tools.seven-parameter-transformer.article.relatedTools.fourth.url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{
                            $t('tools.seven-parameter-transformer.article.relatedTools.fourth.name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.seven-parameter-transformer.article.relatedTools.fourth.description') }}</p>
                    </a>
                </div>
            </section>

            <section class="mb-6">
                <h2 class="text-2xl font-semibold mb-4">{{
                    $t('tools.seven-parameter-transformer.article.referencesTitle') }}</h2>
                <ul class="space-y-4">
                    <li class="border-l-4 border-gray-300 pl-4">
                        <a :href="$t('tools.seven-parameter-transformer.article.references.first.url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">
                            {{ $t('tools.seven-parameter-transformer.article.references.first.name') }}
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.seven-parameter-transformer.article.references.first.description') }}</p>
                    </li>
                    <li class="border-l-4 border-gray-300 pl-4">
                        <a :href="$t('tools.seven-parameter-transformer.article.references.second.url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">
                            {{ $t('tools.seven-parameter-transformer.article.references.second.name') }}
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.seven-parameter-transformer.article.references.second.description') }}</p>
                    </li>
                    <li class="border-l-4 border-gray-300 pl-4">
                        <a :href="$t('tools.seven-parameter-transformer.article.references.third.url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">
                            {{ $t('tools.seven-parameter-transformer.article.references.third.name') }}
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.seven-parameter-transformer.article.references.third.description') }}</p>
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
