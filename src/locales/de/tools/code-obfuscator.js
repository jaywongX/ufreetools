export default {
  name: 'Code-Obfuskator',
  description: 'Obfuskiert JavaScript- und CSS-Code zur Erhöhung der Sicherheit und zum Schutz geistigen Eigentums',

  languages: {
    title: 'Sprache wählen',
    javascript: 'JavaScript',
    css: 'CSS'
  },

  options: {
    title: 'Obfuskationsoptionen',
    javascript: {
      compact: 'Kompakte Ausgabe (Leerzeichen entfernen)',
      controlFlowFlattening: 'Kontrollfluss-Glättung',
      deadCodeInjection: 'Toten Code injizieren',
      debugProtection: 'Debug-Schutz',
      selfDefending: 'Selbstverteidigung (gegen Formatierung)',
      stringArray: 'String-Array',
      renameGlobals: 'Globale Variablen umbenennen',
      renameProperties: 'Eigenschaften umbenennen',
      mangle: 'Variablen-Obfuskation',
      stringArrayEncoding: 'String-Array-Kodierung',
      stringArrayThreshold: 'String-Array-Schwellwert',
      unicodeEscapeSequence: 'Unicode-Escape-Sequenz'
    },
    css: {
      compact: 'Kompakte Ausgabe',
      renameSelectors: 'Selektoren umbenennen',
      preserveImportant: '!important beibehalten',
      restructure: 'Regeln restrukturieren',
      keepVendorPrefixes: 'Browser-Präfixe beibehalten',
      removeComments: 'Kommentare entfernen'
    }
  },

  input: {
    title: 'Code eingeben',
    placeholder: 'Hier Code zur Obfuskation eingeben...',
    clear: 'Leeren',
    paste: 'Einfügen',
    upload: 'Datei hochladen',
    inputObfuscatorCode: 'Bitte Code zur Obfuskation eingeben',
  },

  output: {
    title: 'Obfuskationsergebnis',
    placeholder: 'Obfuskierten Code wird hier angezeigt...',
    copy: 'Kopieren',
    download: 'Herunterladen',
    stats: {
      original: 'Originalgröße',
      obfuscated: 'Obfuskiert Größe',
      ratio: 'Kompressionsrate'
    },
    increase: 'Zunahme',
    decrease: 'Abnahme',
  },

  actions: {
    obfuscate: 'Obfuskieren',
    clear: 'Löschen'
  },

  messages: {
    copied: 'In Zwischenablage kopiert',
    copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
    processing: 'Wird verarbeitet...',
    error: 'Fehler bei der Obfuskation',
    invalidInput: 'Ungültiger Eingabecode',
    uploadError: 'Datei-Upload fehlgeschlagen',
    fileTooLarge: 'Datei zu groß (maximal 2MB)'
  },

  tips: {
    title: 'Anwendungstipps',
    tip1: 'Code-Obfuskation erschwert Reverse Engineering, verhindert es aber nicht vollständig',
    tip2: 'Mehr Obfuskationsoptionen erhöhen Codegröße und Laufzeit-Overhead',
    tip3: 'Einige Obfuskationsoptionen können die Debug-Fähigkeit beeinträchtigen',
    tip4: 'Empfohlen: Originalcode vor Obfuskation sichern',
    tip5: 'Für große Projekte professionelle Obfuskationstools verwenden'
  },

  demo: {
    title: 'Beispiele',
    function: 'Funktionsbeispiel',
    class: 'Klassenbeispiel',
    simple: 'Einfaches Styling',
    animation: 'Animationseffekt',
  }
};