<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 左侧：输入区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-2">{{ $t('tools.pdf-to-image-converter.inputTitle') }}</h2>

        <!-- 文件上传区域 -->
        <div
          class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
          @drop.prevent="handleDrop" @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false"
          @click="fileInput.click()" :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
          <input type="file" ref="fileInput" class="hidden" accept="application/pdf" @change="handleFiles" />
          <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span class="text-gray-500">{{ $t('tools.pdf-to-image-converter.dragTip') }}</span>
          <span class="text-xs text-gray-400 mt-2">{{ $t('tools.pdf-to-image-converter.supported') }}</span>
        </div>

        <!-- URL导入 -->
        <div class="mt-4">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ $t('tools.pdf-to-image-converter.urlImportLabel') }}
          </label>
          <div class="flex">
            <input type="text" v-model="pdfUrl"
              class="flex-1 rounded-l-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              :placeholder="$t('tools.pdf-to-image-converter.urlImportPlaceholder')" />
            <button @click="importFromUrl"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm font-medium">
              {{ $t('tools.pdf-to-image-converter.urlImportButton') }}
            </button>
          </div>
        </div>

        <!-- 示例PDF按钮 -->
        <div class="flex justify-between items-center mt-4">
          <button class="btn btn-secondary" @click="loadSamplePdf">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {{ $t('tools.pdf-to-image-converter.loadSample') }}
          </button>
        </div>

        <!-- PDF预览区域 -->
        <div v-if="pdfLoaded" class="mt-6 border rounded-lg p-4">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-medium">{{ $t('tools.pdf-to-image-converter.preview') }}</h3>
            <button class="text-sm text-red-500 hover:text-red-600" @click="clearPdf">
              {{ $t('tools.pdf-to-image-converter.clearAll') }}
            </button>
          </div>

          <!-- PDF信息 -->
          <div class="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
            <p class="text-sm"><strong>{{ pdfName }}</strong> ({{ pdfPageCount }} {{ pdfPageCount > 1 ? 'pages' : 'page'
            }})</p>
          </div>

          <!-- 页面导航 -->
          <div class="flex items-center justify-between mb-4">
            <button @click="prevPage" :disabled="currentPage <= 1"
              class="p-1 rounded-full bg-gray-200 dark:bg-gray-700 disabled:opacity-50">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span class="text-sm">{{ $t('tools.pdf-to-image-converter.pageOf', {
              current: currentPage, total:
                pdfPageCount
            }) }}</span>
            <button @click="nextPage" :disabled="currentPage >= pdfPageCount"
              class="p-1 rounded-full bg-gray-200 dark:bg-gray-700 disabled:opacity-50">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- PDF页面预览 -->
          <div class="relative bg-gray-100 dark:bg-gray-900 flex justify-center items-center rounded-md overflow-hidden"
            style="height: 400px;">
            <canvas ref="pdfCanvas" class="max-w-full max-h-full"></canvas>
            <div v-if="isLoadingPage" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          </div>
        </div>

        <!-- 页面控制和输出设置 -->
        <div class="mt-6 space-y-6">
          <!-- 页面控制 -->
          <div class="border rounded-lg p-4">
            <h3 class="font-medium mb-3">{{ $t('tools.pdf-to-image-converter.pageControl') }}</h3>

            <div class="space-y-3">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.pdf-to-image-converter.pageRange') }}
                </label>
                <div class="flex flex-col space-y-2">
                  <label class="inline-flex items-center">
                    <input type="radio" v-model="pageRangeType" value="all" class="form-radio">
                    <span class="ml-2">{{ $t('tools.pdf-to-image-converter.allPages') }}</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input type="radio" v-model="pageRangeType" value="current" class="form-radio">
                    <span class="ml-2">{{ $t('tools.pdf-to-image-converter.currentPage') }}</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input type="radio" v-model="pageRangeType" value="custom" class="form-radio">
                    <span class="ml-2">{{ $t('tools.pdf-to-image-converter.customRange') }}</span>
                  </label>
                  <input v-if="pageRangeType === 'custom'" type="text" v-model="customPageRange"
                    class="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    :placeholder="$t('tools.pdf-to-image-converter.customRangePlaceholder')" />
                </div>
              </div>

              <div class="flex items-center">
                <input type="checkbox" id="skipBlankPages" v-model="skipBlankPages" class="form-checkbox">
                <label for="skipBlankPages" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {{ $t('tools.pdf-to-image-converter.skipBlankPages') }}
                </label>
              </div>
            </div>
          </div>

          <!-- 输出设置 -->
          <div class="border rounded-lg p-4">
            <h3 class="font-medium mb-3">{{ $t('tools.pdf-to-image-converter.outputSettings') }}</h3>

            <div class="space-y-4">
              <!-- 导出格式 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.pdf-to-image-converter.exportFormat') }}
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <label class="inline-flex items-center">
                    <input type="radio" v-model="exportFormat" value="image/png" class="form-radio">
                    <span class="ml-2">PNG</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input type="radio" v-model="exportFormat" value="image/jpeg" class="form-radio">
                    <span class="ml-2">JPEG</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input type="radio" v-model="exportFormat" value="image/webp" class="form-radio">
                    <span class="ml-2">WebP</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input type="radio" v-model="exportFormat" value="image/svg+xml" class="form-radio">
                    <span class="ml-2">SVG</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input type="radio" v-model="exportFormat" value="image/gif" class="form-radio">
                    <span class="ml-2">GIF</span>
                  </label>
                </div>
              </div>

              <!-- 分辨率 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.pdf-to-image-converter.resolution') }}: {{ resolution }} DPI
                </label>
                <input type="range" v-model.number="resolution" min="72" max="300" step="1" class="w-full" />
              </div>

              <!-- 图像质量 (仅JPEG和WebP) -->
              <div v-if="exportFormat === 'image/jpeg' || exportFormat === 'image/webp'">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.pdf-to-image-converter.imageQuality') }}: {{ Math.round(imageQuality * 100) }}%
                </label>
                <input type="range" v-model.number="imageQuality" min="0.1" max="1" step="0.01" class="w-full" />
              </div>

              <!-- 缩放比例 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ $t('tools.pdf-to-image-converter.scale') }}: {{ Math.round(scale * 100) }}%
                </label>
                <input type="range" v-model.number="scale" min="0.1" max="2" step="0.1" class="w-full" />
              </div>
            </div>
          </div>
        </div>

        <!-- 转换按钮 -->
        <button class="btn btn-primary w-full mt-6" :disabled="!pdfLoaded || isProcessing" @click="convertToImages">
          <svg v-if="!isProcessing" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <svg v-else class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
          {{ isProcessing ? $t('tools.pdf-to-image-converter.processing') :
            $t('tools.pdf-to-image-converter.convertBtn') }}
        </button>
      </div>

      <!-- 右侧：输出区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-xl font-bold">{{ $t('tools.pdf-to-image-converter.outputTitle') }}</h2>

          <!-- 批量下载按钮 -->
          <button v-if="convertedImages.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {{ $t('tools.pdf-to-image-converter.batchDownload') }}
          </button>
        </div>

        <div v-if="convertedImages.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
          <div v-for="(img, idx) in convertedImages" :key="idx" class="border rounded-lg p-4 bg-white dark:bg-gray-800">
            <!-- 图片预览 -->
            <div class="relative">
              <img :src="img.url" :alt="`Converted page ${img.pageNumber}`"
                class="w-full h-auto max-h-[400px] object-contain border rounded" />
            </div>

            <!-- 下载按钮 -->
            <div class="mt-4">
              <button class="btn btn-success w-full" @click="download(idx)">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {{ $t('tools.pdf-to-image-converter.downloadBtn') }} ({{ getFormatName(img.format) }})
              </button>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="mt-4 text-gray-500">{{ $t('tools.pdf-to-image-converter.noOutput') }}</p>
        </div>
      </div>
    </div>
    <PDFToImageConverterArticle />
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import PDFToImageConverterArticle from './PDFToImageConverterArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// PDF查看器类
class PdfViewer {
  constructor() {
    this.pdfDocument = null;
    this.pdfName = '';
    this.pdfPageCount = 0;
    this.currentPage = 1;
    this.pdfjsLib = null;
  }

