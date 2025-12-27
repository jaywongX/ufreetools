<template>
    <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <article class="prose dark:prose-invert max-w-none">
            <h2 class="text-3xl font-bold mb-6">{{ $t('tools.image-to-jpg.article.title') }}</h2>

            <!-- 工具功能介绍应用场景 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.image-to-jpg.article.functionTitle') }}</h2>
                <p class="mb-4" v-html="$t('tools.image-to-jpg.article.intro')"></p>

                <h3 class="text-xl font-semibold mb-3">{{ $t('tools.image-to-jpg.article.useCasesTitle') }}</h3>
                <ul class="list-disc pl-6 mb-6 space-y-2">
                    <li>{{ $t('tools.image-to-jpg.article.useCases[0]') }}</li>
                    <li>{{ $t('tools.image-to-jpg.article.useCases[1]') }}</li>
                    <li>{{ $t('tools.image-to-jpg.article.useCases[2]') }}</li>
                    <li>{{ $t('tools.image-to-jpg.article.useCases[3]') }}</li>
                    <li>{{ $t('tools.image-to-jpg.article.useCases[4]') }}</li>
                    <li>{{ $t('tools.image-to-jpg.article.useCases[5]') }}</li>
                    <li>{{ $t('tools.image-to-jpg.article.useCases[6]') }}</li>
                    <li>{{ $t('tools.image-to-jpg.article.useCases[7]') }}</li>
                </ul>

                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                    <h4 class="font-bold text-blue-700 dark:text-blue-300">{{
                        $t('tools.image-to-jpg.article.tipTitle') }}</h4>
                    <p class="text-blue-600 dark:text-blue-200">{{ $t('tools.image-to-jpg.article.tipContent') }}
                    </p>
                </div>

                <p class="mb-4" v-html="$t('tools.image-to-jpg.article.conclusion')"></p>
            </section>

            <!-- 用户常见问题解答（FAQ） -->
            <section class="mb-10" itemscope itemtype="https://schema.org/FAQPage">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.image-to-jpg.article.faqTitle') }}</h2>

                <div class="space-y-6">
                    <!-- FAQ Item 1 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.image-to-jpg.article.faqs[0].question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.image-to-jpg.article.faqs[0].answer')"></div>
                        </div>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.image-to-jpg.article.faqs[1].question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.image-to-jpg.article.faqs[1].answer')"></div>
                        </div>
                    </div>

                    <!-- FAQ Item 3 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.image-to-jpg.article.faqs[2].question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.image-to-jpg.article.faqs[2].answer')"></div>
                        </div>
                    </div>

                    <!-- FAQ Item 4 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.image-to-jpg.article.faqs[3].question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.image-to-jpg.article.faqs[3].answer')"></div>
                        </div>
                    </div>

                    <!-- FAQ Item 5 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.image-to-jpg.article.faqs[4].question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.image-to-jpg.article.faqs[4].answer')"></div>
                        </div>
                    </div>

                    <!-- FAQ Item 6 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.image-to-jpg.article.faqs[5].question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.image-to-jpg.article.faqs[5].answer')"></div>
                        </div>
                    </div>

                    <!-- FAQ Item 7 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.image-to-jpg.article.faqs[6].question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.image-to-jpg.article.faqs[6].answer')"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 操作指南或教程 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.image-to-jpg.article.tutorialTitle') }}</h2>

                <!-- Step 1 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            1</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.image-to-jpg.article.steps[0].title') }}
                        </h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.image-to-jpg.article.steps[0].description')"></p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.image-to-jpg.article.steps[0].note') }}</p>
                </div>

                <!-- Step 2 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            2</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.image-to-jpg.article.steps[1].title') }}
                        </h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.image-to-jpg.article.steps[1].description')"></p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.image-to-jpg.article.steps[1].note') }}</p>
                </div>

                <!-- Step 3 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            3</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.image-to-jpg.article.steps[2].title') }}
                        </h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.image-to-jpg.article.steps[2].description')"></p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.image-to-jpg.article.steps[2].note') }}</p>
                </div>

                <!-- Step 4 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            4</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.image-to-jpg.article.steps[3].title') }}
                        </h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.image-to-jpg.article.steps[3].description')"></p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.image-to-jpg.article.steps[3].note') }}</p>
                </div>

                <!-- Step 5 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            5</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.image-to-jpg.article.steps[4].title') }}
                        </h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.image-to-jpg.article.steps[4].description')"></p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.image-to-jpg.article.steps[4].note') }}</p>
                </div>

                <!-- Step 6 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            6</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.image-to-jpg.article.steps[5].title') }}
                        </h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.image-to-jpg.article.steps[5].description')"></p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.image-to-jpg.article.steps[5].note') }}</p>
                </div>

                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mt-8">
                    <h4 class="font-bold text-green-700 dark:text-green-300">{{
                        $t('tools.image-to-jpg.article.successTitle') }}</h4>
                    <p class="text-green-600 dark:text-green-200">{{
                        $t('tools.image-to-jpg.article.successContent') }}</p>
                </div>
            </section>

            <!-- 相关工具 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.image-to-jpg.article.relatedToolsTitle') }}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Tool 1 -->
                    <a :href="$t('tools.image-to-jpg.article.relatedTools[0].url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t('tools.image-to-jpg.article.relatedTools[0].name')
                            }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.image-to-jpg.article.relatedTools[0].description') }}</p>
                    </a>

                    <!-- Tool 2 -->
                    <a :href="$t('tools.image-to-jpg.article.relatedTools[1].url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t('tools.image-to-jpg.article.relatedTools[1].name')
                            }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.image-to-jpg.article.relatedTools[1].description') }}</p>
                    </a>

                    <!-- Tool 3 -->
                    <a :href="$t('tools.image-to-jpg.article.relatedTools[2].url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t('tools.image-to-jpg.article.relatedTools[2].name')
                            }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.image-to-jpg.article.relatedTools[2].description') }}</p>
                    </a>

                    <!-- Tool 4 -->
                    <a :href="$t('tools.image-to-jpg.article.relatedTools[3].url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t('tools.image-to-jpg.article.relatedTools[3].name')
                            }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.image-to-jpg.article.relatedTools[3].description') }}</p>
                    </a>
                </div>
            </section>

            <!-- 参考资源 -->
            <section class="mb-6">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.image-to-jpg.article.referencesTitle') }}
                </h2>
                <ul class="space-y-4">
                    <!-- Reference 1 -->
                    <li class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="$t('tools.image-to-jpg.article.references[0].url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">
                            {{ $t('tools.image-to-jpg.article.references[0].name') }}
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.image-to-jpg.article.references[0].description') }}</p>
                    </li>

                    <!-- Reference 2 -->
                    <li class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="$t('tools.image-to-jpg.article.references[1].url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">
                            {{ $t('tools.image-to-jpg.article.references[1].name') }}
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.image-to-jpg.article.references[1].description') }}</p>
                    </li>

                    <!-- Reference 3 -->
                    <li class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="$t('tools.image-to-jpg.article.references[2].url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">
                            {{ $t('tools.image-to-jpg.article.references[2].name') }}
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.image-to-jpg.article.references[2].description') }}</p>
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

