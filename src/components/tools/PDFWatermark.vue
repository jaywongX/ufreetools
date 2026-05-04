<template>
  <div class="w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 左侧：输入区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ $t('tools.pdf-watermark.inputTitle') }}</h2>

        <!-- 文件上传区域 -->
        <div
          class="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors mb-4"
          @drop.prevent="handleDrop" @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false"
          @click="fileInput.click()" :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
          <input type="file" ref="fileInput" class="hidden" accept="application/pdf" multiple @change="handleFiles" />
          <svg class="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span class="text-gray-500 text-center">{{ $t('tools.pdf-watermark.dragDrop') }}</span>
          <span class="text-gray-400 text-sm mt-2">{{ $t('tools.pdf-watermark.or') }}</span>
          <button class="mt-2 text-blue-600 hover:text-blue-800 font-medium">
            {{ $t('tools.pdf-watermark.clickToUpload') }}
          </button>
          <span class="text-xs text-gray-400 mt-3">{{ $t('tools.pdf-watermark.supportedFormats') }}</span>
        </div>

        <!-- 示例按钮 -->
        <div class="flex justify-between items-center mb-4">
          <button class="btn btn-secondary" @click="loadSample">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ $t('tools.pdf-watermark.loadSample') }}
          </button>
        </div>

        <!-- PDF文件列表 -->
        <div v-if="pdfFiles.length" class="space-y-4">
          <div class="flex justify-between items-center">
            <h3 class="font-medium">{{ $t('tools.pdf-watermark.fileList') }} ({{ pdfFiles.length }})</h3>
            <button class="text-sm text-red-500 hover:text-red-600" @click="clearAll">
              {{ $t('tools.pdf-watermark.clearAll') }}
            </button>
          </div>

          <div class="space-y-3 max-h-60 overflow-y-auto">
            <div v-for="(pdf, index) in pdfFiles" :key="index" class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div class="min-w-0 flex-1">
                  <div class="font-medium text-sm truncate">{{ pdf.name }}</div>
                  <div class="text-xs text-gray-500">{{ (pdf.size / 1024).toFixed(1) }} KB</div>
                </div>
                <button class="text-gray-500 hover:text-red-500 ml-2 flex-shrink-0" @click="removeFile(index)"
                  :aria-label="$t('tools.pdf-watermark.removeFile')">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 水印设置（默认显示） -->
        <div class="mt-6 space-y-6">
          <h3 class="font-medium">{{ $t('tools.pdf-watermark.watermarkSettings') }}</h3>

          <!-- 水印类型选择 -->
          <div class="space-y-3">
            <div class="flex items-center">
              <input type="radio" id="text" v-model="watermarkType" value="text"
                class="form-radio h-4 w-4 text-blue-600" />
              <label for="text" class="ml-2 text-gray-700 dark:text-gray-300">
                {{ $t('tools.pdf-watermark.textWatermark') }}
              </label>
            </div>

            <div class="flex items-center">
              <input type="radio" id="image" v-model="watermarkType" value="image"
                class="form-radio h-4 w-4 text-blue-600" />
              <label for="image" class="ml-2 text-gray-700 dark:text-gray-300">
                {{ $t('tools.pdf-watermark.imageWatermark') }}
              </label>
            </div>
          </div>

          <!-- 文字水印设置 -->
          <div v-if="watermarkType === 'text'" class="space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 class="font-medium">{{ $t('tools.pdf-watermark.textSettings') }}</h4>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.pdf-watermark.watermarkText') }}（{{ $t('tools.pdf-watermark.variablesHint') }}）
              </label>
              <textarea rows="3" v-model="textWatermark.text"
                class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                :placeholder="$t('tools.pdf-watermark.enterText')"></textarea>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.pdf-watermark.fontFamily') }}
                </label>
                <select v-model="textWatermark.font"
                  class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option value="Helvetica">Helvetica</option>
                  <option value="Times Roman">Times Roman</option>
                  <option value="Courier">Courier</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.pdf-watermark.fontSize') }}
                </label>
                <input type="number" v-model.number="textWatermark.size" min="10" max="100"
                  class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.pdf-watermark.textColor') }}
                </label>
                <input type="color" v-model="textWatermark.color"
                  class="w-full h-10 rounded border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.pdf-watermark.opacity') }}
                </label>
                <input type="range" v-model.number="textWatermark.opacity" min="0" max="1" step="0.05" class="w-full" />
                <div class="text-xs text-gray-500 text-center">{{ Math.round(textWatermark.opacity * 100) }}%</div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{
                  $t('tools.pdf-watermark.strokeColor') }}</label>
                <input type="color" v-model="textWatermark.strokeColor"
                  class="w-full h-10 rounded border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{
                  $t('tools.pdf-watermark.strokeWidth') }}</label>
                <input type="number" v-model.number="textWatermark.strokeWidth" min="0" max="10"
                  class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
          </div>

          <!-- 图片水印设置 -->
          <div v-if="watermarkType === 'image'" class="space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 class="font-medium">{{ $t('tools.pdf-watermark.imageSettings') }}</h4>

            <div
              class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
              @drop.prevent="handleImageDrop" @dragover.prevent="isImageDragging = true"
              @dragleave.prevent="isImageDragging = false" @click="imageInput.click()"
              :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isImageDragging }">
              <input type="file" ref="imageInput" class="hidden" accept="image/*" @change="handleImageFile" />
              <svg class="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-gray-500 text-center">{{ $t('tools.pdf-watermark.dragDropImage') }}</span>
              <span class="text-gray-400 text-sm mt-2">{{ $t('tools.pdf-watermark.or') }}</span>
              <button class="mt-2 text-blue-600 hover:text-blue-800 font-medium">
                {{ $t('tools.pdf-watermark.clickToUpload') }}
              </button>
            </div>

            <div v-if="imageWatermark.url" class="flex justify-center">
              <img :src="imageWatermark.url" :alt="$t('tools.pdf-watermark.watermarkPreview')"
                class="max-w-full max-h-32 object-contain border rounded" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.pdf-watermark.imageSize') }}
              </label>
              <input type="range" v-model.number="imageWatermark.size" min="50" max="500" step="10" class="w-full" />
              <div class="text-xs text-gray-500 text-center">{{ imageWatermark.size }}px</div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('tools.pdf-watermark.opacity') }}
              </label>
              <input type="range" v-model="imageWatermark.opacity" min="0" max="1" step="0.05" class="w-full" />
              <div class="text-xs text-gray-500 text-center">{{ Math.round(imageWatermark.opacity * 100) }}%</div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{
                  $t('tools.pdf-watermark.rotation') }}</label>
                <input type="number" v-model.number="imageWatermark.rotation" min="0" max="360"
                  class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{
                  $t('tools.pdf-watermark.tileGapX') }}</label>
                <input type="number" v-model.number="imageWatermark.tileGapX" min="0" max="2000"
                  class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{
                  $t('tools.pdf-watermark.tileGapY') }}</label>
                <input type="number" v-model.number="imageWatermark.tileGapY" min="0" max="2000"
                  class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
            <div class="flex items-center gap-3">
              <label class="flex items-center">
                <input type="checkbox" v-model="imageWatermark.tile" class="mr-2"> {{ $t('tools.pdf-watermark.tile') }}
              </label>
              <label class="flex items-center">
                <input type="checkbox" v-model="imageWatermark.svgAsVector" class="mr-2"> {{
                  $t('tools.pdf-watermark.svgAsVector') }}
              </label>
            </div>
          </div>

          <!-- 水印位置 -->
          <div class="space-y-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 class="font-medium">{{ $t('tools.pdf-watermark.position') }}</h4>

            <div class="grid grid-cols-3 gap-2">
              <button v-for="pos in watermarkPositions" :key="pos.value"
                :class="['btn', watermarkPosition === pos.value ? 'btn-primary' : 'btn-secondary']"
                @click="watermarkPosition = pos.value">
                {{ $t(`tools.pdf-watermark.${pos.key}`) }}
              </button>
            </div>
          </div>

          <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 class="font-medium mb-2">{{ $t('tools.pdf-watermark.layoutControl') }}</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-sm mb-1">{{ $t('tools.pdf-watermark.mmX') }}</label>
                <input type="number" v-model.number="layout.mmX"
                  class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
              </div>
              <div>
                <label class="block text-sm mb-1">{{ $t('tools.pdf-watermark.mmY') }}</label>
                <input type="number" v-model.number="layout.mmY"
                  class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
              </div>
              <div>
                <label class="block text-sm mb-1">{{ $t('tools.pdf-watermark.margins') }}</label>
                <div class="grid grid-cols-4 gap-2">
                  <input type="number" v-model.number="layout.marginTop"
                    :placeholder="$t('tools.pdf-watermark.marginTop')"
                    class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
                  <input type="number" v-model.number="layout.marginRight"
                    :placeholder="$t('tools.pdf-watermark.marginRight')"
                    class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
                  <input type="number" v-model.number="layout.marginBottom"
                    :placeholder="$t('tools.pdf-watermark.marginBottom')"
                    class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
                  <input type="number" v-model.number="layout.marginLeft"
                    :placeholder="$t('tools.pdf-watermark.marginLeft')"
                    class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：输出区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">{{ $t('tools.pdf-watermark.outputTitle') }}</h2>

          <!-- 批量下载按钮 -->
          <button v-if="watermarkedResults.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {{ $t('tools.pdf-watermark.batchDownload') }}
          </button>
        </div>

        <!-- 布局与输出控制 -->
        <div class="mb-6 space-y-4">
          <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 class="font-medium mb-2">{{ $t('tools.pdf-watermark.layoutControl') }}</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label class="block text-sm mb-1">{{ $t('tools.pdf-watermark.mmX') }}</label>
                <input type="number" v-model.number="layout.mmX"
                  class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
              </div>
              <div>
                <label class="block text-sm mb-1">{{ $t('tools.pdf-watermark.mmY') }}</label>
                <input type="number" v-model.number="layout.mmY"
                  class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
              </div>
              <div>
                <label class="block text-sm mb-1">{{ $t('tools.pdf-watermark.margins') }}</label>
                <div class="grid grid-cols-4 gap-2">
                  <input type="number" v-model.number="layout.marginTop"
                    :placeholder="$t('tools.pdf-watermark.marginTop')"
                    class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
                  <input type="number" v-model.number="layout.marginRight"
                    :placeholder="$t('tools.pdf-watermark.marginRight')"
                    class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
                  <input type="number" v-model.number="layout.marginBottom"
                    :placeholder="$t('tools.pdf-watermark.marginBottom')"
                    class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
                  <input type="number" v-model.number="layout.marginLeft"
                    :placeholder="$t('tools.pdf-watermark.marginLeft')"
                    class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 水印预览（真实渲染） -->
        <div v-if="pdfFiles.length" class="mb-6">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-medium">{{ $t('tools.pdf-watermark.preview') }}</h3>
            <button class="btn btn-secondary btn-sm" :disabled="previewProcessing" @click="generatePreview">
              <svg v-if="previewProcessing" class="animate-spin w-4 h-4 mr-1" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0A12 12 0 000 12h4z" />
              </svg>
              <span>{{ $t('tools.pdf-watermark.generatePreview') }}</span>
            </button>
          </div>

          <div v-if="previewProcessing" class="text-sm text-gray-500">{{ $t('tools.pdf-watermark.previewProcessing') }}
          </div>

          <div v-else-if="previewPages.length" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div v-for="(img, i) in previewPages" :key="i" class="bg-white border rounded shadow overflow-hidden">
              <img :src="img" class="w-full h-48 object-contain" :alt="`page ${i + 1}`">
              <div class="px-2 py-1 text-xs text-gray-500">Page {{ i + 1 }}</div>
            </div>
          </div>

          <div v-else class="text-sm text-gray-500">{{ $t('tools.pdf-watermark.documentPreview') }}</div>
        </div>

        <!-- 添加水印按钮 -->
        <button v-if="pdfFiles.length" class="btn btn-primary w-full mt-6 flex items-center justify-center"
          :disabled="isProcessing" @click="addWatermark">
          <svg v-if="isProcessing" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
          <span v-if="isProcessing">{{ $t('tools.pdf-watermark.processing') }}</span>
          <span v-else>{{ $t('tools.pdf-watermark.addWatermarkBtn') }}</span>
        </button>

        <!-- 处理结果 -->
        <div v-if="watermarkedResults.length" class="space-y-4 mt-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div v-for="(result, index) in watermarkedResults" :key="index"
            class="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
            <div class="flex justify-between items-start mb-3">
              <div class="font-medium truncate">{{ result.name }}</div>
              <div class="text-right text-sm">
                <div>{{ (result.originalSize / 1024).toFixed(1) }} KB → {{ (result.watermarkedSize / 1024).toFixed(1) }}
                  KB</div>
              </div>
            </div>

            <div class="flex justify-center mb-4">
              <div class="bg-white border rounded shadow-lg w-32 h-40 flex items-center justify-center">
                <div class="text-center">
                  <svg class="w-8 h-8 text-red-500 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div class="text-xs text-gray-500">{{ $t('tools.pdf-watermark.pdfLabel') }}</div>
                </div>
              </div>
            </div>

            <button class="btn btn-success w-full flex items-center justify-center" @click="downloadResult(index)">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {{ $t('tools.pdf-watermark.downloadBtn') }}
            </button>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p class="mt-4 text-gray-500">{{ $t('tools.pdf-watermark.noOutput') }}</p>
        </div>
      </div>
    </div>

    <!-- 文章组件 -->
    <PDFWatermarkArticle />
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import JSZip from 'jszip'

