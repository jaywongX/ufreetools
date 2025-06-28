export default {
    name: 'Querformat zu Hochformat',
    description: 'Konvertiert Bilder im Querformat in das Hochformat, ideal für Kurzvideos, Handy-Hintergründe und Social Media',
    tags: ['Bild', 'Konvertierung', 'Handy', 'Social', 'Story', 'Hochformat', 'Porträt'],
  
    upload: {
      title: 'Quer-zu-Hochformat-Konverter',
      dropzone: 'Bild hier ablegen',
      maxSize: 'Maximale Dateigröße: 10MB',
      supportedFormats: 'Unterstützte Formate: JPG, PNG, WEBP, GIF'
    },
  
    settings: {
      title: 'Konvertierungseinstellungen',
      presets: 'Voreinstellungen',
      conversionMode: 'Konvertierungsmodus',
      modes: {
        crop: 'Zuschneiden',
        fill: 'Farbe füllen',
        blur: 'Unschärfe-Hintergrund',
        stretch: 'Kanten strecken',
        dualColor: 'Zweifarbiger Hintergrund'
      },
      cropPosition: 'Zuschnittposition',
      positions: {
        left: 'Links',
        center: 'Mitte',
        right: 'Rechts'
      },
      fillColor: 'Füllfarbe',
      blurRadius: 'Unschärfe-Radius',
      stretchFactor: 'Streckfaktor',
      topColor: 'Obere Farbe',
      bottomColor: 'Untere Farbe',
      sizeOption: 'Ausgabegröße',
      sizeModes: {
        auto: 'Automatisch',
        preset: 'Voreinstellung',
        custom: 'Benutzerdefiniert'
      },
      sizePresets: 'Größen-Voreinstellungen',
      outputSize: 'Benutzerdefinierte Größe',
      width: 'Breite',
      height: 'Höhe',
      dimensionsHint: 'Größe in Pixel eingeben',
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
      preview: 'Ausgabevorschau',
      before: 'Vorher',
      after: 'Nachher',
      dimensions: 'Abmessungen'
    },
  
    actions: {
      selectImage: 'Bild auswählen',
      convert: 'Zu Hochformat konvertieren',
      download: 'Bild herunterladen',
      showSideBySide: 'Vergleich anzeigen',
      hideSideBySide: 'Vergleich ausblenden',
      hideComparison: 'Vergleich verbergen'
    },
  
    messages: {
      convertPrompt: 'Laden Sie ein Querformat-Bild hoch und konvertieren Sie es ins Hochformat',
      processing: 'Ihr Bild wird verarbeitet...',
      imageOnly: 'Bitte wählen Sie eine Bilddatei aus'
    },
  
    examples: {
      title: 'Anwendungsbeispiele',
      social: 'Erstellen Sie Hochformat-Inhalte für Instagram, TikTok etc.',
      socialTip: 'Perfekte Umwandlung von Querformat-Fotos in ansprechende Hochformate',
      mobile: 'Erstellen Sie Handy-Hintergründe aus Querformat-Bildern',
      mobileTip: 'Optimierte Bilder für verschiedene Smartphone-Bildschirmverhältnisse'
    },
  
    article: {
      title: "Quer-zu-Hochformat-Tool: Optimieren Sie Ihre Social-Media-Fotos",
      intro: {
        title: "Was ist das Quer-zu-Hochformat-Tool?",
        content: `<p>Das <strong>Quer-zu-Hochformat</strong>-Tool ist ein leistungsstarkes Online-Tool, das Bilder vom Quer- ins Hochformat konvertiert und speziell für mobile Geräte und Social-Media-Plattformen optimiert. Im Gegensatz zu einfachen Zuschneide-Tools bietet dieser Konverter verschiedene komplexe Konvertierungsmethoden, die den Hauptinhalt des Bildes erhalten.</p>
        <p>Mit fünf verschiedenen Konvertierungsmodi (Zuschneiden, Farbfüllung, Unschärfe-Hintergrund, Kantenstreckung und zweifarbiger Hintergrund) gibt Ihnen dieses <strong>Quer-zu-Hochformat</strong>-Tool die volle Kontrolle über die Umwandlung. Egal, ob Sie Inhalte für Instagram-Stories, TikTok-Videos, Pinterest vorbereiten oder den perfekten Handy-Hintergrund erstellen möchten - dieser Konverter übernimmt die technischen Aspekte, sodass Sie sich auf die Kreativität konzentrieren können.</p>`
      },
      useCases: {
        title: "Wann Sie das Quer-zu-Hochformat-Tool verwenden sollten",
        case1: "Konvertieren Sie Querformat-Fotos für <strong>Instagram-Stories</strong> und <strong>Reels</strong>, um unschöne Zuschnitte zu vermeiden",
        case2: "Wandeln Sie Querformat-Fotos in das <strong>Hochformat</strong> für <strong>TikTok</strong>-Videos und Inhalte um",
        case3: "Verwandeln Sie Querformat-Bilder in perfekt proportionierte <strong>Pinterest-Pins</strong>",
        case4: "Konvertieren Sie Desktop-Hintergründe in <strong>Handy-Hintergründe</strong>",
        case5: "Bereiten Sie Werbebilder für <strong>vertikale digitale Displays</strong> und Kioske vor"
      },
      faq: {
        title: "Häufig gestellte Fragen",
        q1: "Wie erhält das Quer-zu-Hochformat-Tool die Bildqualität?",
        a1: "Unser Konverter verwendet fortschrittliche Rendering-Techniken, um die Bildqualität zu erhalten. Sie können das Ausgabeformat (JPEG, PNG, WEBP) wählen und die Qualitätseinstellungen anpassen. Für höchste Qualität wählen Sie PNG oder setzen die JPEG/WEBP-Qualität auf 100%.",
        
        q2: "Welcher Konvertierungsmodus eignet sich am besten für Social-Media-Stories?",
        a2: "Für Social-Media-Stories (Instagram, WeChat, TikTok) ist der 'Unschärfe-Hintergrund'-Modus meist am besten. Diese Konvertierung behält Ihr gesamtes Foto bei und füllt den vertikalen Raum mit einer unscharfen Version des Bildes, was einen professionellen Look ergibt.",
        
        q3: "Kann ich die Ausgabegröße für bestimmte Plattformen anpassen?",
        a3: "Ja! Der Konverter enthält Voreinstellungen für beliebte Plattformen (Instagram-Story: 1080×1920, TikTok: 1080×1920, Pinterest: 1000×1500) oder Sie können benutzerdefinierte Größen festlegen. Das Tool verarbeitet automatisch das Seitenverhältnis.",
        
        q4: "Werden meine Originalbilder auf Ihren Servern gespeichert?",
        a4: "Nein. Die Konvertierung erfolgt vollständig in Ihrem Browser. Ihre Originalbilder werden niemals auf unsere Server hochgeladen, was Ihre Privatsphäre und Datensicherheit gewährleistet.",
        
        q5: "Wie erziele ich die besten Ergebnisse bei der Konvertierung?",
        a5: "Für optimale Ergebnisse: 1) Wählen Sie den passenden Modus für Ihren Inhaltstyp, 2) Überprüfen Sie die Vorschau, 3) Experimentieren Sie mit verschiedenen Modi, 4) Passen Sie erweiterte Einstellungen wie Schärfe an."
      },
      tutorial: {
        title: "Wie Sie Querformat-Bilder ins Hochformat konvertieren",
        step1: "Laden Sie Ihr Querformat-Bild per Drag & Drop oder über den 'Bild auswählen'-Button hoch.",
        step2: "Wählen Sie einen der fünf Konvertierungsmodi (Zuschneiden, Farbfüllung, Unschärfe-Hintergrund, Kantenstreckung oder zweifarbiger Hintergrund).",
        step3: "Passen Sie die modusspezifischen Einstellungen an (z.B. Unschärfe-Radius beim 'Unschärfe-Hintergrund'-Modus).",
        step4: "Wählen Sie Ihre bevorzugte Ausgabegröße: Automatisch, Voreinstellung (für Plattformen) oder benutzerdefiniert.",
        step5: "Wählen Sie Ihr Ausgabeformat (JPEG, PNG oder WEBP) und passen Sie die Qualität an.",
        step6: "Für erweiterte Optionen öffnen Sie das entsprechende Menü (Seitenverhältnis, Schärfe, Wasserzeichen).",
        step7: "Klicken Sie auf 'Zu Hochformat konvertieren'.",
        step8: "Vorschau des Ergebnisses und Download über den 'Bild herunterladen'-Button."
      },
      conclusion: {
        title: "Verwandeln Sie Ihre Querformat-Fotos in perfekte Hochformate",
        content: "Das Quer-zu-Hochformat-Tool macht die Anpassung von Querformat-Fotos für heutige hochformat-orientierte Plattformen einfach. Mit verschiedenen Konvertierungsmodi und Anpassungsoptionen können Sie sicherstellen, dass Ihre Bilder in jedem Hochformat optimal aussehen. Experimentieren Sie mit den Einstellungen, um die perfekte Konvertierung für Ihre spezifischen Anforderungen zu finden. Beginnen Sie jetzt mit der Umwandlung Ihrer Bilder und optimieren Sie Ihre visuellen Inhalte für mobile Geräte und Social Media!"
      }
    }
  };