export default {
  name: 'Formattatore XML',
  description: 'Formatta, abbellisci e convalida documenti XML',

  options: {
    indentSize: 'Dimensione indentazione',
    useTabs: 'Usa tabulazioni',
    collapseContent: 'Comprimi contenuto',
    maxLineWidth: 'Larghezza massima riga',
    indentAttributes: 'Indenta attributi',
    sortAttributes: 'Ordina attributi',
    newlineAfterPI: 'Nuova riga dopo istruzioni',
    operationType: 'Tipo operazione',
    indentSettings: 'Impostazioni indentazione',
    displayOptions: 'Opzioni visualizzazione',
    showLineNumbers: 'Mostra numeri riga'
  },

  indentOptions: {
    twoSpaces: '2 spazi',
    fourSpaces: '4 spazi',
    tabIndent: 'Indentazione con tab'
  },

  actions: {
    format: 'Formatta XML',
    minify: 'Comprimi XML',
    validate: 'Convalida',
    toJSON: 'Converti in JSON',
    copy: 'Copia',
    clear: 'Pulisci',
    download: 'Scarica',
    upload: 'Carica XML',
    beautify: 'Abbellisci',
    copyCode: 'Copia codice'
  },

  messages: {
    copied: 'Copiato negli appunti!',
    formatSuccess: 'XML formattato con successo',
    formatError: 'Errore durante la formattazione XML',
    validXml: 'XML valido',
    invalidXml: 'XML non valido: {0}',
    lineCol: 'Riga {line}, colonna {col}',
    minifySuccess: 'XML compresso con successo',
    conversionSuccess: 'Conversione riuscita',
    conversionError: 'Errore durante la conversione',
    pleaseEnterXml: 'Inserisci contenuto XML',
    processingError: 'Errore elaborazione XML: {0}',
    formatResult: 'Risultato formattazione',
    characterCount: 'Caratteri: {0}',
    lineCount: 'Righe: {0}',
    characterAndLineCount: 'Caratteri: {0} | Righe: {1}'
  },

  input: {
    xmlInput: 'Input XML',
    placeholder: 'Incolla o digita XML qui...'
  },

  examples: {
    title: 'Esempi XML',
    description: 'Clicca per caricare esempio:',
    simpleXml: 'XML semplice',
    bookstore: 'Catalogo libreria',
    complexXml: 'XML complesso'
  }
};