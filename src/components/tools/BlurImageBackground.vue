<template>
  <div class="w-full" @paste="handlePaste">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 左侧：输入区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-2">{{ $t('tools.blur-image-background.inputTitle') }}</h2>

        <!-- 上传/拖放 -->
        <div class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
          @drop.prevent="handleDrop" @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false" @click="fileInput.click()"
          :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
          <input type="file" ref="fileInput" class="hidden" accept="image/png,image/jpeg,image/bmp,image/webp" multiple @change="handleFiles" />
          <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span class="text-gray-500">{{ $t('tools.blur-image-background.dragTip') }}</span>
          <span class="text-xs text-gray-400 mt-2">{{ $t('tools.blur-image-background.supported') }} · {{ $t('tools.blur-image-background.pasteTip') }}</span>
        </div>

        <!-- 示例、摄像头、URL -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          <button class="btn btn-secondary" @click="loadSample">{{ $t('tools.blur-image-background.loadSample') }}</button>
          <!-- <button class="btn btn-secondary" @click="toggleCamera">
            {{ cameraOn ? $t('tools.blur-image-background.stopCamera') : $t('tools.blur-image-background.startCamera') }}
          </button>
          <button class="btn btn-secondary" @click="captureFromCamera" :disabled="!cameraOn">{{ $t('tools.blur-image-background.capture') }}</button> -->
        </div>

        <div class="mt-3">
          <label class="block text-sm font-medium">{{ $t('tools.blur-image-background.urlImportTitle') }}</label>
          <div class="flex gap-2">
            <input v-model="urlInput" :placeholder="$t('tools.blur-image-background.urlPlaceholder')" class="flex-1 border rounded px-3 py-2 bg-white dark:bg-gray-700" />
            <button class="btn btn-secondary" @click="importUrl">{{ $t('tools.blur-image-background.importUrl') }}</button>
          </div>
        </div>

        <!-- 摄像头预览 -->
        <div v-if="cameraOn" class="mt-4">
          <h3 class="font-medium mb-2">{{ $t('tools.blur-image-background.cameraTitle') }}</h3>
          <video ref="videoEl" autoplay playsinline class="w-full rounded border"></video>
        </div>

        <!-- 输入预览列表与页面控制 -->
        <div v-if="inputs.length" class="mt-4 space-y-3">
          <div class="flex justify-between items-center">
            <h3 class="font-medium">{{ $t('tools.blur-image-background.preview') }} ({{ inputs.length }})</h3>
            <button class="text-sm text-red-500 hover:text-red-600" @click="clearAll">{{ $t('tools.blur-image-background.clearAll') }}</button>
          </div>

          <div class="flex items-center gap-2 text-sm">
            <button class="btn btn-sm" @click="selectAll(true)">{{ $t('tools.blur-image-background.selectAll') }}</button>
            <button class="btn btn-sm" @click="selectAll(false)">{{ $t('tools.blur-image-background.deselectAll') }}</button>
            <label class="ml-2">{{ $t('tools.blur-image-background.rangeLabel') }}</label>
            <input v-model="rangeText" class="border rounded px-2 py-1 w-40 bg-white dark:bg-gray-700" />
            <button class="btn btn-sm" @click="applyRange">{{ $t('tools.blur-image-background.applyRange') }}</button>
            <label class="flex items-center gap-1 ml-2">
              <input type="checkbox" v-model="skipBlank" />
              <span>{{ $t('tools.blur-image-background.skipBlank') }}</span>
            </label>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[320px] overflow-y-auto p-1">
            <div v-for="(img, idx) in inputs" :key="img.id" class="relative group rounded-lg overflow-hidden shadow-sm border">
              <img :src="img.url" class="w-full h-24 object-cover" :alt="`input ${idx+1}`" />
              <div class="absolute top-1 left-1 flex gap-1">
                <input type="checkbox" v-model="img.selected" />
                <button class="btn btn-xs" @click.stop="moveUp(idx)">{{ $t('tools.blur-image-background.orderUp') }}</button>
                <button class="btn btn-xs" @click.stop="moveDown(idx)">{{ $t('tools.blur-image-background.orderDown') }}</button>
              </div>
              <button class="absolute top-1 right-1 text-white bg-black/50 hover:bg-black/70 rounded px-1" @click.stop="remove(idx)">×</button>
            </div>
          </div>
        </div>

        <!-- 参数面板 -->
        <div class="mt-4 space-y-4">
          <h3 class="text-lg font-semibold">{{ $t('tools.blur-image-background.blurTypeTitle') }}</h3>
          <div class="flex flex-wrap gap-4">
            <label class="flex items-center gap-2"><input type="radio" value="gaussian" v-model="cfg.blurType" />{{ $t('tools.blur-image-background.blurTypes.gaussian') }}</label>
            <label class="flex items-center gap-2"><input type="radio" value="lens" v-model="cfg.blurType" />{{ $t('tools.blur-image-background.blurTypes.lens') }}</label>
            <label class="flex items-center gap-2"><input type="radio" value="motion" v-model="cfg.blurType" />{{ $t('tools.blur-image-background.blurTypes.motion') }}</label>
            <label class="flex items-center gap-2"><input type="radio" value="radial" v-model="cfg.blurType" />{{ $t('tools.blur-image-background.blurTypes.radial') }}</label>
            <label class="flex items-center gap-2"><input type="radio" value="bokeh" v-model="cfg.blurType" />{{ $t('tools.blur-image-background.blurTypes.bokeh') }}</label>
          </div>

          <h3 class="text-lg font-semibold">{{ $t('tools.blur-image-background.controlsTitle') }}</h3>
          <div class="grid grid-cols-2 gap-3">
            <label class="text-sm">{{ $t('tools.blur-image-background.radius') }}: {{ cfg.radius }}
              <input type="range" min="1" max="100" v-model.number="cfg.radius" />
            </label>
            <label class="text-sm" v-if="cfg.blurType==='motion'">{{ $t('tools.blur-image-background.angle') }}: {{ cfg.angle }}
              <input type="range" min="0" max="360" v-model.number="cfg.angle" />
            </label>
            <label class="text-sm" v-if="cfg.blurType==='radial' || cfg.blurType==='lens'">
              {{ $t('tools.blur-image-background.centerX') }}: {{ cfg.centerX }}
              <input type="range" min="0" max="1" step="0.01" v-model.number="cfg.centerX" />
            </label>
            <label class="text-sm" v-if="cfg.blurType==='radial' || cfg.blurType==='lens'">
              {{ $t('tools.blur-image-background.centerY') }}: {{ cfg.centerY }}
              <input type="range" min="0" max="1" step="0.01" v-model.number="cfg.centerY" />
            </label>
            <label class="text-sm" v-if="cfg.blurType==='lens'">
              {{ $t('tools.blur-image-background.focus') }}: {{ cfg.focus }}
              <input type="range" min="0" max="1" step="0.01" v-model.number="cfg.focus" />
            </label>
          </div>

          <h3 class="text-lg font-semibold">{{ $t('tools.blur-image-background.segmentationTitle') }}</h3>
          <div class="grid grid-cols-2 gap-3">
            <label class="text-sm"><input type="checkbox" v-model="cfg.enableSeg" /> {{ $t('tools.blur-image-background.enableSeg') }}</label>
            <label class="text-sm">{{ $t('tools.blur-image-background.segFeather') }}: {{ cfg.segFeather }}
              <input type="range" min="0" max="20" v-model.number="cfg.segFeather" />
            </label>
          </div>

          <h3 class="text-lg font-semibold">{{ $t('tools.blur-image-background.backgroundTitle') }}</h3>
          <div class="grid grid-cols-2 gap-3">
            <label class="text-sm">
              {{ $t('tools.blur-image-background.bgMode') }}
              <select v-model="cfg.bgMode" class="w-full border rounded px-2 py-1 bg-white dark:bg-gray-700">
                <option value="original">{{ $t('tools.blur-image-background.bgModes.original') }}</option>
                <option value="solid">{{ $t('tools.blur-image-background.bgModes.solid') }}</option>
                <option value="gradient">{{ $t('tools.blur-image-background.bgModes.gradient') }}</option>
                <option value="image">{{ $t('tools.blur-image-background.bgModes.image') }}</option>
              </select>
            </label>
            <label class="text-sm" v-if="cfg.bgMode==='solid' || cfg.bgMode==='gradient'">
              {{ $t('tools.blur-image-background.bgColor') }}
              <input type="color" v-model="cfg.bgColor1" />
            </label>
            <label class="text-sm" v-if="cfg.bgMode==='gradient'">
              {{ $t('tools.blur-image-background.bgColor2') }}
              <input type="color" v-model="cfg.bgColor2" />
            </label>
            <label class="text-sm" v-if="cfg.bgMode==='image'">
              {{ $t('tools.blur-image-background.bgImageUrl') }}
              <input v-model="cfg.bgImageUrl" class="w-full border rounded px-2 py-1 bg-white dark:bg-gray-700" />
            </label>
            <label class="text-sm">
              {{ $t('tools.blur-image-background.bgTransparency') }}: {{ Math.round(cfg.bgAlpha*100) }}%
              <input type="range" min="0" max="1" step="0.01" v-model.number="cfg.bgAlpha" />
            </label>
            <label class="text-sm">
              {{ $t('tools.blur-image-background.blend') }}
              <select v-model="cfg.blend" class="w-full border rounded px-2 py-1 bg-white dark:bg-gray-700">
                <option value="source-over">{{ $t('tools.blur-image-background.blends.normal') }}</option>
                <option value="multiply">{{ $t('tools.blur-image-background.blends.multiply') }}</option>
                <option value="screen">{{ $t('tools.blur-image-background.blends.screen') }}</option>
                <option value="overlay">{{ $t('tools.blur-image-background.blends.overlay') }}</option>
                <option value="lighten">{{ $t('tools.blur-image-background.blends.lighten') }}</option>
                <option value="darken">{{ $t('tools.blur-image-background.blends.darken') }}</option>
              </select>
            </label>
          </div>

          <h3 class="text-lg font-semibold">{{ $t('tools.blur-image-background.sizeTitle') }}</h3>
          <div class="grid grid-cols-2 gap-3">
            <label class="text-sm">
              {{ $t('tools.blur-image-background.presetSize') }}
              <select v-model="cfg.preset" class="w-full border rounded px-2 py-1 bg-white dark:bg-gray-700">
                <option value="original">{{ $t('tools.blur-image-background.presets.original') }}</option>
                <option value="square1080">{{ $t('tools.blur-image-background.presets.square1080') }}</option>
                <option value="story1080x1920">{{ $t('tools.blur-image-background.presets.story1080x1920') }}</option>
                <option value="facebook1200x630">{{ $t('tools.blur-image-background.presets.facebook1200x630') }}</option>
                <option value="twitter1200x675">{{ $t('tools.blur-image-background.presets.twitter1200x675') }}</option>
                <option value="custom">{{ $t('tools.blur-image-background.presets.custom') }}</option>
              </select>
            </label>
            <label class="text-sm">
              {{ $t('tools.blur-image-background.scalePercent') }}: {{ cfg.scalePercent }}%
              <input type="range" min="10" max="300" step="1" v-model.number="cfg.scalePercent" />
            </label>
            <label class="text-sm" v-if="cfg.preset==='custom'">
              {{ $t('tools.blur-image-background.customWidth') }}
              <input type="number" min="16" v-model.number="cfg.customW" class="w-full border rounded px-2 py-1 bg-white dark:bg-gray-700" />
            </label>
            <label class="text-sm" v-if="cfg.preset==='custom'">
              {{ $t('tools.blur-image-background.customHeight') }}
              <input type="number" min="16" v-model.number="cfg.customH" class="w-full border rounded px-2 py-1 bg-white dark:bg-gray-700" />
            </label>
            <label class="text-sm">
              {{ $t('tools.blur-image-background.dpi') }}
              <input type="number" min="72" max="300" v-model.number="cfg.dpi" class="w-full border rounded px-2 py-1 bg-white dark:bg-gray-700" />
            </label>
          </div>
        </div>

        <!-- 操作按钮 -->
        <button class="btn btn-primary w-full mt-4" :disabled="!inputs.length" @click="processAll">
          {{ $t('tools.blur-image-background.processBtn') }}
        </button>
      </div>

      <!-- 右侧：输出区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-xl font-bold">{{ $t('tools.blur-image-background.outputTitle') }}</h2>
          <button v-if="outputs.length > 1" class="btn btn-primary btn-sm" @click="downloadAll">
            {{ $t('tools.blur-image-background.batchDownload') }}
          </button>
        </div>

        <div v-if="outputs.length" class="space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
          <div v-for="(img, idx) in outputs" :key="idx" class="border rounded-lg p-4 bg-white dark:bg-gray-800">
            <!-- 对比开关 -->
            <label class="flex items-center gap-2 mb-2 text-sm">
              <input type="checkbox" v-model="img.showCompare" />
              <span>{{ $t('tools.blur-image-background.compareToggle') }}</span>
            </label>

            <div class="relative group">
              <div class="image-container overflow-hidden" :ref="el => { if (el) containers[idx] = el }">
                <canvas :ref="el => setCanvasRef(el, idx)" :width="img.w" :height="img.h"
                  class="w-full h-auto max-h-[400px] object-contain border rounded cursor-move"
                  @mousedown="startPan($event, idx)" @wheel="handleZoom($event, idx)"
                  @touchstart="startTouch($event, idx)" @touchmove="moveTouch($event, idx)" @touchend="endTouch"></canvas>
              </div>
              <div class="absolute top-2 right-2 flex space-x-2">
                <button class="icon-btn" @click="zoomIn(idx)" :aria-label="$t('tools.blur-image-background.zoomIn')">+</button>
                <button class="icon-btn" @click="zoomOut(idx)" :aria-label="$t('tools.blur-image-background.zoomOut')">-</button>
                <button class="icon-btn" @click="resetView(idx)" :aria-label="$t('tools.blur-image-background.resetView')">↺</button>
              </div>
            </div>

            <!-- 导出 -->
            <div class="mt-4 space-y-2">
              <div class="flex flex-wrap gap-4">
                <label class="flex items-center space-x-2"><input type="radio" v-model="img.exportType" value="image/png" /> <span>PNG</span></label>
                <label class="flex items-center space-x-2"><input type="radio" v-model="img.exportType" value="image/jpeg" /> <span>JPG</span></label>
                <label class="flex items-center space-x-2"><input type="radio" v-model="img.exportType" value="image/webp" /> <span>WEBP</span></label>
              </div>
              <div v-if="img.exportType !== 'image/png'">
                <label class="text-sm">{{ $t('tools.blur-image-background.imageQuality') }}: {{ Math.round(img.quality*100) }}%
                  <input type="range" min="0.5" max="1" step="0.01" v-model.number="img.quality" />
                </label>
              </div>
              <div class="flex gap-2">
                <button class="btn btn-success flex-1" @click="download(idx)">{{ $t('tools.blur-image-background.downloadBtn') }}</button>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="mt-4 text-gray-500">{{ $t('tools.blur-image-background.noOutput') }}</p>
        </div>
      </div>
    </div>

    <BlurImageBackgroundArticle />
  </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import BlurImageBackgroundArticle from './BlurImageBackgroundArticle.vue'
