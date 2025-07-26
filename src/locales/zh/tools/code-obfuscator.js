export default {
  name: '代码混淆器',
  description: '对JavaScript和CSS代码进行混淆处理，提高代码安全性和保护知识产权',

  languages: {
    title: '选择语言',
    javascript: 'JavaScript',
    css: 'CSS'
  },

  options: {
    title: '混淆选项',
    javascript: {
      compact: '紧凑输出 (移除空白)',
      controlFlowFlattening: '控制流扁平化',
      deadCodeInjection: '注入无效代码',
      debugProtection: '调试保护',
      selfDefending: '自我保护 (防止格式化)',
      stringArray: '字符串转数组',
      renameGlobals: '重命名全局变量',
      renameProperties: '重命名属性',
      mangle: '变量名混淆',
      stringArrayEncoding: '字符串数组编码',
      stringArrayThreshold: '字符串数组阈值',
      unicodeEscapeSequence: 'Unicode转义序列'
    },
    css: {
      compact: '紧凑输出',
      renameSelectors: '重命名选择器',
      preserveImportant: '保留!important',
      restructure: '重组规则',
      keepVendorPrefixes: '保留浏览器前缀',
      removeComments: '移除注释'
    }
  },

  input: {
    title: '输入代码',
    placeholder: '在此输入要混淆的代码...',
    clear: '清空',
    paste: '粘贴',
    upload: '上传文件',
    inputObfuscatorCode: '请输入要混淆的代码',
  },

  output: {
    title: '混淆结果',
    placeholder: '混淆后的代码将显示在这里...',
    copy: '复制',
    download: '下载',
    stats: {
      original: '原始大小',
      obfuscated: '混淆后大小',
      ratio: '压缩率'
    },
    increase: '增加',
    decrease: '减少',
  },

  actions: {
    obfuscate: '混淆',
    clear: '清除'
  },

  messages: {
    copied: '已复制到剪贴板',
    copyFailed: '复制失败，请手动复制',
    processing: '正在处理...',
    error: '混淆过程出错',
    invalidInput: '无效的输入代码',
    uploadError: '文件上传失败',
    fileTooLarge: '文件过大（最大2MB）'
  },

  tips: {
    title: '使用提示',
    tip1: '代码混淆可以增加逆向工程的难度，但不能完全防止代码被破解',
    tip2: '启用更多混淆选项会增加代码体积和运行开销',
    tip3: '某些混淆选项可能会影响代码的可调试性',
    tip4: '建议在混淆前先备份原始代码',
    tip5: '对于大型项目，建议使用专业的混淆工具'
  },

  demo: {
    title: '示例',
    function: '函数示例',
    class: '类示例',
    simple: '简单样式',
    animation: '动画效果',
  }
}; 