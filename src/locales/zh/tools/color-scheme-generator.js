export default {
  name: '配色方案生成器',
  description: '为您的设计项目创建和谐的配色方案',
  baseColor: {
    title: '基础颜色',
    picker: '颜色选择器',
    hex: '十六进制',
    rgb: 'RGB',
    hsl: 'HSL',
    random: '随机颜色',
    recent: '最近使用的颜色'
  },
  schemeTypes: {
    title: '方案类型',
    monochromatic: '单色',
    analogous: '类似色',
    complementary: '互补色',
    splitComplementary: '分裂互补色',
    triadic: '三角色',
    tetradic: '四角色',
    square: '方形',
    compound: '复合色',
    shades: '渐变色',
    custom: '自定义'
  },
  options: {
    colorCount: '颜色数量',
    saturationRange: '饱和度范围',
    brightnessRange: '亮度范围',
    includeBaseColor: '包含基础颜色',
    lockBaseColor: '锁定基础颜色',
    colorSpace: '色彩空间',
    sortBy: '排序方式',
    colorBlindSafe: '色盲安全',
    contrastRatio: '最小对比度'
  },
  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },
  sortOptions: {
    hue: '色相',
    saturation: '饱和度',
    brightness: '亮度',
    harmony: '和谐度',
    none: '无'
  },
  palettes: {
    title: '生成的调色板',
    save: '保存调色板',
    copy: '复制调色板',
    export: '导出',
    apply: '应用到预览'
  },
  exportFormats: {
    title: '导出格式',
    css: 'CSS变量',
    scss: 'SCSS变量',
    less: 'LESS变量',
    json: 'JSON',
    svg: 'SVG色板',
    ase: 'Adobe ASE',
    tailwind: 'Tailwind配置',
    pdf: 'PDF'
  },
  preview: {
    title: '预览',
    website: '网站',
    mobilApp: '移动应用',
    dashboard: '仪表板',
    card: '卡片',
    poster: '海报',
    custom: '自定义'
  },
  savedPalettes: {
    title: '已保存的调色板',
    load: '加载',
    delete: '删除',
    rename: '重命名',
    noSavedPalettes: '没有已保存的调色板'
  },
  actions: {
    generate: '生成方案',
    regenerate: '重新生成',
    reset: '重置',
    lockColor: '锁定颜色',
    unlockColor: '解锁颜色'
  },
  messages: {
    paletteSaved: '调色板保存成功',
    paletteDeleted: '调色板已删除',
    copied: '已复制到剪贴板',
    exported: '导出成功'
  }
} 