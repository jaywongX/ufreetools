export default {
  name: '証明写真メーカー',
  description: 'カスタマイズ可能な背景とサイズのプロフェッショナルな証明写真を作成',
  upload: {
    title: '画像をアップロード',
    dropzone: 'ここに画像をドラッグ＆ドロップするか、クリックして参照',
    or: 'または',
    camera: 'カメラを使用して撮影',
    constraints: '最大サイズ：10MB。形式：JPG、PNG、WEBP',
    takePicture: '撮影',
    retake: '再撮影'
  },
  editing: {
    title: '写真を編集',
    faceDetection: '顔検出',
    autoDetect: '顔を自動検出',
    manualMode: '手動調整',
    zoom: 'ズーム',
    rotate: '回転',
    brightness: '明るさ',
    contrast: 'コントラスト',
    saturation: '彩度',
    filters: 'フィルター'
  },
  background: {
    title: '背景',
    original: 'オリジナル',
    white: '白',
    blue: '青',
    red: '赤',
    custom: 'カスタムカラー',
    transparent: '透明'
  },
  size: {
    title: '写真サイズ',
    presets: 'サイズプリセット',
    custom: 'カスタムサイズ',
    width: '幅',
    height: '高さ',
    unit: '単位',
    mm: 'ミリメートル',
    inches: 'インチ',
    pixels: 'ピクセル'
  },
  presets: {
    passport: 'パスポート (35×45ミリメートル)',
    visa: 'ビザ (2×2インチ)',
    drivingLicense: '運転免許証 (2.5×3インチ)',
    idCard: '身分証明書 (25×35ミリメートル)',
    linkedin: 'LinkedIn (400×400ピクセル)',
    schengen: 'シェンゲンビザ (35×45ミリメートル)',
    chinese: '中国ビザ (33×48ミリメートル)',
    indian: 'インドビザ (2×2インチ)'
  },
  output: {
    title: '出力',
    preview: 'プレビュー',
    grid: '複数の写真',
    columns: '列数',
    rows: '行数',
    spacing: '間隔',
    background: 'ページ背景',
    paperSize: '用紙サイズ',
    download: 'ダウンロード',
    print: '印刷',
    downloadAs: 'ダウンロード形式',
    jpg: 'JPG画像',
    png: 'PNG画像',
    pdf: 'PDF文書'
  },
  actions: {
    apply: '適用',
    reset: 'リセット',
    undo: '元に戻す',
    redo: 'やり直し',
    save: '写真を保存',
    share: '共有'
  },
  messages: {
    noFaceDetected: '顔が検出されませんでした。手動調整するか、別の写真を使用してみてください。',
    multipleFacesDetected: '複数の顔が検出されました。最も大きい顔を使用します。',
    processing: '写真を処理中...',
    downloadReady: '写真のダウンロードの準備ができました',
    photoSaved: '写真が正常に保存されました'
  }
}