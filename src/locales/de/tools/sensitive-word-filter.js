export default {
  name: 'Sensitivwortfilter',
  description: 'Erkennen und filtern Sie sensible Wörter in Texten, mit Unterstützung für benutzerdefinierte Wortlisten und Filterregeln',

  input: {
    title: 'Eingabetext',
    placeholder: 'Geben Sie den zu überprüfenden Text ein...',
    loadSample: 'Beispiel laden',
    clearInput: 'Eingabe löschen',
    uploadFile: 'Textdatei hochladen'
  },

  output: {
    title: 'Gefilterter Text',
    original: 'Originaltext',
    filtered: 'Gefilterter Text',
    statistics: 'Statistiken',
    copyOutput: 'Gefilterten Text kopieren',
    clearOutput: 'Ausgabe löschen',
    download: 'Gefilterten Text herunterladen'
  },

  options: {
    title: 'Filteroptionen',
    filterMode: 'Filtermodus',
    caseSensitive: 'Groß-/Kleinschreibung beachten',
    wholeWordOnly: 'Nur ganze Wörter',
    customReplacement: 'Benutzerdefinierte Ersetzung',
    replacementChar: 'Ersatzzeichen',
    highlightWords: 'Sensitive Wörter hervorheben',
    customDictionary: 'Benutzerdefinierte Wörterbuch',
    importDictionary: 'Wörterbuch importieren',
    exportDictionary: 'Wörterbuch exportieren'
  },

  filterModes: {
    replace: 'Sensitive Wörter ersetzen',
    highlight: 'Sensitive Wörter hervorheben',
    remove: 'Sensitive Wörter entfernen',
    detect: 'Nur erkennen'
  },

  dictionary: {
    title: 'Wörterbuch',
    add: 'Wort hinzufügen',
    remove: 'Entfernen',
    clear: 'Wörterbuch leeren',
    wordInput: 'Geben Sie das hinzuzufügende Wort ein',
    categories: 'Kategorien',
    severity: 'Schweregrad',
    bulkAdd: 'Massenhinzufügung',
    search: 'Wörterbuch durchsuchen'
  },

  categories: {
    profanity: 'Beleidigungen',
    slurs: 'Verleumdungen',
    adult: 'Erwachseneninhalte',
    offensive: 'Anstößige Inhalte',
    violence: 'Gewalt',
    discrimination: 'Diskriminierung',
    personal: 'Persönliche Informationen',
    custom: 'Benutzerdefiniert'
  },

  severityLevels: {
    low: 'Niedrig',
    medium: 'Mittel',
    high: 'Hoch',
    critical: 'Kritisch'
  },

  statistics: {
    totalWords: 'Gesamtwörter',
    sensitiveWords: 'Sensitive Wörter',
    uniqueSensitiveWords: 'Eindeutige sensitive Wörter',
    severityBreakdown: 'Schweregradverteilung',
    categoryBreakdown: 'Kategorieverteilung',
    cleanlinessScore: 'Sauberkeitswert'
  },

  filterOptions: {
    title: 'Filtermodus',
    modes: {
      asterisk: 'Mit * ersetzen',
      custom: 'Benutzerdefiniertes Ersatzzeichen',
      remove: 'Sensitive Wörter löschen'
    },
    replaceChar: {
      title: 'Ersatzzeichen',
      placeholder: 'Ersatzzeichen eingeben'
    }
  },

  customWords: {
    title: 'Benutzerdefinierte Sensitivwortliste',
    addWord: 'Wort hinzufügen',
    addPrompt: 'Geben Sie das hinzuzufügende sensitive Wort ein:',
    removeWord: 'Entfernen'
  },

  actions: {
    filter: 'Filter starten',
    reset: 'Zurücksetzen',
    processing: 'Wird verarbeitet...',
    clearAll: 'Alles löschen',
    copyFiltered: 'Gefilterten Text kopieren',
    downloadReport: 'Bericht herunterladen',
    resetSettings: 'Einstellungen zurücksetzen'
  },

  results: {
    title: 'Filterergebnisse',
    tabs: {
      filteredResult: 'Filterergebnis',
      detectionReport: 'Erkennungsbericht'
    },
    filteredText: {
      title: 'Gefilterter Text',
      copy: 'Ergebnis kopieren',
      empty: 'Kein Filterergebnis angezeigt'
    },
    statistics: {
      detectedCount: 'Anzahl erkannter sensitiver Wörter',
      retentionRate: 'Textbeibehaltungsrate',
      totalWords: 'Gesamtzahl der Wörter'
    },
    detectedWords: {
      title: 'Erkannte sensitive Wörter',
      empty: 'Keine sensitiven Wörter erkannt'
    }
  },

  messages: {
    copied: 'In die Zwischenablage kopiert',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
    noInput: 'Bitte geben Sie den zu filternden Text ein',
    inputTooLong: 'Eingabetext zu lang',
    wordAdded: 'Wort wurde zur Sensitivwortliste hinzugefügt',
    wordExists: 'Dieses Wort existiert bereits in der Sensitivwortliste',
    wordRemoved: 'Wort wurde aus der Sensitivwortliste entfernt',
    filterSuccess: 'Textfilterung erfolgreich',
    noSensitiveWords: 'Keine sensitiven Wörter gefunden',
    dictionaryCleared: 'Wörterbuch wurde geleert',
    dictionaryImported: 'Wörterbuch wurde importiert',
    dictionaryExported: 'Wörterbuch wurde exportiert',
    emptyText: 'Bitte geben Sie den zu filternden Text ein'
  }
};