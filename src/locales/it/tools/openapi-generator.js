export default {
  name: 'Generatore Client TypeScript da OpenAPI',
  description: 'Genera automaticamente interfacce TypeScript e codice client basato su specifiche OpenAPI, migliorando la collaborazione frontend-backend',

  options: {
    exportSchemas: 'Esporta tutte le definizioni dei modelli',
    generateClient: 'Genera codice client API',
    addComments: 'Aggiungi commenti e documentazione',
    useEnums: 'Usa enum TypeScript (invece di union di stringhe)',
    indentSize: 'Dimensione indentazione',
    operationType: 'Tipo di operazione',
    displayOptions: 'Opzioni di visualizzazione'
  },

  inputMode: {
    toggleToFile: 'Passa a caricamento file',
    toggleToText: 'Passa a input testuale',
    loadExample: 'Carica esempio'
  },

  fileUpload: {
    dragAndDrop: 'Trascina file OpenAPI qui o clicca per caricare',
    supportedFormats: 'Supporta formati .json, .yaml e .yml',
    fileSelected: 'Selezionato: {0} ({1})'
  },

  textInput: {
    placeholder: 'Incolla la specifica OpenAPI (JSON o YAML) qui...'
  },

  actions: {
    generate: 'Genera codice TypeScript',
    processing: 'Elaborazione in corso...',
    clear: 'Pulisci',
    copy: 'Copia codice',
    download: 'Scarica codice'
  },

  results: {
    generatedCode: 'Codice TypeScript generato',
    copied: 'Copiato negli appunti',
    error: 'Errore',
    characterCount: 'Conteggio caratteri: {0}'
  },

  errors: {
    parseError: 'Impossibile analizzare la specifica OpenAPI. Assicurati di fornire un formato JSON o YAML valido.',
    invalidSpec: 'Specifica OpenAPI non valida. Identificatore di versione openapi o swagger non trovato.',
    processingError: 'Errore durante l\'elaborazione della specifica OpenAPI: {0}'
  }
};