export default {
    name: 'Bildfarben-Extraktor',
    description: 'Extrahiert Farbpaletten und Hauptfarben aus Bildern',
    input: {
      title: 'Bild hochladen',
      dropzone: 'Bild hierher ziehen und ablegen oder zum Hochladen klicken',
      formats: 'Unterstützte Formate: JPG, PNG, GIF, WebP, SVG',
      browse: 'Dateien durchsuchen',
      selectImage: 'Bild auswählen',
      orText: 'oder',
      pasteUrl: 'Bild-URL einfügen:',
      loadUrl: 'Von URL laden',
      urlPlaceholder: 'https://example.com/image.jpg',
      unnamed: 'Unbenanntes Bild'
    },
    options: {
      title: 'Extraktionsoptionen',
      extractSettings: 'Extraktionseinstellungen',
      colorCount: 'Anzahl der Farben',
      paletteSize: 'Palettengröße',
      paletteMin: 'Minimum (3)',
      paletteMax: 'Maximum (20)',
      colorSimilarity: 'Farbähnlichkeit',
      similiarityToggle: 'Ähnliche Farben zulassen',
      quality: 'Extraktionsqualität',
      colorModel: 'Farbmodell',
      colorSpace: 'Farbraum',
      colorFormat: 'Farbformat',
      sortBy: 'Farben sortieren nach',
      sortByPopularity: 'Nach Häufigkeit',
      sortByLuminance: 'Nach Helligkeit',
      sortByHue: 'Nach Farbton',
      sortBySaturation: 'Nach Sättigung',
      ignoreWhite: 'Weiß ignorieren',
      ignoreBlack: 'Schwarz ignorieren',
      threshold: 'Ähnlichkeitsschwelle'
    },
    colorModels: {
      rgb: 'RGB',
      hsl: 'HSL',
      hsv: 'HSV',
      cmyk: 'CMYK',
      lab: 'LAB'
    },
    colorFormats: {
      hex: 'Hexadezimal (#RRGGBB)',
      rgb: 'RGB (0-255)',
      rgba: 'RGBA mit Transparenz',
      hsl: 'HSL',
      hsla: 'HSLA mit Transparenz',
      cssRgb: 'CSS RGB',
      cssHsl: 'CSS HSL'
    },
    sortOptions: {
      prevalence: 'Häufigkeit',
      luminance: 'Helligkeit',
      hue: 'Farbton',
      saturation: 'Sättigung',
      original: 'Originalreihenfolge'
    },
    colorSpaces: {
      srgb: 'sRGB',
      p3: 'Display P3',
      rec2020: 'Rec. 2020',
      prophoto: 'ProPhoto RGB'
    },
    results: {
      title: 'Extrahierten Farben',
      colorsFound: '{count} Farben extrahiert',
      dominantColor: 'Dominante Farbe',
      mainColor: 'Hauptfarbe',
      complementary: 'Komplementärfarbe',
      palette: 'Farbpalette',
      colorPalette: 'Farbpalette',
      palettePreview: 'Palettenvorschau',
      usage: 'Farbverwendung (%)',
      percentage: 'Anteil: {value}%',
      copyAll: 'Alle Farben kopieren',
      clickToCopy: 'Klicken zum Kopieren: {color}',
      downloading: 'Palette wird heruntergeladen...'
    },
    display: {
      originalImage: 'Originalbild',
      colorPalette: 'Farbpalette',
      uploadFirst: 'Bitte laden Sie zuerst ein Bild hoch',
      clickExtract: 'Klicken Sie auf "Farben extrahieren", um die Palette des Bildes zu erhalten',
    },
    actions: {
      extract: 'Farben extrahieren',
      extracting: 'Wird verarbeitet...',
      download: 'Palette herunterladen',
      copy: 'Kopieren',
      copyValue: 'Wert kopieren',
      reset: 'Zurücksetzen',
      copyPalette: 'Palette kopieren',
      exportJson: 'Als JSON exportieren',
      exportCss: 'Als CSS-Variablen exportieren',
      exportSass: 'Als SASS-Variablen exportieren',
      exportSwatch: 'Als ASE-Farbfeld exportieren'
    },
    palette: {
      title: 'Benannte Paletten',
      vibrant: 'Lebhaft',
      muted: 'Gedämpft',
      dark: 'Dunkel',
      light: 'Hell',
      custom: 'Benutzerdefiniert'
    },
    messages: {
      imageLoaded: 'Bild erfolgreich geladen',
      processingImage: 'Bild wird verarbeitet...',
      extractionComplete: 'Farbextraktion abgeschlossen',
      extractionFailed: 'Farbextraktion fehlgeschlagen: {error}',
      copied: 'In Zwischenablage kopiert',
      copiedColor: 'Kopiert: {color}',
      copiedAll: 'Alle Farben kopiert',
      copyFailed: 'Kopieren fehlgeschlagen',
      resetDone: 'Zurückgesetzt',
      invalidImage: 'Ungültige Bilddatei',
      noImageSelected: 'Kein Bild ausgewählt'
    },
    article: {
      title: "Bildfarben-Extraktor: Farben aus jedem Bild identifizieren und extrahieren",
      features: {
        title: "Farbextraktion aus Bildern und ihre Anwendungen",
        description: "<strong>Bildfarben-Extraktor</strong> ist ein leistungsstarkes Online-Tool zur Analyse von Bildern und Identifizierung ihrer Schlüsselfarben. Dieses nützliche Werkzeug verwendet fortschrittliche <strong>Farbdetektionsalgorithmen</strong>, um Ihre hochgeladenen Bilder zu scannen und die Hauptfarben zu erkennen, die die Gesamtpalette definieren, sowie Akzentfarben, die visuelles Interesse hinzufügen.<br><br>Im Gegensatz zu einfachen Pipettenwerkzeugen gruppiert unser <strong>Paletten-Generator</strong> intelligenterweise ähnliche Farben zusammen und liefert Ihnen eine kohärente und praktische Farbkollektion, anstatt einfach einzelne Pixel zu samplen. Das Tool unterstützt verschiedene Bildformate, darunter JPEG, PNG, GIF und WebP, was es für unterschiedliche Anwendungsfälle geeignet macht.<br><br>Die extrahierten <strong>Farbschemata</strong> werden sofort in mehreren Formaten bereitgestellt, darunter HEX, RGB und HSL, sodass Sie sie problemlos in Ihre Designprojekte, Code oder Dokumente integrieren können, ohne manuell konvertieren zu müssen.",
        useCases: {
          title: "Praktische Anwendungen der Bildfarbextraktion",
          items: [
            "<strong>Webdesign und -entwicklung</strong>: Extrahieren Sie kohärente <strong>Farbpaletten</strong> aus Kundenlogos oder Referenzbildern, um Markenkonsistenz auf Websites zu gewährleisten. Die extrahierten Farben können direkt in CSS-Stylesheets verwendet werden, sodass Designer exakte Farben aus Inspirationsbildern abgleichen oder auf Basis bestehender visueller Assets ein konsistentes Designsystem aufbauen können.",
            
            "<strong>Digitales Marketing</strong>: Erstellen Sie visuell harmonische Social-Media-Kampagnen durch Extraktion und Verwendung konsistenter <strong>Farbschemata</strong> aus Produktfotos oder Markenbildern. Marketingexperten können durch Farbdaten, die aus wichtigen Markenbildern extrahiert wurden, sicherstellen, dass alle Werbematerialien farblich harmonisch bleiben.",
            
            "<strong>Markenidentitätsentwicklung</strong>: Analysieren Sie <strong>Markenfarben</strong> von Wettbewerbern oder erkunden Sie Farboptionen durch Extraktion von Paletten aus Inspirationsbildern. Markenstrategen können mit diesem Tool Farbtrends in der Branche verstehen, Markenrichtlinien verfeinern oder eine einzigartige visuelle Identität etablieren, die sich von Wettbewerbern abhebt.",
            
            "<strong>UI/UX-Design</strong>: Extrahieren Sie präzise <strong>Farbwerte</strong> aus Mockups oder Inspirationsbildern für die Implementierung in Benutzeroberflächen. UI-Designer können sicherstellen, dass Farben perfekt abgestimmt werden, wenn sie von Konzeptkunst zu funktionalen Schnittstellen übergehen, und so die gewünschte visuelle Erfahrung über alle Anwendungsoberflächen hinweg beibehalten.",
            
            "<strong>Print-Design</strong>: Identifizieren Sie exakte <strong>Farbcodes</strong> aus digitalen Referenzen, um eine genaue Wiedergabe in Druckmaterialien sicherzustellen. Grafikdesigner, die an Druckprojekten arbeiten, können präzise Farben extrahieren, um genaue CMYK-Konvertierungen durchzuführen und sicherzustellen, dass physische Materialien mit dem digitalen Design übereinstimmen.",
            
            "<strong>Kunst und Illustration</strong>: Erstellen Sie benutzerdefinierte <strong>digitale Paletten</strong> basierend auf Kunstwerken oder Fotos, die Sie inspirieren. Digitale Künstler können Farbbeziehungen in Meisterwerken oder Referenzfotos analysieren und dann ähnliche Farbharmonien in ihren eigenen Werken anwenden, um eine größere visuelle Wirkung zu erzielen."
          ]
        }
      },
      faq: {
        title: "Häufig gestellte Fragen zur Bildfarbextraktion",
        items: [
          {
            question: "Wie genau ist der Bildfarben-Extraktor bei der Farbidentifikation?",
            answer: "<strong>Bildfarben-Extraktor</strong> bietet durch komplexe Algorithmen, die Pixeldaten analysieren und ähnliche Farben gruppieren, eine hochpräzise Farberkennung. Wichtige Faktoren, die die Genauigkeit beeinflussen, sind:<br><br>• Bildqualität und Auflösung - Hochwertige Bilder ermöglichen genauere Farbextraktion<br>• Komplexität des Farbraums - Bilder mit subtilen Verläufen können leichte Variationen bei der Farbidentifikation aufweisen<br>• Anzahl der extrahierten Farben - Der Algorithmus priorisiert die wichtigsten und dominantesten Farben<br><br>Für professionelle Designarbeiten, die exakte Farbabstimmung erfordern, bietet das Tool präzise <strong>HEX-, RGB- und HSL-Werte</strong>, die direkt in Designsoftware oder Code angewendet werden können. In den meisten Fällen berichten Benutzer, dass die extrahierten <strong>Farbpaletten</strong> die Grundfarben des analysierten Bildes genau repräsentieren."
          },
          {
            question: "Welche Bildformate unterstützt der Farbextraktor?",
            answer: "Unser <strong>Bildfarben-Extraktor</strong> unterstützt alle wichtigen Bildformate, die in Web- und Designbranchen verwendet werden:<br><br>• JPEG/JPG - Für Fotos und komplexe Bilder<br>• PNG - Für Grafiken mit Transparenz<br>• GIF - Unterstützt einfache Animationen und Grafiken<br>• WebP - Modernes Format mit hervorragender Komprimierung<br>• SVG - Vektorgrafikformat (Farben werden aus der gerenderten Ansicht extrahiert)<br><br>Die maximale Dateigröße pro Bild ist auf 5MB begrenzt, um optimale Leistung zu gewährleisten. Für die besten Ergebnisse bei der Extraktion von <strong>Farbschemata</strong> empfehlen wir die Verwendung klarer, hochwertiger Bilder mit deutlichen Farbbereichen. Die <strong>Farbdetektion</strong> funktioniert am besten mit Bildern ohne übermäßiges Rauschen oder Kompressionsartefakte."
          },
          {
            question: "Wie viele Farben extrahiert das Tool aus meinem Bild?",
            answer: "<strong>Bildfarben-Extraktor</strong> bietet flexible Optionen zur Farbextraktion:<br><br>• Standardmäßig extrahiert das Tool 5-10 Hauptfarben, die die <strong>Palette</strong> des Bildes am besten repräsentieren<br>• Sie können die Extraktion anpassen, um nur 1-2 Schlüsselfarben oder über 20 Farben zu extrahieren<br>• Der Algorithmus balanciert intelligent Hauptfarben (die große Flächen abdecken) und Akzentfarben (visuell wichtig, aber weniger verbreitet)<br><br>Für Designzwecke liefert die Verwendung von 5-7 extrahierten Farben normalerweise das beste <strong>Farbschema</strong>, das sowohl das Wesen des Bildes einfängt als auch für die Anwendung in Designprojekten praktikabel ist. Bei detaillierten Analysen oder komplexen Designs können Sie die Anzahl der Farben erhöhen, um eine umfassendere Palette zu erhalten."
          },
          {
            question: "Kann ich die extrahierte Palette speichern oder exportieren?",
            answer: "Ja, <strong>Bildfarben-Extraktor</strong> bietet mehrere Optionen zum Speichern und Exportieren der extrahierten <strong>Palette</strong>:<br><br>• <strong>Einzelne Farbcodes</strong> im HEX-, RGB- oder HSL-Format mit einem Klick kopieren<br>• <strong>Gesamte Palette</strong> in verschiedenen, mit Designsoftware kompatiblen Formaten exportieren<br>• Palette im lokalen Speicher des Browsers <strong>speichern</strong> für zukünftige Referenz<br>• <strong>CSS-Variablen generieren</strong> für den sofortigen Einsatz in der Webentwicklung<br><br>Für Designteams, die an mehreren Projekten arbeiten, ermöglicht die Fähigkeit, <strong>Farbschemata</strong> zu exportieren, Konsistenz und Effizienz. Viele Profis integrieren diese extrahierten Paletten in ihre Designsysteme oder Styleguides, um visuelle Kohärenz über alle Markenberührungspunkte hinweg zu erhalten."
          },
          {
            question: "Wie verwende ich die extrahierten Farben in meiner Designsoftware?",
            answer: "Die von unserem Tool extrahierten <strong>Farbwerte</strong> können auf mehrere Arten einfach in jede Designsoftware übertragen werden:<br><br>1. HEX-Codes (z.B. #FF5733) direkt in die Farbeingabefelder von Adobe Photoshop, Illustrator, Figma, Sketch usw. <strong>kopieren und einfügen</strong><br>2. <strong>RGB-Werte</strong> (z.B. rgb(255, 87, 51)) können in die RGB-Farbwähler von Designanwendungen eingegeben werden<br>3. <strong>HSL-Format</strong> ist besonders nützlich für Anpassungen von Helligkeit oder Sättigung bei Beibehaltung des gleichen Farbtons<br>4. Einige Designprogramme ermöglichen das <strong>Importieren von Paletten</strong> in Formaten, die unser Tool exportieren kann<br><br>Für Webdesigner und -entwickler können die extrahierten <strong>Farbschemata</strong> direkt in CSS implementiert werden, entweder als einzelne Farbeigenschaften oder als umfassender Satz von CSS-Custom-Properties (Variablen) für ein systematischeres Farbmanagement."
          }
        ]
      },
      guide: {
        title: "So verwenden Sie den Bildfarben-Extraktor: Schritt-für-Schritt-Anleitung",
        step1: "<strong>Bild hochladen</strong>: Klicken Sie auf \"Bild auswählen\" oder ziehen Sie ein Bild in den Upload-Bereich. Der <strong>Farbextraktor</strong> akzeptiert gängige Bildformate wie JPEG, PNG, WebP und GIF. Für beste Ergebnisse wählen Sie ein Bild mit klaren, deutlichen Farben und ausreichender Auflösung.",
        step2: "<strong>Extraktionseinstellungen anpassen</strong>: Vor der Verarbeitung können Sie die Parameter für die Farbextraktion anpassen. Legen Sie fest, wie viele Farben Sie extrahieren möchten (normalerweise bieten 5-10 Farben eine ausgewogene <strong>Palette</strong>), und wählen Sie, ob Hauptfarben priorisiert oder Akzentfarben eingeschlossen werden sollen. Diese Einstellungen helfen, die Ergebnisse an Ihre spezifischen Anforderungen anzupassen.",
        step3: "<strong>Bild verarbeiten</strong>: Klicken Sie auf \"Farben extrahieren\", um die Analyse zu starten. Der <strong>Farbdetektionsalgorithmus</strong> scannt Ihr Bild, identifiziert Schlüsselfarben und gruppiert ähnliche Farbtöne. Dieser Prozess dauert normalerweise nur Sekunden, abhängig von Bildgröße und Komplexität.",
        step4: "<strong>Extrahierte Farben überprüfen</strong>: Nach der Verarbeitung zeigt das Tool das extrahierte <strong>Farbschema</strong> mit genauen Farbcodes in Ihrem bevorzugten Format (HEX, RGB oder HSL) an. Jede Farbe wird als Farbfeld mit entsprechendem Code dargestellt, was die Referenz erleichtert. Farben sind von dominant bis akzentuiert angeordnet, was eine klare visuelle Hierarchie bietet.",
        step5: "<strong>Palette speichern und exportieren</strong>: Kopieren Sie einzelne <strong>Farbcodes</strong> durch Klicken oder nutzen Sie die Exportoptionen für die gesamte Palette. Sie können die Palette im Browser für zukünftige Referenz speichern, sie in verschiedenen Designsoftware-kompatiblen Formaten herunterladen oder CSS-Variablen für den sofortigen Einsatz in Webentwicklungsprojekten generieren."
      },
      conclusion: "Der Bildfarben-Extraktor ist ein wertvolles Werkzeug für Designer, Vermarkter, Entwickler und Künstler, die spezifische Farben aus visuellen Referenzen identifizieren, erfassen und implementieren müssen. Indem es die Lücke zwischen visueller Inspiration und praktischer Anwendung überbrückt, vereinfacht dieses Tool den Farbauswahlprozess und gewährleistet Konsistenz in digitalen und Printprojekten. Egal, ob Sie Markenrichtlinien entwickeln, eine Website gestalten oder digitale Kunstwerke erstellen - die Fähigkeit, präzise Farbpaletten aus Bildern zu extrahieren, eliminiert Rätselraten und verbessert die Qualität kreativer Ergebnisse. Da Design weiterhin kohärente Farbsysteme betont, werden Werkzeuge, die genaue Farbidentifikation und -implementierung ermöglichen, zu einer wichtigen Ressource für Profis in verschiedenen kreativen und technischen Bereichen."
    }
  }