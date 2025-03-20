export default {
  name: '代码压缩',
  description: '压缩JavaScript、CSS和HTML以减小文件大小',
  options: {
    language: '语言',
    preserveComments: '保留注释',
    preserveLineBreaks: '保留换行',
    beautify: '美化而非压缩'
  },
  languages: {
    javascript: 'JavaScript',
    css: 'CSS',
    html: 'HTML',
    json: 'JSON'
  },
  actions: {
    minify: '压缩',
    beautify: '美化',
    clear: '清除',
    copy: '复制',
    download: '下载',
    upload: '上传文件'
  },
  messages: {
    copied: '已复制到剪贴板！',
    minifySuccess: '代码压缩成功',
    minifyError: '压缩代码时出错',
    sizeReduction: '大小减少了{percent}%'
  }
} 