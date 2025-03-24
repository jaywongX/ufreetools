<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.grpc-debugger.title') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.grpc-debugger.intro') }}
      </p>
      
      <!-- 连接设置 -->
      <div class="mb-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 服务URL -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.grpc-debugger.connection.serverUrl') }}
            </label>
            <input 
              v-model="serviceUrl" 
              type="text" 
              :placeholder="$t('tools.grpc-debugger.connection.serverUrlPlaceholder')"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {{ $t('tools.grpc-debugger.connection.corsNote') }}
            </p>
          </div>
          
          <!-- 超时设置 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.grpc-debugger.connection.timeoutMs') }}
            </label>
            <input 
              v-model="timeout" 
              type="number" 
              :placeholder="$t('tools.grpc-debugger.connection.timeoutPlaceholder')"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {{ $t('tools.grpc-debugger.connection.defaultTimeout') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Proto文件上传/输入 -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.grpc-debugger.service.protoDefinition') }}
          </label>
          <div class="flex space-x-2">
            <button 
              @click="toggleProtoInputMode" 
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ isFileUpload ? $t('tools.grpc-debugger.service.switchToText') : $t('tools.grpc-debugger.service.switchToFile') }}
            </button>
          </div>
        </div>
        
        <!-- 文件上传模式 -->
        <div v-if="isFileUpload" class="mb-2">
          <div 
            class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center cursor-pointer"
            :class="{ 'border-primary': isDragging }"
            @dragover.prevent="() => isDragging = true"
            @dragleave.prevent="() => isDragging = false"
            @drop.prevent="onProtoDrop"
            @click="triggerFileInput"
          >
            <input 
              type="file" 
              ref="protoFileInput" 
              class="hidden" 
              accept=".proto" 
              @change="onProtoFileChange"
            >
            
            <div v-if="!protoFile">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.grpc-debugger.service.dragDrop') }} <span class="text-primary">{{ $t('tools.grpc-debugger.service.clickUpload') }}</span></p>
              <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">{{ $t('tools.grpc-debugger.service.onlyProto') }}</p>
            </div>
            
            <div v-else class="text-left">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm text-gray-700 dark:text-gray-300">{{ protoFile.name }}</span>
                <button 
                  @click.stop="removeProtoFile" 
                  class="ml-2 text-red-500 hover:text-red-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 文本输入模式 -->
        <div v-else>
          <div class="relative">
            <textarea 
              v-model="protoContent" 
              class="w-full h-40 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
              placeholder="syntax = &quot;proto3&quot;;
              
package example;

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloResponse);
}

message HelloRequest {
  string name = 1;
}

