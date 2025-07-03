export default {
  name: 'Formattazione SQL',
  description: 'Strumento online per formattare e validare SQL, supporta compressione e abbellimento',
  options: {
    language: 'Dialetto SQL',
    indent: 'Tipo di indentazione',
    spaceCount: 'Numero di spazi',
    keywordCase: 'Maiuscole/minuscole per parole chiave',
    uppercase: 'Parole chiave in maiuscolo',
    lineBreak: 'Stile a capo',
    tabSize: 'Dimensione tabulazione'
  },
  languages: {
    standard: 'SQL standard',
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    tsql: 'T-SQL (SQL Server)',
    oracle: 'Oracle PL/SQL'
  },
  indentOptions: {
    spaces: 'Spazi',
    tabs: 'Indentazione con tab'
  },
  spaceOptions: {
    two: '2 spazi',
    four: '4 spazi'
  },
  caseOptions: {
    preserve: 'Mantieni originale',
    upper: 'Maiuscolo',
    lower: 'Minuscolo'
  },
  actions: {
    format: 'Formatta SQL',
    minify: 'Comprimi SQL',
    clear: 'Pulisci',
    copy: 'Copia',
    download: 'Scarica',
  },
  messages: {
    copied: 'Copiato negli appunti!',
    formatSuccess: 'Formattazione SQL riuscita',
    formatError: 'Errore durante la formattazione SQL'
  },
  placeholders: {
    input: 'Inserisci la query SQL qui...',
    output: 'Il SQL formattato apparirà qui...'
  },
  output: 'Risultato formattato',
  tips: {
    title: 'Suggerimenti per l\'uso',
    dialect: 'Seleziona il dialetto SQL appropriato per ottenere risultati di formattazione accurati.',
    formatting: 'Personalizza lo stile di indentazione e il numero di spazi per adattarli al tuo stile di codifica preferito.',
    keywords: 'Scegli se mantenere, convertire in maiuscolo o minuscolo le parole chiave SQL.',
    copy: 'Usa il pulsante copia per trasferire rapidamente il SQL formattato negli appunti.'
  }
}