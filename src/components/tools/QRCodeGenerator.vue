<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <!-- 工具栏 -->
    <div class="flex flex-wrap items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex space-x-2 mb-2 sm:mb-0">
        <button 
          @click="generateQRCode" 
          class="btn-sm bg-primary hover:bg-primary-dark text-white"
          :disabled="isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          {{ $t('tools.qr-code-generator.actions.generate') }}
        </button>
        <button 
          @click="resetForm" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ $t('tools.qr-code-generator.actions.clear') }}
        </button>
      </div>
      <div class="flex space-x-2">
        <button 
          @click="downloadQRCode" 
          class="btn-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          :disabled="!qrCodeGenerated || isProcessing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {{ $t('tools.qr-code-generator.actions.download') }}
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
    
    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 左侧：输入和设置区域 -->
      <div class="space-y-5">
        <!-- 内容输入 -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.qr-code-generator.options.content') }}
          </label>
          <textarea
            v-model="qrContent"
            rows="4"
            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            :placeholder="$t('tools.qr-code-generator.placeholders.content')"
            :disabled="isProcessing"
          ></textarea>
          <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{{ qrContent.length }} {{ $t('tools.qr-code-generator.characters') }}</span>
            <span>{{ $t('tools.qr-code-generator.maxChars') }}</span>
          </div>
        </div>
        
        <!-- 常用类型 -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ $t('tools.qr-code-generator.templates.title') }}
          </label>
          <div class="grid grid-cols-2 gap-2">
            <button 
              v-for="template in qrTemplates" 
              :key="template.label"
              @click="useTemplate(template)"
              class="p-2 text-xs rounded-md border text-left"
              :class="{
                'border-primary bg-primary-50 dark:bg-primary-900 dark:bg-opacity-20': 
                  qrContent.startsWith(template.prefix),
                'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700': 
                  !qrContent.startsWith(template.prefix)
              }"
              :disabled="isProcessing"
            >
              <div class="font-medium">{{ $t(`tools.qr-code-generator.templates.${template.id}.name`) }}</div>
              <div class="text-gray-500 dark:text-gray-400 truncate">{{ template.example }}</div>
            </button>
          </div>
          
          <!-- 模板确认提示 -->
          <div v-if="showTemplateConfirm" class="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-20 rounded-md">
            <p class="text-sm text-yellow-800 dark:text-yellow-200">{{ $t('tools.qr-code-generator.templates.confirmReplace') }}</p>
            <div class="mt-2 flex space-x-2">
              <button 
                @click="confirmUseTemplate"
                class="px-3 py-1 text-xs bg-yellow-500 hover:bg-yellow-600 text-white rounded"
              >
                {{ $t('tools.qr-code-generator.templates.confirm') }}
              </button>
              <button 
                @click="cancelUseTemplate"
                class="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
              >
                {{ $t('tools.qr-code-generator.templates.cancel') }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- 外观设置 -->
        <div class="space-y-4">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.qr-code-generator.appearance.title') }}</h3>
          
          <!-- 错误校正级别 -->
          <div class="space-y-2">
            <label class="block text-xs text-gray-600 dark:text-gray-400">
              {{ $t('tools.qr-code-generator.options.errorCorrectionLevel') }}
            </label>
            <div class="flex space-x-2">
              <button 
                v-for="level in ['L', 'M', 'Q', 'H']" 
                :key="level"
                @click="errorCorrectionLevel = level"
                class="py-1 px-3 text-xs rounded"
                :class="{
                  'bg-primary text-white': errorCorrectionLevel === level,
                  'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300': errorCorrectionLevel !== level
                }"
                :disabled="isProcessing"
                :title="$t(`tools.qr-code-generator.errorLevels.${level}`)"
              >
                {{ level }}
              </button>
            </div>
          </div>
          
          <!-- QR码大小 -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="block text-xs text-gray-600 dark:text-gray-400">
                {{ $t('tools.qr-code-generator.options.size') }}
              </label>
              <span class="text-xs text-gray-600 dark:text-gray-400">{{ qrSize }}px</span>
            </div>
            <input
              type="range"
              v-model.number="qrSize"
              min="128"
              max="512"
              step="8"
              class="w-full"
              :disabled="isProcessing"
            />
          </div>
          
          <!-- QR码颜色 -->
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="block text-xs text-gray-600 dark:text-gray-400">
                {{ $t('tools.qr-code-generator.options.foregroundColor') }}
              </label>
              <div class="flex">
                <input
                  type="color"
                  v-model="foregroundColor"
                  class="p-0 border-0 rounded-l-md h-8 w-8"
                  :disabled="isProcessing"
                />
                <input
                  type="text"
                  v-model="foregroundColor"
                  class="w-full p-1 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-xs focus:ring-0 focus:border-gray-300 dark:focus:border-gray-600"
                  :disabled="isProcessing"
                />
              </div>
            </div>
            <div class="space-y-2">
              <label class="block text-xs text-gray-600 dark:text-gray-400">
                {{ $t('tools.qr-code-generator.options.backgroundColor') }}
              </label>
              <div class="flex">
                <input
                  type="color"
                  v-model="backgroundColor"
                  class="p-0 border-0 rounded-l-md h-8 w-8"
                  :disabled="isProcessing"
                />
                <input
                  type="text"
                  v-model="backgroundColor"
                  class="w-full p-1 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-xs focus:ring-0 focus:border-gray-300 dark:focus:border-gray-600"
                  :disabled="isProcessing"
                />
              </div>
            </div>
          </div>
          
          <!-- 圆角设置 -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="block text-xs text-gray-600 dark:text-gray-400">
                {{ $t('tools.qr-code-generator.options.cornerRadius') }}
              </label>
              <span class="text-xs text-gray-600 dark:text-gray-400">{{ Math.round(cornerRadius * 100) }}%</span>
            </div>
            <input
              type="range"
              v-model.number="cornerRadius"
              min="0"
              max="0.5"
              step="0.01"
              class="w-full"
              :disabled="isProcessing"
            />
          </div>
        </div>
      </div>
      
      <!-- 右侧：QR码预览区域 -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tools.qr-code-generator.preview.title') }}</h3>
        
        <!-- QR码显示 -->
        <div 
          class="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg"
          style="min-height: 350px;"
        >
          <div ref="qrCodeContainer" class="inline-block">
            <canvas 
              ref="qrCanvas" 
              :width="qrSize" 
              :height="qrSize"
              class="mx-auto cursor-pointer"
              :style="{ display: qrCodeGenerated ? 'block' : 'none' }"
              @click="downloadQRCode"
              :title="qrCodeGenerated ? $t('tools.qr-code-generator.preview.clickToDownload') : ''"
            ></canvas>
          </div>
          
          <div v-if="isProcessing" class="text-center">
            <svg class="animate-spin h-8 w-8 text-primary mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ $t('tools.qr-code-generator.preview.generating') }}</p>
          </div>
          <div v-if="!isProcessing && !qrCodeGenerated" class="text-center">
            <div class="h-40 w-40 border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center rounded-lg mx-auto">
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('tools.qr-code-generator.preview.clickGenerateButton') }}</p>
            </div>
          </div>
        </div>
        
        <!-- 说明文字 -->
        <div class="text-xs text-gray-500 dark:text-gray-400">
          <p class="mb-2">
            <span class="font-medium">{{ $t('tools.qr-code-generator.tips.title') }}：</span>
            {{ $t('tools.qr-code-generator.tips.saveToPrint') }}
          </p>
          <p>
            {{ $t('tools.qr-code-generator.tips.errorCorrection') }}
          </p>
        </div>
      </div>
    </div>

    <!-- 在底部添加文章组件 -->
    <QRCodeGeneratorArticle />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, nextTick } from 'vue'
