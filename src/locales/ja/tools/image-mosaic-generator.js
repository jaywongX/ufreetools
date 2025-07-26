export default {
  name: '画像モザイクジェネレーター',
  description: '小さな画像を組み合わせてより大きな画像を作成するモザイクアート',

  upload: {
    title: 'メイン画像をアップロード',
    dropzone: 'メイン画像をここにドラッグ＆ドロップするか、クリックして参照',
    maxSize: '最大ファイルサイズ：15MB',
    supportedFormats: '対応フォーマット：JPG、PNG、WEBP'
  },

  tiles: {
    title: 'タイル画像',
    uploadTiles: 'タイル画像をアップロード',
    dropzoneTiles: 'タイル画像をここにドラッグ＆ドロップするか、クリックして参照',
    maxTiles: '最大{count}枚の画像',
    useFolder: '画像フォルダをアップロード',
    orUseSample: 'またはサンプルギャラリーを使用',
    sampleSets: 'サンプルタイルセット',
    nature: '自然',
    people: '人物',
    art: 'アート',
    abstract: '抽象',
    animals: '動物',
    clearAll: 'すべてのタイルをクリア'
  },

  settings: {
    title: 'モザイク設定',
    tileSize: 'タイルサイズ',
    small: '小（細かい）',
    medium: '中',
    large: '大（粗い）',
    square: '正方形',
    circle: '円形',
    applicationMode: 'モザイク適用方法',
    all: '全体',
    selectRegion: '領域を選択',
    selectingRegion: '領域選択中...',
    autoDetectFaces: '顔を自動検出',
    detectFaces: '顔を検出',
    detectFacesDescription: '画像内の顔を検出し、自動的にモザイクを適用',
    edgeSmoothing: 'エッジスムージング',
    edgeSmoothingDescription: 'モザイクブロックのエッジを滑らかにして、より自然な移行を実現',
    custom: 'カスタム',
    width: '幅',
    height: '高さ',
    tilesWide: 'タイル幅数',
    tilesHigh: 'タイル高さ数',
    colorMatch: '色マッチング',
    intensity: '強度',
    low: '低',
    high: '高',
    reuseTiles: 'タイルの再利用',
    allowDuplicates: '重複を許可',
    maxUses: 'タイルごとの最大使用回数',
    colorAdjustment: '色調整',
    adjustTiles: 'タイルの色を合わせるように調整',
    blendOriginal: '元の画像とブレンド',
    blendAmount: 'ブレンド量',
    random: 'ランダム変化',
    shuffle: 'タイルをランダムに配置'
  },

  advanced: {
    title: '詳細オプション',
    algorithm: 'マッチングアルゴリズム',
    algorithms: {
      average: '平均色',
      dominant: '主要色',
      histogram: '色ヒストグラム',
      pattern: 'パターンマッチング'
    },
    tileShape: 'タイル形状',
    shapes: {
      square: '正方形',
      circle: '円形',
      hexagon: '六角形',
      triangle: '三角形',
      random: 'ランダム'
    },
    tileGap: 'タイル間隔',
    borderColor: '枠線の色',
    backgroundColor: '背景色'
  },

  output: {
    fileName: 'ファイル名',
    title: '出力',
    preview: 'プレビュー',
    original: 'オリジナル',
    mosaic: 'モザイク',
    sideBySide: '並べて表示',
    zoomIn: '拡大',
    zoomOut: '縮小',
    download: 'モザイクをダウンロード',
    asJpg: 'JPGとしてダウンロード',
    asPng: 'PNGとしてダウンロード',
    highRes: '高解像度',
    resolution: '出力解像度',
    format: 'フォーマット',
    quality: '品質',
    size: 'サイズ',
    pixel: 'ピクセル',
    pleaseSelectImage: '画像を選択してください',
    pleaseSelectImageAndAdjustSettings: '画像を選択して設定を調整してください'
  },

  actions: {
    generate: 'モザイクを生成',
    regenerate: '再生成',
    cancel: '生成をキャンセル',
    reset: 'リセット',
    detectFaces: '顔を検出',
    saveSettings: '設定を保存',
    loadSettings: '設定を読み込み'
  },

  messages: {
    generating: 'モザイクを生成中...これには時間がかかる場合があります。',
    generationComplete: 'モザイク生成が完了しました！',
    notEnoughTiles: 'タイル画像が不足しています。さらに画像をアップロードしてください。',
    tileProcessing: 'タイル画像を処理中：{progress}%',
    downloadStarted: 'ダウンロードを開始しました',
    settingsSaved: '設定を保存しました',
    selecting: '領域選択中...',
    preview: 'モザイク適用後の効果がここに表示されます',
    faceDetected: '顔領域を検出しました',
    facesDetected: '{count}個の顔を検出しました',
    noFacesDetected: '顔が検出されませんでした',
    loadingModels: '顔検出モデルを読み込み中...',
    faceDetectionFailed: '顔検出に失敗しました',
    reset: 'リセットしました',
    error: 'エラー：{message}'
  }
};