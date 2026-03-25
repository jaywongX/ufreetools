export default {
    name: '音频转AAC - 在线音频转AAC转换工具',
    description: '免费在线音频转AAC工具，支持WAV、MP3、FLAC、OGG、M4A、WMA等多种格式转换为AAC格式。提供比特率调节、采样率设置、批量处理功能，适合音乐存储、移动设备播放等场景。',
    inputTitle: '输入音频',
    outputTitle: '转换后的AAC音频',
    dragTip: '拖放音频文件到这里或点击上传（支持批量）',
    pasteTip: '或按Ctrl+V（Cmd+V）粘贴剪贴板音频文件路径',
    supported: '支持的格式: WAV, MP3, FLAC, OGG, M4A, WMA, AMR, AIFF, APE',
    convertBtn: '转换为AAC',
    converting: '正在转换...',
    downloadBtn: '下载AAC',
    batchDownload: '批量下载 (ZIP)',
    noOutput: '暂无转换结果',
    loadSample: '加载示例音频',
    preview: '预览音频',
    clearAll: '清除全部',
    originalAudio: '原始音频',
    deleteAudio: '删除音频',
    
    // 比特率设置
    bitrateTitle: '比特率设置',
    bitrateLabel: '比特率: {bitrate} kbps',
    bitrateDesc: '比特率越高，音质越好，文件越大。推荐128kbps以上获得良好音质。',
    'bitrate64': '64 kbps (低质量)',
    'bitrate96': '96 kbps (标准质量)',
    'bitrate128': '128 kbps (推荐)',
    'bitrate192': '192 kbps (高质量)',
    'bitrate256': '256 kbps (极高质量)',
    'bitrate320': '320 kbps (最高质量)',
    
    // 采样率设置
    sampleRateTitle: '采样率设置',
    sampleRateLabel: '采样率: {rate} Hz',
    sampleRateAuto: '自动（保持原始）',
    sampleRate44100: '44100 Hz (CD音质)',
    sampleRate48000: '48000 Hz (专业音质)',
    sampleRate96000: '96000 Hz (高清音质)',
    
    // 声道设置
    channelTitle: '声道设置',
    channelStereo: '立体声',
    channelMono: '单声道',
    channelAuto: '自动（保持原始）',
    
    // 文件信息
    fileSizeEstimate: '预估文件大小: {size}',
    duration: '时长: {duration}',
    originalFormat: '原始格式: {format}',
    originalSize: '原始大小: {size}',
    convertedSize: '转换后大小: {size}',
    
    // 对比
    beforeAfterTitle: '转换前后对比',
    beforeLabel: '原始音频',
    afterLabel: 'AAC预览',
    
    // 提示信息
    tipsTitle: '使用小贴士',
    tipContent: 'AAC是目前最高效的有损音频编码格式之一，在相同比特率下音质优于MP3。适合移动设备播放、网络传输和音乐存储。推荐使用128kbps以上比特率获得良好音质体验。',
    convertError: '转换失败，请检查音频格式或重试。',
    processingMultiple: '正在处理 {current}/{total} 个音频...',
    convertSuccess: '转换成功！',
    
    // 高级选项
    advancedTitle: '高级选项',
    trimAudio: '裁剪音频',
    trimStart: '开始时间',
    trimEnd: '结束时间',
    fadeIn: '淡入',
    fadeOut: '淡出',
    
    seoNote: '音频转AAC工具、在线音频转AAC转换器、WAV转AAC、MP3转AAC、音频格式转换',
};
