export default {
  name: 'Image Watermark',
  description: 'Add text or image watermarks to your photos with customizable settings',
  upload: {
    title: 'Upload Images',
    dropzone: 'Drop images here or click to browse',
    addMore: 'Add More Images',
    clearAll: 'Clear All',
    maxFiles: 'Maximum {count} images',
    maxSize: 'Maximum size: {size}MB per image',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF'
  },
  watermarkType: {
    title: 'Watermark Type',
    text: 'Text Watermark',
    image: 'Image Watermark',
    both: 'Text & Image'
  },
  textWatermark: {
    title: 'Text Watermark',
    text: 'Watermark Text',
    font: 'Font',
    size: 'Size',
    color: 'Color',
    opacity: 'Opacity',
    rotation: 'Rotation',
    shadow: 'Text Shadow',
    background: 'Text Background',
    padding: 'Padding',
    border: 'Border',
    spacing: 'Letter Spacing'
  },
  imageWatermark: {
    title: 'Image Watermark',
    upload: 'Upload Watermark Image',
    selectLogo: 'Select Logo',
    presetLogos: 'Preset Logos',
    size: 'Size',
    opacity: 'Opacity',
    rotation: 'Rotation',
    offset: 'Offset'
  },
  positioning: {
    title: 'Positioning',
    position: 'Position',
    custom: 'Custom Position',
    xPosition: 'X Position',
    yPosition: 'Y Position',
    tiled: 'Tiled Pattern',
    margin: 'Margin',
    scale: 'Scale with Image'
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
    bottomRight: 'Bottom Right',
    custom: 'Custom Position'
  },
  output: {
    title: 'Output',
    quality: 'Output Quality',
    format: 'Output Format',
    original: 'Same as Original',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'Preview',
    downloadIndividual: 'Download',
    downloadAll: 'Download All',
    downloadAsZip: 'Download as ZIP'
  },
  presets: {
    title: 'Presets',
    save: 'Save Current Settings',
    load: 'Load Preset',
    delete: 'Delete Preset',
    presetName: 'Preset Name'
  },
  actions: {
    apply: 'Apply Watermark',
    applyToAll: 'Apply to All',
    reset: 'Reset',
    preview: 'Preview',
    undo: 'Undo',
    cancel: 'Cancel Processing'
  },
  messages: {
    processing: 'Processing images...',
    success: 'Watermark applied successfully',
    error: 'Error applying watermark: {error}',
    noImages: 'Please add images first',
    noWatermark: 'Please add text or image watermark',
    presetSaved: 'Preset saved successfully',
    presetLoaded: 'Preset loaded successfully',
    presetDeleted: 'Preset deleted'
  }
} 