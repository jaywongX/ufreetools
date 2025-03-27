export default {
  name: '代码格式化',
  description: '格式化和美化多种语言的代码',
  languages: {
    title: '语言',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown'
  },
  options: {
    title: '选项',
    indent: '缩进',
    tabSize: '制表符大小',
    insertSpaces: '插入空格',
    formatSelection: '格式化选择',
    formatOnType: '输入时格式化',
    removeComments: '移除注释',
    mangle: '变量名混淆',
    lineBreak: '换行符风格'
  },
  actions: {
    beautify: '美化',
    minify: '压缩',
    format: '格式化',
    copy: '复制结果',
    clear: '清空',
    download: '下载',
    paste: '从剪贴板粘贴',
    loadSample: '加载示例代码'
  },
  messages: {
    formatSuccess: '代码格式化成功',
    formatError: '格式化代码时出错',
    copied: '已复制到剪贴板！',
    languageChangeWarning: '更改语言将重置您的代码。继续？'
  },
  errors: {
    emptyCode: '请输入要格式化的代码',
    invalidJson: '无效的JSON',
    jsCompressionError: 'JavaScript压缩错误'
  },
  input: '输入',
  output: '输出',
  placeholders: {
    input: '在此粘贴您的代码...',
    output: '格式化后的代码将显示在这里...'
  },
  characters: '字符',
  space: '空格',
  spaces: '空格',
  auto: '自动',
  tips: {
    title: '使用提示',
    selectLanguage: '为了获得最佳的格式化结果，请选择适合您代码的语言。',
    beautifyMinify: '使用"美化"功能使代码可读性更强，使用"压缩"功能减小文件大小。',
    customizeOptions: '使用下方的设置面板自定义格式化选项。',
    keyboard: '在编辑器中按Tab键插入缩进。'
  }
} 