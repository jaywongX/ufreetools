<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 左侧：输入区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-2">{{ $t('tools.pdf-decrypt.inputTitle') }}</h2>

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
            <span class="text-gray-500">{{ $t('tools.pdf-decrypt.dragTip') }}</span>
            <span class="text-xs text-gray-400 mt-2">{{ $t('tools.pdf-decrypt.supported') }}</span>
          </div>

          <!-- URL 批量导入 -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{
              $t('tools.pdf-decrypt.urlBatchLabel')
            }}</label>
            <textarea class="w-full mt-2 border rounded p-2 dark:bg-gray-700 dark:text-white" rows="3"
              :placeholder="$t('tools.pdf-decrypt.urlBatchPlaceholder')" v-model="urlBatch"></textarea>
            <div class="mt-2 flex gap-2">
              <button class="btn btn-secondary" @click="addUrls">
                {{ $t('tools.pdf-decrypt.addUrlsBtn') }}
              </button>
              <button class="btn btn-secondary" @click="clearQueue">
                {{ $t('tools.pdf-decrypt.clearQueueBtn') }}
              </button>
              <button class="btn btn-secondary" @click="loadSample">
                {{ $t('tools.pdf-decrypt.loadSample') }}
              </button>
            </div>
          </div>
        </section>

        <!-- Step 2：解密密码设置 -->
        <section class="mt-6">
          <h3 class="font-medium mb-2">{{ $t('tools.pdf-decrypt.passwordTitle') }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium">{{ $t('tools.pdf-decrypt.openPassword') }}</label>
              <input type="text" class="w-full border rounded p-2 dark:bg-gray-700 dark:text-white"
                v-model="openPassword" :placeholder="$t('tools.pdf-decrypt.openPasswordPh')" />
            </div>
          </div>
        </section>

        <!-- Step 3：执行解密 -->
        <section class="mt-6">
          <button class="btn btn-primary w-full" :disabled="!canDecrypt" @click="decryptAll">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3v4H6v-4a3 3 0 016 0z" />
            </svg>
            {{ $t('tools.pdf-decrypt.decryptBtn') }}
          </button>
        </section>
      </div>

      <!-- 右侧：输出与预览对比 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-xl font-bold">{{ $t('tools.pdf-decrypt.outputTitle') }}</h2>
          <button class="btn btn-primary btn-sm" @click="downloadAll" :disabled="decryptedBlobs.length === 0">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {{ $t('tools.pdf-decrypt.batchDownload') }}
          </button>
        </div>

        <!-- 实时预览对比：显示全部已添加的PDF（滚动容器） -->
        <div v-if="files.length" class="space-y-4">
          <h3 class="font-medium">{{ $t('tools.pdf-decrypt.preview') }}</h3>
          <div class="max-h-[600px] overflow-y-auto pr-2">
            <div v-for="(cf, i) in files" :key="i" class="mb-4 border rounded-lg p-3">
              <div class="flex items-center justify-between mb-2">
                <div class="font-semibold truncate">{{ cf.name }}</div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- 原始 PDF 预览（可能加密） -->
                <!-- <div class="border rounded-lg p-3">
                  <div class="font-semibold mb-2">{{ $t('tools.pdf-decrypt.originalPdf') }}</div>
                  <canvas ref="origCanvases" class="w-full h-auto border rounded"></canvas>
                </div> -->
                <!-- 解密后 PDF 预览 -->
                <div class="border rounded-lg p-3">
                  <div class="flex items-center justify-between mb-2">
                    <div class="font-semibold">{{ $t('tools.pdf-decrypt.decryptedPdf') }}</div>
                    <button v-if="decryptedBlobs[i]" class="btn btn-secondary btn-sm" @click="downloadAtIndex(i)">
                      {{ $t('tools.pdf-decrypt.downloadBtn') }}
                    </button>
                  </div>
                  <canvas ref="decCanvases" class="w-full h-auto border rounded"></canvas>
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
          <p class="mt-4 text-gray-500">{{ $t('tools.pdf-decrypt.noOutput') }}</p>
        </div>
      </div>
    </div>

    <PdfDecryptArticle />
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import createQpdfModule from '@neslinesli93/qpdf-wasm'
import PdfDecryptArticle from './PdfDecryptArticle.vue'

const { t } = useI18n()

// 文件队列与状态
const files = reactive([])
const currentIndex = ref(0)
const isDragging = ref(false)
const fileInput = ref(null)
const urlBatch = ref('')

// 预览 canvas
const origCanvas = ref(null)
const decCanvas = ref(null)
const origCanvases = ref([])
const decCanvases = ref([])

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

// 解密密码
const openPassword = ref('')

// 解密结果
const decryptedBlobs = reactive([])
let pdfjsLib = null
let QPDF = null
let lastQpdfError = ""

const hasFiles = computed(() => files.length > 0)
const currentFile = computed(() => files[currentIndex.value] || null)
const currentDecryptedBlob = computed(() => decryptedBlobs[currentIndex.value] || null)
const currentIndexText = computed(() =>
  hasFiles.value ? `${currentIndex.value + 1}/${files.length}` : t('tools.pdf-decrypt.noFileSelected')
)

const canDecrypt = computed(() => hasFiles.value)

async function loadQpdfWasm() {
  if (QPDF) return
  try {
    QPDF = await createQpdfModule({
      locateFile: (path) => {
        if (path.endsWith('.wasm')) {
          return 'https://cdn.jsdelivr.net/npm/@neslinesli93/qpdf-wasm@0.3.0/dist/qpdf.wasm'
        }
        return path
      },
      printErr: (text) => {
        console.error('[QPDF stderr]', text)
        lastQpdfError = text
      },
    })
  } catch (error) {
    console.error('Failed to initialize QPDF:', error)
    throw error
  }
}

onMounted(async () => {
  try {
    // 加载 pdf.js
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

    // 加载 qpdf.wasm
    await loadQpdfWasm()

    // 加载示例
    await loadSample()
  } catch (error) {
    console.error('Failed to load libraries:', error)
    alert(t('tools.pdf-decrypt.libLoadFailed'))
  }
})

function handleFiles(e) {
  const inputFiles = Array.from(e.target.files || e.dataTransfer.files || [])
  inputFiles.forEach((f) => {
    if (f.type !== 'application/pdf') return
    files.push({ file: f, name: f.name })
    decryptedBlobs.push(null)
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
  decryptedBlobs.splice(0)
  currentIndex.value = 0
  resetAnalysis()
  clearCanvas(origCanvas.value)
  clearCanvas(decCanvas.value)
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
      decryptedBlobs.push(null)
    })
  ).then(() => {
    if (files.length && !currentFile.value) currentIndex.value = 0
    analyzeCurrent()
    nextTick(() => {
      renderAllPreviews()
    })
  }).catch((err) => {
    console.error(err)
    alert(t('tools.pdf-decrypt.urlImportFailed'))
  })
}

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
    decryptedBlobs.push(null)
    currentIndex.value = files.length - 1
    await analyzeCurrent()
    await nextTick()
    await renderAllPreviews()
  } catch (e) {
    console.error('Failed to load sample:', e)
  }
}

