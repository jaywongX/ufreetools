<template>
  <div class="article-container prose dark:prose-invert max-w-none lg:mt-8 mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.title') }}</h2>

    <!-- 工具说明（从原组件迁移过来） -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.about.title') }}</h2>
      <p>{{ $t('tools.gaussian-projection.about.description') }}</p>
      
      <h3 class="mt-4">{{ $t('tools.gaussian-projection.about.forwardTitle') }}</h3>
      <p>{{ $t('tools.gaussian-projection.about.forwardDescription') }}</p>
      
      <h3 class="mt-4">{{ $t('tools.gaussian-projection.about.inverseTitle') }}</h3>
      <p>{{ $t('tools.gaussian-projection.about.inverseDescription') }}</p>
      
      <h3 class="mt-4">{{ $t('tools.gaussian-projection.about.parametersTitle') }}</h3>
      <ul>
        <li><strong>{{ $t('tools.gaussian-projection.about.ellipsoidParam') }}</strong> - {{ $t('tools.gaussian-projection.about.ellipsoidDescription') }}</li>
        <li><strong>{{ $t('tools.gaussian-projection.about.projectionParam') }}</strong> - {{ $t('tools.gaussian-projection.about.projectionDescription') }}</li>
      </ul>
    </div>

    <!-- 公式说明（从showFormulaExplanation方法迁移） -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.formulaExplanation') }}</h2>
      <div v-html="$t('tools.gaussian-projection.formulaContent')"></div>
    </div>

    <!-- 操作指南（从原组件迁移） -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.guide.title') }}</h2>
      
      <h3 class="mt-4">{{ $t('tools.gaussian-projection.guide.forwardTitle') }}</h3>
      <ol class="list-decimal pl-6">
        <li>{{ $t('tools.gaussian-projection.guide.step1') }}</li>
        <li>{{ $t('tools.gaussian-projection.guide.step2') }}</li>
        <li>{{ $t('tools.gaussian-projection.guide.step3') }}</li>
        <li>{{ $t('tools.gaussian-projection.guide.step4') }}</li>
      </ol>
      
      <h3 class="mt-4">{{ $t('tools.gaussian-projection.guide.inverseTitle') }}</h3>
      <ol class="list-decimal pl-6">
        <li>{{ $t('tools.gaussian-projection.guide.step5') }}</li>
        <li>{{ $t('tools.gaussian-projection.guide.step6') }}</li>
        <li>{{ $t('tools.gaussian-projection.guide.step7') }}</li>
      </ol>
      
      <h3 class="mt-4">{{ $t('tools.gaussian-projection.guide.batchTitle') }}</h3>
      <ol class="list-decimal pl-6">
        <li>{{ $t('tools.gaussian-projection.guide.step8') }}</li>
        <li>{{ $t('tools.gaussian-projection.guide.step9') }}</li>
        <li>{{ $t('tools.gaussian-projection.guide.step10') }}</li>
      </ol>
      
      <h3 class="mt-4">{{ $t('tools.gaussian-projection.guide.mapTitle') }}</h3>
      <ol class="list-decimal pl-6">
        <li>{{ $t('tools.gaussian-projection.guide.step11') }}</li>
        <li>{{ $t('tools.gaussian-projection.guide.step12') }}</li>
        <li>{{ $t('tools.gaussian-projection.guide.step13') }}</li>
      </ol>
    </div>

    <!-- Introduction and Core Features -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.introTitle') }}</h2>
      <p v-html="$t('tools.gaussian-projection.article.introPara1')"></p>
      <p v-html="$t('tools.gaussian-projection.article.introPara2')"></p>
    </div>

    <!-- Application Scenarios -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.scenariosTitle') }}</h2>
      <ul>
        <li v-html="$t('tools.gaussian-projection.article.scenario1')"></li>
        <li v-html="$t('tools.gaussian-projection.article.scenario2')"></li>
        <li v-html="$t('tools.gaussian-projection.article.scenario3')"></li>
        <li v-html="$t('tools.gaussian-projection.article.scenario4')"></li>
        <li v-html="$t('tools.gaussian-projection.article.scenario5')"></li>
      </ul>
      <p v-html="$t('tools.gaussian-projection.article.scenariosConclusion')"></p>
    </div>

    <!-- FAQ Section with Schema.org markup -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.faqTitle') }}</h2>
      
      <div itemscope itemtype="https://schema.org/FAQPage">
        <!-- FAQ Item 1 -->
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-6">
          <h3 itemprop="name" class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.faq1q') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.gaussian-projection.article.faq1a')"></div>
          </div>
        </div>

        <!-- FAQ Item 2 -->
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-6">
          <h3 itemprop="name" class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.faq2q') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.gaussian-projection.article.faq2a')"></div>
          </div>
        </div>

        <!-- FAQ Item 3 -->
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-6">
          <h3 itemprop="name" class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.faq3q') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.gaussian-projection.article.faq3a')"></div>
          </div>
        </div>

        <!-- FAQ Item 4 -->
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-6">
          <h3 itemprop="name" class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.faq4q') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.gaussian-projection.article.faq4a')"></div>
          </div>
        </div>

        <!-- FAQ Item 5 -->
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-6">
          <h3 itemprop="name" class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.faq5q') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.gaussian-projection.article.faq5a')"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step-by-Step Tutorial -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.tutorialTitle') }}</h2>
      
      <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.forwardCalcTitle') }}</h3>
      <ol class="mb-6">
        <li class="mb-2" v-html="$t('tools.gaussian-projection.article.step1')"></li>
        <li class="mb-2" v-html="$t('tools.gaussian-projection.article.step2')"></li>
        <li class="mb-2" v-html="$t('tools.gaussian-projection.article.step3')"></li>
        <li class="mb-2" v-html="$t('tools.gaussian-projection.article.step4')"></li>
      </ol>

      <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.inverseCalcTitle') }}</h3>
      <ol class="mb-6">
        <li class="mb-2" v-html="$t('tools.gaussian-projection.article.step5')"></li>
        <li class="mb-2" v-html="$t('tools.gaussian-projection.article.step6')"></li>
        <li class="mb-2" v-html="$t('tools.gaussian-projection.article.step7')"></li>
        <li class="mb-2" v-html="$t('tools.gaussian-projection.article.step8')"></li>
      </ol>

      <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.batchTitle') }}</h3>
      <ol class="mb-6">
        <li class="mb-2" v-html="$t('tools.gaussian-projection.article.step9')"></li>
        <li class="mb-2" v-html="$t('tools.gaussian-projection.article.step10')"></li>
        <li class="mb-2" v-html="$t('tools.gaussian-projection.article.step11')"></li>
      </ol>

      <p v-html="$t('tools.gaussian-projection.article.tutorialConclusion')"></p>
    </div>

    <!-- Related Tools Section -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.relatedToolsTitle') }}</h2>
      <ul>
        <li class="mb-2">
          <a href="https://www.ufreetools.com/tool/coordinate-converter" target="_blank" class="text-primary hover:underline">
            {{ $t('tools.gaussian-projection.article.relatedTool1') }}
          </a>
          <span> - {{ $t('tools.gaussian-projection.article.relatedTool1Desc') }}</span>
        </li>
        <li class="mb-2">
          <a href="https://www.ufreetools.com/tool/gps-track-replay" target="_blank" class="text-primary hover:underline">
            {{ $t('tools.gaussian-projection.article.relatedTool2') }}
          </a>
          <span> - {{ $t('tools.gaussian-projection.article.relatedTool2Desc') }}</span>
        </li>
      </ul>
    </div>

    <!-- External References Section -->
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.gaussian-projection.article.referencesTitle') }}</h2>
      <ul>
        <li class="mb-2">
          <a href="https://earth-info.nga.mil/index.php?dir=wgs84&action=wgs84" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            {{ $t('tools.gaussian-projection.article.reference1') }}
          </a>
        </li>
        <li class="mb-2">
          <a href="https://en.wikipedia.org/wiki/Transverse_Mercator_projection" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            {{ $t('tools.gaussian-projection.article.reference2') }}
          </a>
        </li>
        <li class="mb-2">
          <a href="https://www.ngs.noaa.gov/PUBS_LIB/ManualNOS_NGS5.pdf" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
            {{ $t('tools.gaussian-projection.article.reference3') }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// No additional script needed
</script> 