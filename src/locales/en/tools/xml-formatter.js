export default {
  name: 'XML Formatter',
  description: 'Format, prettify and validate XML documents',
  options: {
    indentSize: 'Indent Size',
    useTabs: 'Use Tabs',
    collapseContent: 'Collapse Content',
    maxLineWidth: 'Max Line Width',
    indentAttributes: 'Indent Attributes',
    sortAttributes: 'Sort Attributes',
    newlineAfterPI: 'Newline After Processing Instructions'
  },
  actions: {
    format: 'Format XML',
    minify: 'Minify XML',
    validate: 'Validate',
    toJSON: 'Convert to JSON',
    copy: 'Copy',
    clear: 'Clear',
    download: 'Download',
    upload: 'Upload XML'
  },
  messages: {
    copied: 'Copied to clipboard!',
    formatSuccess: 'XML formatted successfully',
    formatError: 'Error formatting XML',
    validXml: 'XML is valid',
    invalidXml: 'Invalid XML',
    lineCol: 'Line {line}, Column {col}',
    minifySuccess: 'XML minified successfully',
    conversionSuccess: 'Conversion successful',
    conversionError: 'Error during conversion'
  }
} 