<template>
  <div v-cloak>
    <!-- 面包屑导航 -->
    <div class="mb-6 text-sm">
      <router-link :to="localizedRoute('/')" class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
        {{ $t('header.home') }}
      </router-link>
      <span class="mx-2 text-gray-400">/</span>
      <span class="text-gray-700 dark:text-gray-300">{{ $t('tags.title') }}</span>
    </div>
    
    <!-- 页面标题 -->
    <div class="mb-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-3">{{ $t('tags.title') }}</h1>
      <p class="text-gray-600 dark:text-gray-300">
        {{ $t('tags.description') }} ({{ allTags?.length || 0 }}{{ $t('tags.tagsCount') }}, {{ allTools?.length || 0 }}{{ $t('tags.toolsCount') }})
      </p>
    </div>
    
    <!-- 搜索标签 -->
    <div class="mb-8">
      <div class="relative max-w-md">
        <input 
          type="text" 
          v-model="tagSearchQuery" 
          :placeholder="$t('tags.searchPlaceholder')" 
          class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
        />
        <svg 
          v-if="tagSearchQuery" 
          @click="tagSearchQuery = ''" 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
    
    <!-- 标签分类展示 -->
    <div v-if="!tagSearchQuery && isDataReady">
      <!-- 热门标签 -->
      <section class="mb-10">
        <h2 class="text-xl font-bold mb-4">{{ $t('tags.popular') }}</h2>
        <div class="flex flex-wrap gap-3">
          <router-link 
            v-for="tag in popularTags" 
            :key="tag.id"
            :to="localizedRoute(`/tag/${tag.id}`)"
            class="tag-cloud-item"
            :style="{
              fontSize: `${getTagSize(tag)}rem`,
              opacity: getTagOpacity(tag)
            }"
          >
            <TagBadge v-if="tag?.id" :tag-id="tag.id" />
            <span class="ml-1 text-xs text-gray-500">{{ toolsByTag[tag.id]?.length || 0 }}</span>
          </router-link>
        </div>
      </section>
      
      <!-- 按类别分组的标签 -->
      <section v-for="(group, index) in tagGroups" :key="index" class="mb-10">
        <h2 class="text-xl font-bold mb-4">{{ getLocalizedGroupName(group.name) }}</h2>
        <div class="flex flex-wrap gap-3">
          <router-link 
            v-for="tag in group.tags" 
            :key="tag.id"
            :to="localizedRoute(`/tag/${tag.id}`)"
            class="tag-cloud-item"
          >
            <TagBadge v-if="tag?.id" :tag-id="tag.id" />
            <span class="ml-1 text-xs text-gray-500">{{ toolsByTag[tag.id]?.length || 0 }}</span>
          </router-link>
        </div>
      </section>
      
      <!-- 标签关系分析 -->
      <section class="mb-10" v-if="topTagPairs.length">
        <h2 class="text-xl font-bold mb-4">{{ $t('tags.relationshipAnalysis') }}</h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ $t('tags.relationshipDesc') }}
          </p>
          
          <div class="tag-relationship-chart">
            <div v-for="(pair, idx) in topTagPairs" :key="idx" class="mb-3 p-3 rounded bg-gray-50 dark:bg-gray-700">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <TagBadge v-if="pair.tags[0]" :tag-id="pair.tags[0]" />
                  <span class="mx-2">+</span>
                  <TagBadge v-if="pair.tags[1]" :tag-id="pair.tags[1]" />
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  {{ pair.count }}{{ $t('tags.toolsInPair') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <!-- 搜索标签结果 -->
    <div v-else-if="tagSearchQuery">
      <h2 class="text-xl font-bold mb-4">{{ $t('tags.searchResults') }}: "{{ tagSearchQuery }}"</h2>
      <div v-if="filteredTags.length > 0" class="flex flex-wrap gap-3">
        <router-link 
          v-for="tag in filteredTags" 
          :key="tag.id"
          :to="localizedRoute(`/tag/${tag.id}`)"
          class="tag-cloud-item"
        >
          <TagBadge v-if="tag?.id" :tag-id="tag.id" />
          <span class="ml-1 text-xs text-gray-500">{{ toolsByTag[tag.id]?.length || 0 }}</span>
        </router-link>
      </div>
      <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center">
        <p class="text-gray-600 dark:text-gray-400">{{ $t('tags.noMatchingTags') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, markRaw, shallowRef } from 'vue'
import _TagBadge from '../components/ui/TagBadge.vue'
import { useI18n } from 'vue-i18n'
import { useInternationalizedRoute } from '../composables/useInternationalizedRoute'

// 使用 markRaw 标记组件
const TagBadge = markRaw(_TagBadge)

// 使用 shallowRef 包装注入的数据
const allTools = shallowRef(inject('allTools', []))
const allTags = shallowRef(inject('allTags', []))
const toolsByTag = shallowRef(inject('toolsByTag', {}))

// 标签搜索功能
const tagSearchQuery = ref('')

// 数据准备状态
const isDataReady = computed(() => {
  return allTools.value?.length > 0 && 
         allTags.value?.length > 0 && 
         Object.keys(toolsByTag.value || {}).length > 0
})

// 按搜索过滤标签
const filteredTags = computed(() => {
  if (!tagSearchQuery.value || !allTags.value) return []
  
  const query = tagSearchQuery.value.toLowerCase().trim()
  return allTags.value.filter(tag => 
    tag?.id?.toLowerCase().includes(query) || 
    tag?.name?.toLowerCase().includes(query)
  )
})

// 按工具数量排序的热门标签
const popularTags = computed(() => {
  if (!allTags.value || !toolsByTag.value) return []
  
  return markRaw([...allTags.value]
    .map(tag => markRaw({
      ...tag,
      count: toolsByTag.value[tag?.id]?.length || 0
    })))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20)
})

// 根据使用频率计算标签大小
function getTagSize(tag) {
  if (!tag || !toolsByTag.value) return 0.9 // 默认最小尺寸
  
  const count = toolsByTag.value[tag.id]?.length || 0
  const allCounts = Object.values(toolsByTag.value || {}).map(tools => tools?.length || 0)
  const maxCount = allCounts.length > 0 ? Math.max(...allCounts) : 0
  const minSize = 0.9
  const maxSize = 1.5
  
  return maxCount === 0 ? minSize : minSize + (count / maxCount) * (maxSize - minSize)
}

// 根据使用频率计算标签透明度
function getTagOpacity(tag) {
  if (!tag || !toolsByTag.value) return 0.7 // 默认最小透明度
  
  const count = toolsByTag.value[tag.id]?.length || 0
  const allCounts = Object.values(toolsByTag.value || {}).map(tools => tools?.length || 0)
  const maxCount = allCounts.length > 0 ? Math.max(...allCounts) : 0
  const minOpacity = 0.7
  
  return maxCount === 0 ? minOpacity : minOpacity + (count / maxCount) * (1 - minOpacity)
}

// 标签分组
const tagGroups = computed(() => {
  if (!allTags.value) return []
  
  const groups = {}
  
  allTags.value.forEach(tag => {
    if (!tag?.color) return
    if (!groups[tag.color]) {
      groups[tag.color] = []
    }
    groups[tag.color].push(markRaw({...tag}))
  })
  
  // 将颜色映射到本地化的分类名称
  return markRaw(Object.entries(groups)
    .map(([color, tags]) => markRaw({
      name: getLocalizedGroupName(t(`tags.categories.${color}`, color)),
      color,
      tags: tags.sort((a, b) => (toolsByTag.value[b?.id]?.length || 0) - (toolsByTag.value[a?.id]?.length || 0))
    })))
    .sort((a, b) => b.tags.length - a.tags.length)
})

// 标签关联分析 - 寻找经常一起出现的标签对
const topTagPairs = computed(() => {
  if (!allTools.value) return []
  
  const tagPairs = {}
  
  // 统计每个标签对出现的频率
  allTools.value.forEach(tool => {
    if (!tool?.tags) return
    const tags = tool.tags
    
    // 遍历所有可能的标签对组合
    for (let i = 0; i < tags.length; i++) {
      for (let j = i + 1; j < tags.length; j++) {
        if (!tags[i] || !tags[j]) continue
        // 对标签ID进行排序，确保相同对的ID始终以相同顺序出现
        const pair = [tags[i], tags[j]].sort().join('_')
        tagPairs[pair] = (tagPairs[pair] || 0) + 1
      }
    }
  })
  
  // 转换为数组并按出现频率排序
  return markRaw(Object.entries(tagPairs)
    .map(([pair, count]) => markRaw({
      tags: pair.split('_'),
      count
    })))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
})

const { t } = useI18n()
const { localizedRoute } = useInternationalizedRoute()

function getLocalizedGroupName(groupName) {
  // 首先检查是否有直接匹配的翻译
  const directTranslation = t(`tags.categories.${groupName.toLowerCase()}`, { silent: true });
  if (directTranslation && directTranslation !== `tags.categories.${groupName.toLowerCase()}`) {
    return directTranslation;
  }
  
  // 然后检查是否在 groupNames 中有匹配
  // 这里需要根据实际分类名称进行映射
  const groupMapping = {
    '蓝色标签': 'blue',
    '性能相关': 'performance',
    '压缩工具': 'compression',
    '文档相关': 'document',
    '生成工具': 'generator',
    '数据处理': 'dataProcessing',
    '开发相关': 'development',
    '文本相关': 'text',
    '代码处理': 'code',
    '转换工具': 'conversion',
    'fuchsia类标签': 'fuchsia',
    '其他标签': 'other',
    'sky类标签': 'sky',
    'violet类标签': 'violet'
  };
  
  const key = groupMapping[groupName] || groupName.toLowerCase().replace(/\s+/g, '');
  const mappedTranslation = t(`tags.groupNames.${key}`, { silent: true });
  if (mappedTranslation && mappedTranslation !== `tags.groupNames.${key}`) {
    return mappedTranslation;
  }
  
  // 如果没有找到任何翻译，返回原始名称
  return groupName;
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}

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

.tag-relationship-chart {
  max-height: 350px;
  overflow-y: auto;
}
</style> 