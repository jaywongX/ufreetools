<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Left: Input and Controls -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold mb-4">{{ $t('tools.bionic-reading-converter.inputTitle') }}</h2>

        <!-- Text Input -->
        <textarea class="w-full h-48 border rounded p-3 dark:bg-gray-900 dark:text-gray-100"
          :placeholder="$t('tools.bionic-reading-converter.placeholder')" v-model="inputText"></textarea>

        <!-- Controls -->
        <div class="mt-4 space-y-4">
          <!-- Fixation -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.bionic-reading-converter.fixation') }}: {{ fixation }}%
            </label>
            <input type="range" min="5" max="80" step="1" v-model.number="fixation" class="w-full" />
          </div>

          <!-- Contrast -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.bionic-reading-converter.contrast') }}: {{ contrast }}%
            </label>
            <input type="range" min="0" max="90" step="1" v-model.number="contrast" class="w-full" />
          </div>

          <!-- Font Family -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.bionic-reading-converter.fontFamily') }}
            </label>
            <select v-model="fontFamily" class="w-full border rounded p-2 dark:bg-gray-900 dark:text-gray-100">
              <option v-for="f in fonts" :key="f.value" :value="f.value">{{ f.label }}</option>
            </select>
            <input v-if="fontFamily === '__custom__'" v-model="customFontFamily"
              class="w-full border rounded p-2 mt-2 dark:bg-gray-900 dark:text-gray-100"
              placeholder="e.g., 'LXGW WenKai', 'Noto Sans SC', system-ui, sans-serif" />
          </div>

          <!-- Font Size -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ $t('tools.bionic-reading-converter.fontSize') }}: {{ fontSize }}px
            </label>
            <input type="range" min="12" max="36" step="1" v-model.number="fontSize" class="w-full" />
          </div>
        </div>

        <!-- Import -->
        <div class="mt-6">
          <h3 class="font-semibold mb-2">{{ $t('tools.bionic-reading-converter.importTitle') }}</h3>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-secondary" @click="markdownInput.click()">
              {{ $t('tools.bionic-reading-converter.importMarkdown') }}
            </button>
            <button class="btn btn-secondary" @click="pdfInput.click()">
              {{ $t('tools.bionic-reading-converter.importPDF') }}
            </button>
            <button class="btn btn-secondary" @click="epubInput.click()">
              {{ $t('tools.bionic-reading-converter.importEPUB') }}
            </button>
            <button class="btn" @click="loadSample">
              {{ $t('tools.bionic-reading-converter.loadSample') }}
            </button>
            <button class="btn btn-danger" @click="clearAll">
              {{ $t('tools.bionic-reading-converter.clear') }}
            </button>
          </div>
          <input ref="markdownInput" type="file" accept=".md,text/markdown,text/plain" class="hidden"
            @change="handleMarkdown" />
          <input ref="pdfInput" type="file" accept="application/pdf,.pdf" class="hidden" @change="handlePDF" />
          <input ref="epubInput" type="file" accept="application/epub+zip,.epub" class="hidden" @change="handleEPUB" />
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {{ $t('tools.bionic-reading-converter.sampleHint') }}
          </p>
        </div>
      </div>

      <!-- Right: Output and Export -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex flex-wrap items-center justify-between mb-3 gap-2">
          <h2 class="text-xl font-bold">{{ $t('tools.bionic-reading-converter.outputTitle') }}</h2>
          <!-- <div class="flex gap-2">
            <button class="btn btn-primary btn-sm" :class="!manualMode ? 'opacity-100' : 'opacity-60'"
              @click="manualMode = false">
              {{ $t('tools.bionic-reading-converter.autoMode') }}
            </button>
            <button class="btn btn-primary btn-sm" :class="manualMode ? 'opacity-100' : 'opacity-60'"
              @click="switchToManual">
              {{ $t('tools.bionic-reading-converter.manualMode') }}
            </button>
            <button v-if="manualMode" class="btn btn-secondary btn-sm" @click="syncFromAuto">
              {{ $t('tools.bionic-reading-converter.syncFromAuto') }}
            </button>
          </div> -->
        </div>

        <!-- Auto Preview -->
        <div v-if="!manualMode" ref="autoPreviewRef"
          class="bionic-output border rounded p-4 min-h-[240px] dark:bg-gray-900 dark:text-gray-100"
          :style="previewStyle" v-html="autoHtml"></div>

        <!-- Manual Edit -->
        <div v-else ref="manualPreviewRef"
          class="bionic-output border rounded p-4 min-h-[240px] dark:bg-gray-900 dark:text-gray-100"
          :style="previewStyle" contenteditable="true" @compositionstart="isComposing = true"
          @compositionend="onCompositionEnd" @input="onManualInput" v-html="manualHtml"></div>

        <!-- Copy -->
        <div class="mt-6">
          <h3 class="font-semibold mb-2">{{ $t('tools.bionic-reading-converter.copyTitle') }}</h3>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-secondary btn-sm" @click="copyPNG">
              {{ $t('tools.bionic-reading-converter.copyPNG') }}
            </button>
            <button class="btn btn-secondary btn-sm" @click="copyHTML">
              {{ $t('tools.bionic-reading-converter.copyHTML') }}
            </button>
            <button class="btn btn-secondary btn-sm" @click="copyMarkdown">
              {{ $t('tools.bionic-reading-converter.copyMarkdown') }}
            </button>
          </div>
        </div>

        <!-- Export -->
        <div class="mt-6">
          <h3 class="font-semibold mb-2">{{ $t('tools.bionic-reading-converter.exportTitle') }}</h3>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-success btn-sm" @click="exportMarkdown">
              {{ $t('tools.bionic-reading-converter.exportMarkdown') }}
            </button>
            <button class="btn btn-success btn-sm" @click="exportHTML">
              {{ $t('tools.bionic-reading-converter.exportHTML') }}
            </button>
            <button class="btn btn-success btn-sm" @click="exportWord">
              {{ $t('tools.bionic-reading-converter.exportWord') }}
            </button>
            <button class="btn btn-success btn-sm" @click="exportPNG">
              {{ $t('tools.bionic-reading-converter.exportPNG') }}
            </button>
            <button class="btn btn-success btn-sm" @click="exportJPG">
              {{ $t('tools.bionic-reading-converter.exportJPG') }}
            </button>
            <button class="btn btn-success btn-sm" @click="exportPDF">
              {{ $t('tools.bionic-reading-converter.exportPDF') }}
            </button>
            <button class="btn btn-success btn-sm" @click="exportEPUB">
              {{ $t('tools.bionic-reading-converter.exportEPUB') }}
            </button>
          </div>
        </div>

        <div v-if="isProcessing" class="mt-4 text-sm text-gray-500 flex items-center gap-2">
          <svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
          {{ $t('tools.bionic-reading-converter.processing') }}
        </div>
      </div>
    </div>

    <BionicReadingConverterArticle />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import JSZip from 'jszip'