// npm 导入依赖 (需要先安装: npm install glfx stackblur-canvas @mediapipe/selfie_segmentation)
import fx from 'glfx'
// import { StackBlur } from 'stackblur-canvas'
import * as StackBlur from 'stackblur-canvas'


const { t } = useI18n()

// 库实例
let fxInstance = null
let segmenter = null
let segmentationLoaded = false
let segmentationLoading = false

// 初始化 glfx
async function initFx() {
  try {
    fxInstance = fx
    console.log('glfx 初始化成功')
    return true
  } catch (e) {
    console.warn('glfx 初始化失败', e)
    return false
  }
}

// 初始化分割模型 (懒加载)
async function initSegmentation() {
  if (segmentationLoaded || segmentationLoading) return segmentationLoaded
  segmentationLoading = true
  
  try {
    // 动态导入 MediaPipe (需要先安装: npm install @mediapipe/selfie_segmentation)
    const SelfieSegmentation = await import('@mediapipe/selfie_segmentation')
    segmenter = new SelfieSegmentation.SelfieSegmentation({
      locateFile: (file) => `/node_modules/@mediapipe/selfie_segmentation/${file}`
    })
    await segmenter.setOptions({ modelSelection: 1 }) // 1=Landscape
    segmentationLoaded = true
    console.log('MediaPipe 分割模型加载成功')
  } catch (e) {
    console.warn('MediaPipe 加载失败，尝试使用备选方案', e)
    try {
      // 如果需要备选方案，可以安装: npm install @tensorflow-models/body-pix @tensorflow/tfjs
      // const bodyPix = await import('@tensorflow-models/body-pix')
      // segmenter = await bodyPix.load({
      //   architecture: 'MobileNetV1',
      //   outputStride: 16,
      //   multiplier: 0.75,
      //   quantBytes: 2
      // })
      // segmentationLoaded = true
    } catch (e2) {
      console.error('所有分割模型加载失败', e2)
    }
  }
  
  segmentationLoading = false
  return segmentationLoaded
}

