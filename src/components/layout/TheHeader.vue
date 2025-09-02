<template>
  <header class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
    <div class="h-16 flex items-center justify-between px-4">
      <!-- 左侧: 汉堡菜单和Logo -->
      <div class="flex items-center">
        <!-- 汉堡菜单按钮 -->
        <button @click="toggleSidebar"
          class="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none transition-transform duration-300 ease-in-out hidden md:block"
          :class="{ 'rotate-90': !sidebarOpen }"
          aria-label="sidebar button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all duration-300" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- 搜索框 -->
        <div class="relative flex-1 w-full md:w-80 lg:w-96 xl:w-[32rem]">
          <input type="text" v-model="searchQuery" @input="handleInput" @focus="handleFocus" @blur="handleBlur"
            @keydown.enter="performSearch" :placeholder="$t('header.search')"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light" />

          <!-- 搜索结果下拉框 -->
          <div v-if="showResults && (matchedTools.length > 0 || matchedTags.length > 0)"
            class="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <!-- 搜索结果内容 -->
          </div>
        </div>
      </div>

      <!-- 右侧操作区域 -->
      <div class="flex items-center space-x-4">
        <!-- 社交媒体分享按钮 -->
        <SocialShare />

        <!-- 主题切换按钮 -->
        <button @click="toggleDarkMode"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none" aria-label="切换主题">
          <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <!-- 添加捐赠按钮 -->
        <DonateButton class="ml-4 mr-2" />

        <!-- 提交工具 -->
        <router-link :to="localizedRoute('/submit-tool')"
          class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
          aria-label="submit-tool" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </router-link>

        <!-- 反馈链接 -->
        <router-link :to="localizedRoute('/feedback')"
          class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
          aria-label="feedback" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </router-link>

        <!-- 语言切换下拉菜单 -->
        <div class="relative ml-4">
          <button @click="toggleLanguageDropdown"
            class="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-all duration-300"
            aria-label="切换语言">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span class="text-sm font-medium">{{ currentLanguage.toUpperCase() }}</span>
            </div>
          </button>

          <div v-if="showLanguageDropdown" class="fixed inset-0 bg-black bg-opacity-20 z-[998]"
            @click="closeLanguageDropdown"></div>

          <transition name="fade">
            <div v-if="showLanguageDropdown" :class="[
              'bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 z-[999]',
              'absolute right-0 mt-2 w-48 rounded-lg'
            ]">
              <div class="p-2">
                <button v-for="lang in supportedLanguages" :key="lang.code" @click="switchLanguage(lang.code)"
                  class="flex items-center w-full px-4 py-4 rounded-md transition-colors duration-200 mb-1"
                  :class="{ 'bg-primary/10 text-primary dark:text-primary-light': currentLanguage === lang.code, 'hover:bg-gray-100 dark:hover:bg-gray-700': currentLanguage !== lang.code }">
                  <span class="text-sm font-medium text-gray-800 dark:text-gray-200">{{ lang.nativeName }}</span>
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, inject, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import DonateButton from '../common/DonateButton.vue'
import { setLanguage } from '../../main';
import SocialShare from '../common/SocialShare.vue'

const router = useRouter()
const route = useRoute()
const { locale } = useI18n()

// 注入
const sidebarOpen = inject('sidebarOpen')
const darkMode = inject('darkMode')
const allTools = inject('allTools', { value: [] })
const allTags = inject('allTags', { value: [] })
import { supportedLanguages, supportedLanguageCodes } from '../../config/languages';

// 搜索状态
const searchQuery = ref('')
const showResults = ref(false)

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
  // 1. 检查当前 <html> 是否有 'dark' 类，判断当前是否为暗色模式
  const isDark = document.documentElement.classList.contains('dark');

  // 2. 切换状态：如果有就移除，没有就添加
  if (isDark) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }

  // 3. 将当前状态（true/false）以字符串形式存入 localStorage
  const newMode = !isDark; // 新的状态
  darkMode.value = isDark;
  localStorage.setItem('darkMode', String(newMode));
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

function swapZhAndZhTW(arr) {
  const newArray = [...arr];
  const indexZh = newArray.indexOf('zh');
  const indexZhTW = newArray.indexOf('zh-TW');

  if (indexZh !== -1 && indexZhTW !== -1) {
    [newArray[indexZh], newArray[indexZhTW]] = [newArray[indexZhTW], newArray[indexZh]];
  }

  return newArray;
}

async function switchLanguage(langCode) {
  if (langCode === locale.value) return;

  const currentPath = route.path;

  let codes = swapZhAndZhTW(supportedLanguageCodes) 
  let supportedLanguageCodesWithOr = codes.join('|');
  
  // 构建一个正则表达式，用于匹配以 /zh、/en、/es、/zh-TW 等开头的部分
  const langPrefixRegex = new RegExp(`^\\/(${supportedLanguageCodesWithOr})`);

  // 使用这个正则替换掉路径中的语言部分
  const currentPathWithoutLang = currentPath.replace(langPrefixRegex, '');

  // 等待语言包加载完成
  await setLanguage(langCode, route.params.id);

  // 更新URL
  router.push(`/${langCode}${currentPathWithoutLang}`);

  // 关闭下拉菜单
  showLanguageDropdown.value = false;
  window.removeEventListener('click', handleClickOutside);
}

function closeLanguageDropdown() {
  showLanguageDropdown.value = false;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 640px) {

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
}
</style>