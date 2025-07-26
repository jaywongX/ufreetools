export default {
  name: 'Image to ASCII',
  description: 'Convert images into customizable ASCII art text',

  upload: {
    title: 'Upload Image',
    dropzone: 'Drag and drop your image here or click to browse',
    maxSize: 'Maximum file size: 5MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF',
    pasteImage: 'Or paste an image from the clipboard'
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
      title: 'Statistics',
      characters: 'Number of Characters',
      lines: 'Number of Lines',
      colors: 'Number of Colors',
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
    blocky: 'Blocky Style',
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
    flipH: 'Flip Horizontally',
    flipV: 'Flip Vertically'
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
    applyChanges: 'Apply Changes',
    selectImage: 'Select Image',
    reset: 'Reset',
    processing: 'Processing...',
    generate: 'Generate ASCII',
    copy: 'Copy',
    download: 'Download'
  },

  messages: {
    converting: 'Converting image to ASCII...',
    conversionComplete: 'Conversion complete',
    conversionFailed: 'Image conversion failed: {error}',
    copied: 'ASCII copied to clipboard',
    downloadStarted: 'Download started',
    downloadComplete: 'ASCII downloaded',
    downloadFailed: 'Download failed',
    copyFailed: 'Copy failed',
    resetComplete: 'Settings have been reset',
    asciiGenerated: 'ASCII art has been generated',
    generationFailed: 'Failed to generate ASCII',
    presetSaved: 'Preset saved successfully',
    presetLoaded: 'Preset loaded',
    presetDeleted: 'Preset deleted',
    invalidImage: 'Invalid image format or corrupted file',
    imageTooBig: 'Image dimensions are too large to convert',
    selectOrLoad: 'Please select an image or load from a URL',
    asciiWillDisplay: 'The ASCII art will be displayed here',
    customCharsPlaceholder: 'Enter characters in order from darkest to lightest...',
    tip: 'Click the "Generate ASCII" button after adjusting settings to see the effect',
    drapPlaceHolder: 'Select or drag and drop an image here',
    noImage: 'Please select an image first',
    generateAscii: 'Click the "Generate ASCII" button to convert the image',
    tip2: 'Tip: Use the copy button to copy ASCII art to the clipboard, or use the download button to save it as a text file.'
  },

  charSets: {
    standard: 'Standard',
    simple: 'Simple',
    blocks: 'Blocks',
    custom: 'Custom'
  },

  settings: {
    title: 'ASCII Settings',
    customCharsetLabel: 'Custom Character Set (from darkest to lightest)',
    asciiWidth: 'ASCII Width',
    invert: 'Invert Colors',
    colored: 'Colored Output',
    fontSize: 'Font Size'
  },

  preview: {
    originalImage: 'Original Image',
    generatedAscii: 'Generated ASCII'
  }
};