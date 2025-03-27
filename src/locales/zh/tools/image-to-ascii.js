export default {
  name: '图像转ASCII',
  description: '将图像转换为可自定义选项的ASCII艺术文本',
  upload: {
    title: '上传图像',
    dropzone: '将图像拖放到此处或点击浏览',
    maxSize: '最大文件大小：5MB',
    supportedFormats: '支持的格式：JPG、PNG、WEBP、GIF',
    pasteImage: '或从剪贴板粘贴图像'
  },
  options: {
    title: '转换选项',
    width: '输出宽度',
    height: '输出高度',
    preserveAspect: '保持宽高比',
    colored: '彩色输出',
    charSet: '字符集',
    charSets: {
      standard: '标准',
      simple: '简单',
      complex: '复杂',
      blocks: '方块字符',
      custom: '自定义'
    },
    customChars: '自定义字符',
    invert: '反转颜色',
    threshold: '亮度阈值',
    brightness: '亮度',
    contrast: '对比度',
    fontFamily: '字体系列',
    fontSize: '字体大小',
    lineHeight: '行高',
    backgroundColor: '背景颜色',
    textColor: '文本颜色'
  },
  output: {
    title: 'ASCII输出',
    preview: '预览',
    raw: '原始ASCII',
    html: 'HTML',
    copyToClipboard: '复制到剪贴板',
    downloadTxt: '下载为TXT',
    downloadHtml: '下载为HTML',
    downloadImage: '下载为图像',
    stats: {
      title: '统计',
      characters: '字符数',
      lines: '行数',
      colors: '颜色数',
      size: '文本大小'
    }
  },
  presets: {
    title: '预设',
    save: '保存当前设置',
    load: '加载预设',
    delete: '删除预设',
    presetName: '预设名称',
    default: '默认',
    detailed: '详细',
    minimalist: '极简',
    blocky: '方块风格',
    small: '小型',
    inverted: '反转'
  },
  adjustment: {
    title: '图像调整',
    grayscale: '灰度',
    negative: '负片',
    resize: '转换前调整大小',
    crop: '裁剪图像',
    rotate: '旋转',
    flipH: '水平翻转',
    flipV: '垂直翻转'
  },
  animation: {
    title: '动画',
    animated: '处理为动画',
    frameDelay: '帧延迟',
    loop: '循环动画',
    loopCount: '循环次数',
    extractFrame: '提取当前帧'
  },
  actions: {
    convert: '转换为ASCII',
    resetOptions: '重置选项',
    refreshPreview: '刷新预览',
    loadImage: '加载新图像',
    applyChanges: '应用更改',
    selectImage: '选择图片',
    reset: '重置',
    processing: '处理中...',
    generate: '生成ASCII',
    copy: '复制',
    download: '下载'
  },
  messages: {
    converting: '正在将图像转换为ASCII...',
    conversionComplete: '转换完成',
    conversionFailed: '图像转换失败：{error}',
    copied: 'ASCII已复制到剪贴板',
    downloadStarted: '下载已开始',
    downloadComplete: 'ASCII已下载',
    downloadFailed: '下载失败',
    copyFailed: '复制失败',
    resetComplete: '已重置',
    asciiGenerated: 'ASCII艺术已生成',
    generationFailed: '生成ASCII失败',
    presetSaved: '预设已保存',
    presetLoaded: '预设已加载',
    presetDeleted: '预设已删除',
    invalidImage: '无效的图像格式或损坏的文件',
    imageTooBig: '图像尺寸太大，无法转换',
    selectOrLoad: '请选择图像或从URL加载',
    asciiWillDisplay: 'ASCII将在这里显示',
    customCharsPlaceholder: '输入字符，从暗到亮排序...',
    tip: '调整设置后点击"生成ASCII"按钮来查看效果',
    drapPlaceHolder: '选择或拖放图片到这里',
    noImage: '请先选择一张图片',
    generateAscii: '点击"生成ASCII"按钮转换图片',
    tip2: '提示：使用复制按钮可以将ASCII艺术复制到剪贴板，或使用下载按钮保存为文本文件。'
  },
  charSets: {
    standard: '标准 (@#W$9876543210?!abc+;:=-,._ )',
    simple: '简单 (@%#*+=-:. )',
    blocks: '方块 (█▓▒░ )',
    custom: '自定义'
  },
  settings: {
    title: 'ASCII设置',
    customCharsetLabel: '自定义字符集（从暗到亮）',
    asciiWidth: 'ASCII宽度',
    invert: '反转颜色',
    colored: '彩色输出',
    fontSize: '字体大小'
  },
  preview: {
    originalImage: '原始图像',
    generatedAscii: '生成的ASCII'
  }
} 