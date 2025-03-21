export default {
  name: 'CSV转JSON工具',
  description: '将CSV数据转换为JSON格式，具有可自定义选项',
  options: {
    delimiter: '分隔符',
    quote: '引号字符',
    header: '首行为标题',
    dynamicTyping: '动态类型',
    skipEmptyLines: '跳过空行',
    comments: '注释字符',
    outputFormat: '输出格式',
    indentation: '缩进',
    encoding: '编码',
    newline: '换行符'
  },
  delimiters: {
    comma: '逗号 (,)',
    semicolon: '分号 (;)',
    tab: '制表符 (\\t)',
    pipe: '竖线 (|)',
    custom: '自定义'
  },
  formats: {
    array: '对象数组',
    arrayOfArrays: '数组的数组',
    keyed: '键值对象',
    nested: '嵌套对象'
  },
  preview: {
    input: '输入预览',
    output: '输出预览',
    rawCsv: '原始CSV',
    parsedCsv: '解析后的CSV',
    jsonOutput: 'JSON输出',
    firstRows: '前 {count} 行',
    showAll: '显示全部'
  },
  actions: {
    convert: '转换',
    copy: '复制JSON',
    download: '下载JSON',
    clear: '清除',
    uploadCsv: '上传CSV'
  },
  results: {
    rowsProcessed: '已处理 {count} 行',
    conversionComplete: '转换完成',
    copied: 'JSON已复制到剪贴板',
    downloaded: 'JSON已下载'
  },
  errors: {
    noData: '没有要转换的CSV数据',
    invalidCsv: '无效的CSV格式',
    parsingFailed: '解析失败: {error}',
    missingHeader: '缺少标题行'
  }
} 