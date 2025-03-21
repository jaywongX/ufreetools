export default {
  name: 'Image Mosaic Generator',
  description: 'Create mosaic art by combining small images into a larger picture',
  upload: {
    title: 'Upload Main Image',
    dropzone: 'Drop your main image here or click to browse',
    maxSize: 'Maximum file size: 15MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP'
  },
  tiles: {
    title: 'Tile Images',
    uploadTiles: 'Upload Tile Images',
    dropzoneTiles: 'Drop tile images here or click to browse',
    maxTiles: 'Maximum {count} images',
    useFolder: 'Upload Folder of Images',
    orUseSample: 'Or use sample image library',
    sampleSets: 'Sample Tile Sets',
    nature: 'Nature',
    people: 'People',
    art: 'Art',
    abstract: 'Abstract',
    animals: 'Animals',
    clearAll: 'Clear All Tiles'
  },
  settings: {
    title: 'Mosaic Settings',
    tileSize: 'Tile Size',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    custom: 'Custom',
    width: 'Width',
    height: 'Height',
    tilesWide: 'Tiles Wide',
    tilesHigh: 'Tiles High',
    colorMatch: 'Color Matching',
    intensity: 'Intensity',
    low: 'Low',
    high: 'High',
    reuseTiles: 'Reuse Tiles',
    allowDuplicates: 'Allow Duplicates',
    maxUses: 'Max Uses Per Tile',
    colorAdjustment: 'Color Adjustment',
    adjustTiles: 'Adjust Tile Colors to Match',
    blendOriginal: 'Blend with Original',
    blendAmount: 'Blend Amount',
    random: 'Random Variation',
    shuffle: 'Shuffle Tiles'
  },
  advanced: {
    title: 'Advanced Options',
    algorithm: 'Matching Algorithm',
    algorithms: {
      average: 'Average Color',
      dominant: 'Dominant Color',
      histogram: 'Color Histogram',
      pattern: 'Pattern Matching'
    },
    tileShape: 'Tile Shape',
    shapes: {
      square: 'Square',
      circle: 'Circle',
      hexagon: 'Hexagon',
      triangle: 'Triangle',
      random: 'Random'
    },
    tileGap: 'Tile Gap',
    borderColor: 'Border Color',
    backgroundColor: 'Background Color'
  },
  output: {
    title: 'Output',
    preview: 'Preview',
    original: 'Original',
    mosaic: 'Mosaic',
    sideBySide: 'Side by Side',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    download: 'Download Mosaic',
    asJpg: 'As JPG',
    asPng: 'As PNG',
    highRes: 'High Resolution',
    resolution: 'Output Resolution',
    format: 'Format',
    quality: 'Quality'
  },
  actions: {
    generate: 'Generate Mosaic',
    regenerate: 'Regenerate',
    cancel: 'Cancel Generation',
    reset: 'Reset All',
    saveSettings: 'Save Settings',
    loadSettings: 'Load Settings'
  },
  messages: {
    generating: 'Generating mosaic... This may take a while.',
    generationComplete: 'Mosaic generated successfully!',
    notEnoughTiles: 'Not enough tile images. Please upload more images.',
    tileProcessing: 'Processing tile images: {progress}%',
    downloadStarted: 'Download started',
    settingsSaved: 'Settings saved',
    error: 'Error: {message}'
  }
} 