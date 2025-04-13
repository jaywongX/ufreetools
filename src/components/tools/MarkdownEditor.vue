<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <!-- 工具栏 -->
    <div class="flex flex-wrap items-center p-2 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
      <!-- 标题 -->
      <div class="flex space-x-1 mr-3">
        <button 
          v-for="level in [1, 2, 3, 4, 5, 6]" 
          :key="level"
          @click="insertHeading(level)"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.heading') + ' ' + level"
        >
          H{{ level }}
        </button>
      </div>
      
      <!-- 分隔线 -->
      <div class="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
      
      <!-- 文本格式 -->
      <div class="flex space-x-1 mr-3">
        <button 
          @click="insertBold"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.bold')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10h8a2 2 0 002-2V6a2 2 0 00-2-2H6v4zm0 0v8h8a2 2 0 002-2v-2a2 2 0 00-2-2H6z" />
          </svg>
        </button>
        <button 
          @click="insertItalic"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.italic')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
        <button 
          @click="insertStrikethrough"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.strikethrough')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </button>
      </div>
      
      <!-- 分隔线 -->
      <div class="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
      
      <!-- 列表 -->
      <div class="flex space-x-1 mr-3">
        <button 
          @click="insertUnorderedList"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.list')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button 
          @click="insertOrderedList"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.list')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </button>
      </div>
      
      <!-- 分隔线 -->
      <div class="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
      
      <!-- 链接和图片 -->
      <div class="flex space-x-1 mr-3">
        <button 
          @click="insertLink"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.link')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </button>
        <button 
          @click="insertImage"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.image')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
      
      <!-- 分隔线 -->
      <div class="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
      
      <!-- 代码 -->
      <div class="flex space-x-1 mr-3">
        <button 
          @click="insertCodeInline"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.code')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </button>
        <button 
          @click="insertCodeBlock"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.code')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
      
      <!-- 分隔线 -->
      <div class="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>
      
      <!-- 其他 -->
      <div class="flex space-x-1">
        <button 
          @click="insertHorizontalRule"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.hr')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 18" />
          </svg>
        </button>
        <button 
          @click="insertQuote"
          class="md-toolbar-btn"
          :title="t('tools.markdown-editor.actions.quote')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </button>
      </div>
      
      <div class="flex-grow"></div>
      
      <!-- 操作按钮 -->
      <div class="flex space-x-2">
        <button 
          @click="copyMarkdown" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          {{ t('tools.markdown-editor.actions.copy') }}
        </button>
        <button 
          @click="clearMarkdown" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          {{ t('tools.markdown-editor.actions.clear') }}
        </button>
      </div>
    </div>
    
    <!-- 状态消息 -->
    <div 
      v-if="message" 
      class="p-3 text-sm" 
      :class="{ 
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': messageType === 'success',
        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': messageType === 'error',
      }"
    >
      {{ message }}
    </div>
    
    <div class="p-4">
      <!-- 布局切换 -->
      <div class="mb-4 flex justify-end">
        <div class="flex p-1 bg-gray-100 dark:bg-gray-700 rounded-md">
          <button 
            @click="editorLayout = 'split'"
            class="px-3 py-1 text-xs rounded"
            :class="{
              'bg-white dark:bg-gray-800 shadow': editorLayout === 'split',
              'text-gray-600 dark:text-gray-300': editorLayout !== 'split'
            }"
          >
            {{ t('tools.markdown-editor.modes.split') }}
          </button>
          <button 
            @click="editorLayout = 'edit'"
            class="px-3 py-1 text-xs rounded"
            :class="{
              'bg-white dark:bg-gray-800 shadow': editorLayout === 'edit',
              'text-gray-600 dark:text-gray-300': editorLayout !== 'edit'
            }"
          >
            {{ t('tools.markdown-editor.modes.edit') }}
          </button>
          <button 
            @click="editorLayout = 'preview'"
            class="px-3 py-1 text-xs rounded"
            :class="{
              'bg-white dark:bg-gray-800 shadow': editorLayout === 'preview',
              'text-gray-600 dark:text-gray-300': editorLayout !== 'preview'
            }"
          >
            {{ t('tools.markdown-editor.modes.preview') }}
          </button>
        </div>
      </div>
      
      <!-- 编辑区域 -->
      <div 
        class="grid gap-4"
        :class="{
          'grid-cols-2': editorLayout === 'split',
          'grid-cols-1': editorLayout !== 'split'
        }"
      >
        <!-- Markdown编辑器 -->
        <div v-if="editorLayout === 'split' || editorLayout === 'edit'" class="markdown-editor-container">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('tools.markdown-editor.modes.edit') }}</div>
          <textarea
            ref="markdownEditor"
            v-model="markdownContent"
            class="w-full h-96 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            :placeholder="t('tools.markdown-editor.placeholder')"
            @input="handleUserInput"
            @keydown.tab.prevent="handleTabKey"
          ></textarea>
        </div>
        
        <!-- 预览区域 -->
        <div v-if="editorLayout === 'split' || editorLayout === 'preview'" class="markdown-preview-container">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('tools.markdown-editor.modes.preview') }}</div>
          <div 
            class="w-full h-96 p-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 overflow-auto"
          >
            <div v-html="renderedContent" class="markdown-body"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 快速模板 -->
    <div class="p-4 border-t border-gray-200 dark:border-gray-700">
      <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('tools.markdown-editor.templates.title') }}</div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <button 
          v-for="template in markdownTemplates" 
          :key="template.name"
          @click="applyTemplate(template)"
          class="text-left p-2 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-750"
        >
          <div class="text-sm font-medium">{{ template.name }}</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ template.description }}</div>
        </button>
      </div>
    </div>

    <!-- 确认对话框 -->
    <ConfirmDialog
      :title="dialogTitle"
      :message="dialogMessage"
      :confirm-text="dialogConfirmText"
      :cancel-text="dialogCancelText"
      :is-open="showDialog"
      @confirm="onDialogConfirm"
      @cancel="onDialogCancel"
    />

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
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (err) {}
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
    const formattedLines = lines.map((line, i) => `${i+1}. ${line}`).join('\n')
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
    insertText('[链接文字](https://)')
  }
}

