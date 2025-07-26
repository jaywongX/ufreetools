export default {
  name: 'YAML-JSON转换器',
  description: '在YAML和JSON格式之间转换，具有可自定义选项',

  input: {
    title: '输入',
    yamlPlaceholder: '在此输入YAML...',
    jsonPlaceholder: '在此输入JSON...',
    loadSample: '加载示例',
    clearInput: '清除输入',
    uploadFile: '上传文件'
  },

  output: {
    title: '输出',
    copyOutput: '复制输出',
    downloadOutput: '下载输出',
    clearOutput: '清除输出'
  },

  options: {
    conversionMode: '转换模式',
    jsonToYaml: 'JSON转YAML',
    yamlToJson: 'YAML转JSON',
    formatOutput: '格式化输出',
    indentSize: '缩进大小',
    quoteKeys: '对象键加引号',
    sortKeys: '按字母顺序排序键',
    flowStyle: 'YAML流样式',
    jsonCompatible: 'JSON兼容',
    singleQuotes: '使用单引号',
    includeSchema: '包含模式',
    preserveKeyOrder: '保持键顺序'
  },

  flowStyles: {
    block: '块样式',
    flow: '流样式',
    auto: '自动'
  },

  validation: {
    validate: '转换前验证',
    validInput: '有效的{format}',
    invalidInput: '无效的{format}：{error}',
    checkSyntax: '检查语法'
  },

  actions: {
    convert: '转换',
    swap: '交换格式',
    beautify: '美化',
    minify: '压缩'
  },

  messages: {
    conversionSuccess: '转换成功',
    conversionFailed: '转换失败：{error}',
    copySuccess: '已复制到剪贴板',
    downloadSuccess: '文件下载成功',
    emptyInput: '请输入要转换的内容',
    invalidYaml: '无效的YAML语法',
    invalidJson: '无效的JSON语法'
  }
}; 