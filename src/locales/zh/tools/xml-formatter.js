export default {
  name: 'XML格式化',
  description: '格式化、美化和验证XML文档',
  options: {
    indentSize: '缩进大小',
    useTabs: '使用制表符',
    collapseContent: '折叠内容',
    maxLineWidth: '最大行宽',
    indentAttributes: '缩进属性',
    sortAttributes: '排序属性',
    newlineAfterPI: '处理指令后换行'
  },
  actions: {
    format: '格式化XML',
    minify: '压缩XML',
    validate: '验证',
    toJSON: '转换为JSON',
    copy: '复制',
    clear: '清除',
    download: '下载',
    upload: '上传XML'
  },
  messages: {
    copied: '已复制到剪贴板！',
    formatSuccess: 'XML格式化成功',
    formatError: '格式化XML时出错',
    validXml: 'XML有效',
    invalidXml: '无效的XML',
    lineCol: '第{line}行，第{col}列',
    minifySuccess: 'XML压缩成功',
    conversionSuccess: '转换成功',
    conversionError: '转换过程中出错'
  }
} 