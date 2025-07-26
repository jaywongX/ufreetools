export default {
  name: 'Ridimensionatore Batch di Immagini',
  description: 'Ridimensiona, converti e ottimizza più immagini contemporaneamente',

  input: {
    title: 'Immagini di input',
    dropzone: 'Trascina e rilascia le immagini qui o fai clic per sfogliare',
    addMore: 'Aggiungi altre immagini',
    selectImages: 'Seleziona immagini',
    clearAll: 'Cancella tutto',
    maxFiles: 'Massimo {count} immagini',
    maxSize: 'Dimensione massima per immagine: {size}MB',
    supportedFormats: 'Formati supportati: {formats}'
  },

  options: {
    title: 'Opzioni di ridimensionamento',
    settingsTitle: 'Impostazioni di ridimensionamento',
    resizeMode: 'Modalità ridimensionamento',
    resizeMethod: 'Metodo di ridimensionamento',
    pixelMode: 'Pixel',
    percentageMode: 'Percentuale',
    maxDimensionMode: 'Dimensione massima',
    outputFormat: 'Formato di output',
    quality: 'Qualità',
    width: 'Larghezza',
    height: 'Altezza',
    maintainAspectRatio: 'Mantieni proporzioni',
    maxWidth: 'Larghezza massima',
    maxHeight: 'Altezza massima',
    percentage: 'Percentuale',
    backgroundColor: 'Colore di sfondo',
    naming: 'Denominazione output',
    filenamePrefix: 'Prefisso nome file',
    filenameSuffix: 'Suffisso nome file',
    applyToAllImages: 'Applica a tutte le immagini',
    applyToAll: 'Applica a tutte'
  },

  resizeModes: {
    exact: 'Dimensioni esatte',
    maxDimensions: 'Dimensioni massime',
    percentage: 'Ridimensionamento percentuale',
    fit: 'Adatta all\'interno',
    cover: 'Copri',
    crop: 'Ritaglia'
  },

  formats: {
    original: 'Come originale',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },

  namingOptions: {
    original: 'Nome file originale',
    dimensions: 'Originale + dimensioni',
    format: 'Originale + formato',
    custom: 'Modalità personalizzata',
    random: 'Stringa casuale'
  },

  output: {
    title: 'Immagini ridimensionate',
    downloadAll: 'Scarica tutto',
    downloadAsZip: 'Scarica come ZIP',
    processingStatus: 'Elaborazione: {processed}/{total}',
    originalSize: 'Dimensione originale',
    newSize: 'Nuova dimensione',
    reduction: 'Riduzione',
    individualDownload: 'Scarica'
  },

  batch: {
    title: 'Elaborazione batch',
    process: 'Elabora tutte le immagini',
    cancel: 'Annulla elaborazione',
    selectPreset: 'Seleziona preset',
    savePreset: 'Salva impostazioni correnti',
    progress: 'Avanzamento elaborazione'
  },

  watermark: {
    title: 'Filigrana',
    enable: 'Aggiungi filigrana',
    text: 'Testo filigrana',
    image: 'Immagine filigrana',
    position: 'Posizione',
    opacity: 'Opacità',
    rotation: 'Rotazione',
    size: 'Dimensione',
    padding: 'Spaziatura'
  },

  positions: {
    topLeft: 'In alto a sinistra',
    topCenter: 'In alto al centro',
    topRight: 'In alto a destra',
    middleLeft: 'Al centro a sinistra',
    middleCenter: 'Centrato',
    middleRight: 'Al centro a destra',
    bottomLeft: 'In basso a sinistra',
    bottomCenter: 'In basso al centro',
    bottomRight: 'In basso a destra'
  },

  actions: {
    resize: 'Ridimensiona',
    preview: 'Anteprima',
    processing: 'Elaborazione in corso...',
    reset: 'Ripristina',
    applySettings: 'Applica impostazioni',
    resetSettings: 'Ripristina impostazioni',
    cancel: 'Annulla'
  },

  messages: {
    resizeSuccess: 'Ridimensionamento immagini riuscito',
    resizeFailed: 'Ridimensionamento fallito: {error}',
    invalidDimensions: 'Inserisci dimensioni valide',
    invalidWidthHeight: 'Inserisci larghezza e altezza valide',
    noImages: 'Aggiungi immagini da ridimensionare',
    noImagesToDownload: 'Nessuna immagine da scaricare',
    processing: 'Elaborazione immagini in corso...',
    processingComplete: 'Elaborazione completata',
    processingError: 'Errore durante l\'elaborazione',
    waitingForProcess: 'In attesa di elaborazione',
    downloadStarted: 'Download iniziato',
    allDownloaded: 'Tutte le immagini sono state scaricate',
    presetSaved: 'Preset salvato',
    presetLoaded: 'Preset caricato',
    zipCreated: 'Creato archivio ZIP con {count} immagini',
    zipError: 'Errore durante la creazione dell\'archivio ZIP'
  },

  preview: {
    title: 'Anteprima immagini ({count})',
    selectImage: 'Seleziona un\'immagine',
    batchSupport: 'Supporta la selezione multipla per l\'elaborazione batch',
    download: 'Scarica',
    delete: 'Elimina'
  },

  qualityOptions: {
    fast: 'Elaborazione veloce',
    medium: 'Qualità media',
    high: 'Alta qualità (consigliato)',
    best: 'Qualità migliore (più lento)'
  }
};