  // 初始化PDF.js库
  async initialize() {
    if (window.pdfjsLib) {
      this.pdfjsLib = window.pdfjsLib;
      return;
    }

    // 使用CDN加载PDF.js
    const pdfjsScript = document.createElement('script');
    pdfjsScript.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
    pdfjsScript.async = true;

    await new Promise((resolve) => {
      pdfjsScript.onload = resolve;
      document.head.appendChild(pdfjsScript);
    });

    // 设置worker路径 - 修复这里
    window.pdfjsLib = window.pdfjsLib || {};
    // 正确设置workerSrc
    if (window.pdfjsLib.GlobalWorkerOptions) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
    }

    this.pdfjsLib = window.pdfjsLib;
  }

  // 从文件加载PDF
  async loadFromFile(file) {
    try {
      if (!this.pdfjsLib) {
        await this.initialize();
      }

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await this.pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      this.pdfDocument = pdf;
      this.pdfName = file.name;
      this.pdfPageCount = pdf.numPages;
      this.currentPage = 1;

      return {
        document: pdf,
        name: file.name,
        pageCount: pdf.numPages
      };
    } catch (error) {
      console.error('Error loading PDF:', error);
      throw new Error('Invalid PDF file');
    }
  }

  // 从URL加载PDF
  async loadFromUrl(url) {
    try {
      if (!this.pdfjsLib) {
        await this.initialize();
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Invalid URL or unable to access');
      }

      const arrayBuffer = await response.arrayBuffer();
      const pdf = await this.pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      this.pdfDocument = pdf;
      this.pdfName = url.split('/').pop() || 'document.pdf';
      this.pdfPageCount = pdf.numPages;
      this.currentPage = 1;

      return {
        document: pdf,
        name: this.pdfName,
        pageCount: pdf.numPages
      };
    } catch (error) {
      console.error('Error loading PDF from URL:', error);
      throw error;
    }
  }

  // 渲染PDF页面到Canvas
  async renderPage(pageNumber, canvas, scale = 1.5) {
    if (!this.pdfDocument) return;

    try {
      const page = await this.pdfDocument.getPage(pageNumber);
      const viewport = page.getViewport({ scale });

      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport
      }).promise;

      return { width: viewport.width, height: viewport.height };
    } catch (error) {
      console.error('Error rendering page:', error);
      throw error;
    }
  }

  // 渲染缩略图
  async renderThumbnail(pageNumber, canvas, scale = 0.2) {
    if (!this.pdfDocument) return;

    try {
      const page = await this.pdfDocument.getPage(pageNumber);
      const viewport = page.getViewport({ scale });

      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport
      }).promise;

      return { width: viewport.width, height: viewport.height };
    } catch (error) {
      console.error(`Error rendering thumbnail for page ${pageNumber}:`, error);
      throw error;
    }
  }

  // 解析页面范围
  parsePageRange(range) {
    if (!range.trim()) return [];

    const pages = new Set();
    const totalPages = this.pdfPageCount;

    try {
      const parts = range.split(',');

      for (const part of parts) {
        if (part.includes('-')) {
          const [start, end] = part.split('-').map(num => parseInt(num.trim()));

          if (isNaN(start) || isNaN(end)) continue;

          for (let i = start; i <= end; i++) {
            if (i >= 1 && i <= totalPages) {
              pages.add(i);
            }
          }
        } else {
          const pageNum = parseInt(part.trim());

          if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
            pages.add(pageNum);
          }
        }
      }
    } catch (error) {
      console.error('Error parsing page range:', error);
    }

    return Array.from(pages).sort((a, b) => a - b);
  }

  // 获取要转换的页面
  getPagesToConvert(pageRangeType, customPageRange) {
    if (!this.pdfDocument) return [];

    const totalPages = this.pdfPageCount;

    switch (pageRangeType) {
      case 'all':
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      case 'current':
        return [this.currentPage];
      case 'custom':
        const pages = this.parsePageRange(customPageRange);
        return pages.length > 0 ? pages : [this.currentPage];
      default:
        return [this.currentPage];
    }
  }

  // 清除PDF
  clear() {
    this.pdfDocument = null;
    this.pdfName = '';
    this.pdfPageCount = 0;
    this.currentPage = 1;
  }
}

