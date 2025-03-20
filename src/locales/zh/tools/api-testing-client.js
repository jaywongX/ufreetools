export default {
  name: 'API测试客户端',
  description: '使用请求构建器和响应查看器测试和调试RESTful API',
  request: {
    method: '方法',
    url: 'URL',
    params: '查询参数',
    headers: '请求头',
    body: '请求体',
    auth: '授权',
    key: '键',
    value: '值',
    description: '描述',
    addParam: '添加参数',
    addHeader: '添加请求头',
    bodyType: '请求体类型',
    sendRequest: '发送请求',
    clear: '清除',
    save: '保存请求',
    copy: '复制为cURL',
    history: '历史',
    collections: '集合',
    import: '导入',
    export: '导出',
    cancel: '取消'
  },
  methods: {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    patch: 'PATCH',
    options: 'OPTIONS',
    head: 'HEAD'
  },
  bodyTypes: {
    none: '无',
    json: 'JSON',
    formData: '表单数据',
    formUrlEncoded: '表单URL编码',
    raw: '原始',
    binary: '二进制'
  },
  authTypes: {
    none: '无',
    basic: '基本认证',
    bearer: 'Bearer令牌',
    apiKey: 'API密钥',
    oauth2: 'OAuth 2.0'
  },
  response: {
    status: '状态',
    time: '时间',
    size: '大小',
    body: '响应体',
    headers: '响应头',
    cookies: 'Cookies',
    pretty: '美化',
    raw: '原始',
    preview: '预览',
    download: '下载',
    copyBody: '复制响应体',
    copyHeaders: '复制响应头'
  },
  validation: {
    urlRequired: '需要URL',
    invalidUrl: '无效的URL格式',
    invalidJson: '无效的JSON格式',
    duplicateKey: '重复的键'
  },
  messages: {
    requestSent: '请求发送成功',
    requestFailed: '请求失败: {error}',
    requestCancelled: '请求已取消',
    copied: '已复制到剪贴板！',
    saved: '请求已保存到集合',
    importSuccess: '集合导入成功',
    exportSuccess: '集合导出成功',
    networkError: '网络错误：无法连接到服务器',
    timeoutError: '请求超时'
  }
} 