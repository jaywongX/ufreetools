export default {
  name: '图像颜色提取器',
  description: '从图像中提取颜色调色板和主要颜色',
  input: {
    title: '上传图像',
    dropzone: '将图像拖放到此处或点击上传',
    formats: '支持的格式：JPG、PNG、GIF、WebP、SVG',
    browse: '浏览文件',
    orText: '或',
    pasteUrl: '粘贴图像URL：',
    loadUrl: '从URL加载',
    urlPlaceholder: 'https://example.com/image.jpg'
  },
  options: {
    title: '提取选项',
    colorCount: '颜色数量',
    quality: '提取质量',
    colorModel: '颜色模型',
    colorSpace: '色彩空间',
    colorFormat: '颜色格式',
    sortBy: '颜色排序方式',
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
    complementary: '互补色',
    palette: '颜色调色板',
    usage: '颜色使用率 (%)',
    copyAll: '复制所有颜色',
    downloading: '正在下载调色板...'
  },
  actions: {
    extract: '提取颜色',
    download: '下载调色板',
    copy: '复制',
    copyValue: '复制值',
    reset: '重置',
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
    invalidImage: '无效的图像文件',
    noImageSelected: '未选择图像'
  }
} 