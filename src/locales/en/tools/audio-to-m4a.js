export default {
    name: 'Audio to M4A - Online Audio Format Converter',
    description: 'Free online audio to M4A converter tool. Supports WAV, FLAC, OGG, AAC, MP3, WMA and more formats conversion to M4A. Features bitrate adjustment, sample rate settings, and batch processing. Ideal for Apple device audio conversion and audio compression.',
    inputTitle: 'Input Audio',
    outputTitle: 'Converted M4A Audio',
    dragTip: 'Drag and drop audio files here or click to upload (batch supported)',
    pasteTip: 'Or press Ctrl+V (Cmd+V) to paste clipboard audio file path',
    supported: 'Supported formats: WAV, FLAC, OGG, AAC, MP3, WMA, AMR, AIFF, APE',
    convertBtn: 'Convert to M4A',
    converting: 'Converting...',
    downloadBtn: 'Download M4A',
    batchDownload: 'Batch Download (ZIP)',
    noOutput: 'No conversion results yet',
    loadSample: 'Load Sample Audio',
    preview: 'Preview Audio',
    clearAll: 'Clear All',
    originalAudio: 'Original Audio',
    deleteAudio: 'Delete Audio',
    
    // Quality settings
    bitrateTitle: 'M4A Bitrate Settings',
    bitrateLabel: 'Bitrate: {bitrate} kbps',
    bitrateSlider: 'Bitrate Slider',
    bitrate128: '128 kbps (Standard Quality)',
    bitrate192: '192 kbps (High Quality)',
    bitrate256: '256 kbps (Excellent)',
    bitrate320: '320 kbps (Best Quality)',
    
    // Sample rate settings
    sampleRateTitle: 'Sample Rate Settings',
    sampleRateLabel: 'Sample Rate: {rate} Hz',
    sampleRateAuto: 'Auto (Keep Original)',
    sampleRate44100: '44100 Hz (CD Quality)',
    sampleRate48000: '48000 Hz (Professional Quality)',
    sampleRate22050: '22050 Hz (Voice Quality)',
    
    // Channel settings
    channelTitle: 'Channel Settings',
    channelStereo: 'Stereo',
    channelMono: 'Mono',
    channelAuto: 'Auto (Keep Original)',
    
    // Volume settings
    volumeTitle: 'Volume Settings',
    volumeLabel: 'Volume: {volume}%',
    volumeNormalize: 'Volume Normalization',
    
    // File info
    fileSizeEstimate: 'Estimated file size: {size}',
    duration: 'Duration: {duration}',
    originalFormat: 'Original format: {format}',
    originalSize: 'Original size: {size}',
    convertedSize: 'Converted size: {size}',
    compressionRatio: 'Compression ratio: {ratio}%',
    
    // Comparison
    beforeAfterTitle: 'Before and After Comparison',
    beforeLabel: 'Original Audio',
    afterLabel: 'M4A Preview',
    
    // Tips
    tipsTitle: 'Tips',
    tipContent: 'M4A format uses AAC encoding, offering better sound quality and compression efficiency than MP3 at the same bitrate. Ideal for Apple devices. Recommended bitrates: 128kbps for voice, 192-256kbps for music, 320kbps for high fidelity.',
    convertError: 'Conversion failed, please check the audio format or try again.',
    processingMultiple: 'Processing {current}/{total} audio files...',
    convertSuccess: 'Conversion successful!',
    
    // Metadata
    metadataTitle: 'Metadata (Optional)',
    metadataTitle2: 'Title',
    metadataArtist: 'Artist',
    metadataAlbum: 'Album',
    metadataYear: 'Year',
    metadataGenre: 'Genre',
    
    // Advanced options
    advancedTitle: 'Advanced Options',
    trimAudio: 'Trim Audio',
    trimStart: 'Start Time',
    trimEnd: 'End Time',
    fadeIn: 'Fade In',
    fadeOut: 'Fade Out',
    
    seoNote: 'Audio to M4A converter, online audio format converter, WAV to M4A, FLAC to M4A, MP3 to M4A, Apple audio format',
};
