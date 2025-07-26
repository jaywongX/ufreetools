export default {
  name: 'EXIF-Daten-Viewer',
  description: 'EXIF-Metadaten in Fotos anzeigen und analysieren',

  upload: {
    title: 'Bild hochladen',
    dropzone: 'Bild hierher ziehen oder zum Durchsuchen klicken',
    maxSize: 'Maximale Dateigröße: 15MB',
    supportedFormats: 'Unterstützte Formate: JPG, TIFF, HEIC, PNG',
    anyImageFile: 'Beliebige Bilddatei mit EXIF-Daten'
  },

  display: {
    title: 'Bildinformationen',
    noExif: 'Keine EXIF-Daten in diesem Bild gefunden',
    basicInfo: 'Grundinformationen',
    camera: 'Kamerainformationen',
    exposure: 'Belichtungsinformationen',
    location: 'Standortinformationen',
    dates: 'Zeitinformationen',
    advanced: 'Erweiterte EXIF-Daten',
    thumbnail: 'EXIF-Vorschaubild'
  },

  exif: {
    fileName: 'Dateiname',
    fileSize: 'Dateigröße',
    fileType: 'Dateityp',
    dimensions: 'Abmessungen',
    make: 'Kamerahersteller',
    model: 'Kameramodell',
    lens: 'Objektiv',
    focalLength: 'Brennweite',
    focalLength35: 'Brennweite (35mm-Äquivalent)',
    aperture: 'Blende',
    fNumber: 'Blendenwert',
    exposureTime: 'Belichtungszeit',
    shutterSpeed: 'Verschlusszeit',
    iso: 'ISO',
    exposureMode: 'Belichtungsmodus',
    exposureProgram: 'Belichtungsprogramm',
    meteringMode: 'Messmethode',
    flash: 'Blitz',
    flashMode: 'Blitzmodus',
    whiteBalance: 'Weißabgleich',
    exposureBias: 'Belichtungskorrektur',
    latitude: 'Breitengrad',
    longitude: 'Längengrad',
    altitude: 'Höhe',
    locationName: 'Ortsname',
    dateOriginal: 'Aufnahmedatum',
    dateDigitized: 'Digitalisierungsdatum',
    dateModified: 'Änderungsdatum',
    software: 'Software',
    artist: 'Fotograf',
    copyright: 'Urheberrecht',
    resolution: 'Auflösung',
    colorSpace: 'Farbraum',
    orientation: 'Ausrichtung',
    compression: 'Komprimierung',
    bitsPerSample: 'Bits pro Sample',
    maxAperture: 'Maximale Blende',
    contrast: 'Kontrast',
    saturation: 'Sättigung',
    sharpness: 'Schärfe',
    brightness: 'Helligkeit',
    sceneCaptureType: 'Aufnahmeszenentyp',
    gainControl: 'Verstärkungsregelung',
    serialNumber: 'Seriennummer',
    width: 'Breite',
    height: 'Höhe',
  },

  map: {
    title: 'Foto-Standort',
    show: 'Auf Karte anzeigen',
    noLocation: 'Keine Standortdaten verfügbar',
    directions: 'Route anzeigen',
    copy: 'Koordinaten kopieren',
    warning: 'Warnung: Dieses Bild enthält Standortdaten. Seien Sie vorsichtig beim Teilen.'
  },

  actions: {
    showAll: 'Alle Metadaten anzeigen',
    hideAll: 'Alle Metadaten ausblenden',
    copyAll: 'Alle Metadaten kopieren',
    save: 'Metadaten als JSON speichern',
    removeMeta: 'Metadaten entfernen',
    download: 'Bild ohne Metadaten herunterladen',
    viewFullSize: 'Originalgröße anzeigen',
    refresh: 'Daten neu laden'
  },

  settings: {
    title: 'Anzeigeeinstellungen',
    showGroups: 'Metadaten gruppieren',
    showRaw: 'Rohwerte anzeigen',
    showTechnical: 'Technische Daten anzeigen',
    showFiltered: 'Leere Felder ausblenden',
    darkMode: 'Dunkelmodus',
    mapProvider: 'Kartenanbieter'
  },

  tips: {
    privacy: 'Datenschutzhinweis: Fotos können persönliche Daten wie Standort und Geräteinformationen enthalten.',
    noExif: 'Keine EXIF-Daten sichtbar? Einige Social-Media-Plattformen und Bildbearbeitungstools entfernen Metadaten.',
    rawView: 'Wechseln Sie zur "Rohdatenansicht", um alle verfügbaren Metadaten zu sehen.'
  },

  messages: {
    copied: 'Metadaten in Zwischenablage kopiert',
    saved: 'Metadaten als JSON-Datei gespeichert',
    noExif: 'Keine EXIF-Daten in diesem Bild gefunden',
    metadataRemoved: 'Metadaten erfolgreich entfernt',
    imageLoaded: 'Bild erfolgreich geladen',
    notUse: 'Nicht verwendet',
    use: 'Verwendet',
    auto: 'Automatisch',
    manual: 'Manuell',
    reset: 'Zurückgesetzt',
    exifExtracted: 'EXIF-Daten extrahiert',
  },

  error: {
    copyFailed: 'Kopieren fehlgeschlagen',
    exportFailed: 'Export fehlgeschlagen',
    exifExtractionFailed: 'EXIF-Datenextraktion fehlgeschlagen',
    imageLoadFailed: 'Bild konnte nicht geladen werden',
  },

  orientation: {
    normal: 'Normal',
    horizontalFlip: 'Horizontal gespiegelt',
    rotate180: '180° gedreht',
    verticalFlip: 'Vertikal gespiegelt',
    rotate90VerticalFlip: '90° im Uhrzeigersinn + vertikal gespiegelt',
    rotate90: '90° im Uhrzeigersinn',
    rotate90HorizontalFlip: '90° im Uhrzeigersinn + horizontal gespiegelt',
    rotate270: '90° gegen den Uhrzeigersinn'
  }
};