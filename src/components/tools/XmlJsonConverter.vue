<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.xml-json-converter.title') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.xml-json-converter.description') }}
      </p>
      
      <!-- 转换方向选择 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('tools.xml-json-converter.conversion.direction') }}
        </label>
        <div class="flex gap-4">
          <label class="inline-flex items-center">
            <input 
              type="radio" 
              v-model="conversionDirection" 
              value="xmlToJson" 
              class="text-primary"
            >
            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.xml-json-converter.conversion.xmlToJson') }}</span>
          </label>
          <label class="inline-flex items-center">
            <input 
              type="radio" 
              v-model="conversionDirection" 
              value="jsonToXml" 
              class="text-primary"
            >
            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.xml-json-converter.conversion.jsonToXml') }}</span>
          </label>
        </div>
      </div>
      
      <!-- 选项设置 -->
      <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.xml-json-converter.options.title') }}
          </label>
          <button 
            @click="showOptions = !showOptions" 
            class="text-xs text-primary hover:text-primary-dark"
          >
            {{ showOptions ? $t('tools.xml-json-converter.options.hide') : $t('tools.xml-json-converter.options.show') }}
          </button>
        </div>
        
        <div v-if="showOptions" class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
          <!-- XML 转 JSON 选项 -->
          <div v-if="conversionDirection === 'xmlToJson'">
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="xmlOptions.ignoreAttributes" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.xml-json-converter.options.xmlToJson.ignoreAttributes') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                {{ $t('tools.xml-json-converter.options.xmlToJson.ignoreAttributesHint') }}
              </p>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="xmlOptions.parseAttributeValue" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.xml-json-converter.options.xmlToJson.parseAttributeValue') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                {{ $t('tools.xml-json-converter.options.xmlToJson.parseAttributeValueHint') }}
              </p>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="xmlOptions.ignoreDeclaration" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.xml-json-converter.options.xmlToJson.ignoreDeclaration') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                {{ $t('tools.xml-json-converter.options.xmlToJson.ignoreDeclarationHint') }}
              </p>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="xmlOptions.parseTagValue" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.xml-json-converter.options.xmlToJson.parseTagValue') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                {{ $t('tools.xml-json-converter.options.xmlToJson.parseTagValueHint') }}
              </p>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="xmlOptions.trimValues" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.xml-json-converter.options.xmlToJson.trimValues') }}</span>
              </label>
            </div>
            <div class="mb-3">
              <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.xml-json-converter.options.xmlToJson.attributePrefix') }}
              </label>
              <input 
                type="text" 
                v-model="xmlOptions.attributeNamePrefix" 
                :placeholder="$t('tools.xml-json-converter.options.xmlToJson.attributePrefixPlaceholder')" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {{ $t('tools.xml-json-converter.options.xmlToJson.attributePrefixHint') }}
              </p>
            </div>
          </div>
          
          <!-- JSON 转 XML 选项 -->
          <div v-else>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="jsonOptions.format" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.xml-json-converter.options.jsonToXml.format') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                {{ $t('tools.xml-json-converter.options.jsonToXml.formatHint') }}
              </p>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="jsonOptions.indentBy" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.xml-json-converter.options.jsonToXml.indentBy') }}</span>
              </label>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="jsonOptions.addDeclaration" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ $t('tools.xml-json-converter.options.jsonToXml.addDeclaration') }}</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                {{ $t('tools.xml-json-converter.options.jsonToXml.addDeclarationHint') }}
              </p>
            </div>
            <div class="mb-3">
              <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.xml-json-converter.options.jsonToXml.rootName') }}
              </label>
              <input 
                type="text" 
                v-model="jsonOptions.rootName" 
                :placeholder="$t('tools.xml-json-converter.options.jsonToXml.rootNamePlaceholder')" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {{ $t('tools.xml-json-converter.options.jsonToXml.rootNameHint') }}
              </p>
            </div>
            <div class="mb-3">
              <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.xml-json-converter.options.jsonToXml.attributePrefix') }}
              </label>
              <input 
                type="text" 
                v-model="jsonOptions.attributeNamePrefix" 
                :placeholder="$t('tools.xml-json-converter.options.jsonToXml.attributePrefixPlaceholder')" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {{ $t('tools.xml-json-converter.options.jsonToXml.attributePrefixHint') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 转换按钮 -->
      <div class="flex gap-4">
        <button 
          @click="convert" 
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          {{ $t('tools.xml-json-converter.buttons.convert') }}
        </button>
        <button 
          @click="swapContent" 
          class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          {{ $t('tools.xml-json-converter.buttons.swap') }}
        </button>
        <button 
          @click="clearInput" 
          class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {{ $t('tools.xml-json-converter.buttons.clear') }}
        </button>
        <button 
          @click="loadExample" 
          class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {{ $t('tools.xml-json-converter.buttons.loadExample') }}
        </button>
      </div>
    </div>
    
    <!-- 输入输出区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 输入区域 -->
      <div>
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ conversionDirection === 'xmlToJson' ? $t('tools.xml-json-converter.input.xmlInput') : $t('tools.xml-json-converter.input.jsonInput') }}
          </label>
        </div>
        <textarea 
          v-model="inputText" 
          :placeholder="conversionDirection === 'xmlToJson' ? $t('tools.xml-json-converter.input.placeholder.xml') : $t('tools.xml-json-converter.input.placeholder.json')"
          class="w-full h-96 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
        ></textarea>
      </div>
      
      <!-- 输出区域 -->
      <div>
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ conversionDirection === 'xmlToJson' ? $t('tools.xml-json-converter.output.jsonResult') : $t('tools.xml-json-converter.output.xmlResult') }}
          </label>
          <button 
            v-if="outputText" 
            @click="copyOutput" 
            class="text-xs text-primary hover:text-primary-dark flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            {{ $t('tools.xml-json-converter.output.copy') }}
          </button>
        </div>
        <div class="relative">
          <textarea 
            v-model="outputText"
            readonly 
            class="w-full h-96 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-750 text-gray-800 dark:text-gray-200 font-mono text-sm"
            :class="{ 'border-red-300 dark:border-red-700': error }"
          ></textarea>
          <div v-if="error" class="absolute bottom-3 left-3 right-3 p-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-xs rounded">
            {{ error }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- 结果统计 -->
    <div v-if="outputText && !error" class="mt-4 p-4 bg-gray-50 dark:bg-gray-750 rounded-md border border-gray-200 dark:border-gray-700">
      <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('tools.xml-json-converter.stats.title') }}</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.xml-json-converter.stats.inputSize') }}</p>
          <p class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ formatDataSize(inputText.length) }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.xml-json-converter.stats.outputSize') }}</p>
          <p class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ formatDataSize(outputText.length) }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.xml-json-converter.stats.sizeChange') }}</p>
          <p class="text-lg font-medium" :class="sizeChangeColor">
            {{ sizeChange > 0 ? '+' : '' }}{{ sizeChange }}%
          </p>
        </div>
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.xml-json-converter.stats.conversionTime') }}</p>
          <p class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ conversionTime }}ms</p>
        </div>
      </div>
    </div>
    
    <!-- 帮助说明 -->
    <div class="mt-6">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">{{ $t('tools.xml-json-converter.help.title') }}</h3>
        <button 
          @click="showHelp = !showHelp" 
          class="text-xs text-primary hover:text-primary-dark"
        >
          {{ showHelp ? $t('tools.xml-json-converter.help.hide') : $t('tools.xml-json-converter.help.show') }}
        </button>
      </div>
      
      <div v-if="showHelp" class="p-4 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
        <h4 class="font-medium mb-2">{{ $t('tools.xml-json-converter.help.about.title') }}</h4>
        <p class="mb-2">{{ $t('tools.xml-json-converter.help.about.content') }}</p>
        
        <h4 class="font-medium mb-2 mt-4">{{ $t('tools.xml-json-converter.help.xmlToJson.title') }}</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li v-for="(item, index) in $t('tools.xml-json-converter.help.xmlToJson.items')" :key="'xml-' + index">{{ item }}</li>
        </ul>
        
        <h4 class="font-medium mb-2 mt-4">{{ $t('tools.xml-json-converter.help.jsonToXml.title') }}</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li v-for="(item, index) in $t('tools.xml-json-converter.help.jsonToXml.items')" :key="'json-' + index">{{ item }}</li>
        </ul>
      </div>
    </div>
    
    <!-- 在底部添加文章部分 -->
    <XmlJsonConverterArticle />
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { XMLParser, XMLBuilder } from 'fast-xml-parser'
import { useI18n } from 'vue-i18n'
import XmlJsonConverterArticle from './XmlJsonConverterArticle.vue'

