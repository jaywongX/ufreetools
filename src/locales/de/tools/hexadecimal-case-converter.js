export default {
    name: 'Hexadezimal-Konverter',
    description: 'Konvertieren und formatieren Sie Hexadezimalzeichenfolgen zwischen Groß- und Kleinschreibung mit verschiedenen Präfixen, Trennzeichen und Gruppierungsoptionen',
    
    input: {
      title: 'Hexadezimal-Eingabe',
      placeholder: 'Hexadezimalwert eingeben...'
    },
    
    output: {
      title: 'Konvertierungsergebnis',
      placeholder: 'Das Ergebnis wird hier angezeigt...'
    },
    
    prefix: {
      title: 'Präfix',
      none: 'Keins',
    },
    
    format: {
      title: 'Groß-/Kleinschreibung',
      uppercase: 'Großbuchstaben',
      lowercase: 'Kleinbuchstaben'
    },
    
    separator: {
      title: 'Trennzeichen',
      none: 'Keins',
      space: 'Leerzeichen',
      comma: 'Komma',
      colon: 'Doppelpunkt',
      semicolon: 'Semikolon'
    },
    
    grouping: {
      title: 'Gruppierung (Bytes)',
      none: 'Keine'
    },
    
    actions: {
      copy: 'Kopieren',
      clear: 'Löschen',
      convert: 'Konvertieren'
    },
    
    messages: {
      copied: 'In die Zwischenablage kopiert',
      copyFailed: 'Kopieren fehlgeschlagen',
      invalidHex: 'Ungültiger Hexadezimalwert'
    },
    
    examples: {
      title: 'Beispiele',
      example1: {
        title: '"Hello World" in Hex',
      },
      example2: {
        title: 'ASCII Hello mit 0x-Präfix',
      },
      example3: {
        title: 'DEADBEEF (häufiger Debug-Wert)',
      },
      example4: {
        title: 'MAC-Adressenformat',
      }
    },
    
    tips: {
      title: 'Tipps',
      tip1: 'Hexadezimalwerte verwenden die Zeichen 0-9 und A-F (oder a-f)',
      tip2: 'Verschiedene Präfixe werden in unterschiedlichen Kontexten verwendet: 0x in der Programmierung, # für Farben etc.',
      tip3: 'Gruppierung und Trennzeichen verbessern die Lesbarkeit langer Hexadezimalzeichenfolgen',
      tip4: 'MAC-Adressen verwenden typischerweise Doppelpunkte als Trennzeichen und 1-Byte-Gruppierung'
    },
    
    article: {
      title: 'Hexadezimal-Konverter: Umfassender Leitfaden zur Hexadezimalformatierung',
      
      introduction: {
        title: 'Was ist ein Hexadezimal-Konverter?',
        p1: 'Unser <strong>Hexadezimal-Konverter</strong> ist ein spezielles Tool zur Konvertierung von Hexadezimalzeichenfolgen zwischen Groß- und Kleinschreibung mit zusätzlichen Formatierungsoptionen. Egal, ob Sie <strong>Hexadezimal in Kleinbuchstaben konvertieren</strong> müssen, um Programmierkonventionen einzuhalten, oder Kleinbuchstaben in Großbuchstaben ändern möchten, um die Lesbarkeit zu verbessern - dieses Tool bietet eine umfassende Lösung für alle Ihre Hexadezimal-Konvertierungsbedürfnisse.',
        p2: 'Die hexadezimale Notation (Basis 16) verwendet die Ziffern 0-9 und die Buchstaben A-F (oder a-f) zur Werterepräsentation. Die Wahl zwischen <strong>Hexadezimal in Kleinbuchstaben</strong> oder Großbuchstaben kann die Code-Lesbarkeit, Kompatibilität und in einigen Fällen sogar das Systemverhalten erheblich beeinflussen. Unser Konverter verarbeitet nicht nur einfache Groß-/Kleinschreibungsänderungen, sondern auch komplexe Formatierungen mit Präfixen, Trennzeichen und benutzerdefinierter Gruppierung.',
        p3: 'Die Debatte über <strong>Hexadezimal in Klein- oder Großbuchstaben</strong> ist unter Entwicklern weit verbreitet. Obwohl beide Formate denselben Wert repräsentieren, bevorzugen oder erfordern verschiedene Programmiersprachen, Protokolle und Systeme möglicherweise bestimmte Schreibweisen. Dieses Tool überbrückt diese Lücke, indem es sofortige Konvertierung zwischen Schreibweisen sowie zusätzliche Formatierungsoptionen für verschiedene technische Spezifikationen und Styleguides bietet.'
      },
      
      applications: {
        title: 'Praktische Anwendungen und Nutzungsszenarien',
        scenario1: {
          title: 'Programmierung & Entwicklung',
          content: 'Softwareentwickler müssen häufig <strong>Hexadezimal in alphanumerische Darstellungen konvertieren</strong> oder zwischen Groß-/Kleinschreibung wechseln, um Konsistenz in Codebasen zu gewährleisten. Bei der Arbeit mit Java müssen Entwickler oft <strong>Hexadezimal in Java-Long-Werte konvertieren</strong>, wobei konsistente Schreibweise für die Lesbarkeit entscheidend ist. Unser Tool vereinfacht diesen Prozess unter Einhaltung von Codestyle-Richtlinien.'
        },
        scenario2: {
          title: 'Netzwerke & Kommunikationsprotokolle',
          content: 'Netzwerktechniker können bei der Arbeit mit MAC-Adressen, IPv6 oder anderen hexadezimalen Protokollen Konsistenz in Dokumentation und Implementierung sicherstellen. Viele Protokolle haben spezifische Anforderungen an <strong>Hexadezimal in Kleinbuchstaben</strong> mit bestimmten Trennzeichen und Gruppierungen - unser Tool erfüllt diese Anforderungen mühelos.'
        },
        scenario3: {
          title: 'Farbcode-Formatierung',
          content: 'Webdesigner und Grafiker, die hexadezimale Farbcodes (#RRGGBB) verwenden, müssen häufig <strong>Hexadezimal in bestimmte Schreibweisen konvertieren</strong>, um Design-Tools oder CSS-Spezifikationen zu entsprechen. Einige Designsysteme verlangen Großbuchstaben für Markenkonsistenz, während andere Kleinbuchstaben gemäß HTML/CSS-Konventionen bevorzugen.'
        },
        scenario4: {
          title: 'Datenanalyse & Konvertierung',
          content: 'Datenanalysten müssen häufig Textschreibweisen zwischen verschiedenen Tools konvertieren. Beispielsweise müssen Sie möglicherweise Excel-Zellen mit Hexadezimalwerten <strong>von Klein- in Großbuchstaben konvertieren</strong> oder Linux-Kommandoausgaben <strong>von Klein- in Großbuchstaben umwandeln</strong> für die Weiterverarbeitung.'
        },
        scenario5: {
          title: 'Digitale Forensik & Sicherheit',
          content: 'Sicherheitsexperten, die Hex-Dumps, Binärdateien oder verschlüsselte Daten analysieren, benötigen konsistente Formate für Dokumentation, Vergleich und Analyse. Die Konvertierung zwischen Formaten ermöglicht eine reibungslosere Integration verschiedener Sicherheitstools, von denen viele <strong>Hexadezimal in Kleinbuchstaben konvertieren</strong> für eine einheitliche Verarbeitung verlangen.'
        }
      },
      
      guide: {
        title: 'So verwenden Sie den Hexadezimal-Konverter',
        step1: {
          title: 'Schritt 1: Geben Sie Ihren Hexadezimalwert ein',
          content: 'Geben Sie zunächst einen beliebigen Hexadezimalwert in das Eingabefeld ein. Unser Tool akzeptiert gültige Hexadezimalzeichen (0-9, A-F, a-f) und gebräuchliche Trennzeichen. Egal, ob Sie <strong>Hexadezimal in eine andere Schreibweise konvertieren</strong> oder eine bestehende Zeichenfolge formatieren möchten - beginnen Sie mit der Eingabe Ihres Hexadezimalwerts.'
        },
        step2: {
          title: 'Schritt 2: Wählen Sie die gewünschte Schreibweise',
          content: 'Wählen Sie zwischen Großbuchstaben (ABCDEF) und Kleinbuchstaben (abcdef). Diese Option bestimmt, ob Ihr <strong>Hexadezimal-Konvertierung</strong> Groß- oder Kleinbuchstaben für den alphabetischen Teil der Hexadezimalwerte verwendet.'
        },
        step3: {
          title: 'Schritt 3: Wählen Sie Präfix-Optionen',
          content: 'Wählen Sie bei Bedarf ein Präfix für Ihren Hexadezimalwert. Häufige Optionen sind 0x (für Programmierung), # (für Farben), \\x (für Escape-Sequenzen) oder h (Assembler-Suffix). Dies ist besonders nützlich, wenn Sie <strong>Hexadezimal in eine programmiersprach- oder systemspezifische alphanumerische Formatierung</strong> konvertieren müssen.'
        },
        step4: {
          title: 'Schritt 4: Trennzeichen und Gruppierung festlegen',
          content: 'Wählen Sie Trennzeichen (Leerzeichen, Komma, Doppelpunkt, Semikolon) und Gruppierungsgröße zur Formatierung Ihrer Ausgabe. Beispielsweise verwenden MAC-Adressen typischerweise Doppelpunkte als Trennzeichen und 1-Byte-Gruppierung. Dieser Schritt ist entscheidend, wenn Sie <strong>Hexadezimal in ein langes Format konvertieren</strong> und mit bestimmten Gruppierungen die Lesbarkeit verbessern möchten.'
        },
        step5: {
          title: 'Schritt 5: Kopieren und verwenden Sie Ihr Konvertierungsergebnis',
          content: 'Nach Abschluss der Konvertierung wird Ihr formatierter Hexadezimalwert im Ausgabefeld angezeigt. Klicken Sie auf "Kopieren", um das Ergebnis in die Zwischenablage zu kopieren und in Ihrem Code, Dokumenten oder anderen Anwendungen zu verwenden. Egal, ob Sie <strong>Hexadezimal in Kleinbuchstaben konvertieren</strong> oder eine spezifische Formatierung mit Gruppierung und Präfix erreichen möchten - Sie erhalten nun perfekt formatiertes Hexadezimal.'
        }
      },
      
      faq: {
        title: 'Häufig gestellte Fragen',
        q1: 'Was ist der Unterschied zwischen Hexadezimal in Klein- und Großbuchstaben?',
        a1: 'Der Unterschied zwischen <strong>Hexadezimal in Klein- und Großbuchstaben</strong> liegt in der Darstellung der Buchstaben A-F (die die Werte 10-15 repräsentieren). Funktional stehen "1a2b3c" und "1A2B3C" für denselben Wert. Viele Programmiersprachen und Systeme haben jedoch Style-Konventionen oder Anforderungen für bestimmte Schreibweisen. Beispielsweise verwenden CSS-Farbcodes traditionell Kleinbuchstaben, während einige Assemblersprachen Großbuchstaben für bessere Lesbarkeit bevorzugen.',
        
        q2: 'Wie konvertiere ich Hexadezimal in alphanumerische Zeichen?',
        a2: 'Hexadezimal ist bereits alphanumerisch, da es sowohl Ziffern (0-9) als auch Buchstaben (A-F) verwendet. Wenn Sie <strong>Hexadezimal in Buchstaben jenseits von A-F konvertieren</strong> möchten, beziehen Sie sich wahrscheinlich auf ASCII- oder Unicode-Konvertierung - ein anderer Prozess, der Hexadezimalwerte als Zeichencodes interpretiert. Dieses Tool konzentriert sich auf Groß-/Kleinschreibungs-Konvertierung und Formatierung standardmäßiger Hexadezimaldarstellung, nicht auf Textkodierung/Dekodierung.',
        
        q3: 'Warum sollte ich Hexadezimal in Klein- oder Großbuchstaben konvertieren?',
        a3: 'Es gibt mehrere Gründe, warum Sie <strong>Hexadezimal in Kleinbuchstaben konvertieren</strong> oder Großbuchstaben verwenden möchten:<ul><li>Code-Style-Konformität (viele Sprachen haben Styleguides mit Schreibweisen-Vorgaben)</li><li>Systemanforderungen (einige APIs oder Protokolle benötigen bestimmte Schreibweisen)</li><li>Lesbarkeitspräferenzen (Großbuchstaben sind in Dokumentationen auffälliger)</li><li>Konsistente Datenverarbeitung (beim Vergleichen oder Analysieren von Hexadezimalwerten)</li></ul> Unser Tool macht diese Konvertierungen einfach und effizient.',
  
        q4: 'Wie verwende ich den Hexadezimal-Konverter, um Hexadezimal in Java-Long-Werte umzuwandeln?',
        a4: 'Um <strong>Hexadezimal in Java in Long-Werte zu konvertieren</strong>, stellen Sie zunächst mit unserem Tool sicher, dass Ihre Hexadezimalzeichenfolge korrekt formatiert ist (typischerweise mit 0x-Präfix und Kleinbuchstaben). Kopieren Sie dann das Ergebnis und verwenden Sie in Java <code>Long.parseLong(hexString.substring(2), 16)</code> zum Parsen von 0x-präfixierten Zeichenfolgen oder <code>Long.parseLong(hexString, 16)</code> für präfixlose Zeichenfolgen. Unser Tool hilft sicherzustellen, dass Ihre Hexadezimalzeichenfolge vor der Java-Verarbeitung korrekt formatiert ist.',
  
        q5: 'Kann ich mehrere Hexadezimalwerte gleichzeitig konvertieren?',
        a5: 'Ja, Sie können mehrere Hexadezimalwerte gleichzeitig verarbeiten, indem Sie geeignete Trennzeichen im Eingabefeld verwenden. Wenn Sie <strong>eine Excel-Spalte mit vielen Hexadezimalwerten von Klein- in Großbuchstaben konvertieren</strong> müssen, können Sie die gesamte Spalte kopieren, hier konvertieren und die Ergebnisse wieder einfügen. Das Tool wendet Ihr gewähltes Format (Schreibweise, Präfix, Trennzeichen und Gruppierung) auf alle gültigen Hexadezimalzeichen in der Eingabe an.'
      },
  
      resources: {
        title: 'Zusätzliche Ressourcen',
        resource1: '<a href="https://de.wikipedia.org/wiki/Hexadezimalsystem" target="_blank" rel="noopener noreferrer">Wikipedia: Hexadezimalsystem</a> - Umfassende Hintergrundinformationen zur hexadezimalen Notation.',
        resource2: '<a href="https://www.ietf.org/rfc/rfc5952.txt" target="_blank" rel="noopener noreferrer">IETF RFC 5952</a> - Empfehlungen zur textuellen Darstellung von IPv6-Adressen, einschließlich der Verwendung von Hexadezimal in Kleinbuchstaben.'
      },  
      
      conclusion: {
        title: 'Fazit',
        content: 'Unser <strong>Hexadezimal-Konverter</strong> bietet eine vielseitige Lösung für alle Hexadezimal-Formatierungserfordernisse. Egal, ob Sie <strong>Hexadezimal in Kleinbuchstaben konvertieren</strong>, spezifische Präfixe anwenden, Zeichenfolgen formatieren oder benutzerdefinierte Trennzeichen und Gruppierungen verwenden möchten - unser Tool erfüllt Ihre Anforderungen.'
      }
    }
  };