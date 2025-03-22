export default {
  name: 'YAML-JSON Converter',
  description: 'Convert between YAML and JSON formats with customizable options',
  input: {
    title: 'Input',
    yamlPlaceholder: 'Enter YAML here...',
    jsonPlaceholder: 'Enter JSON here...',
    loadSample: 'Load Sample',
    clearInput: 'Clear Input',
    uploadFile: 'Upload File'
  },
  output: {
    title: 'Output',
    copyOutput: 'Copy Output',
    downloadOutput: 'Download Output',
    clearOutput: 'Clear Output'
  },
  options: {
    conversionMode: 'Conversion Mode',
    jsonToYaml: 'JSON to YAML',
    yamlToJson: 'YAML to JSON',
    formatOutput: 'Format Output',
    indentSize: 'Indent Size',
    quoteKeys: 'Quote Object Keys',
    sortKeys: 'Sort Keys Alphabetically',
    flowStyle: 'YAML Flow Style',
    jsonCompatible: 'JSON Compatible',
    singleQuotes: 'Use Single Quotes',
    includeSchema: 'Include Schema',
    preserveKeyOrder: 'Preserve Key Order'
  },
  flowStyles: {
    block: 'Block Style',
    flow: 'Flow Style',
    auto: 'Auto'
  },
  validation: {
    validate: 'Validate Before Converting',
    validInput: 'Valid {format}',
    invalidInput: 'Invalid {format}: {error}',
    checkSyntax: 'Check Syntax'
  },
  actions: {
    convert: 'Convert',
    swap: 'Swap Formats',
    beautify: 'Beautify',
    minify: 'Minify'
  },
  messages: {
    conversionSuccess: 'Conversion successful',
    conversionFailed: 'Conversion failed: {error}',
    copySuccess: 'Copied to clipboard',
    downloadSuccess: 'File downloaded successfully',
    emptyInput: 'Please enter some input to convert',
    invalidYaml: 'Invalid YAML syntax',
    invalidJson: 'Invalid JSON syntax'
  }
} 