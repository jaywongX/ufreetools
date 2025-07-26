export default {
  name: 'CORS配置生成器',
  description: '快速创建跨域资源共享(CORS)配置，支持多种服务器环境',

  options: {
    title: 'CORS选项',
    allowedOrigins: {
      title: '允许的来源域名 (Access-Control-Allow-Origin)',
      allowAll: '允许所有来源 (*) <span class="text-yellow-500 text-xs ml-1">(不安全，不支持凭证)</span>',
      specific: '指定允许的域名 (推荐)',
      addOrigin: '添加源',
      placeholder: '输入源（例如：https://example.com）',
      wildcard: '允许子域（通配符）',
      null: '允许null源',
      remove: '移除域名'
    },
    allowedMethods: {
      title: '允许的HTTP方法 (Access-Control-Allow-Methods)',
      selectMethods: '选择HTTP方法',
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE',
      patch: 'PATCH',
      head: 'HEAD',
      options: 'OPTIONS'
    },
    allowedHeaders: {
      title: '允许的请求头 (Access-Control-Allow-Headers)',
      all: '允许所有请求头(*)',
      specific: '仅特定头部',
      addHeader: '添加头部',
      headerPlaceholder: '输入头部名称',
      common: '常用请求头',
      custom: '自定义请求头',
      contentType: 'Content-Type',
      accept: 'Accept',
      authorization: 'Authorization',
      origin: 'Origin',
      xRequestedWith: 'X-Requested-With',
      contentDisposition: 'Content-Disposition',
      remove: '移除头部'
    },
    exposedHeaders: {
      title: '暴露的响应头 (Access-Control-Expose-Headers)',
      description: '允许浏览器访问的响应头',
      addHeader: '添加暴露的头部',
      headerPlaceholder: '输入头部名称'
    },
    credentials: {
      title: '允许凭证 (Access-Control-Allow-Credentials)',
      description: '允许使用Cookie和认证头',
      allow: '允许凭证',
      warning: '只能与特定来源一起使用，不能与通配符(*)一起使用'
    },
    maxAge: {
      title: '预检请求缓存时间 (Access-Control-Max-Age)',
      description: '预检请求结果的缓存时间（秒）',
      seconds: '秒',
      default: '默认：',
      recommended: '推荐：3600（1小时）'
    },
    serverType: {
      title: '服务器类型',
      apache: 'Apache (.htaccess)',
      nginx: 'Nginx',
      express: 'Express.js',
      springBoot: 'Spring Boot',
      php: 'PHP',
      flask: 'Flask (Python)',
      django: 'Django',
      rails: 'Ruby on Rails',
      aws: 'AWS S3/CloudFront',
      azure: 'Azure',
      iis: 'IIS (web.config)',
      jetty: 'Jetty',
      headers: 'HTTP头部'
    }
  },

  output: {
    title: '生成的头部',
    instructions: '将这些头部添加到您的服务器响应中：',
    copy: '复制头部',
    test: '测试头部',
    downloadConfig: '下载配置'
  },

  configs: {
    title: '配置示例',
    nginx: 'Nginx',
    apache: 'Apache (.htaccess)',
    express: 'Express.js',
    springBoot: 'Spring Boot',
    php: 'PHP',
    flask: 'Flask (Python)',
    django: 'Django',
    rails: 'Ruby on Rails',
    aws: 'AWS S3/CloudFront',
    azure: 'Azure',
    iis: 'IIS Web.config'
  },

  testing: {
    title: 'CORS测试',
    description: '测试您的CORS配置是否正常工作',
    originUrl: '源URL',
    targetUrl: '目标URL',
    method: '请求方法',
    credentials: '包含凭证',
    headers: '自定义头部',
    addHeader: '添加头部',
    testButton: '测试CORS',
    results: '测试结果',
    success: 'CORS测试成功 ✓',
    failure: 'CORS测试失败 ✗',
    details: '响应详情',
    response: '响应',
    logs: 'CORS日志',
    errorDetails: '错误详情'
  },

  presets: {
    title: '预设',
    api: 'API服务器',
    assets: '静态资源（CDN）',
    auth: '认证服务',
    publicAccess: '公共访问',
    restrictive: '限制性',
    load: '加载预设',
    save: '保存当前为预设'
  },

  tips: {
    title: 'CORS提示',
    tip1: '跨域资源共享 (CORS) 是一种基于HTTP头的机制，它允许服务器指示除了自己以外的其他源（域、协议或端口），浏览器可以从这些源加载资源。',
    tip2: 'CORS防护是现代浏览器的安全功能，能够阻止网页向非同源服务器发出请求，从而保护用户免受跨站请求伪造攻击。',
    usage: {
      title: 'CORS使用场景:',
      tip1: '允许前端JavaScript访问不同域的API',
      tip2: '支持跨域Ajax请求或Fetch请求',
      tip3: '允许跨域访问字体、CSS或其他资源',
      tip4: '设置微服务架构中的服务间通信',
    },
    safe: '安全提示: 通常应该避免使用 "*" 通配符作为允许的来源，而应该明确指定您信任的域名，以减少潜在的安全风险。'
  },

  messages: {
    copied: '头部已复制到剪贴板',
    configDownloaded: '配置已下载',
    testStarted: 'CORS测试已开始',
    testSucceeded: 'CORS请求成功',
    testFailed: 'CORS请求失败：{error}',
    presetSaved: '预设已保存',
    presetLoaded: '预设已加载'
  },

  config: {
    title: '配置',
    empty: '配置选项以生成CORS设置',
    copied: '配置已复制到剪贴板！',
    copy: '复制'
  },

  comments: {
    expressMiddleware: "// 使用Express应用中间件",
    applyGlobalCors: "// 应用CORS中间件",
    applySpecificRoute: "// 或者仅对特定路由应用",
    applyRequest: "// 处理请求",
    apacheAllowedOrigins: "# 允许的域名",
    apacheAllowedMethods: "# 允许的HTTP方法",
    apacheAllowedHeaders: "# 允许的HTTP头部",
    apacheAllowedCredentials: "# 允许的凭证",
    preflightCacheDuration: "# 预检请求缓存时间",
    apacheExposeHeaders: '# 暴露的响应头',
    handlePreflightRequest: "# 处理预检请求",
    nginxConfiguration: "# CORS配置\n# 将此配置添加到您的server或location块中",
    nginxAllowedOrigins: "# 允许的域名",
    nginxAllowedMethods: "# 允许的HTTP方法",
    nginxAllowedHeaders: "# 允许的HTTP头部",
    nginxAllowedCredentials: "# 允许的凭证",
    nginxPreflightCacheDuration: "# 预检请求缓存时间",
    nginxExposeHeaders: '# 暴露的响应头',
    nginxHandlePreflight: "# 处理预检请求",
    httpHeadersConfiguration: "# CORS HTTP头部配置",
    httpAllowedOrigins: "# 允许的域名",
    httpAllowedMethods: "# 允许的HTTP方法",
    httpAllowedHeaders: "# 允许的HTTP头部",
    httpAllowedCredentials: "# 允许的凭证",
    httpPreflightCacheDuration: "# 预检请求缓存时间",
    httpExposeHeaders: '# 暴露的响应头',
  }
}; 