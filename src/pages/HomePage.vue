<template>
  <div>
    <!-- 标签筛选标题行 -->
    <!-- <section class="mb-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold">{{ $t('home.tagFilterTitle') }}</h2>
      </div> -->

      <!-- 标签列表 -->
      <!-- <div class="flex flex-wrap gap-3">
        <router-link 
          v-for="tag in displayedTags" 
          :key="tag.id"
          :to="localizedRoute(`/tag/${tag.id}`)"
          :class="['tag-cloud-item transition-all hover:shadow-sm']"
        >
          <TagBadge v-if="tag?.id" :tag-id="tag.id" />
        </router-link> -->
        
        <!-- 显示更多/收起按钮 -->
        <!-- <div 
          v-if="Array.isArray(allTags) && allTags.length > 10"
          @click="toggleTagsDisplay"
          class="text-primary dark:text-primary-light py-2 px-4 cursor-pointer hover:underline flex items-center"
        >
          <span>{{ showAllTags ? $t('tags.collapse') : $t('tags.showMore') }} ({{ allTags.length }})</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" :class="{'transform rotate-180': showAllTags}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section> -->

    <!-- 当有选定标签时显示的结果 -->
    <!-- <div v-if="selectedTags.length > 0">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">{{ $t('home.filterResultsTitle') }} ({{ filteredTools.length }})</h2>
      </div>
      
      <div v-if="filteredTools.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <ToolCard 
          v-for="tool in filteredTools" 
          :key="tool.id" 
          :tool="tool"
          @tag-click="addTagToFilter"
        />
      </div>
      
      <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center mb-10">
        <p class="text-gray-600 dark:text-gray-400">{{ $t('home.noMatchingTools') }}</p>
      </div>
    </div> -->
  
    <!-- 收藏工具部分 -->
    <section v-if="selectedTags.length === 0 && favoritedTools.length > 0" class="mb-10">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">{{ $t('common.home.favoritedToolsTitle') }}</h2>
        <router-link :to="localizedRoute('/favorites')" class="text-primary dark:text-primary-light hover:underline text-sm">
          {{ $t('common.home.viewAllFavorites') }}
        </router-link>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ToolCard 
          v-for="tool in favoritedTools.slice(0, 3)" 
          :key="tool.id"
          :tool="tool"
          @tag-click="addTagToFilter"
        />
      </div>
    </section>
  
    <!-- 最近使用部分 -->
    <section v-if="selectedTags.length === 0 && recentTools.length > 0" class="mb-10">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">{{ $t('home.recentToolsTitle') }}</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ToolCard 
          v-for="tool in recentTools" 
          :key="tool.id"
          :tool="tool"
          @tag-click="addTagToFilter"
        />
      </div>
    </section>
  
    <!-- 热门工具部分 -->
    <section v-if="selectedTags.length === 0" class="mb-10">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">{{ $t('home.popularToolsTitle') }}</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ToolCard 
          v-for="tool in popularTools" 
          :key="tool.id"
          :tool="tool"
          @tag-click="addTagToFilter"
        />
      </div>
    </section>
  
    <!-- 最新添加部分 -->
    <section v-if="selectedTags.length === 0">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">{{ $t('home.newToolsTitle') }}</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ToolCard 
          v-for="tool in newTools" 
          :key="tool.id"
          :tool="tool"
          @tag-click="addTagToFilter"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, inject, computed, onMounted, watch, onUpdated } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TagBadge from '../components/ui/TagBadge.vue'
import ToolCard from '../components/ui/ToolCard.vue'
import { getHistory } from '../services/historyService'
import { useMetaInfo } from '../mixins/metaInfoMixin'
import { useI18n } from 'vue-i18n'
import { useInternationalizedRoute } from '../composables/useInternationalizedRoute'
import { getFavorites } from '../services/favoritesService'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { localizedRoute } = useInternationalizedRoute()

