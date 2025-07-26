export default {
  name: '正規表示式測試',
  description: '使用即時高亮和解釋來測試和除錯正規表示式',

  actions: {
    test: '測試',
    clear: '清除',
    showExamples: '顯示範例',
    hideExamples: '隱藏範例',
    copy: '複製'
  },

  sections: {
    examples: '常用正規表示式範例',
    pattern: '正規表示式模式',
    input: '測試字串',
    results: '比對結果',
    flags: '標誌'
  },

  flags: {
    g: '全域比對 (g)',
    i: '忽略大小寫 (i)',
    m: '多行模式 (m)',
    s: '點號比對所有 (s)',
    u: 'Unicode模式 (u)',
    y: '黏性比對 (y)'
  },

  errors: {
    emptyRegex: '請輸入正規表示式',
    emptyTestString: '請輸入要測試的文字',
    invalidRegex: '無效的正規表示式'
  },

  messages: {
    matchesFound: '找到 {count} 個比對項目',
    noMatches: '未找到比對項目',
    copied: '已複製到剪貼簿！'
  },

  placeholders: {
    pattern: '輸入正規表示式模式',
    testString: '輸入要測試的文字'
  },

  options: {
    flags: '標誌',
    global: '全域比對 (g)',
    caseInsensitive: '忽略大小寫 (i)',
    multiline: '多行模式 (m)',
    dotAll: '點號比對所有 (s)',
    unicode: 'Unicode模式 (u)',
    sticky: '黏性比對 (y)'
  },

  labels: {
    pattern: '正規表示式',
    testString: '測試字串',
    matches: '比對結果',
    groups: '分組',
    noMatches: '未找到比對項目'
  },

  tips: {
    title: '使用提示',
    pattern: '輸入正規表示式模式時不需要包含兩側的斜線。',
    flags: '使用標誌來修改模式比對行為（g：全域，i：不區分大小寫，m：多行）。',
    examples: '點擊"顯示範例"來查看和使用常用正規表示式模式。',
    testing: '輸入模式和測試字串後，點擊"測試"查看比對結果。'
  },

  match: '比對',
  position: '位置',
  group: '分組',
  resultsWillAppearHere: '正規表示式比對結果將顯示在這裡...',
  regexError: '正規表示式錯誤: {message}',
  emailAddress: '電子郵件',
  phoneNumber: '手機號碼(中國)',
  ipAddress: 'IP地址',
  dateFormat: '日期(yyyy-mm-dd)',
  chineseCharacters: '中文字元',
  phoneNumberExample: '聯絡方式：13912345678\n微信同號：18887654321\n座機：010-12345678',
  urlExample: '訪問 https://example.com\n或者 http://www.domain.org/path?query=value',
  ipAddressExample: '伺服器地址：192.168.1.1\nDNS：8.8.8.8, 114.114.114.114',
  dateFormatExample: '開始日期：2023-01-15\n結束日期：2023-02-28\n無效日期：2023-13-45',
  chineseCharactersExample: 'Hello世界！你好，World!'
};