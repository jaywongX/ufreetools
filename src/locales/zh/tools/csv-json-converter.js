export default {
  name: 'CSV转JSON工具',
  description: '将CSV数据转换为JSON格式，具有可自定义选项',

  options: {
    delimiter: '分隔符',
    quote: '引号字符',
    header: '首行为标题',
    dynamicTyping: '动态类型',
    dynamicTypingDescription: '将数字字符串转换为数字，"true/false"转换为布尔值等',
    skipEmptyLines: '跳过空行',
    comments: '注释字符',
    outputFormat: '输出格式',
    indentation: '缩进',
    encoding: '编码',
    newline: '换行符',
    title: '转换选项'
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
    input: '输入...',
    output: '输出...',
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
    uploadCsv: '上传CSV',
    swap: '交换输入/输出',
    loadExample: '加载示例',
    clearInput: '清空输入',
    formatOutput: '格式化输出',
    copyResult: '复制结果',
    downloadResult: '下载结果',
    paste: '粘贴',
    showOptions: '显示选项',
    hideOptions: '隐藏选项',
    uploadJson: '上传JSON'
  },

  results: {
    rowsProcessed: '已处理 {count} 行',
    conversionComplete: '转换完成',
    copied: '已复制到剪贴板',
    downloaded: '已下载',
    error: '错误'
  },

  errors: {
    noData: '没有要转换的CSV数据',
    invalidCsv: '无效的CSV格式',
    parsingFailed: '解析失败: {error}',
    missingHeader: '缺少标题行',
    invalidJson: '无效的JSON格式',
    formatFailed: '格式化失败: {error}',
    copyFailed: '复制失败，请手动复制',
    downloadFailed: '下载失败',
    pasteError: '无法从剪贴板粘贴',
    conversionFailed: '转换失败'
  },

  conversion: {
    title: '转换方向',
    csvToJson: {
      title: 'CSV转JSON',
      delimiterLabel: '分隔符',
      headerLabel: '第一行为标题',
      dynamicTypingLabel: '自动推断数据类型',
      skipEmptyLinesLabel: '跳过空行',
      convertButton: '转换CSV为JSON'
    },
    jsonToCsv: {
      title: 'JSON转CSV',
      delimiterLabel: '分隔符',
      headerLabel: '包含标题行',
      quotesLabel: '为所有字段添加引号',
      nestedModeLabel: '选择嵌套数据处理方式',
      flat: '展平化处理',
      stringify: '转为字符串',
      ignore: '忽略处理',
      convertButton: '转换JSON为CSV'
    }
  },

  stats: {
    processed: '已处理的数据行数',
    fields: '字段数/列数',
    inputSize: '转换前大小',
    outputSize: '转换后大小',
    title: '统计数据'
  },

  messages: {
    copied: '已复制到剪贴板',
    download: '已下载',
    error: '错误'
  },

  formatBytes: {
    bytes: '字节',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  }
};