export default {
  name: 'CORS策略生成器',
  description: '生成和测试跨源资源共享(CORS)头部',
  options: {
    title: 'CORS选项',
    allowedOrigins: {
      title: '允许的源',
      all: '允许所有源(*)  - 不推荐用于生产环境',
      specific: '仅特定源',
      addOrigin: '添加源',
      originPlaceholder: '输入源（例如：https://example.com）',
      wildcard: '允许子域（通配符）',
      null: '允许null源'
    },
    allowedMethods: {
      title: '允许的方法',
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
      title: '允许的头部',
      all: '允许所有请求头(*)',
      specific: '仅特定头部',
      addHeader: '添加头部',
      headerPlaceholder: '输入头部名称',
      common: '添加常用头部'
    },
    exposedHeaders: {
      title: '暴露的头部',
      description: '浏览器被允许访问的头部',
      addHeader: '添加暴露的头部',
      headerPlaceholder: '输入头部名称'
    },
    credentials: {
      title: '允许凭证',
      description: '允许跨源发送Cookie和认证信息',
      allow: '允许凭证',
      warning: '警告：仅在需要发送Cookie或认证信息时启用'
    },
    maxAge: {
      title: '最大缓存时间',
      description: '浏览器应缓存预检响应的时间（秒）',
      seconds: '秒',
      recommended: '推荐：3600（1小时）'
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
    security: '安全考虑',
    debugging: '调试CORS问题',
    browsers: '浏览器兼容性',
    viewMore: '查看CORS指南'
  },
  messages: {
    copied: '头部已复制到剪贴板',
    configDownloaded: '配置已下载',
    testStarted: 'CORS测试已开始',
    testSucceeded: 'CORS请求成功',
    testFailed: 'CORS请求失败：{error}',
    presetSaved: '预设已保存',
    presetLoaded: '预设已加载'
  }
} 