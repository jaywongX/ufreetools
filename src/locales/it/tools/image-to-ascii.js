export default {
  name: 'Convertitore Immagine ad ASCII',
  description: 'Trasforma immagini in arte ASCII con opzioni personalizzabili',

  upload: {
    title: 'Carica immagine',
    dropzone: 'Trascina e rilascia un\'immagine qui o clicca per sfogliare',
    maxSize: 'Dimensione massima file: 5MB',
    supportedFormats: 'Formati supportati: JPG, PNG, WEBP, GIF',
    pasteImage: 'Oppure incolla un\'immagine dagli appunti'
  },

  options: {
    title: 'Opzioni conversione',
    width: 'Larghezza output',
    height: 'Altezza output',
    preserveAspect: 'Mantieni proporzioni',
    colored: 'Output a colori',
    charSet: 'Set di caratteri',
    charSets: {
      standard: 'Standard',
      simple: 'Semplice',
      complex: 'Complesso',
      blocks: 'Caratteri a blocchi',
      custom: 'Personalizzato'
    },
    customChars: 'Caratteri personalizzati',
    invert: 'Inverti colori',
    threshold: 'Soglia luminosità',
    brightness: 'Luminosità',
    contrast: 'Contrasto',
    fontFamily: 'Famiglia font',
    fontSize: 'Dimensione font',
    lineHeight: 'Altezza linea',
    backgroundColor: 'Colore sfondo',
    textColor: 'Colore testo'
  },

  output: {
    title: 'Output ASCII',
    preview: 'Anteprima',
    raw: 'ASCII grezzo',
    html: 'HTML',
    copyToClipboard: 'Copia negli appunti',
    downloadTxt: 'Scarica come TXT',
    downloadHtml: 'Scarica come HTML',
    downloadImage: 'Scarica come immagine',
    stats: {
      title: 'Statistiche',
      characters: 'Numero caratteri',
      lines: 'Numero righe',
      colors: 'Numero colori',
      size: 'Dimensione testo'
    }
  },

  presets: {
    title: 'Preset',
    save: 'Salva impostazioni correnti',
    load: 'Carica preset',
    delete: 'Elimina preset',
    presetName: 'Nome preset',
    default: 'Predefinito',
    detailed: 'Dettagliato',
    minimalist: 'Minimalista',
    blocky: 'Stile a blocchi',
    small: 'Piccolo',
    inverted: 'Invertito'
  },

  adjustment: {
    title: 'Regolazione immagine',
    grayscale: 'Scala di grigi',
    negative: 'Negativo',
    resize: 'Ridimensiona prima della conversione',
    crop: 'Ritaglia immagine',
    rotate: 'Ruota',
    flipH: 'Rifletti orizzontalmente',
    flipV: 'Rifletti verticalmente'
  },

  animation: {
    title: 'Animazione',
    animated: 'Elabora come animazione',
    frameDelay: 'Ritardo frame',
    loop: 'Loop animazione',
    loopCount: 'Numero loop',
    extractFrame: 'Estrai frame corrente'
  },

  actions: {
    convert: 'Converti in ASCII',
    resetOptions: 'Reimposta opzioni',
    refreshPreview: 'Aggiorna anteprima',
    loadImage: 'Carica nuova immagine',
    applyChanges: 'Applica modifiche',
    selectImage: 'Seleziona immagine',
    reset: 'Reimposta',
    processing: 'Elaborazione...',
    generate: 'Genera ASCII',
    copy: 'Copia',
    download: 'Scarica'
  },

  messages: {
    converting: 'Conversione immagine in ASCII...',
    conversionComplete: 'Conversione completata',
    conversionFailed: 'Conversione immagine fallita: {error}',
    copied: 'ASCII copiato negli appunti',
    downloadStarted: 'Download iniziato',
    downloadComplete: 'ASCII scaricato',
    downloadFailed: 'Download fallito',
    copyFailed: 'Copia fallita',
    resetComplete: 'Reimpostato',
    asciiGenerated: 'Arte ASCII generata',
    generationFailed: 'Generazione ASCII fallita',
    presetSaved: 'Preset salvato',
    presetLoaded: 'Preset caricato',
    presetDeleted: 'Preset eliminato',
    invalidImage: 'Formato immagine non valido o file danneggiato',
    imageTooBig: 'Immagine troppo grande per la conversione',
    selectOrLoad: 'Seleziona un\'immagine o carica da URL',
    asciiWillDisplay: 'L\'ASCII verrà visualizzato qui',
    customCharsPlaceholder: 'Inserisci caratteri, ordinati da scuro a chiaro...',
    tip: 'Dopo aver regolato le impostazioni, clicca "Genera ASCII" per vedere i cambiamenti',
    drapPlaceHolder: 'Seleziona o trascina un\'immagine qui',
    noImage: 'Seleziona prima un\'immagine',
    generateAscii: 'Clicca "Genera ASCII" per convertire l\'immagine',
    tip2: 'Suggerimento: usa il pulsante copia per copiare l\'arte ASCII negli appunti, o scaricala come file di testo.'
  },

  charSets: {
    standard: 'Standard',
    simple: 'Semplice',
    blocks: 'Blocchi',
    custom: 'Personalizzato'
  },

  settings: {
    title: 'Impostazioni ASCII',
    customCharsetLabel: 'Set caratteri personalizzato (da scuro a chiaro)',
    asciiWidth: 'Larghezza ASCII',
    invert: 'Inverti colori',
    colored: 'Output a colori',
    fontSize: 'Dimensione font'
  },

  preview: {
    originalImage: 'Immagine originale',
    generatedAscii: 'ASCII generato'
  }
};