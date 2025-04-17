<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <h1 class="text-2xl font-bold mb-4">{{ $t('tools.git-conflict-resolver.title') }}</h1>
    <p class="mb-6 text-gray-600 dark:text-gray-400">
      {{ $t('tools.git-conflict-resolver.intro') }}
    </p>

    <!-- 控制区 -->
    <div class="mb-6 flex flex-wrap gap-4">
      <button 
        @click="generateExample" 
        class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
      >
        {{ $t('tools.git-conflict-resolver.buttons.generateExample') }}
      </button>
      <button 
        @click="resolveUsingOurs" 
        class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition"
        :disabled="!hasConflict"
      >
        {{ $t('tools.git-conflict-resolver.buttons.resolveOurs') }}
      </button>
      <button 
        @click="resolveUsingTheirs" 
        class="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition"
        :disabled="!hasConflict"
      >
        {{ $t('tools.git-conflict-resolver.buttons.resolveTheirs') }}
      </button>
      <button 
        @click="validateResolution" 
        class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition"
        :disabled="!hasConflict"
      >
        {{ $t('tools.git-conflict-resolver.buttons.validate') }}
      </button>
      <button 
        @click="resetContent" 
        class="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition"
      >
        {{ $t('tools.git-conflict-resolver.buttons.reset') }}
      </button>
    </div>

    <!-- 状态消息 -->
    <div v-if="message" class="mb-6" :class="messageClass">
      <div class="p-4 rounded-md">
        <p>{{ message }}</p>
      </div>
    </div>
    
    <!-- 编辑区 -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <label for="conflictArea" class="text-lg font-semibold">{{ $t('tools.git-conflict-resolver.conflictArea.label') }}</label>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          <span v-if="hasConflict" class="text-red-500">{{ $t('tools.git-conflict-resolver.conflictArea.hasConflict') }}</span>
          <span v-else class="text-green-500">{{ $t('tools.git-conflict-resolver.conflictArea.noConflict') }}</span>
        </div>
      </div>
      <textarea
        id="conflictArea"
        v-model="content"
        class="w-full h-80 p-4 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md font-mono text-sm"
        @input="analyzeContent"
      ></textarea>
    </div>
      
    <!-- 冲突解释 -->
    <div v-if="conflicts.length > 0" class="mb-6">
      <h2 class="text-xl font-semibold mb-3">{{ $t('tools.git-conflict-resolver.analysis.title') }}</h2>
      <div 
        v-for="(conflict, index) in conflicts" 
        :key="index"
        class="p-4 mb-4 bg-gray-100 dark:bg-gray-700 rounded-md"
      >
        <h3 class="font-semibold mb-2">{{ $t('tools.git-conflict-resolver.analysis.conflict', { number: index + 1 }) }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-medium text-blue-600 dark:text-blue-400 mb-1">{{ $t('tools.git-conflict-resolver.analysis.ours') }}</h4>
            <pre class="p-3 bg-blue-50 dark:bg-blue-900 rounded border border-blue-200 dark:border-blue-800 overflow-x-auto">{{ conflict.ours }}</pre>
          </div>
          <div>
            <h4 class="font-medium text-purple-600 dark:text-purple-400 mb-1">{{ $t('tools.git-conflict-resolver.analysis.theirs') }}</h4>
            <pre class="p-3 bg-purple-50 dark:bg-purple-900 rounded border border-purple-200 dark:border-purple-800 overflow-x-auto">{{ conflict.theirs }}</pre>
          </div>
        </div>
        <div class="mt-3">
          <button 
            @click="resolveConflict(index, 'ours')" 
            class="mr-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm transition"
          >
            {{ $t('tools.git-conflict-resolver.buttons.useOurs') }}
          </button>
          <button 
            @click="resolveConflict(index, 'theirs')" 
            class="mr-2 px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white rounded-md text-sm transition"
          >
            {{ $t('tools.git-conflict-resolver.buttons.useTheirs') }}
          </button>
          <button 
            @click="resolveConflict(index, 'both')" 
            class="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm transition"
          >
            {{ $t('tools.git-conflict-resolver.buttons.useBoth') }}
          </button>
      </div>
        </div>
      </div>
      
    <!-- 教程部分 -->
    <div class="mt-8 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
      <h2 class="text-xl font-semibold mb-3">{{ $t('tools.git-conflict-resolver.tutorial.title') }}</h2>
      <p class="mb-3">
        {{ $t('tools.git-conflict-resolver.tutorial.intro') }}
      </p>
      <p class="mb-3">
        {{ $t('tools.git-conflict-resolver.tutorial.markerExplanation') }}
      </p>
      <pre class="p-3 bg-gray-200 dark:bg-gray-800 rounded mb-4 overflow-x-auto">{{ $t('tools.git-conflict-resolver.tutorial.markerExample') }}</pre>
      <p class="mb-3">
        {{ $t('tools.git-conflict-resolver.tutorial.steps.title') }}
      </p>
      <ol class="list-decimal pl-6 mb-3 space-y-1">
        <li v-html="$t('tools.git-conflict-resolver.tutorial.steps.step1')"></li>
        <li v-html="$t('tools.git-conflict-resolver.tutorial.steps.step2')"></li>
        <li v-html="$t('tools.git-conflict-resolver.tutorial.steps.step3')"></li>
        <li v-html="$t('tools.git-conflict-resolver.tutorial.steps.step4')"></li>
      </ol>
      <p>
        {{ $t('tools.git-conflict-resolver.tutorial.commands.title') }}
      </p>
      <ul class="list-disc pl-6 space-y-1">
        <li v-html="$t('tools.git-conflict-resolver.tutorial.commands.status')"></li>
        <li v-html="$t('tools.git-conflict-resolver.tutorial.commands.diff')"></li>
        <li v-html="$t('tools.git-conflict-resolver.tutorial.commands.abort')"></li>
        <li v-html="$t('tools.git-conflict-resolver.tutorial.commands.add')"></li>
        <li v-html="$t('tools.git-conflict-resolver.tutorial.commands.commit')"></li>
      </ul>
    </div>

    <!-- 文章部分 -->
    <div class="mt-10 pt-6 border-t dark:border-gray-700">
      <GitConflictResolverArticle />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import GitConflictResolverArticle from './GitConflictResolverArticle.vue'

const { t } = useI18n()

// 示例冲突
const examples = [
  {
    title: "简单函数冲突",
    content: `function calculateTotal(items) {
<<<<<<< HEAD
  return items.reduce((sum, item) => sum + item.price, 0);
=======
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
>>>>>>> feature/add-quantity
}`
  },
  {
    title: "配置文件冲突",
    content: `{
  "name": "project-name",
  "version": "1.0.0",
<<<<<<< HEAD
  "description": "Updated project description",
  "dependencies": {
    "react": "^17.0.2",
    "lodash": "^4.17.21"
=======
  "description": "A sample project",
  "dependencies": {
    "react": "^18.0.0",
    "axios": "^0.24.0"
>>>>>>> feature/update-dependencies
  }
}`
  },
  {
    title: "HTML 结构冲突",
    content: `<div class="container">
<<<<<<< HEAD
  <header class="main-header">
    <h1>Welcome to our Website</h1>
    <nav class="navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
=======
  <div class="header">
    <div class="logo">
      <img src="/logo.png" alt="Logo" />
    </div>
    <h1>Welcome to Our New Site</h1>
    <div class="menu">
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
    </div>
  </div>
>>>>>>> feature/redesign
  <main>
    <!-- Content here -->
  </main>
</div>`
  }
]

// 状态变量
const content = ref('')
const conflicts = ref([])
const message = ref('')
const messageClass = ref('')

// 计算属性：是否存在冲突
const hasConflict = computed(() => {
  return content.value.includes('<<<<<<<') && 
         content.value.includes('=======') && 
         content.value.includes('>>>>>>>')
})

// 分析内容找出冲突
function analyzeContent() {
  conflicts.value = []
  message.value = ''
  
  if (!hasConflict.value) return
  
  const lines = content.value.split('\n')
  let inConflict = false
  let conflictStart = -1
  let separatorIndex = -1
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    if (line.startsWith('<<<<<<<')) {
      inConflict = true
      conflictStart = i
    } else if (inConflict && line.startsWith('=======')) {
      separatorIndex = i
    } else if (inConflict && line.startsWith('>>>>>>>')) {
      if (separatorIndex === -1) continue // 不正确的冲突标记
      
      // 提取冲突内容
      const oursLines = lines.slice(conflictStart + 1, separatorIndex)
      const theirsLines = lines.slice(separatorIndex + 1, i)
      
      conflicts.value.push({
        start: conflictStart,
        middle: separatorIndex,
        end: i,
        ours: oursLines.join('\n'),
        theirs: theirsLines.join('\n')
      })
      
      inConflict = false
    }
  }
}

