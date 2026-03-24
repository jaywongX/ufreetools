export default {
    name: '音频转FLAC - 在线音频转FLAC无损转换工具',
    description: '免费在线音频转FLAC工具，支持WAV、MP3、OGG、AAC、M4A、WMA等多种格式转换为FLAC无损格式。提供压缩级别调节、采样率设置、批量处理功能，适合音乐归档、高保真音频存储等场景。',
    inputTitle: '输入音频',
    outputTitle: '转换后的FLAC音频',
    dragTip: '拖放音频文件到这里或点击上传（支持批量）',
    pasteTip: '或按Ctrl+V（Cmd+V）粘贴剪贴板音频文件路径',
    supported: '支持的格式: WAV, MP3, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: '转换为FLAC',
    converting: '正在转换...',
    downloadBtn: '下载FLAC',
    batchDownload: '批量下载 (ZIP)',
    noOutput: '暂无转换结果',
    loadSample: '加载示例音频',
    preview: '预览音频',
    clearAll: '清除全部',
    originalAudio: '原始音频',
    deleteAudio: '删除音频',
    
    // 压缩级别设置
    compressionTitle: 'FLAC压缩级别设置',
    compressionLabel: '压缩级别: {level}',
    compressionDesc: '压缩级别越高，文件越小，但压缩时间越长。音质保持无损。',
    'compressionLevel0': '级别 0 (最快压缩)',
    'compressionLevel1': '级别 1',
    'compressionLevel2': '级别 2',
    'compressionLevel3': '级别 3',
    'compressionLevel4': '级别 4',
    'compressionLevel5': '级别 5 (推荐)',
    'compressionLevel6': '级别 6',
    'compressionLevel7': '级别 7',
    'compressionLevel8': '级别 8 (最大压缩)',
    
    // 采样率设置
    sampleRateTitle: '采样率设置',
    sampleRateLabel: '采样率: {rate} Hz',
    sampleRateAuto: '自动（保持原始）',
    sampleRate44100: '44100 Hz (CD音质)',
    sampleRate48000: '48000 Hz (专业音质)',
    sampleRate96000: '96000 Hz (高清音质)',
    sampleRate192000: '192000 Hz (录音室音质)',
    
    // 位深度设置
    bitDepthTitle: '位深度设置',
    bitDepthLabel: '位深度: {depth} bit',
    bitDepthAuto: '自动（保持原始）',
    bitDepth16: '16 bit (CD标准)',
    bitDepth24: '24 bit (高清音频)',
    bitDepth32: '32 bit (录音室级别)',
    
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
    compressionRatio: '压缩比: {ratio}%',
    
    // 对比
    beforeAfterTitle: '转换前后对比',
    beforeLabel: '原始音频',
    afterLabel: 'FLAC预览',
    
    // 提示信息
    tipsTitle: '使用小贴士',
    tipContent: 'FLAC是无损压缩格式，音质与原始音频完全一致，但文件体积可减少30-60%。适合音乐归档、高保真音频存储。建议使用压缩级别5，在压缩率和速度之间取得平衡。',
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
    
    seoNote: '音频转FLAC工具、在线音频转FLAC转换器、WAV转FLAC、MP3转FLAC、无损音频转换',
};
