<template>
  <div class="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
    <article class="prose dark:prose-invert max-w-none">
      <!-- 标题 -->
      <h2 class="text-3xl font-bold mb-6">{{ $t('tools.imgly-remove-image-background.article.title') }}</h2>

      <!-- 工具功能介绍与应用场景 -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.imgly-remove-image-background.article.introTitle') }}</h2>
        <p class="mb-4" v-html="$t('tools.imgly-remove-image-background.article.introParagraph1')"></p>
        <p class="mb-4" v-html="$t('tools.imgly-remove-image-background.article.introParagraph2')"></p>

        <!-- 对比图容器 -->
        <div class="image-comparison-container mb-4">
          <div class="image-wrapper original">
            <img src="/images/landing-illustration-dark.png" alt="Original Image" class="comparison-img" />
            <div class="label">{{ $t('tools.imgly-remove-image-background.article.originalImageLabel') }}</div>
          </div>
          <div class="image-wrapper result">
            <img src="/images/landing-illustration-dark_no_bg.png" alt="Image with Background Removed" class="comparison-img" />
            <div class="label">{{ $t('tools.imgly-remove-image-background.article.resultImageLabel') }}</div>
          </div>
        </div>
        <!-- 说明文字 -->
        <p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6">{{ $t('tools.imgly-remove-image-background.article.comparisonNote') }}</p>

        <h3 class="text-xl font-semibold mb-3">{{ $t('tools.imgly-remove-image-background.article.scenarioTitle') }}</h3>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li v-html="$t('tools.imgly-remove-image-background.article.scenario1')"></li>
          <li v-html="$t('tools.imgly-remove-image-background.article.scenario2')"></li>
          <li v-html="$t('tools.imgly-remove-image-background.article.scenario3')"></li>
          <li v-html="$t('tools.imgly-remove-image-background.article.scenario4')"></li>
        </ul>
      </section>

      <!-- FAQ -->
      <section class="mb-10" itemscope itemtype="https://schema.org/FAQPage">
        <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.imgly-remove-image-background.article.faqTitle') }}</h2>
        <div class="space-y-6">
          <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-semibold mb-2" itemprop="name">{{ $t('tools.imgly-remove-image-background.article.faq1.q') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.imgly-remove-image-background.article.faq1.a')"></div>
            </div>
          </div>
          <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-semibold mb-2" itemprop="name">{{ $t('tools.imgly-remove-image-background.article.faq2.q') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.imgly-remove-image-background.article.faq2.a')"></div>
            </div>
          </div>
          <div class="border-b pb-4" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-lg font-semibold mb-2" itemprop="name">{{ $t('tools.imgly-remove-image-background.article.faq3.q') }}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text" v-html="$t('tools.imgly-remove-image-background.article.faq3.a')"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 操作指南 -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.imgly-remove-image-background.article.guideTitle') }}</h2>
        <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div class="flex items-center mb-2">
            <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">1</div>
            <h3 class="text-xl font-semibold" v-html="$t('tools.imgly-remove-image-background.article.step1.title')"></h3>
          </div>
          <p class="mb-2 ml-11" v-html="$t('tools.imgly-remove-image-background.article.step1.desc')"></p>
          <p class="text-sm text-gray-600 dark:text-gray-400 italic ml-11">{{ $t('tools.imgly-remove-image-background.article.step1.note') }}</p>
        </div>
        <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div class="flex items-center mb-2">
            <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">2</div>
            <h3 class="text-xl font-semibold" v-html="$t('tools.imgly-remove-image-background.article.step2.title')"></h3>
          </div>
          <p class="mb-2 ml-11" v-html="$t('tools.imgly-remove-image-background.article.step2.desc')"></p>
        </div>
        <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div class="flex items-center mb-2">
            <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">3</div>
            <h3 class="text-xl font-semibold" v-html="$t('tools.imgly-remove-image-background.article.step3.title')"></h3>
          </div>
          <p class="mb-2 ml-11" v-html="$t('tools.imgly-remove-image-background.article.step3.desc')"></p>
        </div>
        <div class="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div class="flex items-center mb-2">
            <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">4</div>
            <h3 class="text-xl font-semibold" v-html="$t('tools.imgly-remove-image-background.article.step4.title')"></h3>
          </div>
          <p class="mb-2 ml-11" v-html="$t('tools.imgly-remove-image-background.article.step4.desc')"></p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 mt-8">
          <h4 class="font-bold text-green-700 dark:text-green-300">{{ $t('tools.imgly-remove-image-background.article.guideSuccessTitle') }}</h4>
          <p class="text-green-600 dark:text-green-200" v-html="$t('tools.imgly-remove-image-background.article.guideSuccessContent')"></p>
        </div>
        <p class="mt-4" v-html="$t('tools.imgly-remove-image-background.article.guideTips')"></p>
      </section>

      <!-- 相关工具 -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-6">{{ $t('tools.imgly-remove-image-background.article.relatedTitle') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a :href="$t('tools.imgly-remove-image-background.article.relatedTool1.url')" target="_blank" rel="noopener noreferrer"
            class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <h3 class="font-semibold mb-2">{{ $t('tools.imgly-remove-image-background.article.relatedTool1.name') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.imgly-remove-image-background.article.relatedTool1.desc') }}</p>
          </a>
          <a :href="$t('tools.imgly-remove-image-background.article.relatedTool2.url')" target="_blank" rel="noopener noreferrer"
            class="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <h3 class="font-semibold mb-2">{{ $t('tools.imgly-remove-image-background.article.relatedTool2.name') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.imgly-remove-image-background.article.relatedTool2.desc') }}</p>
          </a>
        </div>
      </section>

      <!-- 参考资源 -->
      <section class="mb-6">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('tools.imgly-remove-image-background.article.referencesTitle') }}</h2>
        <ul class="space-y-4">
          <li class="border-l-4 border-gray-300 pl-4 py-1">
            <a :href="$t('tools.imgly-remove-image-background.article.reference1.url')" target="_blank" rel="noopener noreferrer" class="font-medium hover:text-blue-600">
              {{ $t('tools.imgly-remove-image-background.article.reference1.name') }}
            </a>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.imgly-remove-image-background.article.reference1.desc') }}</p>
          </li>
          <li class="border-l-4 border-gray-300 pl-4 py-1">
            <a :href="$t('tools.imgly-remove-image-background.article.reference2.url')" target="_blank" rel="noopener noreferrer" class="font-medium hover:text-blue-600">
              {{ $t('tools.imgly-remove-image-background.article.reference2.name') }}
            </a>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.imgly-remove-image-background.article.reference2.desc') }}</p>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
