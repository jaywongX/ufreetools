export default {
  name: '颜色选择器',
  description: '使用高级颜色工具选取、转换和生成配色方案',
  options: {
    colorSpace: '颜色空间',
    paletteType: '调色板类型',
    includeAlpha: '包含透明度',
    colorNaming: '颜色命名'
  },
  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: '命名颜色'
  },
  palettes: {
    monochromatic: '单色调',
    complementary: '互补色',
    analogous: '类似色',
    triadic: '三色组',
    tetradic: '四色组',
    split: '分裂互补色'
  },
  actions: {
    pickColor: '选择颜色',
    randomColor: '随机颜色',
    generatePalette: '生成调色板',
    convert: '转换',
    copyColor: '复制当前颜色',
    copyAll: '复制全部',
    save: '保存颜色',
    reset: '重置',
    clear: '清除'
  },
  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },
  colorSchemes: {
    title: '配色方案',
    complementary: '互补色',
    triadic: '三元色',
    analogous: '类似色',
    monochromatic: '单色系',
    split: '分裂互补色',
    double: '双互补色',
    square: '方形色',
    compound: '复合色'
  },
  colorAdjust: {
    title: '颜色调整',
    hue: '色相',
    saturation: '饱和度',
    lightness: '亮度',
    alpha: '透明度'
  },
  colorInfo: {
    title: '颜色信息',
    name: '颜色名称',
    format: '格式',
    contrast: '对比度',
    accessibility: {
      title: '可访问性',
      pass: '通过WCAG标准',
      fail: '未通过WCAG标准',
      normal: '普通文本',
      large: '大号文本'
    }
  },
  messages: {
    copied: '颜色已复制到剪贴板',
    copyFailed: '复制颜色失败',
    invalidColor: '无效的颜色格式',
    contrastWarning: '对比度较低',
    saved: '颜色已保存',
    contrast: '对比度: {ratio}',
    accessibility: {
      AAA: '极佳对比度 (AAA)',
      AA: '良好对比度 (AA)',
      fail: '对比度不足 - 不符合无障碍标准'
    },
    preview: '预览',
    colorValue: '颜色值',
  },
  history: {
    title: '颜色历史',
    empty: '暂无颜色历史',
    clear: '清空历史'
  },
  colorPalette: {
    title: '调色板',
    addToPalette: '添加到调色板',
    removeFromPalette: '从调色板移除',
    exportPalette: '导出调色板',
    importPalette: '导入调色板',
    clearPalette: '清空调色板'
  }
} 