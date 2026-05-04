<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('tools.markdown-to-html.options.title') }}
          </label>
          <div class="space-y-2">
            <div class="flex items-center">
              <input type="checkbox" id="realtime-preview" v-model="realtimePreview"
                class="h-4 w-4 text-primary border-gray-300 rounded" />
              <label for="realtime-preview" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {{ t('tools.markdown-to-html.options.realtimePreview') }}
              </label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="scroll-sync" v-model="scrollSync"
                class="h-4 w-4 text-primary border-gray-300 rounded" />
              <label for="scroll-sync" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {{ t('tools.markdown-to-html.options.scrollSync') }}
              </label>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('tools.markdown-to-html.options.htmlOptions') }}
          </label>
          <div class="space-y-2">
            <div class="flex items-center">
              <input type="checkbox" id="sanitize" v-model="sanitize"
                class="h-4 w-4 text-primary border-gray-300 rounded" />
              <label for="sanitize" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {{ t('tools.markdown-to-html.options.sanitize') }}
              </label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="include-css" v-model="includeCss"
                class="h-4 w-4 text-primary border-gray-300 rounded" />
              <label for="include-css" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {{ t('tools.markdown-to-html.options.includeStyle') }}
              </label>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('tools.markdown-to-html.input.loadSample') }}
          </label>
          <div class="flex flex-wrap gap-2">
            <button @click="loadSample('basic')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
              {{ t('tools.markdown-to-html.samples.basic') }}
            </button>
            <button @click="loadSample('extended')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
              {{ t('tools.markdown-to-html.samples.extended') }}
            </button>
            <button @click="loadSample('article')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
              {{ t('tools.markdown-to-html.samples.article') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入/输出区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- 左侧：Markdown输入区域 -->
      <div>
        <div class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 mb-2">
          <div class="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 class="font-medium">{{ t('tools.markdown-to-html.input.title') }}</h3>
            <div class="space-x-2">
              <button @click="clearInput"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.markdown-to-html.input.clearInput')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button @click="pasteFromClipboard"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.markdown-to-html.input.paste')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-3">
            <textarea ref="markdownInput" v-model="markdownText"
              class="w-full h-80 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
              :placeholder="t('tools.markdown-to-html.input.placeholder')" @input="onMarkdownChange"
              @scroll="handleMarkdownScroll"></textarea>
          </div>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400 flex justify-between">
          <span>{{ t('tools.markdown-to-html.input.charCount') }}: {{ markdownText.length }}</span>
          <span>{{ t('tools.markdown-to-html.input.lineCount') }}: {{ markdownText.split('\n').length }}</span>
        </div>
      </div>

      <!-- 右侧：HTML预览区域 -->
      <div>
        <div class="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 mb-2">
          <div class="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
            <div class="flex space-x-2">
              <button @click="previewMode = 'preview'" class="px-3 py-1 text-sm rounded"
                :class="previewMode === 'preview' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'">
                {{ t('tools.markdown-to-html.output.previewTab') }}
              </button>
              <button @click="previewMode = 'html'" class="px-3 py-1 text-sm rounded"
                :class="previewMode === 'html' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'">
                {{ t('tools.markdown-to-html.output.htmlTab') }}
              </button>
            </div>
            <div class="space-x-2">
              <button @click="refreshPreview"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.markdown-to-html.actions.convert')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button @click="copyOutput"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.markdown-to-html.output.copyOutput')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-8m-10 0h4l-5-5-5 5h4v8" />
                </svg>
              </button>
              <button @click="downloadHtml"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.markdown-to-html.output.download')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-3 h-[21.5rem] overflow-auto" ref="previewContainer">
            <!-- 渲染HTML预览 -->
            <div v-if="previewMode === 'preview'" class="prose dark:prose-invert max-w-none w-full markdown-content"
              v-html="htmlOutput" ref="htmlPreview"></div>

            <!-- 显示HTML代码 -->
            <pre v-else
              class="text-sm w-full h-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono overflow-auto"><code>{{ htmlOutput }}</code></pre>
          </div>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ previewMode === 'preview' ? t('tools.markdown-to-html.output.previewMode') :
            t('tools.markdown-to-html.output.sourceMode') }}
        </div>
      </div>
    </div>

    <!-- 转换状态提示 -->
    <div class="mt-4 text-sm text-gray-600 dark:text-gray-400" v-if="lastConversionTime">
      <p>{{ t('tools.markdown-to-html.status.lastConversion') }}: {{ new Date(lastConversionTime).toLocaleTimeString()
        }}</p>
    </div>

    <!-- 复制成功提示 -->
    <div v-if="copySuccess"
      class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300"
      :class="{ 'opacity-100': copySuccess, 'opacity-0': !copySuccess }">
      {{ t('tools.markdown-to-html.alerts.copied') }}
    </div>

    <!-- 添加文章组件 -->
    <MarkdownToHtmlArticle />
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'
import { useI18n } from 'vue-i18n'
import MarkdownToHtmlArticle from './MarkdownToHtmlArticle.vue'

// 初始化国际化
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t, locale } = useI18n()

// 状态变量
const markdownText = ref('')
const htmlOutput = ref('')
const previewMode = ref('preview')
const realtimePreview = ref(true)
const scrollSync = ref(true)
const sanitize = ref(true)
const includeCss = ref(true)
const lastConversionTime = ref(null)
const copySuccess = ref(false)
const isScrolling = ref(false) // 防止滚动循环
const currentSampleType = ref('basic') // 记录当前加载的示例类型

// DOM引用
const markdownInput = ref(null)
const previewContainer = ref(null)
const htmlPreview = ref(null)

// 创建Markdown解析器实例
const md = new MarkdownIt({
  html: true,         // 允许HTML标签
  breaks: true,       // 转换'\n'为<br>
  linkify: true,      // 自动检测链接
  typographer: true   // 启用一些语言中性的替换+引号美化
})

// 处理Markdown输入变化
function onMarkdownChange() {
  if (realtimePreview.value) {
    convertMarkdownToHtml()
  }
}

