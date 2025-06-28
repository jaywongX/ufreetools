export default {
    name: 'GIF-Frame-Extraktor',
    description: 'Einzelne Frames aus animierten GIFs extrahieren',
    uploadBtn: 'GIF auswählen',
    resetBtn: 'Zurücksetzen',
    extractBtn: 'Frames extrahieren',
    extractingBtn: 'Extrahiere...',
    downloadAllBtn: 'Alle Frames herunterladen',
    upload: {
      title: 'GIF hochladen',
      dropzone: 'GIF-Datei hier ablegen oder zum Durchsuchen klicken',
      maxSize: 'Maximale Dateigröße: 20MB',
      onlyGif: 'Nur GIF-Dateien unterstützt',
      selectGif: 'Bitte eine GIF-Datei auswählen'
    },
    analysis: {
      title: 'GIF-Informationen',
      dimensions: 'Abmessungen',
      frameCount: 'Frame-Anzahl',
      duration: 'Dauer',
      fps: 'Frames pro Sekunde',
      fileSize: 'Dateigröße',
      loopCount: 'Wiederholungen',
      infinite: 'Unendlich',
      fileName: 'Dateiname',
      size: 'Größe',
      totalFrames: 'Frames insgesamt',
      notExtracted: 'Nicht extrahiert'
    },
    extraction: {
      title: 'Frame-Extraktion',
      selectFrames: 'Frames auswählen',
      allFrames: 'Alle Frames',
      rangeOfFrames: 'Frame-Bereich',
      from: 'Von',
      to: 'Bis',
      specificFrames: 'Bestimmte Frames',
      frameNumbers: 'Frame-Nummern (kommagetrennt)',
      everyNth: 'Jeden N-ten Frame',
      nth: 'Jeden',
      frames: 'Frame',
      selectFirst: 'Ersten Frame',
      selectLast: 'Letzten Frame',
      selectMiddle: 'Mittleren Frame',
      selectKeyFrames: 'Schlüssel-Frames automatisch erkennen'
    },
    output: {
      title: 'Export-Einstellungen',
      format: 'Ausgabeformat',
      png: 'PNG',
      jpeg: 'JPEG',
      webp: 'WebP',
      scaling: 'Skalierung',
      originalSize: 'Originalgröße',
      customSize: 'Benutzerdefinierte Größe',
      width: 'Breite',
      height: 'Höhe',
      quality: 'Qualität',
      qualityValue: 'Qualität: {value}%',
      lowQuality: 'Niedrige Qualität (kleine Datei)',
      highQuality: 'Hohe Qualität (große Datei)',
      naming: 'Dateibenennung',
      pattern: 'Muster',
      filename: 'Originaler Dateiname',
      framenumber: 'Frame-Nummer',
      timestamp: 'Zeitstempel',
      preview: 'Vorschau',
      downloadOptions: 'Download-Optionen',
      separateFiles: 'Einzelne Dateien',
      zipArchive: 'ZIP-Archiv',
      spritesheet: 'Sprite-Sheet',
      gridSize: 'Rastergröße',
      columns: 'Spalten',
      animation: 'Neue Animation'
    },
    frames: {
      title: 'Extrahierte Frames',
      frameInfo: 'Frame {number} von {total}',
      frame: 'Frame',
      delay: 'Verzögerung: {delay}ms',
      downloadFrame: 'Herunterladen',
      copyFrame: 'Kopieren',
      selectAll: 'Alle auswählen',
      unselectAll: 'Auswahl aufheben',
      invertSelection: 'Auswahl umkehren',
      noFrames: 'Keine extrahierten Frames',
      extractFirst: 'Bitte zuerst Frames extrahieren'
    },
    actions: {
      extract: 'Frames extrahieren',
      preview: 'Vorschau',
      downloadSelected: 'Auswahl herunterladen',
      downloadAll: 'Alle herunterladen',
      createSpritesheet: 'Sprite-Sheet erstellen',
      createNewGif: 'Neues GIF erstellen',
      cancel: 'Abbrechen',
      processing: 'Wird verarbeitet...'
    },
    messages: {
      extractionComplete: 'Frame-Extraktion abgeschlossen',
      extracting: 'Frames werden extrahiert...',
      noFramesSelected: 'Keine Frames ausgewählt',
      processingGif: 'GIF wird verarbeitet...',
      invalidGif: 'Ungültige GIF-Datei',
      framesCopied: 'Frames in Zwischenablage kopiert',
      downloadStarted: 'Download gestartet',
      spritesheetCreated: 'Sprite-Sheet erfolgreich erstellt',
      frameDownloaded: 'Frame heruntergeladen',
      preparingFrames: 'Bereite alle Frames vor, bitte warten...',
      allFramesDownloaded: 'Alle Frames heruntergeladen',
      downloadError: 'Fehler beim Herunterladen aller Frames',
      resetComplete: 'Zurückgesetzt',
      fileEmpty: 'Datei ist leer',
    },
    article: {
      title: "GIF-Frame-Extraktor: Animationsframes analysieren und extrahieren",
      features: {
        title: "GIF-Frame-Extraktion verstehen",
        description: "Der <strong>GIF-Frame-Extraktor</strong> ist ein professionelles Tool zum Zerlegen animierter GIFs in einzelne Frames. Dieser leistungsstarke <strong>Animations-Dekompressor</strong> bietet umfassende Methoden zur Analyse und Extraktion jedes statischen Bildes, das ein GIF ausmacht.<br><br>Unser <strong>GIF-Splitter</strong> bietet verschiedene Ausgabeformate (PNG, JPEG, WebP), Qualitätseinstellungen und intuitive Frame-Navigation. Das Tool erkennt automatisch grundlegende <strong>GIF-Metadaten</strong> wie Abmessungen, Frame-Anzahl und Verzögerungszeiten.",
        useCases: {
          title: "Praktische Anwendungsfälle",
          items: [
            "Grafikdesigner extrahieren spezifische Frames zur Bearbeitung",
            "Webentwickler erstellen Sprite-Sheets für Ladeanimationen",
            "Digitale Künstler analysieren Animationstechniken",
            "Content Creator nutzen Keyframes für Social Media",
            "Pädagogen erstellen Lehrmaterial aus Tutorial-GIFs",
            "Forscher untersuchen Bewegungsmuster in Animationen"
          ]
        }
      },
      faq: {
        title: "Häufige Fragen",
        items: [
          {
            question: "Welche maximale GIF-Größe kann verarbeitet werden?",
            answer: "Das Tool unterstützt GIFs bis 20MB. Größere Dateien erfordern spezielle Animationssoftware."
          },
          {
            question: "Welches Ausgabeformat soll ich wählen?",
            answer: "PNG für Qualität/Transparenz, JPEG für kleine Dateien, WebP für gute Komprimierung."
          },
          {
            question: "Wie erstelle ich aus Frames neue Animationen?",
            answer: "Nutzen Sie Animationssoftware wie GIMP oder Online-Tools wie EZGIF zur Neuverarbeitung."
          },
          {
            question: "Warum sehen extrahierte Frames anders aus?",
            answer: "GIFs verwenden Optimierungstechniken wie Transparenz oder lokale Farbtabellen."
          },
          {
            question: "Was sagen Frame-Verzögerungen aus?",
            answer: "Sie zeigen Animationstempo, Betonungen und Timing-Techniken wie 'Easing'."
          }
        ]
      },
      guide: {
        title: "Schritt-für-Schritt-Anleitung",
        steps: [
          "Klicken Sie <strong>GIF auswählen</strong> und wählen Sie eine Datei (max. 20MB)",
          "Prüfen Sie die <strong>GIF-Informationen</strong> zur Bestätigung",
          "Klicken Sie <strong>Frames extrahieren</strong> für die Analyse",
          "Wählen Sie das <strong>Ausgabeformat</strong> und ggf. Qualitätsstufe",
          "Durchsuchen Sie die extrahierten Frames in der Rasteransicht",
          "Laden Sie einzelne Frames über die Download-Icons herunter",
          "Nutzen Sie <strong>Alle herunterladen</strong> für Batch-Processing"
        ]
      },
      conclusion: "Der GIF-Frame-Extraktor bietet präzise Werkzeuge zur Zerlegung animierter GIFs. Ob für Design, Entwicklung oder Forschung - das Tool ermöglicht detaillierte Frame-Analyse und flexible Nachbearbeitung. Die Fähigkeit, Animationen in Einzelbilder zu zerlegen, bleibt eine essentielle Kompetenz für digitale Content-Ersteller."
    }
  }