// 图像转换器类
class ImageConverter {
  constructor(pdfViewer) {
    this.pdfViewer = pdfViewer;
  }

  // 检查图像是否为空白
  isImageBlank(imageData, threshold = 0.99) {
    // 计算白色或透明像素的比例
    let blankPixels = 0;
    const totalPixels = imageData.length / 4;

    for (let i = 0; i < imageData.length; i += 4) {
      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];
      const a = imageData[i + 3];

      // 检查是否为白色或接近白色的像素
      if ((r > 250 && g > 250 && b > 250) || a < 10) {
        blankPixels++;
      }
    }

    return blankPixels / totalPixels > threshold;
  }

  // 将Canvas转换为SVG
  async convertCanvasToSVG(canvas) {
    // 简单的SVG转换，实际应用中可能需要更复杂的处理
    const width = canvas.width;
    const height = canvas.height;
    const dataUrl = canvas.toDataURL('image/png');

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <image width="${width}" height="${height}" href="${dataUrl}" />
    </svg>`;
  }

  // 转换PDF页面为图片
  async convertPageToImage(pageNumber, options) {
    if (!this.pdfViewer.pdfDocument) {
      throw new Error('No PDF document loaded');
    }

    const {
      format = 'image/png',
      scale = 1,
      resolution = 150,
      quality = 0.92,
      width,
      height,
      maintainAspectRatio = true
    } = options;

    try {
      const page = await this.pdfViewer.pdfDocument.getPage(pageNumber);

      // 计算缩放比例和尺寸
      const viewport = page.getViewport({ scale });
      const pixelRatio = resolution / 72; // PDF使用72 DPI作为基准

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // 如果指定了自定义尺寸
      if (width && height) {
        canvas.width = width;
        canvas.height = height;

        // 计算适合的缩放比例
        let scaleX = width / viewport.width;
        let scaleY = height / viewport.height;

        // 如果需要保持宽高比
        if (maintainAspectRatio) {
          const scale = Math.min(scaleX, scaleY);
          scaleX = scaleY = scale;
        }

        const scaledViewport = page.getViewport({
          scale: scale * Math.min(scaleX, scaleY) * pixelRatio
        });

        // 居中绘制
        const offsetX = (canvas.width - scaledViewport.width / pixelRatio) / 2;
        const offsetY = (canvas.height - scaledViewport.height / pixelRatio) / 2;

        context.translate(offsetX, offsetY);
        context.scale(1 / pixelRatio, 1 / pixelRatio);

        await page.render({
          canvasContext: context,
          viewport: scaledViewport
        }).promise;
      } else {
        // 使用原始尺寸和分辨率
        canvas.width = Math.floor(viewport.width * pixelRatio);
        canvas.height = Math.floor(viewport.height * pixelRatio);

        const renderContext = {
          canvasContext: context,
          viewport: page.getViewport({ scale: scale * pixelRatio }),
          enableWebGL: true
        };

        await page.render(renderContext).promise;
      }

      // 检查是否为空白页面
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
      const isBlank = this.isImageBlank(imageData);

      if (isBlank) {
        return { isBlank: true };
      }

      // 转换为所需格式
      let imageUrl;

      if (format === 'image/svg+xml') {
        // SVG需要特殊处理
        const svgData = await this.convertCanvasToSVG(canvas);
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        imageUrl = URL.createObjectURL(blob);
      } else {
        // 其他格式直接使用Canvas的toDataURL或toBlob
        imageUrl = canvas.toDataURL(format, quality);
      }

      return {
        url: imageUrl,
        width: canvas.width,
        height: canvas.height,
        format,
        pageNumber,
        isBlank: false
      };
    } catch (error) {
      console.error(`Error converting page ${pageNumber} to image:`, error);
      throw error;
    }
  }

  // 获取格式名称
  getFormatName(format) {
    switch (format) {
      case 'image/png': return 'PNG';
      case 'image/jpeg': return 'JPEG';
      case 'image/webp': return 'WebP';
      case 'image/svg+xml': return 'SVG';
      case 'image/gif': return 'GIF';
      default: return format.split('/')[1].toUpperCase();
    }
  }

  // 获取文件扩展名
  getFileExtension(format) {
    switch (format) {
      case 'image/png': return 'png';
      case 'image/jpeg': return 'jpg';
      case 'image/webp': return 'webp';
      case 'image/svg+xml': return 'svg';
      case 'image/gif': return 'gif';
      default: return format.split('/')[1];
    }
  }
}

// 初始化PDF查看器和图像转换器
const pdfViewer = new PdfViewer()
const imageConverter = new ImageConverter(pdfViewer)

// 状态变量
const fileInput = ref(null)
const pdfCanvas = ref(null)
const isDragging = ref(false)
const isLoadingPage = ref(false)
const isProcessing = ref(false)
const pdfUrl = ref('')
const pdfLoaded = ref(false)
const pdfName = ref('')
const pdfPageCount = ref(0)
const currentPage = ref(1)
const convertedImages = ref([])

// 转换设置
const pageRangeType = ref('all')
const customPageRange = ref('')
const skipBlankPages = ref(false)
const exportFormat = ref('image/png')
const resolution = ref(150)
const imageQuality = ref(0.92)
const scale = ref(1)

// 示例PDF
const samplePdfUrl = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'

// 初始化
onMounted(async () => {
  await pdfViewer.initialize()
  await nextTick() // 确保 pdfCanvas 已经挂载
  await loadSamplePdf()
})

// 处理文件上传
function handleFiles(e) {
  const files = Array.from(e.target.files || e.dataTransfer.files)
  const pdfFile = files.find(file => file.type === 'application/pdf')

  if (pdfFile) {
    loadPdfFromFile(pdfFile)
  }

  isDragging.value = false
}

// 处理拖放
function handleDrop(e) {
  handleFiles(e)
  isDragging.value = false
}

// 从URL导入PDF
async function importFromUrl() {
  if (!pdfUrl.value) return

  try {
    isLoadingPage.value = true

    const result = await pdfViewer.loadFromUrl(pdfUrl.value)

    pdfLoaded.value = true
    pdfName.value = result.name
    pdfPageCount.value = result.pageCount
    currentPage.value = 1

    await renderCurrentPage()
  } catch (error) {
    toastRef.value.show(error.message)
  } finally {
    isLoadingPage.value = false
  }
}

// 从文件加载PDF
async function loadPdfFromFile(file) {
  try {
    isLoadingPage.value = true

    const result = await pdfViewer.loadFromFile(file)

    pdfLoaded.value = true
    pdfName.value = result.name
    pdfPageCount.value = result.pageCount
    currentPage.value = 1

    await renderCurrentPage()
  } catch (error) {
    toastRef.value.show(error.message)
  } finally {
    isLoadingPage.value = false
  }
}

// 加载示例PDF
async function loadSamplePdf() {
  try {
    isLoadingPage.value = true

    const result = await pdfViewer.loadFromUrl(samplePdfUrl)

    pdfLoaded.value = true
    pdfName.value = 'sample.pdf'
    pdfPageCount.value = result.pageCount
    currentPage.value = 1

    await renderCurrentPage()
  } catch (error) {
    toastRef.value.show(t('tools.pdf-to-image-converter.error.failedToLoad'))
    console.error(error)
  } finally {
    isLoadingPage.value = false
  }
}

// 渲染当前页面
async function renderCurrentPage() {
  if (!pdfCanvas.value) {
    await nextTick()
  }

  try {
    isLoadingPage.value = true
    await pdfViewer.renderPage(currentPage.value, pdfCanvas.value)
  } catch (error) {
    console.error('Error rendering page:', error)
  } finally {
    isLoadingPage.value = false
  }
}

// 页面导航
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
    pdfViewer.currentPage = currentPage.value
    renderCurrentPage()
  }
}

function nextPage() {
  if (currentPage.value < pdfPageCount.value) {
    currentPage.value++
    pdfViewer.currentPage = currentPage.value
    renderCurrentPage()
  }
}

// 清除PDF
function clearPdf() {
  pdfViewer.clear()
  pdfLoaded.value = false
  pdfName.value = ''
  pdfPageCount.value = 0
  currentPage.value = 1
  convertedImages.value = []
}

// 转换PDF页面为图片
async function convertToImages() {
  if (!pdfLoaded.value) return

  try {
    isProcessing.value = true
    convertedImages.value = []

    const pagesToConvert = pdfViewer.getPagesToConvert(pageRangeType.value, customPageRange.value)

    for (const pageNumber of pagesToConvert) {
      const options = {
        format: exportFormat.value,
        scale: scale.value,
        resolution: resolution.value,
        quality: imageQuality.value
      }

      const result = await imageConverter.convertPageToImage(pageNumber, options)

      // 如果页面是空白的且设置了跳过空白页
      if (result.isBlank && skipBlankPages.value) {
        continue
      }

      if (!result.isBlank) {
        convertedImages.value.push({
          url: result.url,
          pageNumber,
          format: exportFormat.value
        })
      }
    }
  } catch (error) {
    toastRef.value.show(t('tools.pdf-to-image-converter.error.failedToProcess'))
    console.error(error)
  } finally {
    isProcessing.value = false
  }
}

// 下载单个图片
function download(idx) {
  const img = convertedImages.value[idx]
  if (!img) return

  const a = document.createElement('a')
  a.href = img.url
  a.download = `${pdfName.value.replace(/\.pdf$/i, '')}_page${img.pageNumber}.${imageConverter.getFileExtension(img.format)}`
  a.click()
}

// 批量下载
async function downloadAll() {
  if (convertedImages.value.length === 0) return

  const zip = new JSZip()

  // 添加所有图片到zip
  for (let i = 0; i < convertedImages.value.length; i++) {
    const img = convertedImages.value[i]

    try {
      // 将dataURL转换为blob
      const response = await fetch(img.url)
      const blob = await response.blob()

      // 添加到zip
      zip.file(
        `${pdfName.value.replace(/\.pdf$/i, '')}_page${img.pageNumber}.${imageConverter.getFileExtension(img.format)}`,
        blob
      )
    } catch (error) {
      console.error(`Error adding image ${i} to zip:`, error)
    }
  }

  // 生成并下载zip
  try {
    const content = await zip.generateAsync({ type: 'blob' })
    const url = URL.createObjectURL(content)
    const a = document.createElement('a')
    a.href = url
    a.download = `${pdfName.value.replace(/\.pdf$/i, '')}_images.zip`
    a.click()
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error generating zip:', error)
    toastRef.value.show('Failed to create zip file')
  }
}

// 获取格式名称
function getFormatName(format) {
  return imageConverter.getFormatName(format)
}
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