export default {
  name: 'YAML-JSON轉換器',
  description: '在YAML和JSON格式之間轉換，具有可自定義選項',

  input: {
    title: '輸入',
    yamlPlaceholder: '在此輸入YAML...',
    jsonPlaceholder: '在此輸入JSON...',
    loadSample: '載入範例',
    clearInput: '清除輸入',
    uploadFile: '上傳檔案'
  },

  output: {
    title: '輸出',
    copyOutput: '複製輸出',
    downloadOutput: '下載輸出',
    clearOutput: '清除輸出'
  },

  options: {
    conversionMode: '轉換模式',
    jsonToYaml: 'JSON轉YAML',
    yamlToJson: 'YAML轉JSON',
    formatOutput: '格式化輸出',
    indentSize: '縮排大小',
    quoteKeys: '物件鍵加引號',
    sortKeys: '按字母順序排序鍵',
    flowStyle: 'YAML流樣式',
    jsonCompatible: 'JSON相容',
    singleQuotes: '使用單引號',
    includeSchema: '包含模式',
    preserveKeyOrder: '保持鍵順序'
  },

  flowStyles: {
    block: '塊樣式',
    flow: '流樣式',
    auto: '自動'
  },

  validation: {
    validate: '轉換前驗證',
    validInput: '有效的{format}',
    invalidInput: '無效的{format}：{error}',
    checkSyntax: '檢查語法'
  },

  actions: {
    convert: '轉換',
    swap: '交換格式',
    beautify: '美化',
    minify: '壓縮'
  },

  messages: {
    conversionSuccess: '轉換成功',
    conversionFailed: '轉換失敗：{error}',
    copySuccess: '已複製到剪貼簿',
    downloadSuccess: '檔案下載成功',
    emptyInput: '請輸入要轉換的內容',
    invalidYaml: '無效的YAML語法',
    invalidJson: '無效的JSON語法'
  }
};