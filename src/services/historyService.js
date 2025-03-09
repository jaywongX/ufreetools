// 最大历史记录数量
const MAX_HISTORY = 10
const STORAGE_KEY = 'tool_history'

// 获取历史记录
export function getHistory() {
  try {
    const history = localStorage.getItem(STORAGE_KEY)
    return history ? JSON.parse(history) : []
  } catch (e) {
    console.error('读取历史记录失败:', e)
    return []
  }
}

// 添加工具到历史记录
export function addToHistory(tool) {
  try {
    const history = getHistory()
    
    // 移除已存在的相同工具（如果有）
    const filteredHistory = history.filter(item => item.id !== tool.id)
    
    // 在开头添加新工具
    filteredHistory.unshift({
      id: tool.id,
      name: tool.name,
      description: tool.description,
      category: tool.category,
      categoryId: tool.categoryId,
      icon: tool.icon,
      tags: tool.tags,
      timestamp: Date.now()
    })
    
    // 保持历史记录在最大数量以内
    const newHistory = filteredHistory.slice(0, MAX_HISTORY)
    
    // 保存到本地存储
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory))
    
    return newHistory
  } catch (e) {
    console.error('保存历史记录失败:', e)
    return []
  }
}

// 清除历史记录
export function clearHistory() {
  try {
    localStorage.removeItem(STORAGE_KEY)
    return true
  } catch (e) {
    console.error('清除历史记录失败:', e)
    return false
  }
} 