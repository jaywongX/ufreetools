<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <div class="flex flex-col space-y-4">
        <!-- 图片上传区域 -->
        <div 
          class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center"
          :class="{ 'border-primary': isDragging }"
          @dragover.prevent="() => isDragging = true"
          @dragleave.prevent="() => isDragging = false"
          @drop.prevent="onDrop"
          @click="triggerFileInput"
        >
          <input 
            type="file" 
            ref="fileInput" 
            class="hidden" 
            accept="image/*" 
            @change="onFileChange"
            multiple
          >
          
          <div v-if="!files.length">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">拖放图片到此处或点击上传</h3>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">支持 JPG, PNG, GIF, WEBP 格式</p>
          </div>
          
          <div v-else class="text-gray-700 dark:text-gray-300">
            <p>已选择 {{ files.length }} 个文件</p>
            <button 
              class="mt-2 text-sm text-primary hover:underline"
              @click.stop="$refs.fileInput.click()"
            >
              更换文件
            </button>
          </div>
        </div>
        
        <!-- 压缩设置 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 质量设置 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              质量 ({{ quality }}%)
            </label>
            <input 
              type="range" 
              v-model.number="quality" 
              min="1" 
              max="100" 
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            >
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>低质量/小文件</span>
              <span>高质量/大文件</span>
            </div>
          </div>
          
          <!-- 最大尺寸设置 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              最大尺寸 ({{ maxWidth }} × {{ maxHeight }} px)
            </label>
            <div class="flex space-x-2">
              <input 
                type="number" 
                v-model.number="maxWidth" 
                min="1" 
                max="10000"
                class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                placeholder="宽度"
              >
              <span class="flex items-center text-gray-500">×</span>
              <input 
                type="number" 
                v-model.number="maxHeight" 
                min="1" 
                max="10000"
                class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                placeholder="高度"
              >
            </div>
            <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              设置为0表示保持原始尺寸
            </div>
          </div>
        </div>
        
        <!-- 输出格式设置 -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            输出格式
          </label>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="format in ['jpeg', 'png', 'webp']" 
              :key="format"
              @click="outputFormat = format"
              class="px-3 py-1.5 border rounded-md text-sm"
              :class="outputFormat === format ? 'bg-primary text-white border-primary' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700'"
            >
              {{ format.toUpperCase() }}
            </button>
          </div>
          <div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
            <span v-if="outputFormat === 'jpeg'">JPEG格式适合照片，不支持透明背景</span>
            <span v-else-if="outputFormat === 'png'">PNG格式支持透明背景，适合图标和图形</span>
            <span v-else-if="outputFormat === 'webp'">WebP格式提供更好的压缩率，但部分旧浏览器不支持</span>
          </div>
        </div>
        
        <!-- 压缩按钮 -->
        <div>
          <button 
            @click="compressImages"
            :disabled="!files.length || isCompressing"
            class="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          >
            <span v-if="isCompressing" class="inline-flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              压缩中...
            </span>
            <span v-else>开始压缩</span>
          </button>
        </div>
      </div>
    </div>
    
    <!-- 压缩结果 -->
    <div v-if="compressedImages.length" class="space-y-6">
      <div v-for="(img, index) in compressedImages" :key="index" class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 原始图片 -->
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">原始图片</h3>
            <img :src="img.original.url" alt="原始图片" class="w-full h-auto max-h-60 object-contain rounded border border-gray-200 dark:border-gray-700">
            <div class="text-sm text-gray-600 dark:text-gray-400">
              <div>文件名: {{ img.name }}</div>
              <div>尺寸: {{ img.original.width }} × {{ img.original.height }} px</div>
              <div>大小: {{ formatFileSize(img.original.size) }}</div>
            </div>
          </div>
          
          <!-- 压缩后图片 -->
          <div class="space-y-2">
            <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">压缩后</h3>
            <img :src="img.compressed.url" alt="压缩后图片" class="w-full h-auto max-h-60 object-contain rounded border border-gray-200 dark:border-gray-700">
            <div class="text-sm text-gray-600 dark:text-gray-400">
              <div>尺寸: {{ img.compressed.width }} × {{ img.compressed.height }} px</div>
              <div>大小: {{ formatFileSize(img.compressed.size) }}</div>
              <div>
                压缩率: 
                <span :class="{'text-green-600 dark:text-green-400': img.savingsPercent > 0, 'text-yellow-600 dark:text-yellow-400': img.savingsPercent <= 0}">
                  {{ img.savingsPercent > 0 ? '-' : '+' }}{{ Math.abs(img.savingsPercent).toFixed(1) }}%
                </span>
              </div>
            </div>
            <div class="flex space-x-2 mt-2">
              <button 
                @click="downloadImage(img)"
                class="px-3 py-1.5 bg-primary text-white rounded-md text-sm hover:bg-primary-dark"
              >
                下载
              </button>
              <button 
                @click="showOriginal(index)"
                class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600"
              >
                查看原图
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 批量下载按钮 -->
      <div v-if="compressedImages.length > 1" class="text-center">
        <button 
          @click="downloadAllImages"
          class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
        >
          下载所有图片
        </button>
      </div>
    </div>
    
    <!-- 技术说明 -->
    <div class="mt-8 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">关于图片压缩</h3>
      <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
        <p>本工具通过浏览器的Canvas API实现图片压缩，所有处理均在您的设备上完成，图片不会上传到服务器。</p>
        <p>压缩原理:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>调整图片尺寸：较小的尺寸意味着更少的像素数据</li>
          <li>降低质量：降低图片的品质参数，减少文件大小</li>
          <li>转换格式：不同的图片格式有不同的压缩特性</li>
        </ul>
        <p>适用场景:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>网站图片优化，提升加载速度</li>
          <li>减小邮件附件大小</li>
          <li>社交媒体上传前压缩</li>
          <li>存储空间优化</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

