export default {
    name: 'Markdown Editor',
    description: 'Bearbeiten und Vorschau von Markdown-Dokumenten in Echtzeit',
    
    // UI-Texte
    options: {
      mode: 'Modus',
      syntaxHighlighting: 'Syntaxhervorhebung',
      autoSave: 'Automatisches Speichern',
      lineNumbers: 'Zeilennummern',
      spellCheck: 'Rechtschreibprüfung',
      wordWrap: 'Zeilenumbruch'
    },
    modes: {
      split: 'Split-Ansicht',
      edit: 'Nur Bearbeiten',
      preview: 'Nur Vorschau'
    },
    actions: {
      bold: 'Fett',
      italic: 'Kursiv',
      strikethrough: 'Durchgestrichen',
      heading: 'Überschrift',
      link: 'Link',
      image: 'Bild',
      list: 'Liste',
      quote: 'Zitat',
      code: 'Code',
      table: 'Tabelle',
      hr: 'Horizontale Linie',
      preview: 'Vorschau',
      copy: 'Kopieren',
      clear: 'Löschen',
      download: 'Markdown herunterladen',
      downloadHTML: 'HTML herunterladen',
      upload: 'Markdown hochladen'
    },
    messages: {
      copied: 'Markdown-Inhalt wurde in die Zwischenablage kopiert!',
      copyError: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
      clearConfirm: 'Sind Sie sicher, dass Sie den Editorinhalt löschen möchten?',
      templateConfirm: 'Das Anwenden einer Vorlage ersetzt den aktuellen Inhalt. Fortfahren?',
      templateApplied: 'Vorlage "{name}" wurde angewendet',
      saved: 'Dokument gespeichert',
      uploadSuccess: 'Dokument erfolgreich hochgeladen',
      uploadError: 'Fehler beim Hochladen des Dokuments',
      wordCount: '{count} Wörter',
      charCount: '{count} Zeichen'
    },
    placeholder: 'Markdown-Inhalt hier eingeben...',
    placeholders: {
      linkText: 'Link-Text',
      imageAlt: 'Bildbeschreibung'
    },
    templates: {
      title: 'Schnellvorlagen',
      apply: 'Vorlage anwenden',
      confirm: 'Bestätigen',
      simple: {
        name: 'Einfaches Dokument',
        description: 'Enthält Überschriften, Listen, Zitate etc.',
        content: `# Dokumenttitel
  
  ## Einführung
  Dies ist ein einfaches Markdown-Dokumentbeispiel.
  
  ## Funktionen
  - Unterstützt Überschriften und Absätze
  - Unterstützt **fett** und *kursiv*
  - Unterstützt geordnete und ungeordnete Listen
  
  > Dies ist ein Zitatblock, um die Ansichten anderer zu zitieren.
  
  ## Fazit
  Markdown ist eine einfach zu erlernende Auszeichnungssprache.`
      },
      readme: {
        name: 'Projekt-README',
        description: 'Standardstruktur für Projekt-Dokumentation',
        content: `# Projektname
  
  ## Projektbeschreibung
  Kurze Beschreibung der Hauptfunktionen und des Zwecks des Projekts.
  
  ## Funktionen
  - Hauptfunktion 1
  - Hauptfunktion 2
  - Hauptfunktion 3
  
  ## Installationsanleitung
  \`\`\`
  # Abhängigkeiten installieren
  npm install
  
  # Entwicklungsserver starten
  npm run dev
  \`\`\`
  
  ## Verwendungsbeispiel
  \`\`\`
  // Beispielcode
  const example = new Example();
  example.init();
  \`\`\`
  
  ## Dokumentation
  Weitere detaillierte Dokumentation finden Sie im Dokumentationslink.
  
  ## Beitragsrichtlinien
  Beiträge sind willkommen, siehe Beitragsrichtlinien.
  
  ## Lizenz
  Dieses Projekt steht unter der MIT-Lizenz, siehe LICENSE-Datei für Details.`
      },
      resume: {
        name: 'Lebenslauf',
        description: 'Vorlage für einen Lebenslauf',
        content: `# Lebenslauf
  
  ## Persönliche Daten
  - Name: Max Mustermann
  - Telefon: 0178xxxx1234
  - E-Mail: max.mustermann@example.com
  - Position: Frontend-Entwickler
  
  ## Ausbildung
  Universität, Informatik, September 2016 bis Juni 2020
  
  ## Berufserfahrung
  ### Tech GmbH, Frontend-Entwickler, Juli 2020 bis heute
  - Verantwortlich für Frontend-Entwicklung und Wartung der Kernprodukte
  - Entwicklung eines Unternehmensmanagementsystems mit Vue.js zur Verbesserung der Benutzererfahrung
  - Optimierung der Frontend-Performance, Reduzierung der Ladezeit um 30%
  
  ### Tech GmbH, Frontend-Entwickler-Praktikant, Juli 2019 bis Juni 2020
  - Beteiligung am Redesign der Unternehmenswebsite
  - Unterstützung des Teams bei Code-Refactoring und Optimierung
  
  ## Technische Fähigkeiten
  - Frontend-Entwicklung: HTML, CSS, JavaScript, Vue.js, React
  - Backend-Entwicklung: Node.js, Express
  - Andere Tools: Git, Webpack, Docker
  
  ## Projekterfahrung
  ### Unternehmensmanagementsystem
  - Mit Vue.js entwickeltes internes Managementsystem
  - Implementierung von Datenvisualisierung, Berechtigungsmanagement etc.
  - Optimierung der Systemantwortzeit zur Verbesserung der Benutzererfahrung
  
  ## Sprachkenntnisse
  - Englisch (fließend)
  - Japanisch (Grundkenntnisse)`
      },
      meeting: {
        name: 'Besprechungsprotokoll',
        description: 'Vorlage für Besprechungsprotokolle',
        content: `# Besprechungsprotokoll
  
  ## Besprechungsinformationen
  - Thema: Projektfortschritt
  - Datum: 15. Mai 2023
  - Zeit: 14:00 bis 16:00
  - Ort: Firmenkonferenzraum A
  - Leiter: Herr Schmidt
  - Protokollführer: Frau Müller
  
  ## Teilnehmer
  - Herr Schmidt (Produktmanagement)
  - Herr Meier (Entwicklung)
  - Frau Schulze (Design)
  - Herr Bauer (Test)
  
  ## Agenda
  1. Rückblick auf die letzte Woche
  2. Diskussion der aktuellen Woche
  3. Lösung von Projektproblemen
  4. Festlegung der nächsten Schritte
  
  ## Diskussionspunkte
  ### 1. Rückblick
  - Produktanforderungen dokumentiert
  - Design zu 60% abgeschlossen
  - Frontend-Grundgerüst fertiggestellt
  
  ### 2. Aktuelle Woche
  - Design-Team vervollständigt die Entwürfe
  - Entwicklung beginnt mit Kernfunktionen
  - Testteam bereitet Testfälle vor
  
  ### 3. Probleme und Lösungen
  - Problem: Daten-Schnittstellen-Design ungeeignet
  - Lösung: Herr Meier überarbeitet die Schnittstellen bis Mittwoch
  
  ## Nächste Besprechung
  - Datum: 22. Mai 2023
  - Zeit: 14:00 bis 15:00`
      }
    },
    dialogs: {
      clear: {
        title: 'Editor leeren',
        message: 'Sind Sie sicher, dass Sie den Editorinhalt löschen möchten?'
      },
      template: {
        title: 'Vorlage anwenden',
        message: 'Das Anwenden einer Vorlage ersetzt den aktuellen Inhalt. Fortfahren?'
      }
    },
    article: {
      title: "Markdown Editor: Einfaches Erstellen formatierter Dokumente",
      features: {
        title: "Markdown-Editierung verstehen",
        description: "Dieser <strong>Markdown Editor</strong> ist ein vielseitiges <strong>Textformatierungstool</strong>, das Benutzern hilft, mit einfacher Markdown-Syntax strukturierte Dokumente zu erstellen. Dieser leistungsstarke <strong>Dokumenteneditor</strong> kombiniert eine intuitive Schreibumgebung mit einer Echtzeit-Vorschau, was ihn zur idealen Wahl für die Inhaltserstellung auf verschiedenen Plattformen macht.<br><br>Unser <strong>Rich-Text-Editor</strong> unterstützt alle Standard-Markdown-Syntaxelemente, einschließlich Überschriften, Listen, Links, Bildern, Codeblöcken und Tabellen. Der Editor bietet Funktionen wie Syntaxhervorhebung, geteilte Bildschirmansicht und praktische Formatierungskurzbefehle. Egal, ob Sie Dokumente entwerfen, Blog-Beiträge vorbereiten oder strukturierte Notizen machen - dieses <strong>Markdown-Schreibtool</strong> bietet das perfekte Gleichgewicht zwischen Einfachheit und Funktionalität, um Ihren Inhaltserstellungs-Workflow zu vereinfachen.",
        useCases: {
          title: "Praktische Anwendungsfälle für Markdown-Editierung",
          items: [
            "Softwareentwickler erstellen <strong>technische Dokumentation</strong> und README-Dateien für GitHub-Repositories und nutzen Markdowns Codeformatierung und Überschriftenstruktur zur klaren Organisation",
            "Content-Ersteller verfassen <strong>Blog-Beiträge</strong> mit eingebetteten Bildern, Links und formatiertem Text, die einfach in Content-Management-Systeme wie WordPress oder Medium exportiert werden können",
            "Technische Autoren erstellen konsistent formatierte <strong>Produktdokumentation</strong>, verwenden Tabellen für die Datenpräsentation und Überschriften für hierarchische Organisation",
            "Studenten machen <strong>strukturierte Notizen</strong> während Vorlesungen oder Recherchen und nutzen Markdowns einfache Syntax für schnelle Formatierung ohne Unterbrechung des Gedankenflusses",
            "Projektmanager entwickeln <strong>organisierte Wiki-Seiten</strong> mit verlinkten Abschnitten, Aufgabenlisten und formatiertem Inhalt für Team-Wissensdatenbanken",
            "Wissenschaftler verfassen <strong>Forschungsarbeiten</strong> oder Notizen mit Zitaten, eingebetteten Formeln und strukturierten Überschriften vor der endgültigen Formatierung in Fachverlagssoftware"
          ]
        }
      },
      faq: {
        title: "Häufig gestellte Fragen zu Markdown-Editierung",
        items: [
          {
            question: "Was unterscheidet Markdown von traditionellen Textverarbeitungsprogrammen?",
            answer: "Markdown ist eine leichtgewichtige Auszeichnungssprache, die reine Text-Syntax verwendet, um Formatierungen anzugeben, im Gegensatz zu traditionellen Textverarbeitungsprogrammen mit WYSIWYG-Oberflächen (What You See Is What You Get), Formatierungsschaltflächen und Menüs. Die Hauptvorteile von Markdown sind: Einfachheit und Geschwindigkeit für grundlegende Formatierungsaufgaben, hervorragende Plattformübergreifbarkeit, kleinere Dateigrößen, Kompatibilität mit Versionskontrollsystemen, Fokus auf Inhalt statt Stil und konsistente Ausgabe. Traditionelle Textverarbeitungsprogramme bieten komplexere Formatierungsoptionen und direkte visuelle Bearbeitung, erzeugen aber oft proprietäre Dateiformate mit Kompatibilitätsproblemen. Für Inhalte, die in mehrere Formate (HTML, PDF) konvertiert oder auf verschiedenen Plattformen geteilt werden müssen, ist Markdown die ideale Wahl."
          },
          {
            question: "Kann ich Markdown-Dokumente in andere Formate exportieren?",
            answer: "Ja, unser Markdown-Editor ermöglicht den Export von Dokumenten in verschiedene Formate. Sie können Inhalte direkt als Markdown-Datei (.md) für zukünftige Bearbeitungen herunterladen oder als HTML für die Webpublikation. Für andere Formatkonvertierungen wie PDF, DOCX (Word) oder andere Fachformate können Sie den HTML-Export in Kombination mit Drittanbieter-Konvertern oder Tools wie Pandoc verwenden. Markdowns saubere, strukturierte Natur macht es zu einem ausgezeichneten Quellformat für die Konvertierung in nahezu jeden Dokumententyp. Diese Flexibilität ist der Grund, warum Markdown die bevorzugte Wahl für Inhalte ist, die in mehreren Formaten oder auf verschiedenen Plattformen existieren müssen."
          },
          {
            question: "Unterstützt dieser Editor GitHub-flavored Markdown?",
            answer: "Ja, unser Markdown-Editor unterstützt vollständig GitHub-flavored Markdown (GFM), das alle Standard-Markdown-Funktionen sowie mehrere Erweiterungen enthält, die es besonders für technische und Code-Dokumentation geeignet machen. Diese Erweiterungen umfassen Syntaxhervorhebung für Codeblöcke, Tabellen, durchgestrichenen Text, Aufgabenlisten mit Kontrollkästchen und automatische Verlinkung von URLs. Der Editor rendert GFM-spezifische Elemente wie Benutzererwähnungen, Issue-Referenzen und Emoji-Kurzcodes korrekt im Vorschaumodus. Diese Kompatibilität stellt sicher, dass in unserem Editor erstellte Dokumente in GitHub-Repositories, Issues, Pull Requests und Wiki-Seiten korrekt angezeigt werden."
          },
          {
            question: "Kann ich diesen Markdown-Editor für die Zusammenarbeit mit anderen nutzen?",
            answer: "Obwohl unser Markdown-Editor keine integrierten Echtzeit-Kollaborationsfunktionen (wie Google Docs) enthält, können Sie ihn dennoch effektiv in einem Editor-zentrierten Workflow für die Zusammenarbeit mit anderen nutzen. Sie können Markdown-Dokumente exportieren und per E-Mail oder Messaging-Apps teilen oder den Editor mit Versionskontrollsystemen wie Git für eine strukturiertere Zusammenarbeit kombinieren. Für Teams können Sie den Editor in Verbindung mit Plattformen wie GitHub verwenden, wo mehrere Mitwirkende an Markdown-Dateien arbeiten können, einschließlich Versionsverlauf, Pull Requests und Kommentaren. Im Vergleich zu binären Dateiformaten eignet sich Markdowns reine Textnatur besonders gut für die Nachverfolgung von Änderungen und das Zusammenführen von Beiträgen."
          },
          {
            question: "Wie kann ich als Anfänger die Markdown-Syntax lernen?",
            answer: "Selbst für absolute Anfänger ist das Erlernen der Markdown-Syntax unkompliziert. Unser Editor enthält eine Formatierungssymbolleiste, mit der Sie häufige Markdown-Elemente per Klick anwenden können, was Ihnen hilft, die Syntax visuell zu lernen. Wenn Sie diese Schaltflächen verwenden, sehen Sie die entsprechende Markdown-Syntax im Text erscheinen, was einen natürlichen Lernprozess schafft. Darüber hinaus zeigt die Echtzeit-Vorschau, wie Ihr Markdown gerendert wird, und bietet sofortiges Feedback. Für einen strukturierten Lernansatz empfehlen wir, mit grundlegenden Elementen (Überschriften, Fettdruck, Kursivschrift, Links und Listen) zu beginnen, bevor Sie zu fortgeschritteneren Funktionen wie Tabellen und Codeblöcken übergehen. Aufgrund von Markdowns intuitivem Design stellen viele Benutzer fest, dass sie die Grundlagen in weniger als 30 Minuten beherrschen können."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung zur Verwendung des Markdown-Editors",
        steps: [
          "Wählen Sie zunächst Ihren bevorzugten <strong>Bearbeitungsmodus</strong> aus der oberen Symbolleiste - wählen Sie zwischen geteilter Ansicht (Bearbeiten und Vorschau nebeneinander), Nur-Bearbeiten (maximaler Schreibbereich) oder Nur-Vorschau (Anzeige des endgültigen Formats)",
          "Beginnen Sie mit der Eingabe von Inhalten im Editorbereich und verwenden Sie <strong>Markdown-Syntax</strong> zur Formatierung oder nutzen Sie die Formatierungsschaltflächen in der Symbolleiste über dem Editor, um automatisch die entsprechende Syntax einzufügen",
          "Erstellen Sie mit Raute-Symbolen eine Dokumentstruktur, indem Sie <strong>Überschriften</strong> setzen (# für Hauptüberschrift, ## für Unterüberschrift usw.) und Inhalte in logische Abschnitte gliedern",
          "Formatieren Sie Text mit <strong>Inline-Stilen</strong> wie Sternchen für *kursiv* oder **fett**, Backticks für `Code` oder Tilden für ~~durchgestrichenen~~ Text, um wichtige Punkte hervorzuheben",
          "Fügen Sie mit der Syntax [Linktext](URL) <strong>Links und Bilder</strong> ein, Bilder mit , um ansprechende, interaktive Inhalte zu erstellen",
          "Organisieren Sie Informationen mit <strong>Listen und Tabellen</strong> - verwenden Sie Bindestriche oder Zahlen für Listen, Pipe-Symbole und Bindestriche für strukturierte Tabellen mit Zeilen und Spalten",
          "Betrachten Sie Ihre Arbeit in der Echtzeit-Vorschau, um zu sehen, wie das <strong>formatierte Dokument</strong> dargestellt wird, und nehmen Sie vor dem Herunterladen oder Kopieren des endgültigen Inhalts erforderliche Anpassungen vor"
        ]
      },
      conclusion: "Der Markdown-Editor vereinfacht das Erstellen gut formatierter Dokumente und vermeidet die Komplexität traditioneller Textverarbeitungsprogramme und die Lernkurve von HTML. Durch die Bereitstellung einer sauberen, ablenkungsfreien Schreibumgebung mit leistungsstarken Formatierungsfunktionen können Sie sich auf den Inhalt konzentrieren und gleichzeitig eine konsistente, professionelle Darstellung beibehalten. Egal, ob Sie ein Entwickler sind, der Code dokumentiert, ein Autor, der Blog-Beiträge verfasst, oder ein Student, der Notizen organisiert - Markdowns intuitive Syntax in Kombination mit der Echtzeit-Vorschau unseres Editors macht die Dokumentenerstellung schneller und intuitiver. Da immer mehr Plattformen Markdown-Unterstützung einführen, gibt Ihnen die Beherrschung dieses vielseitigen Formats mit unserem Editor eine wertvolle Fähigkeit, die sich über zahlreiche Anwendungen und Workflows hinweg anwenden lässt, und spart Zeit sowie steigert die Produktivität für all Ihre Dokumentationsbedürfnisse."
    },
    defaultContent: `# Willkommen beim Markdown-Editor
  
  Dies ist ein einfacher Markdown-Editor mit Echtzeit-Vorschau und Syntaxhervorhebung.
  
  ## Grundlegende Syntax
  
  ### Überschriften
  Verwenden Sie # für Überschriften, z.B.:
  # Hauptüberschrift
  ## Unterüberschrift
  ### Unterunterüberschrift
  
  ### Hervorhebungen
  **Fett** oder __Fett__
  *Kursiv* oder _Kursiv_
  ~~Durchgestrichen~~
  
  ### Listen
  Ungeordnete Liste:
  - Punkt 1
  - Punkt 2
  - Punkt 3
  
  Geordnete Liste:
  1. Erster Punkt
  2. Zweiter Punkt
  3. Dritter Punkt
  
  ### Links und Bilder
  [Linktext](https://example.com)
  
  
  ### Code
  Inline-Code: \`var beispiel = "hallo";\`
  
  ### Zitate
  > Dies ist ein Zitatabschnitt.
  
  ### Tabellen
  | Kopfzeile 1 | Kopfzeile 2 | Kopfzeile 3 |
  |-------------|-------------|-------------|
  | Zelle 1     | Zelle 2     | Zelle 3     |
  | Zelle 4     | Zelle 5     | Zelle 6     |
  
  ### Horizontale Linie
  ---
  
  Beginnen Sie mit der Bearbeitung! Sie können die Symbolleiste oben verwenden, um schnell verschiedene Markdown-Elemente einzufügen.`
  }