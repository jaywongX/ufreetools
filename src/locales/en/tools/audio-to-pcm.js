export default {
    name: 'Audio to PCM - Online Audio Format Converter',
    description: 'Free online audio to PCM tool. Convert WAV, MP3, FLAC, OGG, AAC, M4A and other formats to PCM raw audio data. Supports sample rate settings, channel selection, batch processing. Ideal for speech recognition and audio analysis.',
    inputTitle: 'Input Audio',
    outputTitle: 'Converted PCM Audio',
    dragTip: 'Drag and drop audio files here or click to upload (batch supported)',
    pasteTip: 'Or press Ctrl+V (Cmd+V) to paste clipboard audio file path',
    supported: 'Supported formats: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'Convert to PCM',
    converting: 'Converting...',
    downloadBtn: 'Download PCM',
    batchDownload: 'Batch Download (ZIP)',
    noOutput: 'No conversion results yet',
    loadSample: 'Load Sample Audio',
    preview: 'Preview Audio',
    clearAll: 'Clear All',
    originalAudio: 'Original Audio',
    deleteAudio: 'Delete Audio',
    
    // Sample rate settings
    sampleRateTitle: 'Sample Rate Settings',
    sampleRateLabel: 'Sample Rate: {rate} Hz',
    sampleRate8000: '8000 Hz (Telephone Quality)',
    sampleRate16000: '16000 Hz (Speech Recognition)',
    sampleRate22050: '22050 Hz (Voice Quality)',
    sampleRate44100: '44100 Hz (CD Quality)',
    sampleRate48000: '48000 Hz (Professional Quality)',
    
    // Channel settings
    channelTitle: 'Channel Settings',
    channelStereo: 'Stereo',
    channelMono: 'Mono',
    
    // Bit depth settings
    bitDepthTitle: 'Bit Depth Settings',
    bitDepth8: '8-bit (Low Quality)',
    bitDepth16: '16-bit (Standard)',
    bitDepth24: '24-bit (High Quality)',
    bitDepth32: '32-bit (Professional)',
    
    // Volume settings
    volumeTitle: 'Volume Settings',
    volumeLabel: 'Volume: {volume}%',
    
    // File info
    fileSizeEstimate: 'Estimated file size: {size}',
    duration: 'Duration: {duration}',
    originalFormat: 'Original format: {format}',
    originalSize: 'Original size: {size}',
    convertedSize: 'Converted size: {size}',
    
    // Tips
    tipsTitle: 'Tips',
    tipContent: 'PCM format is uncompressed raw audio data, commonly used for speech recognition, audio analysis, and professional audio processing. 16-bit, 16000Hz sample rate is standard for speech recognition; 44100Hz, 16-bit for general audio; 48000Hz, 24-bit for professional audio production.',
    convertError: 'Conversion failed, please check audio format or try again.',
    processingMultiple: 'Processing {current}/{total} audio files...',
    convertSuccess: 'Conversion successful!',
    
    // PCM-specific options
    pcmFormatTitle: 'PCM Format Options',
    signedFormat: 'Signed Format',
    unsignedFormat: 'Unsigned Format',
    littleEndian: 'Little Endian',
    bigEndian: 'Big Endian',
    
    // Metadata
    metadataTitle: 'Metadata (Optional)',
    metadataTitle2: 'Title',
    metadataArtist: 'Artist',
    
    // Advanced options
    advancedTitle: 'Advanced Options',
    trimAudio: 'Trim Audio',
    trimStart: 'Start Time',
    trimEnd: 'End Time',
    
    seoNote: 'Audio to PCM tool, online audio format converter, WAV to PCM, MP3 to PCM, speech recognition audio preprocessing',
};
