export default {
    name: '音频转SRT字幕 - 在线音频转字幕工具',
    description: '免费在线音频转SRT字幕工具，支持WAV、MP3、FLAC、OGG等多种音频格式转换为SRT字幕文件。通过音频能量检测自动识别语音段落，支持灵敏度调节、字幕时长设置、批量处理功能，适合视频字幕制作、播客转文字等场景。',
    inputTitle: '输入音频',
    outputTitle: '转换后的SRT字幕文件',
    dragTip: '拖放音频文件到这里或点击上传（支持批量）',
    supported: '支持的格式: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: '转换为SRT',
    converting: '正在转换...',
    downloadBtn: '下载SRT',
    batchDownload: '批量下载 (ZIP)',
    noOutput: '暂无转换结果',
    loadSample: '加载示例音频',
    preview: '预览音频',
    clearAll: '清除全部',
    previewBtn: '预览字幕',
    previewTitle: '字幕预览',
    subtitleCount: '字幕数量',
    duration: '时长',
    fileSize: '文件大小',
    
    // 设置选项
    settingsTitle: 'SRT转换设置',
    sensitivityLabel: '检测灵敏度',
    sensitivityHigh: '高灵敏度（适合低音量音频）',
    sensitivityMedium: '中等灵敏度（推荐）',
    sensitivityLow: '低灵敏度（适合高噪声音频）',
    
    maxDurationLabel: '最大字幕时长',
    maxDuration2: '2秒',
    maxDuration3: '3秒',
    maxDuration5: '5秒（推荐）',
    maxDuration10: '10秒',
    
    minSilenceLabel: '最小静音间隔',
    'minSilence0.3': '0.3秒（快速语速）',
    'minSilence0.5': '0.5秒（推荐）',
    'minSilence0.8': '0.8秒（正常语速）',
    'minSilence1.0': '1.0秒（慢速语速）',
    
    encodingLabel: '文件编码',
    
    // 提示信息
    tipsTitle: '使用小贴士',
    tipContent: '本工具通过分析音频能量来自动检测语音段落并生成SRT时间码。生成的字幕为占位文本，您可以后续在字幕编辑软件中替换为实际文字。建议使用清晰、背景噪音小的音频以获得更准确的时间码。',
    convertError: '转换失败，请检查音频格式或重试。',
    convertSuccess: '转换成功！',
    
    seoNote: '音频转SRT字幕工具、在线音频转字幕转换器、音频自动生成字幕、WAV转SRT、MP3转SRT、视频字幕制作工具',
};
