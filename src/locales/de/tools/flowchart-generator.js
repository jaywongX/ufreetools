export default {
    name: 'Flussdiagramm-Generator',
    description: 'Erstellen Sie Flussdiagramme und Diagramme mit einfacher textbasierter Syntax',
    title: 'Flussdiagramm- und Diagramm-Generator',
    renderBtn: 'Diagramm rendern',
    resetBtn: 'Zurücksetzen',
    downloadSvgBtn: 'SVG herunterladen',
    copySvgBtn: 'SVG kopieren',
    
    input: {
      title: 'Flussdiagramm-Definition',
      placeholder: 'Mermaid-Syntax-Code eingeben...',
      loadExample: 'Beispiel laden',
      clear: 'Löschen',
      uploadFile: 'Datei hochladen'
    },
    
    output: {
      title: 'Generiertes Flussdiagramm',
      downloadImage: 'Bild herunterladen',
      downloadSVG: 'SVG herunterladen',
      copyImage: 'Bild kopieren',
      copySVG: 'SVG kopieren',
      zoomIn: 'Vergrößern',
      zoomOut: 'Verkleinern',
      fitView: 'Ansicht anpassen',
      resetView: 'Ansicht zurücksetzen',
      preview: 'Vorschau',
      code: 'Mermaid-Code'
    },
    
    options: {
      title: 'Optionen',
      theme: 'Thema',
      orientation: 'Ausrichtung',
      nodeShape: 'Knotenform',
      arrowStyle: 'Pfeilstil',
      lineStyle: 'Linienstil',
      textPosition: 'Textposition',
      fontSize: 'Schriftgröße',
      fontFamily: 'Schriftart',
      showGrid: 'Raster anzeigen',
      autoRender: 'Automatisch rendern'
    },
    
    themes: {
      default: 'Standard',
      simple: 'Einfach',
      forest: 'Wald',
      neutral: 'Neutral',
      dark: 'Dunkel',
      business: 'Business',
      base: 'Basis',
      custom: 'Benutzerdefiniert'
    },
    
    orientations: {
      topToBottom: 'Oben nach unten',
      bottomToTop: 'Unten nach oben',
      leftToRight: 'Links nach rechts',
      rightToLeft: 'Rechts nach links'
    },
    
    nodeShapes: {
      rectangle: 'Rechteck',
      roundedRectangle: 'Abgerundetes Rechteck',
      circle: 'Kreis',
      diamond: 'Raute',
      hexagon: 'Sechseck',
      parallelogram: 'Parallelogramm'
    },
    
    arrowStyles: {
      arrow: 'Pfeil',
      open: 'Offen',
      filled: 'Gefüllt',
      diamond: 'Raute',
      circle: 'Kreis'
    },
    
    lineStyles: {
      solid: 'Durchgezogen',
      dashed: 'Gestrichelt',
      dotted: 'Gepunktet',
      curved: 'Gebogen',
      straight: 'Gerade',
      orthogonal: 'Orthogonal'
    },
    
    syntax: {
      title: 'Syntax-Hilfe',
      node: 'Knoten',
      edge: 'Kante',
      subgraph: 'Teilgraph',
      comment: 'Kommentar',
      styling: 'Stil',
      showMore: 'Mehr anzeigen'
    },
    
    actions: {
      render: 'Flussdiagramm rendern',
      save: 'Diagramm speichern',
      export: 'Exportieren',
      share: 'Teilen'
    },
    
    messages: {
      renderSuccess: 'Flussdiagramm erfolgreich gerendert',
      renderError: 'Fehler beim Rendern: {error}',
      syntaxError: 'Syntaxfehler: {error}',
      saved: 'Diagramm gespeichert',
      copied: 'SVG-Code in Zwischenablage kopiert',
      copyFailed: 'Kopieren fehlgeschlagen, bitte manuell kopieren',
      exported: 'Flussdiagramm exportiert',
      emptyCode: 'Bitte Mermaid-Syntax-Code eingeben',
      rendering: 'Wird gerendert...',
      errorTitle: 'Renderfehler'
    },
    
    examples: {
      flowchart: 'Flussdiagramm',
      classDiagram: 'Klassendiagramm',
      sequenceDiagram: 'Sequenzdiagramm',
      entityRelationship: 'Entity-Relationship-Diagramm',
      gantt: 'Gantt-Diagramm',
      stateDiagram: 'Zustandsdiagramm',
      pieChart: 'Kreisdiagramm',
      userJourney: 'User-Journey-Diagramm'
    },
    
    exampleCodes: {
      flowchart: `graph TD
      A[Start] --> B{Ist korrekt?}
      B -->|Ja| C[Korrektes Ergebnis]
      B -->|Nein| D[Falsches Ergebnis]
      C --> E[Ende]
      D --> E
  `,
      sequenceDiagram: `sequenceDiagram
      participant Client
      participant Server
      Client->>Server: Datenanfrage
      Server-->>Client: Datenantwort
      Client->>Server: Formular absenden
      Server-->>Client: Bestätigung
  `,
      gantt: `gantt
      title Projektzeitplan
      dateFormat  YYYY-MM-DD
      section Planung
      Anforderungserfassung :a1, 2023-01-01, 30d
      Systemdesign :after a1, 20d
      section Entwicklung
      Backend-Entwicklung :2023-02-20, 45d
      Frontend-Entwicklung :2023-02-25, 40d
      section Tests
      Systemtests :2023-04-05, 20d
      Nutzertests :2023-04-20, 15d
      section Live-Schaltung
      Deployment :2023-05-05, 10d
  `,
      stateDiagram: `stateDiagram-v2
      [*] --> Bearbeitung
      Bearbeitung --> Prüfung: Zur Prüfung einreichen
      Prüfung --> Abgelehnt: Ablehnen
      Prüfung --> Veröffentlicht: Genehmigen
      Abgelehnt --> Bearbeitung: Überarbeiten und erneut einreichen
      Veröffentlicht --> [*]
  `,
      pieChart: `pie
      title Website-Traffic-Quellen
      "Suchmaschinen" : 42.7
      "Direkter Zugriff" : 28.9
      "Soziale Medien" : 18.5
      "Andere" : 9.9
  `,
      classDiagram: `classDiagram
      class Tier {
          +String name
          +int alter
          +geräuschMachen() void
      }
      class Hund {
          +String rasse
          +apportieren() void
      }
      class Katze {
          +String farbe
          +klettern() void
      }
      Tier <|-- Hund
      Tier <|-- Katze
  `
    },
    
    article: {
      title: "Flussdiagramm-Generator: Komplexe Prozesse mit einfacher Text-Syntax visualisieren",
      features: {
        title: "Die Leistungsfähigkeit der Text-zu-Diagramm-Technologie",
        description: "Dieser <strong>Flussdiagramm-Generator</strong> ist ein vielseitiges Diagramm-Tool, das einfache textbasierte Syntax in professionelle, visuell ansprechende Diagramme umwandelt. Mit der leistungsstarken <strong>Mermaid-Syntax</strong> können Sie verschiedene Diagrammtypen erstellen, ohne über Design-Kenntnisse oder komplexe Zeichensoftware zu verfügen.<br><br>Die Kernfunktion ist die Umwandlung von Textanweisungen in strukturierte Visualisierungen, mit denen Sie Prozesse, Workflows, Hierarchien und Beziehungen darstellen können. Der textbasierte Ansatz ermöglicht schnelles Entwerfen, Bearbeiten und Versionieren Ihrer Diagramme parallel zu Code oder Dokumentation.",
        useCases: {
          title: "Praktische Anwendungsfälle für Flussdiagramme",
          items: [
            "<strong>Software-Dokumentation</strong>: Erstellen Sie klare Visualisierungen von Code-Architekturen, Datenbank-Schemata und Anwendungs-Workflows direkt aus Textbeschreibungen.",
            "<strong>Projektmanagement</strong>: Generieren Sie umfassende Gantt-Diagramme und Flussdiagramme, um Projektzeitpläne und Abhängigkeiten abzubilden.",
            "<strong>Geschäftsprozessmodellierung</strong>: Dokumentieren Sie Organisations-Workflows in standardisierten visuellen Formaten.",
            "<strong>Bildungsmaterialien</strong>: Erstellen Sie Lehrdiagramme für komplexe Konzepte und Algorithmen.",
            "<strong>Technische Dokumentation</strong>: Verbessern Sie Handbücher mit erklärenden Diagrammen, die direkt aus Text generiert werden.",
            "<strong>Entscheidungsbaum-Visualisierung</strong>: Zeichnen Sie komplexe Entscheidungsprozesse mit verzweigter Logik."
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zu Flussdiagrammen",
        items: [
          {
            question: "Was ist Mermaid-Syntax und wie schwer ist sie zu lernen?",
            answer: "Mermaid-Syntax ist eine einfache, textbasierte Sprache für Diagramme, ähnlich wie Markdown. Die meisten Nutzer beherrschen die Grundlagen in 15-30 Minuten."
          },
          {
            question: "Kann ich Diagramme für andere Anwendungen exportieren?",
            answer: "Ja, der Generator bietet mehrere Exportoptionen, darunter SVG für perfekte Auflösung in jeder Größe."
          },
          {
            question: "Welche Diagrammtypen werden unterstützt?",
            answer: "Flussdiagramme, Sequenzdiagramme, Klassendiagramme, Gantt-Diagramme, Zustandsdiagramme, Kreisdiagramme und User-Journey-Diagramme."
          },
          {
            question: "Wie passe ich das Aussehen meiner Diagramme an?",
            answer: "Wählen Sie aus mehreren Themen, passen Sie Knotenformen, Pfeilstile, Linienstile und Textpositionen an."
          },
          {
            question: "Kann ich verschachtelte Strukturen erstellen?",
            answer: "Ja, mit Teilgraphen können Sie komplexe hierarchische Strukturen darstellen."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung",
        steps: [
          "Wählen Sie den Diagrammtyp",
          "Schreiben oder bearbeiten Sie den Diagrammcode",
          "Vorschau und Validierung",
          "Feinabstimmung und Anpassung",
          "Erweiterte Funktionen nutzen",
          "Diagramm exportieren",
          "Ihre Arbeit speichern"
        ]
      },
      conclusion: "Der Flussdiagramm-Generator verwandelt die traditionell komplexe Aufgabe der Diagrammerstellung in einen zugänglichen, effizienten Prozess für Nutzer aller Kenntnisstufen. Durch die Nutzung textbasierter Diagrammerstellung spart er Zeit und integriert sich nahtlos in moderne Entwicklungs-Workflows. Ob Sie Code-Architekturen dokumentieren, Zeitpläne visualisieren oder komplexe Konzepte erklären - dieser Generator bietet die ideale Balance zwischen Einfachheit und Leistungsfähigkeit."
    }
  }