<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.xml-formatter.options.operationType') }}
          </label>
          <div class="flex">
            <button 
              @click="formatMode = 'beautify'" 
              class="px-4 py-2 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600"
              :class="formatMode === 'beautify' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.xml-formatter.actions.beautify') }}
            </button>
            <button 
              @click="formatMode = 'minify'" 
              class="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600"
              :class="formatMode === 'minify' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
            >
              {{ $t('tools.xml-formatter.actions.minify') }}
            </button>
          </div>
        </div>
        
        <div v-if="formatMode === 'beautify'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.xml-formatter.options.indentSettings') }}
          </label>
          <select 
            v-model="indentSize" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="2">{{ $t('tools.xml-formatter.indentOptions.twoSpaces') }}</option>
            <option value="4">{{ $t('tools.xml-formatter.indentOptions.fourSpaces') }}</option>
            <option value="tab">{{ $t('tools.xml-formatter.indentOptions.tabIndent') }}</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.xml-formatter.options.displayOptions') }}
          </label>
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="show-line-numbers" 
              v-model="showLineNumbers"
              class="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label for="show-line-numbers" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {{ $t('tools.xml-formatter.options.showLineNumbers') }}
            </label>
          </div>
        </div>
      </div>
      
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <p>{{ $t('tools.xml-formatter.description') }}</p>
      </div>
    </div>
    
    <!-- 输入区域 -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ $t('tools.xml-formatter.input.xmlInput') }}
        </label>
        <div class="flex space-x-2">
          <button 
            @click="formatXml" 
            class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {{ formatMode === 'beautify' ? $t('tools.xml-formatter.actions.beautify') : $t('tools.xml-formatter.actions.minify') }}
          </button>
          <button 
            @click="clearInput" 
            class="text-sm text-gray-600 dark:text-gray-400 hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            {{ $t('tools.xml-formatter.actions.clear') }}
          </button>
        </div>
      </div>
      <div>
        <div class="border border-gray-300 dark:border-gray-600 rounded-md">
          <textarea 
            v-model="inputXml" 
            rows="10" 
            class="w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm rounded-md"
            :placeholder="$t('tools.xml-formatter.input.placeholder')"
          ></textarea>
        </div>
        <div class="mt-2 text-xs text-right text-gray-500 dark:text-gray-400">
          {{ $t('tools.xml-formatter.messages.characterCount', { 0: inputXml.length }) }}
        </div>
      </div>
      <div v-if="errorMessage" class="mt-2 p-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-sm">
        {{ errorMessage }}
      </div>
    </div>
    
    <!-- 结果区域 -->
    <div v-if="outputXml">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ $t('tools.xml-formatter.messages.formatResult') }}
        </label>
        <button 
          @click="copyOutput" 
          class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          {{ copyStatus ? $t('tools.xml-formatter.messages.copied') : $t('tools.xml-formatter.actions.copyCode') }}
        </button>
      </div>
      
      <!-- 输出显示区域 -->
      <div v-if="!showLineNumbers" class="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden">
        <pre class="px-4 py-3 overflow-auto" style="max-height: 500px;"><code class="language-xml text-sm">{{ outputXml }}</code></pre>
      </div>
      
      <!-- 带行号的输出 -->
      <div v-else class="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden">
        <div class="overflow-auto" style="max-height: 500px;">
          <table class="w-full">
            <tbody>
              <tr v-for="(line, index) in outputLines" :key="index">
                <td class="text-right px-2 py-0 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 select-none border-r border-gray-300 dark:border-gray-700 w-10">
                  {{ index + 1 }}
                </td>
                <td class="pl-4 py-0">
                  <pre class="language-xml text-sm"><code>{{ line }}</code></pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="mt-2 text-xs text-right text-gray-500 dark:text-gray-400">
        {{ $t('tools.xml-formatter.messages.characterAndLineCount', { 0: outputXml.length, 1: outputLines.length }) }}
      </div>
    </div>
    
    <!-- 示例区域 -->
    <div class="mt-8">
      <div class="mb-2">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ $t('tools.xml-formatter.examples.title') }}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.xml-formatter.examples.description') }}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <button 
          @click="loadExample('simple')" 
          class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {{ $t('tools.xml-formatter.examples.simpleXml') }}
        </button>
        <button 
          @click="loadExample('bookstore')" 
          class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {{ $t('tools.xml-formatter.examples.bookstore') }}
        </button>
        <button 
          @click="loadExample('complex')" 
          class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {{ $t('tools.xml-formatter.examples.complexXml') }}
        </button>
      </div>
    </div>
  </div>
  
  <!-- 添加文章部分 -->
  <XmlFormatterArticle />
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import XmlFormatterArticle from './XmlFormatterArticle.vue'

const { t } = useI18n()

// 状态变量
const inputXml = ref('')
const outputXml = ref('')
const errorMessage = ref('')
const formatMode = ref('beautify') // beautify 或 minify
const indentSize = ref('2')
const showLineNumbers = ref(true)
const copyStatus = ref(false)

// 计算属性：获取输出行
const outputLines = computed(() => {
  if (!outputXml.value) return []
  return outputXml.value.split('\n')
})

