<template>
  <div class="flex flex-col md:flex-row gap-6">
    <!-- 左侧输入区域 -->
    <div class="w-full md:w-1/2 flex flex-col gap-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-medium">{{ $t('tools.resize-to-1024x576-image.inputTitle') }}</h2>
          <!-- 添加清除按钮 -->
          <button @click="clearInput"
            class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            v-if="uploadedImages.length > 0">
            {{ $t('tools.resize-to-1024x576-image.clearInput') }}
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
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              {{ $t('tools.resize-to-1024x576-image.dragAndDrop') }} {{ $t('tools.resize-to-1024x576-image.or') }} {{
                $t('tools.resize-to-1024x576-image.browseFiles') }}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              {{ $t('tools.resize-to-1024x576-image.supportedFormats') }}
            </p>
          </div>
        </div>

        <!-- 上传的图片列表 -->
        <div v-if="uploadedImages.length > 0" class="mt-4 space-y-2">
          <div v-for="(image, index) in uploadedImages" :key="index"
            class="flex items-center justify-between p-2 border dark:border-gray-700 rounded-lg">
            <div class="flex items-center">
              <img :src="image.preview" class="w-12 h-12 object-cover rounded mr-2" />
              <span class="text-sm truncate max-w-[150px]">{{ image.file.name }}</span>
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
            {{ $t('tools.resize-to-1024x576-image.loadExample') }}
          </button>
        </div>

        <!-- 导出格式选择 -->
        <div class="mt-6">
          <h3 class="text-sm font-medium mb-2">{{ $t('tools.resize-to-1024x576-image.exportFormat') }}</h3>
          <div class="flex flex-wrap gap-4">
            <label v-for="format in exportFormats" :key="format.value" class="inline-flex items-center">
              <input type="radio" v-model="selectedFormat" :value="format.value"
                class="form-radio h-4 w-4 text-blue-600">
              <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">{{ format.label }}</span>
            </label>
          </div>
        </div>

        <!-- 转换按钮 -->
        <div class="mt-4">
          <button @click="processAllImages"
            class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="uploadedImages.length === 0 || isProcessing">
            <svg v-if="isProcessing" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
            {{ isProcessing ? $t('tools.resize-to-1024x576-image.processing') : $t('tools.resize-to-1024x576-image.convertImages') }}
          </button>
        </div>
      </div>
    </div>

    <!-- 右侧输出区域 -->
    <div class="w-full md:w-1/2 flex flex-col gap-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-medium">{{ $t('tools.resize-to-1024x576-image.outputTitle') }}</h2>
          <!-- 添加清除按钮 -->
          <div class="flex space-x-2">
            <!-- 打包下载全部按钮移到最上面 -->
            <button @click="downloadAllImages"
              class="inline-flex items-center justify-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="processedImages.length <= 1">
              {{ $t('tools.resize-to-1024x576-image.downloadAll') }}
            </button>
            <button @click="clearOutput"
              class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              v-if="processedImages.length > 0">
              {{ $t('tools.resize-to-1024x576-image.clearOutput') }}
            </button>
          </div>
        </div>

        <!-- 输出预览 -->
        <div v-if="processedImages.length > 0" class="space-y-4">
          <div v-for="(image, index) in processedImages" :key="index"
            class="border dark:border-gray-700 rounded-lg p-2">
            <div class="flex justify-between items-center mb-2">
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ image.name }} (1024x576)</p>
              <div class="flex space-x-2">
                <button @click="downloadImage(index)" class="p-1 text-blue-500 hover:text-blue-700" title="Download">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <button @click="removeProcessedImage(index)" class="p-1 text-red-500 hover:text-red-700" title="Remove">
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
                <img :src="image.dataUrl" alt="Resized image"
                  class="max-w-full max-h-full object-contain transform transition-transform duration-200"
                  :style="{ transform: `scale(${zoomLevel}) translate(${panPosition.x}px, ${panPosition.y}px)` }"
                  @mousedown="startPan" @mousemove="pan" @mouseup="endPan" @mouseleave="endPan" @wheel.prevent="zoom" />
              </div>

              <!-- 缩放控制 -->
              <div class="absolute bottom-2 right-2 bg-white dark:bg-gray-800 rounded-lg shadow p-1 flex items-center">
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
          <p class="text-gray-500 dark:text-gray-400">{{ $t('tools.resize-to-1024x576-image.noImagesYet') }}</p>
        </div>
      </div>
    </div>
  </div>
  <resizeTo1024x576ImageArticle />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import resizeTo1024x576ImageArticle from './ResizeTo1024x576ImageArticle.vue'

const { t } = useI18n();