function resetAnalysis() {
  analysis.encryptStatus = ''
  analysis.permissions = ''
  analysis.integrity = ''
  metadata.Title = ''
  metadata.Author = ''
  metadata.Subject = ''
  metadata.Keywords = ''
}

async function analyzeCurrent() {
  resetAnalysis()
  const cf = currentFile.value
  if (!cf) return

  try {
    const buf = await cf.file.arrayBuffer()
    const loadingTask = pdfjsLib.getDocument({ data: buf, password: openPassword.value || '' })
    const doc = await loadingTask.promise

    const isEncrypted = doc._pdfInfo?.encrypted || false
    analysis.encryptStatus = isEncrypted
      ? t('tools.pdf-decrypt.encrypted')
      : t('tools.pdf-decrypt.notEncrypted')

    const perms = []
    perms.push(`${t('tools.pdf-decrypt.permissions')}: N/A`)
    analysis.permissions = perms.join('\n')

    const info = await doc.getMetadata().catch(() => ({ info: {}, metadata: null }))
    const infoDict = info?.info || {}
    metadata.Title = infoDict.Title || ''
    metadata.Author = infoDict.Author || ''
    metadata.Subject = infoDict.Subject || ''
    metadata.Keywords = infoDict.Keywords || ''

    const page = await doc.getPage(1)
    await renderPageToCanvas(page, origCanvas.value)
    analysis.integrity = t('tools.pdf-decrypt.integrityOk')

    await doc.destroy()
  } catch (err) {
    console.error(err)
    analysis.integrity = t('tools.pdf-decrypt.integrityFailed')
  }

  try {
    const eb = decryptedBlobs[currentIndex.value]
    if (eb) {
      const buf = await eb.arrayBuffer()
      const task = pdfjsLib.getDocument({ data: buf })
      const doc = await task.promise
      const page = await doc.getPage(1)
      await renderPageToCanvas(page, decCanvas.value)
      await doc.destroy()
    } else {
      clearCanvas(decCanvas.value)
    }
  } catch (e) {
    console.error('Decrypted preview failed:', e)
    clearCanvas(decCanvas.value)
  }
}

