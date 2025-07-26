export default {
  name: 'Visualizzatore EXIF Immagini',
  description: 'Visualizza e analizza i metadati EXIF nelle fotografie',

  upload: {
    title: 'Carica immagine',
    dropzone: 'Trascina e rilascia l\'immagine qui o clicca per sfogliare',
    maxSize: 'Dimensione massima file: 15MB',
    supportedFormats: 'Formati supportati: JPG, TIFF, HEIC, PNG',
    anyImageFile: 'Qualsiasi file immagine contenente dati EXIF'
  },

  display: {
    title: 'Informazioni immagine',
    noExif: 'Nessun dato EXIF trovato in questa immagine',
    basicInfo: 'Informazioni base',
    camera: 'Informazioni fotocamera',
    exposure: 'Informazioni esposizione',
    location: 'Informazioni posizione',
    dates: 'Informazioni data',
    advanced: 'Dati EXIF avanzati',
    thumbnail: 'Miniatura EXIF'
  },

  exif: {
    fileName: 'Nome file',
    fileSize: 'Dimensione file',
    fileType: 'Tipo file',
    dimensions: 'Dimensioni',
    make: 'Produttore fotocamera',
    model: 'Modello fotocamera',
    lens: 'Obiettivo',
    focalLength: 'Lunghezza focale',
    focalLength35: 'Lunghezza focale (35mm)',
    aperture: 'Apertura',
    fNumber: 'Valore F',
    exposureTime: 'Tempo esposizione',
    shutterSpeed: 'Velocità otturatore',
    iso: 'ISO',
    exposureMode: 'Modalità esposizione',
    exposureProgram: 'Programma esposizione',
    meteringMode: 'Modalità misurazione',
    flash: 'Flash',
    flashMode: 'Modalità flash',
    whiteBalance: 'Bilanciamento bianco',
    exposureBias: 'Compensazione esposizione',
    latitude: 'Latitudine',
    longitude: 'Longitudine',
    altitude: 'Altitudine',
    locationName: 'Nome posizione',
    dateOriginal: 'Data scatto',
    dateDigitized: 'Data digitalizzazione',
    dateModified: 'Data modifica',
    software: 'Software',
    artist: 'Autore',
    copyright: 'Copyright',
    resolution: 'Risoluzione',
    colorSpace: 'Spazio colore',
    orientation: 'Orientamento',
    compression: 'Compressione',
    bitsPerSample: 'Bit per campione',
    maxAperture: 'Apertura massima',
    contrast: 'Contrasto',
    saturation: 'Saturazione',
    sharpness: 'Nitidezza',
    brightness: 'Luminosità',
    sceneCaptureType: 'Tipo scena',
    gainControl: 'Controllo guadagno',
    serialNumber: 'Numero seriale',
    width: 'Larghezza',
    height: 'Altezza',
  },

  map: {
    title: 'Posizione foto',
    show: 'Mostra su mappa',
    noLocation: 'Nessun dato posizione disponibile',
    directions: 'Ottieni indicazioni',
    copy: 'Copia coordinate',
    warning: 'Attenzione: questa immagine contiene dati di posizione. Fai attenzione quando la condividi.'
  },

  actions: {
    showAll: 'Mostra tutti i metadati',
    hideAll: 'Nascondi tutti i metadati',
    copyAll: 'Copia tutti i metadati',
    save: 'Salva metadati come JSON',
    removeMeta: 'Rimuovi metadati',
    download: 'Scarica immagine senza metadati',
    viewFullSize: 'Visualizza dimensione originale',
    refresh: 'Ricarica dati'
  },

  settings: {
    title: 'Impostazioni visualizzazione',
    showGroups: 'Raggruppa metadati',
    showRaw: 'Mostra valori grezzi',
    showTechnical: 'Mostra dati tecnici',
    showFiltered: 'Nascondi campi vuoti',
    darkMode: 'Modalità scura',
    mapProvider: 'Provider mappe'
  },

  tips: {
    privacy: 'Suggerimento privacy: le foto possono contenere dati personali come posizione e informazioni sul dispositivo.',
    noExif: 'Non vedi dati EXIF? Alcuni social media e strumenti di editing rimuovono i metadati.',
    rawView: 'Passa alla "visualizzazione raw" per vedere tutti i metadati disponibili.'
  },

  messages: {
    copied: 'Metadati copiati negli appunti',
    saved: 'Metadati salvati come file JSON',
    noExif: 'Nessun dato EXIF trovato in questa immagine',
    metadataRemoved: 'Metadati rimossi con successo',
    imageLoaded: 'Immagine caricata con successo',
    notUse: 'Non utilizzato',
    use: 'Utilizzato',
    auto: 'Automatico',
    manual: 'Manuale',
    reset: 'Reimpostato',
    exifExtracted: 'Dati EXIF estratti',
  },

  error: {
    copyFailed: 'Copia fallita',
    exportFailed: 'Esportazione fallita',
    exifExtractionFailed: 'Estrazione dati EXIF fallita',
    imageLoadFailed: 'Caricamento immagine fallito',
  },

  orientation: {
    normal: 'Normale',
    horizontalFlip: 'Riflesso orizzontale',
    rotate180: 'Ruotato 180°',
    verticalFlip: 'Riflesso verticale',
    rotate90VerticalFlip: 'Ruotato 90° e riflesso verticale',
    rotate90: 'Ruotato 90°',
    rotate90HorizontalFlip: 'Ruotato 90° e riflesso orizzontale',
    rotate270: 'Ruotato 270°'
  }
};