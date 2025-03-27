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
  }
} 