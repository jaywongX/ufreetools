export default {
  name: 'Image Color Extractor',
  description: 'Extract color palettes and dominant colors from images',

  input: {
    title: 'Upload Image',
    dropzone: 'Drop image here or click to upload',
    formats: 'Supported formats: JPG, PNG, GIF, WebP, SVG',
    browse: 'Browse Files',
    selectImage: 'Select Image',
    orText: 'or',
    pasteUrl: 'Paste image URL:',
    loadUrl: 'Load from URL',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: 'Unnamed Image'
  },

  options: {
    title: 'Extraction Options',
    extractSettings: 'Extraction Settings',
    colorCount: 'Number of Colors',
    paletteSize: 'Palette Size',
    paletteMin: 'Minimum (3)',
    paletteMax: 'Maximum (20)',
    colorSimilarity: 'Color Similarity',
    similiarityToggle: 'Allow similar colors',
    quality: 'Extraction Quality',
    colorModel: 'Color Model',
    colorSpace: 'Color Space',
    colorFormat: 'Color Format',
    sortBy: 'Sort Colors By',
    sortByPopularity: 'By Frequency of Appearance',
    sortByLuminance: 'By Luminance',
    sortByHue: 'By Hue',
    sortBySaturation: 'By Saturation',
    ignoreWhite: 'Ignore White',
    ignoreBlack: 'Ignore Black',
    threshold: 'Similarity Threshold'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: 'Hexadecimal (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA with Transparency',
    hsl: 'HSL',
    hsla: 'HSLA with Transparency',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: 'Frequency of Appearance',
    luminance: 'Luminance',
    hue: 'Hue',
    saturation: 'Saturation',
    original: 'Original Order'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: 'Extracted Colors',
    colorsFound: '{count} colors extracted',
    dominantColor: 'Dominant Color',
    mainColor: 'Main Color',
    complementary: 'Complementary Color',
    palette: 'Color Palette',
    colorPalette: 'Color Palette',
    palettePreview: 'Palette Preview',
    usage: 'Color Usage (%)',
    percentage: 'Percentage: {value}%',
    copyAll: 'Copy All Colors',
    clickToCopy: 'Click to copy color: {color}',
    downloading: 'Downloading palette...'
  },

  display: {
    originalImage: 'Original Image',
    colorPalette: 'Color Palette',
    uploadFirst: 'Please upload an image first',
    clickExtract: 'Click the \"Extract Colors\" button to get the image\'s color palette'
  },

  actions: {
    extract: 'Extract Colors',
    extracting: 'Processing...',
    download: 'Download Palette',
    copy: 'Copy',
    copyValue: 'Copy Value',
    reset: 'Reset',
    copyPalette: 'Copy Palette',
    exportJson: 'Export as JSON',
    exportCss: 'Export as CSS Variables',
    exportSass: 'Export as SASS Variables',
    exportSwatch: 'Export as ASE Swatch'
  },

  palette: {
    title: 'Named Palette',
    vibrant: 'Vibrant',
    muted: 'Muted',
    dark: 'Dark',
    light: 'Light',
    custom: 'Custom'
  },

  messages: {
    imageLoaded: 'Image loaded successfully',
    processingImage: 'Processing image...',
    extractionComplete: 'Color extraction complete',
    extractionFailed: 'Color extraction failed: {error}',
    copied: 'Copied to clipboard',
    copiedColor: 'Copied: {color}',
    copiedAll: 'All colors copied',
    copyFailed: 'Copy failed',
    resetDone: 'Reset complete',
    invalidImage: 'Invalid image file',
    noImageSelected: 'No image selected'
  }
};