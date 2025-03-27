<template>
  <header class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
    <div class="h-16 flex items-center justify-between px-4">
      <!-- 左侧: 汉堡菜单和Logo -->
      <div class="flex items-center">
        <!-- 汉堡菜单按钮 -->
        <button 
          @click="toggleSidebar"
          class="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none transition-transform duration-300 ease-in-out"
          :class="{ 'rotate-90': !sidebarOpen }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <!-- 搜索框 -->
        <div class="relative flex-1 max-w-xl">
          <input 
            type="text" 
            v-model="searchQuery"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @keydown.enter="performSearch"
            :placeholder="$t('header.search')"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
          />
          
          <!-- 搜索结果下拉框 -->
          <div v-if="showResults && (matchedTools.length > 0 || matchedTags.length > 0)" 
               class="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <!-- 搜索结果内容 -->
          </div>
        </div>
      </div>
      
      <!-- 右侧操作区域 -->
      <div class="flex items-center space-x-4">
        <!-- 主题切换按钮 -->
        <button 
          @click="toggleDarkMode" 
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          aria-label="切换主题"
        >
          <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
        
        <!-- 反馈链接 -->
        <router-link 
          :to="localizedRoute('/feedback')" 
          class="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
        >
          {{ $t('header.feedback') }}
        </router-link>
        
        <!-- 关于我们链接 -->
        <router-link 
          :to="localizedRoute('/about')" 
          class="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
        >
          {{ $t('header.about') }}
        </router-link>
        
        <!-- 语言切换下拉菜单 -->
        <div class="relative ml-4">
          <button 
            @click="toggleLanguageDropdown" 
            class="flex items-center space-x-1 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 language-switcher-button"
          >
            <span>{{ getCurrentLanguageName() }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div v-if="showLanguageDropdown" class="absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <button
              v-for="lang in availableLanguages"
              :key="lang.code"
              @click="switchLanguage(lang.code)" 
              class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 language-option"
              :class="{'text-primary dark:text-primary-light font-medium': currentLanguage === lang.code}"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, inject, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import TagBadge from '../ui/TagBadge.vue'

const router = useRouter()
const route = useRoute()
const { locale } = useI18n()

// 注入
const sidebarOpen = inject('sidebarOpen')
const darkMode = inject('darkMode')
const allTools = inject('allTools', { value: [] })
const allTags = inject('allTags', { value: [] })

// 搜索状态
const searchQuery = ref('')
const showResults = ref(false)

// 语言切换
const availableLanguages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' }
]

const currentLanguage = computed(() => locale.value)

// 监听搜索框值的变化
watch(searchQuery, (newValue) => {
  if (!newValue.trim()) {
    router.push('/')
    showResults.value = false
  }
})

// 切换侧边栏
function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

// 切换暗黑模式
function toggleDarkMode() {
  darkMode.value = !darkMode.value
  
  // 保存到 localStorage
  localStorage.setItem('darkMode', darkMode.value ? 'true' : 'false')
  
  // 更新 HTML 元素的 class
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// 处理键盘事件
const handleKeyDown = (event) => {
  // 按下 Ctrl+K 或 Command+K 打开搜索框
  if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
    event.preventDefault()
    document.querySelector('input[type=text]')?.focus()
  }
}

// 在组件挂载后添加全局事件监听器
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

// 在组件卸载前移除全局事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

// 匹配的标签
const matchedTags = computed(() => {
  if (!searchQuery.value || !allTags?.value) return []
  
  const query = searchQuery.value.toLowerCase().trim()
  
  return allTags.value
    .filter(tag => tag.name.toLowerCase().includes(query) || tag.id.toLowerCase().includes(query))
    .sort((a, b) => {
      // 精确匹配排在前面
      const aExact = a.name.toLowerCase() === query || a.id.toLowerCase() === query
      const bExact = b.name.toLowerCase() === query || b.id.toLowerCase() === query
      
      if (aExact && !bExact) return -1
      if (!aExact && bExact) return 1
      return 0
    })
})

// 匹配的工具
const matchedTools = computed(() => {
  if (!searchQuery.value || !allTools?.value) return []
  
  const query = searchQuery.value.toLowerCase().trim()
  
  // 获取匹配标签ID列表
  const tagIds = matchedTags.value.map(tag => tag.id)
  
  return allTools.value
    .filter(tool => {
      const nameMatch = tool.name && tool.name.toLowerCase().includes(query)
      const descMatch = tool.description && tool.description.toLowerCase().includes(query)
      const tagMatch = tool.tags && Array.isArray(tool.tags) && tool.tags.some(tagId => tagIds.includes(tagId))
      
      return nameMatch || descMatch || tagMatch
    })
    .sort((a, b) => {
      // 精确匹配名称的排在前面
      const aExact = a.name.toLowerCase() === query
      const bExact = b.name.toLowerCase() === query
      
      if (aExact && !bExact) return -1
      if (!aExact && bExact) return 1
      return 0
    })
})

// 执行搜索
function performSearch() {
  if (searchQuery.value.trim()) {
    router.push(localizedRoute(`/search?q=${encodeURIComponent(searchQuery.value.trim())}`))
    showResults.value = false
  }
}

function handleInput() {
  showResults.value = true
}

function handleFocus() {
  showResults.value = true
}

function handleBlur() {
  // 使用 window.setTimeout 而不是直接使用 setTimeout
  window.setTimeout(() => {
    showResults.value = false
  }, 200)
}

// 语言切换下拉菜单状态
const showLanguageDropdown = ref(false);

function toggleLanguageDropdown() {
  showLanguageDropdown.value = !showLanguageDropdown.value;
  
  if (showLanguageDropdown.value) {
    // 添加点击外部区域关闭下拉菜单的事件监听
    window.setTimeout(() => {
      window.addEventListener('click', handleClickOutside);
    }, 0);
  }
}

function handleClickOutside(event) {
  const dropdown = document.querySelector('.language-option');
  const button = document.querySelector('.language-switcher-button');
  
  if (!dropdown?.contains(event.target) && !button?.contains(event.target)) {
    showLanguageDropdown.value = false;
    window.removeEventListener('click', handleClickOutside);
  }
}

function switchLanguage(langCode) {
  if (langCode === locale.value) return;
  
  const currentPath = route.path;
  const currentPathWithoutLang = currentPath.replace(/^\/(zh|en)/, '');
  
  // 设置i18n语言
  locale.value = langCode;
  
  // 更新URL
  router.push(`/${langCode}${currentPathWithoutLang}`);
  
  // 保存用户的语言选择
  localStorage.setItem('userLanguage', langCode);
  
  // 关闭下拉菜单
  showLanguageDropdown.value = false;
  window.removeEventListener('click', handleClickOutside);
}

function closeLanguageDropdown(event) {
  // 延迟执行关闭操作，确保语言切换动作能够完成
  window.setTimeout(() => {
    showLanguageDropdown.value = false;
  }, 100);
}

function getCurrentLanguageName() {
  const lang = availableLanguages.find(l => l.code === currentLanguage.value);
  return lang ? lang.name : 'Language';
}

function localizedRoute(path) {
  const lang = locale.value;
  return `/${lang}${path}`;
}
</script>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
}

/* 添加悬停效果 */
button:hover svg {
  transform: scale(1.1);
}

.language-switcher {
  display: flex;
  gap: 10px;
  margin-left: 20px;
}

.language-link {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
}

.language-link.active {
  background-color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
}
</style>