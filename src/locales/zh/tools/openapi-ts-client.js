export default {
  name: 'OpenAPI→TS客户端',
  description: '根据OpenAPI规范自动生成TypeScript接口和API客户端代码',
  options: {
    version: 'OpenAPI版本',
    outputStyle: '输出样式',
    generateClient: '生成API客户端',
    generateInterfaces: '生成接口',
    framework: '客户端框架'
  },
  frameworks: {
    fetch: 'Fetch API',
    axios: 'Axios',
    angular: 'Angular HttpClient',
    custom: '自定义'
  },
  actions: {
    generate: '生成代码',
    clear: '清除',
    copy: '复制代码',
    download: '下载',
    uploadSpec: '上传OpenAPI规范'
  },
  messages: {
    copied: '已复制到剪贴板！',
    generationSuccess: 'TypeScript代码生成成功',
    generationError: '生成TypeScript代码时出错',
    specRequired: '请提供OpenAPI规范'
  }
} 