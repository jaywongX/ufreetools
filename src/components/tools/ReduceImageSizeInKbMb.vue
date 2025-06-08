<template>
  <div class="w-full">
    <div class="flex flex-col md:flex-row gap-6">
      <!-- 左侧输入区域 -->
      <div class="w-full md:w-1/2 flex flex-col gap-4">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-medium">{{ $t('tools.reduce-image-size-in-kb-mb.inputTitle') }}</h2>
            <!-- 清除按钮 -->
            <button @click="clearInput"
              class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              v-if="uploadedImages.length > 0">
              {{ $t('tools.reduce-image-size-in-kb-mb.clearInput') }}
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
                {{ $t('tools.reduce-image-size-in-kb-mb.dragAndDrop') }} {{ $t('tools.reduce-image-size-in-kb-mb.or') }}
                {{ $t('tools.reduce-image-size-in-kb-mb.browseFiles') }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ $t('tools.reduce-image-size-in-kb-mb.supportedFormats') }}
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
              {{ $t('tools.reduce-image-size-in-kb-mb.loadExample') }}
            </button>
          </div>

          <!-- 设置选项 -->
          <div class="mt-6">
            <h3 class="text-sm font-medium mb-3">{{ $t('tools.reduce-image-size-in-kb-mb.compressionSettings') }}</h3>

            <!-- 压缩模式选择 -->
            <div class="mb-4">
              <div class="flex items-center space-x-4">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="compressionMode" value="targetSize"
                    class="form-radio h-4 w-4 text-blue-600">
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{
                    $t('tools.reduce-image-size-in-kb-mb.targetSizeMode') }}</span>
                </label>
                <label class="inline-flex items-center">
                  <input type="radio" v-model="compressionMode" value="quality"
                    class="form-radio h-4 w-4 text-blue-600">
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{
                    $t('tools.reduce-image-size-in-kb-mb.qualityMode') }}</span>
                </label>
              </div>
            </div>

            <!-- 质量模式设置 -->
            <div v-if="compressionMode === 'quality'" class="space-y-4">
              <!-- 质量设置 -->
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.reduce-image-size-in-kb-mb.quality') }}: {{ quality }}%
                </label>
                <input type="range" min="1" max="100" v-model="quality"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              <!-- 最大宽度设置 -->
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.reduce-image-size-in-kb-mb.maxWidth') }}: {{ maxWidth === 0 ?
                    $t('tools.reduce-image-size-in-kb-mb.original') : maxWidth + 'px' }}
                </label>
                <input type="range" min="0" max="4000" step="100" v-model="maxWidth"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{{ $t('tools.reduce-image-size-in-kb-mb.original') }}</span>
                  <span>2000px</span>
                  <span>4000px</span>
                </div>
              </div>
            </div>

            <!-- 目标大小模式设置 -->
            <div v-else class="space-y-4">
              <div class="flex items-center space-x-2">
                <input type="number" v-model.number="targetSize" min="1"
                  class="block w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                <select v-model="targetSizeUnit"
                  class="block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <option value="KB">KB</option>
                  <option value="MB">MB</option>
                </select>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  {{ $t('tools.reduce-image-size-in-kb-mb.targetSizeHint') }}
                </span>
              </div>

              <!-- 预设大小按钮 -->
              <div class="flex flex-wrap gap-2">
                <button v-for="preset in targetSizePresets" :key="preset.size + preset.unit"
                  @click="setTargetSizePreset(preset.size, preset.unit)"
                  class="px-2 py-1 text-xs rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                  {{ preset.size }} {{ preset.unit }}
                </button>
              </div>
            </div>
          </div>

          <!-- 导出格式选择 -->
          <div class="mt-6">
            <h3 class="text-sm font-medium mb-2">{{ $t('tools.reduce-image-size-in-kb-mb.exportFormat') }}</h3>
            <div class="flex flex-wrap gap-3">
              <label v-for="format in exportFormats" :key="format.value" class="inline-flex items-center">
                <input type="radio" v-model="selectedFormat" :value="format.value"
                  class="form-radio h-4 w-4 text-blue-600">
                <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ format.label }}</span>
              </label>
            </div>
          </div>

          <!-- 转换按钮 -->
          <div class="mt-6">
            <button @click="processAllImages"
              class="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="uploadedImages.length === 0 || isProcessing">
              <svg v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              {{ isProcessing ? $t('tools.reduce-image-size-in-kb-mb.processing') :
                $t('tools.reduce-image-size-in-kb-mb.reduce') }}
            </button>
          </div>
        </div>
      </div>

      <!-- 右侧输出区域 -->
      <div class="w-full md:w-1/2 flex flex-col gap-4">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-medium">{{ $t('tools.reduce-image-size-in-kb-mb.outputTitle') }}</h2>
            <div class="flex space-x-2">
              <!-- 批量下载按钮 -->
              <button @click="downloadAllImages"
                class="inline-flex items-center justify-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="processedImages.length <= 1" v-if="processedImages.length > 0">
                {{ $t('tools.reduce-image-size-in-kb-mb.downloadAll') }}
              </button>
              <!-- 清除按钮 -->
              <button @click="clearOutput"
                class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                v-if="processedImages.length > 0">
                {{ $t('tools.reduce-image-size-in-kb-mb.clearOutput') }}
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
                  <div class="text-gray-500 dark:text-gray-400 text-xs flex space-x-2">
                    <span>{{ formatFileSize(image.originalSize) }} → {{ formatFileSize(image.size) }}</span>
                    <span :class="image.size > image.originalSize ? 'text-red-500' : 'text-green-500'">
                      ({{ image.size > image.originalSize ? '' : '-' }}{{ calculateReduction(image.originalSize,
                        image.size) }}%)
                    </span>
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

              <!-- 实时预览区域 -->
              <div class="relative overflow-hidden rounded-lg" style="height: 300px;">
                <div class="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <img :src="image.dataUrl" alt="Processed image"
                    class="max-w-full max-h-full object-contain transform transition-transform duration-200"
                    :style="{ transform: `scale(${zoomLevel}) translate(${panPosition.x}px, ${panPosition.y}px)` }"
                    @mousedown="startPan" @mousemove="pan" @mouseup="endPan" @mouseleave="endPan"
                    @wheel.prevent="zoom" />
                </div>

                <!-- 缩放控制 -->
                <div
                  class="absolute bottom-2 right-2 bg-white dark:bg-gray-800 rounded-lg shadow p-1 flex items-center">
                  <button @click="zoomOut"
                    class="p-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{{ Math.round(zoomLevel * 100) }}%</span>
                  <button @click="zoomIn"
                    class="p-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button @click="resetZoom"
                    class="ml-1 p-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
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
            <p class="text-gray-500 dark:text-gray-400">{{ $t('tools.reduce-image-size-in-kb-mb.noImagesYet') }}</p>
          </div>
        </div>
      </div>
    </div>
    <ReduceImageSizeInKbMbArticle />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import ReduceImageSizeInKbMbArticle from './ReduceImageSizeInKbMbArticle.vue';

