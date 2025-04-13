<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('tools.yaml-json-converter.options.conversionMode') }}
          </label>
          <div class="flex">
            <button 
              @click="conversionMode = 'yaml-to-json'" 
              class="px-4 py-2 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600"
              :class="conversionMode === 'yaml-to-json' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ t('tools.yaml-json-converter.options.yamlToJson') }}
            </button>
            <button 
              @click="conversionMode = 'json-to-yaml'" 
              class="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600"
              :class="conversionMode === 'json-to-yaml' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ t('tools.yaml-json-converter.options.jsonToYaml') }}
            </button>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('tools.yaml-json-converter.options.formatOutput') }}
          </label>
          <div class="flex flex-wrap">
            <div v-if="conversionMode === 'yaml-to-json'" class="space-y-2">
              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  id="pretty-json" 
                  v-model="prettyPrint"
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                />
                <label for="pretty-json" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {{ t('tools.yaml-json-converter.actions.beautify') }}
                </label>
              </div>
              <div v-if="prettyPrint" class="flex items-center">
                <label for="indent-size" class="text-sm text-gray-700 dark:text-gray-300 mr-2">
                  {{ t('tools.yaml-json-converter.options.indentSize') }}:
                </label>
                <select 
                  id="indent-size"
                  v-model="indentSize" 
                  class="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <option value="2">2 {{ conversionMode === 'yaml-to-json' ? t('common.spaces') : t('common.spaces') }}</option>
                  <option value="4">4 {{ conversionMode === 'yaml-to-json' ? t('common.spaces') : t('common.spaces') }}</option>
                </select>
              </div>
            </div>
            <div v-else class="space-y-2">
              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  id="sort-keys" 
                  v-model="sortKeys"
                  class="h-4 w-4 text-primary border-gray-300 rounded"
                />
                <label for="sort-keys" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {{ t('tools.yaml-json-converter.options.sortKeys') }}
                </label>
              </div>
              <div class="flex items-center">
                <label for="flow-style" class="text-sm text-gray-700 dark:text-gray-300 mr-2">
                  {{ t('tools.yaml-json-converter.options.flowStyle') }}:
                </label>
                <select 
                  id="flow-style"
                  v-model="flowStyle" 
                  class="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <option value="block">{{ t('tools.yaml-json-converter.flowStyles.block') }}</option>
                  <option value="flow">{{ t('tools.yaml-json-converter.flowStyles.flow') }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('tools.yaml-json-converter.input.loadSample') }}
          </label>
          <div class="flex flex-wrap gap-2">
            <button 
              @click="loadExample('simple')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {{ t('common.simple') }}
            </button>
            <button 
              @click="loadExample('nested')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {{ t('common.nested') }}
            </button>
            <button 
              @click="loadExample('complex')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {{ t('common.complex') }}
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 输入/输出区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- 左侧：输入区域 -->
      <div>
        <div class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 mb-2">
          <div class="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 class="font-medium">
              {{ conversionMode === 'yaml-to-json' ? 'YAML' : 'JSON' }} {{ t('tools.yaml-json-converter.input.title') }}
            </h3>
            <div class="space-x-2">
              <button 
                @click="clearInput"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.yaml-json-converter.input.clearInput')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button 
                @click="pasteFromClipboard"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('common.pasteFromClipboard')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-3">
            <textarea 
              v-model="inputData" 
              class="w-full h-80 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
              :placeholder="conversionMode === 'yaml-to-json' ? t('tools.yaml-json-converter.input.yamlPlaceholder') : t('tools.yaml-json-converter.input.jsonPlaceholder')"
              @input="autoConvert"
            ></textarea>
          </div>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 flex justify-between">
          <span>{{ t('common.characters') }}: {{ inputData.length }}</span>
          <span>{{ t('common.lines') }}: {{ inputData.split('\n').length }}</span>
        </div>
      </div>
      
      <!-- 右侧：输出区域 -->
      <div>
        <div class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 mb-2">
          <div class="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 class="font-medium">
              {{ conversionMode === 'yaml-to-json' ? 'JSON' : 'YAML' }} {{ t('tools.yaml-json-converter.output.title') }}
            </h3>
            <div class="space-x-2">
              <button 
                @click="convert"
                class="px-2 py-1 text-xs rounded bg-primary text-white hover:bg-primary-dark"
                :title="t('tools.yaml-json-converter.actions.convert')"
              >
                {{ t('tools.yaml-json-converter.actions.convert') }}
              </button>
              <button 
                @click="copyOutput"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.yaml-json-converter.output.copyOutput')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-4 0V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v5M8 21h4" />
                </svg>
              </button>
              <button 
                @click="downloadOutput"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.yaml-json-converter.output.downloadOutput')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-3">
            <pre
              class="w-full h-80 p-3 overflow-auto border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            ><code>{{ outputData }}</code></pre>
          </div>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 flex justify-between">
          <span>{{ t('common.characters') }}: {{ outputData.length }}</span>
          <span>{{ t('common.lines') }}: {{ outputData.split('\n').length }}</span>
          <span v-if="copySuccess" class="text-green-500">{{ t('tools.yaml-json-converter.messages.copySuccess') }}</span>
        </div>
      </div>
    </div>
    
    <!-- 错误提示 -->
    <div v-if="errorMessage" class="mt-4 p-3 bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-md">
      <h4 class="font-medium">{{ t('common.error') }}:</h4>
      <p>{{ errorMessage }}</p>
    </div>
    
    <!-- 在底部添加文章部分 -->
    <YamlJsonConverterArticle />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import jsYaml from 'js-yaml'
