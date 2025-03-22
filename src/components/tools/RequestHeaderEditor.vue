<template>
  <div class="flex flex-col h-full">
    <!-- 工具配置区域 -->
    <div class="mb-4 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.request-header-editor.name') }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {{ $t('tools.request-header-editor.description') }}
      </p>
    </div>
    
    <!-- 编辑区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
      <!-- 左侧编辑区域 -->
      <div class="flex flex-col bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-medium text-gray-800 dark:text-gray-200">{{ $t('tools.request-header-editor.editor.title') }}</h3>
          <div class="flex space-x-2">
            <button 
              @click="addHeader" 
              class="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
              :title="$t('tools.request-header-editor.editor.add')"
            >
              {{ $t('tools.request-header-editor.editor.add') }}
            </button>
            <button 
              @click="clearHeaders" 
              class="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
              :title="$t('tools.request-header-editor.editor.clear')"
            >
              {{ $t('tools.request-header-editor.editor.clear') }}
            </button>
            <button 
              @click="loadTemplate('common')" 
              class="px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm"
              :title="$t('tools.request-header-editor.presets.common')"
            >
              {{ $t('tools.request-header-editor.presets.common') }}
            </button>
          </div>
        </div>
        
        <!-- 请求头列表 -->
        <div class="overflow-y-auto flex-1 mb-4">
          <div v-if="headers.length === 0" class="text-center text-gray-500 dark:text-gray-400 py-8">
            {{ $t('tools.request-header-editor.header.noHeaders') }}
          </div>
          
          <div v-for="(header, index) in headers" :key="index" class="mb-3 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
            <div class="grid grid-cols-12 gap-2">
              <div class="col-span-5">
                <input 
                  v-model="header.name"
                  class="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm"
                  :placeholder="$t('tools.request-header-editor.header.namePlaceholder')"
                  @input="validateHeaders"
                />
                <div v-if="header.nameError" class="text-xs text-red-500 mt-1">
                  {{ header.nameError }}
                </div>
              </div>
              <div class="col-span-6">
                <input 
                  v-model="header.value"
                  class="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm"
                  :placeholder="$t('tools.request-header-editor.header.valuePlaceholder')"
                  @input="validateHeaders"
                />
                <div v-if="header.valueError" class="text-xs text-red-500 mt-1">
                  {{ header.valueError }}
                </div>
              </div>
              <div class="col-span-1 flex items-center justify-center">
                <button 
                  @click="removeHeader(index)"
                  class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  :title="$t('tools.request-header-editor.header.delete')"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 批量导入区域 -->
        <div>
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.request-header-editor.editor.bulk') }}</h4>
          <textarea 
            v-model="bulkInput"
            :placeholder="$t('tools.request-header-editor.header.bulkPlaceholder')"
            class="w-full h-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm"
          ></textarea>
          <div class="flex justify-end mt-2">
            <button 
              @click="importBulk"
              class="px-2 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm"
            >
              {{ $t('tools.request-header-editor.editor.import') }}
            </button>
          </div>
          <div v-if="currentImportError" class="text-xs text-red-500 mt-1">
            {{ currentImportError }}
          </div>
        </div>
      </div>
      
      <!-- 右侧预览和导出区域 -->
      <div class="flex flex-col bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <!-- 格式选择和复制按钮 -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <span class="mr-2 text-gray-700 dark:text-gray-300 text-sm">{{ $t('tools.request-header-editor.formats.title') }}:</span>
            <select 
              v-model="exportFormat"
              class="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm"
            >
              <option value="raw">{{ $t('tools.request-header-editor.formats.raw') }}</option>
              <option value="curl">{{ $t('tools.request-header-editor.formats.curl') }}</option>
              <option value="js">{{ $t('tools.request-header-editor.formats.javascript') }}</option>
              <option value="python">{{ $t('tools.request-header-editor.formats.python') }}</option>
              <option value="fetch">{{ $t('tools.request-header-editor.formats.fetch') }}</option>
              <option value="axios">{{ $t('tools.request-header-editor.formats.axios') }}</option>
            </select>
          </div>
          <button 
            @click="copyToClipboard"
            :disabled="!formattedOutput"
            class="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ $t('tools.request-header-editor.actions.copy') }}
          </button>
        </div>
        
        <!-- 预览区域 -->
        <div class="flex-1 overflow-y-auto mb-4">
          <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">
            {{ $t('tools.request-header-editor.response.title') }}{{ headers.length > 0 ? ` (${headers.length} ${$t('tools.request-header-editor.response.headerCount')})` : '' }}
          </h3>
          <pre 
            v-if="formattedOutput" 
            class="bg-gray-50 dark:bg-gray-700 p-3 rounded-md text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto whitespace-pre-wrap"
          >{{ formattedOutput }}</pre>
          <div v-else class="text-center text-gray-500 dark:text-gray-400 py-8">
            {{ $t('tools.request-header-editor.response.noResponse') }}
          </div>
        </div>
        
        <!-- 常用请求头信息 -->
        <div class="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">{{ $t('tools.request-header-editor.guides.title') }}</h4>
          <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <details>
              <summary class="cursor-pointer hover:text-gray-800 dark:hover:text-gray-200">
                {{ $t('tools.request-header-editor.common.contentType') }}
              </summary>
              <div class="mt-1 pl-4">
                <p>{{ $t('tools.request-header-editor.guides.commonValues') }}:</p>
                <ul class="list-disc pl-4 mt-1">
                  <li class="cursor-pointer hover:text-primary" @click="addSpecificHeader('Content-Type', 'application/json')">
                    application/json
                  </li>
                  <li class="cursor-pointer hover:text-primary" @click="addSpecificHeader('Content-Type', 'application/x-www-form-urlencoded')">
                    application/x-www-form-urlencoded
                  </li>
                  <li class="cursor-pointer hover:text-primary" @click="addSpecificHeader('Content-Type', 'multipart/form-data')">
                    multipart/form-data
                  </li>
                  <li class="cursor-pointer hover:text-primary" @click="addSpecificHeader('Content-Type', 'text/plain')">
                    text/plain
                  </li>
                </ul>
              </div>
            </details>
            <details>
              <summary class="cursor-pointer hover:text-gray-800 dark:hover:text-gray-200">
                {{ $t('tools.request-header-editor.common.authorization') }}
              </summary>
              <div class="mt-1 pl-4">
                <p>{{ $t('tools.request-header-editor.guides.commonValues') }}:</p>
                <ul class="list-disc pl-4 mt-1">
                  <li class="cursor-pointer hover:text-primary" @click="addSpecificHeader('Authorization', 'Bearer TOKEN')">
                    Bearer TOKEN
                  </li>
                  <li class="cursor-pointer hover:text-primary" @click="addSpecificHeader('Authorization', 'Basic ' + btoa('username:password'))">
                    Basic Auth
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 消息通知 -->
    <div 
      v-if="notification.show"
      class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg"
      :class="{ 'animate-fade-in-out': notification.show }"
    >
      {{ notification.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

// 使用国际化
const { t, locale } = useI18n()

// 数据定义
const headers = ref([])
const bulkInput = ref('')
const importError = ref('')
const importErrorCode = ref('') // 存储错误代码而非翻译文本
const exportFormat = ref('raw')
const notification = ref({
  show: false,
  message: ''
})

// 计算属性：根据错误代码获取当前语言的错误信息
const currentImportError = computed(() => {
  if (!importErrorCode.value) return '';
  return t(`tools.request-header-editor.messages.${importErrorCode.value}`);
})

// 添加新的请求头
function addHeader() {
  headers.value.push({
    name: '',
    value: '',
    nameError: '',
    valueError: ''
  })
}

// 添加特定请求头
function addSpecificHeader(name, value) {
  // 检查是否已存在相同名称的请求头
  const existingIndex = headers.value.findIndex(h => h.name.toLowerCase() === name.toLowerCase())
  
  if (existingIndex !== -1) {
    // 如果存在则更新其值
    headers.value[existingIndex].value = value
  } else {
    // 否则添加新请求头
    headers.value.push({
      name,
      value,
      nameError: '',
      valueError: ''
    })
  }
  
  validateHeaders()
}

// 移除请求头
function removeHeader(index) {
  headers.value.splice(index, 1)
  validateHeaders()
}

// 清空所有请求头
function clearHeaders() {
  headers.value = []
}

// 加载请求头模板
function loadTemplate(templateName) {
  if (templateName === 'common') {
    headers.value = [
      { name: 'Accept', value: 'application/json', nameError: '', valueError: '' },
      { name: 'Content-Type', value: 'application/json', nameError: '', valueError: '' },
      { name: 'User-Agent', value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', nameError: '', valueError: '' },
      { name: 'Cache-Control', value: 'no-cache', nameError: '', valueError: '' },
      { name: 'Accept-Language', value: 'zh-CN,zh;q=0.9,en;q=0.8', nameError: '', valueError: '' }
    ]
  }
  
  validateHeaders()
}

// 批量导入请求头
function importBulk() {
  if (!bulkInput.value.trim()) {
    importErrorCode.value = 'pleaseEnterHeader';
    return
  }
  
  importErrorCode.value = '';
  const lines = bulkInput.value.split('\n')
  const importedHeaders = []
  
  for (const line of lines) {
    const trimmedLine = line.trim()
    if (!trimmedLine) continue
    
    // 尝试使用常规格式解析: "Name: Value"
    const colonIndex = trimmedLine.indexOf(':')
    if (colonIndex > 0) {
      const name = trimmedLine.substring(0, colonIndex).trim()
      const value = trimmedLine.substring(colonIndex + 1).trim()
      
      if (name) {
        importedHeaders.push({
          name,
          value,
          nameError: '',
          valueError: ''
        })
      }
    }
  }
  
  if (importedHeaders.length === 0) {
    importErrorCode.value = 'invalidHeader';
    return
  }
  
  // 添加或更新请求头
  for (const newHeader of importedHeaders) {
    const existingIndex = headers.value.findIndex(h => 
      h.name.toLowerCase() === newHeader.name.toLowerCase()
    )
    
    if (existingIndex !== -1) {
      headers.value[existingIndex].value = newHeader.value
    } else {
      headers.value.push(newHeader)
    }
  }
  
  // 清空输入区域并验证
  bulkInput.value = ''
  validateHeaders()
  
  // 显示通知
  showNotification(t('tools.request-header-editor.messages.importSuccess'))
}

// 验证请求头
function validateHeaders() {
  let isValid = true
  
  // 使用Headers API进行验证
  const headersObj = new Headers()
  const validationResults = [];
  
  for (let i = 0; i < headers.value.length; i++) {
    const header = headers.value[i];
    let nameError = '';
    let valueError = '';
    
    if (!header.name) {
      nameError = t('tools.request-header-editor.header.namePlaceholder');
      isValid = false;
    } else {
      try {
        // 尝试设置请求头以验证其有效性
        headersObj.set(header.name, header.value || ' ');
      } catch (error) {
        nameError = t('tools.request-header-editor.messages.invalidHeaderName', { error: error.message });
        isValid = false;
      }
    }
    
    validationResults.push({ nameError, valueError });
  }
  
  // 批量更新错误信息，避免触发多次watch
  for (let i = 0; i < headers.value.length; i++) {
    headers.value[i].nameError = validationResults[i].nameError;
    headers.value[i].valueError = validationResults[i].valueError;
  }
  
  return isValid;
}

// 复制到剪贴板
function copyToClipboard() {
  if (!formattedOutput.value) return
  
  navigator.clipboard.writeText(formattedOutput.value)
    .then(() => {
      showNotification(t('tools.request-header-editor.messages.copied'))
    })
    .catch(err => {
      console.error('Copy failed:', err)
      showNotification(t('tools.request-header-editor.messages.copyFailed'), 'error')
    })
}

// 显示通知
function showNotification(message, type = 'success') {
  notification.value = { show: true, message, type }
  
  // 3秒后自动隐藏
  setTimeout(() => {
    notification.value.show = false
  }, 3000)
}

// 格式化输出
const formattedOutput = computed(() => {
  if (headers.value.length === 0) return ''
  
  // 过滤掉名称为空的请求头
  const validHeaders = headers.value.filter(h => h.name.trim() !== '')
  
  if (validHeaders.length === 0) return ''
  
  // 根据选择的格式返回不同形式的输出
  switch (exportFormat.value) {
    case 'raw':
      return validHeaders.map(h => `${h.name}: ${h.value}`).join('\n')
    
    case 'curl':
      return `curl -X GET \\
${validHeaders.map(h => `  -H "${h.name}: ${h.value.replace(/"/g, '\\"')}" \\`).join('\n')}
  "https://api.example.com/endpoint"`
    
    case 'js':
      return `const headers = {
${validHeaders.map(h => `  "${h.name}": "${h.value.replace(/"/g, '\\"')}"`).join(',\n')}
};

// 使用示例
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/endpoint");
Object.keys(headers).forEach(key => {
  xhr.setRequestHeader(key, headers[key]);
});
xhr.send();`
    
    case 'python':
      return `headers = {
${validHeaders.map(h => `    "${h.name}": "${h.value.replace(/"/g, '\\"')}"`).join(',\n')}
}

# 使用示例
import requests
response = requests.get("https://api.example.com/endpoint", headers=headers)`
    
    case 'fetch':
      return `const headers = new Headers();
${validHeaders.map(h => `headers.append("${h.name}", "${h.value.replace(/"/g, '\\"')}");`).join('\n')}

// 使用示例
fetch("https://api.example.com/endpoint", {
  method: "GET",
  headers: headers
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`
    
    case 'axios':
      return `import axios from 'axios';

const headers = {
${validHeaders.map(h => `  "${h.name}": "${h.value.replace(/"/g, '\\"')}"`).join(',\n')}
};

// 使用示例
axios.get("https://api.example.com/endpoint", { headers })
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));`
      
    default:
      return validHeaders.map(h => `${h.name}: ${h.value}`).join('\n')
  }
})

// 观察请求头变化，触发验证
// 使用一个防抖变量避免循环
const isValidating = ref(false);
watch(headers, () => {
  if (!isValidating.value) {
    isValidating.value = true;
    // 使用setTimeout来确保在下一个事件循环中执行验证
    setTimeout(() => {
      validateHeaders();
      isValidating.value = false;
    }, 0);
  }
}, { deep: true });

// 当语言变化时重新验证表单，更新错误消息和提示
watch(locale, () => {
  // 延迟执行以确保语言已切换完成
  setTimeout(() => {
    // 重新验证所有请求头以更新错误信息
    if (headers.value.length > 0) {
      validateHeaders();
    }
    // 错误信息现在通过计算属性自动更新，不需要额外处理
  }, 10);
})
</script>

<style scoped>
@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(20px); }
}

.animate-fade-in-out {
  animation: fadeInOut 3s forwards;
}
</style> 