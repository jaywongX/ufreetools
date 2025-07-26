export default {
  name: 'Formattatore JSON',
  description: 'Strumento online per formattare e validare JSON, supporta compressione e formattazione',

  options: {
    indent: 'Indentazione',
    sort: 'Ordina chiavi',
    compress: 'Comprimi',
    beautify: 'Formatta'
  },

  actions: {
    format: 'Formatta JSON',
    compress: 'Comprimi',
    clear: 'Pulisci',
    copy: 'Copia',
    download: 'Scarica',
    transferMeaning: 'Escape',
    contraposition: 'Unescape'
  },

  messages: {
    invalidJson: 'Sintassi JSON non valida',
    copied: 'Copiato negli appunti!',
    empty: 'Inserisci il contenuto JSON',
    formatTip: 'Mostra lista proprietà dopo formattazione o compressione JSON',
    formatSuccess: 'JSON formattato con successo',
    compressSuccess: 'JSON compresso con successo',
    escapeSuccess: 'Escape JSON eseguito con successo',
    unescapeSuccess: 'Unescape JSON eseguito con successo',
    copyFailed: 'Copia fallita, copia manualmente'
  },

  labels: {
    jsonData: 'Dati JSON',
    propertyList: 'Lista proprietà',
    clickToCopy: '(Clicca sul valore per copiare)'
  },

  placeholders: {
    jsonInput: 'Incolla i tuoi dati JSON...'
  }
};