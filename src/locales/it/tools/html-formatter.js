export default {
  name: 'Strumento di formattazione HTML',
  description: 'Formatta e migliora il codice HTML per una migliore leggibilità',
  formatMode: 'Modalità di formattazione',
  beautify: 'Abbellisci',
  minify: 'Comprimi',
  formatOptions: 'Opzioni di formattazione',
  removeComments: 'Rimuovi commenti',
  preserveComments: 'Mantieni commenti',
  showLineNumbers: 'Mostra numeri di riga',
  helpText: 'Lo strumento di abbellimento/compressione HTML aiuta gli sviluppatori a organizzare o ottimizzare rapidamente il codice HTML, migliorando la leggibilità o riducendo le dimensioni dei file.',
  input: 'Input HTML',
  inputPlaceholder: 'Incolla o inserisci il codice HTML qui...',
  examples: 'Esempi',

  exampleNames: {
    simple: 'HTML semplice',
    complex: 'Pagina HTML complessa'
  },

  beautifiedResult: 'Risultato abbellito',
  minifiedResult: 'Risultato compresso',

  stats: {
    chars: 'Caratteri',
    lines: 'Righe',
    reduction: 'Riduzione di {chars} caratteri ({percent}%)'
  },

  indentOptions: {
    spaces: '{count} spazi',
    tab: 'Indentazione con tab'
  },

  errorMessages: {
    emptyInput: 'Inserisci il codice HTML da elaborare',
    processingFailed: 'Elaborazione HTML fallita: {message}'
  },

  options: {
    indentSize: 'Dimensione indentazione',
    wrapLength: 'Lunghezza riga',
    indentInnerHtml: 'Indenta HTML interno',
    preserveNewlines: 'Mantieni a capo',
    maxPreserveNewlines: 'Numero massimo di a capo consecutivi',
    wrapAttributes: 'A capo per attributi',
    sortAttributes: 'Ordina attributi',
    sortClassNames: 'Ordina nomi classi'
  },

  actions: {
    format: 'Formatta HTML',
    minify: 'Comprimi',
    clear: 'Pulisci',
    copy: 'Copia',
    download: 'Scarica',
    upload: 'Carica file'
  },

  messages: {
    copied: 'Copiato negli appunti!',
    formatSuccess: 'Formattazione HTML riuscita',
    formatError: 'Errore durante la formattazione HTML',
    invalidHtml: 'Sintassi HTML non valida'
  }
};