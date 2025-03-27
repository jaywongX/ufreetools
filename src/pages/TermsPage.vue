<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">{{ $t('terms.title') }}</h1>
      <p class="text-gray-600 dark:text-gray-400">
        {{ $t('terms.lastUpdated') }}: {{ lastUpdated }}
      </p>
    </div>

    <div class="prose dark:prose-invert max-w-none mb-8">
      <h2>{{ $t('terms.acceptance') }}</h2>
      <p>
        {{ $t('terms.acceptanceText') }}
      </p>

      <h2>{{ $t('terms.description') }}</h2>
      <p>
        {{ $t('terms.descriptionText') }}
      </p>

      <h2>{{ $t('terms.conduct') }}</h2>
      <p>
        {{ $t('terms.conductText') }}
      </p>

      <h2>{{ $t('terms.intellectual') }}</h2>
      <p>
        {{ $t('terms.intellectualText') }}
      </p>

      <h2>{{ $t('terms.limitation') }}</h2>
      <p>
        {{ $t('terms.limitationText') }}
      </p>

      <h2>{{ $t('terms.changes') }}</h2>
      <p>
        {{ $t('terms.changesText') }}
      </p>

      <h2>{{ $t('terms.contact') }}</h2>
      <p>
        {{ $t('terms.contactText') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { useMetaInfo } from '../mixins/metaInfoMixin'

// 使用元信息钩子，指定服务条款页面的标题和描述翻译键
const { updateMetaInfo } = useMetaInfo('terms.title', 'terms.acceptance')

// 在组件挂载和更新时更新元信息
onMounted(() => {
  updateMetaInfo()
})

onUpdated(() => {
  updateMetaInfo()
})

const lastUpdated = ref('2025-03-15')
</script> 