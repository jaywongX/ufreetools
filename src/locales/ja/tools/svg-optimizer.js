export default {
  name: 'SVG最適化ツール',
  description: 'パフォーマンス向上とファイルサイズ削減のためのSVGファイルの最適化とクリーンアップ',

  upload: {
    title: 'SVGをアップロード',
    dropzone: 'SVGファイルをここにドラッグ＆ドロップするか、クリックしてアップロード',
    or: 'または',
    pasteCode: 'SVGコードを貼り付け',
    maxSize: '最大ファイルサイズ：5MB',
    onlySvg: 'SVG形式のファイルのみサポート',
    selected: '選択済み',
    changeFile: 'ファイルを変更'
  },

  input: {
    title: 'SVG入力',
    pasteHere: 'SVGコードをここに貼り付け...',
    loadExample: 'サンプルを読み込む',
    clear: 'クリア',
    validate: 'SVGを検証'
  },

  output: {
    title: '最適化結果',
    copyToClipboard: 'クリップボードにコピー',
    download: 'SVGをダウンロード',
    beforeSize: '元のサイズ',
    afterSize: '最適化後のサイズ',
    reduction: '削減量',
    reductionBy: '削減率',
    svgCode: 'SVGコード'
  },

  options: {
    title: '最適化オプション',
    preset: 'プリセット',
    presets: {
      default: 'デフォルト',
      light: '軽度',
      aggressive: '積極的',
      custom: 'カスタム'
    },
    removeComments: 'コメントを削除',
    removeCommentsDesc: 'コメントとcdataセクションを削除',
    removeHiddenElements: '非表示要素を削除',
    removeEmptyContainers: '空のコンテナを削除',
    removeUnusedDefs: '未使用の定義を削除',
    removeViewBox: 'viewBoxを削除',
    keepViewBox: 'viewBoxを保持',
    keepViewBoxDesc: 'SVGのスケーラビリティを確保するためにviewBox属性を保持',
    cleanupIDs: 'IDをクリーンアップ',
    cleanupIDsDesc: '参照されていないIDを削除または短縮',
    convertColors: '色を16進数に変換',
    removeMetadata: 'メタデータを削除',
    removeMetadataDesc: '&lt;metadata&gt;要素を削除',
    removeDoctype: 'ドキュメントタイプを削除',
    removeXMLProcInst: 'XML命令を削除',
    removeEditorsNS: 'エディタの名前空間を削除',
    collapseGroups: 'グループを統合',
    collapseGroupsDesc: '特別な属性のないグループ要素を統合',
    convertPathData: 'パスデータを最適化',
    convertPathDataDesc: 'パスデータを相対座標に変換、小数点以下の桁数を削減など',
    convertTransforms: '変換を最適化',
    convertShapeToPath: '図形をパスに変換',
    convertShapeToPathDesc: '基本図形を&lt;path&gt;要素に変換',
    removeUselessStrokeAndFill: '不要なストロークとフィルを削除',
    moveElemsAttrsToGroup: '要素の属性をグループに移動',
    mergePaths: 'パスを統合',
    minifyStyles: 'スタイルを圧縮',
    inlineStyles: 'スタイルをインライン化',
    inlineStylesDesc: '&lt;style&gt;要素内のスタイルをインラインに変換',
    cleanupNumericValues: '数値を四捨五入',
    precision: '数値精度',
    decimalPlaces: '桁の小数点',
    lowPrecision: '低精度（より小さいサイズ）',
    highPrecision: '高精度（より良い品質）',
    removeDimensions: '幅と高さの属性を削除',
    removeDimensionsDesc: '幅/高さ属性を削除し、viewBoxでサイズを制御',
    sortAttrs: '属性を並べ替え',
    sortAttrsDesc: '要素の属性をアルファベット順に並べ替え'
  },

  view: {
    title: 'プレビュー',
    original: '元の画像',
    optimized: '最適化後',
    showBorder: '枠線を表示',
    backgroundColor: '背景色',
    grid: 'グリッドを表示',
    zoom: 'ズーム',
    toggleAnimation: 'アニメーションの切り替え'
  },

  actions: {
    optimize: '最適化を開始',
    optimizing: '最適化中...',
    resetOptions: 'オプションをリセット',
    download: '最適化されたSVGをダウンロード',
    copy: 'コードをコピー',
    copyCode: 'コードをコピー',
    viewCode: 'コードを表示',
    viewPreview: 'プレビューを表示'
  },

  messages: {
    optimizationSuccess: 'SVGの最適化に成功しました',
    optimizationFailed: 'SVGの最適化に失敗しました：{error}',
    invalidSvg: '無効なSVGファイルまたはコード',
    copied: 'クリップボードにコピーしました',
    copyFailed: 'コピーに失敗しました、手動でコピーしてください',
    downloaded: '最適化されたSVGがダウンロードされました',
    emptyInput: '最適化するSVGコードまたはファイルを提供してください',
    onlySvgAllowed: 'SVG形式のファイルをアップロードしてください！',
    failedToLoadLibrary: 'SVGOライブラリの読み込みに失敗しました'
  }
};