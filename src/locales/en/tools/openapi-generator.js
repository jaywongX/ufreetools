export default {
  name: 'OpenAPI → TypeScript Client Generator',
  description: 'Automatically generate TypeScript interfaces and client code based on OpenAPI specifications',
  options: {
    exportSchemas: 'Export all model definitions',
    generateClient: 'Generate API client code',
    addComments: 'Add comments and documentation',
    useEnums: 'Use TypeScript enums (instead of string unions)',
    indentSize: 'Indent Size',
    operationType: 'Operation Type',
    displayOptions: 'Display Options'
  },
  inputMode: {
    toggleToFile: 'Switch to file upload',
    toggleToText: 'Switch to text input',
    loadExample: 'Load example'
  },
  fileUpload: {
    dragAndDrop: 'Drag and drop OpenAPI file here, or click to upload',
    supportedFormats: 'Supports .json, .yaml and .yml file formats',
    fileSelected: 'Selected: {0} ({1})'
  },
  textInput: {
    placeholder: 'Paste OpenAPI specification (JSON or YAML) here...'
  },
  actions: {
    generate: 'Generate TypeScript Code',
    processing: 'Processing...',
    clear: 'Clear',
    copy: 'Copy Code',
    download: 'Download Code'
  },
  results: {
    generatedCode: 'Generated TypeScript Code',
    copied: 'Copied to clipboard',
    error: 'Error',
    characterCount: 'Character count: {0}'
  },
  errors: {
    parseError: 'Unable to parse OpenAPI specification. Please ensure you provide valid JSON or YAML format.',
    invalidSpec: 'Invalid OpenAPI specification. No openapi or swagger version identifier found.',
    processingError: 'Error processing OpenAPI specification: {0}'
  }
} 