onMounted(() => {
  // 初始化库
  initFx()
  initSegmentation()
  loadSample()
})

const fileInput = ref(null)
const videoEl = ref(null)
const cameraOn = ref(false)
const urlInput = ref('')
const isDragging = ref(false)
const inputs = reactive([]) // {id, file, url, selected}
const outputs = reactive([]) // {canvas, w, h, exportType, quality, name, showCompare, originalCanvas}
const containers = reactive([])
const canvasRefs = ref([])
const transforms = reactive([]) // per output view
const rangeText = ref('')
const skipBlank = ref(false)

// 预设/参数
const cfg = reactive({
  blurType: 'bokeh',
  radius: 50, // 增加默认模糊强度
  angle: 0,
  centerX: 0.5,
  centerY: 0.5,
  focus: 0.2,
  enableSeg: true,
  segFeather: 8, // 增加羽化
  bgMode: 'original',
  bgColor1: '#ffffff',
  bgColor2: '#e5e7eb',
  bgImageUrl: '',
  bgAlpha: 1,
  blend: 'source-over',
  preset: 'original',
  scalePercent: 100,
  customW: 1024,
  customH: 1024,
  dpi: 96
})

function addInputFromBlob(blob, name='image') {
  const url = URL.createObjectURL(blob)
  inputs.push({ id: crypto.randomUUID(), file: new File([blob], name, { type: blob.type || 'image/png' }), url, selected: true, name })
}

