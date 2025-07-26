export default {
  name: 'Color Picker',
  description: 'Pick, convert and generate color schemes with advanced color tools',

  options: {
    colorSpace: 'Color Space',
    paletteType: 'Palette Type',
    includeAlpha: 'Include Alpha',
    colorNaming: 'Color Naming'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'Named Colors'
  },

  palettes: {
    monochromatic: 'Monochromatic',
    complementary: 'Complementary',
    analogous: 'Analogous',
    triadic: 'Triadic',
    tetradic: 'Tetradic',
    split: 'Split Complementary'
  },

  actions: {
    pickColor: 'Pick Color',
    randomColor: 'Random Color',
    generatePalette: 'Generate Palette',
    convert: 'Convert',
    copy: 'Copy',
    copyAll: 'Copy All',
    save: 'Save Color',
    clear: 'Clear',
    copyColor: 'Copy Current Color',
    reset: 'Reset'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: 'Color Schemes',
    complementary: 'Complementary',
    triadic: 'Triadic',
    analogous: 'Analogous',
    monochromatic: 'Monochromatic',
    split: 'Split Complementary',
    double: 'Double Complementary',
    square: 'Square',
    compound: 'Compound'
  },

  colorAdjust: {
    title: 'Color Adjustment',
    hue: 'Hue',
    saturation: 'Saturation',
    lightness: 'Lightness',
    alpha: 'Alpha'
  },

  colorInfo: {
    title: 'Color Information',
    name: 'Color Name',
    format: 'Format',
    contrast: 'Contrast Ratio',
    accessibility: {
      title: 'Accessibility',
      pass: 'Passes WCAG',
      fail: 'Fails WCAG',
      normal: 'Normal Text',
      large: 'Large Text'
    }
  },

  messages: {
    copied: 'Color copied to clipboard',
    copyFailed: 'Failed to copy color',
    invalidColor: 'Invalid color format',
    contrastWarning: 'Poor contrast ratio',
    saved: 'Color saved',
    contrast: 'Contrast ratio: {ratio}',
    accessibility: {
      AAA: 'Excellent contrast (AAA)',
      AA: 'Good contrast (AA)',
      fail: 'Poor contrast - not accessible'
    },
    preview: 'Preview',
    colorValue: 'Color',
  },

  history: {
    title: 'Color History',
    empty: 'No colors in history',
    clear: 'Clear History'
  },

  colorPalette: {
    title: 'Color Palette',
    addToPalette: 'Add to Palette',
    removeFromPalette: 'Remove from Palette',
    exportPalette: 'Export Palette',
    importPalette: 'Import Palette',
    clearPalette: 'Clear Palette'
  }
}; 