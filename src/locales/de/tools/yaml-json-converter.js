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
    },
    
    article: {
      title: "YAML-JSON-Konverter: Vereinfachte Datenformatkonvertierung",
      features: {
        title: "YAML- und JSON-Formate verstehen",
        description: "Der <strong>YAML-JSON-Konverter</strong> ist ein spezielles Tool zur Konvertierung zwischen zwei beliebten <strong>Daten-Serialisierungsformaten</strong>: <strong>YAML</strong> (YAML Ain't Markup Language) und <strong>JSON</strong> (JavaScript Object Notation). Dieser bidirektionale <strong>Formatkonverter</strong> ermöglicht nahtlose Konvertierungen zwischen diesen Formaten unter Beibehaltung der Datenstruktur und -integrität.<br><br>Unser <strong>YAML-zu-JSON-Konverter</strong> unterstützt erweiterte Funktionen wie benutzerdefinierte Einrückungen, Schlüsselsortierung und Flow-Stil-Optionen für YAML-Ausgaben. Für Benutzer, die <strong>JSON-zu-YAML-Konvertierungen</strong> durchführen, bietet das Tool Optionen zur Verschönerung der Ausgabe oder Beibehaltung kompakter Darstellungen. Egal, ob Sie mit einfachen Schlüssel-Wert-Paaren oder komplexen verschachtelten Strukturen arbeiten - dieser <strong>Datenformatkonverter</strong> verarbeitet Konvertierungen effektiv und erhält dabei die hierarchischen Beziehungen in den Daten.",
        useCases: {
          title: "Typische Anwendungsfälle für YAML-JSON-Konvertierungen",
          items: [
            "DevOps-Ingenieure konvertieren zwischen Konfigurationsdateien verschiedener CI/CD-Pipelines, die YAML (GitHub Actions, GitLab CI) oder JSON (CircleCI, AWS CodeBuild) benötigen",
            "Backend-Entwickler verarbeiten APIs, die JSON-Nutzlasten akzeptieren, während sie besser lesbare YAML-Konfigurationsdateien pflegen",
            "Cloud-Architekten wandeln AWS CloudFormation-Vorlagen (JSON) in besser wartbare YAML-Formate um oder umgekehrt",
            "Datenwissenschaftler konvertieren Datenstrukturdefinitionen zwischen Notebook-Umgebungen, die JSON bevorzugen, und YAML-Konfigurationsdateien",
            "Technische Redakteure präsentieren dieselben Datenstrukturen in YAML- und JSON-Formaten für unterschiedliche Zielgruppen",
            "Frontend-Entwickler arbeiten mit Paketmanagern und Build-Tools, die unterschiedliche Konfigurationsformate verwenden (package.json vs. docker-compose.yml)"
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zu YAML-JSON-Konvertierungen",
        items: [
          {
            question: "Was sind die Hauptunterschiede zwischen YAML und JSON?",
            answer: "YAML und JSON sind beide Daten-Serialisierungsformate, unterscheiden sich aber wesentlich in Syntax und Funktionalität. JSON verwendet eine strenge Syntax mit geschweiften Klammern, Anführungszeichen um Schlüssel und expliziten Kommas zwischen Elementen. YAML ist menschenlesbarer, nutzt bedeutungsvollen Leerraum, benötigt keine Anführungszeichen oder Klammern und unterstützt Kommentare. JSON ist kompakter und weit verbreitet für Datenaustausch in Webanwendungen, während YAML bessere Lesbarkeit bietet, komplexe Datenstrukturen unterstützt und häufig für Konfigurationsdateien verwendet wird. Unser YAML-JSON-Konverter behandelt diese Syntaxunterschiede automatisch und gewährleistet genaue Konvertierungen zwischen den Formaten."
          },
          {
            question: "Kann der Konverter komplexe verschachtelte Strukturen verarbeiten?",
            answer: "Ja, unser YAML-JSON-Konverter unterstützt vollständig komplexe verschachtelte Datenstrukturen, einschließlich tief verschachtelter Objekte, Arrays und gemischter Hierarchien. Unabhängig von der Konvertierungsrichtung erhält der Konverter die hierarchischen Beziehungen und stellt sicher, dass verschachtelte YAML-Mappings, Sequenzen und Skalare korrekt JSON-Objekten, Arrays und primitiven Werten entsprechen. Dies macht ihn geeignet für komplexe Konfigurationsdateien, API-Schemata und Datenvorlagen mit mehrstufiger Verschachtelung und verschiedenen Datentypen."
          },
          {
            question: "Unterstützt der Konverter erweiterte YAML-Funktionen?",
            answer: "Der YAML-JSON-Konverter unterstützt viele erweiterte YAML-Funktionen, die über JSONs begrenzte Fähigkeiten hinausgehen. Bei der Konvertierung von YAML zu JSON werden Funktionen wie Kommentare und Anker (Referenzen) angemessen behandelt - Kommentare werden entfernt (da JSON sie nicht unterstützt), Referenzen werden zu ihren tatsächlichen Werten aufgelöst. Bei der Konvertierung von JSON zu YAML können Sie zwischen Block-Stil (besser lesbar) und Flow-Stil (kompakter) für die YAML-Ausgabe wählen. Der Konverter bewahrt die Datenintegrität, während er sich an die Fähigkeiten jedes Formats anpasst."
          },
          {
            question: "Wie behandelt der Konverter verschiedene Datentypen?",
            answer: "Der YAML-JSON-Konverter erhält Datentypen bei Konvertierungen zwischen kompatiblen Formaten. Zahlen, Zeichenketten, Boolesche Werte, Nullwerte, Arrays und Objekte werden in beide Richtungen genau konvertiert. YAML-spezifische Datentypen wie Datumswerte und Binärdaten werden speziell behandelt - Datumswerte werden typischerweise in JSON als ISO-formatierte Zeichenketten konvertiert, Binärdaten als Base64-kodierte Zeichenketten. Die dynamische Typfunktion des Konverters stellt sicher, dass numerische Werte bei Bedarf korrekt erkannt und nicht als Zeichenketten behandelt werden."
          },
          {
            question: "Gibt es Größenbeschränkungen für konvertierbare Dateien?",
            answer: "Da der YAML-JSON-Konverter vollständig in Ihrem Browser läuft, hängen die praktischen Größenbeschränkungen vom Arbeitsspeicher und der Verarbeitungsleistung Ihres Geräts ab. Für optimale Leistung empfehlen wir Dateien unter 5MB, obwohl moderne Browser normalerweise größere Dateien verarbeiten können. Bei sehr großen Dateien können Verarbeitungsverzögerungen auftreten. Wenn Sie mit extrem großen Datensätzen arbeiten, sollten Sie erwägen, diese in kleinere Blöcke aufzuteilen oder sie schrittweise zu verarbeiten, um bessere Leistung zu erzielen."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Verwendung des YAML-JSON-Konverters",
        steps: [
          "Wählen Sie die Konvertierungsrichtung mit dem Umschaltknopf oben im Tool: 'YAML zu JSON' konvertiert YAML-Syntax in JSON-Format oder 'JSON zu YAML' für den umgekehrten Prozess",
          "Konfigurieren Sie Ihre Ausgabeformat-Präferenzen im Einstellungsbereich: Für JSON-Ausgaben können Sie Einrückungsgröße und Verschönerungsoptionen wählen; für YAML-Ausgaben können Sie zwischen Block-Stil oder Flow-Stil wählen und Schlüsselsortierung aktivieren",
          "Geben Sie Ihre Quelldaten in das linke Eingabefeld ein oder verwenden Sie die 'Einfügen'-Schaltfläche, um Inhalte aus der Zwischenablage einzufügen (Sie können auch die 'Einfach', 'Verschachtelt' oder 'Komplex'-Beispielschaltflächen verwenden, um Beispieldaten zu laden und die Funktionsweise des Konverters zu verstehen)",
          "Der Konverter verarbeitet Ihre Eingabe automatisch während der Eingabe und zeigt die konvertierte Ausgabe in Echtzeit im rechten Feld an",
          "Überprüfen Sie die Konvertierungsergebnisse und nehmen Sie bei Bedarf Anpassungen an Ihrer Eingabe oder Formatierungseinstellungen vor, um das gewünschte Ausgabeformat zu erhalten",
          "Klicken Sie auf die 'Ergebnis kopieren'-Schaltfläche, um die konvertierte Ausgabe in die Zwischenablage zu kopieren und in anderen Anwendungen zu verwenden",
          "Alternativ können Sie die 'Herunterladen'-Schaltfläche verwenden, um die konvertierte Ausgabe als Datei auf Ihrem Gerät zu speichern, zur späteren Verwendung oder Integration in Ihre Projekte"
        ]
      },
      conclusion: "Der YAML-JSON-Konverter bietet eine nahtlose Möglichkeit, Daten zwischen diesen beiden beliebten Serialisierungsformaten zu konvertieren, ohne Strukturintegrität oder Datenpräzision zu verlieren. Egal, ob Sie ein Entwickler sind, der mit Konfigurationsdateien arbeitet, ein DevOps-Ingenieur, der Infrastructure-as-Code verwaltet, oder ein Datenprofi, der mit verschiedenen Datenaustauschformaten umgeht - dieses Tool vereinfacht den Konvertierungsprozess durch seine intuitive Oberfläche und leistungsstarken Funktionen. Durch die Unterstützung beider Konvertierungsrichtungen und anpassbarer Ausgabeoptionen passt es sich verschiedenen Anwendungsfällen an und spart Ihnen Zeit, während es das Risiko manueller Konvertierungsfehler reduziert."
    }
  }