<template>
  <div class="w-full">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- 左侧输入区域 -->
      <div class="w-full md:w-1/2 flex flex-col gap-4">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-medium">{{ $t('tools.imgly-remove-image-background.inputTitle') }}</h2>
            <!-- 清除按钮 -->
            <button @click="clearInput"
              class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              v-if="uploadedImages.length > 0">
              {{ $t('tools.imgly-remove-image-background.clearInput') }}
            </button>
          </div>

          <!-- 文件上传区域 -->
          <div
            class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            @dragover.prevent="dragover = true" @dragleave.prevent="dragover = false" @drop.prevent="onDrop"
            :class="{ 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700': dragover }"
            @click="$refs.fileInput.click()">
            <input ref="fileInput" type="file" class="hidden" accept="image/*" multiple @change="onFileSelected">
            <div class="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 mb-3" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                {{ $t('tools.imgly-remove-image-background.dragAndDrop') }} {{ $t('tools.imgly-remove-image-background.or') }}
                {{ $t('tools.imgly-remove-image-background.browseFiles') }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ $t('tools.imgly-remove-image-background.supportedFormats') }}
              </p>
            </div>
          </div>

          <!-- 上传的图片列表 -->
          <div v-if="uploadedImages.length > 0" class="mt-4 space-y-2">
            <div v-for="(image, index) in uploadedImages" :key="index"
              class="flex items-center justify-between p-2 border dark:border-gray-700 rounded-lg">
              <div class="flex items-center">
                <img :src="image.preview" class="w-12 h-12 object-cover rounded mr-2" />
                <div class="text-sm">
                  <div class="truncate max-w-[150px]">{{ image.file.name }}</div>
                  <div class="text-gray-500 dark:text-gray-400 text-xs">{{ formatFileSize(image.file.size) }}</div>
                </div>
              </div>
              <div class="flex space-x-2">
                <button @click="removeImage(index)" class="p-1 text-red-500 hover:text-red-700" title="Remove">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- 示例图片按钮 -->
          <div class="mt-4">
            <button @click="loadExampleImage"
              class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {{ $t('tools.imgly-remove-image-background.loadExample') }}
            </button>
          </div>

          <!-- 设置选项 -->
          <div class="mt-6">
            <h3 class="text-sm font-medium mb-3">{{ $t('tools.imgly-remove-image-background.processingSettings') }}</h3>

            <!-- 输出格式选择 -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ $t('tools.imgly-remove-image-background.outputFormat') }}
              </label>
              <div class="flex flex-wrap gap-3">
                <label v-for="format in outputFormats" :key="format.value" class="inline-flex items-center">
                  <input type="radio" v-model="selectedFormat" :value="format.value"
                    class="form-radio h-4 w-4 text-blue-600">
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ format.label }}</span>
                </label>
              </div>
            </div>

            <!-- 背景替换选项 -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ $t('tools.imgly-remove-image-background.backgroundOption') }}
              </label>
              <div class="space-y-2">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="backgroundOption" value="transparent"
                    class="form-radio h-4 w-4 text-blue-600">
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {{ $t('tools.imgly-remove-image-background.transparent') }}
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="radio" v-model="backgroundOption" value="color"
                    class="form-radio h-4 w-4 text-blue-600">
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {{ $t('tools.imgly-remove-image-background.solidColor') }}
                  </span>
                </label>
              </div>
              
              <!-- 颜色选择器 -->
              <div v-if="backgroundOption === 'color'" class="mt-2 flex items-center space-x-2">
                <input type="color" v-model="backgroundColor" 
                  class="w-8 h-8 rounded border border-gray-300 dark:border-gray-600">
                <span class="text-sm text-gray-600 dark:text-gray-400">{{ backgroundColor }}</span>
              </div>
            </div>
          </div>

          <!-- 处理按钮 -->
          <div class="mt-6">
            <button @click="processAllImages"
              class="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              :disabled="uploadedImages.length === 0 || isProcessing">
              <svg v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              {{ isProcessing ? $t('tools.imgly-remove-image-background.processing') :
                $t('tools.imgly-remove-image-background.removeBackground') }}
            </button>
          </div>

          <!-- 进度显示 -->
          <div v-if="isProcessing && processingProgress > 0" class="mt-4">
            <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span>{{ $t('tools.imgly-remove-image-background.progress') }}</span>
              <span>{{ processingProgress }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                :style="{ width: processingProgress + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧输出区域 -->
      <div class="w-full md:w-1/2 flex flex-col gap-4">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-medium">{{ $t('tools.imgly-remove-image-background.outputTitle') }}</h2>
            <div class="flex space-x-2">
              <!-- 批量下载按钮 -->
              <button @click="downloadAllImages"
                class="inline-flex items-center justify-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                :disabled="processedImages.length <= 1" v-if="processedImages.length > 0">
                {{ $t('tools.imgly-remove-image-background.downloadAll') }}
              </button>
              <!-- 清除按钮 -->
              <button @click="clearOutput"
                class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                v-if="processedImages.length > 0">
                {{ $t('tools.imgly-remove-image-background.clearOutput') }}
              </button>
            </div>
          </div>

          <!-- 输出预览 -->
          <div v-if="processedImages.length > 0" class="space-y-4">
            <div v-for="(image, index) in processedImages" :key="index"
              class="border dark:border-gray-700 rounded-lg p-3">
              <div class="flex justify-between items-center mb-2">
                <div class="text-sm">
                  <div class="font-medium">{{ image.name }}</div>
                  <div class="text-gray-500 dark:text-gray-400 text-xs">
                    {{ $t('tools.imgly-remove-image-background.backgroundRemoved') }}
                  </div>
                </div>
                <div class="flex space-x-2">
                  <button @click="downloadImage(index)" class="p-1 text-blue-500 hover:text-blue-700" title="Download">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                  <button @click="removeProcessedImage(index)" class="p-1 text-red-500 hover:text-red-700"
                    title="Remove">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 对比预览区域 -->
              <div class="grid grid-cols-2 gap-2">
                <!-- 原图 -->
                <div class="relative">
                  <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {{ $t('tools.imgly-remove-image-background.original') }}
                  </div>
                  <div class="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700" style="height: 200px;">
                    <img :src="image.originalDataUrl" alt="Original image"
                      class="w-full h-full object-contain" />
                  </div>
                </div>
                
                <!-- 处理后 -->
                <div class="relative">
                  <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {{ $t('tools.imgly-remove-image-background.processed') }}
                  </div>
                  <div class="relative overflow-hidden rounded-lg" style="height: 200px;"
                    :style="{ backgroundColor: backgroundOption === 'transparent' ? 'transparent' : backgroundColor }"
                    :class="backgroundOption === 'transparent' ? 'bg-checkerboard' : ''">
                    <img :src="image.dataUrl" alt="Processed image"
                      class="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 空状态 -->
          <div v-else class="border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <p class="text-gray-500 dark:text-gray-400">{{ $t('tools.imgly-remove-image-background.noImagesYet') }}</p>
          </div>
        </div>
      </div>
    </div>
    <ImglyRemoveImageBackgroundArticle />
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { removeBackground } from '@imgly/background-removal';
import ImglyRemoveImageBackgroundArticle from './ImglyRemoveImageBackgroundArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n();

// 状态变量
const dragover = ref(false);
const uploadedImages = ref([]);
const processedImages = ref([]);
const isProcessing = ref(false);
const processingProgress = ref(0);
const selectedFormat = ref('png');
const backgroundOption = ref('transparent');
const backgroundColor = ref('#ffffff');

// 输出格式选项
const outputFormats = computed(() => [
  { value: 'png', label: 'PNG' },
  { value: 'jpeg', label: 'JPEG' },
  { value: 'webp', label: 'WEBP' }
]);

// 文件拖放处理
const onDrop = (e) => {
  dragover.value = false;
  const files = [...e.dataTransfer.files];
  handleFiles(files);
};

// 文件选择处理
const onFileSelected = (e) => {
  const files = [...e.target.files];
  handleFiles(files);
};

// 处理上传的文件
const handleFiles = async (files) => {
  const imageFiles = files.filter(file => file.type.startsWith('image/'));
  if (imageFiles.length === 0) return;

  for (const file of imageFiles) {
    try {
      const preview = await createPreview(file);
      uploadedImages.value.push({
        file,
        preview
      });
    } catch (error) {
      console.error('Error creating preview:', error);
    }
  }
};

// 创建图像预览
const createPreview = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 加载示例图片
const loadExampleImage = async () => {
  try {
    const response = await fetch('/images/landing-illustration-dark.png');
    const blob = await response.blob();
    const file = new File([blob], 'landing-illustration-dark.png', { type: blob.type });
    const preview = await createPreview(file);
    uploadedImages.value.push({ file, preview });
  } catch (error) {
    console.error('Error loading example image:', error);
  }
};

// 移除上传的图片
const removeImage = (index) => {
  uploadedImages.value.splice(index, 1);
};

// 清除输入
const clearInput = () => {
  uploadedImages.value = [];
};

// 清除输出
const clearOutput = () => {
  processedImages.value = [];
};

// 移除处理后的图片
const removeProcessedImage = (index) => {
  processedImages.value.splice(index, 1);
};

// 格式化文件大小
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// 应用背景和格式转换
const applyBackgroundAndFormat = async (blob) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      // 如果选择了纯色背景，先填充背景色
      if (backgroundOption.value === 'color') {
        ctx.fillStyle = backgroundColor.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // 绘制处理后的图片
      ctx.drawImage(img, 0, 0);

      // 根据选择的格式导出
      let mimeType;
      let quality = 0.9;
      
      switch (selectedFormat.value) {
        case 'jpeg':
          mimeType = 'image/jpeg';
          break;
        case 'png':
          mimeType = 'image/png';
          break;
        case 'webp':
          mimeType = 'image/webp';
          break;
        default:
          mimeType = 'image/png';
      }

      canvas.toBlob(resolve, mimeType, quality);
    };
    
    img.src = URL.createObjectURL(blob);
  });
};

