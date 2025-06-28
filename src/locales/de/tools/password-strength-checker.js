export default {
    name: 'Passwortstärke-Prüfer',
    description: 'Analysiert und bewertet die Sicherheit von Passwörtern mit detaillierten Sicherheitsmetriken',
    input: {
      title: 'Passwort zur Überprüfung eingeben',
      placeholder: 'Passwort hier eingeben...',
      showPassword: 'Passwort anzeigen',
      hidePassword: 'Passwort verbergen',
      clear: 'Leeren',
      generate: 'Passwort generieren',
      check: 'Stärke prüfen',
      empty: 'Bitte geben Sie ein Passwort ein, um die Bewertung zu sehen',
      disclaimer: 'Geben Sie jedes Passwort zur Sicherheitsbewertung ein. Ihr Passwort wird nicht gespeichert oder an Server übertragen.'
    },
    results: {
      title: 'Passwortstärke-Bewertung',
      strength: 'Stärke',
      score: 'Punktzahl',
      entropy: 'Entropie',
      crackTime: 'Geschätzte Knackzeit',
      very_weak: 'Sehr schwach',
      weak: 'Schwach',
      fair: 'Mittel',
      good: 'Gut',
      strong: 'Stark',
      very_strong: 'Sehr stark',
      feedback: 'Feedback',
      suggestions: 'Verbesserungsvorschläge',
      warnings: 'Erkannte Probleme',
      noWarnings: 'Keine Warnungen erkannt',
      noSuggestions: 'Keine Vorschläge verfügbar'
    },
    details: {
      title: 'Detaillierte Analyse',
      length: 'Passwortlänge',
      charset: 'Zeichenvielfalt',
      patterns: 'Verwendete Muster',
      uniqueChars: 'Eindeutige Zeichen',
      uppercase: 'Großbuchstaben',
      lowercase: 'Kleinbuchstaben',
      numbers: 'Zahlen',
      symbols: 'Sonderzeichen',
      repetitions: 'Wiederholungen',
      sequences: 'Sequenzen',
      dictionary: 'Wörterbuchwörter',
      leaked: 'Kompromittiert',
      reused: 'Wiederverwendete Muster'
    },
    patterns: {
      dictionary: 'Wörterbuchwort',
      sequence: 'Aufeinanderfolgende Zeichen',
      repeat: 'Wiederholte Zeichen',
      spatial: 'Räumliches Muster (Tastatur)',
      date: 'Datumsmuster',
      year: 'Jahresmuster',
      common: 'Häufiges Passwort',
      name: 'Namensmuster',
      reversal: 'Umgekehrtes Wort',
      leet: 'Leet-Speak-Ersetzungen',
      predictable: 'Vorhersehbares Muster'
    },
    crackTimes: {
      instantly: 'Sofort',
      seconds: 'Innerhalb von Sekunden',
      minutes: 'Innerhalb von Minuten',
      hours: 'Innerhalb von Stunden',
      days: 'Innerhalb von Tagen',
      months: 'Innerhalb von Monaten',
      years: 'Innerhalb von Jahren',
      centuries: 'Innerhalb von Jahrhunderten',
      forever: 'Praktisch nie'
    },
    suggestions: {
      addWords: 'Mehr Wörter oder Zeichen hinzufügen',
      addSymbols: 'Sonderzeichen einbeziehen',
      addNumbers: 'Zahlen einbeziehen',
      upperLower: 'Groß- und Kleinbuchstaben mischen',
      avoidPatterns: 'Vermeiden Sie aufeinanderfolgende oder wiederholte Tastaturzeichen',
      avoidCommon: 'Vermeiden Sie Wörterbuch-basierte oder häufige Passwörter, selbst mit Buchstabenersetzungen (z.B. "e" durch "3")',
      avoidPersonal: 'Persönliche Informationen vermeiden',
      avoidDictionary: 'Wörterbuchwörter vermeiden',
      usePassphrase: 'Erwägen Sie Wortkombinationen, unzusammenhängende Wörter oder Akronyme für einprägsamere starke Passwörter',
      increaseLonger: 'Passwortlänge erhöhen',
      avoidSequence: 'Sequenzmuster vermeiden',
      avoidRepeated: 'Wiederholte Zeichen vermeiden',
      avoidDates: 'Daten und Jahre vermeiden',
      addMoreChars: 'Passwortlänge auf mindestens 12 Zeichen erhöhen - jedes zusätzliche Zeichen erhöht die Sicherheit exponentiell',
      addTypes: 'Fügen Sie {types} hinzu, um die Komplexität zu erhöhen',
      useManager: 'Verwenden Sie einen Passwort-Manager zur Generierung und Verwaltung starker Passwörter - einzigartig für jede Website'
    },
    generator: {
      title: 'Passwort-Generator',
      length: 'Länge',
      options: 'Optionen',
      uppercase: 'Großbuchstaben einbeziehen',
      lowercase: 'Kleinbuchstaben einbeziehen',
      numbers: 'Zahlen einbeziehen',
      symbols: 'Sonderzeichen einbeziehen',
      excludeSimilar: 'Ähnliche Zeichen ausschließen',
      excludeAmbiguous: 'Mehrdeutige Zeichen ausschließen',
      generate: 'Passwort generieren',
      passphrase: 'Passphrase generieren',
      wordCount: 'Anzahl der Wörter',
      separator: 'Worttrennzeichen',
      capitalize: 'Erstes Zeichen großschreiben',
      includeNumber: 'Zahl einbeziehen',
      includeSymbol: 'Sonderzeichen einbeziehen'
    },
    common: {
      copy: 'In Zwischenablage kopieren',
      save: 'In Verlauf speichern',
      clear: 'Leeren',
      refresh: 'Aktualisieren',
      copied: 'In Zwischenablage kopiert',
      saved: 'Im Verlauf gespeichert',
      history: 'Verlauf',
      noHistory: 'Kein Verlauf verfügbar',
      common: 'Häufig'
    },
    breach: {
      title: 'Datenleck-Prüfung',
      description: 'Überprüfen Sie, ob Ihr Passwort in bekannten Datenlecks aufgetaucht ist',
      disclaimer: 'Ihr Passwort wird niemals über das Netzwerk übertragen. Nur Hash-Teile werden geprüft.',
      checkButton: 'Auf Lecks prüfen',
      safe: 'In keinen bekannten Lecks gefunden',
      found: 'In {count} Datenlecks gefunden!',
      warning: 'Dieses Passwort wurde in einem Datenleck offengelegt und sollte nicht mehr verwendet werden.',
      checking: 'Prüfe auf Datenlecks...'
    },
    settings: {
      title: 'Einstellungen',
      algorithm: 'Stärke-Algorithmus',
      history: 'Verlauf speichern',
      clearHistory: 'Verlauf löschen',
      breachCheck: 'Datenleck-Prüfung',
      timeout: 'Nach Timeout löschen',
      timeoutDuration: 'Timeout-Dauer (Sekunden)',
      clipboard: 'Zwischenablage nach Kopieren löschen',
      language: 'Sprache'
    },
    score: {
      none: 'Keine Bewertung'
    },
    descriptions: {
      none: 'Passwortstärke kann nicht bewertet werden',
      veryWeak: 'Dieses Passwort ist sehr leicht zu erraten oder zu knacken, äußerst unsicher',
      weak: 'Dieses Passwort hat geringe Sicherheit und könnte leicht geknackt werden',
      fair: 'Dieses Passwort bietet grundlegende Sicherheit, könnte aber verbessert werden',
      good: 'Dies ist ein sicheres Passwort mit hoher Knackschwierigkeit',
      veryStrong: 'Dies ist ein sehr sicheres Passwort, das praktisch unknackbar ist'
    },
    length: {
      none: 'Keine',
      tooShort: 'Zu kurz',
      acceptable: 'Akzeptabel',
      good: 'Gut',
      excellent: 'Ausgezeichnet'
    },
    lengthMessage: {
      none: 'Noch kein Passwort eingegeben',
      needMore: 'Mindestens {min} Zeichen benötigt',
      better: '{min} oder mehr Zeichen wären sicherer',
      good: 'Gut! Lange Passwörter sind schwerer zu knacken',
      excellent: 'Ausgezeichnete Länge!'
    },
    complexity: {
      none: 'Keine',
      veryLow: 'Sehr niedrig',
      fair: 'Mittel',
      good: 'Gut',
      excellent: 'Ausgezeichnet'
    },
    issues: {
      tooShort: 'Passwort zu kurz (weniger als 8 Zeichen)',
      noUppercase: 'Enthält keine Großbuchstaben',
      noLowercase: 'Enthält keine Kleinbuchstaben',
      noNumbers: 'Enthält keine Zahlen',
      noSymbols: 'Enthält keine Sonderzeichen',
      hasSequence: 'Enthält häufige Tastatursequenzen (z.B. "qwerty" oder "123456")',
      hasRepeated: 'Enthält wiederholte Zeichen (z.B. "aaa" oder "111")',
      commonPassword: 'Verwendet ein häufiges oder leicht zu erratendes Passwort'
    },
    characters: 'Zeichen',
    tips: {
      title: 'Passwort-Sicherheitstipps',
      length: 'Verwenden Sie Passwörter mit mindestens 12 Zeichen',
      mix: 'Kombinieren Sie Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen',
      avoid: 'Vermeiden Sie häufige Wörter, Phrasen oder persönliche Informationen',
      unique: 'Verwenden Sie nicht dasselbe Passwort auf mehreren Websites',
      manager: 'Erwägen Sie einen Passwort-Manager zur Generierung und Speicherung komplexer Passwörter'
    },
    article: {
      title: "Passwortstärke-Prüfer: Bewerten und verbessern Sie Ihre Online-Sicherheit",
      features: {
        title: "Passwortsicherheit verstehen",
        description: "Dieser <strong>Passwortstärke-Prüfer</strong> ist ein umfassendes <strong>Sicherheitsbewertungstool</strong>, das entwickelt wurde, um Ihre Passwörter auf ihre Wirksamkeit gegen potenzielle Bedrohungen zu analysieren und zu bewerten. Dieser <strong>Passwort-Analysator</strong> untersucht mehrere Faktoren, die die Passwortsicherheit bestimmen, einschließlich Länge, Zeichenvielfalt, zugrunde liegende Muster und Ähnlichkeit mit häufig verwendeten Passwörtern.<br><br>Unser <strong>Passwortsicherheitstester</strong> bietet detailliertes Feedback zu den Stärken und Schwächen Ihres Passworts, mit einer vollständigen Analyse dessen, was es sicher oder anfällig macht. Das Tool generiert eine Sicherheitsbewertung und eine farbcodierte Einstufung und bietet spezifische Verbesserungsvorschläge basierend auf den Eigenschaften Ihres Passworts. Als <strong>Passwort-Schwachstellen-Detektor</strong> hilft es, potenzielle Sicherheitsprobleme zu identifizieren, während es Ihr Passwort niemals speichert oder überträgt, was absolute Privatsphäre während des Bewertungsprozesses gewährleistet.",
        useCases: {
          title: "Praktische Anwendungsfälle für Passwortsicherheitstests",
          items: [
            "<strong>Kontoerstellung</strong>: Verwenden Sie den <strong>Passwortsicherheits-Checker</strong>, wenn Sie neue Online-Konten einrichten, um sicherzustellen, dass die von Ihnen erstellten Anmeldedaten modernen Sicherheitsstandards entsprechen, bevor Sie die Registrierung abschließen",
            "<strong>Sicherheitsaudit</strong>: Führen Sie regelmäßige Überprüfungen und Tests Ihrer bestehenden Passwörter für verschiedene Konten durch, um zu identifizieren und zu priorisieren, welche Passwörter im Rahmen Ihrer persönlichen <strong>Cybersicherheitsbewertung</strong> verstärkt werden müssen",
            "<strong>Passwortrichtlinienentwicklung</strong>: Organisationen können dieses Tool nutzen, um Mitarbeitern effektive Passwortrichtlinien zu demonstrieren und die Einhaltung von Sicherheitsstandards als Teil ihrer <strong>Informationssicherheitsprotokolle</strong> zu testen",
            "<strong>Bildungsdemonstrationen</strong>: Lehrer, Eltern und Sicherheitsexperten können die visuellen Feedback-Möglichkeiten nutzen, um anderen die konkreten Unterschiede zwischen schwachen und starken Passwörtern im Rahmen von <strong>Sicherheitsschulungen</strong> zu zeigen",
            "<strong>Verifizierung nach Datenlecks</strong>: Nach Bekanntwerden von Datenlecks können Sie schnell überprüfen, ob Ihre aktuellen Passwörter den Sicherheitsbest practices entsprechen oder sofort aktualisiert werden müssen, als <strong>präventive Sicherheitsmaßnahme</strong>",
            "<strong>Übergang zu Passwort-Managern</strong>: Beim Wechsel zu einem Passwort-Manager können Sie Ihre bestehenden Passwörter bewerten, um zu bestimmen, welche während Ihres <strong>digitalen Sicherheits-Upgrades</strong> durch stärkere Alternativen ersetzt werden sollten"
          ]
        }
      },
      faq: {
        title: "Häufig gestellte Fragen zur Passwortsicherheit",
        items: [
          {
            question: "Ist mein Passwort sicher, wenn ich dieses Tool verwende?",
            answer: "Ja, Ihr Passwort ist bei der Verwendung unseres Passwortsicherheitsanalysators vollkommen sicher. Das Tool verarbeitet Ihr Passwort vollständig in Ihrem Browser - es überträgt Ihr Passwort niemals über das Internet oder speichert es auf irgendeinem Server. Diese clientseitige Verarbeitung bedeutet, dass Ihr Passwort während der Stärkeüberprüfung niemals Ihr Gerät verlässt. Das Tool verwendet lokale JavaScript-Algorithmen, um Komplexität zu bewerten, Muster zu identifizieren und eine Bewertung zu berechnen, ohne externe Verarbeitung. Diese Null-Übertragungs-Methode der Passwortprüfung bietet maximale Sicherheit, während sie dennoch eine umfassende Passwortstärkebewertung liefert. Sie können dieses Verhalten überprüfen, indem Sie das Tool bei getrennter Internetverbindung verwenden - es wird weiterhin normal funktionieren."
          },
          {
            question: "Was macht ein Passwort wirklich stark?",
            answer: "Ein wirklich starkes Passwort kombiniert mehrere Sicherheitsfaktoren, die unser Passwortsicherheitstester bewertet. Die wichtigsten Elemente sind: ausreichende Länge (mindestens 12-14 Zeichen), durch Zeichenvielfalt erreichte Komplexität (Großbuchstaben, Kleinbuchstaben, Zahlen und Sonderzeichen), Unvorhersehbarkeit (Vermeidung häufiger Wörter, Phrasen oder Muster), Einzigartigkeit (keine Wiederverwendung auf mehreren Websites) und Widerstandsfähigkeit gegen automatisierte Angriffe. Die stärksten Passwörter vermeiden persönliche Informationen, Wörterbuchwörter und vorhersehbare Ersetzungen (wie '3' für 'e'). Unser Passwortbewertungstool empfiehlt die Verwendung zufällig generierter Passwörter oder Passphrasen, die mehrere unzusammenhängende Wörter mit Zahlen und Symbolen kombinieren. Denken Sie daran, dass Länge in der Regel mehr zur Passwortstärke beiträgt als reine Komplexität."
          },
          {
            question: "Warum markiert das Tool mein scheinbar komplexes Passwort als schwach?",
            answer: "Der Passwort-Schwachstellen-Detektor könnte scheinbar komplexe Passwörter aus mehreren subtilen Gründen, die die Sicherheit beeinflussen, als schwach markieren. Häufige Probleme sind: Verwendung vorhersehbarer Muster (wie Tastatursequenzen 'qwerty' oder wiederholte Zeichen), Verwendung bekannter Passwortvarianten aus Datenleck-Datenbanken, Einbeziehung leicht zu erratender persönlicher Informationen oder Befolgung gängiger Ersetzungsmuster, die speziell von Passwort-Knack-Tools angegriffen werden (wie 'pssw0rd'). Moderne Passwortanalysen gehen über einfache Zeichentypen hinaus und bewerten reale Schwachstellen. Fortgeschrittene Passwortsicherheitstests berücksichtigen Faktoren wie Entropie (Zufälligkeit), Wörterbuch-basierte Angriffe und Mustererkennung, die von fortschrittlichen Knack-Tools verwendet werden. Selbst Passwörter mit Sonderzeichen können anfällig sein, wenn sie vorhersehbaren Mustern folgen."
          },
          {
            question: "Wie oft sollte ich meine Passwörter überprüfen und aktualisieren?",
            answer: "Sie sollten Ihre wichtigsten Passwörter mindestens alle 3-6 Monate mit dem Passwortstärke-Bewerter überprüfen und entsprechend aktualisieren. Zusätzlich wird eine sofortige Passwortüberprüfung und -änderung in bestimmten Situationen empfohlen: nach Nachrichten über Datenlecks, die von Ihnen genutzte Dienste betreffen, bei erforderlicher Passwortfreigabe (danach ist ein neues Passwort erforderlich), wenn Sie sich auf öffentlichen oder möglicherweise kompromittierten Geräten angemeldet haben, bei Verdacht auf unbefugten Zugriff auf irgendein Konto oder bei bedeutenden Lebensveränderungen (neuer Job, Umzug). Die Implementierung eines Sicherheitsbewertungsplans für verschiedene Passwortkategorien (Finanzen, E-Mail, soziale Medien) hilft bei der Priorisierung Ihrer sensibelsten Konten. Denken Sie daran, dass selbst das stärkste Passwort nutzlos ist, wenn es in einem Datenleck offengelegt wurde."
          },
          {
            question: "Was ist besser: Komplexes kurzes Passwort oder einfaches langes Passwort?",
            answer: "Wie unser Passwortsicherheits-Checker zeigen wird, sind einfache lange Passwörter in der Regel sicherer als komplexe kurze Passwörter. Die durch Länge gebotene Sicherheit wächst exponentiell und ist effektiver als reine Komplexität. Beispielsweise ist ein 16-stelliges Passwort, das nur Kleinbuchstaben verwendet (wie 'vierwortekleingeschrieben'), mathematisch schwerer durch Brute-Force-Methoden zu knacken als ein 8-stelliges Passwort mit gemischten Zeichentypen (wie 'Ps$w0rd'). Dies liegt daran, dass jedes zusätzliche Zeichen die Gesamtzahl der möglichen Kombinationen, die ein Hacker ausprobieren muss, exponentiell erhöht. Die ideale Methode, wie sie durch umfassende Passwortanalysen gezeigt wird, kombiniert jedoch signifikante Länge (16 oder mehr Zeichen) mit moderater Komplexität (verschiedene Zeichentypen). Für maximale Sicherheit empfiehlt das Passwortbewertungstool die Verwendung zufälliger Passphrasen, die mehrere unzusammenhängende Wörter mit einigen Zahlen oder Symbolen kombinieren."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Verwendung des Passwortstärke-Prüfers",
        steps: [
          "Geben Sie Ihr bestehendes oder vorgeschlagenes <strong>Passwort</strong> in das sichere Eingabefeld ein. Das datenschutzfreundliche Design des Tools stellt sicher, dass Ihr Passwort während der Sicherheitsanalyse niemals übertragen oder gespeichert wird",
          "Überprüfen Sie die auf der farbigen Anzeige angezeigte Gesamt-<strong>Stärkebewertung</strong>, die eine visuelle Indikation Ihrer Passwortsicherheitsstufe von sehr schwach (rot) bis sehr stark (grün) bietet",
          "Überprüfen Sie den Abschnitt <strong>detaillierte Analyse</strong>, der spezifische Aspekte der Passwortstärke beleuchtet, die Ihre Gesamtsicherheitsbewertung beeinflussen, einschließlich Längenbewertung und Zeichenvielfalt-Metriken",
          "Achten Sie auf alle im Warnungsabschnitt hervorgehobenen <strong>erkannten Probleme</strong>, die spezifische Schwachstellen identifizieren, wie gängige Muster, wiederholte Zeichen oder Wörterbuch-basierte Komponenten",
          "Lesen Sie die auf Ihre Passwortschwächen zugeschnittenen <strong>Verbesserungsvorschläge</strong>, die konkrete, umsetzbare Ratschläge zur Stärkung Ihres Passworts gegen verschiedene Angriffsmethoden bieten",
          "Wenden Sie die empfohlenen Änderungen an, um ein stärkeres Passwort zu erstellen, und <strong>testen Sie erneut</strong>, um die Verbesserungen zu bestätigen, und verfeinern Sie weiter, bis Sie eine zufriedenstellende Sicherheitsbewertung erreichen"
        ]
      },
      conclusion: "Der Passwortstärke-Prüfer ist ein unverzichtbares Sicherheitstool in der heutigen digitalen Landschaft mit zunehmenden Datenlecks und Passwortangriffen. Durch die Bereitstellung detaillierter Analysen von Passwortschwachstellen und spezifischer Verbesserungsvorschläge ermöglicht es Benutzern, die Kontrolle über ihre Online-Sicherheit zu übernehmen. Denken Sie daran, dass starke Passwörter Ihre erste Verteidigungslinie gegen unbefugten Zugriff darstellen - sie sollten für jedes wichtige Konto einzigartig, ausreichend komplex und regelmäßig aktualisiert sein. Für maximale Sicherheit sollten Sie dieses Tool in Verbindung mit einem seriösen Passwort-Manager verwenden, der für alle Ihre Konto hochsichere, einzigartige Passwörter generieren und speichern kann. Die Zeit, die Sie jetzt in die Bewertung und Stärkung Ihrer Passwörter investieren, kann Sie in Zukunft vor erheblichen Problemen durch kompromittierte Konten bewahren."
    }
  }