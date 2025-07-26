export default {
  name: '画像をASCIIに変換',
  description: 'カスタマイズ可能なオプションで画像をASCIIアート文字に変換',

  upload: {
    title: '画像をアップロード',
    dropzone: '画像をここにドラッグ＆ドロップするか、クリックして参照',
    maxSize: '最大ファイルサイズ：5MB',
    supportedFormats: '対応フォーマット：JPG、PNG、WEBP、GIF',
    pasteImage: 'またはクリップボードから画像を貼り付け'
  },

  options: {
    title: '変換オプション',
    width: '出力幅',
    height: '出力高さ',
    preserveAspect: 'アスペクト比を維持',
    colored: 'カラー出力',
    charSet: '文字セット',
    charSets: {
      standard: '標準',
      simple: 'シンプル',
      complex: '複雑',
      blocks: 'ブロック文字',
      custom: 'カスタム'
    },
    customChars: 'カスタム文字',
    invert: '色を反転',
    threshold: '明るさのしきい値',
    brightness: '明るさ',
    contrast: 'コントラスト',
    fontFamily: 'フォントファミリー',
    fontSize: 'フォントサイズ',
    lineHeight: '行の高さ',
    backgroundColor: '背景色',
    textColor: 'テキスト色'
  },

  output: {
    title: 'ASCII出力',
    preview: 'プレビュー',
    raw: '生のASCII',
    html: 'HTML',
    copyToClipboard: 'クリップボードにコピー',
    downloadTxt: 'TXTとしてダウンロード',
    downloadHtml: 'HTMLとしてダウンロード',
    downloadImage: '画像としてダウンロード',
    stats: {
      title: '統計',
      characters: '文字数',
      lines: '行数',
      colors: '色数',
      size: 'テキストサイズ'
    }
  },

  presets: {
    title: 'プリセット',
    save: '現在の設定を保存',
    load: 'プリセットを読み込む',
    delete: 'プリセットを削除',
    presetName: 'プリセット名',
    default: 'デフォルト',
    detailed: '詳細',
    minimalist: 'ミニマリスト',
    blocky: 'ブロック調',
    small: '小さい',
    inverted: '反転'
  },

  adjustment: {
    title: '画像調整',
    grayscale: 'グレースケール',
    negative: 'ネガティブ',
    resize: '変換前にリサイズ',
    crop: '画像をトリミング',
    rotate: '回転',
    flipH: '水平反転',
    flipV: '垂直反転'
  },

  animation: {
    title: 'アニメーション',
    animated: 'アニメーションとして処理',
    frameDelay: 'フレーム遅延',
    loop: 'アニメーションをループ',
    loopCount: 'ループ回数',
    extractFrame: '現在のフレームを抽出'
  },

  actions: {
    convert: 'ASCIIに変換',
    resetOptions: 'オプションをリセット',
    refreshPreview: 'プレビューを更新',
    loadImage: '新しい画像を読み込む',
    applyChanges: '変更を適用',
    selectImage: '画像を選択',
    reset: 'リセット',
    processing: '処理中...',
    generate: 'ASCIIを生成',
    copy: 'コピー',
    download: 'ダウンロード'
  },

  messages: {
    converting: '画像をASCIIに変換中...',
    conversionComplete: '変換完了',
    conversionFailed: '画像変換に失敗しました：{error}',
    copied: 'ASCIIがクリップボードにコピーされました',
    downloadStarted: 'ダウンロードを開始しました',
    downloadComplete: 'ASCIIがダウンロードされました',
    downloadFailed: 'ダウンロードに失敗しました',
    copyFailed: 'コピーに失敗しました',
    resetComplete: 'リセットしました',
    asciiGenerated: 'ASCIIアートが生成されました',
    generationFailed: 'ASCIIの生成に失敗しました',
    presetSaved: 'プリセットが保存されました',
    presetLoaded: 'プリセットが読み込まれました',
    presetDeleted: 'プリセットが削除されました',
    invalidImage: '無効な画像形式または破損したファイル',
    imageTooBig: '画像サイズが大きすぎて変換できません',
    selectOrLoad: '画像を選択するかURLから読み込んでください',
    asciiWillDisplay: 'ASCIIはここに表示されます',
    customCharsPlaceholder: '暗いものから明るいものへ順に文字を入力...',
    tip: '設定を調整した後、「ASCIIを生成」ボタンをクリックして効果を確認してください',
    drapPlaceHolder: '画像を選択するかここにドラッグ＆ドロップしてください',
    noImage: '最初に画像を選択してください',
    generateAscii: '「ASCIIを生成」ボタンをクリックして画像を変換',
    tip2: 'ヒント：コピーボタンを使用してASCIIアートをクリップボードにコピーするか、ダウンロードボタンを使用してテキストファイルとして保存できます。'
  },

  charSets: {
    standard: '標準',
    simple: 'シンプル',
    blocks: 'ブロック',
    custom: 'カスタム'
  },

  settings: {
    title: 'ASCII設定',
    customCharsetLabel: 'カスタム文字セット（暗いものから明るいものへ）',
    asciiWidth: 'ASCII幅',
    invert: '色を反転',
    colored: 'カラー出力',
    fontSize: 'フォントサイズ'
  },

  preview: {
    originalImage: '元の画像',
    generatedAscii: '生成されたASCII'
  }
};