function handleFiles(e) {
  const files = Array.from(e.target.files || e.dataTransfer.files)
  files.forEach(file => {
    if (!/^image\/(png|jpeg|bmp|webp)$/i.test(file.type)) return
    const url = URL.createObjectURL(file)
    inputs.push({ id: crypto.randomUUID(), file, url, selected: true, name: file.name })
  })
  isDragging.value = false
}

function handleDrop(e) {
  handleFiles(e)
  isDragging.value = false
}

function handlePaste(e) {
  const items = e.clipboardData?.items || []
  for (const it of items) {
    if (it.type && it.type.startsWith('image/')) {
      const blob = it.getAsFile()
      if (blob) addInputFromBlob(blob, 'pasted.png')
    }
  }
}

async function toggleCamera() {
  if (cameraOn.value) {
    const s = videoEl.value?.srcObject
    s && s.getTracks().forEach(t => t.stop())
    videoEl.value.srcObject = null
    cameraOn.value = false
    return
  }
  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  videoEl.value.srcObject = stream
  cameraOn.value = true
}

function captureFromCamera() {
  if (!cameraOn.value || !videoEl.value) return
  const v = videoEl.value
  const c = document.createElement('canvas')
  c.width = v.videoWidth
  c.height = v.videoHeight
  c.getContext('2d').drawImage(v, 0, 0)
  c.toBlob(blob => blob && addInputFromBlob(blob, 'camera.png'), 'image/png')
}

