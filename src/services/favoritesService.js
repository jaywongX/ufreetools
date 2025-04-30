// 管理收藏夹功能的服务
const FAVORITES_STORAGE_KEY = 'userFavorites';

// 获取所有收藏
export const getFavorites = () => {
  try {
    const favorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
};

// 添加工具到收藏夹
export const addToFavorites = (toolData) => {
  try {
    // 首先获取当前收藏
    const favorites = getFavorites();
    
    // 检查工具是否已经在收藏夹中
    if (!favorites.some(fav => fav.id === toolData.id)) {
      // 创建一个新的普通对象(非响应式)
      const simpleTool = {
        id: toolData.id,
        name: toolData.name || '',
        description: toolData.description || '',
        tags: Array.isArray(toolData.tags) ? 
          toolData.tags.filter(Boolean) : []
      };
      
      // 将新工具添加到收藏夹
      favorites.push(simpleTool);
      
      // 保存到localStorage
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Error adding to favorites:', error);
  }
};

// 从收藏夹中移除工具
export const removeFromFavorites = (toolId) => {
  try {
    // 获取当前收藏并过滤掉要删除的工具
    let favorites = getFavorites();
    favorites = favorites.filter(tool => tool.id !== toolId);
    
    // 保存更新后的收藏夹
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error removing from favorites:', error);
  }
};

// 检查工具是否已收藏
export const isToolFavorited = (toolId) => {
  try {
    const favorites = getFavorites();
    return Boolean(favorites.find(tool => tool.id === toolId));
  } catch (error) {
    console.error('Error checking if tool is favorited:', error);
    return false;
  }
}; 