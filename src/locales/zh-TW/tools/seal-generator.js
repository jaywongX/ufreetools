export default {
  name: '印章生成器',
  description: '線上製作各類印章圖片，生成公司公章、私章等數位印章',

  // 主介面
  text: '印章文字',

  textPlaceholder: '請輸入環繞文字',
  centerText: '中心文字',
  centerTextPlaceholder: '請輸入中心文字或符號',
  font: '字體選擇',
  shape: '印章形狀',
  size: '印章大小',
  color: '印章顏色',
  generate: '生成印章',
  download: '下載圖片',
  reset: '重置',
  preview: '印章預覽',
  previewPlaceholder: '點擊"生成印章"按鈕預覽效果',
  bottomText: '底部文字',
  bottomTextPlaceholder: '請輸入底部文字',
  centerSymbol: '中心符號',
  centerImage: '上傳中心圖案',
  template: '印章模板',
  centerSymbolSize: '中心符號大小',
  exportFormat: '導出格式',
  lineWidth: '線條粗細',
  defaultSealText: '某某某有限責任公司',
  defaultBottomText: '合同專用章',
  width: '寬度',
  height: '高度',
  agingEffect: '做舊效果',
  colorHex: '十六進制顏色值',
  customColor: '自定義顏色',

  // 字體選項
  fonts: {
    simsun: '宋體',
    kaiti: '楷體',
    simhei: '黑體',
    yahei: '微軟雅黑',
    stxingkai: '華文行楷',
    stzhongsong: '華文中宋',
    stfangsong: '華文仿宋',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // 形狀選項
  shapes: {
    circle: '圓形',
    ellipse: '橢圓形',
    square: '方形'
  },

  // 顏色選項
  colors: {
    red: '紅色',
    darkRed: '深紅色',
    blue: '藍色',
    navy: '海軍藍',
    green: '綠色',
    darkGreen: '深綠色',
    purple: '紫色',
    magenta: '品紅色',
    brown: '棕色',
    black: '黑色',
    custom: '自定義顏色'
  },

  // 使用指南
  howToUse: '使用說明',

  instructions: {
    step1: '輸入您想要顯示在印章周圍的文字，如公司名稱、個人姓名等',
    step2: '選擇印章中心的文字或圖案，可以是星號、標誌或其他符號',
    step3: '調整印章的形狀、大小和顏色，預覽效果',
    step4: '滿意後點擊"下載圖片"按鈕保存您的自定義印章'
  },

  templates: {
    custom: '自定義',
    company: '公司公章',
    contract: '合同專用章',
    finance: '財務專用章',
    legal: '法人名章',
    personal: '個人私章'
  }
};