// 动态加载 pdf-lib（缓存一次）
import Toast from '../common/Toast.vue'

const toastRef = ref(null)
let _pdfLib = null
// 库引用（将在 onMounted 中赋值）
let PDFDocument = null
let pdfjsLib = null
let degrees = null // 会从 pdf-lib 解构
let rgb = null
let StandardFonts = null

import PDFWatermarkArticle from './PDFWatermarkArticle.vue'

const { t } = useI18n()

// 响应式数据
const fileInput = ref(null)
const imageInput = ref(null)
const pdfFiles = ref([])
const isDragging = ref(false)
const isImageDragging = ref(false)
const isProcessing = ref(false)
const watermarkedResults = reactive([])
const previewPages = ref([])
const previewProcessing = ref(false)

// 水印设置
const watermarkType = ref('text')
const watermarkPosition = ref('center')
const templateStyle = ref('standard')

// 文字水印设置
const textWatermark = reactive({
  text: 'Watermark',
  font: 'Helvetica',
  size: 40,
  color: '#000000',
  opacity: 0.5,
  strokeColor: '#FFFFFF',
  strokeWidth: 0
})

// 图片水印设置
const imageWatermark = reactive({
  file: null,
  url: null,
  size: 150,
  opacity: 0.5,
  rotation: 0,
  tile: false,
  tileGapX: 100,
  tileGapY: 100,
  svgAsVector: false
})

