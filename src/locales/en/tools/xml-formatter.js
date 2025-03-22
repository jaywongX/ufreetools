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
    newlineAfterPI: 'Newline After Processing Instructions',
    operationType: 'Operation Type',
    indentSettings: 'Indent Settings',
    displayOptions: 'Display Options',
    showLineNumbers: 'Show Line Numbers'
  },
  indentOptions: {
    twoSpaces: '2 spaces',
    fourSpaces: '4 spaces',
    tabIndent: 'Tab indent'
  },
  actions: {
    format: 'Format XML',
    minify: 'Minify XML',
    validate: 'Validate',
    toJSON: 'Convert to JSON',
    copy: 'Copy',
    clear: 'Clear',
    download: 'Download',
    upload: 'Upload XML',
    beautify: 'Beautify',
    copyCode: 'Copy Code'
  },
  messages: {
    copied: 'Copied to clipboard!',
    formatSuccess: 'XML formatted successfully',
    formatError: 'Error formatting XML',
    validXml: 'XML is valid',
    invalidXml: 'Invalid XML: {0}',
    lineCol: 'Line {line}, Column {col}',
    minifySuccess: 'XML minified successfully',
    conversionSuccess: 'Conversion successful',
    conversionError: 'Error during conversion',
    pleaseEnterXml: 'Please enter XML content',
    processingError: 'Error processing XML: {0}',
    formatResult: 'Formatting Result',
    characterCount: 'Character count: {0}',
    lineCount: 'Line count: {0}',
    characterAndLineCount: 'Character count: {0} | Line count: {1}'
  },
  input: {
    xmlInput: 'XML Input',
    placeholder: 'Paste or type XML here...'
  },
  examples: {
    title: 'Example XML',
    description: 'Click to load example:',
    simpleXml: 'Simple XML',
    bookstore: 'Bookstore Catalog',
    complexXml: 'Complex XML'
  }
} 