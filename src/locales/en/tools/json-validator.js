export default {
  name: 'JSON Validator',
  description: 'Validate, format and check your JSON data structure for errors',
  options: {
    validateOnType: 'Validate as you type',
    formatOnValidate: 'Format on validation',
    indentSize: 'Indent size',
    allowComments: 'Allow comments',
    allowTrailingCommas: 'Allow trailing commas',
    repairMode: 'Repair mode',
    showLineNumbers: 'Show line numbers',
    theme: 'Editor theme'
  },
  themes: {
    light: 'Light',
    dark: 'Dark',
    github: 'GitHub',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },
  actions: {
    validate: 'Validate',
    format: 'Format',
    minify: 'Minify',
    repair: 'Repair',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download',
    upload: 'Upload'
  },
  results: {
    valid: 'Valid JSON',
    invalid: 'Invalid JSON',
    errorLine: 'Error at line',
    errorPosition: 'position',
    repaired: 'JSON repaired',
    copied: 'Copied to clipboard',
    formatted: 'JSON formatted',
    minified: 'JSON minified'
  },
  errors: {
    unexpectedToken: 'Unexpected token',
    unexpectedEnd: 'Unexpected end of JSON input',
    duplicateKey: 'Duplicate key',
    missingComma: 'Missing comma',
    missingColon: 'Missing colon',
    trailingComma: 'Trailing comma',
    unclosedString: 'Unclosed string',
    unclosedComment: 'Unclosed comment'
  },
  schema: {
    validate: 'Validate with schema',
    loadSchema: 'Load Schema',
    invalidSchema: 'Invalid JSON Schema'
  }
} 