// 水印位置选项
const watermarkPositions = [
  { key: 'center', value: 'center' },
  { key: 'diagonal', value: 'diagonal' },
  { key: 'bottom', value: 'bottom' }
]

// 布局与输出选项
const layout = reactive({
  mmX: null,
  mmY: null,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  safeZone: false
})

const pageRules = reactive({
  oddEvenDifferent: false,
  firstPageSpecial: false,
  skipToc: false // 占位
})

const outputOptions = reactive({
  pdfa: false, // 占位
  imageFormat: 'none', // 'png' | 'jpeg' | 'none'
  zipSplitMB: 0,
  namingTemplate: '{name}_watermarked.pdf'
})

// 示例文件
const samplePDFs = [
  {
    name: 'sample.pdf',
    url: '/sample.pdf',
    fallbackUrl: 'https://www.ufreetools.com/sample.pdf'
  }
]

const sampleImage = {
  name: 'favicon.png',
  url: '/favicon.png',
  fallbackUrl: 'https://www.ufreetools.com/favicon.png'
}

watch([watermarkType, () => textWatermark.text, () => textWatermark.font, () => textWatermark.size, () => textWatermark.color, () => textWatermark.opacity, () => textWatermark.strokeColor, () => textWatermark.strokeWidth, () => imageWatermark.file, () => imageWatermark.size, () => imageWatermark.opacity, () => imageWatermark.rotation, () => imageWatermark.tile, () => imageWatermark.tileGapX, () => imageWatermark.tileGapY, () => layout.mmX, () => layout.mmY, () => layout.marginTop, () => layout.marginRight, () => layout.marginBottom, () => layout.marginLeft, () => layout.safeZone, () => pageRules.oddEvenDifferent, () => pageRules.firstPageSpecial, () => pageRules.skipToc, () => watermarkPosition.value], () => {
  if (pdfFiles.value.length) updatePreviewDebounced()
})
watch(pdfFiles, () => {
  if (pdfFiles.value.length) updatePreviewDebounced()
})

