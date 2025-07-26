export default {
  name: 'HTTP狀態碼查詢',
  description: '查詢和理解HTTP響應狀態碼和訊息',

  search: {
    title: '查找狀態碼',
    placeholder: '輸入狀態碼或按描述搜尋',
    button: '查詢',
    recent: '最近搜尋',
    common: '常見狀態碼',
    filter: {
      all: '所有類別',
      informational: '1xx - 資訊響應',
      success: '2xx - 成功響應',
      redirection: '3xx - 重新導向',
      clientError: '4xx - 客戶端錯誤',
      serverError: '5xx - 伺服器錯誤'
    }
  },

  results: {
    title: '狀態碼資訊',
    code: '狀態碼',
    type: '類型',
    message: '標準訊息',
    description: '描述',
    spec: '規範',
    references: '參考資料',
    examples: '範例',
    noResults: '未找到結果',
    searchError: '搜尋狀態碼時出錯',
    tryAgain: '嘗試其他搜尋',
    example: '範例',
    notes: '注意事項'
  },

  categories: {
    title: '分類',
    information: '資訊響應 (1xx)',
    success: '成功響應 (2xx)',
    redirection: '重新導向訊息 (3xx)',
    clientError: '客戶端錯誤響應 (4xx)',
    serverError: '伺服器錯誤響應 (5xx)',
    unofficial: '非官方代碼',
    internet: 'Internet Information Services',
    nginx: 'Nginx',
    cloudflare: 'Cloudflare',
    aws: 'AWS'
  },

  statusInfo: {
    '100': {
      message: '繼續',
      description: '伺服器已收到請求頭，客戶端應繼續發送請求體。',
      shortDescription: '繼續發送請求',
      fullDescription: '伺服器已收到請求的初始部分，客戶端應繼續發送剩餘的請求。',
      notes: '通常用於客戶端在發送較大請求體之前，先檢查伺服器是否會接受該請求。'
    },
    '101': {
      message: '切換協議',
      description: '請求者已要求伺服器切換協議，伺服器已同意這樣做。',
      shortDescription: '切換協議',
      fullDescription: '伺服器已經理解了客戶端的請求，並將通過Upgrade訊息頭通知客戶端採用不同的協議來完成這個請求。',
      notes: '常用於WebSocket連接的建立過程。'
    },
    '200': {
      message: '成功',
      description: '請求已成功。成功的含義取決於HTTP方法。'
    },
    '201': {
      message: '已建立',
      description: '請求已成功，並因此建立了一個新的資源。'
    },
    '204': {
      message: '無內容',
      description: '伺服器成功處理了請求，但不需要返回任何內容。'
    },
    '301': {
      message: '永久移動',
      description: '請求的資源的URL已永久更改。新的URL在響應中給出。'
    },
    '302': {
      message: '找到',
      description: '請求的資源的URL已臨時更改。新的URL在響應中給出。'
    },
    '304': {
      message: '未修改',
      description: '無需重新傳輸資源，因為客戶端仍有之前下載的副本。'
    },
    '400': {
      message: '錯誤請求',
      description: '由於語法無效，伺服器無法理解請求。'
    },
    '401': {
      message: '未授權',
      description: '客戶端必須進行身份驗證才能獲得請求的響應。'
    },
    '403': {
      message: '禁止',
      description: '客戶端沒有訪問內容的權限。'
    },
    '404': {
      message: '未找到',
      description: '伺服器找不到請求的資源。'
    },
    '500': {
      message: '伺服器內部錯誤',
      description: '伺服器遇到了一個它不知道如何處理的情況。'
    },
    '502': {
      message: '錯誤閘道',
      description: '伺服器作為閘道或代理時，從上游伺服器收到無效響應。'
    },
    '503': {
      message: '服務不可用',
      description: '伺服器尚未準備好處理請求。常見原因是伺服器正在進行維護或過載。'
    }
  },

  tools: {
    title: '工具',
    checkUrl: '檢查URL狀態',
    statusCodeFlow: '狀態碼流程圖',
    apiTest: 'API測試器',
    debugger: '響應調試器',
    statusInspector: 'URL狀態檢查器'
  },

  features: {
    title: '功能',
    overview: '狀態碼概述',
    comparison: '狀態碼比較',
    troubleshooting: '故障排除指南',
    bestPractices: '最佳實踐',
    codeExamples: '程式碼範例'
  },

  details: {
    title: '詳細資訊',
    history: '歷史',
    browser: '瀏覽器行為',
    seo: 'SEO影響',
    security: '安全影響',
    bestPractices: '最佳實踐',
    alternatives: '替代狀態碼',
    commonErrors: '常見錯誤'
  },

  codeExamples: {
    title: '程式碼範例',
    nodejs: 'Node.js',
    python: 'Python',
    php: 'PHP',
    java: 'Java',
    go: 'Go',
    copyCode: '複製程式碼',
    response: '響應範例',
    request: '請求範例'
  },

  category: {
    intro: 'HTTP狀態碼是伺服器對瀏覽器請求的響應狀態，分為5個類別：',
    informational: '1xx（資訊性狀態碼）- 接收的請求正在處理',
    success: '2xx（成功狀態碼）- 請求正常處理完畢',
    redirection: '3xx（重新導向狀態碼）- 需要進行附加操作以完成請求',
    clientError: '4xx（客戶端錯誤狀態碼）- 伺服器無法處理請求',
    serverError: '5xx（伺服器錯誤狀態碼）- 伺服器處理請求出錯'
  },

  codes: {
    '100': {
      shortDescription: '繼續發送請求',
      description: '伺服器已收到請求的初始部分，客戶端應繼續發送剩餘的請求。',
      notes: '通常用於客戶端在發送較大請求體之前，先檢查伺服器是否會接受該請求。'
    },
    '101': {
      shortDescription: '切換協議',
      description: '伺服器已經理解了客戶端的請求，並將通過Upgrade訊息頭通知客戶端採用不同的協議來完成這個請求。',
      notes: '常用於WebSocket連接的建立過程。'
    },
    '200': {
      shortDescription: '請求成功',
      description: '請求已成功，伺服器已返回請求的內容。這是最常見的狀態碼。',
      notes: '所有GET請求成功都應返回此狀態碼。'
    },
    '201': {
      shortDescription: '已建立',
      description: '請求已成功，並且伺服器建立了新的資源。通常在POST請求後返回。',
      notes: '應返回新建立資源的位置（URI）。'
    },
    '204': {
      shortDescription: '無內容',
      description: '伺服器成功處理了請求，但不需要返回任何實體內容。',
      notes: '常用於DELETE請求成功或僅需要客戶端重置視圖的情況。'
    },
    '301': {
      shortDescription: '永久重新導向',
      description: '請求的資源已永久移動到新位置，以後任何對此資源的引用都應使用新的URL。',
      notes: '搜索引擎會更新資源的URL，瀏覽器通常會快取此重新導向。'
    },
    '302': {
      shortDescription: '臨時重新導向',
      description: '請求的資源臨時從不同的URL響應請求，但請求者應繼續使用原有URL訪問。',
      notes: '與301不同，搜索引擎不會更新資源連結，瀏覽器可能不會快取此重新導向。'
    },
    '304': {
      shortDescription: '未修改',
      description: '資源未被修改，可使用客戶端快取的版本。通常用於條件性GET請求。',
      notes: '伺服器不應返回響應體，有助於提高性能和減少頻寬消耗。'
    },
    '400': {
      shortDescription: '錯誤請求',
      description: '伺服器無法理解請求的格式，客戶端不應該在未修改請求的情況下重複提交。',
      notes: '通常是由於請求參數格式錯誤、缺少必要參數或參數值無效。'
    },
    '401': {
      shortDescription: '未授權',
      description: '請求要求用戶的身份認證，如用戶未提供憑據或提供的憑據無效。',
      notes: '客戶端應提供或重新提供正確的認證資訊。'
    },
    '403': {
      shortDescription: '禁止訪問',
      description: '伺服器理解請求但拒絕執行，與401不同，身份認證不會提供任何幫助。',
      notes: '通常是由於權限不足，如嘗試訪問只有管理員才能查看的內容。'
    },
    '404': {
      shortDescription: '未找到',
      description: '伺服器找不到請求的資源，可能是URL拼寫錯誤或資源已被刪除。',
      notes: '最常見的錯誤狀態碼之一，應明確告知用戶資源不存在。'
    },
    '405': {
      shortDescription: '方法不允許',
      description: '請求行中指定的請求方法不能被用於請求相應的資源。',
      notes: '響應中必須包含Allow頭，指明對該資源有效的請求方法。'
    },
    '409': {
      shortDescription: '衝突',
      description: '請求與伺服器當前狀態衝突，通常出現在PUT請求中。',
      notes: '常見於嘗試建立已存在的資源或併發編輯同一資源的情況。'
    },
    '429': {
      shortDescription: '請求過多',
      description: '用戶在給定時間內發送了太多請求（"限流"）。',
      notes: '應包含Retry-After頭，告知客戶端多久後可以再次發送請求。'
    },
    '500': {
      shortDescription: '伺服器內部錯誤',
      description: '伺服器遇到了不知道如何處理的情況，通常是程式碼錯誤或臨時故障。',
      notes: '伺服器錯誤狀態碼中最常見的一種，應盡可能提供詳細的錯誤資訊和日誌以便調試。'
    },
    '502': {
      shortDescription: '錯誤閘道',
      description: '作為閘道或代理的伺服器從上游伺服器收到無效響應。',
      notes: '通常出現在使用反向代理或負載平衡器時，上游服務不可用或響應異常。'
    },
    '503': {
      shortDescription: '服務不可用',
      description: '伺服器暫時不可用，通常是由於超載或系統維護。',
      notes: '應包含Retry-After頭指示客戶端多久後重試，這有助於減輕伺服器負載。'
    },
    '504': {
      shortDescription: '閘道超時',
      description: '作為閘道或代理的伺服器未及時從上游伺服器收到響應。',
      notes: '常見於代理後的服務處理時間過長或網路連接問題。'
    }
  }
};