const insertImage = () => {
  insertText('![图片描述](https://)')
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
  if (locale.value === 'en') {
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
      },
      {
        name: 'Meeting Minutes',
        description: 'Meeting minutes template',
        content: `# Meeting Minutes

## Meeting Information
- **Topic**: Project Progress Discussion
- **Date**: May 15, 2023
- **Time**: 14:00 - 16:00
- **Location**: Conference Room A
- **Moderator**: Jane Manager
- **Note Taker**: John Assistant

## Attendees
- Jane Manager (Product Department)
- Mike Engineer (Development Department)
- Sarah Designer (Design Department)
- Tom Tester (Testing Department)

## Agenda
1. Review of last week's task completion
2. Discussion of this week's work plan
3. Resolution of issues in the project
4. Determination of next steps

## Discussion Content
### 1. Last Week's Task Review
- Product requirements document completed
- Design draft 60% completed
- Frontend development completed basic framework setup

### 2. This Week's Work Plan
- Design department to complete remaining design drafts
- Development department to begin core functionality development
- Testing department to prepare test cases

### 3. Issues and Solutions
- **Issue**: Data interface design unreasonable
- **Solution**: Mike Engineer to redesign interfaces and submit by Wednesday

## Action Items
| Task | Responsible Person | Deadline |
|------|-------------------|---------|
| Complete design drafts | Sarah Designer | May 17 |
| Redesign interfaces | Mike Engineer | May 18 |
| Prepare test cases | Tom Tester | May 19 |

## Next Meeting
- **Date**: May 22, 2023
- **Time**: 14:00 - 15:00`
      }
    ];
  } else {
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

[![许可证](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 项目简介
简短描述项目的主要功能和用途。

## 功能特点
- 主要功能点1
- 主要功能点2
- 主要功能点3

## 安装说明
\`\`\`bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
\`\`\`

## 使用示例
\`\`\`javascript
// 示例代码
const example = new Example();
example.init();
\`\`\`

## 文档
更多详细文档请参考[文档链接](docs/README.md)。

## 贡献指南
欢迎贡献代码，请参阅[贡献指南](CONTRIBUTING.md)。

## 许可证
本项目基于MIT许可证发布，详细信息请参阅[LICENSE](LICENSE)文件。`
      },
      {
        name: '个人简历',
        description: '个人简历模板',
        content: `# 个人简历

## 个人信息
- **姓名**：张三
- **电话**：138-xxxx-xxxx
- **邮箱**：example@email.com
- **求职意向**：前端开发工程师

## 教育背景
**XX大学** | 计算机科学与技术 | 2016年9月 - 2020年6月

## 工作经历
### XX科技有限公司 | 前端开发工程师 | 2020年7月 - 至今
- 负责公司核心产品的前端开发与维护
- 使用Vue.js开发企业管理系统，提升用户体验
- 优化前端性能，减少页面加载时间30%

### XX科技有限公司 | 前端开发实习生 | 2019年7月 - 2020年6月
- 参与公司官网改版项目
- 协助团队进行代码重构与优化

## 技术技能
- **前端开发**：HTML, CSS, JavaScript, Vue.js, React
- **后端开发**：Node.js, Express
- **其他工具**：Git, Webpack, Docker

## 项目经验
### 企业管理系统
- 使用Vue.js + Element UI开发的企业内部管理系统
- 实现了数据可视化、权限管理等功能
- 优化了系统响应速度，提升用户体验

## 语言能力
- 英语（熟练）
- 日语（基础）`
      },
      {
        name: '会议记录',
        description: '会议记录模板',
        content: `# 会议记录

## 会议信息
- **主题**：项目进度讨论
- **日期**：2023年5月15日
- **时间**：14:00 - 16:00
- **地点**：公司会议室A
- **主持人**：张经理
- **记录人**：李助理

## 参会人员
- 张经理（产品部）
- 王工程师（研发部）
- 李设计师（设计部）
- 赵测试（测试部）

## 议程
1. 回顾上周工作完成情况
2. 讨论本周工作计划
3. 解决项目中存在的问题
4. 确定下一步工作方向

## 讨论内容
### 1. 上周工作回顾
- 产品需求文档已完成
- 设计稿已完成60%
- 前端开发已完成基础框架搭建

### 2. 本周工作计划
- 设计部完成剩余设计稿
- 研发部开始核心功能开发
- 测试部准备测试用例

### 3. 问题与解决方案
- **问题**：数据接口设计不合理
- **解决方案**：由王工程师重新设计接口，并在周三前提交

## 行动项
| 任务 | 负责人 | 截止日期 |
|------|-------|---------|
| 完成设计稿 | 李设计师 | 5月17日 |
| 重新设计接口 | 王工程师 | 5月18日 |
| 准备测试用例 | 赵测试 | 5月19日 |

## 下次会议
- **日期**：2023年5月22日
- **时间**：14:00 - 15:00`
      }
    ];
  }
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

// 更新默认内容
const updateDefaultContent = (locale) => {
  if (locale === 'en') {
    // 英文默认内容
    markdownContent.value = `# Welcome to Markdown Editor

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

Code block:
\`\`\`javascript
function example() {
  console.log("Hello, world!");
}
\`\`\`

### Blockquotes
> This is a blockquote.

### Tables
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

### Horizontal Line
---

Start editing! You can use the toolbar above to quickly insert various Markdown elements.`
  } else {
    // 中文默认内容
    markdownContent.value = `# 欢迎使用Markdown编辑器

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

代码块:
\`\`\`javascript
function example() {
  console.log("Hello, world!");
}
\`\`\`

### 引用
> 这是一个引用段落。

### 表格
| 表头1 | 表头2 | 表头3 |
|-------|-------|-------|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |

### 水平线
---

开始编辑吧！你可以使用上方的工具栏快速插入各种Markdown元素。`
  }
  
  // 更新预览
  updatePreview()
}

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

.markdown-body :not(pre) > code {
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