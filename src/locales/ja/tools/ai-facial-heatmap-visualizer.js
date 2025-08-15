export default {
    name: 'AI顔ヒートマップビジュアライザー',
    description: '人工知能を使用して顔の特徴を分析し、ヒートマップを生成し、写真改善の提案を提供します。写真の照明と構図を最適化するのに役立つ顔認識技術に基づいています。',
    inputTitle: '入力画像',
    outputTitle: 'ヒートマップ分析',
    dragTip: '画像をここにドラッグ＆ドロップするか、クリックしてアップロード',
    supported: '対応フォーマット: PNG, JPEG, BMP, WEBP',
    processBtn: 'ヒートマップを生成',
    downloadBtn: 'ダウンロード',
    noOutput: '出力画像はまだありません',
    loadSample: 'サンプル画像を読み込む',
    preview: '画像プレビュー',
    clearAll: 'すべてクリア',
    originalImage: '元の画像',
    deleteImage: '画像を削除',
    batchDownload: 'バッチダウンロード (ZIP)',
    exportFormat: 'エクスポート形式',
    imageQuality: '画像品質',
    zoomIn: '拡大',
    zoomOut: '縮小',
    resetView: 'ビューをリセット',
    fullscreen: '全画面プレビュー',
    closePreview: 'プレビューを閉じる',
    analysisTitle: '分析結果',
    noFaceDetected: '顔が検出されませんでした。より鮮明な正面からの写真を使用してみてください',
    loadingModels: '顔認識モデルを読み込み中',
    loadingModelsTip: '初回使用時はモデルファイルのダウンロードが必要です。しばらくお待ちください...',
    disclaimer: 'このツールは画像分析と教育目的のみを目的としており、画像を永続的に保存することはありません',
    modelInfo: 'face-api.jsが提供する顔認識技術を使用',
    
    // パラメータ設定関連の翻訳
    paramSettings: 'パラメータ設定',
    heatmapIntensity: 'ヒートマップ強度',
    heatmapRadius: 'ヒートポイントサイズ',
    colorScheme: 'カラースキーム',
    showLandmarks: 'ランドマークを表示',
    
    expressions: {
        neutral: '無表情',
        happy: '幸せ',
        sad: '悲しい',
        angry: '怒り',
        fearful: '恐怖',
        disgusted: '嫌悪',
        surprised: '驚き'
    },
    
    expressionDetected: '検出された表情: {expression}',
    
    lightingTips: {
        leftDark: '左側の光が不足しています。左側に光源を追加してみてください',
        rightDark: '右側の光が不足しています。右側に光源を追加してみてください',
        tooLow: '全体的な照明が不足しています。環境光またはフラッシュの追加を検討してください',
        tooHigh: '光が強すぎます。露出オーバーの原因になる可能性があります。光源を弱くするか、ソフトライトの使用を検討してください',
        good: '良好な照明です。顔の照明が均一です'
    },
    
    positionTips: {
        tooLeft: '顔の位置が左に寄りすぎています。右に移動することをお勧めします',
        tooRight: '顔の位置が右に寄りすぎています。左に移動することをお勧めします',
        tooHigh: '顔の位置が高すぎます。下に移動することをお勧めします',
        tooLow: '顔の位置が低すぎます。上に移動することをお勧めします',
        tooSmall: 'フレーム内の顔の比率が小さすぎます。より近づくことをお勧めします',
        tooBig: 'フレーム内の顔の比率が大きすぎます。撮影距離を増やすことをお勧めします'
    }
};