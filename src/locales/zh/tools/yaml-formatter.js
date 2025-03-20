export default {
  name: 'YAML格式化',
  description: '使用可自定义选项格式化和验证YAML文件',
  options: {
    indentSize: '缩进大小',
    useTabs: '使用制表符',
    formatFlow: '格式化流样式',
    lineWidth: '行宽',
    quoteStyle: '引号样式'
  },
  actions: {
    format: '格式化YAML',
    validate: '验证',
    toJSON: '转换为JSON',
    fromJSON: '从JSON转换',
    copy: '复制',
    clear: '清除',
    download: '下载',
    upload: '上传'
  },
  messages: {
    copied: '已复制到剪贴板！',
    formatSuccess: 'YAML格式化成功',
    formatError: '格式化YAML时出错',
    invalidYaml: '无效的YAML语法',
    lineCol: '第{line}行，第{col}列',
    conversionSuccess: '转换成功',
    conversionError: '转换过程中出错'
  }
} 