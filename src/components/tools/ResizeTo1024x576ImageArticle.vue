<template>
    <div class="mt-8 bg-white dark:bg-gray-800 rounded-md p-6 border border-gray-200 dark:border-gray-700">

        <!-- Article content -->
        <div class="prose max-w-none dark:prose-invert">
            <h1 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                {{ $t('tools.resize-to-1024x576-image.article.title') }}
            </h1>

            <!-- 工具功能介绍应用场景 -->
            <section class="mb-10">
                <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                    {{ $t('tools.resize-to-1024x576-image.article.functionTitle') }}
                </h2>
                <div class="prose dark:prose-invert max-w-none">
                    <p v-html="$t('tools.resize-to-1024x576-image.article.intro')"></p>

                    <h3 class="text-lg font-medium mt-6 mb-3">
                        {{ $t('tools.resize-to-1024x576-image.article.scenariosTitle') }}
                    </h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li v-html="$t('tools.resize-to-1024x576-image.article.scenario1')"></li>
                        <li v-html="$t('tools.resize-to-1024x576-image.article.scenario2')"></li>
                        <li v-html="$t('tools.resize-to-1024x576-image.article.scenario3')"></li>
                        <li v-html="$t('tools.resize-to-1024x576-image.article.scenario4')"></li>
                    </ul>

                    <p v-html="$t('tools.resize-to-1024x576-image.article.conclusion')"></p>
                </div>
            </section>

            <!-- 用户常见问题解答（FAQ） -->
            <section class="mb-10">
                <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                    {{ $t('tools.resize-to-1024x576-image.article.faqTitle') }}
                </h2>

                <div class="space-y-6" itemscope itemtype="https://schema.org/FAQPage">
                    <div v-for="(faq, index) in faqs" :key="index"
                        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5" itemscope itemprop="mainEntity"
                        itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-medium mb-3 text-gray-800 dark:text-white" itemprop="name">
                            {{ $t(`tools.resize-to-1024x576-image.article.${faq.question}`) }}
                        </h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div class="text-gray-600 dark:text-gray-300" itemprop="text"
                                v-html="$t(`tools.resize-to-1024x576-image.article.${faq.answer}`)">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 操作指南或教程 -->
            <section class="mb-10">
                <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                    {{ $t('tools.resize-to-1024x576-image.article.tutorialTitle') }}
                </h2>

                <div class="prose dark:prose-invert max-w-none">
                    <ol class="list-decimal pl-5 space-y-4">
                        <li v-html="$t('tools.resize-to-1024x576-image.article.step1')"></li>
                        <li v-html="$t('tools.resize-to-1024x576-image.article.step2')"></li>
                        <li v-html="$t('tools.resize-to-1024x576-image.article.step3')"></li>
                        <li v-html="$t('tools.resize-to-1024x576-image.article.step4')"></li>
                        <li v-html="$t('tools.resize-to-1024x576-image.article.step5')"></li>
                    </ol>

                    <div class="my-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border-l-4 border-blue-500">
                        <p class="font-medium">{{ $t('tools.resize-to-1024x576-image.article.tipTitle') }}</p>
                        <p v-html="$t('tools.resize-to-1024x576-image.article.tip')"></p>
                    </div>
                </div>
            </section>

            <!-- 相关工具推荐 -->
            <section class="mb-10">
                <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                    {{ $t('tools.resize-to-1024x576-image.article.relatedToolsTitle') }}
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://www.ufreetools.com/tools/image-compressor" target="_blank"
                        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                        <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-white">
                            {{ $t('tools.resize-to-1024x576-image.article.relatedTool1Title') }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">
                            {{ $t('tools.resize-to-1024x576-image.article.relatedTool1Desc') }}
                        </p>
                    </a>

                    <a href="https://www.ufreetools.com/tools/image-batch-resizer" target="_blank"
                        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                        <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-white">
                            {{ $t('tools.resize-to-1024x576-image.article.relatedTool2Title') }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">
                            {{ $t('tools.resize-to-1024x576-image.article.relatedTool2Desc') }}
                        </p>
                    </a>

                    <a href="https://www.ufreetools.com/tools/image-watermark" target="_blank"
                        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                        <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-white">
                            {{ $t('tools.resize-to-1024x576-image.article.relatedTool3Title') }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">
                            {{ $t('tools.resize-to-1024x576-image.article.relatedTool3Desc') }}
                        </p>
                    </a>

                    <a href="https://www.ufreetools.com/tools/image-filters" target="_blank"
                        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
                        <h3 class="text-lg font-medium mb-2 text-gray-800 dark:text-white">
                            {{ $t('tools.resize-to-1024x576-image.article.relatedTool4Title') }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300">
                            {{ $t('tools.resize-to-1024x576-image.article.relatedTool4Desc') }}
                        </p>
                    </a>
                </div>
            </section>

            <!-- 外部资源链接 -->
            <section class="mb-10">
                <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                    {{ $t('tools.resize-to-1024x576-image.article.resourcesTitle') }}
                </h2>

                <ul class="space-y-3">
                    <li>
                        <a href="https://support.google.com/youtube/answer/72431" target="_blank"
                            rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">
                            {{ $t('tools.resize-to-1024x576-image.article.resource1') }}
                        </a>
                    </li>
                    <li>
                        <a href="https://developers.google.com/youtube/v3/getting-started" target="_blank"
                            rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">
                            {{ $t('tools.resize-to-1024x576-image.article.resource2') }}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.w3.org/Graphics/JPEG/" target="_blank" rel="noopener noreferrer"
                            class="text-blue-600 dark:text-blue-400 hover:underline">
                            {{ $t('tools.resize-to-1024x576-image.article.resource3') }}
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// FAQ 问答对
const faqs = ref([
    {
        question: 'faq1Question',
        answer: 'faq1Answer'
    },
    {
        question: 'faq2Question',
        answer: 'faq2Answer'
    },
    {
        question: 'faq3Question',
        answer: 'faq3Answer'
    },
    {
        question: 'faq4Question',
        answer: 'faq4Answer'
    },
    {
        question: 'faq5Question',
        answer: 'faq5Answer'
    }
]);
</script>

<style scoped>
.article-container {
    font-size: 1.05rem;
    line-height: 1.7;
}

.article-container h1,
.article-container h2,
.article-container h3 {
    line-height: 1.3;
}

.prose a {
    @apply text-blue-600 dark:text-blue-400 hover:underline;
}

.prose strong {
    @apply font-semibold text-gray-900 dark:text-white;
}

.prose em {
    @apply italic text-gray-700 dark:text-gray-300;
}
</style>