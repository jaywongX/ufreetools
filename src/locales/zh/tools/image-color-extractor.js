export default {
  name: '图像颜色提取器',
  description: '从图像中提取颜色调色板和主要颜色',
  input: {
    title: '上传图像',
    dropzone: '将图像拖放到此处或点击上传',
    formats: '支持的格式：JPG、PNG、GIF、WebP、SVG',
    browse: '浏览文件',
    selectImage: '选择图片',
    orText: '或',
    pasteUrl: '粘贴图像URL：',
    loadUrl: '从URL加载',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: '未命名图像'
  },
  options: {
    title: '提取选项',
    extractSettings: '提取设置',
    colorCount: '颜色数量',
    paletteSize: '调色板大小',
    paletteMin: '最少 (3)',
    paletteMax: '最多 (20)',
    colorSimilarity: '颜色相似度',
    similiarityToggle: '允许相似颜色',
    quality: '提取质量',
    colorModel: '颜色模型',
    colorSpace: '色彩空间',
    colorFormat: '颜色格式',
    sortBy: '颜色排序方式',
    sortByPopularity: '按颜色出现频率',
    sortByLuminance: '按亮度',
    sortByHue: '按色相',
    sortBySaturation: '按饱和度',
    ignoreWhite: '忽略白色',
    ignoreBlack: '忽略黑色',
    threshold: '相似度阈值'
  },
  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },
  colorFormats: {
    hex: '十六进制 (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: '带透明度的RGBA',
    hsl: 'HSL',
    hsla: '带透明度的HSLA',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },
  sortOptions: {
    prevalence: '出现频率',
    luminance: '亮度',
    hue: '色相',
    saturation: '饱和度',
    original: '原始顺序'
  },
  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },
  results: {
    title: '已提取颜色',
    colorsFound: '已提取{count}种颜色',
    dominantColor: '主要颜色',
    mainColor: '主色调',
    complementary: '互补色',
    palette: '颜色调色板',
    colorPalette: '颜色调色板',
    palettePreview: '调色板预览',
    usage: '颜色使用率 (%)',
    percentage: '占比: {value}%',
    copyAll: '复制所有颜色',
    clickToCopy: '点击复制颜色: {color}',
    downloading: '正在下载调色板...'
  },
  display: {
    originalImage: '原始图片',
    colorPalette: '色彩调色板',
    uploadFirst: '请先上传一张图片',
    clickExtract: '点击"提取颜色"按钮获取图片的调色板',
  },
  actions: {
    extract: '提取颜色',
    extracting: '处理中...',
    download: '下载调色板',
    copy: '复制',
    copyValue: '复制值',
    reset: '重置',
    copyPalette: '复制调色板',
    exportJson: '导出为JSON',
    exportCss: '导出为CSS变量',
    exportSass: '导出为SASS变量',
    exportSwatch: '导出为ASE色板'
  },
  palette: {
    title: '命名调色板',
    vibrant: '鲜艳',
    muted: '柔和',
    dark: '暗色',
    light: '亮色',
    custom: '自定义'
  },
  messages: {
    imageLoaded: '图像加载成功',
    processingImage: '正在处理图像...',
    extractionComplete: '颜色提取完成',
    extractionFailed: '颜色提取失败：{error}',
    copied: '已复制到剪贴板',
    copiedColor: '已复制: {color}',
    copiedAll: '已复制所有颜色',
    copyFailed: '复制失败',
    resetDone: '已重置',
    invalidImage: '无效的图像文件',
    noImageSelected: '未选择图像'
  }
} 