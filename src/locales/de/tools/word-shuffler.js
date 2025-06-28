export default {
    name: 'Text-Shuffler',
    description: 'Zufälliges Anordnen von Wörtern, Sätzen oder Zeilen in Texten unter Beibehaltung der Formatierung',
    
    // Eingabefelder
    inputLabel: 'Eingabetext',
    inputPlaceholder: 'Text hier eingeben oder einfügen zum Shufflen...',
    outputLabel: 'Ergebnis',
    
    // Shuffle-Modi
    shuffleMode: 'Shuffle-Modus',
    modes: {
      word: 'Wörter',
      sentence: 'Sätze',
      line: 'Zeilen',
      character: 'Zeichen',
      paragraph: 'Absätze'
    },
    
    // Beibehaltungsoptionen
    preserveOptions: 'Beibehaltungsoptionen',
    preserveCapitalization: 'Groß-/Kleinschreibung beibehalten',
    preservePunctuation: 'Interpunktion beibehalten',
    
    // Aktionen
    shuffleButton: 'Shufflen',
    copyButton: 'Ergebnis kopieren',
    clearButton: 'Alles löschen',
    copiedMessage: 'In die Zwischenablage kopiert!',
    
    // Artikelinhalt
    article: {
      title: "Text-Shuffler: Strukturerhaltende Zufallstexte erstellen",
      features: {
        title: "Text-Shuffling und Zufallsgenerierung verstehen",
        description: "Der <strong>Text-Shuffler</strong> ist ein vielseitiges <strong>Textverarbeitungstool</strong>, das Ihnen ermöglicht, Wörter, Sätze oder Zeilen in Texten zufällig neu anzuordnen, während wichtige Formatelemente erhalten bleiben. Dieser <strong>Text-Zufallsgenerator</strong> bietet verschiedene Shuffle-Modi für unterschiedliche Anforderungen - egal ob Sie zufällige Inhalte für Tests erstellen, kreative Schreibanregungen generieren oder Texte mit durchmischten Wortfolgen bei erhaltener Lesbarkeit produzieren möchten.<br><br>Unser <strong>Wort-Shuffler</strong> bietet durch intelligente Optionen zur Beibehaltung von Groß-/Kleinschreibung und Interpunktion präzise Kontrolle und stellt sicher, dass Ihr durchmischter Text die korrekte Formatierung behält. Egal ob Sie mit einfachen Absätzen oder komplexen Dokumenten arbeiten - dieses Tool bietet eine effiziente Methode zur Erstellung zufällig angeordneter Texte, die Schlüsselstrukturelemente bewahren."
      },
      primaryFeatures: [
        {
          title: "Mehrere Shuffle-Modi",
          description: "Wählen Sie zwischen dem Shufflen von Wörtern, Sätzen, Zeilen, Zeichen oder ganzen Absätzen, um die gewünschte Zufälligkeitsebene zu erreichen."
        },
        {
          title: "Formatierungserhalt",
          description: "Beibehaltung von Groß-/Kleinschreibung und Interpunktion auch nach dem Shufflen, sodass der Text natürlich und korrekt formatiert erscheint."
        },
        {
          title: "Anpassbare Trennzeichen",
          description: "Definieren Sie eigene Wort- und Satztrennzeichen, um genau zu steuern, wie der Text vor dem Shufflen aufgeteilt wird."
        },
        {
          title: "Gruppen-Shuffling",
          description: "Shufflen Sie Wörter in Gruppen, um bestimmte semantische Beziehungen beizubehalten, während der Inhalt randomisiert wird."
        }
      ],
      howToUse: {
        title: "So verwenden Sie den Text-Shuffler",
        steps: [
          "Geben Sie Ihren Text in das Eingabefeld auf der linken Seite des Tools ein oder fügen Sie ihn ein.",
          "Wählen Sie Ihren bevorzugten Shuffle-Modus (Wörter, Sätze, Zeilen, Zeichen oder Absätze).",
          "Konfigurieren Sie bei Bedarf erweiterte Optionen wie Beibehaltungseinstellungen und Trennzeichen.",
          "Klicken Sie auf die Schaltfläche \"Shufflen\", um zufällige Inhalte zu generieren.",
          "Betrachten Sie das Ergebnis im Ausgabefeld und verwenden Sie die Kopier- oder Download-Schaltflächen, um Ihren Text zu speichern.",
          "Um mehrere Varianten zu generieren, passen Sie die Wiederholungsanzahl an und shufflen Sie erneut."
        ]
      },
      useCases: {
        title: "Praktische Anwendungen für Text-Shuffling",
        examples: [
          {
            title: "Schreibübungen",
            description: "Generieren Sie Schreibanregungen oder Übungen durch das Shufflen vorhandener Texte, um neue Anordnungen und Inspirationen für kreative Schreibkurse, Poetry-Workshops oder persönliche Projekte zu schaffen."
          },
          {
            title: "Interface-Tests",
            description: "Erstellen Sie zufällige Textinhalte zum Testen von Benutzeroberflächen, um sicherzustellen, dass diese mit variablen Inhalten korrekt umgehen können. Ideal für Webentwickler zur Validierung responsiver Layouts und Inhaltsanpassungen."
          },
          {
            title: "Bildungsaktivitäten",
            description: "Entwickeln Sie Sprachlernaktivitäten, bei denen Schüler durchgemischte Texte in die richtige Reihenfolge bringen müssen, um Verständnis und Grammatikfähigkeiten durch interaktive Übungen zu verbessern."
          },
          {
            title: "Kreative Inspiration",
            description: "Entdecken Sie neue Perspektiven oder Ideen durch das Shufflen vorhandener Inhalte und das Identifizieren interessanter neuer Kombinationen, um Schriftstellern zu helfen, Blockaden zu überwinden und neue Ansätze zu finden."
          },
          {
            title: "Datenanonymisierung",
            description: "Shufflen Sie Wörter in sensiblen Texten, um realistische aber anonymisierte Inhalte für Präsentationen, Vorträge oder Testumgebungen zu erstellen, in denen echte Daten nicht verwendet werden können."
          },
          {
            title: "Rede- und Präsentationsübungen",
            description: "Erstellen Sie Varianten von Redeinhalten, um mit unterschiedlichen Wortanordnungen zu üben, die Anpassungsfähigkeit zu verbessern und die Abhängigkeit von auswendig gelernten Sequenzen zu verringern."
          }
        ]
      },
      faqs: {
        title: "Häufige Fragen zum Text-Shuffler",
        questions: [
          {
            question: "Beeinflusst das Shufflen meine Textformatierung?",
            answer: "Bei aktivierten Beibehaltungsoptionen bewahrt der Text-Shuffler Groß-/Kleinschreibung und Interpunktion im Text, sodass das Ergebnis die korrekte Formatierung behält. Das bedeutet, dass großgeschriebene Satzanfänge und Satzzeichen am Ende erhalten bleiben, selbst wenn die Wörter selbst neu angeordnet werden."
          },
          {
            question: "Kann ich nur bestimmte Teile meines Texts shufflen?",
            answer: "Das Tool arbeitet mit dem gesamten Eingabetext, aber Sie können Teile separat verarbeiten und sie dann mit unverändertem Inhalt kombinieren, um teilweises Shufflen zu erreichen. Für feinere Kontrolle verwenden Sie den Absatzmodus, um nur bestimmte Abschnitte zu shufflen."
          },
          {
            question: "Ist das Shufflen wirklich zufällig?",
            answer: "Ja, das Tool verwendet Standard-Zufallsalgorithmen (Fisher-Yates-Shuffle), um bei jedem Shufflen eine echte zufällige Neuordnung der Textelemente zu gewährleisten. Jedes Mal, wenn Sie auf die Shuffle-Schaltfläche klicken, erhalten Sie eine andere Textanordnung."
          },
          {
            question: "Was ist der Unterschied zwischen den Shuffle-Modi?",
            answer: "Im Wortmodus werden einzelne Wörter unter Beibehaltung der Interpunktion (falls gewählt) shufflen. Der Satzmodus behält jeden Satz ganz bei, randomisiert aber ihre Reihenfolge. Der Zeilenmodus behält jede Zeile bei, mischt aber ihre Reihenfolge im Dokument. Der Zeichenmodus randomisiert einzelne Zeichen für eine vollständige Durchmischung. Der Absatzmodus behält Absätze ganz bei, ordnet sie aber neu."
          },
          {
            question: "Kann ich anpassen, welche Zeichen als Wort- oder Satztrennzeichen gelten?",
            answer: "Ja, im erweiterten Einstellungsbereich können Sie benutzerdefinierte Trennzeichen für Wörter und Sätze definieren. Dies ermöglicht eine präzise Kontrolle über die Textaufteilung vor dem Shufflen, besonders nützlich für Fachinhalte oder Sprachen mit besonderer Interpunktion."
          },
          {
            question: "Wie entferne ich doppelte Wörter aus dem shufflen Text?",
            answer: "Aktivieren Sie die Option \"Doppelte Wörter entfernen\" im erweiterten Einstellungsbereich. Dadurch wird sichergestellt, dass jedes Wort in der Ausgabe nur einmal vorkommt - besonders nützlich für die Erstellung von Wortlisten oder zur Beseitigung von Redundanzen im shufflen Text."
          },
          {
            question: "Gibt es eine Begrenzung für die Textmenge, die ich shufflen kann?",
            answer: "Das Tool kann große Textmengen verarbeiten, aber sehr umfangreiche Dokumente (über 100.000 Zeichen) können Leistungseinbußen verursachen. Für sehr große Texte empfiehlt es sich, diese in kleinere Abschnitte aufzuteilen."
          }
        ]
      },
      advancedTips: {
        title: "Fortgeschrittene Tipps zur Beherrschung des Text-Shufflings",
        description: "Nutzen Sie diese Experten-Tipps und Einblicke, um das Beste aus dem Text-Shuffler herauszuholen und genau die Art von Zufallstexten zu erstellen, die Sie für bestimmte Zwecke benötigen.",
        tips: [
          "Verwenden Sie die \"Shuffle-Gruppengröße\"-Einstellung, um kleine Phrasen zusammenzuhalten, während ihre Reihenfolge randomisiert wird - ideal zum Bewahren von Adjektiv-Nomen-Paaren.",
          "Für surrealistische oder experimentelle Texte können Sie den Text zweimal mit unterschiedlichen Modi durch das Tool laufen lassen, indem Sie Zeichen- und Wortshuffling kombinieren.",
          "Passen Sie die Worttrennzeichen an, um bestimmte Satzzeichen ein- oder auszuschließen und vielfältigere Wortanordnungsmuster zu erzeugen.",
          "Bei der Bearbeitung von Gedichten oder Versen verwenden Sie den Zeilenmodus, um einzelne Zeilen zu bewahren, während Sie verschiedene Strophenanordnungen erkunden.",
          "Für Testzwecke nutzen Sie die Wiederholungsfunktion, um mehrere Varianten auf einmal zu generieren, statt mehrmals zu shufflen.",
          "Behalten Sie die Groß-/Kleinschreibung bei, aber nicht die Interpunktion, um fließende Bewusstseinsstrom-Texte zu erstellen, die dennoch Eigennamen und Satzanfänge bewahren.",
          "Verwenden Sie den Zeichenmodus auf Phrasen, um einzigartige Codes oder Passwörter aus sinnvollem Text zu erstellen.",
          "Importieren Sie Texte aus mehreren Quellen, shufflen Sie sie separat und kombinieren Sie dann die Ergebnisse für interessante Kreuzungen von Ideen und Stilen."
        ]
      }
    },
    
    // Weitere UI-Elemente
    tagline: 'Das weltweit fortschrittlichste Text-Zufallsgenerierungstool',
    wordCount: 'Wörter',
    importButton: 'Datei importieren',
    clearInputButton: 'Eingabe löschen',
    clearOutputButton: 'Ausgabe löschen',
    downloadButton: 'Herunterladen',
    useExampleButton: 'Beispiel verwenden',
    advancedOptions: 'Erweiterte Optionen',
    delimiterOptions: 'Trennzeichen-Optionen',
    wordDelimiters: 'Worttrennzeichen',
    wordDelimitersHint: 'Zeichen zur Worttrennung',
    sentenceDelimiters: 'Satzzeichen',
    sentenceDelimitersHint: 'Zeichen zur Satzbeendigung',
    additionalOptions: 'Zusätzliche Optionen',
    repeatCount: 'Wiederholungen',
    repeatCountHint: 'Mehrere Shuffle-Versionen generieren',
    shuffleGroup: 'Shuffle-Gruppengröße',
    shuffleGroupHint: 'Wörter in Gruppen dieser Größe shufflen',
    removeRepeatedWords: 'Doppelte Wörter entfernen',
    preserveSpacing: 'Abstände beibehalten',
    examplesTitle: 'Beispiele',
    useThisExample: 'Dieses Beispiel verwenden',
    helpTitle: 'Hilfe & Informationen',
    whatIsTitle: 'Was ist ein Text-Shuffler?',
    whatIsDescription: 'Ein Text-Shuffler ist ein Tool, das die Reihenfolge von Wörtern, Sätzen, Zeilen, Zeichen oder Absätzen in Texten zufällig anordnen kann. Es verwendet komplexe Algorithmen, um echte Zufallsergebnisse zu gewährleisten, während Formatierungsoptionen wie Groß-/Kleinschreibung und Interpunktion nach Ihren Wünschen beibehalten werden.',
    howToUseTitle: 'So verwenden Sie dieses Tool',
    tipsTitle: 'Beste Anwendungstipps',
    howToUseSteps: [
      'Geben Sie Ihren Text in das Eingabefeld auf der linken Seite ein oder fügen Sie ihn ein.',
      'Wählen Sie unten den gewünschten Shuffle-Modus und die Optionen aus.',
      'Klicken Sie auf die Schaltfläche "Shufflen", um zufälligen Text zu generieren.',
      'Das Ergebnis wird im Ausgabefeld auf der rechten Seite angezeigt.',
      'Verwenden Sie die Kopier- oder Download-Schaltflächen, um Ihre Ergebnisse zu speichern.'
    ],
    tips: [
      'Für kreative Schreibübungen probieren Sie den Wortmodus mit Beibehaltung der Groß-/Kleinschreibung aber ohne Interpunktion.',
      'Für Layout-Tests verwenden Sie den Satzmodus mit allen Beibehaltungsoptionen, um lesbaren aber zufälligen Text zu erhalten.',
      'Mit dem Zeichenmodus können Sie aus Texteingaben sichere Passwörter oder Codes erstellen.',
      'Die Gruppen-Shuffle-Funktion ermöglicht es, zusammengehörige Wörter beisammenzuhalten, während der Gesamttext randomisiert wird.',
      'Benötigen Sie mehrere Varianten? Stellen Sie die Wiederholungsanzahl ein, um mehrere Shuffle-Versionen auf einmal zu generieren.'
    ],
    examples: {
      basic: {
        title: 'Einfaches Wortshuffling',
        description: 'Einfache Randomisierung von Wörtern unter Beibehaltung von Interpunktion und Groß-/Kleinschreibung',
        input: 'Der schnelle braune Fuchs springt über den faulen Hund. Alle fünf Boxerhexen springen schnell.',
        output: 'Braune der schnelle Fuchs faulen den über springt Hund. Springen Boxerhexen fünf alle schnell.'
      },
      sentence: {
        title: 'Satzshuffling',
        description: 'Zufällige Anordnung vollständiger Sätze',
        input: 'Erster Satz hier. Das ist der zweite Satz. Hier folgt Satz drei. Schließlich haben wir den vierten Satz.',
        output: 'Hier folgt Satz drei. Erster Satz hier. Schließlich haben wir den vierten Satz. Das ist der zweite Satz.'
      },
      creative: {
        title: 'Kreative Neuanordnung',
        description: 'Generierung neuer kreativer Texte durch Shufflen von Wörtern ohne Formatierungseinschränkungen',
        input: 'Poesie ist die rhythmische Schaffung von Schönheit in Worten. Sie ist die Offenbarung eines Gefühls, das der Dichter für innerlich und persönlich hält, das der Leser aber als sein eigenes erkennt.',
        output: 'Schönheit rhythmische ist die Schaffung von in Worten Poesie. Erkennt Leser der aber als sein eigenes das Gefühl eines Offenbarung die ist, das Dichter der für hält innerlich und persönlich.'
      }
    },
    stepLabel: 'Schritt',
    emptyInputMessage: 'Bitte geben Sie Text zum Shufflen ein',
    errorMessage: 'Fehler beim Shufflen - bitte versuchen Sie einen anderen Shuffle-Modus oder andere Optionen',
    downloadFileName: 'shuffled-text.txt',
    errorMessages: {
      shuffleError: 'Shuffle-Fehler:',
      sentenceError: 'Satzshuffle-Fehler:',
      copyError: 'Textkopierfehler:'
    }
  }