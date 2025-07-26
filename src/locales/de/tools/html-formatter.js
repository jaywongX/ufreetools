export default {
  name: 'HTML-Formatierer',
  description: 'Formatiert und verschönert HTML-Code für bessere Lesbarkeit',
  formatMode: 'Formatierungsmodus',
  beautify: 'Verschönern',
  minify: 'Minifizieren',
  formatOptions: 'Formatierungsoptionen',
  removeComments: 'Kommentare entfernen',
  preserveComments: 'Kommentare erhalten',
  showLineNumbers: 'Zeilennummern anzeigen',
  helpText: 'Der HTML-Verschönerer/Minifizierer hilft Entwicklern, HTML-Code schnell zu organisieren oder zu optimieren, um die Lesbarkeit zu verbessern oder die Dateigröße zu verringern.',
  input: 'HTML-Eingabe',
  inputPlaceholder: 'HTML-Code hier einfügen oder eingeben...',
  examples: 'Beispiele',

  exampleNames: {
    simple: 'Einfaches HTML',
    complex: 'Komplexe HTML-Seite'
  },

  beautifiedResult: 'Verschönertes Ergebnis',
  minifiedResult: 'Minifiziertes Ergebnis',

  stats: {
    chars: 'Zeichenanzahl',
    lines: 'Zeilenanzahl',
    reduction: 'Reduziert um {chars} Zeichen ({percent}%)'
  },

  indentOptions: {
    spaces: '{count} Leerzeichen',
    tab: 'Tab-Einzug'
  },

  errorMessages: {
    emptyInput: 'Bitte HTML-Code zum Verarbeiten eingeben',
    processingFailed: 'HTML-Verarbeitung fehlgeschlagen: {message}'
  },

  options: {
    indentSize: 'Einzugsgröße',
    wrapLength: 'Zeilenumbruch-Länge',
    indentInnerHtml: 'Inneres HTML einrücken',
    preserveNewlines: 'Zeilenumbrüche erhalten',
    maxPreserveNewlines: 'Maximale aufeinanderfolgende Zeilenumbrüche',
    wrapAttributes: 'Attribute umbrechen',
    sortAttributes: 'Attribute sortieren',
    sortClassNames: 'Klassennamen sortieren'
  },

  actions: {
    format: 'HTML formatieren',
    minify: 'Minifizieren',
    clear: 'Leeren',
    copy: 'Kopieren',
    download: 'Herunterladen',
    upload: 'Datei hochladen'
  },

  messages: {
    copied: 'In die Zwischenablage kopiert!',
    formatSuccess: 'HTML-Formatierung erfolgreich',
    formatError: 'Fehler bei der HTML-Formatierung',
    invalidHtml: 'Ungültige HTML-Syntax'
  }
};