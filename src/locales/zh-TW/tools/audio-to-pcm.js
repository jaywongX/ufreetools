export default {
    name: '音訊轉PCM - 線上音訊格式轉換工具',
    description: '免費線上音訊轉PCM工具，支援WAV、MP3、FLAC、OGG、AAC、M4A等多種格式轉換為PCM原始音訊資料。提供取樣率設定、聲道選擇、批次處理功能，適合語音識別、音訊分析等場景。',
    inputTitle: '輸入音訊',
    outputTitle: '轉換後的PCM音訊',
    dragTip: '拖放音訊檔案到這裡或點擊上傳（支援批次）',
    pasteTip: '或按Ctrl+V（Cmd+V）貼上剪貼簿音訊檔案路徑',
    supported: '支援的格式: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: '轉換為PCM',
    converting: '正在轉換...',
    downloadBtn: '下載PCM',
    batchDownload: '批次下載 (ZIP)',
    noOutput: '暫無轉換結果',
    loadSample: '載入範例音訊',
    preview: '預覽音訊',
    clearAll: '清除全部',
    originalAudio: '原始音訊',
    deleteAudio: '刪除音訊',
    
    // 取樣率設定
    sampleRateTitle: '取樣率設定',
    sampleRateLabel: '取樣率: {rate} Hz',
    sampleRate8000: '8000 Hz (電話品質)',
    sampleRate16000: '16000 Hz (語音識別)',
    sampleRate22050: '22050 Hz (語音品質)',
    sampleRate44100: '44100 Hz (CD品質)',
    sampleRate48000: '48000 Hz (專業品質)',
    
    // 聲道設定
    channelTitle: '聲道設定',
    channelStereo: '立體聲',
    channelMono: '單聲道',
    
    // 位元深度設定
    bitDepthTitle: '位元深度設定',
    bitDepth8: '8位元 (低品質)',
    bitDepth16: '16位元 (標準)',
    bitDepth24: '24位元 (高品質)',
    bitDepth32: '32位元 (專業)',
    
    // 音量設定
    volumeTitle: '音量設定',
    volumeLabel: '音量: {volume}%',
    
    // 檔案資訊
    fileSizeEstimate: '預估檔案大小: {size}',
    duration: '時長: {duration}',
    originalFormat: '原始格式: {format}',
    originalSize: '原始大小: {size}',
    convertedSize: '轉換後大小: {size}',
    
    // 提示資訊
    tipsTitle: '使用小技巧',
    tipContent: 'PCM格式是未經壓縮的原始音訊資料，常用於語音識別、音訊分析和專業音訊處理。16位元、16000Hz取樣率是語音識別的標準配置；44100Hz、16位元適合一般音訊處理；48000Hz、24位元適合專業音訊製作。',
    convertError: '轉換失敗，請檢查音訊格式或重試。',
    processingMultiple: '正在處理 {current}/{total} 個音訊...',
    convertSuccess: '轉換成功！',
    
    // PCM特有選項
    pcmFormatTitle: 'PCM格式選項',
    signedFormat: '有符號格式',
    unsignedFormat: '無符號格式',
    littleEndian: '小端序',
    bigEndian: '大端序',
    
    // 元資料
    metadataTitle: '元資料（可選）',
    metadataTitle2: '標題',
    metadataArtist: '藝術家',
    
    // 進階選項
    advancedTitle: '進階選項',
    trimAudio: '裁剪音訊',
    trimStart: '開始時間',
    trimEnd: '結束時間',
    
    seoNote: '音訊轉PCM工具、線上音訊格式轉換器、WAV轉PCM、MP3轉PCM、語音識別音訊預處理',
};