// 处理PDF文件上传
async function handleFiles(e) {
  const files = Array.from(e.target.files || e.dataTransfer.files)
  for (const file of files) {
    if (file.type !== 'application/pdf') continue
    const item = {
      file,
      name: file.name,
      size: file.size,
      url: URL.createObjectURL(file),
      info: null,
      encrypted: false
    }
    pdfFiles.value.push(item)
    // 异步分析 PDF（页数/尺寸/方向/加密）
    analyzePdf(item).catch(() => { })
  }
  isDragging.value = false
}

// 处理拖放
function handleDrop(e) {
  handleFiles(e)
  isDragging.value = false
}

// 移除PDF文件
function removeFile(index) {
  URL.revokeObjectURL(pdfFiles.value[index].url)
  pdfFiles.value.splice(index, 1)
}

// 清除所有文件
function clearAll() {
  pdfFiles.value.forEach(file => URL.revokeObjectURL(file.url))
  pdfFiles.value = []
  watermarkedResults.splice(0)
}

// 处理图片水印上传
function handleImageFile(e) {
  const file = e.target.files?.[0] || e.dataTransfer?.files?.[0]
  if (!file || !file.type.startsWith('image/')) return

  if (imageWatermark.url) {
    URL.revokeObjectURL(imageWatermark.url)
  }

  imageWatermark.file = file
  imageWatermark.url = URL.createObjectURL(file)
  isImageDragging.value = false
}

// 处理图片拖放
function handleImageDrop(e) {
  handleImageFile(e)
  isImageDragging.value = false
}

// 加载示例
async function loadSample() {
  clearAll()

  // 加载示例PDF文件
  for (const sample of samplePDFs) {
    try {
      let response
      try {
        response = await fetch(sample.url)
        if (!response.ok) throw new Error('Local sample not found')
      } catch (e) {
        response = await fetch(sample.fallbackUrl)
      }

      const blob = await response.blob()
      const file = new File([blob], sample.name, { type: 'application/pdf' })

      pdfFiles.value.push({
        file: file,
        name: sample.name,
        size: blob.size,
        url: URL.createObjectURL(file)
      })
    } catch (error) {
      console.error('Failed to load sample PDF:', error)
    }
  }

  // 加载示例图片水印
  try {
    let response
    try {
      response = await fetch(sampleImage.url)
      if (!response.ok) throw new Error('Local sample image not found')
    } catch (e) {
      response = await fetch(sampleImage.fallbackUrl)
    }

    const blob = await response.blob()
    const file = new File([blob], sampleImage.name, { type: 'image/png' })

    if (imageWatermark.url) {
      URL.revokeObjectURL(imageWatermark.url)
    }

    imageWatermark.file = file
    imageWatermark.url = URL.createObjectURL(file)
  } catch (error) {
    console.error('Failed to load sample image:', error)
  }
}

