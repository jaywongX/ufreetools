export default {
  name: 'Estrattore di Colori da Immagini',
  description: 'Estrai palette di colori e colori dominanti da qualsiasi immagine',

  input: {
    title: 'Carica immagine',
    dropzone: 'Trascina e rilascia un\'immagine qui oppure clicca per caricare',
    formats: 'Formati supportati: JPG, PNG, GIF, WebP, SVG',
    browse: 'Sfoglia file',
    selectImage: 'Seleziona immagine',
    orText: 'oppure',
    pasteUrl: 'Incolla URL immagine:',
    loadUrl: 'Carica da URL',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: 'Immagine senza nome'
  },

  options: {
    title: 'Opzioni di estrazione',
    extractSettings: 'Impostazioni estrazione',
    colorCount: 'Numero di colori',
    paletteSize: 'Dimensione palette',
    paletteMin: 'Minimo (3)',
    paletteMax: 'Massimo (20)',
    colorSimilarity: 'Similarità colore',
    similiarityToggle: 'Consenti colori simili',
    quality: 'Qualità estrazione',
    colorModel: 'Modello colore',
    colorSpace: 'Spazio colore',
    colorFormat: 'Formato colore',
    sortBy: 'Ordina colori per',
    sortByPopularity: 'Frequenza di apparizione',
    sortByLuminance: 'Luminosità',
    sortByHue: 'Tonalità',
    sortBySaturation: 'Saturazione',
    ignoreWhite: 'Ignora bianco',
    ignoreBlack: 'Ignora nero',
    threshold: 'Soglia similarità'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: 'Esadecimale (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA con trasparenza',
    hsl: 'HSL',
    hsla: 'HSLA con trasparenza',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: 'Frequenza',
    luminance: 'Luminosità',
    hue: 'Tonalità',
    saturation: 'Saturazione',
    original: 'Ordine originale'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: 'Colori estratti',
    colorsFound: '{count} colori estratti',
    dominantColor: 'Colore dominante',
    mainColor: 'Colore principale',
    complementary: 'Colore complementare',
    palette: 'Palette colori',
    colorPalette: 'Palette colori',
    palettePreview: 'Anteprima palette',
    usage: 'Utilizzo colore (%)',
    percentage: 'Percentuale: {value}%',
    copyAll: 'Copia tutti i colori',
    clickToCopy: 'Clicca per copiare: {color}',
    downloading: 'Download palette in corso...'
  },

  display: {
    originalImage: 'Immagine originale',
    colorPalette: 'Palette colori',
    uploadFirst: 'Carica prima un\'immagine',
    clickExtract: 'Clicca "Estrai colori" per ottenere la palette dell\'immagine',
  },

  actions: {
    extract: 'Estrai colori',
    extracting: 'Elaborazione in corso...',
    download: 'Scarica palette',
    copy: 'Copia',
    copyValue: 'Copia valore',
    reset: 'Ripristina',
    copyPalette: 'Copia palette',
    exportJson: 'Esporta come JSON',
    exportCss: 'Esporta come variabili CSS',
    exportSass: 'Esporta come variabili SASS',
    exportSwatch: 'Esporta come campioni ASE'
  },

  palette: {
    title: 'Palette denominate',
    vibrant: 'Vivace',
    muted: 'Sobrio',
    dark: 'Scuro',
    light: 'Chiaro',
    custom: 'Personalizzato'
  },

  messages: {
    imageLoaded: 'Immagine caricata con successo',
    processingImage: 'Elaborazione immagine in corso...',
    extractionComplete: 'Estrazione colori completata',
    extractionFailed: 'Estrazione fallita: {error}',
    copied: 'Copiato negli appunti',
    copiedColor: 'Copiato: {color}',
    copiedAll: 'Tutti i colori copiati',
    copyFailed: 'Copia fallita',
    resetDone: 'Ripristino effettuato',
    invalidImage: 'File immagine non valido',
    noImageSelected: 'Nessuna immagine selezionata'
  }
};