// 格式化XML函数
function formatXml() {
  if (!inputXml.value.trim()) {
    errorMessage.value = t('tools.xml-formatter.messages.pleaseEnterXml')
    return
  }
  
  try {
    // 使用DOMParser解析XML
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(inputXml.value, 'text/xml')
    
    // 检查是否有解析错误
    const parseError = xmlDoc.getElementsByTagName('parsererror')
    if (parseError.length > 0) {
      errorMessage.value = t('tools.xml-formatter.messages.invalidXml', { 0: parseError[0].textContent })
      return
    }
    
    // 格式化成功，清除错误信息
    errorMessage.value = ''
    
    if (formatMode.value === 'beautify') {
      // 美化XML
      const serializer = new XMLSerializer()
      let xmlString = serializer.serializeToString(xmlDoc)
      
      // 使用自定义函数格式化XML
      outputXml.value = formatXmlString(xmlString)
    } else {
      // 压缩XML
      const serializer = new XMLSerializer()
      let xmlString = serializer.serializeToString(xmlDoc)
      
      // 移除所有空格、换行和制表符
      xmlString = xmlString.replace(/>\s+</g, '><')
      
      outputXml.value = xmlString
    }
  } catch (error) {
    errorMessage.value = t('tools.xml-formatter.messages.processingError', { 0: error.message })
    console.error('XML处理错误:', error)
  }
}

// 格式化XML字符串
function formatXmlString(xml) {
  // 获取缩进
  let indent = ''
  if (indentSize.value === 'tab') {
    indent = '\t'
  } else {
    indent = ' '.repeat(parseInt(indentSize.value))
  }
  
  let formatted = ''
  let indentLevel = 0
  let inComment = false
  let inCDATA = false
  
  // 添加换行和适当的缩进
  xml = xml.replace(/(>)(<)(\/*)/g, '$1\n$2$3')
  
  // 处理每一行
  const lines = xml.split('\n')
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim()
    
    if (line.match(/^<!\[CDATA\[/)) {
      inCDATA = true
    }
    
    if (line.match(/\]\]>$/)) {
      inCDATA = false
    }
    
    if (line.match(/^<!--/)) {
      inComment = true
    }
    
    if (line.match(/-->$/)) {
      inComment = false
    }
    
    if (!inComment && !inCDATA) {
      // 减少缩进级别的标签
      if (line.match(/^<\//)) {
        indentLevel--
      }
      
      // 添加适当的缩进
      if (indentLevel > 0) {
        formatted += indent.repeat(indentLevel) + line + '\n'
      } else {
        formatted += line + '\n'
      }
      
      // 增加缩进级别的标签
      if (line.match(/^<[^/?].*[^/]>$/)) {
        indentLevel++
      }
    } else {
      // 对于注释和CDATA部分保持原样
      formatted += indent.repeat(indentLevel) + line + '\n'
    }
  }
  
  return formatted.trim()
}

// 复制输出结果
function copyOutput() {
  if (!outputXml.value) return
  
  navigator.clipboard.writeText(outputXml.value)
    .then(() => {
      copyStatus.value = true
      setTimeout(() => {
        copyStatus.value = false
      }, 2000)
    })
    .catch(error => {
      console.error('复制失败:', error)
    })
}

// 清空输入和输出
function clearInput() {
  inputXml.value = ''
  outputXml.value = ''
  errorMessage.value = ''
}

// 加载示例XML
function loadExample(type) {
  switch(type) {
    case 'simple':
      inputXml.value = `<note>\n  <to>Tove</to>\n  <from>Jani</from>\n  <heading>Reminder</heading>\n  <body>Don't forget me this weekend!</body>\n</note>`
      break
    case 'bookstore':
      inputXml.value = `<?xml version="1.0" encoding="UTF-8"?>\n<bookstore>\n  <book category="COOKING">\n    <title lang="en">Everyday Italian</title>\n    <author>Giada De Laurentiis</author>\n    <year>2005</year>\n    <price>30.00</price>\n  </book>\n  <book category="CHILDREN">\n    <title lang="en">Harry Potter</title>\n    <author>J K. Rowling</author>\n    <year>2005</year>\n    <price>29.99</price>\n  </book>\n  <book category="WEB">\n    <title lang="en">Learning XML</title>\n    <author>Erik T. Ray</author>\n    <year>2003</year>\n    <price>39.95</price>\n  </book>\n</bookstore>`
      break
    case 'complex':
      inputXml.value = `<?xml version="1.0" encoding="UTF-8"?>\n<employees>\n  <employee id="1">\n    <firstName>John</firstName>\n    <lastName>Doe</lastName>\n    <department>IT</department>\n    <skills>\n      <skill>Java</skill>\n      <skill>SQL</skill>\n      <skill>XML</skill>\n    </skills>\n    <projects>\n      <project>\n        <name>Project A</name>\n        <duration>6 months</duration>\n        <role>Developer</role>\n      </project>\n      <project>\n        <name>Project B</name>\n        <duration>3 months</duration>\n        <role>Team Lead</role>\n      </project>\n    </projects>\n    <address>\n      <street>123 Main St</street>\n      <city>New York</city>\n      <state>NY</state>\n      <zip>10001</zip>\n    </address>\n    <!-- This is a comment about John Doe -->\n    <![CDATA[This is a CDATA section that contains special characters like <, >, and &]]>\n  </employee>\n  <employee id="2">\n    <firstName>Jane</firstName>\n    <lastName>Smith</lastName>\n    <department>HR</department>\n    <skills>\n      <skill>Recruiting</skill>\n      <skill>Management</skill>\n      <skill>Communication</skill>\n    </skills>\n    <projects>\n      <project>\n        <name>Hiring Process Improvement</name>\n        <duration>12 months</duration>\n        <role>Project Manager</role>\n      </project>\n    </projects>\n    <address>\n      <street>456 Park Ave</street>\n      <city>Boston</city>\n      <state>MA</state>\n      <zip>02108</zip>\n    </address>\n  </employee>\n</employees>`
      break
  }
  
  // 自动格式化加载的示例
  formatXml()
}

// 监听输入变化，清除错误信息
watch(inputXml, () => {
  if (errorMessage.value) {
    errorMessage.value = ''
  }
})
</script>

<style scoped>
pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}

code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style> 