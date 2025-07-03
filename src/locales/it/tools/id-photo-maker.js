export default {
  name: 'Creatore di Foto Tessera',
  description: 'Crea foto tessera professionali con sfondi e dimensioni personalizzabili',
  upload: {
    title: 'Carica immagine',
    dropzone: 'Trascina e rilascia l\'immagine qui o fai clic per sfogliare',
    or: 'oppure',
    camera: 'Scatta una foto con la fotocamera',
    constraints: 'Dimensione massima: 10MB. Formati: JPG, PNG, WEBP',
    takePicture: 'Scatta foto',
    retake: 'Riscatta'
  },
  editing: {
    title: 'Modifica foto',
    faceDetection: 'Rilevamento volto',
    autoDetect: 'Rilevamento automatico del volto',
    manualMode: 'Modalità manuale',
    zoom: 'Zoom',
    rotate: 'Ruota',
    brightness: 'Luminosità',
    contrast: 'Contrasto',
    saturation: 'Saturazione',
    filters: 'Filtri'
  },
  background: {
    title: 'Sfondo',
    original: 'Originale',
    white: 'Bianco',
    blue: 'Blu',
    red: 'Rosso',
    custom: 'Colore personalizzato',
    transparent: 'Trasparente'
  },
  size: {
    title: 'Dimensioni foto',
    presets: 'Dimensioni predefinite',
    custom: 'Dimensioni personalizzate',
    width: 'Larghezza',
    height: 'Altezza',
    unit: 'Unità',
    mm: 'Millimetri',
    inches: 'Pollici',
    pixels: 'Pixel'
  },
  presets: {
    passport: 'Passaporto (35×45 mm)',
    visa: 'Visto (2×2 pollici)',
    drivingLicense: 'Patente di guida (2.5×3 pollici)',
    idCard: 'Carta d\'identità (25×35 mm)',
    linkedin: 'LinkedIn (400×400 pixel)',
    schengen: 'Visto Schengen (35×45 mm)',
    chinese: 'Visto cinese (33×48 mm)',
    indian: 'Visto indiano (2×2 pollici)'
  },
  output: {
    title: 'Output',
    preview: 'Anteprima',
    grid: 'Foto multiple',
    columns: 'Numero di colonne',
    rows: 'Numero di righe',
    spacing: 'Spaziatura',
    background: 'Sfondo della pagina',
    paperSize: 'Dimensioni carta',
    download: 'Scarica',
    print: 'Stampa',
    downloadAs: 'Scarica come',
    jpg: 'Immagine JPG',
    png: 'Immagine PNG',
    pdf: 'Documento PDF'
  },
  actions: {
    apply: 'Applica',
    reset: 'Ripristina',
    undo: 'Annulla',
    redo: 'Ripristina',
    save: 'Salva foto',
    share: 'Condividi'
  },
  messages: {
    noFaceDetected: 'Nessun volto rilevato. Prova a regolare manualmente o usa una foto diversa.',
    multipleFacesDetected: 'Rilevati più volti. Verrà utilizzato il volto più grande.',
    processing: 'Elaborazione della tua foto in corso...',
    downloadReady: 'La tua foto è pronta per il download',
    photoSaved: 'Foto salvata con successo'
  }
}