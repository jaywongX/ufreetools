export default {
    name: 'HTML-Formatierer',
    description: 'Formatiert und verschönert HTML-Code für bessere Lesbarkeit',
    formatMode: 'Formatierungsmodus',
    beautify: 'Verschönern',
    minify: 'Minifizieren',
    formatOptions: 'Formatierungsoptionen',
    removeComments: 'Kommentare entfernen',
    preserveComments: 'Kommentare erhalten',
    showLineNumbers: 'Zeilennummern anzeigen',
    helpText: 'Der HTML-Verschönerer/Minifizierer hilft Entwicklern, HTML-Code schnell zu organisieren oder zu optimieren, um die Lesbarkeit zu verbessern oder die Dateigröße zu verringern.',
    input: 'HTML-Eingabe',
    inputPlaceholder: 'HTML-Code hier einfügen oder eingeben...',
    examples: 'Beispiele',
    exampleNames: {
      simple: 'Einfaches HTML',
      complex: 'Komplexe HTML-Seite'
    },
    beautifiedResult: 'Verschönertes Ergebnis',
    minifiedResult: 'Minifiziertes Ergebnis',
    stats: {
      chars: 'Zeichenanzahl',
      lines: 'Zeilenanzahl',
      reduction: 'Reduziert um {chars} Zeichen ({percent}%)'
    },
    indentOptions: {
      spaces: '{count} Leerzeichen',
      tab: 'Tab-Einzug'
    },
    errorMessages: {
      emptyInput: 'Bitte HTML-Code zum Verarbeiten eingeben',
      processingFailed: 'HTML-Verarbeitung fehlgeschlagen: {message}'
    },
    options: {
      indentSize: 'Einzugsgröße',
      wrapLength: 'Zeilenumbruch-Länge',
      indentInnerHtml: 'Inneres HTML einrücken',
      preserveNewlines: 'Zeilenumbrüche erhalten',
      maxPreserveNewlines: 'Maximale aufeinanderfolgende Zeilenumbrüche',
      wrapAttributes: 'Attribute umbrechen',
      sortAttributes: 'Attribute sortieren',
      sortClassNames: 'Klassennamen sortieren'
    },
    actions: {
      format: 'HTML formatieren',
      minify: 'Minifizieren',
      clear: 'Leeren',
      copy: 'Kopieren',
      download: 'Herunterladen',
      upload: 'Datei hochladen'
    },
    messages: {
      copied: 'In die Zwischenablage kopiert!',
      formatSuccess: 'HTML-Formatierung erfolgreich',
      formatError: 'Fehler bei der HTML-Formatierung',
      invalidHtml: 'Ungültige HTML-Syntax'
    },
    article: {
      title: "HTML-Formatierer: Unverzichtbares Tool für Webentwicklung und Codeoptimierung",
      overview: {
        title: "Was ist ein HTML-Formatierer?",
        content: "<strong>HTML-Formatierung</strong> ist der Prozess der Strukturierung von HTML-Code zur Verbesserung der Lesbarkeit und Wartbarkeit. HTML-Formatierer bieten zwei Hauptfunktionen: <strong>Verschönerung</strong> und <strong>Minifizierung</strong> von HTML-Code.<br><br>Der <strong>Verschönerungsmodus</strong> reorganisiert HTML-Code durch korrekte Einrückung, konsistente Abstände und logische Zeilenumbrüche, wodurch er leichter lesbar und bearbeitbar wird. Dies ist besonders wertvoll für Entwicklung, Debugging und Code-Zusammenarbeit.<br><br>Der <strong>Minifizierungsmodus</strong> entfernt unnötige Leerzeichen, Kommentare und redundante Zeichen, um die Dateigröße zu reduzieren, ohne die Funktionalität zu ändern. Minifiziertes HTML lädt schneller, verbessert die Website-Performance und Benutzererfahrung, während gleichzeitig die Bandbreitennutzung reduziert wird."
      },
      useCases: {
        title: "Typische Anwendungsfälle für HTML-Formatierung",
        items: [
          {
            title: "Verbesserung des Webentwicklungs-Workflows",
            description: "Verschönern Sie unübersichtlichen HTML-Code von Kunden, Teammitgliedern oder visuellen Editoren, um ihn lesbar und wartbar zu machen. Dies steigert die Entwicklungseffizienz erheblich und reduziert die Zeit zum Verständnis komplexer HTML-Strukturen."
          },
          {
            title: "Code-Debugging und Fehlerbehebung",
            description: "Formatieren Sie schlecht strukturiertes HTML, um fehlende Tags, falsche Verschachtelung oder Syntaxfehler zu identifizieren, die Layout- oder Funktionsprobleme verursachen können. Dies macht den Debugging-Prozess direkter und weniger zeitaufwändig."
          },
          {
            title: "Website-Performance-Optimierung",
            description: "Minifizieren Sie HTML-Dateien vor der Bereitstellung, um ihre Größe zu reduzieren, die Ladegeschwindigkeit zu erhöhen und die Benutzererfahrung zu verbessern. Dies kann auch die SEO-Rankings verbessern, da die Seitenladezeit ein Faktor in Suchmaschinenalgorithmen ist."
          },
          {
            title: "HTML-Lernen und -Lehren",
            description: "Formatieren Sie komplexe HTML-Beispiele für ein besseres Verständnis ihrer Struktur oder bereiten Sie gut formatierte Code-Beispiele für Tutorials, Dokumentationen oder Schulungsmaterialien vor, die HTML-Best-Practices klar veranschaulichen."
          },
          {
            title: "Bereinigung von CMS-Ausgaben",
            description: "Bereinigen und formatieren Sie HTML-Code, der von WYSIWYG-Editoren in Content-Management-Systemen generiert wurde, die oft inkonsistente oder übermäßig ausführliche Markups produzieren, die Optimierung benötigen."
          },
          {
            title: "Wartung von Legacy-Code",
            description: "Standardisieren Sie die Formatierung von altem HTML-Code, um ihn besser mit modernen Entwicklungspraktiken kompatibel zu machen und neuen Teammitgliedern, die mit dem ursprünglichen Codierungsstil nicht vertraut sind, die Wartung zu erleichtern."
          },
          {
            title: "E-Mail-Template-Entwicklung",
            description: "Formatieren Sie HTML-E-Mail-Templates mit geeigneter Einrückung und Struktur, während Sie gleichzeitig die Fähigkeit behalten, sie für die Produktion zu minifizieren, um die Anforderungen an wartbaren Code mit den Größenbeschränkungen für E-Mail-Zustellung in Einklang zu bringen."
          }
        ]
      },
      guide: {
        title: "Anleitung zur Verwendung des HTML-Formatierers",
        intro: "Befolgen Sie diese einfachen Schritte, um Ihren HTML-Code effektiv zu formatieren und ideale Ergebnisse zu erzielen:",
        steps: [
          {
            title: "Formatierungsmodus auswählen",
            description: "Wählen Sie \"Verschönern\", um Ihren HTML-Code durch geeignete Einrückung und Abstände besser lesbar zu machen, oder \"Minifizieren\", um durch Entfernen unnötiger Leerzeichen und Zeichen die Dateigröße zu reduzieren. Wählen Sie den Modus, der Ihren aktuellen Anforderungen entspricht - verwenden Sie Verschönerung für Entwicklung und Bearbeitung, Minifizierung für Produktion und Bereitstellung."
          },
          {
            title: "Formatierungsoptionen konfigurieren",
            description: "Legen Sie Ihre bevorzugten Formatierungsoptionen fest, wie Einzugsgröße (2 Leerzeichen, 4 Leerzeichen oder Tabulator), ob Kommentare erhalten bleiben sollen, Zeilenumbrüche beibehalten werden sollen und andere HTML-spezifische Formatierungspräferenzen. Für erweiterte Formatierung öffnen Sie den Abschnitt \"Erweiterte Optionen\" und konfigurieren Sie Zeilenumbruch-Länge und maximale aufeinanderfolgende Zeilenumbrüche."
          },
          {
            title: "HTML-Code eingeben",
            description: "Fügen Sie den HTML-Code in den Eingabebereich ein oder geben Sie ihn ein. Sie können auch über das Dropdown-Menü \"Beispiele\" Beispiel-HTML laden, um zu sehen, wie der Formatierer mit verschiedenen HTML-Strukturen umgeht. Für größere Projekte können Sie erwägen, Abschnitte mit unterschiedlichen Formatierungsanforderungen separat zu formatieren."
          },
          {
            title: "HTML formatieren",
            description: "Klicken Sie auf die Schaltfläche \"HTML formatieren\" oder \"Minifizieren\" (je nach gewähltem Modus), um Ihren Code zu verarbeiten. Das Tool wendet sofort die ausgewählten Formatierungsregeln an und zeigt das Ergebnis im unteren Ausgabebereich an. Die Statistiken unten zeigen die Änderungen in Zeichen- und Zeilenanzahl."
          },
          {
            title: "Formatierte Ausgabe prüfen",
            description: "Überprüfen Sie das formatierte HTML im Ergebnisbereich, um sicherzustellen, dass es Ihren Erwartungen entspricht. Die Zeichen- und Zeilenzählstatistiken helfen Ihnen zu verstehen, wie sich die Formatierung auf Ihren Code auswirkt. Bei minifiziertem Code sehen Sie auch, um wie viel Prozent die Dateigröße reduziert wurde."
          },
          {
            title: "Ergebnis kopieren oder herunterladen",
            description: "Verwenden Sie die Schaltfläche \"Kopieren\", um das formatierte HTML in die Zwischenablage zu kopieren, wo Sie es in Ihre Entwicklungsumgebung, Ihr Content-Management-System oder jede andere Anwendung einfügen können, die formatierten Code benötigt."
          },
          {
            title: "Einstellungen nach Bedarf anpassen",
            description: "Wenn das Ergebnis nicht vollständig Ihren Erwartungen entspricht, passen Sie die Formatierungsoptionen an und versuchen Sie es erneut. Unterschiedliche HTML-Strukturen können von verschiedenen Formatierungseinstellungen profitieren, besonders bei komplex verschachtelten Elementen oder speziellen HTML-Komponenten."
          }
        ]
      },
      tips: {
        title: "Fortgeschrittene HTML-Formatierungstipps",
        intro: "Nutzen Sie diese professionellen Tipps, um das Beste aus dem HTML-Formatierer herauszuholen:",
        items: [
          "Verwenden Sie während der Entwicklung verschönertes HTML und in der Produktion minifiziertes HTML, um die beste Balance zwischen Code-Lesbarkeit und Performance zu erreichen",
          "Beim Formatieren von HTML mit eingebettetem JavaScript oder CSS sollten Sie diese zunächst in separate Dateien auslagern, um bessere Ergebnisse zu erzielen",
          "Für große HTML-Dokumente erhöhen Sie die Option \"Zeilenumbruch-Länge\", um übermäßige Zeilenumbrüche in der formatierten Ausgabe zu vermeiden",
          "Verwenden Sie die Option \"Zeilenumbrüche erhalten\", um bewusste Abstände zwischen logischen HTML-Abschnitten beizubehalten",
          "Seien Sie vorsichtig beim Minifizieren von HTML, das von Frameworks wie React, Vue oder Angular generiert wurde, da dies Datenattribute und Bindingsyntax beeinträchtigen könnte",
          "Formatieren Sie Ihren HTML-Code regelmäßig während der Entwicklung, nicht erst am Projektende, um Strukturprobleme frühzeitig zu erkennen",
          "Wenn Sie für bestimmte Abschnitte spezielle Formatierungen beibehalten müssen, erwägen Sie das Hinzufügen von Kommentaren, die nach der Formatierung wiederhergestellt werden können",
          "Testen Sie für HTML-E-Mail-Templates den formatierten Code in verschiedenen E-Mail-Clients, da diese unterschiedliche HTML-Rendering-Fähigkeiten haben",
          "Verwenden Sie für Attribute komplexer HTML-Elemente Zeilenumbrüche, um die Lesbarkeit zu verbessern, während Sie gleichzeitig eine gültige HTML-Struktur beibehalten",
          "Bei Template-Sprachen wie Handlebars oder EJS formatieren Sie zunächst das HTML und integrieren dann die Template-Tags vorsichtig wieder ein"
        ]
      },
      faq: {
        title: "Häufig gestellte Fragen zur HTML-Formatierung",
        items: [
          {
            question: "Was ist der Unterschied zwischen HTML-Verschönerung und Minifizierung?",
            answer: "HTML-Verschönerung strukturiert Code durch korrekte Einrückung, Abstände und Zeilenumbrüche neu, um die menschliche Lesbarkeit und Wartbarkeit zu verbessern. Sie macht komplexes HTML leichter verständlich, bearbeitbar und debugbar. Minifizierung macht das Gegenteil - sie entfernt alle unnötigen Zeichen (Leerzeichen, Kommentare etc.), um die Dateigröße zu reduzieren, ohne die Funktionalität zu ändern, und optimiert HTML für maschinelle Verarbeitung und schnelleres Laden. Verwenden Sie Verschönerung für Entwicklungsumgebungen und Minifizierung für Produktionsumgebungen."
          },
          {
            question: "Kann HTML-Formatierung die Funktionalität meiner Website beeinträchtigen?",
            answer: "In den meisten Fällen behält korrekte HTML-Formatierung die Funktionalität bei, da sie nur Leerzeichen und Einrückungen ändert, nicht die tatsächlichen HTML-Elemente oder Attribute. Es gibt jedoch Ausnahmen: Formatierung könnte Leerzeichen-sensitive Elemente (wie <pre> oder <code>), Inline-JavaScript ohne Semikolons oder bestimmte komplexe Attribute beeinflussen. Testen Sie immer formatiertes HTML, besonders bei Minifizierung, um sicherzustellen, dass alles wie erwartet funktioniert."
          },
          {
            question: "Wie verbessert HTML-Formatierung SEO und Website-Performance?",
            answer: "HTML-Formatierung beeinflusst SEO und Performance auf mehrere Arten: Minifiziertes HTML reduziert die Dateigröße, was zu schnelleren Seitenladezeiten führt - ein Schlüsselfaktor für Suchmaschinenrankings. Sauberer, gut strukturierter HTML-Code macht es Suchmaschinen-Crawlern leichter, Ihre Inhaltshierarchie zu parsen und zu verstehen. Korrekt formatierter Code ist auch leichter zu warten und für SEO-Verbesserungen zu aktualisieren. Allerdings ist Formatierung allein nicht ausreichend; Sie benötigen eine umfassende SEO-Strategie und technische Optimierungen."
          },
          {
            question: "Kann der HTML-Formatierer mit komplexen Frameworks oder Template-Sprachen umgehen?",
            answer: "HTML-Formatierer funktionieren am besten mit Standard-HTML. Bei HTML mit Framework-spezifischer Syntax (wie Angular-Direktiven, React JSX oder Template-Tags wie {{ handlebars }}) könnten Probleme auftreten, da der Formatierer diese möglicherweise nicht als gültige HTML-Konstrukte erkennt. Für komplexe Frameworks sollten Sie Framework-spezifische Formatierer verwenden oder nur die reinen HTML-Teile formatieren. Alternativ können Sie spezielle Syntax vor der Formatierung temporär durch Platzhalter ersetzen und sie danach wieder einfügen."
          },
          {
            question: "Beeinflusst HTML-Formatierung Inline-CSS und JavaScript?",
            answer: "Ja, HTML-Formatierung könnte Inline-CSS und JavaScript beeinflussen. Beim Verschönern könnte der Formatierer diesen Abschnitten Einrückungen hinzufügen, was ihre Struktur verändern könnte. Beim Minifizieren könnten Kommentare und unnötige Leerzeichen innerhalb von <style>- und <script>-Tags entfernt werden. Für optimale Ergebnisse mit komplexen Inline-Skripten oder Styles sollten Sie in Betracht ziehen: Wichtiges JavaScript in externe Dateien auslagern, CDATA-Abschnitte für Skriptinhalte verwenden, die nicht geändert werden sollen, oder diese Abschnitte manuell vor dem Einfügen in HTML zu formatieren."
          },
          {
            question: "Wie stark kann Minifizierung die HTML-Dateigröße reduzieren?",
            answer: "HTML-Minifizierung reduziert typischerweise die Dateigröße um 10-25%, abhängig von der ursprünglichen Formatierung, Kommentarmenge und HTML-Komplexität. Code mit vielen Kommentaren und großzügigen Abständen wird stärkere Reduktionen zeigen. Beispielsweise könnte eine 100KB HTML-Datei nach Minifizierung auf 75-90KB schrumpfen. Obwohl dies im Vergleich zu CSS- oder JavaScript-Minifizierung (die 50-70% Reduktion erreichen kann) gering erscheint, ist jedes Kilobyte für Performance wichtig, besonders für mobile Nutzer oder solche mit langsamen Verbindungen."
          },
          {
            question: "Wie behalte ich Kommentare bei der HTML-Formatierung bei?",
            description: "Um Kommentare bei der HTML-Formatierung zu erhalten, deaktivieren Sie die Option \"Kommentare entfernen\" (oder stellen Sie sicher, dass \"Kommentare erhalten\" aktiviert ist, je nach Benutzeroberfläche). Der Verschönerer behält Ihre HTML-Kommentare bei, während er den umgebenden Code formatiert. Bei Minifizierung werden Kommentare standardmäßig normalerweise entfernt, um die Größe maximal zu reduzieren, da sie für die Laufzeitfunktionalität nicht benötigt werden. Wenn Sie bestimmte Kommentare (wie Lizenzinformationen oder wichtige Hinweise) während der Minifizierung behalten müssen, sollten Sie den Verschönerungsmodus verwenden oder diese Abschnitte separat behandeln."
          }
        ]
      },
      bestPractices: {
        title: "Best Practices für HTML-Code-Formatierung",
        intro: "Befolgen Sie diese professionellen Empfehlungen, um hochwertigen, gut formatierten HTML-Code zu pflegen:",
        items: [
          "Etablieren Sie konsistente HTML-Formatierungsstandards für Ihr Team oder Projekt, um Code-Einheitlichkeit sicherzustellen",
          "Verwenden Sie semantische HTML-Elemente, um Code-Lesbarkeit und Suchmaschinenoptimierung zu verbessern",
          "Halten Sie HTML-Elemente korrekt verschachtelt, um logische Codestrukturen zu schaffen und Rendering-Probleme zu vermeiden",
          "Wenden Sie konsistente Einrückung im gesamten HTML-Dokument an, um die Elementhierarchie klar darzustellen",
          "Halten Sie vernünftige Zeilenlängen (80-120 Zeichen) ein, um Lesbarkeit in Code-Editoren und Versionskontroll-Diffs zu verbessern",
          "Gruppieren Sie verwandte HTML-Elemente durch geeignete Abstände zusammen, um logische Inhaltsabschnitte zu schaffen",
          "Formatieren Sie HTML-Attribute konsistent - mehrere Attribute für komplexe Elemente auf separate Zeilen oder inline für einfache Elemente",
          "Fügen Sie für komplexe Abschnitte aussagekräftige Kommentare hinzu, aber vermeiden Sie übermäßige Kommentierung von offensichtlichem Code",
          "Verwenden Sie für Konsistenz und HTML5-Konformität Kleinbuchstaben für alle HTML-Elementnamen, Attribute und Werte",
          "Entfernen Sie redundanten Code, leere Elemente und unnötige Attribute vor der Formatierung, um Unordnung zu reduzieren",
          "Validieren Sie Ihr HTML vor und nach der Formatierung gegen W3C-Standards, um Konformität sicherzustellen",
          "Formatieren Sie Ihren HTML-Code regelmäßig während des gesamten Entwicklungsprozesses, nicht nur beim Projektabschluss"
        ]
      }
    }
  }