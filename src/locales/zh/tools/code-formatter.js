export default {
  name: '代码格式化',
  description: '在线代码格式化与验证工具，支持多种语言',
  languages: {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    html: 'HTML',
    css: 'CSS',
    json: 'JSON',
    xml: 'XML',
    sql: 'SQL',
    graphql: 'GraphQL'
  },
  options: {
    indentSize: '缩进大小',
    tabWidth: '制表符宽度',
    useTabs: '使用制表符',
    semi: '分号',
    singleQuote: '单引号',
    trailingComma: '尾随逗号',
    bracketSpacing: '括号间距',
    arrowParens: '箭头函数括号'
  },
  actions: {
    format: '格式化代码',
    copy: '复制格式化代码',
    download: '下载',
    settings: '格式化设置'
  },
  messages: {
    copied: '已复制到剪贴板！',
    formatSuccess: '代码格式化成功',
    formatError: '格式化代码时出错'
  }
} 