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
    dotAll: '点匹配换行 (s)',
    unicode: 'Unicode (u)',
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
  }
} 