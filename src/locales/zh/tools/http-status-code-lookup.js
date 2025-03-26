export default {
  name: 'HTTP状态码查询',
  description: '查询和理解HTTP响应状态码和消息',
  search: {
    title: '查找状态码',
    placeholder: '输入状态码或按描述搜索',
    button: '查询',
    recent: '最近搜索',
    common: '常见状态码',
    filter: {
      all: '所有类别',
      informational: '1xx - 信息响应',
      success: '2xx - 成功响应',
      redirection: '3xx - 重定向',
      clientError: '4xx - 客户端错误',
      serverError: '5xx - 服务器错误'
    }
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
    tryAgain: '尝试其他搜索',
    example: '示例',
    notes: '注意事项'
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
      description: '服务器已收到请求头，客户端应继续发送请求体。',
      shortDescription: '继续发送请求',
      fullDescription: '服务器已收到请求的初始部分，客户端应继续发送剩余的请求。',
      notes: '通常用于客户端在发送较大请求体之前，先检查服务器是否会接受该请求。'
    },
    '101': {
      message: '切换协议',
      description: '请求者已要求服务器切换协议，服务器已同意这样做。',
      shortDescription: '切换协议',
      fullDescription: '服务器已经理解了客户端的请求，并将通过Upgrade消息头通知客户端采用不同的协议来完成这个请求。',
      notes: '常用于WebSocket连接的建立过程。'
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
  },
  description: {
    intro: 'HTTP状态码是服务器对浏览器请求的响应状态，分为5个类别：',
    informational: '1xx（信息性状态码）- 接收的请求正在处理',
    success: '2xx（成功状态码）- 请求正常处理完毕',
    redirection: '3xx（重定向状态码）- 需要进行附加操作以完成请求',
    clientError: '4xx（客户端错误状态码）- 服务器无法处理请求',
    serverError: '5xx（服务器错误状态码）- 服务器处理请求出错'
  },
  codes: {
    '100': {
      shortDescription: '继续发送请求',
      description: '服务器已收到请求的初始部分，客户端应继续发送剩余的请求。',
      notes: '通常用于客户端在发送较大请求体之前，先检查服务器是否会接受该请求。'
    },
    '101': {
      shortDescription: '切换协议',
      description: '服务器已经理解了客户端的请求，并将通过Upgrade消息头通知客户端采用不同的协议来完成这个请求。',
      notes: '常用于WebSocket连接的建立过程。'
    },
    '200': {
      shortDescription: '请求成功',
      description: '请求已成功，服务器已返回请求的内容。这是最常见的状态码。',
      notes: '所有GET请求成功都应返回此状态码。'
    },
    '201': {
      shortDescription: '已创建',
      description: '请求已成功，并且服务器创建了新的资源。通常在POST请求后返回。',
      notes: '应返回新创建资源的位置（URI）。'
    },
    '204': {
      shortDescription: '无内容',
      description: '服务器成功处理了请求，但不需要返回任何实体内容。',
      notes: '常用于DELETE请求成功或仅需要客户端重置视图的情况。'
    },
    '301': {
      shortDescription: '永久重定向',
      description: '请求的资源已永久移动到新位置，以后任何对此资源的引用都应使用新的URL。',
      notes: '搜索引擎会更新资源的URL，浏览器通常会缓存此重定向。'
    },
    '302': {
      shortDescription: '临时重定向',
      description: '请求的资源临时从不同的URL响应请求，但请求者应继续使用原有URL访问。',
      notes: '与301不同，搜索引擎不会更新资源链接，浏览器可能不会缓存此重定向。'
    },
    '304': {
      shortDescription: '未修改',
      description: '资源未被修改，可使用客户端缓存的版本。通常用于条件性GET请求。',
      notes: '服务器不应返回响应体，有助于提高性能和减少带宽消耗。'
    },
    '400': {
      shortDescription: '错误请求',
      description: '服务器无法理解请求的格式，客户端不应该在未修改请求的情况下重复提交。',
      notes: '通常是由于请求参数格式错误、缺少必要参数或参数值无效。'
    },
    '401': {
      shortDescription: '未授权',
      description: '请求要求用户的身份认证，如用户未提供凭据或提供的凭据无效。',
      notes: '客户端应提供或重新提供正确的认证信息。'
    },
    '403': {
      shortDescription: '禁止访问',
      description: '服务器理解请求但拒绝执行，与401不同，身份认证不会提供任何帮助。',
      notes: '通常是由于权限不足，如尝试访问只有管理员才能查看的内容。'
    },
    '404': {
      shortDescription: '未找到',
      description: '服务器找不到请求的资源，可能是URL拼写错误或资源已被删除。',
      notes: '最常见的错误状态码之一，应明确告知用户资源不存在。'
    },
    '405': {
      shortDescription: '方法不允许',
      description: '请求行中指定的请求方法不能被用于请求相应的资源。',
      notes: '响应中必须包含Allow头，指明对该资源有效的请求方法。'
    },
    '409': {
      shortDescription: '冲突',
      description: '请求与服务器当前状态冲突，通常出现在PUT请求中。',
      notes: '常见于尝试创建已存在的资源或并发编辑同一资源的情况。'
    },
    '429': {
      shortDescription: '请求过多',
      description: '用户在给定时间内发送了太多请求（"限流"）。',
      notes: '应包含Retry-After头，告知客户端多久后可以再次发送请求。'
    },
    '500': {
      shortDescription: '服务器内部错误',
      description: '服务器遇到了不知道如何处理的情况，通常是代码错误或临时故障。',
      notes: '服务器错误状态码中最常见的一种，应尽可能提供详细的错误信息和日志以便调试。'
    },
    '502': {
      shortDescription: '错误网关',
      description: '作为网关或代理的服务器从上游服务器收到无效响应。',
      notes: '通常出现在使用反向代理或负载均衡器时，上游服务不可用或响应异常。'
    },
    '503': {
      shortDescription: '服务不可用',
      description: '服务器暂时不可用，通常是由于超载或系统维护。',
      notes: '应包含Retry-After头指示客户端多久后重试，这有助于减轻服务器负载。'
    },
    '504': {
      shortDescription: '网关超时',
      description: '作为网关或代理的服务器未及时从上游服务器收到响应。',
      notes: '常见于代理后的服务处理时间过长或网络连接问题。'
    }
  }
} 