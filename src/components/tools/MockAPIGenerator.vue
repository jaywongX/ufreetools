<template>
  <div>
    <!-- 配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">Mock API 配置</h3>
      
      <!-- Java类上传区域 -->
      <div class="mb-4 p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md">
        <div class="text-center">
          <input
            type="file"
            ref="fileInput"
            @change="handleFileUpload"
            accept=".java"
            class="hidden"
          />
          <div class="flex flex-col items-center justify-center">
            <button
              @click="$refs.fileInput.click()"
              class="mb-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark flex items-center text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              上传Java类文件
            </button>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">
              支持上传 .java 文件，自动解析类结构生成Mock配置 暂未支持多层对象属性
            </p>
            <p v-if="uploadedFileName" class="text-xs text-green-600 dark:text-green-400 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              已上传: {{ uploadedFileName }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- 主要内容区域 - 两列布局 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- 左列：配置区域 -->
        <div class="flex flex-col h-[450px] overflow-hidden">
          <!-- 字段配置 -->
          <div class="flex justify-between items-center mb-2 flex-shrink-0">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              字段定义
            </label>
            <button 
              @click="() => addField()" 
              class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              添加字段
            </button>
          </div>
          
          <!-- 字段列表 -->
          <div class="flex-1 overflow-hidden min-h-0">
            <div class="h-full overflow-y-auto">
              <div class="space-y-3 p-1">
                <template v-for="(field, index) in apiConfig.fields" :key="index">
                  <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                    <div class="flex space-x-2 items-start">
                      <div class="flex-1">
                        <div class="flex space-x-2">
                          <input 
                            v-model="field.name" 
                            placeholder="字段名" 
                            class="w-1/2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                          />
                          
                          <select 
                            v-model="field.type" 
                            class="w-1/2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                          >
                            <option value="string">字符串</option>
                            <option value="number">数字</option>
                            <option value="boolean">布尔值</option>
                            <option value="date">日期</option>
                            <option value="name">姓名</option>
                            <option value="email">邮箱</option>
                            <option value="phone">电话</option>
                            <option value="address">地址</option>
                            <option value="id">ID</option>
                            <option value="image">图片URL</option>
                            <option value="array">数组</option>
                            <option value="object">对象</option>
                          </select>
                        </div>
                        
                        <!-- 数组类型的配置 -->
                        <div v-if="field.type === 'array'" class="mt-2 ml-4 space-y-2">
                          <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-600 dark:text-gray-400">数组项类型</span>
                            <select 
                              v-model="field.itemType" 
                              class="w-1/2 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                            >
                              <option value="string">字符串</option>
                              <option value="number">数字</option>
                              <option value="boolean">布尔值</option>
                              <option value="date">日期</option>
                              <option value="name">姓名</option>
                              <option value="email">邮箱</option>
                              <option value="phone">电话</option>
                              <option value="address">地址</option>
                              <option value="id">ID</option>
                              <option value="image">图片URL</option>
                              <option value="object">对象</option>
                            </select>
                          </div>
                          
                          <!-- 对象数组的子字段配置 -->
                          <div v-if="field.itemType === 'object'" class="mt-2">
                            <div class="flex justify-between items-center">
                              <span class="text-sm text-gray-600 dark:text-gray-400">数组项字段</span>
                              <button 
                                @click="addField(field)"
                                class="text-xs text-primary dark:text-primary-light hover:underline flex items-center"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                </svg>
                                添加字段
                              </button>
                            </div>
                            
                            <!-- 递归渲染数组项的子字段 -->
                            <div v-for="(subField, subIndex) in field.fields" :key="subIndex" class="mt-2 flex space-x-2 items-start">
                              <div class="flex-1">
                                <div class="flex space-x-2">
                                  <input 
                                    v-model="subField.name" 
                                    placeholder="字段名" 
                                    class="w-1/2 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                  />
                                  
                                  <select 
                                    v-model="subField.type" 
                                    class="w-1/2 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                  >
                                    <option value="string">字符串</option>
                                    <option value="number">数字</option>
                                    <option value="boolean">布尔值</option>
                                    <option value="date">日期</option>
                                    <option value="name">姓名</option>
                                    <option value="email">邮箱</option>
                                    <option value="phone">电话</option>
                                    <option value="address">地址</option>
                                    <option value="id">ID</option>
                                    <option value="image">图片URL</option>
                                    <option value="array">数组</option>
                                    <option value="object">对象</option>
                                  </select>
                                </div>
                              </div>
                              
                              <button 
                                @click="removeField(subIndex, field.fields)" 
                                class="p-1 text-red-500 hover:text-red-700"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <!-- 对象类型的子字段 -->
                        <div v-if="field.type === 'object'" class="mt-2 ml-4 space-y-2">
                          <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-600 dark:text-gray-400">子字段</span>
                            <button 
                              @click="addField(field)"
                              class="text-xs text-primary dark:text-primary-light hover:underline flex items-center"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                              添加子字段
                            </button>
                          </div>
                          
                          <!-- 递归渲染子字段 -->
                          <div v-for="(subField, subIndex) in field.fields" :key="subIndex" class="flex space-x-2 items-start">
                            <div class="flex-1">
                              <div class="flex space-x-2">
                                <input 
                                  v-model="subField.name" 
                                  placeholder="字段名" 
                                  class="w-1/2 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                />
                                
                                <select 
                                  v-model="subField.type" 
                                  class="w-1/2 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                >
                                  <option value="string">字符串</option>
                                  <option value="number">数字</option>
                                  <option value="boolean">布尔值</option>
                                  <option value="date">日期</option>
                                  <option value="name">姓名</option>
                                  <option value="email">邮箱</option>
                                  <option value="phone">电话</option>
                                  <option value="address">地址</option>
                                  <option value="id">ID</option>
                                  <option value="image">图片URL</option>
                                  <option value="array">数组</option>
                                  <option value="object">对象</option>
                                </select>
                              </div>
                            </div>
                            
                            <button 
                              @click="removeField(subIndex, field.fields)" 
                              class="p-1 text-red-500 hover:text-red-700"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        @click="removeField(index)" 
                        class="p-2 text-red-500 hover:text-red-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- 右列：输出结果 -->
        <div class="h-[450px] flex flex-col overflow-hidden">
          <!-- API 基础配置 -->
          <div class="h-[80px] grid grid-cols-1 gap-4">
            <div class="flex space-x-4">
              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  响应类型
                </label>
                <select 
                  v-model="apiConfig.responseType" 
                  class="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <option value="object">单个对象</option>
                  <option value="array">对象数组</option>
                  <option value="custom">自定义结构</option>
                </select>
              </div>
              
              <div class="flex-1" v-if="apiConfig.responseType === 'array'">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  数组长度
                </label>
                <input 
                  type="number" 
                  v-model.number="apiConfig.arrayLength" 
                  min="1" 
                  max="100" 
                  class="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
              </div>

              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  响应格式
                </label>
                <select 
                  v-model="apiConfig.wrapResponse" 
                  class="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <option :value="false">仅数据</option>
                  <option :value="true">标准REST响应 (code, data, message)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- 工具栏 -->
          <div class="flex justify-between items-center mb-2">
            <div class="flex items-center space-x-4">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              </label>
              <!-- 生成和清空按钮 -->
              <button 
                @click="generateMockData" 
                class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                生成JSON
              </button>

              <button 
                @click="generateBuilder" 
                class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                生成Builder
              </button>
              
              <button 
                @click="clearFields" 
                class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                清空
              </button>
            </div>

            <div class="flex space-x-2">
              <button 
                v-if="mockData"
                @click="formatOutput" 
                class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                美化
              </button>
              <button 
                v-if="mockData"
                @click="copyToClipboard(mockData)" 
                class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                复制
              </button>
            </div>
          </div>
          
          <!-- 输出区域 -->
          <div class="flex-1 relative min-h-0">
            <pre class="w-full h-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono overflow-auto"><code>{{ formattedOutput }}</code></pre>
          </div>
        </div>
      </div>

      <!-- 复制成功提示 -->
      <div v-if="copyStatus" class="fixed right-4 bottom-4 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-4 py-2 rounded-md shadow-md">
        已复制到剪贴板
      </div>

      <!-- 修改：居中显示的Toast提示组件 -->
      <div v-if="showToast" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out">
          {{ toastMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

// API配置
const apiConfig = reactive({
  responseType: 'object',
  arrayLength: 10,
  wrapResponse: false,
  fields: []  // 主字段数组
})

// 新增：Toast提示状态
const toastMessage = ref('')
const showToast = ref(false)

// 新增：显示Toast提示的函数
function showToastMessage(message) {
  toastMessage.value = message
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const mockData = ref('')
const builderCode = ref('')  // 新增：存储生成的Builder代码
const isFormatted = ref(false)
const copyStatus = ref(false)

// 新增的响应式变量
const fileInput = ref(null)
const uploadedFileName = ref('')

// 添加字段
function addField(parentField = null) {
  console.log('Adding field', parentField) // 添加日志
  const newField = {
    name: '',
    type: 'string',
    fields: [],
    itemType: 'string' // 新增：数组项的类型
  }
  
  if (parentField) {
    if (!Array.isArray(parentField.fields)) {
      parentField.fields = []
    }
    parentField.fields.push(newField)
  } else {
    if (!Array.isArray(apiConfig.fields)) {
      apiConfig.fields = []
    }
    apiConfig.fields.push(newField)
  }
}

// 移除字段
function removeField(index, parentFields = apiConfig.fields) {
  parentFields.splice(index, 1)
}

// 清空所有字段
function clearFields() {
  apiConfig.fields = []
  mockData.value = ''
  uploadedFileName.value = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
  apiConfig.responseType = 'object'
  apiConfig.arrayLength = 10
  apiConfig.wrapResponse = false
}

// 生成随机字符串
function generateRandomString() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const length = Math.floor(Math.random() * 10) + 5  // 5-15个字符
  let result = ''
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  
  return result
}

// 生成随机数字
function generateRandomNumber() {
  return Math.floor(Math.random() * 1000)
}

// 生成随机布尔值
function generateRandomBoolean() {
  return Math.random() > 0.5
}

// 生成随机日期
function generateRandomDate(start = new Date(2000, 0, 1), end = new Date()) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString()
}

// 生成随机姓名
function generateRandomName() {
  const firstNames = ['张', '王', '李', '赵', '刘', '陈', '杨', '黄', '周', '吴', 'John', 'Jane', 'David', 'Sarah', 'Michael', 'Emma']
  const lastNames = ['伟', '芳', '娜', '静', '秀英', '敏', '强', '磊', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller']
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  
  return `${firstName}${lastName}`
}

// 生成随机邮箱
function generateRandomEmail() {
  const names = ['john', 'jane', 'david', 'sarah', 'michael', 'emma', 'user', 'test', 'admin', 'dev']
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com', 'company.com']
  
  const name = names[Math.floor(Math.random() * names.length)]
  const domain = domains[Math.floor(Math.random() * domains.length)]
  const num = Math.floor(Math.random() * 1000)
  
  return `${name}${num}@${domain}`
}

// 生成随机电话号码
function generateRandomPhone() {
  const prefixes = ['138', '139', '188', '187', '159', '158', '186', '183', '135', '134', '150', '151']
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
  let number = ''
  
  for (let i = 0; i < 8; i++) {
    number += Math.floor(Math.random() * 10)
  }
  
  return `${prefix}${number}`
}

// 生成随机地址
function generateRandomAddress() {
  const cities = ['北京市', '上海市', '广州市', '深圳市', '杭州市', '南京市', '成都市', '武汉市', '西安市', '重庆市']
  const districts = ['海淀区', '朝阳区', '浦东新区', '黄浦区', '天河区', '福田区', '西湖区', '江干区', '鼓楼区', '武侯区']
  const streets = ['中关村大街', '长安街', '南京路', '解放路', '人民路', '天目山路', '东风大道', '凤凰路', '西二环路', '建国路']
  
  const city = cities[Math.floor(Math.random() * cities.length)]
  const district = districts[Math.floor(Math.random() * districts.length)]
  const street = streets[Math.floor(Math.random() * streets.length)]
  const number = Math.floor(Math.random() * 1000) + 1
  
  return `${city}${district}${street}${number}号`
}

// 生成随机图片URL
function generateRandomImageUrl() {
  const width = Math.floor(Math.random() * 200) + 100
  const height = Math.floor(Math.random() * 200) + 100
  return `https://picsum.photos/${width}/${height}`
}

// 生成随机ID
function generateRandomId() {
  return Math.floor(Math.random() * 10000)
}

// 根据字段类型生成对应的随机值
function generateValueByFieldType(field) {
  const { type, fields } = field
  
  switch (type) {
    case 'string':
      return generateRandomString()
    case 'number':
      return generateRandomNumber()
    case 'boolean':
      return generateRandomBoolean()
    case 'date':
      return generateRandomDate()
    case 'name':
      return generateRandomName()
    case 'email':
      return generateRandomEmail()
    case 'phone':
      return generateRandomPhone()
    case 'address':
      return generateRandomAddress()
    case 'id':
      return generateRandomId()
    case 'image':
      return generateRandomImageUrl()
    case 'array':
      // 如果是对象数组，则递归生成对象
      if (field.itemType === 'object' && field.fields && field.fields.length > 0) {
        return Array.from({ length: 3 }, () => {
          const obj = {}
          for (const subField of field.fields) {
            if (subField.name) {
              obj[subField.name] = generateValueByFieldType(subField)
            }
          }
          return obj
        })
      }
      return Array.from({ length: 3 }, () => generateRandomString())
    case 'object':
      if (fields && fields.length > 0) {
        const obj = {}
        for (const subField of fields) {
          if (subField.name) {
            obj[subField.name] = generateValueByFieldType(subField)
          }
        }
        return obj
      }
      return {
        id: generateRandomId(),
        name: generateRandomName(),
        email: generateRandomEmail()
      }
    default:
      return null
  }
}

// 生成单个对象
function generateSingleObject() {
  const obj = {}
  
  for (const field of apiConfig.fields) {
    if (field.name) {
      obj[field.name] = generateValueByFieldType(field)
    }
  }
  
  return obj
}

// 生成Mock数据
function generateMockData() {
  let data
  
  if (apiConfig.responseType === 'object') {
    data = generateSingleObject()
  } else if (apiConfig.responseType === 'array') {
    data = Array.from({ length: apiConfig.arrayLength }, () => generateSingleObject())
  } else if (apiConfig.responseType === 'custom') {
    // 自定义结构
    data = {
      meta: {
        totalCount: apiConfig.arrayLength,
        page: 1,
        pageSize: apiConfig.arrayLength
      },
      items: Array.from({ length: apiConfig.arrayLength }, () => generateSingleObject())
    }
  }
  
  // 是否包装响应
  if (apiConfig.wrapResponse) {
    data = {
      code: 200,
      message: "操作成功",
      data: data
    }
  }
  
  mockData.value = JSON.stringify(data)
  isFormatted.value = false
}

// 格式化输出
function formatOutput() {
  if (mockData.value) {
    try {
      const data = JSON.parse(mockData.value)
      mockData.value = JSON.stringify(data, null, 2)
      isFormatted.value = true
    } catch (error) {
      console.error('无法格式化JSON:', error)
    }
  }
}

// 处理展示格式
const formattedOutput = computed(() => {
  if (!mockData.value) {
    return '// 生成的Mock数据将显示在这里'
  }
  
  if (isFormatted.value) {
    return mockData.value
  }
  
  try {
    const data = JSON.parse(mockData.value)
    return JSON.stringify(data, null, 2)
  } catch {
    return mockData.value
  }
})

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

// 处理文件上传
async function handleFileUpload(event) {
  const file = event.target.files[0]
  if (!file) return
  
  uploadedFileName.value = file.name
  
  try {
    const content = await file.text()
    const fields = parseJavaClass(content)
    
    apiConfig.fields = fields.map(field => ({
      name: field.name,
      type: mapJavaTypeToMockType(field.type),
      fields: [],
      itemType: 'string',
      options: getDefaultOptionsForType(field.type)
    }))
    
  } catch (error) {
    console.error('解析Java类失败:', error)
    showToastMessage('解析Java类失败，请确保文件格式正确')
  } finally {
    if (fileInput.value) {
      fileInput.value.value = ''
    }
  }
}

// 解析Java类内容
function parseJavaClass(content) {
  const fields = []
  
  // 移除注释
  content = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
  
  // 查找类定义（支持更多格式）
  const classMatch = content.match(/(?:public\s+|private\s+|protected\s+)?(?:abstract\s+)?class\s+(\w+)(?:\s+extends\s+\w+)?(?:\s+implements\s+[\w,\s]+)?\s*{/)
  if (!classMatch) {
    throw new Error('未找到有效的Java类定义，请确保文件包含正确的class声明')
  }
  
  // 提取字段定义（支持更多格式）
  const fieldRegex = /(?:private|protected)\s+(?:final\s+)?([A-Za-z0-9<>[\],\s\.]+)\s+(\w+)(?:\s*=\s*[^;]+)?;/g
  let match
  
  while ((match = fieldRegex.exec(content)) !== null) {
    const type = match[1].trim()
    const name = match[2]
    
    // 处理泛型类型
    let processedType = type
    if (type.includes('<')) {
      const genericMatch = type.match(/(\w+)\s*<(.+)>/)
      if (genericMatch) {
        processedType = genericMatch[1]
      }
    }
    
    // 处理数组类型
    if (type.includes('[]')) {
      processedType = type.replace('[]', '')
      processedType = 'List'  // 将数组类型映射为List
    }
    
    // 处理完全限定类名
    processedType = processedType.split('.').pop()
    
    fields.push({
      name,
      type: processedType
    })
  }
  
  if (fields.length === 0) {
    throw new Error('未找到任何私有字段，请确保类中包含private或protected修饰的字段')
  }
  
  return fields
}

// 将Java类型映射到Mock类型
function mapJavaTypeToMockType(javaType) {
  const typeMap = {
    'String': 'string',
    'Integer': 'number',
    'int': 'number',
    'Long': 'number',
    'long': 'number',
    'Double': 'number',
    'double': 'number',
    'Float': 'number',
    'float': 'number',
    'Boolean': 'boolean',
    'boolean': 'boolean',
    'Date': 'date',
    'LocalDate': 'date',
    'LocalDateTime': 'date',
    'List': 'array',
    'Set': 'array',
    'Map': 'object',
    'BigDecimal': 'number',
    'Timestamp': 'date',
    'Character': 'string',
    'char': 'string',
    'byte[]': 'string',
    'Byte[]': 'string'
  }
  
  return typeMap[javaType] || 'string'
}

// 根据类型获取默认选项
function getDefaultOptionsForType(type) {
  const defaultOptions = {
    string: { minLength: 5, maxLength: 20 },
    number: { min: 0, max: 1000 },
    array: { length: 3, itemType: 'string' },
    object: {}
  }
  
  return defaultOptions[mapJavaTypeToMockType(type)] || {}
}

// 生成Builder代码
function generateBuilder() {
  if (apiConfig.fields.length === 0) {
    return
  }

  const className = uploadedFileName.value ? uploadedFileName.value.replace('.java', '') : 'MockObject'
  let code = `// Builder模式使用示例\n`
  
  // 递归生成builder调用
  const generateBuilderCalls = (fields, prefix = '', innerClassName = className) => {
    let builderCode = `${innerClassName}.builder()\n`
    fields.forEach(field => {
      const value = generateValueByFieldType(field)
      if (field.type === 'object' && field.fields && field.fields.length > 0) {
        const childClassName = capitalizeFirstLetter(field.name)
        const childBuilderCalls = generateBuilderCalls(field.fields, prefix + '    ', childClassName)
        builderCode += `${prefix}.${field.name}(${childBuilderCalls})`
      } else {
        let valueStr = ''
        switch (field.type) {
          case 'string':
          case 'name':
          case 'email':
          case 'phone':
          case 'address':
          case 'image':
            valueStr = `"${value}"`
            break
          case 'date':
            valueStr = `new Date("${value}")`
            break
          case 'array':
            if (field.itemType === 'object' && Array.isArray(value) && value.length > 0) {
              // 处理对象数组
              const objectItems = value.map(item => {
                if (typeof item === 'object') {
                  // 使用Builder模式替代Map.of
                  const itemClassName = capitalizeFirstLetter(field.name.replace(/s$/, '')) // 尝试将复数形式转为单数
                  let builderStr = `${itemClassName}.builder()\n`
                  Object.entries(item).forEach(([k, v]) => {
                    if (typeof v === 'string') {
                      builderStr += `${prefix}        .${k}("${v}")\n`
                    } else {
                      builderStr += `${prefix}        .${k}(${v})\n`
                    }
                  })
                  builderStr += `${prefix}        .build()`
                  return builderStr
                }
                return `"${item}"`
              }).join(', ')
              valueStr = `Arrays.asList(${objectItems})`
            } else {
              // 处理基本类型数组
              valueStr = `Arrays.asList("${value.join('", "')}")`
            }
            break
          case 'object':
            // 使用Builder模式替代Map.of
            const objClassName = capitalizeFirstLetter(field.name)
            valueStr = `${objClassName}.builder()\n${prefix}    .id(${value.id})\n${prefix}    .name("${value.name}")\n${prefix}    .email("${value.email}")\n${prefix}    .build()`
            break
          default:
            valueStr = value
        }
        builderCode += `${prefix}.${field.name}(${valueStr})\n`
      }
    })
    return builderCode + `${prefix}.build()`
  }
  
  code += generateBuilderCalls(apiConfig.fields)
  
  mockData.value = code
  isFormatted.value = true
}

// 从Mock类型获取Java类型
function getJavaTypeFromMockType(mockType) {
  const typeMap = {
    'string': 'String',
    'number': 'Integer',
    'boolean': 'Boolean',
    'date': 'Date',
    'name': 'String',
    'email': 'String',
    'phone': 'String',
    'address': 'String',
    'id': 'Long',
    'image': 'String',
    'array': 'List<String>',
    'object': 'Map<String, Object>'
  }
  return typeMap[mockType] || 'Object'
}

// 首字母大写
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
</script>