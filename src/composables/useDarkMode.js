import { ref, watch, onMounted } from 'vue'

export function useDarkMode() {
  const isDarkMode = ref(false)

  // 从本地存储加载主题偏好
  onMounted(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    isDarkMode.value = storedTheme === 'dark' || 
      (!storedTheme && prefersDark)
    
    updateTheme()
  })

  // 监视主题变化并更新
  watch(isDarkMode, () => {
    updateTheme()
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
  })

  // 更新DOM中的暗色模式类
  function updateTheme() {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // 切换主题
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
  }

  return {
    isDarkMode,
    toggleDarkMode
  }
}