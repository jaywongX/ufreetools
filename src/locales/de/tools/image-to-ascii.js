export default {
  name: 'Bild-zu-ASCII-Konverter',
  description: 'Wandeln Sie Bilder in anpassbare ASCII-Kunsttexte um',

  upload: {
    title: 'Bild hochladen',
    dropzone: 'Bild hierher ziehen oder zum Durchsuchen klicken',
    maxSize: 'Maximale Dateigröße: 5MB',
    supportedFormats: 'Unterstützte Formate: JPG, PNG, WEBP, GIF',
    pasteImage: 'Oder Bild aus der Zwischenablage einfügen'
  },

  options: {
    title: 'Konvertierungsoptionen',
    width: 'Ausgabebreite',
    height: 'Ausgabehöhe',
    preserveAspect: 'Seitenverhältnis beibehalten',
    colored: 'Farbige Ausgabe',
    charSet: 'Zeichensatz',
    charSets: {
      standard: 'Standard',
      simple: 'Einfach',
      complex: 'Komplex',
      blocks: 'Blockzeichen',
      custom: 'Benutzerdefiniert'
    },
    customChars: 'Benutzerdefinierte Zeichen',
    invert: 'Farben umkehren',
    threshold: 'Helligkeitsschwelle',
    brightness: 'Helligkeit',
    contrast: 'Kontrast',
    fontFamily: 'Schriftart',
    fontSize: 'Schriftgröße',
    lineHeight: 'Zeilenhöhe',
    backgroundColor: 'Hintergrundfarbe',
    textColor: 'Textfarbe'
  },

  output: {
    title: 'ASCII-Ausgabe',
    preview: 'Vorschau',
    raw: 'Rohes ASCII',
    html: 'HTML',
    copyToClipboard: 'In Zwischenablage kopieren',
    downloadTxt: 'Als TXT herunterladen',
    downloadHtml: 'Als HTML herunterladen',
    downloadImage: 'Als Bild herunterladen',
    stats: {
      title: 'Statistiken',
      characters: 'Zeichenanzahl',
      lines: 'Zeilenanzahl',
      colors: 'Farbanzahl',
      size: 'Textgröße'
    }
  },

  presets: {
    title: 'Voreinstellungen',
    save: 'Aktuelle Einstellungen speichern',
    load: 'Voreinstellung laden',
    delete: 'Voreinstellung löschen',
    presetName: 'Voreinstellungsname',
    default: 'Standard',
    detailed: 'Detailliert',
    minimalist: 'Minimalistisch',
    blocky: 'Blockstil',
    small: 'Klein',
    inverted: 'Invertiert'
  },

  adjustment: {
    title: 'Bildanpassung',
    grayscale: 'Graustufen',
    negative: 'Negativ',
    resize: 'Größe vor Konvertierung anpassen',
    crop: 'Bild zuschneiden',
    rotate: 'Drehen',
    flipH: 'Horizontal spiegeln',
    flipV: 'Vertikal spiegeln'
  },

  animation: {
    title: 'Animation',
    animated: 'Als Animation verarbeiten',
    frameDelay: 'Frameverzögerung',
    loop: 'Animation wiederholen',
    loopCount: 'Wiederholungsanzahl',
    extractFrame: 'Aktuellen Frame extrahieren'
  },

  actions: {
    convert: 'In ASCII konvertieren',
    resetOptions: 'Optionen zurücksetzen',
    refreshPreview: 'Vorschau aktualisieren',
    loadImage: 'Neues Bild laden',
    applyChanges: 'Änderungen anwenden',
    selectImage: 'Bild auswählen',
    reset: 'Zurücksetzen',
    processing: 'Wird verarbeitet...',
    generate: 'ASCII generieren',
    copy: 'Kopieren',
    download: 'Herunterladen'
  },

  messages: {
    converting: 'Bild wird in ASCII konvertiert...',
    conversionComplete: 'Konvertierung abgeschlossen',
    conversionFailed: 'Bildkonvertierung fehlgeschlagen: {error}',
    copied: 'ASCII wurde in die Zwischenablage kopiert',
    downloadStarted: 'Download gestartet',
    downloadComplete: 'ASCII wurde heruntergeladen',
    downloadFailed: 'Download fehlgeschlagen',
    copyFailed: 'Kopieren fehlgeschlagen',
    resetComplete: 'Zurückgesetzt',
    asciiGenerated: 'ASCII-Kunst wurde generiert',
    generationFailed: 'ASCII-Generierung fehlgeschlagen',
    presetSaved: 'Voreinstellung gespeichert',
    presetLoaded: 'Voreinstellung geladen',
    presetDeleted: 'Voreinstellung gelöscht',
    invalidImage: 'Ungültiges Bildformat oder beschädigte Datei',
    imageTooBig: 'Bild ist zu groß für die Konvertierung',
    selectOrLoad: 'Bitte wählen Sie ein Bild aus oder laden Sie es von einer URL',
    asciiWillDisplay: 'ASCII wird hier angezeigt',
    customCharsPlaceholder: 'Zeichen eingeben, von dunkel nach hell sortiert...',
    tip: 'Klicken Sie nach dem Anpassen der Einstellungen auf "ASCII generieren", um das Ergebnis zu sehen',
    drapPlaceHolder: 'Bild auswählen oder hierher ziehen',
    noImage: 'Bitte wählen Sie zuerst ein Bild aus',
    generateAscii: 'Klicken Sie auf "ASCII generieren", um das Bild zu konvertieren',
    tip2: 'Tipp: Verwenden Sie die Kopieren-Schaltfläche, um die ASCII-Kunst in die Zwischenablage zu kopieren, oder die Download-Schaltfläche, um sie als Textdatei zu speichern.'
  },

  charSets: {
    standard: 'Standard',
    simple: 'Einfach',
    blocks: 'Blöcke',
    custom: 'Benutzerdefiniert'
  },

  settings: {
    title: 'ASCII-Einstellungen',
    customCharsetLabel: 'Benutzerdefinierter Zeichensatz (von dunkel nach hell)',
    asciiWidth: 'ASCII-Breite',
    invert: 'Farben umkehren',
    colored: 'Farbige Ausgabe',
    fontSize: 'Schriftgröße'
  },

  preview: {
    originalImage: 'Originalbild',
    generatedAscii: 'Generiertes ASCII'
  }
};