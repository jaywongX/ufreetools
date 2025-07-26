export default {
  name: 'HTTP代理檢測器',
  description: '檢測和分析連接中的HTTP代理和中間設備',
  title: '前端代理檢測器',
  intro: '檢測您的網路連接是否使用了代理，分析X-Forwarded-For和其他代理相關的HTTP頭信息',

  detection: {
    title: '代理檢測',
    start: '開始檢測',
    detecting: '檢測中...',
    stop: '停止檢測',
    completed: '檢測完成',
    noProxies: '未檢測到代理',
    proxiesFound: '檢測到的代理：{count}'
  },

  options: {
    title: '檢測選項',
    testUrl: '測試URL',
    urlPlaceholder: '輸入要測試的URL（預設：自動）',
    testMethod: 'HTTP方法',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: '超時（秒）',
    parallel: '平行測試',
    techniques: '檢測技術',
    headerAnalysis: '頭部分析',
    traceMethod: 'TRACE方法',
    viaHeader: 'Via頭部檢查',
    maxForwards: 'Max-Forwards測試',
    fingerprinting: '代理指紋識別',
    timing: '時序分析',
    advanced: '進階選項',
    apiSelection: '選擇API'
  },

  apis: {
    ipify: 'ipify API',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },

  results: {
    title: '檢測結果',
    summary: '代理摘要',
    headers: '完整請求頭',
    info: '代理信息解釋',
    detected: '檢測到代理',
    notDetected: '未檢測到代理',
    detectedDescription: '您的請求可能經過了一個或多個代理伺服器',
    notDetectedDescription: '您的請求似乎直接到達了目標伺服器，未經過代理',
    clientInfo: '客戶端IP信息',
    remoteIp: '遠端IP地址',
    location: '地理位置',
    isp: 'ISP提供商',
    proxyHeaders: '代理相關頭信息',
    details: '詳細結果',
    proxy: '代理',
    type: '類型',
    ip: 'IP地址',
    software: '軟體',
    confidence: '可信度',
    latency: '延遲',
    headers: '修改的頭部',
    fingerprint: '指紋',
    export: '導出結果',
    clear: '清除結果',
    noData: '無可用數據',
    originalRequest: '原始請求',
    modifiedRequest: '修改後的請求',
    proxyChain: '代理鏈',
    server: '伺服器',
    notSet: '未設置'
  },

  types: {
    forward: '正向代理',
    reverse: '反向代理',
    transparent: '透明代理',
    anonymous: '匿名代理',
    elite: '高匿代理',
    caching: '快取代理',
    gateway: '閘道',
    loadBalancer: '負載平衡器',
    cdn: 'CDN',
    corporate: '企業代理',
    unknown: '未知類型'
  },

  headers: {
    title: '頭部分析',
    original: '原始頭部',
    modified: '修改後的頭部',
    added: '添加的頭部',
    removed: '移除的頭部',
    changed: '更改的頭部',
    suspicious: '可疑頭部',
    select: '選擇要分析的頭部',
    name: '頭部名稱',
    value: '值',
    all: '所有HTTP請求頭',
    notFound: '未發現此頭信息'
  },

  details: {
    title: '代理詳情',
    software: '軟體',
    version: '版本',
    features: '功能',
    modifications: '修改',
    behavior: '行為',
    security: '安全影響',
    recommendations: '建議'
  },

  map: {
    title: '連接圖',
    client: '您的客戶端',
    target: '目標伺服器',
    hop: '跳點 {n}',
    direct: '直接連接',
    proxied: '代理連接',
    unknown: '未知路徑'
  },

  actions: {
    copyHeaders: '複製請求頭',
    copyToClipboard: '複製到剪貼板'
  },

  messages: {
    startDetection: '開始代理檢測...',
    detectionComplete: '代理檢測完成',
    error: '檢測失敗: {message}',
    timeout: '檢測超時',
    exportComplete: '結果導出成功',
    noConnection: '無法建立連接',
    limitedResults: '由於限制，結果有限',
    privateNetwork: '檢測到私有網路',
    publicNetwork: '檢測到公共網路',
    warning: '警告：{message}',
    proxyRemoved: '可能有代理正在移除檢測頭部',
    copied: '已複製請求頭到剪貼板',
    copyFailed: '複製失敗，請手動複製',
    unknown: '未知錯誤'
  },

  info: {
    description: 'HTTP代理是位於客戶端和伺服器之間的中間伺服器，它可以出於各種目的處理HTTP請求。代理可以由網路提供商、組織、公司或個人設置。'
  },

  xff: {
    title: '什麼是X-Forwarded-For?',
    description: 'X-Forwarded-For (XFF) 是一個HTTP頭字段，用於識別通過HTTP代理或負載平衡器連接到Web伺服器的客戶端的原始IP地址。當請求經過代理時，伺服器通常只能看到代理伺服器的IP地址，而XFF頭提供了一個追溯原始客戶端IP的方法。',
    notFound: '未發現X-Forwarded-For頭，這表明請求可能未經過代理或代理未添加此頭信息。',
    format: {
      title: 'XFF頭的格式',
      description: 'XFF頭的標準格式是一個逗號分隔的IP地址列表，最左邊的IP是原始客戶端，而後續的IP是經過的代理伺服器：'
    },
    related: {
      title: '其他相關代理頭',
      forwardedProto: '識別客戶端連接到代理使用的協議(HTTP或HTTPS)',
      forwardedHost: '識別客戶端請求的原始主機名',
      via: '指示請求和響應經過的代理伺服器',
      forwarded: '較新的標準頭，包含了客戶端和所有代理信息'
    },
    importance: {
      title: '為什麼代理信息很重要',
      security: '安全和訪問控制 - 準確識別客戶端IP對於防止濫用和實施IP-based訪問控制很重要',
      logging: '日誌記錄 - 對於審計和問題診斷，記錄真實的客戶端IP比代理IP更有用',
      geolocation: '地理位置服務 - 基於IP的地理位置服務需要真實的客戶端IP才能提供準確結果',
      content: '內容定制 - 一些服務根據用戶地理位置提供本地化內容'
    },
    security: {
      title: '安全注意事項',
      description: '需要注意的是，X-Forwarded-For頭可以被客戶端偽造。在高安全性要求的環境中，應該僅信任來自已知代理伺服器添加的XFF信息，或使用其他方法驗證客戶端IP。'
    }
  },

  privacy: {
    title: '隱私提示',
    description: '檢測過程中，您的IP地址和HTTP頭信息將被發送到第三方API服務用於分析。這些服務可能會收集並存儲這些信息以提供服務。',
    suggestion: '如有隱私顧慮，請選擇不同的API提供商或考慮使用VPN服務。'
  }
};