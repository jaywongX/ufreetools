<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">XML ↔ JSON 转换</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        在 XML 和 JSON 格式之间进行双向转换，支持高级选项和自定义设置
      </p>
      
      <!-- 转换方向选择 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          转换方向
        </label>
        <div class="flex gap-4">
          <label class="inline-flex items-center">
            <input 
              type="radio" 
              v-model="conversionDirection" 
              value="xmlToJson" 
              class="text-primary"
            >
            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">XML 转 JSON</span>
          </label>
          <label class="inline-flex items-center">
            <input 
              type="radio" 
              v-model="conversionDirection" 
              value="jsonToXml" 
              class="text-primary"
            >
            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">JSON 转 XML</span>
          </label>
        </div>
      </div>
      
      <!-- 选项设置 -->
      <div class="mb-4">
        <div class="flex items-center justify-between mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            转换选项
          </label>
          <button 
            @click="showOptions = !showOptions" 
            class="text-xs text-primary hover:text-primary-dark"
          >
            {{ showOptions ? '隐藏选项' : '显示选项' }}
          </button>
        </div>
        
        <div v-if="showOptions" class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700">
          <!-- XML 转 JSON 选项 -->
          <div v-if="conversionDirection === 'xmlToJson'">
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="xmlOptions.ignoreAttributes" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">忽略属性</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                禁用此选项可在JSON中保留XML属性信息
              </p>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="xmlOptions.parseAttributeValue" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">解析属性值</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                将属性中的数字、布尔值等转换为实际类型而非字符串
              </p>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="xmlOptions.ignoreDeclaration" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">忽略XML声明</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                忽略&lt;?xml version="1.0"?&gt;等声明信息
              </p>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="xmlOptions.parseTagValue" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">解析标签值</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                将标签内容中的数字、布尔值等转换为实际类型而非字符串
              </p>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="xmlOptions.trimValues" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">去除值前后空白</span>
              </label>
            </div>
            <div class="mb-3">
              <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                属性前缀
              </label>
              <input 
                type="text" 
                v-model="xmlOptions.attributeNamePrefix" 
                placeholder="如: @, _, attr_" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                在JSON中表示XML属性的前缀，默认为@
              </p>
            </div>
          </div>
          
          <!-- JSON 转 XML 选项 -->
          <div v-else>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="jsonOptions.format" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">格式化XML</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                启用缩进和换行，使XML更易读
              </p>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="jsonOptions.indentBy" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">添加缩进（2个空格）</span>
              </label>
            </div>
            <div class="mb-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="jsonOptions.addDeclaration" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">添加XML声明</span>
              </label>
              <p class="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">
                在XML开头添加 &lt;?xml version="1.0" encoding="UTF-8"?&gt;
              </p>
            </div>
            <div class="mb-3">
              <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                根元素名称（可选）
              </label>
              <input 
                type="text" 
                v-model="jsonOptions.rootName" 
                placeholder="如: root, data, xml" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                当JSON顶层有多个键时使用的根元素名称
              </p>
            </div>
            <div class="mb-3">
              <label class="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                属性前缀识别
              </label>
              <input 
                type="text" 
                v-model="jsonOptions.attributeNamePrefix" 
                placeholder="如: @, _, attr_" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                用于识别JSON中的XML属性的前缀，默认为@
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
          转换
        </button>
        <button 
          @click="swapContent" 
          class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          交换内容
        </button>
        <button 
          @click="clearInput" 
          class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          清空
        </button>
        <button 
          @click="loadExample" 
          class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          加载示例
        </button>
      </div>
    </div>
    
    <!-- 输入输出区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 输入区域 -->
      <div>
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ conversionDirection === 'xmlToJson' ? 'XML 输入' : 'JSON 输入' }}
          </label>
        </div>
        <textarea 
          v-model="inputText" 
          :placeholder="conversionDirection === 'xmlToJson' ? '输入XML...' : '输入JSON...'"
          class="w-full h-96 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
        ></textarea>
      </div>
      
      <!-- 输出区域 -->
      <div>
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ conversionDirection === 'xmlToJson' ? 'JSON 结果' : 'XML 结果' }}
          </label>
          <button 
            v-if="outputText" 
            @click="copyOutput" 
            class="text-xs text-primary hover:text-primary-dark flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            复制
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
      <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">转换统计</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-400">输入大小</p>
          <p class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ formatDataSize(inputText.length) }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-400">输出大小</p>
          <p class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ formatDataSize(outputText.length) }}</p>
        </div>
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-400">大小变化</p>
          <p class="text-lg font-medium" :class="sizeChangeColor">
            {{ sizeChange > 0 ? '+' : '' }}{{ sizeChange }}%
          </p>
        </div>
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-400">转换耗时</p>
          <p class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ conversionTime }}ms</p>
        </div>
      </div>
    </div>
    
    <!-- 帮助说明 -->
    <div class="mt-6">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-md font-medium text-gray-800 dark:text-gray-200">使用帮助</h3>
        <button 
          @click="showHelp = !showHelp" 
          class="text-xs text-primary hover:text-primary-dark"
        >
          {{ showHelp ? '隐藏帮助' : '显示帮助' }}
        </button>
      </div>
      
      <div v-if="showHelp" class="p-4 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
        <h4 class="font-medium mb-2">XML和JSON格式说明</h4>
        <p class="mb-2">XML (eXtensible Markup Language) 是一种可扩展标记语言，广泛用于配置文件、数据交换和Web服务。JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式，易于人阅读和编写，也易于机器解析和生成。</p>
        
        <h4 class="font-medium mb-2 mt-4">XML转JSON注意事项</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li>XML的属性在JSON中默认会转换为以@开头的键</li>
          <li>XML的文本内容在JSON中默认以#text为键</li>
          <li>开启"解析标签值"可将数字、布尔值等转换为实际JSON类型</li>
          <li>XML可以有多个同名标签，转换为JSON时会自动转为数组</li>
        </ul>
        
        <h4 class="font-medium mb-2 mt-4">JSON转XML注意事项</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li>JSON中以@开头的键默认被视为XML属性</li>
          <li>JSON中使用数组会在XML中创建多个同名标签</li>
          <li>复杂的嵌套JSON对象会生成层级化的XML结构</li>
          <li>JSON顶层有多个键且未指定根元素名称时，将生成多个XML根元素</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { XMLParser, XMLBuilder } from 'fast-xml-parser'

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
      alert('已复制到剪贴板')
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
    error.value = `XML 解析错误: ${err.message}`
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
      error.value = `JSON 解析错误: ${err.message}`
      conversionTime.value = Math.round(performance.now() - startTime)
      return ''
    }
    
    // 检查是否为空对象
    if (!obj || typeof obj !== 'object' || (Array.isArray(obj) && obj.length === 0)) {
      error.value = 'JSON 对象为空或无效'
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
    error.value = `XML 生成错误: ${err.message}`
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
    error.value = `转换错误: ${err.message}`
    outputText.value = ''
  }
}

// 监听转换方向变化，但不重置输入
watch(conversionDirection, () => {
  outputText.value = ''
  error.value = ''
})
</script> 