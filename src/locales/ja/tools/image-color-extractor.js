export default {
  name: '画像カラー抽出ツール',
  description: '画像からカラーパレットとメインカラーを抽出',

  input: {
    title: '画像をアップロード',
    dropzone: '画像をここにドラッグ＆ドロップするか、クリックしてアップロード',
    formats: '対応フォーマット：JPG、PNG、GIF、WebP、SVG',
    browse: 'ファイルを参照',
    selectImage: '画像を選択',
    orText: 'または',
    pasteUrl: '画像URLを貼り付け：',
    loadUrl: 'URLから読み込む',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: '名称未設定の画像'
  },

  options: {
    title: '抽出オプション',
    extractSettings: '抽出設定',
    colorCount: '色の数',
    paletteSize: 'パレットサイズ',
    paletteMin: '最小 (3)',
    paletteMax: '最大 (20)',
    colorSimilarity: '色の類似性',
    similiarityToggle: '類似色を許可',
    quality: '抽出品質',
    colorModel: 'カラーモデル',
    colorSpace: '色空間',
    colorFormat: 'カラーフォーマット',
    sortBy: '色の並び替え方法',
    sortByPopularity: '出現頻度順',
    sortByLuminance: '明度順',
    sortByHue: '色相順',
    sortBySaturation: '彩度順',
    ignoreWhite: '白色を無視',
    ignoreBlack: '黒色を無視',
    threshold: '類似度しきい値'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: '16進数 (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: '透明度付きRGBA',
    hsl: 'HSL',
    hsla: '透明度付きHSLA',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: '出現頻度',
    luminance: '明度',
    hue: '色相',
    saturation: '彩度',
    original: '元の順序'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: '抽出された色',
    colorsFound: '{count}色が抽出されました',
    dominantColor: '主要色',
    mainColor: 'メインカラー',
    complementary: '補色',
    palette: 'カラーパレット',
    colorPalette: 'カラーパレット',
    palettePreview: 'パレットプレビュー',
    usage: '色の使用率 (%)',
    percentage: '割合: {value}%',
    copyAll: 'すべての色をコピー',
    clickToCopy: 'クリックして色をコピー: {color}',
    downloading: 'パレットをダウンロード中...'
  },

  display: {
    originalImage: '元の画像',
    colorPalette: 'カラーパレット',
    uploadFirst: '最初に画像をアップロードしてください',
    clickExtract: '「色を抽出」ボタンをクリックして画像のパレットを取得',
  },

  actions: {
    extract: '色を抽出',
    extracting: '処理中...',
    download: 'パレットをダウンロード',
    copy: 'コピー',
    copyValue: '値をコピー',
    reset: 'リセット',
    copyPalette: 'パレットをコピー',
    exportJson: 'JSONとしてエクスポート',
    exportCss: 'CSS変数としてエクスポート',
    exportSass: 'SASS変数としてエクスポート',
    exportSwatch: 'ASEスウォッチとしてエクスポート'
  },

  palette: {
    title: '名前付きパレット',
    vibrant: '鮮やか',
    muted: '落ち着いた',
    dark: '暗い',
    light: '明るい',
    custom: 'カスタム'
  },

  messages: {
    imageLoaded: '画像が正常に読み込まれました',
    processingImage: '画像を処理中...',
    extractionComplete: '色の抽出が完了しました',
    extractionFailed: '色の抽出に失敗しました：{error}',
    copied: 'クリップボードにコピーしました',
    copiedColor: 'コピーしました: {color}',
    copiedAll: 'すべての色をコピーしました',
    copyFailed: 'コピーに失敗しました',
    resetDone: 'リセットしました',
    invalidImage: '無効な画像ファイルです',
    noImageSelected: '画像が選択されていません'
  }
};