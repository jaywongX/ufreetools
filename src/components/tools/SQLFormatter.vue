<template>
  <div>
    <!-- 工具设置 -->
    <div class="mb-4 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">SQL格式化</h3>
      <div class="flex flex-wrap gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            SQL语言
          </label>
          <select 
            v-model="options.language" 
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="sql">标准SQL</option>
            <option value="mysql">MySQL</option>
            <option value="postgresql">PostgreSQL</option>
            <option value="sqlite">SQLite</option>
            <option value="tsql">T-SQL (SQL Server)</option>
            <option value="oracle">Oracle PL/SQL</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            缩进方式
          </label>
          <select 
            v-model="options.indentStyle" 
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="spaces">空格</option>
            <option value="tabs">Tab缩进</option>
          </select>
        </div>
        <div v-if="options.indentStyle === 'spaces'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            空格数量
          </label>
          <select 
            v-model="options.indentCount" 
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option :value="2">2个空格</option>
            <option :value="4">4个空格</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            关键字大小写
          </label>
          <select 
            v-model="options.keywordCase" 
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="preserve">保持原样</option>
            <option value="upper">大写</option>
            <option value="lower">小写</option>
          </select>
        </div>
      </div>
    </div>
    
    <!-- 输入框 -->
    <div class="mb-4">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          输入SQL
        </label>
        <button 
          @click="clearInput" 
          class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light"
        >
          清空
        </button>
      </div>
      <textarea 
        v-model="sqlInput" 
        class="w-full h-64 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono"
        placeholder="请输入您的SQL查询..."
      ></textarea>
    </div>
    
    <!-- 操作按钮 -->
    <div class="flex space-x-3 mb-4">
      <button 
        @click="formatSQL" 
        class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
      >
        格式化SQL
      </button>
      <button 
        @click="minifySQL" 
        class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        压缩SQL
      </button>
    </div>
    
    <!-- 输出结果 -->
    <div class="mb-4">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          格式化结果
        </label>
        <button 
          v-if="sqlOutput"
          @click="copyToClipboard(sqlOutput)" 
          class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          复制
        </button>
      </div>
      <div class="relative">
        <pre class="w-full h-64 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono overflow-auto"><code>{{ sqlOutput || "// 格式化后的SQL将显示在这里" }}</code></pre>
      </div>
    </div>
    
    <!-- 复制成功通知 -->
    <div v-if="copyStatus" class="fixed right-4 bottom-4 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-4 py-2 rounded-md shadow-md">
      已复制到剪贴板
    </div>
    
    <!-- 工具说明 -->
    <div class="bg-gray-50 dark:bg-gray-800 rounded-md p-4 text-sm text-gray-700 dark:text-gray-300">
      <h3 class="font-medium mb-2">使用提示</h3>
      <p class="mb-2">此工具帮助您格式化SQL查询，使其更具可读性和一致性。适用于各种SQL方言，包括标准SQL、MySQL、PostgreSQL等。</p>
      <ul class="list-disc pl-5 mb-2">
        <li>格式化：美化SQL语句，使其更易读</li>
        <li>压缩：移除多余空格，便于传输或存储</li>
        <li>可自定义缩进、关键词大小写等</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 格式化选项
const options = reactive({
  language: 'sql',
  indentStyle: 'spaces',
  indentCount: 2,
  keywordCase: 'upper'
})

// 输入和输出
const sqlInput = ref('')
const sqlOutput = ref('')
const copyStatus = ref(false)

// 格式化SQL
function formatSQL() {
  if (!sqlInput.value.trim()) {
    sqlOutput.value = ''
    return
  }
  
  try {
    // 格式化逻辑
    // 注意：因为我们没有直接引入SQL格式化库，这里使用简化逻辑
    // 实际使用时应引入sql-formatter等专业库
    let formattedSQL = formatSQLString(sqlInput.value, options)
    
    sqlOutput.value = formattedSQL
  } catch (error) {
    sqlOutput.value = `错误: ${error.message}`
  }
}

