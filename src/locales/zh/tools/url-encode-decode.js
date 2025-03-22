export default {
  name: 'URL编码解码',
  description: 'URL编码用于将特殊字符转换为URL可接受的格式，常用于处理URL参数和表单提交。',
  options: {
    operationType: '操作类型',
    encodeMode: '编码模式'
  },
  encodeOptions: {
    standard: '标准编码 (encodeURI)',
    component: '组件编码 (encodeURIComponent)',
    full: '完全编码 (所有字符)',
    standardDescription: '对整个URL进行编码，保留URL结构字符',
    componentDescription: '适用于URL参数，编码包括所有特殊字符',
    fullDescription: '对所有非字母数字字符进行编码，包括空格（转为%20而非+）'
  },
  actions: {
    encode: 'URL编码',
    decode: 'URL解码',
    clear: '清空',
    copyResult: '复制结果'
  },
  input: {
    textToEncode: '需要编码的文本',
    textToDecode: '需要解码的文本',
    encodePlaceholder: '输入要编码的URL或文本...',
    decodePlaceholder: '输入要解码的URL或文本...'
  },
  output: {
    encodeResult: '编码结果',
    decodeResult: '解码结果'
  },
  messages: {
    copied: '(已复制!)',
    error: '错误: {message}',
    decodeError: '无法解码: "{text}"',
    copyFailed: '复制失败，请手动复制'
  },
  referenceTable: {
    title: '常见URL字符编码参考表',
    showTable: '显示表格',
    hideTable: '隐藏表格',
    character: '字符',
    encoded: 'URL编码',
    description: '说明',
    descriptions: {
      space: '空格',
      exclamation: '感叹号',
      doubleQuote: '双引号',
      hash: '井号',
      dollar: '美元符号',
      percent: '百分号',
      ampersand: '和号',
      singleQuote: '单引号',
      leftParenthesis: '左括号',
      rightParenthesis: '右括号',
      asterisk: '星号',
      plus: '加号',
      comma: '逗号',
      slash: '斜杠',
      colon: '冒号',
      semicolon: '分号',
      lessThan: '小于号',
      equals: '等号',
      greaterThan: '大于号',
      questionMark: '问号',
      at: '艾特符号',
      leftBracket: '左方括号',
      backslash: '反斜杠',
      rightBracket: '右方括号',
      caret: '脱字符',
      backtick: '反引号',
      leftBrace: '左花括号',
      pipe: '竖线',
      rightBrace: '右花括号',
      tilde: '波浪号',
      chinese: 'UTF-8编码的中文'
    }
  }
} 