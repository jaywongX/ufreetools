/**
 * 工具使用历史记录服务
 * 使用 localStorage 存储用户最近使用过的工具
 */

// 存储键名
const HISTORY_KEY = 'ufreetools_history';
// 最大历史记录数量
const MAX_HISTORY_ITEMS = 6;

/**
 * 将工具添加到历史记录
 * @param {Object} tool 工具对象
 */
export function addToHistory(tool) {
  if (!tool || !tool.id) return;
  
  try {
    // 获取现有历史记录
    let history = getHistory();
    
    // 移除已存在的相同工具(如果有)
    history = history.filter(item => item.id !== tool.id);
    
    // 添加到最前面(最新的在前面)
    history.unshift({
      id: tool.id,
      name: tool.name,
      description: tool.description,
      icon: tool.icon,
      categoryId: tool.categoryId,
      tags: tool.tags,
      component: tool.component,
      timestamp: Date.now()
    });
    
    // 限制数量
    if (history.length > MAX_HISTORY_ITEMS) {
      history = history.slice(0, MAX_HISTORY_ITEMS);
    }
    
    // 保存回 localStorage
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('保存历史记录失败:', error);
  }
}

/**
 * 获取历史记录
 * @returns {Array} 工具历史记录数组
 */
export function getHistory() {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('读取历史记录失败:', error);
    return [];
  }
}

/**
 * 清除历史记录
 */
export function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
} 