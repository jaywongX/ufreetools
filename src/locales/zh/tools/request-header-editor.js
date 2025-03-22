export default {
  name: '请求头编辑器',
  description: '创建、编辑和测试HTTP请求头',
  editor: {
    title: '头部编辑器',
    headers: '请求头',
    add: '添加头部',
    bulk: '批量编辑',
    import: '导入头部',
    export: '导出头部',
    clear: '清除全部',
    importError: '导入错误'
  },
  header: {
    name: '头部名称',
    value: '值',
    description: '描述',
    namePlaceholder: '输入头部名称',
    valuePlaceholder: '输入头部值',
    actions: '操作',
    enabled: '启用',
    duplicate: '复制',
    delete: '删除',
    noHeaders: '没有请求头，点击"添加"按钮或加载模板开始',
    bulkPlaceholder: '粘贴请求头，格式: \'名称: 值\'，每行一个，或粘贴原始请求头文本'
  },
  presets: {
    title: '预设',
    save: '保存当前',
    load: '加载预设',
    delete: '删除预设',
    presetName: '预设名称',
    namePlaceholder: '输入预设名称',
    confirmDelete: '确定要删除此预设吗？',
    common: '常用头部',
    custom: '自定义预设'
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
    title: '测试头部',
    url: 'URL',
    urlPlaceholder: '输入URL以测试头部',
    method: '方法',
    send: '发送请求',
    response: '响应'
  },
  response: {
    title: '响应',
    status: '状态',
    headers: '响应头',
    body: '正文',
    time: '时间',
    size: '大小',
    loading: '加载中...',
    noResponse: '添加请求头以查看预览',
    headerCount: '个请求头'
  },
  options: {
    title: '选项',
    followRedirects: '跟随重定向',
    timeout: '超时（秒）',
    validateSSL: '验证SSL证书',
    sendCredentials: '发送凭证'
  },
  formats: {
    title: '导出格式',
    raw: '原始文本',
    json: 'JSON',
    curl: 'cURL命令',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },
  guides: {
    title: '头部指南',
    description: '了解常见HTTP头部及其用法',
    securityHeaders: '安全头部',
    cachingHeaders: '缓存头部',
    corsHeaders: 'CORS头部',
    authenticationHeaders: '认证头部',
    commonValues: '常用值'
  },
  actions: {
    copy: '复制',
    format: '格式化',
    validate: '验证',
    clear: '清空'
  },
  messages: {
    headerAdded: '头部已添加',
    headerDeleted: '头部已删除',
    headersCleared: '所有头部已清除',
    presetSaved: '预设已保存',
    presetLoaded: '预设已加载',
    presetDeleted: '预设已删除',
    requestSent: '请求已发送',
    requestFailed: '请求失败：{error}',
    copied: '已复制到剪贴板',
    importSuccess: '头部导入成功',
    exportSuccess: '头部导出成功',
    invalidUrl: '无效的URL',
    pleaseEnterHeader: '请输入请求头文本',
    invalidHeader: '无法解析任何有效的请求头，请使用"名称: 值"格式',
    invalidHeaderName: '无效的请求头名称: {error}',
    copyFailed: '复制失败，请手动复制'
  }
} 