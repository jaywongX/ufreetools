export default {
    name: 'Hochformat zu Querformat',
    description: 'Konvertiert vertikale Porträtbilder in horizontale Landschaftsformate mit verschiedenen Konvertierungsoptionen',
    
    upload: {
      title: 'Bild hochladen',
      dropzone: 'Bild hier ablegen',
      maxSize: 'Maximale Dateigröße: 10MB',
      supportedFormats: 'Unterstützte Formate: JPG, PNG, WEBP, GIF'
    },
    
    settings: {
      title: 'Konvertierungseinstellungen',
      presets: 'Schnellvorgaben',
      conversionMode: 'Konvertierungsmodus',
      modes: {
        rotate: 'Drehen',
        fill: 'Hintergrund füllen',
        blur: 'Hintergrund unscharf',
        stretch: 'Kanten strecken',
        dualColor: 'Zweifarbiger Hintergrund'
      },
      rotationAngle: 'Drehwinkel',
      fillColor: 'Hintergrundfarbe',
      blurRadius: 'Unschärfegrad',
      stretchEdges: 'Streckungsgrad',
      leftColor: 'Linke Farbe',
      rightColor: 'Rechte Farbe',
      sizeOption: 'Größeneinstellung',
      sizeModes: {
        auto: 'Automatische Größe',
        preset: 'Standardgrößen',
        custom: 'Benutzerdefinierte Größe'
      },
      sizePresets: 'Größenvorgaben',
      outputSize: 'Ausgabegröße',
      width: 'Breite',
      height: 'Höhe',
      dimensionsHint: 'Größe in Pixel eingeben',
      autoSize: 'Größe automatisch berechnen',
      outputFormat: 'Ausgabeformat',
      quality: 'Bildqualität',
      advancedOptions: 'Erweiterte Optionen',
      preserveRatio: 'Seitenverhältnis beibehalten',
      sharpen: 'Schärfen',
      addWatermark: 'Wasserzeichen hinzufügen',
      watermarkPlaceholder: 'Wasserzeichentext eingeben',
      watermarkColor: 'Wasserzeichenfarbe'
    },
    
    output: {
      preview: 'Vorschau',
      dimensions: 'Abmessungen',
      before: 'Vorher',
      after: 'Nachher'
    },
    
    actions: {
      selectImage: 'Bild auswählen',
      convert: 'Bild konvertieren',
      download: 'Bild herunterladen',
      reset: 'Zurücksetzen',
      showSideBySide: 'Vergleich anzeigen',
      hideComparison: 'Vergleich ausblenden',
      hideSideBySide: 'Schließen'
    },
    
    messages: {
      processing: 'Bild wird verarbeitet...',
      convertPrompt: 'Nach der Konvertierung wird das Ergebnis hier angezeigt',
      error: 'Fehler bei der Bildverarbeitung',
      success: 'Konvertierung erfolgreich abgeschlossen!'
    },
  
    examples: {
      title: 'Anwendungstipps',
      social: 'Ideal für Social-Media-Beiträge, Querformate wirken besser',
      socialTip: 'Verwenden Sie den Unschärfemodus für optimale Social-Media-Ergebnisse',
      website: 'Erstellen Sie Bannerbilder für Websites und Blogs',
      websiteTip: 'Zweifarbiger Modus eignet sich perfekt für Web-Banner'
    },
  
    help: {
      title: 'So verwenden Sie dieses Tool',
      description: 'Dieses Tool ermöglicht die Konvertierung von vertikalen (Hochformat-) Bildern in horizontale (Querformat-) Formate mit verschiedenen Methoden, während die visuelle Qualität und Wirkung erhalten bleibt.',
      example1: {
        title: 'Social-Media-Beiträge',
        description: 'Konvertieren Sie Porträtfotos in social-media-freundliche Querformate mit unscharfem Hintergrund'
      },
      example2: {
        title: 'Website-Banner',
        description: 'Erstellen Sie Website-Header und Banner aus vertikalen Bildern mit farbigem Hintergrund'
      }
    },
  
    article: {
      title: "Hochformat zu Querformat: Komplettanleitung",
      
      intro: {
        title: "Tool-Funktionen und Anwendungsszenarien",
        content: `
          <p>Unser <strong>Hochformat-zu-Querformat-Konverter</strong> wandelt Porträt- (vertikale) Bilder in Landschafts- (horizontale) Formate um, während die visuelle Qualität erhalten bleibt. Dieses leistungsstarke Tool bietet verschiedene Konvertierungsmethoden, darunter unscharfen Hintergrund, einfarbige Füllung, zweifarbigen Verlauf, Kantenstreckung und Drehanpassung.</p>
          
          <p>Hauptfunktionen:</p>
          <ul>
            <li><strong>Verschiedene Konvertierungsmodi</strong>, passend für unterschiedliche visuelle Stile und Zwecke</li>
            <li><strong>Social-Media-Optimierung</strong> mit vordefinierten Größen für verschiedene Plattformen</li>
            <li><strong>Professionelle Anpassungsoptionen</strong> einschließlich Schärfung und Wasserzeichen</li>
            <li><strong>Hohe Ausgabequalität</strong> mit Unterstützung für mehrere Formate (JPEG, PNG, WebP)</li>
          </ul>
          
          <h4>Typische Anwendungsszenarien:</h4>
          
          <p><strong>Social-Media-Inhalte</strong>: Konvertieren Sie hochformatige Smartphone-Fotos in horizontale Beiträge für Plattformen wie Facebook, Twitter, LinkedIn und YouTube, wo Querformate besser wirken.</p>
          
          <p><strong>Website-Banner</strong>: Erstellen Sie breite Header und Banner aus vertikalen Produktfotos oder Porträts für E-Commerce-Websites, Blogs und Marketingmaterialien.</p>
          
          <p><strong>Digitales Marketing</strong>: Passen Sie vertikale Produktbilder für horizontale Werbeformate an, geeignet für Werbeplattformen und E-Mail-Marketingkampagnen.</p>
          
          <p><strong>Video-Thumbnails</strong>: Konvertieren Sie vertikale Video-Screenshots in horizontale Thumbnails für YouTube, Vimeo und andere Videoplattformen.</p>
          
          <p><strong>Präsentationsfolien</strong>: Wandeln Sie vertikale Bilder in horizontale Formate um, die für PowerPoint, Google Slides und andere Präsentationssoftware geeignet sind.</p>
        `
      },
      
      faq: {
        title: "Häufig gestellte Fragen",
        q1: "Warum sollte ich Hochformate in Querformate umwandeln?",
        a1: "Horizontale Bilder sind auf vielen Plattformen beliebter, einschließlich Social-Media-Feeds, Websites, Präsentationen und Marketingmaterialien. Sie erzielen typischerweise höhere Interaktionsraten und kommen auf verschiedenen Geräten besser zur Geltung.",
        q2: "Verliert das Bild bei der Konvertierung an Qualität?",
        a2: "Nein, unser Tool bewahrt die Bildqualität während der Konvertierung. Wir verwenden fortschrittliche Techniken wie Unschärfe, Farbfüllung und Kantenstreckung statt einfachem Zuschneiden, um den Originalinhalt zu erhalten.",
        q3: "Welchen Konvertierungsmodus sollte ich für Social Media wählen?",
        a3: "Für Social Media ist der Unschärfemodus meist am effektivsten, da er das Motiv zentriert hält, während das Bild horizontal mit einer ästhetisch unscharfen Version des Originals erweitert wird.",
        q4: "Welche Größe ist ideal für horizontale Bilder?",
        a4: "Gängige horizontale Proportionen sind 16:9 (Breitbild), 3:2 (Standard-Querformat) sowie plattformspezifische Größen wie 1200×630 Pixel für Facebook oder 1280×720 für YouTube. Unsere Vorgaben übernehmen diese Berechnungen für Sie.",
        q5: "Kann ich ein Wasserzeichen zum Schutz der konvertierten Bilder hinzufügen?",
        a5: "Ja, unser Tool enthält eine Wasserzeichenfunktion in den erweiterten Optionen. Sie können benutzerdefinierten Text hinzufügen und die Farbe anpassen, um Ihr geistiges Eigentum zu schützen.",
        q6: "Funktioniert dieses Tool auf Mobilgeräten?",
        a6: "Absolut! Unser Hochformat-zu-Querformat-Konverter ist vollständig responsiv und funktioniert auf jedem Smartphone, Tablet und Desktop-Computer mit modernem Browser."
      },
      
      tutorial: {
        title: "Schritt-für-Schritt-Anleitung",
        step1: "Laden Sie Ihr Hochformatbild hoch, indem Sie es in den Upload-Bereich ziehen oder auf \"Bild auswählen\" klicken.",
        step2: "Wählen Sie den Konvertierungsmodus entsprechend Ihren Anforderungen: Unschärfe, Füllung, Zweifarbig, Strecken oder Drehen.",
        step3: "Passen Sie die modusspezifischen Einstellungen (Unschärfegrad, Hintergrundfarbe etc.) für ein individuelles Aussehen an.",
        step4: "Wählen Sie die Größenoption: Automatisch (empfohlen), plattformspezifische Vorgaben oder benutzerdefinierte Größe.",
        step5: "Für erweiterte Anforderungen öffnen Sie den Bereich mit erweiterten Optionen für Schärfung, Seitenverhältnis-Kontrolle und Wasserzeichen.",
        step6: "Klicken Sie auf \"Bild konvertieren\", um Ihr Hochformat in ein Querformat umzuwandeln.",
        step7: "Vorschau des Ergebnisses und Vergleich der Vorher-Nachher-Ansicht.",
        step8: "Passen Sie bei Bedarf die Einstellungen an und konvertieren Sie erneut, bis Sie mit dem Ergebnis zufrieden sind.",
        step9: "Laden Sie das horizontale Bild in Ihrem bevorzugten Format (JPEG, PNG oder WebP) herunter."
      }
    }
  }