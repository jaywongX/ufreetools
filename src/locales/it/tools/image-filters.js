export default {
  name: 'Filtri Immagini',
  description: 'Anteprima in tempo reale di vari filtri ed effetti applicati alle immagini',

  upload: {
    title: 'Carica immagine',
    dropzone: 'Trascina e rilascia l\'immagine qui o clicca per sfogliare',
    maxSize: 'Dimensione massima file: 10MB',
    supportedFormats: 'Formati supportati: JPG, PNG, WEBP, GIF'
  },

  editor: {
    title: 'Editor filtri',
    original: 'Originale',
    filtered: 'Filtrata',
    reset: 'Reimposta tutto',
    undo: 'Annulla',
    redo: 'Ripristina',
    zoomIn: 'Ingrandisci',
    zoomOut: 'Riduci',
    fitToScreen: 'Adatta allo schermo',
    showOriginal: 'Mostra originale'
  },

  filters: {
    title: 'Filtri',
    basic: 'Regolazioni base',
    brightness: 'Luminosità',
    contrast: 'Contrasto',
    saturation: 'Saturazione',
    hue: 'Tonalità',
    exposure: 'Esposizione',
    vibrance: 'Vividezza',
    temperature: 'Temperatura colore',
    gamma: 'Gamma',
    clarity: 'Nitidezza',
    effects: 'Effetti',
    grayscale: 'Scala di grigi',
    sepia: 'Seppia',
    vintage: 'Vintage',
    polaroid: 'Polaroid',
    duotone: 'Bitonale',
    noise: 'Rumore',
    pixelate: 'Pixelato',
    blur: 'Sfocatura',
    sharpen: 'Nitidezza',
    vignette: 'Vignettatura',
    color: 'Colore',
    colorOverlay: 'Sovrapposizione colore',
    colorize: 'Colorizzazione',
    gradientMap: 'Mappa gradiente',
    replaceColor: 'Sostituisci colore',
    advanced: 'Avanzate',
    levels: 'Livelli',
    curves: 'Curve',
    shadows: 'Ombre',
    highlights: 'Luci',
    blacks: 'Neri',
    whites: 'Bianchi',
    channels: 'Canali RGB'
  },

  presets: {
    title: 'Preimpostazioni',
    custom: 'Personalizzato',
    blackAndWhite: 'Bianco e nero',
    highContrast: 'Alto contrasto',
    normal: 'Normale',
    cinematic: 'Cinematografico',
    warm: 'Tonalità calde',
    cool: 'Tonalità fredde',
    sunset: 'Tramonto',
    vintage: 'Vintage',
    invert: 'Inverti',
    cross: 'Cross processing',
    matte: 'Effetto opaco',
    flat: 'Piatto',
    portrait: 'Ritratto',
    landscape: 'Paesaggio',
    vivid: 'Vivace',
    moody: 'Atmosferico',
    savePreset: 'Salva corrente come preset',
    deletePreset: 'Elimina preset',
    presetName: 'Nome preset'
  },

  output: {
    title: 'Esporta',
    fileName: 'Nome file',
    format: 'Formato',
    quality: 'Qualità',
    width: 'Larghezza',
    height: 'Altezza',
    download: 'Scarica immagine',
    saveOnline: 'Salva online',
    share: 'Condividi',
    applyToNew: 'Applica a nuova immagine'
  },

  history: {
    title: 'Cronologia',
    revert: 'Ripristina a questo punto',
    clear: 'Cancella cronologia'
  },

  actions: {
    apply: 'Applica filtro',
    download: 'Scarica',
    save: 'Salva',
    reset: 'Reimposta',
    cancel: 'Annulla'
  },

  messages: {
    imageLoaded: 'Immagine caricata con successo',
    filterApplied: 'Filtro applicato con successo',
    filtersReset: 'Filtri reimpostati ai valori predefiniti',
    downloadStarted: 'Download iniziato',
    presetSaved: 'Preset salvato con successo',
    presetDeleted: 'Preset eliminato',
    invalidFile: 'File non valido. Carica un\'immagine valida.',
    fileTooLarge: 'File troppo grande. Dimensione massima: 10MB.'
  }
};