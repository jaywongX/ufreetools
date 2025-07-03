export default {
  name: 'Beautifier di Codice',
  description: 'Formatta e abbellisce il codice con colorazione sintattica e indentazione',
  languages: {
    title: 'Lingue',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    cpp: 'C++',
    typescript: 'TypeScript'
  },
  actions: {
    beautify: 'Abbellisci',
    minify: 'Comprimi',
    clear: 'Pulisci',
    copy: 'Copia',
    download: 'Scarica',
    upload: 'Carica file'
  },
  options: {
    title: 'Opzioni',
    indentSize: 'Dimensione indentazione',
    indentWith: 'Tipo di indentazione',
    spaces: 'Spazi',
    tabs: 'Tabulazioni',
    lineBreaks: 'Stile a capo',
    quoteStyle: 'Stile virgolette',
    bracketStyle: 'Stile parentesi',
    preserveNewlines: 'Mantieni a capo',
    endWithNewline: 'Termina con a capo',
    removeComments: 'Rimuovi commenti',
    wrapLineLength: 'Lunghezza riga',
    lineNumbers: 'Numeri di riga',
    showLineNumbers: 'Mostra numeri di riga',
    wrapLines: 'A capo automatico',
    theme: 'Tema',
    autoDetect: 'Rilevamento automatico',
    tryAutoDetect: 'Prova a rilevare automaticamente la lingua'
  },
  input: {
    title: 'Input',
    placeholder: 'Incolla qui il tuo codice...'
  },
  output: {
    title: 'Output',
    placeholder: 'Il codice abbellito apparirà qui...'
  },
  messages: {
    copied: 'Copiato negli appunti!',
    beautifySuccess: 'Codice abbellito con successo',
    minifySuccess: 'Codice compresso con successo',
    beautifyError: 'Errore durante l\'abbellimento del codice',
    minifyError: 'Errore durante la compressione del codice',
    emptyCode: 'Inserisci il codice da abbellire',
    fileTooBig: 'File troppo grande (massimo 2MB)',
    invalidFile: 'Tipo di file non valido o non supportato',
    preview: 'Anteprima',
    HTMLCode: 'Codice HTML',
  },
  stats: {
    original: 'Originale',
    beautified: 'Abbellito',
    minified: 'Compresso',
    size: 'Dimensione',
    characters: 'Caratteri',
    lines: 'Righe'
  },
  tips: {
    title: 'Suggerimenti per l\'uso',
    tip1: 'Scegli il linguaggio di programmazione appropriato per ottenere il miglior effetto di colorazione sintattica',
    tip2: 'Puoi scegliere diversi stili di tema per adattarli allo stile del tuo sito web',
    tip3: 'Copia il codice HTML generato per incollarlo direttamente in editor o siti web che supportano HTML',
    tip4: 'Il codice evidenziato generato supporta modalità adattiva e scura',
    tip5: 'Aggiungere numeri di riga quando mostri il codice può migliorare la leggibilità e facilitare i riferimenti'
  }
}