async function importUrl() {
  if (!urlInput.value) return
  try {
    const res = await fetch(urlInput.value, { mode: 'cors' })
    const blob = await res.blob()
    addInputFromBlob(blob, 'remote.png')
    urlInput.value = ''
  } catch (e) {
    console.error('URL import failed', e)
  }
}

function loadSample() {
  // 使用更适合展示模糊效果的图片
  fetch('https://www.ufreetools.com/images/profile-sample3.png')
    .then(r => r.blob())
    .then(b => addInputFromBlob(b, 'sample.png'))
    .catch(() => {
      // 如果失败，回退到原来的 favicon
      fetch('/favicon.png')
        .then(r => r.ok ? r.blob() : fetch('https://www.ufreetools.com/favicon.png').then(r2 => r2.blob()))
        .then(b => addInputFromBlob(b, 'sample.png'))
        .catch(() => {})
    })
}

function remove(idx) {
  URL.revokeObjectURL(inputs[idx].url)
  inputs.splice(idx, 1)
}

function clearAll() {
  inputs.forEach(i => URL.revokeObjectURL(i.url))
  inputs.splice(0)
  outputs.splice(0)
  transforms.splice(0)
  containers.splice(0)
}

// 页面控制
function selectAll(v) {
  inputs.forEach(i => i.selected = v)
}
function applyRange() {
  const sel = new Set()
  const txt = rangeText.value.trim()
  if (!txt) return
  txt.split(',').forEach(part => {
    const m = part.trim().match(/^(\d+)(-(\d+))?$/)
    if (!m) return
    const a = parseInt(m[1]); const b = m[3] ? parseInt(m[3]) : a
    for (let k = Math.min(a,b); k <= Math.max(a,b); k++) sel.add(k-1)
  })
  inputs.forEach((it, idx) => it.selected = sel.has(idx))
}
function moveUp(idx){ if (idx<=0) return; const t=inputs[idx]; inputs.splice(idx,1); inputs.splice(idx-1,0,t) }
function moveDown(idx){ if (idx>=inputs.length-1) return; const t=inputs[idx]; inputs.splice(idx,1); inputs.splice(idx+1,0,t) }

// 空白检测
async function isBlankImage(url) {
  const img = await loadImage(url)
  const c = document.createElement('canvas')
  c.width = img.width; c.height = img.height
  const ctx = c.getContext('2d')
  ctx.drawImage(img, 0, 0)
  const d = ctx.getImageData(0,0,c.width,c.height).data
  let sum=0, sum2=0, n=c.width*c.height
  for (let i=0;i<d.length;i+=4){
    const l = 0.2126*d[i] + 0.7152*d[i+1] + 0.0722*d[i+2]
    sum += l; sum2 += l*l
  }
  const mean = sum/n
  const variance = sum2/n - mean*mean
  return variance < 5 // 经验阈值：过低视为空白
}

