export default {
  name: 'User-Agent 生成器',
  description: '生成各种浏览器和设备的 User-Agent 字符串，用于网站测试、爬虫和开发',
  filters: {
    title: '过滤条件',
    browser: '浏览器',
    os: '操作系统',
    deviceType: '设备类型'
  },
  browsers: {
    all: '所有浏览器',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: '未知浏览器'
  },
  operatingSystems: {
    all: '所有系统',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: '未知系统'
  },
  deviceTypes: {
    all: '所有设备',
    desktop: '桌面电脑',
    mobile: '移动设备',
    tablet: '平板电脑',
    unknown: '未知设备'
  },
  generation: {
    quantity: '生成数量',
    generateRandom: '生成随机 User-Agent',
    clearResults: '清空结果'
  },
  results: {
    title: '生成结果',
    copyAll: '复制全部',
    empty: '请点击"生成随机 User-Agent"按钮生成结果'
  },
  messages: {
    copied: '已复制到剪贴板',
    allCopied: '所有 User-Agent 已复制到剪贴板',
    copyFailed: '复制失败，请手动复制'
  },
  info: {
    formatTitle: 'User-Agent 格式说明',
    formatDescription: 'User-Agent 字符串通常包含浏览器名称、版本、操作系统和设备信息等，格式如下：',
    formatExample: 'Mozilla/5.0 (平台信息) 引擎信息 浏览器信息',
    examplesTitle: '常见 User-Agent 示例：',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: '使用场景：',
    useCases: [
      '网站兼容性测试',
      '爬虫和数据采集',
      'API开发和测试',
      '绕过浏览器检测',
      '模拟不同设备访问'
    ]
  }
} 