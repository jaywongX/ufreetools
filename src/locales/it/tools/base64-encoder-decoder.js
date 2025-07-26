export default {
  name: 'Codificatore/Decodificatore Base64',
  description: 'Converti rapidamente dati tra testo e codifica Base64',

  mode: {
    title: 'Modalità',
    encode: 'Codifica',
    decode: 'Decodifica'
  },

  input: {
    title: 'Input',
    placeholder: 'Inserisci il testo da elaborare...',
    clear: 'Pulisci',
    copy: 'Copia',
    paste: 'Incolla',
    upload: 'Carica file',
    dragDrop: 'Trascina e rilascia un file qui o clicca per caricare',
    textOption: 'Testo',
    fileOption: 'File',
    hexOption: 'Hex',
    selectFile: 'Seleziona file',
  },

  output: {
    title: 'Output',
    placeholder: 'Il risultato apparirà qui...',
    copy: 'Copia',
    download: 'Scarica',
    empty: 'Nessun output'
  },

  options: {
    title: 'Opzioni',
    encoding: 'Codifica caratteri',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: 'Usa codifica URL-safe',
    autoDecode: 'Rileva e decodifica automaticamente',
    includeDataURI: 'Includi prefisso Data URI',
    trimWhitespace: 'Rimuovi spazi bianchi',
    preserveLineBreaks: 'Mantieni a capo',
    addImageHeader:'Aggiungi intestazione Base64 per immagini',
  },

  dataUri: {
    title: 'Data URI',
    mimeType: 'Tipo MIME',
    common: 'Tipi comuni',
    custom: 'Personalizzato'
  },

  messages: {
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia fallita',
    pasteFailed: 'Incolla fallito',
    uploadSuccess: 'File caricato con successo',
    uploadFailed: 'Caricamento file fallito',
    readFailed: 'Lettura file fallita',
    invalidBase64: 'Codifica Base64 non valida',
    invalidHex: 'Codifica Hex non valida',
    fileTooLarge: 'File troppo grande, scaricalo per visualizzarlo',
    processError: 'Errore durante l\'elaborazione',
    encodeSuccess: 'Codifica completata',
    decodeSuccess: 'Decodifica completata',
    processing: 'Elaborazione in corso...'
  },

  mimeTypes: {
    'text/plain': 'Testo',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'Immagine JPEG',
    'image/png': 'Immagine PNG',
    'image/gif': 'Immagine GIF',
    'image/svg+xml': 'Immagine SVG',
    'application/pdf': 'Documento PDF'
  },

  tips: {
    title: 'Suggerimenti',
    tip1: 'La codifica Base64 può convertire qualsiasi dato binario in formato testo',
    tip2: 'L\'opzione URL-safe rimuove i caratteri "+" e "/" dal Base64 standard',
    tip3: 'Il prefisso Data URI permette di usare i dati codificati direttamente in tag HTML come img',
    tip4: 'La codifica di file grandi consuma più risorse, si consiglia di limitarsi a 2MB',
    tip5: 'Alcuni caratteri speciali potrebbero richiedere una codifica specifica per essere elaborati correttamente'
  },

  about: {
    title: 'Informazioni su Base64',
    description: 'Base64 è un metodo per rappresentare dati binari usando 64 caratteri stampabili, comunemente usato per trasmettere e memorizzare dati binari in contesti testuali.'
  },

  features: {
    title: 'Funzionalità',
    multiInput: 'Supporta input di testo, Hex e file',
    charsetSupport: 'Supporta codifiche UTF-8 e GBK',
    imagePreview: 'Anteprima immagini (file <1MB)',
    fileDownload: 'Download in vari formati (PDF di default)',
    chunkProcessing: 'Elaborazione a blocchi per file grandi con barra di avanzamento',
    autoDetect: 'Rilevamento automatico del tipo di immagine'
  },

  notes: {
    title: 'Note importanti',
    sizeIncrease: 'La codifica Base64 aumenta la dimensione dei dati di circa il 33%',
    chunkProcessing: 'I file grandi vengono elaborati a blocchi con barra di avanzamento in due fasi',
    largeFiles: 'File sopra 10MB supportano solo il download, non la visualizzazione',
    fileInput: 'Per file grandi si consiglia l\'input tramite file anziché incollare nel campo testo'
  },

  fileTypeLabel: {
    pdf: 'Documento PDF',
    txt: 'File di testo',
    jpg: 'Immagine JPG', 
    png: 'Immagine PNG', 
    zip: 'Archivio ZIP',
    bin: 'File binario',
  }
};