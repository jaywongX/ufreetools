export default {
  name: 'Strumento CSV a JSON',
  description: 'Converti dati CSV in formato JSON con opzioni personalizzabili',

  options: {
    delimiter: 'Separatore',
    quote: 'Carattere di citazione',
    header: 'Prima riga come intestazione',
    dynamicTyping: 'Tipizzazione dinamica',
    dynamicTypingDescription: 'Converte stringhe numeriche in numeri, "vero/falso" in booleani, ecc.',
    skipEmptyLines: 'Salta righe vuote',
    comments: 'Carattere per i commenti',
    outputFormat: 'Formato di output',
    indentation: 'Indentazione',
    encoding: 'Codifica',
    newline: 'Carattere di nuova riga',
    title: 'Opzioni di conversione'
  },

  delimiters: {
    comma: 'Virgola (,)',
    semicolon: 'Punto e virgola (;)',
    tab: 'Tabulazione (\\t)',
    pipe: 'Barra verticale (|)',
    custom: 'Personalizzato'
  },

  formats: {
    array: 'Array di oggetti',
    arrayOfArrays: 'Array di array',
    keyed: 'Oggetto con chiavi',
    nested: 'Oggetto annidato'
  },

  preview: {
    input: 'Input...',
    output: 'Output...',
    rawCsv: 'CSV grezzo',
    parsedCsv: 'CSV analizzato',
    jsonOutput: 'Output JSON',
    firstRows: 'Prime {count} righe',
    showAll: 'Mostra tutto'
  },

  actions: {
    convert: 'Converti',
    copy: 'Copia JSON',
    download: 'Scarica JSON',
    clear: 'Pulisci',
    uploadCsv: 'Carica CSV',
    swap: 'Scambia input/output',
    loadExample: 'Carica esempio',
    clearInput: 'Pulisci input',
    formatOutput: 'Formatta output',
    copyResult: 'Copia risultato',
    downloadResult: 'Scarica risultato',
    paste: 'Incolla',
    showOptions: 'Mostra opzioni',
    hideOptions: 'Nascondi opzioni',
    uploadJson: 'Carica JSON'
  },

  results: {
    rowsProcessed: '{count} righe processate',
    conversionComplete: 'Conversione completata',
    copied: 'Copiato negli appunti',
    downloaded: 'Scaricato',
    error: 'Errore'
  },

  errors: {
    noData: 'Nessun dato CSV da convertire',
    invalidCsv: 'Formato CSV non valido',
    parsingFailed: 'Analisi fallita: {error}',
    missingHeader: 'Manca riga di intestazione',
    invalidJson: 'Formato JSON non valido',
    formatFailed: 'Formattazione fallita: {error}',
    copyFailed: 'Copia fallita, copia manualmente',
    downloadFailed: 'Download fallito',
    pasteError: 'Impossibile incollare dagli appunti',
    conversionFailed: 'Conversione fallita'
  },

  conversion: {
    title: 'Direzione conversione',
    csvToJson: {
      title: 'CSV a JSON',
      delimiterLabel: 'Separatore',
      headerLabel: 'Prima riga come intestazione',
      dynamicTypingLabel: 'Inferisci tipi di dati',
      skipEmptyLinesLabel: 'Salta righe vuote',
      convertButton: 'Converti CSV in JSON'
    },
    jsonToCsv: {
      title: 'JSON a CSV',
      delimiterLabel: 'Separatore',
      headerLabel: 'Includi riga di intestazione',
      quotesLabel: 'Aggiungi virgolette a tutti i campi',
      nestedModeLabel: 'Modalità di gestione dati annidati',
      flat: 'Appiattisci',
      stringify: 'Converti in stringa',
      ignore: 'Ignora',
      convertButton: 'Converti JSON in CSV'
    }
  },

  stats: {
    processed: 'Righe di dati processate',
    fields: 'Numero di campi/colonne',
    inputSize: 'Dimensione input',
    outputSize: 'Dimensione output',
    title: 'Statistiche'
  },

  messages: {
    copied: 'Copiato negli appunti',
    download: 'Scaricato',
    error: 'Errore'
  },

  formatBytes: {
    bytes: 'byte',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  }
};