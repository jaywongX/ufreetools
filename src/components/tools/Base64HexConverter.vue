<template>
  <div class="space-y-8">
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 左侧 - 输入 -->
      <div class="space-y-4">
        <div class="flex flex-col">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-xl font-semibold">{{ $t('tools.base64-hex-converter.inputLabel') }}</h2>
            <div class="flex space-x-2">
              <button @click="clearInput" class="px-3 py-1.5 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition">
                {{ $t('tools.base64-hex-converter.clear') }}
              </button>
              <label class="px-3 py-1.5 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md cursor-pointer transition">
                {{ $t('tools.base64-hex-converter.uploadFile') }}
                <input type="file" class="hidden" @change="handleFileUpload" />
              </label>
            </div>
          </div>
          
          <textarea
            v-model="inputText"
            class="w-full h-96 p-4 border rounded-lg text-base dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            :placeholder="$t('tools.base64-hex-converter.inputPlaceholder')"
            @input="autoConvert"
          ></textarea>
          
          <!-- 文件拖放区域 - 更漂亮的设计 -->
          <!-- <div 
            class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 mb-4 text-center transition-all duration-200"
            :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md': isDragging }"
            @dragenter.prevent="isDragging = true"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="handleFileDrop"
          >
            <div class="flex flex-col items-center justify-center space-y-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="text-base text-gray-600 dark:text-gray-300 font-medium">
                {{ $t('tools.base64-hex-converter.dragAndDrop') }}
              </p>
            </div>
          </div> -->
        </div>

        <div class="flex flex-col space-y-5 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <!-- 转换类型选择 - 更大更明显的单选按钮 -->
          <div class="flex flex-col space-y-2">
            <span class="font-medium text-base">{{ $t('tools.base64-hex-converter.conversionType') }}:</span>
            <div class="flex flex-wrap gap-4 mt-1">
              <label class="inline-flex items-center">
                <input type="radio" v-model="conversionType" value="base64ToHex" class="form-radio w-5 h-5 text-blue-600" @change="autoConvert">
                <span class="ml-2 text-base">{{ $t('tools.base64-hex-converter.base64ToHex') }}</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" v-model="conversionType" value="hexToBase64" class="form-radio w-5 h-5 text-blue-600" @change="autoConvert">
                <span class="ml-2 text-base">{{ $t('tools.base64-hex-converter.hexToBase64') }}</span>
              </label>
            </div>
          </div>

          <!-- 自动转换选项 -->
          <div class="flex items-center">
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="autoConvertEnabled" class="form-checkbox w-5 h-5 text-blue-600">
              <span class="ml-2 text-base">{{ $t('tools.base64-hex-converter.autoConvert') }}</span>
            </label>
          </div>

          <!-- Hex 选项 - 更清晰的分组 -->
          <div v-if="conversionType === 'base64ToHex'" class="space-y-4 border-t pt-4 dark:border-gray-700">
            <div class="flex flex-col space-y-2">
              <span class="font-medium text-base">{{ $t('tools.base64-hex-converter.hexOptions') }}:</span>
              <div class="flex flex-wrap gap-4 mt-1">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="hexCase" value="upper" class="form-radio w-5 h-5 text-blue-600" @change="autoConvert">
                  <span class="ml-2 text-base">{{ $t('tools.base64-hex-converter.upperCase') }}</span>
                </label>
                <label class="inline-flex items-center">
                  <input type="radio" v-model="hexCase" value="lower" class="form-radio w-5 h-5 text-blue-600" @change="autoConvert">
                  <span class="ml-2 text-base">{{ $t('tools.base64-hex-converter.lowerCase') }}</span>
                </label>
              </div>
            </div>

            <div class="flex flex-col space-y-2">
              <span class="font-medium text-base">{{ $t('tools.base64-hex-converter.separator') }}:</span>
              <div class="flex flex-wrap gap-4 mt-1">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="separatorType" value="none" class="form-radio w-5 h-5 text-blue-600" @change="updateSeparator">
                  <span class="ml-2 text-base">{{ $t('tools.base64-hex-converter.none') }}</span>
                </label>
                <label class="inline-flex items-center">
                  <input type="radio" v-model="separatorType" value="space" class="form-radio w-5 h-5 text-blue-600" @change="updateSeparator">
                  <span class="ml-2 text-base">{{ $t('tools.base64-hex-converter.space') }}</span>
                </label>
                <label class="inline-flex items-center">
                  <input type="radio" v-model="separatorType" value="colon" class="form-radio w-5 h-5 text-blue-600" @change="updateSeparator">
                  <span class="ml-2 text-base">{{ $t('tools.base64-hex-converter.colon') }}</span>
                </label>
                <label class="inline-flex items-center">
                  <input type="radio" v-model="separatorType" value="dash" class="form-radio w-5 h-5 text-blue-600" @change="updateSeparator">
                  <span class="ml-2 text-base">{{ $t('tools.base64-hex-converter.dash') }}</span>
                </label>
                <label class="inline-flex items-center">
                  <input type="radio" v-model="separatorType" value="custom" class="form-radio w-5 h-5 text-blue-600" @change="updateSeparator">
                  <span class="ml-2 text-base">{{ $t('tools.base64-hex-converter.custom') }}</span>
                </label>
              </div>
              
              <input 
                v-if="separatorType === 'custom'" 
                v-model="customSeparator" 
                type="text" 
                class="w-24 p-2 mt-1 border rounded-md text-base dark:bg-gray-800 dark:border-gray-700"
                @input="updateSeparator"
                maxlength="5"
              />
            </div>
          </div>

          <!-- 转换按钮 - 更大更突出 -->
          <div class="flex justify-center pt-2">
            <button
              @click="convert"
              class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg font-medium transition shadow-md hover:shadow-lg"
            >
              {{ $t('tools.base64-hex-converter.convert') }}
            </button>
          </div>
        </div>
      </div>

      <!-- 右侧 - 输出 -->
      <div class="space-y-4">
        <div class="flex flex-col">
          <div class="flex justify-between items-center mb-3">
            <h2 class="text-xl font-semibold">{{ $t('tools.base64-hex-converter.outputLabel') }}</h2>
            <div class="flex space-x-2">
              <button 
                @click="copyOutput" 
                class="px-3 py-1.5 text-sm bg-green-500 hover:bg-green-600 text-white rounded-md transition shadow"
              >
                {{ $t('tools.base64-hex-converter.copy') }}
              </button>
              <button 
                @click="downloadOutput" 
                class="px-3 py-1.5 text-sm bg-purple-500 hover:bg-purple-600 text-white rounded-md transition shadow"
              >
                {{ $t('tools.base64-hex-converter.download') }}
              </button>
              <button 
                @click="clearOutput" 
                class="px-3 py-1.5 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md transition"
              >
                {{ $t('tools.base64-hex-converter.clear') }}
              </button>
            </div>
          </div>
          <textarea
            v-model="outputText"
            class="w-full h-96 p-4 border rounded-lg text-base dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            readonly
          ></textarea>
        </div>

        <!-- 错误提示 - 更醒目 -->
        <div v-if="error" class="p-4 bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-200 rounded-lg border border-red-200 dark:border-red-800 shadow-sm">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <span class="text-base">{{ error }}</span>
          </div>
        </div>

        <!-- 进度条 - 更美观 -->
        <div v-if="isProcessing" class="mt-4">
          <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden shadow-inner">
            <div 
              class="bg-blue-600 h-3 rounded-full transition-all duration-300 ease-out" 
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
          <p class="text-sm text-center mt-2 font-medium">{{ progress }}% {{ $t('tools.base64-hex-converter.processing') }}</p>
        </div>
      </div>
    </div>
    <Base64HexConverterArticle />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import Base64HexConverterArticle from './Base64HexConverterArticle.vue';

