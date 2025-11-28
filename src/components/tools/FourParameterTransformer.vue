<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左列：设置与输入 -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 space-y-6">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ $t('tools.four-parameter-transformer.inputTitle') }}
                </h2>

                <!-- 模型选择 -->
                <section class="space-y-3">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.four-parameter-transformer.modelTitle') }}
                    </h3>
                    <select v-model="modelType" class="form-select w-full">
                        <option value="similarity">{{ $t('tools.four-parameter-transformer.modelOptions.similarity') }}</option>
                        <option value="bursa">{{ $t('tools.four-parameter-transformer.modelOptions.bursa') }}</option>
                        <option value="helmert">{{ $t('tools.four-parameter-transformer.modelOptions.helmert') }}</option>
                        <option value="custom">{{ $t('tools.four-parameter-transformer.modelOptions.custom') }}</option>
                    </select>
                </section>

                <!-- 参数输入 -->
                <section class="space-y-3">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.four-parameter-transformer.parameterTitle') }}
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label class="text-sm text-gray-600 dark:text-gray-300">
                                {{ $t('tools.four-parameter-transformer.parameterFields.dx') }}
                            </label>
                            <input type="number" class="form-input w-full" v-model.number="parameters.dx" />
                        </div>
                        <div>
                            <label class="text-sm text-gray-600 dark:text-gray-300">
                                {{ $t('tools.four-parameter-transformer.parameterFields.dy') }}
                            </label>
                            <input type="number" class="form-input w-full" v-model.number="parameters.dy" />
                        </div>
                        <div>
                            <label class="text-sm text-gray-600 dark:text-gray-300">
                                {{ $t('tools.four-parameter-transformer.parameterFields.rotation') }}
                            </label>
                            <input type="number" class="form-input w-full" v-model.number="parameters.rotation" />
                        </div>
                        <div>
                            <label class="text-sm text-gray-600 dark:text-gray-300">
                                {{ $t('tools.four-parameter-transformer.parameterFields.scale') }}
                            </label>
                            <input type="number" class="form-input w-full" v-model.number="parameters.scale" />
                        </div>
                    </div>
                </section>

                <!-- 单点输入 -->
                <section class="space-y-3">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.four-parameter-transformer.manualTitle') }}
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label class="text-sm">{{ $t('tools.four-parameter-transformer.manualFields.sourceX') }}</label>
                            <input class="form-input w-full" v-model="manualInputs.sourceX" />
                        </div>
                        <div>
                            <label class="text-sm">{{ $t('tools.four-parameter-transformer.manualFields.sourceY') }}</label>
                            <input class="form-input w-full" v-model="manualInputs.sourceY" />
                        </div>
                        <div>
                            <label class="text-sm">{{ $t('tools.four-parameter-transformer.manualFields.targetX') }}</label>
                            <input class="form-input w-full" v-model="manualInputs.targetX" />
                        </div>
                        <div>
                            <label class="text-sm">{{ $t('tools.four-parameter-transformer.manualFields.targetY') }}</label>
                            <input class="form-input w-full" v-model="manualInputs.targetY" />
                        </div>
                        <div class="md:col-span-2">
                            <label class="text-sm">{{ $t('tools.four-parameter-transformer.manualFields.label') }}</label>
                            <input class="form-input w-full" v-model="manualInputs.label" />
                        </div>
                    </div>
                    <button class="btn btn-secondary w-full" @click="appendManualPoint">
                        {{ $t('tools.four-parameter-transformer.appendPoint') }}
                    </button>
                </section>

                <!-- 批量输入 -->
                <section class="space-y-3">
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {{ $t('tools.four-parameter-transformer.delimiterLabel') }}
                    </label>
                    <input class="form-input w-24" maxlength="2" v-model="delimiter" />
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {{ $t('tools.four-parameter-transformer.batchTitle') }}
                    </label>
                    <textarea rows="6" class="form-textarea w-full" v-model="batchText"
                        :placeholder="$t('tools.four-parameter-transformer.batchPlaceholder')"></textarea>
                    <div class="flex gap-3">
                        <button class="btn btn-secondary flex-1" @click="loadSample">
                            {{ $t('tools.four-parameter-transformer.loadSample') }}
                        </button>
                        <button class="btn btn-primary flex-1" @click="batchText = ''">
                            {{ $t('tools.four-parameter-transformer.clearAll') }}
                        </button>
                    </div>
                </section>

                <!-- 文件导入 -->
                <section class="space-y-3">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.four-parameter-transformer.fileTitle') }}
                    </h3>
                    <div class="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer"
                        :class="{ 'border-blue-500 bg-blue-50': isDragging }"
                        @click="fileInput?.click()"
                        @dragover.prevent="isDragging = true"
                        @dragleave.prevent="isDragging = false"
                        @drop.prevent="handleDrop">
                        <input type="file" class="hidden" multiple accept=".csv,.txt" ref="fileInput" @change="handleFileChange" />
                        <p class="text-gray-500">{{ $t('tools.four-parameter-transformer.dragTip') }}</p>
                        <p class="text-xs text-gray-400">{{ $t('tools.four-parameter-transformer.supported') }}</p>
                    </div>
                </section>

                <!-- 解算 -->
                <section class="space-y-3">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.four-parameter-transformer.solverTitle') }}
                    </h3>
                    <textarea rows="4" class="form-textarea w-full" v-model="solverText"
                        :placeholder="$t('tools.four-parameter-transformer.solverPlaceholder')"></textarea>
                    <button class="btn btn-primary w-full" @click="solveParameters">
                        {{ $t('tools.four-parameter-transformer.solveBtn') }}
                    </button>
                </section>
            </div>

            <!-- 右列：结果与可视化 -->
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 space-y-6">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                        {{ $t('tools.four-parameter-transformer.outputTitle') }}
                    </h2>
                    <div class="flex flex-wrap gap-2">
                        <button class="btn btn-primary" @click="convertPoints('forward')">
                            {{ $t('tools.four-parameter-transformer.conversionBtn') }}
                        </button>
                        <button class="btn btn-secondary" @click="convertPoints('inverse')">
                            {{ $t('tools.four-parameter-transformer.inverseBtn') }}
                        </button>
                        <button class="btn btn-secondary" :disabled="!convertedText"
                            @click="exportCsv">
                            {{ $t('tools.four-parameter-transformer.exportBtn') }}
                        </button>
                    </div>
                </div>

                <!-- 进度条 -->
                <section>
                    <label class="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {{ $t('tools.four-parameter-transformer.progressLabel') }}: {{ progress }}%
                    </label>
                    <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded">
                        <div class="h-2 bg-blue-600 rounded" :style="{ width: progress + '%' }"></div>
                    </div>
                </section>

                <!-- 精度统计 -->
                <section class="space-y-3">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.four-parameter-transformer.statsTitle') }}
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div class="stat-card">
                            <p class="stat-label">{{ $t('tools.four-parameter-transformer.statsFields.rmse') }}</p>
                            <p class="stat-value">{{ stats.rmse.toFixed(4) }}</p>
                        </div>
                        <div class="stat-card">
                            <p class="stat-label">{{ $t('tools.four-parameter-transformer.statsFields.meanResidual') }}</p>
                            <p class="stat-value">{{ stats.meanResidual.toFixed(4) }}</p>
                        </div>
                        <div class="stat-card">
                            <p class="stat-label">{{ $t('tools.four-parameter-transformer.statsFields.maxResidual') }}</p>
                            <p class="stat-value">{{ stats.maxResidual.toFixed(4) }}</p>
                        </div>
                        <div class="stat-card">
                            <p class="stat-label">{{ $t('tools.four-parameter-transformer.statsFields.ci95') }}</p>
                            <p class="stat-value">{{ stats.ci95.toFixed(4) }}</p>
                        </div>
                        <div class="stat-card">
                            <p class="stat-label">{{ $t('tools.four-parameter-transformer.statsFields.count') }}</p>
                            <p class="stat-value">{{ stats.count }}</p>
                        </div>
                    </div>
                </section>

                <!-- 精度控制 -->
                <section class="space-y-3">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.four-parameter-transformer.precisionTitle') }}
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label class="text-sm">{{ $t('tools.four-parameter-transformer.precisionFields.decimal') }}</label>
                            <input type="number" min="2" max="8" class="form-input w-full" v-model.number="precision.decimal" />
                        </div>
                        <div>
                            <label class="text-sm">{{ $t('tools.four-parameter-transformer.precisionFields.histogramBins') }}</label>
                            <input type="number" min="4" max="20" class="form-input w-full" v-model.number="precision.histogramBins" />
                        </div>
                    </div>
                </section>

                <!-- 文本输出 -->
                <section>
                    <label class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 block">
                        {{ $t('tools.four-parameter-transformer.outputSummary') }}
                    </label>
                    <textarea rows="8" class="form-textarea w-full" readonly v-model="convertedText"
                        :placeholder="$t('tools.four-parameter-transformer.noOutput')"></textarea>
                </section>

                <!-- 日志 -->
                <section class="space-y-2">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                            {{ $t('tools.four-parameter-transformer.processTitle') }}
                        </h3>
                        <button class="text-sm text-blue-600" @click="toggleProcess">
                            {{ $t('tools.four-parameter-transformer.processToggle') }}
                        </button>
                    </div>
                    <pre v-if="showProcess" class="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-xs overflow-auto max-h-64">{{ processLog }}</pre>
                    <button class="btn btn-secondary w-full" @click="copyProcess">
                        {{ $t('tools.four-parameter-transformer.processCopy') }}
                    </button>
                </section>

                <!-- 可视化图表 -->
                <!-- <section class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {{ $t('tools.four-parameter-transformer.visualizationTitle') }}
                    </h3>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <p class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                                {{ $t('tools.four-parameter-transformer.scatterTitle') }}
                            </p>
                            <canvas ref="scatterCanvas" class="viz-canvas"></canvas>
                        </div>
                        <div>
                            <p class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                                {{ $t('tools.four-parameter-transformer.residualTitle') }}
                            </p>
                            <canvas ref="histogramCanvas" class="viz-canvas"></canvas>
                        </div>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                            {{ $t('tools.four-parameter-transformer.heatTitle') }}
                        </p>
                        <canvas ref="heatCanvas" class="viz-canvas"></canvas>
                    </div>
                </section> -->
            </div>
        </div>

        <FourParameterTransformerArticle class="mt-12" />
    </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FourParameterTransformerArticle from './FourParameterTransformerArticle.vue'

