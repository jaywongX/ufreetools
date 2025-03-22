export default {
  name: 'Image Compressor',
  description: 'Compress and optimize images while maintaining quality',
  options: {
    quality: 'Quality',
    format: 'Output Format',
    keepExif: 'Preserve EXIF Data',
    resizeImage: 'Resize Image',
    maxWidth: 'Max Width',
    maxHeight: 'Max Height',
    compressionLevel: 'Compression Level',
    maxFileSize: 'Target File Size',
    optimizationLevel: 'Optimization Level',
    convertTo: 'Convert To'
  },
  presets: {
    web: 'Web Optimized',
    highQuality: 'High Quality',
    balanced: 'Balanced',
    smallSize: 'Small Size',
    custom: 'Custom'
  },
  formats: {
    original: 'Original Format',
    jpeg: 'JPEG',
    png: 'PNG',
    webp: 'WebP',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },
  resizeOptions: {
    noResize: 'Don\'t Resize',
    maxDimension: 'Maximum Dimensions',
    exactDimensions: 'Exact Dimensions',
    percentage: 'Percentage Scaling'
  },
  actions: {
    upload: 'Upload Images',
    compress: 'Compress',
    download: 'Download',
    downloadAll: 'Download All',
    clear: 'Clear',
    addMore: 'Add More Images',
    removeAll: 'Remove All'
  },
  table: {
    filename: 'Filename',
    originalSize: 'Original Size',
    compressedSize: 'Compressed Size',
    savings: 'Savings',
    quality: 'Quality',
    dimensions: 'Dimensions',
    status: 'Status'
  },
  messages: {
    dropped: '{count} images dropped',
    uploading: 'Uploading images...',
    compressing: 'Compressing images...',
    compressed: 'Images compressed successfully',
    downloadPreparing: 'Preparing download...',
    downloadReady: 'Download ready',
    cleared: 'All images cleared',
    tooManyFiles: 'Too many files. Maximum allowed: {max}',
    fileTooLarge: 'File is too large. Maximum allowed: {max}MB',
    unsupportedFormat: 'Unsupported file format: {format}',
    imageError: 'Error processing image: {error}'
  }
} 