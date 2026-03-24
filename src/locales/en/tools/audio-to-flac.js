export default {
    name: 'Audio to FLAC - Online Audio to FLAC Lossless Converter',
    description: 'Free online audio to FLAC tool. Convert WAV, MP3, OGG, AAC, M4A, WMA and more to FLAC lossless format. Features compression level adjustment, sample rate settings, and batch processing. Perfect for music archiving and high-fidelity audio storage.',
    inputTitle: 'Input Audio',
    outputTitle: 'Converted FLAC Audio',
    dragTip: 'Drag and drop audio files here or click to upload (batch supported)',
    pasteTip: 'Or press Ctrl+V (Cmd+V) to paste clipboard audio file path',
    supported: 'Supported formats: WAV, MP3, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'Convert to FLAC',
    converting: 'Converting...',
    downloadBtn: 'Download FLAC',
    batchDownload: 'Batch Download (ZIP)',
    noOutput: 'No conversion results yet',
    loadSample: 'Load Sample Audio',
    preview: 'Preview Audio',
    clearAll: 'Clear All',
    originalAudio: 'Original Audio',
    deleteAudio: 'Delete Audio',
    
    // Compression level settings
    compressionTitle: 'FLAC Compression Level Settings',
    compressionLabel: 'Compression Level: {level}',
    compressionDesc: 'Higher compression levels produce smaller files but take longer. Audio quality remains lossless.',
    'compressionLevel0': 'Level 0 (Fastest compression)',
    'compressionLevel1': 'Level 1',
    'compressionLevel2': 'Level 2',
    'compressionLevel3': 'Level 3',
    'compressionLevel4': 'Level 4',
    'compressionLevel5': 'Level 5 (Recommended)',
    'compressionLevel6': 'Level 6',
    'compressionLevel7': 'Level 7',
    'compressionLevel8': 'Level 8 (Maximum compression)',
    
    // Sample rate settings
    sampleRateTitle: 'Sample Rate Settings',
    sampleRateLabel: 'Sample Rate: {rate} Hz',
    sampleRateAuto: 'Auto (Keep original)',
    sampleRate44100: '44100 Hz (CD quality)',
    sampleRate48000: '48000 Hz (Professional quality)',
    sampleRate96000: '96000 Hz (HD quality)',
    sampleRate192000: '192000 Hz (Studio quality)',
    
    // Bit depth settings
    bitDepthTitle: 'Bit Depth Settings',
    bitDepthLabel: 'Bit Depth: {depth} bit',
    bitDepthAuto: 'Auto (Keep original)',
    bitDepth16: '16 bit (CD standard)',
    bitDepth24: '24 bit (HD audio)',
    bitDepth32: '32 bit (Studio grade)',
    
    // Channel settings
    channelTitle: 'Channel Settings',
    channelStereo: 'Stereo',
    channelMono: 'Mono',
    channelAuto: 'Auto (Keep original)',
    
    // File information
    fileSizeEstimate: 'Estimated file size: {size}',
    duration: 'Duration: {duration}',
    originalFormat: 'Original format: {format}',
    originalSize: 'Original size: {size}',
    convertedSize: 'Converted size: {size}',
    compressionRatio: 'Compression ratio: {ratio}%',
    
    // Comparison
    beforeAfterTitle: 'Before and After Comparison',
    beforeLabel: 'Original Audio',
    afterLabel: 'FLAC Preview',
    
    // Tips
    tipsTitle: 'Tips',
    tipContent: 'FLAC is a lossless compression format with identical audio quality to the original, but 30-60% smaller file size. Ideal for music archiving and high-fidelity audio storage. Compression level 5 is recommended for the best balance between compression ratio and speed.',
    convertError: 'Conversion failed. Please check the audio format or try again.',
    processingMultiple: 'Processing {current}/{total} audio files...',
    convertSuccess: 'Conversion successful!',
    
    // Advanced options
    advancedTitle: 'Advanced Options',
    trimAudio: 'Trim Audio',
    trimStart: 'Start Time',
    trimEnd: 'End Time',
    fadeIn: 'Fade In',
    fadeOut: 'Fade Out',
    
    seoNote: 'Audio to FLAC tool, online audio to FLAC converter, WAV to FLAC, MP3 to FLAC, lossless audio conversion',
};
