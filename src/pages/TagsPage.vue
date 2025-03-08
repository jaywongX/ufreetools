<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="mb-6 text-sm">
      <router-link to="/" class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
        首页
      </router-link>
      <span class="mx-2 text-gray-400">/</span>
      <span class="text-gray-700 dark:text-gray-300">标签云</span>
    </div>
    
    <!-- 页面标题 -->
    <div class="mb-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-3">标签云</h1>
      <p class="text-gray-600 dark:text-gray-300">
        发现{{ allTags.length }}个标签对应的{{allTools.length}}个工具
      </p>
    </div>
    
    <!-- 搜索标签 -->
    <div class="mb-8">
      <div class="relative max-w-md">
        <input 
          type="text" 
          v-model="tagSearchQuery" 
          placeholder="搜索标签..." 
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
    <div v-if="!tagSearchQuery">
      <!-- 热门标签 -->
      <section class="mb-10">
        <h2 class="text-xl font-bold mb-4">热门标签</h2>
        <div class="flex flex-wrap gap-3">
          <router-link 
            v-for="tag in popularTags" 
            :key="tag.id"
            :to="`/tag/${tag.id}`"
            class="tag-cloud-item"
            :style="{
              fontSize: `${getTagSize(tag)}rem`,
              opacity: getTagOpacity(tag)
            }"
          >
            <TagBadge :tag-id="tag.id" />
            <span class="ml-1 text-xs text-gray-500">{{ toolsByTag[tag.id].length }}</span>
          </router-link>
        </div>
      </section>
      
      <!-- 按类别分组的标签 -->
      <section v-for="(group, index) in tagGroups" :key="index" class="mb-10">
        <h2 class="text-xl font-bold mb-4">{{ group.name }}</h2>
        <div class="flex flex-wrap gap-3">
          <router-link 
            v-for="tag in group.tags" 
            :key="tag.id"
            :to="`/tag/${tag.id}`"
            class="tag-cloud-item"
          >
            <TagBadge :tag-id="tag.id" />
            <span class="ml-1 text-xs text-gray-500">{{ toolsByTag[tag.id].length }}</span>
          </router-link>
        </div>
      </section>
      
      <!-- 标签关系可视化 -->
      <section class="mb-10">
        <h2 class="text-xl font-bold mb-4">标签关联分析</h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            通过分析工具标签之间的关联性，发现相互关联最紧密的标签组合
          </p>
          
          <div class="tag-relationship-chart">
            <!-- 这里可以放一个简单的图表，显示标签之间的关联性 -->
            <!-- 由于涉及到图表库的使用，在这里我们只展示简化的关联数据 -->
            <div v-for="(pair, idx) in topTagPairs" :key="idx" class="mb-3 p-3 rounded bg-gray-50 dark:bg-gray-700">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <TagBadge :tag-id="pair.tags[0]" />
                  <span class="mx-2">+</span>
                  <TagBadge :tag-id="pair.tags[1]" />
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  {{ pair.count }}个工具
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <!-- 搜索标签结果 -->
    <div v-else>
      <h2 class="text-xl font-bold mb-4">搜索结果: "{{ tagSearchQuery }}"</h2>
      <div v-if="filteredTags.length > 0" class="flex flex-wrap gap-3">
        <router-link 
          v-for="tag in filteredTags" 
          :key="tag.id"
          :to="`/tag/${tag.id}`"
          class="tag-cloud-item"
        >
          <TagBadge :tag-id="tag.id" />
          <span class="ml-1 text-xs text-gray-500">{{ toolsByTag[tag.id].length }}</span>
        </router-link>
      </div>
      <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center">
        <p class="text-gray-600 dark:text-gray-400">没有找到匹配的标签</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import TagBadge from '../components/ui/TagBadge.vue'

// 注入全局数据
const allTools = inject('allTools')
const allTags = inject('allTags')
const toolsByTag = inject('toolsByTag')

// 标签搜索功能
const tagSearchQuery = ref('')

// 按搜索过滤标签
const filteredTags = computed(() => {
  if (!tagSearchQuery.value) return allTags.value
  
  const query = tagSearchQuery.value.toLowerCase().trim()
  return allTags.value.filter(tag => 
    tag.id.toLowerCase().includes(query) || 
    tag.name.toLowerCase().includes(query)
  )
})

// 按工具数量排序的热门标签
const popularTags = computed(() => {
  return [...allTags.value]
    .map(tag => ({
      ...tag,
      count: toolsByTag.value[tag.id]?.length || 0
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20) // 显示前20个热门标签
})

// 根据使用频率计算标签大小
function getTagSize(tag) {
  const count = toolsByTag.value[tag.id]?.length || 0
  const maxCount = Math.max(...Object.values(toolsByTag.value).map(tools => tools.length))
  const minSize = 0.9
  const maxSize = 1.5
  
  return minSize + (count / maxCount) * (maxSize - minSize)
}

// 根据使用频率计算标签透明度
function getTagOpacity(tag) {
  const count = toolsByTag.value[tag.id]?.length || 0
  const maxCount = Math.max(...Object.values(toolsByTag.value).map(tools => tools.length))
  const minOpacity = 0.7
  
  return minOpacity + (count / maxCount) * (1 - minOpacity)
}

// 标签分组
const tagGroups = computed(() => {
  // 简单示例：按颜色分组
  const groups = {}
  
  allTags.value.forEach(tag => {
    if (!groups[tag.color]) {
      groups[tag.color] = []
    }
    groups[tag.color].push(tag)
  })
  
  // 将分组转换为数组，并为每组添加名称
  const colorNames = {
    blue: '蓝色标签',
    green: '开发相关',
    red: '代码处理',
    yellow: '转换工具',
    purple: '图形设计',
    indigo: '文档相关',
    pink: '多媒体',
    gray: '其他标签',
    teal: '网络工具',
    orange: '性能相关',
    cyan: '数据处理',
    amber: '安全相关',
    lime: '文本相关',
    emerald: '压缩工具',
    rose: '生成工具'
  }
  
  return Object.entries(groups).map(([color, tags]) => ({
    name: colorNames[color] || `${color}类标签`,
    color,
    tags: tags.sort((a, b) => (toolsByTag.value[b.id]?.length || 0) - (toolsByTag.value[a.id]?.length || 0))
  })).sort((a, b) => b.tags.length - a.tags.length)
})

// 标签关联分析 - 寻找经常一起出现的标签对
const topTagPairs = computed(() => {
  const tagPairs = {}
  
  // 统计每个标签对出现的频率
  allTools.value.forEach(tool => {
    const tags = tool.tags || []
    
    // 遍历所有可能的标签对组合
    for (let i = 0; i < tags.length; i++) {
      for (let j = i + 1; j < tags.length; j++) {
        // 对标签ID进行排序，确保相同对的ID始终以相同顺序出现
        const pair = [tags[i], tags[j]].sort().join('_')
        tagPairs[pair] = (tagPairs[pair] || 0) + 1
      }
    }
  })
  
  // 转换为数组并按出现频率排序
  return Object.entries(tagPairs)
    .map(([pair, count]) => ({
      tags: pair.split('_'),
      count
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10) // 只显示前10个关联度最高的标签对
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

.tag-relationship-chart {
  max-height: 350px;
  overflow-y: auto;
}
</style> 