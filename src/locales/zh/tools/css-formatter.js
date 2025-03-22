export default {
  name: 'CSS格式化',
  description: '格式化和美化CSS代码以提高可读性',
  options: {
    indentSize: '缩进大小',
    indentWithTabs: '使用制表符缩进',
    convertQuotes: '转换引号',
    sortSelectors: '排序选择器',
    sortProperties: '排序属性',
    compressColors: '压缩颜色值',
    expandShorthand: '展开简写属性'
  },
  actions: {
    format: '格式化CSS',
    minify: '压缩',
    clear: '清除',
    copy: '复制',
    download: '下载',
    upload: '上传文件'
  },
  messages: {
    copied: '已复制到剪贴板！',
    formatSuccess: 'CSS格式化成功',
    formatError: '格式化CSS时出错',
    invalidCss: '无效的CSS语法'
  }
} 