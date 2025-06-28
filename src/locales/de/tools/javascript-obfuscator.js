export default {
    name: 'JavaScript-Obfuskator',
    description: 'Schützen Sie Ihren JavaScript-Code durch verschiedene Verschleierungstechniken',
    input: {
      title: 'JavaScript eingeben',
      placeholder: 'Geben Sie hier Ihren JavaScript-Code ein oder fügen Sie ihn ein',
      loadSample: 'Beispiel laden',
      clearInput: 'Eingabe löschen',
      uploadFile: 'JS-Datei hochladen'
    },
    output: {
      title: 'Verschleierter Code',
      copied: 'Code wurde in die Zwischenablage kopiert',
      download: 'Verschleierten Code herunterladen',
      copyOutput: 'Code kopieren',
      clearOutput: 'Ausgabe löschen'
    },
    options: {
      title: 'Verschleierungsoptionen',
      compact: 'Code komprimieren',
      selfDefending: 'Selbstverteidigung',
      controlFlowFlattening: 'Kontrollfluss-Glättung',
      controlFlowFlatteningThreshold: 'Schwellenwert für Kontrollfluss-Glättung',
      deadCodeInjection: 'Dead-Code-Injektion',
      deadCodeInjectionThreshold: 'Schwellenwert für Dead-Code-Injektion',
      debugProtection: 'Debug-Schutz',
      debugProtectionInterval: 'Debug-Schutzintervall',
      disableConsoleOutput: 'Konsolenausgabe deaktivieren',
      domainLock: 'Domain-Sperre',
      domainLockRedirectUrl: 'Weiterleitungs-URL bei Domain-Sperre',
      identifierNamesGenerator: 'Generator für Bezeichnernamen',
      identifiersPrefix: 'Bezeichner-Präfix',
      renameGlobals: 'Globale Variablen umbenennen',
      reservedNames: 'Reservierte Namen',
      reservedStrings: 'Reservierte Zeichenketten',
      rotateStringArray: 'Zeichenketten-Array rotieren',
      seed: 'Seed',
      shuffleStringArray: 'Zeichenketten-Array mischen',
      sourceMap: 'Quelltextabbildung',
      sourceMapBaseUrl: 'Basis-URL für Quelltextabbildung',
      sourceMapFileName: 'Dateiname der Quelltextabbildung',
      splitStrings: 'Zeichenketten teilen',
      splitStringsChunkLength: 'Länge der Zeichenketten-Blöcke',
      stringArray: 'Zeichenketten-Array',
      stringArrayEncoding: 'Zeichenketten-Array-Kodierung',
      stringArrayThreshold: 'Schwellenwert für Zeichenketten-Array',
      target: 'Ziel',
      transformObjectKeys: 'Objekt-Schlüssel transformieren',
      unicodeEscapeSequence: 'Unicode-Escape-Sequenz'
    },
    presets: {
      title: 'Voreinstellungen',
      low: 'Geringe Verschleierung',
      medium: 'Mittlere Verschleierung',
      high: 'Hohe Verschleierung',
      custom: 'Benutzerdefiniert'
    },
    actions: {
      obfuscate: 'Verschleiern',
      reset: 'Optionen zurücksetzen',
      savePreset: 'Voreinstellung speichern',
      loadPreset: 'Voreinstellung laden'
    },
    messages: {
      obfuscationSuccess: 'Code erfolgreich verschleiert',
      obfuscationFailed: 'Verschleierung fehlgeschlagen: {error}',
      emptyCode: 'Bitte geben Sie JavaScript-Code zum Verschleiern ein',
      uploadSuccess: 'Datei erfolgreich hochgeladen',
      presetSaved: 'Voreinstellung gespeichert',
      presetLoaded: 'Voreinstellung geladen'
    },
    help: {
      title: 'Hilfe zu Optionen',
      stringArrayDesc: 'Verschiebt Zeichenkettenliterale in ein spezielles Array und ersetzt sie durch Array-Aufrufe',
      controlFlowDesc: 'Aktiviert die Kontrollfluss-Glättung, um die Logik schwerer verständlich zu machen',
      deadCodeDesc: 'Fügt zufälligen Dead-Code ein, um Angreifer zu verwirren',
      selfDefendingDesc: 'Macht die Ausgabe resistent gegen Formatierungsänderungen'
    }
  }