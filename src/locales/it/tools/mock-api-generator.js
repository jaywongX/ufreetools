export default {
  name: 'Generatore Mock API',
  description: 'Genera automaticamente API mock basate su specifiche OpenAPI',

  options: {
    version: 'Versione OpenAPI',
    format: 'Formato output',
    includeExamples: 'Includi risposte di esempio',
    responseDynamism: 'Dinamismo risposta',
    responseType: 'Tipo di risposta',
    arrayLength: 'Lunghezza array',
    responseFormat: 'Formato risposta'
  },

  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },

  actions: {
    generate: 'Genera Mock',
    preview: 'Anteprima API',
    clear: 'Pulisci',
    copy: 'Copia codice',
    download: 'Scarica',
    uploadSpec: 'Carica specifica OpenAPI',
    uploadJava: 'Carica file classe Java',
    generateJson: 'Genera JSON',
    generateBuilder: 'Genera Builder',
    format: 'Formatta'
  },

  messages: {
    copied: 'Copiato negli appunti!',
    generationSuccess: 'Generazione Mock API riuscita',
    generationError: 'Errore durante la generazione Mock API',
    specRequired: 'Fornisci una specifica OpenAPI',
    fileUploaded: 'File caricato',
    parseError: 'Analisi classe Java fallita, verifica il formato del file'
  },

  help: {
    uploadHint: 'Supporta il caricamento di file .java per analizzare automaticamente la struttura della classe e generare configurazioni mock. Non supporta ancora proprietà di oggetti multilivello.'
  },

  fields: {
    title: 'Definizione campi',
    addField: 'Aggiungi campo',
    addChildField: 'Aggiungi campo figlio',
    fieldName: 'Nome campo'
  },

  fieldTypes: {
    string: 'Stringa',
    number: 'Numero',
    boolean: 'Booleano',
    date: 'Data',
    name: 'Nome',
    email: 'Email',
    phone: 'Telefono',
    address: 'Indirizzo',
    id: 'ID',
    image: 'URL immagine',
    array: 'Array',
    object: 'Oggetto'
  },

  array: {
    itemType: 'Tipo elemento array',
    arrayFields: 'Campi array'
  },

  object: {
    childFields: 'Campi figlio'
  },

  responseTypes: {
    object: 'Oggetto singolo',
    array: 'Array di oggetti',
    custom: 'Struttura personalizzata'
  },

  responseFormats: {
    dataOnly: 'Solo dati',
    standard: 'Risposta REST standard (code, data, message)'
  },

  placeholder: {
    output: '// I dati mock generati appariranno qui'
  }
};