// 初始化国际化
const { t } = useI18n()

// 转换方向
const conversionDirection = ref('xmlToJson')

// 显示选项和帮助
const showOptions = ref(false)
const showHelp = ref(false)

// 输入和输出文本
const inputText = ref('')
const outputText = ref('')
const error = ref('')

// 转换性能统计
const conversionTime = ref(0)

// XML转JSON选项
const xmlOptions = reactive({
  ignoreAttributes: false,
  parseAttributeValue: true,
  ignoreDeclaration: true,
  parseTagValue: true,
  trimValues: true,
  attributeNamePrefix: '@'
})

// JSON转XML选项
const jsonOptions = reactive({
  format: true,
  indentBy: true,
  addDeclaration: true,
  rootName: 'root',
  attributeNamePrefix: '@'
})

// 示例数据
const examples = {
  xmlToJson: `<?xml version="1.0" encoding="UTF-8"?>
<library>
  <book id="1" available="true">
    <title>深入理解计算机系统</title>
    <author>Randal E. Bryant</author>
    <year>2012</year>
    <price currency="CNY">128.00</price>
    <tags>
      <tag>计算机科学</tag>
      <tag>操作系统</tag>
      <tag>编程</tag>
    </tags>
  </book>
  <book id="2" available="false">
    <title>算法导论</title>
    <author>Thomas H. Cormen</author>
    <year>2009</year>
    <price currency="CNY">85.00</price>
    <tags>
      <tag>算法</tag>
      <tag>数据结构</tag>
      <tag>计算机科学</tag>
    </tags>
  </book>
</library>`,
  jsonToXml: `{
  "library": {
    "book": [
      {
        "@id": "1",
        "@available": "true",
        "title": "深入理解计算机系统",
        "author": "Randal E. Bryant",
        "year": 2012,
        "price": {
          "@currency": "CNY",
          "#text": "128.00"
        },
        "tags": {
          "tag": ["计算机科学", "操作系统", "编程"]
        }
      },
      {
        "@id": "2",
        "@available": "false",
        "title": "算法导论",
        "author": "Thomas H. Cormen",
        "year": 2009,
        "price": {
          "@currency": "CNY",
          "#text": "85.00"
        },
        "tags": {
          "tag": ["算法", "数据结构", "计算机科学"]
        }
      }
    ]
  }
}`
}

