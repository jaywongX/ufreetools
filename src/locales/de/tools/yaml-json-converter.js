export default {
  name: 'YAML-JSON-Konverter',
  description: 'Konvertierung zwischen YAML- und JSON-Formaten mit anpassbaren Optionen',

  input: {
    title: 'Eingabe',
    yamlPlaceholder: 'YAML hier eingeben...',
    jsonPlaceholder: 'JSON hier eingeben...',
    loadSample: 'Beispiel laden',
    clearInput: 'Eingabe löschen',
    uploadFile: 'Datei hochladen'
  },

  output: {
    title: 'Ausgabe',
    copyOutput: 'Ausgabe kopieren',
    downloadOutput: 'Ausgabe herunterladen',
    clearOutput: 'Ausgabe löschen'
  },

  options: {
    conversionMode: 'Konvertierungsmodus',
    jsonToYaml: 'JSON zu YAML',
    yamlToJson: 'YAML zu JSON',
    formatOutput: 'Ausgabe formatieren',
    indentSize: 'Einrückungsgröße',
    quoteKeys: 'Objekt-Schlüssel in Anführungszeichen',
    sortKeys: 'Schlüssel alphabetisch sortieren',
    flowStyle: 'YAML-Flow-Stil',
    jsonCompatible: 'JSON-kompatibel',
    singleQuotes: 'Einfache Anführungszeichen verwenden',
    includeSchema: 'Schema einbeziehen',
    preserveKeyOrder: 'Schlüsselreihenfolge beibehalten'
  },

  flowStyles: {
    block: 'Block-Stil',
    flow: 'Flow-Stil',
    auto: 'Automatisch'
  },

  validation: {
    validate: 'Vor Konvertierung validieren',
    validInput: 'Gültiges {format}',
    invalidInput: 'Ungültiges {format}: {error}',
    checkSyntax: 'Syntax prüfen'
  },

  actions: {
    convert: 'Konvertieren',
    swap: 'Formate tauschen',
    beautify: 'Verschönern',
    minify: 'Minifizieren'
  },

  messages: {
    conversionSuccess: 'Konvertierung erfolgreich',
    conversionFailed: 'Konvertierung fehlgeschlagen: {error}',
    copySuccess: 'In die Zwischenablage kopiert',
    downloadSuccess: 'Datei erfolgreich heruntergeladen',
    emptyInput: 'Bitte Inhalt zum Konvertieren eingeben',
    invalidYaml: 'Ungültige YAML-Syntax',
    invalidJson: 'Ungültige JSON-Syntax'
  }
};