const { t } = useI18n();

// State variables
const inputText = ref('');
const outputText = ref('');
const conversionType = ref('base64ToHex');
const hexCase = ref('upper');
const separator = ref('');
const separatorType = ref('none');
const customSeparator = ref('');
const error = ref('');
const autoConvertEnabled = ref(true);
const isDragging = ref(false);
const isProcessing = ref(false);
const progress = ref(0);

// Update separator based on selected type
function updateSeparator() {
  switch (separatorType.value) {
    case 'none':
      separator.value = '';
      break;
    case 'space':
      separator.value = ' ';
      break;
    case 'colon':
      separator.value = ':';
      break;
    case 'dash':
      separator.value = '-';
      break;
    case 'custom':
      separator.value = customSeparator.value;
      break;
  }
  
  if (autoConvertEnabled.value) {
    convert();
  }
}

// Convert function
function convert() {
  error.value = '';
  
  if (!inputText.value.trim()) {
    outputText.value = '';
    return;
  }
  
  try {
    if (conversionType.value === 'base64ToHex') {
      outputText.value = base64ToHex(inputText.value);
    } else {
      outputText.value = hexToBase64(inputText.value);
    }
  } catch (e) {
    error.value = e.message;
    console.error(e);
  }
}

// Auto convert when input changes
function autoConvert() {
  if (autoConvertEnabled.value) {
    convert();
  }
}

