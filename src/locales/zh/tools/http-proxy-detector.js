export default {
  name: 'HTTP代理检测器',
  description: '检测和分析连接中的HTTP代理和中间设备',
  title: '前端代理检测器',
  intro: '检测您的网络连接是否使用了代理，分析X-Forwarded-For和其他代理相关的HTTP头信息',
  detection: {
    title: '代理检测',
    start: '开始检测',
    detecting: '检测中...',
    stop: '停止检测',
    completed: '检测完成',
    noProxies: '未检测到代理',
    proxiesFound: '检测到的代理：{count}'
  },
  options: {
    title: '检测选项',
    testUrl: '测试URL',
    urlPlaceholder: '输入要测试的URL（默认：自动）',
    testMethod: 'HTTP方法',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: '超时（秒）',
    parallel: '并行测试',
    techniques: '检测技术',
    headerAnalysis: '头部分析',
    traceMethod: 'TRACE方法',
    viaHeader: 'Via头部检查',
    maxForwards: 'Max-Forwards测试',
    fingerprinting: '代理指纹识别',
    timing: '时序分析',
    advanced: '高级选项',
    apiSelection: '选择API'
  },
  apis: {
    ipify: 'ipify API',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },
  results: {
    title: '检测结果',
    summary: '代理摘要',
    headers: '完整请求头',
    info: '代理信息解释',
    detected: '检测到代理',
    notDetected: '未检测到代理',
    detectedDescription: '您的请求可能经过了一个或多个代理服务器',
    notDetectedDescription: '您的请求似乎直接到达了目标服务器，未经过代理',
    clientInfo: '客户端IP信息',
    remoteIp: '远程IP地址',
    location: '地理位置',
    isp: 'ISP提供商',
    proxyHeaders: '代理相关头信息',
    details: '详细结果',
    proxy: '代理',
    type: '类型',
    ip: 'IP地址',
    software: '软件',
    confidence: '可信度',
    latency: '延迟',
    headers: '修改的头部',
    fingerprint: '指纹',
    export: '导出结果',
    clear: '清除结果',
    noData: '无可用数据',
    originalRequest: '原始请求',
    modifiedRequest: '修改后的请求',
    proxyChain: '代理链',
    server: '服务器',
    notSet: '未设置'
  },
  types: {
    forward: '正向代理',
    reverse: '反向代理',
    transparent: '透明代理',
    anonymous: '匿名代理',
    elite: '高匿代理',
    caching: '缓存代理',
    gateway: '网关',
    loadBalancer: '负载均衡器',
    cdn: 'CDN',
    corporate: '企业代理',
    unknown: '未知类型'
  },
  headers: {
    title: '头部分析',
    original: '原始头部',
    modified: '修改后的头部',
    added: '添加的头部',
    removed: '移除的头部',
    changed: '更改的头部',
    suspicious: '可疑头部',
    select: '选择要分析的头部',
    name: '头部名称',
    value: '值',
    all: '所有HTTP请求头',
    notFound: '未发现此头信息'
  },
  details: {
    title: '代理详情',
    software: '软件',
    version: '版本',
    features: '功能',
    modifications: '修改',
    behavior: '行为',
    security: '安全影响',
    recommendations: '建议'
  },
  map: {
    title: '连接图',
    client: '您的客户端',
    target: '目标服务器',
    hop: '跳点 {n}',
    direct: '直接连接',
    proxied: '代理连接',
    unknown: '未知路径'
  },
  actions: {
    copyHeaders: '复制请求头',
    copyToClipboard: '复制到剪贴板'
  },
  messages: {
    startDetection: '开始代理检测...',
    detectionComplete: '代理检测完成',
    error: '检测失败: {message}',
    timeout: '检测超时',
    exportComplete: '结果导出成功',
    noConnection: '无法建立连接',
    limitedResults: '由于限制，结果有限',
    privateNetwork: '检测到私有网络',
    publicNetwork: '检测到公共网络',
    warning: '警告：{message}',
    proxyRemoved: '可能有代理正在移除检测头部',
    copied: '已复制请求头到剪贴板',
    copyFailed: '复制失败，请手动复制',
    unknown: '未知错误'
  },
  info: {
    description: 'HTTP代理是位于客户端和服务器之间的中间服务器，它可以出于各种目的处理HTTP请求。代理可以由网络提供商、组织、公司或个人设置。'
  },
  xff: {
    title: '什么是X-Forwarded-For?',
    description: 'X-Forwarded-For (XFF) 是一个HTTP头字段，用于标识通过HTTP代理或负载均衡器连接到Web服务器的客户端的原始IP地址。当请求经过代理时，服务器通常只能看到代理服务器的IP地址，而XFF头提供了一个追溯原始客户端IP的方法。',
    notFound: '未发现X-Forwarded-For头，这表明请求可能未经过代理或代理未添加此头信息。',
    format: {
      title: 'XFF头的格式',
      description: 'XFF头的标准格式是一个逗号分隔的IP地址列表，最左边的IP是原始客户端，而后续的IP是经过的代理服务器：'
    },
    related: {
      title: '其他相关代理头',
      forwardedProto: '标识客户端连接到代理使用的协议(HTTP或HTTPS)',
      forwardedHost: '标识客户端请求的原始主机名',
      via: '指示请求和响应经过的代理服务器',
      forwarded: '较新的标准头，包含了客户端和所有代理信息'
    },
    importance: {
      title: '为什么代理信息很重要',
      security: '安全和访问控制 - 准确识别客户端IP对于防止滥用和实施IP-based访问控制很重要',
      logging: '日志记录 - 对于审计和问题诊断，记录真实的客户端IP比代理IP更有用',
      geolocation: '地理位置服务 - 基于IP的地理位置服务需要真实的客户端IP才能提供准确结果',
      content: '内容定制 - 一些服务根据用户地理位置提供本地化内容'
    },
    security: {
      title: '安全注意事项',
      description: '需要注意的是，X-Forwarded-For头可以被客户端伪造。在高安全性要求的环境中，应该仅信任来自已知代理服务器添加的XFF信息，或使用其他方法验证客户端IP。'
    }
  },
  privacy: {
    title: '隐私提示',
    description: '检测过程中，您的IP地址和HTTP头信息将被发送到第三方API服务用于分析。这些服务可能会收集并存储这些信息以提供服务。',
    suggestion: '如有隐私顾虑，请选择不同的API提供商或考虑使用VPN服务。'
  },
  article: {
    title: "HTTP代理检测器 - 识别和分析网络代理",
    intro: {
      title: "什么是HTTP代理检测？",
      p1: "<b>HTTP代理检测</b>是确定您的互联网连接是否通过一个或多个被称为代理的中间服务器的过程。我们的HTTP代理检测工具通过检查HTTP头（如X-Forwarded-For、Via等指示符）来分析您的网络请求，以识别连接路径中代理的存在。",
      p2: "代理是位于您的设备和您访问的网站之间的中间服务器。它们可用于各种合法目的，如通过缓存提高性能、实施访问控制或提供匿名性。然而，在未经您知情或同意的情况下使用代理也可能带来安全隐患。我们的<b>代理检测工具</b>帮助您识别网络中的隐藏代理，提高安全意识并协助故障排除。",
      p3: "当您通过<b>HTTP代理服务器</b>连接时，有关您浏览活动的某些信息可能对代理运营商可见。这个在线代理检测工具使您了解您的连接是直接的还是通过一个或多个代理层，让您对在线隐私和安全有更大的控制权。"
    },
    useCases: {
      title: "代理检测的实际应用",
      case1: "<b>网络故障排除</b>：当遇到连接问题时，检测代理可以帮助确定是否是中间服务器导致问题。IT专业人员经常需要验证代理配置以诊断网络问题。",
      case2: "<b>安全验证</b>：确保您的私人浏览不会通过可能监控或修改您流量的未授权代理服务器。组织可以使用代理检测来验证公司安全策略是否正确实施。",
      case3: "<b>网站开发人员</b>：网站开发人员需要了解他们的内容如何传递给用户，尤其是在使用充当代理的内容分发网络(CDN)或负载均衡器时。测试正确的头部处理对安全和分析至关重要。",
      case4: "<b>地理限制验证</b>：检查您的VPN或代理服务是否正确掩盖您的位置以访问地区限制内容。我们的工具帮助验证地理位置绕过措施是否正常运行。",
      case5: "<b>企业环境检查</b>：对于在企业环境中工作的员工，验证可能影响您的互联网访问或应用程序功能的公司代理的存在和配置。在排查应用程序连接问题时，这一点尤为重要。"
    },
    tutorial: {
      title: "如何检测连接中的HTTP代理",
      intro: "按照以下步骤指南有效使用我们的HTTP代理检测工具并了解您的网络配置：",
      step1: {
        title: "步骤1：启动检测过程",
        description: "点击工具界面上的<b>\"开始检测\"</b>按钮开始。检测器将通过向专门的API端点发出请求立即开始分析您的连接。默认情况下，该工具会自动选择最可靠的检测方法，但您可以使用下拉选择器选择不同的API进行更全面的测试。"
      },
      step2: {
        title: "步骤2：查看摘要结果",
        description: "检测完成后，<b>\"代理摘要\"</b>选项卡将显示您的连接中是否检测到代理。寻找表示直接连接的绿色对勾标记或显示发现代理的黄色警告图标。摘要还将显示您检测到的IP地址和位置信息，这可以帮助验证您的实际位置是否被掩盖。"
      },
      step3: {
        title: "步骤3：详细检查代理头",
        description: "点击<b>\"完整请求头\"</b>选项卡查看请求中的所有HTTP头。特别注意X-Forwarded-For、Via和Forwarded等表示代理使用的头。X-Forwarded-For头特别重要，因为它包含一系列IP地址，显示您的请求通过各种代理的路径。您可以使用此部分底部的按钮将所有头复制到剪贴板进行进一步分析。"
      },
      step4: {
        title: "步骤4：理解代理信息",
        description: "要更深入地了解检测到的头的含义，请访问<b>\"代理信息解释\"</b>选项卡。本节解释了不同代理相关头的目的及其对连接安全的影响。使用这些知识确定检测到的代理是预期的（如您的企业网络代理）还是潜在的不需要的中间人。"
      }
    },
    techniques: {
      title: "了解HTTP代理检测技术",
      intro: "我们的工具使用多种方法准确检测网络连接中的代理。以下是所使用的关键技术概述：",
      method1: {
        title: "头部分析",
        description: "最常见的检测方法是检查通常由代理服务器添加的HTTP头，如X-Forwarded-For、Via和Forwarded。这些头通常包含有关客户端原始IP地址和代理链的信息。"
      },
      method2: {
        title: "IP比较",
        description: "我们的工具将服务器看到的IP地址与预期的客户端IP进行比较。这些IP之间的差异通常表示存在代理。这种方法特别适用于检测透明代理。"
      },
      method3: {
        title: "响应时间分析",
        description: "通过分析响应时间，我们有时可以检测到代理，因为它们通常会增加网络请求的延迟。缓存代理可能会根据内容是否被缓存而显示不一致的时间模式。"
      },
      method4: {
        title: "服务器端检测",
        description: "我们的API执行服务器端检查，可以根据端口扫描、已知代理IP数据库和HTTP请求中的行为模式识别某些类型的代理。"
      }
    },
    faq: {
      title: "关于HTTP代理检测的常见问题",
      q1: "为什么我应该检查我的连接是否使用代理？",
      a1: "检查代理很重要，原因有几个：<b>安全意识</b>（了解您的流量是否被监控），<b>隐私关注</b>（了解谁可能访问您的浏览数据），<b>排除网络问题</b>（确定代理是否导致连接问题），以及<b>验证VPN功能</b>（确保您的隐私工具正常工作）。定期进行代理检测有助于保持对网络安全状况的意识。",
      
      q2: "HTTP代理检测工具能否识别所有类型的代理？",
      a2: "虽然我们的HTTP代理检测器通过头部分析能有效识别常规代理，但某些高级代理类型可能更难检测。<b>透明代理</b>不修改头部，有时可以通过IP差异识别。设计用于隐藏其存在的<b>匿名代理</b>可能通过时间分析或服务器端技术检测。然而，专门设计用于避免检测的<b>高匿名代理</b>可能无法通过客户端工具识别。为了更全面的检测，我们建议在我们的工具中使用多个API选项。",
      
      q3: "使用代理是否违法或对我的计算机有害？",
      a3: "在大多数国家使用代理通常是合法的，对计算机也无害。代理有许多合法用途，包括通过缓存<b>提高互联网性能</b>，通过掩盖IP地址<b>增强隐私</b>，<b>访问地区限制内容</b>，以及在企业环境中<b>实施安全策略</b>。但是，合法性取决于代理的使用方式——通过代理绕过版权限制或违反服务条款可能会有问题。请确保您在遵守当地法律和服务条款的情况下使用代理。",
      
      q4: "代理和VPN之间有什么区别？",
      a4: "虽然代理和VPN都通过中间服务器路由您的流量，但它们在几个方面有显著差异：<b>VPN加密所有流量</b>（您的设备和VPN服务器之间），而大多数代理不提供加密。VPN通常会路由您设备的<b>所有互联网流量</b>，而代理通常只处理特定应用程序或协议的流量。与标准代理相比，VPN通常提供<b>更好的隐私保护</b>和安全功能。由于这两种技术都修改了您的连接路径，我们的代理检测器可能会将您的VPN连接识别为代理。",
      
      q5: "为什么我的公司使用代理服务器，我应该担心吗？",
      a5: "公司出于几个合法原因实施代理服务器：<b>内容过滤</b>（限制访问某些网站），<b>带宽优化</b>（缓存经常访问的内容），<b>增强安全性</b>（扫描恶意软件或漏洞），<b>监控员工活动</b>（确保遵守可接受的使用政策），以及<b>提供远程访问</b>内部资源。虽然企业代理通常不是隐私问题，但重要的是要记住，您在公司网络上的在线活动可能会被监控。如果我们的代理检测器识别出企业代理，这通常是企业环境中的正常情况。",
      
      q6: "内容分发网络(CDN)与代理有什么关系？",
      a6: "内容分发网络(CDN)的功能类似于<b>反向代理</b>，可能会被我们的工具检测到。CDN通过全球服务器网络分发网站内容，以提高加载速度和可靠性。当您使用CDN访问网站时，您的请求通常会被路由到最近的CDN服务器，而不是原始服务器。这在您的连接中显示为代理，因为CDN服务器充当中介。与从隐私角度可能令人担忧的传统代理不同，CDN由网站所有者实施，以改善用户体验，是现代网络基础设施的正常部分。"
    },
    relatedTools: {
      title: "相关网络分析工具",
      description: "探索这些额外工具，获取有关您的网络配置和安全性的更多见解：",
      tool1: {
        name: "HTTP头部安全检查器",
        url: "https://www.ufreetools.com/tool/http-header-security-checker",
        description: "分析网站的HTTP响应头，检测CSP、HSTS等安全配置，并提供改进建议"
      },
      tool2: {
        name: "请求头编辑器",
        url: "https://www.ufreetools.com/tool/request-header-editor",
        description: "创建、编辑和测试HTTP请求头"
      },
      tool3: {
        name: "HTTP状态码查询",
        url: "https://www.ufreetools.com/tool/http-status-code-lookup",
        description: "查询和理解HTTP响应状态码和消息"
      },
      tool4: {
        name: "URL参数解析器",
        url: "https://www.ufreetools.com/tool/url-params-parser",
        description: "解析、分析和操作URL参数和查询字符串"
      }
    },
    resources: {
      title: "了解更多关于代理和网络安全",
      resource1: {
        name: "OWASP测试指南",
        url: "https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf",
        description: "OWASP是一个全球性的免费和开放的社区，专注于提高应用软件的安全性。"
      },
      resource2: {
        name: "HTTP头 - MDN Web文档",
        url: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers",
        description: "Mozilla开发者网络关于HTTP头的详细文档，包括与代理和转发相关的内容。"
      },
      resource3: {
        name: "互联网工程任务组(IETF) - HTTP Forwarded头",
        url: "https://tools.ietf.org/html/rfc7239",
        description: "定义Forwarded HTTP头的官方RFC 7239文档，该头标准化了代理添加的信息。"
      }
    }
  }
} 