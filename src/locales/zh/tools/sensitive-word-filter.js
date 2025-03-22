export default {
  name: '敏感词过滤器',
  description: '检测和过滤文本中的敏感词，支持自定义敏感词库和过滤规则',
  input: {
    title: '输入文本',
    placeholder: '请输入需要检测的文本内容...',
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
  filterOptions: {
    title: '过滤模式',
    modes: {
      asterisk: '替换为 *',
      custom: '自定义替换字符',
      remove: '删除敏感词'
    },
    replaceChar: {
      title: '替换字符',
      placeholder: '输入替换字符'
    }
  },
  customWords: {
    title: '自定义敏感词库',
    addWord: '添加词语',
    addPrompt: '请输入要添加的敏感词：',
    removeWord: '移除'
  },
  actions: {
    filter: '开始过滤',
    reset: '重置',
    processing: '处理中...',
    clearAll: '全部清除',
    copyFiltered: '复制过滤后文本',
    downloadReport: '下载报告',
    resetSettings: '重置设置'
  },
  results: {
    title: '过滤结果',
    tabs: {
      filteredResult: '过滤结果',
      detectionReport: '检测报告'
    },
    filteredText: {
      title: '过滤后的文本',
      copy: '复制结果',
      empty: '无过滤结果显示'
    },
    statistics: {
      detectedCount: '检测到的敏感词数量',
      retentionRate: '文本保留率',
      totalWords: '文本总字数'
    },
    detectedWords: {
      title: '检测到的敏感词',
      empty: '未检测到敏感词'
    }
  },
  messages: {
    copied: '已复制到剪贴板',
    copyFailed: '复制失败，请手动复制',
    noInput: '请输入要过滤的文本',
    inputTooLong: '输入文本过长',
    wordAdded: '词语已添加到敏感词库',
    wordExists: '此词已存在于敏感词库中',
    wordRemoved: '词语已从敏感词库中移除',
    filterSuccess: '文本过滤成功',
    noSensitiveWords: '未发现敏感词',
    dictionaryCleared: '词典已清空',
    dictionaryImported: '词典已导入',
    dictionaryExported: '词典已导出',
    emptyText: '请输入要过滤的文本'
  }
} 