export default {
  name: 'Bild-Batch-Anpassungstool',
  description: 'Mehrere Bilder gleichzeitig anpassen, konvertieren und optimieren',

  input: {
    title: 'Eingabebilder',
    dropzone: 'Bilder hierher ziehen und ablegen oder zum Durchsuchen klicken',
    addMore: 'Weitere Bilder hinzufügen',
    selectImages: 'Bilder auswählen',
    clearAll: 'Alle löschen',
    maxFiles: 'Maximal {count} Bilder',
    maxSize: 'Maximale Größe pro Bild: {size}MB',
    supportedFormats: 'Unterstützte Formate: {formats}'
  },

  options: {
    title: 'Anpassungsoptionen',
    settingsTitle: 'Anpassungseinstellungen',
    resizeMode: 'Größenänderungsmodus',
    resizeMethod: 'Größenänderungsmethode',
    pixelMode: 'Pixel',
    percentageMode: 'Prozent',
    maxDimensionMode: 'Maximale Abmessung',
    outputFormat: 'Ausgabeformat',
    quality: 'Qualität',
    width: 'Breite',
    height: 'Höhe',
    maintainAspectRatio: 'Seitenverhältnis beibehalten',
    maxWidth: 'Maximale Breite',
    maxHeight: 'Maximale Höhe',
    percentage: 'Prozent',
    backgroundColor: 'Hintergrundfarbe',
    naming: 'Ausgabename',
    filenamePrefix: 'Dateinamenpräfix',
    filenameSuffix: 'Dateinamensuffix',
    applyToAllImages: 'Auf alle Bilder anwenden',
    applyToAll: 'Auf alle Bilder anwenden'
  },

  resizeModes: {
    exact: 'Exakte Größe',
    maxDimensions: 'Maximale Abmessungen',
    percentage: 'Prozentuale Skalierung',
    fit: 'Einpassen',
    cover: 'Abdecken',
    crop: 'Zuschneiden'
  },

  formats: {
    original: 'Wie Original',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },

  namingOptions: {
    original: 'Originaler Dateiname',
    dimensions: 'Original + Abmessungen',
    format: 'Original + Format',
    custom: 'Benutzerdefiniertes Muster',
    random: 'Zufällige Zeichenfolge'
  },

  output: {
    title: 'Angepasste Bilder',
    downloadAll: 'Alle herunterladen',
    downloadAsZip: 'Als ZIP herunterladen',
    processingStatus: 'In Bearbeitung: {processed}/{total}',
    originalSize: 'Originalgröße',
    newSize: 'Neue Größe',
    reduction: 'Reduzierung',
    individualDownload: 'Herunterladen'
  },

  batch: {
    title: 'Stapelverarbeitung',
    process: 'Alle Bilder verarbeiten',
    cancel: 'Verarbeitung abbrechen',
    selectPreset: 'Voreinstellung auswählen',
    savePreset: 'Aktuelle Einstellungen speichern',
    progress: 'Verarbeitungsfortschritt'
  },

  watermark: {
    title: 'Wasserzeichen',
    enable: 'Wasserzeichen hinzufügen',
    text: 'Wasserzeichentext',
    image: 'Wasserzeichenbild',
    position: 'Position',
    opacity: 'Deckkraft',
    rotation: 'Rotation',
    size: 'Größe',
    padding: 'Abstand'
  },

  positions: {
    topLeft: 'Oben links',
    topCenter: 'Oben Mitte',
    topRight: 'Oben rechts',
    middleLeft: 'Mitte links',
    middleCenter: 'Mitte',
    middleRight: 'Mitte rechts',
    bottomLeft: 'Unten links',
    bottomCenter: 'Unten Mitte',
    bottomRight: 'Unten rechts'
  },

  actions: {
    resize: 'Größe ändern',
    preview: 'Vorschau',
    processing: 'In Bearbeitung...',
    reset: 'Zurücksetzen',
    applySettings: 'Einstellungen anwenden',
    resetSettings: 'Einstellungen zurücksetzen',
    cancel: 'Abbrechen'
  },

  messages: {
    resizeSuccess: 'Bildgröße erfolgreich geändert',
    resizeFailed: 'Größenänderung fehlgeschlagen: {error}',
    invalidDimensions: 'Bitte gültige Abmessungen eingeben',
    invalidWidthHeight: 'Bitte gültige Breite und Höhe eingeben',
    noImages: 'Bitte Bilder zum Anpassen hinzufügen',
    noImagesToDownload: 'Keine Bilder zum Herunterladen',
    processing: 'Bilder werden verarbeitet...',
    processingComplete: 'Verarbeitung abgeschlossen',
    processingError: 'Fehler bei der Bildverarbeitung',
    waitingForProcess: 'Warte auf Verarbeitung',
    downloadStarted: 'Download gestartet',
    allDownloaded: 'Alle Bilder heruntergeladen',
    presetSaved: 'Voreinstellung gespeichert',
    presetLoaded: 'Voreinstellung geladen',
    zipCreated: 'ZIP-Archiv mit {count} Bildern erstellt',
    zipError: 'Fehler beim Erstellen des ZIP-Archivs'
  },

  preview: {
    title: 'Bildvorschau ({count} Bilder)',
    selectImage: 'Bitte Bild auswählen',
    batchSupport: 'Unterstützt die Stapelverarbeitung mehrerer Bilder',
    download: 'Herunterladen',
    delete: 'Löschen'
  },

  qualityOptions: {
    fast: 'Schnelle Verarbeitung',
    medium: 'Mittlere Qualität',
    high: 'Hohe Qualität (empfohlen)',
    best: 'Beste Qualität (langsamer)'
  }
};