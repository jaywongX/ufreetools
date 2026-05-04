<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 左侧：输入区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-2">{{ $t('tools.pdf-encrypt.inputTitle') }}</h2>

        <!-- Step 1：添加文件（拖拽/多选/URL 批量导入/分批次添加）-->
        <section class="space-y-4">
          <!-- 拖拽上传 + 传统文件选择器（多选） -->
          <div
            class="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 cursor-pointer hover:border-blue-500 transition-colors"
            @drop.prevent="handleDrop" @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false"
            @click="fileInput.click()" :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900/20': isDragging }">
            <input type="file" ref="fileInput" class="hidden" accept="application/pdf" multiple @change="handleFiles" />
            <svg class="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span class="text-gray-500">{{ $t('tools.pdf-encrypt.dragTip') }}</span>
            <span class="text-xs text-gray-400 mt-2">{{ $t('tools.pdf-encrypt.supported') }}</span>
          </div>

          <!-- URL 批量导入 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{
              $t('tools.pdf-encrypt.urlBatchLabel')
            }}</label>
            <textarea class="w-full mt-2 border rounded p-2 dark:bg-gray-700 dark:text-white" rows="3"
              :placeholder="$t('tools.pdf-encrypt.urlBatchPlaceholder')" v-model="urlBatch"></textarea>
            <div class="mt-2 flex gap-2">
              <button class="btn btn-secondary" @click="addUrls">
                {{ $t('tools.pdf-encrypt.addUrlsBtn') }}
              </button>
              <button class="btn btn-secondary" @click="clearQueue">
                {{ $t('tools.pdf-encrypt.clearQueueBtn') }}
              </button>
              <button class="btn btn-secondary" @click="loadSample">
                {{ $t('tools.pdf-encrypt.loadSample') }}
              </button>
            </div>
          </div>
        </section>

        <!-- Step 3：密码保护设置 -->
        <section class="mt-6">
          <h3 class="font-medium mb-2">{{ $t('tools.pdf-encrypt.passwordTitle') }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium">{{ $t('tools.pdf-encrypt.userPassword') }}</label>
              <input type="text" class="w-full border rounded p-2 dark:bg-gray-700 dark:text-white"
                v-model="userPassword" @input="checkStrength" :placeholder="$t('tools.pdf-encrypt.userPasswordPh')" />
              <div class="text-xs mt-1" :class="strengthClass">
                {{ $t('tools.pdf-encrypt.passwordStrength') }}: {{ strengthText }}
              </div>
              <input type="text" class="w-full border rounded p-2 mt-2 dark:bg-gray-700 dark:text-white"
                v-model="passwordHint" :placeholder="$t('tools.pdf-encrypt.passwordHintPh')" />
            </div>
            <div>
              <label class="block text-sm font-medium">{{ $t('tools.pdf-encrypt.ownerPassword') }}</label>
              <input type="text" class="w-full border rounded p-2 dark:bg-gray-700 dark:text-white"
                v-model="ownerPassword" :placeholder="$t('tools.pdf-encrypt.ownerPasswordPh')" />
            </div>
          </div>
        </section>

        <!-- Step 4：权限控制 -->
        <section class="mt-6">
          <h3 class="font-medium mb-2">{{ $t('tools.pdf-encrypt.permissionTitle') }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium">{{ $t('tools.pdf-encrypt.printPermission') }}</label>
              <select class="w-full border rounded p-2 dark:bg-gray-700 dark:text-white" v-model="perm.print">
                <option value="none">{{ $t('tools.pdf-encrypt.printNone') }}</option>
                <option value="low">{{ $t('tools.pdf-encrypt.printLow') }}</option>
                <option value="all">{{ $t('tools.pdf-encrypt.printAll') }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium">{{ $t('tools.pdf-encrypt.editPermission') }}</label>
              <select class="w-full border rounded p-2 dark:bg-gray-700 dark:text-white" v-model="perm.edit">
                <option value="none">{{ $t('tools.pdf-encrypt.editNone') }}</option>
                <option value="limited">{{ $t('tools.pdf-encrypt.editLimited') }}</option>
                <option value="all">{{ $t('tools.pdf-encrypt.editAll') }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium">{{ $t('tools.pdf-encrypt.copyPermission') }}</label>
              <select class="w-full border rounded p-2 dark:bg-gray-700 dark:text-white" v-model="perm.copy">
                <option value="none">{{ $t('tools.pdf-encrypt.copyNone') }}</option>
                <option value="allow">{{ $t('tools.pdf-encrypt.copyAllow') }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium">{{ $t('tools.pdf-encrypt.formPermission') }}</label>
              <select class="w-full border rounded p-2 dark:bg-gray-700 dark:text-white" v-model="perm.form">
                <option value="none">{{ $t('tools.pdf-encrypt.formNone') }}</option>
                <option value="allow">{{ $t('tools.pdf-encrypt.formAllow') }}</option>
              </select>
            </div>
          </div>
        </section>

        <!-- Step 5：加密级别 -->
        <section class="mt-6">
          <h3 class="font-medium mb-2">{{ $t('tools.pdf-encrypt.levelTitle') }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium">{{ $t('tools.pdf-encrypt.encryptAlgo') }}</label>
              <select class="w-full border rounded p-2 dark:bg-gray-700 dark:text-white" v-model="algo">
                <!-- <option value="RC4-40">{{ $t('tools.pdf-encrypt.rc4_40') }}</option> -->
                <!-- <option value="AES-128">{{ $t('tools.pdf-encrypt.aes_128') }}</option> -->
                <option value="AES-256">{{ $t('tools.pdf-encrypt.aes_256') }}</option>
                <!-- <option value="CUSTOM">{{ $t('tools.pdf-encrypt.customAlgo') }}</option> -->
              </select>
            </div>
            <div v-if="algo === 'CUSTOM'">
              <input class="w-full border rounded p-2 dark:bg-gray-700 dark:text-white" v-model="customAlgo"
                :placeholder="$t('tools.pdf-encrypt.customAlgoPh')" />
            </div>
          </div>
        </section>

        <!-- Step 6：执行加密 -->
        <section class="mt-6">
          <button class="btn btn-primary w-full" :disabled="!canEncrypt" @click="encryptAll">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3v4H6v-4a3 3 0 016 0z" />
            </svg>
            {{ $t('tools.pdf-encrypt.encryptBtn') }}
          </button>
        </section>
      </div>

      <!-- 右侧：输出与预览对比 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-xl font-bold">{{ $t('tools.pdf-encrypt.outputTitle') }}</h2>
          <button class="btn btn-primary btn-sm" @click="downloadAll" :disabled="encryptedBlobs.length === 0">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {{ $t('tools.pdf-encrypt.batchDownload') }}
          </button>
        </div>

        <!-- 实时预览对比：显示全部已添加的PDF（滚动容器） -->
        <div v-if="files.length" class="space-y-4">
          <h3 class="font-medium">{{ $t('tools.pdf-encrypt.preview') }}</h3>
          <div class="max-h-[600px] overflow-y-auto pr-2">
            <div v-for="(cf, i) in files" :key="i" class="mb-4 border rounded-lg p-3">
              <div class="flex items-center justify-between mb-2">
                <div class="font-semibold truncate">{{ cf.name }}</div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- 原始 PDF 预览 -->
                <div class="border rounded-lg p-3">
                  <div class="font-semibold mb-2">{{ $t('tools.pdf-encrypt.originalPdf') }}</div>
                  <canvas ref="origCanvases" class="w-full h-auto border rounded"></canvas>
                </div>
                <!-- 加密后 PDF 预览 -->
                <div class="border rounded-lg p-3">
                  <!-- 让标题和按钮在同一行，按钮靠右 -->
                  <div class="flex items-center justify-between mb-2">
                    <div class="font-semibold">{{ $t('tools.pdf-encrypt.encryptedPdf') }}</div>
                    <button v-if="encryptedBlobs[i]" class="btn btn-secondary btn-sm" @click="downloadAtIndex(i)">
                      {{ $t('tools.pdf-encrypt.downloadBtn') }}
                    </button>
                  </div>

                  <canvas ref="encCanvases" class="w-full h-auto border rounded"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="mt-4 text-gray-500">{{ $t('tools.pdf-encrypt.noOutput') }}</p>
        </div>
      </div>
    </div>

    <PdfEncryptArticle />
  </div>
    <Toast ref="toastRef" />
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import createQpdfModule from '@neslinesli93/qpdf-wasm'
import PdfEncryptArticle from './PdfEncryptArticle.vue'

import Toast from '../common/Toast.vue'

const toastRef = ref(null)
const { t } = useI18n()

// 文件队列与状态
const files = reactive([])
const currentIndex = ref(0)
const isDragging = ref(false)
const fileInput = ref(null)
const urlBatch = ref('')

// 预览 canvas
const origCanvas = ref(null)
const encCanvas = ref(null)
// 用于“全部预览”的每项 canvas 引用
const origCanvases = ref([])
const encCanvases = ref([])

// 分析数据
const analysis = reactive({
  encryptStatus: '',
  permissions: '',
  integrity: ''
})
const metadata = reactive({
  Title: '',
  Author: '',
  Subject: '',
  Keywords: ''
})

// 密码与权限
const userPassword = ref('')
const ownerPassword = ref('')
const passwordHint = ref('')
const strengthText = ref(t('tools.pdf-encrypt.strengthWeak'))
const strengthClass = ref('text-red-500')
const perm = reactive({
  print: 'all',
  edit: 'all',
  copy: 'allow',
  form: 'allow'
})
const algo = ref('AES-256')
const customAlgo = ref('')

// 加密结果
const encryptedBlobs = reactive([])
let pdfjsLib = null
let QPDF = null // qpdf wasm 实例
let lastQpdfError = ""

const hasFiles = computed(() => files.length > 0)
const hasPrev = computed(() => currentIndex.value > 0)
const hasNext = computed(() => currentIndex.value < files.length - 1)
const currentFile = computed(() => files[currentIndex.value] || null)
const currentEncryptedBlob = computed(() => encryptedBlobs[currentIndex.value] || null)
const currentIndexText = computed(() =>
  hasFiles.value ? `${currentIndex.value + 1}/${files.length}` : t('tools.pdf-encrypt.noFileSelected')
)

const canEncrypt = computed(() => hasFiles.value && userPassword.value && ownerPassword.value)

async function loadQpdfWasm() {
  if (QPDF) return

  try {
    // 手动指定 WASM 文件路径
    QPDF = await createQpdfModule({
      locateFile: (path) => {
        if (path.endsWith('.wasm')) {
          // 确保路径正确
          return 'https://cdn.jsdelivr.net/npm/@neslinesli93/qpdf-wasm@0.3.0/dist/qpdf.wasm'
        }
        return path
      },
      printErr: (text) => {
        console.error("[QPDF stderr]", text)
        lastQpdfError = text
      },
    })
  } catch (error) {
    console.error('Failed to initialize QPDF:', error)
    throw error
  }
}

// Step 0：加载依赖库
onMounted(async () => {
  try {
    // 1. 加载 pdf.js（保持不变）
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

    // 2. ✅ 动态加载并初始化 qpdf.wasm（不再依赖 index.html）
    await loadQpdfWasm()

    // 3. 加载示例
    await loadSample()
  } catch (error) {
    console.error('Failed to load libraries:', error)
    toastRef.value.show(t('tools.pdf-encrypt.libLoadFailed'))
  }
})

// 文件添加
function handleFiles(e) {
  const inputFiles = Array.from(e.target.files || e.dataTransfer.files || [])
  inputFiles.forEach((f) => {
    if (f.type !== 'application/pdf') return
    files.push({ file: f, name: f.name })
    encryptedBlobs.push(null)
  })
  isDragging.value = false
  if (files.length && !currentFile.value) currentIndex.value = 0
  analyzeCurrent()
  nextTick(() => {
    renderAllPreviews()
  })
}

function handleDrop(e) {
  handleFiles(e)
  isDragging.value = false
}

function clearQueue() {
  files.splice(0)
  encryptedBlobs.splice(0)
  currentIndex.value = 0
  resetAnalysis()
  clearCanvas(origCanvas.value)
  clearCanvas(encCanvas.value)
}

function addUrls() {
  const lines = (urlBatch.value || '').split(/\r?\n/).map((s) => s.trim()).filter(Boolean)
  Promise.all(
    lines.map(async (url, i) => {
      const res = await fetch(url)
      if (!res.ok) throw new Error('Fetch failed: ' + url)
      const blob = await res.blob()
      const f = new File([blob], `import_${i + 1}.pdf`, { type: 'application/pdf' })
      files.push({ file: f, name: f.name })
      encryptedBlobs.push(null)
    })
  ).then(() => {
    if (files.length && !currentFile.value) currentIndex.value = 0
    analyzeCurrent()
    nextTick(() => {
      renderAllPreviews()
    })
  }).catch((err) => {
    console.error(err)
    toastRef.value.show(t('tools.pdf-encrypt.urlImportFailed'))
  })
}

// 示例加载
async function loadSample() {
  try {
    const primary = '/sample.pdf'
    const fallback = 'https://www.ufreetools.com/sample.pdf'
    let res
    try {
      res = await fetch(primary)
      if (!res.ok) throw new Error('local sample missing')
    } catch {
      res = await fetch(fallback)
    }
    const blob = await res.blob()
    const f = new File([blob], 'sample.pdf', { type: 'application/pdf' })
    files.push({ file: f, name: f.name })
    encryptedBlobs.push(null)
    currentIndex.value = files.length - 1
    await analyzeCurrent()
    await nextTick()
    await renderAllPreviews()
  } catch (e) {
    console.error('Failed to load sample:', e)
  }
}

// 文件导航
function prevFile() {
  if (hasPrev.value) {
    currentIndex.value -= 1
    analyzeCurrent()
  }
}
function nextFile() {
  if (hasNext.value) {
    currentIndex.value += 1
    analyzeCurrent()
  }
}

// 智能分析
function resetAnalysis() {
  analysis.encryptStatus = ''
  analysis.permissions = ''
  analysis.integrity = ''
  metadata.Title = ''
  metadata.Author = ''
  metadata.Subject = ''
  metadata.Keywords = ''
}

async function analyzeAll() {
  if (!currentFile.value) return
  await analyzeCurrent()
}

async function renderAllPreviews() {
  // 原始侧：渲染所有文件的首页
  for (let i = 0; i < files.length; i++) {
    const cf = files[i]
    try {
      const buf = await cf.file.arrayBuffer()
      const loadingTask = pdfjsLib.getDocument({ data: buf })
      const doc = await loadingTask.promise
      const page = await doc.getPage(1)
      await renderPageToCanvas(page, origCanvases.value[i])
      await doc.destroy()
    } catch (e) {
      console.error('Original preview (all) failed:', e)
      clearCanvas(origCanvases.value[i])
    }
  }
  // 加密侧：如果有对应 blobs，则渲染首页
  for (let i = 0; i < encryptedBlobs.length; i++) {
    const eb = encryptedBlobs[i]
    if (!eb) {
      clearCanvas(encCanvases.value[i])
      continue
    }
    try {
      const buf = await eb.arrayBuffer()
      const task = pdfjsLib.getDocument({ data: buf, password: userPassword.value || "" })
      const doc = await task.promise
      const page = await doc.getPage(1)
      await renderPageToCanvas(page, encCanvases.value[i])
      await doc.destroy()
    } catch (e) {
      console.error('Encrypted preview (all) failed:', e)
      clearCanvas(encCanvases.value[i])
    }
  }
}

async function analyzeCurrent() {
  resetAnalysis()
  const cf = currentFile.value
  if (!cf) return

  try {
    const buf = await cf.file.arrayBuffer()
    const loadingTask = pdfjsLib.getDocument({ data: buf })
    const doc = await loadingTask.promise

    const isEncrypted = doc._pdfInfo?.encrypted || false
    analysis.encryptStatus = isEncrypted
      ? t('tools.pdf-encrypt.encrypted')
      : t('tools.pdf-encrypt.notEncrypted')

    const perms = []
    perms.push(`${t('tools.pdf-encrypt.printPermission')}: ${perm.print}`)
    perms.push(`${t('tools.pdf-encrypt.editPermission')}: ${perm.edit}`)
    perms.push(`${t('tools.pdf-encrypt.copyPermission')}: ${perm.copy}`)
    perms.push(`${t('tools.pdf-encrypt.formPermission')}: ${perm.form}`)
    analysis.permissions = perms.join('\n')

    const info = await doc.getMetadata().catch(() => ({ info: {}, metadata: null }))
    const infoDict = info?.info || {}
    metadata.Title = infoDict.Title || ''
    metadata.Author = infoDict.Author || ''
    metadata.Subject = infoDict.Subject || ''
    metadata.Keywords = infoDict.Keywords || ''

    const page = await doc.getPage(1)
    await renderPageToCanvas(page, origCanvas.value)
    analysis.integrity = t('tools.pdf-encrypt.integrityOk')

    await doc.destroy()
  } catch (err) {
    console.error(err)
    analysis.integrity = t('tools.pdf-encrypt.integrityFailed')
  }

  try {
    const eb = encryptedBlobs[currentIndex.value]
    if (eb) {
      const buf = await eb.arrayBuffer()
      const task = pdfjsLib.getDocument({ data: buf })
      const doc = await task.promise
      const page = await doc.getPage(1)
      await renderPageToCanvas(page, encCanvas.value)
      await doc.destroy()
    } else {
      clearCanvas(encCanvas.value)
    }
  } catch (e) {
    console.error('Encrypted preview failed:', e)
    clearCanvas(encCanvas.value)
  }
}

async function renderPageToCanvas(page, canvasEl) {
  if (!canvasEl) return
  const viewport = page.getViewport({ scale: 1 })
  const ctx = canvasEl.getContext('2d')
  canvasEl.width = viewport.width
  canvasEl.height = viewport.height
  await page.render({ canvasContext: ctx, viewport }).promise
}

function clearCanvas(canvasEl) {
  if (!canvasEl) return
  const ctx = canvasEl.getContext('2d')
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
}

// 密码强度
function checkStrength() {
  const p = userPassword.value || ''
  let score = 0
  if (p.length >= 8) score++
  if (/[A-Z]/.test(p)) score++
  if (/[a-z]/.test(p)) score++
  if (/\d/.test(p)) score++
  if (/[^A-Za-z0-9]/.test(p)) score++
  if (score <= 2) {
    strengthText.value = t('tools.pdf-encrypt.strengthWeak')
    strengthClass.value = 'text-red-500'
  } else if (score === 3 || score === 4) {
    strengthText.value = t('tools.pdf-encrypt.strengthMedium')
    strengthClass.value = 'text-yellow-500'
  } else {
    strengthText.value = t('tools.pdf-encrypt.strengthStrong')
    strengthClass.value = 'text-green-600'
  }
}

// 权限位映射到 qpdf 选项
function buildQpdfRestrictions() {
  const opts = []
  if (perm.print === 'none') opts.push('--disallow-print')
  if (perm.print === 'low') opts.push('--allow-degraded-printing')
  if (perm.print === 'all') opts.push('--allow-print')
  if (perm.copy === 'none') opts.push('--disallow-extract')
  if (perm.copy === 'allow') opts.push('--allow-extract')
  if (perm.form === 'none') opts.push('--disallow-form')
  if (perm.form === 'allow') opts.push('--allow-form')
  if (perm.edit === 'none') opts.push('--disallow-modify')
  if (perm.edit === 'limited') opts.push('--allow-annotate')
  if (perm.edit === 'all') opts.push('--allow-modify')
  return opts
}

// 加密执行
async function encryptAll() {
  if (!QPDF) {
    toastRef.value.show(t('tools.pdf-encrypt.qpdfMissing'))
    return
  }

  let allOk = true

  for (let i = 0; i < files.length; i++) {
    const cf = files[i]
    try {
      const inputBuf = await cf.file.arrayBuffer()
      const inName = `in_${i}.pdf`
      const outName = `out_${i}.pdf`
      QPDF.FS.writeFile(inName, new Uint8Array(inputBuf))

      // 根据算法选择密钥长度
      let keyLen = '256'
      if (algo.value === 'RC4-40') keyLen = '40'
      else if (algo.value === 'AES-128') keyLen = '128'
      else if (algo.value === 'AES-256') keyLen = '256'
      else if (algo.value === 'CUSTOM') {
        const v = parseInt(customAlgo.value, 10)
        if ([40, 128, 256].includes(v)) keyLen = String(v)
      }

      const args = [
        inName,
        '--encrypt',
        userPassword.value,
        ownerPassword.value,
        keyLen,
      ]

      if (perm.print === 'none') args.push('--print=none')
      else if (perm.print === 'low') args.push('--print=low')
      else args.push('--print=full')

      if (perm.edit === 'none') args.push('--modify=none')
      else if (perm.edit === 'limited') args.push('--modify=annotate')
      else args.push('--modify=all')

      if (perm.copy === 'none') args.push('--extract=n')
      else args.push('--extract=y')

      if (perm.form === 'none') args.push('--annotate=n')
      else args.push('--annotate=y')

      args.push('--')
      args.push(outName)

      console.log('QPDF args:', args)  // 调试用
      const rc = QPDF.callMain(args)
      if (rc !== 0) {
        console.error('qpdf failed with code: ' + lastQpdfError)
        throw new Error(lastQpdfError)
      }

      const outData = QPDF.FS.readFile(outName)
      const blob = new Blob([outData], { type: 'application/pdf' })
      encryptedBlobs[i] = blob

      // 清理文件
      QPDF.FS.unlink(inName)
      QPDF.FS.unlink(outName)

      if (i === currentIndex.value) {
        const buf = await blob.arrayBuffer()
        const task = pdfjsLib.getDocument({
          data: buf,
          password: userPassword.value || "",
        })
        const doc = await task.promise
        const page = await doc.getPage(1)
        await renderPageToCanvas(page, encCanvas.value)
        await doc.destroy()
      }
      // 同步更新全部预览的加密侧
      if (encCanvases.value[i]) {
        try {
          const bufAll = await blob.arrayBuffer()
          const taskAll = pdfjsLib.getDocument({
            data: bufAll,
            password: userPassword.value || "",
          })
          const docAll = await taskAll.promise
          const pageAll = await docAll.getPage(1)
          await renderPageToCanvas(pageAll, encCanvases.value[i])
          await docAll.destroy()
        } catch (e2) {
          console.error('Encrypted preview (all) failed:', e2)
          clearCanvas(encCanvases.value[i])
        }
      }
    } catch (e) {
      console.error('Encrypt failed', e)
      allOk = false
      continue;
    }
  }
  toastRef.value.show(allOk ? t('tools.pdf-encrypt.encryptSuccess') : t('tools.pdf-encrypt.encryptFailed'))
}

// 下载当前
function downloadAtIndex(i) {
  const blob = encryptedBlobs[i]
  if (!blob) return
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  const base = (files[i]?.name || `file_${i}.pdf`).replace(/\.pdf$/i, '')
  a.download = base + '_encrypted.pdf'
  a.click()
  URL.revokeObjectURL(a.href)
}


// 批量下载（ZIP）
async function downloadAll() {
  const zip = new JSZip()
  for (let i = 0; i < encryptedBlobs.length; i++) {
    const blob = encryptedBlobs[i]
    if (!blob) continue
    const name = (files[i]?.name || `file_${i}.pdf`).replace(/\.pdf$/i, '') + '_encrypted.pdf'
    zip.file(name, blob)
  }
  const content = await zip.generateAsync({ type: 'blob' })
  const url = URL.createObjectURL(content)
  const a = document.createElement('a')
  a.href = url
  a.download = 'encrypted_pdfs.zip'
  a.click()
  URL.revokeObjectURL(url)
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
</style>