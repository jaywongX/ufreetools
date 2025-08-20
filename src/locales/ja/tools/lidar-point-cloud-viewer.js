export default {
  name: 'LIDAR点群ビューア - オンライン3D点群可視化ツール',
  description:
    '無料のオンラインLIDAR点群ビューア。LAS・XYZ・PLY・PCD形式に対応。3D可視化、複数の着色モード、インタラクティブなナビゲーション、データ分析機能を提供',
  inputTitle: '点群ファイルの入力',
  outputTitle: '3D点群ビュー',
  dragTip: 'ここに点群ファイルをドラッグ＆ドロップするか、クリックしてアップロード',
  supported: '対応フォーマット: LAS, XYZ, PLY, PCD, TXT',
  loadFromUrl: 'URLから読み込み',
  load: '読み込み',
  loadSample: 'サンプルデータを読み込み',
  coloringMode: '着色モード',
  elevation: '標高による着色',
  intensity: '強度による着色',
  classification: '分類による着色',
  rgb: 'RGB着色',
  pointSize: 'ポイントサイズ',
  pointDensity: 'ポイント密度',
  enableAnimation: 'アニメーションを有効化',
  showTrajectory: '軌跡を表示',
  showSensorData: 'センサーデータを表示',
  fileInfo: 'ファイル情報',
  fileName: 'ファイル名',
  pointCount: 'ポイント数',
  fileSize: 'ファイルサイズ',
  bounds: '境界範囲',
  resetView: 'ビューをリセット',
  exportImage: '画像をエクスポート',
  loading: '読み込み中...',
  noData: '点群ファイルをアップロードするか、サンプルデータを読み込んでください',
  controls: {
    rotate: 'マウスドラッグ: ビューを回転',
    zoom: 'マウスホイール: ズーム',
    pan: 'Shift+ドラッグ: パン'
  },
  stats: {
    visible: '表示中の点',
    total: '総点数',
    points: '点'
  },
  metadata: {
    title: 'LASメタデータ',
    systemId: 'システムID',
    software: '生成ソフトウェア',
    version: 'LASバージョン',
    creationDate: '作成日',
    pointFormat: '点データ形式',
    vlrCount: 'VLR数',
    returnStats: 'リターン統計',
    extent: '空間範囲'
  },
  error: {
    loadFailed: '点群ファイルの読み込みに失敗しました。ファイル形式を確認してください',
    urlLoadFailed: 'URLからの読み込みに失敗しました。URLを確認してください'
  },
  disclaimer: {
    title: '技術ノート',
    content:
      '本ツールはWebGLを用いてブラウザ内で3D点群可視化を実現します。すべてのデータ処理はローカルで行われ、データの安全性を確保します。',
    formats:
      '対応フォーマット: LAS（LIDAR標準形式）、XYZ（ASCII点群）、PLY（ポリゴンファイル形式）、PCD（Point Cloud Data）',
    performance:
      'パフォーマンスのヒント: 大きな点群ファイルは読み込みに時間がかかる場合があります。最新のブラウザの使用を推奨します。'
  }
};