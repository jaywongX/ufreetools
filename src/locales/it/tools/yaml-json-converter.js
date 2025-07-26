export default {
  name: 'Convertitore YAML-JSON',
  description: 'Converti tra formati YAML e JSON con opzioni personalizzabili',

  input: {
    title: 'Input',
    yamlPlaceholder: 'Inserisci YAML qui...',
    jsonPlaceholder: 'Inserisci JSON qui...',
    loadSample: 'Carica esempio',
    clearInput: 'Pulisci input',
    uploadFile: 'Carica file'
  },

  output: {
    title: 'Output',
    copyOutput: 'Copia output',
    downloadOutput: 'Scarica output',
    clearOutput: 'Pulisci output'
  },

  options: {
    conversionMode: 'Modalità conversione',
    jsonToYaml: 'JSON a YAML',
    yamlToJson: 'YAML a JSON',
    formatOutput: 'Formatta output',
    indentSize: 'Dimensione indentazione',
    quoteKeys: 'Aggiungi virgolette alle chiavi',
    sortKeys: 'Ordina chiavi alfabeticamente',
    flowStyle: 'Stile flusso YAML',
    jsonCompatible: 'Compatibile JSON',
    singleQuotes: 'Usa apici singoli',
    includeSchema: 'Includi schema',
    preserveKeyOrder: 'Mantieni ordine chiavi'
  },

  flowStyles: {
    block: 'Stile blocco',
    flow: 'Stile flusso',
    auto: 'Automatico'
  },

  validation: {
    validate: 'Valida prima della conversione',
    validInput: '{format} valido',
    invalidInput: '{format} non valido: {error}',
    checkSyntax: 'Controlla sintassi'
  },

  actions: {
    convert: 'Converti',
    swap: 'Scambia formati',
    beautify: 'Abbellisci',
    minify: 'Comprimi'
  },

  messages: {
    conversionSuccess: 'Conversione riuscita',
    conversionFailed: 'Conversione fallita: {error}',
    copySuccess: 'Copiato negli appunti',
    downloadSuccess: 'File scaricato con successo',
    emptyInput: 'Inserisci contenuto da convertire',
    invalidYaml: 'Sintassi YAML non valida',
    invalidJson: 'Sintassi JSON non valida'
  }
};