// 搜索结果计算属性
const searchResults = computed(() => {
  if (!searchQuery.value) return []
  
  return allTools.value.filter(tool => {
    const query = searchQuery.value.toLowerCase();
    const nameMatch = tool.name && tool.name.toLowerCase().includes(query);
    const descMatch = tool.description && tool.description.toLowerCase().includes(query);
    const tagMatch = tool.tags && Array.isArray(tool.tags) && tool.tags.some(tag => 
      tag && typeof tag === 'string' && tag.toLowerCase().includes(query)
    );
    
    return nameMatch || descMatch || tagMatch;
  })
})

// 匹配的标签
const matchedTags = computed(() => {
  if (!searchQuery.value) return []
  
  return allTags.value.filter(tag => {
    return tag && tag.name && tag.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
}) 