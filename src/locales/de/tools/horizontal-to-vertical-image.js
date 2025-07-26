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
  }
};