message HelloResponse {
  string message = 1;
}"
            ></textarea>
            <button 
              v-if="protoContent" 
              @click="protoContent = ''" 
              class="absolute top-2 right-2 p-1 text-gray-500 hover:text-red-500"
              :title="$t('tools.grpc-debugger.service.clear')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div class="flex justify-end mt-2">
            <button 
              @click="loadSampleProto" 
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ $t('tools.grpc-debugger.service.loadExample') }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- 解析Proto按钮 -->
      <div class="flex justify-center">
        <button 
          @click="parseProtoDefinition" 
          class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          :disabled="parsing || (!protoFile && !protoContent)"
        >
          <span v-if="parsing">{{ $t('tools.grpc-debugger.service.parsing') }}</span>
          <span v-else>{{ $t('tools.grpc-debugger.service.parse') }}</span>
        </button>
      </div>
    </div>
    
    <!-- 服务和方法选择 (仅在解析成功后显示) -->
    <div v-if="services.length > 0" class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ $t('tools.grpc-debugger.service.selectService') }}
        </label>
        <select 
          v-model="selectedService" 
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          @change="onServiceChange"
        >
          <option value="">-- {{ $t('tools.grpc-debugger.service.selectService') }} --</option>
          <option v-for="service in services" :key="service.name" :value="service.name">
            {{ service.name }}
          </option>
        </select>
      </div>
      
      <!-- 方法选择 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {{ $t('tools.grpc-debugger.service.selectMethod') }}
        </label>
        <select 
          v-model="selectedMethod" 
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          @change="onMethodChange"
          :disabled="!selectedService"
        >
          <option value="">-- {{ $t('tools.grpc-debugger.service.selectMethod') }} --</option>
          <option v-for="method in availableMethods" :key="method.name" :value="method.name">
            {{ method.name }}
          </option>
        </select>
      </div>
    </div>
    
    <!-- 请求参数编辑 (仅在选择方法后显示) -->
    <div v-if="selectedMethod && requestSchema" class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
        {{ $t('tools.grpc-debugger.request.param') }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.grpc-debugger.request.edit') }}
        <span class="font-mono text-primary">{{ getSelectedMethodInputType() }}</span> 
        {{ $t('tools.grpc-debugger.request.param') }}
      </p>
      
      <!-- 动态生成的表单 -->
      <div class="mb-4">
        <div class="relative">
          <textarea 
            v-model="requestBody" 
            class="w-full h-60 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
            placeholder="{}"
          ></textarea>
          <button 
            @click="formatRequestBody" 
            class="absolute top-2 right-2 p-1 text-gray-500 hover:text-primary"
            :title="$t('tools.grpc-debugger.service.formatProto')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </button>
        </div>
        <p v-if="requestError" class="mt-1 text-xs text-red-500">{{ requestError }}</p>
      </div>
      
      <!-- 发送请求按钮 -->
      <div class="flex justify-center">
        <button 
          @click="sendGrpcRequest" 
          class="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          :disabled="sending"
        >
          <span v-if="sending">{{ $t('tools.grpc-debugger.request.sending') }}</span>
          <span v-else>{{ $t('tools.grpc-debugger.request.send') }}</span>
        </button>
      </div>
    </div>
    
    <!-- 响应结果 -->
    <div v-if="response || responseError" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">
          {{ responseError ? '请求错误' : '响应结果' }}
        </h3>
        <div v-if="response">
          <button 
            @click="copyResponse" 
            class="px-3 py-1 text-sm text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
            :title="$t('tools.grpc-debugger.messages.copied')"
          >
            {{ $t('tools.grpc-debugger.messages.copy') }}
          </button>
        </div>
      </div>
      
      <div v-if="responseError" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-md p-4 mb-4">
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-sm text-red-600 dark:text-red-400">{{ responseError }}</p>
        </div>
      </div>
      
      <div v-else-if="response" class="bg-gray-50 dark:bg-gray-750 rounded-md p-4 font-mono text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-200">
        {{ JSON.stringify(response, null, 2) }}
      </div>
      
      <!-- 请求信息 -->
      <div v-if="lastRequestTime" class="mt-4 text-xs text-gray-500 dark:text-gray-400">
        <div class="flex justify-between">
          <span>{{ $t('tools.grpc-debugger.request.time') }}: {{ lastRequestTime }}</span>
          <span>{{ $t('tools.grpc-debugger.response.time') }}: {{ responseTime }}ms</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from 'vue'
import * as protobuf from 'protobufjs'
import * as grpcWeb from 'grpc-web'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 状态变量
const serviceUrl = ref('https://demo.connect.build')
const timeout = ref(30000)
const isFileUpload = ref(true)
const isDragging = ref(false)
const protoFile = ref(null)
const protoContent = ref('')
const parsing = ref(false)
const services = ref([])
const messages = ref([])
const selectedService = ref('')
const selectedMethod = ref('')
const requestBody = ref('{}')
const requestError = ref('')
const sending = ref(false)
const response = ref(null)
const responseError = ref('')
const lastRequestTime = ref('')
const responseTime = ref(0)
const requestSchema = ref(null)

// DOM引用
const protoFileInput = ref(null)

// 计算属性
const availableMethods = computed(() => {
  if (!selectedService.value) return []
  
  const service = services.value.find(s => s.name === selectedService.value)
  return service ? service.methods : []
})

// 方法：文件上传处理
function triggerFileInput() {
  if (protoFileInput.value) {
    protoFileInput.value.click()
  }
}

function onProtoFileChange(event) {
  const files = event.target.files
  if (files.length > 0) {
    protoFile.value = files[0]
  }
}

function onProtoDrop(event) {
  isDragging.value = false
  
  const files = event.dataTransfer.files
  if (files.length > 0 && files[0].name.endsWith('.proto')) {
    protoFile.value = files[0]
  }
}

function removeProtoFile() {
  protoFile.value = null
  if (protoFileInput.value) {
    protoFileInput.value.value = ''
  }
}

// 方法：切换Proto输入模式
function toggleProtoInputMode() {
  isFileUpload.value = !isFileUpload.value
}

// 方法：加载示例Proto
function loadSampleProto() {
  protoContent.value = `syntax = "proto3";

package helloworld;

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply);
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}`
}

// 方法：解析Proto定义
async function parseProtoDefinition() {
  try {
    parsing.value = true
    requestError.value = ''
    responseError.value = ''
    response.value = null
    
    // 获取Proto内容，无论是从文件还是文本输入
    let content = ''
    if (isFileUpload.value && protoFile.value) {
      content = await readFileAsText(protoFile.value)
    } else {
      content = protoContent.value
    }
    
    if (!content) {
      throw new Error('Proto定义不能为空')
    }
    
    // 使用protobufjs解析Proto定义
    const root = protobuf.parse(content).root
    
    // 提取服务和消息定义
    const extractedServices = []
    const extractedMessages = []
    
    // 遍历所有嵌套命名空间和服务
    root.nestedArray.forEach(nested => {
      if (nested instanceof protobuf.Service) {
        // 发现服务定义
        const methods = []
        
        // 提取服务中的方法
        nested.methodsArray.forEach(method => {
          methods.push({
            name: method.name,
            requestType: method.requestType,
            responseType: method.responseType,
            requestStream: method.requestStream,
            responseStream: method.responseStream
          })
        })
        
        extractedServices.push({
          name: nested.fullName,
          methods: methods
        })
      } else if (nested instanceof protobuf.Type) {
        // 发现消息定义
        extractedMessages.push({
          name: nested.fullName,
          fields: nested.fieldsArray.map(field => ({
            name: field.name,
            type: field.type,
            id: field.id,
            repeated: field.repeated,
            required: field.required,
            defaultValue: field.defaultValue
          }))
        })
      }
    })
    
    // 更新状态
    services.value = extractedServices
    messages.value = extractedMessages
    
    // 重置选择
    selectedService.value = ''
    selectedMethod.value = ''
    requestBody.value = '{}'
    requestSchema.value = null
    
    console.log('解析成功:', { services: extractedServices, messages: extractedMessages })
  } catch (error) {
    console.error('解析Proto定义失败:', error)
    responseError.value = `解析Proto失败: ${error.message}`
  } finally {
    parsing.value = false
  }
}

// 方法：读取文件内容为文本
function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = e => resolve(e.target.result)
    reader.onerror = e => reject(new Error('读取文件失败'))
    reader.readAsText(file)
  })
}

