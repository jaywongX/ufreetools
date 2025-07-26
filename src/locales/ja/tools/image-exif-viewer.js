export default {
  name: '画像EXIF表示ツール',
  description: '写真のEXIFメタデータを表示・分析',

  upload: {
    title: '画像をアップロード',
    dropzone: '画像をここにドラッグ＆ドロップするか、クリックして参照',
    maxSize: '最大ファイルサイズ：15MB',
    supportedFormats: '対応フォーマット：JPG、TIFF、HEIC、PNG',
    anyImageFile: 'EXIFデータを含む任意の画像ファイル'
  },

  display: {
    title: '画像情報',
    noExif: 'この画像にはEXIFデータが見つかりませんでした',
    basicInfo: '基本情報',
    camera: 'カメラ情報',
    exposure: '露出情報',
    location: '位置情報',
    dates: '日付情報',
    advanced: '高度なEXIFデータ',
    thumbnail: 'EXIFサムネイル'
  },

  exif: {
    fileName: 'ファイル名',
    fileSize: 'ファイルサイズ',
    fileType: 'ファイルタイプ',
    dimensions: 'サイズ',
    make: 'カメラメーカー',
    model: 'カメラモデル',
    lens: 'レンズ',
    focalLength: '焦点距離',
    focalLength35: '焦点距離（35mm換算）',
    aperture: '絞り値',
    fNumber: 'F値',
    exposureTime: '露出時間',
    shutterSpeed: 'シャッタースピード',
    iso: 'ISO',
    exposureMode: '露出モード',
    exposureProgram: '露出プログラム',
    meteringMode: '測光モード',
    flash: 'フラッシュ',
    flashMode: 'フラッシュモード',
    whiteBalance: 'ホワイトバランス',
    exposureBias: '露出補正',
    latitude: '緯度',
    longitude: '経度',
    altitude: '高度',
    locationName: '位置名',
    dateOriginal: '撮影日時',
    dateDigitized: 'デジタル化日時',
    dateModified: '修正日時',
    software: 'ソフトウェア',
    artist: 'アーティスト',
    copyright: '著作権',
    resolution: '解像度',
    colorSpace: '色空間',
    orientation: '向き',
    compression: '圧縮',
    bitsPerSample: 'サンプルあたりのビット数',
    maxAperture: '最大絞り値',
    contrast: 'コントラスト',
    saturation: '彩度',
    sharpness: 'シャープネス',
    brightness: '明るさ',
    sceneCaptureType: 'シーンキャプチャタイプ',
    gainControl: 'ゲイン制御',
    serialNumber: 'シリアル番号',
    width: '幅',
    height: '高さ',
  },

  map: {
    title: '写真の位置',
    show: '地図で表示',
    noLocation: '位置データがありません',
    directions: '道順を取得',
    copy: '座標をコピー',
    warning: '警告：この画像には位置データが含まれています。共有する際は注意してください。'
  },

  actions: {
    showAll: 'すべてのメタデータを表示',
    hideAll: 'すべてのメタデータを非表示',
    copyAll: 'すべてのメタデータをコピー',
    save: 'メタデータをJSONとして保存',
    removeMeta: 'メタデータを削除',
    download: 'メタデータを削除した画像をダウンロード',
    viewFullSize: '原寸大で表示',
    refresh: 'データを再読み込み'
  },

  settings: {
    title: '表示設定',
    showGroups: 'メタデータをグループ化',
    showRaw: '生の値を表示',
    showTechnical: '技術データを表示',
    showFiltered: '空のフィールドを非表示',
    darkMode: 'ダークモード',
    mapProvider: '地図プロバイダー'
  },

  tips: {
    privacy: 'プライバシーに関するヒント：写真には位置情報やデバイス情報などの個人データが含まれている場合があります。',
    noExif: 'EXIFデータが表示されませんか？一部のソーシャルメディアや画像編集ツールはメタデータを削除します。',
    rawView: '「生の表示」に切り替えて、利用可能なすべてのメタデータを表示します。'
  },

  messages: {
    copied: 'メタデータがクリップボードにコピーされました',
    saved: 'メタデータがJSONファイルとして保存されました',
    noExif: 'この画像にはEXIFデータが見つかりませんでした',
    metadataRemoved: 'メタデータが正常に削除されました',
    imageLoaded: '画像が正常に読み込まれました',
    notUse: '未使用',
    use: '使用済み',
    auto: '自動',
    manual: '手動',
    reset: 'リセット済み',
    exifExtracted: 'EXIFデータが抽出されました',
  },

  error: {
    copyFailed: 'コピーに失敗しました',
    exportFailed: 'エクスポートに失敗しました',
    exifExtractionFailed: 'EXIFデータの抽出に失敗しました',
    imageLoadFailed: '画像の読み込みに失敗しました',
  },

  orientation: {
    normal: '通常',
    horizontalFlip: '水平反転',
    rotate180: '180°回転',
    verticalFlip: '垂直反転',
    rotate90VerticalFlip: '時計回りに90°回転して垂直反転',
    rotate90: '時計回りに90°回転',
    rotate90HorizontalFlip: '時計回りに90°回転して水平反転',
    rotate270: '反時計回りに90°回転'
  }
};