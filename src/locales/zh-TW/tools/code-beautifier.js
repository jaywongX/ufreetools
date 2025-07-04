export default {
  name: '代碼美化器',
  description: '使用語法高亮和縮進格式化和美化代碼',
  languages: {
    title: '語言',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    cpp: 'C++',
    typescript: 'TypeScript'
  },
  actions: {
    beautify: '美化',
    minify: '壓縮',
    clear: '清除',
    copy: '複製',
    download: '下載',
    upload: '上傳文件'
  },
  options: {
    title: '選項',
    indentSize: '縮進大小',
    indentWith: '縮進方式',
    spaces: '空格',
    tabs: '制表符',
    lineBreaks: '換行符風格',
    quoteStyle: '引號風格',
    bracketStyle: '括號風格',
    preserveNewlines: '保留換行',
    endWithNewline: '以換行結束',
    removeComments: '移除註釋',
    wrapLineLength: '換行長度',
    lineNumbers: '行號',
    showLineNumbers: '顯示行號',
    wrapLines: '自動換行',
    theme: '主題',
    autoDetect: '自動檢測',
    tryAutoDetect: '嘗試自動檢測語言'
  },
  input: {
    title: '輸入',
    placeholder: '在此粘貼您的代碼...'
  },
  output: {
    title: '輸出',
    placeholder: '美化後的代碼將顯示在這裡...'
  },
  messages: {
    copied: '已複製到剪貼板！',
    beautifySuccess: '代碼美化成功',
    minifySuccess: '代碼壓縮成功',
    beautifyError: '美化代碼時出錯',
    minifyError: '壓縮代碼時出錯',
    emptyCode: '請輸入要美化的代碼',
    fileTooBig: '文件過大（最大2MB）',
    invalidFile: '無效或不支持的文件類型',
    preview: '預覽',
    HTMLCode: 'HTML 代碼',
  },
  stats: {
    original: '原始',
    beautified: '美化後',
    minified: '壓縮後',
    size: '大小',
    characters: '字符',
    lines: '行數'
  },
  tips: {
    title: '使用提示',
    tip1: '選擇合適的編程語言以獲得最佳語法高亮效果',
    tip2: '可以選擇不同主題風格以適應您的網站樣式',
    tip3: '複製生成的HTML代碼，可直接粘貼到支持HTML的編輯器或網站中',
    tip4: '生成的高亮代碼支持自適應和暗黑模式',
    tip5: '展示代碼時添加行號可以提高可讀性和引用便捷性'
  }
}