// Blob转DataURL
const blobToDataUrl = (blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(blob);
  });
};

// 获取输出文件名
const getOutputFileName = (originalName) => {
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  const extension = selectedFormat.value === 'jpeg' ? 'jpg' : selectedFormat.value;
  return `${nameWithoutExt}_no_bg.${extension}`;
};

// 下载单个图片
const downloadImage = (index) => {
  const image = processedImages.value[index];
  const link = document.createElement('a');
  link.href = image.dataUrl;
  link.download = image.name;
  link.click();
};

// 批量下载所有图片
const downloadAllImages = async () => {
  if (processedImages.value.length <= 1) {
    if (processedImages.value.length === 1) {
      downloadImage(0);
    }
    return;
  }

  const zip = new JSZip();
  
  for (const image of processedImages.value) {
    // 将dataUrl转换为blob
    const response = await fetch(image.dataUrl);
    const blob = await response.blob();
    zip.file(image.name, blob);
  }

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  saveAs(zipBlob, 'background-removed-images.zip');
};

// 修改处理图片的函数
const processAllImages = async () => {
  if (uploadedImages.value.length === 0) return;

  isProcessing.value = true;
  processingProgress.value = 0;

  try {
    const totalImages = uploadedImages.value.length;
    
    for (let i = 0; i < totalImages; i++) {
      const image = uploadedImages.value[i];
      
      // 更新进度：每个图片占总进度的 90%，剩余 10% 用于初始化
      const progressPerImage = 90 / totalImages;
      const currentProgress = 10 + (i * progressPerImage);
      processingProgress.value = Math.round(currentProgress);

      try {
        console.log(`Processing image ${i + 1}/${totalImages}: ${image.file.name}`);
        
        // 直接使用导入的 removeBackground 函数
        const blob = await removeBackground(image.file, {
          model: 'isnet_fp16',
          output: { format: 'image/png' }
        });
        
        // 更新进度：背景移除完成
        processingProgress.value = Math.round(currentProgress + (progressPerImage * 0.6));
        
        // 如果需要添加背景色或转换格式
        const processedBlob = await applyBackgroundAndFormat(blob);
        
        // 更新进度：格式转换完成
        processingProgress.value = Math.round(currentProgress + (progressPerImage * 0.8));
        
        // 创建数据URL
        const dataUrl = await blobToDataUrl(processedBlob);
        const originalDataUrl = image.preview;

        // 检查是否已存在相同名称的图片
        const existingIndex = processedImages.value.findIndex(img => img.name === image.file.name);
        if (existingIndex !== -1) {
          processedImages.value.splice(existingIndex, 1);
        }

        processedImages.value.push({
          name: getOutputFileName(image.file.name),
          dataUrl,
          originalDataUrl,
          blob: processedBlob
        });

        // 更新进度：当前图片处理完成
        processingProgress.value = Math.round(currentProgress + progressPerImage);
        
        console.log(`Successfully processed: ${image.file.name}`);
      } catch (error) {
        console.error('Error processing image:', image.file.name, error);
        // 即使出错也要继续处理其他图片，并更新进度
        processingProgress.value = Math.round(currentProgress + progressPerImage);
        toastRef.value.show(`处理图片 "${image.file.name}" 时出错: ${error.message}`);
      }
    }
    
    // 处理完成
    processingProgress.value = 100;
    console.log('All images processed successfully');
  } catch (error) {
    console.error('Error processing images:', error);
    toastRef.value.show('处理图片时出错，请重试。');
  } finally {
    isProcessing.value = false;
    // 延迟重置进度，让用户看到100%
    setTimeout(() => {
      processingProgress.value = 0;
    }, 1000);
  }
};

</script>

<style scoped>
/* 透明背景的棋盘格效果 */
.bg-checkerboard {
  background-image: 
    linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
    linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
    linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}

.dark .bg-checkerboard {
  background-image: 
    linear-gradient(45deg, #374151 25%, transparent 25%), 
    linear-gradient(-45deg, #374151 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, #374151 75%), 
    linear-gradient(-45deg, transparent 75%, #374151 75%);
}

</style>