// 方法：服务选择改变
function onServiceChange() {
  selectedMethod.value = ''
  requestBody.value = '{}'
  requestSchema.value = null
  response.value = null
  responseError.value = ''
}

// 方法：方法选择改变
function onMethodChange() {
  if (!selectedMethod.value) {
    requestSchema.value = null
    requestBody.value = '{}'
    return
  }
  
  try {
    // 找到当前选中的方法
    const service = services.value.find(s => s.name === selectedService.value)
    const method = service.methods.find(m => m.name === selectedMethod.value)
    
    // 找到对应的请求消息定义
    const requestType = method.requestType
    const requestMessage = messages.value.find(m => m.name === requestType)
    
    requestSchema.value = requestMessage
    
    // 生成示例请求JSON
    const exampleJson = {}
    if (requestMessage) {
      requestMessage.fields.forEach(field => {
        let defaultValue
        
        // 根据字段类型设置默认值
        switch (field.type) {
          case 'string':
            defaultValue = ''
            break
          case 'int32':
          case 'int64':
          case 'uint32':
          case 'uint64':
          case 'sint32':
          case 'sint64':
          case 'fixed32':
          case 'fixed64':
          case 'sfixed32':
          case 'sfixed64':
            defaultValue = 0
            break
          case 'float':
          case 'double':
            defaultValue = 0.0
            break
          case 'bool':
            defaultValue = false
            break
          default:
            defaultValue = null
        }
        
        // 处理重复字段
        if (field.repeated) {
          exampleJson[field.name] = []
        } else {
          exampleJson[field.name] = defaultValue
        }
      })
    }
    
    requestBody.value = JSON.stringify(exampleJson, null, 2)
  } catch (error) {
    console.error('生成请求表单失败:', error)
    requestError.value = `生成请求表单失败: ${error.message}`
  }
}

// 获取所选方法的输入类型
function getSelectedMethodInputType() {
  if (!selectedService.value || !selectedMethod.value) return ''
  
  const service = services.value.find(s => s.name === selectedService.value)
  if (!service) return ''
  
  const method = service.methods.find(m => m.name === selectedMethod.value)
  return method ? method.requestType : ''
}

