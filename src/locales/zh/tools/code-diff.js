export default {
  name: '代码差异比较',
  description: '比较两段代码并高亮显示差异',

  options: {
    title: '选项',
    ignoreCase: '忽略大小写',
    ignoreWhitespace: '忽略空格',
    trimWhitespace: '修剪空格',
    diffMode: '差异模式',
    diffModes: {
      chars: '字符',
      words: '单词',
      lines: '行',
      sentences: '句子',
      json: 'JSON'
    },
    diffStyle: '显示样式',
    diffStyles: {
      split: '分栏视图',
      inline: '内联视图'
    },
    context: '上下文行数',
    wrap: '自动换行',
    languages: {
      plaintext: '纯文本',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },

  inputs: {
    original: '原始代码',
    modified: '修改后代码',
    placeholderOriginal: '在此输入原始代码...',
    placeholderModified: '在此输入修改后代码...'
  },

  actions: {
    compare: '比较',
    clear: '清除',
    swap: '交换',
    copy: '复制差异',
    download: '下载差异',
    upload: '上传文件'
  },

  results: {
    title: '差异结果',
    changes: '变更',
    additions: '新增',
    deletions: '删除',
    unchanged: '未变更',
    noChanges: '未找到差异 - 两段文本完全相同',
    loading: '正在生成差异...'
  },

  upload: {
    originalFile: '原始文件',
    modifiedFile: '修改后文件',
    dropOriginal: '拖拽原始文件到此处或点击浏览',
    dropModified: '拖拽修改后文件到此处或点击浏览'
  },

  messages: {
    copied: '已复制到剪贴板！',
    inputRequired: '请在两个输入框中都输入文本',
    diffGenerated: '差异生成成功',
    error: '生成差异时出错',
    fileError: '读取文件时出错'
  },

  tips: {
    title: '使用提示',
    compareOptions: '调整比较选项以满足您的需求 - 忽略空格对于代码比较很有帮助。',
    diffModes: '不同的差异模式提供不同级别的比较细节。',
    largeFiles: '对于大文件，基于行的比较更高效。',
    jsonMode: '使用JSON模式比较结构化数据 - 它将标准化并比较对象结构。'
  }
}; 