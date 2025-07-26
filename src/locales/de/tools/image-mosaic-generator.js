export default {
  name: 'Bild-Mosaik-Generator',
  description: 'Erstellen Sie Mosaikkunst durch Kombination kleiner Bilder zu einem größeren Gesamtbild',

  upload: {
    title: 'Hauptbild hochladen',
    dropzone: 'Ziehen Sie das Hauptbild hierher oder klicken Sie zum Durchsuchen',
    maxSize: 'Maximale Dateigröße: 15MB',
    supportedFormats: 'Unterstützte Formate: JPG, PNG, WEBP'
  },

  tiles: {
    title: 'Kachelbilder',
    uploadTiles: 'Kachelbilder hochladen',
    dropzoneTiles: 'Ziehen Sie Kachelbilder hierher oder klicken Sie zum Durchsuchen',
    maxTiles: 'Maximal {count} Bilder',
    useFolder: 'Bilderordner hochladen',
    orUseSample: 'Oder Beispielgalerie verwenden',
    sampleSets: 'Beispiel-Kachelsets',
    nature: 'Natur',
    people: 'Personen',
    art: 'Kunst',
    abstract: 'Abstrakt',
    animals: 'Tiere',
    clearAll: 'Alle Kacheln löschen'
  },

  settings: {
    title: 'Mosaik-Einstellungen',
    tileSize: 'Kachelgröße',
    small: 'Klein (detailliert)',
    medium: 'Mittel',
    large: 'Groß (grob)',
    square: 'Quadratisch',
    circle: 'Rund',
    applicationMode: 'Mosaik-Anwendungsmodus',
    all: 'Ganzes Bild',
    selectRegion: 'Bereich auswählen',
    selectingRegion: 'Bereichsauswahl aktiv...',
    autoDetectFaces: 'Gesichter automatisch erkennen',
    detectFaces: 'Gesichter erkennen',
    detectFacesDescription: 'Erkennt Gesichter im Bild und wendet automatisch Mosaik an',
    edgeSmoothing: 'Kantenglättung',
    edgeSmoothingDescription: 'Glättet Mosaikkanten für natürlichere Übergänge',
    custom: 'Benutzerdefiniert',
    width: 'Breite',
    height: 'Höhe',
    tilesWide: 'Anzahl Kacheln in der Breite',
    tilesHigh: 'Anzahl Kacheln in der Höhe',
    colorMatch: 'Farbabgleich',
    intensity: 'Intensität',
    low: 'Niedrig',
    high: 'Hoch',
    reuseTiles: 'Kacheln wiederverwenden',
    allowDuplicates: 'Duplikate erlauben',
    maxUses: 'Maximale Verwendungen pro Kachel',
    colorAdjustment: 'Farbanpassung',
    adjustTiles: 'Kachelfarben anpassen',
    blendOriginal: 'Mit Originalbild mischen',
    blendAmount: 'Mischungsgrad',
    random: 'Zufällige Variation',
    shuffle: 'Kacheln zufällig anordnen'
  },

  advanced: {
    title: 'Erweiterte Optionen',
    algorithm: 'Abgleichalgorithmus',
    algorithms: {
      average: 'Durchschnittsfarbe',
      dominant: 'Dominante Farbe',
      histogram: 'Farbhistogramm',
      pattern: 'Musterabgleich'
    },
    tileShape: 'Kachelform',
    shapes: {
      square: 'Quadrat',
      circle: 'Kreis',
      hexagon: 'Sechseck',
      triangle: 'Dreieck',
      random: 'Zufällig'
    },
    tileGap: 'Kachelabstand',
    borderColor: 'Rahmenfarbe',
    backgroundColor: 'Hintergrundfarbe'
  },

  output: {
    fileName: 'Dateiname',
    title: 'Ausgabe',
    preview: 'Vorschau',
    original: 'Original',
    mosaic: 'Mosaik',
    sideBySide: 'Nebeneinander',
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    download: 'Mosaik herunterladen',
    asJpg: 'Als JPG herunterladen',
    asPng: 'Als PNG herunterladen',
    highRes: 'Hohe Auflösung',
    resolution: 'Ausgabequalität',
    format: 'Format',
    quality: 'Qualität',
    size: 'Größe',
    pixel: 'Pixel',
    pleaseSelectImage: 'Bitte wählen Sie ein Bild aus',
    pleaseSelectImageAndAdjustSettings: 'Bitte wählen Sie ein Bild aus und passen Sie die Einstellungen an'
  },

  actions: {
    generate: 'Mosaik erstellen',
    regenerate: 'Neu erstellen',
    cancel: 'Abbrechen',
    reset: 'Zurücksetzen',
    detectFaces: 'Gesichter erkennen',
    saveSettings: 'Einstellungen speichern',
    loadSettings: 'Einstellungen laden'
  },

  messages: {
    generating: 'Mosaik wird erstellt... Dies kann einige Zeit dauern.',
    generationComplete: 'Mosaik erfolgreich erstellt!',
    notEnoughTiles: 'Nicht genügend Kachelbilder. Bitte laden Sie mehr Bilder hoch.',
    tileProcessing: 'Kachelbilder werden verarbeitet: {progress}%',
    downloadStarted: 'Download gestartet',
    settingsSaved: 'Einstellungen gespeichert',
    selecting: 'Bereich wird ausgewählt...',
    preview: 'Hier wird das Ergebnis mit angewendetem Mosaik angezeigt',
    faceDetected: 'Gesichtsbereich erkannt',
    facesDetected: '{count} Gesichter erkannt',
    noFacesDetected: 'Keine Gesichter erkannt',
    loadingModels: 'Gesichtserkennungsmodelle werden geladen...',
    faceDetectionFailed: 'Gesichtserkennung fehlgeschlagen',
    reset: 'Zurückgesetzt',
    error: 'Fehler: {message}'
  }
};