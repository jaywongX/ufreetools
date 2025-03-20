export default {
  name: '图片压缩器',
  description: '在保持质量的同时压缩和优化图片',
  options: {
    quality: '质量',
    format: '输出格式',
    keepExif: '保留EXIF数据',
    resizeImage: '调整图片大小',
    maxWidth: '最大宽度',
    maxHeight: '最大高度',
    compressionLevel: '压缩级别',
    maxFileSize: '目标文件大小',
    optimizationLevel: '优化级别',
    convertTo: '转换为'
  },
  presets: {
    web: '网页优化',
    highQuality: '高质量',
    balanced: '平衡',
    smallSize: '小体积',
    custom: '自定义'
  },
  formats: {
    original: '原始格式',
    jpeg: 'JPEG',
    png: 'PNG',
    webp: 'WebP',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },
  resizeOptions: {
    noResize: '不调整大小',
    maxDimension: '最大尺寸',
    exactDimensions: '精确尺寸',
    percentage: '百分比缩放'
  },
  actions: {
    upload: '上传图片',
    compress: '压缩',
    download: '下载',
    downloadAll: '下载全部',
    clear: '清除',
    addMore: '添加更多图片',
    removeAll: '移除全部'
  },
  table: {
    filename: '文件名',
    originalSize: '原始大小',
    compressedSize: '压缩后大小',
    savings: '节省',
    quality: '质量',
    dimensions: '尺寸',
    status: '状态'
  },
  messages: {
    dropped: '已拖入{count}张图片',
    uploading: '正在上传图片...',
    compressing: '正在压缩图片...',
    compressed: '图片压缩成功',
    downloadPreparing: '正在准备下载...',
    downloadReady: '下载已就绪',
    cleared: '所有图片已清除',
    tooManyFiles: '文件过多。最多允许：{max}',
    fileTooLarge: '文件过大。最大允许：{max}MB',
    unsupportedFormat: '不支持的文件格式：{format}',
    imageError: '处理图片时出错：{error}'
  }
} 