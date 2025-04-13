<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.uuid-generator.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.uuid-generator.description') }}
      </p>
      
      <!-- 配置选项 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.uuid-generator.options.version') }}
          </label>
          <select 
            v-model="version" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="4">{{ $t('tools.uuid-generator.versions.v4') }}</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.uuid-generator.options.generateCount') }}
          </label>
          <select 
            v-model="generateCount" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="1">{{ $t('tools.uuid-generator.quantities.single') }}</option>
            <option value="5">{{ $t('tools.uuid-generator.quantities.five') }}</option>
            <option value="10">{{ $t('tools.uuid-generator.quantities.ten') }}</option>
            <option value="20">{{ $t('tools.uuid-generator.quantities.twenty') }}</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.uuid-generator.options.format') }}
          </label>
          <div class="flex items-center space-x-2">
            <input 
              type="checkbox" 
              id="includeDash" 
              v-model="includeDash"
              class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="includeDash" class="text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.uuid-generator.options.includeDash') }}
            </label>
          </div>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="flex space-x-4">
        <button
          @click="generateUUID"
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {{ $t('tools.uuid-generator.actions.generate') }}
        </button>
        <button
          @click="clearResults"
          class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          {{ $t('tools.uuid-generator.actions.clear') }}
        </button>
      </div>
    </div>

    <!-- 结果显示区域 -->
    <div v-if="uuids.length > 0" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="space-y-4">
        <div v-for="(uuid, index) in uuids" :key="index" class="flex items-center space-x-2">
          <input
            type="text"
            :value="uuid"
            readonly
            class="flex-1 p-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 font-mono text-sm"
          />
          <button
            @click="copyToClipboard(uuid)"
            class="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            :title="$t('tools.uuid-generator.actions.copy')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 提示信息 -->
    <div v-if="message" class="mt-4 p-3 rounded-md" :class="messageClass">
      {{ message }}
    </div>

    <!-- 在底部添加文章部分 -->
    <UuidGeneratorArticle />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import UuidGeneratorArticle from './UuidGeneratorArticle.vue'

const { t } = useI18n()

// 状态
const version = ref('4')
const generateCount = ref('5')
const includeDash = ref(true)
const uuids = ref([])
const message = ref('')
const messageType = ref('info')

// 消息样式
const messageClass = computed(() => {
  const baseClass = 'text-sm'
  switch (messageType.value) {
    case 'success':
      return `${baseClass} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`
    case 'error':
      return `${baseClass} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`
    default:
      return `${baseClass} bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200`
  }
})

// 生成 UUID v4
function uuidv4() {
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
  return includeDash.value ? uuid : uuid.replace(/-/g, '')
}

// 生成 UUID
function generateUUID() {
  const count = parseInt(generateCount.value)
  uuids.value = Array(count).fill().map(() => uuidv4())
  message.value = t('tools.uuid-generator.messages.generated')
  messageType.value = 'success'
  setTimeout(() => {
    message.value = ''
  }, 3000)
}

// 清空结果
function clearResults() {
  uuids.value = []
  message.value = ''
}

// 复制到剪贴板
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    message.value = t('tools.uuid-generator.messages.copied')
    messageType.value = 'success'
    setTimeout(() => {
      message.value = ''
    }, 3000)
  } catch (err) {
    console.error('复制失败:', err)
    message.value = t('tools.uuid-generator.messages.copyFailed')
    messageType.value = 'error'
  }
}
</script> 