export default {
  name: '代码美化器',
  description: '使用语法高亮和缩进格式化和美化代码',
  languages: {
    title: '语言',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    cpp: 'C++',
    typescript: 'TypeScript'
  },
  actions: {
    beautify: '美化',
    minify: '压缩',
    clear: '清除',
    copy: '复制',
    download: '下载',
    upload: '上传文件'
  },
  options: {
    title: '选项',
    indentSize: '缩进大小',
    indentWith: '缩进方式',
    spaces: '空格',
    tabs: '制表符',
    lineBreaks: '换行符风格',
    quoteStyle: '引号风格',
    bracketStyle: '括号风格',
    preserveNewlines: '保留换行',
    endWithNewline: '以换行结束',
    removeComments: '移除注释',
    wrapLineLength: '换行长度',
    lineNumbers: '行号',
    showLineNumbers: '显示行号',
    wrapLines: '自动换行',
    theme: '主题',
    autoDetect: '自动检测',
    tryAutoDetect: '尝试自动检测语言'
  },
  input: {
    title: '输入',
    placeholder: '在此粘贴您的代码...'
  },
  output: {
    title: '输出',
    placeholder: '美化后的代码将显示在这里...'
  },
  messages: {
    copied: '已复制到剪贴板！',
    beautifySuccess: '代码美化成功',
    minifySuccess: '代码压缩成功',
    beautifyError: '美化代码时出错',
    minifyError: '压缩代码时出错',
    emptyCode: '请输入要美化的代码',
    fileTooBig: '文件过大（最大2MB）',
    invalidFile: '无效或不支持的文件类型',
    preview: '预览',
    HTMLCode: 'HTML 代码',
  },
  stats: {
    original: '原始',
    beautified: '美化后',
    minified: '压缩后',
    size: '大小',
    characters: '字符',
    lines: '行数'
  },
  tips: {
    title: '使用提示',
    tip1: '选择合适的编程语言以获得最佳语法高亮效果',
    tip2: '可以选择不同主题风格以适应您的网站样式',
    tip3: '复制生成的HTML代码，可直接粘贴到支持HTML的编辑器或网站中',
    tip4: '生成的高亮代码支持自适应和暗黑模式',
    tip5: '展示代码时添加行号可以提高可读性和引用便捷性'
  }
} 