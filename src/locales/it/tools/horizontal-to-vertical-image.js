export default {
  name: 'Orizzontale a Verticale',
  description: 'Converti immagini orizzontali in formato verticale per storie, wallpaper e social media',
  tags: ['immagini', 'conversione', 'mobile', 'social', 'storie', 'verticale', 'ritratto'],

  upload: {
    title: 'Convertitore Orizzontale-Verticale',
    dropzone: 'Trascina un\'immagine qui',
    maxSize: 'Dimensione massima: 10MB',
    supportedFormats: 'Formati supportati: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Impostazioni',
    presets: 'Preimpostazioni',
    conversionMode: 'Modalità conversione',
    modes: {
      crop: 'Ritaglio',
      fill: 'Riempimento colore',
      blur: 'Sfocatura sfondo',
      stretch: 'Stiramento bordi',
      dualColor: 'Sfondo bicolore'
    },
    cropPosition: 'Posizione ritaglio',
    positions: {
      left: 'Sinistra',
      center: 'Centro',
      right: 'Destra'
    },
    fillColor: 'Colore riempimento',
    blurRadius: 'Intensità sfocatura',
    stretchFactor: 'Fattore stiramento',
    topColor: 'Colore superiore',
    bottomColor: 'Colore inferiore',
    sizeOption: 'Dimensioni output',
    sizeModes: {
      auto: 'Automatico',
      preset: 'Preimpostato',
      custom: 'Personalizzato'
    },
    sizePresets: 'Dimensioni predefinite',
    outputSize: 'Dimensioni personali',
    width: 'Larghezza',
    height: 'Altezza',
    dimensionsHint: 'Inserisci dimensioni in pixel',
    outputFormat: 'Formato output',
    quality: 'Qualità immagine',
    advancedOptions: 'Opzioni avanzate',
    preserveRatio: 'Mantieni proporzioni',
    sharpen: 'Nitidezza',
    addWatermark: 'Aggiungi watermark',
    watermarkPlaceholder: 'Testo watermark',
    watermarkColor: 'Colore watermark'
  },

  output: {
    preview: 'Anteprima',
    before: 'Prima',
    after: 'Dopo',
    dimensions: 'Dimensioni'
  },

  actions: {
    selectImage: 'Seleziona immagine',
    convert: 'Converti in verticale',
    download: 'Scarica immagine',
    showSideBySide: 'Mostra confronto',
    hideSideBySide: 'Nascondi confronto',
    hideComparison: 'Nascondi confronto'
  },

  messages: {
    convertPrompt: 'Carica un\'immagine orizzontale da convertire',
    processing: 'Elaborazione in corso...',
    imageOnly: 'Seleziona solo file immagine'
  },

  examples: {
    title: 'Esempi applicativi',
    social: 'Crea storie verticali per Instagram, TikTok',
    socialTip: 'Conversione perfetta per contenuti verticali',
    mobile: 'Crea wallpaper per smartphone',
    mobileTip: 'Ottimizzato per tutti gli schermi'
  }
};