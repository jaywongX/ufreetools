export default {
  name: '字体转换器',
  description: '在不同格式之间转换字体（TTF、OTF、WOFF、WOFF2、EOT）',
  input: {
    title: '上传字体文件',
    dropzone: '将字体文件拖放到此处或点击上传',
    formats: '支持的格式：',
    browse: '浏览文件',
    orText: '或',
    pasteUrl: '粘贴字体文件URL：',
    loadUrl: '从URL加载'
  },
  options: {
    title: '转换选项',
    targetFormat: '目标格式',
    subsets: '字符子集',
    subsetting: '字体子集化',
    hinting: '字体微调',
    optimization: '优化级别',
    metadata: '保留元数据',
    compression: '压缩级别',
    embed: '生成可嵌入CSS'
  },
  formats: {
    ttf: 'TrueType (.ttf)',
    otf: 'OpenType (.otf)',
    woff: 'Web开放字体格式 (.woff)',
    woff2: 'Web开放字体格式2 (.woff2)',
    eot: '嵌入式OpenType (.eot)',
    svg: 'SVG字体 (.svg)'
  },
  subsets: {
    latin: '拉丁文',
    latinExt: '扩展拉丁文',
    cyrillic: '西里尔文',
    greek: '希腊文',
    vietnamese: '越南文',
    japanese: '日文',
    korean: '韩文',
    chinese: '中文',
    custom: '自定义字符集'
  },
  preview: {
    title: '字体预览',
    sampleText: '示例文本',
    fontSize: '字体大小',
    fontWeight: '字体粗细',
    lineHeight: '行高',
    letterSpacing: '字间距',
    darkMode: '深色模式',
    editText: '编辑文本'
  },
  cssOutput: {
    title: 'CSS代码',
    fontFamily: '字体族名称',
    fontWeight: '字体粗细',
    fontStyle: '字体样式',
    includeLocal: '包含本地字体',
    includeFormat: '包含格式提示',
    fontDisplay: '字体显示'
  },
  actions: {
    convert: '转换字体',
    download: '下载已转换字体',
    downloadAll: '下载所有格式',
    downloadCss: '下载CSS',
    copyCSS: '复制CSS',
    reset: '重置',
    preview: '预览'
  },
  messages: {
    uploadSuccess: '字体上传成功',
    converting: '正在转换字体...',
    conversionSuccess: '字体转换成功',
    conversionFailed: '字体转换失败：{error}',
    downloadStarted: '下载已开始',
    copied: 'CSS已复制到剪贴板',
    invalidFont: '无效的字体文件',
    noFileSelected: '未选择字体文件'
  },
  fontInfo: {
    title: '字体信息',
    family: '字体族名称',
    style: '样式',
    weight: '粗细',
    designer: '设计师',
    license: '许可证',
    version: '版本',
    glyphs: '字形数量',
    fileSize: '文件大小'
  }
} 