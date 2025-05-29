<template>
    <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <article class="prose dark:prose-invert max-w-none">
            <!-- 文章标题 -->
            <h1 class="text-3xl font-bold mb-6">{{ $t('tools.base64-hex-converter.article.title') }}</h1>

            <!-- 工具功能介绍 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.base64-hex-converter.article.introduction.title')
                    }}</h2>
                <div class="prose dark:prose-invert max-w-none">
                    <p class="mb-4" v-html="$t('tools.base64-hex-converter.article.introduction.paragraph1')"></p>
                    <p class="mb-4" v-html="$t('tools.base64-hex-converter.article.introduction.paragraph2')"></p>
                    <p class="mb-4" v-html="$t('tools.base64-hex-converter.article.introduction.paragraph3')"></p>
                </div>
            </section>

            <!-- 应用场景 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.base64-hex-converter.article.useCases.title') }}
                </h2>
                <div class="prose dark:prose-invert max-w-none">
                    <h3 class="text-xl font-medium mb-3">{{
                        $t('tools.base64-hex-converter.article.useCases.webDevelopment.title') }}</h3>
                    <p class="mb-4" v-html="$t('tools.base64-hex-converter.article.useCases.webDevelopment.content')">
                    </p>

                    <h3 class="text-xl font-medium mb-3">{{
                        $t('tools.base64-hex-converter.article.useCases.cryptography.title') }}</h3>
                    <p class="mb-4" v-html="$t('tools.base64-hex-converter.article.useCases.cryptography.content')"></p>

                    <h3 class="text-xl font-medium mb-3">{{
                        $t('tools.base64-hex-converter.article.useCases.dataAnalysis.title') }}</h3>
                    <p class="mb-4" v-html="$t('tools.base64-hex-converter.article.useCases.dataAnalysis.content')"></p>

                    <h3 class="text-xl font-medium mb-3">{{
                        $t('tools.base64-hex-converter.article.useCases.debugging.title') }}</h3>
                    <p class="mb-4" v-html="$t('tools.base64-hex-converter.article.useCases.debugging.content')"></p>
                </div>
            </section>

            <!-- 操作指南 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.base64-hex-converter.article.tutorial.title') }}
                </h2>
                <div class="prose dark:prose-invert max-w-none">
                    <h3 class="text-xl font-medium mb-3">{{
                        $t('tools.base64-hex-converter.article.tutorial.basicUsage.title') }}</h3>

                    <div class="mb-6">
                        <h4 class="text-lg font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.tutorial.step1.title') }}</h4>
                        <p class="mb-2" v-html="$t('tools.base64-hex-converter.article.tutorial.step1.content')"></p>
                    </div>

                    <div class="mb-6">
                        <h4 class="text-lg font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.tutorial.step2.title') }}</h4>
                        <p class="mb-2" v-html="$t('tools.base64-hex-converter.article.tutorial.step2.content')"></p>
                    </div>

                    <div class="mb-6">
                        <h4 class="text-lg font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.tutorial.step3.title') }}</h4>
                        <p class="mb-2" v-html="$t('tools.base64-hex-converter.article.tutorial.step3.content')"></p>
                    </div>

                    <div class="mb-6">
                        <h4 class="text-lg font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.tutorial.step4.title') }}</h4>
                        <p class="mb-2" v-html="$t('tools.base64-hex-converter.article.tutorial.step4.content')"></p>
                    </div>

                    <h3 class="text-xl font-medium mb-3">{{
                        $t('tools.base64-hex-converter.article.tutorial.advancedOptions.title') }}</h3>
                    <p class="mb-4" v-html="$t('tools.base64-hex-converter.article.tutorial.advancedOptions.content')">
                    </p>

                    <h3 class="text-xl font-medium mb-3">{{
                        $t('tools.base64-hex-converter.article.tutorial.fileConversion.title') }}</h3>
                    <p class="mb-4" v-html="$t('tools.base64-hex-converter.article.tutorial.fileConversion.content')">
                    </p>
                </div>
            </section>

            <!-- FAQ 部分 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.base64-hex-converter.article.faq.title') }}</h2>

                <!-- 使用 Schema.org FAQPage 结构化数据 -->
                <div itemscope itemtype="https://schema.org/FAQPage" class="space-y-6">
                    <!-- FAQ 问题 1 -->
                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="border-b pb-4 dark:border-gray-700">
                        <h3 itemprop="name" class="text-xl font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.faq.q1') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" class="prose dark:prose-invert max-w-none"
                                v-html="$t('tools.base64-hex-converter.article.faq.a1')"></div>
                        </div>
                    </div>

                    <!-- FAQ 问题 2 -->
                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="border-b pb-4 dark:border-gray-700">
                        <h3 itemprop="name" class="text-xl font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.faq.q2') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" class="prose dark:prose-invert max-w-none"
                                v-html="$t('tools.base64-hex-converter.article.faq.a2')"></div>
                        </div>
                    </div>

                    <!-- FAQ 问题 3 -->
                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="border-b pb-4 dark:border-gray-700">
                        <h3 itemprop="name" class="text-xl font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.faq.q3') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" class="prose dark:prose-invert max-w-none"
                                v-html="$t('tools.base64-hex-converter.article.faq.a3')"></div>
                        </div>
                    </div>

                    <!-- FAQ 问题 4 -->
                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="border-b pb-4 dark:border-gray-700">
                        <h3 itemprop="name" class="text-xl font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.faq.q4') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" class="prose dark:prose-invert max-w-none"
                                v-html="$t('tools.base64-hex-converter.article.faq.a4')"></div>
                        </div>
                    </div>

                    <!-- FAQ 问题 5 -->
                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="border-b pb-4 dark:border-gray-700">
                        <h3 itemprop="name" class="text-xl font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.faq.q5') }}</h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" class="prose dark:prose-invert max-w-none"
                                v-html="$t('tools.base64-hex-converter.article.faq.a5')"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 相关工具 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.base64-hex-converter.article.relatedTools.title')
                    }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://www.ufreetools.com/tool/base64-encoder-decoder" target="_blank"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition dark:border-gray-700">
                        <h3 class="font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.relatedTools.tool1.title') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300">{{
                            $t('tools.base64-hex-converter.article.relatedTools.tool1.description') }}</p>
                    </a>

                    <a href="https://www.ufreetools.com/tool/hex-and-calculator" target="_blank"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition dark:border-gray-700">
                        <h3 class="font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.relatedTools.tool2.title') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300">{{
                            $t('tools.base64-hex-converter.article.relatedTools.tool2.description') }}</p>
                    </a>

                    <a href="https://www.ufreetools.com/tool/hash-calculator" target="_blank"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition dark:border-gray-700">
                        <h3 class="font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.relatedTools.tool3.title') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300">{{
                            $t('tools.base64-hex-converter.article.relatedTools.tool3.description') }}</p>
                    </a>

                    <a href="https://www.ufreetools.com/tool/hexadecimal-case-converter" target="_blank"
                        class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition dark:border-gray-700">
                        <h3 class="font-medium mb-2">{{
                            $t('tools.base64-hex-converter.article.relatedTools.tool4.title') }}</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300">{{
                            $t('tools.base64-hex-converter.article.relatedTools.tool4.description') }}</p>
                    </a>
                </div>
            </section>

            <!-- 外部参考资源 -->
            <section class="mb-10">
                <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.base64-hex-converter.article.references.title') }}
                </h2>
                <ul class="space-y-2">
                    <li>
                        <a href="https://datatracker.ietf.org/doc/html/rfc4648" target="_blank"
                            rel="noopener noreferrer" class="text-blue-600 hover:underline dark:text-blue-400">
                            {{ $t('tools.base64-hex-converter.article.references.ref1') }}
                        </a>
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/API/btoa" target="_blank"
                            rel="noopener noreferrer" class="text-blue-600 hover:underline dark:text-blue-400">
                            {{ $t('tools.base64-hex-converter.article.references.ref2') }}
                        </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Base64" target="_blank" rel="noopener noreferrer"
                            class="text-blue-600 hover:underline dark:text-blue-400">
                            {{ $t('tools.base64-hex-converter.article.references.ref3') }}
                        </a>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Hexadecimal" target="_blank" rel="noopener noreferrer"
                            class="text-blue-600 hover:underline dark:text-blue-400">
                            {{ $t('tools.base64-hex-converter.article.references.ref4') }}
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    </div>
</template>

<script setup>
// No additional script needed for this component
</script>