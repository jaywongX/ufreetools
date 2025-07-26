export default {
  name: '代碼複雜度分析器',
  description: '分析代碼複雜度指標，如圈複雜度和可維護性',
  title: '代碼複雜度分析',
  subtitle: '分析JavaScript代碼的各項複雜度指標，包括圈複雜度、Halstead度量和維護指數',

  input: {
    title: '輸入JavaScript代碼',
    placeholder: '在此粘貼JavaScript代碼...',
    loadExample: '加載示例',
    clear: '清空'
  },

  options: {
    title: '分析選項',
    cyclomaticComplexity: '計算圈複雜度（McCabe複雜度）',
    halsteadMetrics: '計算Halstead度量（程序長度、詞彙量、體積等）',
    maintainabilityIndex: '計算維護指數（代碼可維護性指標）',
    functionDetails: '顯示函數級別的分析結果'
  },

  languages: {
    title: '語言',
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
    title: '指標',
    cyclomaticComplexity: '圈複雜度',
    maintainabilityIndex: '可維護性指數',
    halsteadVolume: 'Halstead 體積',
    halsteadDifficulty: 'Halstead 難度',
    halsteadEffort: 'Halstead 工作量',
    halsteadTime: 'Halstead 時間',
    halsteadBugs: 'Halstead 缺陷',
    linesOfCode: '代碼行數',
    logicalLoc: '邏輯代碼行',
    commentLines: '註釋行數',
    commentRatio: '註釋比例',
    operatorCount: '運算符數量',
    operandCount: '操作數數量',
    functionCount: '函數數量',
    maxNestingDepth: '最大嵌套深度',
    averageDepth: '平均深度',
    halstead: {
      title: 'Halstead度量',
      length: '程序長度',
      vocabulary: '詞彙量',
      volume: '程序體積',
      difficulty: '難度'
    }
  },

  results: {
    title: '分析結果',
    file: '文件',
    method: '方法',
    score: '得分',
    complexity: '複雜度',
    rating: '評級',
    loc: '行數',
    issues: '問題',
    summary: '整體代碼摘要',
    details: '詳情',
    noResults: '暫無分析結果。輸入代碼並點擊"分析代碼"查看指標。',
    avgCyclomaticComplexity: '平均圈複雜度',
    maintainabilityIndex: '維護指數',
    linesOfCode: '代碼行數',
    functionDetails: '函數級別分析',
    functionName: '函數名稱',
    parameters: '參數個數',
    anonymousFunction: '(匿名函數)'
  },

  ratings: {
    excellent: '優秀',
    good: '良好',
    moderate: '中等',
    poor: '較差',
    veryPoor: '很差'
  },

  complexity: {
    title: '複雜度指標解釋：',
    low: '低複雜度 - 代碼簡單清晰，易於理解和維護',
    medium: '中等複雜度 - 代碼稍有複雜，但仍然可接受',
    high: '高複雜度 - 代碼過於複雜，應考慮重構'
  },

  actions: {
    analyze: '分析代碼',
    analyzing: '分析中...',
    clearCode: '清除代碼',
    uploadFile: '上傳文件',
    copy: '複製結果',
    download: '下載報告',
    export: '導出報告 (JSON)'
  },

  messages: {
    analyzing: '正在分析代碼...',
    analysisComplete: '分析完成',
    analysisError: '分析代碼出錯',
    analysisFailure: '無法分析代碼: {error}',
    copied: '已複製到剪貼板！',
    emptyCode: '請輸入要分析的代碼',
    fileTooBig: '文件過大（最大1MB）',
    invalidFile: '無效或不支持的文件類型',
    errorTitle: '分析錯誤'
  },

  tips: {
    title: '使用提示',
    cyclomaticComplexity: '圈複雜度是衡量源代碼中獨立路徑數量的指標。',
    maintainability: '可維護性指數表示代碼的可維護性，值越高越好。',
    recommendations: '為了更好的代碼質量，請盡量保持低複雜度和高可維護性得分。',
    refactoring: '考慮重構複雜度得分高於10的函數。'
  }
};