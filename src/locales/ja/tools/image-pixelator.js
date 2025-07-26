export default {
  name: '画像ピクセル化ツール',
  description: 'カスタマイズ可能な解像度とエフェクトで画像をピクセルアートに変換',

  upload: {
    title: '画像をアップロード',
    dropzone: '画像をここにドラッグ＆ドロップするか、クリックして参照',
    maxSize: '最大ファイルサイズ：10MB',
    supportedFormats: '対応フォーマット：JPG、PNG、WEBP、GIF'
  },

  settings: {
    title: 'ピクセル化設定',
    pixelSize: 'ピクセルサイズ',
    pixelShape: 'ピクセル形状',
    shapes: {
      square: '正方形',
      rounded: '角丸',
      circle: '円形',
      diamond: 'ダイヤモンド',
      custom: 'カスタム'
    },
    resolution: '解像度',
    width: '幅',
    height: '高さ',
    preserveAspect: 'アスペクト比を維持',
    colorReduction: '色数削減',
    colors: '色数',
    dithering: 'ディザリング',
    ditheringTypes: {
      none: 'なし',
      floydSteinberg: 'Floyd-Steinberg',
      atkinson: 'Atkinson',
      ordered: '順序付き',
      bayer: 'Bayer'
    },
    palette: 'カラーパレット',
    palettes: {
      auto: '自動',
      grayscale: 'グレースケール',
      gameboy: 'ゲームボーイ',
      nes: 'ファミコン',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'カスタム',
      normal: '通常',
      retro: 'レトロ',
      sepia: 'セピア',
      bright: '明るい',
      cool: 'クール',
      warm: 'ウォーム',
      bw: '白黒',
      invert: '反転'
    },
    customPalette: 'カスタムパレットカラー',
    small: '小（細かい）',
    large: '大（粗い）',
    low: '低（レトロ）',
    high:'高（トゥルーカラー）',
  },

  effects: {
    title: 'エフェクト',
    brightness: '明るさ',
    contrast: 'コントラスト',
    saturation: '彩度',
    hue: '色相',
    outline: 'アウトライン',
    outlineColor: 'アウトライン色',
    noise: 'ノイズ',
    posterize: 'ポスタライズ',
    invert: '色反転',
    grayscale: 'グレースケール',
    sepia: 'セピア',
    vignette: 'ビネット'
  },

  animation: {
    title: 'アニメーション設定',
    animated: 'アニメーションとして処理',
    frameRate: 'フレームレート',
    optimizeFrames: 'フレーム最適化',
    looping: 'ループ',
    loopCount: 'ループ回数'
  },

  output: {
    title: '出力',
    preview: 'プレビュー',
    original: 'オリジナル',
    pixelated: 'ピクセル化',
    comparison: '比較',
    zoomIn: '拡大',
    zoomOut: '縮小',
    gridOverlay: 'グリッドオーバーレイ',
    downloadAs: '形式を選択してダウンロード',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: 'スプライトシート',
    quality: '品質',
    scale: '拡大縮小',
    loading: '読み込み中...',
    noImage: '画像を選択してください',
    processing: '処理中...'
  },

  presets: {
    title: 'プリセット',
    save: '現在の設定を保存',
    load: 'プリセットを読み込み',
    delete: 'プリセットを削除',
    presetName: 'プリセット名',
    defaults: {
      lowRes: '低解像度',
      highContrast: '高コントラスト',
      retro: 'レトロ',
      minimal: 'ミニマル',
      sketch: 'スケッチ',
      blueprint: '設計図'
    }
  },

  actions: {
    pixelate: '画像をピクセル化',
    reset: '設定をリセット',
    applyChanges: '変更を適用',
    undoChanges: '変更を元に戻す',
    downloadImage: '画像をダウンロード',
    selectImage: '画像を選択'
  },

  messages: {
    processing: '画像処理中...',
    success: '画像のピクセル化が完了しました',
    downloading: 'ダウンロードの準備中...',
    presetSaved: 'プリセットが保存されました',
    presetLoaded: 'プリセットを読み込みました',
    presetDeleted: 'プリセットを削除しました',
    error: 'エラー：{error}',
    fileSize: 'ファイルサイズ',
    pixels: 'ピクセル',
    imageSize: '画像サイズ',
    downloadSuccess: '画像がダウンロードされました',
    downloadFailed: 'ダウンロードに失敗しました',
    resetSuccess: 'リセットしました',
    fileName: 'ファイル名'
  }
};