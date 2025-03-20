export default {
  name: 'JSON to YAML Converter',
  description: 'Convert between JSON and YAML formats with customizable options',
  options: {
    mode: 'Conversion Mode',
    indentSize: 'Indent Size',
    useTabs: 'Use Tabs',
    quoteStyle: 'Quote Style',
    lineWidth: 'Line Width',
    formatOutput: 'Format Output',
    preserveKeyOrder: 'Preserve Key Order'
  },
  modes: {
    jsonToYaml: 'JSON to YAML',
    yamlToJson: 'YAML to JSON'
  },
  quotes: {
    single: 'Single quotes',
    double: 'Double quotes',
    none: 'No quotes'
  },
  actions: {
    convert: 'Convert',
    swap: 'Swap Input/Output',
    copy: 'Copy',
    clear: 'Clear',
    download: 'Download',
    upload: 'Upload'
  },
  sections: {
    input: 'Input',
    output: 'Output'
  },
  messages: {
    copied: 'Copied to clipboard!',
    convertSuccess: 'Conversion successful',
    invalidJson: 'Invalid JSON input',
    invalidYaml: 'Invalid YAML input',
    emptyInput: 'Please enter some content to convert',
    uploadSuccess: 'File uploaded successfully',
    downloadReady: 'Your file is ready for download'
  }
} 