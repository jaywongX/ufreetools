<template>
  <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
    <article class="prose dark:prose-invert max-w-none">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2">
        {{ $t('tools.instagram-post-generator.article.title') }}
    </h2>

    <div class="article-content space-y-6 text-gray-700 dark:text-gray-300">
        <h3 class="text-xl font-semibold mt-8" id="what-is-instagram-post-generator">{{ $t('tools.instagram-post-generator.documentation.whatIs.title') }}</h3>
        <p>{{ $t('tools.instagram-post-generator.documentation.whatIs.paragraph1') }}</p>
        <p>{{ $t('tools.instagram-post-generator.documentation.whatIs.paragraph2') }}</p>

        <h3 class="text-xl font-semibold mt-8" id="why-use-instagram-post-generator">{{ $t('tools.instagram-post-generator.documentation.whyUse.title') }}</h3>
        <p>{{ $t('tools.instagram-post-generator.documentation.whyUse.paragraph1') }}</p>
        <p>{{ $t('tools.instagram-post-generator.documentation.whyUse.paragraph2') }}</p>
        
        <ul>
            <li>
            <strong>{{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.contentPlanning.title') }}:</strong> 
            {{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.contentPlanning.description') }}
            </li>
            <li>
            <strong>{{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.educational.title') }}:</strong> 
            {{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.educational.description') }}
            </li>
            <li>
            <strong>{{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.marketing.title') }}:</strong> 
            {{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.marketing.description') }}
            </li>
            <li>
            <strong>{{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.experimentation.title') }}:</strong> 
            {{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.experimentation.description') }}
            </li>
            <li>
            <strong>{{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.consistency.title') }}:</strong> 
            {{ $t('tools.instagram-post-generator.documentation.whyUse.reasons.consistency.description') }}
            </li>
        </ul>

        <h3 class="text-xl font-semibold mt-8" id="key-features">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.title') }}</h3>
        <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.intro') }}</p>
        
        <h4 class="text-lg font-medium mt-6">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.title') }}</h4>
        <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.description') }}</p>
        <ul>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.username.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.username.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.verification.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.verification.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.location.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.location.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.timing.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.profile.items.timing.description') }}</li>
        </ul>
        
        <h4 class="text-lg font-medium mt-6">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.title') }}</h4>
        <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.description') }}</p>
        <ul>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.textOnly.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.textOnly.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.imageOnly.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.imageOnly.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.mixed.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.mixed.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.richText.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.richText.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.hashtags.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.content.items.hashtags.description') }}</li>
        </ul>
        
        <h4 class="text-lg font-medium mt-6">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.title') }}</h4>
        <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.description') }}</p>
        <ul>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.typography.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.typography.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.background.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.background.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.gradient.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.gradient.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.pattern.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.pattern.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.format.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.design.items.format.description') }}</li>
        </ul>
        
        <h4 class="text-lg font-medium mt-6">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.title') }}</h4>
        <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.description') }}</p>
        <ul>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.likes.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.likes.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.comments.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.comments.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.views.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.views.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.interactions.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.interactions.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.story.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.story.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.tags.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.tags.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.sponsored.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.engagement.items.sponsored.description') }}</li>
        </ul>
        
        <h4 class="text-lg font-medium mt-6">{{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.title') }}</h4>
        <p>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.description') }}</p>
        <ul>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.png.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.png.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.jpg.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.jpg.description') }}</li>
            <li><strong>{{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.clipboard.title') }}:</strong> {{ $t('tools.instagram-post-generator.documentation.keyFeatures.export.items.clipboard.description') }}</li>
        </ul>

        <!-- Enhanced Step-by-Step How-to Guide -->
        <h3 class="text-xl font-semibold mt-8" id="how-to-use">{{ $t('tools.instagram-post-generator.documentation.howTo.title') }}</h3>
        <p>{{ $t('tools.instagram-post-generator.documentation.howTo.description') }}</p>
        
        <!-- Step 1: Profile Setup -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.step1') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.step2') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.step3') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.step4') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.profileSetup.step5') }}</li>
            </ol>
        </div>
        
        <!-- Step 2: Content Selection -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.step1') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.step2') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.step3') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.step4') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.contentSelection.step5') }}</li>
            </ol>
        </div>
        
        <!-- Step 3: Styling Content -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step1') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step2') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step3') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step4') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step5') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step6') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step7') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.stylingContent.step8') }}</li>
            </ol>
        </div>
        
        <!-- Step 4: Post Format -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.postFormat.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.postFormat.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.postFormat.step1') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.postFormat.step2') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.postFormat.step3') }}</li>
            </ol>
        </div>
        
        <!-- Step 5: Engagement Settings -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step1') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step2') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step3') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step4') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step5') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step6') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step7') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step8') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step9') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step10') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.engagementSettings.step11') }}</li>
            </ol>
        </div>
        
        <!-- Step 6: Comment Simulation -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.step1') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.step2') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.step3') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.commentSimulation.step4') }}</li>
            </ol>
        </div>
        
        <!-- Step 7: Preview and Export -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.title') }}</h4>
            <p class="mb-2">{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.description') }}</p>
            <ol class="list-decimal pl-5 space-y-1">
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step1') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step2') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step3') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step4') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step5') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step6') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step7') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.howTo.previewExport.step8') }}</li>
            </ol>
        </div>
        
        <!-- Enhanced Pro Tips Section -->
        <h3 class="text-xl font-semibold mt-8" id="pro-tips">{{ $t('tools.instagram-post-generator.documentation.tips.title') }}</h3>
        <p>{{ $t('tools.instagram-post-generator.documentation.tips.description') }}</p>
        
        <div class="mt-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.title') }}</h4>
            <ul class="list-disc pl-5 space-y-1 mt-2">
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.tip1') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.tip2') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.tip3') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.tip4') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.contentStrategy.tip5') }}</li>
            </ul>
        </div>
        
        <div class="mt-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.title') }}</h4>
            <ul class="list-disc pl-5 space-y-1 mt-2">
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.tip1') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.tip2') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.tip3') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.tip4') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.visualDesign.tip5') }}</li>
            </ul>
        </div>
        
        <div class="mt-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.title') }}</h4>
            <ul class="list-disc pl-5 space-y-1 mt-2">
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.tip1') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.tip2') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.tip3') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.tip4') }}</li>
            <li>{{ $t('tools.instagram-post-generator.documentation.tips.engagementOptimization.tip5') }}</li>
            </ul>
        </div>
        
        <!-- Enhanced FAQ Section -->
        <h3 class="text-xl font-semibold mt-8" id="faq">{{ $t('tools.instagram-post-generator.documentation.faq.title') }}</h3>
        
        <div class="space-y-4 mt-4">
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question1') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer1') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question2') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer2') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question3') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer3') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question4') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer4') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question5') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer5') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question6') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer6') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question7') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer7') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question8') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer8') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question9') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer9') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question10') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer10') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question11') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer11') }}</p>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 class="text-lg font-medium">{{ $t('tools.instagram-post-generator.documentation.faq.question12') }}</h4>
            <p class="mt-2">{{ $t('tools.instagram-post-generator.documentation.faq.answer12') }}</p>
            </div>
        </div>
        
        <h3 class="text-xl font-semibold mt-8" id="conclusion">{{ $t('tools.instagram-post-generator.documentation.conclusion.title') }}</h3>
        <div>
            <p class="mt-4">{{ $t('tools.instagram-post-generator.documentation.conclusion.paragraph1') }}</p>
            <p class="mt-4">{{ $t('tools.instagram-post-generator.documentation.conclusion.paragraph2') }}</p>
            <p class="mt-4">{{ $t('tools.instagram-post-generator.documentation.conclusion.paragraph3') }}</p>
            <p class="mt-4">{{ $t('tools.instagram-post-generator.documentation.conclusion.paragraph4') }}</p>
        </div>
    </div>
    </article>
  </div>
</template>