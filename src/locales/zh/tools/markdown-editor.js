export default {
  name: 'Markdown编辑器',
  description: '编辑和实时预览Markdown文档',
  options: {
    mode: '模式',
    syntaxHighlighting: '语法高亮',
    autoSave: '自动保存',
    lineNumbers: '行号',
    spellCheck: '拼写检查',
    wordWrap: '自动换行'
  },
  modes: {
    split: '分屏视图',
    edit: '仅编辑',
    preview: '仅预览'
  },
  actions: {
    bold: '粗体',
    italic: '斜体',
    heading: '标题',
    link: '链接',
    image: '图片',
    list: '列表',
    quote: '引用',
    code: '代码',
    table: '表格',
    preview: '预览',
    copy: '复制',
    clear: '清除',
    download: '下载Markdown',
    downloadHTML: '下载HTML',
    upload: '上传Markdown'
  },
  messages: {
    copied: '已复制到剪贴板！',
    saved: '文档已保存',
    uploadSuccess: '文档上传成功',
    uploadError: '上传文档时出错',
    wordCount: '{count}个单词',
    charCount: '{count}个字符'
  }
} 