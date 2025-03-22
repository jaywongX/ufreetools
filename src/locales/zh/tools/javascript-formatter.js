export default {
  name: 'JavaScript格式化',
  description: '在线JavaScript格式化与验证工具，支持压缩和美化',
  options: {
    indent: '缩进',
    quotes: '引号样式',
    semicolons: '分号',
    trailingComma: '尾随逗号'
  },
  actions: {
    format: '格式化JavaScript',
    minify: '压缩',
    beautify: '美化',
    clear: '清除',
    copy: '复制',
    download: '下载'
  },
  messages: {
    copied: '已复制到剪贴板！',
    formatSuccess: 'JavaScript格式化成功',
    formatError: '格式化JavaScript时出错'
  }
} 