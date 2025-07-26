export default {
  name: 'CSV-zu-JSON-Konverter',
  description: 'Konvertiert CSV-Daten in JSON-Format mit anpassbaren Optionen',

  options: {
    delimiter: 'Trennzeichen',
    quote: 'Anführungszeichen',
    header: 'Erste Zeile als Header',
    dynamicTyping: 'Dynamische Typisierung',
    dynamicTypingDescription: 'Konvertiert Zahlenstrings in Zahlen, "true/false" in Booleans usw.',
    skipEmptyLines: 'Leere Zeilen überspringen',
    comments: 'Kommentarzeichen',
    outputFormat: 'Ausgabeformat',
    indentation: 'Einrückung',
    encoding: 'Kodierung',
    newline: 'Zeilenumbruch',
    title: 'Konvertierungsoptionen'
  },

  delimiters: {
    comma: 'Komma (,)',
    semicolon: 'Semikolon (;)',
    tab: 'Tabulator (\\t)',
    pipe: 'Pipe (|)',
    custom: 'Benutzerdefiniert'
  },

  formats: {
    array: 'Array von Objekten',
    arrayOfArrays: 'Array von Arrays',
    keyed: 'Schlüsselwert-Objekte',
    nested: 'Verschachtelte Objekte'
  },

  preview: {
    input: 'Eingabe...',
    output: 'Ausgabe...',
    rawCsv: 'Rohe CSV-Daten',
    parsedCsv: 'Parsed CSV',
    jsonOutput: 'JSON-Ausgabe',
    firstRows: 'Erste {count} Zeilen',
    showAll: 'Alles anzeigen'
  },

  actions: {
    convert: 'Konvertieren',
    copy: 'JSON kopieren',
    download: 'JSON herunterladen',
    clear: 'Löschen',
    uploadCsv: 'CSV hochladen',
    swap: 'Eingabe/Ausgabe tauschen',
    loadExample: 'Beispiel laden',
    clearInput: 'Eingabe löschen',
    formatOutput: 'Ausgabe formatieren',
    copyResult: 'Ergebnis kopieren',
    downloadResult: 'Ergebnis herunterladen',
    paste: 'Einfügen',
    showOptions: 'Optionen anzeigen',
    hideOptions: 'Optionen ausblenden',
    uploadJson: 'JSON hochladen'
  },

  results: {
    rowsProcessed: '{count} Zeilen verarbeitet',
    conversionComplete: 'Konvertierung abgeschlossen',
    copied: 'In Zwischenablage kopiert',
    downloaded: 'Heruntergeladen',
    error: 'Fehler'
  },

  errors: {
    noData: 'Keine CSV-Daten zum Konvertieren',
    invalidCsv: 'Ungültiges CSV-Format',
    parsingFailed: 'Parsing fehlgeschlagen: {error}',
    missingHeader: 'Header-Zeile fehlt',
    invalidJson: 'Ungültiges JSON-Format',
    formatFailed: 'Formatierung fehlgeschlagen: {error}',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
    downloadFailed: 'Download fehlgeschlagen',
    pasteError: 'Einfügen aus Zwischenablage nicht möglich',
    conversionFailed: 'Konvertierung fehlgeschlagen'
  },

  conversion: {
    title: 'Konvertierungsrichtung',
    csvToJson: {
      title: 'CSV zu JSON',
      delimiterLabel: 'Trennzeichen',
      headerLabel: 'Erste Zeile als Header',
      dynamicTypingLabel: 'Datentypen automatisch erkennen',
      skipEmptyLinesLabel: 'Leere Zeilen überspringen',
      convertButton: 'CSV in JSON konvertieren'
    },
    jsonToCsv: {
      title: 'JSON zu CSV',
      delimiterLabel: 'Trennzeichen',
      headerLabel: 'Header-Zeile einbeziehen',
      quotesLabel: 'Alle Felder in Anführungszeichen',
      nestedModeLabel: 'Verschachtelte Daten verarbeiten',
      flat: 'Abflachen',
      stringify: 'Als String',
      ignore: 'Ignorieren',
      convertButton: 'JSON in CSV konvertieren'
    }
  },

  stats: {
    processed: 'Verarbeitete Zeilen',
    fields: 'Felder/Spalten',
    inputSize: 'Eingabegröße',
    outputSize: 'Ausgabegröße',
    title: 'Statistiken'
  },

  messages: {
    copied: 'In Zwischenablage kopiert',
    download: 'Heruntergeladen',
    error: 'Fehler'
  },

  formatBytes: {
    bytes: 'Bytes',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  }
};