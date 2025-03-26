export default {
  name: '图片压缩器',
  description: '在保持质量的同时压缩和优化图片',
  input: {
    dragDrop: '拖放图片到此处或点击上传',
    supportedFormats: '支持 JPG, PNG, GIF, WEBP 格式',
    selected: '已选择 {count} 个文件',
    changeFiles: '更换文件',
    width: '宽度',
    height: '高度',
    keepOriginal: '设置为0表示保持原始尺寸',
  },
  results: {
    originalImage: '原始图片',
    compressedImage: '压缩后',
    filename: '文件名:',
    dimensions: '尺寸:',
    fileSize: '大小:',
    compressionRatio: '压缩率:',
    viewOriginal: '查看原图',
  },
  about: {
    title: '关于图片压缩',
    description: '本工具通过浏览器的Canvas API实现图片压缩，所有处理均在您的设备上完成，图片不会上传到服务器。',
    principlesTitle: '压缩原理:',
    principles: {
      resize: '调整图片尺寸：较小的尺寸意味着更少的像素数据',
      quality: '降低质量：降低图片的品质参数，减少文件大小',
      format: '转换格式：不同的图片格式有不同的压缩特性'
    },
    useCasesTitle: '适用场景:',
    useCases: {
      web: '网站图片优化，提升加载速度',
      email: '减小邮件附件大小',
      social: '社交媒体上传前压缩',
      storage: '存储空间优化'
    }
  },
  options: {
    quality: '质量',
    qualityValue: '质量 ({value}%)',
    lowQuality: '低质量/小文件',
    highQuality: '高质量/大文件',
    format: '输出格式',
    maxSize: '最大尺寸 ({width} × {height} px)',
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
    jpegDesc: 'JPEG格式适合照片，不支持透明背景',
    png: 'PNG',
    pngDesc: 'PNG格式支持透明背景，适合图标和插图',
    webp: 'WebP',
    webpDesc: 'WebP格式提供高压缩率，适合在网络上使用',
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
    processing: '正在处理...',
    download: '下载',
    downloadAll: '下载全部',
    batchDownload: '批量下载',
    clear: '清除',
    addMore: '添加更多图片',
    removeAll: '移除全部',
    preview: '预览',
    delete: '删除'
  },
  table: {
    filename: '文件名',
    originalSize: '原始大小',
    original: '原始文件大小',
    compressedSize: '压缩后大小',
    compressed: '压缩后大小',
    savings: '节省',
    ratio: '压缩率',
    quality: '质量',
    dimensions: '尺寸',
    originalDimensions: '原始尺寸',
    newDimensions: '新尺寸',
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
    imageError: '处理图片时出错：{error}',
    batchDownloadNotSupported: '批量下载功能需要另行添加JSZip库。请逐个下载图片，或添加zip库支持。',
    batchDownloadError: '批量下载图片时出错: {error}',
    invalidImage: '请选择有效的图片文件'
  }
} 