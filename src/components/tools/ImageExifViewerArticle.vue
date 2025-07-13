<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mt-8 border border-gray-200 dark:border-gray-700">
    <article class="prose dark:prose-invert max-w-none">
      <h2 class="text-2xl font-bold mb-4">{{ $t('tools.image-exif-viewer.article.title') }}</h2>
      
      <!-- 功能介绍与应用场景 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.image-exif-viewer.article.intro.title') }}</h2>
      <p v-html="$t('tools.image-exif-viewer.article.intro.p1')"></p>
      <p v-html="$t('tools.image-exif-viewer.article.intro.p2')"></p>
      <p v-html="$t('tools.image-exif-viewer.article.intro.p3')"></p>
      
      <!-- 应用场景列表 -->
      <h3 class="text-lg font-medium mt-4 mb-2">{{ $t('tools.image-exif-viewer.article.useCases.title') }}</h3>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2" v-html="$t('tools.image-exif-viewer.article.useCases.case1')"></li>
        <li class="mb-2" v-html="$t('tools.image-exif-viewer.article.useCases.case2')"></li>
        <li class="mb-2" v-html="$t('tools.image-exif-viewer.article.useCases.case3')"></li>
        <li class="mb-2" v-html="$t('tools.image-exif-viewer.article.useCases.case4')"></li>
        <li class="mb-2" v-html="$t('tools.image-exif-viewer.article.useCases.case5')"></li>
      </ul>
      
      <!-- 操作指南 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.image-exif-viewer.article.tutorial.title') }}</h2>
      <p>{{ $t('tools.image-exif-viewer.article.tutorial.intro') }}</p>
      
      <div class="mb-6 mt-4 space-y-4">
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.image-exif-viewer.article.tutorial.step1.title') }}</h3>
          <p v-html="$t('tools.image-exif-viewer.article.tutorial.step1.description')"></p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.image-exif-viewer.article.tutorial.step2.title') }}</h3>
          <p v-html="$t('tools.image-exif-viewer.article.tutorial.step2.description')"></p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.image-exif-viewer.article.tutorial.step3.title') }}</h3>
          <p v-html="$t('tools.image-exif-viewer.article.tutorial.step3.description')"></p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-2">{{ $t('tools.image-exif-viewer.article.tutorial.step4.title') }}</h3>
          <p v-html="$t('tools.image-exif-viewer.article.tutorial.step4.description')"></p>
        </div>
      </div>
      
      <!-- 关于EXIF数据的详细说明 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.image-exif-viewer.article.exifDetails.title') }}</h2>
      <p v-html="$t('tools.image-exif-viewer.article.exifDetails.intro')"></p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <h4 class="font-medium mb-2">{{ $t('tools.image-exif-viewer.article.exifDetails.camera.title') }}</h4>
          <p v-html="$t('tools.image-exif-viewer.article.exifDetails.camera.description')"></p>
        </div>
        
        <div class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <h4 class="font-medium mb-2">{{ $t('tools.image-exif-viewer.article.exifDetails.exposure.title') }}</h4>
          <p v-html="$t('tools.image-exif-viewer.article.exifDetails.exposure.description')"></p>
        </div>
        
        <div class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <h4 class="font-medium mb-2">{{ $t('tools.image-exif-viewer.article.exifDetails.location.title') }}</h4>
          <p v-html="$t('tools.image-exif-viewer.article.exifDetails.location.description')"></p>
        </div>
        
        <div class="border border-gray-200 dark:border-gray-700 rounded-md p-3">
          <h4 class="font-medium mb-2">{{ $t('tools.image-exif-viewer.article.exifDetails.time.title') }}</h4>
          <p v-html="$t('tools.image-exif-viewer.article.exifDetails.time.description')"></p>
        </div>
      </div>
      
      <!-- FAQ 部分 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.image-exif-viewer.article.faq.title') }}</h2>
      <div itemscope itemtype="https://schema.org/FAQPage">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 itemprop="name" class="text-lg font-medium mb-2">{{ $t('tools.image-exif-viewer.article.faq.q1') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.image-exif-viewer.article.faq.a1')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 itemprop="name" class="text-lg font-medium mb-2">{{ $t('tools.image-exif-viewer.article.faq.q2') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.image-exif-viewer.article.faq.a2')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 itemprop="name" class="text-lg font-medium mb-2">{{ $t('tools.image-exif-viewer.article.faq.q3') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.image-exif-viewer.article.faq.a3')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 itemprop="name" class="text-lg font-medium mb-2">{{ $t('tools.image-exif-viewer.article.faq.q4') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.image-exif-viewer.article.faq.a4')"></div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h3 itemprop="name" class="text-lg font-medium mb-2">{{ $t('tools.image-exif-viewer.article.faq.q5') }}</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" v-html="$t('tools.image-exif-viewer.article.faq.a5')"></div>
          </div>
        </div>
      </div>
      
      <!-- 相关工具 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.image-exif-viewer.article.relatedTools.title') }}</h2>
      <p>{{ $t('tools.image-exif-viewer.article.relatedTools.description') }}</p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
          <a :href="$t('tools.image-exif-viewer.article.relatedTools.tool1.url')" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            {{ $t('tools.image-exif-viewer.article.relatedTools.tool1.name') }}
          </a> - {{ $t('tools.image-exif-viewer.article.relatedTools.tool1.description') }}
        </li>
        <li class="mb-2">
          <a :href="$t('tools.image-exif-viewer.article.relatedTools.tool2.url')" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            {{ $t('tools.image-exif-viewer.article.relatedTools.tool2.name') }}
          </a> - {{ $t('tools.image-exif-viewer.article.relatedTools.tool2.description') }}
        </li>
        <li class="mb-2">
          <a :href="$t('tools.image-exif-viewer.article.relatedTools.tool3.url')" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            {{ $t('tools.image-exif-viewer.article.relatedTools.tool3.name') }}
          </a> - {{ $t('tools.image-exif-viewer.article.relatedTools.tool3.description') }}
        </li>
        <li class="mb-2">
          <a :href="$t('tools.image-exif-viewer.article.relatedTools.tool4.url')" target="_blank" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            {{ $t('tools.image-exif-viewer.article.relatedTools.tool4.name') }}
          </a> - {{ $t('tools.image-exif-viewer.article.relatedTools.tool4.description') }}
        </li>
      </ul>
      
      <!-- 外部资源 -->
      <h2 class="text-xl font-semibold mt-6 mb-3">{{ $t('tools.image-exif-viewer.article.resources.title') }}</h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
          <a :href="$t('tools.image-exif-viewer.article.resources.resource1.url')" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            {{ $t('tools.image-exif-viewer.article.resources.resource1.name') }}
          </a> - {{ $t('tools.image-exif-viewer.article.resources.resource1.description') }}
        </li>
        <li class="mb-2">
          <a :href="$t('tools.image-exif-viewer.article.resources.resource2.url')" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            {{ $t('tools.image-exif-viewer.article.resources.resource2.name') }}
          </a> - {{ $t('tools.image-exif-viewer.article.resources.resource2.description') }}
        </li>
        <li class="mb-2">
          <a :href="$t('tools.image-exif-viewer.article.resources.resource3.url')" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            {{ $t('tools.image-exif-viewer.article.resources.resource3.name') }}
          </a> - {{ $t('tools.image-exif-viewer.article.resources.resource3.description') }}
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ImageExifViewerArticle'
}
</script> 