/** 生成预览：对第一个PDF按当前参数生成临时加水印PDF并渲染所有页面 */
async function generatePreview() {
  if (!pdfFiles.value.length) return
  // 清理旧预览URL
  previewPages.value.forEach(url => URL.revokeObjectURL(url))
  previewPages.value = []
  previewProcessing.value = true
  try {
    // const { PDFDocument, rgb, degrees, StandardFonts } = await getPdfLib()
    if (!PDFDocument || !pdfjsLib) {
      toastRef.value.show(t('tools.pdf-watermark.libNotReady'))
      return
    }
    const mm2pt = (mm) => (mm == null ? 0 : (mm * 72) / 25.4)
    const src = pdfFiles.value[0]
    const pdfDoc = await PDFDocument.load(await src.file.arrayBuffer())
    const pages = pdfDoc.getPages()
    const totalPages = pages.length
    const isText = watermarkType.value === 'text'
    const isImage = watermarkType.value === 'image' && imageWatermark.file

    // 字体准备
    let font = null
    if (isText) {
      const fontName = {
        'Helvetica': StandardFonts.Helvetica,
        'Times Roman': StandardFonts.TimesRoman,
        'Courier': StandardFonts.Courier
      }[textWatermark.font] || StandardFonts.Helvetica
      font = await pdfDoc.embedFont(fontName)
    }

    for (let i = 0; i < pages.length; i++) {
      const pageNumber = i + 1
      const page = pages[i]
      const { width, height } = page.getSize()

      // 页规则：奇偶页不同与首页特殊处理
      const isEven = pageNumber % 2 === 0
      let baseAngle = watermarkPosition.value === 'diagonal' ? 45 : 0
      if (pageRules.oddEvenDifferent) {
        baseAngle = isEven ? 0 : baseAngle
      }
      const opacityFactor = (pageRules.firstPageSpecial && pageNumber === 1) ? 0.8 : 1

      const margin = {
        top: mm2pt(layout.marginTop),
        right: mm2pt(layout.marginRight),
        bottom: mm2pt(layout.marginBottom),
        left: mm2pt(layout.marginLeft)
      }

      let baseX = width / 2
      let baseY = height / 2
      if (watermarkPosition.value === 'bottom') baseY = 30 + margin.bottom

      const customX = layout.mmX != null ? mm2pt(layout.mmX) + margin.left : null
      const customY = layout.mmY != null ? mm2pt(layout.mmY) + margin.bottom : null
      if (customX != null) baseX = customX
      if (customY != null) baseY = customY

      if (isText) {
        const textSize = textWatermark.size
        const color = hexToRgb(textWatermark.color, rgb)
        const strokeColor = hexToRgb(textWatermark.strokeColor, rgb)
        const resolved = resolveTextVariables(textWatermark.text || 'Watermark', pageNumber, totalPages, src.name)
        const lines = resolved.split(/\r?\n/)
        const lineHeight = textSize * 1.2

        lines.forEach((line, li) => {
          const y = baseY - li * lineHeight
          const approxTextWidth = textSize * line.length / 2
          const x = baseX - approxTextWidth / 2

          if (textWatermark.strokeWidth > 0) {
            const sw = textWatermark.strokeWidth
            const offsets = [
              { dx: -sw, dy: 0 }, { dx: sw, dy: 0 },
              { dx: 0, dy: -sw }, { dx: 0, dy: sw }
            ]
            offsets.forEach(o => {
              page.drawText(line, {
                x: x + o.dx,
                y: y + o.dy,
                size: textSize,
                font,
                color: strokeColor,
                opacity: textWatermark.opacity * opacityFactor,
                rotate: degrees(baseAngle) // ✅ 传 number
              })
            })
          }
          page.drawText(line, {
            x,
            y,
            size: textSize,
            font,
            color,
            opacity: textWatermark.opacity * opacityFactor,
            rotate: degrees(baseAngle) // ✅
          })
        })
      } else if (isImage) {
        if (imageWatermark.file.type.includes('svg')) {
          toastRef.value.show(t('tools.pdf-watermark.svgNotSupported'))
        }
        const imgBytes = await imageWatermark.file.arrayBuffer()
        let imageEmbed = null
        if (imageWatermark.file.type.includes('png')) {
          imageEmbed = await pdfDoc.embedPng(imgBytes)
        } else if (imageWatermark.file.type.includes('jpeg') || imageWatermark.file.type.includes('jpg')) {
          imageEmbed = await pdfDoc.embedJpg(imgBytes)
        }

        if (imageEmbed) {
          const w = imageWatermark.size
          const h = imageWatermark.size
          const imageAngle = (imageWatermark.rotation || 0) % 360 // ✅ number

          const drawAt = (cx, cy) => {
            page.drawImage(imageEmbed, {
              x: cx,
              y: cy,
              width: w,
              height: h,
              opacity: imageWatermark.opacity * opacityFactor,
              rotate: degrees(imageAngle) // ✅
            })
          }

          if (imageWatermark.tile || watermarkPosition.value === 'diagonal') {
            const gapX = imageWatermark.tileGapX || (w + 50)
            const gapY = imageWatermark.tileGapY || (h + 50)
            for (let y = margin.bottom; y <= height - margin.top - h; y += gapY) {
              for (let x = margin.left; x <= width - margin.right - w; x += gapX) {
                drawAt(x, y)
              }
            }
          } else {
            let x = width / 2 - w / 2
            let y = height / 2 - h / 2
            if (watermarkPosition.value === 'bottom') y = 30 + margin.bottom
            if (customX != null) x = customX
            if (customY != null) y = customY
            drawAt(x, y)
          }
        }
      }
    }

    const pdfBytes = await pdfDoc.save({ useObjectStreams: true })
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })

    // 使用 pdf.js 渲染所有页面为图片
    // const pdfjsLib = await loadPdfJs()
    const arrayBuffer = await blob.arrayBuffer()
    const doc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

    const previewImageUrls = [] // ✅ 避免与前面的 `pages` 冲突
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i)
      const viewport = page.getViewport({ scale: 1.0 })
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = Math.ceil(viewport.width)
      canvas.height = Math.ceil(viewport.height)
      await page.render({ canvasContext: ctx, viewport }).promise
      const blobUrl = await new Promise(resolve =>
        canvas.toBlob(b => resolve(URL.createObjectURL(b)), 'image/png')
      )
      previewImageUrls.push(blobUrl)
    }
    previewPages.value = previewImageUrls
  } catch (err) {
    console.error(t('tools.pdf-watermark.renderImageFailed') + '：', err)
  } finally {
    previewProcessing.value = false
  }
}

