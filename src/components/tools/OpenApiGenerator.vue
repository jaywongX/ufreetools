<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ t('tools.openapi-generator.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ t('tools.openapi-generator.description') }}
      </p>
      
      <!-- 输入区域 -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            OpenAPI规范（JSON/YAML）
          </label>
          <div class="flex gap-2">
            <button 
              @click="toggleInputMode" 
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ isFileUpload ? t('tools.openapi-generator.inputMode.toggleToText') : t('tools.openapi-generator.inputMode.toggleToFile') }}
            </button>
            <button 
              @click="loadExample" 
              class="text-xs text-primary hover:text-primary-dark"
            >
              {{ t('tools.openapi-generator.inputMode.loadExample') }}
            </button>
          </div>
        </div>
        
        <!-- 文件上传 -->
        <div v-if="isFileUpload" class="mb-2">
          <div 
            class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center cursor-pointer"
            :class="{ 'border-primary': isDragging }"
            @dragover.prevent="() => isDragging = true"
            @dragleave.prevent="() => isDragging = false"
            @drop.prevent="handleFileDrop"
            @click="triggerFileInput"
          >
            <input 
              ref="fileInput"
              type="file" 
              accept=".json,.yaml,.yml"
              class="hidden"
              @change="handleFileChange"
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ t('tools.openapi-generator.fileUpload.dragAndDrop') }}
            </p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">
              {{ t('tools.openapi-generator.fileUpload.supportedFormats') }}
            </p>
          </div>
          <div v-if="selectedFile" class="mt-2 flex items-center text-sm text-gray-700 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            {{ t('tools.openapi-generator.fileUpload.fileSelected', [selectedFile.name, formatFileSize(selectedFile.size)]) }}
          </div>
        </div>
        
        <!-- 文本输入 -->
        <div v-else>
          <textarea 
            v-model="openApiSpec" 
            :placeholder="t('tools.openapi-generator.textInput.placeholder')"
            class="w-full h-64 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm"
          ></textarea>
        </div>
      </div>
      
      <!-- 生成选项 -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ t('tools.openapi-generator.options.operationType') }}
        </label>
        <div class="space-y-3">
          <div class="flex items-center">
            <input type="checkbox" id="exportSchemas" v-model="options.exportSchemas" class="mr-2">
            <label for="exportSchemas" class="text-sm text-gray-700 dark:text-gray-300">
              {{ t('tools.openapi-generator.options.exportSchemas') }}
            </label>
          </div>
          
          <div class="flex items-center">
            <input type="checkbox" id="generateClient" v-model="options.generateClient" class="mr-2">
            <label for="generateClient" class="text-sm text-gray-700 dark:text-gray-300">
              {{ t('tools.openapi-generator.options.generateClient') }}
            </label>
          </div>
          
          <div class="flex items-center">
            <input type="checkbox" id="addComments" v-model="options.addComments" class="mr-2">
            <label for="addComments" class="text-sm text-gray-700 dark:text-gray-300">
              {{ t('tools.openapi-generator.options.addComments') }}
            </label>
          </div>
          
          <div class="flex items-center">
            <input type="checkbox" id="useEnums" v-model="options.useEnums" class="mr-2">
            <label for="useEnums" class="text-sm text-gray-700 dark:text-gray-300">
              {{ t('tools.openapi-generator.options.useEnums') }}
            </label>
          </div>
        </div>
      </div>
      
      <!-- 操作按钮 -->
      <div class="flex flex-wrap gap-2">
        <button 
          @click="generateTypes"
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!canGenerate || processing"
        >
          <span v-if="processing">{{ t('tools.openapi-generator.actions.processing') }}</span>
          <span v-else>{{ t('tools.openapi-generator.actions.generate') }}</span>
        </button>
        
        <button 
          @click="clearAll"
          class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {{ t('tools.openapi-generator.actions.clear') }}
        </button>
      </div>
    </div>
    
    <!-- 结果展示区域 -->
    <div v-if="generatedCode || error" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div v-if="error" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-md">
        <h3 class="font-medium text-red-700 dark:text-red-300 mb-1">{{ t('tools.openapi-generator.results.error') }}</h3>
        <p class="text-sm">{{ error }}</p>
      </div>
      
      <div v-if="generatedCode" class="mb-4">
        <div class="flex justify-between items-center mb-3">
          <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">{{ t('tools.openapi-generator.results.generatedCode') }}</h3>
          <div class="flex gap-2">
            <button 
              @click="copyToClipboard"
              class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 text-sm"
            >
              {{ t('tools.openapi-generator.actions.copy') }}
            </button>
            
            <button 
              @click="downloadCode"
              class="px-3 py-1.5 bg-primary text-white rounded-md hover:bg-primary-dark text-sm"
            >
              {{ t('tools.openapi-generator.actions.download') }}
            </button>
          </div>
        </div>
        
        <div class="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
          <pre class="bg-gray-50 dark:bg-gray-900 overflow-x-auto p-4 text-xs md:text-sm font-mono text-gray-800 dark:text-gray-200 max-h-[500px]">{{ generatedCode }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import * as yaml from 'js-yaml'
import { useI18n } from 'vue-i18n'

// 初始化国际化
const { t } = useI18n()

// 组件状态
const isFileUpload = ref(true)
const isDragging = ref(false)
const selectedFile = ref(null)
const openApiSpec = ref('')
const fileInput = ref(null)
const generatedCode = ref('')
const error = ref('')
const processing = ref(false)

// 生成选项
const options = ref({
  exportSchemas: true,
  generateClient: true,
  addComments: true,
  useEnums: false
})

// 切换输入模式：文件上传/文本输入
function toggleInputMode() {
  isFileUpload.value = !isFileUpload.value
}

// 触发文件输入点击
function triggerFileInput() {
  fileInput.value.click()
}

// 处理文件输入变更
async function handleFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    selectedFile.value = file
    try {
      const content = await readFileAsText(file)
      openApiSpec.value = content
      error.value = ''
    } catch (err) {
      error.value = `无法读取文件: ${err.message}`
    }
  }
}

