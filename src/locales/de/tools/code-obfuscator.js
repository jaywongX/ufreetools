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
    },
    article: {
      title: "Code-Obfuskation verstehen - Anwendungssicherheit und Schutz geistigen Eigentums verbessern",
      overview: {
        title: "Was ist Code-Obfuskation?",
        content: "<strong>Code-Obfuskation</strong> ist eine Sicherheitstechnik, die lesbaren Quellcode in eine komplexe, schwer verständliche Version umwandelt, während die Funktionalität erhalten bleibt. Diese wirkungsvolle Schutzmaßnahme hilft, geistiges Eigentum zu schützen, Reverse Engineering zu erschweren und sensible Algorithmen oder Geschäftslogik vor unbefugtem Zugriff zu bewahren.<br><br>Der Code-Obfuskator unterstützt JavaScript- und CSS-Obfuskation mit Techniken wie Variablenumbenennung, Kontrollfluss-Glättung, toter Code-Injektion und String-Verschlüsselung, um mehrschichtigen Schutz gegen Code-Diebstahl und Manipulation zu bieten. Durch die Verkomplizierung der Code-Analyse bietet Obfuskation eine essentielle Sicherheitsebene für Webanwendungen und Client-Skripte."
      },
      useCases: {
        title: "Typische Anwendungsfälle für Code-Obfuskation",
        items: [
          {
            title: "Schutz geistigen Eigentums",
            description: "Wertvolle Algorithmen, proprietäre Geschäftslogik und innovative Code-Implementierungen werden durch unverständlichen Code vor Wettbewerbern und unbefugter Kopie geschützt."
          },
          {
            title: "Client-seitige Sicherheit",
            description: "Authentifizierungsmechanismen, Validierungsroutinen und API-Interaktionen im Browser werden durch Obfuskation gesichert, um Angreifern das Verständnis und Ausnutzen zu erschweren."
          },
          {
            title: "Lizenzschutz",
            description: "Lizenzprüfalgorithmen und Produktaktivierungscodes werden geschützt, um unberechtigte Umgehung oder Manipulation zu verhindern."
          },
          {
            title: "Automatisierte Analyse verhindern",
            description: "Statische Code-Analyse wird durch Obfuskationstechniken erschwert, was automatisierte Sicherheitsschwachstellen-Scans und Code-Extraktion behindert."
          },
          {
            title: "Mobile Web-Apps schützen",
            description: "JavaScript und CSS in progressiven Web-Apps (PWAs) und mobilen Webanwendungen werden geschützt, die sonst leicht auf Endgeräten eingesehen und wiederverwendet werden könnten."
          },
          {
            title: "Premium-Inhalte sichern",
            description: "Zugriffsmechanismen für kostenpflichtige Funktionen oder Abonnement-Inhalte werden durch Obfuskation vor unbefugter Nutzung geschützt."
          },
          {
            title: "Zeitlich begrenzte Bereitstellung",
            description: "Aktionscodes, zeitlich begrenzte Funktionen oder saisonale Features werden durch Obfuskation vor vorzeitiger Aktivierung oder Entdeckung geschützt."
          }
        ]
      },
      guide: {
        title: "Anleitung zur Verwendung des Code-Obfuskators",
        intro: "Folgen Sie diesen Schritten für effektive Code-Obfuskation:",
        steps: [
          {
            title: "Code-Sprache wählen",
            description: "Wählen Sie zwischen JavaScript- oder CSS-Obfuskation, da unterschiedliche Techniken angewendet werden."
          },
          {
            title: "Obfuskationsoptionen konfigurieren",
            description: "Passen Sie die Obfuskationsstärke an Ihre Bedürfnisse an. JavaScript-Optionen umfassen Kontrollfluss-Glättung, tote Code-Injektion und String-Array-Transformation. CSS-Optionen beinhalten Selektorenumbenennung und Regelrestrukturierung."
          },
          {
            title: "Quellcode eingeben",
            description: "Fügen Sie Ihren Code ein oder nutzen Sie die Beispiele, um Obfuskationseffekte zu verstehen."
          },
          {
            title: "Obfuskierten Code generieren",
            description: 'Klicken Sie "Obfuskieren", um den Code in eine sicherere, schwerer lesbare Version umzuwandeln.'
          },
          {
            title: "Ergebnisse prüfen",
            description: "Überprüfen Sie den obfuskierten Code und die angezeigten Größenänderungen."
          },
          {
            title: "Code kopieren oder herunterladen",
            description: "Verwenden Sie den obfuskierten Code direkt in Ihrem Projekt - die Funktionalität bleibt erhalten."
          },
          {
            title: "Obfuskierten Code testen",
            description: "Testen Sie den Code gründlich vor dem Produktiveinsatz, um Funktionalität zu gewährleisten."
          }
        ]
      },
      techniques: {
        title: "Obfuskationstechniken verstehen",
        intro: "Verschiedene Techniken schützen Ihren Code effektiv:",
        items: [
          {
            name: "Variablen- und Funktionsumbenennung",
            description: "Aussagekräftige Namen werden durch kürzere, verschlüsselte oder irreführende Bezeichner ersetzt, was die Lesbarkeit stark reduziert."
          },
          {
            name: "Kontrollfluss-Glättung",
            description: "Direkte Code-Pfade werden durch Zustandsautomaten ersetzt, was die Nachverfolgung der Logik extrem erschwert."
          },
          {
            name: "Tote Code-Injektion",
            description: "Nicht-funktionaler Code wird eingefügt, der Analysen stört und die eigentliche Funktionalität verschleiert."
          },
          {
            name: "String-Verschlüsselung",
            description: "String-Literale werden zur Laufzeit entschlüsselt, was direkte Textanalysen verhindert."
          },
          {
            name: "Selbstverteidigender Code",
            description: "Erkennt Manipulationsversuche und kann gezielt Fehler auslösen, um Reverse Engineering zu vereiteln."
          },
          {
            name: "CSS-Selektor-Umbennung",
            description: "Klassen- und ID-Selektoren erhalten zufällige Namen, was Designmuster schützt."
          }
        ]
      },
      faq: {
        title: "Häufige Fragen zur Code-Obfuskation",
        items: [
          {
            question: "Verhindert Obfuskation Reverse Engineering komplett?",
            answer: "Keine Methode bietet 100%igen Schutz. Obfuskation erhöht den Aufwand für Angreifer signifikant und sollte als Sicherheitsschicht in einer umfassenden Strategie betrachtet werden. Für hochsensible Operationen ist server-seitige Ausführung die sicherste Option."
          },
          {
            question: "Beeinträchtigt Obfuskation die Performance?",
            answer: "Moderne JavaScript-Engines optimieren obfuskierten Code effizient. Fortgeschrittene Techniken können jedoch geringen Overhead verursachen. Für die meisten Anwendungen ist der Unterschied vernachlässigbar."
          },
          {
            question: "Wie debugge ich obfuskierten Code?",
            answer: "Debugging ist erschwert. Bewahren Sie Originalcode auf, verwenden Sie Source Maps, testen Sie vor der Obfuskation und implementieren Sie robustes Logging. Für kritische Probleme kann ein Rückgriff auf nicht-obfuskierten Code nötig sein."
          },
          {
            question: "Funktioniert obfuskierter JavaScript-Code in allen Browsern?",
            answer: "Ja, bei korrekter Obfuskation bleibt die Browserkompatibilität erhalten. Stellen Sie sicher, dass Ihr Code keine ununterstützten Features verwendet, da Obfuskation keine Polyfills hinzufügt."
          },
          {
            question: "Zerstört CSS-Obfuskation mein Website-Design?",
            answer: "Möglicherweise, wenn JavaScript oder Drittanbieter-Komponenten auf bestimmte Klassennamen angewiesen sind. Entweder korrespondierenden Code ebenfalls obfuskieren oder kritische Selektoren beibehalten."
          },
          {
            question: "Wie stark vergrößert Obfuskation die Dateien?",
            answer: "Einfache Obfuskation reduziert oft die Größe durch Whitespace-Entfernung. Fortgeschrittene Techniken können die Größe um 20-100%+ erhöhen. Das Tool zeigt die Auswirkung an."
          },
          {
            question: "Kann ich nur Code-Teile obfuskieren?",
            answer: "Dieses Online-Tool verarbeitet gesamten Code. Für partielle Obfuskation: Schlüsselmodule separat obfuskieren, Scoping-Techniken nutzen oder Build-Tools mit selektiver Obfuskation verwenden."
          }
        ]
      },
      bestPractices: {
        title: "Best Practices für effektive Code-Obfuskation",
        intro: "Maximieren Sie Sicherheit bei erhaltener Funktionalität:",
        items: [
          "Bewahren Sie Originalcode an sicherem Ort auf",
          "Testen Sie obfuskierten Code vor dem Einsatz",
          "Balancieren Sie Obfuskationsstärke mit Performance-Anforderungen",
          "Kombinieren Sie Obfuskation mit HTTPS, Authentifizierung und Server-Validierung",
          "Vermeiden Sie Obfuskation von Code mit externen Abhängigkeiten",
          "Achten Sie bei CSS-Obfuskation auf JavaScript- und Drittanbieter-Referenzen",
          "Erwägen Sie Source Maps für Debugging, aber bewahren Sie sie getrennt auf",
          "Aktualisieren Sie Obfuskationsmethoden regelmäßig",
          "Nutzen Sie mehrschichtige Sicherheit für sensible Anwendungen",
          "Verstehen Sie Obfuskationsgrenzen - es ist kein Allheilmittel",
          "Kombinieren Sie mit Content Security Policies (CSP) für Webanwendungen",
          "Dokumentieren Sie Obfuskationsprozesse für Teamwissen und Wartung"
        ]
      }
    }
  }