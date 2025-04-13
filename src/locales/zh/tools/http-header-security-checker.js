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
  },
  article: {
    title: "HTTP头部安全检查器：增强您网站的安全状态",
    features: {
      title: "了解HTTP头部安全",
      description: "<strong>HTTP头部安全检查器</strong>是一个专门设计用来分析和评估任何网站<strong>安全头部</strong>的工具。<strong>安全头部</strong>是服务器可以设置的特殊HTTP响应头，通过帮助防御跨站脚本攻击（XSS）、点击劫持和其他代码注入攻击等常见Web漏洞，提供额外的<strong>安全</strong>层。<br><br>我们的工具会扫描关键<strong>安全头部</strong>，包括内容安全策略（CSP）、严格传输安全（HSTS）、X-Content-Type-Options、X-Frame-Options等。它评估现有的<strong>头部配置</strong>，识别缺失的<strong>安全头部</strong>，并提供全面的<strong>安全得分</strong>和可行的建议，以改善您网站的<strong>安全状态</strong>。",
      useCases: {
        title: "HTTP头部安全检查器的常见应用场景",
        items: [
          "Web开发人员在部署前对新开发的网站进行安全审计",
          "安全专业人员执行渗透测试和漏洞评估",
          "系统管理员验证跨多个域的服务器安全配置",
          "DevOps团队在CI/CD流程中实施持续安全监控",
          "网站所有者在实施推荐的头部后验证其安全状态",
          "安全顾问向客户展示改进安全措施的必要性",
          "合规官员确保网站符合行业安全标准和法规"
        ]
      }
    },
    faq: {
      title: "关于HTTP头部安全的常见问题",
      items: [
        {
          question: "什么是HTTP安全头部，为什么它们很重要？",
          answer: "HTTP安全头部是从服务器发送到浏览器的特殊指令，用于控制浏览器在处理您网站内容时应该如何行为。它们非常重要，因为它们提供了额外的安全层，可以防御XSS、CSRF、点击劫持和代码注入攻击等常见Web漏洞。正确配置的安全头部可以以最小的努力显著增强您网站的安全状态。"
        },
        {
          question: "每个网站应该实施哪些安全头部？",
          answer: "至少，每个现代网站都应该实施：内容安全策略（CSP）以防止XSS攻击，严格传输安全（HSTS）以强制使用HTTPS，X-Content-Type-Options以防止MIME类型嗅探，X-Frame-Options以防止点击劫持，以及Referrer-Policy以控制引用头中的信息。我们的安全头部检查器会自动评估这些必要的头部及更多。"
        },
        {
          question: "安全得分是如何计算的？",
          answer: "安全得分是基于关键安全头部的存在和正确配置计算的。主要安全头部如内容安全策略和HSTS各贡献最多20点，而X-Content-Type-Options和X-Frame-Options等其他头部各贡献10-15点。我们还评估实施的质量，而不仅仅是头部的存在，最高分为100分。"
        },
        {
          question: "我可以使用这个工具检查我不拥有的网站吗？",
          answer: "是的，您可以使用HTTP头部安全检查器分析任何公开可访问的网站。该工具只检查HTTP响应头，这是Web服务器发送的公开可用信息。但是，我们建议主要在您拥有或有权测试的网站上使用它。"
        },
        {
          question: "如何实施此工具推荐的安全头部？",
          answer: "实施取决于您的Web服务器或平台。对于Apache，您可以在.htaccess文件中添加头部。对于Nginx，您可以在服务器配置中添加它们。许多内容管理系统都有安全头部插件。HTTP头部安全检查器提供了示例配置，您可以根据特定环境进行调整。"
        }
      ]
    },
    guide: {
      title: "如何使用HTTP头部安全检查器",
      steps: [
        "在URL输入字段中输入您要检查的网站的完整URL（必须包含http://或https://）",
        "对于高级检查，如果网站使用重定向，请考虑启用'跟随重定向'等选项",
        "点击'检查头部'按钮开始安全分析",
        "查看结果部分顶部的安全得分和总体评级",
        "检查检测到的安全头部的详细分析，每个都标有状态指示符（良好、警告或不良）",
        "点击任何安全头部以展开并查看详细信息，包括其当前值、用途和具体建议",
        "在'所有响应头'部分查看服务器返回的所有HTTP响应头的完整列表",
        "根据提供的建议在您的Web服务器上实施推荐的安全头部，然后再次运行检查器以验证改进"
      ]
    },
    conclusion: "定期检查和更新您网站的安全头部是Web安全维护中的基本实践。使用HTTP头部安全检查器，您可以轻松识别当前配置中的弱点，并实施必要的改进以增强对常见Web攻击的防御。请记住，安全头部只是全面安全策略的一个方面，但它们以相对较小的实施努力提供了显著的保护。"
  }
} 