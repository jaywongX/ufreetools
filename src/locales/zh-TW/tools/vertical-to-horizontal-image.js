export default {
  name: "豎圖轉橫圖",
  description: "將垂直肖像圖像轉換為橫向景觀格式，提供多種轉換選項",

  upload: {
    title: "上傳圖片",
    dropzone: "拖放圖片到這裡",
    maxSize: "最大檔案大小：10MB",
    supportedFormats: "支援的格式：JPG、PNG、WEBP、GIF"
  },

  settings: {
    title: "轉換設定",
    presets: "快速預設",
    conversionMode: "轉換模式",
    modes: {
      rotate: "旋轉",
      fill: "填充背景",
      blur: "模糊背景",
      stretch: "拉伸邊緣",
      dualColor: "雙色背景"
    },
    rotationAngle: "旋轉角度",
    fillColor: "背景顏色",
    blurRadius: "模糊程度",
    stretchEdges: "拉伸程度",
    leftColor: "左側顏色",
    rightColor: "右側顏色",
    sizeOption: "尺寸設定",
    sizeModes: {
      auto: "自動尺寸",
      preset: "常用尺寸",
      custom: "自訂尺寸"
    },
    sizePresets: "尺寸預設",
    outputSize: "輸出尺寸",
    width: "寬度",
    height: "高度",
    dimensionsHint: "以像素為單位輸入尺寸",
    autoSize: "自動計算尺寸",
    outputFormat: "輸出格式",
    quality: "圖像品質",
    advancedOptions: "進階選項",
    preserveRatio: "保持寬高比",
    sharpen: "銳化",
    addWatermark: "添加浮水印",
    watermarkPlaceholder: "輸入浮水印文字",
    watermarkColor: "浮水印顏色"
  },

  output: {
    preview: "結果預覽",
    dimensions: "尺寸",
    before: "轉換前",
    after: "轉換後"
  },

  actions: {
    selectImage: "選擇圖片",
    convert: "轉換圖片",
    download: "下載圖片",
    reset: "移除",
    showSideBySide: "顯示對比",
    hideComparison: "隱藏對比",
    hideSideBySide: "關閉"
  },

  messages: {
    processing: "處理圖片中...",
    convertPrompt: "轉換圖片後結果將顯示在這裡",
    error: "處理圖片時發生錯誤",
    success: "轉換成功完成！"
  },

  examples: {
    title: "使用技巧",
    social: "非常適合社群媒體貼文，橫向圖像表現更好",
    socialTip: "使用模糊模式獲得最佳社群媒體效果",
    website: "為網站和部落格建立橫幅圖像",
    websiteTip: "雙色模式非常適合網頁橫幅"
  },

  help: {
    title: "如何使用此工具",
    description: "此工具可讓您使用各種方法將垂直（肖像）圖像轉換為水平（景觀）格式，同時保持視覺品質和效果。",
    example1: {
      title: "社群媒體貼文",
      description: "將肖像照片轉換為社群媒體友好的橫向格式，帶模糊背景"
    },
    example2: {
      title: "網站橫幅",
      description: "使用顏色填充背景，從垂直圖像建立網站頭部和橫幅"
    }
  }
};