const { t } = useI18n();

// 状态变量
const dragover = ref(false);
const quality = ref(80);
const maxWidth = ref(1500);
const selectedFormat = ref('jpeg');
const uploadedImages = ref([]);
const processedImages = ref([]);
const isProcessing = ref(false);

// 缩放和平移状态
const zoomLevel = ref(1);
const panPosition = ref({ x: 0, y: 0 });
const isPanning = ref(false);
const startPosition = ref({ x: 0, y: 0 });

// 在 script setup 部分添加这些变量
const compressionMode = ref('targetSize'); // 'quality' 或 'targetSize'
const targetSize = ref(100);
const targetSizeUnit = ref('KB');

// 目标大小预设
const targetSizePresets = [
  { size: 20, unit: 'KB' },
  { size: 50, unit: 'KB' },
  { size: 100, unit: 'KB' },
  { size: 200, unit: 'KB' },
  { size: 500, unit: 'KB' },
  { size: 1, unit: 'MB' },
  { size: 2, unit: 'MB' }
];

// 导出格式选项
const exportFormats = computed(() => [
  { value: 'jpeg', label: 'JPEG' },
  { value: 'png', label: 'PNG' },
  { value: 'webp', label: 'WEBP' },
  { value: 'bmp', label: 'BMP' }
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
  // 过滤出图像文件
  const imageFiles = files.filter(file => file.type.startsWith('image/'));

  if (imageFiles.length === 0) return;

  // 为每个图像创建预览
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

  // 自动预览加载 - 上传后立即处理图像
  if (uploadedImages.value.length > 0) {
    processAllImages();
  }
};

// 创建图像预览
const createPreview = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 设置预设大小
const setTargetSizePreset = (size, unit) => {
  targetSize.value = size;
  targetSizeUnit.value = unit;
};

// 计算目标大小（字节）
const targetSizeInBytes = computed(() => {
  const multiplier = targetSizeUnit.value === 'KB' ? 1024 : 1024 * 1024;
  return targetSize.value * multiplier;
});

// 修改 processAllImages 函数
const processAllImages = async () => {
  if (uploadedImages.value.length === 0) return;

  isProcessing.value = true;

  try {
    // 处理每个图像
    for (const image of uploadedImages.value) {
      try {
        let processedImage;

        if (compressionMode.value === 'quality') {
          // 使用质量模式
          processedImage = await reduceImageSize(image.file);
        } else {
          // 使用目标大小模式
          processedImage = await reduceImageToTargetSize(image.file);
        }

        // 检查是否已存在相同名称的图片，如果存在则移除
        const existingIndex = processedImages.value.findIndex(img => img.name === image.file.name);
        if (existingIndex !== -1) {
          processedImages.value.splice(existingIndex, 1);
        }

        processedImages.value.push({
          name: image.file.name,
          dataUrl: processedImage.dataUrl,
          size: processedImage.size,
          originalSize: image.file.size,
          extension: selectedFormat.value
        });
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  } finally {
    isProcessing.value = false;
  }
};

// 减小图像大小
const reduceImageSize = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // 创建画布
        const canvas = document.createElement('canvas');

        // 计算新的尺寸
        let newWidth = img.width;
        let newHeight = img.height;

        // 如果设置了最大宽度且原图宽度大于最大宽度
        if (maxWidth.value > 0 && img.width > maxWidth.value) {
          newWidth = maxWidth.value;
          newHeight = (img.height * maxWidth.value) / img.width;
        }

        canvas.width = newWidth;
        canvas.height = newHeight;

        // 绘制图像
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        // 获取压缩后的数据URL
        const format = selectedFormat.value;
        let mimeType;
        switch (format) {
          case 'jpeg':
            mimeType = 'image/jpeg';
            break;
          case 'png':
            mimeType = 'image/png';
            break;
          case 'webp':
            mimeType = 'image/webp';
            break;
          case 'bmp':
            mimeType = 'image/bmp';
            break;
          default:
            mimeType = 'image/jpeg';
        }
        const dataUrl = getOutputDataUrl(canvas, format, quality.value / 100);

        // 计算压缩后的大小
        const binaryData = atob(dataUrl.split(',')[1]);
        const size = binaryData.length;

        resolve({
          dataUrl,
          size
        });
      };

      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 修改 reduceImageToTargetSize 函数
const reduceImageToTargetSize = async (file) => {
  // 初始化参数
  let currentQuality = 0.9;
  let minQuality = 0.01;
  let maxQuality = 1;
  let currentSize = Infinity;
  let dataUrl = '';
  let iterations = 0;
  const maxIterations = 30;
  let bestResult = null;
  let bestDiff = Infinity;

  const targetSize = targetSizeInBytes.value;

  // 使用文件的实际原始大小，而不是转换后的大小
  const actualOriginalSize = file.size;

  // 如果目标大小大于原始大小，返回原始图像并显示提示
  if (targetSize > actualOriginalSize) {
    // 显示提示
    alert(t('tools.reduce-image-size-in-kb-mb.sizeIncreaseNotSupported'));

    // 转换为指定格式的高质量版本，但不尝试增大大小
    const originalResult = await compressWithQuality(file, 1.0);
    return {
      dataUrl: originalResult.dataUrl,
      size: originalResult.size
    };
  }

  // 获取转换为目标格式后的基准大小
  const convertedResult = await compressWithQuality(file, 1.0);
  const convertedSize = convertedResult.size;

  // 如果目标大小接近转换后的大小（例如，目标是转换后大小的80%以上），使用更保守的压缩方法
  if (targetSize > convertedSize * 0.8) {
    return await preciseQualityCompression(file, targetSize, convertedSize);
  }

  // 继续执行其他压缩逻辑...
  // 首先尝试仅用质量调整达到目标
  const initialQualityTest = await findOptimalQuality(file, targetSize);
  if (initialQualityTest && Math.abs(initialQualityTest.size - targetSize) / targetSize <= 0.05) {
    return initialQualityTest; // 如果质量调整能达到目标的5%误差范围内，直接返回
  }

  // 如果质量调整不足，尝试同时调整尺寸和质量
  const resizeAndQualityResult = await compressWithResizeAndQualityPrecise(file, targetSize);
  if (resizeAndQualityResult && Math.abs(resizeAndQualityResult.size - targetSize) / targetSize <= 0.05) {
    return resizeAndQualityResult;
  }

  // 如果前两种方法都不够精确，使用混合方法尝试更接近目标大小
  return await hybridCompression(file, targetSize, convertedSize);
};

// 更精确的质量压缩方法
const preciseQualityCompression = async (file, targetSize, originalSize) => {
  // 在高质量范围内进行更细致的搜索
  const qualitySteps = 20; // 更多的质量步长
  let bestResult = null;
  let bestDiff = Infinity;

  for (let i = 0; i <= qualitySteps; i++) {
    const quality = 0.5 + (i / qualitySteps) * 0.5; // 从0.5到1.0的质量范围
    const result = await compressWithQuality(file, quality);

    const diff = Math.abs(result.size - targetSize);
    if (diff < bestDiff) {
      bestDiff = diff;
      bestResult = { ...result };
    }

    // 如果已经足够接近，停止搜索
    if (diff / targetSize <= 0.01) {
      return result;
    }
  }

  return bestResult;
};

// 寻找最佳质量值
const findOptimalQuality = async (file, targetSize) => {
  let low = 0.01;
  let high = 1.0;
  let bestResult = null;
  let bestDiff = Infinity;
  const iterations = 10; // 二分查找迭代次数

  for (let i = 0; i < iterations; i++) {
    const mid = (low + high) / 2;
    const result = await compressWithQuality(file, mid);

    const diff = Math.abs(result.size - targetSize);
    if (diff < bestDiff) {
      bestDiff = diff;
      bestResult = { ...result };
    }

    if (result.size > targetSize) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return bestResult;
};

// 更精确的调整尺寸和质量的方法
const compressWithResizeAndQualityPrecise = async (file, targetSize) => {
  const img = await loadImage(file);
  const originalWidth = img.width;
  const originalHeight = img.height;

  // 计算可能的缩放比例
  const scaleSteps = 10;
  const qualitySteps = 10;
  let bestResult = null;
  let bestDiff = Infinity;

  // 尝试不同的缩放比例和质量组合
  for (let i = 0; i <= scaleSteps; i++) {
    const scale = 0.5 + (i / scaleSteps) * 0.5; // 从0.5到1.0的缩放范围

    for (let j = 0; j <= qualitySteps; j++) {
      const quality = 0.5 + (j / qualitySteps) * 0.5; // 从0.5到1.0的质量范围

      const result = await compressWithScaleAndQualityDirect(
        file,
        Math.round(originalWidth * scale),
        Math.round(originalHeight * scale),
        quality
      );

      const diff = Math.abs(result.size - targetSize);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestResult = { ...result };
      }

      // 如果已经足够接近，返回结果
      if (diff / targetSize <= 0.02) {
        return result;
      }
    }
  }

  return bestResult;
};

// 直接使用指定尺寸和质量压缩
const compressWithScaleAndQualityDirect = async (file, width, height, quality) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const format = selectedFormat.value;
        let mimeType;
        switch (format) {
          case 'jpeg':
            mimeType = 'image/jpeg';
            break;
          case 'png':
            mimeType = 'image/png';
            break;
          case 'webp':
            mimeType = 'image/webp';
            break;
          case 'bmp':
            mimeType = 'image/bmp';
            break;
          default:
            mimeType = 'image/jpeg';
        }

        const dataUrl = canvas.toDataURL(mimeType, quality);
        const binaryData = atob(dataUrl.split(',')[1]);
        const size = binaryData.length;

        resolve({
          dataUrl,
          size
        });
      };

      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 混合压缩方法 - 综合多种方法找到最佳结果
const hybridCompression = async (file, targetSize, originalSize) => {
  // 首先使用比较保守的初始压缩
  const compressionRatio = targetSize / originalSize;

  // 基于压缩比选择初始参数
  let initialQuality, initialScale;

  if (compressionRatio > 0.7) {
    // 高压缩比：优先保持尺寸，降低质量
    initialQuality = 0.7;
    initialScale = 1.0;
  } else if (compressionRatio > 0.4) {
    // 中等压缩比：均衡降低质量和尺寸
    initialQuality = 0.7;
    initialScale = 0.8;
  } else {
    // 低压缩比：显著降低质量和尺寸
    initialQuality = 0.6;
    initialScale = 0.6;
  }

  // 先尝试初始压缩
  const img = await loadImage(file);
  const newWidth = Math.round(img.width * initialScale);
  const newHeight = Math.round(img.height * initialScale);

  let result = await compressWithScaleAndQualityDirect(file, newWidth, newHeight, initialQuality);
  let currentSize = result.size;
  let bestResult = result;
  let bestDiff = Math.abs(currentSize - targetSize);

  // 如果初始压缩不够精确，进行迭代优化
  if (bestDiff / targetSize > 0.05) {
    // 确定是增加还是减少质量/尺寸
    const direction = currentSize > targetSize ? -1 : 1;

    // 微调质量
    for (let i = 1; i <= 5; i++) {
      const adjustedQuality = Math.max(0.1, Math.min(1.0, initialQuality + direction * i * 0.05));
      result = await compressWithScaleAndQualityDirect(file, newWidth, newHeight, adjustedQuality);

      const diff = Math.abs(result.size - targetSize);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestResult = result;
      }

      // 如果已经足够接近，停止搜索
      if (diff / targetSize <= 0.03) {
        break;
      }
    }

    // 如果质量调整后仍不够精确，微调尺寸
    if (bestDiff / targetSize > 0.05) {
      for (let i = 1; i <= 5; i++) {
        const scale = initialScale + direction * i * 0.05;
        if (scale <= 0.1 || scale > 1.0) continue;

        const adjustedWidth = Math.round(img.width * scale);
        const adjustedHeight = Math.round(img.height * scale);

        result = await compressWithScaleAndQualityDirect(
          file,
          adjustedWidth,
          adjustedHeight,
          initialQuality
        );

        const diff = Math.abs(result.size - targetSize);
        if (diff < bestDiff) {
          bestDiff = diff;
          bestResult = result;
        }

        // 如果已经足够接近，停止搜索
        if (diff / targetSize <= 0.03) {
          break;
        }
      }
    }
  }

  return bestResult;
};

