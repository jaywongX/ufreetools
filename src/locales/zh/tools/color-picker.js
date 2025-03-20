export default {
  name: '颜色选择器和转换器',
  description: '选择颜色并在不同颜色格式之间转换',
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
    copy: '复制',
    copyAll: '复制全部',
    save: '保存颜色',
    clear: '清除'
  },
  messages: {
    copied: '已复制到剪贴板！',
    saved: '颜色已保存',
    contrast: '对比度: {ratio}',
    accessibility: {
      AAA: '极佳对比度 (AAA)',
      AA: '良好对比度 (AA)',
      fail: '对比度不足 - 不符合无障碍标准'
    }
  }
} 