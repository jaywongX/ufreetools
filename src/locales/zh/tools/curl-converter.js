export default {
  name: 'cURL转换器',
  description: '将cURL命令转换为不同编程语言的代码片段',
  input: {
    title: 'cURL命令',
    placeholder: '在这里输入或粘贴cURL命令...',
    parse: '解析cURL',
    clear: '清除',
    examples: '示例',
    options: '解析器选项',
    validateCommand: '验证命令',
    formatCurl: '格式化cURL'
  },
  options: {
    detectAuth: '自动检测授权',
    resolveVariables: '解析环境变量',
    processContinuations: '处理行继续符(\\)',
    followRedirects: '跟随重定向',
    preserveHeaders: '保留所有头部',
    ignoreErrors: '忽略解析错误',
    noDuplicateHeaders: '无重复头部（使用最后一个）'
  },
  output: {
    title: '代码输出',
    language: '语言',
    copy: '复制',
    download: '下载',
    beautify: '美化',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: '浏览器 (fetch)',
      curl: 'cURL (已格式化)',
      json: 'JSON (请求对象)',
      har: 'HAR (HTTP归档)'
    }
  },
  request: {
    title: '请求详情',
    method: '方法',
    url: 'URL',
    headers: '头部',
    body: '正文',
    auth: '认证',
    options: '选项',
    cookie: 'Cookie',
    queryParams: '查询参数',
    formData: '表单数据',
    visualize: '可视化'
  },
  visualization: {
    title: '请求可视化',
    request: '请求',
    response: '响应',
    headers: '头部',
    body: '正文',
    timing: '时序',
    raw: '原始'
  },
  analysis: {
    title: '命令分析',
    insecureWarning: '警告：此命令使用了--insecure/-k（SSL验证已禁用）',
    verboseIgnored: '注意：转换中忽略了详细模式(-v)',
    unsupportedOptions: '不支持的选项',
    warnings: '警告',
    info: '信息'
  },
  messages: {
    parsing: '正在解析cURL命令...',
    parseFailed: '解析cURL命令失败：{error}',
    parseSuccess: 'cURL命令解析成功',
    copied: '代码已复制到剪贴板',
    downloaded: '代码已下载',
    invalidCurl: '无效的cURL命令',
    emptyCurl: '请输入cURL命令',
    validCurl: '有效的cURL命令',
    unknownOption: '未知选项：{option}',
    unsupportedMethod: '警告：不是所有语言都支持HTTP方法{method}'
  },
  examples: {
    title: '示例cURL命令',
    basic: '基本GET请求',
    headers: '自定义头部',
    post: '带JSON的POST',
    formData: '表单数据提交',
    auth: '基本认证',
    complex: '复杂示例'
  }
} 