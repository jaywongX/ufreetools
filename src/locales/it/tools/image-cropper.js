export default {
  name: 'Ritaglio Immagini',
  description: 'Ritaglia, ridimensiona e ruota immagini con precisione',

  upload: {
    title: 'Carica immagine',
    dropzone: 'Trascina e rilascia l\'immagine qui o clicca per sfogliare',
    maxSize: 'Dimensione massima file: 10MB',
    supportedFormats: 'Formati supportati: JPG, PNG, WEBP, GIF',
    select: 'Seleziona un\'immagine per iniziare il ritaglio e la modifica'
  },

  editor: {
    title: 'Editor immagine',
    zoom: 'Zoom',
    rotate: 'Ruota',
    flipHorizontal: 'Rifletti orizzontalmente',
    flipVertical: 'Rifletti verticalmente',
    reset: 'Ripristina immagine',
    undo: 'Annulla',
    redo: 'Ripristina',
    dragMode: 'Modalità trascinamento',
    scaleMode: 'Modalità ridimensionamento'
  },

  crop: {
    title: 'Impostazioni ritaglio',
    aspectRatio: 'Proporzioni',
    freeform: 'Forma libera',
    square: 'Quadrato (1:1)',
    portrait: 'Verticale (3:4)',
    landscape: 'Orizzontale (4:3)',
    widescreen: 'Widescreen (16:9)',
    panorama: 'Panoramica (2:1)',
    custom: 'Personalizzato',
    width: 'Larghezza',
    height: 'Altezza',
    unit: 'Unità',
    pixels: 'Pixel',
    percent: 'Percentuale',
    lockAspectRatio: 'Blocca proporzioni'
  },

  presets: {
    title: 'Dimensioni predefinite',
    original: 'Dimensioni originali',
    social: 'Social media',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: 'Dimensioni stampa',
    fourBySix: '4×6 pollici',
    fiveBySeven: '5×7 pollici',
    eightByTen: '8×10 pollici'
  },

  output: {
    title: 'Output',
    preview: 'Anteprima',
    dimensions: 'Dimensioni output',
    quality: 'Qualità',
    format: 'Formato',
    fileName: 'Nome file',
    download: 'Scarica',
    saveAs: 'Salva con nome',
    copy: 'Copia negli appunti'
  },

  actions: {
    crop: 'Ritaglia immagine',
    apply: 'Applica',
    cancel: 'Annulla',
    save: 'Salva immagine',
    download: 'Scarica',
    newImage: 'Nuova immagine'
  },

  messages: {
    cropSuccess: 'Immagine ritagliata con successo',
    downloadReady: 'La tua immagine ritagliata è pronta per il download',
    processing: 'Elaborazione immagine in corso...',
    copied: 'Immagine copiata negli appunti',
    invalidFile: 'File non valido. Carica un\'immagine valida.',
    fileTooLarge: 'File troppo grande. Dimensione massima: 10MB.'
  }
};