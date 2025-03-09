<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <h1 class="text-2xl font-bold mb-4">Git 冲突解决模拟器</h1>
    <p class="mb-6 text-gray-600 dark:text-gray-400">
      此工具可以帮助你理解并练习解决 Git 合并冲突。输入冲突内容或使用示例，然后手动解决冲突。
    </p>

    <!-- 控制区 -->
    <div class="mb-6 flex flex-wrap gap-4">
          <button 
        @click="generateExample" 
        class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
          >
        生成示例冲突
          </button>
            <button 
        @click="resolveUsingOurs" 
        class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition"
        :disabled="!hasConflict"
      >
        使用我的更改 (HEAD)
            </button>
            <button 
        @click="resolveUsingTheirs" 
        class="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition"
        :disabled="!hasConflict"
            >
        使用他们的更改
            </button>
            <button 
        @click="validateResolution" 
        class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition"
        :disabled="!hasConflict"
      >
        验证解决方案
        </button>
        <button 
        @click="resetContent" 
        class="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition"
        >
          重置
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
        <label for="conflictArea" class="text-lg font-semibold">冲突内容</label>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          <span v-if="hasConflict" class="text-red-500">⚠️ 存在未解决冲突</span>
          <span v-else class="text-green-500">✓ 无冲突</span>
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
      <h2 class="text-xl font-semibold mb-3">冲突分析</h2>
      <div 
        v-for="(conflict, index) in conflicts" 
        :key="index"
        class="p-4 mb-4 bg-gray-100 dark:bg-gray-700 rounded-md"
      >
        <h3 class="font-semibold mb-2">冲突 #{{ index + 1 }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-medium text-blue-600 dark:text-blue-400 mb-1">我的更改 (HEAD)</h4>
            <pre class="p-3 bg-blue-50 dark:bg-blue-900 rounded border border-blue-200 dark:border-blue-800 overflow-x-auto">{{ conflict.ours }}</pre>
          </div>
          <div>
            <h4 class="font-medium text-purple-600 dark:text-purple-400 mb-1">他们的更改</h4>
            <pre class="p-3 bg-purple-50 dark:bg-purple-900 rounded border border-purple-200 dark:border-purple-800 overflow-x-auto">{{ conflict.theirs }}</pre>
          </div>
        </div>
        <div class="mt-3">
          <button 
            @click="resolveConflict(index, 'ours')" 
            class="mr-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm transition"
          >
            使用我的
          </button>
          <button 
            @click="resolveConflict(index, 'theirs')" 
            class="mr-2 px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white rounded-md text-sm transition"
          >
            使用他们的
          </button>
          <button 
            @click="resolveConflict(index, 'both')" 
            class="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm transition"
          >
            合并两者
          </button>
      </div>
        </div>
      </div>
      
    <!-- 教程部分 -->
    <div class="mt-8 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
      <h2 class="text-xl font-semibold mb-3">如何解决 Git 冲突</h2>
      <p class="mb-3">
        Git 冲突通常在合并或变基操作中出现，当两个分支修改了同一文件的同一部分时会发生冲突。
      </p>
      <p class="mb-3">
        冲突标记通常看起来像这样：
      </p>
      <pre class="p-3 bg-gray-200 dark:bg-gray-800 rounded mb-4 overflow-x-auto">
<<<<<<< HEAD
你的更改 (当前分支)
=======
他们的更改 (合并进来的分支)
>>>>>>> 分支名称
      </pre>
      <p class="mb-3">
        解决冲突的基本步骤：
      </p>
      <ol class="list-decimal pl-6 mb-3 space-y-1">
        <li>找到所有冲突标记 (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> 分支名</code>)</li>
        <li>决定保留哪些代码（你的、他们的，或者两者的组合）</li>
        <li>删除冲突标记，保留你决定要保留的代码</li>
        <li>继续处理下一个冲突，直到解决所有冲突</li>
      </ol>
      <p>
        常用的 Git 命令：
      </p>
      <ul class="list-disc pl-6 space-y-1">
        <li><code>git status</code> - 查看哪些文件有冲突</li>
        <li><code>git diff</code> - 查看冲突的详细内容</li>
        <li><code>git merge --abort</code> - 取消合并，回到合并前的状态</li>
        <li><code>git add &lt;文件&gt;</code> - 标记冲突文件为已解决</li>
        <li><code>git commit</code> - 完成合并</li>
        </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 内容和冲突状态
const content = ref('')
const conflicts = ref([])
const message = ref('')
const messageClass = ref('')

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

// 计算是否有冲突
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
      // 冲突结束，收集信息
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
  setMessage("已生成示例冲突内容", "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200")
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
  setMessage("已使用所有「我的更改」解决冲突", "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200")
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
  setMessage("已使用所有「他们的更改」解决冲突", "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200")
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
  
  setMessage(`已解决冲突 #${index + 1}`, "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200")
}

// 验证冲突是否已全部解决
function validateResolution() {
  if (!hasConflict.value) {
    setMessage("✅ 所有冲突已成功解决！", "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200")
  } else {
    setMessage("⚠️ 仍有未解决的冲突，请检查并解决所有标记", "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200")
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