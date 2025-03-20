export default {
  name: 'Color Picker & Converter',
  description: 'Pick colors and convert between different color formats',
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
    clear: 'Clear'
  },
  messages: {
    copied: 'Copied to clipboard!',
    saved: 'Color saved',
    contrast: 'Contrast ratio: {ratio}',
    accessibility: {
      AAA: 'Excellent contrast (AAA)',
      AA: 'Good contrast (AA)',
      fail: 'Poor contrast - not accessible'
    }
  }
} 