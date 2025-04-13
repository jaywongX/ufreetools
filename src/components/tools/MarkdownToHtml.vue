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
              <input 
                type="checkbox" 
                id="realtime-preview" 
                v-model="realtimePreview"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="realtime-preview" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {{ t('tools.markdown-to-html.options.realtimePreview') }}
              </label>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="scroll-sync" 
                v-model="scrollSync"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
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
              <input 
                type="checkbox" 
                id="sanitize" 
                v-model="sanitize"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="sanitize" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {{ t('tools.markdown-to-html.options.sanitize') }}
              </label>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="include-css" 
                v-model="includeCss"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
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
            <button 
              @click="loadSample('basic')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {{ t('tools.markdown-to-html.samples.basic') }}
            </button>
            <button 
              @click="loadSample('extended')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {{ t('tools.markdown-to-html.samples.extended') }}
            </button>
            <button 
              @click="loadSample('article')"
              class="px-3 py-1 text-sm rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
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
              <button 
                @click="clearInput"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.markdown-to-html.input.clearInput')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button 
                @click="pasteFromClipboard"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.markdown-to-html.input.paste')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-3">
            <textarea 
              ref="markdownInput"
              v-model="markdownText" 
              class="w-full h-80 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
              :placeholder="t('tools.markdown-to-html.input.placeholder')"
              @input="onMarkdownChange"
              @scroll="handleMarkdownScroll"
            ></textarea>
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
              <button 
                @click="previewMode = 'preview'"
                class="px-3 py-1 text-sm rounded"
                :class="previewMode === 'preview' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'"
              >
                {{ t('tools.markdown-to-html.output.previewTab') }}
              </button>
              <button 
                @click="previewMode = 'html'"
                class="px-3 py-1 text-sm rounded"
                :class="previewMode === 'html' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'"
              >
                {{ t('tools.markdown-to-html.output.htmlTab') }}
              </button>
            </div>
            <div class="space-x-2">
              <button 
                @click="refreshPreview"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.markdown-to-html.actions.convert')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button 
                @click="copyOutput"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.markdown-to-html.output.copyOutput')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-8m-10 0h4l-5-5-5 5h4v8" />
                </svg>
              </button>
              <button 
                @click="downloadHtml"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                :title="t('tools.markdown-to-html.output.download')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-3 h-[21.5rem] overflow-auto" ref="previewContainer">
            <!-- 渲染HTML预览 -->
            <div v-if="previewMode === 'preview'" class="prose dark:prose-invert max-w-none w-full markdown-content" v-html="htmlOutput" ref="htmlPreview"></div>
            
            <!-- 显示HTML代码 -->
            <pre v-else class="text-sm w-full h-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono overflow-auto"><code>{{ htmlOutput }}</code></pre>
          </div>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ previewMode === 'preview' ? t('tools.markdown-to-html.output.previewMode') : t('tools.markdown-to-html.output.sourceMode') }}
        </div>
      </div>
    </div>
    
    <!-- 转换状态提示 -->
    <div class="mt-4 text-sm text-gray-600 dark:text-gray-400" v-if="lastConversionTime">
      <p>{{ t('tools.markdown-to-html.status.lastConversion') }}: {{ new Date(lastConversionTime).toLocaleTimeString() }}</p>
    </div>
    
    <!-- 复制成功提示 -->
    <div 
      v-if="copySuccess" 
      class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300"
      :class="{'opacity-100': copySuccess, 'opacity-0': !copySuccess}"
    >
      {{ t('tools.markdown-to-html.alerts.copied') }}
    </div>
    
    <!-- 添加文章组件 -->
    <MarkdownToHtmlArticle />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'
import { useI18n } from 'vue-i18n'
import MarkdownToHtmlArticle from './MarkdownToHtmlArticle.vue'

// 初始化国际化
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
    alert('无法从剪贴板读取文本。您可能需要在安全的上下文(HTTPS)中运行，或授予网站权限。')
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
    alert('复制HTML到剪贴板失败')
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
  
  switch(type) {
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
      } else {
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
      } else {
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
      } else {
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