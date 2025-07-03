export default {
  name: 'Formattazione del Codice',
  description: 'Formatta e abbellisce codice in diversi linguaggi',
  languages: {
    title: 'Linguaggi',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown'
  },
  options: {
    title: 'Opzioni',
    indent: 'Indentazione',
    tabSize: 'Dimensione tabulazione',
    insertSpaces: 'Inserisci spazi',
    formatSelection: 'Formatta selezione',
    formatOnType: 'Formatta durante la digitazione',
    removeComments: 'Rimuovi commenti',
    mangle: 'Obfuscazione nomi variabili',
    lineBreak: 'Stile a capo'
  },
  actions: {
    beautify: 'Abbellisci',
    minify: 'Comprimi',
    format: 'Formatta',
    copy: 'Copia risultato',
    clear: 'Svuota',
    download: 'Scarica',
    paste: 'Incolla dagli appunti',
    loadSample: 'Carica codice di esempio'
  },
  messages: {
    formatSuccess: 'Codice formattato con successo',
    formatError: 'Errore durante la formattazione del codice',
    copied: 'Copiato negli appunti!',
    languageChangeWarning: 'Cambiare linguaggio reimposterà il tuo codice. Continuare?'
  },
  errors: {
    emptyCode: 'Inserisci il codice da formattare',
    invalidJson: 'JSON non valido',
    jsCompressionError: 'Errore di compressione JavaScript'
  },
  input: 'Input',
  output: 'Output',
  placeholders: {
    input: 'Incolla qui il tuo codice...',
    output: 'Il codice formattato apparirà qui...'
  },
  characters: 'Caratteri',
  space: 'Spazio',
  spaces: 'Spazi',
  auto: 'Automatico',
  tips: {
    title: 'Suggerimenti',
    selectLanguage: 'Per i migliori risultati di formattazione, seleziona il linguaggio appropriato per il tuo codice.',
    beautifyMinify: 'Usa la funzione "Abbellisci" per migliorare la leggibilità del codice e "Comprimi" per ridurre le dimensioni del file.',
    customizeOptions: 'Usa il pannello delle impostazioni qui sotto per personalizzare le opzioni di formattazione.',
    keyboard: 'Premi il tasto Tab nell\'editor per inserire l\'indentazione.'
  }
}