export default {
  name: 'Farbpaletten-Generator',
  description: 'Erstellt harmonische Farbschemata basierend auf Farbtheorien, um Designern die schnelle Erstellung abgestimmter Farbpaletten zu ermöglichen',

  baseColor: {
    title: 'Grundfarbe',
    picker: 'Farbwähler',
    hex: 'Hexadezimal',
    rgb: 'RGB',
    hsl: 'HSL',
    random: 'Zufällige Farbe',
    recent: 'Zuletzt verwendete Farben',
    hint: 'Klicken Sie auf Farbfeld oder Hex-Farbwert eingeben',
  },

  schemeTypes: {
    title: 'Farbtheorien',
    monochromatic: 'Monochrom',
    analogous: 'Analoge Farben',
    complementary: 'Komplementärfarben',
    splitComplementary: 'Gespalten komplementär',
    triadic: 'Triadisch',
    tetradic: 'Tetradisch',
    square: 'Quadratisch',
    compound: 'Zusammengesetzt',
    shades: 'Farbabstufungen',
    custom: 'Benutzerdefiniert',
  },

  options: {
    colorCount: 'Farbanzahl',
    saturationRange: 'Sättigungsbereich',
    brightnessRange: 'Helligkeitsbereich',
    includeBaseColor: 'Grundfarbe einbeziehen',
    lockBaseColor: 'Grundfarbe sperren',
    colorSpace: 'Farbraum',
    sortBy: 'Sortieren nach',
    colorBlindSafe: 'Farbenblind-sicher',
    contrastRatio: 'Mindestkontrast'
  },

  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },

  sortOptions: {
    hue: 'Farbton',
    saturation: 'Sättigung',
    brightness: 'Helligkeit',
    harmony: 'Harmoniegrad',
    none: 'Keine'
  },

  palettes: {
    title: 'Generierte Farbpaletten',
    save: 'Farbpalette speichern',
    copy: 'Farbpalette kopieren',
    export: 'Als CSS-Variablen exportieren',
    apply: 'Auf Vorschau anwenden'
  },

  exportFormats: {
    title: 'Exportformate',
    css: 'CSS-Variablen',
    scss: 'SCSS-Variablen',
    less: 'LESS-Variablen',
    json: 'JSON',
    svg: 'SVG-Farbpalette',
    ase: 'Adobe ASE',
    tailwind: 'Tailwind-Konfiguration',
    pdf: 'PDF'
  },

  preview: {
    title: 'Vorschau',
    website: 'Website',
    mobilApp: 'Mobile App',
    dashboard: 'Dashboard',
    card: 'Karte',
    poster: 'Poster',
    custom: 'Benutzerdefiniert',
    mainButton: 'Primärer Button',
    secondButton: 'Sekundärer Button',
    tag: 'Tag'
  },

  savedPalettes: {
    title: 'Gespeicherte Farbpaletten',
    load: 'Laden',
    delete: 'Löschen',
    rename: 'Umbenennen',
    noSavedPalettes: 'Keine gespeicherten Farbpaletten',
    saved: 'Farbpalette gespeichert',
    schemeNameEmpty: 'Farbpalettenname fehlt',
  },

  actions: {
    generate: 'Farbschema generieren',
    regenerate: 'Neu generieren',
    reset: 'Zurücksetzen',
    lockColor: 'Farbe sperren',
    unlockColor: 'Farbe entsperren',
    save: 'Farbpalette speichern',
  },

  messages: {
    paletteSaved: 'Farbpalette erfolgreich gespeichert',
    paletteDeleted: 'Farbpalette gelöscht',
    copied: 'In Zwischenablage kopiert',
    exported: 'Export erfolgreich',
    adjustmentParam: 'Anpassungsparameter',
    schemeName: 'Schema-Name',
    copyAllColors: 'Alle Farben kopiert',
  }
};