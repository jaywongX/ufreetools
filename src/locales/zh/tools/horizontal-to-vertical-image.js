export default {
  name: '横图转竖图',
  description: '将横向图片转换为竖向格式，适用于短视频、手机壁纸和社交媒体发布',
  tags: ['图片', '转换', '手机', '社交', '故事', '竖直', '肖像'],

  upload: {
    title: '横图转竖图转换器',
    dropzone: '拖放图片到这里',
    maxSize: '最大文件大小：10MB',
    supportedFormats: '支持格式：JPG、PNG、WEBP、GIF'
  },

  settings: {
    title: '转换设置',
    presets: '预设',
    conversionMode: '转换模式',
    modes: {
      crop: '裁剪',
      fill: '颜色填充',
      blur: '模糊背景',
      stretch: '边缘拉伸',
      dualColor: '双色背景'
    },
    cropPosition: '裁剪位置',
    positions: {
      left: '左侧',
      center: '中心',
      right: '右侧'
    },
    fillColor: '填充颜色',
    blurRadius: '模糊半径',
    stretchFactor: '拉伸系数',
    topColor: '顶部颜色',
    bottomColor: '底部颜色',
    sizeOption: '输出尺寸',
    sizeModes: {
      auto: '自动',
      preset: '预设',
      custom: '自定义'
    },
    sizePresets: '尺寸预设',
    outputSize: '自定义尺寸',
    width: '宽度',
    height: '高度',
    dimensionsHint: '以像素为单位输入尺寸',
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
    preview: '输出预览',
    before: '转换前',
    after: '转换后',
    dimensions: '尺寸'
  },

  actions: {
    selectImage: '选择图片',
    convert: '转换为竖图',
    download: '下载图片',
    showSideBySide: '显示对比',
    hideSideBySide: '隐藏对比',
    hideComparison: '隐藏对比'
  },

  messages: {
    convertPrompt: '上传横向图片并转换为竖向格式',
    processing: '正在处理您的图片...',
    imageOnly: '请选择图片文件'
  },

  examples: {
    title: '应用示例',
    social: '为Instagram、抖音等平台创建竖向故事',
    socialTip: '完美将横向照片转换为吸引人的竖屏内容',
    mobile: '将横向图片制作成手机壁纸',
    mobileTip: '为各种屏幕比例的智能手机优化图像'
  }
};
