export default {
  title: "Regex-Tester: Interaktives Pattern-Matching-Tool",
  features: {
    title: "Reguläre Ausdrücke verstehen",
    description: "Der <strong>Regex-Tester</strong> ist ein leistungsstarkes interaktives Tool für Entwickler, Datenanalysten und Textverarbeitungsprofis zum Erstellen, Testen und Debuggen regulärer Ausdrücke (Regex). Reguläre Ausdrücke sind spezielle Zeichenfolgen, die Suchmuster definieren und komplexe Textsuche, -extraktion und -manipulation ermöglichen.<br><br>Unser <strong>Regex-Test-Tool</strong> bietet Echtzeit-Feedback während der Mustererstellung, hebt Treffer im Testtext hervor und zeigt Details zu Erfassungsgruppen und Match-Positionen an. Dieser sofortige Feedback-Loop erleichtert das Verständnis, wie Regex-Muster mit verschiedenen Texteingaben interagieren, und hilft schnell Probleme im Ausdruck zu identifizieren und zu beheben.",
    useCases: {
      title: "Praktische Anwendungen für Regex",
      items: [
        "<strong>Formularvalidierung</strong>: Webentwickler können diesen <strong>Regex-Muster-Tester</strong> nutzen, um Ausdrücke für die Validierung von E-Mail-Adressen, Telefonnummern, Passwörtern und anderen Eingabefeldern zu verfeinern.",
        
        "<strong>Datenextraktion</strong>: Bei der Verarbeitung unstrukturierter Textdaten bieten Regex eine leistungsstarke Möglichkeit, spezifische Informationen zu extrahieren.",
        
        "<strong>Textverarbeitung</strong>: Redakteure und Entwickler können Regex-Muster verwenden, um in mehreren Dokumenten nach bestimmten Textmustern zu suchen und diese zu ersetzen.",
        
        "<strong>Protokolldateianalyse</strong>: Systemadministratoren und DevOps-Ingenieure verwenden häufig Regex, um Protokolldateien zu analysieren.",
        
        "<strong>Suchabfrage-Entwicklung</strong>: Beim Erstellen erweiterter Suchfunktionen können Regex komplexe Textsuche unterstützen.",
        
        "<strong>Lernzwecke</strong>: Personen, die Regex lernen, können mit diesem <strong>interaktiven Regex-Tool</strong> verschiedene Muster ausprobieren und sofort Ergebnisse sehen."
      ]
    }
  },
  faq: {
    title: "Häufige Fragen zu Regex",
    items: [
      {
        question: "Was sind reguläre Ausdrücke und warum sind sie nützlich?",
        answer: "Reguläre Ausdrücke (Regex) sind spezielle Textzeichenfolgen, die Suchmuster definieren. Sie sind im Wesentlichen eine Mini-Programmiersprache, die in vielen Programmiersprachen und Tools eingebettet ist.<br><br>Regex sind nützlich, weil sie ermöglichen:<br><br>• <strong>Nach bestimmten Mustern</strong> im Text zu suchen<br>• <strong>Textformate zu validieren</strong> wie E-Mail-Adressen oder Telefonnummern<br>• <strong>Bestimmte Textteile</strong> aus Dokumenten zu extrahieren<br>• <strong>Text basierend auf Mustern</strong> zu ersetzen oder zu ändern<br>• <strong>Text an bestimmten Mustergrenzen</strong> aufzuteilen"
      },
      {
        question: "Was bedeuten die verschiedenen Regex-Flags (g, i, m, s, u, y)?",
        answer: "Regex-Flags ändern das Matching-Verhalten:<br><br>• <strong>g (global)</strong>: Findet alle Treffer statt beim ersten Match aufzuhören<br>• <strong>i (case-insensitive)</strong>: Unterscheidet nicht zwischen Groß- und Kleinschreibung<br>• <strong>m (multiline)</strong>: Ändert das Verhalten von ^ und $, sodass sie am Anfang/Ende jeder Zeile matchen<br>• <strong>s (dotall)</strong>: Lässt den Punkt (.) auch Zeilenumbrüche matchen<br>• <strong>u (unicode)</strong>: Behandelt das Muster als Unicode-Codepoint-Sequenz<br>• <strong>y (sticky)</strong>: Matcht nur von der lastIndex-Position aus"
      },
      {
        question: "Wie funktionieren Erfassungsgruppen in Regex?",
        answer: "Erfassungsgruppen, definiert durch Klammern (), ermöglichen das Extrahieren bestimmter Textteile.<br><br>Zum Beispiel im Muster <code>([A-Z]\\w+) (\\d{4})</code>:<br><br>• Die erste Gruppe <code>([A-Z]\\w+)</code> erfasst ein Wort, das mit einem Großbuchstaben beginnt<br>• Die zweite Gruppe <code>(\\d{4})</code> erfasst eine 4-stellige Zahl<br><br>Unser <strong>Regex-Validator</strong> zeigt Erfassungsgruppen in den Match-Details an."
      },
      {
        question: "Warum matcht mein Regex nicht wie erwartet?",
        answer: "Häufige Probleme und Lösungen:<br><br>1. <strong>Sonderzeichen</strong>: Mit Backslash (\\ ) maskieren<br>2. <strong>Gierigkeit</strong>: Fügen Sie ? hinzu (*? oder +?) für nicht-gieriges Matching<br>3. <strong>Fehlende Flags</strong>: Prüfen Sie, ob g, i oder m benötigt werden<br>4. <strong>Leerzeichen</strong>: Achten Sie auf unsichtbare Zeichen<br>5. <strong>Anker</strong>: ^ und $ matchen Anfang/Ende des Texts"
      }
    ]
  },
  guide: {
    title: "So verwenden Sie den Regex-Tester: Schritt-für-Schritt-Anleitung",
    step1: "<strong>Regex-Muster eingeben</strong>: Geben Sie Ihren regulären Ausdruck in das Feld 'Regulärer Ausdruck' ein. Sie müssen keine Schrägstriche hinzufügen.",
    step2: "<strong>Passende Flags auswählen</strong>: Wählen Sie Flags, die das Matching-Verhalten ändern. Häufige Optionen sind 'g' (global), 'i' (case-insensitive) und 'm' (multiline).",
    step3: "<strong>Testtext eingeben</strong>: Geben Sie im Bereich 'Testtext' den Text ein, gegen den der Regex getestet werden soll.",
    step4: "<strong>'Testen'-Button klicken</strong>: Nach Eingabe von Muster und Testtext klicken Sie auf 'Testen', um Ergebnisse zu sehen.",
    step5: "<strong>Treffer analysieren</strong>: Der Ergebnisbereich hebt alle Treffer im Testtext hervor und zeigt Details wie exakten Text, Position und erfasste Gruppen.",
    step6: "<strong>Muster verfeinern</strong>: Passen Sie bei Bedarf den regulären Ausdruck an und testen Sie erneut.",
    step7: "<strong>Beispiele erkunden</strong>: Klicken Sie auf 'Beispiele anzeigen', um gängige Regex-Muster für E-Mails, Telefonnummern usw. zu laden."
  },
  conclusion: "Der Regex-Tester vereinfacht das Erstellen und Debuggen regulärer Ausdrücke durch Echtzeit-Feedback und visuelle Hervorhebung. Ob für Formularvalidierung, Datenextraktion oder beim Lernen - dieses interaktive Tool hilft, Regex-Kenntnisse zu verbessern und effektiv einzusetzen."
}