async function renderAllPreviews() {
  // 原始侧：渲染所有文件的首页（可能加密）
  for (let i = 0; i < files.length; i++) {
    const cf = files[i]
    try {
      const buf = await cf.file.arrayBuffer()
      const loadingTask = pdfjsLib.getDocument({ data: buf, password: openPassword.value || '' })
      const doc = await loadingTask.promise
      const page = await doc.getPage(1)
      await renderPageToCanvas(page, origCanvases.value[i])
      await doc.destroy()
    } catch (e) {
      console.error('Original preview (all) failed:', e)
      clearCanvas(origCanvases.value[i])
    }
  }
  // 解密侧：如果有对应 blobs，则渲染首页
  for (let i = 0; i < decryptedBlobs.length; i++) {
    const db = decryptedBlobs[i]
    if (!db) {
      clearCanvas(decCanvases.value[i])
      continue
    }
    try {
      const buf = await db.arrayBuffer()
      const task = pdfjsLib.getDocument({ data: buf })
      const doc = await task.promise
      const page = await doc.getPage(1)
      await renderPageToCanvas(page, decCanvases.value[i])
      await doc.destroy()
    } catch (e) {
      console.error('Decrypted preview (all) failed:', e)
      clearCanvas(decCanvases.value[i])
    }
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

// 解密执行
async function decryptAll() {
  if (!QPDF) {
    alert(t('tools.pdf-decrypt.qpdfMissing'))
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

      const args = []
      if (openPassword.value) {
        args.push(`--password=${openPassword.value}`)
      }
      args.push('--decrypt')
      args.push(inName)
      args.push('--')
      args.push(outName)

      console.log('QPDF decrypt args:', args)
      const rc = QPDF.callMain(args)
      if (rc !== 0) {
        console.error('qpdf failed with code: ' + lastQpdfError)
        throw new Error(lastQpdfError)
      }

      const outData = QPDF.FS.readFile(outName)
      const blob = new Blob([outData], { type: 'application/pdf' })
      decryptedBlobs[i] = blob

      QPDF.FS.unlink(inName)
      QPDF.FS.unlink(outName)

      // 更新当前项预览
      if (i === currentIndex.value) {
        try {
          const buf = await blob.arrayBuffer()
          const task = pdfjsLib.getDocument({ data: buf })
          const doc = await task.promise
          const page = await doc.getPage(1)
          await renderPageToCanvas(page, decCanvas.value)
          await doc.destroy()
        } catch (e2) {
          console.error('Decrypted preview failed:', e2)
          clearCanvas(decCanvas.value)
        }
      }
      // 同步更新全部预览的解密侧
      if (decCanvases.value[i]) {
        try {
          const bufAll = await blob.arrayBuffer()
          const taskAll = pdfjsLib.getDocument({ data: bufAll })
          const docAll = await taskAll.promise
          const pageAll = await docAll.getPage(1)
          await renderPageToCanvas(pageAll, decCanvases.value[i])
          await docAll.destroy()
        } catch (e3) {
          console.error('Decrypted preview (all) failed:', e3)
          clearCanvas(decCanvases.value[i])
        }
      }
    } catch (e) {
      console.error('Decrypt failed', e)
      allOk = false
      continue
    }
  }
  alert(allOk ? t('tools.pdf-decrypt.decryptSuccess') : t('tools.pdf-decrypt.decryptFailed'))
}

function downloadAtIndex(i) {
  const blob = decryptedBlobs[i]
  if (!blob) return
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  const base = (files[i]?.name || `file_${i}.pdf`).replace(/\.pdf$/i, '')
  a.download = base + '_decrypted.pdf'
  a.click()
  URL.revokeObjectURL(a.href)
}

async function downloadAll() {
  const zip = new JSZip()
  for (let i = 0; i < decryptedBlobs.length; i++) {
    const blob = decryptedBlobs[i]
    if (!blob) continue
    const name = (files[i]?.name || `file_${i}.pdf`).replace(/\.pdf$/i, '') + '_decrypted.pdf'
    zip.file(name, blob)
  }
  const content = await zip.generateAsync({ type: 'blob' })
  const url = URL.createObjectURL(content)
  const a = document.createElement('a')
  a.href = url
  a.download = 'decrypted_pdfs.zip'
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