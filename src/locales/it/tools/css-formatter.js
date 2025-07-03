export default {
  name: 'Formattatore CSS',
  description: 'Formatta e abbellisce il codice CSS per migliorarne la leggibilità',
  options: {
    indentSize: 'Dimensione indentazione',
    indentWithTabs: 'Usa tabulazioni per indentare',
    convertQuotes: 'Converti virgolette',
    sortSelectors: 'Ordina selettori',
    sortProperties: 'Ordina proprietà',
    compressColors: 'Comprimi valori colore',
    expandShorthand: 'Espandi proprietà abbreviate'
  },
  actions: {
    format: 'Formatta CSS',
    minify: 'Comprimi',
    clear: 'Pulisci',
    copy: 'Copia',
    download: 'Scarica',
    upload: 'Carica file'
  },
  messages: {
    copied: 'Copiato negli appunti!',
    formatSuccess: 'CSS formattato con successo',
    formatError: 'Errore durante la formattazione del CSS',
    invalidCss: 'Sintassi CSS non valida'
  }
}