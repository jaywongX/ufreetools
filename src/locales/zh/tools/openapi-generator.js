export default {
  name: 'OpenAPI → TypeScript客户端生成器',
  description: '基于OpenAPI规范自动生成TypeScript接口和客户端代码，提高前后端协作效率',

  options: {
    exportSchemas: '导出所有模型定义',
    generateClient: '生成API客户端代码',
    addComments: '添加注释和文档说明',
    useEnums: '使用TypeScript枚举（代替字符串联合类型）',
    indentSize: '缩进大小',
    operationType: '操作类型',
    displayOptions: '显示选项'
  },

  inputMode: {
    toggleToFile: '切换到文件上传',
    toggleToText: '切换到文本输入',
    loadExample: '加载示例'
  },

  fileUpload: {
    dragAndDrop: '拖拽OpenAPI文件到此处，或者点击上传',
    supportedFormats: '支持.json、.yaml和.yml文件格式',
    fileSelected: '已选择: {0} ({1})'
  },

  textInput: {
    placeholder: '粘贴OpenAPI规范(JSON或YAML)到这里...'
  },

  actions: {
    generate: '生成TypeScript代码',
    processing: '处理中...',
    clear: '清空',
    copy: '复制代码',
    download: '下载代码'
  },

  results: {
    generatedCode: '生成的TypeScript代码',
    copied: '已复制到剪贴板',
    error: '错误',
    characterCount: '字符数: {0}'
  },

  errors: {
    parseError: '无法解析OpenAPI规范。请确保提供有效的JSON或YAML格式。',
    invalidSpec: '无效的OpenAPI规范。未找到openapi或swagger版本标识。',
    processingError: '处理OpenAPI规范时出错: {0}'
  }
}; 