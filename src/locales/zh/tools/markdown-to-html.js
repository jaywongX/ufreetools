export default {
  name: 'Markdown转HTML',
  description: '将Markdown文本转换为HTML，具有可自定义选项',

  input: {
    title: '输入Markdown',
    placeholder: '在此输入或粘贴您的Markdown文本...',
    loadSample: '加载示例',
    clearInput: '清空',
    uploadFile: '上传Markdown文件',
    paste: '从剪贴板粘贴',
    charCount: '字符数',
    lineCount: '行数'
  },

  output: {
    title: 'HTML输出',
    copied: 'HTML已复制到剪贴板',
    download: '下载HTML',
    copyOutput: '复制HTML',
    clearOutput: '清除输出',
    previewTab: '预览',
    htmlTab: 'HTML代码',
    previewMode: '预览模式',
    sourceMode: 'HTML源码'
  },

  options: {
    title: '转换选项',
    headerIds: '自动标题ID',
    gfm: 'GitHub风格Markdown',
    tables: '表格',
    breaks: '换行',
    smartLists: '智能列表',
    smartypants: '智能标点',
    xhtml: 'XHTML',
    highlight: '语法高亮',
    sanitize: '净化HTML',
    footnotes: '脚注',
    taskLists: '任务列表',
    emoji: '表情符号支持',
    includeStyle: '包含默认CSS',
    realtimePreview: '实时预览',
    scrollSync: '滚动同步',
    htmlOptions: 'HTML选项'
  },

  styles: {
    title: '样式选项',
    theme: '主题',
    codeTheme: '代码主题',
    customCSS: '自定义CSS',
    fontSize: '字体大小',
    lineHeight: '行高',
    enableCustom: '启用自定义样式'
  },

  themes: {
    default: '默认',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: '深色模式',
    custom: '自定义'
  },

  codeThemes: {
    default: '默认',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },

  actions: {
    convert: '转换为HTML',
    clearAll: '全部清除',
    copyHtml: '复制HTML',
    saveAsHtml: '保存为HTML',
    generateToc: '生成目录'
  },

  messages: {
    conversionSuccess: 'Markdown转换成功',
    conversionFailed: 'Markdown转换失败：{error}',
    emptyInput: '请输入要转换的Markdown',
    copied: 'HTML已复制到剪贴板',
    tocGenerated: '已生成目录'
  },

  alerts: {
    copied: '已复制到剪贴板',
    copyFailed: '复制到剪贴板失败',
    pasteFailed: '从剪贴板粘贴失败',
    confirmClear: '确定要清空输入内容吗？'
  },

  status: {
    lastConversion: '最后转换时间'
  },

  samples: {
    basic: '基础示例',
    extended: '扩展示例',
    article: '文章示例'
  },

  download: {
    title: 'Markdown转HTML导出'
  }
}; 