// 处理文件拖放
async function handleFileDrop(event) {
  isDragging.value = false
  const file = event.dataTransfer.files[0]
  if (file) {
    selectedFile.value = file
    try {
      const content = await readFileAsText(file)
      openApiSpec.value = content
      error.value = ''
    } catch (err) {
      error.value = `无法读取文件: ${err.message}`
    }
  }
}

// 从文件中读取文本
function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(new Error('文件读取失败'))
    reader.readAsText(file)
  })
}

// 加载示例规范
function loadExample() {
  openApiSpec.value = `openapi: 3.0.0
info:
  title: 示例API
  description: 一个用于演示的简单API
  version: 1.0.0
servers:
  - url: https://api.example.com/v1
    description: 生产环境API
paths:
  /users:
    get:
      summary: 获取用户列表
      description: 返回分页的用户列表
      parameters:
        - name: page
          in: query
          description: 页码
          required: false
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          description: 每页条数
          required: false
          schema:
            type: integer
            default: 10
      responses:
        '200':
          description: 成功获取用户列表
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UsersList'
    post:
      summary: 创建新用户
      description: 使用提供的数据创建新用户
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UserInput'
      responses:
        '201':
          description: 用户创建成功
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
  /users/{userId}:
    get:
      summary: 获取用户详情
      description: 根据ID获取用户详情
      parameters:
        - name: userId
          in: path
          required: true
          description: 用户ID
          schema:
            type: string
      responses:
        '200':
          description: 成功获取用户详情
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: 用户未找到
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
components:
  schemas:
    User:
      type: object
      required:
        - id
        - username
        - email
      properties:
        id:
          type: string
          description: 用户唯一ID
        username:
          type: string
          description: 用户名
        email:
          type: string
          format: email
          description: 电子邮箱
        fullName:
          type: string
          description: 用户全名
        role:
          type: string
          enum: [user, admin, moderator]
          description: 用户角色
        createdAt:
          type: string
          format: date-time
          description: 创建时间
    UserInput:
      type: object
      required:
        - username
        - email
      properties:
        username:
          type: string
          description: 用户名
        email:
          type: string
          format: email
          description: 电子邮箱
        fullName:
          type: string
          description: 用户全名
        role:
          type: string
          enum: [user, admin, moderator]
          default: user
          description: 用户角色
    UsersList:
      type: object
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/User'
        pagination:
          type: object
          properties:
            total:
              type: integer
              description: 总记录数
            pages:
              type: integer
              description: 总页数
            current:
              type: integer
              description: 当前页码
            limit:
              type: integer
              description: 每页条数
    Error:
      type: object
      properties:
        code:
          type: string
          description: 错误代码
        message:
          type: string
          description: 错误信息
`;
  error.value = '';
  isFileUpload.value = false;
  selectedFile.value = null;
}

// 格式化文件大小
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 判断是否可以生成代码
const canGenerate = computed(() => {
  return openApiSpec.value.trim().length > 0
})

