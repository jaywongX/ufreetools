<template>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
        <article class="prose prose-lg max-w-none dark:prose-invert">
            <!-- 工具功能介绍 -->
            <h1 class="text-3xl font-bold mb-6">{{ $t('tools.sm2-signature-verifier.article.title') }}</h1>

            <section>
                <h2 class="text-2xl font-semibold mt-8 mb-4">{{
                    $t('tools.sm2-signature-verifier.article.introduction.title') }}</h2>
                <p v-html="$t('tools.sm2-signature-verifier.article.introduction.p1')"></p>
                <p v-html="$t('tools.sm2-signature-verifier.article.introduction.p2')"></p>
                <p v-html="$t('tools.sm2-signature-verifier.article.introduction.p3')"></p>
            </section>

            <!-- 应用场景 -->
            <section>
                <h2 class="text-2xl font-semibold mt-8 mb-4">{{
                    $t('tools.sm2-signature-verifier.article.applications.title') }}</h2>
                <p v-html="$t('tools.sm2-signature-verifier.article.applications.p1')"></p>
                <h3 class="text-xl font-medium mt-6 mb-3">{{
                    $t('tools.sm2-signature-verifier.article.applications.scenario1.title') }}</h3>
                <p v-html="$t('tools.sm2-signature-verifier.article.applications.scenario1.description')"></p>
                <h3 class="text-xl font-medium mt-6 mb-3">{{
                    $t('tools.sm2-signature-verifier.article.applications.scenario2.title') }}</h3>
                <p v-html="$t('tools.sm2-signature-verifier.article.applications.scenario2.description')"></p>
                <h3 class="text-xl font-medium mt-6 mb-3">{{
                    $t('tools.sm2-signature-verifier.article.applications.scenario3.title') }}</h3>
                <p v-html="$t('tools.sm2-signature-verifier.article.applications.scenario3.description')"></p>
            </section>

            <!-- 操作指南 -->
            <section>
                <h2 class="text-2xl font-semibold mt-8 mb-4">{{
                    $t('tools.sm2-signature-verifier.article.tutorial.title') }}</h2>
                <p v-html="$t('tools.sm2-signature-verifier.article.tutorial.intro')"></p>

                <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-4">
                    <h3 class="text-xl font-medium mb-4">{{
                        $t('tools.sm2-signature-verifier.article.tutorial.step1.title') }}</h3>
                    <p v-html="$t('tools.sm2-signature-verifier.article.tutorial.step1.description')"></p>

                    <h3 class="text-xl font-medium mt-6 mb-4">{{
                        $t('tools.sm2-signature-verifier.article.tutorial.step2.title') }}</h3>
                    <p v-html="$t('tools.sm2-signature-verifier.article.tutorial.step2.description')"></p>

                    <h3 class="text-xl font-medium mt-6 mb-4">{{
                        $t('tools.sm2-signature-verifier.article.tutorial.step3.title') }}</h3>
                    <p v-html="$t('tools.sm2-signature-verifier.article.tutorial.step3.description')"></p>

                    <h3 class="text-xl font-medium mt-6 mb-4">{{
                        $t('tools.sm2-signature-verifier.article.tutorial.step4.title') }}</h3>
                    <p v-html="$t('tools.sm2-signature-verifier.article.tutorial.step4.description')"></p>
                </div>
            </section>

            <!-- 技术规范 -->
            <section>
                <h2 class="text-2xl font-semibold mt-8 mb-4">{{
                    $t('tools.sm2-signature-verifier.article.specifications.title') }}</h2>
                <p v-html="$t('tools.sm2-signature-verifier.article.specifications.p1')"></p>
                <p v-html="$t('tools.sm2-signature-verifier.article.specifications.p2')"></p>
                <ul class="list-disc pl-6 my-4">
                    <li v-html="$t('tools.sm2-signature-verifier.article.specifications.feature1')"></li>
                    <li v-html="$t('tools.sm2-signature-verifier.article.specifications.feature2')"></li>
                    <li v-html="$t('tools.sm2-signature-verifier.article.specifications.feature3')"></li>
                    <li v-html="$t('tools.sm2-signature-verifier.article.specifications.feature4')"></li>
                    <li v-html="$t('tools.sm2-signature-verifier.article.specifications.feature5')"></li>
                    <li v-html="$t('tools.sm2-signature-verifier.article.specifications.feature6')"></li>
                </ul>
            </section>

            <!-- FAQ -->
            <section>
                <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('tools.sm2-signature-verifier.article.faq.title') }}
                </h2>

                <!-- 结构化数据标记，便于搜索引擎抓取 -->
                <div itemscope itemtype="https://schema.org/FAQPage">
                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="border-b border-gray-200 dark:border-gray-700 py-4">
                        <h3 itemprop="name" class="text-xl font-medium mb-3">{{
                            $t('tools.sm2-signature-verifier.article.faq.q1') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.sm2-signature-verifier.article.faq.a1')"></div>
                        </div>
                    </div>

                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="border-b border-gray-200 dark:border-gray-700 py-4">
                        <h3 itemprop="name" class="text-xl font-medium mb-3">{{
                            $t('tools.sm2-signature-verifier.article.faq.q2') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.sm2-signature-verifier.article.faq.a2')"></div>
                        </div>
                    </div>

                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="border-b border-gray-200 dark:border-gray-700 py-4">
                        <h3 itemprop="name" class="text-xl font-medium mb-3">{{
                            $t('tools.sm2-signature-verifier.article.faq.q3') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.sm2-signature-verifier.article.faq.a3')"></div>
                        </div>
                    </div>

                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="border-b border-gray-200 dark:border-gray-700 py-4">
                        <h3 itemprop="name" class="text-xl font-medium mb-3">{{
                            $t('tools.sm2-signature-verifier.article.faq.q4') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.sm2-signature-verifier.article.faq.a4')"></div>
                        </div>
                    </div>

                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="py-4">
                        <h3 itemprop="name" class="text-xl font-medium mb-3">{{
                            $t('tools.sm2-signature-verifier.article.faq.q5') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" v-html="$t('tools.sm2-signature-verifier.article.faq.a5')"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 相关工具 -->
            <section>
                <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('tools.sm2-signature-verifier.article.related.title')
                    }}</h2>
                <p v-html="$t('tools.sm2-signature-verifier.article.related.description')"></p>
                <ul class="list-disc pl-6 my-4">
                    <li v-html="$t('tools.sm2-signature-verifier.article.related.tool1')"></li>
                    <li v-html="$t('tools.sm2-signature-verifier.article.related.tool2')"></li>
                    <li v-html="$t('tools.sm2-signature-verifier.article.related.tool3')"></li>
                </ul>
            </section>
        </article>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>