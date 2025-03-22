<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-wrap gap-4 mb-4">
        <!-- 连接部分 -->
        <div class="flex-grow">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            WebSocket地址
          </label>
          <div class="flex">
            <input 
              type="text"
              v-model="socketUrl"
              :disabled="connected"
              placeholder="例如: ws://echo.websocket.org"
              class="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
            <button 
              @click="toggleConnection"
              class="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600"
              :class="connected ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'"
            >
              {{ connected ? '断开' : '连接' }}
            </button>
          </div>
        </div>
        
        <!-- 子协议 -->
        <div class="w-full md:w-auto">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            子协议 (可选)
          </label>
          <input 
            type="text"
            v-model="protocol"
            :disabled="connected"
            placeholder="逗号分隔"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </div>
      </div>
      
      <!-- 选项部分 -->
      <div class="flex flex-wrap gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            选项
          </label>
          <div class="space-y-2">
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="auto-reconnect" 
                v-model="autoReconnect"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="auto-reconnect" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                自动重连
              </label>
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="auto-scroll" 
                v-model="autoScroll"
                class="h-4 w-4 text-primary border-gray-300 rounded"
              />
              <label for="auto-scroll" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                自动滚动日志
              </label>
            </div>
          </div>
        </div>
        
        <!-- 连接状态 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            连接状态
          </label>
          <div class="flex items-center">
            <span 
              class="inline-block w-3 h-3 rounded-full mr-2"
              :class="{
                'bg-green-500': connected,
                'bg-red-500': !connected && connectionAttempted,
                'bg-gray-500': !connected && !connectionAttempted
              }"
            ></span>
            <span class="text-sm text-gray-700 dark:text-gray-300">
              {{ connectionStatus }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="text-sm text-gray-600 dark:text-gray-400">
        <p>WebSocket测试工具允许您连接到WebSocket服务器，发送消息并查看响应。</p>
      </div>
    </div>
    
    <!-- 消息发送区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <!-- 左侧: 发送消息 -->
      <div>
        <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-lg font-medium">发送消息</h3>
            <div class="space-x-2">
              <button 
                @click="loadTemplate('json')"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                JSON
              </button>
              <button 
                @click="loadTemplate('text')"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                文本
              </button>
              <button 
                @click="clearMessage"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                清空
              </button>
            </div>
          </div>
          <textarea 
            v-model="messageToSend"
            placeholder="输入要发送的消息..."
            class="w-full min-h-[140px] px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono"
          ></textarea>
          <div class="mt-2 flex justify-between">
            <button 
              @click="sendMessage"
              :disabled="!connected || !messageToSend.trim()"
              class="px-4 py-2 rounded-md bg-primary hover:bg-primary-dark text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              发送
            </button>
            <select 
              v-model="messageFormat"
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option value="text">纯文本</option>
              <option value="json">JSON</option>
              <option value="binary">二进制</option>
            </select>
          </div>
        </div>
        
        <!-- 保存的连接 -->
        <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mt-4">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-lg font-medium">保存的连接</h3>
            <button 
              @click="saveCurrentConnection"
              class="px-2 py-1 text-xs rounded bg-primary text-white hover:bg-primary-dark"
            >
              保存当前连接
            </button>
          </div>
          <div class="space-y-2">
            <div v-if="savedConnections.length === 0" class="text-gray-500 dark:text-gray-400 text-sm">
              暂无保存的连接
            </div>
            <div 
              v-for="(conn, index) in savedConnections" 
              :key="index"
              class="flex justify-between items-center p-2 border border-gray-200 dark:border-gray-700 rounded"
            >
              <div class="text-sm truncate max-w-[70%]">{{ conn.name || conn.url }}</div>
              <div class="flex space-x-1">
                <button 
                  @click="loadConnection(conn)"
                  class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  加载
                </button>
                <button 
                  @click="removeSavedConnection(index)"
                  class="px-2 py-1 text-xs rounded bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 text-red-800 dark:text-red-200"
                >
                  删除
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 右侧: 消息日志 -->
      <div>
        <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 h-full">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-lg font-medium">消息日志</h3>
            <div class="space-x-2">
              <button 
                @click="clearLogs"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                清空日志
              </button>
              <button 
                @click="copyLogs"
                class="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                复制日志
              </button>
            </div>
          </div>
          <div 
            ref="logContainer"
            class="h-[400px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-md p-2 font-mono text-sm"
          >
            <div v-if="logs.length === 0" class="text-gray-500 dark:text-gray-400 text-center py-4">
              连接后的消息将显示在这里
            </div>
            <div 
              v-for="(log, index) in logs" 
              :key="index"
              class="mb-1 p-1 rounded"
              :class="{
                'bg-blue-50 dark:bg-blue-900/20': log.type === 'sent',
                'bg-green-50 dark:bg-green-900/20': log.type === 'received',
                'bg-red-50 dark:bg-red-900/20': log.type === 'error',
                'bg-yellow-50 dark:bg-yellow-900/20': log.type === 'info'
              }"
            >
              <div class="flex items-start">
                <span 
                  class="inline-block w-16 flex-shrink-0 text-xs"
                  :class="{
                    'text-blue-600 dark:text-blue-400': log.type === 'sent',
                    'text-green-600 dark:text-green-400': log.type === 'received',
                    'text-red-600 dark:text-red-400': log.type === 'error',
                    'text-yellow-600 dark:text-yellow-400': log.type === 'info'
                  }"
                >
                  {{ 
                    log.type === 'sent' ? '发送 →' : 
                    log.type === 'received' ? '接收 ←' : 
                    log.type === 'error' ? '错误 !' : '信息' 
                  }}
                </span>
                <div class="flex-grow">
                  <div class="text-xs text-gray-500 dark:text-gray-400">{{ formatTime(log.timestamp) }}</div>
                  <pre class="whitespace-pre-wrap break-words text-xs">{{ formatLogContent(log.content) }}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 示例服务器 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 mb-6">
      <h3 class="text-lg font-medium mb-2">测试服务器</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
        以下是一些可用于测试的公共WebSocket服务器:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div 
          v-for="server in testServers" 
          :key="server.url"
          class="p-2 border border-gray-200 dark:border-gray-700 rounded"
        >
          <div class="font-medium">{{ server.name }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-400">{{ server.description }}</div>
          <div class="mt-1">
            <button 
              @click="useTestServer(server)"
              class="px-2 py-1 text-xs rounded bg-primary text-white hover:bg-primary-dark"
            >
              使用此服务器
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 模态对话框-保存连接 -->
    <div 
      v-if="showSaveModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-10"
    >
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 w-80">
        <h3 class="text-lg font-medium mb-4">保存连接</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            连接名称
          </label>
          <input 
            type="text"
            v-model="connectionToSave.name"
            placeholder="输入连接名称"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </div>
        <div class="flex justify-end space-x-2">
          <button 
            @click="showSaveModal = false"
            class="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            取消
          </button>
          <button 
            @click="confirmSaveConnection"
            class="px-3 py-1 rounded bg-primary text-white hover:bg-primary-dark"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

// 连接状态
const socketUrl = ref('wss://echo.websocket.org')
const protocol = ref('')
const connected = ref(false)
const connectionAttempted = ref(false)
const autoReconnect = ref(false)
const autoScroll = ref(true)
const ws = ref(null)
const reconnectCount = ref(0)
const reconnectTimer = ref(null)

// 消息相关
const messageToSend = ref('')
const messageFormat = ref('text')
const logs = ref([])
const logContainer = ref(null)

// 保存的连接
const savedConnections = ref([])
const showSaveModal = ref(false)
const connectionToSave = ref({ name: '', url: '', protocol: '' })

// 测试服务器
// 测试服务器
const testServers = [
  { 
    name: 'Echo Test', 
    url: 'wss://echo.websocket.org',
    description: '安全的回显测试服务器，支持WSS连接' 
  },
  { 
    name: 'WebSocket.org', 
    url: 'wss://ws.postman-echo.com/raw',
    description: 'Postman提供的Echo服务，支持WSS' 
  }
]

// 计算属性
const connectionStatus = computed(() => {
  if (connected.value) {
    return '已连接'
  } else if (connectionAttempted.value) {
    return '未连接'
  } else {
    return '等待连接'
  }
})

// 加载连接
function loadConnection(conn) {
  if (connected.value) {
    disconnect()
  }
  socketUrl.value = conn.url
  protocol.value = conn.protocol || ''
}

// 加载模板消息
function loadTemplate(type) {
  if (type === 'json') {
    messageToSend.value = JSON.stringify({
      type: 'message',
      content: 'Hello WebSocket!',
      timestamp: new Date().toISOString()
    }, null, 2)
    messageFormat.value = 'json'
  } else if (type === 'text') {
    messageToSend.value = 'Hello WebSocket!'
    messageFormat.value = 'text'
  }
}

// 格式化日志内容
function formatLogContent(content) {
  if (typeof content === 'string') {
    try {
      // 尝试解析JSON
      const obj = JSON.parse(content)
      return JSON.stringify(obj, null, 2)
    } catch (e) {
      // 如果不是JSON，直接返回原文本
      return content
    }
  } else if (content instanceof Blob || content instanceof ArrayBuffer) {
    return '[二进制数据]'
  } else {
    return JSON.stringify(content, null, 2)
  }
}

// 格式化时间
function formatTime(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleTimeString()
}

// 连接/断开WebSocket
function toggleConnection() {
  if (connected.value) {
    disconnect()
  } else {
    connect()
  }
}

// 连接WebSocket
function connect() {
  if (!socketUrl.value) {
    addLog('请输入有效的WebSocket URL', 'error')
    return
  }

  // 断开现有连接
  if (ws.value) {
    disconnect()
  }
  
  try {
    connectionAttempted.value = true
    
    addLog(`正在连接到 ${socketUrl.value}...`, 'info')
    
    if (protocol.value) {
      ws.value = new WebSocket(socketUrl.value, protocol.value.split(',').map(p => p.trim()))
    } else {
      ws.value = new WebSocket(socketUrl.value)
    }
    
    ws.value.onopen = handleOpen
    ws.value.onmessage = handleMessage
    ws.value.onerror = handleError
    ws.value.onclose = handleClose
  } catch (error) {
    addLog(`连接错误: ${error.message}`, 'error')
    connectionAttempted.value = true
    connected.value = false
  }
}

// 断开WebSocket连接
function disconnect() {
  if (ws.value) {
    ws.value.close()
    ws.value = null
  }
  connected.value = false
  // 停止重连定时器
  if (reconnectTimer.value) {
    clearTimeout(reconnectTimer.value)
    reconnectTimer.value = null
  }
  reconnectCount.value = 0
}

// WebSocket事件处理函数
function handleOpen(event) {
  connected.value = true
  connectionAttempted.value = true
  reconnectCount.value = 0
  addLog('连接成功', 'info')
}

function handleMessage(event) {
  addLog(event.data, 'received')
}

function handleError(event) {
  addLog('WebSocket错误', 'error')
  connected.value = false
}

function handleClose(event) {
  connected.value = false
  
  const reason = event.reason ? ` - ${event.reason}` : ''
  addLog(`连接关闭 (代码: ${event.code}${reason})`, 'info')
  
  // 尝试自动重连
  if (autoReconnect.value && !event.wasClean) {
    const delay = Math.min(1000 * Math.pow(1.5, reconnectCount.value), 30000) // 指数退避，最多30秒
    addLog(`将在 ${Math.round(delay/1000)} 秒后尝试重新连接...`, 'info')
    
    reconnectTimer.value = setTimeout(() => {
      if (!connected.value) {
        reconnectCount.value++
        connect()
      }
    }, delay)
  }
}

// 发送消息
function sendMessage() {
  if (!connected.value || !ws.value) {
    addLog('未连接WebSocket', 'error')
    return
  }
  
  if (!messageToSend.value.trim()) {
    addLog('消息不能为空', 'error')
    return
  }
  
  try {
    let data = messageToSend.value
    
    // 根据选择的格式处理消息
    if (messageFormat.value === 'json') {
      try {
        // 验证JSON格式
        JSON.parse(data)
      } catch (e) {
        addLog(`无效的JSON格式: ${e.message}`, 'error')
        return
      }
    } else if (messageFormat.value === 'binary') {
      // 将文本转换为二进制数据
      const encoder = new TextEncoder()
      data = encoder.encode(data).buffer
    }
    
    // 发送消息
    ws.value.send(data)
    addLog(messageToSend.value, 'sent')
    
    // 清空消息
    if (!event.shiftKey) { // Shift+Enter 保留文本
      messageToSend.value = ''
    }
  } catch (error) {
    addLog(`发送失败: ${error.message}`, 'error')
  }
}

// 添加日志
function addLog(content, type = 'info') {
  logs.value.push({
    content,
    type,
    timestamp: new Date()
  })
  
  // 保持日志数量在合理范围内
  if (logs.value.length > 1000) {
    logs.value = logs.value.slice(-1000)
  }
  
  // 自动滚动到底部
  if (autoScroll.value) {
    nextTick(() => {
      if (logContainer.value) {
        logContainer.value.scrollTop = logContainer.value.scrollHeight
      }
    })
  }
}

// 使用测试服务器
function useTestServer(server) {
  if (connected.value) {
    disconnect()
  }
  socketUrl.value = server.url
  connect()
  socketUrl.value = server.url
  addLog(`已选择服务器: ${server.name}`, 'info')
}

// 清空消息
function clearMessage() {
  messageToSend.value = ''
}

// 清空日志
function clearLogs() {
  logs.value = []
}

// 复制日志
function copyLogs() {
  if (logs.value.length === 0) {
    return
  }
  
  const text = logs.value.map(log => {
    const time = formatTime(log.timestamp)
    const type = log.type === 'sent' ? '[发送]' : 
                log.type === 'received' ? '[接收]' : 
                log.type === 'error' ? '[错误]' : '[信息]'
    return `${time} ${type} ${typeof log.content === 'string' ? log.content : JSON.stringify(log.content)}`
  }).join('\n')
  
  navigator.clipboard.writeText(text).then(() => {
    addLog('日志已复制到剪贴板', 'info')
  }).catch(err => {
    addLog(`复制失败: ${err.message}`, 'error')
  })
}

// 保存当前连接
function saveCurrentConnection() {
  connectionToSave.value = {
    name: '',
    url: socketUrl.value,
    protocol: protocol.value
  }
  showSaveModal.value = true
}

// 确认保存连接
function confirmSaveConnection() {
  if (!connectionToSave.value.url) {
    return
  }
  
  // 如果没有名称，使用URL作为名称
  if (!connectionToSave.value.name) {
    connectionToSave.value.name = connectionToSave.value.url
  }
  
  savedConnections.value.push({ ...connectionToSave.value })
  
  // 保存到本地存储
  try {
    localStorage.setItem('websocket_connections', JSON.stringify(savedConnections.value))
  } catch (e) {
    console.error('保存连接失败:', e)
  }
  
  showSaveModal.value = false
}

// 删除保存的连接
function removeSavedConnection(index) {
  savedConnections.value.splice(index, 1)
  
  // 更新本地存储
  try {
    localStorage.setItem('websocket_connections', JSON.stringify(savedConnections.value))
  } catch (e) {
    console.error('保存连接失败:', e)
  }
}

// 加载保存的连接
onMounted(() => {
  try {
    const connections = localStorage.getItem('websocket_connections')
    if (connections) {
      savedConnections.value = JSON.parse(connections)
    }
  } catch (e) {
    console.error('加载保存的连接失败:', e)
  }
})

// 页面卸载前关闭连接
onBeforeUnmount(() => {
  disconnect()
})
</script>

<style scoped>
pre {
  margin: 0;
}
</style>