import BionicReadingConverterArticle from './BionicReadingConverterArticle.vue'

const { t } = useI18n()

// Inputs and controls
const inputText = ref('')
const fixation = ref(35) // %
const contrast = ref(50) // %
const fontFamily = ref('system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Helvetica, Arial, sans-serif')
const fontSize = ref(18)
const manualMode = ref(false)
const manualHtml = ref('')

const markdownInput = ref(null)
const pdfInput = ref(null)
const epubInput = ref(null)
const autoPreviewRef = ref(null)
const manualPreviewRef = ref(null)
const isProcessing = ref(false)
const customFontFamily = ref('')
const isComposing = ref(false)


const fonts = [
  // General Latin
  { label: 'System UI', value: 'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Helvetica, Arial, sans-serif' },
  { label: 'Arial', value: 'Arial, Helvetica, sans-serif' },
  { label: 'Times New Roman', value: '"Times New Roman", Times, serif' },
  { label: 'Georgia', value: 'Georgia, serif' },
  { label: 'Roboto', value: 'Roboto, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif' },

  // Chinese Simplified
  { label: 'Noto Sans SC', value: '"Noto Sans SC", "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", Arial, Helvetica, sans-serif' },
  { label: 'Source Han Sans SC', value: '"Source Han Sans SC", "Noto Sans SC", "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif' },
  { label: 'Noto Serif SC', value: '"Noto Serif SC", "Source Han Serif SC", "SimSun", "Songti SC", serif' },
  { label: 'PingFang SC', value: '"PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Noto Sans SC", sans-serif' },
  { label: 'Microsoft YaHei', value: '"Microsoft YaHei", "Segoe UI", Arial, Helvetica, sans-serif' },
  { label: 'SimSun', value: 'SimSun, "Songti SC", serif' },

  // Japanese
  { label: 'Yu Gothic / Meiryo', value: '"Yu Gothic UI", "Yu Gothic", "Hiragino Kaku Gothic ProN", Meiryo, "Noto Sans JP", "Source Han Sans JP", sans-serif' },
  { label: 'Noto Serif JP', value: '"Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", serif' },

  // Korean
  { label: 'Nanum / Malgun / Noto Sans KR', value: '"Apple SD Gothic Neo", "Malgun Gothic", "Nanum Gothic", "Noto Sans KR", "Source Han Sans KR", sans-serif' },
  { label: 'Noto Serif KR', value: '"Noto Serif KR", "Batang", "Nanum Myeongjo", serif' },

  // Monospace
  { label: 'Monospace (Code)', value: '"Cascadia Code", "Fira Code", "JetBrains Mono", Menlo, Consolas, "Liberation Mono", monospace' },

  // Custom
  { label: 'Custom (CSS font-family)', value: '__custom__' }
]

