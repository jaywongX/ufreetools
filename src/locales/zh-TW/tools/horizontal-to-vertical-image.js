export default {
  name: '橫圖轉豎圖',
  description: '將橫向圖片轉換為豎向格式，適用於短視頻、手機壁紙和社交媒體發布',
  tags: ['圖片', '轉換', '手機', '社交', '故事', '豎直', '肖像'],

  upload: {
    title: '橫圖轉豎圖轉換器',
    dropzone: '拖放圖片到這裡',
    maxSize: '最大文件大小：10MB',
    supportedFormats: '支持格式：JPG、PNG、WEBP、GIF'
  },

  settings: {
    title: '轉換設置',
    presets: '預設',
    conversionMode: '轉換模式',
    modes: {
      crop: '裁剪',
      fill: '顏色填充',
      blur: '模糊背景',
      stretch: '邊緣拉伸',
      dualColor: '雙色背景'
    },
    cropPosition: '裁剪位置',
    positions: {
      left: '左側',
      center: '中心',
      right: '右側'
    },
    fillColor: '填充顏色',
    blurRadius: '模糊半徑',
    stretchFactor: '拉伸係數',
    topColor: '頂部顏色',
    bottomColor: '底部顏色',
    sizeOption: '輸出尺寸',
    sizeModes: {
      auto: '自動',
      preset: '預設',
      custom: '自定義'
    },
    sizePresets: '尺寸預設',
    outputSize: '自定義尺寸',
    width: '寬度',
    height: '高度',
    dimensionsHint: '以像素為單位輸入尺寸',
    outputFormat: '輸出格式',
    quality: '圖像質量',
    advancedOptions: '高級選項',
    preserveRatio: '保持寬高比',
    sharpen: '銳化',
    addWatermark: '添加水印',
    watermarkPlaceholder: '輸入水印文字',
    watermarkColor: '水印顏色'
  },

  output: {
    preview: '輸出預覽',
    before: '轉換前',
    after: '轉換後',
    dimensions: '尺寸'
  },

  actions: {
    selectImage: '選擇圖片',
    convert: '轉換為豎圖',
    download: '下載圖片',
    showSideBySide: '顯示對比',
    hideSideBySide: '隱藏對比',
    hideComparison: '隱藏對比'
  },

  messages: {
    convertPrompt: '上傳橫向圖片並轉換為豎向格式',
    processing: '正在處理您的圖片...',
    imageOnly: '請選擇圖片文件'
  },

  examples: {
    title: '應用示例',
    social: '為Instagram、抖音等平台創建豎向故事',
    socialTip: '完美將橫向照片轉換為吸引人的豎屏內容',
    mobile: '將橫向圖片製作成手機壁紙',
    mobileTip: '為各種屏幕比例的智能手機優化圖像'
  }
};