// 清空所有输入和结果
function clearAll() {
  openApiSpec.value = ''
  selectedFile.value = null
  generatedCode.value = ''
  error.value = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// 生成TypeScript代码
async function generateTypes() {
  if (!canGenerate.value) return
  
  processing.value = true
  error.value = ''
  generatedCode.value = ''
  
  try {
    // 解析输入规范（JSON或YAML）
    let parsedSpec
    try {
      // 尝试解析为JSON
      parsedSpec = JSON.parse(openApiSpec.value)
    } catch (e) {
      // 如果JSON解析失败，尝试解析为YAML
      try {
        parsedSpec = yaml.load(openApiSpec.value)
      } catch (yamlError) {
        throw new Error(t('tools.openapi-generator.errors.parseError'))
      }
    }
    
    // 验证是否为有效的OpenAPI规范
    if (!parsedSpec.openapi && !parsedSpec.swagger) {
      throw new Error(t('tools.openapi-generator.errors.invalidSpec'))
    }
    
    // 在浏览器环境中引入openapi-typescript，我们将在此模拟转换过程
    // 在实际应用中，你需要使用正确的方式导入openapi-typescript库
    await simulateApiTypeGeneration(parsedSpec)
    
  } catch (err) {
    error.value = err.message
    console.error('生成类型时出错:', err)
  } finally {
    processing.value = false
  }
}

// 模拟API类型生成
// 在实际应用中，这里会使用openapi-typescript库进行实际转换
async function simulateApiTypeGeneration(spec) {
  // 模拟处理延迟
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  try {
    // 生成模拟的TypeScript接口代码
    let code = ''
    
    // 添加头部注释
    code += `/**\n`
    code += ` * 由OpenAPI生成的TypeScript类型定义\n`
    code += ` * 根据 ${spec.info?.title || 'API'} ${spec.info?.version || ''} 自动生成\n`
    code += ` * 生成时间: ${new Date().toISOString()}\n`
    code += ` */\n\n`
    
    // 导出命名空间
    code += `export namespace ${spec.info?.title?.replace(/\s+/g, '') || 'API'} {\n\n`
    
    // 如果需要导出模型定义
    if (options.value.exportSchemas && spec.components?.schemas) {
      code += `  /**\n   * 模型定义\n   */\n`
      code += `  export namespace schemas {\n`
      
      // 遍历所有模型
      for (const [name, schema] of Object.entries(spec.components.schemas)) {
        // 添加文档注释
        if (options.value.addComments && schema.description) {
          code += `    /**\n     * ${schema.description}\n     */\n`
        }
        
        // 如果是枚举类型
        if (options.value.useEnums && schema.enum) {
          code += `    export enum ${name} {\n`
          schema.enum.forEach(value => {
            code += `      ${value} = "${value}",\n`
          })
          code += `    }\n\n`
        }
        // 普通对象类型
        else if (schema.type === 'object') {
          code += `    export interface ${name} {\n`
          
          if (schema.properties) {
            for (const [propName, propSchema] of Object.entries(schema.properties)) {
              // 添加属性文档注释
              if (options.value.addComments && propSchema.description) {
                code += `      /** ${propSchema.description} */\n`
              }
              
              // 判断是否为必需属性
              const isRequired = schema.required?.includes(propName)
              // 判断类型
              let typeName
              if (propSchema.$ref) {
                typeName = propSchema.$ref.replace('#/components/schemas/', '')
              } else if (propSchema.type === 'array' && propSchema.items?.$ref) {
                typeName = `Array<${propSchema.items.$ref.replace('#/components/schemas/', '')}>`
              } else if (propSchema.type === 'array') {
                typeName = `Array<${propSchema.items?.type || 'any'}>`
              } else if (propSchema.enum && options.value.useEnums) {
                typeName = propName.charAt(0).toUpperCase() + propName.slice(1)
                // 内联枚举类型定义
                code += `      export enum ${typeName} {\n`
                propSchema.enum.forEach(value => {
                  code += `        ${value} = "${value}",\n`
                })
                code += `      }\n`
              } else {
                typeName = propSchema.type || 'any'
                if (typeName === 'integer') typeName = 'number'
              }
              
              code += `      ${propName}${isRequired ? '' : '?'}: ${typeName};\n`
            }
          }
          
          code += `    }\n\n`
        }
        // 数组类型
        else if (schema.type === 'array') {
          let itemType = 'any'
          if (schema.items?.$ref) {
            itemType = schema.items.$ref.replace('#/components/schemas/', '')
          } else if (schema.items?.type) {
            itemType = schema.items.type
            if (itemType === 'integer') itemType = 'number'
          }
          
          code += `    export type ${name} = Array<${itemType}>;\n\n`
        }
        // 基本类型
        else {
          let typeName = schema.type || 'any'
          if (typeName === 'integer') typeName = 'number'
          
          code += `    export type ${name} = ${typeName};\n\n`
        }
      }
      
      code += `  }\n\n`
    }
    
    // 生成API客户端代码
    if (options.value.generateClient && spec.paths) {
      code += `  /**\n   * API客户端\n   */\n`
      code += `  export class ApiClient {\n`
      code += `    private baseUrl: string;\n`
      code += `    private headers: Record<string, string>;\n\n`
      
      code += `    constructor(baseUrl: string = "${spec.servers?.[0]?.url || ''}", headers: Record<string, string> = {}) {\n`
      code += `      this.baseUrl = baseUrl;\n`
      code += `      this.headers = {\n`
      code += `        "Content-Type": "application/json",\n`
      code += `        ...headers\n`
      code += `      };\n`
      code += `    }\n\n`
      
      // 为每个路径生成方法
      for (const [path, pathItem] of Object.entries(spec.paths)) {
        for (const [method, operation] of Object.entries(pathItem)) {
          if (['get', 'post', 'put', 'delete', 'patch'].includes(method)) {
            // 方法名生成
            let operationName = operation.operationId || 
                               `${method}${path.split('/').filter(Boolean).map(p => 
                                 p.startsWith('{') ? `By${p.replace(/[{}]/g, '').charAt(0).toUpperCase() + p.replace(/[{}]/g, '').slice(1)}` : 
                                 p.charAt(0).toUpperCase() + p.slice(1)
                               ).join('')}`;
            
            // 方法文档
            if (options.value.addComments) {
              code += `    /**\n`
              code += operation.summary ? `     * ${operation.summary}\n` : ''
              code += operation.description ? `     * ${operation.description}\n` : ''
              code += `     */\n`
            }
            
            // 参数处理
            let parameters = []
            let pathParams = []
            let queryParams = []
            
            // 收集路径参数
            if (operation.parameters) {
              for (const param of operation.parameters) {
                if (param.in === 'path') {
                  pathParams.push(param)
                  parameters.push(`${param.name}: string`)
                } else if (param.in === 'query') {
                  queryParams.push(param)
                }
              }
            }
            
            // 处理请求体
            let requestBodyType = 'any'
            let hasRequestBody = false
            if (operation.requestBody && operation.requestBody.content?.['application/json']?.schema) {
              const schema = operation.requestBody.content['application/json'].schema
              if (schema.$ref) {
                requestBodyType = schema.$ref.replace('#/components/schemas/', '')
                hasRequestBody = true
                parameters.push(`body: schemas.${requestBodyType}`)
              }
            }
            
            // 如果有查询参数，添加options参数
            if (queryParams.length > 0) {
              code += `    async ${operationName}(${parameters.join(', ')}, query?: {\n`
              for (const param of queryParams) {
                if (options.value.addComments && param.description) {
                  code += `      /** ${param.description} */\n`
                }
                let paramType = param.schema?.type || 'any'
                if (paramType === 'integer') paramType = 'number'
                code += `      ${param.name}?: ${paramType};\n`
              }
              code += `    }) {\n`
            } else {
              code += `    async ${operationName}(${parameters.join(', ')}) {\n`
            }
            
            // 构建URL
            code += `      let url = \`${path.replace(/{/g, '${')}\`;\n`
            
            // 处理查询参数
            if (queryParams.length > 0) {
              code += `      const queryParams = new URLSearchParams();\n`
              code += `      if (query) {\n`
              for (const param of queryParams) {
                code += `        if (query.${param.name} !== undefined) queryParams.append("${param.name}", String(query.${param.name}));\n`
              }
              code += `      }\n`
              code += `      const queryString = queryParams.toString();\n`
              code += `      if (queryString) url += \`?\${queryString}\`;\n`
            }
            
            // 构建请求选项
            code += `\n      const response = await fetch(\`\${this.baseUrl}\${url}\`, {\n`
            code += `        method: "${method.toUpperCase()}",\n`
            code += `        headers: this.headers,\n`
            if (hasRequestBody) {
              code += `        body: JSON.stringify(body),\n`
            }
            code += `      });\n\n`
            
            // 响应处理
            code += `      if (!response.ok) {\n`
            code += `        throw new Error(\`HTTP error! status: \${response.status}\`);\n`
            code += `      }\n\n`
            
            // 确定返回类型
            let responseType = 'any'
            if (operation.responses?.['200']?.content?.['application/json']?.schema?.$ref) {
              responseType = operation.responses['200'].content['application/json'].schema.$ref.replace('#/components/schemas/', '')
              code += `      return await response.json() as schemas.${responseType};\n`
            } else {
              code += `      return await response.json();\n`
            }
            
            code += `    }\n\n`
          }
        }
      }
      
      code += `  }\n`
    }
    
    code += `}\n`
    
    generatedCode.value = code
  } catch (error) {
    throw new Error(t('tools.openapi-generator.errors.processingError', [error.message]))
  }
}

// 复制代码到剪贴板
function copyToClipboard() {
  if (!generatedCode.value) return
  
  navigator.clipboard.writeText(generatedCode.value)
    .then(() => {
      alert(t('tools.openapi-generator.results.copied'))
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}

// 下载生成的代码
function downloadCode() {
  if (!generatedCode.value) return
  
  const blob = new Blob([generatedCode.value], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'api-client.ts'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
</script> 