// 方法：格式化请求体
function formatRequestBody() {
  try {
    const parsed = JSON.parse(requestBody.value)
    requestBody.value = JSON.stringify(parsed, null, 2)
    requestError.value = ''
  } catch (error) {
    requestError.value = '无效的JSON格式'
  }
}

// 方法：发送gRPC请求
async function sendGrpcRequest() {
  try {
    sending.value = true
    requestError.value = ''
    responseError.value = ''
    response.value = null
    
    // 验证输入
    if (!serviceUrl.value) {
      throw new Error(t('tools.grpc-debugger.messages.emptyUrl'))
    }
    
    if (!selectedService.value || !selectedMethod.value) {
      throw new Error(t('tools.grpc-debugger.messages.selectServiceMethod'))
    }
    
    // 解析请求体
    let requestData
    try {
      requestData = JSON.parse(requestBody.value)
    } catch (error) {
      throw new Error(t('tools.grpc-debugger.messages.invalidJson', { error: error.message }))
    }
    
    // 记录开始时间
    const startTime = Date.now()
    lastRequestTime.value = new Date().toLocaleString()
    
    // 模拟gRPC请求 (在实际应用中，这里应该使用grpc-web库发送真实请求)
    // 这里只是为了演示，实际实现需要使用protobufjs和grpc-web库
    // 动态生成并使用gRPC客户端
    
    // 模拟一个响应
    await new Promise(resolve => setTimeout(resolve, 700))
    
    // 计算响应时间
    responseTime.value = Date.now() - startTime
    
    // 设置模拟响应 (实际应用中应替换为真实响应)
    if (Math.random() > 0.2) { // 80%的成功率，用于演示
      const serviceName = selectedService.value.split('.').pop()
      const methodName = selectedMethod.value
      
      // 为一些常见的方法生成特定的响应
      if (methodName === 'SayHello' && requestData.name) {
        response.value = {
          message: `Hello, ${requestData.name}!`
        }
      } else if (methodName.startsWith('Get') && methodName.length > 3) {
        // 假设这是一个获取资源的方法
        const resourceName = methodName.substring(3)
        response.value = {
          id: Math.floor(Math.random() * 1000),
          name: resourceName,
          createdAt: new Date().toISOString()
        }
      } else if (methodName.startsWith('List') && methodName.length > 4) {
        // 假设这是一个列表资源的方法
        const resourceName = methodName.substring(4)
        response.value = {
          items: Array.from({ length: 3 }).map((_, i) => ({
            id: Math.floor(Math.random() * 1000) + i,
            name: `${resourceName} ${i + 1}`,
            createdAt: new Date().toISOString()
          })),
          nextPageToken: 'ABC123'
        }
      } else if (methodName.startsWith('Create') || methodName.startsWith('Update')) {
        // 假设这是一个创建或更新资源的方法
        response.value = {
          ...requestData,
          id: Math.floor(Math.random() * 1000),
          createdAt: new Date().toISOString()
        }
      } else {
        // 通用响应
        response.value = {
          success: true,
          timestamp: new Date().toISOString(),
          requestId: Math.random().toString(36).substring(2, 15)
        }
      }
    } else {
      // 模拟错误情况
      const errorCodes = [
        t('tools.grpc-debugger.errors.invalidArgument'),
        t('tools.grpc-debugger.errors.notFound'),
        t('tools.grpc-debugger.errors.alreadyExists'),
        t('tools.grpc-debugger.errors.permissionDenied'),
        t('tools.grpc-debugger.errors.internal')
      ]
      
      const errorCode = errorCodes[Math.floor(Math.random() * errorCodes.length)]
      responseError.value = `gRPC错误: ${errorCode}`
    }
  } catch (error) {
    console.error('发送gRPC请求失败:', error)
    responseError.value = t('tools.grpc-debugger.errors.requestFailed', { error: error.message })
  } finally {
    sending.value = false
  }
}

// 方法：复制响应
function copyResponse() {
  if (!response.value) return
  
  navigator.clipboard.writeText(JSON.stringify(response.value, null, 2))
    .then(() => {
      alert(t('tools.grpc-debugger.messages.copied'))
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert(t('tools.grpc-debugger.messages.copyFailed'))
    })
}

// 组件挂载
onMounted(() => {
  // 初始化...
})
</script>

<style scoped>
/* 可能需要一些自定义样式 */
</style> 