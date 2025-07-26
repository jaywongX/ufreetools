export default {
  name: '印鑑ジェネレーター',
  description: 'オンラインで各種印鑑画像を作成し、会社印、個人印などのデジタル印鑑を生成',

  // 主界面
  text: '印鑑テキスト',

  textPlaceholder: '周囲のテキストを入力してください',
  centerText: '中央テキスト',
  centerTextPlaceholder: '中央のテキストまたは記号を入力してください',
  font: 'フォント選択',
  shape: '印鑑の形',
  size: '印鑑サイズ',
  color: '印鑑の色',
  generate: '印鑑を生成',
  download: '画像をダウンロード',
  reset: 'リセット',
  preview: '印鑑プレビュー',
  previewPlaceholder: '「印鑑を生成」ボタンをクリックしてプレビュー',
  bottomText: '下部テキスト',
  bottomTextPlaceholder: '下部テキストを入力してください',
  centerSymbol: '中央記号',
  centerImage: '中央デザインをアップロード',
  template: '印鑑テンプレート',
  centerSymbolSize: '中央記号サイズ',
  exportFormat: 'エクスポート形式',
  lineWidth: '線の太さ',
  defaultSealText: '〇〇〇有限会社',
  defaultBottomText: '契約専用',
  width: '幅',
  height: '高さ',
  agingEffect: 'エイジング効果',
  colorHex: '16進数カラーコード',
  customColor: 'カスタムカラー',

  // 字体选项
  fonts: {
    simsun: '宋体',
    kaiti: '楷体',
    simhei: '黑体',
    yahei: 'Microsoft YaHei',
    stxingkai: 'STXingkai',
    stzhongsong: 'STZhongsong',
    stfangsong: 'STFangsong',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // 形状选项
  shapes: {
    circle: '円形',
    ellipse: '楕円形',
    square: '四角形'
  },

  // 颜色选项
  colors: {
    red: '赤色',
    darkRed: '濃い赤',
    blue: '青色',
    navy: 'ネイビー',
    green: '緑色',
    darkGreen: '濃い緑',
    purple: '紫色',
    magenta: 'マゼンタ',
    brown: '茶色',
    black: '黒色',
    custom: 'カスタムカラー'
  },

  // 使用指南
  howToUse: '使用方法',

  instructions: {
    step1: '印鑑の周りに表示したいテキスト（会社名、個人名など）を入力します',
    step2: '印鑑の中央に表示するテキストやデザイン（アスタリスク、マークなど）を選択します',
    step3: '印鑑の形、サイズ、色を調整してプレビューします',
    step4: '満足したら「画像をダウンロード」ボタンをクリックしてカスタム印鑑を保存します'
  },

  templates: {
    custom: 'カスタム',
    company: '会社印',
    contract: '契約専用印',
    finance: '財務専用印',
    legal: '法人代表印',
    personal: '個人印'
  }
}; 