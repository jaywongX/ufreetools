export default {
  name: '圖片壓縮器',
  description: '在保持品質的同時壓縮和優化圖片',

  input: {
    dragDrop: '拖放圖片到此處或點擊上傳',
    supportedFormats: '支援 JPG, PNG, GIF, WEBP 格式',
    selected: '已選擇 {count} 個檔案',
    changeFiles: '更換檔案',
    width: '寬度',
    height: '高度',
    keepOriginal: '設為0表示保持原始尺寸',
  },

  results: {
    originalImage: '原始圖片',
    compressedImage: '壓縮後',
    filename: '檔案名稱:',
    dimensions: '尺寸:',
    fileSize: '大小:',
    compressionRatio: '壓縮率:',
    viewOriginal: '查看原圖',
  },

  about: {
    title: '關於圖片壓縮',
    description: '本工具透過瀏覽器的Canvas API實現圖片壓縮，所有處理均在您的裝置上完成，圖片不會上傳到伺服器。',
    principlesTitle: '壓縮原理:',
    principles: {
      resize: '調整圖片尺寸：較小的尺寸意味著更少的像素數據',
      quality: '降低品質：降低圖片的品質參數，減少檔案大小',
      format: '轉換格式：不同的圖片格式有不同的壓縮特性'
    },
    useCasesTitle: '適用場景:',
    useCases: {
      web: '網站圖片優化，提升載入速度',
      email: '減小郵件附件大小',
      social: '社交媒體上傳前壓縮',
      storage: '儲存空間優化'
    }
  },

  options: {
    quality: '品質',
    qualityValue: '品質 ({value}%)',
    lowQuality: '低品質/小檔案',
    highQuality: '高品質/大檔案',
    format: '輸出格式',
    maxSize: '最大尺寸 ({width} × {height} px)',
    keepExif: '保留EXIF數據',
    resizeImage: '調整圖片大小',
    maxWidth: '最大寬度',
    maxHeight: '最大高度',
    compressionLevel: '壓縮級別',
    maxFileSize: '目標檔案大小',
    optimizationLevel: '優化級別',
    convertTo: '轉換為'
  },

  presets: {
    web: '網頁優化',
    highQuality: '高品質',
    balanced: '平衡',
    smallSize: '小體積',
    custom: '自訂'
  },

  formats: {
    original: '原始格式',
    jpeg: 'JPEG',
    jpegDesc: 'JPEG格式適合照片，不支援透明背景',
    png: 'PNG',
    pngDesc: 'PNG格式支援透明背景，適合圖示和插圖',
    webp: 'WebP',
    webpDesc: 'WebP格式提供高壓縮率，適合在網路上使用',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: '不調整大小',
    maxDimension: '最大尺寸',
    exactDimensions: '精確尺寸',
    percentage: '百分比縮放'
  },

  actions: {
    upload: '上傳圖片',
    compress: '壓縮',
    processing: '正在處理...',
    download: '下載',
    downloadAll: '下載全部',
    batchDownload: '批次下載',
    clear: '清除',
    addMore: '添加更多圖片',
    removeAll: '移除全部',
    preview: '預覽',
    delete: '刪除'
  },

  table: {
    filename: '檔案名稱',
    originalSize: '原始大小',
    original: '原始檔案大小',
    compressedSize: '壓縮後大小',
    compressed: '壓縮後大小',
    savings: '節省',
    ratio: '壓縮率',
    quality: '品質',
    dimensions: '尺寸',
    originalDimensions: '原始尺寸',
    newDimensions: '新尺寸',
    status: '狀態'
  },

  messages: {
    dropped: '已拖入{count}張圖片',
    uploading: '正在上傳圖片...',
    compressing: '正在壓縮圖片...',
    compressed: '圖片壓縮成功',
    downloadPreparing: '正在準備下載...',
    downloadReady: '下載已就緒',
    cleared: '所有圖片已清除',
    tooManyFiles: '檔案過多。最多允許：{max}',
    fileTooLarge: '檔案過大。最大允許：{max}MB',
    unsupportedFormat: '不支援的檔案格式：{format}',
    imageError: '處理圖片時出錯：{error}',
    batchDownloadNotSupported: '批次下載功能需要另行添加JSZip庫。請逐個下載圖片，或添加zip庫支援。',
    batchDownloadError: '批次下載圖片時出錯: {error}',
    invalidImage: '請選擇有效的圖片檔案'
  }
};