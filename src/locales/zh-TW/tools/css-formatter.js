export default {
  name: 'CSS格式化',
  description: '格式化和美化CSS代碼以提高可讀性',
  options: {
    indentSize: '縮進大小',
    indentWithTabs: '使用製表符縮進',
    convertQuotes: '轉換引號',
    sortSelectors: '排序選擇器',
    sortProperties: '排序屬性',
    compressColors: '壓縮顏色值',
    expandShorthand: '展開簡寫屬性'
  },
  actions: {
    format: '格式化CSS',
    minify: '壓縮',
    clear: '清除',
    copy: '複製',
    download: '下載',
    upload: '上傳文件'
  },
  messages: {
    copied: '已複製到剪貼簿！',
    formatSuccess: 'CSS格式化成功',
    formatError: '格式化CSS時出錯',
    invalidCss: '無效的CSS語法'
  }
}