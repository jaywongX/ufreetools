export default {
  name: '正则表达式生成器',
  description: '从自然语言描述生成正则表达式',
  input: {
    title: '描述您的模式',
    placeholder: '例如，"匹配电子邮件地址"或"在文本中查找URL"',
    examples: '示例',
    advancedMode: '高级模式',
    simpleMode: '简单模式'
  },
  matches: {
    title: '应匹配',
    placeholder: '输入应该匹配的文本',
    addExample: '添加示例',
    removeExample: '移除'
  },
  nonMatches: {
    title: '不应匹配',
    placeholder: '输入不应该匹配的文本',
    addExample: '添加示例',
    removeExample: '移除'
  },
  commonPatterns: {
    title: '常见模式',
    email: '电子邮件地址',
    url: 'URL',
    ipAddress: 'IP地址',
    date: '日期 (YYYY-MM-DD)',
    time: '24小时制时间 (HH:MM)',
    phoneNumber: '电话号码',
    zipCode: '邮政编码',
    username: '用户名',
    password: '强密码',
    creditCard: '信用卡号码',
    hexColor: '十六进制颜色代码'
  },
  components: {
    title: '模式组件',
    charSets: '字符集',
    anchors: '锚点',
    groups: '分组',
    quantifiers: '量词',
    escapes: '转义序列',
    operators: '运算符',
    backrefs: '反向引用'
  },
  options: {
    title: '正则表达式选项',
    caseInsensitive: '不区分大小写 (i)',
    multiline: '多行模式 (m)',
    dotAll: '点号匹配所有 (s)',
    unicode: 'Unicode模式 (u)',
    sticky: '粘性匹配 (y)',
    global: '全局匹配 (g)'
  },
  output: {
    title: '生成的正则表达式',
    pattern: '模式',
    flags: '标志',
    explanation: '解释',
    testResults: '测试结果',
    matchesFound: '找到{count}个匹配项',
    noMatches: '未找到匹配项',
    matchGroups: '匹配组'
  },
  testString: {
    title: '测试字符串',
    placeholder: '输入文本测试正则表达式',
    test: '测试',
    matchHighlight: '高亮匹配项'
  },
  actions: {
    generate: '生成正则表达式',
    copy: '复制正则表达式',
    copyRaw: '复制原始模式',
    copyCode: '复制为代码',
    download: '下载',
    visualize: '可视化',
    reset: '重置'
  },
  languages: {
    javascript: 'JavaScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    ruby: 'Ruby',
    golang: 'Go'
  },
  messages: {
    copied: '已复制到剪贴板',
    generating: '正在生成正则表达式...',
    generationSuccess: '正则表达式生成成功',
    generationFailed: '生成正则表达式失败：{error}',
    emptyDescription: '请输入模式描述'
  }
} 