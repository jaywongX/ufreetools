// 管理收藏夹功能的服务
const FAVORITES_STORAGE_KEY = 'userFavorites';

export const getFavorites = () => {
  try {
    const favorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
};

export const addToFavorites = (tool) => {
  try {
    const favorites = getFavorites();
    // 检查工具是否已经在收藏夹中
    if (!favorites.some(fav => fav.id === tool.id)) {
      favorites.push(tool);
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    }
    return favorites;
  } catch (error) {
    console.error('Error adding to favorites:', error);
    return getFavorites();
  }
};

export const removeFromFavorites = (toolId) => {
  try {
    let favorites = getFavorites();
    favorites = favorites.filter(tool => tool.id !== toolId);
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    return favorites;
  } catch (error) {
    console.error('Error removing from favorites:', error);
    return getFavorites();
  }
};

export const isToolFavorited = (toolId) => {
  try {
    const favorites = getFavorites();
    return favorites.some(tool => tool.id === toolId);
  } catch (error) {
    console.error('Error checking if tool is favorited:', error);
    return false;
  }
}; 