// 状态变量
const dragover = ref(false);
const selectedFormat = ref('jpg');
const uploadedImages = ref([]);
const processedImages = ref([]);
const isProcessing = ref(false);

// 缩放和平移状态
const zoomLevel = ref(1);
const panPosition = ref({ x: 0, y: 0 });
const isPanning = ref(false);
const startPosition = ref({ x: 0, y: 0 });

// 导出格式选项
const exportFormats = computed(() => [
  { value: 'jpg', label: 'JPG' },
  { value: 'png', label: 'PNG' },
  { value: 'webp', label: 'WEBP' },
  { value: 'bmp', label: 'BMP' },
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
  processAllImages();
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

// 处理所有上传的图像
const processAllImages = async () => {
  if (uploadedImages.value.length === 0) return;

  isProcessing.value = true;

  try {
    // 清除之前处理的图像
    processedImages.value = [];

    // 处理每个图像
    for (const image of uploadedImages.value) {
      try {
        const resizedImage = await resizeImage(image.file);
        processedImages.value.push({
          name: image.file.name,
          dataUrl: resizedImage,
          originalFile: image.file
        });
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  } finally {
    isProcessing.value = false;
  }
};

// 调整图像大小
const resizeImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // 创建画布并设置为YouTube缩略图尺寸
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 576;
        const ctx = canvas.getContext('2d');

        // 填充白色背景
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 计算缩放和居中位置
        let scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        let x = (canvas.width - img.width * scale) / 2;
        let y = (canvas.height - img.height * scale) / 2;

        // 绘制图像
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

        // 转换为数据URL
        resolve(canvas.toDataURL(`image/${selectedFormat.value}`, 0.9));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 加载示例图片
const loadExampleImage = async () => {
  try {
    // 使用简单的示例图片数据
    const exampleImageBlob = await fetch('/images/resize-to-1024x576-image.png').then(r => r.blob());
    const file = new File([exampleImageBlob], 'resize-to-1024x576-image.png', { type: 'image/jpeg' });
    handleFiles([file]);
  } catch (error) {
    console.error('Error loading example image:', error);
    // 如果无法加载外部图片，创建一个简单的彩色画布作为示例
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 576;
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
    ctx.fillText('YouTube Thumbnail', canvas.width / 2, canvas.height / 2);
    ctx.font = '24px Arial';
    ctx.fillText('1024 x 576', canvas.width / 2, canvas.height / 2 + 60);

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
  link.download = `youtube_${image.name.split('.')[0]}.${selectedFormat.value}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// 下载所有图像为ZIP
const downloadAllImages = async () => {
  if (processedImages.value.length <= 1) return;

  const zip = new JSZip();

  processedImages.value.forEach((image, index) => {
    // 从dataURL提取base64数据
    const base64Data = image.dataUrl.split(',')[1];
    zip.file(`youtube_${index + 1}_${image.name.split('.')[0]}.${selectedFormat.value}`, base64Data, { base64: true });
  });

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  saveAs(zipBlob, `youtube_thumbnails_${new Date().getTime()}.zip`);
};

// 移除单个上传的图像
const removeImage = (index) => {
  uploadedImages.value.splice(index, 1);
  // 如果删除了所有图像，也清除处理后的图像
  if (uploadedImages.value.length === 0) {
    processedImages.value = [];
  }
};

// 移除单个处理后的图像
const removeProcessedImage = (index) => {
  processedImages.value.splice(index, 1);
};

// 清除输入和输出
const clearInput = () => {
  uploadedImages.value = [];
  if (document.querySelector('input[type="file"]')) {
    document.querySelector('input[type="file"]').value = '';
  }
};

const clearOutput = () => {
  processedImages.value = [];
};

// 缩放功能
const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.1, 3);
};

const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.1, 0.5);
};

const resetZoom = () => {
  zoomLevel.value = 1;
  panPosition.value = { x: 0, y: 0 };
};

const zoom = (e) => {
  if (e.deltaY < 0) {
    zoomIn();
  } else {
    zoomOut();
  }
};

// 平移功能
const startPan = (e) => {
  isPanning.value = true;
  startPosition.value = { x: e.clientX - panPosition.value.x, y: e.clientY - panPosition.value.y };
};

const pan = (e) => {
  if (!isPanning.value) return;
  panPosition.value = {
    x: e.clientX - startPosition.value.x,
    y: e.clientY - startPosition.value.y
  };
};

const endPan = () => {
  isPanning.value = false;
};

// 组件挂载时初始化
onMounted(() => {
  // 监听键盘事件，按Escape键重置缩放
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      resetZoom();
    }
  });
  loadExampleImage();
});
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
  }
}
</style>