const { t } = useI18n()

const modelType = ref('similarity')
const parameters = reactive({
    dx: 0,
    dy: 0,
    rotation: 0,
    scale: 0
})

const manualInputs = reactive({
    sourceX: '',
    sourceY: '',
    targetX: '',
    targetY: '',
    label: ''
})

const delimiter = ref(',')
const batchText = ref('')
const solverText = ref('')
const processLog = ref('')
const showProcess = ref(true)
const progress = ref(0)

const precision = reactive({
    decimal: 4,
    histogramBins: 8
})

const convertedText = ref('')
const convertedRecords = ref([])
const residualList = ref([])
const stats = reactive({
    rmse: 0,
    meanResidual: 0,
    maxResidual: 0,
    ci95: 0,
    count: 0
})

const scatterCanvas = ref(null)
const histogramCanvas = ref(null)
const heatCanvas = ref(null)

const isDragging = ref(false)
const fileInput = ref(null)
const lastSolvedParams = ref(null)

const hasOutput = computed(() => convertedRecords.value.length > 0)

function appendManualPoint() {
    const fields = [
        manualInputs.sourceX || 0,
        manualInputs.sourceY || 0,
        manualInputs.targetX || '',
        manualInputs.targetY || '',
        manualInputs.label || ''
    ]
    const line = fields.join(delimiter.value || ',')
    batchText.value = batchText.value ? `${batchText.value.trim()}\n${line}` : line
}

