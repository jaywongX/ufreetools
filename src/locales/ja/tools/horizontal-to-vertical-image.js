export default {
  name: '横画像を縦画像に変換',
  description: '横向き画像を縦向き形式に変換し、ショートビデオ、スマートフォンの壁紙、SNS投稿に最適化します',
  tags: ['画像', '変換', 'モバイル', 'ソーシャル', 'ストーリー', '縦向き', 'ポートレート'],

  upload: {
    title: '横画像を縦画像に変換ツール',
    dropzone: 'ここに画像をドラッグ＆ドロップ',
    maxSize: '最大ファイルサイズ：10MB',
    supportedFormats: '対応フォーマット：JPG、PNG、WEBP、GIF'
  },

  settings: {
    title: '変換設定',
    presets: 'プリセット',
    conversionMode: '変換モード',
    modes: {
      crop: 'トリミング',
      fill: '色の塗りつぶし',
      blur: '背景をぼかす',
      stretch: 'エッジを引き伸ばす',
      dualColor: '2色背景'
    },
    cropPosition: 'トリミング位置',
    positions: {
      left: '左側',
      center: '中央',
      right: '右側'
    },
    fillColor: '塗りつぶし色',
    blurRadius: 'ぼかし半径',
    stretchFactor: '引き伸ばし係数',
    topColor: '上部の色',
    bottomColor: '下部の色',
    sizeOption: '出力サイズ',
    sizeModes: {
      auto: '自動',
      preset: 'プリセット',
      custom: 'カスタム'
    },
    sizePresets: 'サイズプリセット',
    outputSize: 'カスタムサイズ',
    width: '幅',
    height: '高さ',
    dimensionsHint: 'サイズをピクセル単位で入力',
    outputFormat: '出力形式',
    quality: '画質',
    advancedOptions: '詳細オプション',
    preserveRatio: 'アスペクト比を維持',
    sharpen: 'シャープネス',
    addWatermark: 'ウォーターマークを追加',
    watermarkPlaceholder: 'ウォーターマークテキストを入力',
    watermarkColor: 'ウォーターマークの色'
  },

  output: {
    preview: '出力プレビュー',
    before: '変換前',
    after: '変換後',
    dimensions: 'サイズ'
  },

  actions: {
    selectImage: '画像を選択',
    convert: '縦画像に変換',
    download: '画像をダウンロード',
    showSideBySide: '比較表示',
    hideSideBySide: '比較を隠す',
    hideComparison: '比較を隠す'
  },

  messages: {
    convertPrompt: '横向き画像をアップロードして縦向き形式に変換',
    processing: '画像を処理中...',
    imageOnly: '画像ファイルを選択してください'
  },

  examples: {
    title: '応用例',
    social: 'Instagram、TikTokなどのプラットフォーム用の縦向きストーリーを作成',
    socialTip: '横向き写真を魅力的な縦向きコンテンツに完璧に変換',
    mobile: '横向き画像をスマートフォンの壁紙に作成',
    mobileTip: '様々な画面比率のスマートフォン向けに画像を最適化'
  }
};