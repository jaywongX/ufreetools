<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.sensitive-word-filter.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.sensitive-word-filter.description') }}
      </p>
      
      <!-- 输入区域 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.sensitive-word-filter.input.title') }}
        </label>
        <textarea
          v-model="inputText"
          rows="6"
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          :placeholder="$t('tools.sensitive-word-filter.input.placeholder')"
        ></textarea>
      </div>
      
      <!-- 过滤选项 -->
      <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.sensitive-word-filter.filterOptions.title') }}
          </label>
          <select
            v-model="filterMode"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="asterisk">{{ $t('tools.sensitive-word-filter.filterOptions.modes.asterisk') }}</option>
            <option value="custom">{{ $t('tools.sensitive-word-filter.filterOptions.modes.custom') }}</option>
            <option value="remove">{{ $t('tools.sensitive-word-filter.filterOptions.modes.remove') }}</option>
          </select>
        </div>
        
        <div v-if="filterMode === 'custom'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('tools.sensitive-word-filter.filterOptions.replaceChar.title') }}
          </label>
          <input
            v-model="replaceChar"
            type="text"
            maxlength="1"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            :placeholder="$t('tools.sensitive-word-filter.filterOptions.replaceChar.placeholder')"
          >
        </div>
      </div>
      
      <!-- 自定义敏感词 -->
      <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.sensitive-word-filter.customWords.title') }}
          </label>
          <button
            @click="addCustomWord"
            class="text-xs text-primary hover:text-primary-dark"
          >
            {{ $t('tools.sensitive-word-filter.customWords.addWord') }}
          </button>
        </div>
        <div class="flex flex-wrap gap-2">
          <div
            v-for="(word, index) in customWords"
            :key="index"
            class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center"
          >
            <span class="text-sm text-gray-700 dark:text-gray-300">{{ word }}</span>
            <button
              @click="removeCustomWord(index)"
              class="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="flex gap-3">
        <button
          @click="filterText"
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          :disabled="!inputText.trim()"
        >
          {{ $t('tools.sensitive-word-filter.actions.filter') }}
        </button>
        
        <button
          @click="resetAll"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {{ $t('tools.sensitive-word-filter.actions.reset') }}
        </button>
      </div>
    </div>
    
    <!-- 过滤结果 -->
    <div v-if="hasResult" class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="border-b border-gray-200 dark:border-gray-700">
        <nav class="flex -mb-px">
          <button
            v-for="tab in ['filteredResult', 'detectionReport']"
            :key="tab"
            @click="activeTab = tab"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === tab ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            {{ $t(`tools.sensitive-word-filter.results.tabs.${tab}`) }}
          </button>
        </nav>
      </div>
      
      <div class="p-4">
        <!-- 过滤结果 -->
        <div v-if="activeTab === 'filteredResult'" class="space-y-4">
          <div class="bg-gray-50 dark:bg-gray-750 rounded-md p-4">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.sensitive-word-filter.results.filteredText.title') }}</h3>
            <div class="whitespace-pre-wrap text-gray-800 dark:text-gray-200">{{ filteredText }}</div>
          </div>
          
          <div class="flex justify-end">
            <button
              @click="copyFilteredText"
              class="text-sm text-primary hover:text-primary-dark"
            >
              {{ $t('tools.sensitive-word-filter.results.filteredText.copy') }}
            </button>
          </div>
        </div>
        
        <!-- 检测报告 -->
        <div v-else class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-gray-50 dark:bg-gray-750 rounded-md p-4">
              <div class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                {{ detectedWords.length }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.sensitive-word-filter.results.statistics.detectedCount') }}</div>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-750 rounded-md p-4">
              <div class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                {{ ((filteredText.length / inputText.length) * 100).toFixed(1) }}%
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.sensitive-word-filter.results.statistics.retentionRate') }}</div>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-750 rounded-md p-4">
              <div class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                {{ totalWords }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.sensitive-word-filter.results.statistics.totalWords') }}</div>
            </div>
          </div>
          
          <div v-if="detectedWords.length > 0">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.sensitive-word-filter.results.detectedWords.title') }}</h3>
            <div class="bg-gray-50 dark:bg-gray-750 rounded-md p-4">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(word, index) in detectedWords"
                  :key="index"
                  class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm"
                >
                  {{ word }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 添加文章部分 -->
    <SensitiveWordFilterArticle />
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
// 直接导入 CensorSensor 类
import { CensorSensor } from 'censor-sensor'
import SensitiveWordFilterArticle from './SensitiveWordFilterArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 状态
const inputText = ref('')
const filterMode = ref('asterisk')
const replaceChar = ref('#')
const customWords = ref([])
const filteredText = ref('')
const detectedWords = ref([])
const activeTab = ref('filteredResult')

// 计算属性
const hasResult = computed(() => filteredText.value !== '')
const totalWords = computed(() => inputText.value.length)

// 初始化敏感词过滤器 - 正确的实例化方式
const censor = new CensorSensor()

// 添加自定义敏感词
function addCustomWord() {
  const word = prompt(t('tools.sensitive-word-filter.customWords.addPrompt'))
  if (word && word.trim() && !customWords.value.includes(word.trim())) {
    customWords.value.push(word.trim())
    censor.addWord(word.trim())
  }
}

// 移除自定义敏感词
function removeCustomWord(index) {
  const word = customWords.value[index]
  customWords.value.splice(index, 1)
  censor.removeWord(word)
}

// 过滤文本
function filterText() {
  if (!inputText.value.trim()) return
  
  // 重置检测结果
  detectedWords.value = []
  
  // 获取检测到的敏感词
  const words = censor.profane(inputText.value)
  detectedWords.value = [...new Set(words)]
  
  // 根据过滤模式处理文本
  let result = inputText.value
  detectedWords.value.forEach(word => {
    const regex = new RegExp(word, 'g')
    switch (filterMode.value) {
      case 'asterisk':
        result = result.replace(regex, '*'.repeat(word.length))
        break
      case 'custom':
        result = result.replace(regex, replaceChar.value.repeat(word.length))
        break
      case 'remove':
        result = result.replace(regex, '')
        break
    }
  })
  
  filteredText.value = result
}

// 复制过滤后的文本
function copyFilteredText() {
  navigator.clipboard.writeText(filteredText.value)
    .then(() => {
      toastRef.value.show(t('tools.sensitive-word-filter.messages.copied'))
    })
    .catch(err => {
      console.error('复制失败:', err)
      toastRef.value.show(t('tools.sensitive-word-filter.messages.copyFailed'))
    })
}

// 重置所有内容
function resetAll() {
  inputText.value = ''
  filterMode.value = 'asterisk'
  replaceChar.value = '#'
  customWords.value = []
  filteredText.value = ''
  detectedWords.value = []
  activeTab.value = 'filteredResult'
  
  // 重置敏感词过滤器
  censor.clearList()
}
</script> 