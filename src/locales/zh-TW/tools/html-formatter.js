export default {
  name: 'HTML 格式化工具',
  description: '格式化美化 HTML 程式碼，提高可讀性',
  formatMode: '格式化模式',
  beautify: '美化',
  minify: '壓縮',
  formatOptions: '格式化選項',
  removeComments: '移除註解',
  preserveComments: '保留註解',
  showLineNumbers: '顯示行號',
  helpText: 'HTML美化/壓縮工具幫助開發者快速整理或優化HTML程式碼，提高可讀性或減小檔案大小。',
  input: 'HTML 輸入',
  inputPlaceholder: '在此貼上或輸入 HTML 程式碼...',
  examples: '範例',

  exampleNames: {
    simple: '簡單 HTML',
    complex: '複雜 HTML 頁面'
  },

  beautifiedResult: '美化結果',
  minifiedResult: '壓縮結果',

  stats: {
    chars: '字元數',
    lines: '行數',
    reduction: '減少了 {chars} 個字元 ({percent}%)'
  },

  indentOptions: {
    spaces: '{count} 個空格',
    tab: 'Tab 縮排'
  },

  errorMessages: {
    emptyInput: '請輸入要處理的 HTML 程式碼',
    processingFailed: 'HTML 處理失敗: {message}'
  },

  options: {
    indentSize: '縮排大小',
    wrapLength: '換行長度',
    indentInnerHtml: '縮排內部 HTML',
    preserveNewlines: '保留換行',
    maxPreserveNewlines: '最大連續換行數',
    wrapAttributes: '屬性換行',
    sortAttributes: '屬性排序',
    sortClassNames: '類名排序'
  },

  actions: {
    format: '格式化 HTML',
    minify: '壓縮',
    clear: '清空',
    copy: '複製',
    download: '下載',
    upload: '上傳檔案'
  },

  messages: {
    copied: '已複製到剪貼簿！',
    formatSuccess: 'HTML 格式化成功',
    formatError: '格式化 HTML 時出錯',
    invalidHtml: 'HTML 語法無效'
  }
};