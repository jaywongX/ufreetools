export default {
    name: '音频转MP3 - 在线音频格式转换工具',
    description: '免费在线音频转MP3工具，支持WAV、FLAC、OGG、AAC、M4A、WMA等多种格式转换为MP3。提供比特率调节、采样率设置、批量处理功能，适合音乐转换、音频压缩等场景。',
    inputTitle: '输入音频',
    outputTitle: '转换后的MP3音频',
    dragTip: '拖放音频文件到这里或点击上传（支持批量）',
    pasteTip: '或按Ctrl+V（Cmd+V）粘贴剪贴板音频文件路径',
    supported: '支持的格式: WAV, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: '转换为MP3',
    converting: '正在转换...',
    downloadBtn: '下载MP3',
    batchDownload: '批量下载 (ZIP)',
    noOutput: '暂无转换结果',
    loadSample: '加载示例音频',
    preview: '预览音频',
    clearAll: '清除全部',
    originalAudio: '原始音频',
    deleteAudio: '删除音频',
    
    // 质量设置
    bitrateTitle: 'MP3比特率设置',
    bitrateLabel: '比特率: {bitrate} kbps',
    bitrateSlider: '比特率滑块',
    bitrate128: '128 kbps (标准质量)',
    bitrate192: '192 kbps (高质量)',
    bitrate256: '256 kbps (优质)',
    bitrate320: '320 kbps (最高质量)',
    
    // 采样率设置
    sampleRateTitle: '采样率设置',
    sampleRateLabel: '采样率: {rate} Hz',
    sampleRateAuto: '自动（保持原始）',
    sampleRate44100: '44100 Hz (CD音质)',
    sampleRate48000: '48000 Hz (专业音质)',
    sampleRate22050: '22050 Hz (语音质量)',
    
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
    compressionRatio: '压缩比: {ratio}%',
    
    // 对比
    beforeAfterTitle: '转换前后对比',
    beforeLabel: '原始音频',
    afterLabel: 'MP3预览',
    
    // 提示信息
    tipsTitle: '使用小贴士',
    tipContent: 'MP3格式适合音乐和语音音频，比特率越高音质越好但文件也越大。建议根据用途选择合适比特率：语音128kbps，音乐192-256kbps，高保真320kbps。',
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
    
    seoNote: '音频转MP3工具、在线音频格式转换器、WAV转MP3、FLAC转MP3、音频压缩工具',
};