// Style for preview
const previewStyle = computed(() => {
  const restOpacity = Math.max(0, Math.min(1, 1 - contrast.value / 100))
  const ff = fontFamily.value === '__custom__'
    ? (customFontFamily.value || 'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Helvetica, Arial, sans-serif')
    : fontFamily.value
  return {
    fontFamily: ff,
    fontSize: `${fontSize.value}px`,
    lineHeight: '1.7',
    '--rest-opacity': restOpacity
  }
})

// Auto HTML
const autoHtml = computed(() => {
  return textToBionicHtml(inputText.value, fixation.value)
})

// Switch modes
function switchToManual() {
  if (!manualMode.value) {
    manualHtml.value = autoHtml.value
  }
  manualMode.value = true
}
function syncFromAuto() {
  manualHtml.value = autoHtml.value
}
function onManualInput(e) {
  if (isComposing.value) return
  manualHtml.value = e.currentTarget.innerHTML
}
function onCompositionEnd(e) {
  isComposing.value = false
  manualHtml.value = e.currentTarget.innerHTML
}

// Utilities
function escapeHtml(s) {
  return s
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#39;')
}

// Bionic transform: bold first X% chars of words, preserve punctuation/whitespace
function textToBionicHtml(text, fixationPercent) {
  if (!text) return ''
  const escaped = escapeHtml(text)
  const wordRegex = /([A-Za-zÀ-ÖØ-öø-ÿ\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]+)/g
  const html = escaped.replace(wordRegex, (m) => {
    const len = m.length
    const boldLen = Math.max(1, Math.min(len, Math.ceil((len * fixationPercent) / 100)))
    const first = m.slice(0, boldLen)
    const rest = m.slice(boldLen)
    return `<span class="bionic-word"><strong>${first}</strong><span class="rest">${rest}</span></span>`
  })
  return html.replace(/\n/g, '<br>')
}

// Importers
function loadSample() {
  inputText.value = t('tools.bionic-reading-converter.sampleText')
}

function clearAll() {
  inputText.value = ''
  manualHtml.value = ''
  manualMode.value = false
}

async function handleMarkdown(e) {
  const file = e.target.files?.[0]
  if (!file) return
  const text = await file.text()
  inputText.value = text
  e.target.value = ''
}

async function handlePDF(e) {
  const file = e.target.files?.[0]
  if (!file) return
  try {
    isProcessing.value = true
    const buf = await file.arrayBuffer()
    await ensurePdfJs()
    const pdf = await window.pdfjsLib.getDocument({ data: buf }).promise
    let out = ''
    const maxPages = Math.min(pdf.numPages, 50)
    for (let i = 1; i <= maxPages; i++) {
      const page = await pdf.getPage(i)
      const content = await page.getTextContent()
      const strings = content.items.map((it) => it.str)
      out += strings.join(' ') + '\n\n'
    }
    inputText.value = out.trim()
  } catch (err) {
    console.error(err)
    alert(t('tools.bionic-reading-converter.errorPDF'))
  } finally {
    isProcessing.value = false
    e.target.value = ''
  }
}

async function handleEPUB(e) {
  const file = e.target.files?.[0]
  if (!file) return
  try {
    isProcessing.value = true
    const buf = await file.arrayBuffer()
    const zip = await JSZip.loadAsync(buf)
    // Concatenate xhtml/html content
    const files = Object.keys(zip.files).filter((p) => /\.x?html$/i.test(p))
    let out = ''
    for (const p of files) {
      const xml = await zip.file(p).async('text')
      out += extractTextFromXhtml(xml) + '\n\n'
    }
    inputText.value = out.trim() || inputText.value
  } catch (err) {
    console.error(err)
    alert(t('tools.bionic-reading-converter.errorEPUB'))
  } finally {
    isProcessing.value = false
    e.target.value = ''
  }
}

