export default {
  name: 'JSON模式验证器',
  description: '根据JSON Schema定义验证JSON数据',
  input: {
    schema: 'JSON模式',
    data: 'JSON数据',
    schemaPlaceholder: '在此输入或粘贴您的JSON模式',
    dataPlaceholder: '在此输入或粘贴您的JSON数据',
    loadSample: '加载示例',
    clearSchema: '清除模式',
    clearData: '清除数据'
  },
  options: {
    validateAs: '输入时验证',
    formatOnPaste: '粘贴时格式化',
    draft: 'JSON模式草案版本',
    showErrors: '显示错误详情',
    showLineNumbers: '显示行号',
    theme: '编辑器主题'
  },
  results: {
    valid: 'JSON符合模式要求',
    invalid: 'JSON不符合模式要求',
    errorCount: '发现{count}个验证错误',
    schemaError: '无效的JSON模式',
    dataError: '无效的JSON数据',
    errorAt: '错误路径',
    expected: '预期',
    received: '实际'
  },
  actions: {
    validate: '验证',
    clearResults: '清除结果',
    downloadSchema: '下载模式',
    downloadData: '下载数据',
    copySchema: '复制模式',
    copyData: '复制数据',
    generateDocs: '生成文档'
  },
  draftVersions: {
    '2020-12': '草案2020-12',
    '2019-09': '草案2019-09',
    '07': '草案-07',
    '06': '草案-06',
    '04': '草案-04'
  },
  messages: {
    copied: '已复制到剪贴板',
    downloaded: '文件已下载',
    validationSuccess: '验证成功',
    validationFailed: '验证失败',
    missingData: '请输入要验证的JSON数据'
  }
} 