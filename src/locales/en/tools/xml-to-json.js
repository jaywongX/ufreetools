export default {
  name: 'XML to JSON Converter',
  description: 'Convert XML data to JSON format with customizable options',
  options: {
    compact: 'Compact Mode',
    spaces: 'Indentation Spaces',
    textKey: 'Text Node Key',
    attributesKey: 'Attributes Key',
    ignoreAttributes: 'Ignore Attributes',
    ignoreComment: 'Ignore Comments',
    ignoreDeclaration: 'Ignore XML Declaration',
    ignoreInstruction: 'Ignore Processing Instructions',
    ignoreDoctype: 'Ignore DOCTYPE',
    ignoreText: 'Ignore Text Content',
    alwaysArray: 'Always Return Array',
    keepCData: 'Preserve CDATA',
    nativeType: 'Native Type Conversion'
  },
  input: {
    placeholder: 'Enter or paste XML here',
    loadSample: 'Load Sample',
    clearInput: 'Clear Input',
    uploadXml: 'Upload XML File',
    validate: 'Validate XML'
  },
  output: {
    title: 'JSON Output',
    copyOutput: 'Copy JSON',
    downloadOutput: 'Download JSON',
    clearOutput: 'Clear Output',
    formatOptions: 'Format Options'
  },
  actions: {
    convert: 'Convert',
    copy: 'Copy',
    download: 'Download',
    clear: 'Clear All'
  },
  messages: {
    convertSuccess: 'XML converted to JSON successfully',
    convertError: 'Error converting XML: {error}',
    emptyInput: 'Please enter XML to convert',
    copied: 'JSON copied to clipboard',
    downloaded: 'JSON file downloaded',
    validXml: 'XML is valid',
    invalidXml: 'XML is invalid: {error}'
  },
  formats: {
    standard: 'Standard',
    pretty: 'Pretty',
    compact: 'Compact',
    verbose: 'Verbose'
  }
} 