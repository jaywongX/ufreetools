export default {
  name: 'XML格式化工具',
  description: '格式化、美化與驗證XML文件',

  options: {
    indentSize: '縮排大小',
    useTabs: '使用定位字元',
    collapseContent: '折疊內容',
    maxLineWidth: '最大行寬',
    indentAttributes: '縮排屬性',
    sortAttributes: '排序屬性',
    newlineAfterPI: '處理指令後換行',
    operationType: '操作類型',
    indentSettings: '縮排設定',
    displayOptions: '顯示選項',
    showLineNumbers: '顯示行號'
  },

  indentOptions: {
    twoSpaces: '2個空格',
    fourSpaces: '4個空格',
    tabIndent: '定位字元縮排'
  },

  actions: {
    format: '格式化XML',
    minify: '壓縮XML',
    validate: '驗證',
    toJSON: '轉換為JSON',
    copy: '複製',
    clear: '清空',
    download: '下載',
    upload: '上傳XML',
    beautify: '美化',
    copyCode: '複製代碼'
  },

  messages: {
    copied: '已複製到剪貼簿！',
    formatSuccess: 'XML格式化成功',
    formatError: '格式化XML時出錯',
    validXml: 'XML有效',
    invalidXml: '無效的XML: {0}',
    lineCol: '第{line}行，第{col}列',
    minifySuccess: 'XML壓縮成功',
    conversionSuccess: '轉換成功',
    conversionError: '轉換過程中出錯',
    pleaseEnterXml: '請輸入XML內容',
    processingError: '處理XML時出錯: {0}',
    formatResult: '格式化結果',
    characterCount: '字元數: {0}',
    lineCount: '行數: {0}',
    characterAndLineCount: '字元數: {0} | 行數: {1}'
  },

  input: {
    xmlInput: 'XML輸入',
    placeholder: '在此貼上或輸入XML...'
  },

  examples: {
    title: 'XML範例',
    description: '點擊載入範例：',
    simpleXml: '簡單XML',
    bookstore: '書店目錄',
    complexXml: '複雜XML'
  }
};