import QRCode from 'qrcode'
import { useI18n } from 'vue-i18n'
import QRCodeGeneratorArticle from './QRCodeGeneratorArticle.vue'

const { t } = useI18n()

// 二维码内容
const qrContent = ref('')
const isProcessing = ref(false)
const qrCodeGenerated = ref(false)

// 二维码设置
const errorCorrectionLevel = ref('M')
const qrSize = ref(256)
const foregroundColor = ref('#000000')
const backgroundColor = ref('#FFFFFF')
const cornerRadius = ref(0)

// DOM引用
const qrCanvas = ref(null)
const qrCodeContainer = ref(null)

// 状态消息
const message = ref('')
const messageType = ref('info')
const showTemplateConfirm = ref(false)
const pendingTemplate = ref(null)

// QR码模板
const qrTemplates = [
  { 
    id: 'url',
    label: t('tools.qr-code-generator.templates.url.name'),
    prefix: 'https://', 
    example: 'https://example.com',
    template: 'https://'
  },
  { 
    id: 'email',
    label: t('tools.qr-code-generator.templates.email.name'),
    prefix: 'mailto:', 
    example: 'mailto:example@example.com',
    template: 'mailto:'
  },
  { 
    id: 'phone',
    label: t('tools.qr-code-generator.templates.phone.name'),
    prefix: 'tel:', 
    example: 'tel:+86-123-4567-8901',
    template: 'tel:+86-'
  },
  { 
    id: 'sms',
    label: t('tools.qr-code-generator.templates.sms.name'),
    prefix: 'sms:', 
    example: 'sms:+86123456789',
    template: 'sms:+86'
  },
  { 
    id: 'wifi',
    label: t('tools.qr-code-generator.templates.wifi.name'),
    prefix: 'WIFI:', 
    example: `WIFI:T:WPA;S:${t('tools.qr-code-generator.templates.wifi.example.ssid')};P:${t('tools.qr-code-generator.templates.wifi.example.password')};;`,
    template: 'WIFI:T:WPA;S:;P:;;'
  },
  { 
    id: 'geo',
    label: t('tools.qr-code-generator.templates.geo.name'),
    prefix: 'geo:', 
    example: 'geo:40.7128,-74.0060',
    template: 'geo:'
  }
]

