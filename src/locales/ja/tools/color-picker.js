export default {
  name: 'カラーピッカー',
  description: '高度なカラーツールで色を選択、変換、配色を生成',

  options: {
    colorSpace: 'カラースペース',
    paletteType: 'パレットタイプ',
    includeAlpha: '透明度を含む',
    colorNaming: '色の命名'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: '名前付き色'
  },

  palettes: {
    monochromatic: 'モノクロ',
    complementary: '補色',
    analogous: '類似色',
    triadic: 'トライアド',
    tetradic: 'テトラード',
    split: 'スプリットコンプリメンタリー'
  },

  actions: {
    pickColor: '色を選択',
    randomColor: 'ランダム色',
    generatePalette: 'パレット生成',
    convert: '変換',
    copyColor: '現在の色をコピー',
    copyAll: 'すべてコピー',
    save: '色を保存',
    reset: 'リセット',
    clear: 'クリア'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: '配色スキーム',
    complementary: '補色',
    triadic: 'トライアド',
    analogous: '類似色',
    monochromatic: 'モノクロ',
    split: 'スプリットコンプリメンタリー',
    double: 'ダブルコンプリメンタリー',
    square: 'スクエア',
    compound: 'コンパウンド'
  },

  colorAdjust: {
    title: '色調整',
    hue: '色相',
    saturation: '彩度',
    lightness: '明度',
    alpha: '透明度'
  },

  colorInfo: {
    title: '色情報',
    name: '色名',
    format: 'フォーマット',
    contrast: 'コントラスト',
    accessibility: {
      title: 'アクセシビリティ',
      pass: 'WCAG基準を満たす',
      fail: 'WCAG基準未満',
      normal: '通常テキスト',
      large: '大文字テキスト'
    }
  },

  messages: {
    copied: 'クリップボードにコピーしました',
    copyFailed: 'コピーに失敗しました',
    invalidColor: '無効な色フォーマット',
    contrastWarning: 'コントラストが低い',
    saved: '色を保存しました',
    contrast: 'コントラスト: {ratio}',
    accessibility: {
      AAA: '優れたコントラスト (AAA)',
      AA: '良好なコントラスト (AA)',
      fail: 'コントラスト不足 - アクセシビリティ基準未満'
    },
    preview: 'プレビュー',
    colorValue: '色の値',
  },

  history: {
    title: '色の履歴',
    empty: '履歴がありません',
    clear: '履歴をクリア'
  },

  colorPalette: {
    title: 'カラーパレット',
    addToPalette: 'パレットに追加',
    removeFromPalette: 'パレットから削除',
    exportPalette: 'パレットをエクスポート',
    importPalette: 'パレットをインポート',
    clearPalette: 'パレットをクリア'
  }
};