export default {
  name: 'HTTP状态码查询',
  description: '查询和理解HTTP响应状态码和消息',
  search: {
    title: '查找状态码',
    placeholder: '输入状态码或按描述搜索',
    button: '查询',
    recent: '最近搜索',
    common: '常见状态码'
  },
  results: {
    title: '状态码信息',
    code: '状态码',
    type: '类型',
    message: '标准消息',
    description: '描述',
    spec: '规范',
    references: '参考资料',
    examples: '示例',
    noResults: '未找到结果',
    searchError: '搜索状态码时出错',
    tryAgain: '尝试其他搜索'
  },
  categories: {
    title: '分类',
    information: '信息响应 (1xx)',
    success: '成功响应 (2xx)',
    redirection: '重定向消息 (3xx)',
    clientError: '客户端错误响应 (4xx)',
    serverError: '服务器错误响应 (5xx)',
    unofficial: '非官方代码',
    internet: 'Internet Information Services',
    nginx: 'Nginx',
    cloudflare: 'Cloudflare',
    aws: 'AWS'
  },
  statusInfo: {
    '100': {
      message: '继续',
      description: '服务器已收到请求头，客户端应继续发送请求体。'
    },
    '101': {
      message: '切换协议',
      description: '请求者已要求服务器切换协议，服务器已同意这样做。'
    },
    '200': {
      message: '成功',
      description: '请求已成功。成功的含义取决于HTTP方法。'
    },
    '201': {
      message: '已创建',
      description: '请求已成功，并因此创建了一个新的资源。'
    },
    '204': {
      message: '无内容',
      description: '服务器成功处理了请求，但不需要返回任何内容。'
    },
    '301': {
      message: '永久移动',
      description: '请求的资源的URL已永久更改。新的URL在响应中给出。'
    },
    '302': {
      message: '找到',
      description: '请求的资源的URL已临时更改。新的URL在响应中给出。'
    },
    '304': {
      message: '未修改',
      description: '无需重新传输资源，因为客户端仍有之前下载的副本。'
    },
    '400': {
      message: '错误请求',
      description: '由于语法无效，服务器无法理解请求。'
    },
    '401': {
      message: '未授权',
      description: '客户端必须进行身份验证才能获得请求的响应。'
    },
    '403': {
      message: '禁止',
      description: '客户端没有访问内容的权限。'
    },
    '404': {
      message: '未找到',
      description: '服务器找不到请求的资源。'
    },
    '500': {
      message: '服务器内部错误',
      description: '服务器遇到了一个它不知道如何处理的情况。'
    },
    '502': {
      message: '错误网关',
      description: '服务器作为网关或代理时，从上游服务器收到无效响应。'
    },
    '503': {
      message: '服务不可用',
      description: '服务器尚未准备好处理请求。常见原因是服务器正在进行维护或过载。'
    }
  },
  tools: {
    title: '工具',
    checkUrl: '检查URL状态',
    statusCodeFlow: '状态码流程图',
    apiTest: 'API测试器',
    debugger: '响应调试器',
    statusInspector: 'URL状态检查器'
  },
  features: {
    title: '功能',
    overview: '状态码概述',
    comparison: '状态码比较',
    troubleshooting: '故障排除指南',
    bestPractices: '最佳实践',
    codeExamples: '代码示例'
  },
  details: {
    title: '详细信息',
    history: '历史',
    browser: '浏览器行为',
    seo: 'SEO影响',
    security: '安全影响',
    bestPractices: '最佳实践',
    alternatives: '替代状态码',
    commonErrors: '常见错误'
  },
  codeExamples: {
    title: '代码示例',
    nodejs: 'Node.js',
    python: 'Python',
    php: 'PHP',
    java: 'Java',
    go: 'Go',
    copyCode: '复制代码',
    response: '响应示例',
    request: '请求示例'
  }
} 