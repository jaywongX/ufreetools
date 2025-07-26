export default {
  name: '圖像浮水印',
  description: '為您的照片添加文字或圖像浮水印，具有可自訂設定',

  upload: {
    title: '上傳圖像',
    dropzone: '將圖像拖放到此處或點擊瀏覽',
    addMore: '新增更多圖像',
    clearAll: '清除全部',
    maxFiles: '最多{count}張圖像',
    maxSize: '每張圖像最大大小：{size}MB',
    supportedFormats: '支援的格式：JPG、PNG、WEBP、GIF'
  },

  watermarkType: {
    title: '浮水印類型',
    text: '文字浮水印',
    image: '圖像浮水印',
    both: '文字和圖像'
  },

  textWatermark: {
    title: '文字浮水印',
    text: '浮水印文字',
    font: '字體',
    size: '大小',
    color: '顏色',
    opacity: '不透明度',
    rotation: '旋轉',
    shadow: '文字陰影',
    background: '文字背景',
    padding: '內邊距',
    border: '邊框',
    spacing: '字間距'
  },

  imageWatermark: {
    title: '圖像浮水印',
    upload: '上傳浮水印圖像',
    selectLogo: '選擇標誌',
    presetLogos: '預設標誌',
    size: '大小',
    opacity: '不透明度',
    rotation: '旋轉',
    offset: '偏移'
  },

  positioning: {
    title: '定位',
    position: '位置',
    custom: '自訂位置',
    xPosition: 'X位置',
    yPosition: 'Y位置',
    tiled: '平鋪模式',
    margin: '邊距',
    scale: '隨圖像縮放'
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
    bottomRight: '右下',
    custom: '自訂位置'
  },

  output: {
    title: '輸出',
    quality: '輸出品質',
    format: '輸出格式',
    original: '與原始相同',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: '預覽',
    downloadIndividual: '下載',
    downloadAll: '下載全部',
    downloadAsZip: '下載為ZIP'
  },

  presets: {
    title: '預設',
    save: '儲存當前設定',
    load: '載入預設',
    delete: '刪除預設',
    presetName: '預設名稱'
  },

  actions: {
    apply: '套用浮水印',
    applyToAll: '套用到全部',
    reset: '重置',
    preview: '預覽',
    undo: '撤銷',
    cancel: '取消處理'
  },

  messages: {
    processing: '處理中...',
    success: '浮水印套用成功',
    error: '錯誤：{error}',
    noImages: '請先新增圖像',
    noWatermark: '請新增文字或圖像浮水印',
    presetSaved: '預設儲存成功',
    presetLoaded: '預設載入成功',
    presetDeleted: '預設已刪除',
    watermarkApplied: '浮水印已套用',
    watermarkImageLoadError: '浮水印圖片載入失敗',
    imageLoadError: '圖片載入失敗',
    resetSuccess: '已重置',
    downloadStarted: '開始下載',
    downloadError: '下載圖片失敗',
    imageLoaded: '圖片載入成功',
    canvasInitError: '畫布初始化失敗',
    tiledWatermarkError: '建立平鋪浮水印失敗'
  }
};