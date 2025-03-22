export default {
  name: 'Hex Color Picker',
  description: 'Generate, convert and manipulate color codes in various formats',
  colorInput: {
    hex: 'Hex',
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },
  options: {
    format: 'Format',
    includeHashTag: 'Include # in Hex',
    uppercaseHex: 'Uppercase Hex',
    alpha: 'Alpha Channel',
    colorSpace: 'Color Space'
  },
  formats: {
    hex: 'Hex (#RRGGBB)',
    hexAlpha: 'Hex + Alpha (#RRGGBBAA)',
    rgb: 'RGB (0-255)',
    rgbPercent: 'RGB % (0-100%)',
    hsl: 'HSL (Hue, Saturation, Lightness)',
    hsv: 'HSV (Hue, Saturation, Value)',
    cmyk: 'CMYK (Cyan, Magenta, Yellow, Key)',
    hwb: 'HWB (Hue, Whiteness, Blackness)',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },
  features: {
    eyedropper: 'Color Eyedropper',
    randomColor: 'Random Color',
    complementary: 'Complementary',
    analogous: 'Analogous',
    triadic: 'Triadic',
    tetradic: 'Tetradic',
    monochromatic: 'Monochromatic',
    colorBlind: 'Color Blind Simulation',
    saveColor: 'Save Color',
    exportPalette: 'Export Palette'
  },
  palette: {
    title: 'Color Palette',
    primary: 'Primary',
    secondary: 'Secondary',
    accent: 'Accent',
    background: 'Background',
    text: 'Text',
    savedColors: 'Saved Colors',
    clearSaved: 'Clear Saved',
    export: 'Export',
    import: 'Import'
  },
  actions: {
    copy: 'Copy',
    copied: 'Copied!',
    adjust: 'Adjust',
    invert: 'Invert',
    lighten: 'Lighten',
    darken: 'Darken',
    saturate: 'Saturate',
    desaturate: 'Desaturate',
    rotate: 'Rotate Hue'
  },
  messages: {
    invalidColor: 'Invalid color format',
    colorCopied: 'Color copied to clipboard',
    paletteSaved: 'Palette saved',
    paletteExported: 'Palette exported',
    noSavedColors: 'No saved colors'
  }
} 