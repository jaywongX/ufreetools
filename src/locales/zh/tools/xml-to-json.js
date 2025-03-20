export default {
  name: 'XML转JSON工具',
  description: '将XML数据转换为JSON格式，具有可自定义选项',
  options: {
    compact: '紧凑模式',
    spaces: '缩进空格数',
    textKey: '文本节点键名',
    attributesKey: '属性键名',
    ignoreAttributes: '忽略属性',
    ignoreComment: '忽略注释',
    ignoreDeclaration: '忽略XML声明',
    ignoreInstruction: '忽略处理指令',
    ignoreDoctype: '忽略DOCTYPE',
    ignoreText: '忽略文本内容',
    alwaysArray: '总是返回数组',
    keepCData: '保留CDATA',
    nativeType: '原生类型转换'
  },
  input: {
    placeholder: '在此输入或粘贴XML',
    loadSample: '加载示例',
    clearInput: '清除输入',
    uploadXml: '上传XML文件',
    validate: '验证XML'
  },
  output: {
    title: 'JSON输出',
    copyOutput: '复制JSON',
    downloadOutput: '下载JSON',
    clearOutput: '清除输出',
    formatOptions: '格式选项'
  },
  actions: {
    convert: '转换',
    copy: '复制',
    download: '下载',
    clear: '全部清除'
  },
  messages: {
    convertSuccess: 'XML成功转换为JSON',
    convertError: '转换XML时出错: {error}',
    emptyInput: '请输入要转换的XML',
    copied: 'JSON已复制到剪贴板',
    downloaded: 'JSON文件已下载',
    validXml: 'XML有效',
    invalidXml: 'XML无效: {error}'
  },
  formats: {
    standard: '标准',
    pretty: '美化',
    compact: '紧凑',
    verbose: '详细'
  }
} 