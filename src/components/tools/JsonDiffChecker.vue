<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 左侧：输入区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4">{{ $t('tools.json-diff-checker.inputTitle') }}</h2>

                <!-- 第一个JSON输入 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.json-diff-checker.originalJson') }}</label>
                    <div class="relative">
                        <textarea
                            v-model="originalJson"
                            class="w-full h-64 p-3 border rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            :placeholder="$t('tools.json-diff-checker.originalPlaceholder')"
                        ></textarea>
                        <div class="absolute top-2 right-2 flex space-x-2">
                            <button
                                @click="loadSampleJson('original')"
                                class="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                {{ $t('tools.json-diff-checker.loadSample') }}
                            </button>
                            <button
                                @click="clearJson('original')"
                                class="px-3 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600"
                            >
                                {{ $t('tools.json-diff-checker.clear') }}
                            </button>
                        </div>
                    </div>
                    <div class="mt-2 flex items-center justify-between text-sm">
                        <span :class="originalJsonStatus.class">{{ originalJsonStatus.text }}</span>
                        <span class="text-gray-500">{{ originalJsonLines }} {{ $t('tools.json-diff-checker.lines') }}</span>
                    </div>
                </div>

                <!-- 第二个JSON输入 -->
                <div class="mb-6">
                    <label class="block text-sm font-medium mb-2">{{ $t('tools.json-diff-checker.modifiedJson') }}</label>
                    <div class="relative">
                        <textarea
                            v-model="modifiedJson"
                            class="w-full h-64 p-3 border rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            :placeholder="$t('tools.json-diff-checker.modifiedPlaceholder')"
                        ></textarea>
                        <div class="absolute top-2 right-2 flex space-x-2">
                            <button
                                @click="loadSampleJson('modified')"
                                class="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                {{ $t('tools.json-diff-checker.loadSample') }}
                            </button>
                            <button
                                @click="clearJson('modified')"
                                class="px-3 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600"
                            >
                                {{ $t('tools.json-diff-checker.clear') }}
                            </button>
                        </div>
                    </div>
                    <div class="mt-2 flex items-center justify-between text-sm">
                        <span :class="modifiedJsonStatus.class">{{ modifiedJsonStatus.text }}</span>
                        <span class="text-gray-500">{{ modifiedJsonLines }} {{ $t('tools.json-diff-checker.lines') }}</span>
                    </div>
                </div>

                <!-- 比较选项 -->
                <div class="mb-6">
                    <h3 class="text-lg font-medium mb-3">{{ $t('tools.json-diff-checker.compareOptions') }}</h3>
                    <div class="space-y-3">
                        <label class="flex items-center">
                            <input type="checkbox" v-model="options.ignoreOrder" class="form-checkbox">
                            <span class="ml-2">{{ $t('tools.json-diff-checker.ignoreOrder') }}</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" v-model="options.ignoreCase" class="form-checkbox">
                            <span class="ml-2">{{ $t('tools.json-diff-checker.ignoreCase') }}</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" v-model="options.ignoreWhitespace" class="form-checkbox">
                            <span class="ml-2">{{ $t('tools.json-diff-checker.ignoreWhitespace') }}</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" v-model="options.showOnlyDifferences" class="form-checkbox">
                            <span class="ml-2">{{ $t('tools.json-diff-checker.showOnlyDifferences') }}</span>
                        </label>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="flex space-x-3">
                    <button
                        @click="compareJson"
                        class="btn btn-primary flex-1"
                        :disabled="!canCompare"
                    >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        {{ $t('tools.json-diff-checker.compare') }}
                    </button>
                    <button
                        @click="formatJson"
                        class="btn btn-secondary"
                        :disabled="!originalJson && !modifiedJson"
                    >
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        {{ $t('tools.json-diff-checker.format') }}
                    </button>
                </div>
            </div>

            <!-- 右侧：输出区域 -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">{{ $t('tools.json-diff-checker.outputTitle') }}</h2>
                    <div v-if="diffResult" class="flex space-x-2">
                        <button
                            @click="exportDiff"
                            class="btn btn-sm btn-secondary"
                        >
                            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {{ $t('tools.json-diff-checker.export') }}
                        </button>
                    </div>
                </div>

                <!-- 比较结果统计 -->
                <div v-if="diffResult" class="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 class="font-medium mb-3">{{ $t('tools.json-diff-checker.diffSummary') }}</h3>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span>{{ $t('tools.json-diff-checker.added') }}: {{ diffStats.added }}</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <span>{{ $t('tools.json-diff-checker.removed') }}: {{ diffStats.removed }}</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                            <span>{{ $t('tools.json-diff-checker.modified') }}: {{ diffStats.modified }}</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                            <span>{{ $t('tools.json-diff-checker.unchanged') }}: {{ diffStats.unchanged }}</span>
                        </div>
                    </div>
                </div>

                <!-- 差异显示 -->
                <div v-if="diffResult" class="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
                    <div class="border rounded-lg overflow-hidden">
                        <div class="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-b">
                            <h4 class="font-medium">{{ $t('tools.json-diff-checker.differences') }}</h4>
                        </div>
                        <div class="diff-container font-mono text-sm">
                            <div v-html="diffResult" class="p-4"></div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <p class="text-gray-500">{{ $t('tools.json-diff-checker.noComparison') }}</p>
                </div>
            </div>
        </div>

        <JsonDiffCheckerArticle />
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import JsonDiffCheckerArticle from './JsonDiffCheckerArticle.vue'