function loadSample() {
    batchText.value = [
        '378933.221,3412554.881,378935.102,3412556.412,CP01',
        '378943.114,3412541.552,378945.020,3412543.030,CP02',
        '378960.441,3412529.334,378962.297,3412530.879,CP03',
        '378982.930,3412515.873,378984.781,3412517.318,CP04'
    ].join('\n')
    solverText.value = [
        '378933.221,3412554.881 => 378935.102,3412556.412',
        '378943.114,3412541.552 => 378945.020,3412543.030',
        '378960.441,3412529.334 => 378962.297,3412530.879'
    ].join('\n')
    notify(t('tools.four-parameter-transformer.sampleLoaded'))
}

function handleFileChange(event) {
    const files = Array.from(event.target.files || [])
    files.forEach(file => {
        const reader = new FileReader()
        reader.onload = e => {
            const text = e.target.result
            batchText.value = batchText.value ? `${batchText.value}\n${text}` : text
        }
        reader.readAsText(file, 'utf-8')
    })
    if (fileInput.value) fileInput.value.value = ''
}

function handleDrop(event) {
    isDragging.value = false
    const files = Array.from(event.dataTransfer.files || [])
    files.forEach(file => {
        const reader = new FileReader()
        reader.onload = e => {
            const text = e.target.result
            batchText.value = batchText.value ? `${batchText.value}\n${text}` : text
        }
        reader.readAsText(file, 'utf-8')
    })
}

