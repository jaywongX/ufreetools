export default {
    name: 'XML-Formatierer',
    description: 'XML-Dokumente formatieren, verschönern und validieren',
    
    options: {
      indentSize: 'Einrückungsgröße',
      useTabs: 'Tabulatoren verwenden',
      collapseContent: 'Inhalt einklappen',
      maxLineWidth: 'Maximale Zeilenbreite',
      indentAttributes: 'Attribute einrücken',
      sortAttributes: 'Attribute sortieren',
      newlineAfterPI: 'Zeilenumbruch nach Verarbeitungsanweisung',
      operationType: 'Operationstyp',
      indentSettings: 'Einrückungseinstellungen',
      displayOptions: 'Anzeigeoptionen',
      showLineNumbers: 'Zeilennummern anzeigen'
    },
    
    indentOptions: {
      twoSpaces: '2 Leerzeichen',
      fourSpaces: '4 Leerzeichen',
      tabIndent: 'Tab-Einrückung'
    },
    
    actions: {
      format: 'XML formatieren',
      minify: 'XML komprimieren',
      validate: 'Validieren',
      toJSON: 'Zu JSON konvertieren',
      copy: 'Kopieren',
      clear: 'Leeren',
      download: 'Herunterladen',
      upload: 'XML hochladen',
      beautify: 'Verschönern',
      copyCode: 'Code kopieren'
    },
    
    messages: {
      copied: 'In die Zwischenablage kopiert!',
      formatSuccess: 'XML erfolgreich formatiert',
      formatError: 'Fehler beim Formatieren des XML',
      validXml: 'XML ist gültig',
      invalidXml: 'Ungültiges XML: {0}',
      lineCol: 'Zeile {line}, Spalte {col}',
      minifySuccess: 'XML erfolgreich komprimiert',
      conversionSuccess: 'Konvertierung erfolgreich',
      conversionError: 'Fehler bei der Konvertierung',
      pleaseEnterXml: 'Bitte XML-Inhalt eingeben',
      processingError: 'Fehler bei der Verarbeitung des XML: {0}',
      formatResult: 'Formatierungsergebnis',
      characterCount: 'Zeichenanzahl: {0}',
      lineCount: 'Zeilenanzahl: {0}',
      characterAndLineCount: 'Zeichen: {0} | Zeilen: {1}'
    },
    
    input: {
      xmlInput: 'XML-Eingabe',
      placeholder: 'XML hier einfügen oder eingeben...'
    },
    
    examples: {
      title: 'XML-Beispiele',
      description: 'Beispiel laden:',
      simpleXml: 'Einfaches XML',
      bookstore: 'Buchhandlungskatalog',
      complexXml: 'Komplexes XML'
    },
    
    article: {
      title: "XML-Formatierer: Unverzichtbares Werkzeug für strukturierte Datenverarbeitung",
      features: {
        title: "XML-Formatierung und ihre Anwendungen",
        description: "Der <strong>XML-Formatierer</strong> ist ein leistungsstarkes Online-Tool, das unformatierte XML-Daten in gut strukturierte, menschenlesbare Formate umwandelt. Es ermöglicht das Verschönern von unübersichtlichen oder komprimierten XML-Dokumenten, die Validierung der Syntax und einfache Konvertierung zwischen verschiedenen XML-Darstellungen.<br><br>Die Kernfunktion dieses <strong>XML-Verschönerungstools</strong> ist die Analyse der XML-Hierarchie und die Anwendung konsistenter Einrückungen, geeigneter Zeilenumbrüche und organisierter Formatierung, um komplexe XML-Dokumente besser lesbar, editierbar und verständlich zu machen. Das Tool unterstützt sowohl Verschönerung (Erweiterung und Organisation mit passenden Abständen) als auch Komprimierung (Entfernung unnötiger Leerzeichen), sodass Sie XML je nach Bedarf für Lesbarkeit oder maschinelle Verarbeitung optimieren können. Mit Syntaxvalidierung, Zeilennummerierung und anpassbaren Einrückungsoptionen bietet dieser <strong>XML-Optimierer</strong> eine umfassende Lösung für XML-Dokumente jeder Komplexität.",
        useCases: {
          title: "Praktische Anwendungsfälle für XML-Formatierung",
          items: [
            "<strong>Webservice-Entwicklung und -Tests</strong>: Beim Erstellen oder Debuggen von SOAP-Webservices können Entwickler den <strong>XML-Validator</strong> nutzen, um Anfrage- und Antwortdaten zu prüfen. Das Formatierungstool hilft bei der Analyse komplexer SOAP-Nachrichten, indem es einzeilige Antworten in strukturierte, eingerückte Formate umwandelt, was das Identifizieren von Datenelementen und das Beheben von Integrationsproblemen erleichtert.",
            "<strong>Konfigurationsdateiverwaltung</strong>: Viele Unternehmensanwendungen verwenden XML für Konfigurationen. Systemadministratoren können mit dem <strong>XML-Strukturformatierer</strong> Konfigurationsdateien bereinigen und standardisieren, bevor sie bereitgestellt werden, wodurch das Risiko syntaxbedingter Fehler reduziert wird. Die Verschönerungsfunktion macht komplexe Konfigurationsstrukturen bei manuellen Anpassungen besser lesbar.",
            "<strong>Datenintegrationsverarbeitung</strong>: Datenengineer, die XML-basierte Datenaustauschprozesse handhaben, können mit diesem Tool XML-Dateien vor der Verarbeitung prüfen. Bei externen Datenquellen hilft der <strong>XML-Codeformatierer</strong>, strukturelle Probleme schnell zu identifizieren, was reibungslosere ETL-Prozesse (Extrahieren, Transformieren, Laden) ermöglicht.",
            "<strong>API-Dokumentation und -Entwicklung</strong>: API-Entwickler können formatierte XML-Beispiele für technische Dokumentationen generieren. Verschönerte Beispiele machen API-Spezifikationen für andere Entwickler zugänglicher, indem sie die erwartete Struktur von Anfragen und Antworten klar darstellen.",
            "<strong>Altwartung</strong>: Entwickler, die mit XML-basierten Legacy-Systemen arbeiten, können mit dem <strong>XML-Einrückungstool</strong> undokumentierten oder schlecht formatierten Code besser verstehen. Durch korrekte Formatierung werden Datenstrukturen und -beziehungen klarer, was Updates und Integrationen erleichtert.",
            "<strong>Content-Management-Systeme</strong>: Redakteure und Administratoren von CMS-Plattformen können mit dem <strong>XML-Syntaxformatierer</strong> Inhaltsvorlagen oder Exportdateien strukturieren. Dies gewährleistet konsistente Formatierung und verhindert Darstellungsfehler bei der Veröffentlichung über verschiedene Kanäle."
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zur XML-Formatierung",
        items: [
          {
            question: "Was ist der Unterschied zwischen Verschönern und Komprimieren von XML?",
            answer: "Das Verschönern von XML wandelt komprimiertes oder unstrukturiertes XML in ein lesbares Format um, indem es Einrückungen, Zeilenumbrüche und konsistente Abstände hinzufügt. Dieser Prozess macht Dokumente leichter lesbar, verständlich und bearbeitbar, was besonders für Entwicklung, Debugging und Dokumentation wertvoll ist. Das Komprimieren von XML entfernt hingegen unnötige Leerzeichen, Zeilenumbrüche und Einrückungen, um eine kompakte, einzeilige Version zu erstellen. Komprimierung reduziert die Dateigröße, was Übertragungsgeschwindigkeit erhöht und Speicherbedarf senkt - ideal für Produktionsumgebungen, wo XML nur maschinell verarbeitet wird. Unser XML-Formatierer bietet beide Optionen, sodass Sie je nach Bedarf zwischen lesbarer und kompakter Formatierung wechseln können. Während verschönertes XML 30-50% größer sein kann, überwiegen in der Entwicklungsphase meist die Vorteile der Lesbarkeit."
          },
          {
            question: "Wie funktioniert die XML-Validierung und welche Fehler erkennt sie?",
            answer: "Die XML-Validierung in unserem Tool analysiert die XML-Struktur und prüft sie auf Konformität mit den Regeln für wohlgeformtes XML. Sie validiert, ob das Dokument grundlegende Syntaxanforderungen erfüllt, wie: korrekt verschachtelte Elemente (jedes Start-Tag muss ein passendes End-Tag in richtiger Reihenfolge haben), korrekt gebildete Attribute (alle Attributwerte müssen in Anführungszeichen stehen), richtige Verwendung von Entitäten (Sonderzeichen müssen korrekt maskiert sein) und das Vorhandensein eines einzelnen Root-Elements. Häufig erkannte Fehler sind: nicht geschlossene Tags, nicht übereinstimmende Start- und End-Tags, fehlende Anführungszeichen um Attributwerte, falsche Elementverschachtelung, ungültige Zeichen und doppelte Attribute innerhalb desselben Elements. Bei Validierungsfehlern zeigt unser XML-Formatierer spezifische Fehlermeldungen an, die die Art des Problems und seine Position im Dokument (mit Zeilen- und Spaltenangabe) angeben, um schnelle Identifikation und Behebung zu ermöglichen. Der Validator konzentriert sich auf strukturelle Korrektheit, nicht auf die Validierung gegen bestimmte DTDs oder XML-Schemata, was ihn für grundlegende XML-Syntaxprüfungen universell einsetzbar macht."
          },
          {
            question: "Kann dieses Tool große XML-Dateien verarbeiten?",
            answer: "Ja, unser XML-Formatierer kann mittelgroße XML-Dateien (bis zu mehreren Megabytes) direkt im Browser verarbeiten. Für optimale Performance nutzt das Tool effiziente Parsing-Algorithmen und DOM-Manipulationstechniken, die den Speicherverbrauch gering halten. Allerdings gibt es aufgrund von Browser-Beschränkungen und verfügbaren Systemressourcen praktische Grenzen. Bei sehr großen XML-Dateien (Dutzende oder Hunderte von Megabytes) kann es zu Performance-Einbußen oder in Extremfällen zu Browser-Beschränkungen kommen. Für solche großen Dateien empfehlen wir, sie in kleineren Blöcken zu verarbeiten oder zunächst die Komprimierungsoption zu nutzen, um den Speicherbedarf während der Verarbeitung zu reduzieren. Das Tool ist für gängige XML-Anwendungsfälle optimiert, einschließlich Konfigurationsdateien, API-Antworten, Datenquellen und die meisten Web-Service-Lasten. Wenn Sie regelmäßig besonders große XML-Datensätze verarbeiten, sollten Sie spezialisierte Desktop-XML-Editoren in Betracht ziehen, die für große Dateien mit optimiertem Speichermanagement ausgelegt sind."
          },
          {
            question: "Ändert die XML-Formatierung die Funktionalität oder Verarbeitung?",
            answer: "Nein, korrekte XML-Formatierung ändert nicht die funktionale Bedeutung oder wie Anwendungen das XML verarbeiten. XML-Parser ignorieren zusätzliche Leerzeichen und Zeilenumbrüche zwischen Elementen und konzentrieren sich nur auf die eigentlichen Daten und die Struktur. Unser Formatierungstool behält alle grundlegenden Komponenten bei: Elementnamen, Attribute, Werte und ihre hierarchischen Beziehungen bleiben exakt gleich. Die einzigen Änderungen sind visueller Natur - das Hinzufügen oder Entfernen von Leerzeichen, Zeilenumbrüchen und Einrückungen. Dieser Grundsatz erklärt, warum dasselbe XML-Dokument sowohl in verschönerter als auch komprimierter Form vorliegen kann, während es funktional äquivalent bleibt. Wichtig zu beachten ist, dass Leerzeichen innerhalb von Textknoten (der tatsächliche Inhalt zwischen Tags) erhalten bleiben, da diese je nach Anwendung bedeutungsvoll sein können. Unser Formatierungstool ist darauf ausgelegt, die semantische Integrität des XML zu bewahren, während es die visuelle Darstellung für menschliche Leser verbessert."
          },
          {
            question: "Wie kann ich den Formatierungsstil für meine XML-Dokumente anpassen?",
            answer: "Unser XML-Formatierer bietet mehrere Anpassungsoptionen, um Ihren bevorzugten Codierungsstil oder Projektanforderungen gerecht zu werden. Sie können die Einrückungsgröße wählen (2 Leerzeichen, 4 Leerzeichen oder Tabulator), um sich an Team-Standards oder persönliche Vorlieben anzupassen. Für visuelle Unterstützung beim Bearbeiten können Sie Zeilennummern ein- oder ausblenden, was besonders bei großen Dokumenten oder beim Referenzieren spezifischer XML-Stellen hilfreich ist. Das Tool merkt sich Ihre letzten Einstellungen für zukünftige Sitzungen. Während das Tool derzeit keine erweiterten Stiloptionen wie benutzerdefinierte Attributsortierung oder spezielle Tag-Formatierung unterstützt, folgt es allgemein akzeptierten XML-Formatierungsbest Practices, die für die meisten Anwendungsfälle geeignet sind. Die Standardeinstellungen erzeugen eine saubere, konsistente Struktur, die Lesbarkeit und effiziente Raumnutzung ausbalanciert, wodurch Ihre XML-Dokumente sowohl für technische als auch nicht-technische Beteiligte zugänglich werden."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Nutzung des XML-Formatierers",
        steps: [
          "<strong>XML-Inhalt eingeben</strong>: Geben Sie zunächst Ihre XML-Daten in das Eingabefeld ein. Sie können XML-Code direkt eingeben oder einfügen. Wenn Sie neu mit dem Tool sind oder experimentieren möchten, klicken Sie auf einen der Beispiel-Buttons unter dem Eingabefeld, um XML-Beispiele unterschiedlicher Komplexität zu laden.",
          "<strong>Operationstyp wählen</strong>: Wählen Sie im Abschnitt „Operationstyp“, ob Sie Ihr XML verschönern oder komprimieren möchten. Verschönerung erweitert Ihr XML mit passenden Einrückungen und Zeilenumbrüchen für bessere Lesbarkeit, während Komprimierung unnötige Leerzeichen entfernt, um die Dateigröße zu reduzieren.",
          "<strong>Formatierungsoptionen anpassen</strong>: Wenn Sie XML verschönern, können Sie den Einrückungsstil über das Dropdown-Menü „Einrückungseinstellungen“ wählen. Wählen Sie zwischen 2 Leerzeichen, 4 Leerzeichen oder Tabulator je nach Ihren Codierungsstandards oder Vorlieben. Sie können auch die Option „Zeilennummern anzeigen“ umschalten, um Zeilennummern in der Ausgabe anzuzeigen oder auszublenden.",
          "<strong>XML verarbeiten</strong>: Klicken Sie auf den „Verschönern“- oder „Komprimieren“-Button (je nach gewählter Operation), um Ihr XML zu formatieren. Das Tool verarbeitet Ihre Eingabe, prüft auf Syntaxfehler und zeigt das formatierte Ergebnis im unteren Ausgabebereich an. Bei XML-Syntaxfehlern erscheint eine Fehlermeldung, die Ihnen hilft, Probleme zu identifizieren und zu beheben.",
          "<strong>Formatierte Ausgabe prüfen</strong>: Nach der Verarbeitung überprüfen Sie das formatierte XML im Ergebnisbereich. Wenn Zeilennummern aktiviert sind, können Sie leicht auf bestimmte Dokumentabschnitte verweisen. Die unter der Ausgabe angezeigten Zeichen- und Zeilenzahlen helfen Ihnen, Dokumentgröße und -komplexität im Blick zu behalten.",
          "<strong>Kopieren oder weiter bearbeiten</strong>: Wenn Sie mit dem Ergebnis zufrieden sind, klicken Sie auf „Code kopieren“, um das formatierte XML in die Zwischenablage zu kopieren, zur Verwendung in Ihren Anwendungen, Dokumenten oder zur weiteren Bearbeitung. Wenn Sie die Eingabe anpassen und erneut verarbeiten möchten, können Sie das ursprüngliche XML ändern und den Formatierungsbutton erneut klicken.",
          "<strong>Bereinigen und neu beginnen</strong>: Wenn Sie ein anderes XML-Dokument verarbeiten möchten, klicken Sie auf „Leeren“, um Eingabe- und Ausgabebereich zurückzusetzen. Dann können Sie mit neuem XML-Inhalt beginnen oder ein weiteres Beispiel laden, um mit dem Formatierer fortzufahren."
        ]
      },
      conclusion: "Der XML-Formatierer ist ein unverzichtbares Werkzeug im modernen Entwickler-Toolkit, das die Lücke zwischen maschinell effizienter XML-Darstellung und menschenlesbarem Code überbrückt. Durch die Umwandlung von dichtem, unformatiertem XML in klar strukturierte Dokumente – und umgekehrt – reduziert es erheblich den Zeit- und Arbeitsaufwand für die Verarbeitung von XML-Daten in zahlreichen Anwendungen und Branchen. Ob bei der Entwicklung von Web-Services, der Verwaltung von Systemkonfigurationen, der Verarbeitung von Datenquellen oder der Wartung von Legacy-Systemen – richtig formatiertes XML verbessert Codequalität, reduziert Fehler und fördert die Zusammenarbeit zwischen Teammitgliedern. Da XML weiterhin ein grundlegendes Format für Datenaustausch und Konfiguration in Unternehmensumgebungen bleibt, ist der Zugang zu einem zuverlässigen Formatierungstool für effektive Entwicklungs- und Systemwartungs-Workflows unerlässlich. Dieser Online-XML-Formatierer macht spezielle Desktop-Anwendungen überflüssig und bietet dennoch professionelle Funktionen, die von jedem modernen Webbrowser aus zugänglich sind."
    }
  }