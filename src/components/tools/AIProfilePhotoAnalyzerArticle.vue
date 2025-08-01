<template>
    <div class="mt-8 prose prose-sm md:prose max-w-none dark:prose-invert">
        <h2>{{ $t('tools.ai-profile-photo-analyzer.article.title') }}</h2>
        <p>{{ $t('tools.ai-profile-photo-analyzer.article.intro') }}</p>

        <h3>{{ $t('tools.ai-profile-photo-analyzer.article.whatIsTitle') }}</h3>
        <p>{{ $t('tools.ai-profile-photo-analyzer.article.whatIsContent') }}</p>

        <div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                <h4 class="text-lg font-medium mb-2">{{ $t('tools.ai-profile-photo-analyzer.article.keyFeaturesTitle') }}</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>{{ $t('tools.ai-profile-photo-analyzer.article.feature1') }}</li>
                    <li>{{ $t('tools.ai-profile-photo-analyzer.article.feature2') }}</li>
                    <li>{{ $t('tools.ai-profile-photo-analyzer.article.feature3') }}</li>
                    <li>{{ $t('tools.ai-profile-photo-analyzer.article.feature4') }}</li>
                    <li>{{ $t('tools.ai-profile-photo-analyzer.article.feature5') }}</li>
                </ul>
            </div>
            <div class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
                <h4 class="text-lg font-medium mb-2">{{ $t('tools.ai-profile-photo-analyzer.article.tipsTitle') }}</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>{{ $t('tools.ai-profile-photo-analyzer.article.tip1') }}</li>
                    <li>{{ $t('tools.ai-profile-photo-analyzer.article.tip2') }}</li>
                    <li>{{ $t('tools.ai-profile-photo-analyzer.article.tip3') }}</li>
                    <li>{{ $t('tools.ai-profile-photo-analyzer.article.tip4') }}</li>
                </ul>
            </div>
        </div>

        <h3>{{ $t('tools.ai-profile-photo-analyzer.article.useCasesTitle') }}</h3>
        <ul>
            <li><strong>{{ $t('tools.ai-profile-photo-analyzer.article.useCase1Title') }}</strong> - {{ $t('tools.ai-profile-photo-analyzer.article.useCase1Content') }}</li>
            <li><strong>{{ $t('tools.ai-profile-photo-analyzer.article.useCase2Title') }}</strong> - {{ $t('tools.ai-profile-photo-analyzer.article.useCase2Content') }}</li>
            <li><strong>{{ $t('tools.ai-profile-photo-analyzer.article.useCase3Title') }}</strong> - {{ $t('tools.ai-profile-photo-analyzer.article.useCase3Content') }}</li>
            <li><strong>{{ $t('tools.ai-profile-photo-analyzer.article.useCase4Title') }}</strong> - {{ $t('tools.ai-profile-photo-analyzer.article.useCase4Content') }}</li>
        </ul>

        <h3>{{ $t('tools.ai-profile-photo-analyzer.article.howToUseTitle') }}</h3>
        <ol class="list-decimal list-inside space-y-3">
            <li>
                <strong>{{ $t('tools.ai-profile-photo-analyzer.article.step1Title') }}</strong>
                <p class="ml-6">{{ $t('tools.ai-profile-photo-analyzer.article.step1Content') }}</p>
            </li>
            <li>
                <strong>{{ $t('tools.ai-profile-photo-analyzer.article.step2Title') }}</strong>
                <p class="ml-6">{{ $t('tools.ai-profile-photo-analyzer.article.step2Content') }}</p>
            </li>
            <li>
                <strong>{{ $t('tools.ai-profile-photo-analyzer.article.step3Title') }}</strong>
                <p class="ml-6">{{ $t('tools.ai-profile-photo-analyzer.article.step3Content') }}</p>
            </li>
            <li>
                <strong>{{ $t('tools.ai-profile-photo-analyzer.article.step4Title') }}</strong>
                <p class="ml-6">{{ $t('tools.ai-profile-photo-analyzer.article.step4Content') }}</p>
            </li>
        </ol>

        <h3>{{ $t('tools.ai-profile-photo-analyzer.article.faqTitle') }}</h3>
        <div class="space-y-4">
            <div>
                <h4 class="font-medium">{{ $t('tools.ai-profile-photo-analyzer.article.faq1Question') }}</h4>
                <p>{{ $t('tools.ai-profile-photo-analyzer.article.faq1Answer') }}</p>
            </div>
            <div>
                <h4 class="font-medium">{{ $t('tools.ai-profile-photo-analyzer.article.faq2Question') }}</h4>
                <p>{{ $t('tools.ai-profile-photo-analyzer.article.faq2Answer') }}</p>
            </div>
            <div>
                <h4 class="font-medium">{{ $t('tools.ai-profile-photo-analyzer.article.faq3Question') }}</h4>
                <p>{{ $t('tools.ai-profile-photo-analyzer.article.faq3Answer') }}</p>
            </div>
            <div>
                <h4 class="font-medium">{{ $t('tools.ai-profile-photo-analyzer.article.faq4Question') }}</h4>
                <p>{{ $t('tools.ai-profile-photo-analyzer.article.faq4Answer') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>