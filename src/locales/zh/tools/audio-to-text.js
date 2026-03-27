export default {
    name: '音频转文本 - 在线音频转文本转换工具',
    description: '免费在线音频转文本工具，支持实时麦克风识别和音频文件识别。支持多种语言识别、批量处理功能，适合会议记录、语音转文字、字幕制作等场景。',
    inputTitle: '输入音频',
    outputTitle: '转换后的文本',
    dragTip: '拖放音频文件到这里或点击上传（支持批量）',
    supported: '支持的格式: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: '转换为文本',
    converting: '正在识别...',
    
    // 模式选择
    modeLabel: '输入模式',
    modeMicrophone: '麦克风实时识别',
    modeFile: '音频文件识别',
    
    // 麦克风模式
    startRecording: '开始录音',
    stopRecording: '停止录音',
    recording: '正在录音...',
    liveTranscript: '实时识别结果',
    noSpeechSupport: '您的浏览器不支持语音识别功能，请使用 Chrome、Edge 或 Safari 浏览器',
    microphonePermission: '请允许麦克风访问权限',
    waitingForSpeech: '等待语音输入...',
    speakNow: '请开始说话...',
    
    // 模式提示
    microphoneModeTip: '点击开始按钮后对着麦克风说话，语音将被实时转换为文本',
    fileModeTip: '上传音频文件，系统将自动识别并转换为文本',
    fileModePlayTip: '注意：识别过程中音频会播放一遍，请等待播放完成后查看结果',
    languageTip: '请选择与音频内容匹配的语言，否则可能无法正确识别',
    
    // 文件识别状态
    recognizing: '正在识别音频...',
    downloadBtn: '下载文本',
    downloadSrt: '下载SRT字幕',
    downloadTxt: '下载TXT文件',
    batchDownload: '批量下载 (ZIP)',
    noOutput: '暂无转换结果',
    loadSample: '加载示例音频',
    preview: '预览音频',
    clearAll: '清除全部',
    previewBtn: '预览',
    wordCount: '字数',
    duration: '时长',
    language: '识别语言',
    
    // 设置选项
    settingsTitle: '文本转换设置',
    languageLabel: '识别语言',
    languageAuto: '自动检测',
    languageZh: '中文',
    languageEn: '英语',
    languageJa: '日语',
    languageKo: '韩语',
    languageFr: '法语',
    languageDe: '德语',
    languageEs: '西班牙语',
    languageRu: '俄语',
    languagePt: '葡萄牙语',
    languageIt: '意大利语',
    languageAr: '阿拉伯语',
    languageHi: '印地语',
    
    outputFormatLabel: '输出格式',
    outputFormatTxt: '纯文本 (TXT)',
    outputFormatSrt: '字幕文件 (SRT)',
    outputFormatJson: 'JSON格式',
    
    showTimestamp: '显示时间戳',
    
    // 提示信息
    tipsTitle: '使用小贴士',
    tipContent: '音频转文本效果取决于音频质量和语言清晰度。清晰、无杂音、语速适中的音频转换效果最佳。建议使用高质量、无背景噪音的音频文件。对于多语言混合音频，建议选择主要语言。',
    convertError: '转换失败，请检查音频格式或重试。',
    convertSuccess: '转换成功！',
    copied: '已复制到剪贴板',
    copyBtn: '复制文本',
    
    seoNote: '音频转文本工具、在线音频转文本转换器、WAV转文本、MP3转文本、语音识别工具',
};
