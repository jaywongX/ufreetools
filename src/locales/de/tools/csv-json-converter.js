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
    },
    
    article: {
      title: "CSV-zu-JSON-Konverter: Datenformatkonvertierung vereinfacht",
      features: {
        title: "Einführung in CSV-zu-JSON-Konvertierung",
        description: "Der <strong>CSV-zu-JSON-Konverter</strong> ist ein leistungsstarkes Tool, das speziell für die Konvertierung zwischen <strong>CSV-Format</strong> (kommagetrennte Werte) und <strong>JSON-Format</strong> (JavaScript Object Notation) entwickelt wurde. Dieser bidirektionale <strong>Datenkonverter</strong> ermöglicht die nahtlose Umwandlung tabellarischer Daten in strukturierte JSON-Objekte und umgekehrt.<br><br>Unser <strong>CSV-JSON-Tool</strong> bietet anpassbare Optionen zur Verarbeitung verschiedener <strong>Datenformate</strong>, einschließlich unterschiedlicher Trennzeichen (Komma, Semikolon, Tabulator, Pipe), Header-Zeilen-Management und intelligenter <strong>Datentyp-Erkennung</strong>. Für komplexe JSON-Strukturen bietet das Tool Optionen zum Abflachen verschachtelter Objekte oder deren Konvertierung in Strings, was es zu einer vielseitigen Lösung für <strong>Datenkonvertierungs</strong>-Aufgaben in verschiedenen Anwendungen und Workflows macht.",
        useCases: {
          title: "Typische Anwendungsfälle für CSV-JSON-Konvertierung",
          items: [
            "Datenanalysten konvertieren Tabellenkalkulationsexporte in JSON für Datenvisualisierungstools oder APIs",
            "Entwickler bereiten Daten für Webanwendungen vor, die JSON-Datenstrukturen benötigen",
            "Datenbankadministratoren migrieren Daten zwischen Systemen mit unterschiedlichen Formatierungsanforderungen",
            "API-Entwickler konvertieren CSV-Datenexporte in JSON-Format für RESTful APIs",
            "Datenwissenschaftler konvertieren Versuchsergebnisse zwischen Tabellenkalkulationsformaten und codefreundlichen JSON-Strukturen",
            "Business-Analysten bereiten CSV-Berichte aus Buchhaltungs- oder CRM-Systemen für Web-Dashboards vor, die JSON verwenden"
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zur CSV-JSON-Konvertierung",
        items: [
          {
            question: "Was ist der Unterschied zwischen CSV- und JSON-Formaten?",
            answer: "CSV (Comma-Separated Values) ist ein einfaches Tabellenformat, bei dem Daten in Zeilen und Spalten organisiert sind, die durch Trennzeichen (normalerweise Kommas) getrennt sind. Es ist flach, leichtgewichtig und wird häufig in Tabellenkalkulationen verwendet. JSON (JavaScript Object Notation) ist ein hierarchisches, strukturiertes Datenformat, das verschachtelte Objekte und Arrays unterstützt. JSON kann komplexere Datenbeziehungen darstellen und ist das Standardformat für Web-APIs und JavaScript-Anwendungen."
          },
          {
            question: "Wie verarbeitet das Tool verschachtelte JSON-Objekte bei der Konvertierung in CSV?",
            answer: "Unser CSV-JSON-Konverter bietet drei Optionen zur Verarbeitung verschachtelter JSON-Objekte: 'Abflachen' konvertiert verschachtelte Eigenschaften in Punktnotation-Spaltennamen (z.B. 'user.name'), 'Als String' konvertiert das gesamte verschachtelte Objekt in eine String-Darstellung, 'Ignorieren' schließt verschachtelte Objekte von der Konvertierung aus. Diese Optionen bieten Flexibilität für Ihre spezifischen Datenkonvertierungsanforderungen."
          },
          {
            question: "Kann der CSV-JSON-Konverter verschiedene Trennzeichen in CSV-Dateien verarbeiten?",
            answer: "Ja, unser Datenkonverter unterstützt mehrere Trennzeichenoptionen, einschließlich Komma, Semikolon, Tabulator und Pipe-Zeichen. Diese Flexibilität ermöglicht die Verarbeitung verschiedener CSV-Formatvarianten aus verschiedenen Systemen oder Regionen. Wählen Sie einfach das entsprechende Trennzeichen im Optionsfeld vor der Konvertierung."
          },
          {
            question: "Wie funktioniert die dynamische Typisierung bei der CSV-JSON-Konvertierung?",
            answer: "Die dynamische Typisierung erkennt und konvertiert automatisch Datentypen in CSV-Dateien. Wenn aktiviert, werden String-Werte, die wie Zahlen aussehen (z.B. '42'), in tatsächliche Zahlen konvertiert, 'true'/'false'-Strings werden zu Booleans und leere Felder können zu null-Werten konvertiert werden. Dies erzeugt besser nutzbare JSON-Daten mit korrekten Datentypen, anstatt alles als Strings zu behandeln."
          },
          {
            question: "Wie große CSV- oder JSON-Dateien kann dieser Konverter verarbeiten?",
            answer: "Der CSV-JSON-Konverter verarbeitet Daten direkt in Ihrem Browser, daher hängt die Dateigrößenbeschränkung vom Arbeitsspeicher Ihres Geräts ab. Für beste Leistung empfehlen wir Dateien kleiner als 5MB, obwohl moderne Browser größere Dateien verarbeiten können. Für sehr große Datensätze sollten Sie die Dateien in kleinere Teile aufteilen oder serverbasierte Konvertierungstools verwenden."
          }
        ]
      },
      guide: {
        title: "Anleitung zur Verwendung des CSV-zu-JSON-Konverters",
        steps: [
          "Wählen Sie die Konvertierungsrichtung: 'CSV zu JSON' oder 'JSON zu CSV' entsprechend Ihrem Quelldatenformat",
          "Klicken Sie auf 'Optionen anzeigen', um Konvertierungseinstellungen wie Trennzeichen, Header-Zeile und spezielle Verarbeitungsregeln zu konfigurieren",
          "Für CSV-zu-JSON wählen Sie das entsprechende Trennzeichen (Komma, Semikolon, Tabulator etc.) und aktivieren 'Erste Zeile als Header', wenn Ihre CSV-Spaltenüberschriften enthält",
          "Für JSON-zu-CSV konfigurieren Sie, wie mit verschachtelten Objekten umgegangen werden soll (Abflachen, als String oder ignorieren) und ob alle Feldwerte in Anführungszeichen gesetzt werden sollen",
          "Geben Sie Ihre Daten ein, indem Sie sie in das Eingabefeld einfügen oder auf 'Beispiel laden' klicken, um zu sehen, wie der Konverter mit Beispieldaten umgeht",
          "Klicken Sie auf 'Konvertieren', um die Daten zwischen CSV- und JSON-Format umzuwandeln",
          "Überprüfen Sie die Konvertierungsstatistiken und Ausgabeergebnisse, dann verwenden Sie 'Ergebnis kopieren' oder 'Ergebnis herunterladen', um Ihre konvertierten Daten zu speichern"
        ]
      },
      conclusion: "Der CSV-zu-JSON-Konverter ist ein unverzichtbares Werkzeug für Datenprofis, die regelmäßig mit verschiedenen Datenformaten arbeiten. Durch die Vereinfachung des Konvertierungsprozesses zwischen tabellarischen CSV-Daten und strukturierten JSON-Objekten spart dieses Tool Zeit und reduziert Fehler in Datenverarbeitungs-Workflows. Egal, ob Sie Daten für API-Integrationen vorbereiten, Exporte aus Tabellenkalkulationsprogrammen konvertieren oder zwischen Formatierungsanforderungen verschiedener Systeme wechseln - dieser Konverter bietet eine flexible, browserbasierte Lösung für Ihre Datenkonvertierungsbedürfnisse."
    }
  }