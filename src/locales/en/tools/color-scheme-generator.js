export default {
  name: 'Color Scheme Generator',
  description: 'Create harmonious color schemes for your design projects',
  baseColor: {
    title: 'Base Color',
    picker: 'Color Picker',
    hex: 'Hex',
    rgb: 'RGB',
    hsl: 'HSL',
    random: 'Random Color',
    recent: 'Recent Colors'
  },
  schemeTypes: {
    title: 'Scheme Type',
    monochromatic: 'Monochromatic',
    analogous: 'Analogous',
    complementary: 'Complementary',
    splitComplementary: 'Split Complementary',
    triadic: 'Triadic',
    tetradic: 'Tetradic',
    square: 'Square',
    compound: 'Compound',
    shades: 'Shades',
    custom: 'Custom'
  },
  options: {
    colorCount: 'Number of Colors',
    saturationRange: 'Saturation Range',
    brightnessRange: 'Brightness Range',
    includeBaseColor: 'Include Base Color',
    lockBaseColor: 'Lock Base Color',
    colorSpace: 'Color Space',
    sortBy: 'Sort By',
    colorBlindSafe: 'Color Blind Safe',
    contrastRatio: 'Minimum Contrast Ratio'
  },
  colorSpaces: {
    rgb: 'RGB',
    hsl: 'HSL',
    lab: 'LAB',
    hsv: 'HSV',
    cmyk: 'CMYK'
  },
  sortOptions: {
    hue: 'Hue',
    saturation: 'Saturation',
    brightness: 'Brightness',
    harmony: 'Harmony',
    none: 'None'
  },
  palettes: {
    title: 'Generated Palette',
    save: 'Save Palette',
    copy: 'Copy Palette',
    export: 'Export',
    apply: 'Apply to Preview'
  },
  exportFormats: {
    title: 'Export Format',
    css: 'CSS Variables',
    scss: 'SCSS Variables',
    less: 'LESS Variables',
    json: 'JSON',
    svg: 'SVG Swatches',
    ase: 'Adobe ASE',
    tailwind: 'Tailwind Config',
    pdf: 'PDF'
  },
  preview: {
    title: 'Preview',
    website: 'Website',
    mobilApp: 'Mobile App',
    dashboard: 'Dashboard',
    card: 'Card',
    poster: 'Poster',
    custom: 'Custom'
  },
  savedPalettes: {
    title: 'Saved Palettes',
    load: 'Load',
    delete: 'Delete',
    rename: 'Rename',
    noSavedPalettes: 'No saved palettes'
  },
  actions: {
    generate: 'Generate Scheme',
    regenerate: 'Regenerate',
    reset: 'Reset',
    lockColor: 'Lock Color',
    unlockColor: 'Unlock Color'
  },
  messages: {
    paletteSaved: 'Palette saved successfully',
    paletteDeleted: 'Palette deleted',
    copied: 'Copied to clipboard',
    exported: 'Exported successfully'
  }
} 