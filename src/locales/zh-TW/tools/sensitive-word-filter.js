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
  },
  article: {
    title: '敏感詞過濾器：全面的文本內容過濾工具',
    functionality: {
      title: '工具功能與特點',
      description: '<strong>敏感詞過濾器</strong>是一款強大的文本處理工具，專為識別和過濾文本中的敏感、不適當或冒犯性內容而設計。它使用先進的模式匹配算法來檢測潛在問題詞彙和短語，然後根據您的偏好自動替換或刪除它們。這款文本過濾工具支持自定義詞典、多種過濾模式，並提供檢測到的敏感內容的詳細統計分析。'
    },
    useCases: {
      title: '實際應用和使用場景',
      list: [
        '<strong>網站內容審核</strong>：自動篩選用戶生成的內容，如評論、論壇帖子和評論，以維護安全和尊重的在線環境。',
        '<strong>教育材料審查</strong>：確保教學材料和學生提交的作業不含不適當語言，適用於課堂或教育平台。',
        '<strong>客戶服務內容篩選</strong>：過濾對外通信，驗證它們是否保持專業標準並避免潛在的冒犯性語言。',
        '<strong>社交媒體管理</strong>：在社交媒體平台上發布前審查和清理內容，防止違反平台政策。',
        '<strong>文本數據準備</strong>：通過刪除冒犯性或有偏見的語言來清理用於機器學習和分析的文本數據集。',
        '<strong>企業通信合規</strong>：驗證內部和外部通信是否符合企業語言政策和專業標準。'
      ]
    },
    faq: {
      title: '關於敏感詞過濾的常見問題',
      items: [
        {
          question: '敏感詞檢測的準確性如何？',
          answer: '<strong>敏感詞檢測</strong>系統採用精確的模式匹配算法，具有很高的準確性。但是，上下文感知過濾（理解詞語背後的含義）仍然具有挑戰性。該工具允許您查看檢測到的詞語並自定義詞典，以提高特定需求的準確性。'
        },
        {
          question: '我可以創建並保存自己的自定義詞庫嗎？',
          answer: '是的，<strong>自定義敏感詞庫</strong>功能允許您添加特定於您內容需求的敏感詞。您可以輕鬆地將詞語添加到過濾器中，這些詞語將在過濾過程中應用。'
        },
        {
          question: '有哪些過濾模式可用？',
          answer: '該工具提供多種<strong>文本過濾模式</strong>：用星號(*)替換敏感詞、使用自定義替換字符或從文本中完全刪除敏感詞。您可以選擇最適合您需求的模式。'
        },
        {
          question: '這個工具能處理不同的語言嗎？',
          answer: '是的，<strong>多語言敏感詞過濾器</strong>適用於各種語言，儘管其效果可能因語言而異。該工具主要專注於字符模式匹配，適用於不同的書寫系統。'
        },
        {
          question: '如何處理大量文本？',
          answer: '對於<strong>批量文本過濾</strong>，只需將內容粘貼到輸入區域即可。該工具經過優化，可以高效處理大量文本，儘管極大的文本可能需要更多處理時間。對於非常大的文檔，考慮分段處理它們。'
        }
      ]
    },
    tutorial: {
      title: '使用敏感詞過濾器的步驟指南',
      steps: [
        '<strong>輸入文本</strong>：首先在輸入文本區域輸入或粘貼您想要過濾的文本。',
        '<strong>配置過濾選項</strong>：選擇您偏好的過濾模式（替換為星號、自定義字符或刪除詞語）。',
        '<strong>自定義敏感詞庫</strong>（可選）：通過點擊"添加詞語"按鈕，添加您希望檢測和過濾的特定詞語。',
        '<strong>開始過濾</strong>：點擊"開始過濾"按鈕處理您的文本並檢測敏感內容。',
        '<strong>查看結果</strong>：在"過濾結果"選項卡中檢查過濾後的文本，並在"檢測報告"選項卡中查看統計分析。',
        '<strong>複製或保存結果</strong>：將過濾後的文本複製到剪貼板，以便在您的應用程序或文檔中使用。'
      ]
    }
  }
}
