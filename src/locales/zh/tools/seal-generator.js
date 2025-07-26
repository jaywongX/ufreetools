export default {
  name: '印章生成器',
  description: '在线制作各类印章图片，生成公司公章、私章等数字印章',

  // 主界面
  text: '印章文字',

  textPlaceholder: '请输入环绕文字',
  centerText: '中心文字',
  centerTextPlaceholder: '请输入中心文字或符号',
  font: '字体选择',
  shape: '印章形状',
  size: '印章大小',
  color: '印章颜色',
  generate: '生成印章',
  download: '下载图片',
  reset: '重置',
  preview: '印章预览',
  previewPlaceholder: '点击"生成印章"按钮预览效果',
  bottomText: '底部文字',
  bottomTextPlaceholder: '请输入底部文字',
  centerSymbol: '中心符号',
  centerImage: '上传中心图案',
  template: '印章模板',
  centerSymbolSize: '中心符号大小',
  exportFormat: '导出格式',
  lineWidth: '线条粗细',
  defaultSealText: '某某某有限责任公司',
  defaultBottomText: '合同专用章',
  width: '宽度',
  height: '高度',
  agingEffect: '做旧效果',
  colorHex: '十六进制颜色值',
  customColor: '自定义颜色',

  // 字体选项
  fonts: {
    simsun: '宋体',
    kaiti: '楷体',
    simhei: '黑体',
    yahei: '微软雅黑',
    stxingkai: '华文行楷',
    stzhongsong: '华文中宋',
    stfangsong: '华文仿宋',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // 形状选项
  shapes: {
    circle: '圆形',
    ellipse: '椭圆形',
    square: '方形'
  },

  // 颜色选项
  colors: {
    red: '红色',
    darkRed: '深红色',
    blue: '蓝色',
    navy: '海军蓝',
    green: '绿色',
    darkGreen: '深绿色',
    purple: '紫色',
    magenta: '品红色',
    brown: '棕色',
    black: '黑色',
    custom: '自定义颜色'
  },

  // 使用指南
  howToUse: '使用说明',

  instructions: {
    step1: '输入您想要显示在印章周围的文字，如公司名称、个人姓名等',
    step2: '选择印章中心的文字或图案，可以是星号、标志或其他符号',
    step3: '调整印章的形状、大小和颜色，预览效果',
    step4: '满意后点击"下载图片"按钮保存您的自定义印章'
  },

  templates: {
    custom: '自定义',
    company: '公司公章',
    contract: '合同专用章',
    finance: '财务专用章',
    legal: '法人名章',
    personal: '个人私章'
  }
}; 