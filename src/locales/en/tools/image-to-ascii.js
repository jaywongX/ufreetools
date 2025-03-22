export default {
  name: 'Image to ASCII',
  description: 'Convert images to ASCII art text with customizable options',
  upload: {
    title: 'Upload Image',
    dropzone: 'Drop an image here or click to browse',
    maxSize: 'Maximum file size: 5MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF',
    pasteImage: 'Or paste image from clipboard'
  },
  options: {
    title: 'Conversion Options',
    width: 'Output Width',
    height: 'Output Height',
    preserveAspect: 'Preserve Aspect Ratio',
    colored: 'Colored Output',
    charSet: 'Character Set',
    charSets: {
      standard: 'Standard',
      simple: 'Simple',
      complex: 'Complex',
      blocks: 'Block Characters',
      custom: 'Custom'
    },
    customChars: 'Custom Characters',
    invert: 'Invert Colors',
    threshold: 'Brightness Threshold',
    brightness: 'Brightness',
    contrast: 'Contrast',
    fontFamily: 'Font Family',
    fontSize: 'Font Size',
    lineHeight: 'Line Height',
    backgroundColor: 'Background Color',
    textColor: 'Text Color'
  },
  output: {
    title: 'ASCII Output',
    preview: 'Preview',
    raw: 'Raw ASCII',
    html: 'HTML',
    copyToClipboard: 'Copy to Clipboard',
    downloadTxt: 'Download as TXT',
    downloadHtml: 'Download as HTML',
    downloadImage: 'Download as Image',
    stats: {
      title: 'Stats',
      characters: 'Characters',
      lines: 'Lines',
      colors: 'Colors',
      size: 'Text Size'
    }
  },
  presets: {
    title: 'Presets',
    save: 'Save Current Settings',
    load: 'Load Preset',
    delete: 'Delete Preset',
    presetName: 'Preset Name',
    default: 'Default',
    detailed: 'Detailed',
    minimalist: 'Minimalist',
    blocky: 'Blocky',
    small: 'Small',
    inverted: 'Inverted'
  },
  adjustment: {
    title: 'Image Adjustment',
    grayscale: 'Grayscale',
    negative: 'Negative',
    resize: 'Resize Before Conversion',
    crop: 'Crop Image',
    rotate: 'Rotate',
    flipH: 'Flip Horizontal',
    flipV: 'Flip Vertical'
  },
  animation: {
    title: 'Animation',
    animated: 'Process as Animation',
    frameDelay: 'Frame Delay',
    loop: 'Loop Animation',
    loopCount: 'Loop Count',
    extractFrame: 'Extract Current Frame'
  },
  actions: {
    convert: 'Convert to ASCII',
    resetOptions: 'Reset Options',
    refreshPreview: 'Refresh Preview',
    loadImage: 'Load New Image',
    applyChanges: 'Apply Changes'
  },
  messages: {
    converting: 'Converting image to ASCII...',
    conversionComplete: 'Conversion complete',
    conversionFailed: 'Failed to convert image: {error}',
    copied: 'ASCII copied to clipboard',
    downloadStarted: 'Download started',
    presetSaved: 'Preset saved',
    presetLoaded: 'Preset loaded',
    presetDeleted: 'Preset deleted',
    invalidImage: 'Invalid image format or corrupted file',
    imageTooBig: 'Image dimensions are too large for conversion'
  }
} 