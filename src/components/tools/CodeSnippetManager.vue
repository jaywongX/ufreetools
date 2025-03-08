<template>
  <div>
    <!-- 工具配置区域 -->
    <div class="mb-6 bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700">
      <h2 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">代码片段管理器</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        保存和管理常用代码片段，提高开发效率。所有片段都存储在浏览器本地，不会上传到服务器
      </p>
      
      <!-- 搜索栏 -->
      <div class="mb-4">
        <div class="flex">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="搜索代码片段..." 
            class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
          <select 
            v-model="languageFilter" 
            class="px-3 py-2 border-l-0 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="">所有语言</option>
            <option v-for="lang in availableLanguages" :key="lang" :value="lang">{{ lang }}</option>
          </select>
          <button 
            @click="createNewSnippet" 
            class="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark"
          >
            新建片段
          </button>
        </div>
      </div>
    </div>
    
    <!-- 片段列表和编辑区域 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 片段列表 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 h-[calc(100vh-240px)] flex flex-col">
        <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">我的代码片段</h3>
        
        <div v-if="isLoading" class="flex-1 flex items-center justify-center">
          <span class="text-gray-500 dark:text-gray-400">加载中...</span>
        </div>
        
        <div v-else-if="filteredSnippets.length === 0" class="flex-1 flex items-center justify-center flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="text-gray-500 dark:text-gray-400 text-center">
            {{ searchQuery || languageFilter ? '没有找到匹配的片段' : '暂无代码片段' }}
          </span>
          <button 
            v-if="!searchQuery && !languageFilter" 
            @click="createNewSnippet" 
            class="mt-4 px-3 py-1.5 bg-primary text-white rounded-md hover:bg-primary-dark text-sm"
          >
            创建第一个片段
          </button>
        </div>
        
        <div v-else class="flex-1 overflow-auto">
          <div 
            v-for="snippet in filteredSnippets" 
            :key="snippet.id" 
            class="p-3 mb-2 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer transition hover:bg-gray-50 dark:hover:bg-gray-750"
            :class="{'bg-gray-50 dark:bg-gray-750 border-primary dark:border-primary-light': snippet.id === selectedSnippetId}"
            @click="selectSnippet(snippet.id)"
          >
            <div class="flex justify-between items-start mb-1">
              <h4 class="text-gray-800 dark:text-gray-200 font-medium truncate">{{ snippet.title }}</h4>
              <span class="text-xs py-0.5 px-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">{{ snippet.language }}</span>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-1 truncate">
              {{ new Date(snippet.lastModified).toLocaleString() }}
            </p>
            <p class="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{{ snippet.description || '无描述' }}</p>
          </div>
        </div>
      </div>
      
      <!-- 编辑区域 -->
      <div class="bg-white dark:bg-gray-800 rounded-md p-4 border border-gray-200 dark:border-gray-700 md:col-span-2 h-[calc(100vh-240px)] flex flex-col">
        <div v-if="!selectedSnippet" class="flex-1 flex items-center justify-center flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="text-gray-500 dark:text-gray-400 text-center">
            选择一个代码片段进行查看或编辑<br>或者创建一个新的片段
          </p>
          <button 
            @click="createNewSnippet" 
            class="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            新建片段
          </button>
        </div>
        
        <div v-else class="flex-1 flex flex-col">
          <div class="mb-4 flex justify-between items-center">
            <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200">
              {{ isEditMode ? '编辑片段' : '查看片段' }}
            </h3>
            <div class="flex gap-2">
              <button 
                v-if="!isEditMode" 
                @click="isEditMode = true" 
                class="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                编辑
              </button>
              <button 
                v-if="isEditMode" 
                @click="saveSnippet" 
                class="px-3 py-1.5 text-sm bg-primary text-white rounded-md hover:bg-primary-dark"
              >
                保存
              </button>
              <button 
                v-if="isEditMode" 
                @click="cancelEdit" 
                class="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                取消
              </button>
              <button 
                v-if="!isEditMode" 
                @click="copySnippet" 
                class="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                复制
              </button>
              <button 
                v-if="!isEditMode" 
                @click="showDeleteConfirm = true" 
                class="px-3 py-1.5 text-sm bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-md hover:bg-red-200 dark:hover:bg-red-800"
              >
                删除
              </button>
            </div>
          </div>
          
          <!-- 编辑模式 -->
          <div v-if="isEditMode" class="flex-1 flex flex-col">
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                标题
              </label>
              <input 
                v-model="editingSnippet.title" 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                placeholder="给代码片段起个标题..."
              >
            </div>
            
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                描述
              </label>
              <textarea 
                v-model="editingSnippet.description" 
                rows="2"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                placeholder="简要描述这个代码片段的用途或功能..."
              ></textarea>
            </div>
            
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                编程语言
              </label>
              <select 
                v-model="editingSnippet.language" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                <option v-for="lang in allLanguages" :key="lang" :value="lang">{{ lang }}</option>
              </select>
            </div>
            
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                标签 (用逗号分隔)
              </label>
              <input 
                v-model="tagsInput" 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                placeholder="例如: 算法, 排序, React..."
              >
            </div>
            
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                代码内容
              </label>
              <textarea 
                v-model="editingSnippet.code" 
                ref="codeTextarea"
                class="w-full h-[calc(100%-2rem)] px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm whitespace-pre"
                placeholder="在此粘贴或输入代码..."
              ></textarea>
            </div>
          </div>
          
          <!-- 查看模式 -->
          <div v-else class="flex-1 flex flex-col">
            <div class="mb-3">
              <h4 class="text-lg text-gray-800 dark:text-gray-200">{{ selectedSnippet.title }}</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ selectedSnippet.description || '无描述' }}</p>
              
              <div class="flex items-center mt-2">
                <span class="text-xs py-0.5 px-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded mr-2">
                  {{ selectedSnippet.language }}
                </span>
                <span class="text-xs text-gray-500 dark:text-gray-400">
                  修改于 {{ new Date(selectedSnippet.lastModified).toLocaleString() }}
                </span>
              </div>
              
              <div class="flex flex-wrap mt-2 gap-1" v-if="selectedSnippet.tags && selectedSnippet.tags.length">
                <span 
                  v-for="tag in selectedSnippet.tags" 
                  :key="tag"
                  class="text-xs py-0.5 px-1.5 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <div class="flex-1 overflow-auto">
              <div class="relative">
                <button 
                  @click="copySnippet" 
                  class="absolute top-2 right-2 p-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                  title="复制代码"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <pre class="bg-gray-50 dark:bg-gray-750 p-4 rounded-md border border-gray-200 dark:border-gray-700 overflow-x-auto"><code ref="codeDisplay" class="text-sm font-mono">{{ selectedSnippet.code }}</code></pre>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 删除确认对话框 -->
        <div 
          v-if="showDeleteConfirm" 
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div class="bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg max-w-md w-full">
            <h3 class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">确认删除</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              您确定要删除代码片段 "{{ selectedSnippet?.title }}" 吗？此操作不可恢复。
            </p>
            <div class="flex justify-end space-x-2">
              <button 
                @click="showDeleteConfirm = false" 
                class="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                取消
              </button>
              <button 
                @click="deleteSnippet" 
                class="px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                确认删除
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import localforage from 'localforage'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

