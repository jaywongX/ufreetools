export default {
  name: '画像一括リサイズツール',
  description: '複数の画像を一度に調整、変換、最適化',

  input: {
    title: '入力画像',
    dropzone: '画像をここにドラッグ＆ドロップするか、クリックして参照',
    addMore: '画像を追加',
    selectImages: '画像を選択',
    clearAll: 'すべてクリア',
    maxFiles: '最大{count}枚の画像',
    maxSize: '画像1枚あたりの最大サイズ：{size}MB',
    supportedFormats: '対応フォーマット：{formats}'
  },

  options: {
    title: 'リサイズオプション',
    settingsTitle: 'リサイズ設定',
    resizeMode: 'リサイズモード',
    resizeMethod: 'リサイズ方法',
    pixelMode: 'ピクセル',
    percentageMode: 'パーセント',
    maxDimensionMode: '最大サイズ',
    outputFormat: '出力フォーマット',
    quality: '品質',
    width: '幅',
    height: '高さ',
    maintainAspectRatio: 'アスペクト比を維持',
    maxWidth: '最大幅',
    maxHeight: '最大高さ',
    percentage: 'パーセント',
    backgroundColor: '背景色',
    naming: '出力ファイル名',
    filenamePrefix: 'ファイル名プレフィックス',
    filenameSuffix: 'ファイル名サフィックス',
    applyToAllImages: 'すべての画像に適用',
    applyToAll: 'すべての画像に適用'
  },

  resizeModes: {
    exact: '正確なサイズ',
    maxDimensions: '最大サイズ',
    percentage: 'パーセントでスケール',
    fit: '内部に収める',
    cover: 'カバー',
    crop: '切り抜き'
  },

  formats: {
    original: '元と同じ',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },

  namingOptions: {
    original: '元のファイル名',
    dimensions: '元 + サイズ',
    format: '元 + フォーマット',
    custom: 'カスタムパターン',
    random: 'ランダム文字列'
  },

  output: {
    title: 'リサイズ後の画像',
    downloadAll: 'すべてダウンロード',
    downloadAsZip: 'ZIPでダウンロード',
    processingStatus: '処理中：{processed}/{total}',
    originalSize: '元のサイズ',
    newSize: '新しいサイズ',
    reduction: '削減量',
    individualDownload: 'ダウンロード'
  },

  batch: {
    title: 'バッチ処理',
    process: 'すべての画像を処理',
    cancel: '処理をキャンセル',
    selectPreset: 'プリセットを選択',
    savePreset: '現在の設定を保存',
    progress: '処理進捗'
  },

  watermark: {
    title: 'ウォーターマーク',
    enable: 'ウォーターマークを追加',
    text: 'ウォーターマークテキスト',
    image: 'ウォーターマーク画像',
    position: '位置',
    opacity: '透明度',
    rotation: '回転',
    size: 'サイズ',
    padding: 'パディング'
  },

  positions: {
    topLeft: '左上',
    topCenter: '上部中央',
    topRight: '右上',
    middleLeft: '左中央',
    middleCenter: '中央',
    middleRight: '右中央',
    bottomLeft: '左下',
    bottomCenter: '下部中央',
    bottomRight: '右下'
  },

  actions: {
    resize: 'リサイズ',
    preview: 'プレビュー',
    processing: '処理中...',
    reset: 'リセット',
    applySettings: '設定を適用',
    resetSettings: '設定をリセット',
    cancel: 'キャンセル'
  },

  messages: {
    resizeSuccess: '画像のリサイズに成功しました',
    resizeFailed: '画像のリサイズに失敗しました：{error}',
    invalidDimensions: '有効なサイズを入力してください',
    invalidWidthHeight: '有効な幅と高さを入力してください',
    noImages: 'リサイズする画像を追加してください',
    noImagesToDownload: 'ダウンロードできる画像がありません',
    processing: '画像を処理中...',
    processingComplete: '処理完了',
    processingError: '画像の処理中にエラーが発生しました',
    waitingForProcess: '処理待ち',
    downloadStarted: 'ダウンロードを開始しました',
    allDownloaded: 'すべての画像がダウンロードされました',
    presetSaved: 'プリセットが保存されました',
    presetLoaded: 'プリセットが読み込まれました',
    zipCreated: '{count}枚の画像を含むZIPファイルが作成されました',
    zipError: 'ZIPファイルの作成中にエラーが発生しました'
  },

  preview: {
    title: '画像プレビュー ({count}枚)',
    selectImage: '画像を選択してください',
    batchSupport: '複数の画像を一度に選択して一括処理できます',
    download: 'ダウンロード',
    delete: '削除'
  },

  qualityOptions: {
    fast: '高速処理',
    medium: '標準品質',
    high: '高品質 (推奨)',
    best: '最高品質 (低速)'
  }
};