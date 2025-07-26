export default {
  name: 'Bild-Pixelierer',
  description: 'Konvertieren Sie Bilder in Pixelkunst mit anpassbarer Auflösung und Effekten',

  upload: {
    title: 'Bild hochladen',
    dropzone: 'Bild hierher ziehen oder zum Durchsuchen klicken',
    maxSize: 'Maximale Dateigröße: 10MB',
    supportedFormats: 'Unterstützte Formate: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Pixelierungs-Einstellungen',
    pixelSize: 'Pixel-Größe',
    pixelShape: 'Pixel-Form',
    shapes: {
      square: 'Quadrat',
      rounded: 'Abgerundet',
      circle: 'Kreis',
      diamond: 'Raute',
      custom: 'Benutzerdefiniert'
    },
    resolution: 'Auflösung',
    width: 'Breite',
    height: 'Höhe',
    preserveAspect: 'Seitenverhältnis beibehalten',
    colorReduction: 'Farbreduktion',
    colors: 'Farbanzahl',
    dithering: 'Dithering',
    ditheringTypes: {
      none: 'Kein',
      floydSteinberg: 'Floyd-Steinberg',
      atkinson: 'Atkinson',
      ordered: 'Geordnet',
      bayer: 'Bayer'
    },
    palette: 'Farbpalette',
    palettes: {
      auto: 'Automatisch',
      grayscale: 'Graustufen',
      gameboy: 'Game Boy',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'Benutzerdefiniert',
      normal: 'Normal',
      retro: 'Retro',
      sepia: 'Sepia',
      bright: 'Hell',
      cool: 'Kalt',
      warm: 'Warm',
      bw: 'Schwarz-Weiß',
      invert: 'Invertiert'
    },
    customPalette: 'Benutzerdefinierte Palette',
    small: 'Klein (fein)',
    large: 'Groß (grob)',
    low: 'Niedrig (Retro)',
    high: 'Hoch (Echtfarben)',
  },

  effects: {
    title: 'Effekte',
    brightness: 'Helligkeit',
    contrast: 'Kontrast',
    saturation: 'Sättigung',
    hue: 'Farbton',
    outline: 'Kontur',
    outlineColor: 'Konturfarbe',
    noise: 'Rauschen',
    posterize: 'Posterisieren',
    invert: 'Farben invertieren',
    grayscale: 'Graustufen',
    sepia: 'Sepia',
    vignette: 'Vignettierung'
  },

  animation: {
    title: 'Animationseinstellungen',
    animated: 'Als Animation verarbeiten',
    frameRate: 'Bildrate',
    optimizeFrames: 'Bilder optimieren',
    looping: 'Wiederholung',
    loopCount: 'Wiederholungsanzahl'
  },

  output: {
    title: 'Ausgabe',
    preview: 'Vorschau',
    original: 'Original',
    pixelated: 'Pixeliert',
    comparison: 'Vergleich',
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    gridOverlay: 'Rasterüberlagerung',
    downloadAs: 'Herunterladen als',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: 'Sprite-Sheet',
    quality: 'Qualität',
    scale: 'Skalierung',
    loading: 'Lädt...',
    noImage: 'Bitte wählen Sie ein Bild aus',
    processing: 'Wird verarbeitet...'
  },

  presets: {
    title: 'Voreinstellungen',
    save: 'Aktuelle Einstellungen speichern',
    load: 'Voreinstellung laden',
    delete: 'Voreinstellung löschen',
    presetName: 'Voreinstellungsname',
    defaults: {
      lowRes: 'Niedrige Auflösung',
      highContrast: 'Hoher Kontrast',
      retro: 'Retro',
      minimal: 'Minimal',
      sketch: 'Skizze',
      blueprint: 'Blaupause'
    }
  },

  actions: {
    pixelate: 'Bild pixelieren',
    reset: 'Einstellungen zurücksetzen',
    applyChanges: 'Änderungen anwenden',
    undoChanges: 'Änderungen rückgängig machen',
    downloadImage: 'Bild herunterladen',
    selectImage: 'Bild auswählen'
  },

  messages: {
    processing: 'Bild wird verarbeitet...',
    success: 'Bild erfolgreich pixeliert',
    downloading: 'Download wird vorbereitet...',
    presetSaved: 'Voreinstellung gespeichert',
    presetLoaded: 'Voreinstellung geladen',
    presetDeleted: 'Voreinstellung gelöscht',
    error: 'Fehler: {error}',
    fileSize: 'Dateigröße',
    pixels: 'Pixel',
    imageSize: 'Bildgröße',
    downloadSuccess: 'Bild heruntergeladen',
    downloadFailed: 'Download fehlgeschlagen',
    resetSuccess: 'Zurückgesetzt',
    fileName: 'Dateiname'
  }
};