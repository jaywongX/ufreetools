export default {
  name: 'HTML 格式化工具',
  description: '格式化美化 HTML 代码，提高可读性',
  formatMode: '格式化模式',
  beautify: '美化',
  minify: '压缩',
  formatOptions: '格式化选项',
  removeComments: '移除注释',
  preserveComments: '保留注释',
  showLineNumbers: '显示行号',
  helpText: 'HTML美化/压缩工具帮助开发者快速整理或优化HTML代码，提高可读性或减小文件大小。',
  input: 'HTML 输入',
  inputPlaceholder: '在此粘贴或输入 HTML 代码...',
  examples: '示例',
  exampleNames: {
    simple: '简单 HTML',
    complex: '复杂 HTML 页面'
  },
  beautifiedResult: '美化结果',
  minifiedResult: '压缩结果',
  stats: {
    chars: '字符数',
    lines: '行数',
    reduction: '减少了 {chars} 个字符 ({percent}%)'
  },
  indentOptions: {
    spaces: '{count} 个空格',
    tab: 'Tab 缩进'
  },
  errorMessages: {
    emptyInput: '请输入要处理的 HTML 代码',
    processingFailed: 'HTML 处理失败: {message}'
  },
  options: {
    indentSize: '缩进大小',
    wrapLength: '换行长度',
    indentInnerHtml: '缩进内部 HTML',
    preserveNewlines: '保留换行',
    maxPreserveNewlines: '最大连续换行数',
    wrapAttributes: '属性换行',
    sortAttributes: '属性排序',
    sortClassNames: '类名排序'
  },
  actions: {
    format: '格式化 HTML',
    minify: '压缩',
    clear: '清空',
    copy: '复制',
    download: '下载',
    upload: '上传文件'
  },
  messages: {
    copied: '已复制到剪贴板！',
    formatSuccess: 'HTML 格式化成功',
    formatError: '格式化 HTML 时出错',
    invalidHtml: 'HTML 语法无效'
  }
} 