// 生成示例冲突
function generateExample() {
  const randomIndex = Math.floor(Math.random() * examples.length)
  content.value = examples[randomIndex].content
  analyzeContent()
  setMessage(t('tools.git-conflict-resolver.messages.generated'), "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200")
}

// 重置内容
function resetContent() {
  content.value = ''
  conflicts.value = []
  message.value = ''
}

// 全部使用我们的更改
function resolveUsingOurs() {
  if (!hasConflict.value) return
  
  let result = content.value
  
  // 从后往前处理，避免索引变化
  const sortedConflicts = [...conflicts.value].sort((a, b) => b.start - a.start)
  
  for (const conflict of sortedConflicts) {
    const lines = result.split('\n')
    const before = lines.slice(0, conflict.start).join('\n')
    const after = lines.slice(conflict.end + 1).join('\n')
    const resolution = conflict.ours
    
    result = [before, resolution, after].filter(Boolean).join('\n')
  }
  
  content.value = result
  analyzeContent()
  setMessage(t('tools.git-conflict-resolver.messages.resolvedOurs'), "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200")
}

// 全部使用他们的更改
function resolveUsingTheirs() {
  if (!hasConflict.value) return
  
  let result = content.value
  
  // 从后往前处理，避免索引变化
  const sortedConflicts = [...conflicts.value].sort((a, b) => b.start - a.start)
  
  for (const conflict of sortedConflicts) {
    const lines = result.split('\n')
    const before = lines.slice(0, conflict.start).join('\n')
    const after = lines.slice(conflict.end + 1).join('\n')
    const resolution = conflict.theirs
    
    result = [before, resolution, after].filter(Boolean).join('\n')
  }
  
  content.value = result
  analyzeContent()
  setMessage(t('tools.git-conflict-resolver.messages.resolvedTheirs'), "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200")
}

