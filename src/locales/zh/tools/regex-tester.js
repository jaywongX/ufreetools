export default {
  name: '正则表达式测试',
  description: '测试和验证正则表达式，实时查看匹配结果',
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
  }
} 