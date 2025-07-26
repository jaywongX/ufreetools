export default {
  name: 'CSV轉JSON工具',
  description: '將CSV數據轉換為JSON格式，具有可自定義選項',

  options: {
    delimiter: '分隔符',
    quote: '引號字符',
    header: '首行為標題',
    dynamicTyping: '動態類型',
    dynamicTypingDescription: '將數字字符串轉換為數字，"true/false"轉換為布爾值等',
    skipEmptyLines: '跳過空行',
    comments: '註釋字符',
    outputFormat: '輸出格式',
    indentation: '縮進',
    encoding: '編碼',
    newline: '換行符',
    title: '轉換選項'
  },

  delimiters: {
    comma: '逗號 (,)',
    semicolon: '分號 (;)',
    tab: '制表符 (\\t)',
    pipe: '豎線 (|)',
    custom: '自定義'
  },

  formats: {
    array: '對象數組',
    arrayOfArrays: '數組的數組',
    keyed: '鍵值對象',
    nested: '嵌套對象'
  },

  preview: {
    input: '輸入...',
    output: '輸出...',
    rawCsv: '原始CSV',
    parsedCsv: '解析後的CSV',
    jsonOutput: 'JSON輸出',
    firstRows: '前 {count} 行',
    showAll: '顯示全部'
  },

  actions: {
    convert: '轉換',
    copy: '複製JSON',
    download: '下載JSON',
    clear: '清除',
    uploadCsv: '上傳CSV',
    swap: '交換輸入/輸出',
    loadExample: '加載示例',
    clearInput: '清空輸入',
    formatOutput: '格式化輸出',
    copyResult: '複製結果',
    downloadResult: '下載結果',
    paste: '粘貼',
    showOptions: '顯示選項',
    hideOptions: '隱藏選項',
    uploadJson: '上傳JSON'
  },

  results: {
    rowsProcessed: '已處理 {count} 行',
    conversionComplete: '轉換完成',
    copied: '已複製到剪貼板',
    downloaded: '已下載',
    error: '錯誤'
  },

  errors: {
    noData: '沒有要轉換的CSV數據',
    invalidCsv: '無效的CSV格式',
    parsingFailed: '解析失敗: {error}',
    missingHeader: '缺少標題行',
    invalidJson: '無效的JSON格式',
    formatFailed: '格式化失敗: {error}',
    copyFailed: '複製失敗，請手動複製',
    downloadFailed: '下載失敗',
    pasteError: '無法從剪貼板粘貼',
    conversionFailed: '轉換失敗'
  },

  conversion: {
    title: '轉換方向',
    csvToJson: {
      title: 'CSV轉JSON',
      delimiterLabel: '分隔符',
      headerLabel: '第一行為標題',
      dynamicTypingLabel: '自動推斷數據類型',
      skipEmptyLinesLabel: '跳過空行',
      convertButton: '轉換CSV為JSON'
    },
    jsonToCsv: {
      title: 'JSON轉CSV',
      delimiterLabel: '分隔符',
      headerLabel: '包含標題行',
      quotesLabel: '為所有字段添加引號',
      nestedModeLabel: '選擇嵌套數據處理方式',
      flat: '展平化處理',
      stringify: '轉為字符串',
      ignore: '忽略處理',
      convertButton: '轉換JSON為CSV'
    }
  },

  stats: {
    processed: '已處理的數據行數',
    fields: '字段數/列數',
    inputSize: '轉換前大小',
    outputSize: '轉換後大小',
    title: '統計數據'
  },

  messages: {
    copied: '已複製到剪貼板',
    download: '已下載',
    error: '錯誤'
  },

  formatBytes: {
    bytes: '字節',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  }
};