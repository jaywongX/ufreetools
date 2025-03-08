<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Git冲突解决模拟器</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        模拟Git合并冲突场景，练习解决代码冲突，提高版本控制技能
      </p>
      
      <!-- 冲突场景选择 -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          选择冲突场景
        </label>
        <select 
          v-model="selectedScenario"
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          @change="loadScenario"
        >
          <option value="" selected disabled>-- 选择一个冲突场景 --</option>
          <option v-for="scenario in scenarios" :key="scenario.id" :value="scenario.id">
            {{ scenario.name }} - {{ scenario.description }}
          </option>
        </select>
      </div>
      
      <!-- 自定义冲突 -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            或者创建自定义冲突场景
          </label>
          <button 
            @click="toggleCustomConflict" 
            class="text-xs text-primary hover:text-primary-dark"
          >
            {{ showCustomConflict ? '隐藏' : '显示' }}
          </button>
        </div>
        
        <div v-if="showCustomConflict" class="border border-gray-200 dark:border-gray-700 rounded-md p-4">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              原始文件内容
            </label>
            <textarea 
              v-model="customConflict.original" 
              placeholder="输入原始文件内容..."
              class="w-full h-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            ></textarea>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                分支A的更改
              </label>
              <textarea 
                v-model="customConflict.branchA" 
                placeholder="分支A的修改版本..."
                class="w-full h-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                分支B的更改
              </label>
              <textarea 
                v-model="customConflict.branchB" 
                placeholder="分支B的修改版本..."
                class="w-full h-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
              ></textarea>
            </div>
          </div>
          
          <div class="flex justify-end">
            <button 
              @click="createCustomConflict" 
              class="px-3 py-1.5 bg-primary text-white rounded-md hover:bg-primary-dark"
              :disabled="!isCustomConflictValid"
            >
              创建冲突
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 冲突解决区域 -->
    <div v-if="conflictFile" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-6">
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">解决冲突</h3>
          <div class="flex gap-2">
            <button 
              @click="useVersion('ours')" 
              class="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              使用我们的版本
            </button>
            <button 
              @click="useVersion('theirs')" 
              class="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              使用他们的版本
            </button>
          </div>
        </div>
        
        <div class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <p>文件: <span class="font-mono">{{ conflictFile.path }}</span></p>
          <p class="mt-1">
            冲突标记: <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded"><<<<<<< HEAD</code> (当前分支) 和 
            <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">>>>>>>> branch-name</code> (合并分支)
          </p>
        </div>
      </div>
      
      <!-- 编辑器区域 -->
      <div class="border border-gray-200 dark:border-gray-700 rounded-md mb-4 overflow-hidden">
        <div ref="editorContainer" class="h-96"></div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="flex justify-center gap-4">
        <button 
          @click="resolveConflict" 
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          解决冲突
        </button>
        <button 
          @click="resetConflict" 
          class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          重置
        </button>
      </div>
    </div>
    
    <!-- 解决结果 -->
    <div v-if="resolvedContent" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">解决结果</h3>
      
      <div v-if="resolveSuccess" class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md mb-4">
        <div class="flex items-start">
          <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="text-green-800 dark:text-green-200">冲突已成功解决！</p>
            <p class="text-sm text-green-600 dark:text-green-300 mt-1">
              在实际的Git仓库中，您现在可以继续提交这个解决方案。
            </p>
          </div>
        </div>
      </div>
      
      <div v-else class="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md mb-4">
        <div class="flex items-start">
          <svg class="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p class="text-yellow-800 dark:text-yellow-200">檢測到未完全解决的冲突</p>
            <p class="text-sm text-yellow-600 dark:text-yellow-300 mt-1">
              請確保所有冲突標記 (&lt;&lt;&lt;&lt;&lt;&lt;&lt;, =======, &gt;&gt;&gt;&gt;&gt;&gt;&gt;) 都已移除。
            </p>
          </div>
        </div>
      </div>
      
      <!-- 显示解决后的内容 -->
      <div class="mt-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          解决后的代码
        </label>
        <div class="border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 p-4 font-mono text-sm whitespace-pre-wrap overflow-auto max-h-60">
          {{ resolvedContent }}
        </div>
      </div>
      
      <!-- 学习资源 -->
      <div class="mt-6">
        <h4 class="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">
          Git合并冲突解决技巧
        </h4>
        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <li>始终先理解两边的更改含义，再尝试解决冲突</li>
          <li>保留两边更改也是一种有效的解决方案</li>
          <li>使用<code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">git diff</code>查看详细的更改差异</li>
          <li>使用<code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">git merge --abort</code>可随时取消合并</li>
          <li>冲突解决后使用<code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">git add &lt;文件&gt;</code>标记为已解决</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, nextTick } from 'vue'
import * as monaco from 'monaco-editor'
import { DiffMatchPatch } from 'diff-match-patch'

// 编辑器实例
let editor = null
const editorContainer = ref(null)

