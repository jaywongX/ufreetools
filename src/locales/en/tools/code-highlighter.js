export default {
  name: 'Code Highlighter',
  description: 'Online code highlighting tool, supporting multiple languages',
  options: {
    language: 'Language',
    theme: 'Theme',
    lineNumbers: 'Show Line Numbers',
    wordWrap: 'Word Wrap'
  },
  languages: {
    auto: 'Auto-detect',
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
    light: 'Light',
    dark: 'Dark',
    github: 'GitHub',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },
  actions: {
    highlight: 'Highlight',
    copy: 'Copy Code',
    download: 'Download HTML',
    share: 'Share'
  },
  messages: {
    copied: 'Copied to clipboard!',
    inputRequired: 'Please enter some code to highlight'
  }
} 