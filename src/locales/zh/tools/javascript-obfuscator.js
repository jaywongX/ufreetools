export default {
  name: 'JavaScript混淆器',
  description: '通过各种混淆技术保护您的JavaScript代码',
  input: {
    title: '输入JavaScript',
    placeholder: '在此输入或粘贴您的JavaScript代码',
    loadSample: '加载示例',
    clearInput: '清除输入',
    uploadFile: '上传JS文件'
  },
  output: {
    title: '混淆后的代码',
    copied: '代码已复制到剪贴板',
    download: '下载混淆后的代码',
    copyOutput: '复制代码',
    clearOutput: '清除输出'
  },
  options: {
    title: '混淆选项',
    compact: '压缩代码',
    selfDefending: '自我保护',
    controlFlowFlattening: '控制流扁平化',
    controlFlowFlatteningThreshold: '控制流扁平化阈值',
    deadCodeInjection: '死代码注入',
    deadCodeInjectionThreshold: '死代码注入阈值',
    debugProtection: '调试保护',
    debugProtectionInterval: '调试保护间隔',
    disableConsoleOutput: '禁用控制台输出',
    domainLock: '域名锁定',
    domainLockRedirectUrl: '域名锁定重定向URL',
    identifierNamesGenerator: '标识符名称生成器',
    identifiersPrefix: '标识符前缀',
    renameGlobals: '重命名全局变量',
    reservedNames: '保留名称',
    reservedStrings: '保留字符串',
    rotateStringArray: '旋转字符串数组',
    seed: '种子',
    shuffleStringArray: '打乱字符串数组',
    sourceMap: '源映射',
    sourceMapBaseUrl: '源映射基础URL',
    sourceMapFileName: '源映射文件名',
    splitStrings: '分割字符串',
    splitStringsChunkLength: '分割字符串块长度',
    stringArray: '字符串数组',
    stringArrayEncoding: '字符串数组编码',
    stringArrayThreshold: '字符串数组阈值',
    target: '目标',
    transformObjectKeys: '转换对象键',
    unicodeEscapeSequence: 'Unicode转义序列'
  },
  presets: {
    title: '预设',
    low: '低度混淆',
    medium: '中度混淆',
    high: '高度混淆',
    custom: '自定义'
  },
  actions: {
    obfuscate: '混淆',
    reset: '重置选项',
    savePreset: '保存预设',
    loadPreset: '加载预设'
  },
  messages: {
    obfuscationSuccess: '代码混淆成功',
    obfuscationFailed: '混淆失败：{error}',
    emptyCode: '请输入要混淆的JavaScript代码',
    uploadSuccess: '文件上传成功',
    presetSaved: '预设已保存',
    presetLoaded: '预设已加载'
  },
  help: {
    title: '选项帮助',
    stringArrayDesc: '将字符串字面量移动到特殊数组并用数组调用替换它们',
    controlFlowDesc: '启用代码控制流扁平化，使逻辑更难理解',
    deadCodeDesc: '注入随机死代码以混淆攻击者',
    selfDefendingDesc: '使输出能够抵抗格式修改'
  }
} 