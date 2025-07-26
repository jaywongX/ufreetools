export default {
  name: 'Image Pixelizer',
  description: 'Convert images into pixel art with customizable resolution and effects',

  upload: {
    title: 'Upload Image',
    dropzone: 'Drag and drop your image here or click to browse',
    maxSize: 'Maximum file size: 10MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Pixelization Settings',
    pixelSize: 'Pixel Size',
    pixelShape: 'Pixel Shape',
    shapes: {
      square: 'Square',
      rounded: 'Rounded',
      circle: 'Circle',
      diamond: 'Diamond',
      custom: 'Custom'
    },
    resolution: 'Resolution',
    width: 'Width',
    height: 'Height',
    preserveAspect: 'Preserve Aspect Ratio',
    colorReduction: 'Color Reduction',
    colors: 'Number of Colors',
    dithering: 'Dithering',
    ditheringTypes: {
      none: 'None',
      floydSteinberg: 'Floyd-Steinberg',
      atkinson: 'Atkinson',
      ordered: 'Ordered',
      bayer: 'Bayer'
    },
    palette: 'Color Palette',
    palettes: {
      auto: 'Auto',
      grayscale: 'Grayscale',
      gameboy: 'Game Boy',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'Custom',
      normal: 'Normal',
      retro: 'Retro',
      sepia: 'Sepia',
      bright: 'Bright',
      cool: 'Cool',
      warm: 'Warm',
      bw: 'Black & White',
      invert: 'Inverted'
    },
    customPalette: 'Custom Palette Colors',
    small: 'Small (Fine)',
    large: 'Large (Coarse)',
    low: 'Low (Retro)',
    high: 'High (True Color)'
  },

  effects: {
    title: 'Effects',
    brightness: 'Brightness',
    contrast: 'Contrast',
    saturation: 'Saturation',
    hue: 'Hue',
    outline: 'Outline',
    outlineColor: 'Outline Color',
    noise: 'Noise',
    posterize: 'Posterize',
    invert: 'Invert Colors',
    grayscale: 'Grayscale',
    sepia: 'Sepia',
    vignette: 'Vignette'
  },

  animation: {
    title: 'Animation Settings',
    animated: 'Process as Animation',
    frameRate: 'Frame Rate',
    optimizeFrames: 'Optimize Frames',
    looping: 'Looping',
    loopCount: 'Loop Count'
  },

  output: {
    title: 'Output',
    preview: 'Preview',
    original: 'Original',
    pixelated: 'Pixelated',
    comparison: 'Comparison',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    gridOverlay: 'Grid Overlay',
    downloadAs: 'Download As',
    png: 'PNG',
    jpg: 'JPG',
    gif: 'GIF',
    webp: 'WebP',
    spritesheet: 'Spritesheet',
    quality: 'Quality',
    scale: 'Scale',
    loading: 'Loading...',
    noImage: 'Please select an image',
    processing: 'Processing...'
  },

  presets: {
    title: 'Presets',
    save: 'Save Current Settings',
    load: 'Load Preset',
    delete: 'Delete Preset',
    presetName: 'Preset Name',
    defaults: {
      lowRes: 'Low Resolution',
      highContrast: 'High Contrast',
      retro: 'Retro',
      minimal: 'Minimal',
      sketch: 'Sketch',
      blueprint: 'Blueprint'
    }
  },

  actions: {
    pixelate: 'Pixelize Image',
    reset: 'Reset Settings',
    applyChanges: 'Apply Changes',
    undoChanges: 'Undo Changes',
    downloadImage: 'Download Image',
    selectImage: 'Select Image'
  },

  messages: {
    processing: 'Processing the image...',
    success: 'Image pixelization successful',
    downloading: 'Preparing for download...',
    presetSaved: 'Preset saved successfully',
    presetLoaded: 'Preset loaded',
    presetDeleted: 'Preset deleted',
    error: 'Error: {error}',
    fileSize: 'File Size',
    pixels: 'Pixels',
    imageSize: 'Image Dimensions',
    downloadSuccess: 'Image downloaded successfully',
    downloadFailed: 'Download failed',
    resetSuccess: 'Settings have been reset',
    fileName: 'File Name'
  }
};