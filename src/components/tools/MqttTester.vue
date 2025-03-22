<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <!-- 顶部状态栏 -->
      <div class="flex justify-between items-center mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center">
          <div 
            class="w-3 h-3 rounded-full mr-2"
            :class="connected ? 'bg-green-500' : 'bg-red-500'"
          ></div>
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ connected ? '已连接' : '未连接' }}
          </span>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400" v-if="connected">
          客户端ID: {{ clientId || '未指定' }}
        </div>
      </div>

      <!-- MQTT连接设置 -->
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">MQTT连接设置</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Broker URL -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Broker URL
            </label>
            <input 
              v-model="brokerUrl" 
              type="text" 
              placeholder="mqtt://broker.example.com"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              :disabled="connected"
            >
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              例如: mqtt://broker.emqx.io 或 ws://broker.emqx.io:8083/mqtt
            </p>
          </div>
          
          <!-- 端口号 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              端口 (Port)
            </label>
            <input 
              v-model.number="port" 
              type="number" 
              placeholder="1883"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              :disabled="connected"
            >
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              标准端口: MQTT=1883, MQTTS=8883, WebSocket=8083, WSS=8084
            </p>
          </div>
          
          <!-- 客户端ID -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              客户端ID
            </label>
            <div class="flex">
              <input 
                v-model="clientId" 
                type="text" 
                placeholder="客户端ID (可选)"
                class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                :disabled="connected"
              >
              <button 
                @click="generateClientId" 
                class="px-3 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-500"
                :disabled="connected"
              >
                生成
              </button>
            </div>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              若留空将使用随机ID
            </p>
          </div>
          
          <!-- 协议版本 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              MQTT版本
            </label>
            <select 
              v-model="mqttVersion" 
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              :disabled="connected"
            >
              <option value="3">3.1</option>
              <option value="4">3.1.1</option>
              <option value="5">5.0</option>
            </select>
          </div>
        </div>
        
        <!-- 安全设置 -->
        <div class="mt-4">
          <div class="flex items-center mb-2">
            <input 
              type="checkbox" 
              id="use-auth" 
              v-model="useAuth" 
              class="mr-2"
              :disabled="connected"
            >
            <label for="use-auth" class="text-sm font-medium text-gray-700 dark:text-gray-300">
              使用认证
            </label>
          </div>
          
          <div v-if="useAuth" class="grid grid-cols-1 md:grid-cols-2 gap-4 ml-6 mt-2">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                用户名
              </label>
              <input 
                v-model="username" 
                type="text" 
                placeholder="用户名"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                :disabled="connected"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                密码
              </label>
              <input 
                v-model="password" 
                type="password" 
                placeholder="密码"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                :disabled="connected"
              >
            </div>
          </div>
          
          <div class="flex items-center mt-3">
            <input 
              type="checkbox" 
              id="use-tls" 
              v-model="useTls" 
              class="mr-2"
              :disabled="connected"
            >
            <label for="use-tls" class="text-sm font-medium text-gray-700 dark:text-gray-300">
              使用TLS/SSL
            </label>
          </div>
        </div>
        
        <!-- 连接按钮 -->
        <div class="mt-4 flex justify-end">
          <button 
            v-if="!connected"
            @click="connect" 
            class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            :disabled="connecting"
          >
            <span v-if="connecting">连接中...</span>
            <span v-else>连接</span>
          </button>
          <button 
            v-else
            @click="disconnect" 
            class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            断开连接
          </button>
        </div>
      </div>
      
      <!-- 若连接错误显示错误信息 -->
      <div 
        v-if="connectionError" 
        class="p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 rounded-md text-red-700 dark:text-red-300 text-sm mb-4 flex items-start"
      >
        <svg class="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <strong class="font-medium">连接错误:</strong>
          <div class="mt-1">{{ connectionError }}</div>
        </div>
      </div>
    </div>
    
    <!-- 主要功能区域 -->
    <div v-if="connected" class="mb-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- 发布消息区域 -->
        <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">发布消息</h3>
          
          <!-- 主题输入 -->
          <div class="mb-3">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              主题 (Topic)
            </label>
            <input 
              v-model="publishTopic" 
              type="text" 
              placeholder="example/topic"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
          </div>
          
          <!-- QoS选择 -->
          <div class="mb-3">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              QoS级别
            </label>
            <div class="flex space-x-4">
              <label class="flex items-center">
                <input type="radio" v-model="publishQos" :value="0" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">0 (最多一次)</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="publishQos" :value="1" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">1 (至少一次)</span>
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="publishQos" :value="2" class="mr-1">
                <span class="text-sm text-gray-700 dark:text-gray-300">2 (只有一次)</span>
              </label>
            </div>
          </div>
          
          <!-- Retain选项 -->
          <div class="mb-3">
            <label class="flex items-center">
              <input type="checkbox" v-model="retain" class="mr-1">
              <span class="text-sm text-gray-700 dark:text-gray-300">保留消息 (Retain)</span>
            </label>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400 ml-5">
              保留的消息将被Broker存储，新客户端连接并订阅该主题时会立即收到
            </p>
          </div>
          
          <!-- 消息内容 -->
          <div class="mb-3">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              消息内容
            </label>
            <textarea 
              v-model="publishMessageContent" 
              rows="4" 
              placeholder="输入消息内容 (文本或JSON)"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            ></textarea>
          </div>
          
          <!-- 发布按钮 -->
          <div class="flex justify-end">
            <button 
              @click="publishMessage" 
              class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              :disabled="!publishTopic || publishing"
            >
              <span v-if="publishing">发布中...</span>
              <span v-else>发布消息</span>
            </button>
          </div>
        </div>
        
        <!-- 订阅消息区域 -->
        <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">订阅主题</h3>
          
          <!-- 订阅主题输入 -->
          <div class="mb-3">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              主题 (支持通配符: # 和 +)
            </label>
            <div class="flex">
              <input 
                v-model="subscribeTopic" 
                type="text" 
                placeholder="example/# 或 example/+"
                class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
              <button 
                @click="subscribeTopic && !subscriptionLoading ? subscribe() : null" 
                class="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark"
                :disabled="!subscribeTopic || subscriptionLoading"
              >
                <span v-if="subscriptionLoading">订阅中...</span>
                <span v-else>订阅</span>
              </button>
            </div>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              使用 # 匹配多级主题，+ 匹配单级主题
            </p>
          </div>
          
          <!-- 活动订阅列表 -->
          <div class="mb-3">
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              活动订阅 ({{ activeSubscriptions.length }})
            </div>
            <div v-if="activeSubscriptions.length === 0" class="text-sm text-gray-500 dark:text-gray-400">
              尚未订阅任何主题
            </div>
            <div 
              v-for="(sub, index) in activeSubscriptions" 
              :key="`sub-${index}`"
              class="flex items-center justify-between py-1 border-b border-gray-200 dark:border-gray-700 last:border-0"
            >
              <div class="text-sm">
                <span class="font-mono text-primary dark:text-primary-light">{{ sub }}</span>
              </div>
              <button 
                @click="unsubscribe(sub)" 
                class="text-xs text-red-500 hover:text-red-700"
              >
                取消订阅
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 接收到的消息 -->
      <div class="mt-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">接收的消息</h3>
          <button 
            @click="clearMessages" 
            class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            清空记录
          </button>
        </div>
        
        <div v-if="receivedMessages.length === 0" class="text-center py-10 text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <p>订阅主题并等待消息...</p>
        </div>
        
        <div v-else class="max-h-96 overflow-auto">
          <div 
            v-for="(msg, index) in receivedMessages" 
            :key="`msg-${index}`"
            class="mb-3 p-3 border border-gray-200 dark:border-gray-700 rounded-md"
          >
            <div class="flex justify-between mb-1">
              <div class="text-sm font-medium text-primary dark:text-primary-light font-mono">
                {{ msg.topic }}
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                {{ formatTime(msg.timestamp) }}
              </div>
            </div>
            <div class="p-2 bg-gray-50 dark:bg-gray-900 rounded font-mono text-sm overflow-x-auto">
              <pre class="whitespace-pre-wrap">{{ formatMessageContent(msg.payload) }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- MQTT指南 -->
    <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">MQTT指南</h3>
      <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
        <p>MQTT是一种轻量级的消息传输协议，基于发布/订阅模式，特别适用于IoT应用场景。</p>
        
        <div class="mt-2">
          <h4 class="font-medium text-gray-700 dark:text-gray-300">公共MQTT Broker:</h4>
          <ul class="list-disc pl-5 mt-1">
            <li>EMQ X: mqtt://broker.emqx.io (端口: 1883) / ws://broker.emqx.io:8083/mqtt</li>
            <li>Eclipse Mosquitto: mqtt://test.mosquitto.org (端口: 1883)</li>
            <li>HiveMQ: mqtt://broker.hivemq.com (端口: 1883)</li>
          </ul>
        </div>
        
        <div class="mt-2">
          <h4 class="font-medium text-gray-700 dark:text-gray-300">主题通配符:</h4>
          <ul class="list-disc pl-5 mt-1">
            <li><code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">#</code> - 匹配多级主题，例如 <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">home/#</code> 匹配 home/livingroom, home/kitchen/temp 等</li>
            <li><code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">+</code> - 匹配单级主题，例如 <code class="bg-gray-100 dark:bg-gray-700 px-1 rounded">home/+/temp</code> 匹配 home/livingroom/temp 但不匹配 home/livingroom/sensor/temp</li>
          </ul>
        </div>
        
        <div class="mt-2">
          <h4 class="font-medium text-gray-700 dark:text-gray-300">QoS (服务质量):</h4>
          <ul class="list-disc pl-5 mt-1">
            <li><strong>QoS 0</strong>: 最多传递一次，可能丢失消息</li>
            <li><strong>QoS 1</strong>: 至少传递一次，可能重复</li>
            <li><strong>QoS 2</strong>: 只传递一次，保证消息仅被接收一次</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// MQTT客户端
let mqttClient = null

// 连接设置
const brokerUrl = ref('ws://broker.emqx.io')
const port = ref(8083)
const clientId = ref('')
const mqttVersion = ref('4')
const useAuth = ref(false)
const username = ref('')
const password = ref('')
const useTls = ref(false)

// 连接状态
const connected = ref(false)
const connecting = ref(false)
const connectionError = ref('')

// 发布消息设置
const publishTopic = ref('')
const publishQos = ref(0)
const publishMessageContent = ref('')
const retain = ref(false)
const publishing = ref(false)

// 订阅设置
const subscribeTopic = ref('')
const activeSubscriptions = ref([])
const subscriptionLoading = ref(false)

// 接收到的消息
const receivedMessages = ref([])

// 加载MQTT.js库
function loadMqttLibrary() {
  return new Promise((resolve, reject) => {
    if (window.mqtt) {
      resolve(window.mqtt)
      return
    }
    
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/mqtt/dist/mqtt.min.js'
    script.onload = () => resolve(window.mqtt)
    script.onerror = () => reject(new Error('无法加载MQTT.js库'))
    document.head.appendChild(script)
  })
}

// 生成随机客户端ID
function generateClientId() {
  clientId.value = 'mqtt_' + Math.random().toString(16).substring(2, 10)
}

// 连接到MQTT Broker
async function connect() {
  if (connecting.value) return
  
  connecting.value = true
  connectionError.value = ''
  connected.value = false
  
  try {
    // 加载MQTT库
    const mqtt = await loadMqttLibrary()
    
    // 构建连接URL
    let url = brokerUrl.value
    if (!url.startsWith('mqtt://') && !url.startsWith('ws://') && !url.startsWith('mqtts://') && !url.startsWith('wss://')) {
      url = 'mqtt://' + url
    }
    
    // 如果是WebSocket连接，确保URL末尾有/mqtt路径
    if (url.startsWith('ws://') || url.startsWith('wss://')) {
      if (!url.endsWith('/mqtt')) {
        url = url + '/mqtt'
      }
    }
    
    // 若指定了端口，添加到URL
    if (port.value && !url.includes(':' + port.value)) {
      const urlObj = new URL(url)
      urlObj.port = port.value
      url = urlObj.toString()
    }
    
    // 连接选项
    const options = {
      clientId: clientId.value || `mqtt_${Math.random().toString(16).substring(2, 10)}`,
      protocolVersion: parseInt(mqttVersion.value),
      clean: true,
      reconnectPeriod: 0, // 不自动重连
    }
    
    // 添加认证信息
    if (useAuth.value && username.value) {
      options.username = username.value
      options.password = password.value
    }
    
    // 连接到Broker
    mqttClient = mqtt.connect(url, options)
    
    // 设置事件监听器
    mqttClient.on('connect', () => {
      connected.value = true
      connecting.value = false
      console.log('已连接到MQTT Broker')
    })
    
    // 设置连接超时
    const connectionTimeout = setTimeout(() => {
      if (!connected.value) {
        connectionError.value = '连接超时，请检查Broker地址和端口是否正确'
        connecting.value = false
        disconnect()
      }
    }, 10000) // 10秒超时

    mqttClient.on('error', (err) => {
      clearTimeout(connectionTimeout)
      console.error('MQTT连接错误:', err)
      let errorMsg = err.message
      if (err.code === 'ECONNREFUSED') {
        errorMsg = '连接被拒绝，请检查Broker地址和端口是否正确'
      } else if (err.code === 'ENOTFOUND') {
        errorMsg = '无法解析Broker地址，请检查地址是否正确'
      } else if (err.code === 'ECONNABORTED') {
        errorMsg = '连接中断，可能是网络不稳定或Broker不可用'
      } else if (err.code === 'CERT_HAS_EXPIRED') {
        errorMsg = 'SSL证书已过期，请检查证书是否有效'
      } else if (err.code === 'UNABLE_TO_VERIFY_LEAF_SIGNATURE') {
        errorMsg = 'SSL证书验证失败，请检查证书配置'
      } else if (err.message.includes('Unexpected server response')) {
        errorMsg = '服务器响应异常，可能是WebSocket端口配置错误'
      }
      connectionError.value = errorMsg
      connecting.value = false
      connected.value = false
      disconnect()
    })
    
    mqttClient.on('close', () => {
      console.log('MQTT连接已关闭')
      connected.value = false
      connecting.value = false
    })
    
    mqttClient.on('message', (topic, payload, packet) => {
      console.log('收到消息:', topic, payload.toString())
      receivedMessages.value.unshift({
        topic,
        payload: payload.toString(),
        qos: packet.qos,
        retain: packet.retain,
        timestamp: new Date()
      })
    })
    
  } catch (error) {
    console.error('连接失败:', error)
    connectionError.value = error.message
    connecting.value = false
  }
}

// 断开MQTT连接
function disconnect() {
  if (mqttClient) {
    mqttClient.end(true)
    mqttClient = null
  }
  connected.value = false
  connecting.value = false
  activeSubscriptions.value = []
}

// 发布消息
function publishMessage() {
  if (!connected.value || !mqttClient || !publishTopic.value) return
  
  publishing.value = true
  
  try {
    mqttClient.publish(
      publishTopic.value, 
      publishMessageContent.value, 
      { 
        qos: publishQos.value, 
        retain: retain.value 
      }, 
      (err) => {
        publishing.value = false
        if (err) {
          console.error('发布失败:', err)
          alert('发布失败: ' + err.message)
        } else {
          console.log('消息已发布')
          // 清空消息框(可选)
          // publishMessageContent.value = ''
        }
      }
    )
  } catch (error) {
    publishing.value = false
    console.error('发布错误:', error)
    alert('发布错误: ' + error.message)
  }
}

// 订阅主题
function subscribe() {
  if (!connected.value || !mqttClient || !subscribeTopic.value) return
  
  // 检查是否已订阅
  if (activeSubscriptions.value.includes(subscribeTopic.value)) {
    alert('已经订阅了该主题')
    return
  }
  
  subscriptionLoading.value = true
  
  mqttClient.subscribe(subscribeTopic.value, { qos: 0 }, (err) => {
    subscriptionLoading.value = false
    if (err) {
      console.error('订阅失败:', err)
      alert('订阅失败: ' + err.message)
    } else {
      console.log('已订阅:', subscribeTopic.value)
      activeSubscriptions.value.push(subscribeTopic.value)
      // 清空订阅输入框
      subscribeTopic.value = ''
    }
  })
}

// 取消订阅
function unsubscribe(topic) {
  if (!connected.value || !mqttClient) return
  
  mqttClient.unsubscribe(topic, (err) => {
    if (err) {
      console.error('取消订阅失败:', err)
      alert('取消订阅失败: ' + err.message)
    } else {
      console.log('已取消订阅:', topic)
      activeSubscriptions.value = activeSubscriptions.value.filter(t => t !== topic)
    }
  })
}

// 清空消息记录
function clearMessages() {
  receivedMessages.value = []
}

// 格式化时间
function formatTime(timestamp) {
  if (!timestamp) return ''
  
  const date = new Date(timestamp)
  return date.toLocaleTimeString() + '.' + date.getMilliseconds().toString().padStart(3, '0')
}

// 格式化消息内容
function formatMessageContent(content) {
  if (!content) return ''
  
  // 尝试解析JSON
  try {
    const parsed = JSON.parse(content)
    return JSON.stringify(parsed, null, 2)
  } catch (e) {
    return content
  }
}

// 组件卸载时断开连接
onUnmounted(() => {
  disconnect()
})

// 初始化时生成一个随机客户端ID
onMounted(() => {
  generateClientId()
})
</script>