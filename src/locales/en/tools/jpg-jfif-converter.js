export default {
  name: 'JPG to JFIF Converter',
  description: 'Convert JPG images to JFIF format online with high quality and multiple options',
  tags: ['image', 'convert', 'jpg', 'jfif', 'jpeg', 'format', 'utility'],

  meta: {
    title: 'JPG to JFIF Converter - Free Online Image Conversion Tool',
    description: 'Convert JPG to JFIF online for free. Fast, secure browser-based converter with batch processing, preview comparison and advanced quality settings. No watermarks, no registration.'
  },

  upload: {
    title: 'JPG to JFIF Converter',
    subtitle: 'Convert JPG images to JFIF format with perfect quality',
    dropzone: 'Drop your JPG files here',
    dropzoneActive: 'Drop files to start conversion',
    maxSize: 'Maximum file size: 50MB',
    supportedFormats: 'Supported formats: JPG, JPEG'
  },

  settings: {
    title: 'Conversion Settings',
    advanced: 'Advanced Settings',
    quality: {
      label: 'Image Quality',
      description: 'Higher quality results in larger files',
      auto: 'Auto-optimize (recommended)'
    },
    qualityLabels: {
      maximum: 'Maximum Quality',
      high: 'High Quality',
      good: 'Good Quality',
      medium: 'Medium Quality',
      low: 'Low Quality',
      veryLow: 'Very Low Quality'
    },
    metadata: {
      label: 'Image Metadata',
      preserve: 'Preserve all metadata (EXIF, GPS, etc.)',
      strip: 'Remove all metadata (smaller files)',
      keepBasic: 'Keep basic metadata only'
    },
    filenameOption: 'Output Filename',
    filenameOriginal: 'Original',
    filenameConverted: 'Add Prefix',
    filenameCustom: 'Custom',
    filenameTemplatePlaceholder: 'e.g., converted-{name}',
    filenameTemplateHelp: 'Use {name} to insert the original filename',
    preserveMetadata: 'Preserve image metadata'
  },

  preview: {
    title: 'Image Preview',
    before: 'JPG Original',
    after: 'JFIF Preview',
    noPreview: 'No preview available',
    togglePreview: 'Show/Hide Preview',
    imageDetails: 'Image Details'
  },

  fileTable: {
    fileName: 'File Name',
    type: 'Type',
    size: 'Size',
    status: 'Status',
    preview: 'Preview',
    pending: 'Pending',
    converting: 'Converting...',
    done: 'Completed',
    error: 'Error',
    progress: 'Progress'
  },

  results: {
    title: 'Converted Files',
    summary: '{count} files converted, {saved} total space saved',
    originalName: 'Original Name',
    convertedName: 'Converted Name',
    originalSize: 'Original Size',
    convertedSize: 'New Size',
    compressionRate: 'Compression',
    actions: 'Actions',
    noResults: 'No conversions yet'
  },

  actions: {
    selectFile: 'Select Files',
    addMore: 'Add More',
    clear: 'Clear Files',
    convertAll: 'Convert All Files',
    converting: 'Converting...',
    download: 'Download',
    downloadAll: 'Download All',
    clearResults: 'Clear Results',
    viewDetails: 'View Details',
    compare: 'Compare',
    retry: 'Retry Failed',
    cancelAll: 'Cancel',
    optimizeAll: 'Auto Optimize'
  },

  messages: {
    noValidFiles: 'Please select valid JPG or JPEG files.',
    conversionError: 'Error converting file. Please try again.',
    conversionSuccess: 'All files converted successfully!',
    partialSuccess: '{success} of {total} files converted successfully.',
    downloadStarted: 'Download started...',
    processingFiles: 'Processing your files...',
    dragActive: 'Drop files here to upload',
    fileSizeExceeded: 'File size exceeds the 50MB limit',
    unsupportedFormat: 'Unsupported file format'
  },

  history: {
    title: 'Recent Conversions',
    empty: 'No recent conversions',
    clear: 'Clear History',
    restore: 'Restore Files'
  },

  info: {
    title: 'About JPG to JFIF Conversion',
    description: 'Our JPG to JFIF converter allows you to quickly and easily convert your JPG image files to the JFIF format, all processed securely in your browser.',
    
    whatIs: {
      title: 'What is JFIF?',
      content: 'JFIF (JPEG File Interchange Format) is a file format standard for JPEG files. It provides additional information like resolution, aspect ratio, and other metadata that helps ensure JPEG images are properly displayed across different devices and platforms. While JFIF and JPG are technically related formats, some software and devices might have better compatibility with one over the other.'
    },
    
    whyConvert: {
      title: 'Why Convert JPG to JFIF?',
      reason1: 'Some older software systems specifically require JFIF format',
      reason2: 'Certain specialized applications may have better compatibility with JFIF',
      reason3: 'Standardize your image collection with consistent file extensions',
      reason4: 'Ensure proper metadata handling in specific imaging workflows'
    },
    
    howItWorks: {
      title: 'How It Works',
      content: 'Our converter processes your JPG files entirely in your browser. Your images are never uploaded to any server, ensuring complete privacy and security. The tool reads the JPG image data, renders it, and then saves it in standard JFIF format with your chosen quality settings.'
    },
    
    tips: {
      title: 'Tips for Best Results',
      tip1: 'Use the quality slider to balance between file size and image quality',
      tip2: 'For images with text or sharp details, use a higher quality setting',
      tip3: 'Batch convert multiple files at once and download them as a ZIP file',
      tip4: 'Use "Auto Optimize" for the best balance of quality and file size',
      tip5: 'Remove metadata for smaller file sizes when privacy is important'
    },
    
    privacy: {
      title: 'Privacy & Security',
      content: 'We take your privacy seriously. All processing happens directly in your browser - your files are never uploaded to any server. This ensures complete security and privacy for your images.'
    }
  }
}; 