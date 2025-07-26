export default {
  name: 'Image Compressor',
  description: 'Compress and optimize images while maintaining quality',

  input: {
    dragDrop: 'Drag and drop images here or click to upload',
    supportedFormats: 'Supports JPG, PNG, GIF, WEBP formats',
    selected: '{count} files selected',
    changeFiles: 'Change files',
    width: 'Width',
    height: 'Height',
    keepOriginal: 'Set to 0 to maintain original dimensions'
  },

  results: {
    originalImage: 'Original Image',
    compressedImage: 'After Compression',
    filename: 'Filename:',
    dimensions: 'Dimensions:',
    fileSize: 'File Size:',
    compressionRatio: 'Compression Ratio:',
    viewOriginal: 'View Original'
  },

  about: {
    title: 'About Image Compression',
    description: 'This tool compresses images using the browser\'s Canvas API. All processing occurs on your device, and no images are uploaded to a server.',
    principlesTitle: 'Compression Principles:',
    principles: {
      resize: 'Resize Images: Smaller dimensions mean less pixel data',
      quality: 'Reduce Quality: Lowering the image quality parameter reduces file size',
      format: 'Convert Format: Different image formats have different compression characteristics'
    },
    useCasesTitle: 'Use Cases:',
    useCases: {
      web: 'Optimize website images to improve loading speed',
      email: 'Reduce email attachment sizes',
      social: 'Compress images before uploading to social media',
      storage: 'Optimize storage space'
    }
  },

  options: {
    quality: 'Quality',
    qualityValue: 'Quality ({value}%)',
    lowQuality: 'Low Quality/Small File',
    highQuality: 'High Quality/Large File',
    format: 'Output Format',
    maxSize: 'Max Dimensions ({width} × {height} px)',
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
    web: 'Web Optimization',
    highQuality: 'High Quality',
    balanced: 'Balanced',
    smallSize: 'Small Size',
    custom: 'Custom'
  },

  formats: {
    original: 'Original Format',
    jpeg: 'JPEG',
    jpegDesc: 'JPEG format is suitable for photos and does not support transparent backgrounds',
    png: 'PNG',
    pngDesc: 'PNG format supports transparent backgrounds and is suitable for icons and illustrations',
    webp: 'WebP',
    webpDesc: 'WebP format provides high compression rates and is suitable for web use',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: 'No Resize',
    maxDimension: 'Max Dimensions',
    exactDimensions: 'Exact Dimensions',
    percentage: 'Percentage Scaling'
  },

  actions: {
    upload: 'Upload Images',
    compress: 'Compress',
    processing: 'Processing...',
    download: 'Download',
    downloadAll: 'Download All',
    batchDownload: 'Batch Download',
    clear: 'Clear',
    addMore: 'Add More Images',
    removeAll: 'Remove All',
    preview: 'Preview',
    delete: 'Delete'
  },

  table: {
    filename: 'Filename',
    originalSize: 'Original Size',
    original: 'Original File Size',
    compressedSize: 'Compressed Size',
    compressed: 'Compressed File Size',
    savings: 'Savings',
    ratio: 'Compression Ratio',
    quality: 'Quality',
    dimensions: 'Dimensions',
    originalDimensions: 'Original Dimensions',
    newDimensions: 'New Dimensions',
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
    fileTooLarge: 'File too large. Maximum allowed: {max}MB',
    unsupportedFormat: 'Unsupported file format: {format}',
    imageError: 'An error occurred while processing the image: {error}',
    batchDownloadNotSupported: 'The batch download feature requires adding the JSZip library. Please download images individually or add zip library support.',
    batchDownloadError: 'An error occurred during batch download: {error}',
    invalidImage: 'Please select a valid image file'
  }
};