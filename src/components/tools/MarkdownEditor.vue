<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <!-- 工具栏 -->
    <div class="flex flex-wrap items-center p-2 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
      <!-- 标题 -->
      <div class="flex space-x-1 mr-3">
        <button v-for="level in [1, 2, 3, 4, 5, 6]" :key="level" @click="insertHeading(level)" class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.heading') + ' ' + level">
          H{{ level }}
        </button>
      </div>

      <!-- 分隔线 -->
      <div class="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

      <!-- 文本格式 -->
      <div class="flex space-x-1 mr-3">
        <button @click="insertBold" class="md-toolbar-btn" :title="t('tools.markdown-editor.actions.bold')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 10h8a2 2 0 002-2V6a2 2 0 00-2-2H6v4zm0 0v8h8a2 2 0 002-2v-2a2 2 0 00-2-2H6z" />
          </svg>
        </button>
        <button @click="insertItalic" class="md-toolbar-btn" :title="t('tools.markdown-editor.actions.italic')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
        <button @click="insertStrikethrough" class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.strikethrough')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </button>
      </div>

      <!-- 分隔线 -->
      <div class="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

      <!-- 列表 -->
      <div class="flex space-x-1 mr-3">
        <button @click="insertUnorderedList" class="md-toolbar-btn" :title="t('tools.markdown-editor.actions.list')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button @click="insertOrderedList" class="md-toolbar-btn" :title="t('tools.markdown-editor.actions.list')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </button>
      </div>

      <!-- 分隔线 -->
      <div class="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

      <!-- 链接和图片 -->
      <div class="flex space-x-1 mr-3">
        <button @click="insertLink" class="md-toolbar-btn" :title="t('tools.markdown-editor.actions.link')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </button>
        <button @click="insertImage" class="md-toolbar-btn" :title="t('tools.markdown-editor.actions.image')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      <!-- 分隔线 -->
      <div class="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

      <!-- 代码 -->
      <div class="flex space-x-1 mr-3">
        <button @click="insertCodeInline" class="md-toolbar-btn" :title="t('tools.markdown-editor.actions.code')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </button>
        <button @click="insertCodeBlock" class="md-toolbar-btn" :title="t('tools.markdown-editor.actions.code')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      <!-- 分隔线 -->
      <div class="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

      <!-- 其他 -->
      <div class="flex space-x-1">
        <button @click="insertHorizontalRule" class="md-toolbar-btn" :title="t('tools.markdown-editor.actions.hr')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 18" />
          </svg>
        </button>
        <button @click="insertQuote" class="md-toolbar-btn" :title="t('tools.markdown-editor.actions.quote')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </button>
      </div>

      <div class="flex-grow"></div>

      <!-- 操作按钮 -->
      <div class="flex space-x-2">
        <button @click="copyMarkdown"
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          {{ t('tools.markdown-editor.actions.copy') }}
        </button>
        <button @click="clearMarkdown"
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          {{ t('tools.markdown-editor.actions.clear') }}
        </button>
      </div>
    </div>

    <!-- 状态消息 -->
    <div v-if="message" class="p-3 text-sm" :class="{
      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': messageType === 'success',
      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': messageType === 'error',
    }">
      {{ message }}
    </div>

    <div class="p-4">
      <!-- 布局切换 -->
      <div class="mb-4 flex justify-end">
        <div class="flex p-1 bg-gray-100 dark:bg-gray-700 rounded-md">
          <button @click="editorLayout = 'split'" class="px-3 py-1 text-xs rounded" :class="{
            'bg-white dark:bg-gray-800 shadow': editorLayout === 'split',
            'text-gray-600 dark:text-gray-300': editorLayout !== 'split'
          }">
            {{ t('tools.markdown-editor.modes.split') }}
          </button>
          <button @click="editorLayout = 'edit'" class="px-3 py-1 text-xs rounded" :class="{
            'bg-white dark:bg-gray-800 shadow': editorLayout === 'edit',
            'text-gray-600 dark:text-gray-300': editorLayout !== 'edit'
          }">
            {{ t('tools.markdown-editor.modes.edit') }}
          </button>
          <button @click="editorLayout = 'preview'" class="px-3 py-1 text-xs rounded" :class="{
            'bg-white dark:bg-gray-800 shadow': editorLayout === 'preview',
            'text-gray-600 dark:text-gray-300': editorLayout !== 'preview'
          }">
            {{ t('tools.markdown-editor.modes.preview') }}
          </button>
        </div>
      </div>

      <!-- 编辑区域 -->
      <div class="grid gap-4" :class="{
        'grid-cols-2': editorLayout === 'split',
        'grid-cols-1': editorLayout !== 'split'
      }">
        <!-- Markdown编辑器 -->
        <div v-if="editorLayout === 'split' || editorLayout === 'edit'" class="markdown-editor-container">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{
            t('tools.markdown-editor.modes.edit') }}</div>
          <textarea ref="markdownEditor" v-model="markdownContent"
            class="w-full h-96 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            :placeholder="t('tools.markdown-editor.placeholder')" @input="handleUserInput"
            @keydown.tab.prevent="handleTabKey"></textarea>
        </div>

        <!-- 预览区域 -->
        <div v-if="editorLayout === 'split' || editorLayout === 'preview'" class="markdown-preview-container">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{
            t('tools.markdown-editor.modes.preview') }}</div>
          <div
            class="w-full h-96 p-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 overflow-auto">
            <div v-html="renderedContent" class="markdown-body"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 快速模板 -->
    <div class="p-4 border-t border-gray-200 dark:border-gray-700">
      <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{
        t('tools.markdown-editor.templates.title') }}</div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <button v-for="template in markdownTemplates" :key="template.name" @click="applyTemplate(template)"
          class="text-left p-2 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-750">
          <div class="text-sm font-medium">{{ template.name }}</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ template.description }}</div>
        </button>
      </div>
    </div>

    <!-- 确认对话框 -->
    <ConfirmDialog :title="dialogTitle" :message="dialogMessage" :confirm-text="dialogConfirmText"
      :cancel-text="dialogCancelText" :is-open="showDialog" @confirm="onDialogConfirm" @cancel="onDialogCancel" />

    <!-- 在底部添加文章部分 -->
    <MarkdownEditorArticle />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { useI18n } from 'vue-i18n'
import ConfirmDialog from './ConfirmDialog.vue'
import MarkdownEditorArticle from './MarkdownEditorArticle.vue'

// 初始化国际化
const { t, locale } = useI18n()

// 编辑器内容
const markdownContent = ref('')
const renderedContent = ref('')
const markdownEditor = ref(null)

// 布局模式: split(分屏), edit(仅编辑), preview(仅预览)
const editorLayout = ref('split')

// 状态信息
const message = ref('')
const messageType = ref('success')

// Markdown模板
const markdownTemplates = ref([])

// 记录是否用户已进行编辑
const userHasEdited = ref(false)

// 对话框配置
const showDialog = ref(false)
const dialogTitle = ref('')
const dialogMessage = ref('')
const dialogConfirmText = ref('')
const dialogCancelText = ref('')
const currentDialogAction = ref(null)
const dialogParams = ref(null)

// 初始化marked选项
marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (err) { }
    }

    return hljs.highlightAuto(code).value
  },
  langPrefix: 'hljs language-',
  gfm: true,
  breaks: true
})

// 渲染Markdown
const updatePreview = () => {
  try {
    // 渲染Markdown为HTML并进行安全处理
    const html = marked(markdownContent.value)
    renderedContent.value = DOMPurify.sanitize(html)
  } catch (err) {
    console.error('Markdown parsing error:', err)
    showMessage('Markdown解析错误', 'error')
  }
}

