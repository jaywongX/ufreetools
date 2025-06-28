export default {
    name: 'Farbwähler',
    description: 'Wählen, konvertieren und generieren Sie Farbpaletten mit erweiterten Farbwerkzeugen',
    options: {
      colorSpace: 'Farbraum',
      paletteType: 'Palettentyp',
      includeAlpha: 'Transparenz einbeziehen',
      colorNaming: 'Farbbenennung'
    },
    colorSpaces: {
      rgb: 'RGB',
      hex: 'HEX',
      hsl: 'HSL',
      hsv: 'HSV',
      cmyk: 'CMYK',
      lab: 'LAB',
      named: 'Farbnamen'
    },
    palettes: {
      monochromatic: 'Monochrom',
      complementary: 'Komplementär',
      analogous: 'Analog',
      triadic: 'Triadisch',
      tetradic: 'Tetradisch',
      split: 'Gespalten komplementär'
    },
    actions: {
      pickColor: 'Farbe wählen',
      randomColor: 'Zufallsfarbe',
      generatePalette: 'Palette generieren',
      convert: 'Konvertieren',
      copyColor: 'Aktuelle Farbe kopieren',
      copyAll: 'Alle kopieren',
      save: 'Farbe speichern',
      reset: 'Zurücksetzen',
      clear: 'Leeren'
    },
    formats: {
      hex: 'HEX',
      rgb: 'RGB',
      hsl: 'HSL'
    },
    colorSchemes: {
      title: 'Farbschemata',
      complementary: 'Komplementär',
      triadic: 'Triadisch',
      analogous: 'Analog',
      monochromatic: 'Monochrom',
      split: 'Gespalten komplementär',
      double: 'Doppelt komplementär',
      square: 'Quadratisch',
      compound: 'Zusammengesetzt'
    },
    colorAdjust: {
      title: 'Farbanpassung',
      hue: 'Farbton',
      saturation: 'Sättigung',
      lightness: 'Helligkeit',
      alpha: 'Transparenz'
    },
    colorInfo: {
      title: 'Farbinformation',
      name: 'Farbname',
      format: 'Format',
      contrast: 'Kontrast',
      accessibility: {
        title: 'Barrierefreiheit',
        pass: 'Erfüllt WCAG-Standard',
        fail: 'Erfüllt WCAG-Standard nicht',
        normal: 'Normaler Text',
        large: 'Großer Text'
      }
    },
    messages: {
      copied: 'Farbe in Zwischenablage kopiert',
      copyFailed: 'Farbe konnte nicht kopiert werden',
      invalidColor: 'Ungültiges Farbformat',
      contrastWarning: 'Geringer Kontrast',
      saved: 'Farbe gespeichert',
      contrast: 'Kontrast: {ratio}',
      accessibility: {
        AAA: 'Hervorragender Kontrast (AAA)',
        AA: 'Guter Kontrast (AA)',
        fail: 'Unzureichender Kontrast - nicht barrierefrei'
      },
      preview: 'Vorschau',
      colorValue: 'Farbwert',
    },
    history: {
      title: 'Farbverlauf',
      empty: 'Keine Farben im Verlauf',
      clear: 'Verlauf löschen'
    },
    colorPalette: {
      title: 'Farbpalette',
      addToPalette: 'Zur Palette hinzufügen',
      removeFromPalette: 'Aus Palette entfernen',
      exportPalette: 'Palette exportieren',
      importPalette: 'Palette importieren',
      clearPalette: 'Palette leeren'
    },
    article: {
      title: "Erweiterter Farbwähler: Wählen, konvertieren und erstellen Sie perfekte Farbschemata",
      features: {
        title: "Funktionen des Farbwähler-Tools",
        description: "Unser <strong>erweiterter Farbwähler</strong> ist ein umfassendes Online-Tool für präzise Farbauswahl und -bearbeitung. Im Gegensatz zu einfachen Farbwählern bietet dieses <strong>professionelle Farbtool</strong> volle Kontrolle über Farbton, Sättigung, Helligkeit und Transparenz für pixelgenaue Designarbeit.<br><br>Das Tool arbeitet mit mehreren <strong>Farbmodellen</strong> wie RGB, HEX, HSL, HSV und CMYK und konvertiert automatisch zwischen Formaten, während die exakten Farbwerte erhalten bleiben. So entfällt die manuelle Umrechnung oder Nutzung mehrerer Tools. Zudem generiert die <strong>Farbpaletten-Funktion</strong> harmonische Kombinationen nach etablierten Designprinzipien.<br><br>Für Designer und Entwickler vereinfachen Funktionen wie Farben speichern, Paletten erstellen und in verschiedenen Formaten exportieren den Workflow und gewährleisten Farbkonsistenz über Projekte hinweg - was diesen <strong>Web-Farbwähler</strong> zu einer wertvollen Ressource für digitale Kreative macht.",
        useCases: {
          title: "Praktische Anwendungen des Farbwählers",
          items: [
            "<strong>Webdesign & Entwicklung</strong>: Exakte <strong>HEX-Farbcodes</strong> und RGB-Werte für CSS-Stylesheets und Designelemente auswählen. Frontend-Entwickler können so Farbkonsistenz über Frameworks wie React, Vue oder Angular hinweg sicherstellen.",
            
            "<strong>Grafikdesign</strong>: Kohärente <strong>Farbpaletten</strong> für Logos, Marketingmaterialien und Corporate Design erstellen. Designer können Farbvariationen testen, Farbbeziehungen prüfen und Nuancen anpassen, bis das perfekte visuelle Ergebnis erreicht ist.",
            
            "<strong>Digitale Malerei & Illustration</strong>: Benutzerdefinierte <strong>Farbfelder</strong> für digitale Kunstwerke auswählen und speichern. Künstler können individuelle Paletten erstellen, die ihren Stil oder spezifische Anforderungen widerspiegeln und diese in Software wie Photoshop, Illustrator oder Procreate nutzen.",
            
            "<strong>UI/UX-Design</strong>: Barrierefreie <strong>Farbschemata</strong> nach WCAG-Kontrastrichtlinien entwickeln. Interface-Designer können Farbkombinationen auf Barrierefreiheit testen, um Designs zu schaffen, die sowohl ästhetisch als auch für Menschen mit Sehbehinderung nutzbar sind.",
            
            "<strong>Printdesign</strong>: Zwischen RGB- und <strong>CMYK-Werten</strong> konvertieren für präzise Farben in Druckerzeugnissen. Druckexperten können vorhersagen, wie digitale Farben im Druck erscheinen und so Abweichungen vermeiden.",
            
            "<strong>Markenentwicklung</strong>: Konsistente <strong>Markenfarben</strong> über alle digitalen und physischen Touchpoints etablieren. Marketingexperten können exakte Farbspezifikationen dokumentieren, um einheitliche Farbverwendung in allen Materialien sicherzustellen."
          ]
        }
      },
      faq: {
        title: "Häufige Fragen zum Farbwähler",
        items: [
          {
            question: "Was ist der Unterschied zwischen RGB, HEX, HSL und anderen Farbformaten?",
            answer: "Verschiedene <strong>Farbformate</strong> repräsentieren dieselbe Farbe mit unterschiedlichen Systemen:<br><br>• <strong>HEX-Codes</strong> (z.B. #FF5733) sind sechsstellige Hexadezimalwerte, die in Webdesign weit verbreitet sind<br><br>• <strong>RGB-Werte</strong> (z.B. rgb(255, 87, 51)) geben exakte Anteile von Rot, Grün und Blau an (0-255)<br><br>• <strong>HSL</strong> (Farbton, Sättigung, Helligkeit) orientiert sich an der menschlichen Farbwahrnehmung für einfachere Anpassungen<br><br>• <strong>CMYK</strong> verwendet Prozentsätze für Cyan, Magenta, Gelb und Schwarz und ist für den Druck optimiert<br><br>Unser <strong>Farbtool</strong> konvertiert automatisch zwischen diesen Formaten."
          },
          {
            question: "Wie erstelle ich harmonische Farbschemata für meine Projekte?",
            answer: "Unser Tool vereinfacht die Erstellung harmonischer <strong>Farbkombinationen</strong>:<br><br>1. Nutzen Sie die <strong>Paletten-Generierung</strong> für automatische komplementäre, analoge oder monochrome Schemata<br><br>2. Wenden Sie etablierte Farbtheorien an (z.B. Komplementärfarben gegenüber im Farbkreis)<br><br>3. Passen Sie Sättigung und Helligkeit an, um abwechslungsreiche Paletten zu schaffen<br><br>4. Testen Sie <strong>Farbharmonien</strong> in Echtzeit vor der finalen Auswahl<br><br>Die visuelle Vorschau hilft auch Design-Einsteigern, professionelle <strong>Farbschemata</strong> zu erstellen."
          },
          {
            question: "Kann ich meine Farben und Paletten für später speichern?",
            answer: "Ja, unser <strong>Farbwähler</strong> bietet mehrere Speicheroptionen:<br><br>• <strong>Farbverlauf</strong> protokolliert zuletzt verwendete Farben<br>• Erstellen und speichern Sie <strong>benutzerdefinierte Paletten</strong> mit beschreibenden Namen<br>• Exportieren Sie Schemata in Formate für Design-Software (Adobe ASE, GIMP etc.)<br>• Generieren Sie <strong>CSS-Farbvariablen</strong> für Stylesheets<br>• Teilen Sie Palettenlinks für Teamarbeit<br><br>Diese Funktionen sorgen für konsistente <strong>Farbwerte</strong> in Projekten und Teams."
          },
          {
            question: "Wie stelle ich sicher, dass meine Farben barrierefrei sind?",
            answer: "Unser <strong>Farbwähler</strong> enthält Barrierefreiheits-Features:<br><br>• <strong>Kontrastrechner</strong> bewertet Text/Hintergrund nach WCAG-Richtlinien<br>• Visuelle Indikatoren für AA/AAA-Standards<br>• Vorschläge zur <strong>Kontrastverbesserung</strong><br>• Simulation verschiedener Farbsehschwächen<br><br>So schaffen Sie Designs, die sowohl ästhetisch als auch für Menschen mit Sehbehinderung nutzbar sind."
          },
          {
            question: "Wie nutze ich die Ergebnisse in meiner Design-Software?",
            answer: "Unser <strong>Farbtool</strong> integriert sich nahtlos mit gängiger Software:<br><br>1. <strong>Farbcodes</strong> in bevorzugtem Format (HEX, RGB, HSL) kopieren<br>2. Paletten als Adobe Swatch Exchange (.ase) für Creative Cloud exportieren<br>3. CSS-Variablen oder SCSS/LESS-Mixins generieren<br>4. Screenshots von kompletten <strong>Farbschemata</strong> mit Werten erstellen<br><br>Wir empfehlen, Paletten zuerst in unserem Tool zu erstellen, dann im passenden Format zu exportieren - für konsistente <strong>Farbwerte</strong> und weniger manuelle Fehler."
          }
        ]
      },
      guide: {
        title: "Anleitung für den erweiterten Farbwähler",
        step1: "<strong>Grundfarbe wählen</strong>: Wählen Sie per Klick im Farbfeld, über den Farbton-Schieber, durch direkte <strong>Farbcode</strong>-Eingabe oder aus dem Verlauf. Diese Flexibilität ermöglicht präzise Ausgangspunkte oder kreatives Experimentieren.",
        step2: "<strong>Feinabstimmung</strong>: Passen Sie Farbton (0-360°), Sättigung (0-100%), Helligkeit (0-100%) und Transparenz (0-100%) mit präzisen Schiebereglern an. Die Echtzeit-Vorschau zeigt alle Änderungen sofort.",
        step3: "<strong>Farbschema generieren</strong>: Erstellen Sie harmonische <strong>Farbkombinationen</strong> basierend auf Ihrer Grundfarbe - komplementär, analog, triadisch oder monochrom. Die algorithmischen Schemata folgen Farbtheorie-Prinzipien für ästhetische Ergebnisse.",
        step4: "<strong>Formate konvertieren</strong>: Wechseln Sie zwischen <strong>Farbformaten</strong> wie HEX (#FF5733), RGB (rgb(255, 87, 51)) oder HSL (hsl(14, 100%, 60%)), während die exakte Farbe erhalten bleibt. Ideal für verschiedene Anwendungen von Webdesign bis Print.",
        step5: "<strong>Farben speichern & exportieren</strong>: Kopieren Sie <strong>Farbcodes</strong>, fügen Sie sie Paletten hinzu oder exportieren Sie ganze Schemata. Für Webentwickler: Generieren Sie CSS-Variablen für direkte Implementierung in Stylesheets und konsistente <strong>Farbwerte</strong> im gesamten Projekt."
      },
      conclusion: "Der erweiterte Farbwähler ist ein essenzielles Werkzeug für moderne Designer und Entwickler, das die Lücke zwischen kreativer Farbwahl und technischer Umsetzung schließt. Durch präzise Farbkontrolle, automatische Konvertierung und intelligente Palettengenerierung eliminiert es Rätselraten und manuelle Berechnungen. Ob für Markensysteme, Webinterfaces oder digitale Kunst - die Fähigkeit, Farben wissenschaftlich präzise auszuwählen und zu organisieren, während ästhetische Prinzipien gewahrt bleiben, bietet entscheidende Vorteile. Da Design zunehmend visuelle Attraktivität mit technischer Konsistenz verbinden muss, werden Tools wie dieses, die kreative Vision in exakte Spezifikationen übersetzen, für alle kreativen und technischen Disziplinen immer wertvoller."
    }
  }