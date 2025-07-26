export default {
  name: 'Bulk Image Resizer',
  description: 'Adjust, convert, and optimize multiple images at once',

  input: {
    title: 'Input Images',
    dropzone: 'Drop images here or click to browse',
    addMore: 'Add more images',
    selectImages: 'Select Images',
    clearAll: 'Clear All',
    maxFiles: 'Up to {count} images',
    maxSize: 'Maximum size per image: {size}MB',
    supportedFormats: 'Supported formats: {formats}'
  },

  options: {
    title: 'Resize Options',
    settingsTitle: 'Adjustment Settings',
    resizeMode: 'Resize Mode',
    resizeMethod: 'Resize Method',
    pixelMode: 'Pixel',
    percentageMode: 'Percentage',
    maxDimensionMode: 'Max Dimensions',
    outputFormat: 'Output Format',
    quality: 'Quality',
    width: 'Width',
    height: 'Height',
    maintainAspectRatio: 'Maintain Aspect Ratio',
    maxWidth: 'Max Width',
    maxHeight: 'Max Height',
    percentage: 'Percentage',
    backgroundColor: 'Background Color',
    naming: 'Output Naming',
    filenamePrefix: 'Filename Prefix',
    filenameSuffix: 'Filename Suffix',
    applyToAllImages: 'Apply to all images',
    applyToAll: 'Apply to all images'
  },

  resizeModes: {
    exact: 'Exact Dimensions',
    maxDimensions: 'Max Dimensions',
    percentage: 'Percentage Scaling',
    fit: 'Fit Inside',
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
    middleCenter: 'Center',
    middleRight: 'Middle Right',
    bottomLeft: 'Bottom Left',
    bottomCenter: 'Bottom Center',
    bottomRight: 'Bottom Right'
  },

  actions: {
    resize: 'Resize',
    preview: 'Preview',
    processing: 'Processing...',
    reset: 'Reset',
    applySettings: 'Apply Settings',
    resetSettings: 'Reset Settings',
    cancel: 'Cancel'
  },

  messages: {
    resizeSuccess: 'Image resizing successful',
    resizeFailed: 'Image resizing failed: {error}',
    invalidDimensions: 'Please enter valid dimensions',
    invalidWidthHeight: 'Please enter valid width and height',
    noImages: 'Please add images to resize',
    noImagesToDownload: 'No images available to download',
    processing: 'Processing images...',
    processingComplete: 'Processing complete',
    processingError: 'An error occurred while processing images',
    waitingForProcess: 'Waiting for processing',
    downloadStarted: 'Download started',
    allDownloaded: 'All images have been downloaded',
    presetSaved: 'Preset saved',
    presetLoaded: 'Preset loaded',
    zipCreated: 'A zip file containing {count} images has been created',
    zipError: 'An error occurred while creating the zip file'
  },

  preview: {
    title: 'Image Preview ({count} images)',
    selectImage: 'Select an image',
    batchSupport: 'Supports batch selection of multiple images for one-time processing',
    download: 'Download',
    delete: 'Delete'
  },

  qualityOptions: {
    fast: 'Fast Processing',
    medium: 'Medium Quality',
    high: 'High Quality (Recommended)',
    best: 'Best Quality (Slower)'
  }
};