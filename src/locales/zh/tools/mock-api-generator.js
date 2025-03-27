export default {
  name: 'Mock API生成器',
  description: '根据OpenAPI规范自动生成Mock API',
  options: {
    version: 'OpenAPI版本',
    format: '输出格式',
    includeExamples: '包含示例响应',
    responseDynamism: '响应动态性',
    responseType: '响应类型',
    arrayLength: '数组长度',
    responseFormat: '响应格式'
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
    uploadSpec: '上传OpenAPI规范',
    uploadJava: '上传Java类文件',
    generateJson: '生成JSON',
    generateBuilder: '生成Builder',
    format: '美化'
  },
  messages: {
    copied: '已复制到剪贴板！',
    generationSuccess: 'Mock API生成成功',
    generationError: '生成Mock API时出错',
    specRequired: '请提供OpenAPI规范',
    fileUploaded: '已上传',
    parseError: '解析Java类失败，请确保文件格式正确'
  },
  help: {
    uploadHint: '支持上传 .java 文件，自动解析类结构生成Mock配置 暂未支持多层对象属性'
  },
  fields: {
    title: '字段定义',
    addField: '添加字段',
    addChildField: '添加子字段',
    fieldName: '字段名'
  },
  fieldTypes: {
    string: '字符串',
    number: '数字',
    boolean: '布尔值',
    date: '日期',
    name: '姓名',
    email: '邮箱',
    phone: '电话',
    address: '地址',
    id: 'ID',
    image: '图片URL',
    array: '数组',
    object: '对象'
  },
  array: {
    itemType: '数组项类型',
    arrayFields: '数组项字段'
  },
  object: {
    childFields: '子字段'
  },
  responseTypes: {
    object: '单个对象',
    array: '对象数组',
    custom: '自定义结构'
  },
  responseFormats: {
    dataOnly: '仅数据',
    standard: '标准REST响应 (code, data, message)'
  },
  placeholder: {
    output: '// 生成的Mock数据将显示在这里'
  }
} 