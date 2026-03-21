export default {
    name: '音频转PCM - 在线音频格式转换工具',
    description: '免费在线音频转PCM工具，支持WAV、MP3、FLAC、OGG、AAC、M4A等多种格式转换为PCM原始音频数据。提供采样率设置、声道选择、批量处理功能，适合语音识别、音频分析等场景。',
    inputTitle: '输入音频',
    outputTitle: '转换后的PCM音频',
    dragTip: '拖放音频文件到这里或点击上传（支持批量）',
    pasteTip: '或按Ctrl+V（Cmd+V）粘贴剪贴板音频文件路径',
    supported: '支持的格式: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: '转换为PCM',
    converting: '正在转换...',
    downloadBtn: '下载PCM',
    batchDownload: '批量下载 (ZIP)',
    noOutput: '暂无转换结果',
    loadSample: '加载示例音频',
    preview: '预览音频',
    clearAll: '清除全部',
    originalAudio: '原始音频',
    deleteAudio: '删除音频',
    
    // 质量设置
    sampleRateTitle: '采样率设置',
    sampleRateLabel: '采样率: {rate} Hz',
    sampleRate8000: '8000 Hz (电话质量)',
    sampleRate16000: '16000 Hz (语音识别)',
    sampleRate22050: '22050 Hz (语音质量)',
    sampleRate44100: '44100 Hz (CD音质)',
    sampleRate48000: '48000 Hz (专业音质)',
    
    // 声道设置
    channelTitle: '声道设置',
    channelStereo: '立体声',
    channelMono: '单声道',
    
    // 位深度设置
    bitDepthTitle: '位深度设置',
    bitDepth8: '8位 (低质量)',
    bitDepth16: '16位 (标准)',
    bitDepth24: '24位 (高质量)',
    bitDepth32: '32位 (专业)',
    
    // 音量设置
    volumeTitle: '音量设置',
    volumeLabel: '音量: {volume}%',
    
    // 文件信息
    fileSizeEstimate: '预估文件大小: {size}',
    duration: '时长: {duration}',
    originalFormat: '原始格式: {format}',
    originalSize: '原始大小: {size}',
    convertedSize: '转换后大小: {size}',
    
    // 提示信息
    tipsTitle: '使用小贴士',
    tipContent: 'PCM格式是未经压缩的原始音频数据，常用于语音识别、音频分析和专业音频处理。16位、16000Hz采样率是语音识别的标准配置；44100Hz、16位适合一般音频处理；48000Hz、24位适合专业音频制作。',
    convertError: '转换失败，请检查音频格式或重试。',
    processingMultiple: '正在处理 {current}/{total} 个音频...',
    convertSuccess: '转换成功！',
    
    // PCM特有选项
    pcmFormatTitle: 'PCM格式选项',
    signedFormat: '有符号格式',
    unsignedFormat: '无符号格式',
    littleEndian: '小端序',
    bigEndian: '大端序',
    
    // 元数据
    metadataTitle: '元数据（可选）',
    metadataTitle2: '标题',
    metadataArtist: '艺术家',
    
    // 高级选项
    advancedTitle: '高级选项',
    trimAudio: '裁剪音频',
    trimStart: '开始时间',
    trimEnd: '结束时间',
    
    seoNote: '音频转PCM工具、在线音频格式转换器、WAV转PCM、MP3转PCM、语音识别音频预处理',
};
