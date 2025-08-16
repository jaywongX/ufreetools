export default {
    name: 'AI顔フォーカス自動ズームツール',
    description: '人工知能を使用して顔の位置を検出し、自動的にトリミングして中央に表示し、ソーシャルメディアアバターを最適化します。face-api.js技術に基づき、Instagram、LinkedIn、YouTube、Facebook、Twitter、TikTok、Xiaohongshu、WeChat、Redditなどの主要なソーシャルプラットフォームのプリセットサイズをサポートしています。',
    inputTitle: '入力画像',
    outputTitle: 'トリミング結果',
    dragTip: 'ここに画像をドラッグ＆ドロップするか、クリックしてアップロード',
    supported: 'サポートされている形式: PNG, JPEG, BMP, WEBP',
    processBtn: '処理開始',
    processing: '処理中...',
    downloadBtn: 'ダウンロード',
    downloadSocial: 'ソーシャルメディアパックをダウンロード',
    noOutput: '出力画像はまだありません',
    loadSample: 'サンプル画像を読み込む',
    preview: '画像をプレビュー',
    clearAll: 'すべてクリア',
    originalImage: '元の画像',
    deleteImage: '画像を削除',
    batchDownload: 'バッチダウンロード (ZIP)',
    exportFormat: 'エクスポート形式',
    imageQuality: '画像品質',
    zoomIn: 'ズームイン',
    zoomOut: 'ズームアウト',
    resetView: 'ビューをリセット',
    fullscreen: '全画面プレビュー',
    
    // パラメータ設定
    paramSettings: 'パラメータ設定',
    cropMode: 'トリミングモード',
    autoMode: '自動モード',
    squareMode: '正方形モード',
    customMode: 'カスタムサイズ',
    customWidth: 'カスタム幅',
    customHeight: 'カスタム高さ',
    faceMargin: '顔マージン',
    confidence: '検出信頼度',
    socialPresets: 'ソーシャルメディアプリセット',
    
    // 分析結果
    analysisTitle: '分析結果',
    facesDetected: '{count}個の顔を検出',
    noFaceDetected: '顔が検出されませんでした。より明確な正面からの写真を使用してみてください',
    socialPreview: 'ソーシャルメディアプレビュー',
    
    // 読み込み状態
    loadingModels: '顔認識モデルを読み込み中',
    loadingModelsTip: '初回使用時はモデルファイルのダウンロードが必要です。しばらくお待ちください...',
    
    // フッター免責事項
    disclaimer: 'このツールは画像処理と最適化のみを目的としています。あなたの画像は永続的に保存されません',
    modelInfo: 'face-api.jsが提供する顔認識技術を使用しています'
};