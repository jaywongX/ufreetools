export default {
  name: 'CSV查看器和编辑器',
  description: '查看、编辑和格式化CSV文件，支持各种分隔符',
  options: {
    delimiter: '分隔符',
    hasHeader: '首行作为表头',
    quoteChar: '引号字符',
    escapeChar: '转义字符',
    skipEmptyLines: '跳过空行',
    encoding: '文件编码'
  },
  delimiters: {
    comma: '逗号 (,)',
    semicolon: '分号 (;)',
    tab: '制表符 (\\t)',
    pipe: '竖线 (|)',
    custom: '自定义'
  },
  actions: {
    parse: '解析CSV',
    toJSON: '转换为JSON',
    toTSV: '转换为TSV',
    toExcel: '导出到Excel',
    copy: '复制',
    clear: '清除',
    download: '下载',
    upload: '上传CSV'
  },
  messages: {
    copied: '已复制到剪贴板！',
    parseSuccess: 'CSV解析成功',
    parseError: '解析CSV时出错',
    rowCount: '已解析{count}行',
    columnCount: '检测到{count}列',
    selectDelimiter: '请选择分隔符',
    conversionSuccess: '转换成功'
  }
} 