export default {
  name: 'JavaScript格式化',
  description: '在線JavaScript格式化與驗證工具，支援壓縮和美化',
  options: {
    indent: '縮進',
    quotes: '引號樣式',
    semicolons: '分號',
    trailingComma: '尾隨逗號'
  },
  actions: {
    format: '格式化JavaScript',
    minify: '壓縮',
    beautify: '美化',
    clear: '清除',
    copy: '複製',
    download: '下載'
  },
  messages: {
    copied: '已複製到剪貼簿！',
    formatSuccess: 'JavaScript格式化成功',
    formatError: '格式化JavaScript時出錯'
  }
}