// 使用指定质量压缩图像
const compressWithQuality = async (file, quality) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // 创建画布
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        // 绘制图像
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // 获取压缩后的数据URL
        const format = selectedFormat.value;
        const dataUrl = getOutputDataUrl(canvas, format, quality);

        // 计算压缩后的大小
        const binaryData = atob(dataUrl.split(',')[1]);
        const size = binaryData.length;

        resolve({
          dataUrl,
          size
        });
      };

      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 输出正确格式的DataURL
const getOutputDataUrl = (canvas, format, quality) => {
  let mimeType;
  switch (format) {
    case 'jpeg':
      mimeType = 'image/jpeg';
      break;
    case 'png':
      mimeType = 'image/png';
      break;
    case 'webp':
      mimeType = 'image/webp';
      break;
    case 'bmp':
      mimeType = 'image/bmp';
      break;
    default:
      mimeType = 'image/jpeg';
  }
  return canvas.toDataURL(mimeType, quality);
};

// 格式化文件大小显示
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// 计算减小的百分比
const calculateReduction = (originalSize, newSize) => {
  const change = ((originalSize - newSize) / originalSize) * 100;
  // 如果是负值（文件变大），返回带加号的百分比
  if (change < 0) {
    return `+${Math.abs(change).toFixed(1)}`;
  }
  return change.toFixed(1);
};

