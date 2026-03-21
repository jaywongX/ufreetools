export default {
    name: '音频转WAV - 在线无损音频格式转换工具',
    description: '免费在线音频转WAV工具，支持MP3、FLAC、OGG、AAC、M4A、WMA等多种格式转换为WAV无损格式。提供采样率设置、位深度选择、批量处理功能，适合专业音频制作、音频编辑等场景。',
    inputTitle: '输入音频',
    outputTitle: '转换后的WAV音频',
    dragTip: '拖放音频文件到这里或点击上传（支持批量）',
    pasteTip: '或按Ctrl+V（Cmd+V）粘贴剪贴板音频文件路径',
    supported: '支持的格式: MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: '转换为WAV',
    converting: '正在转换...',
    downloadBtn: '下载WAV',
    batchDownload: '批量下载 (ZIP)',
    noOutput: '暂无转换结果',
    loadSample: '加载示例音频',
    preview: '预览音频',
    clearAll: '清除全部',
    originalAudio: '原始音频',
    deleteAudio: '删除音频',
    
    // 质量设置
    bitrateTitle: '位深度设置',
    bitrateLabel: '位深度: {bitrate} bit',
    bitrateSlider: '位深度滑块',
    bitrate16: '16 bit (CD音质)',
    bitrate24: '24 bit (专业音质)',
    bitrate32: '32 bit (录音室音质)',
    
    // 采样率设置
    sampleRateTitle: '采样率设置',
    sampleRateLabel: '采样率: {rate} Hz',
    sampleRateAuto: '自动（保持原始）',
    sampleRate44100: '44100 Hz (CD音质)',
    sampleRate48000: '48000 Hz (专业音质)',
    sampleRate22050: '22050 Hz (语音质量)',
    sampleRate96000: '96000 Hz (高清音质)',
    
    // 声道设置
    channelTitle: '声道设置',
    channelStereo: '立体声',
    channelMono: '单声道',
    channelAuto: '自动（保持原始）',
    
    // 音量设置
    volumeTitle: '音量设置',
    volumeLabel: '音量: {volume}%',
    volumeNormalize: '音量标准化',
    
    // 文件信息
    fileSizeEstimate: '预估文件大小: {size}',
    duration: '时长: {duration}',
    originalFormat: '原始格式: {format}',
    originalSize: '原始大小: {size}',
    convertedSize: '转换后大小: {size}',
    compressionRatio: '大小变化: {ratio}%',
    
    // 对比
    beforeAfterTitle: '转换前后对比',
    beforeLabel: '原始音频',
    afterLabel: 'WAV预览',
    
    // 提示信息
    tipsTitle: '使用小贴士',
    tipContent: 'WAV是无损音频格式，适合专业音频制作和编辑。文件较大但音质完美无损。建议用于音频后期处理、音乐制作等需要高品质音频的场景。',
    convertError: '转换失败，请检查音频格式或重试。',
    processingMultiple: '正在处理 {current}/{total} 个音频...',
    convertSuccess: '转换成功！',
    
    // 元数据
    metadataTitle: '元数据（可选）',
    metadataTitle2: '标题',
    metadataArtist: '艺术家',
    metadataAlbum: '专辑',
    metadataYear: '年份',
    metadataGenre: '流派',
    
    // 高级选项
    advancedTitle: '高级选项',
    trimAudio: '裁剪音频',
    trimStart: '开始时间',
    trimEnd: '结束时间',
    fadeIn: '淡入',
    fadeOut: '淡出',
    
    seoNote: '音频转WAV工具、在线无损音频格式转换器、MP3转WAV、FLAC转WAV、专业音频制作工具',
};