/** 参数变化时的预览去抖更新（避免频繁重算） */
let _previewTimer = null
function updatePreviewDebounced() {
  if (_previewTimer) clearTimeout(_previewTimer)
  _previewTimer = setTimeout(() => generatePreview(), 600)
}

// 添加水印
async function addWatermark() {
  if (!pdfFiles.value.length) return
  isProcessing.value = true
  watermarkedResults.splice(0)
  try {
    // const { PDFDocument, rgb, degrees, StandardFonts } = await getPdfLib()
    if (!PDFDocument) {
      toastRef.value.show(t('tools.pdf-watermark.libNotReady'))
      return
    }
    const mm2pt = (mm) => (mm == null ? 0 : (mm * 72) / 25.4)

    for (let fileIndex = 0; fileIndex < pdfFiles.value.length; fileIndex++) {
      const pdfFile = pdfFiles.value[fileIndex]
      const arrayBuffer = await pdfFile.file.arrayBuffer()
      const pdfDoc = await PDFDocument.load(arrayBuffer)
      const pages = pdfDoc.getPages()
      const totalPages = pages.length

      // 文本水印
      if (watermarkType.value === 'text') {
        const fontName = {
          'Helvetica': StandardFonts.Helvetica,
          'Times Roman': StandardFonts.TimesRoman,
          'Courier': StandardFonts.Courier
        }[textWatermark.font] || StandardFonts.Helvetica
        const font = await pdfDoc.embedFont(fontName)
        const textSize = textWatermark.size

        for (let i = 0; i < pages.length; i++) {
          const pageNumber = i + 1
          const page = pages[i]
          const { width, height } = page.getSize()

          const margin = {
            top: mm2pt(layout.marginTop),
            right: mm2pt(layout.marginRight),
            bottom: mm2pt(layout.marginBottom),
            left: mm2pt(layout.marginLeft)
          }

          let baseX = width / 2
          let baseY = height / 2
          if (watermarkPosition.value === 'bottom') baseY = 30 + margin.bottom

          const customX = layout.mmX != null ? mm2pt(layout.mmX) + margin.left : null
          const customY = layout.mmY != null ? mm2pt(layout.mmY) + margin.bottom : null
          if (customX != null) baseX = customX
          if (customY != null) baseY = customY

          // ✅ 角度作为 number
          const baseAngle = watermarkPosition.value === 'diagonal' ? 45 : 0

          const color = hexToRgb(textWatermark.color, rgb)
          const strokeColor = hexToRgb(textWatermark.strokeColor, rgb)
          const resolved = resolveTextVariables(textWatermark.text || 'Watermark', pageNumber, totalPages, pdfFile.name)
          const lines = resolved.split(/\r?\n/)
          const lineHeight = textSize * 1.2

          lines.forEach((line, li) => {
            const y = baseY - li * lineHeight
            const approxTextWidth = textSize * line.length / 2
            const x = baseX - approxTextWidth / 2

            if (textWatermark.strokeWidth > 0) {
              const sw = textWatermark.strokeWidth
              const offsets = [
                { dx: -sw, dy: 0 },
                { dx: sw, dy: 0 },
                { dx: 0, dy: -sw },
                { dx: 0, dy: sw }
              ]
              offsets.forEach(o => {
                page.drawText(line, {
                  x: x + o.dx,
                  y: y + o.dy,
                  size: textSize,
                  font,
                  color: strokeColor,
                  opacity: textWatermark.opacity,
                  rotate: degrees(baseAngle) // ✅
                })
              })
            }
            page.drawText(line, {
              x,
              y,
              size: textSize,
              font,
              color,
              opacity: textWatermark.opacity,
              rotate: degrees(baseAngle) // ✅
            })
          })
        }
      }
      // 图片水印
      else if (watermarkType.value === 'image' && imageWatermark.file) {
        if (imageWatermark.file.type.includes('svg')) {
          toastRef.value.show(t('tools.pdf-watermark.svgNotSupported'))
        }
        const imageBytes = await imageWatermark.file.arrayBuffer()
        let imageEmbed = null
        if (imageWatermark.file.type.includes('png')) {
          imageEmbed = await pdfDoc.embedPng(imageBytes)
        } else if (imageWatermark.file.type.includes('jpeg') || imageWatermark.file.type.includes('jpg')) {
          imageEmbed = await pdfDoc.embedJpg(imageBytes)
        } else {
          toastRef.value.show(t('tools.pdf-watermark.imageFormatNotSupported'))
        }

        if (imageEmbed) {
          const w = imageWatermark.size
          const h = imageWatermark.size
          const imageAngle = (imageWatermark.rotation || 0) % 360 // ✅ number

          for (let i = 0; i < pages.length; i++) {
            const page = pages[i]
            const { width, height } = page.getSize()

            const margin = {
              top: mm2pt(layout.marginTop),
              right: mm2pt(layout.marginRight),
              bottom: mm2pt(layout.marginBottom),
              left: mm2pt(layout.marginLeft)
            }

            const customX = layout.mmX != null ? mm2pt(layout.mmX) + margin.left : null
            const customY = layout.mmY != null ? mm2pt(layout.mmY) + margin.bottom : null

            const drawAt = (cx, cy) => {
              page.drawImage(imageEmbed, {
                x: cx,
                y: cy,
                width: w,
                height: h,
                opacity: imageWatermark.opacity,
                rotate: degrees(imageAngle) // ✅
              })
            }

            if (imageWatermark.tile || watermarkPosition.value === 'diagonal') {
              const gapX = imageWatermark.tileGapX || (w + 50)
              const gapY = imageWatermark.tileGapY || (h + 50)
              for (let y = margin.bottom; y <= height - margin.top - h; y += gapY) {
                for (let x = margin.left; x <= width - margin.right - w; x += gapX) {
                  drawAt(x, y)
                }
              }
            } else {
              let x = width / 2 - w / 2
              let y = height / 2 - h / 2
              if (watermarkPosition.value === 'bottom') y = 30 + margin.bottom
              if (customX != null) x = customX
              if (customY != null) y = customY
              drawAt(x, y)
            }
          }
        }
      }

      const pdfBytes = await pdfDoc.save({ useObjectStreams: true })
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })
      const baseName = pdfFile.name.replace(/\.pdf$/i, '')
      const fileName = applyNamingTemplate(outputOptions.namingTemplate, { name: baseName, index: fileIndex + 1, page: 'all' })
      watermarkedResults.push({
        name: fileName.endsWith('.pdf') ? fileName : (fileName + '.pdf'),
        originalSize: pdfFile.size,
        watermarkedSize: blob.size,
        blob,
        url: URL.createObjectURL(blob)
      })

      // 图片导出
      if (outputOptions.imageFormat !== 'none') {
        const result = watermarkedResults[watermarkedResults.length - 1]
        await renderPdfToImages(result, outputOptions.imageFormat)
      }
    }
  } catch (error) {
    console.error('Error adding watermark:', error)
    toastRef.value.show(`${t('tools.pdf-watermark.addFailed')}：${error?.message || t('tools.pdf-watermark.unknownError')}`)
  } finally {
    isProcessing.value = false
  }
}

