<template>
  <div class="container-fluid px-4 py-6 mr-8">
    <div v-if="tool" class="mb-6">
      <h1 class="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">{{ $t(`tools.${tool.id}.name`) }}</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-4">{{ $t(`tools.${tool.id}.description`) }}</p>
      
      <!-- 分类和标签显示 -->
      <div v-if="category || validTags.length > 0" class="flex flex-wrap gap-2 mb-6">
        <span v-if="category" class="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          {{ $t(`categories.${category.id}`) }}
        </span>
        
        <span 
          v-for="tagId in validTags" 
          :key="tagId" 
          :class="`px-3 py-1 rounded-full text-sm ${getTagStyle(tagId)}`"
        >
          {{ $t(`tags.${tagId}`) }}
        </span>
      </div>
    </div>
    
    <div v-if="loading" class="flex justify-center items-center p-12">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      <span class="ml-3 text-gray-600 dark:text-gray-400">{{ $t('common.loading') }}</span>
    </div>
    
    <div v-else-if="!tool" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
      <p>{{ $t('errors.toolNotFound') }} <router-link :to="localizedRoute('/')" class="underline font-medium">{{ $t('header.home') }}</router-link></p>
    </div>
    
    <!-- 显示组件加载状态 -->
    <div v-else-if="componentLoading" class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
      <div class="flex justify-center items-center p-8">
        <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
        <span class="ml-3 text-gray-600 dark:text-gray-400">{{ $t('common.loading') }}</span>
      </div>
    </div>
    
    <!-- 动态组件显示 -->
    <component v-else-if="resolvedComponent" :is="resolvedComponent" />
    
    <!-- 组件加载错误 -->
    <div v-else-if="componentError" class="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-6">
      <p>{{ $t('errors.componentFailed') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted, watch, markRaw } from 'vue'
import { useRoute } from 'vue-router'
import { addToHistory } from '../services/historyService'
import { useInternationalizedRoute } from '../composables/useInternationalizedRoute'

const route = useRoute()
const allTools = inject('allTools', [])
const categories = inject('categories', [])
const allTags = inject('allTags', { value: [] })
const loading = ref(true)
const tool = ref(null)
const error = ref(null)
const componentLoading = ref(false)
const componentError = ref(null)
const resolvedComponent = ref(null)

// 使用国际化路由辅助函数
const { localizedRoute } = useInternationalizedRoute()

// 定义分类数据（作为备份）
const categoriesData = [
  { id: 'dev', title: '开发工具', description: '为开发者提供的编程、调试和优化工具' },
  { id: 'design', title: '设计工具', description: '辅助设计师创建和优化视觉作品的工具' },
  { id: 'text', title: '文本与编辑', description: '处理、编辑和转换文本内容的工具' },
  { id: 'image', title: '图像与多媒体', description: '图像处理、优化和转换工具' },
  { id: 'convert', title: '转换工具', description: '各种文件格式之间的转换工具' },
  { id: 'utility', title: '实用效率', description: '各种实用的日常工具' },
  { id: 'network', title: '网络与协议工具', description: '网络分析、调试和测试工具' },
  { id: 'crypto', title: '密码与安全', description: '密码生成、加密、解密与安全工具' }
]

// 安全地获取分类信息
const category = computed(() => {
  if (!tool.value) return null
  
  // 首先尝试从注入的 categories 中查找
  const cats = Array.isArray(categories) ? categories : 
               (categories && Array.isArray(categories.value) ? categories.value : categoriesData)
  
  return cats.find(c => c.id === tool.value.categoryId)
})

// 安全地获取分类名称
const categoryName = computed(() => {
  return category.value?.title || ''
})

// 获取有效的标签列表
const validTags = computed(() => {
  if (!tool.value?.tags || !allTags?.value) return []
  return tool.value.tags.filter(tagId => tagId && findTagName(tagId))
})

// 标签颜色映射
const tagColorMap = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  teal: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
  amber: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  lime: 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200',
  emerald: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
  rose: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200'
}

// 获取标签样式
function getTagStyle(tagId) {
  if (!allTags?.value) return tagColorMap.gray
  const tag = allTags.value.find(t => t.id === tagId)
  return tagColorMap[tag?.color] || tagColorMap.gray
}

function findTagName(tagId) {
  if (!allTags?.value) return tagId
  const tag = allTags.value.find(t => t.id === tagId)
  return tag?.name || tagId
}

// 加载工具数据
function loadTool() {
  loading.value = true
  error.value = null
  resolvedComponent.value = null
  componentError.value = null
  
  console.log('Loading tool with ID:', route.params.id)
  
  setTimeout(() => {
    const paramId = route.params.id
    const findTool = (tools) => {
      return tools.value.find(t => String(t.id) === String(paramId))
    }
    
    tool.value = findTool(allTools);
    
    console.log('Found tool:', tool.value ? 'Yes' : 'No')
    if (tool.value) {
      console.log('Tool details:', {
        id: tool.value.id,
        name: tool.value.name,
        component: tool.value.component
      })
      
      // 添加到历史记录
      addToHistory(tool.value)
      
      // 工具数据加载完成后，加载组件
      loadComponent(tool.value.component)
    } else {
      error.value = '未找到该工具'
      console.error('Tool not found')
    }
    
    loading.value = false
  }, 300)
}

// 使用懒加载方式加载组件
async function loadComponent(componentName) {
  if (!componentName) {
    componentError.value = '未指定组件名称'
    return
  }
  
  componentLoading.value = true
  componentError.value = null
  resolvedComponent.value = null
  
  try {
    console.log('Loading component:', componentName)
    
    // 使用全局注册的 getComponent 方法加载组件
    const component = await app.config.globalProperties.getComponent(componentName)
    resolvedComponent.value = markRaw(component)
    
    if (!resolvedComponent.value) {
      componentError.value = `无法加载组件 "${componentName}"`
    }
  } catch (err) {
    console.error('Failed to load component:', err)
    componentError.value = `组件加载失败: ${err.message}`
  } finally {
    componentLoading.value = false
  }
}

onMounted(() => {
  // 检查环境
  console.log('App object available:', !!app)
  console.log('Lazy component map available:', !!app?.config?.globalProperties?.lazyComponentMap)
  
  // 列出可用的组件
  if (app?.config?.globalProperties?.lazyComponentMap) {
    console.log('Available lazy components:', Object.keys(app.config.globalProperties.lazyComponentMap).length)
  }
  
  loadTool()
})

watch(() => route.params.id, (newId) => {
  if (newId) {
    loadTool()
  }
})

// 在渲染标签部分的代码中也需要更新
const tagName = computed((tagId) => {
  if (!allTags) return tagId
  
  const tag = allTags.find(t => t.id === tagId)
  return tag?.name || tagId
})
</script>

<style scoped>
.tag-link {
  transition: all 0.2s;
}

.tag-link:hover {
  transform: translateY(-1px);
}
</style> 