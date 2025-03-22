export default {
  name: 'JSON Schema Validator',
  description: 'Validate JSON data against a JSON Schema definition',
  input: {
    schema: 'JSON Schema',
    data: 'JSON Data',
    schemaPlaceholder: 'Enter or paste your JSON Schema here',
    dataPlaceholder: 'Enter or paste your JSON data here',
    loadSample: 'Load Sample',
    clearSchema: 'Clear Schema',
    clearData: 'Clear Data'
  },
  options: {
    validateAs: 'Validate As You Type',
    formatOnPaste: 'Format On Paste',
    draft: 'JSON Schema Draft',
    showErrors: 'Show Error Details',
    showLineNumbers: 'Show Line Numbers',
    theme: 'Editor Theme'
  },
  results: {
    valid: 'JSON is valid against schema',
    invalid: 'JSON does not match schema',
    errorCount: '{count} validation errors found',
    schemaError: 'Invalid JSON Schema',
    dataError: 'Invalid JSON data',
    errorAt: 'Error at path',
    expected: 'Expected',
    received: 'Received'
  },
  actions: {
    validate: 'Validate',
    clearResults: 'Clear Results',
    downloadSchema: 'Download Schema',
    downloadData: 'Download Data',
    copySchema: 'Copy Schema',
    copyData: 'Copy Data',
    generateDocs: 'Generate Documentation'
  },
  draftVersions: {
    '2020-12': 'Draft 2020-12',
    '2019-09': 'Draft 2019-09',
    '07': 'Draft-07',
    '06': 'Draft-06',
    '04': 'Draft-04'
  },
  messages: {
    copied: 'Copied to clipboard',
    downloaded: 'File downloaded',
    validationSuccess: 'Validation successful',
    validationFailed: 'Validation failed',
    missingData: 'Please enter JSON data to validate'
  }
} 