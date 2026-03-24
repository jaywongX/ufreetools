export default {
    name: '音声からSRT字幕へ変換 - オンライン音声字幕変換ツール',
    description: '無料のオンライン音声からSRT字幕への変換ツール。WAV、MP3、FLAC、OGGなど多种の音声フォーマットをSRT字幕ファイルに変換します。音声エネルギー検出により音声区間を自動識別し、感度調整、字幕時間設定、バッチ処理をサポート。動画字幕制作、ポッドキャスト書き起こしなどに最適です。',
    inputTitle: '音声入力',
    outputTitle: '変換後のSRT字幕ファイル',
    dragTip: '音声ファイルをここにドラッグ＆ドロップするか、クリックしてアップロード（バッチ対応）',
    supported: '対応形式: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'SRTに変換',
    converting: '変換中...',
    downloadBtn: 'SRTをダウンロード',
    batchDownload: '一括ダウンロード (ZIP)',
    noOutput: '変換結果がありません',
    loadSample: 'サンプル音声を読み込む',
    preview: '音声をプレビュー',
    clearAll: 'すべてクリア',
    previewBtn: '字幕をプレビュー',
    previewTitle: '字幕プレビュー',
    subtitleCount: '字幕数',
    duration: '再生時間',
    fileSize: 'ファイルサイズ',
    
    // 設定オプション
    settingsTitle: 'SRT変換設定',
    sensitivityLabel: '検出感度',
    sensitivityHigh: '高感度（低音量の音声に適しています）',
    sensitivityMedium: '中感度（推奨）',
    sensitivityLow: '低感度（高ノイズの音声に適しています）',
    
    maxDurationLabel: '最大字幕時間',
    maxDuration2: '2秒',
    maxDuration3: '3秒',
    maxDuration5: '5秒（推奨）',
    maxDuration10: '10秒',
    
    minSilenceLabel: '最小無音間隔',
    'minSilence03': '0.3秒（速い話速）',
    'minSilence05': '0.5秒（推奨）',
    'minSilence08': '0.8秒（通常の話速）',
    'minSilence10': '1.0秒（遅い話速）',
    
    encodingLabel: 'ファイルエンコーディング',
    
    // ヒント
    tipsTitle: '使い方のヒント',
    tipContent: 'このツールは音声エネルギーを分析して音声区間を自動検出し、SRTタイムコードを生成します。生成される字幕はプレースホルダーテキストで、後で字幕編集ソフトで実際のテキストに置き換えることができます。クリアでバックグラウンドノイズの少ない音声を使用すると、より正確なタイムコードが得られます。',
    convertError: '変換に失敗しました。音声フォーマットを確認するか、もう一度お試しください。',
    convertSuccess: '変換が完了しました！',
    
    seoNote: '音声からSRT字幕への変換ツール、オンライン音声字幕変換、音声から字幕を自動生成、WAVからSRT、MP3からSRT、動画字幕制作ツール',
};
