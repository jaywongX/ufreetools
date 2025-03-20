export default {
  name: '代码复杂度分析',
  description: '分析代码复杂度指标，如圈复杂度和可维护性指数',
  options: {
    language: '语言',
    includeFunctions: '显示函数指标',
    includeClasses: '显示类指标',
    includeComments: '在分析中包含注释',
    thresholds: '复杂度阈值'
  },
  metrics: {
    cyclomaticComplexity: '圈复杂度',
    maintainabilityIndex: '可维护性指数',
    linesOfCode: '代码行数',
    commentRatio: '注释比例',
    halsteadVolume: '霍尔斯特德体积',
    sourceLines: '源代码行'
  },
  actions: {
    analyze: '分析代码',
    clear: '清除',
    copy: '复制结果',
    download: '下载报告',
    upload: '上传文件'
  },
  messages: {
    copied: '已复制到剪贴板！',
    analyzeSuccess: '代码分析完成',
    analyzeError: '分析代码时出错',
    complexityLow: '低复杂度 - 良好！',
    complexityMedium: '中等复杂度 - 需要监控',
    complexityHigh: '高复杂度 - 建议重构'
  }
} 