const { t } = useI18n()

// 响应式数据
const originalJson = ref('')
const modifiedJson = ref('')
const diffResult = ref('')
const diffStats = ref({
    added: 0,
    removed: 0,
    modified: 0,
    unchanged: 0
})

// 比较选项
const options = ref({
    ignoreOrder: false,
    ignoreCase: false,
    ignoreWhitespace: false,
    showOnlyDifferences: false
})

// 示例JSON数据
const sampleJsons = {
    original: {
        "name": "John Doe",
        "age": 30,
        "city": "New York",
        "hobbies": ["reading", "swimming"],
        "address": {
            "street": "123 Main St",
            "zipcode": "10001"
        }
    },
    modified: {
        "name": "John Doe",
        "age": 31,
        "city": "Los Angeles",
        "hobbies": ["reading", "cycling", "photography"],
        "address": {
            "street": "456 Oak Ave",
            "zipcode": "90210"
        },
        "email": "john@example.com"
    }
}

// 计算属性
const originalJsonLines = computed(() => originalJson.value.split('\n').length)
const modifiedJsonLines = computed(() => modifiedJson.value.split('\n').length)

const originalJsonStatus = computed(() => {
    if (!originalJson.value.trim()) {
        return { text: t('tools.json-diff-checker.empty'), class: 'text-gray-500' }
    }
    try {
        JSON.parse(originalJson.value)
        return { text: t('tools.json-diff-checker.validJson'), class: 'text-green-600' }
    } catch (e) {
        return { text: t('tools.json-diff-checker.invalidJson'), class: 'text-red-600' }
    }
})

const modifiedJsonStatus = computed(() => {
    if (!modifiedJson.value.trim()) {
        return { text: t('tools.json-diff-checker.empty'), class: 'text-gray-500' }
    }
    try {
        JSON.parse(modifiedJson.value)
        return { text: t('tools.json-diff-checker.validJson'), class: 'text-green-600' }
    } catch (e) {
        return { text: t('tools.json-diff-checker.invalidJson'), class: 'text-red-600' }
    }
})

const canCompare = computed(() => {
    return originalJsonStatus.value.class === 'text-green-600' && 
           modifiedJsonStatus.value.class === 'text-green-600'
})

// 方法
function loadSampleJson(type) {
    if (type === 'original') {
        originalJson.value = JSON.stringify(sampleJsons.original, null, 2)
    } else {
        modifiedJson.value = JSON.stringify(sampleJsons.modified, null, 2)
    }
}

function clearJson(type) {
    if (type === 'original') {
        originalJson.value = ''
    } else {
        modifiedJson.value = ''
    }
}

function formatJson() {
    try {
        if (originalJson.value.trim()) {
            const parsed = JSON.parse(originalJson.value)
            originalJson.value = JSON.stringify(parsed, null, 2)
        }
        if (modifiedJson.value.trim()) {
            const parsed = JSON.parse(modifiedJson.value)
            modifiedJson.value = JSON.stringify(parsed, null, 2)
        }
    } catch (e) {
        console.error('Format error:', e)
    }
}

function compareJson() {
    if (!canCompare.value) return

    try {
        const original = JSON.parse(originalJson.value)
        const modified = JSON.parse(modifiedJson.value)
        
        const diff = generateDiff(original, modified)
        diffResult.value = diff.html
        diffStats.value = diff.stats
    } catch (e) {
        console.error('Compare error:', e)
    }
}

