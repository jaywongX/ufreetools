export default {
  name: 'SQL格式化',
  description: '在线SQL格式化与验证工具，支持压缩和美化',
  options: {
    language: 'SQL方言',
    indent: '缩进方式',
    spaceCount: '空格数量',
    keywordCase: '关键字大小写',
    uppercase: '关键字大写',
    lineBreak: '换行样式',
    tabSize: '制表符大小'
  },
  languages: {
    standard: '标准SQL',
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    tsql: 'T-SQL (SQL Server)',
    oracle: 'Oracle PL/SQL'
  },
  indentOptions: {
    spaces: '空格',
    tabs: 'Tab缩进'
  },
  spaceOptions: {
    two: '2个空格',
    four: '4个空格'
  },
  caseOptions: {
    preserve: '保持原样',
    upper: '大写',
    lower: '小写'
  },
  actions: {
    format: '格式化SQL',
    minify: '压缩SQL',
    clear: '清除',
    copy: '复制',
    download: '下载',
  },
  messages: {
    copied: '已复制到剪贴板！',
    formatSuccess: 'SQL格式化成功',
    formatError: '格式化SQL时出错'
  },
  placeholders: {
    input: '在此输入SQL查询...',
    output: '格式化的SQL将显示在这里...'
  },
  output: '格式化结果',
  tips: {
    title: '使用提示',
    dialect: '选择适当的SQL方言以获得准确的格式化效果。',
    formatting: '自定义缩进样式和空格数量，以匹配您喜欢的编码风格。',
    keywords: '选择是保留、大写或小写SQL关键字。',
    copy: '使用复制按钮快速将格式化的SQL复制到剪贴板。'
  }
} 