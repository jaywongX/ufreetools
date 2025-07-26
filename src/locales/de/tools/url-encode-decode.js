export default {
  name: 'URL-Kodierung/Dekodierung',
  description: 'URL-Kodierung wandelt Sonderzeichen in URL-kompatible Formate um, häufig verwendet für URL-Parameter und Formularübermittlungen.',

  options: {
    operationType: 'Operationstyp',
    encodeMode: 'Kodierungsmodus'
  },

  encodeOptions: {
    standard: 'Standardkodierung (encodeURI)',
    component: 'Komponentenkodierung (encodeURIComponent)',
    full: 'Vollständige Kodierung (alle Zeichen)',
    standardDescription: 'Kodiert die gesamte URL und behält URL-Strukturzeichen bei',
    componentDescription: 'Geeignet für URL-Parameter, kodiert alle Sonderzeichen',
    fullDescription: 'Kodiert alle nicht-alphanumerischen Zeichen, einschließlich Leerzeichen (als %20 statt +)'
  },

  actions: {
    encode: 'URL-kodieren',
    decode: 'URL-dekodieren',
    clear: 'Leeren',
    copyResult: 'Ergebnis kopieren'
  },

  input: {
    textToEncode: 'Zu kodierender Text',
    textToDecode: 'Zu dekodierender Text',
    encodePlaceholder: 'URL oder Text zur Kodierung eingeben...',
    decodePlaceholder: 'URL oder Text zur Dekodierung eingeben...'
  },

  output: {
    encodeResult: 'Kodierungsergebnis',
    decodeResult: 'Dekodierungsergebnis'
  },

  messages: {
    copied: '(Kopiert',
    error: 'Fehler: {message}',
    decodeError: 'Dekodierung fehlgeschlagen: "{text}"',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren'
  },

  referenceTable: {
    title: 'Referenztabelle für häufige URL-Zeichenkodierungen',
    showTable: 'Tabelle anzeigen',
    hideTable: 'Tabelle ausblenden',
    character: 'Zeichen',
    encoded: 'URL-kodiert',
    description: 'Beschreibung',
    descriptions: {
      space: 'Leerzeichen',
      exclamation: 'Ausrufezeichen',
      doubleQuote: 'Anführungszeichen',
      hash: 'Doppelkreuz',
      dollar: 'Dollarzeichen',
      percent: 'Prozentzeichen',
      ampersand: 'Und-Zeichen',
      singleQuote: 'Hochkomma',
      leftParenthesis: 'Linke Klammer',
      rightParenthesis: 'Rechte Klammer',
      asterisk: 'Sternchen',
      plus: 'Pluszeichen',
      comma: 'Komma',
      slash: 'Schrägstrich',
      colon: 'Doppelpunkt',
      semicolon: 'Semikolon',
      lessThan: 'Kleiner-als-Zeichen',
      equals: 'Gleichheitszeichen',
      greaterThan: 'Größer-als-Zeichen',
      questionMark: 'Fragezeichen',
      at: 'At-Zeichen',
      leftBracket: 'Linke eckige Klammer',
      backslash: 'Backslash',
      rightBracket: 'Rechte eckige Klammer',
      caret: 'Dachzeichen',
      backtick: 'Gravis',
      leftBrace: 'Linke geschweifte Klammer',
      pipe: 'Senkrechter Strich',
      rightBrace: 'Rechte geschweifte Klammer',
      tilde: 'Tilde',
      chinese: 'UTF-8-kodiertes Chinesisch'
    }
  }
};