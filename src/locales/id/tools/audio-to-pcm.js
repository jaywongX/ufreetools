export default {
    name: 'Audio ke PCM - Konverter Format Audio Online',
    description: 'Alat gratis online audio ke PCM. Konversi WAV, MP3, FLAC, OGG, AAC, M4A dan format lain ke data audio PCM mentah. Mendukung pengaturan sample rate, pemilihan channel, pemrosesan batch. Ideal untuk pengenalan suara dan analisis audio.',
    inputTitle: 'Audio Input',
    outputTitle: 'Audio PCM yang Dikonversi',
    dragTip: 'Seret dan lepas file audio di sini atau klik untuk mengunggah (batch didukung)',
    pasteTip: 'Atau tekan Ctrl+V (Cmd+V) untuk menempelkan path file audio dari clipboard',
    supported: 'Format yang didukung: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'Konversi ke PCM',
    converting: 'Mengonversi...',
    downloadBtn: 'Unduh PCM',
    batchDownload: 'Unduh Batch (ZIP)',
    noOutput: 'Belum ada hasil konversi',
    loadSample: 'Muat Audio Sampel',
    preview: 'Pratinjau Audio',
    clearAll: 'Hapus Semua',
    originalAudio: 'Audio Asli',
    deleteAudio: 'Hapus Audio',
    
    // Pengaturan sample rate
    sampleRateTitle: 'Pengaturan Sample Rate',
    sampleRateLabel: 'Sample Rate: {rate} Hz',
    sampleRate8000: '8000 Hz (Kualitas Telepon)',
    sampleRate16000: '16000 Hz (Pengenalan Suara)',
    sampleRate22050: '22050 Hz (Kualitas Suara)',
    sampleRate44100: '44100 Hz (Kualitas CD)',
    sampleRate48000: '48000 Hz (Kualitas Profesional)',
    
    // Pengaturan channel
    channelTitle: 'Pengaturan Channel',
    channelStereo: 'Stereo',
    channelMono: 'Mono',
    
    // Pengaturan bit depth
    bitDepthTitle: 'Pengaturan Bit Depth',
    bitDepth8: '8-bit (Kualitas Rendah)',
    bitDepth16: '16-bit (Standar)',
    bitDepth24: '24-bit (Kualitas Tinggi)',
    bitDepth32: '32-bit (Profesional)',
    
    // Pengaturan volume
    volumeTitle: 'Pengaturan Volume',
    volumeLabel: 'Volume: {volume}%',
    
    // Info file
    fileSizeEstimate: 'Estimasi ukuran file: {size}',
    duration: 'Durasi: {duration}',
    originalFormat: 'Format asli: {format}',
    originalSize: 'Ukuran asli: {size}',
    convertedSize: 'Ukuran setelah konversi: {size}',
    
    // Tips
    tipsTitle: 'Tips',
    tipContent: 'Format PCM adalah data audio mentah tidak terkompresi, umumnya digunakan untuk pengenalan suara, analisis audio, dan pemrosesan audio profesional. 16-bit, 16000Hz adalah standar untuk pengenalan suara; 44100Hz, 16-bit untuk audio umum; 48000Hz, 24-bit untuk produksi audio profesional.',
    convertError: 'Konversi gagal, periksa format audio atau coba lagi.',
    processingMultiple: 'Memproses {current}/{total} file audio...',
    convertSuccess: 'Konversi berhasil!',
    
    // Opsi khusus PCM
    pcmFormatTitle: 'Opsi Format PCM',
    signedFormat: 'Format Bertanda',
    unsignedFormat: 'Format Tak Bertanda',
    littleEndian: 'Little Endian',
    bigEndian: 'Big Endian',
    
    // Metadata
    metadataTitle: 'Metadata (Opsional)',
    metadataTitle2: 'Judul',
    metadataArtist: 'Artis',
    
    // Opsi lanjutan
    advancedTitle: 'Opsi Lanjutan',
    trimAudio: 'Potong Audio',
    trimStart: 'Waktu Mulai',
    trimEnd: 'Waktu Selesai',
    
    seoNote: 'Alat audio ke PCM, konverter format audio online, WAV ke PCM, MP3 ke PCM, prapemrosesan audio pengenalan suara',
};
