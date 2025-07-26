export default {
  name: "配色方案生成器",
  description: "基於色彩理論生成和諧的配色方案，幫助設計師快速創建協調的色板",

  baseColor: {
    title: "基礎顏色",
    picker: "顏色選擇器",
    hex: "十六進制",
    rgb: "RGB",
    hsl: "HSL",
    random: "隨機顏色",
    recent: "最近使用的顏色",
    hint: "點擊顏色塊或輸入十六進制顏色值"
  },

  schemeTypes: {
    title: "色彩理論",
    monochromatic: "單色",
    analogous: "類似色",
    complementary: "互補色",
    splitComplementary: "分裂互補色",
    triadic: "三角色",
    tetradic: "四角色",
    square: "方形",
    compound: "複合色",
    shades: "漸變色",
    custom: "自定義"
  },

  options: {
    colorCount: "顏色數量",
    saturationRange: "飽和度範圍",
    brightnessRange: "亮度範圍",
    includeBaseColor: "包含基礎顏色",
    lockBaseColor: "鎖定基礎顏色",
    colorSpace: "色彩空間",
    sortBy: "排序方式",
    colorBlindSafe: "色盲安全",
    contrastRatio: "最小對比度"
  },

  colorSpaces: {
    rgb: "RGB",
    hsl: "HSL",
    lab: "LAB",
    hsv: "HSV",
    cmyk: "CMYK"
  },

  sortOptions: {
    hue: "色相",
    saturation: "飽和度",
    brightness: "亮度",
    harmony: "和諧度",
    none: "無"
  },

  palettes: {
    title: "生成的調色板",
    save: "保存調色板",
    copy: "複製調色板",
    export: "導出為CSS變量",
    apply: "應用到預覽"
  },

  exportFormats: {
    title: "導出格式",
    css: "CSS變量",
    scss: "SCSS變量",
    less: "LESS變量",
    json: "JSON",
    svg: "SVG色板",
    ase: "Adobe ASE",
    tailwind: "Tailwind配置",
    pdf: "PDF"
  },

  preview: {
    title: "預覽",
    website: "網站",
    mobilApp: "移動應用",
    dashboard: "儀表板",
    card: "卡片",
    poster: "海報",
    custom: "自定義",
    mainButton: "主按鈕",
    secondButton: "次要按鈕",
    tag: "標籤"
  },

  savedPalettes: {
    title: "已保存的調色板",
    load: "加載",
    delete: "刪除",
    rename: "重命名",
    noSavedPalettes: "沒有已保存的調色板",
    saved: "已保存調色板",
    schemeNameEmpty: "調色板名稱為空"
  },

  actions: {
    generate: "生成方案",
    regenerate: "重新生成",
    reset: "重置",
    lockColor: "鎖定顏色",
    unlockColor: "解鎖顏色",
    save: "保存調色板"
  },

  messages: {
    paletteSaved: "調色板保存成功",
    paletteDeleted: "調色板已刪除",
    copied: "已複製到剪貼板",
    exported: "導出成功",
    adjustmentParam: "調整參數",
    schemeName: "方案名稱",
    copyAllColors: "已複製所有顏色"
  }
};