// 加载示例图片
const loadExampleImage = async () => {
  try {
    // 使用示例图片
    const exampleImageUrl = '/images/reduce-image-size-in-kb-mb.png';
    const response = await fetch(exampleImageUrl);
    const blob = await response.blob();
    const file = new File([blob], 'example.png', { type: 'image/png' });
    handleFiles([file]);
  } catch (error) {
    console.error('Error loading example image:', error);
    // 如果无法加载示例图片，创建一个简单的彩色画布作为示例
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');

    // 创建渐变背景
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#4facfe');
    gradient.addColorStop(1, '#00f2fe');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 添加文本
    ctx.font = 'bold 48px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Example Image', canvas.width / 2, canvas.height / 2);
    ctx.font = '24px Arial';
    ctx.fillText('1920 x 1080', canvas.width / 2, canvas.height / 2 + 60);

    // 转换为Blob并处理
    canvas.toBlob((blob) => {
      const file = new File([blob], 'example.jpg', { type: 'image/jpeg' });
      handleFiles([file]);
    }, 'image/jpeg');
  }
};

// 下载单个图像
const downloadImage = (index) => {
  if (index >= processedImages.value.length) return;

  const image = processedImages.value[index];
  const link = document.createElement('a');
  link.href = image.dataUrl;

  // 生成文件名：原文件名_reduced.扩展名
  const fileName = image.name.split('.');
  fileName.pop(); // 移除原始扩展名
  link.download = `${fileName.join('.')}_reduced.${image.extension}`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// 下载所有图像为ZIP
const downloadAllImages = async () => {
  if (processedImages.value.length <= 0) return;

  const zip = new JSZip();

  processedImages.value.forEach((image, index) => {
    // 从dataURL提取base64数据
    const base64Data = image.dataUrl.split(',')[1];

    // 生成文件名：原文件名_reduced.扩展名
    const fileName = image.name.split('.');
    fileName.pop(); // 移除原始扩展名
    const zipFileName = `${fileName.join('.')}_reduced.${image.extension}`

    zip.file(zipFileName, base64Data, { base64: true });
  });

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'reduced_images.zip');
};

// 加载图像辅助函数
const loadImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        resolve(img);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 使用调整尺寸和质量压缩
const compressWithResizeAndQuality = async (file, quality, targetSize) => {
  const img = await loadImage(file);
  let scale = 1.0;
  let result;

  // 逐步降低分辨率，直到达到目标大小
  do {
    scale *= 0.9; // 每次缩小10%
    const newWidth = Math.round(img.width * scale);
    const newHeight = Math.round(img.height * scale);

    result = await compressWithScaleAndQualityDirect(
      file,
      newWidth,
      newHeight,
      quality
    );

  } while (result.size > targetSize && scale > 0.1);

  return result;
};
</script>