// 解决单个冲突
function resolveConflict(index, type) {
  if (index >= conflicts.value.length) return
  
  const conflict = conflicts.value[index]
  const lines = content.value.split('\n')
  
  // 开始到冲突起始行
  const beforeConflict = lines.slice(0, conflict.start).join('\n')
  
  // 冲突后的内容
  const afterConflict = lines.slice(conflict.end + 1).join('\n')
  
  // 根据选择的类型确定处理后的内容
  let resolution = ''
  if (type === 'ours') {
    resolution = conflict.ours
  } else if (type === 'theirs') {
    resolution = conflict.theirs
  } else if (type === 'both') {
    resolution = conflict.ours + '\n' + conflict.theirs
  }
  
  // 组合新内容
  content.value = [
    beforeConflict,
    resolution,
    afterConflict
  ].filter(Boolean).join('\n')
  
  // 重新分析剩余冲突
  analyzeContent()
  
  setMessage(t('tools.git-conflict-resolver.messages.resolvedSingle', {number: index + 1}), "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200")
}

// 验证冲突是否已全部解决
function validateResolution() {
  if (!hasConflict.value) {
    setMessage(t('tools.git-conflict-resolver.messages.allResolved'), "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200")
  } else {
    setMessage(t('tools.git-conflict-resolver.messages.stillHasConflicts'), "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200")
  }
}

// 设置状态消息
function setMessage(msg, classStr) {
  message.value = msg
  messageClass.value = classStr
  
  // 5秒后自动清除消息
  setTimeout(() => {
    if (message.value === msg) {
      message.value = ''
    }
  }, 5000)
}

// 组件加载时生成示例
onMounted(() => {
  generateExample()
})
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-break: break-word;
}

code {
  @apply bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded;
}
</style> 