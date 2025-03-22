export default {
  name: 'JSON验证器',
  description: '验证、格式化并检查您的JSON数据结构中的错误',
  options: {
    validateOnType: '输入时验证',
    formatOnValidate: '验证时格式化',
    indentSize: '缩进大小',
    allowComments: '允许注释',
    allowTrailingCommas: '允许尾随逗号',
    repairMode: '修复模式',
    showLineNumbers: '显示行号',
    theme: '编辑器主题'
  },
  themes: {
    light: '明亮',
    dark: '暗黑',
    github: 'GitHub',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },
  actions: {
    validate: '验证',
    format: '格式化',
    minify: '压缩',
    repair: '修复',
    clear: '清除',
    copy: '复制',
    download: '下载',
    upload: '上传'
  },
  results: {
    valid: '有效的JSON',
    invalid: '无效的JSON',
    errorLine: '错误位于第',
    errorPosition: '列',
    repaired: 'JSON已修复',
    copied: '已复制到剪贴板',
    formatted: 'JSON已格式化',
    minified: 'JSON已压缩'
  },
  errors: {
    unexpectedToken: '意外的标记',
    unexpectedEnd: 'JSON输入意外结束',
    duplicateKey: '重复的键',
    missingComma: '缺少逗号',
    missingColon: '缺少冒号',
    trailingComma: '尾随逗号',
    unclosedString: '未闭合的字符串',
    unclosedComment: '未闭合的注释'
  },
  schema: {
    validate: '使用模式验证',
    loadSchema: '加载模式',
    invalidSchema: '无效的JSON模式'
  }
} 