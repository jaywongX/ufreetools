export default {
  name: 'HTML格式化',
  description: '格式化和美化HTML代码以提高可读性',
  options: {
    indentSize: '缩进大小',
    wrapLength: '换行长度',
    indentInnerHtml: '缩进内部HTML',
    preserveNewlines: '保留换行',
    maxPreserveNewlines: '最大连续换行数',
    wrapAttributes: '包装属性',
    sortAttributes: '排序属性',
    sortClassNames: '排序类名'
  },
  actions: {
    format: '格式化HTML',
    minify: '压缩',
    clear: '清除',
    copy: '复制',
    download: '下载',
    upload: '上传文件'
  },
  messages: {
    copied: '已复制到剪贴板！',
    formatSuccess: 'HTML格式化成功',
    formatError: '格式化HTML时出错',
    invalidHtml: '无效的HTML语法'
  }
} 