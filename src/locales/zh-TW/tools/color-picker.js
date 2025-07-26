export default {
  name: "顏色選擇器",
  description: "使用高級顏色工具選取、轉換和生成配色方案",

  options: {
    colorSpace: "顏色空間",
    paletteType: "調色板類型",
    includeAlpha: "包含透明度",
    colorNaming: "顏色命名"
  },

  colorSpaces: {
    rgb: "RGB",
    hex: "HEX",
    hsl: "HSL",
    hsv: "HSV",
    cmyk: "CMYK",
    lab: "LAB",
    named: "命名顏色"
  },

  palettes: {
    monochromatic: "單色調",
    complementary: "互補色",
    analogous: "類似色",
    triadic: "三色組",
    tetradic: "四色組",
    split: "分裂互補色"
  },

  actions: {
    pickColor: "選擇顏色",
    randomColor: "隨機顏色",
    generatePalette: "生成調色板",
    convert: "轉換",
    copyColor: "複製當前顏色",
    copyAll: "複製全部",
    save: "保存顏色",
    reset: "重置",
    clear: "清除"
  },

  formats: {
    hex: "HEX",
    rgb: "RGB",
    hsl: "HSL"
  },

  colorSchemes: {
    title: "配色方案",
    complementary: "互補色",
    triadic: "三元色",
    analogous: "類似色",
    monochromatic: "單色系",
    split: "分裂互補色",
    double: "雙互補色",
    square: "方形色",
    compound: "複合色"
  },

  colorAdjust: {
    title: "顏色調整",
    hue: "色相",
    saturation: "飽和度",
    lightness: "亮度",
    alpha: "透明度"
  },

  colorInfo: {
    title: "顏色信息",
    name: "顏色名稱",
    format: "格式",
    contrast: "對比度",
    accessibility: {
      title: "可訪問性",
      pass: "通過WCAG標準",
      fail: "未通過WCAG標準",
      normal: "普通文本",
      large: "大號文本"
    }
  },

  messages: {
    copied: "顏色已複製到剪貼板",
    copyFailed: "複製顏色失敗",
    invalidColor: "無效的顏色格式",
    contrastWarning: "對比度較低",
    saved: "顏色已保存",
    contrast: "對比度: {ratio}",
    accessibility: {
      AAA: "極佳對比度 (AAA)",
      AA: "良好對比度 (AA)",
      fail: "對比度不足 - 不符合無障礙標準"
    },
    preview: "預覽",
    colorValue: "顏色值"
  },

  history: {
    title: "顏色歷史",
    empty: "暫無顏色歷史",
    clear: "清空歷史"
  },

  colorPalette: {
    title: "調色板",
    addToPalette: "添加到調色板",
    removeFromPalette: "從調色板移除",
    exportPalette: "導出調色板",
    importPalette: "導入調色板",
    clearPalette: "清空調色板"
  }
};