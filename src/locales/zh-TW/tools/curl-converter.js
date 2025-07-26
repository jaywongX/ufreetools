export default {
  name: "cURL轉換器",
  description: "將cURL命令轉換為不同程式語言的代碼片段",
  title: "cURL轉代碼",
  subtitle: "將cURL命令轉換為多種程式語言代碼，方便快速整合HTTP請求到您的專案中",

  input: {
    title: "cURL命令",
    placeholder: "在此輸入cURL命令",
    parse: "解析cURL",
    clear: "清空",
    examples: "示例命令:",
    options: "解析器選項",
    validateCommand: "驗證命令",
    formatCurl: "格式化cURL"
  },

  options: {
    detectAuth: "自動檢測授權",
    resolveVariables: "解析環境變數",
    processContinuations: "處理行繼續符(\\)",
    followRedirects: "跟隨重定向",
    preserveHeaders: "保留所有標頭",
    ignoreErrors: "忽略解析錯誤",
    noDuplicateHeaders: "無重複標頭（使用最後一個）"
  },

  output: {
    title: "代碼輸出",
    language: "目標語言",
    copy: "複製",
    copyTooltip: "複製到剪貼簿",
    download: "下載",
    beautify: "美化",
    codeTitle: "{language} 代碼",
    errorTitle: "轉換錯誤",
    languages: {
      python: "Python (requests)",
      pythonHttp: "Python (http.client)",
      node: "Node.js (axios)",
      nodeRequest: "Node.js (request)",
      nodeFetch: "Node.js (fetch)",
      java: "Java (HttpClient)",
      javaOkHttp: "Java (OkHttp)",
      php: "PHP (cURL)",
      phpGuzzle: "PHP (Guzzle)",
      go: "Go",
      rust: "Rust",
      swift: "Swift",
      csharp: "C# (HttpClient)",
      ruby: "Ruby",
      dart: "Dart",
      powershell: "PowerShell",
      browser: "瀏覽器 (fetch)",
      curl: "cURL (已格式化)",
      json: "JSON (請求對象)",
      har: "HAR (HTTP歸檔)",
      javascript: "JavaScript (Fetch)"
    }
  },

  request: {
    title: "請求詳情",
    method: "方法",
    url: "URL",
    headers: "標頭",
    body: "正文",
    auth: "認證",
    options: "選項",
    cookie: "Cookie",
    queryParams: "查詢參數",
    formData: "表單數據",
    visualize: "可視化"
  },

  visualization: {
    title: "請求可視化",
    request: "請求",
    response: "響應",
    headers: "標頭",
    body: "正文",
    timing: "時序",
    raw: "原始"
  },

  analysis: {
    title: "命令分析",
    insecureWarning: "警告：此命令使用了--insecure/-k（SSL驗證已禁用）",
    verboseIgnored: "注意：轉換中忽略了詳細模式(-v)",
    unsupportedOptions: "不支援的選項",
    warnings: "警告",
    info: "信息"
  },

  messages: {
    parsing: "正在解析cURL命令...",
    parseFailed: "解析cURL命令失敗：{error}",
    parseSuccess: "cURL命令解析成功",
    copied: "代碼已複製到剪貼簿",
    downloaded: "代碼已下載",
    invalidCurl: "無效的cURL命令",
    emptyCurl: "請輸入cURL命令",
    validCurl: "有效的cURL命令",
    unknownOption: "未知選項：{option}",
    unsupportedMethod: "警告：不是所有語言都支援HTTP方法{method}",
    curlRequired: "命令必須以 \"curl \" 開頭",
    copyFailed: "複製失敗，請手動複製"
  },

  examples: {
    title: "示例cURL命令",
    basic: "基本GET請求",
    headers: "自定義標頭",
    post: "帶JSON的POST",
    formData: "表單數據提交",
    auth: "基本認證",
    complex: "複雜示例",
    exampleCommands: {
      getRequest: "GET請求",
      postJson: "POST JSON",
      postForm: "POST表單",
      withAuth: "帶認證",
      uploadFile: "上傳文件"
    }
  },

  actions: {
    convert: "轉換",
    converting: "轉換中..."
  }
};