// 下载单个结果
function downloadResult(index) {
  const result = watermarkedResults[index]
  const link = document.createElement('a')
  link.href = result.url
  link.download = result.name
  link.click()
}

// 批量下载
async function downloadAll() {
  const splitBytes = (outputOptions.zipSplitMB || 0) * 1024 * 1024
  let currentZip = new JSZip()
  let currentSize = 0
  let zipIndex = 1

  const flushZip = async () => {
    const blob = await currentZip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = splitBytes > 0 ? `watermarked_pdfs_part${zipIndex}.zip` : 'watermarked_pdfs.zip'
    link.click()
    URL.revokeObjectURL(url)
    zipIndex++
    currentZip = new JSZip()
    currentSize = 0
  }

  for (const result of watermarkedResults) {
    currentZip.file(result.name, result.blob)
    currentSize += result.blob.size

    if (result.images && result.images.length) {
      const folder = currentZip.folder(result.name.replace(/\.pdf$/i, ''))
      for (const img of result.images) {
        folder.file(img.name, img.blob)
        currentSize += img.blob.size
      }
    }

    if (splitBytes > 0 && currentSize >= splitBytes) {
      await flushZip()
    }
  }

  if (Object.keys(currentZip.files).length > 0) {
    await flushZip()
  }
}
function hexToRgb(hex, rgbFn) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return rgbFn(r, g, b)
}

/** 动态变量解析 */
function resolveTextVariables(text, page, pages, filename) {
  const date = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
  return text
    .replace(/\{page\}/g, String(page))
    .replace(/\{pages\}/g, String(pages))
    .replace(/\{date\}/g, dateStr)
    .replace(/\{filename\}/g, filename.replace(/\.pdf$/i, ''))
}

