export default {
    name: '音頻轉FLAC - 在線音頻轉FLAC無損轉換工具',
    description: '免費在線音頻轉FLAC工具，支持WAV、MP3、OGG、AAC、M4A、WMA等多種格式轉換為FLAC無損格式。提供壓縮級別調節、采樣率設置、批量處理功能，適合音樂歸檔、高保真音頻存儲等場景。',
    inputTitle: '輸入音頻',
    outputTitle: '轉換后的FLAC音頻',
    dragTip: '拖放音頻文件到這里或點擊上傳（支持批量）',
    pasteTip: '或按Ctrl+V（Cmd+V）粘貼剪貼板音頻文件路徑',
    supported: '支持的格式: WAV, MP3, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: '轉換為FLAC',
    converting: '正在轉換...',
    downloadBtn: '下載FLAC',
    batchDownload: '批量下載 (ZIP)',
    noOutput: '暫無轉換結果',
    loadSample: '加載示例音頻',
    preview: '預覽音頻',
    clearAll: '清除全部',
    originalAudio: '原始音頻',
    deleteAudio: '刪除音頻',
    
    // 壓縮級別設置
    compressionTitle: 'FLAC壓縮級別設置',
    compressionLabel: '壓縮級別: {level}',
    compressionDesc: '壓縮級別越高，文件越小，但壓縮時間越長。音質保持無損。',
    'compressionLevel0': '級別 0 (最快壓縮)',
    'compressionLevel1': '級別 1',
    'compressionLevel2': '級別 2',
    'compressionLevel3': '級別 3',
    'compressionLevel4': '級別 4',
    'compressionLevel5': '級別 5 (推薦)',
    'compressionLevel6': '級別 6',
    'compressionLevel7': '級別 7',
    'compressionLevel8': '級別 8 (最大壓縮)',
    
    // 采樣率設置
    sampleRateTitle: '采樣率設置',
    sampleRateLabel: '采樣率: {rate} Hz',
    sampleRateAuto: '自動（保持原始）',
    sampleRate44100: '44100 Hz (CD音質)',
    sampleRate48000: '48000 Hz (專業音質)',
    sampleRate96000: '96000 Hz (高清音質)',
    sampleRate192000: '192000 Hz (錄音室音質)',
    
    // 位深度設置
    bitDepthTitle: '位深度設置',
    bitDepthLabel: '位深度: {depth} bit',
    bitDepthAuto: '自動（保持原始）',
    bitDepth16: '16 bit (CD標準)',
    bitDepth24: '24 bit (高清音頻)',
    bitDepth32: '32 bit (錄音室級別)',
    
    // 聲道設置
    channelTitle: '聲道設置',
    channelStereo: '立體聲',
    channelMono: '單聲道',
    channelAuto: '自動（保持原始）',
    
    // 文件信息
    fileSizeEstimate: '預估文件大小: {size}',
    duration: '時長: {duration}',
    originalFormat: '原始格式: {format}',
    originalSize: '原始大小: {size}',
    convertedSize: '轉換后大小: {size}',
    compressionRatio: '壓縮比: {ratio}%',
    
    // 對比
    beforeAfterTitle: '轉換前后對比',
    beforeLabel: '原始音頻',
    afterLabel: 'FLAC預覽',
    
    // 提示信息
    tipsTitle: '使用小貼士',
    tipContent: 'FLAC是無損壓縮格式，音質與原始音頻完全一致，但文件體積可減少30-60%。適合音樂歸檔、高保真音頻存儲。建議使用壓縮級別5，在壓縮率和速度之間取得平衡。',
    convertError: '轉換失敗，請檢查音頻格式或重試。',
    processingMultiple: '正在處理 {current}/{total} 個音頻...',
    convertSuccess: '轉換成功！',
    
    // 高級選項
    advancedTitle: '高級選項',
    trimAudio: '裁剪音頻',
    trimStart: '開始時間',
    trimEnd: '結束時間',
    fadeIn: '淡入',
    fadeOut: '淡出',
    
    seoNote: '音頻轉FLAC工具、在線音頻轉FLAC轉換器、WAV轉FLAC、MP3轉FLAC、無損音頻轉換',
};
