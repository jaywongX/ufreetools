<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <!-- 工具控制栏 -->
    <div class="flex flex-wrap items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex space-x-2 mb-2 sm:mb-0">
        <button 
          @click="compareCodes" 
          class="btn-sm bg-primary hover:bg-primary-dark text-white"
          :disabled="isProcessing || !originalCode.trim() || !modifiedCode.trim()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          比较
        </button>
        <button 
          @click="clearAll" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="isProcessing || (!originalCode && !modifiedCode)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          清空
        </button>
      </div>
      <div class="flex space-x-2">
        <!-- 语言选择 -->
        <select 
          v-model="language" 
          class="px-3 py-1.5 text-xs rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="plaintext">纯文本</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="json">JSON</option>
          <option value="markdown">Markdown</option>
          <option value="xml">XML</option>
          <option value="yaml">YAML</option>
        </select>
        <!-- 显示模式 -->
        <select 
          v-model="displayMode" 
          class="px-3 py-1.5 text-xs rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="side-by-side">并排视图</option>
          <option value="unified">合并视图</option>
        </select>
      </div>
    </div>
    
    <!-- 状态消息 -->
    <div 
      v-if="message" 
      class="p-3 text-sm" 
      :class="{ 
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': messageType === 'success',
        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': messageType === 'error',
        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': messageType === 'info'
      }"
    >
      {{ message }}
    </div>
    
    <!-- 输入区域 -->
    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 原始代码 -->
      <div class="space-y-2">
        <div class="flex justify-between">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">原始代码</label>
          <div class="flex space-x-2">
            <button 
              @click="loadSampleCodes" 
              class="text-xs text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light"
              title="加载示例代码"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 w-8 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-1 text-xs text-gray-400 select-none">
            <!-- 行号 -->
            <div v-for="i in Math.max(1, (originalCode.match(/\n/g) || []).length + 1)" :key="i" class="w-full text-center py-px">
              {{ i }}
            </div>
          </div>
          <textarea
            v-model="originalCode"
            class="w-full h-64 p-2 pl-10 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            placeholder="输入原始代码..."
            :disabled="isProcessing"
          ></textarea>
        </div>
      </div>
      
      <!-- 修改后代码 -->
      <div class="space-y-2">
        <div class="flex justify-between">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">修改后代码</label>
          <button 
            @click="swapCodes" 
            class="text-xs text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light"
            title="交换代码"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </button>
        </div>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 w-8 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-1 text-xs text-gray-400 select-none">
            <!-- 行号 -->
            <div v-for="i in Math.max(1, (modifiedCode.match(/\n/g) || []).length + 1)" :key="i" class="w-full text-center py-px">
              {{ i }}
            </div>
          </div>
          <textarea
            v-model="modifiedCode"
            class="w-full h-64 p-2 pl-10 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            placeholder="输入修改后代码..."
            :disabled="isProcessing"
          ></textarea>
        </div>
      </div>
    </div>
    
    <!-- 比较结果区域 -->
    <div v-if="diffResult" class="p-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
      <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">对比结果</h3>
      
      <!-- 并排视图 -->
      <div v-if="displayMode === 'side-by-side'" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-1">
          <div class="text-xs text-gray-500 dark:text-gray-400">原始代码</div>
          <div 
            class="p-3 font-mono text-sm whitespace-pre-wrap border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 overflow-auto"
            style="max-height: 500px;"
            v-html="sideBySideDiff.left"
          ></div>
        </div>
        <div class="space-y-1">
          <div class="text-xs text-gray-500 dark:text-gray-400">修改后代码</div>
          <div 
            class="p-3 font-mono text-sm whitespace-pre-wrap border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 overflow-auto"
            style="max-height: 500px;"
            v-html="sideBySideDiff.right"
          ></div>
        </div>
      </div>
      
      <!-- 合并视图 -->
      <div v-else class="space-y-1">
        <div 
          class="p-3 font-mono text-sm whitespace-pre-wrap border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 overflow-auto"
          style="max-height: 500px;"
          v-html="unifiedDiff"
        ></div>
      </div>
      
      <!-- 差异统计 -->
      <div class="flex flex-wrap gap-4 text-sm">
        <div class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
          新增: {{ diffStats.additions }}
        </div>
        <div class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full">
          删除: {{ diffStats.deletions }}
        </div>
        <div class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full">
          变更行数: {{ diffStats.changes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { diffLines, diffWords } from 'diff'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

// 状态
const isProcessing = ref(false)
const message = ref('')
const messageType = ref('info')

// 输入
const originalCode = ref('')
const modifiedCode = ref('')
const language = ref('plaintext')
const displayMode = ref('side-by-side')

// 差异结果
const diffResult = ref(null)
const diffStats = ref({ additions: 0, deletions: 0, changes: 0 })

// 转义HTML字符
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// 高亮代码
function highlightCode(code, lang) {
  if (!code) return ''
  
  if (lang !== 'plaintext' && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(code, { language: lang }).value
    } catch (e) {
      console.error(e)
    }
  }
  
  return escapeHtml(code)
}

// 比较代码
async function compareCodes() {
  if (!originalCode.value.trim() || !modifiedCode.value.trim()) {
    showMessage('请输入需要比较的代码', 'error')
    return
  }
  
  isProcessing.value = true
  showMessage('正在比较代码...', 'info')
  
  try {
    // 使用 diff 库进行比较
    const diffResult = diffLines(originalCode.value, modifiedCode.value)
    
    // 计算统计信息
    let additions = 0
    let deletions = 0
    let changes = 0
    
    for (const part of diffResult) {
      const lineCount = (part.value.match(/\n/g) || []).length + (part.value.endsWith('\n') ? 0 : 1)
      
      if (part.added) {
        additions += lineCount
        changes += lineCount
      } else if (part.removed) {
        deletions += lineCount
        changes += lineCount
      }
    }
    
    diffStats.value = { additions, deletions, changes }
    
    // 保存比较结果
    diffResult.value = diffResult
    
    showMessage('比较完成', 'success')
  } catch (error) {
    console.error('比较代码出错:', error)
    showMessage('比较代码时出错: ' + error.message, 'error')
  } finally {
    isProcessing.value = false
  }
}

// 清空所有
function clearAll() {
  originalCode.value = ''
  modifiedCode.value = ''
  diffResult.value = null
  message.value = ''
}

// 交换代码
function swapCodes() {
  const temp = originalCode.value
  originalCode.value = modifiedCode.value
  modifiedCode.value = temp
}

// 加载示例代码
function loadSampleCodes() {
  let original = ''
  let modified = ''
  
  switch (language.value) {
    case 'html':
      original = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>示例网页</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="styles.css">
  <script src="main.js"><\/script>
<\/head>
<body>
  <header>
    <h1>欢迎访问我们的网站</h1>
    <nav>
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">服务</a></li>
        <li><a href="#">联系我们</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>我们的服务</h2>
      <p>这里是关于我们服务的详细介绍。</p>
    </section>
    
    <section>
      <h2>联系我们</h2>
      <p>有任何问题请随时联系我们。</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2023 示例公司。保留所有权利。</p>
  </footer>
<\/body>
<\/html>`
      
      modified = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>我的新网站 - 欢迎</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="这是一个示例网站">
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="responsive.css">
  <script src="main.js"><\/script>
<\/head>
<body>
  <header class="main-header">
    <h1>欢迎访问我们的网站</h1>
    <nav class="main-nav">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">服务</a></li>
        <li><a href="#">博客</a></li>
        <li><a href="#">联系我们</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section class="services">
      <h2>我们的服务</h2>
      <p>这里是关于我们服务的详细介绍。我们提供高质量的服务。</p>
      <ul>
        <li>服务项目 1</li>
        <li>服务项目 2</li>
        <li>服务项目 3</li>
      </ul>
    </section>
    
    <section class="contact">
      <h2>联系我们</h2>
      <p>有任何问题请随时联系我们。</p>
      <form>
        <input type="text" placeholder="您的姓名">
        <input type="email" placeholder="您的邮箱">
        <button type="submit">发送</button>
      </form>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2023 示例公司。保留所有权利。</p>
    <div class="social-links">
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
    </div>
  </footer>
<\/body>
<\/html>`
      break
      
    case 'css':
      original = `/* 主样式 */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
}

header {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 10px;
}

nav ul li a {
  text-decoration: none;
  color: blue;
}

.container {
  width: 960px;
  margin: 0 auto;
  padding: 20px;
}

footer {
  background-color: #f5f5f5;
  padding: 10px;
  text-align: center;
  font-size: 12px;
}`
      
      modified = `/* 主样式 - 更新版 */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  color: #444;
  line-height: 1.6;
}

header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.site-logo {
  display: inline-block;
  vertical-align: middle;
  width: 40px;
  height: 40px;
}

nav.main-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-links li {
  margin-right: 15px;
}

.nav-links li:last-child {
  margin-right: 0;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #007bff;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-button {
    display: block;
  }
}`
      break
      
    case 'javascript':
      original = `// 用户认证模块
function authenticate(username, password) {
  // 简单的身份验证
  if (!username || !password) {
    return { success: false, message: '用户名和密码不能为空' };
  }
  
  // 模拟API调用
  if (username === 'admin' && password === 'password123') {
    return { 
      success: true, 
      user: {
        id: 1,
        username: 'admin',
        role: 'administrator'
      }
    };
  }
  
  return { success: false, message: '用户名或密码错误' };
}

// 用户会话管理
function createSession(user) {
  const sessionId = 'sess_' + Math.random().toString(36).substr(2, 9);
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24); // 24小时后过期
  
  const session = {
    id: sessionId,
    userId: user.id,
    expiresAt: expiresAt,
    createdAt: new Date()
  };
  
  // 存储会话
  console.log('创建新会话:', session);
  
  return sessionId;
}

// 初始化
function init() {
  console.log('认证模块初始化');
  // 更多初始化代码...
}

init();`
      
      modified = `// 用户认证模块 - 增强版
/**
 * 验证用户凭据并返回用户信息
 * @param {string} username - 用户名
 * @param {string} password - 密码
 * @param {boolean} rememberMe - 是否记住登录状态
 * @returns {Object} 认证结果
 */
async function authenticate(username, password, rememberMe = false) {
  // 输入验证
  if (!username || !password) {
    return { success: false, message: '用户名和密码不能为空' };
  }
  
  try {
    // 实际项目中，这里应该调用API服务
    const response = await mockApiCall(username, password);
    
    if (response.success) {
      // 创建用户会话
      const sessionId = createSession(response.user, rememberMe);
      return { 
        success: true, 
        user: response.user,
        sessionId
      };
    }
    
    return response; // 返回错误信息
  } catch (error) {
    console.error('认证过程中发生错误:', error);
    return { success: false, message: '认证服务暂时不可用' };
  }
}

// 模拟API调用
function mockApiCall(username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'password123') {
        resolve({ 
          success: true, 
          user: {
            id: 1,
            username: 'admin',
            role: 'administrator',
            name: '管理员',
            email: 'admin@example.com'
          }
        });
      } else {
        resolve({ success: false, message: '用户名或密码错误' });
      }
    }, 300); // 模拟网络延迟
  });
}

// 用户会话管理
function createSession(user, rememberMe) {
  const sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  
  // 设置过期时间
  const expiresAt = new Date();
  if (rememberMe) {
    expiresAt.setDate(expiresAt.getDate() + 30); // 30天后过期
  } else {
    expiresAt.setHours(expiresAt.getHours() + 24); // 24小时后过期
  }
  
  const session = {
    id: sessionId,
    userId: user.id,
    userRole: user.role,
    expiresAt: expiresAt,
    createdAt: new Date(),
    lastActivityAt: new Date()
  };
  
  // 存储会话 (实际项目中，这里应该将会话保存到数据库或缓存)
  console.log('创建新会话:', session);
  
  return sessionId;
}

// 初始化认证模块
function init() {
  console.log('认证模块初始化');
  // 检查本地存储中的会话
  checkExistingSession();
}

// 检查现有会话
function checkExistingSession() {
  console.log('检查现有会话...');
  // 实现会话恢复逻辑
}

// 导出模块
export { authenticate, createSession, init };

// 立即初始化
init();`
      break
      
    case 'json':
      original = `{
  "name": "产品配置",
  "version": "1.0",
  "settings": {
    "theme": "light",
    "notifications": true,
    "autoSave": false
  },
  "features": [
    "搜索",
    "过滤",
    "导出"
  ],
  "limits": {
    "maxUsers": 50,
    "maxProjects": 10
  }
}`

      modified = `{
  "name": "产品配置",
  "version": "1.1",
  "description": "应用程序核心配置",
  "settings": {
    "theme": "dark",
    "notifications": true,
    "autoSave": true,
    "language": "zh-CN"
  },
  "features": [
    "搜索",
    "过滤",
    "导出",
    "报表",
    "数据分析"
  ],
  "limits": {
    "maxUsers": 100,
    "maxProjects": 25,
    "maxStorage": "5GB"
  },
  "api": {
    "endpoint": "https://api.example.com/v1",
    "timeout": 30000
  }
}`
      break
      
    default:
      original = '这是原始文本示例.\n可以在这里输入任何文本内容进行比较.\n行与行之间的差异将被高亮显示.'
      modified = '这是修改后的文本示例.\n你可以在这里输入任何需要比较的内容.\n行与行之间的差异将被高亮显示.\n这是一个新增的行.'
  }
  
  originalCode.value = original
  modifiedCode.value = modified
  diffResult.value = null
  showMessage('已加载示例代码', 'info')
}

// 生成合并视图HTML
const unifiedDiff = computed(() => {
  if (!diffResult.value) return ''
  
  let html = ''
  
  for (const part of diffResult.value) {
    const content = highlightCode(part.value, language.value)
    
    if (part.added) {
      html += `<div class="diff-line diff-addition">${content}</div>`
    } else if (part.removed) {
      html += `<div class="diff-line diff-deletion">${content}</div>`
    } else {
      html += `<div class="diff-line">${content}</div>`
    }
  }
  
  return html
})

// 生成并排视图HTML
const sideBySideDiff = computed(() => {
  if (!diffResult.value) return { left: '', right: '' }
  
  let leftHtml = ''
  let rightHtml = ''
  
  for (const part of diffResult.value) {
    const content = highlightCode(part.value, language.value)
    
    if (part.added) {
      rightHtml += `<div class="diff-line diff-addition">${content}</div>`
    } else if (part.removed) {
      leftHtml += `<div class="diff-line diff-deletion">${content}</div>`
    } else {
      leftHtml += `<div class="diff-line">${content}</div>`
      rightHtml += `<div class="diff-line">${content}</div>`
    }
  }
  
  return { left: leftHtml, right: rightHtml }
})

// 显示消息
function showMessage(msg, type = 'info') {
  message.value = msg
  messageType.value = type
  
  // 3秒后自动清除消息
  setTimeout(() => {
    if (message.value === msg) {
      message.value = ''
    }
  }, 3000)
}

// 监听语言变化
watch(language, () => {
  if (originalCode.value || modifiedCode.value) {
    if (confirm('切换语言会清除当前代码，是否继续？')) {
      originalCode.value = ''
      modifiedCode.value = ''
      diffResult.value = null
    }
  }
})

// 组件挂载初始化
onMounted(() => {
  // 可以在这里添加初始化代码
})
</script>

<style>
/* 差异行样式 */
.diff-line {
  padding: 2px 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.diff-addition {
  background-color: rgba(0, 255, 0, 0.1);
  border-left: 3px solid #28a745;
  padding-left: 5px;
}

.diff-deletion {
  background-color: rgba(255, 0, 0, 0.1);
  border-left: 3px solid #dc3545;
  padding-left: 5px;
}

/* 在暗模式下调整样式 */
.dark .diff-addition {
  background-color: rgba(40, 167, 69, 0.2);
}

.dark .diff-deletion {
  background-color: rgba(220, 53, 69, 0.2);
}
</style> 