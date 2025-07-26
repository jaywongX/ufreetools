export default {
  name: 'Pixelatore di Immagini',
  description: 'Trasforma immagini in arte pixel con risoluzione ed effetti personalizzabili',

  upload: {
    title: 'Carica immagine',
    dropzone: 'Trascina e rilascia un\'immagine qui o clicca per sfogliare',
    maxSize: 'Dimensione massima file: 10MB',
    supportedFormats: 'Formati supportati: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Impostazioni pixelatura',
    pixelSize: 'Dimensione pixel',
    pixelShape: 'Forma pixel',
    shapes: {
      square: 'Quadrato',
      rounded: 'Angoli arrotondati',
      circle: 'Cerchio',
      diamond: 'Rombo',
      custom: 'Personalizzata'
    },
    resolution: 'Risoluzione',
    width: 'Larghezza',
    height: 'Altezza',
    preserveAspect: 'Mantieni proporzioni',
    colorReduction: 'Riduzione colori',
    colors: 'Numero colori',
    dithering: 'Dithering',
    ditheringTypes: {
      none: 'Nessuno',
      floydSteinberg: 'Floyd-Steinberg',
      atkinson: 'Atkinson',
      ordered: 'Ordinato',
      bayer: 'Bayer'
    },
    palette: 'Tavolozza colori',
    palettes: {
      auto: 'Automatica',
      grayscale: 'Scala di grigi',
      gameboy: 'Game Boy',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'Personalizzata',
      normal: 'Normale',
      retro: 'Retrò',
      sepia: 'Seppia',
      bright: 'Luminosa',
      cool: 'Fredda',
      warm: 'Calda',
      bw: 'Bianco e nero',
      invert: 'Inverti'
    },
    customPalette: 'Colori tavolozza personalizzata',
    small: 'Piccolo (dettagliato)',
    large: 'Grande (grezzo)',
    low: 'Basso (retrò)',
    high: 'Alto (a colori)'
  },

  effects: {
    title: 'Effetti',
    brightness: 'Luminosità',
    contrast: 'Contrasto',
    saturation: 'Saturazione',
    hue: 'Tonalità',
    outline: 'Bordo',
    outlineColor: 'Colore bordo',
    noise: 'Rumore',
    posterize: 'Posterizza',
    invert: 'Inverti colori',
    grayscale: 'Scala di grigi',
    sepia: 'Seppia',
    vignette: 'Vignettatura'
  },

  animation: {
    title: 'Impostazioni animazione',
    animated: 'Elabora come animazione',
    frameRate: 'Frame rate',
    optimizeFrames: 'Ottimizza frame',
    looping: 'Loop',
    loopCount: 'Numero loop'
  },

  output: {
    title: 'Output',
    preview: 'Anteprima',
    original: 'Originale',
    pixelated: 'Pixelato',
    comparison: 'Confronto',
    zoomIn: 'Ingrandisci',
    zoomOut: 'Riduci',
    gridOverlay: 'Griglia sovrapposta',
    downloadAs: 'Scarica come',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: 'Spritesheet',
    quality: 'Qualità',
    scale: 'Scala',
    loading: 'Caricamento...',
    noImage: 'Seleziona un\'immagine',
    processing: 'Elaborazione...'
  },

  presets: {
    title: 'Preset',
    save: 'Salva impostazioni correnti',
    load: 'Carica preset',
    delete: 'Elimina preset',
    presetName: 'Nome preset',
    defaults: {
      lowRes: 'Bassa risoluzione',
      highContrast: 'Alto contrasto',
      retro: 'Retrò',
      minimal: 'Minimal',
      sketch: 'Schizzo',
      blueprint: 'Progetto'
    }
  },

  actions: {
    pixelate: 'Pixelizza immagine',
    reset: 'Reimposta impostazioni',
    applyChanges: 'Applica modifiche',
    undoChanges: 'Annulla modifiche',
    downloadImage: 'Scarica immagine',
    selectImage: 'Seleziona immagine'
  },

  messages: {
    processing: 'Elaborazione immagine...',
    success: 'Immagine pixelata con successo',
    downloading: 'Preparazione download...',
    presetSaved: 'Preset salvato',
    presetLoaded: 'Preset caricato',
    presetDeleted: 'Preset eliminato',
    error: 'Errore: {error}',
    fileSize: 'Dimensione file',
    pixels: 'Pixel',
    imageSize: 'Dimensioni immagine',
    downloadSuccess: 'Immagine scaricata',
    downloadFailed: 'Download fallito',
    resetSuccess: 'Reimpostato',
    fileName: 'Nome file'
  }
};