// 初始化localforage
localforage.config({
  name: 'CodeSnippetManager',
  storeName: 'snippets'
})

// 状态变量
const snippets = ref([])
const selectedSnippetId = ref(null)
const isEditMode = ref(false)
const isLoading = ref(true)
const editingSnippet = ref(null)
const tagsInput = ref('')
const searchQuery = ref('')
const languageFilter = ref('')
const showDeleteConfirm = ref(false)
const codeDisplay = ref(null)
const codeTextarea = ref(null)

// 语言列表
const allLanguages = [
  'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'Java', 'C++', 'C#', 
  'PHP', 'Ruby', 'Go', 'Swift', 'Kotlin', 'Rust', 'SQL', 'Bash', 'PowerShell',
  'JSON', 'XML', 'YAML', 'Markdown', 'plaintext'
]

// 计算已有的编程语言（用于过滤器）
const availableLanguages = computed(() => {
  const languages = new Set()
  snippets.value.forEach(snippet => {
    if (snippet.language) {
      languages.add(snippet.language)
    }
  })
  return Array.from(languages).sort()
})

// 过滤后的代码片段
const filteredSnippets = computed(() => {
  let filtered = [...snippets.value]
  
  // 应用语言过滤
  if (languageFilter.value) {
    filtered = filtered.filter(s => s.language === languageFilter.value)
  }
  
  // 应用搜索查询
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(s => 
      s.title.toLowerCase().includes(query) || 
      s.description.toLowerCase().includes(query) ||
      s.code.toLowerCase().includes(query) ||
      (s.tags && s.tags.some(tag => tag.toLowerCase().includes(query)))
    )
  }
  
  // 按最后修改时间排序（最新的在前面）
  return filtered.sort((a, b) => b.lastModified - a.lastModified)
})

