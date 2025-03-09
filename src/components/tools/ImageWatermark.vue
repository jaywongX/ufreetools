<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <!-- 工具控制栏 -->
    <div class="flex flex-wrap items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex space-x-2 mb-2 sm:mb-0">
        <button 
          @click="clearImage" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!imageFile || isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          清空
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
    </div>
    
    <!-- 水印设置 -->
    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
      <!-- 水印文字 -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">水印文字</label>
        <input 
          type="text" 
          v-model="watermarkText"
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-gray-300"
          placeholder="请输入水印文字"
        >
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 左侧：颜色和透明度 -->
        <div class="space-y-4">
          <!-- 水印颜色 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">水印颜色</label>
            <div class="space-y-3">
              <div class="flex flex-wrap gap-2">
                <button 
                  v-for="color in commonColors" 
                  :key="color.value"
                  @click="watermarkColor = color.value"
                  class="group relative"
                >
                  <div 
                    class="w-8 h-8 rounded-lg border shadow-sm transition-transform transform hover:scale-110"
                    :class="[
                      watermarkColor === color.value ? 'ring-2 ring-primary ring-offset-2' : 'hover:ring-2 hover:ring-gray-400',
                      color.value === '#ffffff' ? 'border-gray-300' : ''
                    ]"
                    :style="{ backgroundColor: color.value }"
                  ></div>
                  <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs whitespace-nowrap bg-gray-800 text-white px-2 py-1 rounded">
                    {{ color.name }}
                  </div>
                </button>
              </div>
              <div class="flex items-center space-x-2">
                <input 
                  type="color" 
                  v-model="watermarkColor"
                  class="w-8 h-8 p-1 rounded cursor-pointer"
                >
                <span class="text-sm text-gray-600 dark:text-gray-400">自定义颜色</span>
              </div>
            </div>
          </div>
          
          <!-- 透明度 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">透明度</label>
            <div class="flex items-center space-x-3">
              <input 
                type="range" 
                v-model="opacity"
                min="0"
                max="1"
                step="0.1"
                class="flex-1"
              >
              <span class="text-sm text-gray-600 dark:text-gray-400 w-12 text-center">{{Math.round(opacity * 10)}}</span>
            </div>
          </div>
        </div>
        
        <!-- 右侧：字体大小、间隔和旋转 -->
        <div class="space-y-4">
          <!-- 字体大小 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">字体大小</label>
            <div class="flex items-center space-x-3">
              <input 
                type="range" 
                v-model="fontSize"
                min="12"
                max="48"
                step="1"
                class="flex-1"
              >
              <span class="text-sm text-gray-600 dark:text-gray-400 w-12 text-center">{{fontSize}}</span>
            </div>
          </div>
          
          <!-- 水印间隔 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">水印间隔</label>
            <div class="flex items-center space-x-3">
              <input 
                type="range" 
                v-model="spacing"
                min="50"
                max="300"
                step="10"
                class="flex-1"
              >
              <span class="text-sm text-gray-600 dark:text-gray-400 w-12 text-center">{{spacing}}</span>
            </div>
          </div>
          
          <!-- 旋转角度 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">旋转角度</label>
            <div class="flex items-center space-x-3">
              <input 
                type="range" 
                v-model="rotation"
                min="-45"
                max="45"
                step="5"
                class="flex-1"
              >
              <span class="text-sm text-gray-600 dark:text-gray-400 w-12 text-center">{{rotation}}°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 图片预览区域 -->
    <div class="p-4">
      <div class="grid grid-cols-2 gap-4">
        <!-- 原始图片 -->
        <div>
          <div class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">原始图片</div>
          <label class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 h-[calc(100vh-650px)] min-h-[300px] flex items-center justify-center cursor-pointer hover:border-primary dark:hover:border-primary-light transition-colors duration-200">
            <input 
              type="file" 
              class="hidden" 
              accept="image/*" 
              @change="handleImageUpload"
              :disabled="isProcessing"
            >
            <img 
              v-if="previewUrl" 
              :src="previewUrl" 
              class="w-full h-full object-cover"
              alt="原始图片"
            >
            <div v-else class="text-gray-400 dark:text-gray-500 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p class="text-sm">点击上传图片</p>
            </div>
          </label>
        </div>
        
        <!-- 处理后图片 -->
        <div>
          <div class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">处理后图片</div>
          <div class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 h-[calc(100vh-650px)] min-h-[300px] flex items-center justify-center">
            <img 
              v-if="processedImageUrl" 
              :src="processedImageUrl" 
              class="w-full h-full object-cover cursor-pointer"
              @click="downloadImage"
              alt="处理后图片"
              title="点击下载"
            >
            <div v-else class="text-gray-400 dark:text-gray-500 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p class="text-sm">处理后的图片将显示在这里</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// 状态数据