function generateDiff(original, modified, path = '') {
    let html = ''
    let stats = { added: 0, removed: 0, modified: 0, unchanged: 0 }
    
    const originalKeys = new Set(Object.keys(original || {}))
    const modifiedKeys = new Set(Object.keys(modified || {}))
    const allKeys = new Set([...originalKeys, ...modifiedKeys])
    
    for (const key of allKeys) {
        const currentPath = path ? `${path}.${key}` : key
        const hasOriginal = originalKeys.has(key)
        const hasModified = modifiedKeys.has(key)
        
        if (!hasOriginal && hasModified) {
            // 新增
            html += `<div class="diff-line added">
                <span class="line-number">+</span>
                <span class="path">${currentPath}:</span>
                <span class="value">${JSON.stringify(modified[key], null, 2)}</span>
            </div>`
            stats.added++
        } else if (hasOriginal && !hasModified) {
            // 删除
            html += `<div class="diff-line removed">
                <span class="line-number">-</span>
                <span class="path">${currentPath}:</span>
                <span class="value">${JSON.stringify(original[key], null, 2)}</span>
            </div>`
            stats.removed++
        } else if (hasOriginal && hasModified) {
            const originalValue = original[key]
            const modifiedValue = modified[key]
            
            if (JSON.stringify(originalValue) !== JSON.stringify(modifiedValue)) {
                // 修改
                if (typeof originalValue === 'object' && typeof modifiedValue === 'object' && 
                    originalValue !== null && modifiedValue !== null) {
                    // 递归比较对象
                    const nestedDiff = generateDiff(originalValue, modifiedValue, currentPath)
                    html += nestedDiff.html
                    stats.added += nestedDiff.stats.added
                    stats.removed += nestedDiff.stats.removed
                    stats.modified += nestedDiff.stats.modified
                    stats.unchanged += nestedDiff.stats.unchanged
                } else {
                    html += `<div class="diff-line removed">
                        <span class="line-number">-</span>
                        <span class="path">${currentPath}:</span>
                        <span class="value">${JSON.stringify(originalValue, null, 2)}</span>
                    </div>`
                    html += `<div class="diff-line added">
                        <span class="line-number">+</span>
                        <span class="path">${currentPath}:</span>
                        <span class="value">${JSON.stringify(modifiedValue, null, 2)}</span>
                    </div>`
                    stats.modified++
                }
            } else {
                // 未变化
                if (!options.value.showOnlyDifferences) {
                    html += `<div class="diff-line unchanged">
                        <span class="line-number">=</span>
                        <span class="path">${currentPath}:</span>
                        <span class="value">${JSON.stringify(originalValue, null, 2)}</span>
                    </div>`
                }
                stats.unchanged++
            }
        }
    }
    
    return { html, stats }
}

function exportDiff() {
    if (!diffResult.value) return
    
    const content = `JSON Diff Report
Generated: ${new Date().toLocaleString()}

Statistics:
- Added: ${diffStats.value.added}
- Removed: ${diffStats.value.removed}
- Modified: ${diffStats.value.modified}
- Unchanged: ${diffStats.value.unchanged}

Differences:
${diffResult.value.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ')}`
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'json-diff-report.txt'
    a.click()
    URL.revokeObjectURL(url)
}

// 监听选项变化，自动重新比较
watch(options, () => {
    if (diffResult.value) {
        compareJson()
    }
}, { deep: true })
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
    @apply bg-gray-600 hover:bg-gray-700 text-white;
}

.diff-container {
    max-height: 500px;
    overflow-y: auto;
}

:deep(.diff-line) {
    @apply flex items-start py-1 px-2 border-l-4;
}

:deep(.diff-line.added) {
    @apply bg-green-50 border-green-500 dark:bg-green-900/20;
}

:deep(.diff-line.removed) {
    @apply bg-red-50 border-red-500 dark:bg-red-900/20;
}

:deep(.diff-line.unchanged) {
    @apply bg-gray-50 border-gray-300 dark:bg-gray-800;
}

:deep(.line-number) {
    @apply w-6 text-center font-bold mr-2;
}

:deep(.path) {
    @apply font-medium text-blue-600 dark:text-blue-400 mr-2;
}

:deep(.value) {
    @apply text-gray-700 dark:text-gray-300;
}

/* 响应式调整 */
@media (max-width: 1024px) {
    .grid-cols-1.lg\\:grid-cols-2 {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .btn {
        @apply px-3 py-1.5 text-sm;
    }
    
    .btn-sm {
        @apply px-2 py-1 text-xs;
    }
}
</style>