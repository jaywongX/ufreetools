export default {
    name: 'AI プロフィール写真アナライザー - プロフェッショナルヘッドショット分析ツール',
    description: 'プロフィール写真やヘッドショットを分析する無料オンラインツール。頭の位置、笑顔、アイコンタクト、照明の質に関するAI駆動のフィードバックを得て、プロフェッショナルな写真を改善しましょう。',
    inputTitle: '写真をアップロード',
    outputTitle: '分析結果',
    dragTip: '写真をここにドラッグ＆ドロップするか、クリックしてアップロード',
    supported: '対応フォーマット: PNG, JPEG, BMP, WEBP',
    analyzeBtn: '写真を分析',
    downloadBtn: 'ダウンロード',
    noOutput: 'まだ分析された写真はありません',
    loadSample: 'サンプル写真を読み込む',
    preview: '写真プレビュー',
    clearAll: 'すべてクリア',
    originalImage: '元の写真',
    deleteImage: '写真を削除',
    batchDownload: '一括ダウンロード (ZIP)',
    exportFormat: 'エクスポート形式',
    imageQuality: '画質',
    zoomIn: '拡大',
    zoomOut: '縮小',
    resetView: 'ビューをリセット',
    fullscreen: '全画面プレビュー',
    analysisResults: '分析結果',
    overallScore: '総合スコア',
    headPosition: '頭の位置',
    smileDetection: '笑顔の検出',
    eyeContact: 'アイコンタクト',
    lightingQuality: '照明の質',
    recommendations: '推奨事項',
    noFaceDetected: 'この画像では顔が検出されませんでした。顔がはっきり見える写真をアップロードしてください。',
    disclaimer: '免責事項',
    disclaimerText: 'このツールはAIを使用してプロフィール写真を分析します。結果は参考用であり、画像の品質や照明条件によって異なる場合があります。すべての処理はブラウザ内で行われ、写真がサーバーにアップロードされることはありません。',
    modelInfo: 'ブラウザ内での顔検出と認識のためのオープンソースJavaScript APIであるface-api.jsを使用しています。',
    
    positions: {
        straight: '真っ直ぐ',
        slightlyTilted: '少し傾いている',
        tilted: '傾いている',
        unknown: '不明'
    },
    
    tips: {
        headStraight: '素晴らしい！あなたの頭は真っ直ぐに位置しており、プロフェッショナルな写真に理想的です。',
        headSlightlyTilted: 'あなたの頭は少し傾いています。より真っ直ぐな姿勢の方がよりプロフェッショナルに見えるかもしれません。',
        headTilted: 'あなたの頭は目立って傾いています。プロフェッショナルな写真のためには、頭を真っ直ぐに保つようにしてください。',
        
        smileLow: 'より自然に笑顔を見せて、親しみやすく自信があるように見せましょう。',
        smileMedium: 'あなたの笑顔はもっと魅力的になる可能性があります。自然でリラックスした笑顔を試してみてください。',
        smileGood: '良い笑顔です！親しみやすくプロフェッショナルに見えます。',
        smileExcellent: '素晴らしい笑顔です！非常に親しみやすく自信があるように見えます。',
        
        eyeContactLow: 'より良いアイコンタクトのためにカメラを直接見るようにしてください。',
        eyeContactMedium: 'あなたのアイコンタクトは改善できます。カメラのレンズを直接見てください。',
        eyeContactGood: '良いアイコンタクトです。あなたは熱心で注意深く見えます。',
        eyeContactExcellent: '素晴らしいアイコンタクトです。あなたは自信があり熱心に見えます。',
        
        lightingLow: '照明が暗すぎるか不均一です。より良い照明条件で写真を撮るようにしてください。',
        lightingMedium: '照明は改善できます。自然な、拡散光が最も効果的です。',
        lightingGood: '良い照明です。あなたの顔はよく照らされ、はっきりと見えます。',
        lightingExcellent: '素晴らしい照明です。あなたの顔は完璧に照らされています。'
    },
    
    recommendations: {
        title: '改善の提案',
        improveHeadPosition: 'よりプロフェッショナルな外観のために、頭を真っ直ぐにしてカメラと水平に保ちましょう。',
        improveSmile: '自信と親しみやすさを示す自然な笑顔を試してみてください。',
        naturalSmile: 'あなたの笑顔は非常に広く見えます - 一部のコンテキストでは、少しより控えめな笑顔の方がよりプロフェッショナルに見えるかもしれません。',
        improveEyeContact: 'より良いアイコンタクトを確立するために、カメラのレンズを直接見てください。',
        improveLighting: 'より良い照明条件で写真を撮りましょう - 前方からの自然な、拡散光が最も効果的です。',
        goodPhoto: '素晴らしい写真です！プロフィール写真のプロフェッショナルな基準を満たしています。'
    }
};