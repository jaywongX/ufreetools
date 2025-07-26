export default {
  name: 'Compressore di Immagini',
  description: 'Comprimi e ottimizza le immagini mantenendo la qualità',

  input: {
    dragDrop: 'Trascina e rilascia le immagini qui o clicca per caricare',
    supportedFormats: 'Formati supportati: JPG, PNG, GIF, WEBP',
    selected: '{count} file selezionati',
    changeFiles: 'Cambia file',
    width: 'Larghezza',
    height: 'Altezza',
    keepOriginal: 'Imposta a 0 per mantenere le dimensioni originali',
  },

  results: {
    originalImage: 'Immagine originale',
    compressedImage: 'Compressa',
    filename: 'Nome file:',
    dimensions: 'Dimensioni:',
    fileSize: 'Dimensione file:',
    compressionRatio: 'Rapporto di compressione:',
    viewOriginal: 'Visualizza originale',
  },

  about: {
    title: 'Informazioni sulla compressione immagini',
    description: 'Questo strumento utilizza le API Canvas del browser per comprimere le immagini. Tutte le elaborazioni avvengono sul tuo dispositivo e le immagini non vengono caricate su server esterni.',
    principlesTitle: 'Principi di compressione:',
    principles: {
      resize: 'Ridimensionamento: dimensioni più piccole significano meno dati di pixel',
      quality: 'Riduzione qualità: diminuisce il parametro di qualità dell\'immagine',
      format: 'Conversione formato: diversi formati hanno caratteristiche di compressione diverse'
    },
    useCasesTitle: 'Casi d\'uso:',
    useCases: {
      web: 'Ottimizzazione immagini per siti web',
      email: 'Riduzione dimensioni allegati email',
      social: 'Compressione per social media',
      storage: 'Ottimizzazione spazio di archiviazione'
    }
  },

  options: {
    quality: 'Qualità',
    qualityValue: 'Qualità ({value}%)',
    lowQuality: 'Bassa qualità/file piccolo',
    highQuality: 'Alta qualità/file grande',
    format: 'Formato output',
    maxSize: 'Dimensioni massime ({width} × {height} px)',
    keepExif: 'Mantieni dati EXIF',
    resizeImage: 'Ridimensiona immagine',
    maxWidth: 'Larghezza massima',
    maxHeight: 'Altezza massima',
    compressionLevel: 'Livello compressione',
    maxFileSize: 'Dimensione file obiettivo',
    optimizationLevel: 'Livello ottimizzazione',
    convertTo: 'Converti in'
  },

  presets: {
    web: 'Ottimizzazione web',
    highQuality: 'Alta qualità',
    balanced: 'Bilanciato',
    smallSize: 'Dimensione ridotta',
    custom: 'Personalizzato'
  },

  formats: {
    original: 'Formato originale',
    jpeg: 'JPEG',
    jpegDesc: 'JPEG ideale per foto, non supporta trasparenza',
    png: 'PNG',
    pngDesc: 'PNG supporta trasparenza, ideale per icone e illustrazioni',
    webp: 'WebP',
    webpDesc: 'WebP offre alta compressione, ideale per il web',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: 'Non ridimensionare',
    maxDimension: 'Dimensione massima',
    exactDimensions: 'Dimensioni esatte',
    percentage: 'Ridimensionamento percentuale'
  },

  actions: {
    upload: 'Carica immagini',
    compress: 'Comprimi',
    processing: 'Elaborazione in corso...',
    download: 'Scarica',
    downloadAll: 'Scarica tutto',
    batchDownload: 'Scarica in batch',
    clear: 'Pulisci',
    addMore: 'Aggiungi altre immagini',
    removeAll: 'Rimuovi tutto',
    preview: 'Anteprima',
    delete: 'Elimina'
  },

  table: {
    filename: 'Nome file',
    originalSize: 'Dimensione originale',
    original: 'Dimensione originale',
    compressedSize: 'Dimensione compressa',
    compressed: 'Dimensione compressa',
    savings: 'Risparmio',
    ratio: 'Rapporto compressione',
    quality: 'Qualità',
    dimensions: 'Dimensioni',
    originalDimensions: 'Dimensioni originali',
    newDimensions: 'Nuove dimensioni',
    status: 'Stato'
  },

  messages: {
    dropped: '{count} immagini caricate',
    uploading: 'Caricamento immagini...',
    compressing: 'Compressione immagini...',
    compressed: 'Compressione completata',
    downloadPreparing: 'Preparazione download...',
    downloadReady: 'Download pronto',
    cleared: 'Tutte le immagini rimosse',
    tooManyFiles: 'Troppi file. Massimo consentito: {max}',
    fileTooLarge: 'File troppo grande. Massimo consentito: {max}MB',
    unsupportedFormat: 'Formato non supportato: {format}',
    imageError: 'Errore elaborazione immagine: {error}',
    batchDownloadNotSupported: 'Il download in batch richiede la libreria JSZip. Scarica singolarmente o aggiungi supporto zip.',
    batchDownloadError: 'Errore download batch: {error}',
    invalidImage: 'Seleziona un file immagine valido'
  }
};