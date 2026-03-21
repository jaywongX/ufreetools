export default {
    name: 'Audio in PCM - Convertitore formato audio online',
    description: 'Strumento gratuito online da audio a PCM. Converti WAV, MP3, FLAC, OGG, AAC, M4A e altri formati in dati audio PCM grezzi. Supporta impostazioni sample rate, selezione canali, elaborazione batch. Ideale per riconoscimento vocale e analisi audio.',
    inputTitle: 'Audio in input',
    outputTitle: 'Audio PCM convertito',
    dragTip: 'Trascina e rilascia file audio qui o clicca per caricare (batch supportato)',
    pasteTip: 'Oppure premi Ctrl+V (Cmd+V) per incollare percorso file audio dagli appunti',
    supported: 'Formati supportati: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'Converti in PCM',
    converting: 'Conversione in corso...',
    downloadBtn: 'Scarica PCM',
    batchDownload: 'Download batch (ZIP)',
    noOutput: 'Nessun risultato di conversione',
    loadSample: 'Carica audio di esempio',
    preview: 'Anteprima audio',
    clearAll: 'Cancella tutto',
    originalAudio: 'Audio originale',
    deleteAudio: 'Elimina audio',
    
    sampleRateTitle: 'Impostazioni sample rate',
    sampleRateLabel: 'Sample rate: {rate} Hz',
    sampleRate8000: '8000 Hz (Qualità telefonica)',
    sampleRate16000: '16000 Hz (Riconoscimento vocale)',
    sampleRate22050: '22050 Hz (Qualità voce)',
    sampleRate44100: '44100 Hz (Qualità CD)',
    sampleRate48000: '48000 Hz (Qualità professionale)',
    
    channelTitle: 'Impostazioni canali',
    channelStereo: 'Stereo',
    channelMono: 'Mono',
    
    bitDepthTitle: 'Impostazioni profondità bit',
    bitDepth8: '8-bit (Bassa qualità)',
    bitDepth16: '16-bit (Standard)',
    bitDepth24: '24-bit (Alta qualità)',
    bitDepth32: '32-bit (Professionale)',
    
    volumeTitle: 'Impostazioni volume',
    volumeLabel: 'Volume: {volume}%',
    
    fileSizeEstimate: 'Dimensione stimata: {size}',
    duration: 'Durata: {duration}',
    originalFormat: 'Formato originale: {format}',
    originalSize: 'Dimensione originale: {size}',
    convertedSize: 'Dimensione convertita: {size}',
    
    tipsTitle: 'Suggerimenti',
    tipContent: 'Il formato PCM è dati audio grezzi non compressi, comunemente usati per riconoscimento vocale, analisi audio e elaborazione audio professionale. 16-bit, 16000Hz è lo standard per riconoscimento vocale; 44100Hz, 16-bit per audio generale; 48000Hz, 24-bit per produzione audio professionale.',
    convertError: 'Conversione fallita, verifica il formato audio o riprova.',
    processingMultiple: 'Elaborazione {current}/{total} file audio...',
    convertSuccess: 'Conversione riuscita!',
    
    pcmFormatTitle: 'Opzioni formato PCM',
    signedFormat: 'Formato con segno',
    unsignedFormat: 'Formato senza segno',
    littleEndian: 'Little Endian',
    bigEndian: 'Big Endian',
    
    // Metadati
    metadataTitle: 'Metadati (Opzionale)',
    metadataTitle2: 'Titolo',
    metadataArtist: 'Artista',
    
    // Opzioni avanzate
    advancedTitle: 'Opzioni Avanzate',
    trimAudio: 'Taglia Audio',
    trimStart: 'Tempo Inizio',
    trimEnd: 'Tempo Fine',
    
    seoNote: 'Strumento audio in PCM, convertitore formato audio online, WAV in PCM, MP3 in PCM, pre-elaborazione audio riconoscimento vocale',
};
