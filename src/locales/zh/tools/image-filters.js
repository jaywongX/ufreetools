export default {
  name: '图像滤镜',
  description: '实时预览为图像应用各种滤镜和效果',

  upload: {
    title: '上传图像',
    dropzone: '将图像拖放到此处或点击浏览',
    maxSize: '最大文件大小：10MB',
    supportedFormats: '支持的格式：JPG、PNG、WEBP、GIF'
  },

  editor: {
    title: '滤镜编辑器',
    original: '原始',
    filtered: '已过滤',
    reset: '全部重置',
    undo: '撤销',
    redo: '重做',
    zoomIn: '放大',
    zoomOut: '缩小',
    fitToScreen: '适应屏幕',
    showOriginal: '显示原图'
  },

  filters: {
    title: '滤镜',
    basic: '基本调整',
    brightness: '亮度',
    contrast: '对比度',
    saturation: '饱和度',
    hue: '色相',
    exposure: '曝光',
    vibrance: '自然饱和度',
    temperature: '色温',
    gamma: '伽马',
    clarity: '清晰度',
    effects: '效果',
    grayscale: '灰度',
    sepia: '棕褐色',
    vintage: '复古',
    polaroid: '宝丽来',
    duotone: '双色调',
    noise: '噪点',
    pixelate: '像素化',
    blur: '模糊',
    sharpen: '锐化',
    vignette: '暗角',
    color: '颜色',
    colorOverlay: '颜色叠加',
    colorize: '着色',
    gradientMap: '渐变映射',
    replaceColor: '替换颜色',
    advanced: '高级',
    levels: '色阶',
    curves: '曲线',
    shadows: '阴影',
    highlights: '高光',
    blacks: '黑色',
    whites: '白色',
    channels: 'RGB通道'
  },

  presets: {
    title: '预设',
    custom: '自定义',
    blackAndWhite: '黑白',
    highContrast: '高对比度',
    normal: '正常',
    cinematic: '电影感',
    warm: '暖色调',
    cool: '冷色调',
    sunset: '日落',
    vintage: '复古',
    invert: '反色',
    cross: '交叉冲印',
    matte: '哑光',
    flat: '平淡',
    portrait: '人像',
    landscape: '风景',
    vivid: '鲜艳',
    moody: '忧郁',
    savePreset: '保存当前为预设',
    deletePreset: '删除预设',
    presetName: '预设名称'
  },

  output: {
    title: '输出',
    fileName: '文件名',
    format: '格式',
    quality: '质量',
    width: '宽度',
    height: '高度',
    download: '下载图像',
    saveOnline: '在线保存',
    share: '分享',
    applyToNew: '应用到新图像'
  },

  history: {
    title: '历史记录',
    revert: '恢复到此步骤',
    clear: '清除历史记录'
  },

  actions: {
    apply: '应用滤镜',
    download: '下载',
    save: '保存',
    reset: '重置',
    cancel: '取消'
  },

  messages: {
    imageLoaded: '图像加载成功',
    filterApplied: '滤镜应用成功',
    filtersReset: '滤镜已重置为默认值',
    downloadStarted: '下载已开始',
    presetSaved: '预设保存成功',
    presetDeleted: '预设已删除',
    invalidFile: '无效文件。请上传有效的图像。',
    fileTooLarge: '文件太大。最大大小为10MB。'
  }
}; 