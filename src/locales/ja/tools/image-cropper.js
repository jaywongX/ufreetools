export default {
  name: '画像トリミングツール',
  description: '正確な画像のトリミング、サイズ変更、回転',

  upload: {
    title: '画像をアップロード',
    dropzone: '画像をここにドラッグ＆ドロップするか、クリックして参照',
    maxSize: '最大ファイルサイズ：10MB',
    supportedFormats: '対応フォーマット：JPG、PNG、WEBP、GIF',
    select: 'トリミングと編集を開始するには画像を選択してください'
  },

  editor: {
    title: '画像エディタ',
    zoom: 'ズーム',
    rotate: '回転',
    flipHorizontal: '水平反転',
    flipVertical: '垂直反転',
    reset: '画像をリセット',
    undo: '元に戻す',
    redo: 'やり直す',
    dragMode: 'ドラッグモード',
    scaleMode: 'スケールモード'
  },

  crop: {
    title: 'トリミング設定',
    aspectRatio: 'アスペクト比',
    freeform: 'フリーフォーム',
    square: '正方形 (1:1)',
    portrait: 'ポートレート (3:4)',
    landscape: 'ランドスケープ (4:3)',
    widescreen: 'ワイドスクリーン (16:9)',
    panorama: 'パノラマ (2:1)',
    custom: 'カスタム',
    width: '幅',
    height: '高さ',
    unit: '単位',
    pixels: 'ピクセル',
    percent: 'パーセント',
    lockAspectRatio: 'アスペクト比をロック'
  },

  presets: {
    title: 'サイズプリセット',
    original: '元のサイズ',
    social: 'ソーシャルメディア',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: '印刷サイズ',
    fourBySix: '4×6インチ',
    fiveBySeven: '5×7インチ',
    eightByTen: '8×10インチ'
  },

  output: {
    title: '出力',
    preview: 'プレビュー',
    dimensions: '出力サイズ',
    quality: '品質',
    format: 'フォーマット',
    fileName: 'ファイル名',
    download: 'ダウンロード',
    saveAs: '名前を付けて保存',
    copy: 'クリップボードにコピー'
  },

  actions: {
    crop: '画像をトリミング',
    apply: '適用',
    cancel: 'キャンセル',
    save: '画像を保存',
    download: 'ダウンロード',
    newImage: '新しい画像'
  },

  messages: {
    cropSuccess: '画像のトリミングに成功しました',
    downloadReady: 'トリミングした画像のダウンロードの準備ができました',
    processing: '画像を処理中...',
    copied: '画像がクリップボードにコピーされました',
    invalidFile: '無効なファイルです。有効な画像をアップロードしてください。',
    fileTooLarge: 'ファイルが大きすぎます。最大サイズは10MBです。'
  }
};