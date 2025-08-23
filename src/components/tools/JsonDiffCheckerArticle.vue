<template>
    <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <article class="prose dark:prose-invert max-w-none">
            <h2 class="text-3xl font-bold mb-6">{{ $t('tools.json-diff-checker.article.title') }}</h2>

            <!-- 工具功能介绍应用场景 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.json-diff-checker.article.functionTitle') }}</h2>
                <p class="mb-4" v-html="$t('tools.json-diff-checker.article.intro')"></p>

                <h3 class="text-xl font-semibold mb-3">{{ $t('tools.json-diff-checker.article.useCasesTitle') }}</h3>
                <ul class="list-disc pl-6 mb-6 space-y-2">
                    <li v-for="(useCase, index) in $tm('tools.json-diff-checker.article.useCases')" :key="index">
                        {{ useCase }}
                    </li>
                </ul>

                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                    <h4 class="font-bold text-blue-700 dark:text-blue-300">
                        {{ $t('tools.json-diff-checker.article.tipTitle') }}
                    </h4>
                    <p class="text-blue-600 dark:text-blue-200">
                        {{ $t('tools.json-diff-checker.article.tipContent') }}
                    </p>
                </div>

                <p class="mb-4" v-html="$t('tools.json-diff-checker.article.conclusion')"></p>
            </section>

            <!-- 用户常见问题解答（FAQ） -->
            <section class="mb-10" itemscope itemtype="https://schema.org/FAQPage">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.json-diff-checker.article.faqTitle') }}</h2>

                <div class="space-y-6">
                    <div v-for="(faq, index) in $tm('tools.json-diff-checker.article.faqs')" :key="index" 
                        class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{ faq.question }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="faq.answer"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 操作指南或教程 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.json-diff-checker.article.tutorialTitle') }}</h2>

                <div v-for="(step, index) in $tm('tools.json-diff-checker.article.steps')" :key="index" 
                    class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            {{ index + 1 }}
                        </div>
                        <h3 class="text-xl font-semibold">{{ step.title }}</h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="step.description"></p>
                    <p v-if="step.note" class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{ step.note }}</p>
                </div>

                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mt-8">
                    <h4 class="font-bold text-green-700 dark:text-green-300">
                        {{ $t('tools.json-diff-checker.article.successTitle') }}
                    </h4>
                    <p class="text-green-600 dark:text-green-200">
                        {{ $t('tools.json-diff-checker.article.successContent') }}
                    </p>
                </div>
            </section>

            <!-- 相关工具 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.json-diff-checker.article.relatedToolsTitle') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a v-for="(tool, index) in $tm('tools.json-diff-checker.article.relatedTools')" :key="index"
                        :href="tool.url" target="_blank" rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ tool.name }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ tool.description }}</p>
                    </a>
                </div>
            </section>

            <!-- 参考资源 -->
            <section class="mb-6">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.json-diff-checker.article.referencesTitle') }}</h2>
                <ul class="space-y-4">
                    <li v-for="(reference, index) in $tm('tools.json-diff-checker.article.references')" :key="index"
                        class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="reference.url" target="_blank" rel="noopener noreferrer" 
                            class="font-medium hover:text-blue-600">
                            {{ reference.name }}
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{ reference.description }}</p>
                    </li>
                </ul>
            </section>
        </article>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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