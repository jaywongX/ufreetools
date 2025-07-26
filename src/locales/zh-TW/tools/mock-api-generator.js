export default {
  name: 'Mock API生成器',
  description: '根據OpenAPI規範自動生成Mock API',

  options: {
    version: 'OpenAPI版本',
    format: '輸出格式',
    includeExamples: '包含範例響應',
    responseDynamism: '響應動態性',
    responseType: '響應類型',
    arrayLength: '陣列長度',
    responseFormat: '響應格式'
  },

  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },

  actions: {
    generate: '生成Mock',
    preview: '預覽API',
    clear: '清除',
    copy: '複製程式碼',
    download: '下載',
    uploadSpec: '上傳OpenAPI規範',
    uploadJava: '上傳Java類別檔案',
    generateJson: '生成JSON',
    generateBuilder: '生成Builder',
    format: '美化'
  },

  messages: {
    copied: '已複製到剪貼簿！',
    generationSuccess: 'Mock API生成成功',
    generationError: '生成Mock API時出錯',
    specRequired: '請提供OpenAPI規範',
    fileUploaded: '已上傳',
    parseError: '解析Java類別失敗，請確保檔案格式正確'
  },

  help: {
    uploadHint: '支援上傳 .java 檔案，自動解析類別結構生成Mock配置 暫未支援多層物件屬性'
  },

  fields: {
    title: '欄位定義',
    addField: '新增欄位',
    addChildField: '新增子欄位',
    fieldName: '欄位名稱'
  },

  fieldTypes: {
    string: '字串',
    number: '數字',
    boolean: '布林值',
    date: '日期',
    name: '姓名',
    email: '電子郵件',
    phone: '電話',
    address: '地址',
    id: 'ID',
    image: '圖片URL',
    array: '陣列',
    object: '物件'
  },

  array: {
    itemType: '陣列項類型',
    arrayFields: '陣列項欄位'
  },

  object: {
    childFields: '子欄位'
  },

  responseTypes: {
    object: '單一物件',
    array: '物件陣列',
    custom: '自訂結構'
  },

  responseFormats: {
    dataOnly: '僅資料',
    standard: '標準REST響應 (code, data, message)'
  },

  placeholder: {
    output: '// 生成的Mock資料將顯示在這裡'
  }
};