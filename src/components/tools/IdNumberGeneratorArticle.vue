<template>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
        <article class="prose dark:prose-invert max-w-none">
            <h1 class="text-2xl font-bold mb-4">{{ $t('tools.id-number-generator.article.introduction.title') }}</h1>
            <section class="mb-12">
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                    {{ $t('tools.id-number-generator.article.introduction.p1') }}
                </p>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                    {{ $t('tools.id-number-generator.article.introduction.p2') }}
                </p>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                    {{ $t('tools.id-number-generator.article.introduction.p3') }}
                </p>

                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md mt-6">
                    <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                        {{ $t('tools.id-number-generator.article.introduction.structureTitle') }}
                    </h3>
                    <p class="text-sm text-blue-600 dark:text-blue-400 mb-2">
                        {{ $t('tools.id-number-generator.article.introduction.structureDesc') }}
                    </p>
                    <div class="mt-2 flex flex-wrap gap-2">
                        <div
                            class="bg-blue-100 dark:bg-blue-800/30 px-2 py-1 rounded text-xs text-blue-700 dark:text-blue-300">
                            <span class="font-bold">XXXXXX</span> - {{ $t('tools.id-number-generator.regionCode') }}
                        </div>
                        <div
                            class="bg-blue-100 dark:bg-blue-800/30 px-2 py-1 rounded text-xs text-blue-700 dark:text-blue-300">
                            <span class="font-bold">YYYYMMDD</span> - {{ $t('tools.id-number-generator.birthDate') }}
                        </div>
                        <div
                            class="bg-blue-100 dark:bg-blue-800/30 px-2 py-1 rounded text-xs text-blue-700 dark:text-blue-300">
                            <span class="font-bold">XXX</span> - {{ $t('tools.id-number-generator.sequenceCode') }}
                        </div>
                        <div
                            class="bg-blue-100 dark:bg-blue-800/30 px-2 py-1 rounded text-xs text-blue-700 dark:text-blue-300">
                            <span class="font-bold">X</span> - {{ $t('tools.id-number-generator.checkDigit') }}
                        </div>
                    </div>
                </div>
            </section>

            <!-- 应用场景 -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {{ $t('tools.id-number-generator.article.useCases.title') }}
                </h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {{ $t('tools.id-number-generator.article.useCases.case1.title') }}
                        </h3>
                        <p class="text-gray-700 dark:text-gray-300">
                            {{ $t('tools.id-number-generator.article.useCases.case1.description') }}
                        </p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {{ $t('tools.id-number-generator.article.useCases.case2.title') }}
                        </h3>
                        <p class="text-gray-700 dark:text-gray-300">
                            {{ $t('tools.id-number-generator.article.useCases.case2.description') }}
                        </p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {{ $t('tools.id-number-generator.article.useCases.case3.title') }}
                        </h3>
                        <p class="text-gray-700 dark:text-gray-300">
                            {{ $t('tools.id-number-generator.article.useCases.case3.description') }}
                        </p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {{ $t('tools.id-number-generator.article.useCases.case4.title') }}
                        </h3>
                        <p class="text-gray-700 dark:text-gray-300">
                            {{ $t('tools.id-number-generator.article.useCases.case4.description') }}
                        </p>
                    </div>
                </div>
            </section>

            <!-- 操作指南 -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {{ $t('tools.id-number-generator.article.guide.title') }}
                </h2>
                <div class="space-y-6">
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <div
                                class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                                1
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                {{ $t('tools.id-number-generator.article.guide.step1.title') }}
                            </h3>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 ml-11">
                            {{ $t('tools.id-number-generator.article.guide.step1.description') }}
                        </p>
                    </div>

                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <div
                                class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                                2
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                {{ $t('tools.id-number-generator.article.guide.step2.title') }}
                            </h3>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 ml-11">
                            {{ $t('tools.id-number-generator.article.guide.step2.description') }}
                        </p>
                    </div>

                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <div
                                class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                                3
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                {{ $t('tools.id-number-generator.article.guide.step3.title') }}
                            </h3>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 ml-11">
                            {{ $t('tools.id-number-generator.article.guide.step3.description') }}
                        </p>
                    </div>

                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <div class="flex items-center mb-3">
                            <div
                                class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-3">
                                4
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                {{ $t('tools.id-number-generator.article.guide.step4.title') }}
                            </h3>
                        </div>
                        <p class="text-gray-700 dark:text-gray-300 ml-11">
                            {{ $t('tools.id-number-generator.article.guide.step4.description') }}
                        </p>
                    </div>
                </div>

                <div class="mt-8">
                    <p class="text-gray-700 dark:text-gray-300">
                        {{ $t('tools.id-number-generator.article.guide.tip') }}
                    </p>
                    <p class="text-gray-700 dark:text-gray-300 mt-2">
                        {{ $t('tools.id-number-generator.article.guide.additionalTip') }}
                        <a href="https://www.ufreetools.com/tool/hash-calculator" target="_blank"
                            class="text-primary hover:underline">
                            {{ $t('tools.id-number-generator.article.guide.hashCalculatorLink') }}
                        </a>
                    </p>
                </div>
            </section>

            <!-- 常见问题 FAQ -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {{ $t('tools.id-number-generator.article.faq.title') }}
                </h2>

                <div itemscope itemtype="https://schema.org/FAQPage" class="space-y-4">
                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 itemprop="name" class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {{ $t('tools.id-number-generator.article.faq.q1') }}
                        </h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" class="text-gray-700 dark:text-gray-300">
                                <p>{{ $t('tools.id-number-generator.article.faq.a1') }}</p>
                            </div>
                        </div>
                    </div>

                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 itemprop="name" class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {{ $t('tools.id-number-generator.article.faq.q2') }}
                        </h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" class="text-gray-700 dark:text-gray-300">
                                <p>{{ $t('tools.id-number-generator.article.faq.a2') }}</p>
                            </div>
                        </div>
                    </div>

                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 itemprop="name" class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {{ $t('tools.id-number-generator.article.faq.q3') }}
                        </h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" class="text-gray-700 dark:text-gray-300">
                                <p>{{ $t('tools.id-number-generator.article.faq.a3') }}</p>
                            </div>
                        </div>
                    </div>

                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 itemprop="name" class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {{ $t('tools.id-number-generator.article.faq.q4') }}
                        </h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" class="text-gray-700 dark:text-gray-300">
                                <p>{{ $t('tools.id-number-generator.article.faq.a4') }}</p>
                            </div>
                        </div>
                    </div>

                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
                        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 itemprop="name" class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {{ $t('tools.id-number-generator.article.faq.q5') }}
                        </h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text" class="text-gray-700 dark:text-gray-300">
                                <p>{{ $t('tools.id-number-generator.article.faq.a5') }}</p>
                                <p class="mt-2">
                                    <a href="https://www.mps.gov.cn" target="_blank" rel="noopener noreferrer"
                                        class="text-primary hover:underline">
                                        {{ $t('tools.id-number-generator.article.faq.officialSource') }}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 相关资源 -->
            <section class="mb-12">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {{ $t('tools.id-number-generator.article.resources.title') }}
                </h2>
                <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                        <a href="https://www.ufreetools.com/tool/password-generator" target="_blank"
                            class="text-primary hover:underline">
                            {{ $t('tools.id-number-generator.article.resources.passwordGenerator') }}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ufreetools.com/tool/word-shuffler" target="_blank"
                            class="text-primary hover:underline">
                            {{ $t('tools.id-number-generator.article.resources.wordShuffler') }}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ufreetools.com/tool/hash-calculator" target="_blank"
                            class="text-primary hover:underline">
                            {{ $t('tools.id-number-generator.article.resources.hashCalculator') }}
                        </a>
                    </li>
                    <li>
                        <a href="https://zh.wikipedia.org/wiki/中华人民共和国居民身份证" target="_blank" rel="noopener noreferrer"
                            class="text-primary hover:underline">
                            {{ $t('tools.id-number-generator.article.resources.wikipediaLink') }}
                        </a>
                    </li>
                </ul>
            </section>

            <!-- 结论 -->
            <section>
                <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {{ $t('tools.id-number-generator.article.conclusion.title') }}
                </h2>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                    {{ $t('tools.id-number-generator.article.conclusion.p1') }}
                </p>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                    {{ $t('tools.id-number-generator.article.conclusion.p2') }}
                </p>
                <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-md border-l-4 border-primary mt-6">
                    <p class="text-gray-700 dark:text-gray-300 italic">
                        {{ $t('tools.id-number-generator.article.conclusion.disclaimer') }}
                    </p>
                </div>
            </section>
        </article>
    </div>
</template>

<script setup>
// Article component for Chinese ID Number Generator
</script>