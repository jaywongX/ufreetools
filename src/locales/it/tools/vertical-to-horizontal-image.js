export default {
  name: 'Convertitore Verticale a Orizzontale',
  description: 'Converte immagini verticali in formato orizzontale con diverse opzioni di conversione',

  upload: {
    title: 'Carica Immagine',
    dropzone: 'Trascina e rilascia l\'immagine qui',
    maxSize: 'Dimensione massima: 10MB',
    supportedFormats: 'Formati supportati: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Impostazioni Conversione',
    presets: 'Preset rapidi',
    conversionMode: 'Modalità conversione',
    modes: {
      rotate: 'Ruota',
      fill: 'Riempimento sfondo',
      blur: 'Sfocatura sfondo',
      stretch: 'Allunga bordi',
      dualColor: 'Sfondo bicolore'
    },
    rotationAngle: 'Angolo di rotazione',
    fillColor: 'Colore sfondo',
    blurRadius: 'Intensità sfocatura',
    stretchEdges: 'Intensità allungamento',
    leftColor: 'Colore sinistro',
    rightColor: 'Colore destro',
    sizeOption: 'Impostazioni dimensioni',
    sizeModes: {
      auto: 'Dimensioni automatiche',
      preset: 'Dimensioni predefinite',
      custom: 'Dimensioni personalizzate'
    },
    sizePresets: 'Preset dimensioni',
    outputSize: 'Dimensioni output',
    width: 'Larghezza',
    height: 'Altezza',
    dimensionsHint: 'Inserisci dimensioni in pixel',
    autoSize: 'Calcola dimensioni automaticamente',
    outputFormat: 'Formato output',
    quality: 'Qualità immagine',
    advancedOptions: 'Opzioni avanzate',
    preserveRatio: 'Mantieni proporzioni',
    sharpen: 'Nitidezza',
    addWatermark: 'Aggiungi watermark',
    watermarkPlaceholder: 'Inserisci testo watermark',
    watermarkColor: 'Colore watermark'
  },

  output: {
    preview: 'Anteprima risultato',
    dimensions: 'Dimensioni',
    before: 'Prima',
    after: 'Dopo'
  },

  actions: {
    selectImage: 'Seleziona immagine',
    convert: 'Converti immagine',
    download: 'Scarica immagine',
    reset: 'Rimuovi',
    showSideBySide: 'Mostra confronto',
    hideComparison: 'Nascondi confronto',
    hideSideBySide: 'Chiudi'
  },

  messages: {
    processing: 'Elaborazione immagine in corso...',
    convertPrompt: 'Il risultato della conversione apparirà qui',
    error: 'Errore durante l\'elaborazione',
    success: 'Conversione completata con successo!'
  },

  examples: {
    title: 'Suggerimenti',
    social: 'Perfetto per post sui social, le immagini orizzontali performano meglio',
    socialTip: 'Usa la modalità sfocatura per i migliori risultati sui social',
    website: 'Crea banner per siti web e blog',
    websiteTip: 'La modalità bicolore è perfetta per banner web'
  },

  help: {
    title: 'Come usare questo strumento',
    description: 'Questo strumento converte immagini verticali in formato orizzontale mantenendo qualità ed effetti visivi.',
    example1: {
      title: 'Post social media',
      description: 'Converti foto verticali in formato orizzontale con sfondo sfocato per i social'
    },
    example2: {
      title: 'Banner sito web',
      description: 'Crea header e banner per siti web partendo da immagini verticali con sfondo colorato'
    }
  }
};