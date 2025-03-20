export default {
  name: 'Image Color Extractor',
  description: 'Extract color palette and dominant colors from images',
  input: {
    title: 'Upload Image',
    dropzone: 'Drop image here or click to upload',
    formats: 'Supported formats: JPG, PNG, GIF, WebP, SVG',
    browse: 'Browse Files',
    orText: 'or',
    pasteUrl: 'Paste image URL:',
    loadUrl: 'Load from URL',
    urlPlaceholder: 'https://example.com/image.jpg'
  },
  options: {
    title: 'Extraction Options',
    colorCount: 'Number of Colors',
    quality: 'Extraction Quality',
    colorModel: 'Color Model',
    colorSpace: 'Color Space',
    colorFormat: 'Color Format',
    sortBy: 'Sort Colors By',
    ignoreWhite: 'Ignore White Colors',
    ignoreBlack: 'Ignore Black Colors',
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
    hex: 'Hex (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA with Alpha',
    hsl: 'HSL',
    hsla: 'HSLA with Alpha',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },
  sortOptions: {
    prevalence: 'Prevalence',
    luminance: 'Luminance (Brightness)',
    hue: 'Hue (Color)',
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
    complementary: 'Complementary',
    palette: 'Color Palette',
    usage: 'Color Usage (%)',
    copyAll: 'Copy All Colors',
    downloading: 'Downloading palette...'
  },
  actions: {
    extract: 'Extract Colors',
    download: 'Download Palette',
    copy: 'Copy',
    copyValue: 'Copy Value',
    reset: 'Reset',
    exportJson: 'Export as JSON',
    exportCss: 'Export as CSS Variables',
    exportSass: 'Export as SASS Variables',
    exportSwatch: 'Export as ASE Swatch'
  },
  palette: {
    title: 'Named Palettes',
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
    invalidImage: 'Invalid image file',
    noImageSelected: 'No image selected'
  }
} 