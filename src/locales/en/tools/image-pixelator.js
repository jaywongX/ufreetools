export default {
  name: 'Image Pixelator',
  description: 'Convert images into pixel art with customizable resolution and effects',
  upload: {
    title: 'Upload Image',
    dropzone: 'Drop image here or click to browse',
    maxSize: 'Maximum file size: 10MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF'
  },
  settings: {
    title: 'Pixelation Settings',
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
    colors: 'Colors',
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
      gameboy: 'Gameboy',
      nes: 'NES',
      cpc: 'CPC',
      c64: 'C64',
      custom: 'Custom'
    },
    customPalette: 'Custom Palette Colors'
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
    scale: 'Scale'
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
    pixelate: 'Pixelate Image',
    reset: 'Reset Settings',
    applyChanges: 'Apply Changes',
    undoChanges: 'Undo Changes',
    downloadImage: 'Download Image'
  },
  messages: {
    processing: 'Processing image...',
    success: 'Image pixelated successfully',
    downloading: 'Preparing download...',
    presetSaved: 'Preset saved successfully',
    presetLoaded: 'Preset loaded',
    presetDeleted: 'Preset deleted',
    error: 'Error: {error}'
  }
} 