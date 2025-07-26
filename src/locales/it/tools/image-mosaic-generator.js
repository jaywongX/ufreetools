export default {
  name: 'Generatore di Mosaici',
  description: 'Crea arte a mosaico combinando piccole immagini in una composizione più grande',

  upload: {
    title: 'Carica immagine principale',
    dropzone: 'Trascina e rilascia l\'immagine qui o clicca per sfogliare',
    maxSize: 'Dimensione massima file: 15MB',
    supportedFormats: 'Formati supportati: JPG, PNG, WEBP'
  },

  tiles: {
    title: 'Tessere del mosaico',
    uploadTiles: 'Carica tessere',
    dropzoneTiles: 'Trascina e rilascia le tessere qui o clicca per sfogliare',
    maxTiles: 'Massimo {count} immagini',
    useFolder: 'Carica cartella di immagini',
    orUseSample: 'Oppure usa la galleria di esempio',
    sampleSets: 'Set di tessere di esempio',
    nature: 'Natura',
    people: 'Persone',
    art: 'Arte',
    abstract: 'Astratto',
    animals: 'Animali',
    clearAll: 'Cancella tutte le tessere'
  },

  settings: {
    title: 'Impostazioni mosaico',
    tileSize: 'Dimensione tessere',
    small: 'Piccole (dettagliate)',
    medium: 'Medie',
    large: 'Grandi (grossolane)',
    square: 'Quadrate',
    circle: 'Rotonde',
    applicationMode: 'Modalità applicazione',
    all: 'Intera immagine',
    selectRegion: 'Seleziona area',
    selectingRegion: 'Selezione area in corso...',
    autoDetectFaces: 'Rilevamento automatico volti',
    detectFaces: 'Rileva volti',
    detectFacesDescription: 'Rileva i volti nell\'immagine e applica automaticamente il mosaico',
    edgeSmoothing: 'Sfumatura bordi',
    edgeSmoothingDescription: 'Ammorbidisce i bordi delle tessere per transizioni più naturali',
    custom: 'Personalizzato',
    width: 'Larghezza',
    height: 'Altezza',
    tilesWide: 'Numero tessere orizzontali',
    tilesHigh: 'Numero tessere verticali',
    colorMatch: 'Corrispondenza colore',
    intensity: 'Intensità',
    low: 'Bassa',
    high: 'Alta',
    reuseTiles: 'Riutilizza tessere',
    allowDuplicates: 'Permetti duplicati',
    maxUses: 'Utilizzi massimi per tessera',
    colorAdjustment: 'Regolazione colore',
    adjustTiles: 'Regola colori tessere',
    blendOriginal: 'Miscela con originale',
    blendAmount: 'Quantità miscela',
    random: 'Variazione casuale',
    shuffle: 'Mescola tessere'
  },

  advanced: {
    title: 'Opzioni avanzate',
    algorithm: 'Algoritmo di corrispondenza',
    algorithms: {
      average: 'Colore medio',
      dominant: 'Colore dominante',
      histogram: 'Istogramma colore',
      pattern: 'Corrispondenza pattern'
    },
    tileShape: 'Forma tessere',
    shapes: {
      square: 'Quadrato',
      circle: 'Cerchio',
      hexagon: 'Esagono',
      triangle: 'Triangolo',
      random: 'Casuale'
    },
    tileGap: 'Spazio tra tessere',
    borderColor: 'Colore bordo',
    backgroundColor: 'Colore sfondo'
  },

  output: {
    fileName: 'Nome file',
    title: 'Output',
    preview: 'Anteprima',
    original: 'Originale',
    mosaic: 'Mosaico',
    sideBySide: 'Affiancato',
    zoomIn: 'Ingrandisci',
    zoomOut: 'Riduci',
    download: 'Scarica mosaico',
    asJpg: 'Scarica come JPG',
    asPng: 'Scarica come PNG',
    highRes: 'Alta risoluzione',
    resolution: 'Risoluzione output',
    format: 'Formato',
    quality: 'Qualità',
    size: 'Dimensioni',
    pixel: 'Pixel',
    pleaseSelectImage: 'Seleziona un\'immagine',
    pleaseSelectImageAndAdjustSettings: 'Seleziona un\'immagine e regola le impostazioni'
  },

  actions: {
    generate: 'Genera mosaico',
    regenerate: 'Rigenera',
    cancel: 'Annulla generazione',
    reset: 'Reimposta',
    detectFaces: 'Rileva volti',
    saveSettings: 'Salva impostazioni',
    loadSettings: 'Carica impostazioni'
  },

  messages: {
    generating: 'Generazione mosaico in corso... Potrebbe richiedere tempo.',
    generationComplete: 'Mosaico generato con successo!',
    notEnoughTiles: 'Tessere insufficienti. Carica più immagini.',
    tileProcessing: 'Elaborazione tessere: {progress}%',
    downloadStarted: 'Download iniziato',
    settingsSaved: 'Impostazioni salvate',
    selecting: 'Selezione area in corso...',
    preview: 'L\'anteprima del mosaico apparirà qui',
    faceDetected: 'Volto rilevato',
    facesDetected: '{count} volti rilevati',
    noFacesDetected: 'Nessun volto rilevato',
    loadingModels: 'Caricamento modelli di rilevamento...',
    faceDetectionFailed: 'Rilevamento volti fallito',
    reset: 'Reimpostato',
    error: 'Errore: {message}'
  }
};