export default {
    name: 'XML/JSON-Konverter',
    title: 'XML ↔ JSON Konvertierung',
    description: 'Bidirektionale Konvertierung zwischen XML- und JSON-Formaten mit erweiterten Optionen und benutzerdefinierten Einstellungen',
    
    conversion: {
      direction: 'Konvertierungsrichtung',
      xmlToJson: 'XML zu JSON',
      jsonToXml: 'JSON zu XML'
    },
    
    options: {
      title: 'Konvertierungsoptionen',
      show: 'Optionen anzeigen',
      hide: 'Optionen ausblenden',
      
      xmlToJson: {
        ignoreAttributes: 'Attribute ignorieren',
        ignoreAttributesHint: 'Deaktivieren Sie diese Option, um XML-Attribute in JSON zu erhalten',
        parseAttributeValue: 'Attributwerte parsen',
        parseAttributeValueHint: 'Konvertiert Zahlen, Booleans etc. in Attributen zu ihren tatsächlichen Typen statt Strings',
        ignoreDeclaration: 'XML-Deklaration ignorieren',
        ignoreDeclarationHint: 'Ignoriert Deklarationen wie <?xml version="1.0"?>',
        parseTagValue: 'Tag-Werte parsen',
        parseTagValueHint: 'Konvertiert Zahlen, Booleans etc. in Tag-Inhalten zu ihren tatsächlichen Typen statt Strings',
        trimValues: 'Werte trimmen',
        attributePrefix: 'Attribut-Präfix',
        attributePrefixPlaceholder: 'z.B. @, _, attr_',
        attributePrefixHint: 'Präfix für XML-Attribute in JSON (Standard: @)'
      },
      
      jsonToXml: {
        format: 'XML formatieren',
        formatHint: 'Aktiviert Einrückungen und Zeilenumbrüche für besser lesbares XML',
        indentBy: 'Einrücken (2 Leerzeichen)',
        addDeclaration: 'XML-Deklaration hinzufügen',
        addDeclarationHint: 'Fügt <?xml version="1.0" encoding="UTF-8"?> am Anfang hinzu',
        rootName: 'Wurzelelement-Name (optional)',
        rootNamePlaceholder: 'z.B. root, data, xml',
        rootNameHint: 'Name des Wurzelements bei mehreren Top-Level-Keys im JSON',
        attributePrefix: 'Attribut-Präfix erkennen',
        attributePrefixPlaceholder: 'z.B. @, _, attr_',
        attributePrefixHint: 'Präfix zur Erkennung von XML-Attributen in JSON (Standard: @)'
      }
    },
    
    buttons: {
      convert: 'Konvertieren',
      swap: 'Inhalte tauschen',
      clear: 'Leeren',
      loadExample: 'Beispiel laden'
    },
    
    input: {
      xmlInput: 'XML-Eingabe',
      jsonInput: 'JSON-Eingabe',
      placeholder: {
        xml: 'XML eingeben...',
        json: 'JSON eingeben...'
      }
    },
    
    output: {
      xmlResult: 'XML-Ergebnis',
      jsonResult: 'JSON-Ergebnis',
      copy: 'Kopieren'
    },
    
    stats: {
      title: 'Konvertierungsstatistik',
      inputSize: 'Eingabegröße',
      outputSize: 'Ausgabegröße',
      sizeChange: 'Größenänderung',
      conversionTime: 'Konvertierungsdauer'
    },
    
    help: {
      title: 'Hilfe',
      show: 'Hilfe anzeigen',
      hide: 'Hilfe ausblenden',
      about: {
        title: 'Informationen zu XML und JSON',
        content: 'XML (Extensible Markup Language) ist eine erweiterbare Auszeichnungssprache, die häufig für Konfigurationsdateien, Datenaustausch und Web-Services verwendet wird. JSON (JavaScript Object Notation) ist ein leichtgewichtiges Datenaustauschformat, das sowohl für Menschen lesbar als auch für Maschinen einfach zu parsen und zu generieren ist.'
      },
      xmlToJson: {
        title: 'Hinweise zu XML-zu-JSON',
        items: [
          'XML-Attribute werden standardmäßig als @-präfixierte Keys in JSON konvertiert',
          'XML-Textinhalte werden standardmäßig als #text-Key dargestellt',
          'Aktivieren Sie "Tag-Werte parsen" zur Konvertierung von Zahlen, Booleans etc.',
          'Mehrere gleichnamige XML-Tags werden automatisch in JSON-Arrays konvertiert'
        ]
      },
      jsonToXml: {
        title: 'Hinweise zu JSON-zu-XML',
        items: [
          '@-präfixierte JSON-Keys werden standardmäßig als XML-Attribute behandelt',
          'JSON-Arrays erzeugen mehrere gleichnamige XML-Tags',
          'Komplexe verschachtelte JSON-Objekte erzeugen hierarchische XML-Strukturen',
          'Mehrere Top-Level-Keys ohne Wurzelelement-Name erzeugen mehrere XML-Wurzelelemente'
        ]
      }
    },
    
    errors: {
      xmlParse: 'XML-Parsingfehler: {0}',
      jsonParse: 'JSON-Parsingfehler: {0}',
      xmlGeneration: 'XML-Generierungsfehler: {0}',
      emptyObject: 'JSON-Objekt ist leer oder ungültig',
      conversion: 'Konvertierungsfehler: {0}'
    },
    
    alerts: {
      copied: 'In die Zwischenablage kopiert'
    },
    
    article: {
      title: "XML/JSON-Konverter: Nahtlose Konvertierung Ihrer Datenstrukturen",
      features: {
        title: "XML- und JSON-Datenkonvertierung verstehen",
        description: "Der <strong>XML/JSON-Konverter</strong> ist ein leistungsstarkes Tool zur Konvertierung zwischen den beiden am weitesten verbreiteten <strong>Datenaustauschformaten</strong> in der Webentwicklung und Systemintegration. Dieser bidirektionale <strong>Formatkonverter</strong> ermöglicht sowohl <strong>XML-zu-JSON</strong> als auch <strong>JSON-zu-XML</strong> Konvertierungen unter Beibehaltung der Datenstrukturintegrität.<br><br>Unser <strong>XML/JSON-Parser</strong> bietet umfangreiche Anpassungsoptionen für den Umgang mit Attributen, Deklarationen und verschachtelten Datenstrukturen. Bei der <strong>XML-zu-JSON-Konvertierung</strong> können Sie Attributpräfixe konfigurieren, die Parsing-Methode für Tag-Werte steuern und die Behandlung von Leerzeichen festlegen. Für die <strong>JSON-zu-XML-Konvertierung</strong> können Sie Formatierungspräferenzen angeben, XML-Deklarationen hinzufügen und Wurzelelement-Namen für wohlgeformte Ausgaben definieren. Dieser <strong>Datenformatkonverter</strong> gewährleistet die genaue Darstellung komplexer hierarchischer Daten in beiden Formaten.",
        useCases: {
          title: "Typische Anwendungsfälle für XML-JSON-Konvertierungen",
          items: [
            "API-Entwickler konvertieren zwischen XML-basierten SOAP-Webservices und JSON-basierten REST-APIs für Kompatibilität zwischen verschiedenen Integrationspunkten",
            "Frontend-Entwickler konvertieren XML-Konfigurationsdateien in JSON für einfachere Verwendung in JavaScript-Anwendungen und modernen Frameworks",
            "Backend-Ingenieure arbeiten mit Legacy-Systemen, die XML verwenden, während sie neue Dienste implementieren, die JSON-Formate benötigen",
            "Datenintegrationsspezialisten mappen unterschiedliche Systemformate während ETL-Prozessen (Extrahieren, Transformieren, Laden)",
            "Web-Scraping-Anwendungen extrahieren XML-Daten (wie RSS-Feeds) und konvertieren sie in JSON für Speicherung oder Analyse",
            "Mobile App-Entwickler nutzen XML-Daten aus Unternehmenssystemen und konvertieren sie in JSON für effizientere Client-Verarbeitung"
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zu XML-JSON-Konvertierungen",
        items: [
          {
            question: "Kann der Konverter komplexe verschachtelte Strukturen in beiden Formaten verarbeiten?",
            answer: "Ja, unser XML/JSON-Parser unterstützt vollständig komplexe verschachtelte Strukturen in beide Richtungen. Der Konverter erhält die hierarchischen Beziehungen und verarbeitet Arrays, Objekte und gemischte Inhalte. Bei der Konvertierung von XML zu JSON werden verschachtelte Elemente zu verschachtelten Objekten, und wiederholte Elemente werden automatisch in Arrays umgewandelt. Bei der Konvertierung von JSON zu XML bleiben verschachtelte Objekte als Kindelemente erhalten, und Arrays werden als wiederholte Elemente mit demselben Tagnamen dargestellt. Diese Strukturerhaltung ist entscheidend für die Arbeit mit komplexen Datenmodellen und Konfigurationsdateien in jedem Format."
          },
          {
            question: "Wie geht das Tool mit Sonderzeichen und Kodierungen um?",
            answer: "Der XML/JSON-Konverter verwaltet automatisch Sonderzeichen und Kodierungsprobleme in beide Richtungen. Bei der Verarbeitung von XML dekodiert es korrekt XML-Entitäten (wie &amp; für &, &lt; für <) und behandelt CDATA-Abschnitte zur Erhaltung der Formatierung. Während der JSON-zu-XML-Konvertierung kodiert das Tool Sonderzeichen als entsprechende XML-Entitäten, um gültige XML-Ausgaben zu gewährleisten. Der Konverter behält UTF-8-Kompatibilität während des gesamten Prozesses bei und verarbeitet korrekt internationale Zeichen, Symbole und Emojis in beiden Formaten, was ihn für mehrsprachige Inhalte und globale Anwendungen geeignet macht."
          },
          {
            question: "Was passiert mit XML-Kommentaren während der Konvertierung zu JSON?",
            answer: "Da JSON selbst keine Kommentare unterstützt, werden XML-Kommentare normalerweise während der XML-zu-JSON-Konvertierung entfernt. Unser XML/JSON-Konverter bietet jedoch eine optionale Einstellung, um diese Informationen durch Konvertierung der Kommentare in spezielle JSON-Attribute (z.B. als \"__comment\"-Feld) zu erhalten. Dies bietet Flexibilität für Szenarien, in denen das Behalten von Kommentaren mit wichtigen Dokumentationen oder Verarbeitungsanweisungen erforderlich ist, selbst bei Formatkonvertierungen. Sie können dieses Verhalten über das erweiterte Optionspanel in der Konverter-Oberfläche anpassen."
          },
          {
            question: "Wie werden XML-Namespaces während der Konvertierung behandelt?",
            answer: "Der XML/JSON-Konverter bietet Optionen für den Umgang mit XML-Namespaces während der Konvertierung. Standardmäßig werden bei der Konvertierung zu JSON Namespaces und ihre Präfixe in den Elementnamen beibehalten. Zum Beispiel wird '<ns:element xmlns:ns=\"namespace\">value</ns:element>' mit Namespace-Präfix in JSON konvertiert. Sie können dieses Verhalten über die Konverter-Optionen anpassen, um Namespaces vollständig zu ignorieren, sie in einem bestimmten Format zu erhalten oder sie als separate Attribute in der generierten JSON-Struktur zu behalten, je nach Ihren spezifischen Integrationsanforderungen."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Verwendung des XML/JSON-Konverters",
        steps: [
          "Wählen Sie die gewünschte Konvertierungsrichtung über die Radio-Buttons oben im Tool: Wählen Sie 'XML zu JSON', um XML-Markup in JSON-Format zu konvertieren, oder 'JSON zu XML' für den umgekehrten Prozess",
          "Klicken Sie auf 'Optionen anzeigen', um auf erweiterte Einstellungen zuzugreifen und den Konvertierungsprozess anzupassen: Für XML-zu-JSON konfigurieren Sie die Attributbehandlung und Parsing-Optionen; für JSON-zu-XML legen Sie Formatierungspräferenzen und XML-Deklarationsoptionen fest",
          "Geben Sie Ihre Quelldaten in das Eingabefeld auf der linken Seite des Konverters ein, oder verwenden Sie die 'Beispiel laden'-Schaltfläche, um zu sehen, wie das Tool mit vordefinierten Daten umgeht",
          "Klicken Sie auf die 'Konvertieren'-Schaltfläche, um Ihre Daten zu verarbeiten - der Konverter wird Ihre Eingabe umwandeln und das Ergebnis im Ausgabefeld auf der rechten Seite anzeigen",
          "Überprüfen Sie die Konvertierungsausgabe und passen Sie bei Bedarf Ihre Konvertierungseinstellungen an, um das Ergebnis für Ihre spezifischen Anforderungen zu optimieren",
          "Klicken Sie auf die 'Kopieren'-Schaltfläche neben dem Ausgabefeld, um das konvertierte Ergebnis in die Zwischenablage zu kopieren und in Ihren Anwendungen oder Dokumenten zu verwenden",
          "Sie können auch die 'Inhalte tauschen'-Schaltfläche verwenden, um den Prozess umzukehren, indem Sie die aktuelle Ausgabe als Eingabe festlegen, um in die entgegengesetzte Richtung zu konvertieren"
        ]
      },
      conclusion: "Der XML/JSON-Konverter bietet eine leistungsstarke Lösung für die Konvertierung von Daten zwischen diesen beiden grundlegenden Formaten der modernen Datenverarbeitung. Egal, ob Sie verschiedene Systeme integrieren, Legacy-Anwendungen modernisieren oder Daten für die Client-Verarbeitung optimieren - dieses Tool hilft Ihnen, die Komplexität und potenziellen Fehler manueller Konvertierungen zu vermeiden. Mit seinen umfassenden Optionen für die Behandlung von Attributen, Formatierungen und Strukturelementen können Sie sicherstellen, dass Ihre Daten beim Überschreiten von Formatgrenzen ihre Integrität und Bedeutung behalten. Durch die Vereinfachung der Konvertierung zwischen XML und JSON hilft dieser Konverter, die Lücke zwischen verschiedenen Technologien und Standards zu überbrücken und ermöglicht so flexiblere und interoperablere Softwaresysteme."
    }
  }