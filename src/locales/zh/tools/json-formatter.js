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
    clear: '清除',
    copy: '复制',
    download: '下载'
  },
  messages: {
    invalidJson: 'JSON语法无效',
    copied: '已复制到剪贴板！',
    empty: '请输入JSON内容'
  }
} 