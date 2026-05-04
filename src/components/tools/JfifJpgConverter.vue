<template>
  <div class="w-full mx-auto p-0 sm:p-2">
    <!-- 上半部分：转换工具 -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6 mb-6">
      <h2 class="text-xl font-bold mb-4">{{ $t('tools.jfif-jpg-converter.name') }}</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">{{ $t('tools.jfif-jpg-converter.upload.subtitle') }}</p>
      
      <!-- Upload Area -->
      <div 
        @dragover.prevent="onDragover" 
        @dragleave.prevent="isDragging = false"
        @drop.prevent="onFileDrop"
        :class="[
          'border-2 border-dashed rounded-lg p-8 text-center transition-all',
          isDragging ? 'border-primary bg-primary/10' : 'border-gray-300 dark:border-gray-600',
          'hover:border-primary hover:bg-primary/5',
          'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700'
        ]"
      >
        <div v-if="!files.length">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="mt-4 text-gray-600 dark:text-gray-400">{{ $t('tools.jfif-jpg-converter.upload.dropzone') }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">{{ $t('tools.jfif-jpg-converter.upload.maxSize') }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-1">{{ $t('tools.jfif-jpg-converter.upload.supportedFormats') }}</p>
          <button 
            @click="triggerFileInput" 
            class="mt-4 px-4 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition"
          >
            {{ $t('tools.jfif-jpg-converter.actions.selectFile') }}
          </button>
          <input 
            ref="fileInput" 
            type="file" 
            class="hidden" 
            accept=".jfif,.jpeg,.jpg"
            @change="onFileSelected" 
            multiple
          />
        </div>
        <div v-else>
          <div class="relative max-h-64 overflow-auto mb-4">
            <table class="w-full text-sm text-gray-700 dark:text-gray-300">
              <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0">
                <tr>
                  <th class="px-4 py-2 text-left">{{ $t('tools.jfif-jpg-converter.fileTable.fileName') }}</th>
                  <th class="px-4 py-2 text-left">{{ $t('tools.jfif-jpg-converter.fileTable.type') }}</th>
                  <th class="px-4 py-2 text-left">{{ $t('tools.jfif-jpg-converter.fileTable.size') }}</th>
                  <th class="px-4 py-2 text-left">{{ $t('tools.jfif-jpg-converter.fileTable.status') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(file, index) in files" :key="index" class="border-b border-gray-200 dark:border-gray-600">
                  <td class="px-4 py-2 truncate max-w-[150px]">{{ file.name }}</td>
                  <td class="px-4 py-2">{{ getFileExtension(file.name).toUpperCase() }}</td>
                  <td class="px-4 py-2">{{ formatFileSize(file.size) }}</td>
                  <td class="px-4 py-2">
                    <span v-if="file.status === 'pending'" class="text-blue-500">{{ $t('tools.jfif-jpg-converter.fileTable.pending') }}</span>
                    <span v-else-if="file.status === 'converting'" class="text-yellow-500">{{ $t('tools.jfif-jpg-converter.fileTable.converting') }}</span>
                    <span v-else-if="file.status === 'done'" class="text-green-500">{{ $t('tools.jfif-jpg-converter.fileTable.done') }}</span>
                    <span v-else class="text-red-500">{{ $t('tools.jfif-jpg-converter.fileTable.error') }}</span>
                    
                    <div v-if="file.progress && file.status === 'converting'" class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                      <div 
                        class="bg-primary h-1.5 rounded-full transition-all" 
                        :style="{ width: `${file.progress}%` }"
                      ></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex space-x-2 justify-center">
            <button 
              @click="resetFiles" 
              class="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md text-sm"
            >
              {{ $t('tools.jfif-jpg-converter.actions.clear') }}
            </button>
            <button 
              @click="triggerFileInput" 
              class="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md text-sm"
            >
              {{ $t('tools.jfif-jpg-converter.actions.addMore') }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- Conversion settings -->
      <div v-if="files.length > 0" class="mt-6">
        <h3 class="font-bold mb-3">{{ $t('tools.jfif-jpg-converter.settings.title') }}</h3>
        
        <div class="space-y-4">
          <!-- Quality Setting -->
          <div>
            <label class="flex items-center justify-between">
              <span>{{ $t('tools.jfif-jpg-converter.settings.quality.label') }}: {{ quality }}%</span>
              <span class="text-xs text-gray-500">{{ qualityLabel }}</span>
            </label>
            <input 
              v-model="quality" 
              type="range" 
              min="1" 
              max="100" 
              step="1"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
          
          <!-- Preserve metadata option -->
          <div class="flex items-center">
            <input 
              v-model="preserveMetadata" 
              type="checkbox" 
              id="preserveMetadata" 
              class="rounded text-primary focus:ring-primary mr-2"
            />
            <label for="preserveMetadata" class="text-sm">
              {{ $t('tools.jfif-jpg-converter.settings.preserveMetadata') }}
            </label>
          </div>
          
          <!-- File name options -->
          <div>
            <label class="block text-sm font-medium mb-1">
              {{ $t('tools.jfif-jpg-converter.settings.filenameOption') }}
            </label>
            <div class="grid grid-cols-3 gap-2 text-sm">
              <button 
                @click="filenameOption = 'original'"
                class="px-3 py-2 rounded border" 
                :class="filenameOption === 'original' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
              >
                {{ $t('tools.jfif-jpg-converter.settings.filenameOriginal') }}
              </button>
              <button 
                @click="filenameOption = 'converted'"
                class="px-3 py-2 rounded border" 
                :class="filenameOption === 'converted' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
              >
                {{ $t('tools.jfif-jpg-converter.settings.filenameConverted') }}
              </button>
              <button 
                @click="filenameOption = 'custom'"
                class="px-3 py-2 rounded border" 
                :class="filenameOption === 'custom' ? 'bg-primary text-white' : 'border-gray-300 dark:border-gray-600'"
              >
                {{ $t('tools.jfif-jpg-converter.settings.filenameCustom') }}
              </button>
            </div>
            
            <!-- Custom file name template -->
            <div v-if="filenameOption === 'custom'" class="mt-2">
              <input 
                v-model="filenameTemplate" 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                :placeholder="t('tools.jfif-jpg-converter.settings.filenameTemplatePlaceholder')"
              />
              <p class="text-xs text-gray-500 mt-1">
                {{ $t('tools.jfif-jpg-converter.settings.filenameTemplateHelp') }}
              </p>
            </div>
          </div>

          <!-- Auto optimize option -->
          <div class="flex items-center mb-4">
            <input 
              v-model="autoOptimize" 
              type="checkbox" 
              id="autoOptimize" 
              class="rounded text-primary focus:ring-primary mr-2"
            />
            <label for="autoOptimize" class="text-sm">
              {{ $t('tools.jfif-jpg-converter.settings.quality.auto') }}
            </label>
          </div>
        </div>
      </div>
      
      <div class="mt-6">
        <div 
          @click="showAdvanced = !showAdvanced" 
          class="flex items-center justify-between cursor-pointer p-3 bg-gray-50 dark:bg-gray-700 rounded-md"
        >
          <h3 class="font-bold">{{ $t('tools.jfif-jpg-converter.settings.advanced') }}</h3>
          <svg :class="[showAdvanced ? 'rotate-180' : '', 'transition-transform']" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
        
        <div v-show="showAdvanced" class="mt-3 p-4 border border-gray-200 dark:border-gray-600 rounded-md">
          <div class="space-y-4">
            <!-- 元数据选项 -->
            <div>
              <label class="block text-sm font-medium mb-2">
                {{ $t('tools.jfif-jpg-converter.settings.metadata.label') }}
              </label>
              <div class="space-y-2">
                <div class="flex items-center">
                  <input 
                    v-model="metadataOption" 
                    type="radio" 
                    id="preserveMetadata" 
                    value="preserve"
                    class="mr-2"
                  />
                  <label for="preserveMetadata" class="text-sm">
                    {{ $t('tools.jfif-jpg-converter.settings.metadata.preserve') }}
                  </label>
                </div>
                <div class="flex items-center">
                  <input 
                    v-model="metadataOption" 
                    type="radio" 
                    id="stripMetadata" 
                    value="strip"
                    class="mr-2"
                  />
                  <label for="stripMetadata" class="text-sm">
                    {{ $t('tools.jfif-jpg-converter.settings.metadata.strip') }}
                  </label>
                </div>
                <div class="flex items-center">
                  <input 
                    v-model="metadataOption" 
                    type="radio" 
                    id="keepBasicMetadata" 
                    value="basic"
                    class="mr-2"
                  />
                  <label for="keepBasicMetadata" class="text-sm">
                    {{ $t('tools.jfif-jpg-converter.settings.metadata.keepBasic') }}
                  </label>
                </div>
              </div>
            </div>
            
            <!-- 其他高级选项可以在这里添加 -->
          </div>
        </div>
      </div>
      
      <div v-if="files.length > 0" class="mt-6">
        <button 
          @click="convertFiles" 
          class="w-full px-4 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition"
          :disabled="isConverting"
        >
          <span v-if="isConverting">
            <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ $t('tools.jfif-jpg-converter.actions.converting') }}
          </span>
          <span v-else>
            {{ $t('tools.jfif-jpg-converter.actions.convertAll') }}
          </span>
        </button>
      </div>
    </div>
    
    <!-- 结果区域 -->
    <div v-if="convertedFiles.length > 0" class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6 mb-6">
      <h2 class="text-xl font-bold mb-4">{{ $t('tools.jfif-jpg-converter.results.title') }}</h2>
      
      <div class="max-h-96 overflow-auto mb-4 border border-gray-200 dark:border-gray-700 rounded-lg">
        <table class="w-full text-sm text-gray-700 dark:text-gray-300">
          <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0">
            <tr>
              <th class="px-4 py-2 text-left">{{ $t('tools.jfif-jpg-converter.results.originalName') }}</th>
              <th class="px-4 py-2 text-left">{{ $t('tools.jfif-jpg-converter.results.convertedName') }}</th>
              <th class="px-4 py-2 text-right">{{ $t('tools.jfif-jpg-converter.results.originalSize') }}</th>
              <th class="px-4 py-2 text-right">{{ $t('tools.jfif-jpg-converter.results.convertedSize') }}</th>
              <th class="px-4 py-2 text-center">{{ $t('tools.jfif-jpg-converter.results.actions') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(file, index) in convertedFiles" :key="index" class="border-b border-gray-200 dark:border-gray-600">
              <td class="px-4 py-2 truncate max-w-[120px]">{{ file.originalName }}</td>
              <td class="px-4 py-2 truncate max-w-[120px]">{{ file.convertedName }}</td>
              <td class="px-4 py-2 text-right">{{ formatFileSize(file.originalSize) }}</td>
              <td class="px-4 py-2 text-right">
                <span :class="file.originalSize > file.convertedSize ? 'text-green-500' : 'text-red-500'">
                  {{ formatFileSize(file.convertedSize) }}
                  <span class="text-xs ml-1">
                    ({{ calculateSizeDifference(file.originalSize, file.convertedSize) }})
                  </span>
                </span>
              </td>
              <td class="px-4 py-2 text-center">
                <button 
                  @click="downloadFile(file)"
                  class="text-primary hover:text-primary-dark transition"
                  title="Download"
                >
                  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="flex space-x-2 justify-center">
        <button 
          @click="downloadAllFiles"
          class="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
        >
          <svg class="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {{ $t('tools.jfif-jpg-converter.actions.downloadAll') }}
        </button>
        <button 
          @click="resetResults"
          class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md"
        >
          {{ $t('tools.jfif-jpg-converter.actions.clearResults') }}
        </button>
      </div>
    </div>
    
    <!-- 下半部分：描述信息 -->
    <div v-if="convertedFiles.length === 0" class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6">
      <h2 class="text-xl font-bold mb-4">{{ $t('tools.jfif-jpg-converter.info.title') }}</h2>
      
      <!-- 描述内容 -->
      <div class="prose prose-sm dark:prose-invert mb-6">
        <p>{{ $t('tools.jfif-jpg-converter.info.description') }}</p>
        
        <h3>{{ $t('tools.jfif-jpg-converter.info.whatIs.title') }}</h3>
        <p v-html="t('tools.jfif-jpg-converter.info.whatIs.content')"></p>
        
        <h3>{{ $t('tools.jfif-jpg-converter.info.whyConvert.title') }}</h3>
        <ul>
          <li>{{ $t('tools.jfif-jpg-converter.info.whyConvert.reason1') }}</li>
          <li>{{ $t('tools.jfif-jpg-converter.info.whyConvert.reason2') }}</li>
          <li>{{ $t('tools.jfif-jpg-converter.info.whyConvert.reason3') }}</li>
          <li>{{ $t('tools.jfif-jpg-converter.info.whyConvert.reason4') }}</li>
        </ul>
        
        <h3>{{ $t('tools.jfif-jpg-converter.info.howItWorks.title') }}</h3>
        <p>{{ $t('tools.jfif-jpg-converter.info.howItWorks.content') }}</p>
        
        <!-- 隐私信息 -->
        <h3>{{ $t('tools.jfif-jpg-converter.info.privacy.title') }}</h3>
        <p>{{ $t('tools.jfif-jpg-converter.info.privacy.content') }}</p>
      </div>
      
      <!-- 提示框 -->
      <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-blue-800 dark:text-blue-200">
        <h3 class="font-medium mb-2 flex items-center">
          <svg class="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ $t('tools.jfif-jpg-converter.info.tips.title') }}
        </h3>
        <ul class="list-disc list-inside text-sm space-y-1">
          <li>{{ $t('tools.jfif-jpg-converter.info.tips.tip1') }}</li>
          <li>{{ $t('tools.jfif-jpg-converter.info.tips.tip2') }}</li>
          <li>{{ $t('tools.jfif-jpg-converter.info.tips.tip3') }}</li>
          <li>{{ $t('tools.jfif-jpg-converter.info.tips.tip4') }}</li>
          <li>{{ $t('tools.jfif-jpg-converter.info.tips.tip5') }}</li>
        </ul>
      </div>
    </div>
    
    <!-- SEO 文章内容 -->
    <JfifJpgConverterArticle class="mt-6" />
    
    <!-- 预览区域 -->
    <div v-if="selectedPreviewFile" class="mt-6 border rounded-lg overflow-hidden">
      <div class="flex justify-between bg-gray-50 dark:bg-gray-700 p-3">
        <h3 class="font-bold">{{ $t('tools.jfif-jpg-converter.preview.title') }}</h3>
        <button @click="selectedPreviewFile = null" class="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
      
      <div class="flex flex-col md:flex-row">
        <div class="flex-1 p-3 border-r border-gray-200 dark:border-gray-600">
          <h4 class="text-center mb-2">{{ $t('tools.jfif-jpg-converter.preview.before') }}</h4>
          <img :src="selectedPreviewFile.originalUrl" class="max-w-full max-h-64 mx-auto" />
        </div>
        <div class="flex-1 p-3">
          <h4 class="text-center mb-2">{{ $t('tools.jfif-jpg-converter.preview.after') }}</h4>
          <img :src="selectedPreviewFile.previewUrl" class="max-w-full max-h-64 mx-auto" />
        </div>
      </div>
    </div>
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import JfifJpgConverterArticle from './JfifJpgConverterArticle.vue';

// State variables
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()
const fileInput = ref(null);
const isDragging = ref(false);
const files = ref([]);
const convertedFiles = ref([]);
const isConverting = ref(false);
const showAdvanced = ref(true);
const selectedPreviewFile = ref(null);

// Conversion settings
const quality = ref(85);
const preserveMetadata = ref(true);
const filenameOption = ref('original');
const filenameTemplate = ref('converted-{name}');
const autoOptimize = ref(false);
const metadataOption = ref('preserve');

// Computed quality label
const qualityLabel = computed(() => {
  if (quality.value >= 90) return quality.value >= 98 ? 
    t('tools.jfif-jpg-converter.settings.qualityLabels.maximum') : 
    t('tools.jfif-jpg-converter.settings.qualityLabels.high');
  if (quality.value >= 70) return t('tools.jfif-jpg-converter.settings.qualityLabels.good');
  if (quality.value >= 50) return t('tools.jfif-jpg-converter.settings.qualityLabels.medium');
  if (quality.value >= 30) return t('tools.jfif-jpg-converter.settings.qualityLabels.low');
  return t('tools.jfif-jpg-converter.settings.qualityLabels.veryLow');
});

// Trigger file input
function triggerFileInput() {
  fileInput.value.click();
}

// Handle dragover
function onDragover(e) {
  isDragging.value = true;
}

// Handle file drop
function onFileDrop(e) {
  isDragging.value = false;
  const droppedFiles = Array.from(e.dataTransfer.files);
  processFiles(droppedFiles);
}

// Handle file selection
function onFileSelected(e) {
  const selectedFiles = Array.from(e.target.files);
  processFiles(selectedFiles);
}

// Process uploaded files
function processFiles(newFiles) {
  const validFiles = newFiles.filter(file => {
    const extension = getFileExtension(file.name).toLowerCase();
    return ['jfif', 'jpg', 'jpeg'].includes(extension);
  });
  
  if (validFiles.length === 0) {
    toastRef.value.show(t('tools.jfif-jpg-converter.messages.noValidFiles'));
    return;
  }
  
  // Add files to the list
  validFiles.forEach(file => {
    files.value.push({
      file: file,
      name: file.name,
      size: file.size,
      status: 'pending'
    });
  });
}

// Reset files
function resetFiles() {
  files.value = [];
}

// Reset results
function resetResults() {
  convertedFiles.value = [];
  resetFiles();
}

// Get file extension
function getFileExtension(filename) {
  return filename.split('.').pop();
}

// Format file size
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Calculate size difference as percentage
function calculateSizeDifference(originalSize, convertedSize) {
  const diff = originalSize - convertedSize;
  const percentage = (diff / originalSize) * 100;
  
  if (diff > 0) {
    return `-${percentage.toFixed(1)}%`;
  } else if (diff < 0) {
    return `+${Math.abs(percentage).toFixed(1)}%`;
  } else {
    return '0%';
  }
}

// Generate filename based on selected option
function generateFilename(originalName) {
  // Remove extension
  const nameWithoutExt = originalName.substring(0, originalName.lastIndexOf('.'));
  
  if (filenameOption.value === 'original') {
    return `${nameWithoutExt}.jpg`;
  } else if (filenameOption.value === 'converted') {
    return `converted-${nameWithoutExt}.jpg`;
  } else {
    // Custom template - replace {name} with the file name
    return filenameTemplate.value.replace('{name}', nameWithoutExt) + '.jpg';
  }
}

// Convert files
async function convertFiles() {
  if (files.value.length === 0 || isConverting.value) return;
  
  isConverting.value = true;
  convertedFiles.value = [];
  
  for (let i = 0; i < files.value.length; i++) {
    const fileObj = files.value[i];
    fileObj.status = 'converting';
    fileObj.progress = 0; // 初始化进度
    
    try {
      // 模拟进度更新
      const progressInterval = setInterval(() => {
        if (fileObj.progress < 90) {
          fileObj.progress += 5;
        }
      }, 200);
      
      const result = await convertSingleFile(fileObj.file);
      
      clearInterval(progressInterval);
      fileObj.progress = 100;
      
      convertedFiles.value.push({
        originalName: fileObj.name,
        convertedName: generateFilename(fileObj.name),
        originalSize: fileObj.size,
        convertedSize: result.size,
        dataUrl: result.dataUrl,
        blob: result.blob,
        originalUrl: URL.createObjectURL(fileObj.file),
        previewUrl: result.dataUrl
      });
      
      fileObj.status = 'done';
    } catch (error) {
      console.error('Error converting file:', error);
      fileObj.status = 'error';
    }
  }
  
  isConverting.value = false;
}

// Convert a single file
function convertSingleFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw image on canvas
        ctx.drawImage(img, 0, 0);
        
        // Convert to JPG with specified quality
        const jpgDataUrl = canvas.toDataURL('image/jpeg', quality.value / 100);
        
        // Convert data URL to Blob
        fetch(jpgDataUrl)
          .then(res => res.blob())
          .then(blob => {
            resolve({
              dataUrl: jpgDataUrl,
              blob: blob,
              size: blob.size
            });
          })
          .catch(reject);
      };
      
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      
      img.src = e.target.result;
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsDataURL(file);
  });
}

// Download a single converted file
function downloadFile(file) {
  saveAs(file.blob, file.convertedName);
}

// Download all converted files as ZIP
async function downloadAllFiles() {
  if (convertedFiles.value.length === 0) return;
  
  if (convertedFiles.value.length === 1) {
    // If only one file, download it directly
    downloadFile(convertedFiles.value[0]);
    return;
  }
  
  // If multiple files, create a ZIP
  const zip = new JSZip();
  
  // Add each file to the ZIP
  convertedFiles.value.forEach(file => {
    zip.file(file.convertedName, file.blob);
  });
  
  // Generate the ZIP and trigger download
  const zipBlob = await zip.generateAsync({ type: 'blob' });
  saveAs(zipBlob, 'converted-images.zip');
}
</script>

<style scoped>
@media (max-width: 640px) {
  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
  }
  
  /* 预览区域在小屏幕上的调整 */
  .flex-col-mobile {
    flex-direction: column;
  }
  
  /* 在移动设备上减小内边距 */
  .p-mobile-reduced {
    padding: 0.75rem !important;
  }
  
  /* 移动设备上缩小字体 */
  .text-mobile-sm {
    font-size: 0.875rem;
  }
}
</style>
