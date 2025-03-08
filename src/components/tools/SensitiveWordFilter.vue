<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">敏感词过滤工具</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        检测和过滤文本中的敏感词汇，支持自定义敏感词库和多种过滤方式
      </p>
      
      <!-- 输入区域 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          输入文本
        </label>
        <textarea
          v-model="inputText"
          @input="processText"
          placeholder="请输入需要检测的文本内容..."
          rows="6"
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        ></textarea>
        <div class="flex mt-2">
          <button 
            @click="pasteFromClipboard" 
            class="text-xs text-primary hover:text-primary-dark mr-3"
          >
            从剪贴板粘贴
          </button>
          <button 
            @click="loadSampleText" 
            class="text-xs text-primary hover:text-primary-dark mr-3"
          >
            加载示例
          </button>
          <button 
            @click="clearInput" 
            class="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            清空
          </button>
        </div>
      </div>
      
      <!-- 过滤选项 -->
      <div>
        <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">过滤选项</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">过滤方式</label>
            <select 
              v-model="filterMode" 
              @change="processText"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option value="asterisks">替换为星号 (*)</option>
              <option value="custom">替换为自定义字符</option>
              <option value="grawlix">替换为符号 (@#$%)</option>
              <option value="highlight">高亮显示</option>
              <option value="remove">直接删除</option>
            </select>
          </div>
          <div v-if="filterMode === 'custom'">
            <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">替换字符</label>
            <input 
              v-model="customReplaceChar" 
              @input="processText"
              type="text" 
              placeholder="如：#"
              maxlength="1"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
          </div>
          <div>
            <label class="block text-sm text-gray-600 dark:text-gray-400 mb-1">敏感度</label>
            <select 
              v-model="sensitivity" 
              @change="processText"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option value="normal">正常</option>
              <option value="high">高 (模糊匹配)</option>
              <option value="low">低 (精确匹配)</option>
            </select>
          </div>
        </div>
        
        <!-- 高级选项 -->
        <div class="mb-4">
          <div class="flex items-center space-x-2">
            <input 
              v-model="caseSensitive" 
              @change="processText"
              type="checkbox" 
              id="case-sensitive" 
              class="rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary"
            >
            <label for="case-sensitive" class="text-sm text-gray-700 dark:text-gray-300">区分大小写</label>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 检测结果区域 -->
    <div class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div class="border-b border-gray-200 dark:border-gray-700">
        <nav class="flex -mb-px">
          <button 
            @click="activeTab = 'result'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'result' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            过滤结果
          </button>
          <button 
            @click="activeTab = 'words'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'words' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            敏感词管理
          </button>
          <button 
            @click="activeTab = 'stats'"
            class="px-6 py-3 text-sm font-medium whitespace-nowrap"
            :class="activeTab === 'stats' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'"
          >
            统计分析
          </button>
        </nav>
      </div>
      
      <!-- 过滤结果内容 -->
      <div class="p-4">
        <!-- 过滤结果标签页 -->
        <div v-if="activeTab === 'result'">
          <div class="flex justify-between items-center mb-3">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">
              过滤后的文本
            </h3>
            <button 
              @click="copyFilteredText" 
              class="text-xs text-primary hover:text-primary-dark"
              :disabled="!filteredText"
            >
              复制结果
            </button>
          </div>
          
          <div 
            v-if="showHighlight"
            class="bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md p-4 mb-4 whitespace-pre-wrap"
            v-html="highlightedText"
          ></div>
          
          <div 
            v-else
            class="bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md p-4 mb-4 whitespace-pre-wrap"
          >
            {{ filteredText || '暂无过滤结果' }}
          </div>
          
          <div v-if="detectedSensitiveWords.length > 0" class="mt-4">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              检测到的敏感词 ({{ detectedSensitiveWords.length }}个)
            </h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(word, index) in detectedSensitiveWords" 
                :key="index"
                class="px-2 py-1 text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded"
              >
                {{ word }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- 敏感词管理标签页 -->
        <div v-if="activeTab === 'words'">
          <div class="flex justify-between items-center mb-3">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">
              自定义敏感词库
            </h3>
            <div class="flex gap-2">
              <button 
                @click="showAddWordModal = true" 
                class="text-xs text-primary hover:text-primary-dark"
              >
                添加敏感词
              </button>
              <button 
                @click="importDictionary" 
                class="text-xs text-primary hover:text-primary-dark"
              >
                导入词库
              </button>
              <button 
                @click="exportDictionary" 
                class="text-xs text-primary hover:text-primary-dark"
                :disabled="!customSensitiveWords.length"
              >
                导出词库
              </button>
            </div>
          </div>
          
          <div class="relative mb-4">
            <input 
              v-model="wordSearchTerm" 
              type="text" 
              placeholder="搜索敏感词..."
              class="w-full px-3 py-2 pl-9 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-2 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div v-if="filteredCustomWords.length === 0" class="py-8 text-center text-gray-500 dark:text-gray-400 italic">
            {{ customSensitiveWords.length === 0 ? '尚未添加自定义敏感词' : '没有匹配的敏感词' }}
          </div>
          
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div 
              v-for="(word, index) in filteredCustomWords" 
              :key="index"
              class="flex justify-between items-center p-2 border border-gray-200 dark:border-gray-700 rounded"
            >
              <span class="text-sm text-gray-800 dark:text-gray-200">{{ word }}</span>
              <button 
                @click="removeCustomWord(word)" 
                class="text-red-500 hover:text-red-700"
                title="删除"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div class="mt-6">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              默认敏感词库
            </h3>
            <div class="bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md p-4">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                默认敏感词库包含{{ defaultWordCount }}个常见敏感词，由 censor-sensor 库提供。
              </p>
              <div class="mt-2">
                <div class="flex items-center space-x-2">
                  <input 
                    v-model="useDefaultDictionary" 
                    @change="updateCensor"
                    type="checkbox" 
                    id="use-default" 
                    class="rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary"
                  >
                  <label for="use-default" class="text-sm text-gray-700 dark:text-gray-300">
                    启用默认敏感词库
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 统计分析标签页 -->
        <div v-if="activeTab === 'stats'">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div class="bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md p-4">
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">总字数</h3>
              <p class="text-2xl font-bold text-gray-800 dark:text-gray-200">{{ totalCharCount }}</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md p-4">
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">敏感词数量</h3>
              <p class="text-2xl font-bold text-red-600 dark:text-red-400">{{ detectedSensitiveWords.length }}</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md p-4">
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">安全指数</h3>
              <p class="text-2xl font-bold" :class="getSafetyScoreClass">{{ safetyScore }}%</p>
            </div>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md p-4 mb-4">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">敏感词分布</h3>
            <div v-if="detectedSensitiveWords.length > 0" class="h-6 w-full bg-gray-200 dark:bg-gray-600 rounded overflow-hidden">
              <div class="h-full bg-red-500" :style="`width: ${sensitiveWordPercentage}%`"></div>
            </div>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              敏感词占比: {{ sensitiveWordPercentage.toFixed(2) }}% ({{ filteredCharCount }} / {{ totalCharCount }} 字符)
            </p>
          </div>
          
          <div v-if="detectedSensitiveWords.length > 0" class="bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-700 rounded-md p-4">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">敏感词频率</h3>
            <div class="space-y-2">
              <div 
                v-for="(count, word) in wordFrequency" 
                :key="word"
                class="flex items-center"
              >
                <span class="text-sm text-gray-800 dark:text-gray-200 w-1/3">{{ word }}</span>
                <div class="flex-1 h-5 bg-gray-200 dark:bg-gray-600 rounded overflow-hidden">
                  <div 
                    class="h-full bg-red-500" 
                    :style="`width: ${(count / Math.max(...Object.values(wordFrequency))) * 100}%`"
                  ></div>
                </div>
                <span class="text-sm text-gray-600 dark:text-gray-400 ml-2 w-8 text-right">{{ count }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 添加敏感词弹窗 -->
    <div v-if="showAddWordModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">添加敏感词</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            输入敏感词 (多个词请用逗号、空格或换行分隔)
          </label>
          <textarea
            v-model="newSensitiveWords"
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            placeholder="例如：敏感词1, 敏感词2&#10;敏感词3"
          ></textarea>
        </div>
        <div class="flex justify-end space-x-3">
          <button 
            @click="showAddWordModal = false" 
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            取消
          </button>
          <button 
            @click="addCustomWords" 
            class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            添加
          </button>
        </div>
      </div>
    </div>
    
    <!-- 隐藏的文件输入用于导入词库 -->
    <input 
      ref="fileInput"
      type="file" 
      accept=".txt,.json,.csv"
      @change="handleDictionaryImport"
      class="hidden"
    >
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import CensorSensor from 'censor-sensor'

// 初始化 censor-sensor
const censor = new CensorSensor()

// 状态变量
const inputText = ref('')
const filteredText = ref('')
const highlightedText = ref('')
const showHighlight = ref(false)
const detectedSensitiveWords = ref([])
const customSensitiveWords = ref([])
const filterMode = ref('asterisks')
const customReplaceChar = ref('#')
const sensitivity = ref('normal')
const caseSensitive = ref(false)
const activeTab = ref('result')
const wordSearchTerm = ref('')
const showAddWordModal = ref(false)
const newSensitiveWords = ref('')
const useDefaultDictionary = ref(true)
const fileInput = ref(null)
const defaultWordCount = ref(0)
const wordFrequency = ref({})

// 获取过滤后的字符数
const totalCharCount = computed(() => inputText.value.length)
const filteredCharCount = computed(() => {
  if (!inputText.value) return 0
  
  // 计算所有敏感词的总长度
  let count = 0
  for (const word of detectedSensitiveWords.value) {
    const regex = new RegExp(word, caseSensitive.value ? 'g' : 'gi')
    const matches = inputText.value.match(regex)
    if (matches) {
      count += matches.length * word.length
    }
  }
  return count
})

// 敏感词占比百分比
const sensitiveWordPercentage = computed(() => {
  if (totalCharCount.value === 0) return 0
  return (filteredCharCount.value / totalCharCount.value) * 100
})

// 安全指数 (100% - 敏感词百分比，最小为0)
const safetyScore = computed(() => {
  return Math.max(0, 100 - sensitiveWordPercentage.value).toFixed(0)
})

// 安全指数颜色
const getSafetyScoreClass = computed(() => {
  const score = Number(safetyScore.value)
  if (score >= 90) return 'text-green-600 dark:text-green-400'
  if (score >= 70) return 'text-yellow-600 dark:text-yellow-400'
  return 'text-red-600 dark:text-red-400'
})

// 过滤后的自定义词库
const filteredCustomWords = computed(() => {
  if (!wordSearchTerm.value) return customSensitiveWords.value
  
  return customSensitiveWords.value.filter(word => 
    word.toLowerCase().includes(wordSearchTerm.value.toLowerCase())
  )
})

// 初始化
onMounted(() => {
  // 获取默认词库大小
  defaultWordCount.value = Object.keys(censor.dictionary).length
  
  // 从本地存储加载自定义词库
  const savedWords = localStorage.getItem('custom-sensitive-words')
  if (savedWords) {
    try {
      customSensitiveWords.value = JSON.parse(savedWords)
      updateCensor()
    } catch (e) {
      console.error('无法加载保存的敏感词库', e)
    }
  }
})

// 更新敏感词过滤器
function updateCensor() {
  // 清空字典如果不使用默认词库
  if (!useDefaultDictionary.value) {
    censor.clearList()
  } else {
    // 重新初始化以恢复默认词库
    censor.restore()
  }
  
  // 添加自定义敏感词
  for (const word of customSensitiveWords.value) {
    censor.addWord(word)
  }
  
  // 设置配置
  censor.setOptions({
    censorCharacter: filterMode.value === 'custom' ? customReplaceChar.value : '*',
    censorFixedLength: 0, // 使用与原词相同的长度
    censorWholeWords: sensitivity.value === 'low',
    caseSensitive: caseSensitive.value
  })
  
  // 重新处理文本
  processText()
}

// 处理文本
function processText() {
  if (!inputText.value) {
    filteredText.value = ''
    highlightedText.value = ''
    detectedSensitiveWords.value = []
    wordFrequency.value = {}
    return
  }
  
  // 更新过滤器选项
  updateCensor()
  
  // 检测敏感词
  const profaneWords = censor.profaneIdsFor(inputText.value)
  detectedSensitiveWords.value = [...new Set(profaneWords)]
  
  // 计算词频
  wordFrequency.value = {}
  for (const word of profaneWords) {
    wordFrequency.value[word] = (wordFrequency.value[word] || 0) + 1
  }
  
  // 根据词频排序
  detectedSensitiveWords.value.sort((a, b) => {
    return wordFrequency.value[b] - wordFrequency.value[a]
  })
  
  // 根据过滤模式处理文本
  if (filterMode.value === 'highlight') {
    showHighlight.value = true
    
    // 创建高亮文本
    let text = inputText.value
    for (const word of detectedSensitiveWords.value) {
      const regex = new RegExp(word, caseSensitive.value ? 'g' : 'gi')
      text = text.replace(regex, match => {
        return `<span class="bg-yellow-200 text-red-800 dark:bg-yellow-800 dark:text-red-200">${match}</span>`
      })
    }
    highlightedText.value = text
    filteredText.value = censor.clean(inputText.value)
  } else {
    showHighlight.value = false
    
    if (filterMode.value === 'remove') {
      // 直接删除敏感词
      let text = inputText.value
      for (const word of detectedSensitiveWords.value) {
        const regex = new RegExp(word, caseSensitive.value ? 'g' : 'gi')
        text = text.replace(regex, '')
      }
      filteredText.value = text
    } else if (filterMode.value === 'grawlix') {
      // 使用符号替代
      let text = inputText.value
      for (const word of detectedSensitiveWords.value) {
        const regex = new RegExp(word, caseSensitive.value ? 'g' : 'gi')
        text = text.replace(regex, match => {
          return '@#$%'.repeat(Math.ceil(match.length / 4)).substring(0, match.length)
        })
      }
      filteredText.value = text
    } else {
      // 使用星号或自定义字符
      filteredText.value = censor.clean(inputText.value)
    }
  }
}

// 从剪贴板粘贴
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText()
    inputText.value = text
    processText()
  } catch (err) {
    console.error('无法从剪贴板读取文本', err)
    alert('无法从剪贴板读取文本，请手动粘贴')
  }
}

// 加载示例文本
function loadSampleText() {
  inputText.value = `这是一个示例文本，包含了一些常见敏感词汇，如fuck、damn等。
这些词汇通常在公共场合或正式场合使用会被认为不合适。
敏感词过滤可以帮助维护内容的健康性，但也需要注意避免过度过滤和误伤合法内容。
在一些特定上下文中，如学术研究、法律文件等，这些词汇可能是必要的。`
  processText()
}

// 清空输入
function clearInput() {
  inputText.value = ''
  processText()
}

// 复制过滤后的文本
function copyFilteredText() {
  navigator.clipboard.writeText(filteredText.value)
    .then(() => {
      alert('已复制到剪贴板')
    })
    .catch(err => {
      console.error('复制失败', err)
      alert('复制失败，请手动复制')
    })
}

// 添加自定义敏感词
function addCustomWords() {
  if (!newSensitiveWords.value.trim()) {
    showAddWordModal.value = false
    return
  }
  
  // 分割输入的敏感词
  const words = newSensitiveWords.value
    .split(/[\s,，、;；\n]+/)
    .filter(word => word.trim().length > 0)
    .map(word => word.trim())
  
  // 添加到自定义词库（去重）
  const uniqueWords = [...new Set([...customSensitiveWords.value, ...words])]
  customSensitiveWords.value = uniqueWords
  
  // 保存到本地存储
  localStorage.setItem('custom-sensitive-words', JSON.stringify(customSensitiveWords.value))
  
  // 更新过滤器
  updateCensor()
  
  // 重置并关闭弹窗
  newSensitiveWords.value = ''
  showAddWordModal.value = false
}

// 移除自定义敏感词
function removeCustomWord(word) {
  customSensitiveWords.value = customSensitiveWords.value.filter(w => w !== word)
  
  // 保存到本地存储
  localStorage.setItem('custom-sensitive-words', JSON.stringify(customSensitiveWords.value))
  
  // 更新过滤器
  updateCensor()
}

// 导入敏感词词库
function importDictionary() {
  fileInput.value.click()
}

// 处理词库导入
function handleDictionaryImport(event) {
  const file = event.target.files[0]
  if (!file) return
  
  const reader = new FileReader()
  
  reader.onload = (e) => {
    try {
      const fileContent = e.target.result
      const extension = file.name.split('.').pop().toLowerCase()
      
      let words = []
      
      if (extension === 'json') {
        // 解析 JSON 格式
        const data = JSON.parse(fileContent)
        if (Array.isArray(data)) {
          words = data.filter(item => typeof item === 'string')
        } else if (typeof data === 'object') {
          words = Object.keys(data)
        }
      } else if (extension === 'csv') {
        // 解析 CSV 格式（简单处理，假设每行一个词）
        words = fileContent.split(/[\r\n]+/).filter(line => line.trim())
      } else {
        // 解析 TXT 格式（每行一个词或用逗号/空格分隔）
        words = fileContent
          .split(/[\s,，、;；\n\r]+/)
          .filter(word => word.trim().length > 0)
          .map(word => word.trim())
      }
      
      if (words.length > 0) {
        // 合并并去重
        const uniqueWords = [...new Set([...customSensitiveWords.value, ...words])]
        customSensitiveWords.value = uniqueWords
        
        // 保存到本地存储
        localStorage.setItem('custom-sensitive-words', JSON.stringify(customSensitiveWords.value))
        
        // 更新过滤器
        updateCensor()
        
        alert(`成功导入 ${words.length} 个敏感词`)
      } else {
        alert('未能从文件中解析出敏感词')
      }
    } catch (error) {
      console.error('导入失败', error)
      alert('导入失败，请检查文件格式')
    }
    
    // 重置文件输入
    event.target.value = null
  }
  
  reader.readAsText(file)
}

// 导出敏感词词库
function exportDictionary() {
  if (customSensitiveWords.value.length === 0) {
    alert('没有自定义敏感词可导出')
    return
  }
  
  // 创建 JSON 字符串
  const jsonStr = JSON.stringify(customSensitiveWords.value, null, 2)
  
  // 创建下载链接
  const blob = new Blob([jsonStr], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  
  // 创建临时下载链接
  const a = document.createElement('a')
  a.href = url
  a.download = 'sensitive-words.json'
  document.body.appendChild(a)
  a.click()
  
  // 清理
  setTimeout(() => {
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, 100)
}

// 监听配置变化
watch(
  [filterMode, customReplaceChar, sensitivity, caseSensitive, useDefaultDictionary],
  () => {
    updateCensor()
  },
  { deep: true }
)
</script>

<style scoped>
/* 高亮敏感词样式 */
.highlight-sensitivity {
  background-color: rgba(254, 202, 202, 0.5);
  color: #b91c1c;
  border-radius: 2px;
  padding: 0 2px;
}

/* 暗色模式下高亮敏感词样式 */
:deep(.dark .highlight-sensitivity) {
  background-color: rgba(185, 28, 28, 0.3);
  color: #fecaca;
}
</style> 