// 压缩SQL
function minifySQL() {
  if (!sqlInput.value.trim()) {
    sqlOutput.value = ''
    return
  }
  
  try {
    // 压缩逻辑，去除多余空格、换行等
    const minified = sqlInput.value
      .replace(/\s+/g, ' ') // 多个空白字符替换为单个空格
      .replace(/\s*([(),;])\s*/g, '$1') // 删除括号和分号周围的空格
      .replace(/\s+SELECT\s+/gi, ' SELECT ') // 保留关键词周围的单个空格
      .replace(/\s+FROM\s+/gi, ' FROM ')
      .replace(/\s+WHERE\s+/gi, ' WHERE ')
      .replace(/\s+AND\s+/gi, ' AND ')
      .replace(/\s+OR\s+/gi, ' OR ')
      .replace(/\s+ORDER\s+BY\s+/gi, ' ORDER BY ')
      .replace(/\s+GROUP\s+BY\s+/gi, ' GROUP BY ')
      .replace(/\s+HAVING\s+/gi, ' HAVING ')
      .replace(/\s+JOIN\s+/gi, ' JOIN ')
      .replace(/\s+UNION\s+/gi, ' UNION ')
      .trim()
      
    sqlOutput.value = minified
  } catch (error) {
    sqlOutput.value = `错误: ${error.message}`
  }
}

// 模拟SQL格式化函数(简化版)
function formatSQLString(sql, options) {
  // 这是一个简化版实现，实际项目中应使用sql-formatter等专业库
  
  // 关键词列表（不完整，仅作演示）
  const keywords = [
    'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'ORDER BY', 'GROUP BY', 
    'HAVING', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 
    'UNION', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'ALTER', 'DROP'
  ]
  
  let indent = options.indentStyle === 'spaces' 
    ? ' '.repeat(options.indentCount)
    : '\t'
    
  // 适用关键字大小写设置
  let formattedSQL = sql
  
  // 处理关键词大小写
  if (options.keywordCase !== 'preserve') {
    for (const keyword of keywords) {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
      const replacement = options.keywordCase === 'upper' 
        ? keyword.toUpperCase() 
        : keyword.toLowerCase()
      formattedSQL = formattedSQL.replace(regex, replacement)
    }
  }
  
  // 处理主要关键词的换行和缩进
  formattedSQL = formattedSQL
    .replace(/\s+/g, ' ') // 先删除多余空格
    .replace(/\s*([(),])\s*/g, '$1 ') // 在括号后添加空格
    .replace(/\s*;\s*/g, ';\n') // 分号后换行
    .replace(/\bSELECT\b/gi, '\nSELECT')
    .replace(/\bFROM\b/gi, '\n' + indent + 'FROM')
    .replace(/\bWHERE\b/gi, '\n' + indent + 'WHERE')
    .replace(/\bAND\b/gi, '\n' + indent + indent + 'AND')
    .replace(/\bOR\b/gi, '\n' + indent + indent + 'OR')
    .replace(/\bORDER BY\b/gi, '\n' + indent + 'ORDER BY')
    .replace(/\bGROUP BY\b/gi, '\n' + indent + 'GROUP BY')
    .replace(/\bHAVING\b/gi, '\n' + indent + 'HAVING')
    .replace(/\bJOIN\b/gi, '\n' + indent + 'JOIN')
    .replace(/\bLEFT JOIN\b/gi, '\n' + indent + 'LEFT JOIN')
    .replace(/\bRIGHT JOIN\b/gi, '\n' + indent + 'RIGHT JOIN')
    .replace(/\bINNER JOIN\b/gi, '\n' + indent + 'INNER JOIN')
    .replace(/\bUNION\b/gi, '\n\nUNION\n\n')
    .trim()
    
  return formattedSQL
}

// 复制到剪贴板
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      copyStatus.value = true
      setTimeout(() => {
        copyStatus.value = false
      }, 2000)
    })
    .catch(error => {
      console.error('复制失败', error)
    })
}

// 清空输入
function clearInput() {
  sqlInput.value = ''
  sqlOutput.value = ''
}
</script> 