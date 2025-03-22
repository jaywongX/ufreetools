export default {
  name: 'Font Converter',
  description: 'Convert fonts between different formats (TTF, OTF, WOFF, WOFF2, EOT)',
  input: {
    title: 'Upload Font File',
    dropzone: 'Drop font file here or click to upload',
    formats: 'Supported formats:',
    browse: 'Browse Files',
    orText: 'or',
    pasteUrl: 'Paste URL to font file:',
    loadUrl: 'Load from URL'
  },
  options: {
    title: 'Conversion Options',
    targetFormat: 'Target Format',
    subsets: 'Character Subsets',
    subsetting: 'Font Subsetting',
    hinting: 'Font Hinting',
    optimization: 'Optimization Level',
    metadata: 'Preserve Metadata',
    compression: 'Compression Level',
    embed: 'Generate Embeddable CSS'
  },
  formats: {
    ttf: 'TrueType (.ttf)',
    otf: 'OpenType (.otf)',
    woff: 'Web Open Font Format (.woff)',
    woff2: 'Web Open Font Format 2 (.woff2)',
    eot: 'Embedded OpenType (.eot)',
    svg: 'SVG Font (.svg)'
  },
  subsets: {
    latin: 'Latin',
    latinExt: 'Latin Extended',
    cyrillic: 'Cyrillic',
    greek: 'Greek',
    vietnamese: 'Vietnamese',
    japanese: 'Japanese',
    korean: 'Korean',
    chinese: 'Chinese',
    custom: 'Custom Character Set'
  },
  preview: {
    title: 'Font Preview',
    sampleText: 'Sample Text',
    fontSize: 'Font Size',
    fontWeight: 'Font Weight',
    lineHeight: 'Line Height',
    letterSpacing: 'Letter Spacing',
    darkMode: 'Dark Mode',
    editText: 'Edit Text'
  },
  cssOutput: {
    title: 'CSS Code',
    fontFamily: 'Font Family Name',
    fontWeight: 'Font Weight',
    fontStyle: 'Font Style',
    includeLocal: 'Include Local Font',
    includeFormat: 'Include Format Hints',
    fontDisplay: 'Font Display'
  },
  actions: {
    convert: 'Convert Font',
    download: 'Download Converted Font',
    downloadAll: 'Download All Formats',
    downloadCss: 'Download CSS',
    copyCSS: 'Copy CSS',
    reset: 'Reset',
    preview: 'Preview'
  },
  messages: {
    uploadSuccess: 'Font uploaded successfully',
    converting: 'Converting font...',
    conversionSuccess: 'Font converted successfully',
    conversionFailed: 'Font conversion failed: {error}',
    downloadStarted: 'Download started',
    copied: 'CSS copied to clipboard',
    invalidFont: 'Invalid font file',
    noFileSelected: 'No font file selected'
  },
  fontInfo: {
    title: 'Font Information',
    family: 'Family Name',
    style: 'Style',
    weight: 'Weight',
    designer: 'Designer',
    license: 'License',
    version: 'Version',
    glyphs: 'Glyphs Count',
    fileSize: 'File Size'
  }
} 