// 转换Markdown为HTML
function convertMarkdownToHtml() {
  try {
    // 解析Markdown获取HTML
    let html = md.render(markdownText.value)

    // 如果需要，对HTML进行消毒
    if (sanitize.value) {
      html = DOMPurify.sanitize(html)
    }

    // 如果需要包含基础CSS样式
    if (includeCss.value && previewMode.value === 'html') {
      html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Markdown转换结果</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 1rem;
    }
    h1, h2, h3, h4, h5, h6 {
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }
    p {
      margin: 1em 0;
    }
    a {
      color: #0366d6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    code {
      background-color: #f6f8fa;
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
      font-size: 85%;
    }
    pre {
      background-color: #f6f8fa;
      padding: 1em;
      border-radius: 3px;
      overflow: auto;
    }
    pre code {
      background-color: transparent;
      padding: 0;
    }
    blockquote {
      border-left: 4px solid #dfe2e5;
      padding-left: 1em;
      color: #6a737d;
      margin: 1em 0;
    }
    img {
      max-width: 100%;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1em 0;
    }
    table th, table td {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }
    table tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
    }
    table tr:nth-child(2n) {
      background-color: #f6f8fa;
    }
  </style>
</head>
<body>
${html}
</body>
</html>`
    }

    htmlOutput.value = html
    lastConversionTime.value = Date.now()
  } catch (error) {
    console.error('转换Markdown出错:', error)
    htmlOutput.value = `<div class="text-red-500">转换错误: ${error.message}</div>`
  }
}

// 刷新预览
function refreshPreview() {
  convertMarkdownToHtml()
}

// 清空输入
function clearInput() {
  markdownText.value = ''
  convertMarkdownToHtml()
}

// 从剪贴板粘贴
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText()
    markdownText.value = text
    convertMarkdownToHtml()
  } catch (err) {
    console.error('无法从剪贴板读取:', err)
    toastRef.value.show('无法从剪贴板读取文本。您可能需要在安全的上下文(HTTPS)中运行，或授予网站权限。')
  }
}

// 复制输出到剪贴板
async function copyOutput() {
  try {
    await navigator.clipboard.writeText(htmlOutput.value)
    copySuccess.value = true
    setTimeout(() => {
      copySuccess.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
    toastRef.value.show('复制HTML到剪贴板失败')
  }
}

// 下载HTML文件
function downloadHtml() {
  const blob = new Blob([htmlOutput.value], { type: 'text/html' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'markdown-export.html'
  document.body.appendChild(a)
  a.click()

  // 清理
  setTimeout(() => {
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, 0)
}

// 处理滚动同步
function handleMarkdownScroll(e) {
  if (!scrollSync.value || isScrolling.value || !markdownInput.value || !previewContainer.value || previewMode.value !== 'preview') {
    return
  }

  isScrolling.value = true

  const sourceElement = markdownInput.value
  const targetElement = previewContainer.value

  const percentage = sourceElement.scrollTop / (sourceElement.scrollHeight - sourceElement.clientHeight)
  const targetScrollTop = percentage * (targetElement.scrollHeight - targetElement.clientHeight)

  targetElement.scrollTop = targetScrollTop

  setTimeout(() => {
    isScrolling.value = false
  }, 100)
}

// 反向滚动同步 (预览区域滚动时)
function handlePreviewScroll() {
  if (!scrollSync.value || isScrolling.value || !markdownInput.value || !previewContainer.value || previewMode.value !== 'preview') {
    return
  }

  isScrolling.value = true

  const sourceElement = previewContainer.value
  const targetElement = markdownInput.value

  const percentage = sourceElement.scrollTop / (sourceElement.scrollHeight - sourceElement.clientHeight)
  const targetScrollTop = percentage * (targetElement.scrollHeight - targetElement.clientHeight)

  targetElement.scrollTop = targetScrollTop

  setTimeout(() => {
    isScrolling.value = false
  }, 100)
}

// 加载示例Markdown
function loadSample(type) {
  // 记录当前加载的示例类型
  currentSampleType.value = type

  // 使用 i18n 当前语言
  const currentLocale = locale.value;

  switch (type) {
    case 'basic':
      if (currentLocale === 'en') {
        markdownText.value = `# Markdown Basic Syntax Example

## 1. Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## 2. Text Formatting

Plain text

**Bold text**

*Italic text*

~~Strikethrough~~

**_Bold and italic_**

## 3. Lists

### Unordered Lists
- Item 1
- Item 2
  - Sub-item A
  - Sub-item B

### Ordered Lists
1. First item
2. Second item
3. Third item

## 4. Links and Images

[Link to Google](https://www.google.com)

![Image example](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjY2NjY2NjIiAvPgogICAgPHRleHQgeD0iNzUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM0NDQ0NDQiPjE1MHgxNTA8L3RleHQ+Cjwvc3ZnPg==)

## 5. Blockquotes

> This is a blockquote
> 
> Blockquotes can span multiple lines

## 6. Code

Inline code: \`console.log('Hello World')\`

Code block:
\`\`\`javascript
function greeting(name) {
  return \`Hello, \${name}!\`;
}
console.log(greeting('World'));
\`\`\`

## 7. Tables

| Name | Age | Occupation |
| ---- | --- | ---------- |
| John | 25  | Engineer   |
| Jane | 30  | Designer   |
| Bob  | 28  | Product Manager |

## 8. Horizontal Rules

---

***
`
      } else if (currentLocale === 'zh') {
        markdownText.value = `# Markdown基础语法示例

## 1. 标题

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 2. 文本格式

普通文本

**粗体文本**

*斜体文本*

~~删除线~~

**_粗斜体文本_**

## 3. 列表

### 无序列表
- 项目1
- 项目2
  - 子项目A
  - 子项目B

### 有序列表
1. 第一项
2. 第二项
3. 第三项

## 4. 链接和图片

[链接到百度](https://www.baidu.com)

![图片示例](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjY2NjY2NjIiAvPgogICAgPHRleHQgeD0iNzUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM0NDQ0NDQiPjE1MHgxNTA8L3RleHQ+Cjwvc3ZnPg==)

## 5. 引用

> 这是一段引用文本
> 
> 引用可以有多行

## 6. 代码

行内代码: \`console.log('Hello World')\`

代码块:
\`\`\`javascript
function greeting(name) {
  return \`Hello, \${name}!\`;
}
console.log(greeting('World'));
\`\`\`

## 7. 表格

| 姓名 | 年龄 | 职业 |
| ---- | ---- | ---- |
| 张三 | 25   | 工程师 |
| 李四 | 30   | 设计师 |
| 王五 | 28   | 产品经理 |

## 8. 分隔线

---

***
`
      } else if (currentLocale === 'es') {
        markdownText.value = `# Ejemplo de Sintaxis Básica de Markdown

## 1. Encabezados

# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6

## 2. Formato de Texto

Texto plano

**Texto en negrita**

*Texto en cursiva*

~~Texto tachado~~

**_Negrita y cursiva_**

## 3. Listas

### Listas sin Orden
- Elemento 1
- Elemento 2
  - Sub-elemento A
  - Sub-elemento B

### Listas Ordenadas
1. Primer elemento
2. Segundo elemento
3. Tercer elemento

## 4. Enlaces e Imágenes

[Enlace a Google](https://www.google.com)

![Ejemplo de imagen](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjY2NjY2NjIiAvPgogICAgPHRleHQgeD0iNzUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM0NDQ0NDQiPjE1MHgxNTA8L3RleHQ+Cjwvc3ZnPg==)

## 5. Citas

> Esto es una cita
> 
> Las citas pueden abarcar múltiples líneas

## 6. Código

Código en línea: \`console.log('Hola Mundo')\`

Bloque de código:
\`\`\`javascript
function saludo(nombre) {
  return \`Hola, \${nombre}!\`;
}
console.log(saludo('Mundo'));
\`\`\`

## 7. Tablas

| Nombre | Edad | Ocupación |
| ------ | ---- | --------- |
| Juan   | 25   | Ingeniero |
| María  | 30   | Diseñadora |
| Roberto | 28  | Gerente de Producto |

## 8. Reglas Horizontales

---

***
`
      } else if (currentLocale === 'hi') {
        markdownText.value = `# मार्कडाउन बेसिक सिंटैक्स उदाहरण

## 1. शीर्षक

# शीर्षक 1
## शीर्षक 2
### शीर्षक 3
#### शीर्षक 4
##### शीर्षक 5
###### शीर्षक 6

## 2. टेक्स्ट फॉर्मेटिंग

सादा टेक्स्ट

**बोल्ड टेक्स्ट**

*इटैलिक टेक्स्ट*

~~स्ट्राइकथ्रू टेक्स्ट~~

**_बोल्ड और इटैलिक_**

## 3. सूचियाँ

### अनऑर्डर्ड सूचियाँ
- आइटम 1
- आइटम 2
  - सब-आइटम A
  - सब-आइटम B

### ऑर्डर्ड सूचियाँ
1. पहला आइटम
2. दूसरा आइटम
3. तीसरा आइटम

## 4. लिंक और छवियाँ

[गूगल पर जाएं](https://www.google.com)

![छवि उदाहरण](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjY2NjY2NjIiAvPgogICAgPHRleHQgeD0iNzUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM0NDQ0NDQiPjE1MHgxNTA8L3RleHQ+Cjwvc3ZnPg==)

## 5. ब्लॉकक्वोट्स

> यह एक ब्लॉकक्वोट है
> 
> ब्लॉकक्वोट्स कई पंक्तियों में हो सकते हैं

## 6. कोड

इनलाइन कोड: \`console.log('नमस्ते दुनिया')\`

कोड ब्लॉक:
\`\`\`javascript
function नमस्कार(नाम) {
  return \`नमस्ते, \${नाम}!\`;
}
console.log(नमस्कार('दुनिया'));
\`\`\`

## 7. तालिकाएँ

| नाम | उम्र | व्यवसाय |
| ---- | --- | ---------- |
| राहुल | 25  | इंजीनियर   |
| प्रिया | 30  | डिज़ाइनर   |
| अमित  | 28  | प्रोडक्ट मैनेजर |

## 8. क्षैतिज रेखाएँ

---

***
`
      } else if (currentLocale === 'ar') {
        markdownText.value = `# مثال على بناء جملة ماركداون الأساسي

## 1. العناوين

# عنوان 1
## عنوان 2
### عنوان 3
#### عنوان 4
##### عنوان 5
###### عنوان 6

## 2. تنسيق النص

نص عادي

**نص غامق**

*نص مائل*

~~نص مشطوب~~

**_نص غامق ومائل_**

## 3. القوائم

### قوائم غير مرتبة
- عنصر 1
- عنصر 2
  - عنصر فرعي أ
  - عنصر فرعي ب

### قوائم مرتبة
1. العنصر الأول
2. العنصر الثاني
3. العنصر الثالث

## 4. الروابط والصور

[رابط إلى جوجل](https://www.google.com)

![مثال صورة](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjY2NjY2NjIiAvPgogICAgPHRleHQgeD0iNzUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM0NDQ0NDQiPjE1MHgxNTA8L3RleHQ+Cjwvc3ZnPg==)

## 5. الاقتباسات

> هذا اقتباس
> 
> يمكن أن تمتد الاقتباسات على عدة أسطر

## 6. الكود

كود ضمن السطر: \`console.log('مرحبا بالعالم')\`

كتلة كود:
\`\`\`javascript
function تحية(اسم) {
  return \`مرحبا، \${اسم}!\`;
}
console.log(تحية('العالم'));
\`\`\`

## 7. الجداول

| الاسم | العمر | المهنة |
| ----- | ----- | ------ |
| محمد  | 25    | مهندس  |
| سارة  | 30    | مصممة  |
| أحمد  | 28    | مدير منتج |

## 8. خطوط أفقية

---

***
`
      } else if (currentLocale === 'ru') {
        markdownText.value = `# Markdown: простой, но мощный язык форматирования текста

## Введение

В эпоху создания цифрового контента **Markdown** стал предпочтительным легковесным языком разметки для технической документации, ведения блогов и управления контентом. В этой статье рассматривается история Markdown, его базовый синтаксис и широкое применение.

## История и философия дизайна Markdown

Markdown был создан Джоном Грубером и Аароном Шварцем в 2004 году. Его целью было позволить людям писать в легко читаемом и легко редактируемом текстовом формате, который можно было бы преобразовать в структурно правильный HTML.

> "Главная цель дизайна синтаксиса форматирования Markdown — сделать его максимально читаемым. Идея заключается в том, что документ с форматированием Markdown должен публиковаться как есть, в виде простого текста, не выглядя так, будто он размечен тегами или инструкциями форматирования."
> — Джон Грубер

Эта философия дизайна отличает Markdown от других языков разметки: **он фокусируется на содержании, а не на внешнем виде**.

## Основной синтаксис Markdown

Markdown предлагает простой набор правил синтаксиса. Вот некоторые базовые элементы:

### 1. Заголовки

Markdown использует символ # для обозначения уровней заголовков:

\`\`\`markdown
# Заголовок 1
## Заголовок 2
### Заголовок 3
\`\`\`

### 2. Форматированный текст

- **Жирный**: \`**текст**\` или \`__текст__\`
- *Курсив*: \`*текст*\` или \`_текст_\`
- ~~Зачеркнутый~~: \`~~текст~~\`

### 3. Списки

Неупорядоченные списки используют дефисы, плюсы или звездочки в качестве маркеров:

- Пункт 1
- Пункт 2
  - Подпункт A
  - Подпункт B

Упорядоченные списки используют числа, за которыми следуют точки:

1. Первый пункт
2. Второй пункт
3. Третий пункт

### 4. Ссылки и изображения

Синтаксис ссылки: \`[текст ссылки](URL)\`  
Синтаксис изображения: \`![альтернативный текст](URL изображения)\`

### 5. Блоки кода

\`\`\`javascript
function приветМир() {
  console.log("Привет, мир!");
}
\`\`\`

## Широкое применение Markdown

Markdown широко используется на различных платформах и в инструментах:

| Платформа/Инструмент | Применение |
| -------------------- | ---------- |
| GitHub               | Документация кода, Issues, Pull Requests |
| Stack Overflow       | Форматирование вопросов |
| WordPress            | Ведение блогов |
| Discord/Slack        | Форматирование сообщений |
| Notion               | Заметки и управление знаниями |

## Заключение

Благодаря своей простоте, эффективности и кроссплатформенным возможностям, Markdown стал незаменимым инструментом для создателей контента. Будь то написание технической документации, сообщений в блоге или простых заметок, Markdown обеспечивает последовательный и эффективный опыт написания.

Изучение Markdown не сложно, но овладение им значительно повысит вашу продуктивность в цифровом письме. Если вы еще не пробовали Markdown, сейчас самое подходящее время начать!

---

*Автор: Энтузиаст Markdown*  
*Опубликовано: 15 октября 2023 г.*
`
      } else if (currentLocale === 'fr') {
        markdownText.value = `# Exemple de Syntaxe de Base Markdown

## 1. Titres

# Titre 1
## Titre 2
### Titre 3
#### Titre 4
##### Titre 5
###### Titre 6

## 2. Formatage de Texte

Texte simple

**Texte en gras**

*Texte en italique*

~~Texte barré~~

**_Gras et italique_**

## 3. Listes

### Listes non ordonnées
- Élément 1
- Élément 2
  - Sous-élément A
  - Sous-élément B

### Listes ordonnées
1. Premier élément
2. Deuxième élément
3. Troisième élément

## 4. Liens et Images

[Lien vers Google](https://www.google.com)

![Exemple d'image](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjY2NjY2NjIiAvPgogICAgPHRleHQgeD0iNzUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM0NDQ0NDQiPjE1MHgxNTA8L3RleHQ+Cjwvc3ZnPg==)

## 5. Citations

> Ceci est une citation
> 
> Les citations peuvent s'étendre sur plusieurs lignes

## 6. Code

Code en ligne: \`console.log('Bonjour le Monde')\`

Bloc de code:
\`\`\`javascript
function salutation(nom) {
  return \`Bonjour, \${nom}!\`;
}
console.log(salutation('Monde'));
\`\`\`

## 7. Tableaux

| Nom | Âge | Profession |
| --- | --- | ---------- |
| Jean | 25  | Ingénieur  |
| Marie | 30  | Designer   |
| Pierre | 28 | Chef de Produit |

## 8. Règles Horizontales

---

***
`
      } else if (currentLocale === 'ja') {
        markdownText.value = `# Markdown：シンプルで強力なテキスト書式設定言語

## はじめに

デジタルコンテンツ作成の時代において、**Markdown**は技術文書、ブログ執筆、コンテンツ管理のための軽量マークアップ言語として好まれています。この記事ではMarkdownの歴史、基本構文、広範な応用について探ります。

## Markdownの歴史と設計哲学

Markdownは2004年にJohn GruberとAaron Swartzによって作成されました。その設計目標は、構造的に有効なHTMLに変換できる、読みやすく書きやすいプレーンテキスト形式で書けるようにすることでした。

> 「Markdownの書式構文の最優先の設計目標は、できるだけ読みやすくすることです。Markdownでフォーマットされた文書は、タグや書式指示で装飾されているように見えることなく、そのままプレーンテキストとして公開できるべきだという考えです。」
> — John Gruber

この設計哲学がMarkdownを他のマークアップ言語と区別しています：**外観よりもコンテンツに焦点を当てています**。

## Markdownの基本構文

Markdownはシンプルな構文ルールのセットを提供します。以下にいくつかの基本要素を示します：

### 1. 見出し

Markdownでは#記号を使って見出しレベルを示します：

\`\`\`markdown
# 見出し1
## 見出し2
### 見出し3
\`\`\`

### 2. 書式付きテキスト

- **太字**: \`**テキスト**\` または \`__テキスト__\`
- *斜体*: \`*テキスト*\` または \`_テキスト_\`
- ~~取り消し線~~: \`~~テキスト~~\`

### 3. リスト

順序なしリストはハイフン、プラス記号、またはアスタリスクをリストマーカーとして使用します：

- 項目1
- 項目2
  - サブ項目A
  - サブ項目B

順序付きリストはピリオドの後に数字を使用します：

1. 最初の項目
2. 2番目の項目
3. 3番目の項目

### 4. リンクと画像

リンク構文: \`[リンクテキスト](URL)\`  
画像構文: \`![代替テキスト](画像URL)\`

### 5. コードブロック

\`\`\`javascript
function helloWorld() {
  console.log("こんにちは、世界！");
}
\`\`\`

## Markdownの広範な応用

Markdownはさまざまなプラットフォームやツールで広く使用されています：

| プラットフォーム/ツール | 応用 |
| ------------- | ----------- |
| GitHub        | コード文書、Issues、Pull Requests |
| Stack Overflow | 質問のフォーマット |
| WordPress     | ブログ執筆 |
| Discord/Slack | メッセージのフォーマット |
| Notion        | ノートと知識管理 |

## 結論

シンプルさ、効率性、クロスプラットフォーム機能により、Markdownはコンテンツ作成者にとって貴重なツールとなっています。技術文書、ブログ投稿、または単純なメモを書く場合でも、Markdownは一貫性のある効率的な執筆体験を提供します。

Markdownの学習は難しくありませんが、習得することでデジタル執筆の生産性が大幅に向上します。まだMarkdownを試していない場合は、今が始めるのに最適なタイミングです！

---

*著者：Markdown愛好家*  
*公開日：2023年10月15日*
`
      } else if (currentLocale === 'pt') {
        markdownText.value = `# Exemplo de Sintaxe Básica Markdown

## 1. Títulos

# Título 1
## Título 2
### Título 3
#### Título 4
##### Título 5
###### Título 6

## 2. Formatação de Texto

Texto simples

**Texto em negrito**

*Texto em itálico*

~~Texto riscado~~

**_Negrito e itálico_**

## 3. Listas

### Listas não ordenadas
- Item 1
- Item 2
  - Sub-item A
  - Sub-item B

### Listas ordenadas
1. Primeiro item
2. Segundo item
3. Terceiro item

## 4. Links e Imagens

[Link para Google](https://www.google.com)

![Exemplo de imagem](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjY2NjY2NjIiAvPgogICAgPHRleHQgeD0iNzUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM0NDQ0NDQiPjE1MHgxNTA8L3RleHQ+Cjwvc3ZnPg==)

## 5. Citações

> Esta é uma citação
> 
> As citações podem se estender por várias linhas

## 6. Código

Código em linha: \`console.log('Olá Mundo')\`

Bloco de código:
\`\`\`javascript
function saudacao(nome) {
  return \`Olá, \${nome}!\`;
}
console.log(saudacao('Mundo'));
\`\`\`

## 7. Tabelas

| Nome | Idade | Profissão |
| --- | --- | ---------- |
| João | 25  | Engenheiro  |
| Maria | 30  | Designer   |
| Pedro | 28 | Gerente de Produto |

## 8. Linhas Horizontais

---

***
`
      } else if (currentLocale === 'id') {
        markdownText.value = `# Contoh Sintaks Dasar Markdown

## 1. Judul

# Judul 1
## Judul 2
### Judul 3
#### Judul 4
##### Judul 5
###### Judul 6

## 2. Format Teks

Teks biasa

**Teks tebal**

*Teks miring*

~~Teks dicoret~~

**_Tebal dan miring_**

## 3. Daftar

### Daftar Tidak Berurutan
- Item 1
- Item 2
  - Sub-item A
  - Sub-item B

### Daftar Berurutan
1. Item pertama
2. Item kedua
3. Item ketiga

## 4. Tautan dan Gambar

[Tautan ke Google](https://www.google.com)

![Contoh gambar](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjY2NjY2NjIiAvPgogICAgPHRleHQgeD0iNzUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM0NDQ0NDQiPjE1MHgxNTA8L3RleHQ+Cjwvc3ZnPg==)

## 5. Kutipan

> Ini adalah kutipan
> 
> Kutipan dapat terdiri dari beberapa baris

## 6. Kode

Kode sebaris: \`console.log('Halo Dunia')\`

Blok kode:
\`\`\`javascript
function sapa(nama) {
  return \`Halo, \${nama}!\`;
}
console.log(sapa('Dunia'));
\`\`\`

## 7. Tabel

| Nama | Umur | Pekerjaan |
| ---- | ---- | --------- |
| Andi | 25   | Insinyur  |
| Budi | 30   | Desainer  |
| Citra| 28   | Manajer Produk |

## 8. Garis Horizontal

---

***
`
      } else if (currentLocale === 'de') {
        markdownText.value = `# Beispiel für grundlegende Markdown-Syntax

## 1. Überschriften

# Überschrift 1
## Überschrift 2
### Überschrift 3
#### Überschrift 4
##### Überschrift 5
###### Überschrift 6

## 2. Textformatierung

Normaler Text

**Fetter Text**

*Kursiver Text*

~~Durchgestrichener Text~~

**_Fett und kursiv_**

## 3. Listen

### Ungeordnete Listen
- Element 1
- Element 2
  - Unterelement A
  - Unterelement B

### Geordnete Listen
1. Erstes Element
2. Zweites Element
3. Drittes Element

## 4. Links und Bilder

[Link zu Google](https://www.google.com)

![Beispielbild](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjY2NjY2NjIiAvPgogICAgPHRleHQgeD0iNzUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM0NDQ0NDQiPjE1MHgxNTA8L3RleHQ+Cjwvc3ZnPg==)

## 5. Zitate

> Dies ist ein Zitat
> 
> Zitate können sich über mehrere Zeilen erstrecken

## 6. Code

Inline-Code: \`console.log('Hallo Welt')\`

Code-Block:
\`\`\`javascript
function grüßen(name) {
  return \`Hallo, \${name}!\`;
}
console.log(grüßen('Welt'));
\`\`\`

## 7. Tabellen

| Name | Alter | Beruf |
| ---- | ----- | ----- |
| Hans | 25    | Ingenieur |
| Anna | 30    | Designer |
| Max  | 28    | Produktmanager |

## 8. Horizontale Linien

---

***
`
      } else if (currentLocale === 'ko') {
        markdownText.value = `# Markdown 기본 문법 예제

## 1. 제목

# 1단계 제목
## 2단계 제목
### 3단계 제목
#### 4단계 제목
##### 5단계 제목
###### 6단계 제목

## 2. 텍스트 서식

일반 텍스트

**굵은 텍스트**

*기울임 텍스트*

~~취소선~~

**_굵은 기울임 텍스트_**

## 3. 목록

### 순서 없는 목록
- 항목1
- 항목2
  - 하위 항목A
  - 하위 항목B

### 순서 있는 목록
1. 첫 번째 항목
2. 두 번째 항목
3. 세 번째 항목

## 4. 링크와 이미지

[네이버로 이동](https://www.naver.com)

![이미지 예시](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjY2NjY2NjIiAvPgogICAgPHRleHQgeD0iNzUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM0NDQ0NDQiPjE1MHgxNTA8L3RleHQ+Cjwvc3ZnPg==)

## 5. 인용문

> 이것은 인용문입니다
> 
> 여러 줄로 작성할 수 있습니다

## 6. 코드

인라인 코드: \`console.log('Hello World')\`

코드 블록:
\`\`\`javascript
function greeting(name) {
  return \`Hello, \${name}!\`;
}
console.log(greeting('World'));
\`\`\`

## 7. 표

| 이름 | 나이 | 직업 |
| ---- | ---- | ---- |
| 김철수 | 25   | 엔지니어 |
| 이영희 | 30   | 디자이너 |
| 박민수 | 28   | 제품 매니저 |

## 8. 구분선

---

***
`
      } else if (currentLocale === 'it') {
        markdownText.value = `# Esempio di Sintassi Base Markdown

## 1. Titoli

# Titolo Livello 1
## Titolo Livello 2
### Titolo Livello 3
#### Titolo Livello 4
##### Titolo Livello 5
###### Titolo Livello 6

## 2. Formattazione Testo

Testo normale

**Testo in grassetto**

*Testo in corsivo*

~~Testo barrato~~

**_Testo in grassetto e corsivo_**

## 3. Liste

### Lista non ordinata
- Elemento 1
- Elemento 2
  - Sottoelemento A
  - Sottoelemento B

### Lista ordinata
1. Primo elemento
2. Secondo elemento
3. Terzo elemento

## 4. Link e Immagini

[Link a Google](https://www.google.com)



## 5. Citazioni

> Questo è un testo citato
> 
> Le citazioni possono avere più righe

## 6. Codice

Codice inline: \`console.log('Ciao Mondo')\`

Blocco di codice:
\`\`\`javascript
function saluto(nome) {
  return \`Ciao, \${nome}!\`;
}
console.log(saluto('Mondo'));
\`\`\`

## 7. Tabelle

| Nome | Età | Professione |
| ---- | --- | ----------- |
| Mario | 25 | Ingegnere |
| Luigi | 30 | Designer |
| Anna | 28 | Product Manager |

## 8. Linee divisorie

---

***
`
      } else if (currentLocale === 'zh-TW') {
        markdownText.value = `# Markdown基礎語法範例

## 1. 標題

# 一級標題
## 二級標題
### 三級標題
#### 四級標題
##### 五級標題
###### 六級標題

## 2. 文字格式

普通文字

**粗體文字**

*斜體文字*

~~刪除線~~

**_粗斜體文字_**

## 3. 清單

### 無序清單
- 項目1
- 項目2
  - 子項目A
  - 子項目B

### 有序清單
1. 第一項
2. 第二項
3. 第三項

## 4. 連結和圖片

[連結到百度](https://www.baidu.com)



## 5. 引用

> 這是一段引用文字
> 
> 引用可以有多行

## 6. 程式碼

行內程式碼: \`console.log('Hello World')\`

程式碼區塊:
\`\`\`javascript
function greeting(name) {
  return \`Hello, \${name}!\`;
}
console.log(greeting('World'));
\`\`\`

## 7. 表格

| 姓名 | 年齡 | 職業 |
| ---- | ---- | ---- |
| 張三 | 25   | 工程師 |
| 李四 | 30   | 設計師 |
| 王五 | 28   | 產品經理 |

## 8. 分隔線

---

***
`
      } else {
        console.error('Invalid locale:', currentLocale);
        throw new Error('Invalid locale');
      }
      break;
    case 'extended':
      if (currentLocale === 'en') {
        markdownText.value = `# Markdown Extended Syntax

## 1. Task Lists

- [x] Completed task
- [ ] Pending task
- [x] Another completed task

## 2. Emoji

Supports GitHub-style emoji like :smile: :heart: :thumbsup:

## 3. Math Formulas (requires extension)

Inline formula: $E=mc^2$

Block formula:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. Footnotes

Here's a footnote reference[^1]

[^1]: This is the footnote content.

## 5. Definition Lists

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

## 6. Highlighting (requires extension)

This is ==highlighted text==

## 7. Superscript and Subscript (requires extension)

Superscript: X^2^
Subscript: H~2~O

## 8. Admonitions (requires extension)

:::warning
This is a warning message
:::

:::info
This is an informational message
:::

## 9. Custom Containers (requires extension)

::: details Click to expand details
Here is the detailed content
:::

## 10. Flowcharts (requires extension)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. Table of Contents (requires extension)

[TOC]
`
      } else if (currentLocale === 'zh') {
        markdownText.value = `# Markdown扩展语法

## 1. 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [x] 又一个已完成任务

## 2. 表情符号

支持 :smile: :heart: :thumbsup: 等Github风格的表情

## 3. 数学公式 (需扩展支持)

行内公式: $E=mc^2$

块级公式:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. 脚注

这里有一个脚注[^1]

[^1]: 这是脚注的内容。

## 5. 定义列表

术语 1
: 定义 1

术语 2
: 定义 2a
: 定义 2b

## 6. 高亮标记 (需扩展支持)

这是一段==高亮文本==

## 7. 上标和下标 (需扩展支持)

上标: X^2^
下标: H~2~O

## 8. 警告块 (需扩展支持)

:::warning
这是一个警告信息
:::

:::info
这是一条提示信息
:::

## 9. 自定义容器 (需扩展支持)

::: details 点击展开详情
这里是详细内容
:::

## 10. 流程图 (需扩展支持)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. 目录 (需扩展支持)

[TOC]
`
      } else if (currentLocale === 'es') {
        markdownText.value = `# Sintaxis Extendida de Markdown

## 1. Listas de Tareas

- [x] Tarea completada
- [ ] Tarea pendiente
- [x] Otra tarea completada

## 2. Emojis

Soporta emojis estilo GitHub como :smile: :heart: :thumbsup:

## 3. Fórmulas Matemáticas (requiere extensión)

Fórmula en línea: $E=mc^2$

Fórmula en bloque:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. Notas al Pie

Aquí hay una referencia a nota al pie[^1]

[^1]: Este es el contenido de la nota al pie.

## 5. Listas de Definición

Término 1
: Definición 1

Término 2
: Definición 2a
: Definición 2b

## 6. Resaltado (requiere extensión)

Este es un ==texto resaltado==

## 7. Superíndice y Subíndice (requiere extensión)

Superíndice: X^2^
Subíndice: H~2~O

## 8. Advertencias (requiere extensión)

:::warning
Este es un mensaje de advertencia
:::

:::info
Este es un mensaje informativo
:::

## 9. Contenedores Personalizados (requiere extensión)

::: details Haga clic para expandir detalles
Aquí está el contenido detallado
:::

## 10. Diagramas de Flujo (requiere extensión)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. Tabla de Contenidos (requiere extensión)

[TOC]
`
      } else if (currentLocale === 'hi') {
        markdownText.value = `# मार्कडाउन विस्तारित सिंटैक्स

## 1. कार्य सूचियाँ

- [x] पूर्ण किया गया कार्य
- [ ] लंबित कार्य
- [x] एक और पूर्ण किया गया कार्य

## 2. इमोजी

GitHub-शैली के इमोजी का समर्थन करता है जैसे :smile: :heart: :thumbsup:

## 3. गणित सूत्र (एक्सटेंशन की आवश्यकता है)

इनलाइन सूत्र: $E=mc^2$

ब्लॉक सूत्र:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. फुटनोट्स

यहाँ एक फुटनोट संदर्भ है[^1]

[^1]: यह फुटनोट सामग्री है।

## 5. परिभाषा सूचियाँ

शब्द 1
: परिभाषा 1

शब्द 2
: परिभाषा 2a
: परिभाषा 2b

## 6. हाइलाइटिंग (एक्सटेंशन की आवश्यकता है)

यह ==हाइलाइट किया गया टेक्स्ट== है

## 7. सुपरस्क्रिप्ट और सबस्क्रिप्ट (एक्सटेंशन की आवश्यकता है)

सुपरस्क्रिप्ट: X^2^
सबस्क्रिप्ट: H~2~O

## 8. चेतावनियाँ (एक्सटेंशन की आवश्यकता है)

:::warning
यह एक चेतावनी संदेश है
:::

:::info
यह एक सूचनात्मक संदेश है
:::

## 9. कस्टम कंटेनर्स (एक्सटेंशन की आवश्यकता है)

::: details विवरण देखने के लिए क्लिक करें
यहाँ विस्तृत सामग्री है
:::

## 10. फ्लोचार्ट्स (एक्सटेंशन की आवश्यकता है)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. विषय-सूची (एक्सटेंशन की आवश्यकता है)

[TOC]
`
      } else if (currentLocale === 'ar') {
        markdownText.value = `# بناء جملة ماركداون الموسعة

## 1. قوائم المهام

- [x] مهمة مكتملة
- [ ] مهمة معلقة
- [x] مهمة مكتملة أخرى

## 2. الرموز التعبيرية

يدعم الرموز التعبيرية على طراز GitHub مثل :smile: :heart: :thumbsup:

## 3. الصيغ الرياضية (تتطلب ملحقًا)

صيغة مضمنة: $E=mc^2$

صيغة كتلة:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. الحواشي السفلية

هنا مرجع حاشية سفلية[^1]

[^1]: هذا هو محتوى الحاشية السفلية.

## 5. قوائم التعريف

المصطلح 1
: التعريف 1

المصطلح 2
: التعريف 2أ
: التعريف 2ب

## 6. التظليل (يتطلب ملحقًا)

هذا هو ==نص مظلل==

## 7. الأس والمنخفض (يتطلب ملحقًا)

الأس: X^2^
المنخفض: H~2~O

## 8. التحذيرات (تتطلب ملحقًا)

:::warning
هذه رسالة تحذير
:::

:::info
هذه رسالة إعلامية
:::

## 9. الحاويات المخصصة (تتطلب ملحقًا)

::: details انقر لتوسيع التفاصيل
هنا المحتوى المفصل
:::

## 10. مخططات التدفق (تتطلب ملحقًا)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. جدول المحتويات (يتطلب ملحقًا)

[TOC]
`
      } else if (currentLocale === 'ru') {
        markdownText.value = `# Расширенный синтаксис Markdown

## 1. Списки задач

- [x] Выполненная задача
- [ ] Ожидающая задача
- [x] Ещё одна выполненная задача

## 2. Эмодзи

Поддерживает эмодзи в стиле GitHub, такие как :smile: :heart: :thumbsup:

## 3. Математические формулы (требуется расширение)

Встроенная формула: $E=mc^2$

Блок формулы:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. Сноски

Вот ссылка на сноску[^1]

[^1]: Это содержимое сноски.

## 5. Списки определений

Термин 1
: Определение 1

Термин 2
: Определение 2a
: Определение 2b

## 6. Выделение (требуется расширение)

Это ==выделенный текст==

## 7. Надстрочные и подстрочные индексы (требуется расширение)

Надстрочный индекс: X^2^
Подстрочный индекс: H~2~O

## 8. Предупреждения (требуется расширение)

:::warning
Это предупреждающее сообщение
:::

:::info
Это информационное сообщение
:::

## 9. Пользовательские контейнеры (требуется расширение)

::: details Нажмите, чтобы развернуть подробности
Здесь подробное содержимое
:::

## 10. Блок-схемы (требуется расширение)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. Оглавление (требуется расширение)

[TOC]
`
      } else if (currentLocale === 'fr') {
        markdownText.value = `# Syntaxe Étendue de Markdown

## 1. Listes de Tâches

- [x] Tâche terminée
- [ ] Tâche en attente
- [x] Autre tâche terminée

## 2. Emoji

Prend en charge les emoji de style GitHub comme :smile: :heart: :thumbsup:

## 3. Formules Mathématiques (nécessite une extension)

Formule en ligne: $E=mc^2$

Formule en bloc:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. Notes de Bas de Page

Voici une référence à une note de bas de page[^1]

[^1]: Ceci est le contenu de la note de bas de page.

## 5. Listes de Définitions

Terme 1
: Définition 1

Terme 2
: Définition 2a
: Définition 2b

## 6. Surlignage (nécessite une extension)

Ceci est un ==texte surligné==

## 7. Exposants et Indices (nécessite une extension)

Exposant: X^2^
Indice: H~2~O

## 8. Avertissements (nécessite une extension)

:::warning
Ceci est un message d'avertissement
:::

:::info
Ceci est un message d'information
:::

## 9. Conteneurs Personnalisés (nécessite une extension)

::: details Cliquez pour afficher les détails
Voici le contenu détaillé
:::

## 10. Organigrammes (nécessite une extension)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. Table des Matières (nécessite une extension)

[TOC]
`
      } else if (currentLocale === 'ja') {
        markdownText.value = `# Markdown拡張構文

## 1. タスクリスト

- [x] 完了したタスク
- [ ] 保留中のタスク
- [x] もう一つの完了したタスク

## 2. 絵文字

GitHub形式の絵文字をサポートします :smile: :heart: :thumbsup:

## 3. 数式（拡張機能が必要）

インライン数式: $E=mc^2$

ブロック数式:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. 脚注

ここに脚注の参照があります[^1]

[^1]: これは脚注の内容です。

## 5. 定義リスト

用語1
: 定義1

用語2
: 定義2a
: 定義2b

## 6. ハイライト（拡張機能が必要）

これは==ハイライトされたテキスト==です

## 7. 上付き文字と下付き文字（拡張機能が必要）

上付き文字: X^2^
下付き文字: H~2~O

## 8. 警告（拡張機能が必要）

:::warning
これは警告メッセージです
:::

:::info
これは情報メッセージです
:::

## 9. カスタムコンテナ（拡張機能が必要）

::: details クリックして詳細を表示
ここに詳細な内容があります
:::

## 10. フローチャート（拡張機能が必要）

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. 目次（拡張機能が必要）

[TOC]
`
      } else if (currentLocale === 'pt') {
        markdownText.value = `# Sintaxe Estendida do Markdown

## 1. Listas de Tarefas

- [x] Tarefa concluída
- [ ] Tarefa pendente
- [x] Outra tarefa concluída

## 2. Emoji

Suporta emoji de estilo GitHub como :smile: :heart: :thumbsup:

## 3. Fórmulas Matemáticas (requer extensão)

Fórmula em linha: $E=mc^2$

Fórmula em bloco:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. Notas de Rodapé

Aqui está uma referência a uma nota de rodapé[^1]

[^1]: Este é o conteúdo da nota de rodapé.

## 5. Listas de Definições

Termo 1
: Definição 1

Termo 2
: Definição 2a
: Definição 2b

## 6. Destaque (requer extensão)

Este é ==texto destacado==

## 7. Sobrescrito e Subscrito (requer extensão)

Sobrescrito: X^2^
Subscrito: H~2~O

## 8. Advertências (requer extensão)

:::warning
Esta é uma mensagem de advertência
:::

:::info
Esta é uma mensagem informativa
:::

## 9. Contêineres Personalizados (requer extensão)

::: details Clique para expandir detalhes
Aqui está o conteúdo detalhado
:::

## 10. Fluxogramas (requer extensão)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. Índice (requer extensão)

[TOC]
`
      } else if (currentLocale === 'id') {
  markdownText.value = `# Ekstensi Sintaks Markdown

## 1. Daftar Tugas

- [x] Tugas selesai
- [ ] Tugas belum selesai
- [x] Tugas selesai lainnya

## 2. Emoji

Mendukung emoji bergaya GitHub seperti :smile: :heart: :thumbsup:

## 3. Rumus Matematika (memerlukan dukungan ekstensi)

Rumus inline: $E=mc^2$

Rumus blok:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. Catatan Kaki

Di sini ada catatan kaki[^1]

[^1]: Ini adalah isi dari catatan kaki.

## 5. Daftar Definisi

Istilah 1
: Definisi 1

Istilah 2
: Definisi 2a
: Definisi 2b

## 6. Penyorotan Teks (memerlukan dukungan ekstensi)

Ini adalah contoh ==teks yang disorot==

## 7. Teks Pangkat dan Subskrip (memerlukan dukungan ekstensi)

Pangkat: X^2^
Subskrip: H~2~O

## 8. Blok Peringatan (memerlukan dukungan ekstensi)

:::warning
Ini adalah pesan peringatan
:::

:::info
Ini adalah pesan informasi
:::

## 9. Kontainer Kustom (memerlukan dukungan ekstensi)

::: details Klik untuk memperluas detail
Ini adalah konten detail
:::

## 10. Diagram Alur (memerlukan dukungan ekstensi)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. Daftar Isi (memerlukan dukungan ekstensi)

[TOC]
`
      } else if (currentLocale === 'de') {
    markdownText.value = `# Markdown-Erweiterungssyntax

## 1. Aufgabenliste

- [x] Abgeschlossene Aufgabe
- [ ] Unvollendete Aufgabe
- [x] Noch eine abgeschlossene Aufgabe

## 2. Emojis

Unterstützt GitHub-ähnliche Emojis wie :smile: :heart: :thumbsup:

## 3. Mathematische Formeln (Erweiterung erforderlich)

Inline-Formel: $E=mc^2$

Blockformel:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. Fußnoten

Hier ist eine Fußnote[^1]

[^1]: Dies ist der Inhalt der Fußnote.

## 5. Definitionsliste

Begriff 1
: Definition 1

Begriff 2
: Definition 2a
: Definition 2b

## 6. Hervorhebung (Erweiterung erforderlich)

Dies ist ein ==hervorgehobener Text==

## 7. Hoch- und Tiefstellen (Erweiterung erforderlich)

Hochgestellt: X^2^
Tiefgestellt: H~2~O

## 8. Warnblöcke (Erweiterung erforderlich)

:::warning
Dies ist eine Warnmeldung
:::

:::info
Dies ist ein Hinweis
:::

## 9. Benutzerdefinierte Container (Erweiterung erforderlich)

::: details Klicken, um Details anzuzeigen
Dies ist der detaillierte Inhalt
:::

## 10. Flussdiagramme (Erweiterung erforderlich)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. Inhaltsverzeichnis (Erweiterung erforderlich)

[TOC]
`
      } else if (currentLocale === 'ko') {
        markdownText.value = `# Markdown 확장 문법

## 1. 작업 목록

- [x] 완료된 작업
- [ ] 미완료 작업
- [x] 또 다른 완료된 작업

## 2. 이모지

Github 스타일 이모지 지원 :smile: :heart: :thumbsup:

## 3. 수학 공식 (확장 지원 필요)

인라인 공식: $E=mc^2$

블록 공식:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. 각주

여기에 각주가 있습니다[1](@ref)

[1](@ref): 이곳에 각주 내용이 표시됩니다.

## 5. 정의 목록

용어 1
: 정의 1

용어 2
: 정의 2a
: 정의 2b

## 6. 하이라이트 (확장 지원 필요)

이것은 ==강조된 텍스트==입니다

## 7. 위첨자와 아래첨자 (확장 지원 필요)

위첨자: X^2^
아래첨자: H~2~O

## 8. 경고 블록 (확장 지원 필요)

:::warning
이것은 경고 메시지입니다
:::

:::info
이것은 정보 메시지입니다
:::

## 9. 사용자 정의 컨테이너 (확장 지원 필요)

::: details 클릭하여 상세 내용 보기
여기에 상세 내용이 표시됩니다
:::

## 10. 플로우 차트 (확장 지원 필요)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. 목차 (확장 지원 필요)

[TOC]
`
      } else if (currentLocale === 'it') {
        markdownText.value = `# Sintassi Estesa Markdown

## 1. Liste di attività

- [x] Attività completata
- [ ] Attività da completare
- [x] Altra attività completata

## 2. Emoji

Supporta emoji in stile GitHub come :smile: :heart: :thumbsup:

## 3. Formule matematiche (richiede estensione)

Formula inline: $E=mc^2$

Formula in blocco:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. Note a piè di pagina

Qui c'è una nota[1](@ref)

[1](@ref): Questo è il contenuto della nota.

## 5. Liste di definizioni

Termine 1
: Definizione 1

Termine 2
: Definizione 2a
: Definizione 2b

## 6. Testo evidenziato (richiede estensione)

Questo è un testo ==evidenziato==

## 7. Apice e pedice (richiede estensione)

Apice: X^2^
Pedice: H~2~O

## 8. Blocchi di avviso (richiede estensione)

:::warning
Questo è un messaggio di avviso
:::

:::info
Questo è un messaggio informativo
:::

## 9. Contenitori personalizzati (richiede estensione)

::: details Clicca per espandere
Qui ci sono i dettagli
:::

## 10. Diagrammi (richiede estensione)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. Indice (richiede estensione)

[TOC]
`
      } else if (currentLocale === 'zh-TW') {
        markdownText.value = `# Markdown擴充語法

## 1. 任務清單

- [x] 已完成任務
- [ ] 未完成任務
- [x] 又一個已完成任務

## 2. 表情符號

支援 :smile: :heart: :thumbsup: 等Github風格的表情

## 3. 數學公式 (需擴充支援)

行內公式: $E=mc^2$

區塊級公式:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. 註腳

這裡有一個註腳[1](@ref)

[1](@ref): 這是註腳的內容。

## 5. 定義清單

術語 1
: 定義 1

術語 2
: 定義 2a
: 定義 2b

## 6. 高亮標記 (需擴充支援)

這是一段==高亮文字==

## 7. 上標和下標 (需擴充支援)

上標: X^2^
下標: H~2~O

## 8. 警告區塊 (需擴充支援)

:::warning
這是一個警告訊息
:::

:::info
這是一條提示訊息
:::

## 9. 自訂容器 (需擴充支援)

::: details 點擊展開詳情
這裡是詳細內容
:::

## 10. 流程圖 (需擴充支援)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. 目錄 (需擴充支援)

[TOC]
`
      } else {
        console.error('Invalid locale:', currentLocale);
        throw new Error('Invalid locale');
      }
      break;
    case 'article':
      if (currentLocale === 'en') {
        markdownText.value = `# Markdown: A Simple Yet Powerful Text Formatting Language

## Introduction

In the era of digital content creation, **Markdown** has emerged as the preferred lightweight markup language for technical documentation, blog writing, and content management. This article explores Markdown's history, basic syntax, and widespread applications.

## History and Design Philosophy of Markdown

Markdown was created by John Gruber and Aaron Swartz in 2004. Its design goal was to enable people to write in an easy-to-read, easy-to-write plain text format that could be converted to structurally valid HTML.

> "The overriding design goal for Markdown's formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions."
> — John Gruber

This design philosophy distinguishes Markdown from other markup languages: **it focuses on content rather than appearance**.

## Basic Markdown Syntax

Markdown offers a simple set of syntax rules. Here are some basic elements:

### 1. Headings

Markdown uses the # symbol to denote heading levels:

\`\`\`markdown
# Heading 1
## Heading 2
### Heading 3
\`\`\`

### 2. Formatted Text

- **Bold**: \`**text**\` or \`__text__\`
- *Italic*: \`*text*\` or \`_text_\`
- ~~Strikethrough~~: \`~~text~~\`

### 3. Lists

Unordered lists use hyphens, plus signs, or asterisks as list markers:

- Item 1
- Item 2
  - Sub-item A
  - Sub-item B

Ordered lists use numbers followed by periods:

1. First item
2. Second item
3. Third item

### 4. Links and Images

Link syntax: \`[link text](URL)\`  
Image syntax: \`![alt text](image URL)\`

### 5. Code Blocks

\`\`\`javascript
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

## Widespread Applications of Markdown

Markdown is widely used across various platforms and tools:

| Platform/Tool | Application |
| ------------- | ----------- |
| GitHub        | Code documentation, Issues, Pull Requests |
| Stack Overflow | Question formatting |
| WordPress     | Blog writing |
| Discord/Slack | Message formatting |
| Notion        | Notes and knowledge management |

## Conclusion

With its simplicity, efficiency, and cross-platform capabilities, Markdown has become an invaluable tool for content creators. Whether writing technical documentation, blog posts, or simple notes, Markdown provides a consistent and efficient writing experience.

Learning Markdown isn't difficult, but mastering it will significantly enhance your digital writing productivity. If you haven't tried Markdown yet, now is the perfect time to start!

---

*Author: Markdown Enthusiast*  
*Published: October 15, 2023*
`
      } else if (currentLocale === 'zh') {
        markdownText.value = `# Markdown: 简单而强大的文本格式语言

## 引言

在数字化内容创作的时代，**Markdown** 作为一种轻量级标记语言，已经成为了技术文档、博客写作和内容管理的首选工具。本文将探讨Markdown的历史、基本语法和广泛应用场景。

## Markdown的历史与设计理念

Markdown由John Gruber和Aaron Swartz于2004年创建，其设计初衷是为了让人们能够使用易读易写的纯文本格式编写文档，然后转换成有效的HTML文档。

> "Markdown的首要设计目标是易读性。一份Markdown格式的文档应该要能直接以纯文本发布，而不会看起来像是被标记或格式化指令所构成。" 
> — John Gruber

这种设计理念使Markdown与其他标记语言有本质区别：**它注重的是内容本身，而不是表现形式**。

## Markdown的基本语法

Markdown提供了一套简洁的语法规则，下面是一些基础元素：

### 1. 标题

Markdown使用#符号来标识标题级别：

\`\`\`markdown
# 一级标题
## 二级标题
### 三级标题
\`\`\`

### 2. 格式化文本

- **粗体**: \`**文本**\` 或 \`__文本__\`
- *斜体*: \`*文本*\` 或 \`_文本_\`
- ~~删除线~~: \`~~文本~~\`

### 3. 列表

无序列表使用减号、加号或星号作为列表项标记：

- 项目1
- 项目2
  - 子项目A
  - 子项目B

有序列表则使用数字加点：

1. 第一项
2. 第二项
3. 第三项

### 4. 链接和图片

链接语法: \`[链接文本](URL)\`  
图片语法: \`![替代文本](图片URL)\`

### 5. 代码块

\`\`\`javascript
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

## Markdown的广泛应用

Markdown已被广泛应用于各种平台和工具中：

| 平台/工具 | 应用场景 |
| --------- | -------- |
| GitHub    | 代码文档、Issues、Pull Requests |
| Stack Overflow | 问答格式化 |
| WordPress | 博客写作 |
| Discord/Slack | 消息格式化 |
| Notion    | 笔记和知识管理 |

## 结语

Markdown凭借其简洁、高效和跨平台的特性，已经成为内容创作者的得力助手。无论是撰写技术文档、博客文章，还是简单的笔记整理，Markdown都能提供一致且高效的写作体验。

学习Markdown并不困难，但掌握它将为您的数字写作带来巨大的生产力提升。如果您还没有尝试过Markdown，现在正是最好的时机！

---

*文章作者: Markdown爱好者*  
*发布日期: 2023年10月15日*
`
      } else if (currentLocale === 'es') {
        markdownText.value = `# Markdown: Un Lenguaje de Formato de Texto Simple pero Poderoso

## Introducción

En la era de la creación de contenido digital, **Markdown** ha surgido como el lenguaje de marcado ligero preferido para documentación técnica, escritura de blogs y gestión de contenido. Este artículo explora la historia de Markdown, su sintaxis básica y sus amplias aplicaciones.

## Historia y Filosofía de Diseño de Markdown

Markdown fue creado por John Gruber y Aaron Swartz en 2004. Su objetivo de diseño era permitir que las personas escribieran en un formato de texto plano fácil de leer y escribir que pudiera convertirse en HTML estructuralmente válido.

> "El objetivo principal de diseño para la sintaxis de formato de Markdown es hacerla lo más legible posible. La idea es que un documento con formato Markdown debería poder publicarse tal cual, como texto plano, sin parecer que ha sido marcado con etiquetas o instrucciones de formato."
> — John Gruber

Esta filosofía de diseño distingue a Markdown de otros lenguajes de marcado: **se centra en el contenido más que en la apariencia**.

## Sintaxis Básica de Markdown

Markdown ofrece un conjunto simple de reglas de sintaxis. Aquí hay algunos elementos básicos:

### 1. Encabezados

Markdown utiliza el símbolo # para denotar niveles de encabezado:

\`\`\`markdown
# Encabezado 1
## Encabezado 2
### Encabezado 3
\`\`\`

### 2. Texto Formateado

- **Negrita**: \`**texto**\` o \`__texto__\`
- *Cursiva*: \`*texto*\` o \`_texto_\`
- ~~Tachado~~: \`~~texto~~\`

### 3. Listas

Las listas sin orden utilizan guiones, signos más o asteriscos como marcadores:

- Elemento 1
- Elemento 2
  - Sub-elemento A
  - Sub-elemento B

Las listas ordenadas utilizan números seguidos de puntos:

1. Primer elemento
2. Segundo elemento
3. Tercer elemento

### 4. Enlaces e Imágenes

Sintaxis de enlace: \`[texto del enlace](URL)\`  
Sintaxis de imagen: \`![texto alternativo](URL de la imagen)\`

### 5. Bloques de Código

\`\`\`javascript
function holaMundo() {
  console.log("¡Hola, mundo!");
}
\`\`\`

## Aplicaciones Generalizadas de Markdown

Markdown se utiliza ampliamente en diversas plataformas y herramientas:

| Plataforma/Herramienta | Aplicación |
| ---------------------- | ---------- |
| GitHub                 | Documentación de código, Issues, Pull Requests |
| Stack Overflow         | Formato de preguntas |
| WordPress              | Escritura de blogs |
| Discord/Slack          | Formato de mensajes |
| Notion                 | Notas y gestión de conocimiento |

## Conclusión

Con su simplicidad, eficiencia y capacidades multiplataforma, Markdown se ha convertido en una herramienta invaluable para creadores de contenido. Ya sea escribiendo documentación técnica, publicaciones de blog o simples notas, Markdown proporciona una experiencia de escritura consistente y eficiente.

Aprender Markdown no es difícil, pero dominarlo mejorará significativamente su productividad en escritura digital. Si aún no ha probado Markdown, ¡ahora es el momento perfecto para empezar!

---

*Autor: Entusiasta de Markdown*  
*Publicado: 15 de octubre de 2023*
`
      } else if (currentLocale === 'hi') {
        markdownText.value = `# मार्कडाउन: एक सरल लेकिन शक्तिशाली टेक्स्ट फॉर्मेटिंग भाषा

## परिचय

डिजिटल सामग्री निर्माण के युग में, **मार्कडाउन** तकनीकी दस्तावेज़ीकरण, ब्लॉग लेखन और सामग्री प्रबंधन के लिए पसंदीदा हल्के मार्कअप भाषा के रूप में उभरा है। यह लेख मार्कडाउन के इतिहास, बुनियादी सिंटैक्स और व्यापक अनुप्रयोगों का पता लगाता है।

## मार्कडाउन का इतिहास और डिज़ाइन दर्शन

मार्कडाउन 2004 में जॉन ग्रूबर और एरन स्वार्ट्ज द्वारा बनाया गया था। इसका डिज़ाइन लक्ष्य लोगों को एक आसानी से पढ़ने योग्य, आसानी से लिखने योग्य सादा टेक्स्ट प्रारूप में लिखने में सक्षम बनाना था जिसे संरचनात्मक रूप से वैध HTML में परिवर्तित किया जा सकता था।

> "मार्कडाउन के फॉर्मेटिंग सिंटैक्स के लिए अधिभावी डिज़ाइन लक्ष्य इसे जितना संभव हो उतना पठनीय बनाना है। विचार यह है कि मार्कडाउन-फॉर्मेटेड दस्तावेज़ जैसा है, सादे टेक्स्ट के रूप में प्रकाशित किया जाना चाहिए, बिना इस तरह दिखे कि इसे टैग या फॉर्मेटिंग निर्देशों के साथ चिह्नित किया गया है।"
> — जॉन ग्रूबर

यह डिज़ाइन दर्शन मार्कडाउन को अन्य मार्कअप भाषाओं से अलग करता है: **यह उपस्थिति के बजाय सामग्री पर केंद्रित है**।

## बेसिक मार्कडाउन सिंटैक्स

मार्कडाउन सिंटैक्स नियमों का एक सरल सेट प्रदान करता है। यहां कुछ बुनियादी तत्व हैं:

### 1. शीर्षक

मार्कडाउन शीर्षक स्तरों को दर्शाने के लिए # प्रतीक का उपयोग करता है:

\`\`\`markdown
# शीर्षक 1
## शीर्षक 2
### शीर्षक 3
\`\`\`

### 2. फॉर्मेटेड टेक्स्ट

- **बोल्ड**: \`**टेक्स्ट**\` या \`__टेक्स्ट__\`
- *इटैलिक*: \`*टेक्स्ट*\` या \`_टेक्स्ट_\`
- ~~स्ट्राइकथ्रू~~: \`~~टेक्स्ट~~\`

### 3. सूचियाँ

अनऑर्डर्ड सूचियाँ हाइफन, प्लस चिह्न, या तारांकन को सूची मार्कर के रूप में उपयोग करती हैं:

- आइटम 1
- आइटम 2
  - सब-आइटम A
  - सब-आइटम B

ऑर्डर्ड सूचियाँ अवधि के बाद संख्याओं का उपयोग करती हैं:

1. पहला आइटम
2. दूसरा आइटम
3. तीसरा आइटम

### 4. लिंक और छवियाँ

लिंक सिंटैक्स: \`[लिंक टेक्स्ट](URL)\`  
छवि सिंटैक्स: \`![वैकल्पिक टेक्स्ट](छवि URL)\`

### 5. कोड ब्लॉक्स

\`\`\`javascript
function नमस्तेदुनिया() {
  console.log("नमस्ते, दुनिया!");
}
\`\`\`

## मार्कडाउन के व्यापक अनुप्रयोग

मार्कडाउन का उपयोग विभिन्न प्लेटफॉर्म और टूल्स में व्यापक रूप से किया जाता है:

| प्लेटफॉर्म/टूल | अनुप्रयोग |
| ------------- | ----------- |
| GitHub        | कोड दस्तावेज़ीकरण, इश्यूज़, पुल रिक्वेस्ट्स |
| Stack Overflow | प्रश्न फॉर्मेटिंग |
| WordPress     | ब्लॉग लेखन |
| Discord/Slack | संदेश फॉर्मेटिंग |
| Notion        | नोट्स और ज्ञान प्रबंधन |

## निष्कर्ष

अपनी सादगी, दक्षता और क्रॉस-प्लेटफॉर्म क्षमताओं के साथ, मार्कडाउन सामग्री निर्माताओं के लिए एक अमूल्य उपकरण बन गया है। चाहे तकनीकी दस्तावेज़ीकरण, ब्लॉग पोस्ट या सरल नोट्स लिख रहे हों, मार्कडाउन एक सुसंगत और कुशल लेखन अनुभव प्रदान करता है।

मार्कडाउन सीखना मुश्किल नहीं है, लेकिन इसमें महारत हासिल करने से आपकी डिजिटल लेखन उत्पादकता में काफी वृद्धि होगी। अगर आपने अभी तक मार्कडाउन का प्रयास नहीं किया है, तो अब शुरू करने का एकदम सही समय है!

---

*लेखक: मार्कडाउन उत्साही*  
*प्रकाशित: 15 अक्टूबर, 2023*
`
      } else if (currentLocale === 'ar') {
        markdownText.value = `# ماركداون: لغة تنسيق نصوص بسيطة وقوية

## مقدمة

في عصر إنشاء المحتوى الرقمي، برزت **ماركداون** كلغة ترميز خفيفة مفضلة للتوثيق التقني وكتابة المدونات وإدارة المحتوى. تستكشف هذه المقالة تاريخ ماركداون وبناء الجملة الأساسي والتطبيقات واسعة الانتشار.

## تاريخ وفلسفة تصميم ماركداون

تم إنشاء ماركداون بواسطة جون غروبر وآرون سوارتز في عام 2004. كان هدف التصميم هو تمكين الناس من الكتابة بتنسيق نص عادي سهل القراءة وسهل الكتابة يمكن تحويله إلى HTML صالح هيكليًا.

> "الهدف الأساسي للتصميم لبناء جملة تنسيق ماركداون هو جعلها قابلة للقراءة قدر الإمكان. الفكرة هي أن المستند المنسق بماركداون يجب أن يكون قابلاً للنشر كما هو، كنص عادي، دون أن يبدو وكأنه تم تمييزه بعلامات أو تعليمات تنسيق."
> — جون غروبر

تميز فلسفة التصميم هذه ماركداون عن لغات الترميز الأخرى: **إنها تركز على المحتوى بدلاً من المظهر**.

## بناء جملة ماركداون الأساسي

توفر ماركداون مجموعة بسيطة من قواعد بناء الجملة. فيما يلي بعض العناصر الأساسية:

### 1. العناوين

تستخدم ماركداون رمز # للإشارة إلى مستويات العنوان:

\`\`\`markdown
# العنوان 1
## العنوان 2
### العنوان 3
\`\`\`

### 2. النص المنسق

- **غامق**: \`**نص**\` أو \`__نص__\`
- *مائل*: \`*نص*\` أو \`_نص_\`
- ~~مشطوب~~: \`~~نص~~\`

### 3. القوائم

تستخدم القوائم غير المرتبة الشرطات أو علامات الجمع أو النجوم كعلامات قائمة:

- العنصر 1
- العنصر 2
  - العنصر الفرعي أ
  - العنصر الفرعي ب

تستخدم القوائم المرتبة أرقامًا متبوعة بفترات:

1. العنصر الأول
2. العنصر الثاني
3. العنصر الثالث

### 4. الروابط والصور

بناء جملة الرابط: \`[نص الرابط](URL)\`  
بناء جملة الصورة: \`![النص البديل](URL الصورة)\`

### 5. كتل الكود

\`\`\`javascript
function مرحباًبالعالم() {
  console.log("مرحباً، عالم!");
}
\`\`\`

## التطبيقات واسعة الانتشار لماركداون

يتم استخدام ماركداون على نطاق واسع عبر منصات وأدوات مختلفة:

| المنصة/الأداة | التطبيق |
| ------------- | ----------- |
| GitHub        | توثيق الكود، المشكلات، طلبات السحب |
| Stack Overflow | تنسيق الأسئلة |
| WordPress     | كتابة المدونات |
| Discord/Slack | تنسيق الرسائل |
| Notion        | الملاحظات وإدارة المعرفة |

## الخاتمة

مع بساطتها وكفاءتها وقدراتها عبر المنصات المختلفة، أصبحت ماركداون أداة لا تقدر بثمن لمنشئي المحتوى. سواء كنت تكتب وثائق تقنية أو منشورات مدونة أو ملاحظات بسيطة، توفر ماركداون تجربة كتابة متسقة وفعالة.

تعلم ماركداون ليس صعبًا، ولكن إتقانه سيعزز بشكل كبير إنتاجية الكتابة الرقمية لديك. إذا لم تجرب ماركداون بعد، فالآن هو الوقت المثالي للبدء!

---

*المؤلف: متحمس لماركداون*  
*نُشر في: 15 أكتوبر 2023*
`
      } else if (currentLocale === 'ru') {
        markdownText.value = `# Markdown: простой, но мощный язык форматирования текста

## Введение

В эпоху создания цифрового контента **Markdown** стал предпочтительным легковесным языком разметки для технической документации, ведения блогов и управления контентом. В этой статье рассматривается история Markdown, его базовый синтаксис и широкое применение.

## История и философия дизайна Markdown

Markdown был создан Джоном Грубером и Аароном Шварцем в 2004 году. Его целью было позволить людям писать в легко читаемом и легко редактируемом текстовом формате, который можно было бы преобразовать в структурно правильный HTML.

> "Главная цель дизайна синтаксиса форматирования Markdown — сделать его максимально читаемым. Идея заключается в том, что документ с форматированием Markdown должен публиковаться как есть, в виде простого текста, не выглядя так, будто он размечен тегами или инструкциями форматирования."
> — Джон Грубер

Эта философия дизайна отличает Markdown от других языков разметки: **он фокусируется на содержании, а не на внешнем виде**.

## Основной синтаксис Markdown

Markdown предлагает простой набор правил синтаксиса. Вот некоторые базовые элементы:

### 1. Заголовки

Markdown использует символ # для обозначения уровней заголовков:

\`\`\`markdown
# Заголовок 1
## Заголовок 2
### Заголовок 3
\`\`\`

### 2. Форматированный текст

- **Жирный**: \`**текст**\` или \`__текст__\`
- *Курсив*: \`*текст*\` или \`_текст_\`
- ~~Зачеркнутый~~: \`~~текст~~\`

### 3. Списки

Неупорядоченные списки используют дефисы, плюсы или звездочки в качестве маркеров:

- Пункт 1
- Пункт 2
  - Подпункт A
  - Подпункт B

Упорядоченные списки используют числа, за которыми следуют точки:

1. Первый пункт
2. Второй пункт
3. Третий пункт

### 4. Ссылки и изображения

Синтаксис ссылки: \`[текст ссылки](URL)\`  
Синтаксис изображения: \`![альтернативный текст](URL изображения)\`

### 5. Блоки кода

\`\`\`javascript
function приветМир() {
  console.log("Привет, мир!");
}
\`\`\`

## Широкое применение Markdown

Markdown широко используется на различных платформах и в инструментах:

| Платформа/Инструмент | Применение |
| -------------------- | ---------- |
| GitHub               | Документация кода, Issues, Pull Requests |
| Stack Overflow       | Форматирование вопросов |
| WordPress            | Ведение блогов |
| Discord/Slack        | Форматирование сообщений |
| Notion               | Заметки и управление знаниями |

## Заключение

Благодаря своей простоте, эффективности и кроссплатформенным возможностям, Markdown стал незаменимым инструментом для создателей контента. Будь то написание технической документации, сообщений в блоге или простых заметок, Markdown обеспечивает последовательный и эффективный опыт написания.

Изучение Markdown не сложно, но овладение им значительно повысит вашу продуктивность в цифровом письме. Если вы еще не пробовали Markdown, сейчас самое подходящее время начать!

---

*Автор: Энтузиаст Markdown*  
*Опубликовано: 15 октября 2023 г.*
`
      } else if (currentLocale === 'fr') {
        markdownText.value = `# Syntaxe Étendue de Markdown

## 1. Listes de Tâches

- [x] Tâche terminée
- [ ] Tâche en attente
- [x] Autre tâche terminée

## 2. Emoji

Prend en charge les emoji de style GitHub comme :smile: :heart: :thumbsup:

## 3. Formules Mathématiques (nécessite une extension)

Formule en ligne: $E=mc^2$

Formule en bloc:

$$
\\frac{n!}{k!(n-k)!} = \\binom{n}{k}
$$

## 4. Notes de Bas de Page

Voici une référence à une note de bas de page[^1]

[^1]: Ceci est le contenu de la note de bas de page.

## 5. Listes de Définitions

Terme 1
: Définition 1

Terme 2
: Définition 2a
: Définition 2b

## 6. Surlignage (nécessite une extension)

Ceci est un ==texte surligné==

## 7. Exposants et Indices (nécessite une extension)

Exposant: X^2^
Indice: H~2~O

## 8. Avertissements (nécessite une extension)

:::warning
Ceci est un message d'avertissement
:::

:::info
Ceci est un message d'information
:::

## 9. Conteneurs Personnalisés (nécessite une extension)

::: details Cliquez pour afficher les détails
Voici le contenu détaillé
:::

## 10. Organigrammes (nécessite une extension)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## 11. Table des Matières (nécessite une extension)

[TOC]
`
      } else if (currentLocale === 'ja') {
        markdownText.value = `# Markdown：シンプルで強力なテキスト形式言語

## はじめに

デジタルコンテンツ作成の時代において、**Markdown**は技術文書、ブログ執筆、コンテンツ管理のための軽量マークアップ言語として好まれています。この記事ではMarkdownの歴史、基本構文、広範な応用について探ります。

## Markdownの歴史と設計哲学

Markdownは2004年にJohn GruberとAaron Swartzによって作成されました。その設計目標は、構造的に有効なHTMLに変換できる、読みやすく書きやすいプレーンテキスト形式で書けるようにすることでした。

> 「Markdownの書式構文の最優先の設計目標は、できるだけ読みやすくすることです。Markdownでフォーマットされた文書は、タグや書式指示で装飾されているように見えることなく、そのままプレーンテキストとして公開できるべきだという考えです。」
> — John Gruber

この設計哲学がMarkdownを他のマークアップ言語と区別しています：**外観よりもコンテンツに焦点を当てています**。

## Markdownの基本構文

Markdownはシンプルな構文ルールのセットを提供します。以下にいくつかの基本要素を示します：

### 1. 見出し

Markdownでは#記号を使って見出しレベルを示します：

\`\`\`markdown
# 見出し1
## 見出し2
### 見出し3
\`\`\`

### 2. 書式付きテキスト

- **太字**: \`**テキスト**\` または \`__テキスト__\`
- *斜体*: \`*テキスト*\` または \`_テキスト_\`
- ~~取り消し線~~: \`~~テキスト~~\`

### 3. リスト

順序なしリストはハイフン、プラス記号、またはアスタリスクをリストマーカーとして使用します：

- 項目1
- 項目2
  - サブ項目A
  - サブ項目B

順序付きリストはピリオドの後に数字を使用します：

1. 最初の項目
2. 2番目の項目
3. 3番目の項目

### 4. リンクと画像

リンク構文: \`[リンクテキスト](URL)\`  
画像構文: \`![代替テキスト](画像URL)\`

### 5. コードブロック

\`\`\`javascript
function helloWorld() {
  console.log("こんにちは、世界！");
}
\`\`\`

## Markdownの広範な応用

Markdownはさまざまなプラットフォームやツールで広く使用されています：

| プラットフォーム/ツール | 応用 |
| ------------- | ----------- |
| GitHub        | コード文書、Issues、Pull Requests |
| Stack Overflow | 質問のフォーマット |
| WordPress     | ブログ執筆 |
| Discord/Slack | メッセージのフォーマット |
| Notion        | ノートと知識管理 |

## 結論

シンプルさ、効率性、クロスプラットフォーム機能により、Markdownはコンテンツ作成者にとって貴重なツールとなっています。技術文書、ブログ投稿、または単純なメモを書く場合でも、Markdownは一貫性のある効率的な執筆体験を提供します。

Markdownの学習は難しくありませんが、習得することでデジタル執筆の生産性が大幅に向上します。まだMarkdownを試していない場合は、今が始めるのに最適なタイミングです！

---

*著者：Markdown愛好家*  
*公開日：2023年10月15日*
`
      } else if (currentLocale === 'pt') {
        markdownText.value = `# Markdown: Uma Linguagem de Formatação de Texto Simples mas Poderosa

## Introdução

Na era da criação de conteúdo digital, **Markdown** emergiu como a linguagem de marcação leve preferida para documentação técnica, escrita de blogs e gestão de conteúdo. Este artigo explora a história do Markdown, sua sintaxe básica e aplicações generalizadas.

## História e Filosofia de Design do Markdown

Markdown foi criado por John Gruber e Aaron Swartz em 2004. Seu objetivo de design era permitir que as pessoas escrevessem em um formato de texto simples fácil de ler e escrever que pudesse ser convertido em HTML estruturalmente válido.

> "O objetivo de design primordial para a sintaxe de formatação do Markdown é torná-la o mais legível possível. A ideia é que um documento formatado em Markdown deve ser publicável como está, como texto simples, sem parecer que foi marcado com tags ou instruções de formatação."
> — John Gruber

Esta filosofia de design distingue o Markdown de outras linguagens de marcação: **ele foca no conteúdo em vez da aparência**.

## Sintaxe Básica do Markdown

Markdown oferece um conjunto simples de regras de sintaxe. Aqui estão alguns elementos básicos:

### 1. Títulos

Markdown usa o símbolo # para denotar níveis de título:

\`\`\`markdown
# Título 1
## Título 2
### Título 3
\`\`\`

### 2. Texto Formatado

- **Negrito**: \`**texto**\` ou \`__texto__\`
- *Itálico*: \`*texto*\` ou \`_texto_\`
- ~~Riscado~~: \`~~texto~~\`

### 3. Listas

Listas não ordenadas usam hífens, sinais de mais ou asteriscos como marcadores de lista:

- Item 1
- Item 2
  - Sub-item A
  - Sub-item B

Listas ordenadas usam números seguidos de pontos:

1. Primeiro item
2. Segundo item
3. Terceiro item

### 4. Links e Imagens

Sintaxe de link: \`[texto do link](URL)\`  
Sintaxe de imagem: \`![texto alternativo](URL da imagem)\`

### 5. Blocos de Código

\`\`\`javascript
function oláMundo() {
  console.log("Olá, mundo!");
}
\`\`\`

## Aplicações Generalizadas do Markdown

Markdown é amplamente usado em várias plataformas e ferramentas:

| Plataforma/Ferramenta | Aplicação |
| ------------- | ----------- |
| GitHub        | Documentação de código, Issues, Pull Requests |
| Stack Overflow | Formatação de perguntas |
| WordPress     | Escrita de blogs |
| Discord/Slack | Formatação de mensagens |
| Notion        | Notas e gestão de conhecimento |

## Conclusão

Com sua simplicidade, eficiência e capacidades multiplataforma, Markdown tornou-se uma ferramenta inestimável para criadores de conteúdo. Seja escrevendo documentação técnica, posts de blog ou notas simples, Markdown fornece uma experiência de escrita consistente e eficiente.

Aprender Markdown não é difícil, mas dominá-lo melhorará significativamente sua produtividade de escrita digital. Se você ainda não tentou Markdown, agora é o momento perfeito para começar!

---

*Autor: Entusiasta do Markdown*  
*Publicado: 15 de outubro de 2023*
`
      } else if (currentLocale === 'id') {
  markdownText.value = `# Markdown: Bahasa Format Teks Sederhana Namun Kuat

## Pendahuluan

Di era pembuatan konten digital, **Markdown** sebagai bahasa markup ringan telah menjadi alat pilihan untuk penulisan dokumentasi teknis, blog, dan manajemen konten. Artikel ini akan membahas sejarah Markdown, sintaks dasarnya, dan berbagai skenario penggunaannya.

## Sejarah dan Filosofi Desain Markdown

Markdown dibuat oleh John Gruber dan Aaron Swartz pada tahun 2004. Tujuan utamanya adalah memungkinkan orang menulis dokumen dalam format teks biasa yang mudah dibaca dan ditulis, kemudian dikonversi menjadi HTML yang valid.

> "Tujuan utama dalam desain Markdown adalah keterbacaan. Dokumen berformat Markdown harus dapat diterbitkan secara langsung sebagai teks biasa tanpa tampak seperti dibangun dengan tag atau instruksi format."
> — John Gruber

Filosofi desain ini membuat Markdown berbeda secara mendasar dari bahasa markup lainnya: **fokus pada isi itu sendiri, bukan pada tampilannya**.

## Sintaks Dasar Markdown

Markdown menyediakan seperangkat aturan sintaks yang sederhana. Berikut beberapa elemen dasarnya:

### 1. Judul

Markdown menggunakan simbol # untuk menandai tingkat judul:

\`\`\`markdown
# Judul Tingkat 1
## Judul Tingkat 2
### Judul Tingkat 3
\`\`\`

### 2. Pemformatan Teks

- **Tebal**: \`**teks**\` atau \`__teks__\`
- *Miring*: \`*teks*\` atau \`_teks_\`
- ~~Coret~~: \`~~teks~~\`

### 3. Daftar/List

Daftar tidak berurutan menggunakan tanda minus, plus, atau bintang sebagai penanda item:

- Item 1
- Item 2
  - Subitem A
  - Subitem B

Daftar berurutan menggunakan angka diikuti titik:

1. Item pertama
2. Item kedua
3. Item ketiga

### 4. Tautan dan Gambar

Sintaks untuk tautan: \`[teks tautan](URL)\`  
Sintaks untuk gambar: \`![teks alternatif](URL_gambar)\`

### 5. Blok Kode

\`\`\`javascript
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

## Penggunaan Luas Markdown

Markdown telah banyak digunakan di berbagai platform dan alat:

| Platform/Alat | Contoh Penggunaan |
| ------------- | ------------------ |
| GitHub        | Dokumentasi kode, Issues, Pull Requests |
| Stack Overflow | Format tanya jawab |
| WordPress     | Penulisan blog |
| Discord/Slack | Format pesan |
| Notion        | Catatan dan manajemen pengetahuan |

## Penutup

Dengan kelebihannya yang sederhana, efisien, dan mendukung lintas platform, Markdown telah menjadi asisten yang sangat berguna bagi para pembuat konten. Baik untuk menulis dokumentasi teknis, artikel blog, maupun sekadar mengorganisir catatan, Markdown memberikan pengalaman menulis yang konsisten dan produktif.

Belajar Markdown tidaklah sulit, tetapi menguasainya akan memberikan peningkatan besar dalam produktivitas tulisan digital Anda. Jika Anda belum pernah mencoba Markdown, saat ini adalah waktu yang tepat untuk memulai!

---

*Penulis artikel: Pecinta Markdown*  
*Tanggal publikasi: 15 Oktober 2023*`
      } else if (currentLocale === 'de') {
    markdownText.value = `# Markdown: Eine einfache und leistungsstarke Textformatierungssprache

## Einleitung

In der Ära der digitalen Inhaltsproduktion hat sich **Markdown** als eine leichte Auszeichnungssprache zum bevorzugten Werkzeug für die Erstellung von Technischen Dokumentationen, Blogs und Content-Management-Systemen entwickelt. In diesem Artikel werden wir die Geschichte von Markdown, die grundlegenden Syntaxregeln und breite Anwendungsbereiche betrachten.

## Die Geschichte und das Designkonzept von Markdown

Markdown wurde im Jahr 2004 von John Gruber und Aaron Swartz entwickelt. Das ursprüngliche Ziel war es, eine Sprache zu schaffen, mit der Benutzer einfach lesbare und schreibbare Dokumente im reinen Textformat erstellen konnten, die anschließend in gültiges HTML umgewandelt werden konnten.

> "Das wichtigste Designziel von Markdown ist Lesbarkeit. Ein Dokument im Markdown-Format sollte so gestaltet sein, dass es direkt als reinen Text veröffentlichen lässt, ohne wie eine Ansammlung von Formatierungsanweisungen auszusehen."
> — John Gruber

Dieses Design unterscheidet Markdown fundamental von anderen Auszeichnungssprachen: **Der Fokus liegt auf dem Inhalt selbst, nicht auf der Darstellung.**

## Grundlegende Markdown-Syntax

Markdown bietet ein schlankes Satz an Syntaxregeln. Hier sind einige grundlegende Elemente:

### 1. Überschriften

Markdown verwendet das Nummernzeichen (#), um die Überschriftenebene festzulegen:

\`\`\`markdown
# H1 – Überschrift der ersten Ebene
## H2 – Überschrift der zweiten Ebene
### H3 – Überschrift der dritten Ebene
\`\`\`

### 2. Textformatierung

- **Fettgedruckt**: \`**Text**\` oder \`__Text__\`
- *Kursiv*: \`*Text*\` oder \`_Text_\`
- ~~Durchgestrichen~~: \`~~Text~~\`

### 3. Listen

Ungeordnete Listen verwenden Minuszeichen, Pluszeichen oder Sternchen als Listenelemente:

- Element 1
- Element 2
  - Unterelement A
  - Unterelement B

Geordnete Listen verwenden Zahlen gefolgt von einem Punkt:

1. Erstes Element
2. Zweites Element
3. Drittes Element

### 4. Links und Bilder

Syntax für Links: \`[Linktext](URL)\`  
Syntax für Bilder: \`![Alternativtext](Bild-URL)\`

### 5. Codeblöcke

\`\`\`javascript
function halloWelt() {
  console.log("Hallo Welt!");
}
\`\`\`

## Die breite Anwendung von Markdown

Markdown wird heute in zahlreichen Plattformen und Tools eingesetzt:

| Plattform/Werkzeug | Anwendungsfall |
|--------------------|----------------|
| GitHub             | Code-Dokumentation, Issues, Pull Requests |
| Stack Overflow     | Formatierung von Fragen und Antworten |
| WordPress          | Blog-Artikel |
| Discord/Slack      | Nachrichtenformatierung |
| Notion             | Notizen und Wissensmanagement |

## Abschluss

Mit seiner Einfachheit, Effizienz und plattformübergreifenden Kompatibilität ist Markdown zu einem unverzichtbaren Begleiter für alle geworden, die digitale Inhalte erstellen. Ob technische Dokumentation, Blogartikel oder einfache Notizen – Markdown bietet stets ein konsistentes und effektives Schreib-Erlebnis.

Der Einstieg in Markdown ist leicht, doch die Beherrschung dieser Sprache bringt eine erhebliche Steigerung der Produktivität im Umgang mit digitalem Schreiben mit sich. Wenn Sie es noch nicht ausprobiert haben, ist jetzt der perfekte Zeitpunkt, um anzufangen!

---

*Artikelautor: Ein Markdown-Fan*  
*Veröffentlichungsdatum: 15. Oktober 2023*`
      } else if (currentLocale === 'ko') {
        markdownText.value = `# Markdown: 간단하지만 강력한 텍스트 포맷 언어

## 서론

디지털 콘텐츠 제작 시대에서 **Markdown**은 경량 마크업 언어로 기술 문서, 블로그 작성 및 콘텐츠 관리의 필수 도구가 되었습니다. 본 문서는 Markdown의 역사, 기본 문법 및 다양한 적용 사례를 살펴봅니다.

## Markdown의 역사와 디자인 철학

Markdown은 John Gruber와 Aaron Swartz가 2004년에 개발했으며, 사람들이 읽고 쓰기 쉬운 순수 텍스트 형식으로 문서를 작성한 후 유효한 HTML 문서로 변환할 수 있도록 하는 것이 목표였습니다.

> "Markdown의 주요 디자인 목표는 가독성이다. Markdown 형식의 문서는 마크업이나 서식 지정 명령으로 구성된 것처럼 보이지 않고 순수 텍스트로 직접 게시할 수 있어야 한다."
> — John Gruber

이러한 디자인 철학은 Markdown을 다른 마크업 언어와 근본적으로 차별화합니다: **형식보다는 콘텐츠 자체에 초점을 맞춥니다**.

## Markdown 기본 문법

Markdown은 간결한 문법 규칙을 제공하며, 다음은 몇 가지 기본 요소입니다:

### 1. 제목

Markdown은 # 기호를 사용하여 제목 수준을 표시합니다:

\`\`\`markdown
# 1단계 제목
## 2단계 제목
### 3단계 제목
\`\`\`

### 2. 텍스트 서식

- **굵게**: \`**텍스트**\` 또는 \`__텍스트__\`
- *기울임*: \`*텍스트*\` 또는 \`_텍스트_\`
- ~~취소선~~: \`~~텍스트~~\`

### 3. 목록

순서 없는 목록은 빼기, 더하기 또는 별표를 사용합니다:

- 항목1
- 항목2
  - 하위 항목A
  - 하위 항목B

순서 있는 목록은 숫자와 점을 사용합니다:

1. 첫 번째 항목
2. 두 번째 항목
3. 세 번째 항목

### 4. 링크와 이미지

링크 문법: \`[링크 텍스트](URL)\`  
이미지 문법: \`![대체 텍스트](이미지URL)\`

### 5. 코드 블록

\`\`\`javascript
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

## Markdown의 다양한 활용

Markdown은 다양한 플랫폼과 도구에서 널리 사용됩니다:

| 플랫폼/도구 | 적용 사례 |
| --------- | -------- |
| GitHub    | 코드 문서, Issues, Pull Requests |
| Stack Overflow | 질문과 답변 포맷팅 |
| WordPress | 블로그 작성 |
| Discord/Slack | 메시지 포맷팅 |
| Notion    | 노트와 지식 관리 |

## 결론

Markdown은 간결함, 효율성 및 크로스 플랫폼 특성으로 콘텐츠 제작자의 강력한 도구가 되었습니다. 기술 문서 작성, 블로그 글 작성 또는 간단한 노트 정리 등 어떤 작업이든 Markdown은 일관적이고 효율적인 작성 경험을 제공합니다.

Markdown을 배우는 것은 어렵지 않지만, 마스터하면 디지털 작문에 큰 생산성 향상을 가져올 수 있습니다. 아직 Markdown을 사용해보지 않았다면, 지금이 가장 좋은 시기입니다!

---

*글쓴이: Markdown 애호가*  
*게시일: 2023년 10월 15일*
`
      } else if (currentLocale === 'it') {
        markdownText.value = `# Markdown: Linguaggio di Formattazione Testuale Semplice e Potente

## Introduzione

Nell'era della creazione di contenuti digitali, **Markdown** si è affermato come linguaggio di markup leggero preferito per documentazione tecnica, blogging e gestione dei contenuti. Questo articolo esplora la storia, la sintassi base e gli scenari di utilizzo diffusi di Markdown.

## Storia e Filosofia Progettuale

Markdown è stato creato da John Gruber e Aaron Swartz nel 2004 con l'obiettivo di permettere alle persone di scrivere documenti in formato testo semplice, facilmente leggibile e scrivibile, per poi convertirli in validi documenti HTML.

> "L'obiettivo primario di Markdown è la leggibilità. Un documento formattato in Markdown dovrebbe essere pubblicabile così com'è, come testo semplice, senza sembrare marcato con tag o istruzioni di formattazione."
> — John Gruber

Questa filosofia distingue Markdown da altri linguaggi di markup: **si concentra sul contenuto stesso, non sulla presentazione**.

## Sintassi Base di Markdown

Markdown offre un set semplice di regole sintattiche. Ecco alcuni elementi fondamentali:

### 1. Titoli

Markdown utilizza il simbolo # per indicare i livelli dei titoli:

\`\`\`markdown
# Titolo Livello 1
## Titolo Livello 2
### Titolo Livello 3
\`\`\`

### 2. Formattazione Testo

- **Grassetto**: \`**testo**\` o \`__testo__\`
- *Corsivo*: \`*testo*\` o \`_testo_\`
- ~~Barrato~~: \`~~testo~~\`

### 3. Liste

Le liste non ordinate usano trattini, più o asterischi:

- Elemento 1
- Elemento 2
  - Sottoelemento A
  - Sottoelemento B

Le liste ordinate usano numeri seguiti da punto:

1. Primo elemento
2. Secondo elemento
3. Terzo elemento

### 4. Link e Immagini

Sintassi link: \`[testo](URL)\`  
Sintassi immagini: \`\`

### 5. Blocchi di Codice

\`\`\`javascript
function ciaoMondo() {
  console.log("Ciao, mondo!");
}
\`\`\`

## Applicazioni Diffuse di Markdown

Markdown è utilizzato in molte piattaforme e strumenti:

| Piattaforma/Strumento | Scenario d'uso |
| --------------------- | -------------- |
| GitHub    | Documentazione, Issues, Pull Requests |
| Stack Overflow | Formattazione domande/risposte |
| WordPress | Scrittura blog |
| Discord/Slack | Formattazione messaggi |
| Notion    | Gestione note e conoscenza |

## Conclusione

Grazie alla sua semplicità, efficienza e natura cross-platform, Markdown è diventato lo strumento preferito per la creazione di contenuti. Che si tratti di documentazione tecnica, articoli o semplici appunti, Markdown offre un'esperienza di scrittura coerente ed efficiente.

Imparare Markdown è facile, ma padroneggiarlo può aumentare significativamente la produttività nella scrittura digitale. Se non l'hai ancora provato, ora è il momento perfetto per iniziare!

---

*Autore: Appassionato di Markdown*  
*Data pubblicazione: 15 Ottobre 2023*
`
      } else if (currentLocale === 'zh-TW') {
        markdownText.value = `# Markdown: 簡單而強大的文字格式語言

## 引言

在數位化內容創作的時代，**Markdown** 作為一種輕量級標記語言，已經成為了技術文件、部落格寫作和內容管理的首選工具。本文將探討Markdown的歷史、基本語法和廣泛應用場景。

## Markdown的歷史與設計理念

Markdown由John Gruber和Aaron Swartz於2004年創建，其設計初衷是為了讓人們能夠使用易讀易寫的純文字格式編寫文件，然後轉換成有效的HTML文件。

> "Markdown的首要設計目標是易讀性。一份Markdown格式的文件應該要能直接以純文字發布，而不會看起來像是被標記或格式化指令所構成。" 
> — John Gruber

這種設計理念使Markdown與其他標記語言有本質區別：**它注重的是內容本身，而不是表現形式**。

## Markdown的基本語法

Markdown提供了一套簡潔的語法規則，下面是一些基礎元素：

### 1. 標題

Markdown使用#符號來識別標題級別：

\`\`\`markdown
# 一級標題
## 二級標題
### 三級標題
\`\`\`

### 2. 格式化文字

- **粗體**: \`**文字**\` 或 \`__文字__\`
- *斜體*: \`*文字*\` 或 \`_文字_\`
- ~~刪除線~~: \`~~文字~~\`

### 3. 清單

無序清單使用減號、加號或星號作為清單項標記：

- 項目1
- 項目2
  - 子項目A
  - 子項目B

有序清單則使用數字加點：

1. 第一項
2. 第二項
3. 第三項

### 4. 連結和圖片

連結語法: \`[連結文字](URL)\`  
圖片語法: \`\`

### 5. 程式碼區塊

\`\`\`javascript
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

## Markdown的廣泛應用

Markdown已被廣泛應用於各種平台和工具中：

| 平台/工具 | 應用場景 |
| --------- | -------- |
| GitHub    | 程式碼文件、Issues、Pull Requests |
| Stack Overflow | 問答格式化 |
| WordPress | 部落格寫作 |
| Discord/Slack | 訊息格式化 |
| Notion    | 筆記和知識管理 |

## 結語

Markdown憑藉其簡潔、高效和跨平台的特性，已經成為內容創作者的得力助手。無論是撰寫技術文件、部落格文章，還是簡單的筆記整理，Markdown都能提供一致且高效的寫作體驗。

學習Markdown並不困難，但掌握它將為您的數位寫作帶來巨大的生產力提升。如果您還沒有嘗試過Markdown，現在正是最好的時機！

---

*文章作者: Markdown愛好者*  
*發布日期: 2023年10月15日*
`
      } else {
        console.error('Invalid locale:', currentLocale);
        throw new Error('Invalid locale');
      }
      break;
  }

  convertMarkdownToHtml()
}

