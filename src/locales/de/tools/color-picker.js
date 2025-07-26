export default {
  name: 'Farbwähler',
  description: 'Wählen, konvertieren und generieren Sie Farbpaletten mit erweiterten Farbwerkzeugen',

  options: {
    colorSpace: 'Farbraum',
    paletteType: 'Palettentyp',
    includeAlpha: 'Transparenz einbeziehen',
    colorNaming: 'Farbbenennung'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'Farbnamen'
  },

  palettes: {
    monochromatic: 'Monochrom',
    complementary: 'Komplementär',
    analogous: 'Analog',
    triadic: 'Triadisch',
    tetradic: 'Tetradisch',
    split: 'Gespalten komplementär'
  },

  actions: {
    pickColor: 'Farbe wählen',
    randomColor: 'Zufallsfarbe',
    generatePalette: 'Palette generieren',
    convert: 'Konvertieren',
    copyColor: 'Aktuelle Farbe kopieren',
    copyAll: 'Alle kopieren',
    save: 'Farbe speichern',
    reset: 'Zurücksetzen',
    clear: 'Leeren'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: 'Farbschemata',
    complementary: 'Komplementär',
    triadic: 'Triadisch',
    analogous: 'Analog',
    monochromatic: 'Monochrom',
    split: 'Gespalten komplementär',
    double: 'Doppelt komplementär',
    square: 'Quadratisch',
    compound: 'Zusammengesetzt'
  },

  colorAdjust: {
    title: 'Farbanpassung',
    hue: 'Farbton',
    saturation: 'Sättigung',
    lightness: 'Helligkeit',
    alpha: 'Transparenz'
  },

  colorInfo: {
    title: 'Farbinformation',
    name: 'Farbname',
    format: 'Format',
    contrast: 'Kontrast',
    accessibility: {
      title: 'Barrierefreiheit',
      pass: 'Erfüllt WCAG-Standard',
      fail: 'Erfüllt WCAG-Standard nicht',
      normal: 'Normaler Text',
      large: 'Großer Text'
    }
  },

  messages: {
    copied: 'Farbe in Zwischenablage kopiert',
    copyFailed: 'Farbe konnte nicht kopiert werden',
    invalidColor: 'Ungültiges Farbformat',
    contrastWarning: 'Geringer Kontrast',
    saved: 'Farbe gespeichert',
    contrast: 'Kontrast: {ratio}',
    accessibility: {
      AAA: 'Hervorragender Kontrast (AAA)',
      AA: 'Guter Kontrast (AA)',
      fail: 'Unzureichender Kontrast - nicht barrierefrei'
    },
    preview: 'Vorschau',
    colorValue: 'Farbwert',
  },

  history: {
    title: 'Farbverlauf',
    empty: 'Keine Farben im Verlauf',
    clear: 'Verlauf löschen'
  },

  colorPalette: {
    title: 'Farbpalette',
    addToPalette: 'Zur Palette hinzufügen',
    removeFromPalette: 'Aus Palette entfernen',
    exportPalette: 'Palette exportieren',
    importPalette: 'Palette importieren',
    clearPalette: 'Palette leeren'
  }
};