const imageFile = ref(null);
const previewUrl = ref('');
const processedImageUrl = ref('');
const message = ref('');
const messageType = ref('success');
const isProcessing = ref(false);

// 常用颜色
const commonColors = [
  { name: '白色', value: '#ffffff' },
  { name: '黑色', value: '#000000' },
  { name: '红色', value: '#ff0000' },
  { name: '深蓝', value: '#0066ff' },
  { name: '绿色', value: '#00cc00' },
  { name: '紫色', value: '#800080' },
  { name: '橙色', value: '#ff6600' },
  { name: '灰色', value: '#808080' }
];

// 水印设置
const watermarkText = ref('');
const fontSize = ref(24);
const watermarkColor = ref('#ffffff');
const opacity = ref(0.6);
const rotation = ref(-30);
const spacing = ref(180);

// 监听设置变化,自动重新处理图片
watch([watermarkText, fontSize, watermarkColor, opacity, rotation, spacing], () => {
  if (imageFile.value) {
    processImage();
  }
});

// 处理图片上传
const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  
  // 验证文件类型
  if (!file.type.startsWith('image/')) {
    showMessage('请上传图片文件', 'error');
    return;
  }
  
  imageFile.value = file;
  previewUrl.value = URL.createObjectURL(file);
  processedImageUrl.value = ''; // 清空处理后的图片
  
  // 自动处理图片
  await processImage();
};

// 处理图片
const processImage = async () => {
  if (!imageFile.value || !watermarkText.value) return;
  
  isProcessing.value = true;
  showMessage('正在处理图片...', 'success');
  
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = previewUrl.value;
    });
    
    // 设置画布尺寸
    canvas.width = img.width;
    canvas.height = img.height;
    
    // 绘制原始图片
    ctx.drawImage(img, 0, 0);
    
    // 设置水印样式
    ctx.font = `${fontSize.value}px Arial`;
    ctx.fillStyle = watermarkColor.value;
    ctx.globalAlpha = opacity.value;
    
    // 计算文本尺寸
    const textWidth = ctx.measureText(watermarkText.value).width;
    const textHeight = fontSize.value;
    
    // 计算偏移量,使水印更均匀分布
    const xOffset = spacing.value * Math.cos((rotation.value * Math.PI) / 180);
    const yOffset = spacing.value * Math.sin((rotation.value * Math.PI) / 180);
    
    // 计算重复次数,增加覆盖范围
    const cols = Math.ceil(canvas.width / (spacing.value * 0.7)) + 2;
    const rows = Math.ceil(canvas.height / (spacing.value * 0.7)) + 2;
    
    // 计算起始位置,使水印从画布外开始
    const startX = -spacing.value;
    const startY = -spacing.value;
    
    // 绘制重复的水印
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // 交错排列,使水印分布更自然
        const x = startX + j * spacing.value + (i % 2) * (spacing.value / 2);
        const y = startY + i * spacing.value * 0.7;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation.value * Math.PI) / 180);
        ctx.fillText(watermarkText.value, 0, 0);
        ctx.restore();
      }
    }
    
    // 重置透明度
    ctx.globalAlpha = 1;
    
    // 转换为图片URL
    processedImageUrl.value = canvas.toDataURL('image/png');
    showMessage('图片处理完成', 'success');
  } catch (error) {
    console.error('Error processing image:', error);
    showMessage('图片处理失败', 'error');
  } finally {
    isProcessing.value = false;
  }
};

// 清空图片
const clearImage = () => {
  imageFile.value = null;
  previewUrl.value = '';
  processedImageUrl.value = '';
  message.value = '';
};

// 下载处理后的图片
const downloadImage = () => {
  if (!processedImageUrl.value) return;
  
  const link = document.createElement('a');
  link.download = '水印图片.png';
  link.href = processedImageUrl.value;
  link.click();
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
</script>

<style scoped>
.btn-sm {
  @apply px-3 py-1.5 rounded text-sm font-medium flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200;
}
</style> 