// 显示消息
const showMessage = (msg, type = 'success') => {
  message.value = msg
  messageType.value = type

  setTimeout(() => {
    message.value = ''
  }, 3000)
}

// 复制Markdown内容
const copyMarkdown = async () => {
  try {
    await navigator.clipboard.writeText(markdownContent.value)
    showMessage(t('tools.markdown-editor.messages.copied'), 'success')
  } catch (err) {
    showMessage(t('tools.markdown-editor.messages.copyError'), 'error')
  }
}

// 显示确认对话框
const showConfirmDialog = (title, message, confirmCallback, params = null) => {
  dialogTitle.value = title
  dialogMessage.value = message
  dialogConfirmText.value = t('common.confirm')
  dialogCancelText.value = t('common.cancel')
  currentDialogAction.value = confirmCallback
  dialogParams.value = params
  showDialog.value = true
}

// 确认对话框回调
const onDialogConfirm = () => {
  if (currentDialogAction.value) {
    currentDialogAction.value(dialogParams.value)
  }
  showDialog.value = false
}

// 取消对话框回调
const onDialogCancel = () => {
  showDialog.value = false
}

// 清空编辑器
const clearMarkdown = () => {
  if (markdownContent.value) {
    showConfirmDialog(
      t('tools.markdown-editor.dialogs.clear.title'),
      t('tools.markdown-editor.dialogs.clear.message'),
      () => {
        markdownContent.value = ''
        updatePreview()
      }
    )
  }
}

// 处理Tab键
const handleTabKey = (e) => {
  const textarea = e.target
  const start = textarea.selectionStart
  const end = textarea.selectionEnd

  // 插入制表符（2个空格）
  markdownContent.value = markdownContent.value.substring(0, start) + '  ' + markdownContent.value.substring(end)

  // 设置光标位置
  setTimeout(() => {
    textarea.selectionStart = textarea.selectionEnd = start + 2
  }, 0)
}

// 工具栏函数
const getSelection = () => {
  const textarea = markdownEditor.value
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selection = markdownContent.value.substring(start, end)

  return { start, end, selection }
}

const insertText = (before, after = '') => {
  const textarea = markdownEditor.value
  const { start, end, selection } = getSelection()

  markdownContent.value = markdownContent.value.substring(0, start)
    + before
    + selection
    + after
    + markdownContent.value.substring(end)

  // 更新预览
  updatePreview()

  // 设置光标位置
  setTimeout(() => {
    textarea.focus()
    if (selection) {
      textarea.selectionStart = start + before.length
      textarea.selectionEnd = start + before.length + selection.length
    } else {
      textarea.selectionStart = textarea.selectionEnd = start + before.length
    }
  }, 0)
}

