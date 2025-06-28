export default {
    name: 'Einfaches Zeichenbrett',
    description: 'Online-Zeichenwerkzeug mit freiem Zeichnen, Farbwechsel und Pinselgrößenanpassung',
  
    // Werkzeugleiste
    tools: {
      brush: 'Pinsel',
      eraser: 'Radierer',
      clear: 'Leinwand leeren',
      save: 'Bild speichern',
      undo: 'Rückgängig',
      redo: 'Wiederherstellen',
      apply: 'Anwenden'
    },
  
    // Einstellungen
    settings: {
      brushSize: 'Pinselgröße',
      color: 'Farbe',
      opacity: 'Deckkraft',
      backgroundColor: 'Hintergrundfarbe'
    },
  
    // Farbauswahl
    colors: {
      black: 'Schwarz',
      white: 'Weiß',
      red: 'Rot',
      green: 'Grün',
      blue: 'Blau',
      yellow: 'Gelb',
      orange: 'Orange',
      purple: 'Lila',
      pink: 'Rosa',
      brown: 'Braun',
      gray: 'Grau',
      custom: 'Benutzerdefinierte Farbe'
    },
  
    // Leinwand-Einstellungen
    canvas: {
      width: 'Breite',
      height: 'Höhe',
      resize: 'Leinwandgröße anpassen',
      orientation: 'Ausrichtung',
      portrait: 'Hochformat',
      landscape: 'Querformat',
      square: 'Quadratisch'
    },
  
    // Hinweise und Nachrichten
    messages: {
      saveSuccess: 'Bild erfolgreich gespeichert',
      confirmClear: 'Leinwand wirklich leeren? Alle ungespeicherten Inhalte gehen verloren.',
      unsupportedBrowser: 'Ihr Browser unterstützt Canvas nicht. Bitte verwenden Sie einen modernen Browser.',
      fileNamePrompt: 'Dateinamen eingeben',
      defaultFileName: 'Mein Kunstwerk'
    },
  
    // Tool-Beschreibung
    aboutTitle: 'Über das einfache Zeichenbrett',
    aboutDescription: 'Das einfache Zeichenbrett ist ein intuitives Online-Zeichenwerkzeug, das Ihnen freien kreativen Ausdruck ermöglicht. Ob für Skizzen, einfache Illustrationen oder Ideennotizen - dieses Werkzeug erfüllt Ihre Bedürfnisse.',
  
    featuresTitle: 'Hauptfunktionen',
    feature1: 'Freies Zeichnen mit verschiedenen Farben und Pinselgrößen',
    feature2: 'Radierer-Funktion für einfache Korrekturen',
    feature3: 'Rückgängig- und Wiederherstellen-Funktion',
    feature4: 'Einstellbare Pinseldeckkraft für vielfältige Effekte',
    feature5: 'Leinwand mit einem Klick leeren',
    feature6: 'Speichern der Werke als Bilddatei',
  
    howToUseTitle: 'Bedienungsanleitung',
    howToUseStep1: '1. Wählen Sie Pinselwerkzeug und Farbe',
    howToUseStep2: '2. Passen Sie Pinselgröße und Deckkraft an',
    howToUseStep3: '3. Nutzen Sie den Radierer für Korrekturen',
    howToUseStep4: '4. Nutzen Sie Rückgängig/Wiederherstellen',
    howToUseStep5: '5. Klicken Sie auf Speichern zum Herunterladen',
  
    tipsTitle: 'Anwendungstipps',
    tip1: 'Feine Pinsel für Details, dicke für Flächen',
    tip2: 'Geringere Deckkraft für Aquarelleffekte',
    tip3: 'Nutzen Sie Rückgängig bei Fehlern',
    tip4: 'Erst Umrisse, dann Details zeichnen',
    tip5: 'Experimentieren Sie mit Farbkombinationen',
  
    // Artikelinhalt
    article: {
      title: "Einfaches Zeichenbrett: Digitale Kunst mit Online-Leinwand",
      features: {
        title: "Was ist das einfache Zeichenbrett?",
        description: "Dieses <strong>Online-Zeichenbrett</strong> ist ein vielseitiger <strong>digitaler Zeichenblock</strong>, speziell für das Erstellen von Illustrationen, Skizzen und visuellen Ideen direkt im Browser. Dieses <strong>webbasierte Zeichenwerkzeug</strong> kombiniert intuitive Funktionen mit grundlegenden Zeicheneigenschaften für Benutzer aller Niveaus.<br><br>Unsere <strong>kostenlose Zeichen-App</strong> bietet einstellbare Pinselgrößen, Farben, Deckkraftregler, Radierer und Speicherfunktion. Dieser <strong>digitale Skizzenblock</strong> unterstützt Maus- und Touch-Eingabe für natürliches Zeichnen auf PCs, Tablets und Smartphones. Rückgängig- und Wiederherstellen-Funktionen ermöglichen sorgenfreies Experimentieren.",
        useCases: {
          title: "Praktische Anwendungsfälle",
          items: [
            "<strong>Lehrmaterial</strong>: Lehrer erstellen Diagramme und visuelle Erklärungen als <strong>Lernhilfen</strong>",
            "<strong>Remote-Zusammenarbeit</strong>: Teams skizzieren Ideen und teilen sie als <strong>digitales Whiteboard</strong>",
            "<strong>Storyboarding</strong>: Inhaltsersteller entwerfen visuelle Sequenzen",
            "<strong>Konzeptvisualisierung</strong>: Designer skizzieren Ideen vor der Umsetzung",
            "<strong>Kreative Entspannung</strong>: Nutzer verwenden es zur <strong>künstlerischen Meditation</strong>",
            "<strong>Kinderkunst</strong>: Kinder entwickeln motorische Fähigkeiten mit diesem <strong>kinderfreundlichen Werkzeug</strong>"
          ]
        }
      },
      faq: {
        title: "Häufige Fragen",
        items: [
          {
            question: "Funktioniert das Zeichenbrett auf Tablets?",
            answer: "Ja, das Tool ist für Touch-Geräte optimiert und passt sich verschiedenen Bildschirmgrößen an. Für beste Ergebnisse im Querformat nutzen."
          },
          {
            question: "Wie speichere ich meine Zeichnung?",
            answer: "Klicken Sie 'Bild speichern', geben Sie einen Namen ein. Das Werk wird als PNG mit transparentem Hintergrund (sofern nicht anders eingestellt) gespeichert."
          },
          {
            question: "Unterschied Pinseldeckkraft und -größe?",
            answer: "Größe bestimmt die Strichstärke (Pixel), Deckkraft die Transparenz (100%=deckend, niedriger=transparenter)."
          },
          {
            question: "Kann ich Fehler rückgängig machen?",
            answer: "Ja, mit Rückgängig/Wiederherstellen (bis zu 50 Schritte) können Sie Änderungen korrigieren."
          },
          {
            question: "Gibt es Leinwandgrößenbeschränkungen?",
            answer: "Drei voreingestellte Größen: Querformat (800×600), Hochformat (600×800) und Quadratisch (700×700)."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung",
        steps: [
          "Wählen Sie <strong>Zeichenwerkzeug</strong> (Pinsel/Radierer)",
          "Stellen Sie die <strong>Pinselgröße</strong> ein (1-50 Pixel)",
          "Regulieren Sie die <strong>Deckkraft</strong> (100%=deckend)",
          "Wählen Sie eine <strong>Farbe</strong> aus der Palette",
          "Optional: Ändern Sie die <strong>Hintergrundfarbe</strong>",
          "Beginnen Sie mit dem <strong>Zeichnen</strong> auf der Leinwand",
          "Nutzen Sie <strong>Rückgängig/Wiederherstellen</strong> bei Bedarf"
        ]
      },
      conclusion: "Das einfache Zeichenbrett bietet einen zugänglichen Einstieg in digitale Kunst ohne komplexe Software. Ideal für schnelle Skizzen, visuelle Kommunikation und kreative Exploration. Ein praktisches Werkzeug für Pädagogen, Teams und Kunstbegeisterte."
    }
  };