function parseBatch() {
    const lines = batchText.value
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(Boolean)
    if (!lines.length) return []
    const delim = delimiter.value || ','
    return lines.map((line, idx) => {
        const parts = line.split(delim).map(part => part.trim())
        return {
            sourceX: parseFloat(parts[0]),
            sourceY: parseFloat(parts[1]),
            targetX: parts[2] ? parseFloat(parts[2]) : null,
            targetY: parts[3] ? parseFloat(parts[3]) : null,
            label: parts[4] || `P${idx + 1}`
        }
    }).filter(record => Number.isFinite(record.sourceX) && Number.isFinite(record.sourceY))
}

function convertPoints(direction) {
    processLog.value = ''
    const points = parseBatch()
    if (!points.length) {
        notify(t('tools.four-parameter-transformer.invalidInput'))
        return
    }
    progress.value = 0
    const total = points.length
    const outputs = []
    const residuals = []

    points.forEach((point, idx) => {
        const result = direction === 'inverse'
            ? inverseTransform(point)
            : forwardTransform(point)
        const record = {
            label: point.label,
            sourceX: point.sourceX,
            sourceY: point.sourceY,
            convertedX: result.x,
            convertedY: result.y,
            targetX: point.targetX,
            targetY: point.targetY,
            residual: null
        }

        if (Number.isFinite(point.targetX) && Number.isFinite(point.targetY)) {
            const dx = result.x - point.targetX
            const dy = result.y - point.targetY
            const res = Math.sqrt(dx * dx + dy * dy)
            residuals.push(res)
            record.residual = res
        }

        outputs.push(record)

        progress.value = Math.round(((idx + 1) / total) * 100)
        logProcess('converting', `${point.label}: (${point.sourceX}, ${point.sourceY}) → (${result.x.toFixed(3)}, ${result.y.toFixed(3)})`)
    })

    convertedRecords.value = outputs
    residualList.value = residuals
    convertedText.value = outputs.map(item => [
        item.label,
        item.sourceX.toFixed(precision.decimal),
        item.sourceY.toFixed(precision.decimal),
        item.convertedX.toFixed(precision.decimal),
        item.convertedY.toFixed(precision.decimal)
    ].join(',')).join('\n')

    updateStats(residuals, outputs.length)
    renderVisualizations(outputs, residuals)
    notify(t('tools.four-parameter-transformer.conversionDone'))
}

function forwardTransform(point) {
    const scaleFactor = 1 + (parameters.scale || 0) * 1e-6
    const theta = toRadians(parameters.rotation || 0)
    const cosT = Math.cos(theta)
    const sinT = Math.sin(theta)
    const baseX = point.sourceX
    const baseY = point.sourceY
    const rotatedX = cosT * baseX - sinT * baseY
    const rotatedY = sinT * baseX + cosT * baseY
    return {
        x: parameters.dx + scaleFactor * adjustedX(rotatedX),
        y: parameters.dy + scaleFactor * adjustedY(rotatedY)
    }
}

function inverseTransform(point) {
    const scaleFactor = 1 + (parameters.scale || 0) * 1e-6
    const theta = toRadians(parameters.rotation || 0)
    const cosT = Math.cos(theta)
    const sinT = Math.sin(theta)
    const shiftedX = (point.sourceX - parameters.dx) / scaleFactor
    const shiftedY = (point.sourceY - parameters.dy) / scaleFactor
    const x = cosT * adjustedXInverse(shiftedX) + sinT * adjustedYInverse(shiftedY)
    const y = -sinT * adjustedXInverse(shiftedX) + cosT * adjustedYInverse(shiftedY)
    return { x, y }
}

function adjustedX(value) {
    if (modelType.value === 'helmert') {
        return value * (1 + 1e-8)
    }
    return value
}

function adjustedY(value) {
    if (modelType.value === 'bursa') {
        return value * (1 - 1e-8)
    }
    return value
}

function adjustedXInverse(value) {
    if (modelType.value === 'helmert') {
        return value / (1 + 1e-8)
    }
    return value
}

function adjustedYInverse(value) {
    if (modelType.value === 'bursa') {
        return value / (1 - 1e-8)
    }
    return value
}

