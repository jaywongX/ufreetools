export default {
  name: '用户代理生成器',
  description: '生成和自定义用户代理字符串用于测试和开发',
  options: {
    deviceType: '设备类型',
    platform: '平台',
    browser: '浏览器',
    browserVersion: '浏览器版本',
    osVersion: '操作系统版本',
    architecture: '架构',
    engine: '浏览器引擎',
    customization: '自定义选项'
  },
  deviceTypes: {
    desktop: '桌面电脑',
    mobile: '手机',
    tablet: '平板电脑',
    tv: '智能电视',
    console: '游戏主机',
    bot: '机器人/爬虫'
  },
  platforms: {
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    chromeos: 'Chrome OS'
  },
  browsers: {
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    edge: 'Edge',
    opera: 'Opera',
    ie: 'Internet Explorer'
  },
  architectures: {
    x86: 'x86',
    x64: 'x64',
    arm: 'ARM',
    arm64: 'ARM64'
  },
  engines: {
    webkit: 'WebKit',
    gecko: 'Gecko',
    blink: 'Blink',
    trident: 'Trident',
    presto: 'Presto'
  },
  actions: {
    generate: '生成用户代理',
    copy: '复制用户代理',
    randomize: '随机用户代理',
    clear: '清除',
    addToList: '添加到列表',
    saveAs: '另存为...'
  },
  output: {
    result: '生成的用户代理',
    preview: '浏览器预览',
    saved: '已保存的用户代理',
    copySuccess: '用户代理已复制到剪贴板'
  },
  customPresets: {
    title: '自定义预设',
    save: '保存当前',
    delete: '删除',
    load: '加载预设',
    noPresets: '没有已保存的预设'
  },
  predefined: {
    title: '常用用户代理',
    latestBrowsers: '最新浏览器',
    mobileDevices: '移动设备',
    searchEngineBots: '搜索引擎机器人',
    oldBrowsers: '旧版浏览器'
  },
  messages: {
    presetSaved: '预设保存成功',
    presetDeleted: '预设已删除',
    invalidUserAgent: '无效的用户代理格式'
  }
} 