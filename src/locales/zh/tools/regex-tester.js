export default {
  name: '正则表达式测试',
  description: '使用实时高亮和解释来测试和调试正则表达式',

  actions: {
    test: '测试',
    clear: '清除',
    showExamples: '显示示例',
    hideExamples: '隐藏示例',
    copy: '复制'
  },

  sections: {
    examples: '常用正则表达式示例',
    pattern: '正则表达式模式',
    input: '测试字符串',
    results: '匹配结果',
    flags: '标志'
  },

  flags: {
    g: '全局匹配 (g)',
    i: '忽略大小写 (i)',
    m: '多行模式 (m)',
    s: '点号匹配所有 (s)',
    u: 'Unicode模式 (u)',
    y: '粘性匹配 (y)'
  },

  errors: {
    emptyRegex: '请输入正则表达式',
    emptyTestString: '请输入要测试的文本',
    invalidRegex: '无效的正则表达式'
  },

  messages: {
    matchesFound: '找到 {count} 个匹配项',
    noMatches: '未找到匹配项',
    copied: '已复制到剪贴板！'
  },

  placeholders: {
    pattern: '输入正则表达式模式',
    testString: '输入要测试的文本'
  },

  options: {
    flags: '标志',
    global: '全局匹配 (g)',
    caseInsensitive: '忽略大小写 (i)',
    multiline: '多行模式 (m)',
    dotAll: '点号匹配所有 (s)',
    unicode: 'Unicode模式 (u)',
    sticky: '粘性匹配 (y)'
  },

  labels: {
    pattern: '正则表达式',
    testString: '测试字符串',
    matches: '匹配结果',
    groups: '分组',
    noMatches: '未找到匹配项'
  },

  tips: {
    title: '使用提示',
    pattern: '输入正则表达式模式时不需要包含两侧的斜杠。',
    flags: '使用标志来修改模式匹配行为（g：全局，i：不区分大小写，m：多行）。',
    examples: '点击"显示示例"来查看和使用常用正则表达式模式。',
    testing: '输入模式和测试字符串后，点击"测试"查看匹配结果。'
  },

  match: '匹配',
  position: '位置',
  group: '组',
  resultsWillAppearHere: '正则表达式匹配结果将显示在这里...',
  regexError: '正则表达式错误: {message}',
  emailAddress: '电子邮件',
  phoneNumber: '手机号码(中国)',
  ipAddress: 'IP地址',
  dateFormat: '日期(yyyy-mm-dd)',
  chineseCharacters: '中文字符',
  phoneNumberExample: '联系方式：13912345678\n微信同号：18887654321\n座机：010-12345678',
  urlExample: '访问 https://example.com\n或者 http://www.domain.org/path?query=value',
  ipAddressExample: '服务器地址：192.168.1.1\nDNS：8.8.8.8, 114.114.114.114',
  dateFormatExample: '开始日期：2023-01-15\n结束日期：2023-02-28\n无效日期：2023-13-45',
  chineseCharactersExample: 'Hello世界！你好，World!'
}; 