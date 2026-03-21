export default {
    name: 'Audio a PCM - Convertidor de formato de audio en línea',
    description: 'Herramienta gratuita de audio a PCM en línea. Convierte WAV, MP3, FLAC, OGG, AAC, M4A y otros formatos a datos de audio PCM sin procesar. Admite configuración de frecuencia de muestreo, selección de canales, procesamiento por lotes. Ideal para reconocimiento de voz y análisis de audio.',
    inputTitle: 'Audio de entrada',
    outputTitle: 'Audio PCM convertido',
    dragTip: 'Arrastra y suelta archivos de audio aquí o haz clic para subir (lote soportado)',
    pasteTip: 'O presiona Ctrl+V (Cmd+V) para pegar la ruta del archivo de audio del portapapeles',
    supported: 'Formatos compatibles: WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE',
    convertBtn: 'Convertir a PCM',
    converting: 'Convirtiendo...',
    downloadBtn: 'Descargar PCM',
    batchDownload: 'Descarga por lote (ZIP)',
    noOutput: 'Sin resultados de conversión',
    loadSample: 'Cargar audio de muestra',
    preview: 'Vista previa de audio',
    clearAll: 'Limpiar todo',
    originalAudio: 'Audio original',
    deleteAudio: 'Eliminar audio',
    
    sampleRateTitle: 'Configuración de frecuencia de muestreo',
    sampleRateLabel: 'Frecuencia de muestreo: {rate} Hz',
    sampleRate8000: '8000 Hz (Calidad telefónica)',
    sampleRate16000: '16000 Hz (Reconocimiento de voz)',
    sampleRate22050: '22050 Hz (Calidad de voz)',
    sampleRate44100: '44100 Hz (Calidad CD)',
    sampleRate48000: '48000 Hz (Calidad profesional)',
    
    channelTitle: 'Configuración de canales',
    channelStereo: 'Estéreo',
    channelMono: 'Mono',
    
    bitDepthTitle: 'Configuración de profundidad de bits',
    bitDepth8: '8 bits (Baja calidad)',
    bitDepth16: '16 bits (Estándar)',
    bitDepth24: '24 bits (Alta calidad)',
    bitDepth32: '32 bits (Profesional)',
    
    volumeTitle: 'Configuración de volumen',
    volumeLabel: 'Volumen: {volume}%',
    
    fileSizeEstimate: 'Tamaño estimado: {size}',
    duration: 'Duración: {duration}',
    originalFormat: 'Formato original: {format}',
    originalSize: 'Tamaño original: {size}',
    convertedSize: 'Tamaño convertido: {size}',
    
    tipsTitle: 'Consejos',
    tipContent: 'El formato PCM es datos de audio sin procesar sin comprimir, comúnmente usado para reconocimiento de voz, análisis de audio y procesamiento de audio profesional. 16 bits, 16000Hz es estándar para reconocimiento de voz; 44100Hz, 16 bits para audio general; 48000Hz, 24 bits para producción de audio profesional.',
    convertError: 'Conversión fallida, verifica el formato de audio o intenta de nuevo.',
    processingMultiple: 'Procesando {current}/{total} archivos de audio...',
    convertSuccess: '¡Conversión exitosa!',
    
    pcmFormatTitle: 'Opciones de formato PCM',
    signedFormat: 'Formato con signo',
    unsignedFormat: 'Formato sin signo',
    littleEndian: 'Little Endian',
    bigEndian: 'Big Endian',
    
    // Metadatos
    metadataTitle: 'Metadatos (Opcional)',
    metadataTitle2: 'Título',
    metadataArtist: 'Artista',
    
    // Opciones avanzadas
    advancedTitle: 'Opciones Avanzadas',
    trimAudio: 'Recortar Audio',
    trimStart: 'Tiempo de Inicio',
    trimEnd: 'Tiempo Final',
    
    seoNote: 'Herramienta de audio a PCM, convertidor de formato de audio en línea, WAV a PCM, MP3 a PCM, preprocesamiento de audio para reconocimiento de voz',
};