/** 命名模板 */
function applyNamingTemplate(tpl, ctx) {
  return tpl
    .replace(/\{name\}/g, ctx.name)
    .replace(/\{index\}/g, String(ctx.index))
    .replace(/\{page\}/g, String(ctx.page))
}

/** 动态加载 pdf.js 并渲染水印结果为图片 */
let _pdfjs = null


/** 将结果 PDF 渲染为图片数组（存入 result.images） */
async function renderPdfToImages(result, format = 'png') {
  try {
    // const pdfjsLib = await loadPdfJs()
    if (!pdfjsLib) {
      console.error('pdf.js not loaded')
      return
    }
    const arrayBuffer = await result.blob.arrayBuffer()
    const doc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
    const numPages = doc.numPages
    result.images = []
    for (let i = 1; i <= numPages; i++) {
      const page = await doc.getPage(i)
      const viewport = page.getViewport({ scale: 1.5 })
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      canvas.width = Math.ceil(viewport.width)
      canvas.height = Math.ceil(viewport.height)
      await page.render({ canvasContext: context, viewport }).promise
      const type = format === 'jpeg' ? 'image/jpeg' : 'image/png'
      const quality = format === 'jpeg' ? 0.92 : undefined
      const blob = await new Promise(resolve => canvas.toBlob(resolve, type, quality))
      const pageName = result.name.replace(/\.pdf$/i, `_${String(i).padStart(3, '0')}.${format}`)
      result.images.push({ name: pageName, blob })
    }
  } catch (err) {
    console.error(t('tools.pdf-watermark.renderImageFailed') + '：', err)
  }
}

import { onMounted, onBeforeUnmount } from 'vue'

/** 分析 PDF（页数/尺寸/方向/加密检测） */
async function analyzePdf(item) {
  try {
    const { PDFDocument } = await getPdfLib()
    const buf = await item.file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(buf)
    const pages = pdfDoc.getPages()
    const first = pages[0]
    const { width, height } = first.getSize()
    const orientation = width > height ? '横向' : '纵向'
    item.info = {
      pages: pages.length,
      size: `${Math.round(width)}×${Math.round(height)}`,
      orientation
    }
  } catch (err) {
    // 加密或解析失败
    item.encrypted = true
    item.info = null
  }
}

/** 处理剪贴板中的 PDF（支持直接粘贴 PDF 数据） */
async function handlePaste(e) {
  try {
    const items = e.clipboardData?.items || []
    for (const it of items) {
      if (it.type === 'application/pdf') {
        const blob = it.getAsFile()
        if (!blob) continue
        const file = new File([blob], 'pasted.pdf', { type: 'application/pdf' })
        const item = {
          file,
          name: file.name,
          size: blob.size,
          url: URL.createObjectURL(file),
          info: null,
          encrypted: false
        }
        pdfFiles.value.push(item)
        analyzePdf(item).catch(() => { })
      }
    }
  } catch (err) {
    console.error('粘贴板处理失败:', err)
  }
}

onMounted(async () => {
  try {
    // 1. 加载 pdf.js（全局方式）
    if (!window.pdfjsLib) {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
      document.head.appendChild(script)

      await new Promise((resolve, reject) => {
        script.onload = () => resolve()
        script.onerror = () => reject(new Error('Failed to load pdf.js'))
      })

      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
    }
    pdfjsLib = window.pdfjsLib

    // 2. 加载 pdf-lib
    const mod = await import('https://cdn.skypack.dev/pdf-lib@1.17.1')
    PDFDocument = mod.PDFDocument
    degrees = mod.degrees
    rgb = mod.rgb
    StandardFonts = mod.StandardFonts

    // 3. 可选：预加载示例（按需）
    loadSample() // 如果需要自动加载示例，可取消注释
  } catch (error) {
    console.error('Failed to load PDF libraries:', error)
    toastRef.value.show(t('tools.pdf-watermark.libLoadFailed'))
  }
})

// onMounted(() => {
//   window.addEventListener('paste', handlePaste)
// })
onBeforeUnmount(() => {
  window.removeEventListener('paste', handlePaste)
})

</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center;
}

.btn-sm {
  @apply px-3 py-1 text-sm;
}

.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
  @apply bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white;
}

.btn-success {
  @apply bg-green-600 hover:bg-green-700 text-white;
}

/* 水印预览样式 */
.watermark-preview {
  transition: all 0.3s ease;
}

.watermark-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.watermark-diagonal {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.watermark-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
}

.watermark-text {
  text-align: center;
  font-weight: bold;
  animation: fadeInOut 2s infinite;
}

.watermark-image {
  animation: fadeInOut 2s infinite;
}

@keyframes fadeInOut {

  0%,
  100% {
    opacity: 0.7;
  }

  50% {
    opacity: 1;
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .btn {
    @apply px-3 py-1.5 text-sm;
  }

  .btn-sm {
    @apply px-2 py-1 text-xs;
  }
}
</style>