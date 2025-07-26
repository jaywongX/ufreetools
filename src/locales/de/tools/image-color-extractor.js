export default {
  name: 'Bildfarben-Extraktor',
  description: 'Extrahiert Farbpaletten und Hauptfarben aus Bildern',

  input: {
    title: 'Bild hochladen',
    dropzone: 'Bild hierher ziehen und ablegen oder zum Hochladen klicken',
    formats: 'Unterstützte Formate: JPG, PNG, GIF, WebP, SVG',
    browse: 'Dateien durchsuchen',
    selectImage: 'Bild auswählen',
    orText: 'oder',
    pasteUrl: 'Bild-URL einfügen:',
    loadUrl: 'Von URL laden',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: 'Unbenanntes Bild'
  },

  options: {
    title: 'Extraktionsoptionen',
    extractSettings: 'Extraktionseinstellungen',
    colorCount: 'Anzahl der Farben',
    paletteSize: 'Palettengröße',
    paletteMin: 'Minimum (3)',
    paletteMax: 'Maximum (20)',
    colorSimilarity: 'Farbähnlichkeit',
    similiarityToggle: 'Ähnliche Farben zulassen',
    quality: 'Extraktionsqualität',
    colorModel: 'Farbmodell',
    colorSpace: 'Farbraum',
    colorFormat: 'Farbformat',
    sortBy: 'Farben sortieren nach',
    sortByPopularity: 'Nach Häufigkeit',
    sortByLuminance: 'Nach Helligkeit',
    sortByHue: 'Nach Farbton',
    sortBySaturation: 'Nach Sättigung',
    ignoreWhite: 'Weiß ignorieren',
    ignoreBlack: 'Schwarz ignorieren',
    threshold: 'Ähnlichkeitsschwelle'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: 'Hexadezimal (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA mit Transparenz',
    hsl: 'HSL',
    hsla: 'HSLA mit Transparenz',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: 'Häufigkeit',
    luminance: 'Helligkeit',
    hue: 'Farbton',
    saturation: 'Sättigung',
    original: 'Originalreihenfolge'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: 'Extrahierten Farben',
    colorsFound: '{count} Farben extrahiert',
    dominantColor: 'Dominante Farbe',
    mainColor: 'Hauptfarbe',
    complementary: 'Komplementärfarbe',
    palette: 'Farbpalette',
    colorPalette: 'Farbpalette',
    palettePreview: 'Palettenvorschau',
    usage: 'Farbverwendung (%)',
    percentage: 'Anteil: {value}%',
    copyAll: 'Alle Farben kopieren',
    clickToCopy: 'Klicken zum Kopieren: {color}',
    downloading: 'Palette wird heruntergeladen...'
  },

  display: {
    originalImage: 'Originalbild',
    colorPalette: 'Farbpalette',
    uploadFirst: 'Bitte laden Sie zuerst ein Bild hoch',
    clickExtract: 'Klicken Sie auf "Farben extrahieren", um die Palette des Bildes zu erhalten',
  },

  actions: {
    extract: 'Farben extrahieren',
    extracting: 'Wird verarbeitet...',
    download: 'Palette herunterladen',
    copy: 'Kopieren',
    copyValue: 'Wert kopieren',
    reset: 'Zurücksetzen',
    copyPalette: 'Palette kopieren',
    exportJson: 'Als JSON exportieren',
    exportCss: 'Als CSS-Variablen exportieren',
    exportSass: 'Als SASS-Variablen exportieren',
    exportSwatch: 'Als ASE-Farbfeld exportieren'
  },

  palette: {
    title: 'Benannte Paletten',
    vibrant: 'Lebhaft',
    muted: 'Gedämpft',
    dark: 'Dunkel',
    light: 'Hell',
    custom: 'Benutzerdefiniert'
  },

  messages: {
    imageLoaded: 'Bild erfolgreich geladen',
    processingImage: 'Bild wird verarbeitet...',
    extractionComplete: 'Farbextraktion abgeschlossen',
    extractionFailed: 'Farbextraktion fehlgeschlagen: {error}',
    copied: 'In Zwischenablage kopiert',
    copiedColor: 'Kopiert: {color}',
    copiedAll: 'Alle Farben kopiert',
    copyFailed: 'Kopieren fehlgeschlagen',
    resetDone: 'Zurückgesetzt',
    invalidImage: 'Ungültige Bilddatei',
    noImageSelected: 'Kein Bild ausgewählt'
  }
};