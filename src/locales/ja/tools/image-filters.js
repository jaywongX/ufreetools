export default {
  name: '画像フィルター',
  description: 'さまざまなフィルターやエフェクトをリアルタイムプレビューで画像に適用',

  upload: {
    title: '画像をアップロード',
    dropzone: '画像をここにドラッグ＆ドロップするか、クリックして参照',
    maxSize: '最大ファイルサイズ：10MB',
    supportedFormats: '対応フォーマット：JPG、PNG、WEBP、GIF'
  },

  editor: {
    title: 'フィルターエディター',
    original: 'オリジナル',
    filtered: 'フィルター適用済み',
    reset: 'すべてリセット',
    undo: '元に戻す',
    redo: 'やり直す',
    zoomIn: '拡大',
    zoomOut: '縮小',
    fitToScreen: '画面に合わせる',
    showOriginal: 'オリジナルを表示'
  },

  filters: {
    title: 'フィルター',
    basic: '基本調整',
    brightness: '明るさ',
    contrast: 'コントラスト',
    saturation: '彩度',
    hue: '色相',
    exposure: '露出',
    vibrance: 'バイブランス',
    temperature: '色温度',
    gamma: 'ガンマ',
    clarity: '明瞭度',
    effects: 'エフェクト',
    grayscale: 'グレースケール',
    sepia: 'セピア',
    vintage: 'ビンテージ',
    polaroid: 'ポラロイド',
    duotone: '二色調',
    noise: 'ノイズ',
    pixelate: 'ピクセル化',
    blur: 'ぼかし',
    sharpen: 'シャープ',
    vignette: 'ビネット',
    color: '色',
    colorOverlay: 'カラーオーバーレイ',
    colorize: '色付け',
    gradientMap: 'グラデーションマップ',
    replaceColor: '色の置換',
    advanced: '高度',
    levels: 'レベル',
    curves: 'カーブ',
    shadows: 'シャドウ',
    highlights: 'ハイライト',
    blacks: 'ブラック',
    whites: 'ホワイト',
    channels: 'RGBチャンネル'
  },

  presets: {
    title: 'プリセット',
    custom: 'カスタム',
    blackAndWhite: '白黒',
    highContrast: '高コントラスト',
    normal: '標準',
    cinematic: '映画風',
    warm: '暖色',
    cool: '寒色',
    sunset: '夕暮れ',
    vintage: 'ビンテージ',
    invert: '反転',
    cross: 'クロスプロセス',
    matte: 'マット',
    flat: 'フラット',
    portrait: 'ポートレート',
    landscape: '風景',
    vivid: '鮮やか',
    moody: 'ムーディー',
    savePreset: '現在の設定をプリセットとして保存',
    deletePreset: 'プリセットを削除',
    presetName: 'プリセット名'
  },

  output: {
    title: '出力',
    fileName: 'ファイル名',
    format: 'フォーマット',
    quality: '品質',
    width: '幅',
    height: '高さ',
    download: '画像をダウンロード',
    saveOnline: 'オンラインで保存',
    share: '共有',
    applyToNew: '新しい画像に適用'
  },

  history: {
    title: '履歴',
    revert: 'この段階に戻す',
    clear: '履歴をクリア'
  },

  actions: {
    apply: 'フィルターを適用',
    download: 'ダウンロード',
    save: '保存',
    reset: 'リセット',
    cancel: 'キャンセル'
  },

  messages: {
    imageLoaded: '画像が正常に読み込まれました',
    filterApplied: 'フィルターが正常に適用されました',
    filtersReset: 'フィルターがデフォルト値にリセットされました',
    downloadStarted: 'ダウンロードが開始されました',
    presetSaved: 'プリセットが正常に保存されました',
    presetDeleted: 'プリセットが削除されました',
    invalidFile: '無効なファイルです。有効な画像をアップロードしてください。',
    fileTooLarge: 'ファイルが大きすぎます。最大サイズは10MBです。'
  }
};