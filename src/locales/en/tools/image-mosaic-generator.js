export default {
  name: 'Image Mosaic Generator',
  description: 'Create mosaic art by combining small images into a larger picture',

  upload: {
    title: 'Upload Main Image',
    dropzone: 'Drag and drop your main image here or click to browse',
    maxSize: 'Maximum file size: 15MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP'
  },

  tiles: {
    title: 'Tile Images',
    uploadTiles: 'Upload Tile Images',
    dropzoneTiles: 'Drag and drop tile images here or click to browse',
    maxTiles: 'Up to {count} images',
    useFolder: 'Upload an image folder',
    orUseSample: 'Or use sample galleries',
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
    small: 'Small (Detailed)',
    medium: 'Medium',
    large: 'Large (Coarse)',
    square: 'Square',
    circle: 'Circle',
    applicationMode: 'Mosaic Application Mode',
    all: 'Entire Image',
    selectRegion: 'Select Region',
    selectingRegion: 'Selecting region...',
    autoDetectFaces: 'Auto-detect Faces',
    detectFaces: 'Detect Faces',
    detectFacesDescription: 'Detect faces in the image and automatically apply mosaics to them',
    edgeSmoothing: 'Edge Smoothing',
    edgeSmoothingDescription: 'Smooth edges of mosaic tiles for more natural transitions',
    custom: 'Custom',
    width: 'Width',
    height: 'Height',
    tilesWide: 'Number of Tiles Wide',
    tilesHigh: 'Number of Tiles High',
    colorMatch: 'Color Matching',
    intensity: 'Intensity',
    low: 'Low',
    high: 'High',
    reuseTiles: 'Reuse Tiles',
    allowDuplicates: 'Allow Duplicates',
    maxUses: 'Max Uses Per Tile',
    colorAdjustment: 'Color Adjustment',
    adjustTiles: 'Adjust tile colors to match',
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
    fileName: 'File Name',
    title: 'Output',
    preview: 'Preview',
    original: 'Original',
    mosaic: 'Mosaic',
    sideBySide: 'Side-by-Side',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    download: 'Download Mosaic',
    asJpg: 'Download as JPG',
    asPng: 'Download as PNG',
    highRes: 'High Resolution',
    resolution: 'Output Resolution',
    format: 'Format',
    quality: 'Quality',
    size: 'Size',
    pixel: 'Pixels',
    pleaseSelectImage: 'Please select an image',
    pleaseSelectImageAndAdjustSettings: 'Please select an image and adjust settings'
  },

  actions: {
    generate: 'Generate Mosaic',
    regenerate: 'Regenerate',
    cancel: 'Cancel Generation',
    reset: 'Reset',
    detectFaces: 'Detect Faces',
    saveSettings: 'Save Settings',
    loadSettings: 'Load Settings'
  },

  messages: {
    generating: 'Generating mosaic... This may take some time.',
    generationComplete: 'Mosaic generation successful!',
    notEnoughTiles: 'Not enough tile images. Please upload more images.',
    tileProcessing: 'Processing tile images: {progress}%',
    downloadStarted: 'Download started',
    settingsSaved: 'Settings saved',
    selecting: 'Selecting region...',
    preview: 'The result after applying the mosaic will be displayed here',
    faceDetected: 'Face regions detected',
    faceDetectionFailed: 'Face detection failed',
    reset: 'Settings have been reset',
    error: 'Error: {message}'
  }
};