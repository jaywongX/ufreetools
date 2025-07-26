export default {
  name: 'カラースキームジェネレーター',
  description: '色彩理論に基づいて調和の取れたカラースキームを生成し、デザイナーが迅速に統一感のあるカラーパレットを作成できるように支援します',

  baseColor: {
    title: 'ベースカラー',
    picker: 'カラーピッカー',
    hex: '16進数',
    rgb: 'RGB',
    hsl: 'HSL',
    random: 'ランダムカラー',
    recent: '最近使用した色',
    hint: 'カラーブロックをクリックするか、16進数カラー値を入力してください',
  },

  schemeTypes: {
    title: '色彩理論',
    monochromatic: 'モノクロマティック',
    analogous: 'アナロガス',
    complementary: 'コンプリメンタリー',
    splitComplementary: 'スプリットコンプリメンタリー',
    triadic: 'トライアド',
    tetradic: 'テトラード',
    square: 'スクエア',
    compound: 'コンパウンド',
    shades: 'シェード',
    custom: 'カスタム',
  },

  options: {
    colorCount: '色数',
    saturationRange: '彩度範囲',
    brightnessRange: '明度範囲',
    includeBaseColor: 'ベースカラーを含める',
    lockBaseColor: 'ベースカラーをロック',
    colorSpace: 'カラースペース',
    sortBy: '並べ替え方法',
    colorBlindSafe: '色覚バリアフリー',
    contrastRatio: '最小コントラスト比'
  },

  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },

  sortOptions: {
    hue: '色相',
    saturation: '彩度',
    brightness: '明度',
    harmony: '調和度',
    none: 'なし'
  },

  palettes: {
    title: '生成されたカラーパレット',
    save: 'パレットを保存',
    copy: 'パレットをコピー',
    export: 'CSS変数としてエクスポート',
    apply: 'プレビューに適用'
  },

  exportFormats: {
    title: 'エクスポート形式',
    css: 'CSS変数',
    scss: 'SCSS変数',
    less: 'LESS変数',
    json: 'JSON',
    svg: 'SVGパレット',
    ase: 'Adobe ASE',
    tailwind: 'Tailwind設定',
    pdf: 'PDF'
  },

  preview: {
    title: 'プレビュー',
    website: 'ウェブサイト',
    mobilApp: 'モバイルアプリ',
    dashboard: 'ダッシュボード',
    card: 'カード',
    poster: 'ポスター',
    custom: 'カスタム',
    mainButton: 'メインボタン',
    secondButton: 'サブボタン',
    tag: 'タグ'
  },

  savedPalettes: {
    title: '保存済みパレット',
    load: '読み込み',
    delete: '削除',
    rename: '名前変更',
    noSavedPalettes: '保存されたパレットはありません',
    saved: 'パレットを保存しました',
    schemeNameEmpty: 'パレット名が空です',
  },

  actions: {
    generate: 'スキーム生成',
    regenerate: '再生成',
    reset: 'リセット',
    lockColor: '色をロック',
    unlockColor: 'ロック解除',
    save: 'パレットを保存',
  },

  messages: {
    paletteSaved: 'パレットが正常に保存されました',
    paletteDeleted: 'パレットが削除されました',
    copied: 'クリップボードにコピーしました',
    exported: 'エクスポート成功',
    adjustmentParam: '調整パラメータ',
    schemeName: 'スキーム名',
    copyAllColors: 'すべての色をコピーしました',
  }
};