export default {
    name: 'Farbpaletten-Generator',
    description: 'Erstellt harmonische Farbschemata basierend auf Farbtheorien, um Designern die schnelle Erstellung abgestimmter Farbpaletten zu ermöglichen',
    baseColor: {
      title: 'Grundfarbe',
      picker: 'Farbwähler',
      hex: 'Hexadezimal',
      rgb: 'RGB',
      hsl: 'HSL',
      random: 'Zufällige Farbe',
      recent: 'Zuletzt verwendete Farben',
      hint: 'Klicken Sie auf Farbfeld oder Hex-Farbwert eingeben',
    },
    schemeTypes: {
      title: 'Farbtheorien',
      monochromatic: 'Monochrom',
      analogous: 'Analoge Farben',
      complementary: 'Komplementärfarben',
      splitComplementary: 'Gespalten komplementär',
      triadic: 'Triadisch',
      tetradic: 'Tetradisch',
      square: 'Quadratisch',
      compound: 'Zusammengesetzt',
      shades: 'Farbabstufungen',
      custom: 'Benutzerdefiniert',
    },
    options: {
      colorCount: 'Farbanzahl',
      saturationRange: 'Sättigungsbereich',
      brightnessRange: 'Helligkeitsbereich',
      includeBaseColor: 'Grundfarbe einbeziehen',
      lockBaseColor: 'Grundfarbe sperren',
      colorSpace: 'Farbraum',
      sortBy: 'Sortieren nach',
      colorBlindSafe: 'Farbenblind-sicher',
      contrastRatio: 'Mindestkontrast'
    },
    colorSpaces: {
      rgb: 'RGB',
      hsl: 'HSL',
      lab: 'LAB',
      hsv: 'HSV',
      cmyk: 'CMYK'
    },
    sortOptions: {
      hue: 'Farbton',
      saturation: 'Sättigung',
      brightness: 'Helligkeit',
      harmony: 'Harmoniegrad',
      none: 'Keine'
    },
    palettes: {
      title: 'Generierte Farbpaletten',
      save: 'Farbpalette speichern',
      copy: 'Farbpalette kopieren',
      export: 'Als CSS-Variablen exportieren',
      apply: 'Auf Vorschau anwenden'
    },
    exportFormats: {
      title: 'Exportformate',
      css: 'CSS-Variablen',
      scss: 'SCSS-Variablen',
      less: 'LESS-Variablen',
      json: 'JSON',
      svg: 'SVG-Farbpalette',
      ase: 'Adobe ASE',
      tailwind: 'Tailwind-Konfiguration',
      pdf: 'PDF'
    },
    preview: {
      title: 'Vorschau',
      website: 'Website',
      mobilApp: 'Mobile App',
      dashboard: 'Dashboard',
      card: 'Karte',
      poster: 'Poster',
      custom: 'Benutzerdefiniert',
      mainButton: 'Primärer Button',
      secondButton: 'Sekundärer Button',
      tag: 'Tag'
    },
    savedPalettes: {
      title: 'Gespeicherte Farbpaletten',
      load: 'Laden',
      delete: 'Löschen',
      rename: 'Umbenennen',
      noSavedPalettes: 'Keine gespeicherten Farbpaletten',
      saved: 'Farbpalette gespeichert',
      schemeNameEmpty: 'Farbpalettenname fehlt',
    },
    actions: {
      generate: 'Farbschema generieren',
      regenerate: 'Neu generieren',
      reset: 'Zurücksetzen',
      lockColor: 'Farbe sperren',
      unlockColor: 'Farbe entsperren',
      save: 'Farbpalette speichern',
    },
    messages: {
      paletteSaved: 'Farbpalette erfolgreich gespeichert',
      paletteDeleted: 'Farbpalette gelöscht',
      copied: 'In Zwischenablage kopiert',
      exported: 'Export erfolgreich',
      adjustmentParam: 'Anpassungsparameter',
      schemeName: 'Schema-Name',
      copyAllColors: 'Alle Farben kopiert',
    },
    article: {
      title: "Farbpaletten-Generator: Erstellen Sie harmonische Farbkombinationen für visuell beeindruckende Designs",
      overview: {
        title: "Was ist ein Farbpaletten-Generator?",
        content: "Der <strong>Farbpaletten-Generator</strong> ist ein professionelles Designtool, das harmonische Farbkombinationen basierend auf etablierten Farbtheorien erstellt. Unser Generator vereinfacht den komplexen Prozess der Auswahl komplementärer Farben, indem er automatisch aus einer Grundfarbe ausgewogene Paletten generiert.<br><br>Das Tool nutzt verschiedene Farbharmonie-Regeln wie monochromatisch, analog, komplementär und triadisch, um visuell ansprechende Farbkombinationen zu erstellen. Es berücksichtigt Farbpsychologie, Barrierefreiheit und Design-Best-Practices, um sicherzustellen, dass Ihre Palette nicht nur ästhetisch ist, sondern auch in verschiedenen Anwendungen effektiv funktioniert.<br><br>Egal ob Sie Webdesign, Branding, UI/UX-Projekte oder visuelle Kreationen erstellen - unser Farbpaletten-Generator nimmt das Rätselraten heraus und bietet wissenschaftlich fundierte Farbbeziehungen, die visuelle Kommunikation und Benutzererfahrung verbessern."
      },
      useCases: {
        title: "Praktische Anwendungsfälle für den Farbpaletten-Generator",
        items: [
          {
            title: "Webdesign & Entwicklung",
            description: "Erstellen Sie konsistente, barrierefreie und visuell ansprechende Farbschemata für Websites, die Markenkonsistenz über alle Seiten hinweg gewährleisten und gleichzeitig WCAG-Kontrastanforderungen erfüllen, um Lesbarkeit und Benutzererfahrung zu verbessern."
          },
          {
            title: "Markenidentitätsentwicklung",
            description: "Etablieren Sie starke Markenfarbkombinationen, die bestimmte Emotionen hervorrufen und Ihre Marke von Wettbewerbern abheben, während sie gleichzeitig Vielseitigkeit über verschiedene Marketingmaterialien und Plattformen hinweg gewährleisten."
          },
          {
            title: "UI/UX-Designprojekte",
            description: "Generieren Sie funktionale Farbsysteme für Benutzeroberflächen, die Aufmerksamkeit lenken, visuelle Hierarchien schaffen und Konsistenz in mobilen Apps, Webanwendungen und Softwareprodukten bewahren."
          },
          {
            title: "Marketing- und Werbematerialien",
            description: "Entwickeln Sie auffällige Farbschemata für Anzeigen, Social-Media-Grafiken, E-Mail-Kampagnen und andere Marketing-Assets, die Marketing-Psychologie-Prinzipien und Kampagnenziele entsprechen."
          },
          {
            title: "Präsentations- und Dokumentendesign",
            description: "Erstellen Sie professionelle Präsentationen und Dokumente mit harmonischen Farbkombinationen, die Informationshierarchie, Lesbarkeit und visuelle Attraktivität verbessern, um das Publikumsengagement zu steigern."
          },
          {
            title: "Printdesign-Projekte",
            description: "Generieren Sie druckgerechte Paletten für Broschüren, Visitenkarten, Verpackungen und andere physische Materialien unter Berücksichtigung von CMYK-Farbfaktoren und Druckproduktionsanforderungen."
          },
          {
            title: "Innen- und Umgebungsdesign",
            description: "Planen Sie koordinierte Farbschemata für physische Räume wie Büros, Einzelhandelsumgebungen oder Wohnräume, um die gewünschte Atmosphäre und psychologische Wirkung zu erzeugen."
          },
          {
            title: "Lehrmaterialien und Infografiken",
            description: "Entwickeln Sie barrierefreie Farbkombinationen für Lernressourcen, Datenvisualisierungen und Infografiken, die das Informationsverständnis verbessern und gleichzeitig inklusiv für farbenblinde Nutzer sind."
          }
        ]
      },
      guide: {
        title: "Wie Sie den Farbpaletten-Generator verwenden",
        intro: "Mit unserem intuitiven Tool ist das Erstellen perfekter Farbschemata einfach. Folgen Sie diesen Schritten, um harmonische Paletten für Ihr Projekt zu generieren:",
        steps: [
          {
            title: "Grundfarbe auswählen",
            description: "Wählen Sie zunächst eine Hauptfarbe, die Ihre Marke repräsentiert, die gewünschten Emotionen hervorruft oder vorhandene Designelemente ergänzt. Verwenden Sie den Farbwähler, geben Sie einen spezifischen Hex-Code ein oder klicken Sie auf \"Zufällige Farbe\" für Inspiration. Diese Grundfarbe bildet die Basis für das gesamte Farbschema."
          },
          {
            title: "Farbharmonie-Theorie auswählen",
            description: "Wählen Sie eine Farbtheorie-Option aus dem Dropdown-Menü. Jede Theorie erzeugt unterschiedliche Beziehungen zwischen Farben: monochrom (Variationen einer Farbe), analog (benachbarte Farben auf dem Farbkreis), komplementär (gegenüberliegende Farben), triadisch (drei gleichmäßig verteilte Farben) usw. Ihre Theorie-Auswahl beeinflusst Stimmung und Wirkung der Palette erheblich."
          },
          {
            title: "Generierungsparameter anpassen",
            description: "Feinjustieren Sie Ihre Palette durch Einstellungen wie Farbanzahl, Sättigungs- und Helligkeitsbereich. Diese Parameter geben Ihnen präzise Kontrolle über Intensität und Vielfalt im Schema. Für barrierefreie Websites oder Interfaces aktivieren Sie die \"Farbenblind-sicher\"-Option und setzen angemessene Kontrastwerte."
          },
          {
            title: "Ihr Farbschema generieren",
            description: "Klicken Sie auf \"Schema generieren\", um basierend auf Ihren Auswahlkriterien eine Palette zu erstellen. Das Tool zeigt eine Reihe harmonischer, gut zusammenpassender Farben gemäß den von Ihnen gewählten Farbtheorie-Prinzipien an. Bei Unzufriedenheit klicken Sie \"Neu generieren\" für alternative Optionen bei gleichen Grundeinstellungen."
          },
          {
            title: "Ihre Palette vorschauen und testen",
            description: "Nutzen Sie den Vorschaubereich, um zu sehen, wie Ihre Farben in realen Umgebungen zusammenwirken. Wechseln Sie zwischen verschiedenen Vorschau-Vorlagen wie Website-Layouts, mobilen Apps oder Dashboards, um die Funktionalität Ihrer Palette in verschiedenen Anwendungen zu visualisieren. Dieser Schritt hilft sicherzustellen, dass Ihre Farben die gewünschte Wirkung entfalten."
          },
          {
            title: "Ihr Farbschema speichern und exportieren",
            description: "Sobald Sie mit der Palette zufrieden sind, speichern Sie sie mit einem beschreibenden Namen für zukünftige Referenz. Exportieren Sie die Palette in verschiedenen Formaten wie CSS-Variablen, SCSS, Tailwind-Konfiguration oder JSON für einfache Integration in Ihre Projekte. Die Exportoptionen ermöglichen nahtlose Workflow-Integration."
          },
          {
            title: "Anwenden und iterieren",
            description: "Implementieren Sie das Schema in Ihren Projekten und bewerten Sie dessen Effektivität. Bei Bedarf kehren Sie zum Generator zurück für Anpassungen oder erstellen alternative Paletten für verschiedene Projektteile. Laden Sie gespeicherte Paletten, erstellen Sie Varianten oder bewahren Sie Konsistenz über mehrere Projekte hinweg."
          }
        ]
      },
      colorTheory: {
        title: "Farbharmonie-Prinzipien verstehen",
        intro: "Farbtheorien bieten wissenschaftliche Rahmenwerke für harmonische Kombinationen. So funktionieren verschiedene Harmonie-Modelle in unserem Generator:",
        items: [
          {
            name: "Monochromes Schema",
            description: "Verwendet Helligkeits- und Sättigungsvariationen eines Farbtons für ein kohärentes, einheitliches Erscheinungsbild - elegant und einfach zu handhaben. Ideal für minimalistisches Design, Markenwiedererkennung oder subtile, raffinierte Ästhetik ohne überwältigende Farbkonkurrenz."
          },
          {
            name: "Analoges Schema",
            description: "Kombiniert benachbarte Farben auf dem Farbkreis für harmonische, beruhigende Effekte mit ausreichender Abwechslung. Perfekt für natürliche, komfortable Designs mit visuellem Fluss statt hohem Kontrast oder Spannung."
          },
          {
            name: "Komplementäres Schema",
            description: "Paart gegenüberliegende Farben für maximalen Kontrast und visuelle Dynamik. Dieses Schema bietet energiegeladene, auffällige Effekte, ideal für Call-to-Action-Elemente, visuelle Trennung oder einprägsames Marketingmaterial."
          },
          {
            name: "Gespalten komplementäres Schema",
            description: "Verwendet eine Grundfarbe plus zwei Nachbarfarben ihres Komplements für starken visuellen Kontrast, der weniger intensiv ist als reine Komplementärpaare. Dieser ausgewogene Ansatz bietet visuelles Interesse und Lebendigkeit bei besserer Koordinierbarkeit."
          },
          {
            name: "Triadisches Schema",
            description: "Nutzt drei gleichmäßig verteilte Farben für reichhaltigen Kontrast bei erhaltener Harmonie. Dieses vielseitige Schema liefert ausgewogene, dynamische Paletten für energiegeladene, lebendige Designs, die visuelle Vielfalt benötigen."
          },
          {
            name: "Tetradisches (doppelt komplementäres) Schema",
            description: "Kombiniert zwei Komplementärpaare für komplexe, vielfältige Paletten mit zahlreichen Kontrastmöglichkeiten. Dieses anspruchsvolle Schema eignet sich für ausgereifte Designs mit Tiefe und Vielfalt, erfordert jedoch sorgfältige Balance, um Überforderung zu vermeiden."
          },
          {
            name: "Quadratisches Schema",
            description: "Verwendet vier gleichmäßig verteilte Farben (ähnlich triadisch, aber mit vier Farben). Dieser ausgewogene Ansatz bietet maximale Farbvielfalt bei erhaltener Harmonie für komplexe Designs mit mehreren Farbgruppen."
          }
        ]
      },
      faq: {
        title: "Häufige Fragen zu Farbschemata",
        items: [
          {
            question: "Was macht ein gutes Farbschema aus?",
            answer: "Ein gutes Farbschema erreicht mehrere Ziele: Es schafft visuelle Harmonie durch angemessene Farbbeziehungen (basierend auf Farbtheorie-Prinzipien), etabliert ausreichenden Kontrast für Lesbarkeit und Barrierefreiheit, vermittelt die gewünschte emotionale Reaktion und Markenpersönlichkeit, bleibt in verschiedenen Umgebungen funktional und unterscheidet sich von Wettbewerbern bei gleichzeitiger Branchenangemessenheit. Die besten Schemata balancieren ästhetischen Reiz mit praktischer Funktionalität, verwenden 3-5 Farben mit klaren Rollen (primär, sekundär, Akzent etc.) und wenden diese konsistent im gesamten Designsystem an."
          },
          {
            question: "Wie viele Farben sollte mein Schema enthalten?",
            answer: "Die meisten effektiven Schemata umfassen 3-5 Farben: Eine primäre Markenfarbe, ergänzende Sekundärfarben, 1-2 Akzentfarben für Hervorhebungen und 2-3 neutrale Farben (Weiß, Schwarz, Grau) für Text und Hintergründe. Für komplexe Systeme wie große Websites können zusätzliche Sekundär- oder Akzentfarben hinzugefügt werden, wobei jede Farbe einen spezifischen Zweck erfüllen sollte. Beschränken Sie Ihre Palette, um visuelle Unordnung zu vermeiden und Konsistenz zu gewährleisten, während verschiedene Schattierungen und Tönungen Flexibilität bieten."
          },
          {
            question: "Wie stelle ich Barrierefreiheit meines Schemas sicher?",
            answer: "Konzentrieren Sie sich auf Text-Hintergrund-Kontrast (WCAG empfiehlt mindestens 4.5:1 für normalen Text, 3:1 für großen Text), vermeiden Sie für Farbenblinde problematische Kombinationen (insbesondere Rot-Grün) und vermeiden Sie reine Farbcodierung. Unser Generator enthält Barrierefreiheits-Features wie Kontrastprüfung und Farbenblind-Simulation für inklusive Designs. Testen Sie mit Barrierefreiheits-Tools und ergänzen Sie Farbcodierung mit alternativen Hinweisen (Muster, Icons oder Textlabels) für verbesserte Zugänglichkeit."
          },
          {
            question: "Wie wende ich Schemata konsistent in Projekten an?",
            answer: "Konsistente Anwendung erfordert Systematik: Exportieren Sie Paletten in workflow-kompatible Formate (CSS-Variablen etc.) mit klaren Namenskonventionen. Definieren Sie spezifische Farbrollen (z.B. Primärfarbe für Überschriften), dokumentieren Sie Farbnutzungsrichtlinien, verwenden Sie Design-Tokens oder Variablen statt hartkodierter Werte und setzen Sie komponentenbasierte Designmethoden ein. Regelmäßige Design-Reviews und automatische Stilprüfungen helfen bei der Konsistenzwahrung."
          },
          {
            question: "Kann ich diesen Generator für Printdesign nutzen?",
            answer: "Ja, aber mit zusätzlichen Überlegungen: Beachten Sie Farbunterschiede zwischen CMYK (Druck) und RGB (Bildschirm), nutzen Sie CMYK-Vorschauoptionen, passen Sie Sättigung an (hohe Sättigung druckt oft schlecht), generieren Sie größere Paletten für Druckfarbabweichungen und fordern Sie physische Proofs vor Massendruck an. Farbharmonien funktionieren in allen Medien, sind aber für Printdesigner besonders wertvoll."
          },
          {
            question: "Wie erstelle ich emotional wirkende Schemata?",
            answer: "Farbpsychologie spielt eine Schlüsselrolle: Verwenden Sie leuchtende Rot-, Orange- oder Gelbtöne für energiegeladene Designs, Blau- und Cyantöne für Vertrauen und Ruhe, Grüntöne für Natur/Wachstum, Purpur für Kreativität/Luxus oder Rosa für Verspieltheit. Neben Farbton beeinflussen Sättigung (hoch = Energie, niedrig = Raffinesse) und Helligkeit (hell = Optimismus, dunkel = Ernsthaftigkeit) die emotionale Wirkung. Unser Generator ermöglicht präzise Steuerung dieser Variablen."
          },
          {
            question: "Wie erstelle ich einzigartige, theoriebasierte Schemata?",
            answer: "Balancieren Sie etablierte Regeln mit kontrollierten Abweichungen: Variieren Sie Standard-Farbtonbeziehungen leicht, kombinieren Sie Elemente verschiedener Theorien (z.B. gespalten komplementär mit monochromen Abstufungen), fügen Sie unerwartete Akzente hinzu oder experimentieren Sie mit unkonventionellen Sättigungs-/Helligkeitskombinationen. Unser Generator unterstützt dies durch selektives Sperren von Farben während Neugenerierung, schrittweise Einführung von Einzigartigkeit bei Wahrung grundlegender Harmonieprinzipien."
          }
        ]
      },
      bestPractices: {
        title: "Best Practices für effektive Farbschemata",
        intro: "Wenden Sie diese professionellen Farbdesign-Prinzipien an, um die Wirkung Ihrer generierten Schemata zu maximieren:",
        items: [
          "Beginnen Sie mit Markenkernfarben oder vorhandenen Designelementen, um Konsistenz zu wahren",
          "Priorisieren Sie Barrierefreiheit mit ausreichendem Text-Hintergrund-Kontrast (mindestens 4.5:1)",
          "Begrenzen Sie aktive Paletten auf 3-5 Hauptfarben mit klaren Funktionsrollen (primär, sekundär, Akzent, neutral) zur Vermeidung visueller Unordnung",
          "Testen Sie Schemata auf verschiedenen Geräten, Lichtverhältnissen und Umgebungen",
          "Berücksichtigen Sie kulturelle Farbassoziationen für internationale Zielgruppen",
          "Nutzen Sie die 60-30-10-Regel als Ausgangspunkt: 60% dominante Farbe, 30% sekundäre Farbe, 10% Akzentfarbe",
          "Erstellen Sie erweiterte Paletten mit Schattierungen/Tönungen jeder Kernfarbe für flexible Harmonie",
          "Wenden Sie Farben konsistent basierend auf Funktion an (z.B. gleiche Farbe für alle Hauptaktionen)",
          "Testen Sie Schemata in Graustufen, um sicherzustellen, dass Designs ohne Farbabhängigkeit funktionieren",
          "Dokumentieren Sie Ihr Farbsystem mit klaren Namenskonventionen und Nutzungsrichtlinien",
          "Berücksichtigen Sie Betrachtungsumgebung und Medium (digital vs. Print, mobil vs. Desktop, Innen- vs. Außenbereich)",
          "Überprüfen und optimieren Sie Schemata regelmäßig basierend auf Nutzerfeedback und Leistungsmetriken"
        ]
      }
    }
  }