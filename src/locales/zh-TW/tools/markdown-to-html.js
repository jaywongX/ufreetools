export default {
  name: 'Markdown轉HTML',
  description: '將Markdown文本轉換為HTML，具有可自定義選項',

  input: {
    title: '輸入Markdown',
    placeholder: '在此輸入或貼上您的Markdown文本...',
    loadSample: '載入範例',
    clearInput: '清空',
    uploadFile: '上傳Markdown文件',
    paste: '從剪貼簿貼上',
    charCount: '字元數',
    lineCount: '行數'
  },

  output: {
    title: 'HTML輸出',
    copied: 'HTML已複製到剪貼簿',
    download: '下載HTML',
    copyOutput: '複製HTML',
    clearOutput: '清除輸出',
    previewTab: '預覽',
    htmlTab: 'HTML程式碼',
    previewMode: '預覽模式',
    sourceMode: 'HTML原始碼'
  },

  options: {
    title: '轉換選項',
    headerIds: '自動標題ID',
    gfm: 'GitHub風格Markdown',
    tables: '表格',
    breaks: '換行',
    smartLists: '智能列表',
    smartypants: '智能標點',
    xhtml: 'XHTML',
    highlight: '語法高亮',
    sanitize: '淨化HTML',
    footnotes: '註腳',
    taskLists: '任務列表',
    emoji: '表情符號支援',
    includeStyle: '包含預設CSS',
    realtimePreview: '即時預覽',
    scrollSync: '滾動同步',
    htmlOptions: 'HTML選項'
  },

  styles: {
    title: '樣式選項',
    theme: '主題',
    codeTheme: '程式碼主題',
    customCSS: '自定義CSS',
    fontSize: '字型大小',
    lineHeight: '行高',
    enableCustom: '啟用自定義樣式'
  },

  themes: {
    default: '預設',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: '深色模式',
    custom: '自定義'
  },

  codeThemes: {
    default: '預設',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },

  actions: {
    convert: '轉換為HTML',
    clearAll: '全部清除',
    copyHtml: '複製HTML',
    saveAsHtml: '儲存為HTML',
    generateToc: '生成目錄'
  },

  messages: {
    conversionSuccess: 'Markdown轉換成功',
    conversionFailed: 'Markdown轉換失敗：{error}',
    emptyInput: '請輸入要轉換的Markdown',
    copied: 'HTML已複製到剪貼簿',
    tocGenerated: '已生成目錄'
  },

  alerts: {
    copied: '已複製到剪貼簿',
    copyFailed: '複製到剪貼簿失敗',
    pasteFailed: '從剪貼簿貼上失敗',
    confirmClear: '確定要清空輸入內容嗎？'
  },

  status: {
    lastConversion: '最後轉換時間'
  },

  samples: {
    basic: '基礎範例',
    extended: '擴充範例',
    article: '文章範例'
  },

  download: {
    title: 'Markdown轉HTML匯出'
  }
};