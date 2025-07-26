export default {
  name: '請求標頭編輯器',
  description: '建立、編輯和測試HTTP請求標頭',

  editor: {
    title: '標頭編輯器',
    headers: '請求標頭',
    add: '新增標頭',
    bulk: '批次編輯',
    import: '匯入標頭',
    export: '匯出標頭',
    clear: '清除全部',
    importError: '匯入錯誤'
  },

  header: {
    name: '標頭名稱',
    value: '值',
    description: '描述',
    namePlaceholder: '輸入標頭名稱',
    valuePlaceholder: '輸入標頭值',
    actions: '操作',
    enabled: '啟用',
    duplicate: '複製',
    delete: '刪除',
    noHeaders: '沒有請求標頭，點擊"新增"按鈕或載入範本開始',
    bulkPlaceholder: '貼上請求標頭，格式: \'名稱: 值\'，每行一個，或貼上原始請求標頭文字'
  },

  presets: {
    title: '預設',
    save: '儲存當前',
    load: '載入預設',
    delete: '刪除預設',
    presetName: '預設名稱',
    namePlaceholder: '輸入預設名稱',
    confirmDelete: '確定要刪除此預設嗎？',
    common: '常用標頭',
    custom: '自訂預設'
  },

  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },

  test: {
    title: '測試標頭',
    url: 'URL',
    urlPlaceholder: '輸入URL以測試標頭',
    method: '方法',
    send: '發送請求',
    response: '回應'
  },

  response: {
    title: '回應',
    status: '狀態',
    headers: '回應標頭',
    body: '正文',
    time: '時間',
    size: '大小',
    loading: '載入中...',
    noResponse: '新增請求標頭以查看預覽',
    headerCount: '個請求標頭'
  },

  options: {
    title: '選項',
    followRedirects: '跟隨重新導向',
    timeout: '逾時（秒）',
    validateSSL: '驗證SSL憑證',
    sendCredentials: '發送憑證'
  },

  formats: {
    title: '匯出格式',
    raw: '原始文字',
    json: 'JSON',
    curl: 'cURL指令',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },

  guides: {
    title: '標頭指南',
    description: '了解常見HTTP標頭及其用法',
    securityHeaders: '安全標頭',
    cachingHeaders: '快取標頭',
    corsHeaders: 'CORS標頭',
    authenticationHeaders: '認證標頭',
    commonValues: '常用值'
  },

  actions: {
    copy: '複製',
    format: '格式化',
    validate: '驗證',
    clear: '清空'
  },

  messages: {
    headerAdded: '標頭已新增',
    headerDeleted: '標頭已刪除',
    headersCleared: '所有標頭已清除',
    presetSaved: '預設已儲存',
    presetLoaded: '預設已載入',
    presetDeleted: '預設已刪除',
    requestSent: '請求已發送',
    requestFailed: '請求失敗：{error}',
    copied: '已複製到剪貼簿',
    importSuccess: '標頭匯入成功',
    exportSuccess: '標頭匯出成功',
    invalidUrl: '無效的URL',
    pleaseEnterHeader: '請輸入請求標頭文字',
    invalidHeader: '無法解析任何有效的請求標頭，請使用"名稱: 值"格式',
    invalidHeaderName: '無效的請求標頭名稱: {error}',
    copyFailed: '複製失敗，請手動複製'
  }
};