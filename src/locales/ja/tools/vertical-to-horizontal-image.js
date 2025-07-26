export default {
  name: '縦画像を横画像に変換',
  description: '縦向き（ポートレート）画像を横向き（ランドスケープ）形式に変換し、様々な変換オプションを提供します',

  upload: {
    title: '画像をアップロード',
    dropzone: 'ここに画像をドラッグ＆ドロップ',
    maxSize: '最大ファイルサイズ：10MB',
    supportedFormats: '対応フォーマット：JPG、PNG、WEBP、GIF'
  },

  settings: {
    title: '変換設定',
    presets: 'クイックプリセット',
    conversionMode: '変換モード',
    modes: {
      rotate: '回転',
      fill: '背景を塗りつぶす',
      blur: '背景をぼかす',
      stretch: 'エッジを引き伸ばす',
      dualColor: '2色背景'
    },
    rotationAngle: '回転角度',
    fillColor: '背景色',
    blurRadius: 'ぼかし度',
    stretchEdges: '引き伸ばし度',
    leftColor: '左側の色',
    rightColor: '右側の色',
    sizeOption: 'サイズ設定',
    sizeModes: {
      auto: '自動サイズ',
      preset: '一般的なサイズ',
      custom: 'カスタムサイズ'
    },
    sizePresets: 'サイズプリセット',
    outputSize: '出力サイズ',
    width: '幅',
    height: '高さ',
    dimensionsHint: 'サイズをピクセル単位で入力',
    autoSize: 'サイズを自動計算',
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
    preview: '結果プレビュー',
    dimensions: 'サイズ',
    before: '変換前',
    after: '変換後'
  },

  actions: {
    selectImage: '画像を選択',
    convert: '画像を変換',
    download: '画像をダウンロード',
    reset: '削除',
    showSideBySide: '比較表示',
    hideComparison: '比較を隠す',
    hideSideBySide: '閉じる'
  },

  messages: {
    processing: '画像処理中...',
    convertPrompt: '画像を変換すると結果がここに表示されます',
    error: '画像処理中にエラーが発生しました',
    success: '変換が正常に完了しました！'
  },

  examples: {
    title: '使用のヒント',
    social: 'ソーシャルメディア投稿に最適です。横向き画像の方がパフォーマンスが良くなります',
    socialTip: 'ソーシャルメディアには「背景をぼかす」モードが最適です',
    website: 'ウェブサイトやブログ用のバナー画像を作成',
    websiteTip: '2色モードはウェブバナーに最適です'
  },

  help: {
    title: 'このツールの使い方',
    description: 'このツールを使用すると、縦向き（ポートレート）画像を視覚的な品質と効果を維持しながら、様々な方法で横向き（ランドスケープ）形式に変換できます。',
    example1: {
      title: 'ソーシャルメディア投稿',
      description: 'ポートレート写真をぼかし背景付きのソーシャルメディアに適した横向き形式に変換'
    },
    example2: {
      title: 'ウェブサイトバナー',
      description: '色を塗りつぶした背景を使用して、縦画像からウェブサイトのヘッダーやバナーを作成'
    }
  }
}; 