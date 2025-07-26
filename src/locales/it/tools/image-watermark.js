export default {
  name: 'Strumento Filigrana Immagini',
  description: 'Aggiungi filigrane di testo o immagini alle tue foto con impostazioni personalizzabili',

  upload: {
    title: 'Carica immagine',
    dropzone: 'Trascina e rilascia un\'immagine qui o clicca per sfogliare',
    addMore: 'Aggiungi altre immagini',
    clearAll: 'Cancella tutto',
    maxFiles: 'Massimo {count} immagini',
    maxSize: 'Dimensione massima per immagine: {size}MB',
    supportedFormats: 'Formati supportati: JPG, PNG, WEBP, GIF'
  },

  watermarkType: {
    title: 'Tipo di filigrana',
    text: 'Filigrana di testo',
    image: 'Filigrana immagine',
    both: 'Testo e immagine'
  },

  textWatermark: {
    title: 'Filigrana di testo',
    text: 'Testo filigrana',
    font: 'Font',
    size: 'Dimensione',
    color: 'Colore',
    opacity: 'Opacità',
    rotation: 'Rotazione',
    shadow: 'Ombra testo',
    background: 'Sfondo testo',
    padding: 'Spaziatura interna',
    border: 'Bordo',
    spacing: 'Spaziatura caratteri'
  },

  imageWatermark: {
    title: 'Filigrana immagine',
    upload: 'Carica immagine filigrana',
    selectLogo: 'Seleziona logo',
    presetLogos: 'Logo predefiniti',
    size: 'Dimensione',
    opacity: 'Opacità',
    rotation: 'Rotazione',
    offset: 'Offset'
  },

  positioning: {
    title: 'Posizionamento',
    position: 'Posizione',
    custom: 'Posizione personalizzata',
    xPosition: 'Posizione X',
    yPosition: 'Posizione Y',
    tiled: 'Modalità affiancata',
    margin: 'Margine',
    scale: 'Ridimensiona con l\'immagine'
  },

  positions: {
    topLeft: 'In alto a sinistra',
    topCenter: 'In alto al centro',
    topRight: 'In alto a destra',
    middleLeft: 'A sinistra al centro',
    middleCenter: 'Centrato',
    middleRight: 'A destra al centro',
    bottomLeft: 'In basso a sinistra',
    bottomCenter: 'In basso al centro',
    bottomRight: 'In basso a destra',
    custom: 'Posizione personalizzata'
  },

  output: {
    title: 'Output',
    quality: 'Qualità output',
    format: 'Formato output',
    original: 'Come originale',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'Anteprima',
    downloadIndividual: 'Scarica singolo',
    downloadAll: 'Scarica tutto',
    downloadAsZip: 'Scarica come ZIP'
  },

  presets: {
    title: 'Preimpostazioni',
    save: 'Salva impostazioni correnti',
    load: 'Carica preimpostazione',
    delete: 'Elimina preimpostazione',
    presetName: 'Nome preimpostazione'
  },

  actions: {
    apply: 'Applica filigrana',
    applyToAll: 'Applica a tutto',
    reset: 'Reimposta',
    preview: 'Anteprima',
    undo: 'Annulla',
    cancel: 'Annulla elaborazione'
  },

  messages: {
    processing: 'Elaborazione in corso...',
    success: 'Filigrana applicata con successo',
    error: 'Errore: {error}',
    noImages: 'Aggiungi prima delle immagini',
    noWatermark: 'Aggiungi una filigrana di testo o immagine',
    presetSaved: 'Preimpostazione salvata',
    presetLoaded: 'Preimpostazione caricata',
    presetDeleted: 'Preimpostazione eliminata',
    watermarkApplied: 'Filigrana applicata',
    watermarkImageLoadError: 'Errore nel caricamento dell\'immagine filigrana',
    imageLoadError: 'Errore nel caricamento dell\'immagine',
    resetSuccess: 'Reimpostato',
    downloadStarted: 'Download iniziato',
    downloadError: 'Errore nel download dell\'immagine',
    imageLoaded: 'Immagine caricata',
    canvasInitError: 'Errore nell\'inizializzazione della canvas',
    tiledWatermarkError: 'Errore nella creazione della filigrana affiancata'
  }
};