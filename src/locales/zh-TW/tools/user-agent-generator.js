export default {
  name: 'User Agent 產生器',
  description: '產生各種瀏覽器和裝置的 User-Agent 字串，用於網站測試、爬蟲和開發',

  filters: {
    title: '篩選條件',
    browser: '瀏覽器',
    os: '作業系統',
    deviceType: '裝置類型'
  },

  browsers: {
    all: '所有瀏覽器',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: '未知瀏覽器'
  },

  operatingSystems: {
    all: '所有系統',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: '未知系統'
  },

  deviceTypes: {
    all: '所有裝置',
    desktop: '桌上型電腦',
    mobile: '行動裝置',
    tablet: '平板電腦',
    unknown: '未知裝置'
  },

  generation: {
    quantity: '產生數量',
    generateRandom: '產生隨機 User-Agent',
    clearResults: '清空結果'
  },

  results: {
    title: '產生結果',
    copyAll: '複製全部',
    empty: '請點擊"產生隨機 User-Agent"按鈕產生結果'
  },

  messages: {
    copied: '已複製到剪貼簿',
    allCopied: '所有 User-Agent 已複製到剪貼簿',
    copyFailed: '複製失敗，請手動複製'
  },

  info: {
    formatTitle: 'User-Agent 格式說明',
    formatDescription: 'User-Agent 字串通常包含瀏覽器名稱、版本、作業系統和裝置資訊等，格式如下：',
    formatExample: 'Mozilla/5.0 (平台資訊) 引擎資訊 瀏覽器資訊',
    examplesTitle: '常見 User-Agent 範例：',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: '使用場景：',
    useCases: [
      '網站相容性測試',
      '爬蟲和資料採集',
      'API開發和測試',
      '繞過瀏覽器檢測',
      '模擬不同裝置存取'
    ]
  }
};