export default {
  name: '圖像批次調整器',
  description: '一次性調整、轉換和優化多張圖像',

  input: {
    title: '輸入圖像',
    dropzone: '將圖像拖放到此處或點擊瀏覽',
    addMore: '添加更多圖像',
    selectImages: '選擇圖片',
    clearAll: '清除全部',
    maxFiles: '最多{count}張圖像',
    maxSize: '每張圖像最大大小：{size}MB',
    supportedFormats: '支援的格式：{formats}'
  },

  options: {
    title: '調整選項',
    settingsTitle: '調整設定',
    resizeMode: '調整模式',
    resizeMethod: '調整方式',
    pixelMode: '像素',
    percentageMode: '百分比',
    maxDimensionMode: '最大尺寸',
    outputFormat: '輸出格式',
    quality: '質量',
    width: '寬度',
    height: '高度',
    maintainAspectRatio: '保持寬高比',
    maxWidth: '最大寬度',
    maxHeight: '最大高度',
    percentage: '百分比',
    backgroundColor: '背景顏色',
    naming: '輸出命名',
    filenamePrefix: '文件名前綴',
    filenameSuffix: '文件名後綴',
    applyToAllImages: '應用到所有圖片',
    applyToAll: '應用於所有圖像'
  },

  resizeModes: {
    exact: '精確尺寸',
    maxDimensions: '最大尺寸',
    percentage: '百分比縮放',
    fit: '適應內部',
    cover: '覆蓋',
    crop: '裁剪'
  },

  formats: {
    original: '與源相同',
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
    custom: '自定義模式',
    random: '隨機字符串'
  },

  output: {
    title: '調整後的圖像',
    downloadAll: '下載全部',
    downloadAsZip: '下載為ZIP',
    processingStatus: '處理中：{processed}/{total}',
    originalSize: '原始大小',
    newSize: '新大小',
    reduction: '減少量',
    individualDownload: '下載'
  },

  batch: {
    title: '批次處理',
    process: '處理所有圖像',
    cancel: '取消處理',
    selectPreset: '選擇預設',
    savePreset: '保存當前設定',
    progress: '處理進度'
  },

  watermark: {
    title: '浮水印',
    enable: '添加浮水印',
    text: '浮水印文本',
    image: '浮水印圖像',
    position: '位置',
    opacity: '透明度',
    rotation: '旋轉',
    size: '大小',
    padding: '內邊距'
  },

  positions: {
    topLeft: '左上',
    topCenter: '頂部居中',
    topRight: '右上',
    middleLeft: '左中',
    middleCenter: '居中',
    middleRight: '右中',
    bottomLeft: '左下',
    bottomCenter: '底部居中',
    bottomRight: '右下'
  },

  actions: {
    resize: '調整大小',
    preview: '預覽',
    processing: '處理中...',
    reset: '重置',
    applySettings: '應用設定',
    resetSettings: '重置設定',
    cancel: '取消'
  },

  messages: {
    resizeSuccess: '圖像調整大小成功',
    resizeFailed: '調整圖像大小失敗：{error}',
    invalidDimensions: '請輸入有效的尺寸',
    invalidWidthHeight: '請輸入有效的寬度和高度',
    noImages: '請添加要調整大小的圖像',
    noImagesToDownload: '沒有可下載的圖片',
    processing: '處理圖像中...',
    processingComplete: '處理完成',
    processingError: '處理圖片時出錯',
    waitingForProcess: '等待處理',
    downloadStarted: '下載已開始',
    allDownloaded: '所有圖像已下載',
    presetSaved: '預設已保存',
    presetLoaded: '預設已加載',
    zipCreated: '已創建包含{count}張圖片的壓縮包',
    zipError: '創建壓縮包時出錯'
  },

  preview: {
    title: '圖片預覽 ({count}張)',
    selectImage: '請選擇圖片',
    batchSupport: '支援批次選擇多張圖片一次性處理',
    download: '下載',
    delete: '刪除'
  },

  qualityOptions: {
    fast: '快速處理',
    medium: '一般質量',
    high: '高質量 (推薦)',
    best: '最佳質量 (較慢)'
  }
};