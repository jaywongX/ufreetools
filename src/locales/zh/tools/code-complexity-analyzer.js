export default {
  name: '代码复杂度分析器',
  description: '分析代码复杂度指标，如圈复杂度和可维护性',
  languages: {
    title: '语言',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    go: 'Go',
    ruby: 'Ruby'
  },
  metrics: {
    title: '指标',
    cyclomaticComplexity: '圈复杂度',
    maintainabilityIndex: '可维护性指数',
    halsteadVolume: 'Halstead 体积',
    halsteadDifficulty: 'Halstead 难度',
    halsteadEffort: 'Halstead 工作量',
    halsteadTime: 'Halstead 时间',
    halsteadBugs: 'Halstead 缺陷',
    linesOfCode: '代码行数',
    logicalLoc: '逻辑代码行',
    commentLines: '注释行数',
    commentRatio: '注释比例',
    operatorCount: '运算符数量',
    operandCount: '操作数数量',
    functionCount: '函数数量',
    maxNestingDepth: '最大嵌套深度',
    averageDepth: '平均深度'
  },
  results: {
    title: '分析结果',
    file: '文件',
    method: '方法',
    score: '得分',
    complexity: '复杂度',
    rating: '评级',
    loc: '行数',
    issues: '问题',
    summary: '摘要',
    details: '详情',
    noResults: '暂无分析结果。输入代码并点击"分析代码"查看指标。'
  },
  ratings: {
    excellent: '优秀',
    good: '良好',
    moderate: '中等',
    poor: '较差',
    veryPoor: '很差'
  },
  actions: {
    analyze: '分析代码',
    clearCode: '清除代码',
    uploadFile: '上传文件',
    copy: '复制结果',
    download: '下载报告'
  },
  messages: {
    analyzing: '正在分析代码...',
    analysisComplete: '分析完成',
    analysisError: '分析代码出错',
    copied: '已复制到剪贴板！',
    emptyCode: '请输入要分析的代码',
    fileTooBig: '文件过大（最大1MB）',
    invalidFile: '无效或不支持的文件类型'
  },
  tips: {
    title: '使用提示',
    cyclomaticComplexity: '圈复杂度是衡量源代码中独立路径数量的指标。',
    maintainability: '可维护性指数表示代码的可维护性，值越高越好。',
    recommendations: '为了更好的代码质量，请尽量保持低复杂度和高可维护性得分。',
    refactoring: '考虑重构复杂度得分高于10的函数。'
  }
} 