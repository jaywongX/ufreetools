<template>
  <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
    <h3 class="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{{ $t('tools.diagram-examples.title') }}</h3>
    
    <div class="space-y-6">
      <div v-for="(example, index) in localizedExamples" :key="index" class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div class="bg-gray-50 dark:bg-gray-750 p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h4 class="font-medium text-gray-700 dark:text-gray-300">{{ $t(`tools.diagram-examples.examples.${example.titleKey}`) }}</h4>
          <button 
            @click="copyExample(example.code)"
            class="text-primary dark:text-primary-light hover:underline text-sm flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            </svg>
            {{ $t('tools.diagram-examples.actions.copyCode') }}
          </button>
        </div>
        <div class="p-4">
          <pre class="bg-gray-50 dark:bg-gray-700 p-3 rounded text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">{{ example.code }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const examples = ref([
  {
    titleKey: 'softwareDevelopment'
  },
  {
    titleKey: 'projectManagement'
  },
  {
    titleKey: 'userRegistration'
  }
])

// 使用计算属性获取本地化的图表代码
const localizedExamples = computed(() => {
  return examples.value.map(example => {
    return {
      ...example,
      code: t(`tools.diagram-examples.exampleCodes.${example.titleKey}`)
    };
  });
});

// 复制示例代码到剪贴板
async function copyExample(code) {
  try {
    await navigator.clipboard.writeText(code)
    alert(t('tools.diagram-examples.messages.copied'))
  } catch (error) {
    console.error('复制失败:', error)
    alert(t('tools.diagram-examples.messages.copyFailed'))
  }
}
</script> 