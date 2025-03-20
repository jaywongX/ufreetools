export default {
  name: '代码高亮',
  description: '在线代码高亮工具，支持多种语言',
  options: {
    language: '语言',
    theme: '主题',
    lineNumbers: '显示行号',
    wordWrap: '自动换行'
  },
  languages: {
    auto: '自动检测',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    html: 'HTML',
    css: 'CSS',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    ruby: 'Ruby',
    go: 'Go',
    rust: 'Rust',
    swift: 'Swift',
    kotlin: 'Kotlin'
  },
  themes: {
    light: '亮色',
    dark: '暗色',
    github: 'GitHub',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },
  actions: {
    highlight: '高亮',
    copy: '复制代码',
    download: '下载HTML',
    share: '分享'
  },
  messages: {
    copied: '已复制到剪贴板！',
    inputRequired: '请输入要高亮的代码'
  }
} 