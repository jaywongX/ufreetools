export default {
  name: 'ID Photo Maker',
  description: 'Create professional ID photos with customizable backgrounds and dimensions',
  upload: {
    title: 'Upload Image',
    dropzone: 'Drop your image here or click to browse',
    or: 'OR',
    camera: 'Take a photo with camera',
    constraints: 'Max size: 10MB. Formats: JPG, PNG, WEBP',
    takePicture: 'Take Picture',
    retake: 'Retake'
  },
  editing: {
    title: 'Edit Photo',
    faceDetection: 'Face Detection',
    autoDetect: 'Auto-detect face',
    manualMode: 'Manual adjustment',
    zoom: 'Zoom',
    rotate: 'Rotate',
    brightness: 'Brightness',
    contrast: 'Contrast',
    saturation: 'Saturation',
    filters: 'Filters'
  },
  background: {
    title: 'Background',
    original: 'Original',
    white: 'White',
    blue: 'Blue',
    red: 'Red',
    custom: 'Custom Color',
    transparent: 'Transparent'
  },
  size: {
    title: 'Photo Size',
    presets: 'Size Presets',
    custom: 'Custom Size',
    width: 'Width',
    height: 'Height',
    unit: 'Unit',
    mm: 'mm',
    inches: 'inches',
    pixels: 'pixels'
  },
  presets: {
    passport: 'Passport (35×45mm)',
    visa: 'Visa (2×2 inches)',
    drivingLicense: 'Driving License (2.5×3 inches)',
    idCard: 'ID Card (25×35mm)',
    linkedin: 'LinkedIn (400×400 pixels)',
    schengen: 'Schengen Visa (35×45mm)',
    chinese: 'Chinese Visa (33×48mm)',
    indian: 'Indian Visa (2×2 inches)'
  },
  output: {
    title: 'Output',
    preview: 'Preview',
    grid: 'Multiple Photos',
    columns: 'Columns',
    rows: 'Rows',
    spacing: 'Spacing',
    background: 'Page Background',
    paperSize: 'Paper Size',
    download: 'Download',
    print: 'Print',
    downloadAs: 'Download as',
    jpg: 'JPG Image',
    png: 'PNG Image',
    pdf: 'PDF Document'
  },
  actions: {
    apply: 'Apply',
    reset: 'Reset',
    undo: 'Undo',
    redo: 'Redo',
    save: 'Save Photo',
    share: 'Share'
  },
  messages: {
    noFaceDetected: 'No face detected. Try manual adjustment or a different photo.',
    multipleFacesDetected: 'Multiple faces detected. Using the largest face.',
    processing: 'Processing your photo...',
    downloadReady: 'Your photo is ready to download',
    photoSaved: 'Photo saved successfully'
  }
} 