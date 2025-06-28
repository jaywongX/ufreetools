export default {
    name: 'Unix-Zeitstempel-Konverter',
    description: 'Konvertiert zwischen Unix-Zeitstempeln und menschenlesbaren Datumsangaben mit Unterstützung für verschiedene Formate und Zeitzonen',
    options: {
      inputType: 'Eingabetyp',
      outputFormat: 'Ausgabeformat',
      timezone: 'Zeitzone',
      includeTime: 'Uhrzeit einschließen',
      format: 'Formatzeichenfolge'
    },
    inputTypes: {
      timestamp: 'Unix-Zeitstempel (Sekunden)',
      milliseconds: 'Unix-Millisekunden',
      iso8601: 'ISO 8601',
      rfc2822: 'RFC 2822',
      date: 'Datum-Zeichenkette'
    },
    formats: {
      iso8601: 'ISO 8601',
      rfc2822: 'RFC 2822',
      locale: 'Lokales Format',
      relative: 'Relative Zeitangabe',
      custom: 'Benutzerdefiniertes Format'
    },
    actions: {
      convert: 'Konvertieren',
      nowTimestamp: 'Aktueller Zeitstempel',
      nowDate: 'Aktuelles Datum',
      copy: 'Kopieren',
      clear: 'Löschen',
      refresh: 'Aktualisieren',
      switch: 'Wechseln'
    },
    messages: {
      copied: 'In die Zwischenablage kopiert!',
      convertSuccess: 'Konvertierung erfolgreich',
      convertError: 'Fehler bei der Konvertierung des Zeitstempels',
      invalidInput: 'Ungültiges Eingabeformat',
      invalidFormat: 'Ungültige Formatzeichenfolge'
    },
    timeUnits: {
      milliseconds: 'Millisekunden',
      seconds: 'Sekunden',
      minutes: 'Minuten',
      hours: 'Stunden',
      days: 'Tage'
    },
    labels: {
      unixTimestamp: 'Unix-Zeitstempel (Sekunden)',
      dateTime: 'Datum und Uhrzeit',
      inputValue: 'Eingabewert',
      unitConversion: 'Zeiteinheiten-Umrechnung',
      timeUnitLabel: 'Zeiteinheit'
    },
    placeholders: {
      enterTimestamp: 'Unix-Zeitstempel eingeben',
      enterValue: 'Wert eingeben'
    },
    info: {
      aboutTimestamp: 'Über Unix-Zeitstempel',
      timestampDescription: 'Ein Unix-Zeitstempel gibt die Anzahl der Sekunden seit dem 1. Januar 1970 00:00:00 UTC an. Diese Darstellung wird häufig in Computersystemen und Anwendungen verwendet.',
      commonUsage: 'Häufige Anwendungsfälle:',
      usages: {
        database: 'Zeitstempel in Datenbanken',
        api: 'Zeitangaben in API-Kommunikation',
        logging: 'Protokollierung',
        filesystem: 'Dateisystem-Zeitstempel'
      }
    },
    article: {
      title: "Unix-Zeitstempel-Konverter: Umwandlung zwischen Epochenzeit und lesbaren Datumsangaben",
      overview: {
        title: "Was ist ein Zeitstempel-Konverter?",
        content: "Ein <strong>Zeitstempel-Konverter</strong> ist ein spezielles Tool zur Umwandlung zwischen Unix-Zeitstempelwerten (Epochenzeit) und menschenlesbaren Datumsformaten. Unix-Zeitstempel geben die Anzahl der Sekunden oder Millisekunden seit dem 1. Januar 1970 00:00:00 UTC (der Unix-Epoche) an.<br><br>Unser Konverter ist ein umfassendes Zeitumwandlungstool für Softwareentwicklung, Systemadministration, Protokollanalyse und Datenwissenschaft. Es unterstützt präzise Konvertierung zwischen Unix-Zeitstempelformaten (Sekunden und Millisekunden) und Standard-Datumsdarstellungen in verschiedenen Zeitzonen.<br><br>Egal ob Sie Anwendungsprotokolle debuggen, Zeitreihendaten analysieren, APIs mit Zeitstempelparametern entwickeln oder Datenbank-Zeitstempel verarbeiten - unser Tool vermeidet manuelle Umrechnungsfehler und vereinfacht Aufgaben mit unterschiedlichen Zeitdarstellungen."
      },
      useCases: {
        title: "Praktische Anwendungsfälle für Zeitstempel-Konvertierung",
        items: [
          {
            title: "Protokollanalyse und Debugging",
            description: "Konvertieren Sie Zeitstempel in Anwendungs-, Server- und Systemprotokollen zu lesbaren Datumsangaben, um Ereignissequenzen nachzuverfolgen, Probleme zu beheben und Ereignisse aus verschiedenen Quellen zu korrelieren. Dies hilft bei der Identifizierung von Mustern, der Nachverfolgung von Leistungsproblemen und der Erstellung genauer Zeitachsen."
          },
          {
            title: "API-Entwicklung und Integration",
            description: "Verarbeiten Sie Zeitstempelparameter in REST-APIs, Webhook-Payloads und Drittanbieter-Integrationen, wo Epochenzeit für präzisen Datenaustausch üblich ist. Die Konvertierung zwischen lesbaren Datumsangaben und Zeitstempeln unterstützt API-Tests, Dokumentation und gewährleistet konsistente Zeitverarbeitung zwischen Systemen."
          },
          {
            title: "Datenbankoperationen",
            description: "Konvertieren Sie zwischen Datenbank-Zeitstempeln und Benutzeroberflächen-Darstellungen, führen Sie zeitbasierte Abfragen durch und validieren Sie Zeitdaten für Datenbankoperationen. Dies stellt korrektes Speichern, Abrufen und Verarbeiten zeitkritischer Informationen sicher."
          },
          {
            title: "Aufgabenplanung",
            description: "Berechnen Sie exakte Ausführungszeiten für Cron-Jobs, geplante Tasks und automatisierte Prozesse durch Konvertierung zwischen lesbaren Zeitangaben und den von Planungssystemen benötigten präzisen Zeitstempeln."
          },
          {
            title: "Datenanalyse und Visualisierung",
            description: "Verarbeiten Sie Zeitstempeldaten in Data-Science-Workflows, Zeitreihenanalysen und Visualisierungsprojekten, die Konvertierung zwischen lesbaren Datumsangaben und numerischen Zeitstempeln für korrekte Dateninterpretation erfordern."
          },
          {
            title: "Versionskontrolle und Änderungsnachverfolgung",
            description: "Interpretieren Sie Zeitstempel in Versionskontrollsystemen, Dateiänderungszeiten und Audit-Protokollen, um Änderungshistorie zu verstehen und genaue Entwicklungszeitachsen zu erstellen."
          },
          {
            title: "Elektronische Aufzeichnungsverwaltung",
            description: "Verwalten Sie Zeitstempel in elektronischen Dokumenten, digitalen Signaturen und zertifizierten Aufzeichnungen, wo präzise Zeitangaben rechtliche Bedeutung haben."
          },
          {
            title: "Zeitzonenübergreifende Koordination",
            description: "Ermöglichen Sie Kommunikation und Planung über Zeitzonen hinweg durch Verwendung von Unix-Zeitstempeln als universelle Referenzpunkte, die in lokale Zeitangaben umgewandelt werden können."
          }
        ]
      },
      guide: {
        title: "Anleitung zur Nutzung des Zeitstempel-Konverters",
        intro: "Die Konvertierung zwischen Zeitstempeln und Datumsangaben ist mit unserem intuitiven Tool einfach. Folgen Sie diesen Schritten für genaue Umrechnungen:",
        steps: [
          {
            title: "Konvertierungsrichtung wählen",
            description: "Entscheiden Sie, ob Sie von Unix-Zeitstempel zu Datum (Zeitstempel → Datum) oder umgekehrt (Datum → Zeitstempel) konvertieren möchten."
          },
          {
            title: "Wert eingeben",
            description: "Für Zeitstempel-zu-Datum: Geben Sie einen Unix-Zeitstempel in Sekunden ein (z.B. 1609459200). Für Datum-zu-Zeitstempel: Wählen Sie ein Datum und eine Uhrzeit."
          },
          {
            title: "Ergebnisse anzeigen",
            description: "Die Konvertierung erfolgt automatisch und zeigt das entsprechende Datum oder den Zeitstempel gemäß Ihren Systemeinstellungen an."
          },
          {
            title: "Ergebnisse kopieren",
            description: "Klicken Sie auf 'Kopieren', um das Ergebnis in die Zwischenablage zu übernehmen und in anderen Anwendungen zu verwenden."
          },
          {
            title: "Zeiteinheiten nutzen",
            description: "Nutzen Sie die Zeiteinheiten-Umrechnung für Konvertierungen zwischen Millisekunden, Sekunden, Minuten, Stunden und Tagen."
          },
          {
            title: "Aktuelle Zeit verwenden",
            description: "Klicken Sie auf 'Aktualisieren', um den aktuellen Zeitstempel oder das aktuelle Datum einzufügen."
          },
          {
            title: "Zusätzliche Informationen",
            description: "Informieren Sie sich im unteren Bereich über Unix-Zeitstempel, deren Definition und Anwendungsfälle."
          }
        ]
      },
      principles: {
        title: "Grundlagen von Unix-Zeitstempeln",
        content: "Unix-Zeitstempel basieren auf einem einfachen, aber leistungsfähigen Konzept: Zeit als einzelne Zahl darzustellen, die Sekunden seit einem festen Startpunkt zählt.<br><br>Die <strong>Unix-Epoche</strong> - 1. Januar 1970 00:00:00 UTC - dient als Ursprung (Zeitstempel 0). <strong>Positive Zahlen</strong> repräsentieren Zeit nach der Epoche, <strong>negative Zahlen</strong> Zeit davor.<br><br>Die Sekunden-Präzision ist für die meisten Anwendungen ausreichend, während <strong>Millisekunden-Zeitstempel</strong> höhere Präzision für spezielle Anwendungen bieten.<br><br>Unix-Zeitstempel behandeln Zeitzonenunterschiede elegant, da sie immer auf UTC basieren. Durch Anwendung entsprechender Offsets können lokale Zeitangaben abgeleitet werden."
      },
      faq: {
        title: "Häufige Fragen zu Zeitstempel-Konvertierung",
        items: [
          {
            question: "Was ist ein Unix-Zeitstempel?",
            answer: "Ein Unix-Zeitstempel (auch Epochenzeit oder POSIX-Zeit) ist eine Zahl, die die Sekunden seit dem 1. Januar 1970 00:00:00 UTC angibt (ohne Schaltsekunden). Diese standardisierte Darstellung wird in Computersystemen verwendet."
          },
          {
            question: "Warum verwenden Computer Zeitstempel statt normale Datumsformate?",
            answer: "Zeitstempel bieten technische Vorteile: Sie sind einfache Zahlenwerte, die sich leicht speichern, vergleichen und berechnen lassen. Dies ermöglicht präzise Zeitintervallberechnungen, effiziente Speicherung und konsistente Sortierung unabhängig von kulturellen Datumsformaten."
          },
          {
            question: "Was ist der Unterschied zwischen Sekunden- und Millisekunden-Zeitstempeln?",
            answer: "Sekunden-Zeitstempel zählen ganze Sekunden seit der Epoche, Millisekunden-Zeitstempel zählen Millisekunden (Wert ist 1000x größer). Sekunden-Präzision ist für die meisten Anwendungen ausreichend, Millisekunden bieten höhere Genauigkeit."
          },
          {
            question: "Wie gehe ich mit Zeitzonen bei Zeitstempeln um?",
            answer: "Unix-Zeitstempel basieren immer auf UTC. Für lokale Zeitangaben: 1) Bei Konvertierung von lokaler Zeit zu Zeitstempel: Lokalzeit zuerst in UTC umwandeln. 2) Bei Konvertierung von Zeitstempel zu lokaler Zeit: UTC-Zeitstempel zuerst in UTC-Datum umwandeln, dann Zeitzonen-Offset anwenden."
          },
          {
            question: "Was ist das Jahr-2038-Problem?",
            answer: "Das Jahr-2038-Problem betrifft Systeme, die Zeitstempel als 32-Bit-Ganzzahlen speichern. Der maximale Wert (2^31-1) entspricht dem 19. Januar 2038 03:14:07 UTC. Danach könnte ein Überlauf zu falschen Datumsberechnungen führen. Die Lösung ist der Wechsel zu 64-Bit-Zeitstempeln."
          },
          {
            question: "Können Zeitstempel Daten vor 1970 darstellen?",
            answer: "Ja, negative Zeitstempel repräsentieren Daten vor 1970. Allerdings haben einige Systeme Probleme mit negativen Werten, und 32-Bit-Systeme können nicht vor 1901 darstellen."
          },
          {
            question: "Wie genau sind Unix-Zeitstempel?",
            answer: "Standard-Zeitstempel bieten Sekunden-Präzision, Millisekunden-Versionen 1/1000-Sekunde. Unix-Zeitstempel berücksichtigen keine Schaltsekunden, was für hochpräzise Anwendungen relevant sein kann."
          }
        ]
      },
      bestPractices: {
        title: "Beste Praktiken für Zeitstempel",
        items: [
          "Speichern Sie Zeitstempel immer in UTC zur Vermeidung von Zeitzonenverwirrung",
          "Verwenden Sie für moderne Anwendungen Millisekunden-Präzision",
          "Dokumentieren Sie in APIs klar die verwendeten Zeiteinheiten",
          "Validieren Sie Zeitstempelberechnungen durch Rückkonvertierung",
          "Konvertieren Sie Zeitstempel in Protokollen für bessere Lesbarkeit",
          "Beachten Sie, dass Zeitstempel keine Schaltsekunden berücksichtigen",
          "Verwenden Sie 64-Bit-Integer für zukunftssichere Zeitstempelspeicherung",
          "Geben Sie bei der Darstellung von Zeitstempeln immer die Zeitzone an",
          "Testen Sie negative Zeitstempel gründlich für historische Daten",
          "Stellen Sie bei Zeitstempelvergleichen die Einheitenkonsistenz sicher",
          "Verwenden Sie in verteilten Systemen synchronisierte Zeitstempel",
          "Zeigen Sie in Benutzeroberflächen immer lokalisierte Zeitangaben an"
        ]
      }
    }
  }