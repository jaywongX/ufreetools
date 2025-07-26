export default {
  name: 'Generatore di Gradienti CSS',
  description: 'Crea e personalizza bellissimi gradienti CSS, visualizza l\'anteprima in tempo reale e copia il codice nei tuoi progetti',

  gradientTypes: {
    title: 'Tipi di gradiente',
    linear: 'Gradiente lineare',
    radial: 'Gradiente radiale',
    conic: 'Gradiente conico'
  },

  controls: {
    title: 'Controlli colore',
    addColor: 'Aggiungi colore',
    color: 'Colore',
    position: 'Posizione (%)',
    delete: 'Rimuovi colore',
    angle: 'Angolo',
    degrees: 'gradi',
    shape: 'Forma',
    circle: 'Circolare',
    ellipse: 'Ellittico',
    positionX: 'Posizione X (%)',
    positionY: 'Posizione Y (%)',
    size: 'Dimensione',
    closestSide: 'Lato più vicino',
    closestCorner: 'Angolo più vicino',
    farthestSide: 'Lato più lontano',
    farthestCorner: 'Angolo più lontano',
    fromAngle: 'Angolo iniziale'
  },

  output: {
    title: 'Codice CSS',
    copyCode: 'Copia codice',
    preview: 'Area anteprima',
    copied: 'Codice CSS copiato negli appunti!',
    download: 'Scarica PNG'
  },

  presets: {
    title: 'Preset gradienti',
    apply: 'Applica preset',
    sunnyMorning: 'Mattina soleggiata',
    winterNeva: 'Neva invernale',
    rareWind: 'Vento raro',
    deepBlue: 'Blu profondo',
    perfect: 'Bianco perfetto',
    cloudyKnoxville: 'Knoxville nuvoloso',
    greenBeach: 'Spiaggia verde',
    plumBath: 'Bagno di prugna',
    everlasting: 'Cielo eterno'
  },

  accessibility: {
    colorPicker: 'Selettore colore',
    deleteSwatch: 'Elimina punto colore',
    dragToReposition: 'Trascina per riposizionare il punto colore'
  },

  actions: {
    reset: 'Reimposta',
    generateCSS: 'Genera CSS',
    clickToCopy: 'Clicca e copia codice',
    completeEdit: 'Completa modifica'
  },

  messages: {
    copied: 'Codice CSS copiato negli appunti!',
    noColors: 'Aggiungi almeno due colori per creare un gradiente',
    maxColors: 'Raggiunto il numero massimo di punti colore (10)',
    useKeyboard: 'Usa il tasto Canc per eliminare il punto colore selezionato',
    invalidHex: 'Inserisci un codice colore esadecimale valido',
    downloadError: 'Download PNG fallito, riprova più tardi',
    preview: 'Anteprima'
  },

  anglePresets: {
    top: 'Alto',
    topRight: 'Alto destra',
    right: 'Destra',
    bottomRight: 'Basso destra',
    bottom: 'Basso',
    bottomLeft: 'Basso sinistra',
    left: 'Sinistra',
    topLeft: 'Alto sinistra'
  },

  radialShapes: {
    circle: 'Circolare',
    ellipse: 'Ellittico'
  },

  radialSizes: {
    farthestCorner: 'Angolo più lontano',
    closestCorner: 'Angolo più vicino',
    farthestSide: 'Lato più lontano',
    closestSide: 'Lato più vicino',
  }
};