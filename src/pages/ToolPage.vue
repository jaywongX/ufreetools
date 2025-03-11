<template>
  <div class="container mx-auto px-4 py-6">
    <div v-if="tool" class="mb-6">
      <h1 class="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">{{ tool.name }}</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-4">{{ tool.description }}</p>
      
      <!-- 分类和标签显示 -->
      <div v-if="category" class="flex flex-wrap gap-2 mb-6">
        <span class="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          {{ category.name }}
        </span>
        
        <span 
          v-for="tagId in tool.tags" 
          :key="tagId" 
          :class="`px-3 py-1 rounded-full text-sm ${getTagColor(tagId) || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`"
          :hidden="!findTagName(tagId)"
        >
          {{ findTagName(tagId) }}
        </span>
      </div>
    </div>
    
    <div v-if="loading" class="flex justify-center items-center p-12">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
    
    <div v-else-if="!tool" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
      <p>工具未找到或正在加载中，请稍后重试或返回<router-link to="/" class="underline font-medium">首页</router-link></p>
    </div>
    
    <!-- 显示组件加载状态 -->
    <div v-else-if="componentLoading" class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
      <div class="flex justify-center items-center p-8">
        <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
        <span class="ml-3 text-gray-600 dark:text-gray-400">加载工具组件...</span>
      </div>
    </div>
    
    <!-- 动态组件显示 -->
    <component v-else-if="resolvedComponent" :is="resolvedComponent" />
    
    <!-- 组件加载错误 -->
    <div v-else-if="componentError" class="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-6">
      <p>{{ componentError }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted, watch, markRaw } from 'vue'
import { useRoute } from 'vue-router'
import TagBadge from '../components/ui/TagBadge.vue'
import ToolCard from '../components/ui/ToolCard.vue'

const route = useRoute()
const allTools = inject('allTools', [])
const categories = inject('categories', [])
const allTags = inject('allTags')
const loading = ref(true)
const tool = ref(null)
const error = ref(null)
const componentLoading = ref(false)
const componentError = ref(null)
const resolvedComponent = ref(null)

// 定义分类数据（作为备份）
const categoriesData = [
  { id: 'dev', title: '开发工具', description: '为开发者提供的编程、调试和优化工具' },
  { id: 'design', title: '设计工具', description: '辅助设计师创建和优化视觉作品的工具' },
  { id: 'text', title: '文本与编辑', description: '处理、编辑和转换文本内容的工具' },
  { id: 'image', title: '图像与多媒体工具', description: '图像处理、优化和转换工具' },
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

function findTagName(tagId) {
  const tag = allTags.value.find(t => t.id === tagId)
  return tag?.name
}

function getTagColor(tagId) {
  const tag = allTags.value.find(t => t.id === tagId)
  return tag?.color
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
      return tools.find(t => String(t.id) === String(paramId))
    }
    
    // 检查 allTools 的类型和值
    console.log('allTools type:', typeof allTools)
    console.log('Is allTools array?', Array.isArray(allTools))
    console.log('Is allTools.value array?', allTools.value && Array.isArray(allTools.value))
    
    tool.value = findTool(allTools);
    
    console.log('Found tool:', tool.value ? 'Yes' : 'No')
    if (tool.value) {
      console.log('Tool details:', {
        id: tool.value.id,
        name: tool.value.name,
        component: tool.value.component
      })
      
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