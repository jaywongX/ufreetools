export default {
  name: 'グラデーションジェネレーター',
  description: '美しいCSSグラデーションを作成・カスタマイズし、リアルタイムでプレビューしてプロジェクトにコードをコピー',

  gradientTypes: {
    title: 'グラデーションタイプ',
    linear: '線形グラデーション',
    radial: '放射状グラデーション',
    conic: '円錐形グラデーション'
  },

  controls: {
    title: 'カラーコントロール',
    addColor: '色を追加',
    color: '色',
    position: '位置 (%)',
    delete: '色を削除',
    angle: '角度',
    degrees: '度',
    shape: '形状',
    circle: '円形',
    ellipse: '楕円形',
    positionX: '位置 X (%)',
    positionY: '位置 Y (%)',
    size: 'サイズ',
    closestSide: '最も近い辺',
    closestCorner: '最も近い角',
    farthestSide: '最も遠い辺',
    farthestCorner: '最も遠い角',
    fromAngle: '開始角度'
  },

  output: {
    title: 'CSSコード',
    copyCode: 'コードをコピー',
    preview: 'プレビューエリア',
    copied: 'CSSコードがクリップボードにコピーされました！',
    download: 'PNGをダウンロード'
  },

  presets: {
    title: 'グラデーションプリセット',
    apply: 'プリセットを適用',
    sunnyMorning: '晴れた朝',
    winterNeva: '冬のネヴァ',
    rareWind: 'レアウィンド',
    deepBlue: 'ディープブルー',
    perfect: 'パーフェクトホワイト',
    cloudyKnoxville: '曇りのノックスビル',
    greenBeach: 'グリーンビーチ',
    plumBath: 'プラムバス',
    everlasting: '永遠の空'
  },

  accessibility: {
      colorPicker: 'カラーピッカー',
      deleteSwatch: 'カラーストップを削除',
      dragToReposition: 'ドラッグしてカラーストップを再配置'
    },

  actions: {
    reset: 'リセット',
    generateCSS: 'CSSを生成',
    clickToCopy: 'クリックしてコードをコピー',
    completeEdit: '編集完了'
  },

  messages: {
    copied: 'CSSコードがクリップボードにコピーされました！',
    noColors: 'グラデーションを作成するには少なくとも2色追加してください',
    maxColors: '最大カラーストップ数(10)に達しました',
    useKeyboard: '選択したカラーストップを削除するにはDeleteキーを使用してください',
    invalidHex: '有効な16進数カラーコードを入力してください',
    downloadError: 'PNGのダウンロードに失敗しました、後でもう一度お試しください',
    preview: 'プレビュー'
  },

  anglePresets: {
    top: '上',
    topRight: '右上',
    right: '右',
    bottomRight: '右下',
    bottom: '下',
    bottomLeft: '左下',
    left: '左',
    topLeft: '左上'
  },

  radialShapes: {
    circle: '円形',
    ellipse: '楕円'
  },

  radialSizes: {
    farthestCorner: '最も遠い角',
    closestCorner: '最も近い角',
    farthestSide: '最も遠い辺',
    closestSide: '最も近い辺',
  }
};