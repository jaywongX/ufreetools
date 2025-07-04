export default {
  name: 'SQL格式化',
  description: '線上SQL格式化與驗證工具，支援壓縮和美化',
  options: {
    language: 'SQL方言',
    indent: '縮進方式',
    spaceCount: '空格數量',
    keywordCase: '關鍵字大小寫',
    uppercase: '關鍵字大寫',
    lineBreak: '換行樣式',
    tabSize: '製表符大小'
  },
  languages: {
    standard: '標準SQL',
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    tsql: 'T-SQL (SQL Server)',
    oracle: 'Oracle PL/SQL'
  },
  indentOptions: {
    spaces: '空格',
    tabs: 'Tab縮進'
  },
  spaceOptions: {
    two: '2個空格',
    four: '4個空格'
  },
  caseOptions: {
    preserve: '保持原樣',
    upper: '大寫',
    lower: '小寫'
  },
  actions: {
    format: '格式化SQL',
    minify: '壓縮SQL',
    clear: '清除',
    copy: '複製',
    download: '下載',
  },
  messages: {
    copied: '已複製到剪貼簿！',
    formatSuccess: 'SQL格式化成功',
    formatError: '格式化SQL時出錯'
  },
  placeholders: {
    input: '在此輸入SQL查詢...',
    output: '格式化的SQL將顯示在這裡...'
  },
  output: '格式化結果',
  tips: {
    title: '使用提示',
    dialect: '選擇適當的SQL方言以獲得準確的格式化效果。',
    formatting: '自定義縮進樣式和空格數量，以匹配您喜歡的編碼風格。',
    keywords: '選擇是保留、大寫或小寫SQL關鍵字。',
    copy: '使用複製按鈕快速將格式化的SQL複製到剪貼簿。'
  }
}