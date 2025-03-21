export default {
  name: 'API请求工具',
  description: '使用可自定义的HTTP请求选项测试和调试API端点',
  request: {
    url: '请求URL',
    method: '方法',
    headers: '请求头',
    body: '请求体',
    send: '发送请求',
    clear: '清除',
    save: '保存请求',
    load: '加载请求',
    urlPlaceholder: '输入API端点URL...',
    bodyPlaceholder: '输入请求体数据...',
    addHeader: '添加请求头',
    removeHeader: '移除',
    headerName: '请求头名称',
    headerValue: '值',
    formatJson: '格式化JSON',
    history: {
      title: '请求历史',
      empty: '没有保存的请求',
      clearAll: '清除全部',
      noItems: '还没有历史记录'
    }
  },
  response: {
    title: '响应',
    status: '状态',
    time: '时间',
    size: '大小',
    headers: '响应头',
    body: '响应体',
    waiting: '等待响应...',
    noResponse: '尚无响应。发送请求以查看结果。',
    copyBody: '复制响应体',
    prettyPrint: '美化输出',
    rawView: '原始视图',
    jsonView: 'JSON视图',
    copied: '已复制到剪贴板！',
    error: '错误'
  },
  errors: {
    invalidUrl: '请输入有效的URL',
    requestFailed: '请求失败',
    networkError: '网络错误',
    timeout: '请求超时',
    invalidJson: '无效的JSON格式'
  },
  tips: {
    title: '使用提示',
    methods: '不同的HTTP方法（GET、POST、PUT等）在与API交互时有不同的用途。',
    headers: '常见的请求头包括"Content-Type"、"Authorization"和"Accept"。',
    jsonBody: '对于包含JSON数据的POST/PUT请求，设置"Content-Type: application/json"请求头。',
    history: '您的请求历史记录会保存在本地，并在会话之间保持。'
  }
} 