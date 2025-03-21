export default {
  name: '图表示例',
  description: '浏览并使用各种图表示例满足不同的建模需求',
  categories: {
    title: '分类',
    flowcharts: '流程图',
    uml: 'UML图表',
    network: '网络图',
    architecture: '架构图',
    entity: '实体关系图',
    sequence: '时序图',
    mindmaps: '思维导图',
    gantt: '甘特图',
    other: '其他图表'
  },
  actions: {
    search: '搜索示例',
    filter: '按类别筛选',
    sortBy: '排序方式',
    useExample: '使用此示例',
    viewFull: '查看全尺寸',
    copyCode: '复制代码',
    addToFavorites: '添加到收藏',
    removeFavorite: '从收藏中移除'
  },
  sortOptions: {
    popularity: '流行度',
    newest: '最新优先',
    alphabetical: '字母顺序',
    complexity: '复杂度'
  },
  exampleDetail: {
    title: '示例详情',
    description: '描述',
    syntax: '语法',
    codeView: '代码视图',
    diagramView: '图表视图',
    complexity: '复杂度',
    tags: '标签',
    relatedExamples: '相关示例'
  },
  complexityLevels: {
    beginner: '初学者',
    intermediate: '中级',
    advanced: '高级'
  },
  messages: {
    copied: '示例代码已复制到剪贴板',
    added: '已添加到收藏',
    removed: '已从收藏中移除',
    noResults: '没有符合您搜索条件的示例',
    loading: '加载示例中...'
  },
  filters: {
    all: '所有类别',
    favorites: '仅收藏',
    recently: '最近查看'
  }
} 