// Base64 to Hex conversion
function base64ToHex(base64) {
  try {
    // Remove any whitespace
    base64 = base64.replace(/\s/g, '');
    
    // Check if the input is valid base64
    if (!/^[A-Za-z0-9+/]*={0,2}$/.test(base64)) {
      throw new Error(t('tools.base64-hex-converter.invalidBase64'));
    }
    
    // Decode base64 to binary
    const binary = atob(base64);
    
    // Convert binary to hex
    let hex = '';
    for (let i = 0; i < binary.length; i++) {
      let h = binary.charCodeAt(i).toString(16);
      if (h.length === 1) h = '0' + h;
      hex += h;
    }
    
    // Apply case and separator
    if (hexCase.value === 'upper') {
      hex = hex.toUpperCase();
    }
    
    if (separator.value) {
      // Insert separator every 2 characters
      hex = hex.match(/.{1,2}/g).join(separator.value);
    }
    
    return hex;
  } catch (e) {
    if (e.message === 'Invalid character') {
      throw new Error(t('tools.base64-hex-converter.invalidBase64'));
    }
    throw e;
  }
}

// Hex to Base64 conversion
function hexToBase64(hex) {
  // Remove any separators and whitespace
  hex = hex.replace(/[^A-Fa-f0-9]/g, '');
  
  // Check if the input is valid hex
  if (!/^[A-Fa-f0-9]*$/.test(hex)) {
    throw new Error(t('tools.base64-hex-converter.invalidHex'));
  }
  
  // Check if hex length is even
  if (hex.length % 2 !== 0) {
    throw new Error(t('tools.base64-hex-converter.oddHexLength'));
  }
  
  // Convert hex to binary
  let binary = '';
  for (let i = 0; i < hex.length; i += 2) {
    const h = parseInt(hex.substr(i, 2), 16);
    binary += String.fromCharCode(h);
  }
  
  // Convert binary to base64
  return btoa(binary);
}

// Handle file drop
function handleFileDrop(event) {
  isDragging.value = false;
  const file = event.dataTransfer.files[0];
  if (file) {
    processFile(file);
  }
}

// File upload handler
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    processFile(file);
  }
  
  // Reset the file input
  event.target.value = '';
}

// Process the uploaded file
function processFile(file) {
  
  isProcessing.value = true;
  progress.value = 0;
  
  try {
    const reader = new FileReader();
    
    // Set up progress tracking
    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        progress.value = Math.round((e.loaded / e.total) * 100);
      }
    };
    
    reader.onload = (e) => {
      if (conversionType.value === 'base64ToHex') {
        const base64 = e.target.result.split(',')[1]; // Remove data URL prefix
        inputText.value = base64;
      } else {
        const text = e.target.result;
        inputText.value = text;
      }
      
      // Simulate a slight delay for small files to show progress
      setTimeout(() => {
        progress.value = 100;
        if (autoConvertEnabled.value) convert();
        
        // Hide progress bar after a moment
        setTimeout(() => {
          isProcessing.value = false;
        }, 500);
      }, 200);
    };
    
    reader.onerror = () => {
      error.value = t('tools.base64-hex-converter.fileReadError');
      isProcessing.value = false;
    };
    
    if (conversionType.value === 'base64ToHex') {
      reader.readAsDataURL(file);
    } else {
      reader.readAsText(file);
    }
  } catch (e) {
    error.value = t('tools.base64-hex-converter.fileReadError');
    console.error(e);
    isProcessing.value = false;
  }
}

// Copy output to clipboard
function copyOutput() {
  if (!outputText.value) return;
  
  navigator.clipboard.writeText(outputText.value)
    .then(() => {
      // Show a temporary success message
      const originalError = error.value;
      error.value = t('tools.base64-hex-converter.copied');
      setTimeout(() => {
        error.value = originalError;
      }, 2000);
    })
    .catch(e => {
      error.value = t('tools.base64-hex-converter.copyFailed');
      console.error(e);
    });
}

// Download output as file
function downloadOutput() {
  if (!outputText.value) return;
  
  const filename = conversionType.value === 'base64ToHex' ? 'converted.hex' : 'converted.txt';
  const blob = new Blob([outputText.value], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Clear functions
function clearInput() {
  inputText.value = '';
  if (autoConvertEnabled.value) {
    outputText.value = '';
    error.value = '';
  }
}

function clearOutput() {
  outputText.value = '';
  error.value = '';
}

// Watch for changes in conversion type
watch(conversionType, () => {
  if (autoConvertEnabled.value && inputText.value) {
    convert();
  }
});

// Watch for changes in custom separator
watch(customSeparator, () => {
  if (separatorType.value === 'custom') {
    separator.value = customSeparator.value;
    if (autoConvertEnabled.value) {
      convert();
    }
  }
});
</script> 