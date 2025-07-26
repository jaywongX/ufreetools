export default {
  name: '圖片裁剪器',
  description: '精確裁剪、調整大小和旋轉圖片',

  upload: {
    title: '上傳圖片',
    dropzone: '將圖片拖放到此處或點擊瀏覽',
    maxSize: '最大檔案大小：10MB',
    supportedFormats: '支援的格式：JPG、PNG、WEBP、GIF',
    select: '請選擇一張圖片開始裁剪和編輯'
  },

  editor: {
    title: '圖片編輯器',
    zoom: '縮放',
    rotate: '旋轉',
    flipHorizontal: '水平翻轉',
    flipVertical: '垂直翻轉',
    reset: '重置圖片',
    undo: '撤銷',
    redo: '重做',
    dragMode: '拖動模式',
    scaleMode: '縮放模式'
  },

  crop: {
    title: '裁剪設定',
    aspectRatio: '寬高比',
    freeform: '自由形式',
    square: '正方形 (1:1)',
    portrait: '肖像 (3:4)',
    landscape: '風景 (4:3)',
    widescreen: '寬螢幕 (16:9)',
    panorama: '全景 (2:1)',
    custom: '自訂',
    width: '寬度',
    height: '高度',
    unit: '單位',
    pixels: '像素',
    percent: '百分比',
    lockAspectRatio: '鎖定寬高比'
  },

  presets: {
    title: '尺寸預設',
    original: '原始尺寸',
    social: '社交媒體',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: '列印尺寸',
    fourBySix: '4×6英寸',
    fiveBySeven: '5×7英寸',
    eightByTen: '8×10英寸'
  },

  output: {
    title: '輸出',
    preview: '預覽',
    dimensions: '輸出尺寸',
    quality: '品質',
    format: '格式',
    fileName: '檔案名稱',
    download: '下載',
    saveAs: '另存為',
    copy: '複製到剪貼簿'
  },

  actions: {
    crop: '裁剪圖片',
    apply: '應用',
    cancel: '取消',
    save: '儲存圖片',
    download: '下載',
    newImage: '新圖片'
  },

  messages: {
    cropSuccess: '圖片裁剪成功',
    downloadReady: '您裁剪的圖片已準備好下載',
    processing: '處理圖片中...',
    copied: '圖片已複製到剪貼簿',
    invalidFile: '無效檔案。請上傳有效的圖片。',
    fileTooLarge: '檔案太大。最大大小為10MB。'
  }
};