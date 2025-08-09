<template>
    <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <article class="prose dark:prose-invert max-w-none">
            <h2 class="text-3xl font-bold mb-6">{{ $t('tools.ai-multi-face-tagger.article.title') }}</h2>

            <!-- Tool functionality introduction -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.ai-multi-face-tagger.article.whatIsTitle') }}</h2>
                <p class="mb-4" v-html="$t('tools.ai-multi-face-tagger.article.intro')"></p>

                <h3 class="text-xl font-semibold mb-3">{{ $t('tools.ai-multi-face-tagger.article.howItWorksTitle') }}</h3>
                <p class="mb-4" v-html="$t('tools.ai-multi-face-tagger.article.howItWorksContent')"></p>

                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                    <h4 class="font-bold text-blue-700 dark:text-blue-300">{{
                        $t('tools.ai-multi-face-tagger.article.tipTitle') }}</h4>
                    <p class="text-blue-600 dark:text-blue-200">{{ $t('tools.ai-multi-face-tagger.article.tipContent') }}
                    </p>
                </div>
            </section>

            <!-- Key features -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.ai-multi-face-tagger.article.featuresTitle') }}</h2>
                <ul class="list-disc pl-6 mb-6 space-y-2">
                    <li>{{ $t('tools.ai-multi-face-tagger.article.features[0]') }}</li>
                    <li>{{ $t('tools.ai-multi-face-tagger.article.features[1]') }}</li>
                    <li>{{ $t('tools.ai-multi-face-tagger.article.features[2]') }}</li>
                    <li>{{ $t('tools.ai-multi-face-tagger.article.features[3]') }}</li>
                    <li>{{ $t('tools.ai-multi-face-tagger.article.features[4]') }}</li>
                    <li>{{ $t('tools.ai-multi-face-tagger.article.features[5]') }}</li>
                </ul>
            </section>

            <!-- Use cases -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.ai-multi-face-tagger.article.useCasesTitle') }}</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                        <h3 class="text-lg font-semibold mb-2">{{ $t('tools.ai-multi-face-tagger.article.useCase1Title') }}</h3>
                        <p>{{ $t('tools.ai-multi-face-tagger.article.useCase1Content') }}</p>
                    </div>
                    
                    <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                        <h3 class="text-lg font-semibold mb-2">{{ $t('tools.ai-multi-face-tagger.article.useCase2Title') }}</h3>
                        <p>{{ $t('tools.ai-multi-face-tagger.article.useCase2Content') }}</p>
                    </div>
                    
                    <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                        <h3 class="text-lg font-semibold mb-2">{{ $t('tools.ai-multi-face-tagger.article.useCase3Title') }}</h3>
                        <p>{{ $t('tools.ai-multi-face-tagger.article.useCase3Content') }}</p>
                    </div>
                    
                    <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                        <h3 class="text-lg font-semibold mb-2">{{ $t('tools.ai-multi-face-tagger.article.useCase4Title') }}</h3>
                        <p>{{ $t('tools.ai-multi-face-tagger.article.useCase4Content') }}</p>
                    </div>
                </div>
            </section>

            <!-- FAQ section -->
            <section class="mb-10" itemscope itemtype="https://schema.org/FAQPage">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.ai-multi-face-tagger.article.faqTitle') }}</h2>

                <div class="space-y-6">
                    <!-- FAQ Item 1 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.ai-multi-face-tagger.article.faqs[0].question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.ai-multi-face-tagger.article.faqs[0].answer')"></div>
                        </div>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.ai-multi-face-tagger.article.faqs[1].question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.ai-multi-face-tagger.article.faqs[1].answer')"></div>
                        </div>
                    </div>

                    <!-- FAQ Item 3 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.ai-multi-face-tagger.article.faqs[2].question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.ai-multi-face-tagger.article.faqs[2].answer')"></div>
                        </div>
                    </div>

                    <!-- FAQ Item 4 -->
                    <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <h3 class="text-lg font-semibold mb-2" itemprop="name">{{
                            $t('tools.ai-multi-face-tagger.article.faqs[3].question') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.ai-multi-face-tagger.article.faqs[3].answer')"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tutorial section -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.ai-multi-face-tagger.article.tutorialTitle') }}</h2>

                <!-- Step 1 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            1</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.ai-multi-face-tagger.article.steps[0].title') }}
                        </h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.ai-multi-face-tagger.article.steps[0].description')"></p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.ai-multi-face-tagger.article.steps[0].note') }}</p>
                </div>

                <!-- Step 2 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            2</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.ai-multi-face-tagger.article.steps[1].title') }}
                        </h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.ai-multi-face-tagger.article.steps[1].description')"></p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.ai-multi-face-tagger.article.steps[1].note') }}</p>
                </div>

                <!-- Step 3 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            3</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.ai-multi-face-tagger.article.steps[2].title') }}
                        </h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.ai-multi-face-tagger.article.steps[2].description')"></p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.ai-multi-face-tagger.article.steps[2].note') }}</p>
                </div>

                <!-- Step 4 -->
                <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div
                            class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                            4</div>
                        <h3 class="text-xl font-semibold">{{ $t('tools.ai-multi-face-tagger.article.steps[3].title') }}
                        </h3>
                    </div>
                    <p class="mb-2 ml-11" v-html="$t('tools.ai-multi-face-tagger.article.steps[3].description')"></p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{
                        $t('tools.ai-multi-face-tagger.article.steps[3].note') }}</p>
                </div>

                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mt-8">
                    <h4 class="font-bold text-green-700 dark:text-green-300">{{
                        $t('tools.ai-multi-face-tagger.article.successTitle') }}</h4>
                    <p class="text-green-600 dark:text-green-200">{{
                        $t('tools.ai-multi-face-tagger.article.successContent') }}</p>
                </div>
            </section>

            <!-- Related tools -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.ai-multi-face-tagger.article.relatedToolsTitle') }}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Tool 1 -->
                    <a :href="$t('tools.ai-multi-face-tagger.article.relatedTools[0].url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t('tools.ai-multi-face-tagger.article.relatedTools[0].name')
                            }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.ai-multi-face-tagger.article.relatedTools[0].description') }}</p>
                    </a>

                    <!-- Tool 2 -->
                    <a :href="$t('tools.ai-multi-face-tagger.article.relatedTools[1].url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t('tools.ai-multi-face-tagger.article.relatedTools[1].name')
                            }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.ai-multi-face-tagger.article.relatedTools[1].description') }}</p>
                    </a>

                    <!-- Tool 3 -->
                    <a :href="$t('tools.ai-multi-face-tagger.article.relatedTools[2].url')" target="_blank"
                        rel="noopener noreferrer"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <h3 class="font-semibold mb-2">{{ $t('tools.ai-multi-face-tagger.article.relatedTools[2].name')
                            }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.ai-multi-face-tagger.article.relatedTools[2].description') }}</p>
                    </a>
                </div>
            </section>

            <!-- Technical details -->
            <section class="mb-6">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.ai-multi-face-tagger.article.techDetailsTitle') }}
                </h2>
                <p class="mb-4">{{ $t('tools.ai-multi-face-tagger.article.techDetailsContent') }}</p>
                <p class="mb-4">{{ $t('tools.ai-multi-face-tagger.article.privacyNote') }}</p>
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