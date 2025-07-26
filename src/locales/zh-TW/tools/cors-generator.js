export default {
  name: "CORS配置生成器",
  description: "快速創建跨域資源共享(CORS)配置，支援多種伺服器環境",

  options: {
    title: "CORS選項",
    allowedOrigins: {
      title: "允許的來源域名 (Access-Control-Allow-Origin)",
      allowAll: "允許所有來源 (*) <span class=\"text-yellow-500 text-xs ml-1\">(不安全，不支援憑證)</span>",
      specific: "指定允許的域名 (推薦)",
      addOrigin: "添加來源",
      placeholder: "輸入來源（例如：https://example.com）",
      wildcard: "允許子網域（萬用字元）",
      null: "允許null來源",
      remove: "移除域名"
    },
    allowedMethods: {
      title: "允許的HTTP方法 (Access-Control-Allow-Methods)",
      selectMethods: "選擇HTTP方法",
      get: "GET",
      post: "POST",
      put: "PUT",
      delete: "DELETE",
      patch: "PATCH",
      head: "HEAD",
      options: "OPTIONS"
    },
    allowedHeaders: {
      title: "允許的請求標頭 (Access-Control-Allow-Headers)",
      all: "允許所有請求標頭(*)",
      specific: "僅特定標頭",
      addHeader: "添加標頭",
      headerPlaceholder: "輸入標頭名稱",
      common: "常用請求標頭",
      custom: "自訂請求標頭",
      contentType: "Content-Type",
      accept: "Accept",
      authorization: "Authorization",
      origin: "Origin",
      xRequestedWith: "X-Requested-With",
      contentDisposition: "Content-Disposition",
      remove: "移除標頭"
    },
    exposedHeaders: {
      title: "暴露的響應標頭 (Access-Control-Expose-Headers)",
      description: "允許瀏覽器存取的響應標頭",
      addHeader: "添加暴露的標頭",
      headerPlaceholder: "輸入標頭名稱"
    },
    credentials: {
      title: "允許憑證 (Access-Control-Allow-Credentials)",
      description: "允許使用Cookie和認證標頭",
      allow: "允許憑證",
      warning: "只能與特定來源一起使用，不能與萬用字元(*)一起使用"
    },
    maxAge: {
      title: "預檢請求快取時間 (Access-Control-Max-Age)",
      description: "預檢請求結果的快取時間（秒）",
      seconds: "秒",
      default: "預設：",
      recommended: "推薦：3600（1小時）"
    },
    serverType: {
      title: "伺服器類型",
      apache: "Apache (.htaccess)",
      nginx: "Nginx",
      express: "Express.js",
      springBoot: "Spring Boot",
      php: "PHP",
      flask: "Flask (Python)",
      django: "Django",
      rails: "Ruby on Rails",
      aws: "AWS S3/CloudFront",
      azure: "Azure",
      iis: "IIS (web.config)",
      jetty: "Jetty",
      headers: "HTTP標頭"
    }
  },

  output: {
    title: "生成的標頭",
    instructions: "將這些標頭添加到您的伺服器響應中：",
    copy: "複製標頭",
    test: "測試標頭",
    downloadConfig: "下載配置"
  },

  configs: {
    title: "配置範例",
    nginx: "Nginx",
    apache: "Apache (.htaccess)",
    express: "Express.js",
    springBoot: "Spring Boot",
    php: "PHP",
    flask: "Flask (Python)",
    django: "Django",
    rails: "Ruby on Rails",
    aws: "AWS S3/CloudFront",
    azure: "Azure",
    iis: "IIS Web.config"
  },

  testing: {
    title: "CORS測試",
    description: "測試您的CORS配置是否正常工作",
    originUrl: "來源URL",
    targetUrl: "目標URL",
    method: "請求方法",
    credentials: "包含憑證",
    headers: "自訂標頭",
    addHeader: "添加標頭",
    testButton: "測試CORS",
    results: "測試結果",
    success: "CORS測試成功 ✓",
    failure: "CORS測試失敗 ✗✗",
    details: "響應詳情",
    response: "響應",
    logs: "CORS日誌",
    errorDetails: "錯誤詳情"
  },

  presets: {
    title: "預設",
    api: "API伺服器",
    assets: "靜態資源（CDN）",
    auth: "認證服務",
    publicAccess: "公共存取",
    restrictive: "限制性",
    load: "載入預設",
    save: "儲存當前為預設"
  },

  tips: {
    title: "CORS提示",
    tip1: "跨域資源共享 (CORS) 是一種基於HTTP標頭的機制，它允許伺服器指示除了自己以外的其他來源（域、協定或埠），瀏覽器可以從這些來源載入資源。",
    tip2: "CORS防護是現代瀏覽器的安全功能，能夠阻止網頁向非同源伺服器發出請求，從而保護使用者免受跨站請求偽造攻擊。",
    usage: {
      title: "CORS使用場景:",
      tip1: "允許前端JavaScript存取不同域的API",
      tip2: "支援跨域Ajax請求或Fetch請求",
      tip3: "允許跨域存取字型、CSS或其他資源",
      tip4: "設定微服務架構中的服務間通訊"
    },
    safe: "安全提示: 通常應該避免使用 \"*\" 萬用字元作為允許的來源，而應該明確指定您信任的域名，以減少潛在的安全風險。"
  },

  messages: {
    copied: "標頭已複製到剪貼簿",
    configDownloaded: "配置已下載",
    testStarted: "CORS測試已開始",
    testSucceeded: "CORS請求成功",
    testFailed: "CORS請求失敗：{error}",
    presetSaved: "預設已儲存",
    presetLoaded: "預設已載入"
  },

  config: {
    title: "配置",
    empty: "配置選項以生成CORS設定",
    copied: "配置已複製到剪貼簿！",
    copy: "複製"
  },

  comments: {
    expressMiddleware: "// 使用Express應用中介軟體",
    applyGlobalCors: "// 應用CORS中介軟體",
    applySpecificRoute: "// 或者僅對特定路由應用",
    applyRequest: "// 處理請求",
    apacheAllowedOrigins: "# 允許的域名",
    apacheAllowedMethods: "# 允許的HTTP方法",
    apacheAllowedHeaders: "# 允許的HTTP標頭",
    apacheAllowedCredentials: "# 允許的憑證",
    preflightCacheDuration: "# 預檢請求快取時間",
    apacheExposeHeaders: "# 暴露的響應標頭",
    handlePreflightRequest: "# 處理預檢請求",
    nginxConfiguration: "# CORS配置\n# 將此配置添加到您的server或location區塊中",
    nginxAllowedOrigins: "# 允許的域名",
    nginxAllowedMethods: "# 允許的HTTP方法",
    nginxAllowedHeaders: "# 允許的HTTP標頭",
    nginxAllowedCredentials: "# 允許的憑證",
    nginxPreflightCacheDuration: "# 預檢請求快取時間",
    nginxExposeHeaders: "# 暴露的響應標頭",
    nginxHandlePreflight: "# 處理預檢請求",
    httpHeadersConfiguration: "# CORS HTTP標頭配置",
    httpAllowedOrigins: "# 允許的域名",
    httpAllowedMethods: "# 允許的HTTP方法",
    httpAllowedHeaders: "# 允許的HTTP標頭",
    httpAllowedCredentials: "# 允許的憑證",
    httpPreflightCacheDuration: "# 預檢請求快取時間",
    httpExposeHeaders: "# 暴露的響應標頭"
  }
};