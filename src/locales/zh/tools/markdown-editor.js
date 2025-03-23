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
    strikethrough: '删除线',
    heading: '标题',
    link: '链接',
    image: '图片',
    list: '列表',
    quote: '引用',
    code: '代码',
    table: '表格',
    hr: '水平分割线',
    preview: '预览',
    copy: '复制',
    clear: '清除',
    download: '下载Markdown',
    downloadHTML: '下载HTML',
    upload: '上传Markdown'
  },
  messages: {
    copied: 'Markdown内容已复制到剪贴板！',
    copyError: '复制失败，请手动复制',
    clearConfirm: '确定要清空编辑器内容吗？',
    templateConfirm: '应用模板将替换当前内容，确定继续吗？',
    templateApplied: '已应用"{name}"模板',
    saved: '文档已保存',
    uploadSuccess: '文档上传成功',
    uploadError: '上传文档时出错',
    wordCount: '{count}个单词',
    charCount: '{count}个字符'
  },
  placeholder: '在这里输入Markdown内容...',
  templates: {
    title: '快速模板',
    apply: '应用模板',
    confirm: '确认应用'
  },
  dialogs: {
    clear: {
      title: '清空编辑器',
      message: '确定要清空编辑器内容吗？'
    },
    template: {
      title: '应用模板',
      message: '应用模板将替换当前内容，确定继续吗？'
    }
  }
} 