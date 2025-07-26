export default {
  name: 'XML-Formatierer',
  description: 'XML-Dokumente formatieren, verschönern und validieren',

  options: {
    indentSize: 'Einrückungsgröße',
    useTabs: 'Tabulatoren verwenden',
    collapseContent: 'Inhalt einklappen',
    maxLineWidth: 'Maximale Zeilenbreite',
    indentAttributes: 'Attribute einrücken',
    sortAttributes: 'Attribute sortieren',
    newlineAfterPI: 'Zeilenumbruch nach Verarbeitungsanweisung',
    operationType: 'Operationstyp',
    indentSettings: 'Einrückungseinstellungen',
    displayOptions: 'Anzeigeoptionen',
    showLineNumbers: 'Zeilennummern anzeigen'
  },

  indentOptions: {
    twoSpaces: '2 Leerzeichen',
    fourSpaces: '4 Leerzeichen',
    tabIndent: 'Tab-Einrückung'
  },

  actions: {
    format: 'XML formatieren',
    minify: 'XML komprimieren',
    validate: 'Validieren',
    toJSON: 'Zu JSON konvertieren',
    copy: 'Kopieren',
    clear: 'Leeren',
    download: 'Herunterladen',
    upload: 'XML hochladen',
    beautify: 'Verschönern',
    copyCode: 'Code kopieren'
  },

  messages: {
    copied: 'In die Zwischenablage kopiert!',
    formatSuccess: 'XML erfolgreich formatiert',
    formatError: 'Fehler beim Formatieren des XML',
    validXml: 'XML ist gültig',
    invalidXml: 'Ungültiges XML: {0}',
    lineCol: 'Zeile {line}, Spalte {col}',
    minifySuccess: 'XML erfolgreich komprimiert',
    conversionSuccess: 'Konvertierung erfolgreich',
    conversionError: 'Fehler bei der Konvertierung',
    pleaseEnterXml: 'Bitte XML-Inhalt eingeben',
    processingError: 'Fehler bei der Verarbeitung des XML: {0}',
    formatResult: 'Formatierungsergebnis',
    characterCount: 'Zeichenanzahl: {0}',
    lineCount: 'Zeilenanzahl: {0}',
    characterAndLineCount: 'Zeichen: {0} | Zeilen: {1}'
  },

  input: {
    xmlInput: 'XML-Eingabe',
    placeholder: 'XML hier einfügen oder eingeben...'
  },

  examples: {
    title: 'XML-Beispiele',
    description: 'Beispiel laden:',
    simpleXml: 'Einfaches XML',
    bookstore: 'Buchhandlungskatalog',
    complexXml: 'Komplexes XML'
  }
};