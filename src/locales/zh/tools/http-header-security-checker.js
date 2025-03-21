export default {
  name: 'HTTP头部安全检查器',
  description: '分析和评估HTTP响应头的安全性',
  input: {
    title: '输入URL或头部',
    url: 'URL',
    urlPlaceholder: '输入要检查的URL（例如：https://example.com）',
    headers: '或直接粘贴HTTP头部',
    headersPlaceholder: '在此粘贴原始HTTP头部...',
    options: '扫描选项',
    followRedirects: '跟随重定向',
    includeSubresources: '检查子资源（CSS、JS等）',
    timeout: '超时（秒）',
    checkButton: '检查头部'
  },
  results: {
    title: '安全头部分析',
    overview: '概述',
    score: '安全得分',
    scanned: '扫描的URL',
    date: '扫描日期',
    headers: {
      title: '发现的头部',
      name: '头部',
      value: '值',
      status: '状态'
    },
    missing: {
      title: '缺失的安全头部',
      description: '未找到这些推荐的安全头部：'
    },
    issues: {
      title: '安全问题',
      critical: '严重',
      high: '高',
      medium: '中',
      low: '低',
      info: '信息'
    },
    recommendations: {
      title: '建议',
      description: '考虑添加以下头部以提高安全性：'
    }
  },
  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: '强制使用HTTPS连接而非HTTP',
      recommendation: '添加"Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: '防止MIME类型嗅探',
      recommendation: '添加"X-Content-Type-Options: nosniff"'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: '保护against点击劫持攻击',
      recommendation: '添加"X-Frame-Options: DENY"或"SAMEORIGIN"'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: '控制用户代理允许加载的资源',
      recommendation: '添加带有适当指令的Content-Security-Policy头部'
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: '控制Referer头部中包含的信息',
      recommendation: '添加"Referrer-Policy: no-referrer-when-downgrade"或更严格的策略'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: '控制可以使用哪些浏览器功能和API',
      recommendation: '添加带有适当限制的Permissions-Policy头部'
    }
  },
  status: {
    good: '良好',
    warning: '警告',
    bad: '不良',
    info: '信息',
    notApplicable: '不适用'
  },
  actions: {
    export: '导出报告',
    copyHeaders: '复制头部',
    copyRecommendations: '复制建议',
    scan: '新扫描',
    share: '分享结果'
  },
  messages: {
    scanning: '正在扫描{url}...',
    completed: '扫描完成',
    error: '错误：{message}',
    timeout: '请求超时',
    invalidUrl: '无效的URL',
    copied: '已复制到剪贴板',
    exportComplete: '报告导出成功'
  }
} 