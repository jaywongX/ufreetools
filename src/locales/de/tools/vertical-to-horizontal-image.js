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
  }
};