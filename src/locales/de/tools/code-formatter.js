export default {
  name: 'Code-Differenzvergleich',
  description: 'Vergleicht zwei Codeabschnitte und hebt Unterschiede hervor',

  options: {
    title: 'Optionen',
    ignoreCase: 'Groß-/Kleinschreibung ignorieren',
    ignoreWhitespace: 'Leerzeichen ignorieren',
    trimWhitespace: 'Leerzeichen trimmen',
    diffMode: 'Differenzmodus',
    diffModes: {
      chars: 'Zeichen',
      words: 'Wörter',
      lines: 'Zeilen',
      sentences: 'Sätze',
      json: 'JSON'
    },
    diffStyle: 'Anzeigestil',
    diffStyles: {
      split: 'Geteilte Ansicht',
      inline: 'Inline-Ansicht'
    },
    context: 'Kontextzeilen',
    wrap: 'Zeilenumbruch',
    languages: {
      plaintext: 'Klartext',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },

  inputs: {
    original: 'Originalcode',
    modified: 'Modifizierter Code',
    placeholderOriginal: 'Originalcode hier einfügen...',
    placeholderModified: 'Modifizierten Code hier einfügen...'
  },

  actions: {
    compare: 'Vergleichen',
    clear: 'Leeren',
    swap: 'Tauschen',
    copy: 'Differenz kopieren',
    download: 'Differenz herunterladen',
    upload: 'Datei hochladen'
  },

  results: {
    title: 'Differenzergebnis',
    changes: 'Änderungen',
    additions: 'Hinzugefügt',
    deletions: 'Gelöscht',
    unchanged: 'Unverändert',
    noChanges: 'Keine Unterschiede gefunden - die Texte sind identisch',
    loading: 'Differenz wird generiert...'
  },

  upload: {
    originalFile: 'Originaldatei',
    modifiedFile: 'Modifizierte Datei',
    dropOriginal: 'Originaldatei hier ablegen oder durchsuchen',
    dropModified: 'Modifizierte Datei hier ablegen oder durchsuchen'
  },

  messages: {
    copied: 'In die Zwischenablage kopiert!',
    inputRequired: 'Bitte geben Sie Text in beide Eingabefelder ein',
    diffGenerated: 'Differenz erfolgreich generiert',
    error: 'Fehler bei der Generierung der Differenz',
    fileError: 'Fehler beim Lesen der Datei'
  },

  tips: {
    title: 'Verwendungstipps',
    compareOptions: 'Passen Sie die Vergleichsoptionen an Ihre Bedürfnisse an - das Ignorieren von Leerzeichen ist besonders nützlich für Code-Vergleiche.',
    diffModes: 'Verschiedene Differenzmodi bieten unterschiedliche Detaillierungsgrade beim Vergleich.',
    largeFiles: 'Für große Dateien ist ein zeilenbasierter Vergleich effizienter.',
    jsonMode: 'Verwenden Sie den JSON-Modus für strukturierte Daten - er normalisiert und vergleicht Objektstrukturen.'
  }
};