export default {
  name: '圖像濾鏡',
  description: '即時預覽為圖像應用各種濾鏡和效果',

  upload: {
    title: '上傳圖像',
    dropzone: '將圖像拖放到此處或點擊瀏覽',
    maxSize: '最大檔案大小：10MB',
    supportedFormats: '支援的格式：JPG、PNG、WEBP、GIF'
  },

  editor: {
    title: '濾鏡編輯器',
    original: '原始',
    filtered: '已過濾',
    reset: '全部重置',
    undo: '撤銷',
    redo: '重做',
    zoomIn: '放大',
    zoomOut: '縮小',
    fitToScreen: '適應螢幕',
    showOriginal: '顯示原圖'
  },

  filters: {
    title: '濾鏡',
    basic: '基本調整',
    brightness: '亮度',
    contrast: '對比度',
    saturation: '飽和度',
    hue: '色相',
    exposure: '曝光',
    vibrance: '自然飽和度',
    temperature: '色溫',
    gamma: '伽馬',
    clarity: '清晰度',
    effects: '效果',
    grayscale: '灰階',
    sepia: '棕褐色',
    vintage: '復古',
    polaroid: '寶麗來',
    duotone: '雙色調',
    noise: '噪點',
    pixelate: '像素化',
    blur: '模糊',
    sharpen: '銳化',
    vignette: '暗角',
    color: '顏色',
    colorOverlay: '顏色疊加',
    colorize: '著色',
    gradientMap: '漸變映射',
    replaceColor: '替換顏色',
    advanced: '進階',
    levels: '色階',
    curves: '曲線',
    shadows: '陰影',
    highlights: '高光',
    blacks: '黑色',
    whites: '白色',
    channels: 'RGB通道'
  },

  presets: {
    title: '預設',
    custom: '自訂',
    blackAndWhite: '黑白',
    highContrast: '高對比度',
    normal: '正常',
    cinematic: '電影感',
    warm: '暖色調',
    cool: '冷色調',
    sunset: '日落',
    vintage: '復古',
    invert: '反色',
    cross: '交叉沖印',
    matte: '啞光',
    flat: '平淡',
    portrait: '人像',
    landscape: '風景',
    vivid: '鮮豔',
    moody: '憂鬱',
    savePreset: '儲存當前為預設',
    deletePreset: '刪除預設',
    presetName: '預設名稱'
  },

  output: {
    title: '輸出',
    fileName: '檔案名稱',
    format: '格式',
    quality: '品質',
    width: '寬度',
    height: '高度',
    download: '下載圖像',
    saveOnline: '線上儲存',
    share: '分享',
    applyToNew: '應用到新圖像'
  },

  history: {
    title: '歷史記錄',
    revert: '恢復到此步驟',
    clear: '清除歷史記錄'
  },

  actions: {
    apply: '應用濾鏡',
    download: '下載',
    save: '儲存',
    reset: '重置',
    cancel: '取消'
  },

  messages: {
    imageLoaded: '圖像載入成功',
    filterApplied: '濾鏡應用成功',
    filtersReset: '濾鏡已重置為預設值',
    downloadStarted: '下載已開始',
    presetSaved: '預設儲存成功',
    presetDeleted: '預設已刪除',
    invalidFile: '無效檔案。請上傳有效的圖像。',
    fileTooLarge: '檔案太大。最大大小為10MB。'
  }
};