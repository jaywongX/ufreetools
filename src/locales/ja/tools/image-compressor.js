export default {
  name: '画像圧縮ツール',
  description: '画質を維持しながら画像を圧縮・最適化',

  input: {
    dragDrop: 'ここに画像をドラッグ＆ドロップするか、クリックしてアップロード',
    supportedFormats: 'JPG、PNG、GIF、WEBP形式をサポート',
    selected: '{count}個のファイルが選択されました',
    changeFiles: 'ファイルを変更',
    width: '幅',
    height: '高さ',
    keepOriginal: '0を設定すると元のサイズを維持します',
  },

  results: {
    originalImage: '元の画像',
    compressedImage: '圧縮後',
    filename: 'ファイル名:',
    dimensions: 'サイズ:',
    fileSize: '容量:',
    compressionRatio: '圧縮率:',
    viewOriginal: '元の画像を表示',
  },

  about: {
    title: '画像圧縮について',
    description: 'このツールはブラウザのCanvas APIを使用して画像圧縮を実現します。すべての処理はお使いのデバイス上で行われ、画像がサーバーにアップロードされることはありません。',
    principlesTitle: '圧縮の原理:',
    principles: {
      resize: '画像サイズの調整：小さいサイズはピクセルデータが少なくなります',
      quality: '品質の低下：画像の品質パラメータを下げ、ファイルサイズを削減',
      format: 'フォーマット変換：異なる画像フォーマットには異なる圧縮特性があります'
    },
    useCasesTitle: '適用シーン:',
    useCases: {
      web: 'ウェブサイト画像の最適化、読み込み速度の向上',
      email: 'メール添付ファイルのサイズ削減',
      social: 'ソーシャルメディアへのアップロード前の圧縮',
      storage: 'ストレージスペースの最適化'
    }
  },

  options: {
    quality: '品質',
    qualityValue: '品質 ({value}%)',
    lowQuality: '低品質/小ファイル',
    highQuality: '高品質/大ファイル',
    format: '出力フォーマット',
    maxSize: '最大サイズ ({width} × {height} px)',
    keepExif: 'EXIFデータを保持',
    resizeImage: '画像サイズを変更',
    maxWidth: '最大幅',
    maxHeight: '最大高さ',
    compressionLevel: '圧縮レベル',
    maxFileSize: '目標ファイルサイズ',
    optimizationLevel: '最適化レベル',
    convertTo: '変換先'
  },

  presets: {
    web: 'ウェブ最適化',
    highQuality: '高品質',
    balanced: 'バランス',
    smallSize: '小サイズ',
    custom: 'カスタム'
  },

  formats: {
    original: '元のフォーマット',
    jpeg: 'JPEG',
    jpegDesc: 'JPEG形式は写真に適しており、透明背景をサポートしていません',
    png: 'PNG',
    pngDesc: 'PNG形式は透明背景をサポートし、アイコンやイラストに適しています',
    webp: 'WebP',
    webpDesc: 'WebP形式は高い圧縮率を提供し、ウェブ上での使用に適しています',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: 'サイズ変更なし',
    maxDimension: '最大サイズ',
    exactDimensions: '正確なサイズ',
    percentage: 'パーセンテージ縮小'
  },

  actions: {
    upload: '画像をアップロード',
    compress: '圧縮',
    processing: '処理中...',
    download: 'ダウンロード',
    downloadAll: 'すべてダウンロード',
    batchDownload: '一括ダウンロード',
    clear: 'クリア',
    addMore: '画像を追加',
    removeAll: 'すべて削除',
    preview: 'プレビュー',
    delete: '削除'
  },

  table: {
    filename: 'ファイル名',
    originalSize: '元のサイズ',
    original: '元のファイルサイズ',
    compressedSize: '圧縮後のサイズ',
    compressed: '圧縮後のサイズ',
    savings: '節約',
    ratio: '圧縮率',
    quality: '品質',
    dimensions: 'サイズ',
    originalDimensions: '元のサイズ',
    newDimensions: '新しいサイズ',
    status: 'ステータス'
  },

  messages: {
    dropped: '{count}枚の画像がドロップされました',
    uploading: '画像をアップロード中...',
    compressing: '画像を圧縮中...',
    compressed: '画像の圧縮に成功しました',
    downloadPreparing: 'ダウンロードを準備中...',
    downloadReady: 'ダウンロードの準備ができました',
    cleared: 'すべての画像がクリアされました',
    tooManyFiles: 'ファイルが多すぎます。最大許容数：{max}',
    fileTooLarge: 'ファイルが大きすぎます。最大許容サイズ：{max}MB',
    unsupportedFormat: 'サポートされていないファイル形式：{format}',
    imageError: '画像処理中にエラーが発生しました：{error}',
    batchDownloadNotSupported: '一括ダウンロード機能にはJSZipライブラリが必要です。画像を個別にダウンロードするか、zipライブラリのサポートを追加してください。',
    batchDownloadError: '画像の一括ダウンロード中にエラーが発生しました: {error}',
    invalidImage: '有効な画像ファイルを選択してください'
  }
};