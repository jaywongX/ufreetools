export default {
  name: 'URL編碼解碼',
  description: 'URL編碼用於將特殊字符轉換為URL可接受的格式，常用於處理URL參數和表單提交。',

  options: {
    operationType: '操作類型',
    encodeMode: '編碼模式'
  },

  encodeOptions: {
    standard: '標準編碼 (encodeURI)',
    component: '組件編碼 (encodeURIComponent)',
    full: '完全編碼 (所有字符)',
    standardDescription: '對整個URL進行編碼，保留URL結構字符',
    componentDescription: '適用於URL參數，編碼包括所有特殊字符',
    fullDescription: '對所有非字母數字字符進行編碼，包括空格（轉為%20而非+）'
  },

  actions: {
    encode: 'URL編碼',
    decode: 'URL解碼',
    clear: '清空',
    copyResult: '複製結果'
  },

  input: {
    textToEncode: '需要編碼的文本',
    textToDecode: '需要解碼的文本',
    encodePlaceholder: '輸入要編碼的URL或文本...',
    decodePlaceholder: '輸入要解碼的URL或文本...'
  },

  output: {
    encodeResult: '編碼結果',
    decodeResult: '解碼結果'
  },

  messages: {
    copied: '(已複製',
    error: '錯誤: {message}',
    decodeError: '無法解碼: "{text}"',
    copyFailed: '複製失敗，請手動複製'
  },

  referenceTable: {
    title: '常見URL字符編碼參考表',
    showTable: '顯示表格',
    hideTable: '隱藏表格',
    character: '字符',
    encoded: 'URL編碼',
    description: '說明',
    descriptions: {
      space: '空格',
      exclamation: '驚嘆號',
      doubleQuote: '雙引號',
      hash: '井號',
      dollar: '美元符號',
      percent: '百分號',
      ampersand: '和號',
      singleQuote: '單引號',
      leftParenthesis: '左括號',
      rightParenthesis: '右括號',
      asterisk: '星號',
      plus: '加號',
      comma: '逗號',
      slash: '斜線',
      colon: '冒號',
      semicolon: '分號',
      lessThan: '小於號',
      equals: '等號',
      greaterThan: '大於號',
      questionMark: '問號',
      at: '艾特符號',
      leftBracket: '左方括號',
      backslash: '反斜線',
      rightBracket: '右方括號',
      caret: '脫字符',
      backtick: '反引號',
      leftBrace: '左花括號',
      pipe: '豎線',
      rightBrace: '右花括號',
      tilde: '波浪號',
      chinese: 'UTF-8編碼的中文'
    }
  }
};