export default {
  name: '竖图转横图',
  description: '将垂直肖像图像转换为横向景观格式，提供多种转换选项',

  upload: {
    title: '上传图片',
    dropzone: '拖放图片到这里',
    maxSize: '最大文件大小：10MB',
    supportedFormats: '支持的格式：JPG、PNG、WEBP、GIF'
  },

  settings: {
    title: '转换设置',
    presets: '快速预设',
    conversionMode: '转换模式',
    modes: {
      rotate: '旋转',
      fill: '填充背景',
      blur: '模糊背景',
      stretch: '拉伸边缘',
      dualColor: '双色背景'
    },
    rotationAngle: '旋转角度',
    fillColor: '背景颜色',
    blurRadius: '模糊程度',
    stretchEdges: '拉伸程度',
    leftColor: '左侧颜色',
    rightColor: '右侧颜色',
    sizeOption: '尺寸设置',
    sizeModes: {
      auto: '自动尺寸',
      preset: '常用尺寸',
      custom: '自定义尺寸'
    },
    sizePresets: '尺寸预设',
    outputSize: '输出尺寸',
    width: '宽度',
    height: '高度',
    dimensionsHint: '以像素为单位输入尺寸',
    autoSize: '自动计算尺寸',
    outputFormat: '输出格式',
    quality: '图像质量',
    advancedOptions: '高级选项',
    preserveRatio: '保持宽高比',
    sharpen: '锐化',
    addWatermark: '添加水印',
    watermarkPlaceholder: '输入水印文字',
    watermarkColor: '水印颜色'
  },

  output: {
    preview: '结果预览',
    dimensions: '尺寸',
    before: '转换前',
    after: '转换后'
  },

  actions: {
    selectImage: '选择图片',
    convert: '转换图片',
    download: '下载图片',
    reset: '移除',
    showSideBySide: '显示对比',
    hideComparison: '隐藏对比',
    hideSideBySide: '关闭'
  },

  messages: {
    processing: '处理图片中...',
    convertPrompt: '转换图片后结果将显示在这里',
    error: '处理图片时发生错误',
    success: '转换成功完成！'
  },

  examples: {
    title: '使用技巧',
    social: '非常适合社交媒体帖子，横向图像表现更好',
    socialTip: '使用模糊模式获得最佳社交媒体效果',
    website: '为网站和博客创建横幅图像',
    websiteTip: '双色模式非常适合网页横幅'
  },

  help: {
    title: '如何使用此工具',
    description: '此工具可让您使用各种方法将垂直（肖像）图像转换为水平（景观）格式，同时保持视觉质量和效果。',
    example1: {
      title: '社交媒体帖子',
      description: '将肖像照片转换为社交媒体友好的横向格式，带模糊背景'
    },
    example2: {
      title: '网站横幅',
      description: '使用颜色填充背景，从垂直图像创建网站头部和横幅'
    }
  }
};