// 当前选中的代码片段
const selectedSnippet = computed(() => {
  return snippets.value.find(s => s.id === selectedSnippetId.value) || null
})

// 初始化
onMounted(async () => {
  await loadSnippets()
  isLoading.value = false
})

// 代码高亮
watch(() => [selectedSnippet.value, isEditMode.value], async () => {
  if (selectedSnippet.value && !isEditMode.value) {
    await nextTick()
    if (codeDisplay.value) {
      try {
        const language = selectedSnippet.value.language.toLowerCase()
        const highlighted = hljs.highlight(
          selectedSnippet.value.code, 
          { language: language === 'plaintext' ? 'plaintext' : language }
        )
        codeDisplay.value.innerHTML = highlighted.value
      } catch (e) {
        console.error('高亮失败', e)
        codeDisplay.value.textContent = selectedSnippet.value.code
      }
    }
  }
}, { immediate: true })

// 从本地存储加载代码片段
async function loadSnippets() {
  try {
    const loadedSnippets = await localforage.getItem('snippets')
    snippets.value = loadedSnippets || []
  } catch (error) {
    console.error('加载代码片段失败:', error)
    snippets.value = []
  }
}

// 保存代码片段到本地存储
async function saveSnippetsToStorage() {
  try {
    await localforage.setItem('snippets', snippets.value)
  } catch (error) {
    console.error('保存代码片段失败:', error)
    alert('保存失败，请重试')
  }
}

// 选择一个代码片段
function selectSnippet(id) {
  selectedSnippetId.value = id
  isEditMode.value = false
}

// 创建新代码片段
function createNewSnippet() {
  const newSnippet = {
    id: Date.now().toString(),
    title: '新代码片段',
    description: '',
    language: 'JavaScript',
    code: '',
    tags: [],
    lastModified: Date.now()
  }
  
  snippets.value.push(newSnippet)
  saveSnippetsToStorage()
  selectedSnippetId.value = newSnippet.id
  isEditMode.value = true
  editingSnippet.value = { ...newSnippet }
  tagsInput.value = ''
}

// 进入编辑模式
watch(() => [selectedSnippetId.value, isEditMode.value], () => {
  if (selectedSnippet.value && isEditMode.value) {
    editingSnippet.value = { ...selectedSnippet.value }
    tagsInput.value = editingSnippet.value.tags.join(', ')
  }
}, { immediate: true })

// 保存编辑的代码片段
async function saveSnippet() {
  if (!editingSnippet.value) return
  
  // 处理标签
  const tags = tagsInput.value
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag)
  
  // 更新片段
  const updatedSnippet = {
    ...editingSnippet.value,
    tags,
    lastModified: Date.now()
  }
  
  // 更新本地数组
  const index = snippets.value.findIndex(s => s.id === updatedSnippet.id)
  if (index !== -1) {
    snippets.value[index] = updatedSnippet
  }
  
  // 保存到存储
  await saveSnippetsToStorage()
  
  // 退出编辑模式
  isEditMode.value = false
}

// 取消编辑
function cancelEdit() {
  isEditMode.value = false
  editingSnippet.value = null
}

// 复制代码到剪贴板
function copySnippet() {
  if (!selectedSnippet.value) return
  
  navigator.clipboard.writeText(selectedSnippet.value.code)
    .then(() => {
      alert('代码已复制到剪贴板')
    })
    .catch(err => {
      console.error('复制失败:', err)
      alert('复制失败，请手动复制')
    })
}

// 删除代码片段
async function deleteSnippet() {
  if (!selectedSnippetId.value) return
  
  // 从数组中删除
  snippets.value = snippets.value.filter(s => s.id !== selectedSnippetId.value)
  
  // 保存到存储
  await saveSnippetsToStorage()
  
  // 重置状态
  selectedSnippetId.value = null
  isEditMode.value = false
  showDeleteConfirm.value = false
}
</script>

<style>
/* 代码行号样式 */
pre {
  position: relative;
  padding-left: 3.5rem;
  counter-reset: line;
}

code {
  counter-increment: line;
}

/* 文本截断样式 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 