export default {
  name: 'User Agent解析器',
  description: '解析和分析浏览器用户代理字符串，识别浏览器、操作系统和设备信息',

  input: {
    label: '用户代理 (User-Agent) 字符串',
    placeholder: '输入或粘贴用户代理字符串...'
  },

  actions: {
    parse: '解析',
    detect: '检测当前浏览器',
    clear: '清空'
  },

  results: {
    title: '解析结果',
    summary: '摘要',
    details: '详细信息',
    originalUA: '原始用户代理字符串'
  },

  sections: {
    browser: '浏览器',
    os: '操作系统',
    device: '设备',
    other: '其他信息'
  },

  deviceTypes: {
    mobile: '移动设备',
    tablet: '平板电脑',
    desktop: '桌面设备'
  },

  fields: {
    name: '名称',
    version: '版本',
    engine: '引擎',
    platform: '平台',
    type: '类型',
    vendor: '品牌',
    model: '型号',
    isMobile: '移动设备',
    isTablet: '平板电脑',
    isDesktop: '桌面设备'
  },

  messages: {
    parsingError: '解析用户代理字符串时出错',
    emptyInput: '请输入用户代理字符串',
    unknown: '未知',
    yes: '是',
    no: '否'
  },

  tips: {
    description: '用户代理(User-Agent)是浏览器发送给服务器的标识字符串，包含浏览器、操作系统和设备等信息。',
    useCases: '常用于网站分析、浏览器兼容性处理和设备适配等场景。'
  }
}; 