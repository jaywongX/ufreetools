<template>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
            {{ $t('tools.reduce-image-size-in-kb-mb.article.title') }}
        </h2>

        <!-- 工具功能介绍应用场景 -->
        <section class="mb-10">
            <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {{ $t('tools.reduce-image-size-in-kb-mb.article.functionTitle') }}
            </h2>
            <div class="prose dark:prose-invert max-w-none">
                <p v-html="$t('tools.reduce-image-size-in-kb-mb.article.intro')"></p>

                <div class="my-6">
                    <img src="/images/reduce-image-size-in-kb-mb.png" alt="Image Size Reducer Tool"
                        class="rounded-lg shadow-md w-full max-w-2xl mx-auto" />
                </div>

                <h3 class="text-lg font-medium mt-6 mb-3">
                    {{ $t('tools.reduce-image-size-in-kb-mb.article.useCasesTitle') }}
                </h3>
                <p v-html="$t('tools.reduce-image-size-in-kb-mb.article.useCases')"></p>

                <h3 class="text-lg font-medium mt-6 mb-3">
                    {{ $t('tools.reduce-image-size-in-kb-mb.article.benefitsTitle') }}
                </h3>
                <ul class="list-disc pl-6 space-y-2">
                    <li v-html="$t('tools.reduce-image-size-in-kb-mb.article.benefit1')"></li>
                    <li v-html="$t('tools.reduce-image-size-in-kb-mb.article.benefit2')"></li>
                    <li v-html="$t('tools.reduce-image-size-in-kb-mb.article.benefit3')"></li>
                    <li v-html="$t('tools.reduce-image-size-in-kb-mb.article.benefit4')"></li>
                </ul>
            </div>
        </section>

        <!-- 操作指南或教程 -->
        <section class="mb-10">
            <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {{ $t('tools.reduce-image-size-in-kb-mb.article.tutorialTitle') }}
            </h2>
            <div class="prose dark:prose-invert max-w-none">
                <ol class="list-decimal pl-6 space-y-4">
                    <li>
                        <strong>{{ $t('tools.reduce-image-size-in-kb-mb.article.step1Title') }}</strong>
                        <p v-html="$t('tools.reduce-image-size-in-kb-mb.article.step1')"></p>
                    </li>
                    <li>
                        <strong>{{ $t('tools.reduce-image-size-in-kb-mb.article.step2Title') }}</strong>
                        <p v-html="$t('tools.reduce-image-size-in-kb-mb.article.step2')"></p>
                    </li>
                    <li>
                        <strong>{{ $t('tools.reduce-image-size-in-kb-mb.article.step3Title') }}</strong>
                        <p v-html="$t('tools.reduce-image-size-in-kb-mb.article.step3')"></p>
                    </li>
                    <li>
                        <strong>{{ $t('tools.reduce-image-size-in-kb-mb.article.step4Title') }}</strong>
                        <p v-html="$t('tools.reduce-image-size-in-kb-mb.article.step4')"></p>
                    </li>
                    <li>
                        <strong>{{ $t('tools.reduce-image-size-in-kb-mb.article.step5Title') }}</strong>
                        <p v-html="$t('tools.reduce-image-size-in-kb-mb.article.step5')"></p>
                    </li>
                </ol>

                <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
                    <p class="text-blue-700 dark:text-blue-300">
                        {{ $t('tools.reduce-image-size-in-kb-mb.article.tip') }}
                    </p>
                </div>
            </div>
        </section>

        <!-- 用户常见问题解答（FAQ） -->
        <section class="mb-10">
            <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {{ $t('tools.reduce-image-size-in-kb-mb.article.faqTitle') }}
            </h2>

            <!-- 结构化数据通过script标签注入到head中，在onMounted钩子中处理 -->

            <div class="space-y-6">
                <div v-for="i in 5" :key="i" class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                    <h3 class="font-medium text-lg text-gray-900 dark:text-white mb-2">
                        {{ $t(`tools.reduce-image-size-in-kb-mb.article.q${i}`) }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300"
                        v-html="$t(`tools.reduce-image-size-in-kb-mb.article.a${i}`)"></p>
                </div>
            </div>
        </section>

        <!-- 相关工具链接 -->
        <section class="mb-10">
            <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {{ $t('tools.reduce-image-size-in-kb-mb.article.relatedToolsTitle') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="https://www.ufreetools.com/tool/resize-to-1024x576-image" target="_blank"
                    class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow">
                    <h3 class="font-medium text-blue-600 dark:text-blue-400">{{
                        $t('tools.reduce-image-size-in-kb-mb.article.relatedTool1') }}</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-1">{{
                        $t('tools.reduce-image-size-in-kb-mb.article.relatedTool1Desc') }}</p>
                </a>
                <a href="https://www.ufreetools.com/tool/image-converter" target="_blank"
                    class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow">
                    <h3 class="font-medium text-blue-600 dark:text-blue-400">{{
                        $t('tools.reduce-image-size-in-kb-mb.article.relatedTool2') }}</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-1">{{
                        $t('tools.reduce-image-size-in-kb-mb.article.relatedTool2Desc') }}</p>
                </a>
            </div>
        </section>

        <!-- 外部资源 -->
        <section class="mb-10">
            <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {{ $t('tools.reduce-image-size-in-kb-mb.article.resourcesTitle') }}
            </h2>
            <ul class="list-disc pl-6 space-y-2">
                <li>
                    <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization"
                        target="_blank" rel="noopener noreferrer"
                        class="text-blue-600 dark:text-blue-400 hover:underline">
                        {{ $t('tools.reduce-image-size-in-kb-mb.article.resource1') }}
                    </a>
                </li>
                <li>
                    <a href="https://web.dev/fast/#optimize-your-images" target="_blank" rel="noopener noreferrer"
                        class="text-blue-600 dark:text-blue-400 hover:underline">
                        {{ $t('tools.reduce-image-size-in-kb-mb.article.resource2') }}
                    </a>
                </li>
            </ul>
        </section>

        <!-- 结论 -->
        <section>
            <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {{ $t('tools.reduce-image-size-in-kb-mb.article.conclusionTitle') }}
            </h2>
            <div class="prose dark:prose-invert max-w-none">
                <p v-html="$t('tools.reduce-image-size-in-kb-mb.article.conclusion')"></p>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, useSlots } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// 在组件挂载时添加结构化数据
onMounted(() => {
    // 创建结构化数据
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": t('tools.reduce-image-size-in-kb-mb.article.q1'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('tools.reduce-image-size-in-kb-mb.article.a1')
                }
            },
            {
                "@type": "Question",
                "name": t('tools.reduce-image-size-in-kb-mb.article.q2'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('tools.reduce-image-size-in-kb-mb.article.a2')
                }
            },
            {
                "@type": "Question",
                "name": t('tools.reduce-image-size-in-kb-mb.article.q3'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('tools.reduce-image-size-in-kb-mb.article.a3')
                }
            },
            {
                "@type": "Question",
                "name": t('tools.reduce-image-size-in-kb-mb.article.q4'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('tools.reduce-image-size-in-kb-mb.article.a4')
                }
            },
            {
                "@type": "Question",
                "name": t('tools.reduce-image-size-in-kb-mb.article.q5'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('tools.reduce-image-size-in-kb-mb.article.a5')
                }
            }
        ]
    };

    // 创建script元素并添加到head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // 清理函数：组件卸载时移除script标签
    return () => {
        document.head.removeChild(script);
    };
});
</script>