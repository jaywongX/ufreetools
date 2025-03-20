export default {
  name: 'HTML to PDF Converter',
  description: 'Convert HTML documents to PDF files with customizable options',
  options: {
    pageSize: 'Page Size',
    orientation: 'Orientation',
    margins: 'Margins',
    includeStyles: 'Include Styles',
    includeImages: 'Include Images',
    headerTemplate: 'Header Template',
    footerTemplate: 'Footer Template',
    pageNumbers: 'Page Numbers',
    scale: 'Scale'
  },
  pageSizes: {
    letter: 'Letter',
    legal: 'Legal',
    tabloid: 'Tabloid',
    a3: 'A3',
    a4: 'A4',
    a5: 'A5',
    custom: 'Custom'
  },
  orientations: {
    portrait: 'Portrait',
    landscape: 'Landscape'
  },
  sections: {
    htmlInput: 'HTML Input',
    cssInput: 'CSS Input (Optional)',
    preview: 'Preview'
  },
  actions: {
    convert: 'Convert to PDF',
    preview: 'Generate Preview',
    download: 'Download PDF',
    copy: 'Copy HTML',
    clear: 'Clear',
    uploadHTML: 'Upload HTML',
    uploadCSS: 'Upload CSS'
  },
  messages: {
    copied: 'Copied to clipboard!',
    generating: 'Generating PDF...',
    conversionSuccess: 'HTML converted to PDF successfully',
    conversionError: 'Error converting HTML to PDF',
    previewGenerated: 'Preview generated',
    invalidHtml: 'Invalid HTML structure',
    fileSaved: 'PDF file saved as {filename}'
  }
} 