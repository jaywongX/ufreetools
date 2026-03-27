export default {
    name: '音声からテキスト - オンライン音声テキスト変換ツール',
    description: 'リアルタイムマイク認識と音声ファイル認識をサポートする無料オンライン音声テキスト変換ツール。多言語認識とバッチ処理機能をサポート。',
    inputTitle: '音声入力',
    outputTitle: '変換されたテキスト',
    dragTip: '音声ファイルをここにドラッグ＆ドロップするか、クリックしてアップロード（バッチ対応）',
    supported: '対応フォーマット: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'テキストに変換',
    converting: '認識中...',
    
    // 入力モード
    modeLabel: '入力モード',
    modeMicrophone: 'マイクリアルタイム',
    modeFile: '音声ファイル',
    
    // マイクモード
    startRecording: '録音開始',
    stopRecording: '録音停止',
    recording: '録音中...',
    liveTranscript: 'リアルタイム認識結果',
    noSpeechSupport: 'お使いのブラウザは音声認識に対応していません。Chrome、Edge、Safariをご使用ください',
    microphonePermission: 'マイクへのアクセスを許可してください',
    waitingForSpeech: '音声入力を待機中...',
    speakNow: '話し始めてください...',
    
    // モードのヒント
    microphoneModeTip: '開始ボタンをクリックしてマイクに向かって話すと、リアルタイムでテキストに変換されます',
    fileModeTip: '音声ファイルをアップロードすると、自動的に認識されてテキストに変換されます',
    fileModePlayTip: '注意：認識中に音声が1回再生されます。再生が完了するまでお待ちください',
    languageTip: '音声コンテンツに合った言語を選択してください。そうしないと認識が失敗する可能性があります',
    
    // 認識状態
    recognizing: '音声を認識中...',
    downloadBtn: 'テキストをダウンロード',
    downloadSrt: 'SRT字幕をダウンロード',
    downloadTxt: 'TXTファイルをダウンロード',
    batchDownload: '一括ダウンロード (ZIP)',
    noOutput: '変換結果はまだありません',
    loadSample: 'サンプル音声を読み込む',
    preview: '音声をプレビュー',
    clearAll: 'すべてクリア',
    previewBtn: 'プレビュー',
    wordCount: '文字数',
    duration: '再生時間',
    language: '認識言語',
    
    // Settings
    settingsTitle: 'テキスト変換設定',
    languageLabel: '認識言語',
    languageAuto: '自動検出',
    languageZh: '中国語',
    languageEn: '英語',
    languageJa: '日本語',
    languageKo: '韓国語',
    languageFr: 'フランス語',
    languageDe: 'ドイツ語',
    languageEs: 'スペイン語',
    languageRu: 'ロシア語',
    languagePt: 'ポルトガル語',
    languageIt: 'イタリア語',
    languageAr: 'アラビア語',
    languageHi: 'ヒンディー語',
    
    outputFormatLabel: '出力フォーマット',
    outputFormatTxt: 'プレーンテキスト (TXT)',
    outputFormatSrt: '字幕ファイル (SRT)',
    outputFormatJson: 'JSONフォーマット',
    
    showTimestamp: 'タイムスタンプを表示',
    
    // Tips
    tipsTitle: 'ヒント',
    tipContent: '音声テキスト変換の品質は音声の明瞭さと話し方に依存します。クリアでノイズのない、適度な話速の音声が最良の結果をもたらします。背景ノイズのない高品質な音声ファイルの使用をお勧めします。',
    convertError: '変換に失敗しました。音声フォーマットを確認するか、再試行してください。',
    convertSuccess: '変換成功！',
    copied: 'クリップボードにコピーしました',
    copyBtn: 'テキストをコピー',
    
    seoNote: '音声テキスト変換ツール、オンライン音声テキストコンバーター、WAVからテキスト、MP3からテキスト、音声認識ツール',
};