function loadImage(url){
  return new Promise((res, rej) => {
    const im = new Image()
    im.crossOrigin = 'anonymous'
    im.onload = () => res(im)
    im.onerror = rej
    im.src = url
    if (im.complete) res(im)
  })
}

// 生成分割掩码
async function segmentMask(image) {
  if (!segmentationLoaded) {
    // 尝试初始化
    const success = await initSegmentation()
    if (!success) return null
  }
  
  if (!segmenter) return null
  
  try {
    // MediaPipe 方式
    return new Promise(async (resolve) => {
      segmenter.onResults((results) => {
        resolve(results.segmentationMask || null)
      })
      await segmenter.send({ image })
    })
  } catch (e) {
    console.error('分割失败', e)
    return null
  }
}

// 应用模糊并输出
async function processAll() {
  outputs.splice(0)
  transforms.splice(0)
  containers.splice(0)

  for (let i=0; i<inputs.length; i++) {
    const it = inputs[i]
    if (!it.selected) continue
    if (skipBlank.value && await isBlankImage(it.url)) continue

    const img = await loadImage(it.url)
    // 目标尺寸
    let targetW = img.width, targetH = img.height
    if (cfg.preset !== 'original') {
      const map = {
        square1080: [1080,1080],
        story1080x1920: [1080,1920],
        facebook1200x630: [1200,630],
        twitter1200x675: [1200,675]
      }
      if (cfg.preset in map) { [targetW, targetH] = map[cfg.preset] }
      if (cfg.preset === 'custom') { targetW = Math.max(16, cfg.customW); targetH = Math.max(16, cfg.customH) }
    }
    const scale = (cfg.scalePercent/100)
    targetW = Math.round(targetW * scale)
    targetH = Math.round(targetH * scale)

    // 原图绘制到工作画布
    const work = document.createElement('canvas')
    work.width = targetW; work.height = targetH
    const wctx = work.getContext('2d')
    wctx.drawImage(img, 0, 0, targetW, targetH)

    // 分割掩码与羽化
    let maskCanvas = null
    if (cfg.enableSeg) {
      const mask = await segmentMask(work)
      if (mask) {
        // 将 segmentationMask 绘制到画布并羽化
        maskCanvas = document.createElement('canvas')
        maskCanvas.width = targetW; maskCanvas.height = targetH
        const mctx = maskCanvas.getContext('2d')
        mctx.drawImage(mask, 0, 0, targetW, targetH)
        if (window.stackBlurCanvasRGBA && cfg.segFeather>0) {
          // 将Alpha增强后羽化
          const id = mctx.getImageData(0,0,targetW,targetH)
          // 确保为前景白、背景黑
          for (let p=0;p<id.data.length;p+=4){
            // mediapipe 输出是灰度mask，直接取R作为alpha
            const a = id.data[p]
            id.data[p]=255; id.data[p+1]=255; id.data[p+2]=255; id.data[p+3]=a
          }
          mctx.putImageData(id,0,0)
          window.stackBlurCanvasRGBA(maskCanvas,0,0,targetW,targetH, cfg.segFeather)
        }
      }
    }

    // 背景基底
    const bg = document.createElement('canvas')
    bg.width = targetW; bg.height = targetH
    const bgctx = bg.getContext('2d')
    bgctx.globalAlpha = cfg.bgAlpha
    if (cfg.bgMode === 'original') {
      bgctx.drawImage(work, 0,0)
    } else if (cfg.bgMode === 'solid') {
      bgctx.fillStyle = cfg.bgColor1
      bgctx.fillRect(0,0,targetW,targetH)
    } else if (cfg.bgMode === 'gradient') {
      const g = bgctx.createLinearGradient(0,0,targetW,targetH)
      g.addColorStop(0,cfg.bgColor1); g.addColorStop(1,cfg.bgColor2)
      bgctx.fillStyle = g
      bgctx.fillRect(0,0,targetW,targetH)
    } else if (cfg.bgMode === 'image' && cfg.bgImageUrl) {
      try {
        const bgImg = await loadImage(cfg.bgImageUrl)
        bgctx.drawImage(bgImg, 0,0,targetW,targetH)
      } catch {}
    }
    bgctx.globalAlpha = 1

    // 对背景施加模糊
    const blurred = await applyBlur(bg, cfg, fx)

    // 前景裁剪（保留主体）
    const fg = document.createElement('canvas')
    fg.width = targetW; fg.height = targetH
    const fgctx = fg.getContext('2d')
    fgctx.drawImage(work,0,0)
    if (maskCanvas) {
      // 先生成前景alpha
      const m = document.createElement('canvas')
      m.width = targetW; m.height = targetH
      const mctx = m.getContext('2d')
      mctx.drawImage(maskCanvas,0,0)
      fgctx.globalCompositeOperation = 'destination-in'
      fgctx.drawImage(m,0,0)
      fgctx.globalCompositeOperation = 'source-over'
    }

    // 合成
    const out = document.createElement('canvas')
    out.width = targetW; out.height = targetH
    const octx = out.getContext('2d')
    octx.globalCompositeOperation = 'source-over'
    octx.drawImage(blurred,0,0)
    octx.globalCompositeOperation = cfg.blend
    octx.drawImage(fg,0,0)

    const name = (it.name || 'output').replace(/\.(\w+)$/, '_blur.$1')
    outputs.push({ canvas: out, originalCanvas: work, w: out.width, h: out.height, exportType: 'image/png', quality: 0.92, name, showCompare: false }) // 默认关闭对比
    transforms.push({ scale: 1, offsetX: 0, offsetY: 0, isDragging: false, lastX: 0, lastY: 0 })
    await nextTick()
    if (canvasRefs.value[outputs.length-1]) setCanvasRef(canvasRefs.value[outputs.length-1], outputs.length-1)
  }
}