function solveParameters() {
    const lines = solverText.value
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(Boolean)
    if (lines.length < 2) {
        notify(t('tools.four-parameter-transformer.solverNeedsPoints'))
        return
    }

    const src = []
    const dst = []
    lines.forEach(line => {
        const [left, right] = line.split('=>').map(part => part.trim())
        if (!right) return
        const [x1, y1] = left.split(/[, \t]+/).map(parseFloat)
        const [x2, y2] = right.split(/[, \t]+/).map(parseFloat)
        if (Number.isFinite(x1) && Number.isFinite(y1) && Number.isFinite(x2) && Number.isFinite(y2)) {
            src.push({ x: x1, y: y1 })
            dst.push({ x: x2, y: y2 })
        }
    })

    if (src.length < 2) {
        notify(t('tools.four-parameter-transformer.solverNeedsPoints'))
        return
    }

    const n = src.length
    const sumSrcSq = src.reduce((acc, p) => acc + p.x * p.x + p.y * p.y, 0)
    const sumXY = src.reduce((acc, p, idx) => {
        const q = dst[idx]
        return {
            dot: acc.dot + p.x * q.x + p.y * q.y,
            cross: acc.cross + p.x * q.y - p.y * q.x
        }
    }, { dot: 0, cross: 0 })
    const a = sumXY.dot / sumSrcSq
    const b = sumXY.cross / sumSrcSq
    const scale = Math.sqrt(a * a + b * b)
    const theta = Math.atan2(b, a)

    const meanSrc = src.reduce((acc, p) => ({ x: acc.x + p.x / n, y: acc.y + p.y / n }), { x: 0, y: 0 })
    const meanDst = dst.reduce((acc, p) => ({ x: acc.x + p.x / n, y: acc.y + p.y / n }), { x: 0, y: 0 })

    const cosT = Math.cos(theta)
    const sinT = Math.sin(theta)
    const dx = meanDst.x - scale * (cosT * meanSrc.x - sinT * meanSrc.y)
    const dy = meanDst.y - scale * (sinT * meanSrc.x + cosT * meanSrc.y)

    parameters.dx = dx
    parameters.dy = dy
    parameters.rotation = theta * 180 / Math.PI
    parameters.scale = (scale - 1) * 1e6

    lastSolvedParams.value = { dx, dy, rotation: parameters.rotation, scale: parameters.scale }
    const residuals = src.map((p, idx) => {
        const transformed = {
            sourceX: p.x,
            sourceY: p.y,
            label: `CP${idx + 1}`,
            targetX: dst[idx].x,
            targetY: dst[idx].y
        }
        const result = forwardTransform(transformed)
        const vx = result.x - dst[idx].x
        const vy = result.y - dst[idx].y
        return Math.sqrt(vx * vx + vy * vy)
    })
    residualList.value = residuals
    updateStats(residuals, src.length)
    renderVisualizations(convertedRecords.value, residuals)
    notify(t('tools.four-parameter-transformer.historyApplied'))
}

function updateStats(residuals, total) {
    if (residuals.length) {
        const sum = residuals.reduce((acc, val) => acc + val, 0)
        const sumSq = residuals.reduce((acc, val) => acc + val * val, 0)
        stats.count = total
        stats.meanResidual = sum / residuals.length
        stats.rmse = Math.sqrt(sumSq / residuals.length)
        stats.maxResidual = Math.max(...residuals)
        stats.ci95 = 1.96 * stats.rmse
    } else {
        stats.count = total
        stats.meanResidual = 0
        stats.rmse = 0
        stats.maxResidual = 0
        stats.ci95 = 0
    }
}

function renderVisualizations(points, residuals) {
    drawScatter(points)
    drawHistogram(residuals)
    drawHeat(points)
}