/* 对比图容器 - 使用 Flexbox 并排显示 */
.image-comparison-container {
  display: flex;
  flex-wrap: wrap; /* 允许在小屏幕上换行 */
  gap: 1rem; /* 图片容器之间的间距 */
  justify-content: center; /* 居中对齐 */
}

/* 单个图片包装器 */
.image-wrapper {
  position: relative;
  flex: 1 1 45%; /* 响应式：初始占45%宽度 */
  min-width: 250px; /* 最小宽度，防过度压缩 */
  border-radius: 12px;
  overflow: hidden; /* 隐藏溢出的图片和标签 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background-color: #f0f0f0; /* 给原始图片一个背景色以示区分 */
}

/* 结果图片容器背景设为透明或格子纹 */
.image-wrapper.result {
   background-color: transparent;
   /* 如果需要格子纹背景，可以取消注释下面的代码并注释上面的 transparent */
   /*
   background-image:
     linear-gradient(45deg, #ccc 25%, transparent 25%),
     linear-gradient(-45deg, #ccc 25%, transparent 25%),
     linear-gradient(45deg, transparent 75%, #ccc 75%),
     linear-gradient(-45deg, transparent 75%, #ccc 75%);
   background-size: 20px 20px;
   background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
   */
}


/* 对比图片样式 */
.comparison-img {
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.3s ease; /* 可选：悬停效果 */
}

/* 图片标签 */
.label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
}

/* 在小屏幕上堆叠显示 */
@media (max-width: 768px) {
  .image-comparison-container {
    flex-direction: column; /* 垂直排列 */
  }
  .image-wrapper {
    flex: 1 1 100%; /* 宽度100% */
  }
}

/* 原有样式保持不变 */
.article-img {
  max-width: 100%;
  border-radius: 12px;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
</style>