async function applyBlur(canvas, cfg, fxLib){
  const w = canvas.width, h = canvas.height
  if (fxLib) {
    try {
      const fxCanvas = fxLib.canvas()
      const texture = fxCanvas.texture(canvas)
      fxCanvas.draw(texture)
      if (cfg.blurType === 'gaussian' || cfg.blurType === 'bokeh') {
        // 增强高斯模糊效果
        fxCanvas.triangleBlur(Math.min(20, cfg.radius/3))
      } else if (cfg.blurType === 'motion') {
        const rad = (cfg.angle || 0) * Math.PI / 180
        // 增强运动模糊效果
        fxCanvas.motionBlur(rad, cfg.radius/20) // 从 /50 改为 /20
      } else if (cfg.blurType === 'radial') {
        // 增强径向模糊效果
        fxCanvas.zoomBlur(cfg.centerX * w, cfg.centerY * h, Math.max(0.01, cfg.radius/50)) // 从 /100 改为 /50
      } else if (cfg.blurType === 'lens') {
        // 以 tiltShift 近似镜头景深（上/下两条带状清晰区）
        const cy = cfg.centerY * h
        const band = Math.max(10, cfg.focus * Math.min(w,h))
        fxCanvas.tiltShift(0, cy - band, w, cy - band, 0, cy + band, w, cy + band, cfg.radius/3) // 增强效果
      }
      fxCanvas.update()
      const out = document.createElement('canvas')
      out.width = w; out.height = h
      out.getContext('2d').drawImage(fxCanvas, 0,0)
      return out
    } catch (e) {
      console.warn('glfx failed, fallback to stackblur', e)
    }
  }
  
  // Fallback: StackBlur 仅支持高斯近似
  const out = document.createElement('canvas')
  out.width = w; out.height = h
  const ctx = out.getContext('2d')
  ctx.drawImage(canvas,0,0)
  
  // 使用导入的 StackBlur
  try {
    // 增强模糊效果，使用更大的半径
    const blurRadius = Math.max(10, Math.round(cfg.radius * 1.5))
    StackBlur.canvasRGBA(out, 0, 0, w, h, blurRadius)
  } catch (e) {
    console.error('StackBlur 失败', e)
  }
  
  return out
}

// 画布呈现（支持缩放与拖拽）
function setCanvasRef(el, idx){
  if (!el || !outputs[idx]) return
  canvasRefs.value[idx] = el
  const ctx = el.getContext('2d')
  const img = outputs[idx]
  const state = transforms[idx]

  const container = containers[idx]
  const parentWidth = container?.clientWidth || 300
  const maxHeight = 400
  const ratio = img.h / img.w
  const displayW = parentWidth
  const displayH = Math.min(parentWidth * ratio, maxHeight)

  el.width = displayW
  el.height = displayH

  ctx.clearRect(0,0,el.width, el.height)
  ctx.save()

  const cx = el.width/2, cy = el.height/2
  ctx.translate(cx + state.offsetX, cy + state.offsetY)
  ctx.scale(state.scale, state.scale)

  const drawW = img.w, drawH = img.h

  if (img.showCompare) {
    // 左右对比：左原图，右处理图
    const split = drawW/2
    // 原图
    const left = document.createElement('canvas')
    left.width = drawW; left.height = drawH
    left.getContext('2d').drawImage(img.originalCanvas,0,0)
    // 处理图
    const right = img.canvas

    ctx.translate(-drawW/2, -drawH/2)
    // 左半原图
    ctx.drawImage(left, 0,0, split, drawH, 0,0, split, drawH)
    // 右半处理
    ctx.drawImage(right, split,0, drawW-split, drawH, split,0, drawW-split, drawH)
  } else {
    ctx.translate(-drawW/2, -drawH/2)
    ctx.drawImage(img.canvas, 0,0, drawW, drawH)
  }

  ctx.restore()
}

