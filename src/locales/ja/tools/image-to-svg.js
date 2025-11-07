export default {
    name: 'オンライン画像SVG変換ツール - ラスターからベクターSVG/SVGZへ',
    description: 'PNG/JPG/GIF/BMPをサポートし、透明背景処理、バッチ変換キュー、リアルタイムプレビュー編集、標準SVGと圧縮SVGZへのエクスポート機能を備えた無料オンライン画像SVG変換ツール。純粋なフロントエンドベクター化でプライバシーを保護し、モバイル対応。',

    inputTitle: '入力画像',
    outputTitle: 'ベクター化結果',
    dragTip: 'ここに画像をドラッグ＆ドロップするか、クリックしてアップロード（クリップボード対応）',
    supported: '対応フォーマット: PNG, JPEG, BMP, WEBP, GIF',
    loadSample: 'サンプル画像を読み込んで変換',
    clearAll: 'すべてクリア',
    convertBtn: 'SVGへの変換を開始',
    batchDownload: 'バッチダウンロード (ZIP)',
    downloadBtn: 'ダウンロード',
    noOutput: 'まだベクター化結果がありません',

    original: '元の画像',
    originalAlt: '元の画像 {index}',
    vectorized: 'ベクター化プレビュー',

    exportFormat: 'エクスポート形式',

    // コントロール項目
    colorsLabel: '色数',
    pathomitLabel: '小さなパスを無視する閾値',
    ltresLabel: '線分検出解像度 (ltres)',
    qtresLabel: '量子化解像度 (qtres)',
    linefilterLabel: 'ラインフィルター (linefilter)'
};