function extractTextFromXhtml(xml) {
  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(xml, 'application/xhtml+xml')
    return (doc.body?.textContent || '').replace(/\s+\n/g, '\n').trim()
  } catch {
    return ''
  }
}

// Exports and copy
function currentHtml() {
  return manualMode.value ? manualHtml.value : autoHtml.value
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function htmlShell(bodyHtml) {
  const restOpacity = Math.max(0, Math.min(1, 1 - contrast.value / 100))
  return `<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t('tools.bionic-reading-converter.name')}</title>
<style>
  body { font-family: ${fontFamily.value}; font-size: ${fontSize.value}px; line-height: 1.7; padding: 24px; }
  .bionic-word .rest { opacity: ${restOpacity}; }
  strong { font-weight: 700; }
</style>
</head>
<body>
<div class="bionic-output">${bodyHtml}</div>
</body>
</html>`
}

function nodeToMarkdown(node) {
  let out = ''
  if (node.nodeType === 3) {
    return node.nodeValue || ''
  }
  if (node.nodeType !== 1) return out
  const el = node
  const tag = el.tagName?.toLowerCase() || ''
  if (tag === 'strong' || (tag === 'b')) {
    let inner = ''
    for (const child of Array.from(el.childNodes)) inner += nodeToMarkdown(child)
    return `**${inner}**`
  }
  if (tag === 'br') return '\n'
  if (['p', 'div', 'section', 'article'].includes(tag)) {
    let inner = ''
    for (const child of Array.from(el.childNodes)) inner += nodeToMarkdown(child)
    return inner + '\n\n'
  }
  let inner = ''
  for (const child of Array.from(el.childNodes)) inner += nodeToMarkdown(child)
  return inner
}

function htmlToMarkdown(html) {
  const tmp = document.createElement('div')
  tmp.innerHTML = html
  let md = ''
  for (const child of Array.from(tmp.childNodes)) md += nodeToMarkdown(child)
  // Normalize whitespace
  md = md.replace(/\n{3,}/g, '\n\n').trim()
  return md
}

function exportMarkdown() {
  const html = currentHtml()
  const md = htmlToMarkdown(html)
  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' })
  downloadBlob(blob, 'bionic-reading.md')
}

function exportHTML() {
  const html = currentHtml()
  const full = htmlShell(html)
  const blob = new Blob([full], { type: 'text/html;charset=utf-8' })
  downloadBlob(blob, 'bionic-reading.html')
}

function exportWord() {
  const html = currentHtml()
  const docHtml = htmlShell(html)
  const blob = new Blob([docHtml], { type: 'application/msword' })
  downloadBlob(blob, 'bionic-reading.doc')
}

async function ensureHtml2Canvas() {
  if (window.html2canvas) return window.html2canvas
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js')
  return window.html2canvas
}

async function exportPNG() {
  const html2canvas = await ensureHtml2Canvas()
  const el = manualMode.value ? manualPreviewRef.value : autoPreviewRef.value
  const canvas = await html2canvas(el, { backgroundColor: '#ffffff', scale: 2 })
  canvas.toBlob((blob) => blob && downloadBlob(blob, 'bionic-reading.png'), 'image/png')
}

async function exportJPG() {
  const html2canvas = await ensureHtml2Canvas()
  const el = manualMode.value ? manualPreviewRef.value : autoPreviewRef.value
  const canvas = await html2canvas(el, { backgroundColor: '#ffffff', scale: 2 })
  canvas.toBlob((blob) => blob && downloadBlob(blob, 'bionic-reading.jpg'), 'image/jpeg', 0.92)
}

async function ensureJsPdf() {
  if (window.jspdf?.jsPDF) return window.jspdf.jsPDF
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js')
  return window.jspdf.jsPDF
}

async function exportPDF() {
  try {
    isProcessing.value = true
    const html2canvas = await ensureHtml2Canvas()
    const jsPDF = await ensureJsPdf()
    const el = manualMode.value ? manualPreviewRef.value : autoPreviewRef.value
    const canvas = await html2canvas(el, { backgroundColor: '#ffffff', scale: 2 })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({ unit: 'pt', format: 'a4' })
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const imgWidth = pageWidth - 80
    const ratio = canvas.height / canvas.width
    const imgHeight = Math.min(imgWidth * ratio, pageHeight - 80)
    pdf.addImage(imgData, 'PNG', 40, 40, imgWidth, imgHeight)
    pdf.save('bionic-reading.pdf')
  } finally {
    isProcessing.value = false
  }
}

async function exportEPUB() {
  try {
    isProcessing.value = true
    const zip = new JSZip()
    // Required files
    zip.file('mimetype', 'application/epub+zip', { compression: 'STORE' })
    zip.file(
      'META-INF/container.xml',
      `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`
    )
    const body = currentHtml()
    const xhtml = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh" lang="zh">
<head>
  <title>${t('tools.bionic-reading-converter.name')}</title>
  <meta charset="utf-8"/>
  <style>
    body { font-family: ${fontFamily.value}; font-size: ${fontSize.value}px; line-height:1.7; }
    .bionic-word .rest { opacity: ${Math.max(0, Math.min(1, 1 - contrast.value / 100))}; }
    strong { font-weight:700; }
  </style>
</head>
<body>
  <div>${body}</div>
</body>
</html>`
    zip.file('OEBPS/index.xhtml', xhtml)
    const now = new Date().toISOString()
    zip.file(
      'OEBPS/content.opf',
      `<?xml version="1.0" encoding="utf-8"?>
<package version="3.0" unique-identifier="pub-id" xmlns="http://www.idpf.org/2007/opf">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="pub-id">urn:uuid:${cryptoRandom()}</dc:identifier>
    <dc:title>${t('tools.bionic-reading-converter.name')}</dc:title>
    <dc:language>zh</dc:language>
    <dc:date>${now}</dc:date>
  </metadata>
  <manifest>
    <item id="index" href="index.xhtml" media-type="application/xhtml+xml"/>
  </manifest>
  <spine>
    <itemref idref="index"/>
  </spine>
</package>`
    )
    const blob = await zip.generateAsync({ type: 'blob' })
    downloadBlob(blob, 'bionic-reading.epub')
  } finally {
    isProcessing.value = false
  }
}

function cryptoRandom() {
  try {
    const arr = new Uint8Array(16)
    crypto.getRandomValues(arr)
    return Array.from(arr)
      .map((b, i) => (i === 6 ? (b & 0x0f) | 0x40 : i === 8 ? (b & 0x3f) | 0x80 : b).toString(16).padStart(2, '0'))
      .join('')
  } catch {
    return String(Math.random()).slice(2)
  }
}

async function copyPNG() {
  const html2canvas = await ensureHtml2Canvas()
  const el = manualMode.value ? manualPreviewRef.value : autoPreviewRef.value
  const canvas = await html2canvas(el, { backgroundColor: '#ffffff', scale: 2 })
  return new Promise((resolve) => {
    canvas.toBlob(async (blob) => {
      if (!blob) return resolve()
      try {
        await navigator.clipboard.write([new window.ClipboardItem({ 'image/png': blob })])
        alert(t('tools.bionic-reading-converter.copied'))
      } catch (e) {
        console.error(e)
      }
      resolve()
    }, 'image/png')
  })
}

function copyHTML() {
  const html = currentHtml()
  navigator.clipboard.writeText(html).then(() => alert(t('tools.bionic-reading-converter.copied')))
}

function copyMarkdown() {
  const md = htmlToMarkdown(currentHtml())
  navigator.clipboard.writeText(md).then(() => alert(t('tools.bionic-reading-converter.copied')))
}

// External scripts loader
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onload = () => resolve()
    s.onerror = reject
    document.head.appendChild(s)
  })
}

async function ensurePdfJs() {
  if (window.pdfjsLib) return
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js')
  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
}
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100;
}

.btn-sm {
  @apply px-3 py-1 text-sm;
}

.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white;
}

.btn-secondary {
  @apply bg-gray-600 hover:bg-gray-700 text-white;
}

.btn-success {
  @apply bg-green-600 hover:bg-green-700 text-white;
}

.btn-danger {
  @apply bg-red-600 hover:bg-red-700 text-white;
}

/* Ensure styles apply to content inserted by v-html */
.bionic-output :deep(.rest) {
  opacity: var(--rest-opacity, 0.5);
}

.bionic-output :deep(strong) {
  font-weight: 700;
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .btn {
    @apply px-3 py-1.5 text-sm;
  }

  .btn-sm {
    @apply px-2 py-1 text-xs;
  }
}
</style>