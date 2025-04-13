<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <!-- 工具控制栏 -->
    <div class="flex flex-wrap items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex space-x-2 mb-2 sm:mb-0">
        <button 
          @click="testRegex" 
          class="btn-sm bg-primary hover:bg-primary-dark text-white"
          :disabled="isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          测试
        </button>
        <button 
          @click="clearAll" 
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
          @click="toggleExamples" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ showExamples ? '隐藏示例' : '显示示例' }}
        </button>
      </div>
    </div>
    
    <!-- 常用正则示例 -->
    <div v-if="showExamples" class="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
      <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">常用正则表达式示例：</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <button 
          v-for="example in regexExamples" 
          :key="example.name"
          @click="useExample(example)"
          class="text-left text-xs p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
        >
          <div class="font-medium">{{ example.name }}</div>
          <div class="text-gray-500 dark:text-gray-400">{{ example.pattern }}</div>
        </button>
      </div>
    </div>
    
    <!-- 状态消息 -->
    <div 
      v-if="message" 
      class="p-3 text-sm" 
      :class="{ 
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': messageType === 'success',
        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': messageType === 'error',
        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': messageType === 'info'
      }"
    >
      {{ message }}
    </div>
    
    <!-- 正则表达式输入 -->
    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="mb-2">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">正则表达式</label>
        <div class="flex">
          <div class="w-8 text-center bg-gray-100 dark:bg-gray-700 flex items-center justify-center border border-r-0 border-gray-300 dark:border-gray-600 rounded-l">
            /
          </div>
          <input
            type="text"
            v-model="regexPattern"
            class="flex-grow p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="在此输入正则表达式"
            :class="{ 'border-red-500 dark:border-red-500': regexError }"
          />
          <div class="w-12 text-center bg-gray-100 dark:bg-gray-700 flex items-center justify-center border border-l-0 border-gray-300 dark:border-gray-600 rounded-r">
            <input
              type="text"
              v-model="regexFlags"
              class="w-full p-2 bg-transparent border-0 text-gray-900 dark:text-gray-100 font-mono text-sm focus:outline-none"
              placeholder="gim"
              maxlength="5"
            />
          </div>
        </div>
        <div v-if="regexError" class="mt-1 text-xs text-red-500">
          {{ regexError }}
        </div>
      </div>
      
      <!-- 修饰符说明 -->
      <div class="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400 mt-2">
        <span class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">g (全局)</span>
        <span class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">i (不区分大小写)</span>
        <span class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">m (多行)</span>
        <span class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">s (单行模式)</span>
        <span class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">u (Unicode)</span>
      </div>
    </div>
    
    <!-- 输入和结果区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <!-- 输入区域 -->
      <div>
        <div class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">测试文本</div>
        <textarea 
          v-model="testText" 
          class="w-full h-64 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="在此输入要测试的文本..."
          :disabled="isProcessing"
        ></textarea>
      </div>
      
      <!-- 结果区域 -->
      <div>
        <div class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">匹配结果</div>
        <div 
          class="w-full h-64 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm overflow-auto"
        >
          <div v-if="matchResults.length > 0">
            <div v-html="highlightedText" class="whitespace-pre-wrap break-all mb-4"></div>
            
            <div v-if="matchResults.length > 0" class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div class="text-sm font-medium mb-2">匹配详情:</div>
              <div v-for="(match, index) in matchResults" :key="index" class="mb-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
                <div class="text-xs">匹配 #{{ index + 1 }}: 位置 {{ match.index }}</div>
                <div class="font-medium text-primary dark:text-primary-light">{{ match.value }}</div>
                <div v-if="match.groups && match.groups.length > 0" class="mt-1">
                  <div class="text-xs text-gray-500 dark:text-gray-400">捕获组:</div>
                  <div 
                    v-for="(group, groupIndex) in match.groups" 
                    :key="`${index}-${groupIndex}`"
                    class="text-xs ml-2"
                  >
                    组 {{ groupIndex }}: {{ group || '(空)' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="hasRun" class="text-gray-500 dark:text-gray-400">
            未找到匹配项
          </div>
          <div v-else class="text-gray-400 dark:text-gray-500">
            正则表达式匹配结果将显示在这里...
          </div>
        </div>
      </div>
    </div>
    
    <!-- 在最末尾添加文章组件 -->
    <RegexTesterArticle />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import RegexTesterArticle from './RegexTesterArticle.vue';

// 状态数据
const regexPattern = ref('');
const regexFlags = ref('');
const testText = ref('');
const matchResults = ref([]);
const message = ref('');
const messageType = ref('info');
const isProcessing = ref(false);
const regexError = ref('');
const showExamples = ref(false);
const hasRun = ref(false);

// 常用正则表达式示例
const regexExamples = [
  { name: '电子邮件', pattern: '[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}', flags: 'g', text: 'test@example.com\nsupport@domain.co.uk\ninvalid-email' },
  { name: '手机号码(中国)', pattern: '1[3-9]\\d{9}', flags: 'g', text: '联系方式：13912345678\n微信同号：18887654321\n座机：010-12345678' },
  { name: 'URL', pattern: 'https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&//=]*)', flags: 'g', text: 'Visit https://example.com\nOr http://www.domain.org/path?query=value' },
  { name: 'IP地址', pattern: '\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b', flags: 'g', text: '服务器地址：192.168.1.1\nDNS：8.8.8.8, 114.114.114.114' },
  { name: '日期(yyyy-mm-dd)', pattern: '\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])', flags: 'g', text: '开始日期：2023-01-15\n结束日期：2023-02-28\n无效日期：2023-13-45' },
  { name: '中文字符', pattern: '[\\u4e00-\\u9fa5]', flags: 'g', text: 'Hello世界！你好，World!' },
];

// 当正则表达式发生变化时，清除错误信息
watch([regexPattern, regexFlags], () => {
  regexError.value = '';
});

// 高亮显示匹配文本
const highlightedText = computed(() => {
  if (!testText.value || matchResults.value.length === 0) return '';
  
  let text = testText.value;
  let result = '';
  let lastIndex = 0;
  
  // 替换HTML特殊字符，防止XSS
  const escapeHtml = (text) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };
  
  // 按位置排序匹配结果
  const sortedMatches = [...matchResults.value].sort((a, b) => a.index - b.index);
  
  // 高亮所有匹配项
  for (const match of sortedMatches) {
    const beforeMatch = text.substring(lastIndex, match.index);
    result += escapeHtml(beforeMatch);
    
    const matchedText = text.substr(match.index, match.value.length);
    result += `<span class="bg-yellow-200 dark:bg-yellow-900 text-black dark:text-yellow-100">${escapeHtml(matchedText)}</span>`;
    
    lastIndex = match.index + match.value.length;
  }
  
  // 添加剩余文本
  if (lastIndex < text.length) {
    result += escapeHtml(text.substring(lastIndex));
  }
  
  return result;
});

// 测试正则表达式
const testRegex = () => {
  if (!regexPattern.value.trim()) {
    showMessage('请输入正则表达式', 'error');
    return;
  }
  
  if (!testText.value.trim()) {
    showMessage('请输入要测试的文本', 'error');
    return;
  }
  
  isProcessing.value = true;
  regexError.value = '';
  matchResults.value = [];
  hasRun.value = true;
  
  try {
    // 创建正则表达式对象
    const regex = new RegExp(regexPattern.value, regexFlags.value);
    
    // 获取所有匹配项
    let match;
    const isGlobal = regexFlags.value.includes('g');
    
    if (isGlobal) {
      while ((match = regex.exec(testText.value)) !== null) {
        matchResults.value.push({
          value: match[0],
          index: match.index,
          groups: match.slice(1)
        });
      }
    } else {
      match = regex.exec(testText.value);
      if (match) {
        matchResults.value.push({
          value: match[0],
          index: match.index,
          groups: match.slice(1)
        });
      }
    }
    
    if (matchResults.value.length > 0) {
      showMessage(`找到 ${matchResults.value.length} 个匹配项`, 'success');
    } else {
      showMessage('未找到匹配项', 'info');
    }
  } catch (error) {
    regexError.value = error.message;
    showMessage(`正则表达式错误: ${error.message}`, 'error');
  } finally {
    isProcessing.value = false;
  }
};

// 清空所有输入和结果
const clearAll = () => {
  regexPattern.value = '';
  regexFlags.value = '';
  testText.value = '';
  matchResults.value = [];
  message.value = '';
  regexError.value = '';
  hasRun.value = false;
};

// 切换示例面板显示
const toggleExamples = () => {
  showExamples.value = !showExamples.value;
};

// 使用示例
const useExample = (example) => {
  regexPattern.value = example.pattern;
  regexFlags.value = example.flags || '';
  testText.value = example.text || '';
  matchResults.value = [];
  message.value = '';
  regexError.value = '';
  hasRun.value = false;
};

// 显示消息
const showMessage = (msg, type = 'info') => {
  message.value = msg;
  messageType.value = type;
  
  // 3秒后自动清除消息
  setTimeout(() => {
    message.value = '';
  }, 3000);
};
</script> 