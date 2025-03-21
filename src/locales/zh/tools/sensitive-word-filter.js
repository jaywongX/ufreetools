export default {
  name: '敏感词过滤器',
  description: '过滤、检测并替换文本内容中的敏感词',
  input: {
    title: '输入文本',
    placeholder: '输入或粘贴要检查敏感词的文本...',
    loadSample: '加载示例',
    clearInput: '清除输入',
    uploadFile: '上传文本文件'
  },
  output: {
    title: '过滤后文本',
    original: '原始文本',
    filtered: '过滤后文本',
    statistics: '统计数据',
    copyOutput: '复制过滤后文本',
    clearOutput: '清除输出',
    download: '下载过滤后文本'
  },
  options: {
    title: '过滤选项',
    filterMode: '过滤模式',
    caseSensitive: '区分大小写',
    wholeWordOnly: '仅完整词',
    customReplacement: '自定义替换',
    replacementChar: '替换字符',
    highlightWords: '高亮敏感词',
    customDictionary: '自定义词典',
    importDictionary: '导入词典',
    exportDictionary: '导出词典'
  },
  filterModes: {
    replace: '替换敏感词',
    highlight: '高亮敏感词',
    remove: '移除敏感词',
    detect: '仅检测'
  },
  dictionary: {
    title: '词汇词典',
    add: '添加词汇',
    remove: '移除',
    clear: '清空词典',
    wordInput: '输入要添加的词',
    categories: '分类',
    severity: '严重程度',
    bulkAdd: '批量添加',
    search: '搜索词典'
  },
  categories: {
    profanity: '脏话',
    slurs: '诽谤',
    adult: '成人内容',
    offensive: '冒犯性内容',
    violence: '暴力',
    discrimination: '歧视',
    personal: '个人信息',
    custom: '自定义'
  },
  severityLevels: {
    low: '低',
    medium: '中',
    high: '高',
    critical: '严重'
  },
  statistics: {
    totalWords: '总词数',
    sensitiveWords: '敏感词数',
    uniqueSensitiveWords: '唯一敏感词数',
    severityBreakdown: '严重程度分布',
    categoryBreakdown: '类别分布',
    cleanlinessScore: '纯净度分数'
  },
  actions: {
    filter: '过滤文本',
    clearAll: '全部清除',
    copyFiltered: '复制过滤后文本',
    downloadReport: '下载报告',
    resetSettings: '重置设置'
  },
  messages: {
    filterSuccess: '文本过滤成功',
    noSensitiveWords: '未发现敏感词',
    wordAdded: '词汇已添加到词典',
    wordRemoved: '词汇已从词典中移除',
    dictionaryCleared: '词典已清空',
    dictionaryImported: '词典已导入',
    dictionaryExported: '词典已导出',
    emptyText: '请输入要过滤的文本'
  }
} 