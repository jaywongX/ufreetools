export default {
  name: '敏感詞過濾器',
  description: '檢測和過濾文本中的敏感詞，支持自定義敏感詞庫和過濾規則',

  input: {
    title: '輸入文本',
    placeholder: '請輸入需要檢測的文本內容...',
    loadSample: '加載示例',
    clearInput: '清除輸入',
    uploadFile: '上傳文本文件'
  },

  output: {
    title: '過濾後文本',
    original: '原始文本',
    filtered: '過濾後文本',
    statistics: '統計數據',
    copyOutput: '複製過濾後文本',
    clearOutput: '清除輸出',
    download: '下載過濾後文本'
  },

  options: {
    title: '過濾選項',
    filterMode: '過濾模式',
    caseSensitive: '區分大小寫',
    wholeWordOnly: '僅完整詞',
    customReplacement: '自定義替換',
    replacementChar: '替換字符',
    highlightWords: '高亮敏感詞',
    customDictionary: '自定義詞典',
    importDictionary: '導入詞典',
    exportDictionary: '導出詞典'
  },

  filterModes: {
    replace: '替換敏感詞',
    highlight: '高亮敏感詞',
    remove: '移除敏感詞',
    detect: '僅檢測'
  },

  dictionary: {
    title: '詞彙詞典',
    add: '添加詞彙',
    remove: '移除',
    clear: '清空詞典',
    wordInput: '輸入要添加的詞',
    categories: '分類',
    severity: '嚴重程度',
    bulkAdd: '批量添加',
    search: '搜索詞典'
  },

  categories: {
    profanity: '髒話',
    slurs: '誹謗',
    adult: '成人內容',
    offensive: '冒犯性內容',
    violence: '暴力',
    discrimination: '歧視',
    personal: '個人信息',
    custom: '自定義'
  },

  severityLevels: {
    low: '低',
    medium: '中',
    high: '高',
    critical: '嚴重'
  },

  statistics: {
    totalWords: '總詞數',
    sensitiveWords: '敏感詞數',
    uniqueSensitiveWords: '唯一敏感詞數',
    severityBreakdown: '嚴重程度分佈',
    categoryBreakdown: '類別分佈',
    cleanlinessScore: '純淨度分數'
  },

  filterOptions: {
    title: '過濾模式',
    modes: {
      asterisk: '替換為 *',
      custom: '自定義替換字符',
      remove: '刪除敏感詞'
    },
    replaceChar: {
      title: '替換字符',
      placeholder: '輸入替換字符'
    }
  },

  customWords: {
    title: '自定義敏感詞庫',
    addWord: '添加詞語',
    addPrompt: '請輸入要添加的敏感詞：',
    removeWord: '移除'
  },

  actions: {
    filter: '開始過濾',
    reset: '重置',
    processing: '處理中...',
    clearAll: '全部清除',
    copyFiltered: '複製過濾後文本',
    downloadReport: '下載報告',
    resetSettings: '重置設置'
  },

  results: {
    title: '過濾結果',
    tabs: {
      filteredResult: '過濾結果',
      detectionReport: '檢測報告'
    },
    filteredText: {
      title: '過濾後的文本',
      copy: '複製結果',
      empty: '無過濾結果顯示'
    },
    statistics: {
      detectedCount: '檢測到的敏感詞數量',
      retentionRate: '文本保留率',
      totalWords: '文本總字數'
    },
    detectedWords: {
      title: '檢測到的敏感詞',
      empty: '未檢測到敏感詞'
    }
  },

  messages: {
    copied: '已複製到剪貼板',
    copyFailed: '複製失敗，請手動複製',
    noInput: '請輸入要過濾的文本',
    inputTooLong: '輸入文本過長',
    wordAdded: '詞語已添加到敏感詞庫',
    wordExists: '此詞已存在於敏感詞庫中',
    wordRemoved: '詞語已從敏感詞庫中移除',
    filterSuccess: '文本過濾成功',
    noSensitiveWords: '未發現敏感詞',
    dictionaryCleared: '詞典已清空',
    dictionaryImported: '詞典已導入',
    dictionaryExported: '詞典已導出',
    emptyText: '請輸入要過濾的文本'
  }
};
