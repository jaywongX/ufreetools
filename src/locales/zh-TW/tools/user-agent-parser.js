export default {
  name: 'User Agent 解析器',
  description: '解析和分析瀏覽器用戶代理字串，識別瀏覽器、作業系統和裝置資訊',

  input: {
    label: '用戶代理 (User-Agent) 字串',
    placeholder: '輸入或貼上用戶代理字串...'
  },

  actions: {
    parse: '解析',
    detect: '偵測當前瀏覽器',
    clear: '清空'
  },

  results: {
    title: '解析結果',
    summary: '摘要',
    details: '詳細資訊',
    originalUA: '原始用戶代理字串'
  },

  sections: {
    browser: '瀏覽器',
    os: '作業系統',
    device: '裝置',
    other: '其他資訊'
  },

  deviceTypes: {
    mobile: '行動裝置',
    tablet: '平板電腦',
    desktop: '桌面裝置'
  },

  fields: {
    name: '名稱',
    version: '版本',
    engine: '引擎',
    platform: '平台',
    type: '類型',
    vendor: '品牌',
    model: '型號',
    isMobile: '行動裝置',
    isTablet: '平板電腦',
    isDesktop: '桌面裝置'
  },

  messages: {
    parsingError: '解析用戶代理字串時出錯',
    emptyInput: '請輸入用戶代理字串',
    unknown: '未知',
    yes: '是',
    no: '否'
  },

  tips: {
    description: '用戶代理(User-Agent)是瀏覽器發送給伺服器的識別字串，包含瀏覽器、作業系統和裝置等資訊。',
    useCases: '常用於網站分析、瀏覽器相容性處理和裝置適配等場景。'
  }
};