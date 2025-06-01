<template>
    <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <article class="prose dark:prose-invert max-w-none">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2">
                {{ $t('tools.asn1-structure-parser.article.title') }}
            </h2>

            <!-- 工具功能介绍与应用场景 -->
            <section class="mb-10">
                <h2 class="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">{{
                    $t('tools.asn1-structure-parser.article.introTitle') }}</h2>
                <p class="mb-4 leading-relaxed" v-html="$t('tools.asn1-structure-parser.article.introPara1')"></p>
                <p class="mb-4 leading-relaxed" v-html="$t('tools.asn1-structure-parser.article.introPara2')"></p>

                <h3 class="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">{{
                    $t('tools.asn1-structure-parser.article.applicationTitle') }}</h3>
                <ul class="list-disc pl-6 mb-6 space-y-3">
                    <li class="leading-relaxed" v-html="$t('tools.asn1-structure-parser.article.application1')"></li>
                    <li class="leading-relaxed" v-html="$t('tools.asn1-structure-parser.article.application2')"></li>
                    <li class="leading-relaxed" v-html="$t('tools.asn1-structure-parser.article.application3')"></li>
                    <li class="leading-relaxed" v-html="$t('tools.asn1-structure-parser.article.application4')"></li>
                </ul>
                <p class="mb-3 leading-relaxed" v-html="$t('tools.asn1-structure-parser.article.introPara3')"></p>
            </section>

            <!-- 用户常见问题解答 -->
            <section class="mb-10">
                <h2 class="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-400">{{
                    $t('tools.asn1-structure-parser.article.faqTitle') }}</h2>

                <div class="space-y-4" itemscope itemtype="https://schema.org/FAQPage">
                    <div v-for="n in 5" :key="n"
                        class="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden"
                        itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <div @click="toggleFaq(n - 1)"
                            class="bg-gray-50 dark:bg-gray-800 px-6 py-4 cursor-pointer flex justify-between items-center"
                            :class="{ 'border-b border-gray-200 dark:border-gray-700': openFaqs[n - 1] }">
                            <h3 class="text-lg font-medium" itemprop="name">
                                {{ $t(`tools.asn1-structure-parser.article.faq${n}Question`) }}
                            </h3>
                            <span class="text-2xl text-blue-600 dark:text-blue-400 font-light">{{ openFaqs[n - 1] ? '−' :
                                '+' }}</span>
                        </div>
                        <div v-show="openFaqs[n - 1]"
                            class="px-6 py-4 bg-white dark:bg-gray-900 transition-all duration-300" itemscope
                            itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" class="leading-relaxed"
                                v-html="$t(`tools.asn1-structure-parser.article.faq${n}Answer`)"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 操作指南 -->
            <section class="mb-10">
                <h2 class="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-400">{{
                    $t('tools.asn1-structure-parser.article.tutorialTitle') }}</h2>

                <div class="space-y-8">
                    <div v-for="n in 5" :key="n" class="tutorial-step">
                        <div class="flex items-start">
                            <div
                                class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                                {{ n }}
                            </div>
                            <div class="flex-1">
                                <h3 class="text-lg font-medium mb-3">{{
                                    $t(`tools.asn1-structure-parser.article.step${n}Title`) }}</h3>
                                <p class="mb-4 leading-relaxed"
                                    v-html="$t(`tools.asn1-structure-parser.article.step${n}Content`)"></p>
                                <div v-if="n === 2 || n === 4"
                                    class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4 overflow-auto">
                                    <code
                                        class="text-sm font-mono whitespace-pre-wrap">{{ $t(`tools.asn1-structure-parser.article.step${n}Example`) }}</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 相关资源 -->
            <section class="mb-10">
                <h2 class="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-400">{{
                    $t('tools.asn1-structure-parser.article.resourcesTitle') }}</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-lg font-medium mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                            {{ $t('tools.asn1-structure-parser.article.relatedToolsTitle') }}
                        </h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                                <a href="https://www.ufreetools.com/tool/base64-encoder-decoder" target="_blank"
                                    class="text-blue-600 hover:underline">
                                    {{ $t('tools.asn1-structure-parser.article.relatedTool1') }}
                                </a>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                                <a href="https://www.ufreetools.com/tool/base64-hex-converter" target="_blank"
                                    class="text-blue-600 hover:underline">
                                    {{ $t('tools.asn1-structure-parser.article.relatedTool2') }}
                                </a>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                                <a href="https://www.ufreetools.com/tool/x509-certificate-decoder" target="_blank"
                                    class="text-blue-600 hover:underline">
                                    {{ $t('tools.asn1-structure-parser.article.relatedTool3') }}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-lg font-medium mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                            {{ $t('tools.asn1-structure-parser.article.externalResourcesTitle') }}
                        </h3>
                        <ul class="space-y-3">
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                    </path>
                                </svg>
                                <a href="https://www.itu.int/en/ITU-T/asn1/Pages/introduction.aspx" target="_blank"
                                    rel="noopener noreferrer" class="text-blue-600 hover:underline">
                                    {{ $t('tools.asn1-structure-parser.article.externalResource1') }}
                                </a>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                    </path>
                                </svg>
                                <a href="https://www.rfc-editor.org/rfc/rfc5280" target="_blank"
                                    rel="noopener noreferrer" class="text-blue-600 hover:underline">
                                    {{ $t('tools.asn1-structure-parser.article.externalResource2') }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </article>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 5个FAQ的打开状态管理，默认第一个打开
const openFaqs = ref([true, false, false, false, false]);

function toggleFaq(index) {
    openFaqs.value[index] = !openFaqs.value[index];
}
</script>

<style scoped>
.article-container {
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
    color: #333;
}

:deep(strong) {
    @apply font-semibold text-blue-700 dark:text-blue-400;
}

:deep(a) {
    @apply text-blue-600 dark:text-blue-400 hover:underline;
}

:deep(code) {
    @apply bg-gray-100 dark:bg-gray-800 px-1 rounded;
}

.tutorial-step {
    position: relative;
}

.tutorial-step:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 20px;
    top: 40px;
    bottom: -20px;
    width: 1px;
    background-color: #e5e7eb;
}

@media (max-width: 768px) {
    .article-container {
        padding: 1rem;
    }

    h1 {
        @apply text-xl;
    }

    h2 {
        @apply text-lg;
    }

    h3 {
        @apply text-base;
    }
}

@media (max-width: 640px) {
    .article-container {
        padding: 0.75rem;
    }
}
</style>