// 监听滚动事件
onMounted(() => {
  if (previewContainer.value) {
    previewContainer.value.addEventListener('scroll', handlePreviewScroll)
  }

  // 初始加载示例
  loadSample('basic')
})

// 清理事件监听
onBeforeUnmount(() => {
  if (previewContainer.value) {
    previewContainer.value.removeEventListener('scroll', handlePreviewScroll)
  }
})

// 监听预览模式变化
watch(previewMode, () => {
  nextTick(() => {
    convertMarkdownToHtml()
  })
})

// 监听实时预览设置
watch(realtimePreview, (newValue) => {
  if (newValue) {
    convertMarkdownToHtml()
  }
})

// 监听包含CSS设置
watch(includeCss, () => {
  convertMarkdownToHtml()
})

// 监听安全设置
watch(sanitize, () => {
  convertMarkdownToHtml()
})

// 监听语言变化，自动更新示例
watch(locale, (newLocale) => {
  if (currentSampleType.value) {
    // 如果已经加载了示例，则重新加载当前示例类型
    loadSample(currentSampleType.value);
  }
});
</script>

<style>
.markdown-content h1 {
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
}

.markdown-content h2 {
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
}

.markdown-content h3 {
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
}

.markdown-content h4 {
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
}

.markdown-content h5 {
  font-size: 0.83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
}

.markdown-content h6 {
  font-size: 0.67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
}

.markdown-content p {
  margin: 1em 0;
}

.markdown-content pre {
  background-color: #f6f8fa;
  padding: 16px;
  border-radius: 6px;
  overflow: auto;
}

.markdown-content code {
  background-color: rgba(175, 184, 193, 0.2);
  padding: 0.2em 0.4em;
  border-radius: 6px;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
}

.markdown-content pre code {
  background-color: transparent;
  padding: 0;
}

.markdown-content blockquote {
  padding: 0 1em;
  color: #57606a;
  border-left: 0.25em solid #d0d7de;
  margin: 1em 0;
}

.markdown-content table {
  border-collapse: collapse;
  margin: 1em 0;
  overflow: auto;
  width: 100%;
}

.markdown-content table th,
.markdown-content table td {
  border: 1px solid #d0d7de;
  padding: 6px 13px;
}

.markdown-content table tr {
  background-color: #ffffff;
  border-top: 1px solid #d0d7de;
}

.markdown-content table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

.markdown-content img {
  max-width: 100%;
}

.markdown-content hr {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #d0d7de;
  border: 0;
}

.markdown-content ul,
.markdown-content ol {
  padding-left: 2em;
  margin: 1em 0;
}
</style>