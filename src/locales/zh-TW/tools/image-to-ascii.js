export default {
  name: '圖像轉ASCII',
  description: '將圖像轉換為可自訂選項的ASCII藝術文字',

  upload: {
    title: '上傳圖像',
    dropzone: '將圖像拖放到此處或點擊瀏覽',
    maxSize: '最大檔案大小：5MB',
    supportedFormats: '支援的格式：JPG、PNG、WEBP、GIF',
    pasteImage: '或從剪貼簿貼上圖像'
  },

  options: {
    title: '轉換選項',
    width: '輸出寬度',
    height: '輸出高度',
    preserveAspect: '保持寬高比',
    colored: '彩色輸出',
    charSet: '字元集',
    charSets: {
      standard: '標準',
      simple: '簡單',
      complex: '複雜',
      blocks: '方塊字元',
      custom: '自訂'
    },
    customChars: '自訂字元',
    invert: '反轉顏色',
    threshold: '亮度閾值',
    brightness: '亮度',
    contrast: '對比度',
    fontFamily: '字型系列',
    fontSize: '字型大小',
    lineHeight: '行高',
    backgroundColor: '背景顏色',
    textColor: '文字顏色'
  },

  output: {
    title: 'ASCII輸出',
    preview: '預覽',
    raw: '原始ASCII',
    html: 'HTML',
    copyToClipboard: '複製到剪貼簿',
    downloadTxt: '下載為TXT',
    downloadHtml: '下載為HTML',
    downloadImage: '下載為圖像',
    stats: {
      title: '統計',
      characters: '字元數',
      lines: '行數',
      colors: '顏色數',
      size: '文字大小'
    }
  },

  presets: {
    title: '預設',
    save: '儲存當前設置',
    load: '載入預設',
    delete: '刪除預設',
    presetName: '預設名稱',
    default: '預設',
    detailed: '詳細',
    minimalist: '極簡',
    blocky: '方塊風格',
    small: '小型',
    inverted: '反轉'
  },

  adjustment: {
    title: '圖像調整',
    grayscale: '灰階',
    negative: '負片',
    resize: '轉換前調整大小',
    crop: '裁剪圖像',
    rotate: '旋轉',
    flipH: '水平翻轉',
    flipV: '垂直翻轉'
  },

  animation: {
    title: '動畫',
    animated: '處理為動畫',
    frameDelay: '幀延遲',
    loop: '循環動畫',
    loopCount: '循環次數',
    extractFrame: '提取當前幀'
  },

  actions: {
    convert: '轉換為ASCII',
    resetOptions: '重設選項',
    refreshPreview: '重新整理預覽',
    loadImage: '載入新圖像',
    applyChanges: '套用變更',
    selectImage: '選擇圖片',
    reset: '重設',
    processing: '處理中...',
    generate: '產生ASCII',
    copy: '複製',
    download: '下載'
  },

  messages: {
    converting: '正在將圖像轉換為ASCII...',
    conversionComplete: '轉換完成',
    conversionFailed: '圖像轉換失敗：{error}',
    copied: 'ASCII已複製到剪貼簿',
    downloadStarted: '下載已開始',
    downloadComplete: 'ASCII已下載',
    downloadFailed: '下載失敗',
    copyFailed: '複製失敗',
    resetComplete: '已重設',
    asciiGenerated: 'ASCII藝術已產生',
    generationFailed: '產生ASCII失敗',
    presetSaved: '預設已儲存',
    presetLoaded: '預設已載入',
    presetDeleted: '預設已刪除',
    invalidImage: '無效的圖像格式或損壞的檔案',
    imageTooBig: '圖像尺寸太大，無法轉換',
    selectOrLoad: '請選擇圖像或從URL載入',
    asciiWillDisplay: 'ASCII將在這裡顯示',
    customCharsPlaceholder: '輸入字元，從暗到亮排序...',
    tip: '調整設置後點擊"產生ASCII"按鈕來查看效果',
    drapPlaceHolder: '選擇或拖放圖片到這裡',
    noImage: '請先選擇一張圖片',
    generateAscii: '點擊"產生ASCII"按鈕轉換圖片',
    tip2: '提示：使用複製按鈕可以將ASCII藝術複製到剪貼簿，或使用下載按鈕儲存為文字檔案。'
  },

  charSets: {
    standard: '標準',
    simple: '簡單',
    blocks: '方塊',
    custom: '自訂'
  },

  settings: {
    title: 'ASCII設置',
    customCharsetLabel: '自訂字元集（從暗到亮）',
    asciiWidth: 'ASCII寬度',
    invert: '反轉顏色',
    colored: '彩色輸出',
    fontSize: '字型大小'
  },

  preview: {
    originalImage: '原始圖像',
    generatedAscii: '產生的ASCII'
  }
};