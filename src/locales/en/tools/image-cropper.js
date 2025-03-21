export default {
  name: 'Image Cropper',
  description: 'Crop, resize, and rotate images with precision',
  upload: {
    title: 'Upload Image',
    dropzone: 'Drop an image here or click to browse',
    maxSize: 'Maximum file size: 10MB',
    supportedFormats: 'Supported formats: JPG, PNG, WEBP, GIF'
  },
  editor: {
    title: 'Image Editor',
    zoom: 'Zoom',
    rotate: 'Rotate',
    flipHorizontal: 'Flip Horizontal',
    flipVertical: 'Flip Vertical',
    reset: 'Reset Image',
    undo: 'Undo',
    redo: 'Redo',
    dragMode: 'Drag Mode',
    scaleMode: 'Scale Mode'
  },
  crop: {
    title: 'Crop Settings',
    aspectRatio: 'Aspect Ratio',
    freeform: 'Freeform',
    square: 'Square (1:1)',
    portrait: 'Portrait (3:4)',
    landscape: 'Landscape (4:3)',
    widescreen: 'Widescreen (16:9)',
    panorama: 'Panorama (2:1)',
    custom: 'Custom',
    width: 'Width',
    height: 'Height',
    unit: 'Unit',
    pixels: 'pixels',
    percent: 'percent',
    lockAspectRatio: 'Lock Aspect Ratio'
  },
  presets: {
    title: 'Size Presets',
    original: 'Original Size',
    social: 'Social Media',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: 'Print Sizes',
    fourBySix: '4×6 inches',
    fiveBySeven: '5×7 inches',
    eightByTen: '8×10 inches'
  },
  output: {
    title: 'Output',
    preview: 'Preview',
    dimensions: 'Output Dimensions',
    quality: 'Quality',
    format: 'Format',
    fileName: 'File Name',
    download: 'Download',
    saveAs: 'Save As',
    copy: 'Copy to Clipboard'
  },
  actions: {
    crop: 'Crop Image',
    apply: 'Apply',
    cancel: 'Cancel',
    save: 'Save Image',
    download: 'Download',
    newImage: 'New Image'
  },
  messages: {
    cropSuccess: 'Image cropped successfully',
    downloadReady: 'Your cropped image is ready to download',
    processing: 'Processing image...',
    copied: 'Image copied to clipboard',
    invalidFile: 'Invalid file. Please upload a valid image.',
    fileTooLarge: 'File is too large. Maximum size is 10MB.'
  }
} 