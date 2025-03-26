export default {
  name: '图像批量调整器',
  description: '一次性调整、转换和优化多张图像',
  input: {
    title: '输入图像',
    dropzone: '将图像拖放到此处或点击浏览',
    addMore: '添加更多图像',
    selectImages: '选择图片',
    clearAll: '清除全部',
    maxFiles: '最多{count}张图像',
    maxSize: '每张图像最大大小：{size}MB',
    supportedFormats: '支持的格式：{formats}'
  },
  options: {
    title: '调整选项',
    settingsTitle: '调整设置',
    resizeMode: '调整模式',
    resizeMethod: '调整方式',
    pixelMode: '像素',
    percentageMode: '百分比',
    maxDimensionMode: '最大尺寸',
    outputFormat: '输出格式',
    quality: '质量',
    width: '宽度',
    height: '高度',
    maintainAspectRatio: '保持宽高比',
    maxWidth: '最大宽度',
    maxHeight: '最大高度',
    percentage: '百分比',
    backgroundColor: '背景颜色',
    naming: '输出命名',
    filenamePrefix: '文件名前缀',
    filenameSuffix: '文件名后缀',
    applyToAllImages: '应用到所有图片',
    applyToAll: '应用于所有图像'
  },
  resizeModes: {
    exact: '精确尺寸',
    maxDimensions: '最大尺寸',
    percentage: '百分比缩放',
    fit: '适应内部',
    cover: '覆盖',
    crop: '裁剪'
  },
  formats: {
    original: '与源相同',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },
  namingOptions: {
    original: '原始文件名',
    dimensions: '原始 + 尺寸',
    format: '原始 + 格式',
    custom: '自定义模式',
    random: '随机字符串'
  },
  output: {
    title: '调整后的图像',
    downloadAll: '下载全部',
    downloadAsZip: '下载为ZIP',
    processingStatus: '处理中：{processed}/{total}',
    originalSize: '原始大小',
    newSize: '新大小',
    reduction: '减少量',
    individualDownload: '下载'
  },
  batch: {
    title: '批量处理',
    process: '处理所有图像',
    cancel: '取消处理',
    selectPreset: '选择预设',
    savePreset: '保存当前设置',
    progress: '处理进度'
  },
  watermark: {
    title: '水印',
    enable: '添加水印',
    text: '水印文本',
    image: '水印图像',
    position: '位置',
    opacity: '透明度',
    rotation: '旋转',
    size: '大小',
    padding: '内边距'
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
    bottomRight: '右下'
  },
  actions: {
    resize: '调整大小',
    preview: '预览',
    processing: '处理中...',
    reset: '重置',
    applySettings: '应用设置',
    resetSettings: '重置设置',
    cancel: '取消'
  },
  messages: {
    resizeSuccess: '图像调整大小成功',
    resizeFailed: '调整图像大小失败：{error}',
    invalidDimensions: '请输入有效的尺寸',
    invalidWidthHeight: '请输入有效的宽度和高度',
    noImages: '请添加要调整大小的图像',
    noImagesToDownload: '没有可下载的图片',
    processing: '处理图像中...',
    processingComplete: '处理完成',
    processingError: '处理图片时出错',
    waitingForProcess: '等待处理',
    downloadStarted: '下载已开始',
    allDownloaded: '所有图像已下载',
    presetSaved: '预设已保存',
    presetLoaded: '预设已加载',
    zipCreated: '已创建包含{count}张图片的压缩包',
    zipError: '创建压缩包时出错'
  },
  preview: {
    title: '图片预览 ({count}张)',
    selectImage: '请选择图片',
    batchSupport: '支持批量选择多张图片一次性处理',
    download: '下载',
    delete: '删除'
  },
  qualityOptions: {
    fast: '快速处理',
    medium: '一般质量',
    high: '高质量 (推荐)',
    best: '最佳质量 (较慢)'
  }
} 