export default {
  name: '图像像素化器',
  description: '将图像转换为具有可自定义分辨率和效果的像素艺术',
  upload: {
    title: '上传图像',
    dropzone: '将图像拖放到此处或点击浏览',
    maxSize: '最大文件大小：10MB',
    supportedFormats: '支持的格式：JPG、PNG、WEBP、GIF'
  },
  settings: {
    title: '像素化设置',
    pixelSize: '像素大小',
    pixelShape: '像素形状',
    shapes: {
      square: '方形',
      rounded: '圆角',
      circle: '圆形',
      diamond: '菱形',
      custom: '自定义'
    },
    resolution: '分辨率',
    width: '宽度',
    height: '高度',
    preserveAspect: '保持宽高比',
    colorReduction: '颜色减少',
    colors: '颜色数',
    dithering: '抖动',
    ditheringTypes: {
      none: '无',
      floydSteinberg: 'Floyd-Steinberg',
      atkinson: 'Atkinson',
      ordered: '有序',
      bayer: 'Bayer'
    },
    palette: '颜色调色板',
    palettes: {
      auto: '自动',
      grayscale: '灰度',
      gameboy: 'Game Boy',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: '自定义'
    },
    customPalette: '自定义调色板颜色'
  },
  effects: {
    title: '效果',
    brightness: '亮度',
    contrast: '对比度',
    saturation: '饱和度',
    hue: '色相',
    outline: '轮廓',
    outlineColor: '轮廓颜色',
    noise: '噪点',
    posterize: '色调分离',
    invert: '反转颜色',
    grayscale: '灰度',
    sepia: '棕褐色',
    vignette: '暗角'
  },
  animation: {
    title: '动画设置',
    animated: '处理为动画',
    frameRate: '帧率',
    optimizeFrames: '优化帧',
    looping: '循环',
    loopCount: '循环次数'
  },
  output: {
    title: '输出',
    preview: '预览',
    original: '原始',
    pixelated: '像素化',
    comparison: '对比',
    zoomIn: '放大',
    zoomOut: '缩小',
    gridOverlay: '网格覆盖',
    downloadAs: '下载为',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: '精灵表',
    quality: '质量',
    scale: '缩放'
  },
  presets: {
    title: '预设',
    save: '保存当前设置',
    load: '加载预设',
    delete: '删除预设',
    presetName: '预设名称',
    defaults: {
      lowRes: '低分辨率',
      highContrast: '高对比度',
      retro: '复古',
      minimal: '极简',
      sketch: '素描',
      blueprint: '蓝图'
    }
  },
  actions: {
    pixelate: '像素化图像',
    reset: '重置设置',
    applyChanges: '应用更改',
    undoChanges: '撤销更改',
    downloadImage: '下载图像'
  },
  messages: {
    processing: '处理图像中...',
    success: '图像像素化成功',
    downloading: '准备下载中...',
    presetSaved: '预设保存成功',
    presetLoaded: '预设已加载',
    presetDeleted: '预设已删除',
    error: '错误：{error}'
  }
} 