// 当前冲突文件
const conflictFile = ref(null)
const originalContent = ref('')
const resolvedContent = ref('')
const resolveSuccess = ref(false)

// 场景选择
const selectedScenario = ref('')
const showCustomConflict = ref(false)

// 自定义冲突
const customConflict = reactive({
  original: '',
  branchA: '',
  branchB: ''
})

const isCustomConflictValid = computed(() => {
  return customConflict.original && customConflict.branchA && customConflict.branchB
})

// 预设冲突场景
const scenarios = [
  {
    id: 'feature-readme',
    name: '功能说明文档冲突',
    description: '两个开发者修改了同一个README文件',
    content: {
      path: 'README.md',
      base: `# 项目说明\n\n这是一个示例项目。\n\n## 功能\n\n- 用户管理\n- 数据分析\n- 报表导出\n\n## 开发环境\n\n- Node.js 14+\n- npm 6+\n\n## 安装方法\n\n\`\`\`bash\nnpm install\nnpm start\n\`\`\``,
      ours: `# 项目说明\n\n这是一个示例项目，提供完整的企业级解决方案。\n\n## 功能\n\n- 用户管理\n- 数据分析\n- 报表导出\n- 权限控制\n- 审计日志\n\n## 开发环境\n\n- Node.js 14+\n- npm 6+\n\n## 安装方法\n\n\`\`\`bash\nnpm install\nnpm start\n\`\`\``,
      theirs: `# 项目说明\n\n这是一个示例项目。\n\n## 功能\n\n- 用户管理\n- 数据分析\n- 报表导出\n\n## 开发环境\n\n- Node.js 16+\n- npm 8+\n- MongoDB 5+\n- Redis 6+\n\n## 安装方法\n\n\`\`\`bash\nnpm install\nnpm run dev\n\`\`\``
    }
  },
  {
    id: 'js-function',
    name: 'JavaScript函数冲突',
    description: '两个开发者修改了同一个JavaScript函数',
    content: {
      path: 'src/utils.js',
      base: `/**
 * 格式化日期
 * @param {Date} date 日期对象
 * @returns {string} 格式化后的日期字符串
 */
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return \`\${year}-\${month}-\${day}\`;
}

/**
 * 计算两个数的和
 */
function add(a, b) {
  return a + b;
}

module.exports = {
  formatDate,
  add
};`,
      ours: `/**
 * 格式化日期
 * @param {Date} date 日期对象
 * @param {string} format 日期格式，默认为YYYY-MM-DD
 * @returns {string} 格式化后的日期字符串
 */
function formatDate(date, format = 'YYYY-MM-DD') {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  let result = format;
  result = result.replace('YYYY', year);
  result = result.replace('MM', month);
  result = result.replace('DD', day);
  
  return result;
}

/**
 * 计算两个数的和
 */
function add(a, b) {
  return a + b;
}

module.exports = {
  formatDate,
  add
};`,
      theirs: `/**
 * 格式化日期
 * @param {Date} date 日期对象
 * @returns {string} 格式化后的日期字符串
 */
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return \`\${year}-\${month}-\${day} \${hours}:\${minutes}:\${seconds}\`;
}

/**
 * 计算两个数的和
 */
function add(a, b) {
  return a + b;
}

module.exports = {
  formatDate,
  add
};`
    }
  },
  {
    id: 'config-conflict',
    name: '配置文件冲突',
    description: '两个开发者修改了同一个配置文件',
    content: {
      path: 'config.json',
      base: `{
  "app": {
    "name": "MyApp",
    "version": "1.0.0",
    "port": 3000,
    "debug": false
  },
  "database": {
    "host": "localhost",
    "port": 27017,
    "name": "myapp"
  },
  "logging": {
    "level": "info",
    "file": "logs/app.log"
  }
}`,
      ours: `{
  "app": {
    "name": "MyApp",
    "version": "1.1.0",
    "port": 3000,
    "debug": true,
    "timeout": 30000
  },
  "database": {
    "host": "localhost",
    "port": 27017,
    "name": "myapp"
  },
  "logging": {
    "level": "debug",
    "file": "logs/app.log"
  }
}`,
      theirs: `{
  "app": {
    "name": "MyApp Pro",
    "version": "1.0.0",
    "port": 4000,
    "debug": false
  },
  "database": {
    "host": "mongodb",
    "port": 27017,
    "name": "myapp",
    "user": "admin",
    "password": "secret"
  },
  "logging": {
    "level": "info",
    "file": "logs/app.log"
  }
}`
    }
  }
];

// 初始化编辑器
onMounted(() => {
  initializeEditor()
})

// 初始化编辑器
function initializeEditor() {
  if (!editorContainer.value) return
  
  // 创建编辑器实例
  editor = monaco.editor.create(editorContainer.value, {
    value: '',
    language: 'plaintext',
    theme: 'vs-dark',
    minimap: {
      enabled: false
    },
    lineNumbers: 'on',
    scrollBeyondLastLine: false,
    automaticLayout: true
  })
}

