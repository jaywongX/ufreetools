export default {
  name: 'OpenAPI → TypeScript客戶端生成器',
  description: '基於OpenAPI規範自動生成TypeScript接口和客戶端代碼，提高前後端協作效率',

  options: {
    exportSchemas: '導出所有模型定義',
    generateClient: '生成API客戶端代碼',
    addComments: '添加註釋和文檔說明',
    useEnums: '使用TypeScript枚舉（代替字符串聯合類型）',
    indentSize: '縮進大小',
    operationType: '操作類型',
    displayOptions: '顯示選項'
  },

  inputMode: {
    toggleToFile: '切換到文件上傳',
    toggleToText: '切換到文本輸入',
    loadExample: '加載示例'
  },

  fileUpload: {
    dragAndDrop: '拖拽OpenAPI文件到此處，或者點擊上傳',
    supportedFormats: '支持.json、.yaml和.yml文件格式',
    fileSelected: '已選擇: {0} ({1})'
  },

  textInput: {
    placeholder: '粘貼OpenAPI規範(JSON或YAML)到這裡...'
  },

  actions: {
    generate: '生成TypeScript代碼',
    processing: '處理中...',
    clear: '清空',
    copy: '複製代碼',
    download: '下載代碼'
  },

  results: {
    generatedCode: '生成的TypeScript代碼',
    copied: '已複製到剪貼板',
    error: '錯誤',
    characterCount: '字符數: {0}'
  },

  errors: {
    parseError: '無法解析OpenAPI規範。請確保提供有效的JSON或YAML格式。',
    invalidSpec: '無效的OpenAPI規範。未找到openapi或swagger版本標識。',
    processingError: '處理OpenAPI規範時出錯: {0}'
  }
};