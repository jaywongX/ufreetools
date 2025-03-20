export default {
  name: 'SQL格式化',
  description: '在线SQL格式化与验证工具，支持压缩和美化',
  options: {
    indent: '缩进',
    uppercase: '关键字大写',
    lineBreak: '换行样式',
    tabSize: '制表符大小'
  },
  actions: {
    format: '格式化SQL',
    clear: '清除',
    copy: '复制',
    download: '下载'
  },
  messages: {
    copied: '已复制到剪贴板！',
    formatSuccess: 'SQL格式化成功',
    formatError: '格式化SQL时出错'
  }
} 