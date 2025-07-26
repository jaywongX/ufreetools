export default {
  name: 'Bildfilter',
  description: 'Echtzeit-Vorschau und Anwendung verschiedener Filter und Effekte auf Bilder',

  upload: {
    title: 'Bild hochladen',
    dropzone: 'Bild hierher ziehen oder zum Durchsuchen klicken',
    maxSize: 'Maximale Dateigröße: 10MB',
    supportedFormats: 'Unterstützte Formate: JPG, PNG, WEBP, GIF'
  },

  editor: {
    title: 'Filter-Editor',
    original: 'Original',
    filtered: 'Gefiltert',
    reset: 'Zurücksetzen',
    undo: 'Rückgängig',
    redo: 'Wiederherstellen',
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    fitToScreen: 'An Bildschirm anpassen',
    showOriginal: 'Original anzeigen'
  },

  filters: {
    title: 'Filter',
    basic: 'Grundlegende Anpassungen',
    brightness: 'Helligkeit',
    contrast: 'Kontrast',
    saturation: 'Sättigung',
    hue: 'Farbton',
    exposure: 'Belichtung',
    vibrance: 'Dynamik',
    temperature: 'Farbtemperatur',
    gamma: 'Gamma',
    clarity: 'Klarheit',
    effects: 'Effekte',
    grayscale: 'Graustufen',
    sepia: 'Sepia',
    vintage: 'Vintage',
    polaroid: 'Polaroid',
    duotone: 'Duoton',
    noise: 'Rauschen',
    pixelate: 'Pixelisierung',
    blur: 'Weichzeichnen',
    sharpen: 'Schärfen',
    vignette: 'Vignettierung',
    color: 'Farbe',
    colorOverlay: 'Farbüberlagerung',
    colorize: 'Einfärben',
    gradientMap: 'Farbverlauf',
    replaceColor: 'Farbe ersetzen',
    advanced: 'Erweitert',
    levels: 'Tonwerte',
    curves: 'Kurven',
    shadows: 'Schatten',
    highlights: 'Lichter',
    blacks: 'Tiefen',
    whites: 'Lichter',
    channels: 'RGB-Kanäle'
  },

  presets: {
    title: 'Voreinstellungen',
    custom: 'Benutzerdefiniert',
    blackAndWhite: 'Schwarz-Weiß',
    highContrast: 'Hoher Kontrast',
    normal: 'Normal',
    cinematic: 'Filmisch',
    warm: 'Warm',
    cool: 'Kühl',
    sunset: 'Sonnenuntergang',
    vintage: 'Vintage',
    invert: 'Invertieren',
    cross: 'Cross-Entwicklung',
    matte: 'Matt',
    flat: 'Flach',
    portrait: 'Porträt',
    landscape: 'Landschaft',
    vivid: 'Lebhaft',
    moody: 'Düster',
    savePreset: 'Aktuelle Einstellungen speichern',
    deletePreset: 'Voreinstellung löschen',
    presetName: 'Voreinstellungsname'
  },

  output: {
    title: 'Ausgabe',
    fileName: 'Dateiname',
    format: 'Format',
    quality: 'Qualität',
    width: 'Breite',
    height: 'Höhe',
    download: 'Bild herunterladen',
    saveOnline: 'Online speichern',
    share: 'Teilen',
    applyToNew: 'Auf neues Bild anwenden'
  },

  history: {
    title: 'Verlauf',
    revert: 'Zu diesem Schritt zurückkehren',
    clear: 'Verlauf löschen'
  },

  actions: {
    apply: 'Filter anwenden',
    download: 'Herunterladen',
    save: 'Speichern',
    reset: 'Zurücksetzen',
    cancel: 'Abbrechen'
  },

  messages: {
    imageLoaded: 'Bild erfolgreich geladen',
    filterApplied: 'Filter erfolgreich angewendet',
    filtersReset: 'Filter auf Standard zurückgesetzt',
    downloadStarted: 'Download gestartet',
    presetSaved: 'Voreinstellung erfolgreich gespeichert',
    presetDeleted: 'Voreinstellung gelöscht',
    invalidFile: 'Ungültige Datei. Bitte ein gültiges Bild hochladen.',
    fileTooLarge: 'Datei zu groß. Maximale Größe: 10MB.'
  }
};