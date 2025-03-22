export default {
  name: 'Mock API生成器',
  description: '根据OpenAPI规范自动生成Mock API',
  options: {
    version: 'OpenAPI版本',
    format: '输出格式',
    includeExamples: '包含示例响应',
    responseDynamism: '响应动态性'
  },
  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },
  actions: {
    generate: '生成Mock',
    preview: '预览API',
    clear: '清除',
    copy: '复制代码',
    download: '下载',
    uploadSpec: '上传OpenAPI规范'
  },
  messages: {
    copied: '已复制到剪贴板！',
    generationSuccess: 'Mock API生成成功',
    generationError: '生成Mock API时出错',
    specRequired: '请提供OpenAPI规范'
  }
} 