import { useI18n } from 'vue-i18n'
import YamlJsonConverterArticle from './YamlJsonConverterArticle.vue'

const { t } = useI18n()

// 状态
const conversionMode = ref('yaml-to-json')
const inputData = ref('')
const outputData = ref('')
const errorMessage = ref('')
const copySuccess = ref(false)

// 配置选项
const prettyPrint = ref(true)
const indentSize = ref('2')
const sortKeys = ref(false)
const flowStyle = ref('block')

// 自动转换有一个延迟，避免频繁转换
let debounceTimer = null

function autoConvert() {
  // 清除错误信息
  errorMessage.value = ''
  copySuccess.value = false
  
  // 清除之前的定时器
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }
  
  // 设置新的定时器
  debounceTimer = setTimeout(() => {
    convert()
  }, 500)
}

// 转换函数
function convert() {
  errorMessage.value = ''
  copySuccess.value = false
  
  if (!inputData.value.trim()) {
    outputData.value = ''
    return
  }
  
  try {
    if (conversionMode.value === 'yaml-to-json') {
      // YAML到JSON转换
      const parsedYaml = jsYaml.load(inputData.value)
      if (prettyPrint.value) {
        outputData.value = JSON.stringify(parsedYaml, null, parseInt(indentSize.value))
      } else {
        outputData.value = JSON.stringify(parsedYaml)
      }
    } else {
      // JSON到YAML转换
      let jsonObj
      try {
        jsonObj = JSON.parse(inputData.value)
      } catch (error) {
        throw new Error(t('tools.yaml-json-converter.messages.invalidJson') + ': ' + error.message)
      }
      
      const yamlOptions = {
        sortKeys: sortKeys.value,
        flowLevel: flowStyle.value === 'flow' ? 1 : -1
      }
      
      outputData.value = jsYaml.dump(jsonObj, yamlOptions)
    }
  } catch (error) {
    errorMessage.value = error.message || t('tools.yaml-json-converter.messages.conversionFailed', { error: '' })
    outputData.value = ''
  }
}

// 复制输出到剪贴板
function copyOutput() {
  if (!outputData.value) return
  
  navigator.clipboard.writeText(outputData.value)
    .then(() => {
      copySuccess.value = true
      setTimeout(() => {
        copySuccess.value = false
      }, 2000)
    })
    .catch(err => {
      errorMessage.value = t('common.copyFailed') + ': ' + err.message
    })
}

