export default {
  name: '图像裁剪器',
  description: '精确裁剪、调整大小和旋转图像',
  upload: {
    title: '上传图像',
    dropzone: '将图像拖放到此处或点击浏览',
    maxSize: '最大文件大小：10MB',
    supportedFormats: '支持的格式：JPG、PNG、WEBP、GIF',
    select: '请选择一张图片开始裁剪和编辑'
  },
  editor: {
    title: '图像编辑器',
    zoom: '缩放',
    rotate: '旋转',
    flipHorizontal: '水平翻转',
    flipVertical: '垂直翻转',
    reset: '重置图像',
    undo: '撤销',
    redo: '重做',
    dragMode: '拖动模式',
    scaleMode: '缩放模式'
  },
  crop: {
    title: '裁剪设置',
    aspectRatio: '宽高比',
    freeform: '自由形式',
    square: '正方形 (1:1)',
    portrait: '肖像 (3:4)',
    landscape: '风景 (4:3)',
    widescreen: '宽屏 (16:9)',
    panorama: '全景 (2:1)',
    custom: '自定义',
    width: '宽度',
    height: '高度',
    unit: '单位',
    pixels: '像素',
    percent: '百分比',
    lockAspectRatio: '锁定宽高比'
  },
  presets: {
    title: '尺寸预设',
    original: '原始尺寸',
    social: '社交媒体',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: '打印尺寸',
    fourBySix: '4×6英寸',
    fiveBySeven: '5×7英寸',
    eightByTen: '8×10英寸'
  },
  output: {
    title: '输出',
    preview: '预览',
    dimensions: '输出尺寸',
    quality: '质量',
    format: '格式',
    fileName: '文件名',
    download: '下载',
    saveAs: '另存为',
    copy: '复制到剪贴板'
  },
  actions: {
    crop: '裁剪图像',
    apply: '应用',
    cancel: '取消',
    save: '保存图像',
    download: '下载',
    newImage: '新图像'
  },
  messages: {
    cropSuccess: '图像裁剪成功',
    downloadReady: '您裁剪的图像已准备好下载',
    processing: '处理图像中...',
    copied: '图像已复制到剪贴板',
    invalidFile: '无效文件。请上传有效的图像。',
    fileTooLarge: '文件太大。最大大小为10MB。'
  }
} 