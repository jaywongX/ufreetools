<template>
  <div>
    <div class="mb-6">
      <div class="flex space-x-4 mb-4">
        <button 
          @click="mode = 'encode'" 
          class="px-4 py-2 rounded-md"
          :class="mode === 'encode' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
        >
          编码
        </button>
        <button 
          @click="mode = 'decode'" 
          class="px-4 py-2 rounded-md"
          :class="mode === 'decode' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'"
        >
          解码
        </button>
      </div>
      
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ mode === 'encode' ? '输入文本' : 'Base64编码' }}
        </label>
        <textarea 
          v-model="input" 
          class="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          :placeholder="mode === 'encode' ? '输入要编码的文本...' : '输入要解码的Base64编码...'"
        ></textarea>
      </div>
      
      <div class="flex justify-between mb-4">
        <button 
          @click="processData" 
          class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          {{ mode === 'encode' ? '编码' : '解码' }}
        </button>
        <button 
          @click="clearAll" 
          class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          清空
        </button>
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ mode === 'encode' ? 'Base64编码' : '解码结果' }}
        </label>
        <div class="relative">
          <textarea 
            v-model="output" 
            class="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            readonly
          ></textarea>
          <button 
            v-if="output" 
            @click="copyToClipboard" 
            class="absolute right-2 top-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            title="复制到剪贴板"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </button>
        </div>
        <div v-if="copyStatus" class="text-sm text-green-600 dark:text-green-400 mt-2">
          已复制到剪贴板！
        </div>
        <div v-if="error" class="text-sm text-red-600 dark:text-red-400 mt-2">
          {{ error }}
        </div>
      </div>
    </div>
    
    <div class="bg-gray-50 dark:bg-gray-800 rounded-md p-4 text-sm text-gray-700 dark:text-gray-300">
      <h3 class="font-medium mb-2">关于Base64编解码</h3>
      <p class="mb-2">Base64是一种基于64个可打印字符来表示二进制数据的表示方法，常用于在处理文本的场合，表示、传输、存储一些二进制数据。</p>
      <p class="mb-2">用途：</p>
      <ul class="list-disc pl-5 mb-2">
        <li>在电子邮件中传输二进制文件</li>
        <li>将图片嵌入到HTML或CSS中</li>
        <li>通过URL传输包含特殊字符的数据</li>
        <li>存储复杂数据结构</li>
      </ul>
      <p>注意：Base64编码会使数据量增加约33%。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const mode = ref('encode')
const input = ref('')
const output = ref('')
const error = ref('')
const copyStatus = ref(false)

// 当输入改变时自动处理
watch(input, () => {
  processData()
})

// 当模式改变时自动处理
watch(mode, () => {
  processData()
})

// 处理数据（编码或解码）
function processData() {
  error.value = ''
  
  if (!input.value.trim()) {
    output.value = ''
    return
  }
  
  try {
    if (mode.value === 'encode') {
      output.value = btoa(unescape(encodeURIComponent(input.value)))
    } else {
      output.value = decodeURIComponent(escape(atob(input.value.trim())))
    }
  } catch (e) {
    error.value = mode.value === 'encode' ? '编码失败，可能包含特殊字符' : '解码失败，请检查输入是否为有效的Base64编码'
    output.value = ''
  }
}

// 复制到剪贴板
function copyToClipboard() {
  if (!output.value) return
  
  navigator.clipboard.writeText(output.value)
    .then(() => {
      copyStatus.value = true
      setTimeout(() => {
        copyStatus.value = false
      }, 2000)
    })
    .catch(() => {
      error.value = '复制失败，请手动复制'
    })
}

// 清空输入和输出
function clearAll() {
  input.value = ''
  output.value = ''
  error.value = ''
  copyStatus.value = false
}
</script> 