export default {
  name: 'Base64 Encoder Decoder',
  description: 'Quickly convert data between text and Base64 encoding',

  mode: {
    title: 'Mode',
    encode: 'Encode',
    decode: 'Decode'
  },

  input: {
    title: 'Input',
    placeholder: 'Enter text to process...',
    clear: 'Clear',
    copy: 'Copy',
    paste: 'Paste',
    upload: 'Upload File',
    dragDrop: 'Drag and drop file here or click to upload',
    textOption: 'Text',
    fileOption: 'File',
    hexOption: 'Hex',
    selectFile: 'Select file',
  },

  output: {
    title: 'Output',
    placeholder: 'Result will appear here...',
    copy: 'Copy',
    download: 'Download',
    empty: 'No output yet'
  },

  options: {
    title: 'Options',
    encoding: 'Character Encoding',
    encodings: {
      utf8: 'UTF-8',
      ascii: 'ASCII',
      iso88591: 'ISO-8859-1',
      windows1252: 'Windows-1252'
    },
    urlSafe: 'Use URL-safe encoding',
    autoDecode: 'Auto-detect and decode',
    includeDataURI: 'Include Data URI prefix',
    trimWhitespace: 'Trim whitespace',
    preserveLineBreaks: 'Preserve line breaks',
    addImageHeader:'Add image Base64 header',
  },

  dataUri: {
    title: 'Data URI',
    mimeType: 'MIME Type',
    common: 'Common Types',
    custom: 'Custom'
  },

  messages: {
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed',
    pasteFailed: 'Paste failed',
    uploadSuccess: 'File uploaded successfully',
    uploadFailed: 'File upload failed',
    readFailed: 'File ead failed',
    invalidBase64: 'Invalid Base64 encoding',
    invalidHex: 'Invalid Hex encoding',
    fileTooLarge: 'The file is too large, please download it directly',
    processError: 'An error occurred during processing',
    encodeSuccess: 'Encoded successfully',
    decodeSuccess: 'Decoded successfully',
    processing: 'Processing...'
  },

  mimeTypes: {
    'text/plain': 'Text',
    'application/json': 'JSON',
    'text/html': 'HTML',
    'text/css': 'CSS',
    'text/javascript': 'JavaScript',
    'application/xml': 'XML',
    'image/jpeg': 'JPEG Image',
    'image/png': 'PNG Image',
    'image/gif': 'GIF Image',
    'image/svg+xml': 'SVG Image',
    'application/pdf': 'PDF Document'
  },

  tips: {
    title: 'Tips',
    tip1: 'Base64 encoding can convert any binary data into plain text format',
    tip2: 'Use URL-safe option to remove "+" and "/" characters from standard Base64',
    tip3: 'Data URI prefix allows using encoded data directly in HTML img and other tags',
    tip4: 'Large files consume more resources when encoding, try to keep them under 2MB',
    tip5: 'Some special characters may require specific character encoding to process correctly'
  },

  about: {
    title: 'About Base64 Encoding',
    description: 'Base64 is a method of encoding binary data using a set of 64 printable characters, commonly used for representing, transmitting, and storing binary data in text-based formats.'
  },

  features: {
    title: 'Features',
    multiInput: 'Supports text, hex, and file input methods',
    charsetSupport: 'Supports UTF-8 and GBK character set decoding',
    imagePreview: 'Image preview support (for images under 1MB)',
    fileDownload: 'Multiple format file download support (PDF by default)',
    chunkProcessing: 'Large file chunk processing with real-time progress',
    autoDetect: 'Automatic image type detection and preview'
  },

  notes: {
    title: 'Notes',
    sizeIncrease: 'Base64 encoding increases data size by about 33%',
    chunkProcessing: 'Large files are processed in chunks with two-phase progress indication',
    largeFiles: 'Files over 10MB are only available for download, text content not displayed',
    fileInput: 'For large files, use file input instead of pasting in the text box'
  },

  fileTypeLabel: {
    pdf: 'PDF document',
    txt: 'text file',
    jpg: 'JPG picture',
    png: 'PNG picture',
    zip: 'ZIP package',
    bin: 'Binary file',
  }
}; 