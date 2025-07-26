export default {
  name: '图像水印',
  description: '为您的照片添加文本或图像水印，具有可自定义设置',

  upload: {
    title: '上传图像',
    dropzone: '将图像拖放到此处或点击浏览',
    addMore: '添加更多图像',
    clearAll: '清除全部',
    maxFiles: '最多{count}张图像',
    maxSize: '每张图像最大大小：{size}MB',
    supportedFormats: '支持的格式：JPG、PNG、WEBP、GIF'
  },

  watermarkType: {
    title: '水印类型',
    text: '文本水印',
    image: '图像水印',
    both: '文本和图像'
  },

  textWatermark: {
    title: '文本水印',
    text: '水印文本',
    font: '字体',
    size: '大小',
    color: '颜色',
    opacity: '不透明度',
    rotation: '旋转',
    shadow: '文字阴影',
    background: '文本背景',
    padding: '内边距',
    border: '边框',
    spacing: '字间距'
  },

  imageWatermark: {
    title: '图像水印',
    upload: '上传水印图像',
    selectLogo: '选择徽标',
    presetLogos: '预设徽标',
    size: '大小',
    opacity: '不透明度',
    rotation: '旋转',
    offset: '偏移'
  },

  positioning: {
    title: '定位',
    position: '位置',
    custom: '自定义位置',
    xPosition: 'X位置',
    yPosition: 'Y位置',
    tiled: '平铺模式',
    margin: '边距',
    scale: '随图像缩放'
  },

  positions: {
    topLeft: '左上',
    topCenter: '顶部居中',
    topRight: '右上',
    middleLeft: '左中',
    middleCenter: '居中',
    middleRight: '右中',
    bottomLeft: '左下',
    bottomCenter: '底部居中',
    bottomRight: '右下',
    custom: '自定义位置'
  },

  output: {
    title: '输出',
    quality: '输出质量',
    format: '输出格式',
    original: '与原始相同',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: '预览',
    downloadIndividual: '下载',
    downloadAll: '下载全部',
    downloadAsZip: '下载为ZIP'
  },

  presets: {
    title: '预设',
    save: '保存当前设置',
    load: '加载预设',
    delete: '删除预设',
    presetName: '预设名称'
  },

  actions: {
    apply: '应用水印',
    applyToAll: '应用到全部',
    reset: '重置',
    preview: '预览',
    undo: '撤销',
    cancel: '取消处理'
  },

  messages: {
    processing: '处理中...',
    success: '水印应用成功',
    error: '错误：{error}',
    noImages: '请先添加图像',
    noWatermark: '请添加文本或图像水印',
    presetSaved: '预设保存成功',
    presetLoaded: '预设加载成功',
    presetDeleted: '预设已删除',
    watermarkApplied: '水印已应用',
    watermarkImageLoadError: '水印图片加载失败',
    imageLoadError: '图片加载失败',
    resetSuccess: '已重置',
    downloadStarted: '开始下载',
    downloadError: '下载图片失败',
    imageLoaded: '图片加载成功',
    canvasInitError: '画布初始化失败',
    tiledWatermarkError: '创建平铺水印失败'
  }
}; 