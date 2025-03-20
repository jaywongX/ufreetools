export default {
  name: 'YAML Formatter',
  description: 'Format and validate YAML files with customizable options',
  options: {
    indentSize: 'Indent Size',
    useTabs: 'Use Tabs',
    formatFlow: 'Format Flow Style',
    lineWidth: 'Line Width',
    quoteStyle: 'Quote Style'
  },
  actions: {
    format: 'Format YAML',
    validate: 'Validate',
    toJSON: 'Convert to JSON',
    fromJSON: 'Convert from JSON',
    copy: 'Copy',
    clear: 'Clear',
    download: 'Download',
    upload: 'Upload'
  },
  messages: {
    copied: 'Copied to clipboard!',
    formatSuccess: 'YAML formatted successfully',
    formatError: 'Error formatting YAML',
    invalidYaml: 'Invalid YAML syntax',
    lineCol: 'Line {line}, Column {col}',
    conversionSuccess: 'Conversion successful',
    conversionError: 'Error during conversion'
  }
} 