// 下载输出文件
function downloadOutput() {
  if (!outputData.value) return
  
  const fileName = conversionMode.value === 'yaml-to-json' 
    ? 'converted.json' 
    : 'converted.yaml'
  
  const blob = new Blob([outputData.value], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  
  // 清理
  setTimeout(() => {
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, 0)
}

// 从剪贴板粘贴
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText()
    inputData.value = text
    autoConvert()
  } catch (err) {
    errorMessage.value = t('common.pasteError') + ': ' + err.message
  }
}

// 清空输入
function clearInput() {
  inputData.value = ''
  outputData.value = ''
  errorMessage.value = ''
}

// 加载示例数据
function loadExample(type) {
  if (conversionMode.value === 'yaml-to-json') {
    // YAML示例
    switch(type) {
      case 'simple':
        inputData.value = `# ${t('common.simple')} YAML ${t('common.example')}
name: John Doe
age: 30
city: New York
isEmployed: true
skills:
  - JavaScript
  - Python
  - Docker`
        break
      case 'nested':
        inputData.value = `# ${t('common.nested')} ${t('common.example')}
user:
  profile:
    name: Jane Smith
    email: jane@example.com
    address:
      street: 123 Main St
      city: Boston
      state: MA
      zip: 02101
  preferences:
    theme: dark
    notifications: true
    language: zh-CN`
        break
      case 'complex':
        inputData.value = `# ${t('common.complex')} ${t('common.example')}
company:
  name: Acme Corporation
  founded: 1985
  active: true
  departments:
    - name: Engineering
      employees: 200
      locations:
        - San Francisco
        - Berlin
      teams:
        frontend:
          lead: Sarah Johnson
          members: 12
        backend:
          lead: Michael Chen
          members: 15
    - name: Marketing
      employees: 50
      locations:
        - New York
        - London
  products:
    - id: prod-001
      name: Widget Pro
      price: 99.99
      inStock: true
    - id: prod-002
      name: Super Gadget
      price: 149.99
      inStock: false
  financialData:
    revenue: 25000000
    expenses: 18000000
    currency: USD`
        break
    }
  } else {
    // JSON示例
    switch(type) {
      case 'simple':
        inputData.value = `{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "isEmployed": true,
  "skills": ["JavaScript", "Python", "Docker"]
}`
        break
      case 'nested':
        inputData.value = `{
  "user": {
    "profile": {
      "name": "Jane Smith",
      "email": "jane@example.com",
      "address": {
        "street": "123 Main St",
        "city": "Boston",
        "state": "MA",
        "zip": "02101"
      }
    },
    "preferences": {
      "theme": "dark",
      "notifications": true,
      "language": "zh-CN"
    }
  }
}`
        break
      case 'complex':
        inputData.value = `{
  "company": {
    "name": "Acme Corporation",
    "founded": 1985,
    "active": true,
    "departments": [
      {
        "name": "Engineering",
        "employees": 200,
        "locations": ["San Francisco", "Berlin"],
        "teams": {
          "frontend": {
            "lead": "Sarah Johnson",
            "members": 12
          },
          "backend": {
            "lead": "Michael Chen",
            "members": 15
          }
        }
      },
      {
        "name": "Marketing",
        "employees": 50,
        "locations": ["New York", "London"]
      }
    ],
    "products": [
      {
        "id": "prod-001",
        "name": "Widget Pro",
        "price": 99.99,
        "inStock": true
      },
      {
        "id": "prod-002",
        "name": "Super Gadget",
        "price": 149.99,
        "inStock": false
      }
    ],
    "financialData": {
      "revenue": 25000000,
      "expenses": 18000000,
      "currency": "USD"
    }
  }
}`
        break
    }
  }
  
  // 自动转换加载的示例
  autoConvert()
}

// 监听选项变化
watch([conversionMode, prettyPrint, indentSize, sortKeys, flowStyle], () => {
  // 当转换模式改变时，可能需要更新示例
  if (!inputData.value) return
  
  // 如果有内容，则自动转换
  autoConvert()
})
</script>

<style scoped>
pre {
  margin: 0;
}
</style> 