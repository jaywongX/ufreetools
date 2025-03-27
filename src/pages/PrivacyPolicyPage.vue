<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-4">{{ $t('privacyPolicy.title') }}</h1>
      <p class="text-gray-600 dark:text-gray-400">
        {{ $t('privacyPolicy.lastUpdated') }}: {{ lastUpdated }}
      </p>
    </div>

    <div class="prose dark:prose-invert max-w-none mb-8">
      <h2>{{ $t('privacyPolicy.introduction') }}</h2>
      <p>
        {{ $t('privacyPolicy.introductionText') }}
      </p>

      <h2>{{ $t('privacyPolicy.informationCollection') }}</h2>
      <p>
        {{ $t('privacyPolicy.informationCollectionText') }}
      </p>

      <h2>{{ $t('privacyPolicy.informationUse') }}</h2>
      <p>
        {{ $t('privacyPolicy.informationUseText') }}
      </p>

      <h2>{{ $t('privacyPolicy.cookies') }}</h2>
      <p>
        {{ $t('privacyPolicy.cookiesText') }}
      </p>

      <h2>{{ $t('privacyPolicy.security') }}</h2>
      <p>
        {{ $t('privacyPolicy.securityText') }}
      </p>

      <h2>{{ $t('privacyPolicy.changes') }}</h2>
      <p>
        {{ $t('privacyPolicy.changesText') }}
      </p>

      <h2>{{ $t('privacyPolicy.contact') }}</h2>
      <p>
        {{ $t('privacyPolicy.contactText') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import { useMetaInfo } from '../mixins/metaInfoMixin';

// 使用元信息钩子
const { updateMetaInfo } = useMetaInfo('privacyPolicy.title', 'privacyPolicy.introduction');

// 在组件挂载和更新时更新元信息
onMounted(() => {
  updateMetaInfo();
});

onUpdated(() => {
  updateMetaInfo();
});

const lastUpdated = ref('2025-03-15');
</script> 