// 上传和预览状态
const isDragging = ref(false)
const fileInput = ref(null)
const files = ref([])
const originalImages = ref([])
const compressedImages = ref([])
const isCompressing = ref(false)

// 压缩设置
const quality = ref(75)
const maxWidth = ref(1920)
const maxHeight = ref(1080)
const outputFormat = ref('jpeg')

// 触发文件选择对话框
function triggerFileInput() {
  fileInput.value.click()
}

// 处理文件选择
function onFileChange(e) {
  const selectedFiles = Array.from(e.target.files)
  handleFiles(selectedFiles)
}

// 处理拖放
function onDrop(e) {
  isDragging.value = false
  const droppedFiles = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'))
  handleFiles(droppedFiles)
}

// 处理文件
function handleFiles(selectedFiles) {
  // 过滤出图片文件
  const imageFiles = selectedFiles.filter(file => file.type.startsWith('image/'))
  if (imageFiles.length === 0) {
    alert('请选择有效的图片文件')
    return
  }
  
  files.value = imageFiles
  originalImages.value = []
  compressedImages.value = []
  
  // 预加载图片以获取尺寸
  imageFiles.forEach(file => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        originalImages.value.push({
          file,
          img,
          width: img.width,
          height: img.height,
          url: e.target.result,
          size: file.size
        })
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  })
}

// 压缩图片
async function compressImages() {
  if (files.value.length === 0) return
  
  isCompressing.value = true
  compressedImages.value = []
  
  try {
    for (let i = 0; i < originalImages.value.length; i++) {
      const original = originalImages.value[i]
      const compressed = await compressImage(original)
      
      // 计算节省的文件大小百分比
      const savingsPercent = ((original.size - compressed.size) / original.size) * 100
      
      compressedImages.value.push({
        name: original.file.name,
        original: {
          url: original.url,
          width: original.width,
          height: original.height,
          size: original.size
        },
        compressed: {
          url: compressed.url,
          width: compressed.width,
          height: compressed.height,
          size: compressed.size,
          blob: compressed.blob
        },
        savingsPercent: savingsPercent
      })
      
      // 让UI有机会更新
      await nextTick()
    }
  } catch (error) {
    console.error('压缩图片时出错:', error)
    alert('压缩图片时出错: ' + error.message)
  } finally {
    isCompressing.value = false
  }
}

// 压缩单个图片
function compressImage(original) {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      // 计算新尺寸，保持宽高比
      let newWidth = original.width
      let newHeight = original.height
      
      if (maxWidth.value > 0 && maxHeight.value > 0) {
        if (original.width > maxWidth.value || original.height > maxHeight.value) {
          const ratioWidth = maxWidth.value / original.width
          const ratioHeight = maxHeight.value / original.height
          const ratio = Math.min(ratioWidth, ratioHeight)
          
          newWidth = Math.floor(original.width * ratio)
          newHeight = Math.floor(original.height * ratio)
        }
      } else if (maxWidth.value > 0 && original.width > maxWidth.value) {
        const ratio = maxWidth.value / original.width
        newWidth = maxWidth.value
        newHeight = Math.floor(original.height * ratio)
      } else if (maxHeight.value > 0 && original.height > maxHeight.value) {
        const ratio = maxHeight.value / original.height
        newWidth = Math.floor(original.width * ratio)
        newHeight = maxHeight.value
      }
      
      // 设置canvas尺寸
      canvas.width = newWidth
      canvas.height = newHeight
      
      // 绘制图片到canvas
      ctx.drawImage(original.img, 0, 0, newWidth, newHeight)
      
      // 转换为blob
      const mimeType = `image/${outputFormat.value}`
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Failed to create blob'))
          return
        }
        
        const url = URL.createObjectURL(blob)
        resolve({
          url,
          width: newWidth,
          height: newHeight,
          size: blob.size,
          blob
        })
      }, mimeType, quality.value / 100)
    } catch (error) {
      reject(error)
    }
  })
}

// 格式化文件大小
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B'
  
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i]
}

// 下载压缩后的图片
function downloadImage(image) {
  const link = document.createElement('a')
  
  // 生成文件名
  const fileName = generateFileName(image.name)
  
  link.href = image.compressed.url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// 生成下载文件名
function generateFileName(originalName) {
  // 从原始文件名中提取基本名称
  const nameParts = originalName.split('.')
  const baseName = nameParts.slice(0, -1).join('.')
  
  // 返回新文件名
  return `${baseName}_compressed.${outputFormat.value}`
}

// 批量下载所有压缩后的图片
async function downloadAllImages() {
  if (compressedImages.value.length === 0) return
  
  // 如果只有一张图片，直接下载
  if (compressedImages.value.length === 1) {
    downloadImage(compressedImages.value[0])
    return
  }
  
  try {
    // 如果浏览器支持JSZip，则打包下载
    alert('批量下载功能需要另行添加JSZip库。请逐个下载图片，或添加zip库支持。')
    // 在实际应用中，这里可以添加使用JSZip库创建zip文件的代码
  } catch (error) {
    console.error('批量下载图片时出错:', error)
    alert('批量下载图片时出错: ' + error.message)
  }
}

// 在新窗口显示原图
function showOriginal(index) {
  window.open(compressedImages.value[index].original.url, '_blank')
}
</script>

<style scoped>
/* 使用原生HTML滑块的样式 */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-primary, #4f46e5);
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-primary, #4f46e5);
  cursor: pointer;
}
</style> 