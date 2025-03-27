<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="mb-6 text-sm">
      <router-link :to="localizedRoute('/')" class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
        {{ $t('header.home') }}
      </router-link>
      <span class="mx-2 text-gray-400">/</span>
      <router-link :to="localizedRoute('/tags')" class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
        {{ $t('tags.title') }}
      </router-link>
      <span class="mx-2 text-gray-400">/</span>
      <span class="text-gray-700 dark:text-gray-300">{{ tagInfo.name }}</span>
    </div>
    
    <!-- 标签页头部 -->
    <div class="mb-8">
      <div class="flex items-center mb-4">
        <TagBadge :tag-id="tagId" class="mr-2 text-base px-3 py-1" />
        <h1 class="text-2xl font-bold">{{ tagInfo.name }} {{ $t('tags.relatedTools') }}</h1>
      </div>
      <p class="text-gray-600 dark:text-gray-300">
        {{ $t('tags.foundCount', { count: taggedTools.length, tag: tagInfo.name }) }}
      </p>
    </div>
    
    <!-- 标签页筛选和排序 -->
    <div class="mb-6 flex flex-wrap gap-3">
      <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('tags.combineFilters') }}:</h3>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="tag in relatedTags"
          :key="tag.id"
          @click="toggleTag(tag.id)"
          class="tag-filter-btn"
          :class="{ 'tag-selected': selectedTags.includes(tag.id) }"
        >
          <TagBadge :tag-id="tag.id" />
        </button>
      </div>
    </div>
    
    <!-- 工具列表 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ToolCard 
        v-for="tool in filteredTools" 
        :key="tool.id"
        :tool="tool"
        @tag-click="navigateToTag"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TagBadge from '../components/ui/TagBadge.vue'
import ToolCard from '../components/ui/ToolCard.vue'
import { useI18n } from 'vue-i18n'
import { useInternationalizedRoute } from '../composables/useInternationalizedRoute'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { localizedRoute } = useInternationalizedRoute()

// 注入全局数据
const allTools = inject('allTools')
const allTags = inject('allTags')
const toolsByTag = inject('toolsByTag')

// 从路由获取标签ID
const tagId = computed(() => route.params.id)

// 标签信息
const tagInfo = computed(() => {
  return allTags.value.find(t => t.id === tagId.value) || { id: tagId.value, name: tagId.value, color: 'gray' }
})

// 获取包含当前标签的所有工具
const taggedTools = computed(() => {
  return toolsByTag.value[tagId.value] || []
})

// 相关标签（与当前标签共同出现的频率最高的标签）
const relatedTags = computed(() => {
  // 统计与当前标签共现的其他标签
  const tagCooccurrence = {}
  
  taggedTools.value.forEach(tool => {
    tool.tags.forEach(tag => {
      if (tag !== tagId.value) {
        tagCooccurrence[tag] = (tagCooccurrence[tag] || 0) + 1
      }
    })
  })
  
  // 按共现频率排序
  const sortedTags = Object.keys(tagCooccurrence)
    .sort((a, b) => tagCooccurrence[b] - tagCooccurrence[a])
    .slice(0, 8) // 最多显示8个相关标签
  
  // 获取标签详细信息
  return sortedTags.map(tagId => {
    return allTags.value.find(t => t.id === tagId) || { id: tagId, name: tagId, color: 'gray' }
  })
})

// 用户选择的额外标签
const selectedTags = ref([])

// 根据所选标签进一步筛选
const filteredTools = computed(() => {
  if (selectedTags.value.length === 0) {
    return taggedTools.value
  }
  
  // 必须包含当前标签和所有选中的额外标签
  return taggedTools.value.filter(tool => {
    return selectedTags.value.every(tag => tool.tags.includes(tag))
  })
})

// 切换标签选择
function toggleTag(tag) {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  } else {
    selectedTags.value.push(tag)
  }
}

// 导航到其他标签页
function navigateToTag(tag) {
  if (tag === tagId.value) return
  router.push(localizedRoute(`/tag/${tag}`))
}
</script>

<style scoped>
.tag-filter-btn {
  transition: all 0.2s;
}

.tag-filter-btn:hover {
  transform: translateY(-1px);
}

.tag-selected {
  outline: 2px solid rgb(59, 130, 246);
  outline-offset: 1px;
}
</style> 