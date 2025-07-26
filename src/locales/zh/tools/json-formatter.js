export default {
  name: 'JSON格式化',
  description: '在线JSON格式化与验证工具，支持压缩和美化',

  options: {
    indent: '缩进',
    sort: '排序键',
    compress: '压缩',
    beautify: '美化'
  },

  actions: {
    format: '格式化JSON',
    compress:'压缩',
    clear: '清除',
    copy: '复制',
    download: '下载',
    transferMeaning: '转义',
    contraposition: '反转义'
  },

  messages: {
    invalidJson: 'JSON语法无效',
    copied: '已复制到剪贴板！',
    empty: '请输入JSON内容',
    formatTip: '格式化或压缩JSON后显示属性列表',
    formatSuccess: 'JSON格式化成功',
    compressSuccess: 'JSON压缩成功',
    escapeSuccess: 'JSON转义成功',
    unescapeSuccess: 'JSON反转义成功',
    copyFailed: '复制失败，请手动复制'
  },

  labels: {
    jsonData: 'JSON数据',
    propertyList: '属性列表',
    clickToCopy: '(点击值复制)'
  },

  placeholders: {
    jsonInput: '粘贴您的JSON数据...'
  }
}; 