<template>
  <div>
    <!-- 配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">Mock API 配置</h3>
      
      <!-- API 基础配置 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            响应类型
          </label>
          <select 
            v-model="apiConfig.responseType" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="object">单个对象</option>
            <option value="array">对象数组</option>
            <option value="custom">自定义结构</option>
          </select>
        </div>
        
        <div v-if="apiConfig.responseType === 'array'">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            数组长度
          </label>
          <input 
            type="number" 
            v-model.number="apiConfig.arrayLength" 
            min="1" 
            max="100" 
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
        </div>
      </div>
      
      <!-- 字段配置 -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            字段定义
          </label>
          <button 
            @click="addField" 
            class="text-sm text-primary dark:text-primary-light hover:underline flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            添加字段
          </button>
        </div>
        
        <!-- 字段列表 -->
        <div class="space-y-3">
          <div 
            v-for="(field, index) in apiConfig.fields" 
            :key="index"
            class="flex space-x-2 items-start bg-gray-50 dark:bg-gray-700 p-3 rounded-md"
          >
            <div class="flex-1">
              <input 
                v-model="field.name" 
                placeholder="字段名" 
                class="w-full mb-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              />
              
              <div class="flex space-x-2">
                <select 
                  v-model="field.type" 
                  class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
                
                <!-- 针对不同类型的额外选项 -->
                <input 
                  v-if="field.type === 'string'" 
                  v-model="field.options.minLength" 
                  type="number" 
                  placeholder="最小长度" 
                  class="w-20 px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
                <input 
                  v-if="field.type === 'string'" 
                  v-model="field.options.maxLength" 
                  type="number" 
                  placeholder="最大长度" 
                  class="w-20 px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
                <input 
                  v-if="field.type === 'number'" 
                  v-model="field.options.min" 
                  type="number" 
                  placeholder="最小值" 
                  class="w-20 px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
                <input 
                  v-if="field.type === 'number'" 
                  v-model="field.options.max" 
                  type="number" 
                  placeholder="最大值" 
                  class="w-20 px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
                <select 
                  v-if="field.type === 'array'" 
                  v-model="field.options.itemType" 
                  class="w-28 px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <option value="string">字符串</option>
                  <option value="number">数字</option>
                  <option value="boolean">布尔值</option>
                  <option value="object">对象</option>
                </select>
                <input 
                  v-if="field.type === 'array'" 
                  v-model="field.options.length" 
                  type="number" 
                  placeholder="长度" 
                  class="w-20 px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
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
      </div>
      
      <!-- 响应格式 -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          响应格式
        </label>
        <select 
          v-model="apiConfig.wrapResponse" 
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          <option :value="false">仅数据</option>
          <option :value="true">标准REST响应 (code, data, message)</option>
        </select>
      </div>
    </div>
    
    <!-- 生成按钮 -->
    <div class="flex space-x-3 mb-6">
      <button 
        @click="generateMockData" 
        class="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark"
      >
        生成Mock数据
      </button>
      
      <button 
        @click="clearFields" 
        class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        清空
      </button>
    </div>
    
    <!-- 输出结果 -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
          生成结果
        </label>
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
      
      <div class="relative">
        <pre class="w-full h-80 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono overflow-auto"><code>{{ formattedOutput }}</code></pre>
      </div>
    </div>
    
    <!-- 复制成功提示 -->
    <div v-if="copyStatus" class="fixed right-4 bottom-4 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-4 py-2 rounded-md shadow-md">
      已复制到剪贴板
    </div>
    
    <!-- 使用说明 -->
    <div class="bg-gray-50 dark:bg-gray-800 rounded-md p-4 text-sm text-gray-700 dark:text-gray-300">
      <h3 class="font-medium mb-2">使用说明</h3>
      <p class="mb-2">此工具可以生成模拟API响应数据，帮助前端开发者在后端API尚未完成时进行开发和测试。</p>
      <ul class="list-disc pl-5 mb-2">
        <li>添加多个字段来定义数据结构</li>
        <li>为每个字段选择适当的数据类型</li>
        <li>设置数字范围、字符串长度等选项</li>
        <li>生成的数据可以直接用于模拟API响应</li>
      </ul>
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
  fields: [
    {
      name: 'id',
      type: 'id',
      options: {}
    },
    {
      name: 'name',
      type: 'name',
      options: {}
    },
    {
      name: 'email',
      type: 'email',
      options: {}
    }
  ]
})

const mockData = ref('')
const isFormatted = ref(false)
const copyStatus = ref(false)

// 添加字段
function addField() {
  apiConfig.fields.push({
    name: '',
    type: 'string',
    options: {
      minLength: 5,
      maxLength: 20
    }
  })
}

// 移除字段
function removeField(index) {
  apiConfig.fields.splice(index, 1)
}

// 清空所有字段
function clearFields() {
  apiConfig.fields = []
  mockData.value = ''
}

// 生成随机字符串
function generateRandomString(minLength = 5, maxLength = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength
  let result = ''
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  
  return result
}

// 生成随机数字
function generateRandomNumber(min = 0, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min
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
  const { type, options } = field
  
  switch (type) {
    case 'string':
      return generateRandomString(options.minLength || 5, options.maxLength || 20)
    case 'number':
      return generateRandomNumber(options.min || 0, options.max || 1000)
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
      const arrayLength = options.length || 3
      const itemType = options.itemType || 'string'
      
      return Array.from({ length: arrayLength }, () => {
        if (itemType === 'string') return generateRandomString()
        if (itemType === 'number') return generateRandomNumber()
        if (itemType === 'boolean') return generateRandomBoolean()
        
        // 对象数组
        if (itemType === 'object') {
          return {
            id: generateRandomId(),
            name: generateRandomName()
          }
        }
        
        return null
      })
    case 'object':
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
</script> 