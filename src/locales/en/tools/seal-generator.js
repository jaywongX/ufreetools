export default {
  name: 'Seal Generator',
  description: 'Create customized digital seals and stamps for documents and designs',

  // Main interface
  text: 'Seal Text',

  textPlaceholder: 'Enter surrounding text',
  centerText: 'Center Text',
  centerTextPlaceholder: 'Enter center text or symbol',
  font: 'Font',
  shape: 'Shape',
  size: 'Size',
  color: 'Color',
  generate: 'Generate Seal',
  download: 'Download Image',
  reset: 'Reset',
  preview: 'Preview',
  previewPlaceholder: 'Click "Generate Seal" button to preview',
  bottomText: 'Bottom Text',
  bottomTextPlaceholder: 'Enter bottom text',
  centerSymbol: 'Center Symbol',
  centerImage: 'Upload Center Image',
  template: 'Seal Template',
  centerSymbolSize: 'Center Symbol Size',
  exportFormat: 'Export Format',
  lineWidth: 'Line Thickness',
  defaultSealText: 'Company Name',
  defaultBottomText: 'Official Seal',
  width: 'Width',
  height: 'Height',
  agingEffect: 'Aging Effect',
  customColor: 'Custom Color',

  // Font options
  fonts: {
    simsun: 'SimSun',
    kaiti: 'KaiTi',
    simhei: 'SimHei',
    yahei: 'Microsoft YaHei',
    stxingkai: 'STXingkai',
    stzhongsong: 'STZhongsong',
    stfangsong: 'STFangsong',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // Shape options
  shapes: {
    circle: 'Circle',
    ellipse: 'Ellipse',
    square: 'Square'
  },

  // Color options
  colors: {
    red: 'Red',
    darkRed: 'Dark Red',
    blue: 'Blue',
    navy: 'Navy Blue',
    green: 'Green',
    darkGreen: 'Dark Green',
    purple: 'Purple',
    magenta: 'Magenta',
    brown: 'Brown',
    black: 'Black',
    custom: 'Custom Color'
  },

  colorHex: 'Hex Color Value',

  // How to use guide
  howToUse: 'How to Use',

  instructions: {
    step1: 'Enter the text you want to display around the seal, such as company name or personal name',
    step2: 'Choose center text or symbol, like a star, logo, or other symbol',
    step3: 'Adjust the seal shape, size, and color to preview the effect',
    step4: 'When satisfied, click the "Download Image" button to save your custom seal'
  },

  templates: {
    custom: 'Custom',
    company: 'Company Seal',
    contract: 'Contract Seal',
    finance: 'Finance Seal',
    legal: 'Legal Seal',
    personal: 'Personal Seal'
  }
}; 