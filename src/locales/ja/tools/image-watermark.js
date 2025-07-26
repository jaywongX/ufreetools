export default {
  name: '画像透かし',
  description: 'カスタマイズ可能な設定で写真にテキストや画像の透かしを追加',

  upload: {
    title: '画像をアップロード',
    dropzone: '画像をここにドラッグ＆ドロップするか、クリックして参照',
    addMore: '画像を追加',
    clearAll: 'すべてクリア',
    maxFiles: '最大{count}枚の画像',
    maxSize: '画像1枚あたりの最大サイズ：{size}MB',
    supportedFormats: '対応フォーマット：JPG、PNG、WEBP、GIF'
  },

  watermarkType: {
    title: '透かしタイプ',
    text: 'テキスト透かし',
    image: '画像透かし',
    both: 'テキストと画像'
  },

  textWatermark: {
    title: 'テキスト透かし',
    text: '透かしテキスト',
    font: 'フォント',
    size: 'サイズ',
    color: '色',
    opacity: '不透明度',
    rotation: '回転',
    shadow: 'テキストシャドウ',
    background: 'テキスト背景',
    padding: 'パディング',
    border: '枠線',
    spacing: '文字間隔'
  },

  imageWatermark: {
    title: '画像透かし',
    upload: '透かし画像をアップロード',
    selectLogo: 'ロゴを選択',
    presetLogos: 'プリセットロゴ',
    size: 'サイズ',
    opacity: '不透明度',
    rotation: '回転',
    offset: 'オフセット'
  },

  positioning: {
    title: '配置',
    position: '位置',
    custom: 'カスタム位置',
    xPosition: 'X位置',
    yPosition: 'Y位置',
    tiled: 'タイルモード',
    margin: 'マージン',
    scale: '画像に合わせて拡大縮小'
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
    bottomRight: '右下',
    custom: 'カスタム位置'
  },

  output: {
    title: '出力',
    quality: '出力品質',
    format: '出力形式',
    original: '元のファイルと同じ',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'プレビュー',
    downloadIndividual: 'ダウンロード',
    downloadAll: 'すべてダウンロード',
    downloadAsZip: 'ZIPとしてダウンロード'
  },

  presets: {
    title: 'プリセット',
    save: '現在の設定を保存',
    load: 'プリセットを読み込む',
    delete: 'プリセットを削除',
    presetName: 'プリセット名'
  },

  actions: {
    apply: '透かしを適用',
    applyToAll: 'すべてに適用',
    reset: 'リセット',
    preview: 'プレビュー',
    undo: '元に戻す',
    cancel: '処理をキャンセル'
  },

  messages: {
    processing: '処理中...',
    success: '透かしが正常に適用されました',
    error: 'エラー：{error}',
    noImages: '最初に画像を追加してください',
    noWatermark: 'テキストまたは画像の透かしを追加してください',
    presetSaved: 'プリセットが正常に保存されました',
    presetLoaded: 'プリセットが正常に読み込まれました',
    presetDeleted: 'プリセットが削除されました',
    watermarkApplied: '透かしが適用されました',
    watermarkImageLoadError: '透かし画像の読み込みに失敗しました',
    imageLoadError: '画像の読み込みに失敗しました',
    resetSuccess: 'リセットしました',
    downloadStarted: 'ダウンロードを開始しました',
    downloadError: '画像のダウンロードに失敗しました',
    imageLoaded: '画像が正常に読み込まれました',
    canvasInitError: 'キャンバスの初期化に失敗しました',
    tiledWatermarkError: 'タイル状の透かしの作成に失敗しました'
  }
};