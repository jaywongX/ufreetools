export default {
  name: '圖像像素化器',
  description: '將圖像轉換為具有可自訂解析度和效果的像素藝術',

  upload: {
    title: '上傳圖像',
    dropzone: '將圖像拖放到此處或點擊瀏覽',
    maxSize: '最大檔案大小：10MB',
    supportedFormats: '支援的格式：JPG、PNG、WEBP、GIF'
  },

  settings: {
    title: '像素化設置',
    pixelSize: '像素大小',
    pixelShape: '像素形狀',
    shapes: {
      square: '方形',
      rounded: '圓角',
      circle: '圓形',
      diamond: '菱形',
      custom: '自訂'
    },
    resolution: '解析度',
    width: '寬度',
    height: '高度',
    preserveAspect: '保持寬高比',
    colorReduction: '顏色減少',
    colors: '顏色數',
    dithering: '抖動',
    ditheringTypes: {
      none: '無',
      floydSteinberg: 'Floyd-Steinberg',
      atkinson: 'Atkinson',
      ordered: '有序',
      bayer: 'Bayer'
    },
    palette: '顏色調色板',
    palettes: {
      auto: '自動',
      grayscale: '灰度',
      gameboy: 'Game Boy',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: '自訂',
      normal: '正常',
      retro: '復古',
      sepia: '懷舊',
      bright: '明亮',
      cool: '冷色調',
      warm: '暖色調',
      bw: '黑白',
      invert: '反色'
    },
    customPalette: '自訂調色板顏色',
    small: '小 (精細)',
    large: '大 (粗糙)',
    low: '低 (復古)',
    high:'高 (真彩)',
  },

  effects: {
    title: '效果',
    brightness: '亮度',
    contrast: '對比度',
    saturation: '飽和度',
    hue: '色相',
    outline: '輪廓',
    outlineColor: '輪廓顏色',
    noise: '噪點',
    posterize: '色調分離',
    invert: '反轉顏色',
    grayscale: '灰度',
    sepia: '棕褐色',
    vignette: '暗角'
  },

  animation: {
    title: '動畫設置',
    animated: '處理為動畫',
    frameRate: '幀率',
    optimizeFrames: '優化幀',
    looping: '循環',
    loopCount: '循環次數'
  },

  output: {
    title: '輸出',
    preview: '預覽',
    original: '原始',
    pixelated: '像素化',
    comparison: '對比',
    zoomIn: '放大',
    zoomOut: '縮小',
    gridOverlay: '網格覆蓋',
    downloadAs: '下載為',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: '精靈表',
    quality: '品質',
    scale: '縮放',
    loading: '載入中...',
    noImage: '請選擇一張圖片',
    processing: '處理中...'
  },

  presets: {
    title: '預設',
    save: '儲存當前設置',
    load: '載入預設',
    delete: '刪除預設',
    presetName: '預設名稱',
    defaults: {
      lowRes: '低解析度',
      highContrast: '高對比度',
      retro: '復古',
      minimal: '極簡',
      sketch: '素描',
      blueprint: '藍圖'
    }
  },

  actions: {
    pixelate: '像素化圖像',
    reset: '重置設置',
    applyChanges: '套用變更',
    undoChanges: '撤銷變更',
    downloadImage: '下載圖像',
    selectImage: '選擇圖片'
  },

  messages: {
    processing: '處理圖像中...',
    success: '圖像像素化成功',
    downloading: '準備下載中...',
    presetSaved: '預設儲存成功',
    presetLoaded: '預設已載入',
    presetDeleted: '預設已刪除',
    error: '錯誤：{error}',
    fileSize: '檔案大小',
    pixels: '像素',
    imageSize: '圖像尺寸',
    downloadSuccess: '圖片已下載',
    downloadFailed: '下載失敗',
    resetSuccess: '已重置',
    fileName: '檔案名稱'
  }
};