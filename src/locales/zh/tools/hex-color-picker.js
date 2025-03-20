export default {
  name: '十六进制颜色选择器',
  description: '生成、转换并操作各种格式的颜色代码',
  colorInput: {
    hex: '十六进制',
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },
  options: {
    format: '格式',
    includeHashTag: '包含#号',
    uppercaseHex: '大写十六进制',
    alpha: '透明度通道',
    colorSpace: '色彩空间'
  },
  formats: {
    hex: '十六进制 (#RRGGBB)',
    hexAlpha: '十六进制+透明度 (#RRGGBBAA)',
    rgb: 'RGB (0-255)',
    rgbPercent: 'RGB % (0-100%)',
    hsl: 'HSL (色相、饱和度、亮度)',
    hsv: 'HSV (色相、饱和度、明度)',
    cmyk: 'CMYK (青、品红、黄、黑)',
    hwb: 'HWB (色相、白度、黑度)',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },
  features: {
    eyedropper: '颜色吸管',
    randomColor: '随机颜色',
    complementary: '互补色',
    analogous: '类似色',
    triadic: '三角色',
    tetradic: '四角色',
    monochromatic: '单色调',
    colorBlind: '色盲模拟',
    saveColor: '保存颜色',
    exportPalette: '导出调色板'
  },
  palette: {
    title: '调色板',
    primary: '主要',
    secondary: '次要',
    accent: '强调',
    background: '背景',
    text: '文本',
    savedColors: '已保存颜色',
    clearSaved: '清除已保存',
    export: '导出',
    import: '导入'
  },
  actions: {
    copy: '复制',
    copied: '已复制！',
    adjust: '调整',
    invert: '反转',
    lighten: '变亮',
    darken: '变暗',
    saturate: '增加饱和度',
    desaturate: '减少饱和度',
    rotate: '旋转色相'
  },
  messages: {
    invalidColor: '无效的颜色格式',
    colorCopied: '颜色已复制到剪贴板',
    paletteSaved: '调色板已保存',
    paletteExported: '调色板已导出',
    noSavedColors: '没有已保存的颜色'
  }
} 