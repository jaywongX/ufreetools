export default {
  name: '代码复杂度分析器',
  description: '分析代码复杂度指标，如圈复杂度和可维护性',
  title: '代码复杂度分析',
  subtitle: '分析JavaScript代码的各项复杂度指标，包括圈复杂度、Halstead度量和维护指数',

  input: {
    title: '输入JavaScript代码',
    placeholder: '在此粘贴JavaScript代码...',
    loadExample: '加载示例',
    clear: '清空'
  },

  options: {
    title: '分析选项',
    cyclomaticComplexity: '计算圈复杂度（McCabe复杂度）',
    halsteadMetrics: '计算Halstead度量（程序长度、词汇量、体积等）',
    maintainabilityIndex: '计算维护指数（代码可维护性指标）',
    functionDetails: '显示函数级别的分析结果'
  },

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
    averageDepth: '平均深度',
    halstead: {
      title: 'Halstead度量',
      length: '程序长度',
      vocabulary: '词汇量',
      volume: '程序体积',
      difficulty: '难度'
    }
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
    summary: '整体代码摘要',
    details: '详情',
    noResults: '暂无分析结果。输入代码并点击"分析代码"查看指标。',
    avgCyclomaticComplexity: '平均圈复杂度',
    maintainabilityIndex: '维护指数',
    linesOfCode: '代码行数',
    functionDetails: '函数级别分析',
    functionName: '函数名称',
    parameters: '参数个数',
    anonymousFunction: '(匿名函数)'
  },

  ratings: {
    excellent: '优秀',
    good: '良好',
    moderate: '中等',
    poor: '较差',
    veryPoor: '很差'
  },

  complexity: {
    title: '复杂度指标解释：',
    low: '低复杂度 - 代码简单清晰，易于理解和维护',
    medium: '中等复杂度 - 代码稍有复杂，但仍然可接受',
    high: '高复杂度 - 代码过于复杂，应考虑重构'
  },

  actions: {
    analyze: '分析代码',
    analyzing: '分析中...',
    clearCode: '清除代码',
    uploadFile: '上传文件',
    copy: '复制结果',
    download: '下载报告',
    export: '导出报告 (JSON)'
  },

  messages: {
    analyzing: '正在分析代码...',
    analysisComplete: '分析完成',
    analysisError: '分析代码出错',
    analysisFailure: '无法分析代码: {error}',
    copied: '已复制到剪贴板！',
    emptyCode: '请输入要分析的代码',
    fileTooBig: '文件过大（最大1MB）',
    invalidFile: '无效或不支持的文件类型',
    errorTitle: '分析错误'
  },

  tips: {
    title: '使用提示',
    cyclomaticComplexity: '圈复杂度是衡量源代码中独立路径数量的指标。',
    maintainability: '可维护性指数表示代码的可维护性，值越高越好。',
    recommendations: '为了更好的代码质量，请尽量保持低复杂度和高可维护性得分。',
    refactoring: '考虑重构复杂度得分高于10的函数。'
  }
}; 