// 注入全局数据
const allTools = inject('allTools')
const categories = inject('categories', [])
const allTags = inject('allTags', [])
const toolsByTag = inject('toolsByTag', {})

// 已选标签
const selectedTags = ref([])

// 最近使用的工具
const recentTools = ref([])

// 使用元信息钩子
const { updateMetaInfo } = useMetaInfo('home.title', 'home.description')

// 控制标签显示状态
const showAllTags = ref(false)

// 计算要显示的标签
const displayedTags = computed(() => {
  if (!Array.isArray(allTags.value)) return []
  return showAllTags.value ? allTags.value : allTags.value.slice(0, 10)
})

// 切换标签显示
function toggleTagsDisplay() {
  showAllTags.value = !showAllTags.value
}

// 从URL获取标签筛选参数
function getTagsFromUrl() {
  const tagParam = route.query.tags
  if (!tagParam) return []
  // 只取第一个标签
  return [tagParam]
}

// 更新URL以反映当前筛选的标签
function updateUrlWithTags() {
  if (selectedTags.value.length === 0) {
    // 如果没有选择标签，则移除URL参数
    if (route.query.tags) {
      router.replace({
        query: { ...route.query, tags: undefined }
      })
    }
    return
  }
  
  // 只使用第一个标签更新URL
  router.replace({
    query: { ...route.query, tags: selectedTags.value[0] }
  })
}

// 根据所选标签筛选工具
const filteredTools = computed(() => {
  if (selectedTags.value.length === 0) return []
  if (!Array.isArray(allTools)) return []
  
  // 只使用第一个标签进行筛选
  const selectedTag = selectedTags.value[0]
  return allTools.value.filter(tool => tool.tags.includes(selectedTag))
})

// 添加清除选中标签的方法
function clearSelectedTags() {
  selectedTags.value = []
  updateUrlWithTags()
}

// 添加标签到筛选器
function addTagToFilter(tagId) {
  // 如果点击的是当前选中的标签，则清除选择
  if (selectedTags.value[0] === tagId) {
    selectedTags.value = []
  } else {
    // 否则替换为新标签
    selectedTags.value = [tagId]
  }
  updateUrlWithTags()
}

// 监听URL变化，更新选中的标签
watch(() => route.query.tags, () => {
  selectedTags.value = getTagsFromUrl()
}, { immediate: true })

// 监听选中标签的变化，更新URL
watch(selectedTags, () => {
  updateUrlWithTags()
})

// 确保 allTools 是数组
const toolsArray = computed(() => {
  return Array.isArray(allTools.value) ? allTools.value : []
})

const popularTools = computed(() => {
  if (!toolsArray.value.length) return []
  
  // Define IDs of tools we consider "popular"
  const popularToolIds = [
    'json-formatter', 
    'password-generator',
    'qr-code-generator',
    'code-obfuscator',
    'name-generator', 
    'uuid-generator',
    'base64-encoder-decoder',
    'image-cropper',
    'hex-and-calculator',
  ]
  
  // Filter tools by ID to get the popular ones
  return toolsArray.value.filter(tool => popularToolIds.includes(tool.id))
})

const newTools = computed(() => {
  if (!toolsArray.value.length) return []
  return [...toolsArray.value].reverse().slice(0, 6)
})

// 收藏的工具
const favoritedTools = ref([])

// 组件挂载时，同步URL和选中标签状态，加载最近使用的工具
onMounted(() => {
  selectedTags.value = getTagsFromUrl()
  recentTools.value = getHistory()
  updateMetaInfo()
  favoritedTools.value = getFavorites().slice(0, 3)
})

onUpdated(() => {
  updateMetaInfo()
})
</script>

<style scoped>
.tag-cloud-item {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: white;
  transition: all 0.2s;
}

.dark .tag-cloud-item {
  background-color: rgb(31, 41, 55);
}

.tag-cloud-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* 统一滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* 暗色模式滚动条 */
.dark ::-webkit-scrollbar-thumb {
  background: #4b5563;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>