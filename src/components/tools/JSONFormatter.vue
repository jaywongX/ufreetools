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
          @click="clearJSON" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          清空
        </button>
        <button 
          @click="escapeJSON" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          转义
        </button>
        <button 
          @click="unescapeJSON" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          反转义
        </button>
        <!-- 操作提示 -->
        <div 
          v-if="message" 
          class="flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300"
          :class="{ 
            'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300': messageType === 'success',
            'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300': messageType === 'error'
          }"
        >
          <svg v-if="messageType === 'success'" class="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <svg v-else class="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <span>{{ message }}</span>
        </div>
      </div>
      <div class="flex space-x-2">
        <button 
          @click="copyResult" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!jsonInput || isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          复制
        </button>
      </div>
    </div>
    
    <!-- 输入和输出区域 -->
    <div class="p-2">
      <div class="grid grid-cols-2 gap-2">
        <!-- 左侧输入区域 -->
        <div>
          <div class="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">JSON 数据</div>
          <textarea 
            v-model="jsonInput" 
            class="w-full h-[calc(100vh-650px)] min-h-[60px] p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="粘贴您的JSON数据..."
            :disabled="isProcessing"
          ></textarea>
        </div>
        
        <!-- 右侧属性列表 -->
        <div>
          <div class="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center justify-between">
            <span>属性列表</span>
            <span class="text-xs text-gray-500 dark:text-gray-400">(点击值复制)</span>
          </div>
          <div class="h-[calc(100vh-650px)] min-h-[60px] overflow-y-auto">
            <div v-if="parsedData">
              <json-tree-node 
                v-for="(value, key) in parsedData" 
                :key="key"
                :name="key"
                :value="value"
                :depth="0"
                @copy="copyValue"
              />
            </div>
            <div v-else class="flex items-center justify-center h-full text-gray-400 dark:text-gray-500">
              <span class="text-sm">格式化或压缩JSON后显示属性列表</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/github-dark.css';
import JsonTreeNode from './JsonTreeNode.vue';

// 注册JSON语言支持
hljs.registerLanguage('json', json);

// 状态数据
const jsonInput = ref('');
const parsedData = ref(null);
const message = ref('');
const messageType = ref('success');
const isProcessing = ref(false);

// 初始化
onMounted(() => {
  // 移除示例数据初始化
});

// 格式化JSON
const formatJSON = () => {
  if (!jsonInput.value.trim()) {
    showMessage('请输入JSON数据', 'error');
    return;
  }
  
  isProcessing.value = true;
  
  try {
    const parsed = JSON.parse(jsonInput.value);
    // 验证成功，继续格式化
    parsedData.value = parsed;
    jsonInput.value = JSON.stringify(parsed, null, 2);
    showMessage('JSON格式有效，格式化成功', 'success');
  } catch (error) {
    showMessage(`JSON格式错误: ${error.message}`, 'error');
    parsedData.value = null;
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
    const parsed = JSON.parse(jsonInput.value);
    parsedData.value = parsed;
    jsonInput.value = JSON.stringify(parsed);
    showMessage('JSON压缩成功', 'success');
  } catch (error) {
    showMessage(`JSON格式错误: ${error.message}`, 'error');
    parsedData.value = null;
  } finally {
    isProcessing.value = false;
  }
};

// 清空输入
const clearJSON = () => {
  jsonInput.value = '';
  parsedData.value = null;
  message.value = '';
};

// 复制结果
const copyResult = async () => {
  if (!jsonInput.value) return;
  
  try {
    await navigator.clipboard.writeText(jsonInput.value);
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
  try {
    return hljs.highlight(json, { language: 'json' }).value;
  } catch (error) {
    return json;
  }
};

// 复制值（支持对象和数组）
const copyValue = async (value) => {
  try {
    const textToCopy = typeof value === 'object' 
      ? JSON.stringify(value, null, 2)
      : String(value);
      
    await navigator.clipboard.writeText(textToCopy);
    showMessage('已复制到剪贴板', 'success');
  } catch (error) {
    showMessage('复制失败，请手动复制', 'error');
  }
};

// 转义 JSON
const escapeJSON = () => {
  if (!jsonInput.value.trim()) {
    showMessage('请输入JSON数据', 'error');
    return;
  }
  
  isProcessing.value = true;
  
  try {
    let input = jsonInput.value;
    
    // 如果输入的是格式化的JSON，先压缩
    try {
      const parsed = JSON.parse(input);
      input = JSON.stringify(parsed);
    } catch (e) {
      // 如果解析失败，保持原样
    }
    
    // 转义处理
    const escaped = input
      // 基本转义
      .replace(/\\/g, '\\\\')  // 反斜杠
      .replace(/"/g, '\\"')    // 双引号
      .replace(/'/g, "\\'")    // 单引号
      .replace(/\//g, '\\/')   // 斜杠
      // 控制字符转义
      .replace(/[\b]/g, '\\b')     // 退格
      .replace(/\f/g, '\\f')       // 换页
      .replace(/\n/g, '\\n')       // 换行
      .replace(/\r/g, '\\r')       // 回车
      .replace(/\t/g, '\\t')       // 制表符
      // Unicode字符转义
      .replace(/[\u0000-\u001F\u2028\u2029]/g, (char) => {
        return '\\u' + ('0000' + char.charCodeAt(0).toString(16)).slice(-4);
      });
    
    jsonInput.value = escaped;
    showMessage('JSON转义成功', 'success');
  } catch (error) {
    showMessage(`转义处理出错: ${error.message}`, 'error');
  } finally {
    isProcessing.value = false;
  }
};

// 反转义 JSON
const unescapeJSON = () => {
  if (!jsonInput.value.trim()) {
    showMessage('请输入JSON数据', 'error');
    return;
  }
  
  isProcessing.value = true;
  
  try {
    const input = jsonInput.value;
    
    // 使用正则表达式处理所有转义序列
    const unescaped = input.replace(/\\(?:(["\\/bfnrt])|u([0-9a-fA-F]{4}))/g, 
      (match, char, hex) => {
        if (char) {
          // 处理基本转义字符
          const escapeMap = {
            '"': '"',
            '\\': '\\',
            '/': '/',
            'b': '\b',
            'f': '\f',
            'n': '\n',
            'r': '\r',
            't': '\t'
          };
          return escapeMap[char];
        } else {
          // 处理 Unicode 转义序列
          return String.fromCharCode(parseInt(hex, 16));
        }
      }
    );
    
    jsonInput.value = unescaped;
    showMessage('JSON反转义成功', 'success');
  } catch (error) {
    showMessage(`反转义处理出错: ${error.message}`, 'error');
  } finally {
    isProcessing.value = false;
  }
};
</script>

<style scoped>
.btn-sm {
  @apply px-3 py-1.5 rounded text-sm font-medium flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200;
}

.json-tree {
  @apply space-y-1;
}

.json-node {
  @apply text-sm;
}

/* 自定义滚动条样式 */
.json-tree::-webkit-scrollbar {
  width: 6px;
}

.json-tree::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-700 rounded;
}

.json-tree::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-gray-600 rounded;
}

.json-tree::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400 dark:bg-gray-500;
}
</style> 