// 计算大小变化百分比
const sizeChange = computed(() => {
  if (!inputText.value || !outputText.value) return 0
  const change = ((outputText.value.length - inputText.value.length) / inputText.value.length) * 100
  return Math.round(change)
})

// 大小变化颜色
const sizeChangeColor = computed(() => {
  if (sizeChange.value > 10) return 'text-red-500'
  if (sizeChange.value < -10) return 'text-green-500'
  return 'text-gray-800 dark:text-gray-200'
})

// 清空输入和输出
function clearInput() {
  inputText.value = ''
  outputText.value = ''
  error.value = ''
}

// 加载示例数据
function loadExample() {
  inputText.value = examples[conversionDirection.value]
  convert()
}

// 复制输出结果到剪贴板
function copyOutput() {
  if (!outputText.value) return
  
  navigator.clipboard.writeText(outputText.value)
    .then(() => {
      alert(t('tools.xml-json-converter.alerts.copied'))
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}

// 交换输入输出内容并切换转换方向
function swapContent() {
  if (!outputText.value) return
  
  // 交换方向
  conversionDirection.value = conversionDirection.value === 'xmlToJson' ? 'jsonToXml' : 'xmlToJson'
  
  // 交换内容
  inputText.value = outputText.value
  outputText.value = ''
  error.value = ''
}

// 格式化数据大小
function formatDataSize(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1048576).toFixed(1) + ' MB'
}

// 转换XML到JSON
function xmlToJson() {
  const startTime = performance.now()
  
  try {
    error.value = ''
    const parser = new XMLParser({
      ignoreAttributes: xmlOptions.ignoreAttributes,
      parseAttributeValue: xmlOptions.parseAttributeValue,
      ignoreDeclaration: xmlOptions.ignoreDeclaration,
      parseTagValue: xmlOptions.parseTagValue,
      attributeNamePrefix: xmlOptions.attributeNamePrefix,
      textNodeName: '#text',
      trimValues: xmlOptions.trimValues
    })
    
    const result = parser.parse(inputText.value)
    const prettyJson = JSON.stringify(result, null, 2)
    
    conversionTime.value = Math.round(performance.now() - startTime)
    return prettyJson
  } catch (err) {
    error.value = t('tools.xml-json-converter.errors.xmlParse', [err.message])
    conversionTime.value = Math.round(performance.now() - startTime)
    return ''
  }
}

// 转换JSON到XML
function jsonToXml() {
  const startTime = performance.now()
  
  try {
    error.value = ''
    let obj = null
    
    // 尝试解析JSON
    try {
      obj = JSON.parse(inputText.value)
    } catch (err) {
      error.value = t('tools.xml-json-converter.errors.jsonParse', [err.message])
      conversionTime.value = Math.round(performance.now() - startTime)
      return ''
    }
    
    // 检查是否为空对象
    if (!obj || typeof obj !== 'object' || (Array.isArray(obj) && obj.length === 0)) {
      error.value = t('tools.xml-json-converter.errors.emptyObject')
      conversionTime.value = Math.round(performance.now() - startTime)
      return ''
    }
    
    // 如果JSON对象有多个顶级键且指定了rootName，则用rootName包装
    if (Object.keys(obj).length > 1 && jsonOptions.rootName) {
      obj = { [jsonOptions.rootName]: obj }
    }
    
    // 创建XML构建器
    const builder = new XMLBuilder({
      format: jsonOptions.format,
      indentBy: jsonOptions.indentBy ? '  ' : '',
      ignoreAttributes: false,
      attributeNamePrefix: jsonOptions.attributeNamePrefix,
      textNodeName: '#text',
    })
    
    // 构建XML
    let xmlResult = builder.build(obj)
    
    // 添加XML声明
    if (jsonOptions.addDeclaration) {
      xmlResult = `<?xml version="1.0" encoding="UTF-8"?>\n${xmlResult}`
    }
    
    conversionTime.value = Math.round(performance.now() - startTime)
    return xmlResult
  } catch (err) {
    error.value = t('tools.xml-json-converter.errors.xmlGeneration', [err.message])
    conversionTime.value = Math.round(performance.now() - startTime)
    return ''
  }
}

// 执行转换
function convert() {
  if (!inputText.value) return
  
  try {
    if (conversionDirection.value === 'xmlToJson') {
      outputText.value = xmlToJson()
    } else {
      outputText.value = jsonToXml()
    }
  } catch (err) {
    error.value = t('tools.xml-json-converter.errors.conversion', [err.message])
    outputText.value = ''
  }
}

// 监听转换方向变化，但不重置输入
watch(conversionDirection, () => {
  outputText.value = ''
  error.value = ''
})
</script> 