// 工具栏按钮函数
const insertHeading = (level) => {
  const hashes = '#'.repeat(level) + ' '

  // 获取当前选中行
  const { start, selection } = getSelection()
  const text = markdownContent.value
  const lineStart = text.lastIndexOf('\n', start) + 1
  const lineEnd = text.indexOf('\n', start)
  const line = text.substring(lineStart, lineEnd > -1 ? lineEnd : text.length)

  // 从行的开始位置插入标题
  const before = text.substring(0, lineStart)
  const middle = hashes + line.replace(/^#+\s/, '')
  const after = text.substring(lineEnd > -1 ? lineEnd : text.length)

  markdownContent.value = before + middle + after
  updatePreview()

  // 设置光标位置
  setTimeout(() => {
    markdownEditor.value.focus()
    markdownEditor.value.selectionStart = markdownEditor.value.selectionEnd = lineStart + hashes.length + line.replace(/^#+\s/, '').length
  }, 0)
}

const insertBold = () => {
  insertText('**', '**')
}

const insertItalic = () => {
  insertText('*', '*')
}

const insertStrikethrough = () => {
  insertText('~~', '~~')
}

const insertUnorderedList = () => {
  const { selection } = getSelection()
  if (selection) {
    const lines = selection.split('\n')
    const formattedLines = lines.map(line => `- ${line}`).join('\n')
    insertText(formattedLines, '')
  } else {
    insertText('- ')
  }
}

const insertOrderedList = () => {
  const { selection } = getSelection()
  if (selection) {
    const lines = selection.split('\n')
    const formattedLines = lines.map((line, i) => `${i + 1}. ${line}`).join('\n')
    insertText(formattedLines, '')
  } else {
    insertText('1. ')
  }
}

const insertLink = () => {
  const { selection } = getSelection()
  if (selection) {
    if (selection.startsWith('http') || selection.startsWith('www')) {
      insertText(`[](${selection})`, '')
    } else {
      insertText(`[${selection}]`, '(https://)')
    }
  } else {
    insertText(`[${t('tools.markdown-editor.placeholders.linkText')}](https://)`, '')
  }
}

const insertImage = () => {
  insertText(`![${t('tools.markdown-editor.placeholders.imageAlt')}](https://)`, '')
}

const insertCodeInline = () => {
  insertText('`', '`')
}

const insertCodeBlock = () => {
  insertText('```\n', '\n```')
}

const insertHorizontalRule = () => {
  insertText('\n---\n')
}

const insertQuote = () => {
  const { selection } = getSelection()
  if (selection) {
    const lines = selection.split('\n')
    const formattedLines = lines.map(line => `> ${line}`).join('\n')
    insertText(formattedLines, '')
  } else {
    insertText('> ')
  }
}

// 初始化模板
const initTemplates = () => {
  if (locale.value === 'zh') {
    // 中文模板
    markdownTemplates.value = [
      {
        name: '简单文档',
        description: '包含标题、列表、引用等',
        content: `# 文档标题

## 简介
这是一个简单的Markdown文档示例。

## 特性
- 支持标题和段落
- 支持**粗体**和*斜体*
- 支持有序和无序列表

> 这是一个引用块，用于引用他人的观点。

## 结论
Markdown是一种简单易用的标记语言。`
      },
      {
        name: '项目README',
        description: '项目文档标准结构',
        content: `# 项目名称

## 项目简介
简短描述项目的主要功能和用途。

## 功能特点
- 主要功能点1
- 主要功能点2
- 主要功能点3

## 安装说明
\`\`\`
# 安装依赖
npm install

# 启动开发服务器
npm run dev
\`\`\`

## 使用示例
\`\`\`
// 示例代码
const example = new Example();
example.init();
\`\`\`

## 文档
更多详细文档请参考文档链接。

## 贡献指南
欢迎贡献代码，请参阅贡献指南。

## 许可证
本项目基于MIT许可证发布，详细信息请参阅LICENSE文件。`
      },
      {
        name: '个人简历',
        description: '个人简历模板',
        content: `# 个人简历

## 个人信息
- 姓名：张三
- 电话：138xxxx1234
- 邮箱：zhangsan@example.com
- 求职意向：前端开发工程师

## 教育背景
大学名称，计算机科学与技术，2016年9月至2020年6月

## 工作经历
### 科技公司，前端开发工程师，2020年7月至今
- 负责公司核心产品的前端开发与维护
- 使用Vue.js开发企业管理系统，提升用户体验
- 优化前端性能，减少页面加载时间30%

### 科技公司，前端开发实习生，2019年7月至2020年6月
- 参与公司官网改版项目
- 协助团队进行代码重构与优化

## 技术技能
- 前端开发：HTML, CSS, JavaScript, Vue.js, React
- 后端开发：Node.js, Express
- 其他工具：Git, Webpack, Docker

## 项目经验
### 企业管理系统
- 使用Vue.js开发的企业内部管理系统
- 实现了数据可视化、权限管理等功能
- 优化了系统响应速度，提升用户体验

## 语言能力
- 英语（熟练）
- 日语（基础）`
      }
    ];
  } else if (locale.value === 'en') {
    // 英文模板
    markdownTemplates.value = [
      {
        name: 'Simple Document',
        description: 'Includes headings, lists, quotes, etc.',
        content: `# Document Title

## Introduction
This is a simple example of a Markdown document.

## Features
- Supports headings and paragraphs
- Supports **bold** and *italic* text
- Supports ordered and unordered lists

> This is a blockquote, used to quote someone else's opinion.

## Conclusion
Markdown is a simple and easy-to-use markup language.`
      },
      {
        name: 'Project README',
        description: 'Standard structure for project documentation',
        content: `# Project Name

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Project Description
Brief description of the project's main functions and purpose.

## Features
- Main feature 1
- Main feature 2
- Main feature 3

## Installation
\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

## Usage Example
\`\`\`javascript
// Example code
const example = new Example();
example.init();
\`\`\`

## Documentation
For more detailed documentation, please refer to [Documentation Link](docs/README.md).

## Contribution Guide
Contributions are welcome, please see [Contribution Guide](CONTRIBUTING.md).

## License
This project is released under the MIT License, see [LICENSE](LICENSE) for details.`
      },
      {
        name: 'Resume',
        description: 'Personal resume template',
        content: `# Resume

## Personal Information
- **Name**: John Doe
- **Phone**: 123-456-7890
- **Email**: johndoe@email.com
- **Job Objective**: Frontend Developer

## Education
**University of XYZ** | Computer Science | September 2016 - June 2020

## Work Experience
### XYZ Tech Inc. | Frontend Developer | July 2020 - Present
- Responsible for the frontend development and maintenance of core products
- Developed enterprise management system using Vue.js, improving user experience
- Optimized frontend performance, reducing page load time by 30%

### ABC Corp. | Frontend Intern | July 2019 - June 2020
- Participated in company website redesign project
- Assisted the team with code refactoring and optimization

## Technical Skills
- **Frontend**: HTML, CSS, JavaScript, Vue.js, React
- **Backend**: Node.js, Express
- **Other Tools**: Git, Webpack, Docker

## Project Experience
### Enterprise Management System
- Developed with Vue.js + Element UI
- Implemented data visualization, permission management features
- Optimized system response speed, improved user experience

## Language Skills
- English (Fluent)
- Spanish (Basic)`
      }
    ];
  } else if (locale.value === 'es') {
    // 西班牙文模板
    markdownTemplates.value = [
      {
        name: 'Documento Simple',
        description: 'Incluye encabezados, listas, citas, etc.',
        content: `# Título del Documento

## Introducción
Este es un ejemplo simple de un documento Markdown.

## Características
- Soporta encabezados y párrafos
- Soporta texto en **negrita** y *cursiva*
- Soporta listas ordenadas y no ordenadas

> Esto es una cita, utilizada para citar la opinión de otra persona.

## Conclusión
Markdown es un lenguaje de marcado simple y fácil de usar.`
      },
      {
        name: 'README del Proyecto',
        description: 'Estructura estándar para documentación de proyectos',
        content: `# Nombre del Proyecto

[![Licencia](https://img.shields.io/badge/licencia-MIT-blue.svg)](LICENSE)

## Descripción del Proyecto
Breve descripción de las funciones principales y el propósito del proyecto.

## Características
- Característica principal 1
- Característica principal 2
- Característica principal 3

## Instalación
\`\`\`bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
\`\`\`

## Ejemplo de Uso
\`\`\`javascript
// Código de ejemplo
const ejemplo = new Ejemplo();
ejemplo.init();
\`\`\`

## Documentación
Para documentación más detallada, consulte [Enlace a la Documentación](docs/README.md).

## Guía de Contribución
Las contribuciones son bienvenidas, consulte [Guía de Contribución](CONTRIBUTING.md).

## Licencia
Este proyecto se publica bajo la Licencia MIT, consulte [LICENSE](LICENSE) para más detalles.`
      },
      {
        name: 'Currículum',
        description: 'Plantilla de currículum personal',
        content: `# Currículum

## Información Personal
- **Nombre**: Juan Pérez
- **Teléfono**: 123-456-7890
- **Correo**: juanperez@email.com
- **Objetivo Laboral**: Desarrollador Frontend

## Educación
**Universidad XYZ** | Ciencias de la Computación | Septiembre 2016 - Junio 2020

## Experiencia Laboral
### XYZ Tecnología S.A. | Desarrollador Frontend | Julio 2020 - Presente
- Responsable del desarrollo frontend y mantenimiento de productos principales
- Desarrollé sistema de gestión empresarial usando Vue.js, mejorando experiencia de usuario
- Optimicé rendimiento frontend, reduciendo tiempo de carga de página en 30%

### ABC Corp. | Pasante Frontend | Julio 2019 - Junio 2020
- Participé en proyecto de rediseño del sitio web de la empresa
- Asistí al equipo con refactorización y optimización de código

## Habilidades Técnicas
- **Frontend**: HTML, CSS, JavaScript, Vue.js, React
- **Backend**: Node.js, Express
- **Otras Herramientas**: Git, Webpack, Docker

## Experiencia en Proyectos
### Sistema de Gestión Empresarial
- Desarrollado con Vue.js + Element UI
- Implementé visualización de datos, características de gestión de permisos
- Optimicé velocidad de respuesta del sistema, mejoré experiencia de usuario

## Habilidades Lingüísticas
- Español (Nativo)
- Inglés (Avanzado)`
      }
    ];
  } else if (locale.value === 'hi') {
    // 印地语模板
    markdownTemplates.value = [
      {
        name: 'सरल दस्तावेज़',
        description: 'शीर्षक, सूचियां, उद्धरण आदि शामिल हैं',
        content: `# दस्तावेज़ का शीर्षक

## परिचय
यह एक सरल मार्कडाउन दस्तावेज़ का उदाहरण है।

## विशेषताएँ
- शीर्षक और अनुच्छेदों का समर्थन करता है
- **बोल्ड** और *इटैलिक* टेक्स्ट का समर्थन करता है
- क्रमित और अक्रमित सूचियों का समर्थन करता है

> यह एक ब्लॉकक्वोट है, जिसका उपयोग किसी अन्य व्यक्ति की राय का उद्धरण देने के लिए किया जाता है।

## निष्कर्ष
मार्कडाउन एक सरल और उपयोग में आसान मार्कअप भाषा है।`
      },
      {
        name: 'प्रोजेक्ट README',
        description: 'प्रोजेक्ट दस्तावेज़ीकरण के लिए मानक संरचना',
        content: `# प्रोजेक्ट का नाम

[![लाइसेंस](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## प्रोजेक्ट का विवरण
प्रोजेक्ट के मुख्य कार्यों और उद्देश्य का संक्षिप्त विवरण।

## विशेषताएँ
- मुख्य विशेषता 1
- मुख्य विशेषता 2
- मुख्य विशेषता 3

## इंस्टॉलेशन
\`\`\`bash
# निर्भरताएँ इंस्टॉल करें
npm install

# विकास सर्वर शुरू करें
npm run dev
\`\`\`

## उपयोग का उदाहरण
\`\`\`javascript
// उदाहरण कोड
const example = new Example();
example.init();
\`\`\`

## दस्तावेज़ीकरण
अधिक विस्तृत दस्तावेज़ीकरण के लिए, कृपया [दस्तावेज़ीकरण लिंक](docs/README.md) देखें।

## योगदान मार्गदर्शिका
योगदान का स्वागत है, कृपया [योगदान मार्गदर्शिका](CONTRIBUTING.md) देखें।

## लाइसेंस
यह प्रोजेक्ट MIT लाइसेंस के तहत जारी किया गया है, विवरण के लिए [LICENSE](LICENSE) देखें।`
      },
      {
        name: 'रिज्यूमे',
        description: 'व्यक्तिगत रिज्यूमे टेम्पलेट',
        content: `# रिज्यूमे

## व्यक्तिगत जानकारी
- **नाम**: राजेश शर्मा
- **फोन**: 123-456-7890
- **ईमेल**: rajesh@email.com
- **नौकरी का उद्देश्य**: फ्रंटएंड डेवलपर

## शिक्षा
**XYZ विश्वविद्यालय** | कंप्यूटर साइंस | सितंबर 2016 - जून 2020

## कार्य अनुभव
### XYZ टेक इंक. | फ्रंटएंड डेवलपर | जुलाई 2020 - वर्तमान
- मुख्य उत्पादों के फ्रंटएंड विकास और रखरखाव के लिए जिम्मेदार
- Vue.js का उपयोग करके एंटरप्राइज मैनेजमेंट सिस्टम विकसित किया, उपयोगकर्ता अनुभव में सुधार किया
- फ्रंटएंड प्रदर्शन को अनुकूलित किया, पेज लोड समय को 30% कम किया

### ABC कॉर्प. | फ्रंटएंड इंटर्न | जुलाई 2019 - जून 2020
- कंपनी वेबसाइट रीडिज़ाइन प्रोजेक्ट में भाग लिया
- कोड रिफैक्टरिंग और अनुकूलन में टीम की सहायता की

## तकनीकी कौशल
- **फ्रंटएंड**: HTML, CSS, JavaScript, Vue.js, React
- **बैकएंड**: Node.js, Express
- **अन्य टूल्स**: Git, Webpack, Docker

## प्रोजेक्ट अनुभव
### एंटरप्राइज मैनेजमेंट सिस्टम
- Vue.js + Element UI के साथ विकसित
- डेटा विज़ुअलाइज़ेशन, अनुमति प्रबंधन सुविधाएँ लागू की
- सिस्टम प्रतिक्रिया गति को अनुकूलित किया, उपयोगकर्ता अनुभव में सुधार किया

## भाषा कौशल
- हिंदी (मातृभाषा)
- अंग्रेज़ी (प्रवाहपूर्ण)`
      }
    ];
  } else if (locale.value === 'ar') {
    // 阿拉伯文模板
    markdownTemplates.value = [
      {
        name: 'المستند البسيط',
        description: 'يتضمن عناوين وقائمة واقتباسات',
        content: `# المستند البسيط

## المقدمة
هذا مستند بسيط يستخدم لتجربة التحرير باستخدام Markdown.

## الخصائص
- يدعم العناوين والفقرات
`
      },
    ]
  } else if (locale.value === 'ru') {
    // 俄语模板
    markdownTemplates.value = [
      {
        name: 'Простой документ',
        description: 'Включает заголовки, списки, цитаты и т.д.',
        content: `# Заголовок документа

## Введение
Это простой пример документа Markdown.

## Особенности
- Поддерживает заголовки и параграфы
- Поддерживает **жирный** и *курсивный* текст
- Поддерживает упорядоченные и неупорядоченные списки

> Это блок цитаты, используемый для цитирования мнения других людей.

## Заключение
Markdown - это простой и удобный язык разметки.`
      },
      {
        name: 'README проекта',
        description: 'Стандартная структура для документации проекта',
        content: `# Название проекта

[![Лицензия](https://img.shields.io/badge/лицензия-MIT-blue.svg)](LICENSE)

## Описание проекта
Краткое описание основных функций и назначения проекта.

## Особенности
- Основная особенность 1
- Основная особенность 2
- Основная особенность 3

## Установка
\`\`\`bash
# Установка зависимостей
npm install

# Запуск сервера разработки
npm run dev
\`\`\`

## Пример использования
\`\`\`javascript
// Пример кода
const example = new Example();
example.init();
\`\`\`

## Документация
Для более подробной документации, пожалуйста, обратитесь к [Ссылке на документацию](docs/README.md).

## Руководство по внесению вклада
Вклады приветствуются, пожалуйста, ознакомьтесь с [Руководством по внесению вклада](CONTRIBUTING.md).

## Лицензия
Этот проект выпущен под лицензией MIT, подробности см. в [LICENSE](LICENSE).`
      },
      {
        name: 'Резюме',
        description: 'Шаблон личного резюме',
        content: `# Резюме

## Личная информация
- **Имя**: Иван Иванов
- **Телефон**: +7 123 456 7890
- **Email**: ivan.ivanov@email.com
- **Цель**: Фронтенд-разработчик

## Образование
**Университет XYZ** | Компьютерные науки | Сентябрь 2016 - Июнь 2020

## Опыт работы
### XYZ Tech Inc. | Фронтенд-разработчик | Июль 2020 - Настоящее время
- Ответственный за разработку и поддержку фронтенда основных продуктов
- Разработал систему управления предприятием с использованием Vue.js, улучшив пользовательский опыт
- Оптимизировал производительность фронтенда, сократив время загрузки страницы на 30%

### ABC Corp. | Стажер фронтенд-разработчик | Июль 2019 - Июнь 2020
- Участвовал в проекте редизайна сайта компании
- Помогал команде с рефакторингом и оптимизацией кода

## Технические навыки
- **Фронтенд**: HTML, CSS, JavaScript, Vue.js, React
- **Бэкенд**: Node.js, Express
- **Другие инструменты**: Git, Webpack, Docker

## Опыт работы над проектами
### Система управления предприятием
- Разработана с использованием Vue.js + Element UI
- Реализованы функции визуализации данных, управления правами доступа
- Оптимизирована скорость отклика системы, улучшен пользовательский опыт

## Языковые навыки
- Русский (родной)
- Английский (свободное владение)`
      }
    ];
  } else if (locale.value === 'fr') {
    // 法语模板
    markdownTemplates.value = [
      {
        name: 'Document Simple',
        description: 'Inclut titres, listes, citations, etc.',
        content: `# Titre du Document

## Introduction
Ceci est un exemple simple de document Markdown.

## Caractéristiques
- Prend en charge les titres et paragraphes
- Prend en charge le texte en **gras** et en *italique*
- Prend en charge les listes ordonnées et non ordonnées

> Ceci est un bloc de citation, utilisé pour citer l'opinion de quelqu'un d'autre.

## Conclusion
Markdown est un langage de balisage simple et facile à utiliser.`
      },
      {
        name: 'README de Projet',
        description: 'Structure standard pour documentation de projet',
        content: `# Nom du Projet

## Description du Projet
Brève description des fonctions principales et de l'objectif du projet.

## Fonctionnalités
- Fonctionnalité principale 1
- Fonctionnalité principale 2
- Fonctionnalité principale 3

## Installation
\`\`\`
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
\`\`\`

## Exemple d'Utilisation
\`\`\`
// Code exemple
const example = new Example();
example.init();
\`\`\`

## Documentation
Pour une documentation plus détaillée, veuillez consulter le lien de la documentation.

## Guide de Contribution
Les contributions sont les bienvenues, veuillez consulter le guide de contribution.

## Licence
Ce projet est publié sous la licence MIT, voir le fichier LICENSE pour plus de détails.`
      },
      {
        name: 'CV Personnel',
        description: 'Modèle de CV personnel',
        content: `# Curriculum Vitae

## Informations Personnelles
- Nom : Jean Dupont
- Téléphone : 06 12 34 56 78
- Email : jean.dupont@example.com
- Objectif Professionnel : Développeur Frontend

## Formation
Université XYZ, Informatique, Septembre 2016 - Juin 2020

## Expérience Professionnelle
### Entreprise Tech, Développeur Frontend, Juillet 2020 - Présent
- Responsable du développement frontend et de la maintenance des produits principaux
- Développement d'un système de gestion d'entreprise avec Vue.js, amélioration de l'expérience utilisateur
- Optimisation des performances frontend, réduction du temps de chargement des pages de 30%

### Entreprise ABC, Stagiaire Frontend, Juillet 2019 - Juin 2020
- Participation au projet de refonte du site web de l'entreprise
- Assistance à l'équipe pour la refactorisation et l'optimisation du code

## Compétences Techniques
- Développement Frontend : HTML, CSS, JavaScript, Vue.js, React
- Développement Backend : Node.js, Express
- Autres Outils : Git, Webpack, Docker

## Expérience de Projets
### Système de Gestion d'Entreprise
- Développé avec Vue.js
- Implémentation de visualisation de données, gestion des autorisations et autres fonctionnalités
- Optimisation de la vitesse de réponse du système, amélioration de l'expérience utilisateur

## Compétences Linguistiques
- Français (Langue maternelle)
- Anglais (Courant)`
      }
    ];
  } else if (locale.value === 'ja') {
    // 日本語テンプレート
    markdownTemplates.value = [
      {
        name: 'シンプルドキュメント',
        description: '見出し、リスト、引用などを含む',
        content: `# ドキュメントタイトル

## はじめに
これはシンプルなMarkdownドキュメントの例です。

## 特徴
- 見出しや段落に対応
- **太字**や*斜体*に対応
- 順序付き・順序なしリストに対応

> これは引用ブロックです。他人の意見などを引用する際に使います。

## 結論
Markdownはシンプルで使いやすいマークアップ言語です。`
      },
      {
        name: 'プロジェクトREADME',
        description: 'プロジェクト文書の標準構成',
        content: `# プロジェクト名

## プロジェクト概要
プロジェクトの主な機能や目的を簡単に説明します。

## 主な機能
- 機能1
- 機能2
- 機能3

## インストール方法
\`\`\`
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
\`\`\`

## 使用例
\`\`\`javascript
// サンプルコード
const example = new Example();
example.init();
\`\`\`

## ドキュメント
詳細なドキュメントはドキュメントリンクを参照してください。

## コントリビューションガイド
貢献は大歓迎です。コントリビューションガイドを参照してください。

## ライセンス
本プロジェクトはMITライセンスで公開されています。詳細はLICENSEファイルを参照してください。`
      },
      {
        name: '履歴書',
        description: '個人履歴書テンプレート',
        content: `# 履歴書

## 個人情報
- 氏名：山田 太郎
- 電話：090-1234-5678
- メール：taro.yamada@example.com
- 希望職種：フロントエンドエンジニア

## 学歴
XYZ大学 コンピュータサイエンス学科 2016年4月〜2020年3月

## 職務経歴
### 株式会社テック | フロントエンドエンジニア | 2020年4月〜現在
- 主要プロダクトのフロントエンド開発・保守を担当
- Vue.jsを用いた社内管理システムの開発、UX向上
- フロントエンドのパフォーマンス最適化、ページロード時間30%短縮

### 株式会社ABC | フロントエンドインターン | 2019年4月〜2020年3月
- 企業Webサイトのリニューアルプロジェクトに参加
- コードリファクタリングや最適化をチームで実施

## 技術スキル
- フロントエンド：HTML, CSS, JavaScript, Vue.js, React
- バックエンド：Node.js, Express
- その他：Git, Webpack, Docker

## プロジェクト経験
### 社内管理システム
- Vue.jsで開発
- データ可視化や権限管理機能を実装
- システム応答速度を最適化し、UXを向上

## 語学
- 日本語（母国語）
- 英語（ビジネスレベル）`
      }
    ];
  } else if (locale.value === 'pt') {
    // 葡萄牙语模板
    markdownTemplates.value = [
      {
        name: 'Documento Simples',
        description: 'Inclui títulos, listas, citações, etc.',
        content: `# Título do Documento

## Introdução
Este é um exemplo simples de documento Markdown.

## Características
- Suporta títulos e parágrafos
- Suporta texto **negrito** e *itálico*
- Suporta listas ordenadas e não ordenadas

> Este é um bloco de citação, usado para citar a opinião de outras pessoas.

## Conclusão
Markdown é uma linguagem de marcação simples e fácil de usar.`
      },
      {
        name: 'README do Projeto',
        description: 'Estrutura padrão para documentação de projetos',
        content: `# Nome do Projeto

## Descrição do Projeto
Breve descrição das principais funções e propósito do projeto.

## Funcionalidades
- Funcionalidade principal 1
- Funcionalidade principal 2
- Funcionalidade principal 3

## Instalação
\`\`\`
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
\`\`\`

## Exemplo de Uso
\`\`\`javascript
// Código de exemplo
const example = new Example();
example.init();
\`\`\`

## Documentação
Para documentação mais detalhada, consulte o link da documentação.

## Guia de Contribuição
Contribuições são bem-vindas, consulte o guia de contribuição.

## Licença
Este projeto é publicado sob a licença MIT, veja o arquivo LICENSE para mais detalhes.`
      },
      {
        name: 'Currículo',
        description: 'Modelo de currículo pessoal',
        content: `# Currículo

## Informações Pessoais
- Nome: João Silva
- Telefone: (11) 99999-9999
- Email: joao.silva@exemplo.com
- Objetivo Profissional: Desenvolvedor Frontend

## Educação
Universidade XYZ, Ciência da Computação, Setembro 2016 - Junho 2020

## Experiência Profissional
### Empresa Tech | Desenvolvedor Frontend | Julho 2020 - Presente
- Responsável pelo desenvolvimento frontend e manutenção dos produtos principais
- Desenvolvimento de sistema de gestão empresarial com Vue.js, melhoria da experiência do usuário
- Otimização do desempenho frontend, redução do tempo de carregamento das páginas em 30%

### Empresa ABC | Estagiário Frontend | Julho 2019 - Junho 2020
- Participação no projeto de redesign do site da empresa
- Assistência à equipe na refatoração e otimização de código

## Habilidades Técnicas
- Desenvolvimento Frontend: HTML, CSS, JavaScript, Vue.js, React
- Desenvolvimento Backend: Node.js, Express
- Outras Ferramentas: Git, Webpack, Docker

## Experiência em Projetos
### Sistema de Gestão Empresarial
- Desenvolvido com Vue.js
- Implementação de visualização de dados, gestão de permissões e outras funcionalidades
- Otimização da velocidade de resposta do sistema, melhoria da experiência do usuário

## Habilidades Linguísticas
- Português (Nativo)
- Inglês (Fluente)`
      }
    ];
  } else if (locale.value === 'de') {
    // 德语模板
    markdownTemplates.value = [
      {
        name: 'Einfaches Dokument',
        description: 'Enthält Überschriften, Listen, Zitate usw.',
        content: `# Dokumenttitel

## Einführung
Dies ist ein einfaches Beispiel für ein Markdown-Dokument.

## Funktionen
- Unterstützt Überschriften und Absätze
- Unterstützt **fett** und *kursiv*
- Unterstützt geordnete und ungeordnete Listen

> Dies ist ein Zitatblock, der verwendet wird, um die Meinung anderer zu zitieren.

## Fazit
Markdown ist eine einfache und benutzerfreundliche Auszeichnungssprache.`
      },
      {
        name: 'Projekt-README',
        description: 'Standardstruktur für Projektdokumentation',
        content: `# Projektname

## Projektbeschreibung
Kurze Beschreibung der Hauptfunktionen und des Zwecks des Projekts.

## Funktionen
- Hauptfunktion 1
- Hauptfunktion 2
- Hauptfunktion 3

## Installation
\`\`\`
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
\`\`\`

## Verwendungsbeispiel
\`\`\`javascript
// Beispielcode
const example = new Example();
example.init();
\`\`\`

## Dokumentation
Für detailliertere Dokumentation siehe Dokumentationslink.

## Beitragsrichtlinien
Beiträge sind willkommen, siehe Beitragsrichtlinien.

## Lizenz
Dieses Projekt wird unter der MIT-Lizenz veröffentlicht, siehe LICENSE-Datei für Details.`
      },
      {
        name: 'Lebenslauf',
        description: 'Persönliche Lebenslauf-Vorlage',
        content: `# Lebenslauf

## Persönliche Informationen
- Name: Hans Müller
- Telefon: 0123-456789
- E-Mail: hans.mueller@beispiel.com
- Berufsziel: Frontend-Entwickler

## Ausbildung
Universität XYZ, Informatik, September 2016 - Juni 2020

## Berufserfahrung
### Tech-Unternehmen | Frontend-Entwickler | Juli 2020 - Gegenwart
- Verantwortlich für Frontend-Entwicklung und Wartung der Hauptprodukte
- Entwicklung eines Unternehmensverwaltungssystems mit Vue.js, Verbesserung der Benutzererfahrung
- Optimierung der Frontend-Leistung, Reduzierung der Seitenladezeit um 30%

### ABC Corp. | Frontend-Praktikant | Juli 2019 - Juni 2020
- Teilnahme am Unternehmenswebsite-Redesign-Projekt
- Unterstützung des Teams bei Code-Refaktorierung und Optimierung

## Technische Fähigkeiten
- Frontend-Entwicklung: HTML, CSS, JavaScript, Vue.js, React
- Backend-Entwicklung: Node.js, Express
- Andere Tools: Git, Webpack, Docker

## Projekterfahrung
### Unternehmensverwaltungssystem
- Entwickelt mit Vue.js
- Implementierung von Datenvisualisierung, Berechtigungsverwaltung und anderen Funktionen
- Optimierung der Systemantwortgeschwindigkeit, Verbesserung der Benutzererfahrung

## Sprachkenntnisse
- Deutsch (Muttersprache)
- Englisch (Fließend)`
      }
    ];
  } else if (locale.value === 'id') {
    // 印度尼西亚语模板
    markdownTemplates.value = [
      {
        name: 'Selamat Datang di Editor Markdown',
        description: 'Ini adalah editor Markdown sederhana dengan pratinjau waktu nyata dan penyorotan sintaks.',
        content: `# Selamat Datang di Editor Markdown

Ini adalah editor Markdown sederhana dengan pratinjau waktu nyata dan penyorotan sintaks.

## Sintaks Dasar

### Judul
Gunakan simbol # untuk menandai judul:
# Judul 1
## Judul 2
### Judul 3

### Penekanan
**Tebal** atau __Tebal__
*Miring* atau _Miring_
~~Coret~~

### Daftar
Daftar tidak berurutan:
- Item 1
- Item 2
- Item 3

Daftar berurutan:
1. Item pertama
2. Item kedua
3. Item ketiga

### Tautan dan Gambar
[Teks tautan](https://example.com)
![Teks alternatif gambar](https://example.com/image.jpg)

### Kode
Kode sebaris: \`var contoh = "halo";\`

### Kutipan
> Ini adalah blok kutipan.

### Tabel
| Judul 1 | Judul 2 | Judul 3 |
|---------|---------|---------|
| Sel 1   | Sel 2   | Sel 3   |
| Sel 4   | Sel 5   | Sel 6   |

### Garis Horizontal
---

Mulailah mengedit! Anda dapat menggunakan toolbar di atas untuk dengan cepat memasukkan berbagai elemen Markdown.`
      }
    ];
  } else if (locale.value === 'ko') {
    // 중국어 템플릿
    markdownTemplates.value = [
      {
        name: '간단한 문서',
        description: '제목, 목록, 인용문 등이 포함된 문서',
        content: `# 문서 제목

## 소개
이것은 간단한 Markdown 문서 예제입니다.

## 기능
- 제목과 문단 지원
- **굵게**와 *기울임* 지원
- 순서 있는 목록과 순서 없는 목록 지원

> 이것은 인용 블록으로, 다른 사람의 의견을 인용할 때 사용합니다.

## 결론
Markdown은 사용하기 쉬운 마크업 언어입니다.`
      },
      {
        name: '프로젝트 README',
        description: '프로젝트 문서 표준 구조',
        content: `# 프로젝트 이름

## 프로젝트 개요
프로젝트의 주요 기능과 용도를 간략히 설명합니다.

## 기능 특징
- 주요 기능 1
- 주요 기능 2
- 주요 기능 3

## 설치 방법
\`\`\`
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
\`\`\`

## 사용 예시
\`\`\`
// 예제 코드
const example = new Example();
example.init();
\`\`\`

## 문서
더 자세한 문서는 문서 링크를 참조하세요.

## 기여 가이드
코드 기여를 환영합니다. 기여 가이드를 참조해 주세요.

## 라이선스
이 프로젝트는 MIT 라이선스로 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.`
      },
      {
        name: '이력서',
        description: '이력서 템플릿',
        content: `# 이력서

## 개인 정보
- 이름: 장삼
- 전화: 138xxxx1234
- 이메일: zhangsan@example.com
- 지원 직무: 프론트엔드 개발자

## 학력
대학교명, 컴퓨터과학과, 2016년 9월 ~ 2020년 6월

## 경력
### IT 회사, 프론트엔드 개발자, 2020년 7월 ~ 현재
- 회사 핵심 제품의 프론트엔드 개발 및 유지보수 담당
- Vue.js를 사용한 기업 관리 시스템 개발로 사용자 경험 향상
- 프론트엔드 성능 최적화로 페이지 로딩 시간 30% 단축

### IT 회사, 프론트엔드 개발 인턴, 2019년 7월 ~ 2020년 6월
- 회사 웹사이트 개편 프로젝트 참여
- 팀의 코드 리팩토링 및 최적화 지원

## 기술 스킬
- 프론트엔드: HTML, CSS, JavaScript, Vue.js, React
- 백엔드: Node.js, Express
- 기타 도구: Git, Webpack, Docker

## 프로젝트 경험
### 기업 관리 시스템
- Vue.js로 개발한 내부 관리 시스템
- 데이터 시각화, 권한 관리 기능 구현
- 시스템 응답 속도 최적화로 사용자 경험 향상

## 언어 능력
- 영어(유창함)
- 일본어(기초)`
      }
    ];
  } else {
    console.error('Invalid locale:', locale.value);
    throw new Error('Invalid locale');
  }
};

// 更新默认内容
const updateDefaultContent = (locale) => {
  // 直接在组件中定义默认内容，而不是通过i18n获取
  const defaultContents = {
    'zh': `# 欢迎使用Markdown编辑器

这是一个简单的Markdown编辑器，支持实时预览和语法高亮。

## 基本语法

### 标题
使用 # 符号表示标题，例如：
# 一级标题
## 二级标题
### 三级标题

### 强调
**粗体** 或 __粗体__
*斜体* 或 _斜体_
~~删除线~~

### 列表
无序列表:
- 项目1
- 项目2
- 项目3

有序列表:
1. 第一项
2. 第二项
3. 第三项

### 链接和图片
[链接文本](https://example.com)
![图片描述](https://example.com/image.jpg)

### 代码
行内代码: \`var example = "hello";\`

### 引用
> 这是一个引用段落。

### 表格
| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |

### 水平线
---

开始编辑吧！你可以使用上方的工具栏快速插入各种Markdown元素。`,

    'en': `# Welcome to Markdown Editor

This is a simple Markdown editor with real-time preview and syntax highlighting.

## Basic Syntax

### Headings
Use # symbols to denote headings:
# Heading 1
## Heading 2
### Heading 3

### Emphasis
**Bold** or __Bold__
*Italic* or _Italic_
~~Strikethrough~~

### Lists
Unordered list:
- Item 1
- Item 2
- Item 3

Ordered list:
1. First item
2. Second item
3. Third item

### Links and Images
[Link text](https://example.com)
![Image alt text](https://example.com/image.jpg)

### Code
Inline code: \`var example = "hello";\`

### Blockquotes
> This is a blockquote.

### Tables
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

### Horizontal Line
---

Start editing! You can use the toolbar above to quickly insert various Markdown elements.`,

    'es': `# Bienvenido al Editor Markdown

Este es un editor Markdown simple con vista previa en tiempo real y resaltado de sintaxis.

## Sintaxis Básica

### Encabezados
Use símbolos # para indicar encabezados:
# Encabezado 1
## Encabezado 2
### Encabezado 3

### Énfasis
**Negrita** o __Negrita__
*Cursiva* o _Cursiva_
~~Tachado~~

### Listas
Lista no ordenada:
- Elemento 1
- Elemento 2
- Elemento 3

Lista ordenada:
1. Primer elemento
2. Segundo elemento
3. Tercer elemento

### Enlaces e Imágenes
[Texto del enlace](https://ejemplo.com)
![Texto alternativo de imagen](https://ejemplo.com/imagen.jpg)

### Código
Código en línea: \`var ejemplo = "hola";\`

### Citas
> Esto es una cita.

### Tablas
| Encabezado 1 | Encabezado 2 | Encabezado 3 |
|--------------|--------------|--------------|
| Celda 1      | Celda 2      | Celda 3      |
| Celda 4      | Celda 5      | Celda 6      |

### Línea Horizontal
---

¡Comience a editar! Puede usar la barra de herramientas de arriba para insertar rápidamente varios elementos Markdown.`,

    'hi': `# मार्कडाउन संपादक में आपका स्वागत है

यह एक सरल मार्कडाउन संपादक है जिसमें वास्तविक समय पूर्वावलोकन और सिंटैक्स हाइलाइटिंग है।

## मूल सिंटैक्स

### शीर्षक
शीर्षक दर्शाने के लिए # प्रतीक का उपयोग करें:
# शीर्षक 1
## शीर्षक 2
### शीर्षक 3

### जोर
**बोल्ड** या __बोल्ड__
*इटैलिक* या _इटैलिक_
~~स्ट्राइकथ्रू~~

### सूचियां
अक्रमित सूची:
- आइटम 1
- आइटम 2
- आइटम 3

क्रमित सूची:
1. पहला आइटम
2. दूसरा आइटम
3. तीसरा आइटम

### लिंक और छवियां
[लिंक टेक्स्ट](https://example.com)
![छवि alt टेक्स्ट](https://example.com/image.jpg)

### कोड
इनलाइन कोड: \`var example = "hello";\`

### ब्लॉकक्वोट
> यह एक ब्लॉकक्वोट है।

### तालिकाएं
| हेडर 1 | हेडर 2 | हेडर 3 |
|--------|--------|--------|
| सेल 1  | सेल 2  | सेल 3  |
| सेल 4  | सेल 5  | सेल 6  |

### क्षैतिज रेखा
---

संपादन शुरू करें! आप विभिन्न मार्कडाउन तत्वों को जल्दी से डालने के लिए ऊपर दिए गए टूलबार का उपयोग कर सकते हैं।`,

    'ru': `# Добро пожаловать в редактор Markdown

Это простой редактор Markdown с предварительным просмотром в реальном времени и подсветкой синтаксиса.

## Основной синтаксис

### Заголовки
Используйте символы # для обозначения заголовков:
# Заголовок 1
## Заголовок 2
### Заголовок 3

### Выделение
**Жирный** или __Жирный__
*Курсив* или _Курсив_
~~Зачеркнутый~~

### Списки
Неупорядоченный список:
- Пункт 1
- Пункт 2
- Пункт 3

Упорядоченный список:
1. Первый пункт
2. Второй пункт
3. Третий пункт

### Ссылки и изображения
[Текст ссылки](https://example.com)
![Альтернативный текст изображения](https://example.com/image.jpg)

### Код
Встроенный код: \`var example = "hello";\`

### Цитаты
> Это блок цитаты.

### Таблицы
| Заголовок 1 | Заголовок 2 | Заголовок 3 |
|------------|------------|------------|
| Ячейка 1   | Ячейка 2   | Ячейка 3   |
| Ячейка 4   | Ячейка 5   | Ячейка 6   |

### Горизонтальная линия
---

Начните редактирование! Вы можете использовать панель инструментов выше для быстрой вставки различных элементов Markdown.`,

    'fr': `# Bienvenue dans l'Éditeur Markdown

Ceci est un éditeur Markdown simple avec aperçu en temps réel et coloration syntaxique.

## Syntaxe de Base

### Titres
Utilisez les symboles # pour indiquer les titres :
# Titre 1
## Titre 2
### Titre 3

### Énfasis
**Gras** ou __Gras__
*Italique* ou _Italique_
~~Barré~~

### Listes
Liste non ordonnée :
- Élément 1
- Élément 2
- Élément 3

Liste ordonnée :
1. Premier élément
2. Deuxième élément
3. Troisième élément

### Liens et Images
[Texte du lien](https://exemple.com)
![Texte alternatif de l'image](https://exemple.com/image.jpg)

### Code
Code en ligne : \`var exemple = "bonjour";\`

### Citations
> Ceci est une citation.

### Tableaux
| En-tête 1 | En-tête 2 | En-tête 3 |
|-----------|-----------|-----------|
| Cellule 1 | Cellule 2 | Cellule 3 |
| Cellule 4 | Cellule 5 | Cellule 6 |

### Ligne Horizontale
---

Commencez à éditer ! Vous pouvez utiliser la barre d'outils ci-dessus pour insérer rapidement divers éléments Markdown.`,
  
    'ja': `# Markdownエディタへようこそ

これはリアルタイムプレビューと構文ハイライトを備えたシンプルなMarkdownエディタです。

## 基本構文

### 見出し
#記号を使用して見出しを示します：
# 見出し1
## 見出し2
### 見出し3

### 強調
**太字** または __太字__
*斜体* または _斜体_
~~取り消し線~~

### リスト
順序なしリスト：
- 項目1
- 項目2
- 項目3

順序付きリスト：
1. 最初の項目
2. 2番目の項目
3. 3番目の項目

### リンクと画像
[リンクテキスト](https://example.com)
![画像の代替テキスト](https://example.com/image.jpg)

### コード
インラインコード： \`var example = "hello";\`

### 引用
> これは引用ブロックです。

### 表
| ヘッダー1 | ヘッダー2 | ヘッダー3 |
|----------|----------|----------|
| セル1    | セル2    | セル3    |
| セル4    | セル5    | セル6    |

### 水平線
---

編集を始めましょう！上のツールバーを使用して、さまざまなMarkdown要素を素早く挿入できます。`,

    'pt': `# Bem-vindo ao Editor Markdown

Este é um editor Markdown simples com visualização em tempo real e destaque de sintaxe.

## Sintaxe Básica

### Títulos
Use símbolos # para denotar títulos:
# Título 1
## Título 2
### Título 3

### Ênfase
**Negrito** ou __Negrito__
*Itálico* ou _Itálico_
~~Tachado~~

### Listas
Lista não ordenada:
- Item 1
- Item 2
- Item 3

Lista ordenada:
1. Primeiro item
2. Segundo item
3. Terceiro item

### Links e Imagens
[Texto do link](https://example.com)
![Texto alternativo da imagem](https://example.com/image.jpg)

### Código
Código em linha: \`var exemplo = "olá";\`

### Citações
> Isto é um bloco de citação.

### Tabelas
| Cabeçalho 1 | Cabeçalho 2 | Cabeçalho 3 |
|-------------|-------------|-------------|
| Célula 1    | Célula 2    | Célula 3    |
| Célula 4    | Célula 5    | Célula 6    |

### Linha Horizontal
---

Comece a editar! Você pode usar a barra de ferramentas acima para inserir rapidamente vários elementos Markdown.`,

    'id': `# Selamat Datang di Editor Markdown

Ini adalah editor Markdown sederhana dengan pratinjau waktu nyata dan penyorotan sintaks.

## Sintaks Dasar

### Judul
Gunakan simbol # untuk menandai judul:
# Judul 1
## Judul 2
### Judul 3

### Penekanan
**Tebal** atau __Tebal__
*Miring* atau _Miring_
~~Coret~~

### Daftar
Daftar tidak berurutan:
- Item 1
- Item 2
- Item 3

Daftar berurutan:
1. Item pertama
2. Item kedua
3. Item ketiga

### Tautan dan Gambar
[Teks tautan](https://example.com)
![Teks alternatif gambar](https://example.com/image.jpg)

### Kode
Kode sebaris: \`var contoh = "halo";\`

### Kutipan
> Ini adalah blok kutipan.

### Tabel
| Judul 1 | Judul 2 | Judul 3 |
|---------|---------|---------|
| Sel 1   | Sel 2   | Sel 3   |
| Sel 4   | Sel 5   | Sel 6   |

### Garis Horizontal
---

Mulailah mengedit! Anda dapat menggunakan toolbar di atas untuk dengan cepat memasukkan berbagai elemen Markdown.`,

    'de': `# Willkommen im Markdown-Editor

Dies ist ein einfacher Markdown-Editor mit Echtzeit-Vorschau und Syntax-Hervorhebung.

## Grundlegende Syntax

### Überschriften
Verwenden Sie #-Symbole für Überschriften:
# Überschrift 1
## Überschrift 2
### Überschrift 3

### Hervorhebungen
**Fett** oder __Fett__
*Kursiv* oder _Kursiv_
~~Durchgestrichen~~

### Listen
Ungeordnete Liste:
- Element 1
- Element 2
- Element 3

Geordnete Liste:
1. Erstes Element
2. Zweites Element
3. Drittes Element

### Links und Bilder
[Link-Text](https://example.com)
![Alt-Text für Bild](https://example.com/image.jpg)

### Code
Inline-Code: \`var beispiel = "hallo";\`

### Zitate
> Dies ist ein Zitatblock.

### Tabellen
| Überschrift 1 | Überschrift 2 | Überschrift 3 |
|---------------|---------------|---------------|
| Zelle 1       | Zelle 2       | Zelle 3       |
| Zelle 4       | Zelle 5       | Zelle 6       |

### Horizontale Linie
---

Beginnen Sie mit dem Bearbeiten! Sie können die Symbolleiste oben verwenden, um schnell verschiedene Markdown-Elemente einzufügen.`,

    'ko': `# Markdown 편집기 사용 안내

간편한 Markdown 편집기로 실시간 미리보기와 문법 강조 기능을 지원합니다.

## 기본 문법

### 제목
# 기호로 제목을 표시합니다:
# 1단계 제목
## 2단계 제목
### 3단계 제목

### 강조
**굵게** 또는 __굵게__
*기울임* 또는 _기울임_
~~취소선~~

### 목록
순서 없는 목록:
- 항목1
- 항목2
- 항목3

순서 있는 목록:
1. 첫 번째 항목
2. 두 번째 항목
3. 세 번째 항목

### 링크와 이미지
[링크 텍스트](https://example.com)
![이미지 설명](https://example.com/image.jpg)

### 코드
인라인 코드: \`var example = "hello";\`

### 인용문
> 이것은 인용문 단락입니다.

### 표
| 헤더1 | 헤더2 | 헤더3 |
|-------|-------|-------|
| 셀1 | 셀2 | 셀3 |
| 셀4 | 셀5 | 셀6 |

### 구분선
---

편집을 시작해보세요! 상단 툴바를 사용하여 다양한 Markdown 요소를 빠르게 삽입할 수 있습니다.`
  };

  // 根据当前语言设置内容
  if (defaultContents[locale]) {
    markdownContent.value = defaultContents[locale];
  } else {
    console.error('Invalid locale:', locale);
    throw new Error('Invalid locale');
  }

  // 更新预览
  updatePreview();
}

// 监听语言变化并更新模板
watch(locale, () => {
  initTemplates();
});

// 应用模板
const applyTemplate = (template) => {
  if (markdownContent.value) {
    showConfirmDialog(
      t('tools.markdown-editor.dialogs.template.title'),
      t('tools.markdown-editor.dialogs.template.message'),
      (template) => {
        markdownContent.value = template.content
        updatePreview()
        showMessage(t('tools.markdown-editor.messages.templateApplied', { name: template.name }), 'success')
      },
      template
    )
  } else {
    markdownContent.value = template.content
    updatePreview()
    showMessage(t('tools.markdown-editor.messages.templateApplied', { name: template.name }), 'success')
  }
}

// 监听用户输入
const handleUserInput = () => {
  userHasEdited.value = true
  updatePreview()
}

// 监听语言变化
watch(locale, (newLocale) => {
  // 重新初始化模板
  initTemplates()

  // 如果用户尚未编辑内容，则根据语言更新默认内容
  if (!userHasEdited.value) {
    updateDefaultContent(newLocale)
  }
})

// 组件挂载后初始化
onMounted(() => {
  // 初始化模板
  initTemplates();

  // 设置默认内容
  updateDefaultContent(locale.value);

  // 初始化预览
  updatePreview();
});
</script>

<style>
.md-toolbar-btn {
  @apply p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none;
}

.markdown-body {
  @apply text-sm leading-relaxed;
}

/* 基本Typography */
.markdown-body h1 {
  @apply text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700;
}

.markdown-body h2 {
  @apply text-xl font-bold mb-3 mt-6 pb-1 border-b border-gray-200 dark:border-gray-700;
}

.markdown-body h3 {
  @apply text-lg font-bold mb-3 mt-5;
}

.markdown-body h4 {
  @apply text-base font-bold mb-2 mt-4;
}

.markdown-body h5 {
  @apply text-sm font-bold mb-2 mt-4;
}

.markdown-body h6 {
  @apply text-xs font-bold mb-2 mt-4;
}

.markdown-body p {
  @apply mb-4;
}

.markdown-body a {
  @apply text-blue-600 dark:text-blue-400 hover:underline;
}

/* 列表 */
.markdown-body ul {
  @apply list-disc pl-6 mb-4;
}

.markdown-body ol {
  @apply list-decimal pl-6 mb-4;
}

.markdown-body li {
  @apply mb-1;
}

/* 引用 */
.markdown-body blockquote {
  @apply pl-4 border-l-4 border-gray-300 dark:border-gray-600 italic text-gray-700 dark:text-gray-300 mb-4;
}

/* 代码 */
.markdown-body pre {
  @apply p-4 rounded-md bg-gray-100 dark:bg-gray-900 overflow-auto mb-4;
}

.markdown-body code {
  @apply font-mono text-xs;
}

.markdown-body :not(pre)>code {
  @apply px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400;
}

/* 表格 */
.markdown-body table {
  @apply w-full border-collapse mb-4;
}

.markdown-body th {
  @apply border border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left;
}

.markdown-body td {
  @apply border border-gray-300 dark:border-gray-700 px-4 py-2;
}

/* 水平线 */
.markdown-body hr {
  @apply my-6 border-t border-gray-300 dark:border-gray-700;
}

/* 图片 */
.markdown-body img {
  @apply max-w-full h-auto rounded;
}
</style>