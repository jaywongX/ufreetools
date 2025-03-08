<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <!-- 工具控制栏 -->
    <div class="flex flex-wrap items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex space-x-2 mb-2 sm:mb-0">
        <button 
          @click="formatJSON" 
          class="btn-sm bg-primary hover:bg-primary-dark text-white"
          :disabled="isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          格式化
        </button>
        <button 
          @click="compressJSON" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
          压缩
        </button>
        <button 
          @click="validateJSON" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          验证
        </button>
        <button 
          @click="clearJSON" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          清空
        </button>
      </div>
      <div class="flex space-x-2">
        <button 
          @click="copyResult" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!formattedJSON || isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          复制
        </button>
      </div>
    </div>
    
    <!-- 状态消息 -->
    <div 
      v-if="message" 
      class="p-3 text-sm" 
      :class="{ 
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': messageType === 'success',
        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': messageType === 'error'
      }"
    >
      {{ message }}
    </div>
    
    <!-- 输入和输出区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <!-- 输入区域 -->
      <div>
        <div class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">JSON 输入</div>
        <textarea 
          v-model="jsonInput" 
          class="w-full h-96 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="粘贴您的JSON数据..."
          :disabled="isProcessing"
        ></textarea>
      </div>
      
      <!-- 输出区域 -->
      <div>
        <div class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">格式化结果</div>
        <pre 
          class="w-full h-96 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm overflow-auto"
        ><code v-if="formattedJSON" v-html="highlightJSON(formattedJSON)"></code><span v-else class="text-gray-400 dark:text-gray-500">JSON格式化结果将显示在这里...</span></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 状态数据
const jsonInput = ref('');
const formattedJSON = ref('');
const message = ref('');
const messageType = ref('success');
const isProcessing = ref(false);

// 示例JSON数据
const sampleJSON = {
  "name": "JSON格式化工具",
  "version": "1.0.0",
  "description": "一个简单的在线JSON格式化工具",
  "features": ["格式化", "压缩", "验证"],
  "isAwesome": true,
  "stats": {
    "users": 1000,
    "rating": 4.9
  }
};

// 初始化
onMounted(() => {
  // 可以添加示例数据便于测试
  jsonInput.value = JSON.stringify(sampleJSON);
});

// 格式化JSON
const formatJSON = () => {
  if (!jsonInput.value.trim()) {
    showMessage('请输入JSON数据', 'error');
    return;
  }
  
  isProcessing.value = true;
  
  try {
    const parsedJSON = JSON.parse(jsonInput.value);
    formattedJSON.value = JSON.stringify(parsedJSON, null, 2);
    showMessage('JSON格式化成功', 'success');
  } catch (error) {
    showMessage(`JSON格式错误: ${error.message}`, 'error');
    formattedJSON.value = '';
  } finally {
    isProcessing.value = false;
  }
};

// 压缩JSON
const compressJSON = () => {
  if (!jsonInput.value.trim()) {
    showMessage('请输入JSON数据', 'error');
    return;
  }
  
  isProcessing.value = true;
  
  try {
    const parsedJSON = JSON.parse(jsonInput.value);
    formattedJSON.value = JSON.stringify(parsedJSON);
    showMessage('JSON压缩成功', 'success');
  } catch (error) {
    showMessage(`JSON格式错误: ${error.message}`, 'error');
    formattedJSON.value = '';
  } finally {
    isProcessing.value = false;
  }
};

// 验证JSON
const validateJSON = () => {
  if (!jsonInput.value.trim()) {
    showMessage('请输入JSON数据', 'error');
    return;
  }
  
  isProcessing.value = true;
  
  try {
    JSON.parse(jsonInput.value);
    showMessage('JSON格式有效', 'success');
  } catch (error) {
    showMessage(`JSON格式错误: ${error.message}`, 'error');
  } finally {
    isProcessing.value = false;
  }
};

// 清空输入
const clearJSON = () => {
  jsonInput.value = '';
  formattedJSON.value = '';
  message.value = '';
};

// 复制结果
const copyResult = async () => {
  if (!formattedJSON.value) return;
  
  try {
    await navigator.clipboard.writeText(formattedJSON.value);
    showMessage('已复制到剪贴板', 'success');
  } catch (error) {
    showMessage('复制失败，请手动复制', 'error');
  }
};

// 显示消息
const showMessage = (msg, type = 'success') => {
  message.value = msg;
  messageType.value = type;
  
  // 3秒后自动清除消息
  setTimeout(() => {
    message.value = '';
  }, 3000);
};

// 高亮显示JSON语法
const highlightJSON = (json) => {
  if (!json) return '';
  
  // 简单的语法高亮逻辑
  let highlighted = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"([^"]+)":/g, '<span class="text-purple-600 dark:text-purple-400">"$1"</span>:')
    .replace(/"([^"]*)"/g, '<span class="text-green-600 dark:text-green-400">"$1"</span>')
    .replace(/\b(true|false|null)\b/g, '<span class="text-red-600 dark:text-red-400">$1</span>')
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-blue-600 dark:text-blue-400">$1</span>');
    
  return highlighted;
};
</script>

<style scoped>
.btn-sm {
  @apply px-3 py-1.5 rounded text-sm font-medium flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200;
}
</style> 