export default {
    name: 'オーディオをPCMに変換 - オンラインオーディオフォーマット変換ツール',
    description: '無料オンラインオーディオからPCMツール。WAV、MP3、FLAC、OGG、AAC、M4Aなど複数のフォーマットをPCM生オーディオデータに変換。サンプリングレート設定、チャンネル選択、一括処理に対応。音声認識やオーディオ分析に最適。',
    inputTitle: '入力オーディオ',
    outputTitle: '変換後のPCMオーディオ',
    dragTip: 'オーディオファイルをここにドラッグ＆ドロップまたはクリックしてアップロード（一括対応）',
    pasteTip: 'またはCtrl+V（Cmd+V）でクリップボードのオーディオファイルパスを貼り付け',
    supported: '対応フォーマット: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'PCMに変換',
    converting: '変換中...',
    downloadBtn: 'PCMをダウンロード',
    batchDownload: '一括ダウンロード (ZIP)',
    noOutput: '変換結果なし',
    loadSample: 'サンプルオーディオを読み込み',
    preview: 'オーディオプレビュー',
    clearAll: 'すべてクリア',
    originalAudio: '元のオーディオ',
    deleteAudio: 'オーディオを削除',
    
    sampleRateTitle: 'サンプリングレート設定',
    sampleRateLabel: 'サンプリングレート: {rate} Hz',
    sampleRate8000: '8000 Hz (電話品質)',
    sampleRate16000: '16000 Hz (音声認識)',
    sampleRate22050: '22050 Hz (音声品質)',
    sampleRate44100: '44100 Hz (CD品質)',
    sampleRate48000: '48000 Hz (プロ品質)',
    
    channelTitle: 'チャンネル設定',
    channelStereo: 'ステレオ',
    channelMono: 'モノラル',
    
    bitDepthTitle: 'ビット深度設定',
    bitDepth8: '8ビット (低品質)',
    bitDepth16: '16ビット (標準)',
    bitDepth24: '24ビット (高品質)',
    bitDepth32: '32ビット (プロ)',
    
    volumeTitle: '音量設定',
    volumeLabel: '音量: {volume}%',
    
    fileSizeEstimate: '推定ファイルサイズ: {size}',
    duration: '再生時間: {duration}',
    originalFormat: '元のフォーマット: {format}',
    originalSize: '元のサイズ: {size}',
    convertedSize: '変換後のサイズ: {size}',
    
    tipsTitle: 'ヒント',
    tipContent: 'PCMフォーマットは非圧縮の生オーディオデータで、音声認識、オーディオ分析、プロオーディオ処理に使用されます。音声認識には16ビット、16000Hzが標準；一般的なオーディオには44100Hz、16ビット；プロオーディオ制作には48000Hz、24ビットを推奨。',
    convertError: '変換失敗、オーディオフォーマットを確認するか再試行してください。',
    processingMultiple: '{current}/{total}個のオーディオファイルを処理中...',
    convertSuccess: '変換成功！',
    
    pcmFormatTitle: 'PCMフォーマットオプション',
    signedFormat: '符号付きフォーマット',
    unsignedFormat: '符号なしフォーマット',
    littleEndian: 'リトルエンディアン',
    bigEndian: 'ビッグエンディアン',
    
    // メタデータ
    metadataTitle: 'メタデータ（オプション）',
    metadataTitle2: 'タイトル',
    metadataArtist: 'アーティスト',
    
    // 詳細オプション
    advancedTitle: '詳細オプション',
    trimAudio: 'オーディオをトリミング',
    trimStart: '開始時間',
    trimEnd: '終了時間',
    
    seoNote: 'オーディオからPCMツール、オンラインオーディオフォーマット変換、WAVからPCM、MP3からPCM、音声認識オーディオ前処理',
};
