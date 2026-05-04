<template>
    <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-2">{{ $t('tools.merge-pdf-online.inputTitle') }}</h2>

                <!-- 文件上传区域 -->
                <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
                    @drop.prevent="handleDrop" @dragover.prevent="isDragging = true"
                    @dragleave.prevent="isDragging = false" @click="fileInput.click()"
                    :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
                    <input type="file" ref="fileInput" class="hidden" accept="application/pdf"
                        multiple @change="handleFiles" />
                    <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-500">{{ $t('tools.merge-pdf-online.dragTip') }}</span>
                    <span class="text-xs text-gray-400 mt-2">{{ $t('tools.merge-pdf-online.supported') }}</span>
                </div>

                <!-- URL导入 -->
                <div class="mt-4 p-4 border rounded-lg">
                    <h3 class="font-medium mb-2">{{ $t('tools.merge-pdf-online.importFromUrl') }}</h3>
                    <div class="flex">
                        <input type="text" v-model="pdfUrl" :placeholder="$t('tools.merge-pdf-online.urlPlaceholder')"
                            class="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" />
                        <button @click="addFromUrl" class="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
                            {{ $t('tools.merge-pdf-online.addUrl') }}
                        </button>
                    </div>
                </div>

                <!-- 示例PDF按钮 -->
                <div class="flex justify-between items-center mt-4">
                    <button class="btn btn-secondary" @click="loadSamplePdfs">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {{ $t('tools.merge-pdf-online.loadSample') }}
                    </button>
                </div>

                <!-- 文件队列 -->
                <div v-if="pdfFiles.length" class="space-y-4 mt-4">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium">{{ $t('tools.merge-pdf-online.preview') }} ({{ pdfFiles.length }})</h3>
                        <div class="flex space-x-2">
                            <!-- 排序选项 -->
                            <div class="relative">
                                <button @click="showSortOptions = !showSortOptions"
                                    class="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center">
                                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                                    </svg>
                                    {{ $t('tools.merge-pdf-online.sortFiles') }}
                                </button>
                                <div v-if="showSortOptions"
                                    class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border dark:border-gray-700">
                                    <div class="p-2">
                                        <div class="mb-2">
                                            <label class="flex items-center space-x-2 mb-1">
                                                <input type="radio" v-model="sortBy" value="name" class="form-radio" />
                                                <span>{{ $t('tools.merge-pdf-online.sortByName') }}</span>
                                            </label>
                                            <label class="flex items-center space-x-2 mb-1">
                                                <input type="radio" v-model="sortBy" value="size" class="form-radio" />
                                                <span>{{ $t('tools.merge-pdf-online.sortBySize') }}</span>
                                            </label>
                                            <label class="flex items-center space-x-2">
                                                <input type="radio" v-model="sortBy" value="date" class="form-radio" />
                                                <span>{{ $t('tools.merge-pdf-online.sortByDate') }}</span>
                                            </label>
                                        </div>
                                        <div class="border-t dark:border-gray-700 pt-2">
                                            <label class="flex items-center space-x-2 mb-1">
                                                <input type="radio" v-model="sortOrder" value="asc" class="form-radio" />
                                                <span>{{ $t('tools.merge-pdf-online.ascending') }}</span>
                                            </label>
                                            <label class="flex items-center space-x-2">
                                                <input type="radio" v-model="sortOrder" value="desc" class="form-radio" />
                                                <span>{{ $t('tools.merge-pdf-online.descending') }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="text-sm text-red-500 hover:text-red-600" @click="clearFiles">
                                {{ $t('tools.merge-pdf-online.clearAll') }}
                            </button>
                        </div>
                    </div>

                    <!-- 文件列表 -->
                    <div class="max-h-[400px] overflow-y-auto p-1">
                        <draggable v-model="pdfFiles" item-key="id" handle=".drag-handle" ghost-class="ghost-file"
                            @start="drag = true" @end="drag = false" class="space-y-3">
                            <template #item="{ element, index }">
                                <div class="relative bg-gray-50 dark:bg-gray-800 rounded-lg border p-3">
                                    <div class="flex items-start">
                                        <!-- 拖动手柄 -->
                                        <div class="drag-handle cursor-move p-1 mr-2">
                                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M4 8h16M4 16h16" />
                                            </svg>
                                        </div>

                                        <!-- 文件缩略图 -->
                                        <div class="w-16 h-20 bg-white dark:bg-gray-700 rounded border flex items-center justify-center mr-3 overflow-hidden">
                                            <img v-if="element.thumbnail" :src="element.thumbnail" class="max-w-full max-h-full object-contain" />
                                            <svg v-else class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>

                                        <!-- 文件信息 -->
                                        <div class="flex-1 min-w-0">
                                            <div class="flex justify-between">
                                                <h4 class="font-medium text-sm truncate">{{ element.name }}</h4>
                                                <button @click="removeFile(index)" class="text-red-500 hover:text-red-600 ml-2">
                                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="text-xs text-gray-500 mt-1 flex items-center">
                                                <span>{{ formatFileSize(element.size) }}</span>
                                                <span class="mx-2">•</span>
                                                <span>{{ element.pageCount || '...' }} {{ element.pageCount === 1 ? '页' : '页' }}</span>
                                            </div>

                                            <!-- 页面范围输入 -->
                                            <div class="mt-2 grid grid-cols-2 gap-2">
                                                <div>
                                                    <label class="block text-xs text-gray-500 mb-1">{{ $t('tools.merge-pdf-online.pageRange') }}</label>
                                                    <input type="text" v-model="element.pageRange"
                                                        :placeholder="$t('tools.merge-pdf-online.pageRangePlaceholder')"
                                                        class="w-full text-xs p-1 border rounded" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-500 mb-1">{{ $t('tools.merge-pdf-online.excludePages') }}</label>
                                                    <input type="text" v-model="element.excludePages"
                                                        :placeholder="$t('tools.merge-pdf-online.excludePagesPlaceholder')"
                                                        class="w-full text-xs p-1 border rounded" />
                                                </div>
                                            </div>

                                            <!-- 跳过空白页选项 -->
                                            <div class="mt-2">
                                                <label class="flex items-center space-x-2">
                                                    <input type="checkbox" v-model="element.skipBlankPages" class="form-checkbox" />
                                                    <span class="text-xs">{{ $t('tools.merge-pdf-online.skipBlankPages') }}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 上传进度条 -->
                                    <div v-if="element.uploading" class="mt-2">
                                        <div class="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                            <div class="h-full bg-blue-500" :style="{ width: element.progress + '%' }"></div>
                                        </div>
                                        <div class="text-xs text-gray-500 mt-1 text-center">
                                            {{ $t('tools.merge-pdf-online.processingFile') }} {{ Math.round(element.progress) }}%
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </draggable>
                    </div>
                </div>

                <!-- 高级选项 -->
                <div class="mt-4 border rounded-lg p-4">
                    <h3 class="font-medium mb-3">高级合并选项</h3>
                    
                    <!-- 页码、页眉、页脚 -->
                    <div class="space-y-3 mb-4">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" v-model="mergeOptions.addPageNumbers" class="form-checkbox" />
                            <span>{{ $t('tools.merge-pdf-online.addPageNumbers') }}</span>
                        </label>
                        
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" v-model="mergeOptions.addHeader" class="form-checkbox" />
                                    <span>{{ $t('tools.merge-pdf-online.addHeader') }}</span>
                                </label>
                                <input v-if="mergeOptions.addHeader" type="text" v-model="mergeOptions.headerText"
                                    :placeholder="$t('tools.merge-pdf-online.headerText')"
                                    class="mt-1 w-full p-1 text-sm border rounded" />
                            </div>
                            
                            <div>
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox" v-model="mergeOptions.addFooter" class="form-checkbox" />
                                    <span>{{ $t('tools.merge-pdf-online.addFooter') }}</span>
                                </label>
                                <input v-if="mergeOptions.addFooter" type="text" v-model="mergeOptions.footerText"
                                    :placeholder="$t('tools.merge-pdf-online.footerText')"
                                    class="mt-1 w-full p-1 text-sm border rounded" />
                            </div>
                        </div>
                    </div>
                    
                    <!-- 页面大小和旋转 -->
                    <div class="space-y-3 mb-4">
                        <label class="flex items-center space-x-2">
                            <input type="checkbox" v-model="mergeOptions.unifyPageSizes" class="form-checkbox" />
                            <span>{{ $t('tools.merge-pdf-online.unifyPageSizes') }}</span>
                        </label>
                        <select v-if="mergeOptions.unifyPageSizes" v-model="mergeOptions.targetPageSize"
                            class="w-full p-1 text-sm border rounded">
                            <option value="A4">A4</option>
                            <option value="A3">A3</option>
                            <option value="Letter">Letter</option>
                            <option value="Legal">Legal</option>
                        </select>
                        
                        <div class="mt-3">
                            <label class="block mb-1">{{ $t('tools.merge-pdf-online.rotatePages') }}</label>
                            <div class="flex space-x-3">
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="mergeOptions.rotationType" value="none" class="form-radio" />
                                    <span>无</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="mergeOptions.rotationType" value="all" class="form-radio" />
                                    <span>{{ $t('tools.merge-pdf-online.rotateAll') }}</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input type="radio" v-model="mergeOptions.rotationType" value="specific" class="form-radio" />
                                    <span>{{ $t('tools.merge-pdf-online.rotateSpecific') }}</span>
                                </label>
                            </div>
                            
                            <div v-if="mergeOptions.rotationType !== 'none'" class="grid grid-cols-2 gap-3 mt-2">
                                <div>
                                    <label class="block text-xs mb-1">{{ $t('tools.merge-pdf-online.rotationAngle') }}</label>
                                    <select v-model="mergeOptions.rotationAngle" class="w-full p-1 text-sm border rounded">
                                        <option value="90">90°</option>
                                        <option value="180">180°</option>
                                        <option value="270">270°</option>
                                    </select>
                                </div>
                                
                                <div v-if="mergeOptions.rotationType === 'specific'">
                                    <label class="block text-xs mb-1">{{ $t('tools.merge-pdf-online.rotationPages') }}</label>
                                    <input type="text" v-model="mergeOptions.rotationPages"
                                        :placeholder="$t('tools.merge-pdf-online.rotationPagesPlaceholder')"
                                        class="w-full p-1 text-sm border rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 输出质量控制 -->
                    <div class="space-y-3">
                        <h4 class="font-medium text-sm">输出质量控制</h4>
                        
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs mb-1">{{ $t('tools.merge-pdf-online.resolution') }}</label>
                                <select v-model="mergeOptions.resolution" class="w-full p-1 text-sm border rounded">
                                    <option value="72">72 DPI</option>
                                    <option value="96">96 DPI</option>
                                    <option value="150">150 DPI</option>
                                    <option value="300">300 DPI</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-xs mb-1">{{ $t('tools.merge-pdf-online.imageQuality') }}</label>
                                <input type="range" v-model.number="mergeOptions.imageQuality" min="0.5" max="1" step="0.01" class="w-full" />
                                <div class="text-xs text-gray-500 text-center">{{ Math.round(mergeOptions.imageQuality * 100) }}%</div>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs mb-1">{{ $t('tools.merge-pdf-online.scaleFactor') }}</label>
                                <input type="range" v-model.number="mergeOptions.scaleFactor" min="0.5" max="2" step="0.1" class="w-full" />
                                <div class="text-xs text-gray-500 text-center">{{ Math.round(mergeOptions.scaleFactor * 100) }}%</div>
                            </div>
                            
                            <div>
                                <label class="flex items-center space-x-2 text-xs mb-1">
                                    <input type="checkbox" v-model="mergeOptions.useCustomDimensions" class="form-checkbox" />
                                    <span>{{ $t('tools.merge-pdf-online.customDimensions') }}</span>
                                </label>
                                
                                <div v-if="mergeOptions.useCustomDimensions" class="grid grid-cols-3 gap-1">
                                    <input type="number" v-model.number="mergeOptions.width" :placeholder="$t('tools.merge-pdf-online.width')"
                                        class="p-1 text-xs border rounded" />
                                    <input type="number" v-model.number="mergeOptions.height" :placeholder="$t('tools.merge-pdf-online.height')"
                                        class="p-1 text-xs border rounded" />
                                    <select v-model="mergeOptions.units" class="p-1 text-xs border rounded">
                                        <option value="mm">{{ $t('tools.merge-pdf-online.mm') }}</option>
                                        <option value="inch">{{ $t('tools.merge-pdf-online.inch') }}</option>
                                        <option value="pt">{{ $t('tools.merge-pdf-online.pt') }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <button class="btn btn-primary w-full mt-4" :disabled="!pdfFiles.length || merging" @click="mergePdfs">
                    <svg v-if="!merging" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                    <svg v-else class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ merging ? $t('tools.merge-pdf-online.processingFile') : $t('tools.merge-pdf-online.mergeBtn') }}
                </button>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-xl font-bold">{{ $t('tools.merge-pdf-online.outputTitle') }}</h2>
                </div>

                <div v-if="mergedPdfUrl" class="space-y-4">
                    <!-- PDF预览 -->
                    <div class="relative border rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
                        <div class="pdf-container h-[500px] overflow-auto" ref="pdfContainer">
                            <!-- PDF.js渲染的页面将在这里显示 -->
                        </div>
                        
                        <!-- 缩放控制 -->
                        <div class="absolute top-2 right-2 flex space-x-2">
                            <button
                                class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                @click="zoomIn()" :aria-label="$t('tools.merge-pdf-online.zoomIn')">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </button>
                            <button
                                class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                @click="zoomOut()" :aria-label="$t('tools.merge-pdf-online.zoomOut')">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 13H7m10 0h-3" />
                                </svg>
                            </button>
                            <button
                                class="p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
                                @click="resetZoom()" :aria-label="$t('tools.merge-pdf-online.resetView')">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- 下载按钮 -->
                    <button class="btn btn-success w-full" @click="downloadMergedPdf">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {{ $t('tools.merge-pdf-online.downloadBtn') }}
                    </button>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="mt-4 text-gray-500">{{ $t('tools.merge-pdf-online.noOutput') }}</p>
                </div>
            </div>
        </div>
        <MergePdfOnlineArticle />
    </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, onMounted, nextTick, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import draggable from 'vuedraggable'
