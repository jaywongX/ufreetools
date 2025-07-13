<template>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
        <article class="prose dark:prose-invert max-w-none">
            <h2 class="text-2xl font-bold mb-4">{{ $t('tools.unified-credit-code-generator.article.title') }}</h2>

            <!-- Introduction and Core Features -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.unified-credit-code-generator.article.introTitle')
                    }}</h2>
                <div class="prose max-w-none dark:prose-invert">
                    <p v-html="$t('tools.unified-credit-code-generator.article.introPara1')"></p>
                    <p v-html="$t('tools.unified-credit-code-generator.article.introPara2')"></p>
                </div>
            </section>

            <!-- Application Scenarios -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{
                    $t('tools.unified-credit-code-generator.article.scenariosTitle') }}</h2>
                <div class="prose max-w-none dark:prose-invert">
                    <p v-html="$t('tools.unified-credit-code-generator.article.scenariosPara')"></p>
                    <ul class="list-disc pl-6 mt-4">
                        <li v-html="$t('tools.unified-credit-code-generator.article.scenario1')"></li>
                        <li v-html="$t('tools.unified-credit-code-generator.article.scenario2')"></li>
                        <li v-html="$t('tools.unified-credit-code-generator.article.scenario3')"></li>
                        <li v-html="$t('tools.unified-credit-code-generator.article.scenario4')"></li>
                        <li v-html="$t('tools.unified-credit-code-generator.article.scenario5')"></li>
                    </ul>
                </div>
            </section>

            <!-- How to Use Guide -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{
                    $t('tools.unified-credit-code-generator.article.tutorialTitle') }}</h2>
                <div class="prose max-w-none dark:prose-invert">
                    <h3 class="text-xl font-medium mb-3">{{ $t('tools.unified-credit-code-generator.article.step1Title')
                        }}</h3>
                    <p v-html="$t('tools.unified-credit-code-generator.article.step1Content')"></p>

                    <h3 class="text-xl font-medium my-3">{{ $t('tools.unified-credit-code-generator.article.step2Title')
                        }}</h3>
                    <p v-html="$t('tools.unified-credit-code-generator.article.step2Content')"></p>

                    <h3 class="text-xl font-medium my-3">{{ $t('tools.unified-credit-code-generator.article.step3Title')
                        }}</h3>
                    <p v-html="$t('tools.unified-credit-code-generator.article.step3Content')"></p>

                    <h3 class="text-xl font-medium my-3">{{ $t('tools.unified-credit-code-generator.article.step4Title')
                        }}</h3>
                    <p v-html="$t('tools.unified-credit-code-generator.article.step4Content')"></p>

                    <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
                        <p class="font-medium">{{ $t('tools.unified-credit-code-generator.article.tipTitle') }}</p>
                        <p v-html="$t('tools.unified-credit-code-generator.article.tipContent')"></p>
                    </div>
                </div>
            </section>

            <!-- FAQ Section with Schema.org Markup -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.unified-credit-code-generator.article.faqTitle') }}
                </h2>

                <div class="space-y-6" itemscope itemtype="https://schema.org/FAQPage">
                    <!-- FAQ Item 1 -->
                    <div class="border dark:border-gray-700 rounded-lg" itemscope itemprop="mainEntity"
                        itemtype="https://schema.org/Question">
                        <div class="p-4 font-medium bg-gray-50 dark:bg-gray-800 rounded-t-lg" itemprop="name">
                            {{ $t('tools.unified-credit-code-generator.article.faq1Question') }}
                        </div>
                        <div class="p-4 bg-white dark:bg-gray-700 rounded-b-lg" itemscope itemprop="acceptedAnswer"
                            itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.unified-credit-code-generator.article.faq1Answer')">
                            </div>
                        </div>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="border dark:border-gray-700 rounded-lg" itemscope itemprop="mainEntity"
                        itemtype="https://schema.org/Question">
                        <div class="p-4 font-medium bg-gray-50 dark:bg-gray-800 rounded-t-lg" itemprop="name">
                            {{ $t('tools.unified-credit-code-generator.article.faq2Question') }}
                        </div>
                        <div class="p-4 bg-white dark:bg-gray-700 rounded-b-lg" itemscope itemprop="acceptedAnswer"
                            itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.unified-credit-code-generator.article.faq2Answer')">
                            </div>
                        </div>
                    </div>

                    <!-- FAQ Item 3 -->
                    <div class="border dark:border-gray-700 rounded-lg" itemscope itemprop="mainEntity"
                        itemtype="https://schema.org/Question">
                        <div class="p-4 font-medium bg-gray-50 dark:bg-gray-800 rounded-t-lg" itemprop="name">
                            {{ $t('tools.unified-credit-code-generator.article.faq3Question') }}
                        </div>
                        <div class="p-4 bg-white dark:bg-gray-700 rounded-b-lg" itemscope itemprop="acceptedAnswer"
                            itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.unified-credit-code-generator.article.faq3Answer')">
                            </div>
                        </div>
                    </div>

                    <!-- FAQ Item 4 -->
                    <div class="border dark:border-gray-700 rounded-lg" itemscope itemprop="mainEntity"
                        itemtype="https://schema.org/Question">
                        <div class="p-4 font-medium bg-gray-50 dark:bg-gray-800 rounded-t-lg" itemprop="name">
                            {{ $t('tools.unified-credit-code-generator.article.faq4Question') }}
                        </div>
                        <div class="p-4 bg-white dark:bg-gray-700 rounded-b-lg" itemscope itemprop="acceptedAnswer"
                            itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.unified-credit-code-generator.article.faq4Answer')">
                            </div>
                        </div>
                    </div>

                    <!-- FAQ Item 5 -->
                    <div class="border dark:border-gray-700 rounded-lg" itemscope itemprop="mainEntity"
                        itemtype="https://schema.org/Question">
                        <div class="p-4 font-medium bg-gray-50 dark:bg-gray-800 rounded-t-lg" itemprop="name">
                            {{ $t('tools.unified-credit-code-generator.article.faq5Question') }}
                        </div>
                        <div class="p-4 bg-white dark:bg-gray-700 rounded-b-lg" itemscope itemprop="acceptedAnswer"
                            itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.unified-credit-code-generator.article.faq5Answer')">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Standard and References -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{
                    $t('tools.unified-credit-code-generator.article.standardsTitle') }}</h2>
                <div class="prose max-w-none dark:prose-invert">
                    <p v-html="$t('tools.unified-credit-code-generator.article.standardsPara')"></p>
                    <ul class="list-disc pl-6 mt-4">
                        <li v-html="$t('tools.unified-credit-code-generator.article.standard1')"></li>
                        <li v-html="$t('tools.unified-credit-code-generator.article.standard2')"></li>
                        <li v-html="$t('tools.unified-credit-code-generator.article.standard3')"></li>
                    </ul>
                </div>
            </section>

            <!-- Related Tools -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{
                    $t('tools.unified-credit-code-generator.article.relatedToolsTitle') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a href="https://www.ufreetools.com/tool/id-number-generator" target="_blank"
                        class="block p-4 border rounded-lg hover:shadow-md dark:border-gray-700 transition duration-300">
                        <h3 class="font-medium mb-2">{{
                            $t('tools.unified-credit-code-generator.article.relatedTool1Title') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.unified-credit-code-generator.article.relatedTool1Desc') }}</p>
                    </a>
                    <a href="https://www.ufreetools.com/tool/hash-calculator" target="_blank"
                        class="block p-4 border rounded-lg hover:shadow-md dark:border-gray-700 transition duration-300">
                        <h3 class="font-medium mb-2">{{
                            $t('tools.unified-credit-code-generator.article.relatedTool2Title') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.unified-credit-code-generator.article.relatedTool2Desc') }}</p>
                    </a>
                    <a href="https://www.ufreetools.com/tool/password-generator" target="_blank"
                        class="block p-4 border rounded-lg hover:shadow-md dark:border-gray-700 transition duration-300">
                        <h3 class="font-medium mb-2">{{
                            $t('tools.unified-credit-code-generator.article.relatedTool3Title') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">{{
                            $t('tools.unified-credit-code-generator.article.relatedTool3Desc') }}</p>
                    </a>
                </div>
            </section>
        </article>
    </div>
</template>

<script setup>
// No additional script required
</script>