function drawScatter(points) {
    const canvas = scatterCanvas.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.clientWidth
    canvas.height = 220
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (!points.length) return
    const xs = points.map(p => p.sourceX).filter(Number.isFinite)
    const ys = points.map(p => p.sourceY).filter(Number.isFinite)
    const minX = Math.min(...xs)
    const maxX = Math.max(...xs)
    const minY = Math.min(...ys)
    const maxY = Math.max(...ys)
    const scaleX = canvas.width / (maxX - minX || 1)
    const scaleY = canvas.height / (maxY - minY || 1)

    ctx.fillStyle = '#1d4ed8'
    points.forEach(p => {
        const x = (p.sourceX - minX) * scaleX
        const y = canvas.height - (p.sourceY - minY) * scaleY
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
        if (Number.isFinite(p.targetX) && Number.isFinite(p.targetY)) {
            const tx = (p.targetX - minX) * scaleX
            const ty = canvas.height - (p.targetY - minY) * scaleY
            ctx.strokeStyle = '#f97316'
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(tx, ty)
            ctx.stroke()
            ctx.fillStyle = '#f97316'
            ctx.beginPath()
            ctx.arc(tx, ty, 3, 0, Math.PI * 2)
            ctx.fill()
            ctx.fillStyle = '#1d4ed8'
            if (Number.isFinite(p.residual)) {
                ctx.strokeStyle = 'rgba(248,113,113,0.7)'
                const radius = Math.min(12, 4 + p.residual * 20)
                ctx.beginPath()
                ctx.ellipse(tx, ty, radius, radius * 0.6, 0, 0, Math.PI * 2)
                ctx.stroke()
            }
        }
    })
}

function drawHistogram(residuals) {
    const canvas = histogramCanvas.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.clientWidth
    canvas.height = 220
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (!residuals.length) return
    const bins = Math.max(precision.histogramBins, 4)
    const maxVal = Math.max(...residuals)
    const step = maxVal / bins || 1
    const counts = Array.from({ length: bins }).map((_, idx) => {
        const start = idx * step
        const end = start + step
        return residuals.filter(val => val >= start && val < end).length
    })
    const maxCount = Math.max(...counts) || 1
    const barWidth = canvas.width / bins
    ctx.fillStyle = '#16a34a'
    counts.forEach((count, idx) => {
        const height = (count / maxCount) * canvas.height
        ctx.fillRect(idx * barWidth + 4, canvas.height - height, barWidth - 8, height)
    })
}

function drawHeat(points) {
    const canvas = heatCanvas.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.clientWidth
    canvas.height = 220
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (!points.length) return
    const gridSize = 6
    const xs = points.map(p => p.sourceX).filter(Number.isFinite)
    const ys = points.map(p => p.sourceY).filter(Number.isFinite)
    const minX = Math.min(...xs)
    const maxX = Math.max(...xs)
    const minY = Math.min(...ys)
    const maxY = Math.max(...ys)
    const cellW = canvas.width / gridSize
    const cellH = canvas.height / gridSize
    for (let gx = 0; gx < gridSize; gx++) {
        for (let gy = 0; gy < gridSize; gy++) {
            const cellPoints = points.filter(p => {
                const xRatio = (p.sourceX - minX) / (maxX - minX || 1)
                const yRatio = (p.sourceY - minY) / (maxY - minY || 1)
                return Math.floor(xRatio * gridSize) === gx && Math.floor(yRatio * gridSize) === gy
            })
            const density = cellPoints.length / points.length
            const alpha = Math.min(0.7, density * 3)
            ctx.fillStyle = `rgba(59,130,246,${alpha})`
            ctx.fillRect(gx * cellW, canvas.height - (gy + 1) * cellH, cellW - 2, cellH - 2)
        }
    }
}

function exportCsv() {
    if (!hasOutput.value) return
    const blob = new Blob([convertedText.value], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'four-parameter-transformer.csv'
    a.click()
    URL.revokeObjectURL(url)
}

function toggleProcess() {
    showProcess.value = !showProcess.value
}

function copyProcess() {
    if (!processLog.value) return
    navigator.clipboard?.writeText(processLog.value).then(() => {
        notify(t('tools.four-parameter-transformer.copySuccess'))
    })
}

function logProcess(stage, message) {
    const ts = new Date().toISOString()
    processLog.value += `[${ts}] ${stage}: ${message}\n`
}

function notify(message) {
    logProcess('info', message)
}

function toRadians(value) {
    return value * Math.PI / 180
}
</script>

<style scoped>
.form-input,
.form-select,
.form-textarea {
    @apply border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100;
}

.btn {
    @apply px-4 py-2 rounded font-semibold shadow transition-colors duration-200 flex items-center justify-center;
}

.btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-secondary {
    @apply bg-gray-700 hover:bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed;
}

.stat-card {
    @apply bg-gray-50 dark:bg-gray-800 rounded-lg p-3;
}

.stat-label {
    @apply text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400;
}

.stat-value {
    @apply text-xl font-semibold text-gray-900 dark:text-white;
}

.viz-canvas {
    width: 100%;
    height: 220px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 0.5rem;
    background-color: rgba(248, 250, 252, 0.7);
}
</style>

