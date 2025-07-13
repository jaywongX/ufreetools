<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h1 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.csv-json-converter.name') }}</h1>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.csv-json-converter.description') }}
      </p>
      
      <!-- 转换方向选择 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.csv-json-converter.conversion.title') }}
        </label>
        <div class="flex gap-4">
          <label class="inline-flex items-center">
            <input 
              type="radio" 
              v-model="conversionDirection" 
              value="csvToJson" 
              class="text-primary"
            >
            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-json-converter.conversion.csvToJson.title') }}</span>
          </label>
          <label class="inline-flex items-center">
            <input 
              type="radio" 
              v-model="conversionDirection" 
              value="jsonToCsv" 
              class="text-primary"
            >
            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-json-converter.conversion.jsonToCsv.title') }}</span>
          </label>
        </div>
      </div>
      
      <!-- 选项设置 -->
      <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.csv-json-converter.options.title') }}
          </label>
          <button 
            @click="showOptions = !showOptions" 
            class="text-xs text-primary hover:text-primary-dark"
          >
            {{ showOptions ? $t('tools.csv-json-converter.actions.hideOptions') : $t('tools.csv-json-converter.actions.showOptions') }}
          </button>
        </div>
        
        <div v-if="showOptions" class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
          <!-- CSV 转 JSON 选项 -->
          <div v-if="conversionDirection === 'csvToJson'">
            <div class="mb-3">
              <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.csv-json-converter.options.delimiter') }}
              </label>
              <select 
                v-model="csvOptions.delimiter" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                <option value=",">{{ $t('tools.csv-json-converter.delimiters.comma') }}</option>
                <option value=";">{{ $t('tools.csv-json-converter.delimiters.semicolon') }}</option>
                <option value="\t">{{ $t('tools.csv-json-converter.delimiters.tab') }}</option>
                <option value="|">{{ $t('tools.csv-json-converter.delimiters.pipe') }}</option>
                <option value=":">{{ $t('tools.csv-json-converter.delimiters.custom') }}</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="csvOptions.header" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-json-converter.options.header') }}</span>
              </label>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="csvOptions.dynamicTyping" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-json-converter.options.dynamicTyping') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                {{ $t('tools.csv-json-converter.options.dynamicTypingDescription') }}
              </p>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="csvOptions.skipEmptyLines" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-json-converter.options.skipEmptyLines') }}</span>
              </label>
            </div>
          </div>
          
          <!-- JSON 转 CSV 选项 -->
          <div v-else>
            <div class="mb-3">
              <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.csv-json-converter.options.delimiter') }}
              </label>
              <select 
                v-model="jsonOptions.delimiter" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                <option value=",">{{ $t('tools.csv-json-converter.delimiters.comma') }}</option>
                <option value=";">{{ $t('tools.csv-json-converter.delimiters.semicolon') }}</option>
                <option value="\t">{{ $t('tools.csv-json-converter.delimiters.tab') }}</option>
                <option value="|">{{ $t('tools.csv-json-converter.delimiters.pipe') }}</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="jsonOptions.header" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-json-converter.options.header') }}</span>
              </label>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="jsonOptions.quotes" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.csv-json-converter.conversion.jsonToCsv.quotesLabel') }}</span>
              </label>
            </div>
            <div class="mb-3">
              <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.csv-json-converter.conversion.jsonToCsv.nestedModeLabel') }}
              </label>
              <select 
                v-model="jsonOptions.nestedMode" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                <option value="flatten">{{ $t('tools.csv-json-converter.conversion.jsonToCsv.flat') }}</option>
                <option value="stringify">{{ $t('tools.csv-json-converter.conversion.jsonToCsv.stringify') }}</option>
                <option value="ignore">{{ $t('tools.csv-json-converter.conversion.jsonToCsv.ignore') }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="flex gap-2">
        <button
          @click="convert"
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          :disabled="!inputText"
        >
          {{ conversionDirection === 'csvToJson' ? 
            $t('tools.csv-json-converter.conversion.csvToJson.convertButton') : 
            $t('tools.csv-json-converter.conversion.jsonToCsv.convertButton') }}
        </button>
        <button
          @click="swap"
          class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {{ $t('tools.csv-json-converter.actions.swap') }}
        </button>
      </div>
    </div>
    
    <!-- 转换区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 输入区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ conversionDirection === 'csvToJson' ? 
              $t('tools.csv-json-converter.preview.rawCsv') : 
              $t('tools.csv-json-converter.preview.jsonOutput') }}
          </label>
          <div class="flex gap-2">
            <button 
              @click="clearInput" 
              class="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {{ $t('tools.csv-json-converter.actions.clear') }}
            </button>
            <button 
              @click="loadExample" 
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ $t('tools.csv-json-converter.actions.loadExample') }}
            </button>
          </div>
        </div>
        <textarea 
          v-model="inputText" 
          :placeholder="$t('tools.csv-json-converter.preview.input')"
          class="w-full h-96 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
        ></textarea>
      </div>
      
      <!-- 输出区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ conversionDirection === 'csvToJson' ? 
              $t('tools.csv-json-converter.preview.jsonOutput') : 
              $t('tools.csv-json-converter.preview.rawCsv') }}
          </label>
          <div class="flex gap-2">
            <button 
              @click="formatOutput" 
              class="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              :disabled="!outputText"
            >
              {{ $t('tools.csv-json-converter.actions.formatOutput') }}
            </button>
            <button 
              @click="copyResult" 
              class="text-xs text-primary hover:text-primary-dark"
              :disabled="!outputText"
            >
              {{ $t('tools.csv-json-converter.actions.copyResult') }}
            </button>
            <a 
              v-if="outputText" 
              :href="generateDownloadUrl()" 
              download="converted_data.txt"
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ $t('tools.csv-json-converter.actions.downloadResult') }}
            </a>
          </div>
        </div>
        <div class="relative">
          <textarea 
            v-model="outputText" 
            readonly
            :placeholder="$t('tools.csv-json-converter.preview.output')"
            class="w-full h-96 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
          <div v-if="error" class="absolute top-0 left-0 right-0 mt-2 mx-2 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-sm">
            {{ error }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- 转换信息区域 -->
    <div v-if="stats.processed" class="mt-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.csv-json-converter.stats.title') }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-3 bg-gray-50 dark:bg-gray-750 rounded-md">
          <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.csv-json-converter.stats.processed') }}</div>
          <div class="text-xl font-medium text-gray-800 dark:text-gray-200">{{ stats.processed }}</div>
        </div>
        <div class="p-3 bg-gray-50 dark:bg-gray-750 rounded-md">
          <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.csv-json-converter.stats.fields') }}</div>
          <div class="text-xl font-medium text-gray-800 dark:text-gray-200">{{ stats.fields }}</div>
        </div>
        <div class="p-3 bg-gray-50 dark:bg-gray-750 rounded-md">
          <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.csv-json-converter.stats.inputSize') }}</div>
          <div class="text-xl font-medium text-gray-800 dark:text-gray-200">{{ formatBytes(stats.inputSize) }}</div>
        </div>
        <div class="p-3 bg-gray-50 dark:bg-gray-750 rounded-md">
          <div class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.csv-json-converter.stats.outputSize') }}</div>
          <div class="text-xl font-medium text-gray-800 dark:text-gray-200">{{ formatBytes(stats.outputSize) }}</div>
        </div>
      </div>
    </div>
    
    <!-- 在底部添加文章部分 -->
    <CsvJsonConverterArticle />
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import Papa from 'papaparse'
import { useI18n } from 'vue-i18n'
import CsvJsonConverterArticle from './CsvJsonConverterArticle.vue'

const { t } = useI18n()

// 状态变量
const inputText = ref('')
const outputText = ref('')
const error = ref('')
const conversionDirection = ref('csvToJson')
const showOptions = ref(false)

// CSV转JSON选项
const csvOptions = reactive({
  delimiter: ',',
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  outputFormat: 'array'
})

// JSON转CSV选项
const jsonOptions = reactive({
  delimiter: ',',
  header: true,
  quotes: false,
  nestedMode: 'flat'
})

// 转换统计信息
const stats = reactive({
  processed: 0,
  fields: 0,
  inputSize: 0,
  outputSize: 0
})

// 清空输入
function clearInput() {
  inputText.value = ''
  outputText.value = ''
  error.value = ''
  stats.processed = 0
  stats.fields = 0
  stats.inputSize = 0
  stats.outputSize = 0
}

// 交换输入与输出
function swap() {
  if (!outputText.value) return
  
  const tempDirection = conversionDirection.value
  conversionDirection.value = tempDirection === 'csvToJson' ? 'jsonToCsv' : 'csvToJson'
  
  const temp = inputText.value
  inputText.value = outputText.value
  outputText.value = temp
}

// 生成下载链接
function generateDownloadUrl() {
  const blob = new Blob([outputText.value], { type: 'text/plain' })
  return URL.createObjectURL(blob)
}

// 加载示例数据
function loadExample() {
  clearInput()
  
  if (conversionDirection.value === 'csvToJson') {
    inputText.value = `name,age,city,isActive
John Doe,32,"New York, NY",true
Jane Smith,28,Chicago,false
Mike Johnson,45,Los Angeles,true
Sara Williams,36,"Boston, MA",true
`
  } else {
    inputText.value = `[
  {
    "name": "John Doe",
    "age": 32,
    "city": "New York, NY",
    "isActive": true
  },
  {
    "name": "Jane Smith",
    "age": 28,
    "city": "Chicago",
    "isActive": false
  },
  {
    "name": "Mike Johnson",
    "age": 45,
    "city": "Los Angeles",
    "isActive": true
  },
  {
    "name": "Sara Williams",
    "age": 36,
    "city": "Boston, MA",
    "isActive": true
  }
]`
  }
  
  convert()
}

// 复制结果
function copyResult() {
  if (!outputText.value) return
  
  navigator.clipboard.writeText(outputText.value)
    .then(() => {
      alert(t('tools.csv-json-converter.results.copied'))
    })
    .catch(err => {
      console.error(err)
      alert(err)
    })
}

// 格式化输出
function formatOutput() {
  if (!outputText.value) return
  
  try {
    if (conversionDirection.value === 'csvToJson') {
      // 当前输出是 JSON，需要格式化
      const obj = JSON.parse(outputText.value)
      outputText.value = JSON.stringify(obj, null, 2)
    } else {
      // 当前输出是 CSV，暂不支持特殊格式化
      // 如果需要，可以使用Papa.unparse和Papa.parse进行重新解析
    }
  } catch (err) {
    error.value = err.message
  }
}

// 转换 CSV 到 JSON
function csvToJson(csv) {
  try {
    error.value = ''
    
    const result = Papa.parse(csv, {
      delimiter: csvOptions.delimiter,
      header: csvOptions.header,
      dynamicTyping: csvOptions.dynamicTyping,
      skipEmptyLines: csvOptions.skipEmptyLines
    })
    
    if (result.errors.length > 0) {
      error.value = `${result.errors[0].message} (line ${result.errors[0].row + 1})`
      return ''
    }
    
    // 更新统计信息
    stats.processed = result.data.length
    stats.fields = result.meta.fields ? result.meta.fields.length : 0
    
    return JSON.stringify(result.data, null, 2)
  } catch (err) {
    error.value = err.message
    return ''
  }
}

// 转换 JSON 到 CSV
function jsonToCsv(json) {
  try {
    error.value = ''
    let data
    
    // 尝试解析 JSON
    try {
      data = JSON.parse(json)
    } catch (err) {
      error.value = err.message
      return ''
    }
    
    // 确保数据是数组
    if (!Array.isArray(data)) {
      // 尝试将对象转为数组
      if (typeof data === 'object' && data !== null) {
        data = [data]
      } else {
        error.value = t('tools.csv-json-converter.errors.invalidJson')
        return ''
      }
    }
    
    // 处理嵌套数据
    if (jsonOptions.nestedMode !== 'ignore') {
      data = data.map(item => {
        const newItem = {}
        
        for (const key in item) {
          if (typeof item[key] === 'object' && item[key] !== null) {
            if (jsonOptions.nestedMode === 'stringify') {
              newItem[key] = JSON.stringify(item[key])
            } else if (jsonOptions.nestedMode === 'flat') {
              // 简单的展平处理，适用于一层嵌套
              if (Array.isArray(item[key])) {
                newItem[key] = item[key].join(', ')
              } else {
                for (const nestedKey in item[key]) {
                  newItem[`${key}.${nestedKey}`] = item[key][nestedKey]
                }
              }
            }
          } else {
            newItem[key] = item[key]
          }
        }
        
        return newItem
      })
    }
    
    // 更新统计信息
    stats.processed = data.length
    
    // 如果有数据，计算字段数
    if (data.length > 0) {
      // 获取所有字段合并
      const allFields = new Set()
      data.forEach(item => {
        Object.keys(item).forEach(key => allFields.add(key))
      })
      stats.fields = allFields.size
    } else {
      stats.fields = 0
    }
    
    const result = Papa.unparse(data, {
      delimiter: jsonOptions.delimiter,
      header: jsonOptions.header,
      quotes: jsonOptions.quotes
    })
    
    return result
  } catch (err) {
    error.value =err.message
    return ''
  }
}

// 执行转换
function convert() {
  if (!inputText.value) return
  
  try {
    // 更新输入大小统计
    stats.inputSize = new Blob([inputText.value]).size
    
    if (conversionDirection.value === 'csvToJson') {
      outputText.value = csvToJson(inputText.value)
    } else {
      outputText.value = jsonToCsv(inputText.value)
    }
    
    // 更新输出大小统计
    stats.outputSize = new Blob([outputText.value]).size
  } catch (err) {
    error.value = err.message
    outputText.value = ''
  }
}

// 格式化字节大小
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

</script> 