// 监听场景选择
watch(selectedScenario, (newValue) => {
  if (newValue) {
    loadScenario(newValue)
  }
})

// 加载场景
function loadScenario(scenarioId) {
  const scenario = scenarios.find(s => s.id === scenarioId)
  if (!scenario) return
  
  const content = scenario.content
  
  // 创建冲突内容
  const conflictContent = createConflictContent(content.base, content.ours, content.theirs)
  
  // 设置冲突文件
  conflictFile.value = {
    path: content.path,
    content: conflictContent
  }
  
  // 保存原始内容
  originalContent.value = conflictContent
  
  // 设置编辑器语言
  const fileExt = content.path.split('.').pop()
  let language = 'plaintext'
  
  switch (fileExt) {
    case 'js':
      language = 'javascript'
      break
    case 'json':
      language = 'json'
      break
    case 'md':
      language = 'markdown'
      break
    case 'html':
      language = 'html'
      break
    case 'css':
      language = 'css'
      break
  }
  
  // 更新编辑器
  nextTick(() => {
    monaco.editor.setModelLanguage(editor.getModel(), language)
    editor.setValue(conflictContent)
    resolvedContent.value = ''
  })
}

// 创建自定义冲突
function createCustomConflict() {
  // 创建冲突内容
  const conflictContent = createConflictContent(
    customConflict.original, 
    customConflict.branchA, 
    customConflict.branchB
  )
  
  // 设置冲突文件
  conflictFile.value = {
    path: 'custom-file.txt',
    content: conflictContent
  }
  
  // 保存原始内容
  originalContent.value = conflictContent
  
  // 更新编辑器
  nextTick(() => {
    monaco.editor.setModelLanguage(editor.getModel(), 'plaintext')
    editor.setValue(conflictContent)
    resolvedContent.value = ''
  })
  
  // 隐藏自定义区域
  showCustomConflict.value = false
}

// 使用指定版本
function useVersion(version) {
  if (!editor) return
  
  const content = editor.getValue()
  const resolvedText = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> branch-name/g, (match, ours, theirs) => {
    return version === 'ours' ? ours : theirs
  })
  
  editor.setValue(resolvedText)
}

// 解决冲突
function resolveConflict() {
  if (!editor) return
  
  const content = editor.getValue()
  resolvedContent.value = content
  
  // 检查是否还有冲突标记
  resolveSuccess.value = !content.includes('<<<<<<< HEAD') && 
                         !content.includes('=======') && 
                         !content.includes('>>>>>>> branch-name')
}

// 重置冲突
function resetConflict() {
  if (!editor) return
  editor.setValue(originalContent.value)
  resolvedContent.value = ''
}

// 切换自定义冲突显示
function toggleCustomConflict() {
  showCustomConflict.value = !showCustomConflict.value
}

// 创建冲突内容
function createConflictContent(base, ours, theirs) {
  // 使用diff-match-patch来生成冲突内容
  const dmp = new DiffMatchPatch()
  
  // 找出差异部分
  const diff1 = dmp.diff_main(base, ours)
  const diff2 = dmp.diff_main(base, theirs)
  
  // 简化冲突生成逻辑 - 这里使用一个简单的方式创建冲突
  // 实际应用中应该更精确地定位冲突位置
  
  // 将base拆分为行
  const lines = base.split('\n')
  
  // 随机选择一行作为冲突点(避免第一行和最后一行)
  const conflictLineIndex = Math.floor(Math.random() * (lines.length - 2)) + 1
  
  // 提取ours和theirs对应的行(如果存在)
  const oursLines = ours.split('\n')
  const theirsLines = theirs.split('\n')
  
  // 创建冲突内容
  let result = ''
  
  // 前面部分
  for (let i = 0; i < conflictLineIndex; i++) {
    result += lines[i] + '\n'
  }
  
  // 冲突部分
  result += '<<<<<<< HEAD\n'
  
  // 我们的版本(至少2行)
  const oursStart = Math.max(0, conflictLineIndex - 1)
  const oursEnd = Math.min(oursLines.length, conflictLineIndex + 3)
  for (let i = oursStart; i < oursEnd; i++) {
    result += oursLines[i] + '\n'
  }
  
  result += '=======\n'
  
  // 他们的版本(至少2行)
  const theirsStart = Math.max(0, conflictLineIndex - 1)
  const theirsEnd = Math.min(theirsLines.length, conflictLineIndex + 3)
  for (let i = theirsStart; i < theirsEnd; i++) {
    result += theirsLines[i] + '\n'
  }
  
  result += '>>>>>>> branch-name\n'
  
  // 剩余部分
  for (let i = conflictLineIndex + 1; i < lines.length; i++) {
    result += lines[i] + (i < lines.length - 1 ? '\n' : '')
  }
  
  return result
}
</script> 