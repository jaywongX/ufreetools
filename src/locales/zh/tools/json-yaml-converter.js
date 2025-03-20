export default {
  name: 'JSON和YAML转换器',
  description: '使用可自定义选项在JSON和YAML格式之间转换',
  options: {
    mode: '转换模式',
    indentSize: '缩进大小',
    useTabs: '使用制表符',
    quoteStyle: '引号样式',
    lineWidth: '行宽度',
    formatOutput: '格式化输出',
    preserveKeyOrder: '保留键顺序'
  },
  modes: {
    jsonToYaml: 'JSON转YAML',
    yamlToJson: 'YAML转JSON'
  },
  quotes: {
    single: '单引号',
    double: '双引号',
    none: '无引号'
  },
  actions: {
    convert: '转换',
    swap: '交换输入/输出',
    copy: '复制',
    clear: '清除',
    download: '下载',
    upload: '上传'
  },
  sections: {
    input: '输入',
    output: '输出'
  },
  messages: {
    copied: '已复制到剪贴板！',
    convertSuccess: '转换成功',
    invalidJson: '无效的JSON输入',
    invalidYaml: '无效的YAML输入',
    emptyInput: '请输入要转换的内容',
    uploadSuccess: '文件上传成功',
    downloadReady: '您的文件已准备好下载'
  }
} 