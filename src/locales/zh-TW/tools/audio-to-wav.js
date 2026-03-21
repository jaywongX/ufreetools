export default {
    name: '音訊轉WAV - 線上無損音訊格式轉換工具',
    description: '免費線上音訊轉WAV工具，支援MP3、FLAC、OGG、AAC、M4A、WMA等多種格式轉換為WAV無損格式。提供取樣率設定、位元深度選擇、批次處理功能，適合專業音訊製作、音訊編輯等場景。',
    inputTitle: '輸入音訊',
    outputTitle: '轉換後的WAV音訊',
    dragTip: '拖放音訊檔案到此處或點擊上傳（支援批次）',
    pasteTip: '或按 Ctrl+V (Cmd+V) 從剪貼簿貼上音訊檔案路徑',
    supported: '支援格式: MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: '轉換為WAV',
    converting: '轉換中...',
    downloadBtn: '下載WAV',
    batchDownload: '批次下載 (ZIP)',
    noOutput: '尚未有轉換結果',
    loadSample: '載入示例音訊',
    preview: '預覽音訊',
    clearAll: '清除全部',
    originalAudio: '原始音訊',
    deleteAudio: '刪除音訊',
    
    // 品質設定
    bitrateTitle: '位元深度設定',
    bitrateLabel: '位元深度: {bitrate} bit',
    bitrateSlider: '位元深度滑桿',
    bitrate16: '16 bit (CD品質)',
    bitrate24: '24 bit (專業品質)',
    bitrate32: '32 bit (錄音室品質)',
    
    // 取樣率設定
    sampleRateTitle: '取樣率設定',
    sampleRateLabel: '取樣率: {rate} Hz',
    sampleRateAuto: '自動（保持原始）',
    sampleRate44100: '44100 Hz (CD品質)',
    sampleRate48000: '48000 Hz (專業品質)',
    sampleRate22050: '22050 Hz (語音品質)',
    sampleRate96000: '96000 Hz (HD品質)',
    
    // 聲道設定
    channelTitle: '聲道設定',
    channelStereo: '立體聲',
    channelMono: '單聲道',
    channelAuto: '自動（保持原始）',
    
    // 音量設定
    volumeTitle: '音量設定',
    volumeLabel: '音量: {volume}%',
    volumeNormalize: '音量標準化',
    
    // 檔案資訊
    fileSizeEstimate: '預估檔案大小: {size}',
    duration: '時長: {duration}',
    originalFormat: '原始格式: {format}',
    originalSize: '原始大小: {size}',
    convertedSize: '轉換後大小: {size}',
    compressionRatio: '大小變化: {ratio}%',
    
    // 對比
    beforeAfterTitle: '轉換前後對比',
    beforeLabel: '原始音訊',
    afterLabel: 'WAV預覽',
    
    // 提示
    tipsTitle: '使用小貼士',
    tipContent: 'WAV是無損音訊格式，適合專業音訊製作和編輯。檔案較大但音質完美無損。建議用於音訊後期處理、音樂製作等需要高品質音訊的場景。',
    convertError: '轉換失敗，請檢查音訊格式或重試。',
    processingMultiple: '正在處理 {current}/{total} 個音訊...',
    convertSuccess: '轉換成功！',
    
    // 元資料
    metadataTitle: '元資料（可選）',
    metadataTitle2: '標題',
    metadataArtist: '藝術家',
    metadataAlbum: '專輯',
    metadataYear: '年份',
    metadataGenre: '流派',
    
    // 進階選項
    advancedTitle: '進階選項',
    trimAudio: '裁剪音訊',
    trimStart: '開始時間',
    trimEnd: '結束時間',
    fadeIn: '淡入',
    fadeOut: '淡出',
    
    seoNote: '音訊轉WAV工具、線上無損音訊格式轉換器、MP3轉WAV、FLAC轉WAV、專業音訊製作工具',
};
