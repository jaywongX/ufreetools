export default {
  name: '圖像色彩提取器',
  description: '從圖像中提取色彩調色板和主要顏色',

  input: {
    title: '上傳圖像',
    dropzone: '將圖像拖放到此處或點擊上傳',
    formats: '支援的格式：JPG、PNG、GIF、WebP、SVG',
    browse: '瀏覽檔案',
    selectImage: '選擇圖片',
    orText: '或',
    pasteUrl: '貼上圖像URL：',
    loadUrl: '從URL載入',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: '未命名圖像'
  },

  options: {
    title: '提取選項',
    extractSettings: '提取設定',
    colorCount: '顏色數量',
    paletteSize: '調色板大小',
    paletteMin: '最少 (3)',
    paletteMax: '最多 (20)',
    colorSimilarity: '顏色相似度',
    similiarityToggle: '允許相似顏色',
    quality: '提取品質',
    colorModel: '色彩模型',
    colorSpace: '色彩空間',
    colorFormat: '顏色格式',
    sortBy: '顏色排序方式',
    sortByPopularity: '按顏色出現頻率',
    sortByLuminance: '按亮度',
    sortByHue: '按色相',
    sortBySaturation: '按飽和度',
    ignoreWhite: '忽略白色',
    ignoreBlack: '忽略黑色',
    threshold: '相似度閾值'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: '十六進位 (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: '帶透明度的RGBA',
    hsl: 'HSL',
    hsla: '帶透明度的HSLA',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: '出現頻率',
    luminance: '亮度',
    hue: '色相',
    saturation: '飽和度',
    original: '原始順序'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: '已提取顏色',
    colorsFound: '已提取{count}種顏色',
    dominantColor: '主要顏色',
    mainColor: '主色調',
    complementary: '互補色',
    palette: '顏色調色板',
    colorPalette: '顏色調色板',
    palettePreview: '調色板預覽',
    usage: '顏色使用率 (%)',
    percentage: '佔比: {value}%',
    copyAll: '複製所有顏色',
    clickToCopy: '點擊複製顏色: {color}',
    downloading: '正在下載調色板...'
  },

  display: {
    originalImage: '原始圖片',
    colorPalette: '色彩調色板',
    uploadFirst: '請先上傳一張圖片',
    clickExtract: '點擊"提取顏色"按鈕獲取圖片的調色板',
  },

  actions: {
    extract: '提取顏色',
    extracting: '處理中...',
    download: '下載調色板',
    copy: '複製',
    copyValue: '複製值',
    reset: '重置',
    copyPalette: '複製調色板',
    exportJson: '匯出為JSON',
    exportCss: '匯出為CSS變數',
    exportSass: '匯出為SASS變數',
    exportSwatch: '匯出為ASE色板'
  },

  palette: {
    title: '命名調色板',
    vibrant: '鮮豔',
    muted: '柔和',
    dark: '暗色',
    light: '亮色',
    custom: '自訂'
  },

  messages: {
    imageLoaded: '圖像載入成功',
    processingImage: '正在處理圖像...',
    extractionComplete: '顏色提取完成',
    extractionFailed: '顏色提取失敗：{error}',
    copied: '已複製到剪貼簿',
    copiedColor: '已複製: {color}',
    copiedAll: '已複製所有顏色',
    copyFailed: '複製失敗',
    resetDone: '已重置',
    invalidImage: '無效的圖像檔案',
    noImageSelected: '未選擇圖像'
  }
};