export default {
  name: 'HTTP头部安全检查器',
  description: '分析和评估HTTP响应头的安全性',
  title: 'HTTP头安全检测工具',
  intro: '分析网站的HTTP响应头，检测CSP、HSTS等安全配置，并提供改进建议',
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
    checkButton: '检查头部',
    analyzing: '分析中...'
  },
  results: {
    title: '安全头部分析',
    overview: '概述',
    score: '安全得分',
    totalScore: '总分100',
    scanned: '扫描的URL',
    date: '扫描日期',
    headers: {
      title: '发现的头部',
      name: '头部',
      value: '值',
      status: '状态'
    },
    allHeaders: {
      title: '所有响应头',
      name: '名称',
      value: '值',
      noData: '无响应头数据'
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
      description: '考虑添加以下头部以提高安全性：',
      example: '示例配置'
    },
    rating: {
      unknown: '未知',
      excellent: '优秀',
      good: '良好',
      fair: '一般',
      poor: '较差',
      high_risk: '风险高',
      descriptions: {
        unknown: '无法获取网站的安全头信息',
        excellent: '网站实施了所有主要的安全头部',
        good: '网站实施了大多数重要的安全头部',
        fair: '网站缺少一些重要的安全头部',
        poor: '网站缺少多个关键的安全头部',
        high_risk: '网站几乎没有实施安全头保护措施'
      }
    }
  },
  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: '强制使用HTTPS连接而非HTTP',
      recommendation: '添加"Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"',
      status: {
        good: '已正确配置',
        bad: '未配置',
        warning: '配置可改进'
      },
      recommendationConfigured: '现有配置已实施，确保包含足够长的max-age和includeSubDomains',
      recommendationMissing: '建议启用HSTS以确保所有通信都通过HTTPS进行'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: '防止MIME类型嗅探',
      recommendation: '添加"X-Content-Type-Options: nosniff"',
      status: {
        good: '已正确配置',
        bad: '未配置或配置不正确'
      },
      recommendationConfigured: '配置正确，保持当前设置',
      recommendationMissing: '建议将此头设置为"nosniff"值'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: '防止网站在iframe中被嵌入，从而防止点击劫持攻击',
      recommendation: '添加"X-Frame-Options: DENY"或"SAMEORIGIN"',
      status: {
        good: '已配置',
        bad: '未配置'
      },
      recommendationConfigured: '现有配置已实施，建议使用DENY或SAMEORIGIN',
      recommendationMissing: '建议配置此头为DENY或SAMEORIGIN以防止点击劫持'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: '控制用户代理允许加载的资源',
      recommendation: '添加带有适当指令的Content-Security-Policy头部',
      status: {
        good: '已正确配置',
        bad: '未配置',
        warning: '配置可改进'
      },
      recommendationConfigured: '现有配置已实施，确保定期审核和更新策略',
      recommendationMissing: '建议配置CSP以限制可加载的资源来源，从而提高防御XSS攻击的能力'
    },
    xXssProtection: {
      name: 'X-XSS-Protection',
      description: '此头在旧版浏览器中启用XSS过滤。在现代浏览器中，建议使用CSP代替。',
      recommendation: '虽然此头在现代浏览器中已被CSP替代，但仍建议设置为"1; mode=block"以兼容旧版浏览器',
      status: {
        enabled: '已启用',
        disabled: '已禁用',
        notConfigured: '未配置（现代浏览器建议使用CSP替代）'
      }
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: '控制Referer头部中包含的信息',
      recommendation: '添加"Referrer-Policy: no-referrer-when-downgrade"或更严格的策略',
      status: {
        good: '已配置',
        bad: '未配置'
      },
      recommendationConfigured: '现有配置已实施，建议使用strict-origin或strict-origin-when-cross-origin',
      recommendationMissing: '建议配置此头以控制引用来源信息的传递'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: '控制可以使用哪些浏览器功能和API',
      recommendation: '添加带有适当限制的Permissions-Policy头部',
      status: {
        good: '已配置',
        bad: '未配置'
      },
      recommendationConfigured: '现有配置已实施，确保限制不必要的功能',
      recommendationMissing: '建议配置此头以限制网站可以使用的浏览器功能'
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
    share: '分享结果',
    analyze: '分析头信息'
  },
  emptyState: {
    line1: '输入网站URL，分析HTTP响应头的安全配置',
    line2: '获取关于CSP、HSTS等安全头的详细评估与建议'
  },
  messages: {
    scanning: '正在扫描{url}...',
    completed: '扫描完成',
    error: '错误：{message}',
    timeout: '请求超时',
    invalidUrl: '无效的URL',
    invalidUrlFormat: '请输入有效的URL，以http://或https://开头',
    copied: '已复制到剪贴板',
    exportComplete: '报告导出成功',
    httpWarning: '警告：使用HTTP可能不安全',
    noHeaders: '未找到任何头部信息',
    fetchError: '无法获取头信息: {error}'
  }
} 