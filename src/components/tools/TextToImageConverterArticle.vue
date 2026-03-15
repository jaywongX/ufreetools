<template>
    <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <article class="prose dark:prose-invert max-w-none">
            <h1 class="text-3xl font-bold mb-6">{{ $t('tools.text-to-image-converter.article.title') }}</h1>

            <!-- 工具功能介绍 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.text-to-image-converter.article.functionTitle') }}</h2>
                <p class="mb-4" v-html="$t('tools.text-to-image-converter.article.intro')"></p>

                <h3 class="text-xl font-semibold mb-3">{{ $t('tools.text-to-image-converter.article.useCasesTitle') }}</h3>
                <ul class="list-disc pl-6 mb-6 space-y-2">
                    <li v-for="(useCase, index) in useCases" :key="index">{{ $t(`tools.text-to-image-converter.article.useCases[${index}]`) }}</li>
                </ul>

                <!-- 核心特性 -->
                <h3 class="text-xl font-semibold mb-4">{{ $t('tools.text-to-image-converter.article.featuresTitle') }}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div v-for="(feature, index) in features" :key="index"
                        class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                        <h4 class="font-semibold mb-2 text-blue-600 dark:text-blue-400">{{ $t(`tools.text-to-image-converter.article.features[${index}].title`) }}</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t(`tools.text-to-image-converter.article.features[${index}].description`) }}</p>
                    </div>
                </div>

                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                    <h4 class="font-bold text-blue-700 dark:text-blue-300">{{ $t('tools.text-to-image-converter.article.tipTitle') }}</h4>
                    <p class="text-blue-600 dark:text-blue-200">{{ $t('tools.text-to-image-converter.article.tipContent') }}</p>
                </div>

                <p class="mb-4" v-html="$t('tools.text-to-image-converter.article.conclusion')"></p>
            </section>

            <!-- FAQ -->
            <section class="mb-10" itemscope itemtype="https://schema.org/FAQPage">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.text-to-image-converter.article.faqTitle') }}</h2>

                <div class="space-y-6">
                    <div v-for="(faq, index) in faqs" :key="index"
                        class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{ $t(`tools.text-to-image-converter.article.faqs[${index}].question`) }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t(`tools.text-to-image-converter.article.faqs[${index}].answer`)"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 使用教程 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.text-to-image-converter.article.tutorialTitle') }}</h2>

                <div v-for="step in steps" :key="step.num" class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            {{ step.num }}
                        </div>
                        <h3 class="text-xl font-semibold">{{ $t(`tools.text-to-image-converter.article.step${step.num}.title`) }}</h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t(`tools.text-to-image-converter.article.step${step.num}.description`)"></p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{ $t(`tools.text-to-image-converter.article.step${step.num}.note`) }}</p>
                </div>

                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mt-8">
                    <h4 class="font-bold text-green-700 dark:text-green-300">{{ $t('tools.text-to-image-converter.article.successTitle') }}</h4>
                    <p class="text-green-600 dark:text-green-200">{{ $t('tools.text-to-image-converter.article.successContent') }}</p>
                </div>
            </section>

            <!-- 相关工具 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.text-to-image-converter.article.relatedToolsTitle') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a v-for="(tool, index) in relatedTools" :key="index"
                        :href="$t(`tools.text-to-image-converter.article.relatedTools[${index}].url`)"
                        target="_blank" rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t(`tools.text-to-image-converter.article.relatedTools[${index}].name`) }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t(`tools.text-to-image-converter.article.relatedTools[${index}].description`) }}</p>
                    </a>
                </div>
            </section>

            <!-- 参考资源 -->
            <section class="mb-6">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.text-to-image-converter.article.referencesTitle') }}</h2>
                <ul class="space-y-4">
                    <li v-for="(ref, index) in references" :key="index" class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="$t(`tools.text-to-image-converter.article.references[${index}].url`)"
                           target="_blank" rel="noopener noreferrer"
                           class="font-medium hover:text-blue-600">
                            {{ $t(`tools.text-to-image-converter.article.references[${index}].name`) }}
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t(`tools.text-to-image-converter.article.references[${index}].description`) }}</p>
                    </li>
                </ul>
            </section>
        </article>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const useCases = computed(() => Array.from({ length: 8 }, (_, i) => i))
const features = computed(() => Array.from({ length: 6 }, (_, i) => i))
const faqs = computed(() => Array.from({ length: 5 }, (_, i) => i))
const steps = computed(() => Array.from({ length: 7 }, (_, i) => ({ num: i + 1 })))
const relatedTools = computed(() => Array.from({ length: 4 }, (_, i) => i))
const references = computed(() => Array.from({ length: 3 }, (_, i) => i))
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
