export default {
  name: 'JSON格式化工具',
  description: '線上JSON格式化與驗證工具，支援壓縮和美化',

  options: {
    indent: '縮進',
    sort: '排序鍵',
    compress: '壓縮',
    beautify: '美化'
  },

  actions: {
    format: '格式化JSON',
    compress: '壓縮',
    clear: '清除',
    copy: '複製',
    download: '下載',
    transferMeaning: '轉義',
    contraposition: '反轉義'
  },

  messages: {
    invalidJson: 'JSON語法無效',
    copied: '已複製到剪貼簿！',
    empty: '請輸入JSON內容',
    formatTip: '格式化或壓縮JSON後顯示屬性列表',
    formatSuccess: 'JSON格式化成功',
    compressSuccess: 'JSON壓縮成功',
    escapeSuccess: 'JSON轉義成功',
    unescapeSuccess: 'JSON反轉義成功',
    copyFailed: '複製失敗，請手動複製'
  },

  labels: {
    jsonData: 'JSON數據',
    propertyList: '屬性列表',
    clickToCopy: '(點擊值複製)'
  },

  placeholders: {
    jsonInput: '貼上您的JSON數據...'
  }
};