import MergePdfOnlineArticle from './MergePdfOnlineArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
let pdfjsLib = null
let PDFDocument = null
let StandardFonts = null
let rgb = null
let degrees = null
const isReady = ref(false) // 标记库是否加载完成

onMounted(async () => {
  try {
    // 动态导入 pdfjs
    pdfjsLib = await import('pdfjs-dist/build/pdf')
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.mjs`

    // 动态导入 pdf-lib
    const pdfLib = await import('pdf-lib')
    PDFDocument = pdfLib.PDFDocument
    StandardFonts = pdfLib.StandardFonts
    rgb = pdfLib.rgb
    degrees = pdfLib.degrees

    isReady.value = true
  } catch (err) {
    console.error('PDF 库加载失败:', err)
  }
})


const { t } = useI18n()

const fileInput = ref(null)
const pdfContainer = ref(null)
const pdfFiles = ref([])
const mergedPdfUrl = ref(null)
const isDragging = ref(false)
const merging = ref(false)
const pdfUrl = ref('')
const showSortOptions = ref(false)
const sortBy = ref('name')
const sortOrder = ref('asc')
const drag = ref(false)
const pdfScale = ref(1.0)
// 渲染版本号：防止并发渲染导致重复页面
const renderVersion = ref(0)

// 合并选项
const mergeOptions = reactive({
    addPageNumbers: false,
    addHeader: false,
    headerText: '',
    addFooter: false,
    footerText: '',
    unifyPageSizes: false,
    targetPageSize: 'A4',
    rotationType: 'none',
    rotationAngle: '90',
    rotationPages: '',
    resolution: '150',
    imageQuality: 0.8,
    scaleFactor: 1.0,
    useCustomDimensions: false,
    width: 210,
    height: 297,
    units: 'mm'
})

// 示例PDF文件
const samplePdfs = [
    {
        name: 'sample1.pdf',
        url: 'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf',
    },
    {
        name: 'sample2.pdf',
        url: 'https://pdfobject.com/pdf/sample.pdf',
    }
]

// 监听排序选项变化
watch([sortBy, sortOrder], () => {
    sortFiles()
    showSortOptions.value = false
})

// 加载示例PDF
async function loadSamplePdfs() {
    clearFiles()
    for (const sample of samplePdfs) {
        try {
            const response = await fetch(sample.url)
            const blob = await response.blob()
            const file = new File([blob], sample.name, { type: 'application/pdf' })
            await addPdfFile(file)
        } catch (error) {
            console.error('Failed to load sample PDF:', error)
        }
    }
}

// 处理文件上传
async function handleFiles(e) {
    const files = Array.from(e.target.files || e.dataTransfer.files)
    for (const file of files) {
        if (file.type === 'application/pdf') {
            await addPdfFile(file)
        }
    }
    isDragging.value = false
    if (fileInput.value) fileInput.value.value = ''
}

// 处理拖放
function handleDrop(e) {
    handleFiles(e)
}

// 从URL添加PDF
async function addFromUrl() {
    if (!pdfUrl.value) return
    
    try {
        const response = await fetch(pdfUrl.value)
        if (!response.ok) throw new Error('Failed to fetch PDF')
        
        const blob = await response.blob()
        if (blob.type !== 'application/pdf') throw new Error('Not a PDF file')
        
        // 从URL中提取文件名
        const urlParts = pdfUrl.value.split('/')
        const fileName = urlParts[urlParts.length - 1].split('?')[0] || 'document.pdf'
        
        const file = new File([blob], fileName, { type: 'application/pdf' })
        await addPdfFile(file)
        
        pdfUrl.value = ''
    } catch (error) {
        console.error('Error importing PDF from URL:', error)
        toastRef.value.show('Failed to import PDF from URL. Please check the URL and try again.')
    }
}

// 添加PDF文件到列表
async function addPdfFile(file) {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 5)
    const fileObj = {
        id,
        file,
        name: file.name,
        size: file.size,
        lastModified: file.lastModified,
        pageCount: 0,
        thumbnail: null,
        pageRange: '',
        excludePages: '',
        skipBlankPages: false,
        uploading: true,
        progress: 0
    }
    
    pdfFiles.value.push(fileObj)
    
    try {
        // 读取PDF获取页数和缩略图
        const arrayBuffer = await readFileAsArrayBuffer(file, (progress) => {
            const index = pdfFiles.value.findIndex(f => f.id === id)
            if (index !== -1) {
                pdfFiles.value[index].progress = progress
            }
        })
        
        const loadingTask = pdfjsLib.getDocument(arrayBuffer)
        const pdf = await loadingTask.promise
        
        // 更新页数
        const index = pdfFiles.value.findIndex(f => f.id === id)
        if (index !== -1) {
            pdfFiles.value[index].pageCount = pdf.numPages
            pdfFiles.value[index].uploading = false
            
            // 生成缩略图
            const page = await pdf.getPage(1)
            const viewport = page.getViewport({ scale: 0.2 })
            const canvas = document.createElement('canvas')
            canvas.width = viewport.width
            canvas.height = viewport.height
            
            await page.render({
                canvasContext: canvas.getContext('2d'),
                viewport
            }).promise
            
            pdfFiles.value[index].thumbnail = canvas.toDataURL()
        }
    } catch (error) {
        console.error('Error processing PDF:', error)
        const index = pdfFiles.value.findIndex(f => f.id === id)
        if (index !== -1) {
            pdfFiles.value[index].uploading = false
            pdfFiles.value[index].error = true
        }
    }
}

// 读取文件为ArrayBuffer并跟踪进度
function readFileAsArrayBuffer(file, onProgress) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        
        reader.onprogress = (event) => {
            if (event.lengthComputable) {
                const progress = (event.loaded / event.total) * 100
                if (onProgress) onProgress(progress)
            }
        }
        
        reader.onload = () => resolve(reader.result)
        reader.onerror = () => reject(reader.error)
        
        reader.readAsArrayBuffer(file)
    })
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 排序文件
function sortFiles() {
    const sorted = [...pdfFiles.value].sort((a, b) => {
        let comparison = 0
        
        switch (sortBy.value) {
            case 'name':
                comparison = a.name.localeCompare(b.name)
                break
            case 'size':
                comparison = a.size - b.size
                break
            case 'date':
                comparison = a.lastModified - b.lastModified
                break
        }
        
        return sortOrder.value === 'asc' ? comparison : -comparison
    })
    
    pdfFiles.value = sorted
}

// 移除文件
function removeFile(index) {
    pdfFiles.value.splice(index, 1)
}

// 清除所有文件
function clearFiles() {
    pdfFiles.value = []
    mergedPdfUrl.value = null
}

// 解析页面范围
function parsePageRange(rangeStr, totalPages) {
    if (!rangeStr) return Array.from({ length: totalPages }, (_, i) => i + 1)
    
    const pages = new Set()
    const ranges = rangeStr.split(',').map(r => r.trim())
    
    for (const range of ranges) {
        if (range.includes('-')) {
            const [start, end] = range.split('-').map(n => parseInt(n.trim()))
            if (!isNaN(start) && !isNaN(end)) {
                for (let i = start; i <= end; i++) {
                    if (i > 0 && i <= totalPages) pages.add(i)
                }
            }
        } else {
            const page = parseInt(range)
            if (!isNaN(page) && page > 0 && page <= totalPages) pages.add(page)
        }
    }
    
    return Array.from(pages).sort((a, b) => a - b)
}

// 解析排除页面
function parseExcludePages(excludeStr, totalPages) {
    if (!excludeStr) return new Set()
    
    const excludePages = new Set()
    const ranges = excludeStr.split(',').map(r => r.trim())
    
    for (const range of ranges) {
        if (range.includes('-')) {
            const [start, end] = range.split('-').map(n => parseInt(n.trim()))
            if (!isNaN(start) && !isNaN(end)) {
                for (let i = start; i <= end; i++) {
                    if (i > 0 && i <= totalPages) excludePages.add(i)
                }
            }
        } else {
            const page = parseInt(range)
            if (!isNaN(page) && page > 0 && page <= totalPages) excludePages.add(page)
        }
    }
    
    return excludePages
}

// 合并PDF文件
async function mergePdfs() {
    if (pdfFiles.value.length === 0 || merging.value) return

    try {
        merging.value = true
        mergedPdfUrl.value = null

        // 创建新的PDF文档
        const mergedPdf = await PDFDocument.create()

        // 预嵌入字体（用于页眉/页脚/页码）
        const font = await mergedPdf.embedFont(StandardFonts.Helvetica)

        // 处理每个PDF文件
        for (const pdfFile of pdfFiles.value) {
            const arrayBuffer = await readFileAsArrayBuffer(pdfFile.file)
            const pdf = await PDFDocument.load(arrayBuffer)
            const totalPages = pdf.getPageCount()

            // 解析页面范围和排除页面
            const pageRange = parsePageRange(pdfFile.pageRange, totalPages)
            const excludePages = parseExcludePages(pdfFile.excludePages, totalPages)

            // 确定要复制的页面（1-based -> 0-based）
            const pagesToCopy = pageRange.filter(p => !excludePages.has(p)).map(p => p - 1)

            if (pagesToCopy.length > 0) {
                const copiedPages = await mergedPdf.copyPages(pdf, pagesToCopy)

                // 应用旋转（如果需要）
                if (mergeOptions.rotationType !== 'none') {
                    const angle = parseInt(mergeOptions.rotationAngle || '0', 10)
                    if (!Number.isNaN(angle) && angle % 360 !== 0) {
                        if (mergeOptions.rotationType === 'all') {
                            copiedPages.forEach(page => page.setRotation(degrees(angle)))
                        } else if (mergeOptions.rotationType === 'specific') {
                            const rotationPages = parsePageRange(mergeOptions.rotationPages, copiedPages.length)
                            rotationPages.forEach(idx1 => {
                                if (idx1 > 0 && idx1 <= copiedPages.length) {
                                    copiedPages[idx1 - 1].setRotation(degrees(angle))
                                }
                            })
                        }
                    }
                }

                // 添加页面到合并文档
                copiedPages.forEach(page => mergedPdf.addPage(page))
            }
        }

        // 统一页面大小（如启用）
        if (mergeOptions.unifyPageSizes) {
            const target = getTargetPageSizeInPoints()
            if (target) {
                mergedPdf.getPages().forEach(page => {
                    const originalSize = page.getSize()
                    
                    // 计算缩放比例（保持宽高比）
                    const scaleX = target.width / originalSize.width
                    const scaleY = target.height / originalSize.height
                    const scale = Math.min(scaleX, scaleY) * mergeOptions.scaleFactor
                    
                    // 计算居中偏移
                    const scaledWidth = originalSize.width * scale
                    const scaledHeight = originalSize.height * scale
                    const offsetX = (target.width - scaledWidth) / 2
                    const offsetY = (target.height - scaledHeight) / 2
                    
                    // 设置新的页面尺寸
                    page.setSize(target.width, target.height)
                    
                    // 应用缩放和居中变换
                    page.scaleContent(scale, scale)
                    page.translateContent(offsetX, offsetY)
                })
            }
        } else if (mergeOptions.scaleFactor !== 1.0) {
            // 如果没有统一页面大小但设置了缩放因子，直接应用缩放
            mergedPdf.getPages().forEach(page => {
                const size = page.getSize()
                const newWidth = size.width * mergeOptions.scaleFactor
                const newHeight = size.height * mergeOptions.scaleFactor
                
                page.scaleContent(mergeOptions.scaleFactor, mergeOptions.scaleFactor)
                page.setSize(newWidth, newHeight)
            })
        }

        // 添加页眉/页脚/页码（如启用）
        const pages = mergedPdf.getPages()
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i]
            const { width, height } = page.getSize()

            const fontSize = 10
            const color = rgb(0, 0, 0)
            const margin = 24

            if (mergeOptions.addHeader && mergeOptions.headerText) {
                const text = String(mergeOptions.headerText)
                const tw = font.widthOfTextAtSize(text, fontSize)
                page.drawText(text, {
                    x: (width - tw) / 2,
                    y: height - margin,
                    size: fontSize,
                    font,
                    color
                })
            }

            if (mergeOptions.addFooter && mergeOptions.footerText) {
                const text = String(mergeOptions.footerText)
                const tw = font.widthOfTextAtSize(text, fontSize)
                page.drawText(text, {
                    x: (width - tw) / 2,
                    y: margin,
                    size: fontSize,
                    font,
                    color
                })
            }

            if (mergeOptions.addPageNumbers) {
                const pageNumberText = `${i + 1} / ${pages.length}`
                const tw = font.widthOfTextAtSize(pageNumberText, fontSize)
                page.drawText(pageNumberText, {
                    x: width - margin - tw,
                    y: margin,
                    size: fontSize,
                    font,
                    color
                })
            }
        }

        // 保存合并后的PDF
        const mergedPdfBytes = await mergedPdf.save()
        const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' })
        mergedPdfUrl.value = URL.createObjectURL(blob)

        // 由 watch(mergedPdfUrl) 触发渲染，这里仅确保DOM就绪
        await nextTick()
    } catch (error) {
        console.error('Error merging PDFs:', error)
        toastRef.value.show('Failed to merge PDFs. Please try again.')
    } finally {
        merging.value = false
    }
}

function mmToPt(mm) {
    return mm * 72 / 25.4
}
function getTargetPageSizeInPoints() {
    if (mergeOptions.useCustomDimensions) {
        let w = mergeOptions.width
        let h = mergeOptions.height
        if (mergeOptions.units === 'mm') {
            w = mmToPt(w); h = mmToPt(h)
        } else if (mergeOptions.units === 'inch') {
            w = w * 72; h = h * 72
        } // pt 则直接使用
        return { width: w, height: h }
    }
    const presets = {
        A4: { width: mmToPt(210), height: mmToPt(297) },
        A3: { width: mmToPt(297), height: mmToPt(420) },
        Letter: { width: 612, height: 792 }, // 8.5x11 in
        Legal: { width: 612, height: 1008 }  // 8.5x14 in
    }
    return presets[mergeOptions.targetPageSize] || null
}

// 渲染PDF预览
async function renderPdfPreview(url) {
    if (!pdfContainer.value) return

    // 自增渲染版本号，并记录本次渲染版本
    const thisVersion = ++renderVersion.value

    // 清空容器
    pdfContainer.value.innerHTML = ''

    try {
        const loadingTask = pdfjsLib.getDocument(url)
        const pdf = await loadingTask.promise

        // 应用输出质量控制：计算基于DPI的缩放
        const dpiScale = parseInt(mergeOptions.resolution) / 96 // 96 DPI 为基准
        const finalScale = pdfScale.value * dpiScale

        // 渲染所有页面
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            // 若发现有更新的渲染任务启动，则中断当前渲染
            if (thisVersion !== renderVersion.value) break

            const page = await pdf.getPage(pageNum)
            const viewport = page.getViewport({ scale: finalScale })

            const canvas = document.createElement('canvas')
            canvas.className = 'mb-4 mx-auto shadow-md'
            canvas.width = viewport.width
            canvas.height = viewport.height

            const context = canvas.getContext('2d')
            
            // 应用图像质量设置
            context.imageSmoothingEnabled = mergeOptions.imageQuality > 0.7
            context.imageSmoothingQuality = mergeOptions.imageQuality > 0.8 ? 'high' : 
                                          mergeOptions.imageQuality > 0.6 ? 'medium' : 'low'

            const renderContext = { 
                canvasContext: context, 
                viewport,
                // 应用图像质量到渲染参数
                intent: mergeOptions.imageQuality > 0.8 ? 'display' : 'print'
            }

            // 先挂载画布再渲染
            pdfContainer.value.appendChild(canvas)
            await page.render(renderContext).promise

            // 渲染结束再次检查是否需要中断
            if (thisVersion !== renderVersion.value) break
        }
    } catch (error) {
        console.error('Error rendering PDF preview:', error)
    }
}

// 下载合并后的PDF
function downloadMergedPdf() {
    if (!mergedPdfUrl.value) return
    
    const a = document.createElement('a')
    a.href = mergedPdfUrl.value
    a.download = 'merged_document.pdf'
    a.click()
}

// 缩放控制
function zoomIn() {
    pdfScale.value = Math.min(3.0, pdfScale.value + 0.2)
    if (mergedPdfUrl.value) renderPdfPreview(mergedPdfUrl.value)
}

function zoomOut() {
    pdfScale.value = Math.max(0.5, pdfScale.value - 0.2)
    if (mergedPdfUrl.value) renderPdfPreview(mergedPdfUrl.value)
}

function resetZoom() {
    pdfScale.value = 1.0
    if (mergedPdfUrl.value) renderPdfPreview(mergedPdfUrl.value)
}

// 点击文档外部关闭排序选项
onMounted(() => {
    document.addEventListener('click', (e) => {
        if (showSortOptions.value && !e.target.closest('.sort-options')) {
            showSortOptions.value = false
        }
    })
})

// 兜底：合并URL变化时自动触发预览
watch(mergedPdfUrl, async (val) => {
    if (val) {
        await nextTick()
        await renderPdfPreview(val)
    }
})
</script>

<style scoped>
.btn {
    @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center;
}

.btn-sm {
    @apply px-3 py-1 text-sm;
}

.btn-success {
    @apply bg-green-600 hover:bg-green-700 text-white;
}

.btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
    @apply bg-gray-600 hover:bg-gray-700 text-white;
}

.ghost-file {
    @apply opacity-50 bg-blue-100 dark:bg-blue-900;
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