// 使用模板
function useTemplate(template) {
  if (qrContent.value.trim() === '') {
    qrContent.value = template.template
  } else {
    pendingTemplate.value = template
    showTemplateConfirm.value = true
    showMessage(t('tools.qr-code-generator.messages.confirmReplace'), 'info')
  }
}

// 确认使用模板
function confirmUseTemplate() {
  if (pendingTemplate.value) {
    qrContent.value = pendingTemplate.value.template
    pendingTemplate.value = null
    showTemplateConfirm.value = false
    showMessage(t('tools.qr-code-generator.messages.contentUpdated'), 'success')
  }
}

// 取消使用模板
function cancelUseTemplate() {
  pendingTemplate.value = null
  showTemplateConfirm.value = false
  showMessage(t('tools.qr-code-generator.messages.changesCancelled'), 'info')
}

// 根据错误校正级别获取描述
function getErrorCorrectionTitle(level) {
  return t(`tools.qr-code-generator.errorLevels.${level}`)
}

// 生成二维码
function generateQRCode() {
  if (qrContent.value.trim() === '') {
    showMessage(t('tools.qr-code-generator.messages.contentRequired'), 'error')
    return
  }
  
  isProcessing.value = true
  qrCodeGenerated.value = false
  message.value = ''
  
  // 确保canvas元素存在且已挂载
  if (!qrCanvas.value) {
    console.error(t('tools.qr-code-generator.errors.canvasNotReady'))
    isProcessing.value = false
    return
  }
  
  const canvas = qrCanvas.value
  
  // 设置QRCode选项
  const options = {
    errorCorrectionLevel: errorCorrectionLevel.value,
    margin: parseInt(qrSize.value / 20),
    width: parseInt(qrSize.value),
    color: {
      dark: foregroundColor.value,
      light: backgroundColor.value
    }
  }
  
  // 使用try/catch捕获可能的错误
  try {
    QRCode.toCanvas(canvas, qrContent.value, options, (error) => {
      if (error) {
        console.error(t('tools.qr-code-generator.errors.generationError'), error)
        showMessage(t('tools.qr-code-generator.errors.generationErrorWithMessage', { message: error.message }), 'error')
      } else {
        qrCodeGenerated.value = true
        showMessage(t('tools.qr-code-generator.messages.generated'), 'success')
      }
      isProcessing.value = false
    })
  } catch (err) {
    console.error(t('tools.qr-code-generator.errors.generationError'), err)
    showMessage(t('tools.qr-code-generator.errors.generationErrorWithMessage', { message: err.message }), 'error')
    isProcessing.value = false
  }
}

// 下载二维码图片
function downloadQRCode() {
  if (!qrCodeGenerated.value) return
  
  try {
    const canvas = qrCanvas.value
    const link = document.createElement('a')
    
    // 将canvas内容转换为数据URL
    link.href = canvas.toDataURL('image/png')
    link.download = 'qrcode.png'
    
    // 触发下载
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    showMessage(t('tools.qr-code-generator.messages.downloaded'), 'success')
  } catch (error) {
    showMessage(t('tools.qr-code-generator.errors.downloadError', { message: error.message }), 'error')
  }
}

// 重置表单
function resetForm() {
  qrContent.value = ''
  errorCorrectionLevel.value = 'M'
  qrSize.value = 256
  foregroundColor.value = '#000000'
  backgroundColor.value = '#FFFFFF'
  cornerRadius.value = 0
  qrCodeGenerated.value = false
  message.value = ''
}

// 显示消息
function showMessage(msg, type = 'info') {
  message.value = msg
  messageType.value = type
  
  // 3秒后自动清除消息
  setTimeout(() => {
    if (message.value === msg) {
      message.value = ''
    }
  }, 3000)
}

// 监听相关属性变化，自动更新二维码
watch([qrContent, errorCorrectionLevel, qrSize, foregroundColor, backgroundColor], () => {
  if (qrContent.value.trim() && qrCanvas.value && qrCodeContainer.value) {
    generateQRCode()
  }
})

// 确保组件完全挂载后再尝试访问canvas
onMounted(() => {
  // 只在有内容时才自动生成
  if (qrContent.value.trim()) {
    // 使用 nextTick 确保 DOM 已完全更新
    nextTick(() => {
      if (qrCanvas.value && qrCodeContainer.value) {
        generateQRCode()
      }
    })
  }
})
</script>

<style scoped>
/* 可以添加任何额外的样式 */
.qrcode-container {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style> 