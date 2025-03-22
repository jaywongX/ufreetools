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
    newlineAfterPI: '处理指令后换行',
    operationType: '操作类型',
    indentSettings: '缩进设置',
    displayOptions: '显示选项',
    showLineNumbers: '显示行号'
  },
  actions: {
    format: '格式化XML',
    minify: '压缩XML',
    validate: '验证',
    toJSON: '转换为JSON',
    copy: '复制',
    clear: '清空',
    download: '下载',
    upload: '上传XML',
    beautify: '美化',
    copyCode: '复制代码'
  },
  messages: {
    copied: '已复制到剪贴板！',
    formatSuccess: 'XML格式化成功',
    formatError: '格式化XML时出错',
    validXml: 'XML有效',
    invalidXml: '无效的XML: {0}',
    lineCol: '第{line}行，第{col}列',
    minifySuccess: 'XML压缩成功',
    conversionSuccess: '转换成功',
    conversionError: '转换过程中出错',
    pleaseEnterXml: '请输入XML内容',
    processingError: '处理XML时出错: {0}',
    formatResult: '格式化结果',
    characterCount: '字符数: {0}',
    lineCount: '行数: {0}',
    characterAndLineCount: '字符数: {0} | 行数: {1}'
  },
  input: {
    xmlInput: 'XML输入',
    placeholder: '在这里粘贴或输入XML...'
  },
  examples: {
    title: '示例XML',
    description: '点击加载示例：',
    simpleXml: '简单XML',
    bookstore: '书店目录',
    complexXml: '复杂XML'
  }
} 