export default {
  name: 'Image Batch Resizer',
  description: 'Resize, convert, and optimize multiple images at once',
  input: {
    title: 'Input Images',
    dropzone: 'Drop images here or click to browse',
    addMore: 'Add More Images',
    clearAll: 'Clear All',
    maxFiles: 'Maximum {count} images',
    maxSize: 'Maximum size: {size}MB per image',
    supportedFormats: 'Supported formats: {formats}'
  },
  options: {
    title: 'Resize Options',
    resizeMode: 'Resize Mode',
    outputFormat: 'Output Format',
    quality: 'Quality',
    width: 'Width',
    height: 'Height',
    maintainAspectRatio: 'Maintain Aspect Ratio',
    maxWidth: 'Maximum Width',
    maxHeight: 'Maximum Height',
    percentage: 'Percentage',
    backgroundColor: 'Background Color',
    naming: 'Output Naming',
    filenamePrefix: 'Filename Prefix',
    filenameSuffix: 'Filename Suffix',
    applyToAll: 'Apply to All Images'
  },
  resizeModes: {
    exact: 'Exact Dimensions',
    maxDimensions: 'Maximum Dimensions',
    percentage: 'Percentage Scale',
    fit: 'Fit Within',
    cover: 'Cover',
    crop: 'Crop'
  },
  formats: {
    original: 'Same as Source',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },
  namingOptions: {
    original: 'Original Filename',
    dimensions: 'Original + Dimensions',
    format: 'Original + Format',
    custom: 'Custom Pattern',
    random: 'Random String'
  },
  output: {
    title: 'Resized Images',
    downloadAll: 'Download All',
    downloadAsZip: 'Download as ZIP',
    processingStatus: 'Processing: {processed}/{total}',
    originalSize: 'Original Size',
    newSize: 'New Size',
    reduction: 'Reduction',
    individualDownload: 'Download'
  },
  batch: {
    title: 'Batch Processing',
    process: 'Process All Images',
    cancel: 'Cancel Processing',
    selectPreset: 'Select Preset',
    savePreset: 'Save Current Settings',
    progress: 'Processing Progress'
  },
  watermark: {
    title: 'Watermark',
    enable: 'Add Watermark',
    text: 'Watermark Text',
    image: 'Watermark Image',
    position: 'Position',
    opacity: 'Opacity',
    rotation: 'Rotation',
    size: 'Size',
    padding: 'Padding'
  },
  positions: {
    topLeft: 'Top Left',
    topCenter: 'Top Center',
    topRight: 'Top Right',
    middleLeft: 'Middle Left',
    middleCenter: 'Middle Center',
    middleRight: 'Middle Right',
    bottomLeft: 'Bottom Left',
    bottomCenter: 'Bottom Center',
    bottomRight: 'Bottom Right'
  },
  actions: {
    resize: 'Resize',
    preview: 'Preview',
    applySettings: 'Apply Settings',
    resetSettings: 'Reset Settings',
    cancel: 'Cancel'
  },
  messages: {
    resizeSuccess: 'Images resized successfully',
    resizeFailed: 'Failed to resize images: {error}',
    invalidDimensions: 'Please enter valid dimensions',
    noImages: 'Please add images to resize',
    processing: 'Processing images...',
    downloadStarted: 'Download started',
    allDownloaded: 'All images downloaded',
    presetSaved: 'Preset saved',
    presetLoaded: 'Preset loaded'
  }
} 