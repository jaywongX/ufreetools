<template>
    <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <article class="prose dark:prose-invert max-w-none">
            <h1 class="text-3xl font-bold mb-6">{{ $t('tools.text-to-handwriting-converter.article.title') }}</h1>

            <!-- 工具功能介绍应用场景 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{
                    $t('tools.text-to-handwriting-converter.article.functionTitle') }}</h2>
                <p class="mb-4" v-html="$t('tools.text-to-handwriting-converter.article.intro')"></p>

                <h3 class="text-xl font-semibold mb-3">{{
                    $t('tools.text-to-handwriting-converter.article.useCasesTitle') }}</h3>
                <ul class="list-disc pl-6 mb-6 space-y-2">
                    <li>{{ $t('tools.text-to-handwriting-converter.article.useCase1') }}</li>
                    <li>{{ $t('tools.text-to-handwriting-converter.article.useCase2') }}</li>
                    <li>{{ $t('tools.text-to-handwriting-converter.article.useCase3') }}</li>
                    <li>{{ $t('tools.text-to-handwriting-converter.article.useCase4') }}</li>
                    <li>{{ $t('tools.text-to-handwriting-converter.article.useCase5') }}</li>
                    <li>{{ $t('tools.text-to-handwriting-converter.article.useCase6') }}</li>
                    <li>{{ $t('tools.text-to-handwriting-converter.article.useCase7') }}</li>
                    <li>{{ $t('tools.text-to-handwriting-converter.article.useCase8') }}</li>
                    <li>{{ $t('tools.text-to-handwriting-converter.article.useCase9') }}</li>
                    <li>{{ $t('tools.text-to-handwriting-converter.article.useCase10') }}</li>
                </ul>

                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                    <h4 class="font-bold text-blue-700 dark:text-blue-300">{{
                        $t('tools.text-to-handwriting-converter.article.tipTitle') }}</h4>
                    <p class="text-blue-600 dark:text-blue-200">{{
                        $t('tools.text-to-handwriting-converter.article.tipContent') }}</p>
                </div>

                <p class="mb-4" v-html="$t('tools.text-to-handwriting-converter.article.conclusion')"></p>
            </section>

            <!-- 用户常见问题解答（FAQ） -->
            <section class="mb-10" itemscope itemtype="https://schema.org/FAQPage">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.text-to-handwriting-converter.article.faqTitle') }}
                </h2>

                <div class="space-y-6">
                    <!-- FAQ 1 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.text-to-handwriting-converter.article.faq1Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.text-to-handwriting-converter.article.faq1Answer')">
                            </div>
                        </div>
                    </div>

                    <!-- FAQ 2 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.text-to-handwriting-converter.article.faq2Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.text-to-handwriting-converter.article.faq2Answer')">
                            </div>
                        </div>
                    </div>

                    <!-- FAQ 3 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.text-to-handwriting-converter.article.faq3Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.text-to-handwriting-converter.article.faq3Answer')">
                            </div>
                        </div>
                    </div>

                    <!-- FAQ 4 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.text-to-handwriting-converter.article.faq4Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.text-to-handwriting-converter.article.faq4Answer')">
                            </div>
                        </div>
                    </div>

                    <!-- FAQ 5 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.text-to-handwriting-converter.article.faq5Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.text-to-handwriting-converter.article.faq5Answer')">
                            </div>
                        </div>
                    </div>

                    <!-- FAQ 6 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.text-to-handwriting-converter.article.faq6Question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.text-to-handwriting-converter.article.faq6Answer')">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 操作指南或教程 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{
                    $t('tools.text-to-handwriting-converter.article.tutorialTitle') }}</h2>

                <!-- 步骤 1 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            1</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.text-to-handwriting-converter.article.step1Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.text-to-handwriting-converter.article.step1Description')">
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.text-to-handwriting-converter.article.step1Note') }}</p>
                </div>

                <!-- 步骤 2 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            2</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.text-to-handwriting-converter.article.step2Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.text-to-handwriting-converter.article.step2Description')">
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.text-to-handwriting-converter.article.step2Note') }}</p>
                </div>

                <!-- 步骤 3 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            3</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.text-to-handwriting-converter.article.step3Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.text-to-handwriting-converter.article.step3Description')">
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.text-to-handwriting-converter.article.step3Note') }}</p>
                </div>

                <!-- 步骤 4 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            4</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.text-to-handwriting-converter.article.step4Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.text-to-handwriting-converter.article.step4Description')">
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.text-to-handwriting-converter.article.step4Note') }}</p>
                </div>

                <!-- 步骤 5 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            5</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.text-to-handwriting-converter.article.step5Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.text-to-handwriting-converter.article.step5Description')">
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.text-to-handwriting-converter.article.step5Note') }}</p>
                </div>

                <!-- 步骤 6 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            6</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.text-to-handwriting-converter.article.step6Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.text-to-handwriting-converter.article.step6Description')">
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.text-to-handwriting-converter.article.step6Note') }}</p>
                </div>

                <!-- 步骤 7 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            7</div>
                        <h3 class="text-xl font-semibold">{{
                            $t('tools.text-to-handwriting-converter.article.step7Title') }}</h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.text-to-handwriting-converter.article.step7Description')">
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.text-to-handwriting-converter.article.step7Note') }}</p>
                </div>

                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mt-8">
                    <h4 class="font-bold text-green-700 dark:text-green-300">{{
                        $t('tools.text-to-handwriting-converter.article.successTitle') }}</h4>
                    <p class="text-green-600 dark:text-green-200">{{
                        $t('tools.text-to-handwriting-converter.article.successContent') }}</p>
                </div>
            </section>

            <!-- 相关工具 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{
                    $t('tools.text-to-handwriting-converter.article.relatedToolsTitle') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- 工具 1 -->
                    <a :href="$t('tools.text-to-handwriting-converter.article.relatedTool1Url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{
                            $t('tools.text-to-handwriting-converter.article.relatedTool1Name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.text-to-handwriting-converter.article.relatedTool1Description') }}</p>
                    </a>

                    <!-- 工具 2 -->
                    <a :href="$t('tools.text-to-handwriting-converter.article.relatedTool2Url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{
                            $t('tools.text-to-handwriting-converter.article.relatedTool2Name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.text-to-handwriting-converter.article.relatedTool2Description') }}</p>
                    </a>

                    <!-- 工具 3 -->
                    <a :href="$t('tools.text-to-handwriting-converter.article.relatedTool3Url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{
                            $t('tools.text-to-handwriting-converter.article.relatedTool3Name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.text-to-handwriting-converter.article.relatedTool3Description') }}</p>
                    </a>

                    <!-- 工具 4 -->
                    <a :href="$t('tools.text-to-handwriting-converter.article.relatedTool4Url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{
                            $t('tools.text-to-handwriting-converter.article.relatedTool4Name') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.text-to-handwriting-converter.article.relatedTool4Description') }}</p>
                    </a>
                </div>
            </section>

            <!-- 参考资源 -->
            <section class="mb-6">
                <h2 class="text-2xl font-semibold mb-4">{{
                    $t('tools.text-to-handwriting-converter.article.referencesTitle') }}</h2>
                <ul class="space-y-4">
                    <li class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="$t('tools.text-to-handwriting-converter.article.reference1Url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">
                            {{ $t('tools.text-to-handwriting-converter.article.reference1Name') }}
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.text-to-handwriting-converter.article.reference1Description') }}</p>
                    </li>
                    <li class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="$t('tools.text-to-handwriting-converter.article.reference2Url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">
                            {{ $t('tools.text-to-handwriting-converter.article.reference2Name') }}
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.text-to-handwriting-converter.article.reference2Description') }}</p>
                    </li>
                    <li class="border-l-4 border-gray-300 pl-4 py-1">
                        <a :href="$t('tools.text-to-handwriting-converter.article.reference3Url')" target="_blank"
                            rel="noopener noreferrer" class="font-medium hover:text-blue-600">
                            {{ $t('tools.text-to-handwriting-converter.article.reference3Name') }}
                        </a>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.text-to-handwriting-converter.article.reference3Description') }}</p>
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
