export default {
  name: '代码混淆器',
  description: '混淆代码以保护知识产权并防止逆向工程',
  input: {
    title: '输入代码',
    placeholder: '在此输入或粘贴您的代码...',
    uploadFile: '上传文件',
    loadSample: '加载示例'
  },
  options: {
    language: '语言',
    obfuscationLevel: '混淆级别',
    preserveComments: '保留注释',
    reuseNames: '重用名称',
    encodeStrings: '编码字符串',
    transformObjectKeys: '转换对象键',
    controlFlowFlattening: '控制流扁平化',
    deadCodeInjection: '死代码注入',
    selfDefending: '自我保护代码'
  },
  languages: {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    html: 'HTML',
    css: 'CSS',
    php: 'PHP',
    python: 'Python'
  },
  levels: {
    low: '低',
    medium: '中',
    high: '高',
    extreme: '极端'
  },
  output: {
    title: '混淆后的代码',
    copied: '代码已复制到剪贴板',
    download: '下载混淆后的代码'
  },
  actions: {
    obfuscate: '混淆',
    copy: '复制代码',
    download: '下载',
    clear: '清除'
  },
  messages: {
    obfuscationSuccess: '代码混淆成功',
    obfuscationFailed: '混淆代码失败：{error}',
    emptyCode: '请输入要混淆的代码',
    invalidLanguage: '不支持的语言',
    fileSizeExceeded: '文件大小超出限制'
  }
} 