function startPan(e, idx){
  const s = transforms[idx]
  s.isDragging = true
  s.lastX = e.clientX; s.lastY = e.clientY
  const moveHandler = (ev) => movePan(ev, idx)
  window.addEventListener('mousemove', moveHandler)
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', moveHandler)
    s.isDragging = false
  }, { once: true })
}
function movePan(e, idx){
  const s = transforms[idx]
  if (!s.isDragging) return
  s.offsetX += (e.clientX - s.lastX) / s.scale
  s.offsetY += (e.clientY - s.lastY) / s.scale
  s.lastX = e.clientX; s.lastY = e.clientY
  setCanvasRef(canvasRefs.value[idx], idx)
}
function startTouch(e, idx){
  if (e.touches.length !== 1) return
  const t = e.touches[0]; const s = transforms[idx]
  s.isDragging = true; s.lastX = t.clientX; s.lastY = t.clientY; e.preventDefault()
}
function moveTouch(e, idx){
  if (e.touches.length !== 1) return
  const t = e.touches[0]; const s = transforms[idx]
  if (!s.isDragging) return
  s.offsetX += (t.clientX - s.lastX) / s.scale
  s.offsetY += (t.clientY - s.lastY) / s.scale
  s.lastX = t.clientX; s.lastY = t.clientY
  setCanvasRef(canvasRefs.value[idx], idx); e.preventDefault()
}
function endTouch(){ transforms.forEach(s => s.isDragging=false) }
function handleZoom(e, idx){
  e.preventDefault()
  const s = transforms[idx]
  const delta = e.deltaY > 0 ? 0.9 : 1.1
  s.scale = Math.max(0.2, Math.min(10, s.scale * delta))
  setCanvasRef(canvasRefs.value[idx], idx)
}
function zoomIn(idx){ const s=transforms[idx]; s.scale=Math.min(10, s.scale*1.2); setCanvasRef(canvasRefs.value[idx], idx) }
function zoomOut(idx){ const s=transforms[idx]; s.scale=Math.max(0.2, s.scale/1.2); setCanvasRef(canvasRefs.value[idx], idx) }
function resetView(idx){ const s=transforms[idx]; s.scale=1; s.offsetX=0; s.offsetY=0; setCanvasRef(canvasRefs.value[idx], idx) }

// 导出
function download(idx){
  const img = outputs[idx]
  const mime = img.exportType
  const ext = mime.split('/')[1]
  const url = img.canvas.toDataURL(mime, img.quality || 0.92)
  const a = document.createElement('a')
  a.href = url
  a.download = img.name.replace(/\.\w+$/, `.${ext}`)
  a.click()
}

async function downloadAll(){
  const zip = new JSZip()
  for (let i=0;i<outputs.length;i++){
    const img = outputs[i]
    const url = img.canvas.toDataURL(img.exportType, img.quality || 0.92)
    const blob = await (await fetch(url)).blob()
    zip.file(img.name.replace(/\.\w+$/, `.${img.exportType.split('/')[1]}`), blob)
  }
  const content = await zip.generateAsync({ type: 'blob' })
  const u = URL.createObjectURL(content)
  const a = document.createElement('a')
  a.href = u; a.download = 'blurred_images.zip'; a.click()
  URL.revokeObjectURL(u)
}
</script>

<style scoped>
.btn { @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white; }
.btn-sm { @apply px-2 py-1 text-xs; }
.btn-xs { @apply px-1 py-0.5 text-[10px] bg-gray-700 hover:bg-gray-800 text-white rounded; }
.btn-primary { @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed; }
.btn-secondary { @apply bg-gray-600 hover:bg-gray-700 text-white; }
.btn-success { @apply bg-green-600 hover:bg-green-700 text-white; }
.icon-btn { @apply p-1 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600; }

.image-container { position: relative; width: 100%; }
</style>