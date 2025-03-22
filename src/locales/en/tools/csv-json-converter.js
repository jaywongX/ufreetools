export default {
  name: 'CSV to JSON Converter',
  description: 'Convert CSV data to JSON format with customizable options',
  options: {
    delimiter: 'Delimiter',
    quote: 'Quote Character',
    header: 'First Row is Header',
    dynamicTyping: 'Dynamic Typing',
    skipEmptyLines: 'Skip Empty Lines',
    comments: 'Comment Character',
    outputFormat: 'Output Format',
    indentation: 'Indentation',
    encoding: 'Encoding',
    newline: 'Newline Character'
  },
  delimiters: {
    comma: 'Comma (,)',
    semicolon: 'Semicolon (;)',
    tab: 'Tab (\\t)',
    pipe: 'Pipe (|)',
    custom: 'Custom'
  },
  formats: {
    array: 'Array of Objects',
    arrayOfArrays: 'Array of Arrays',
    keyed: 'Keyed Object',
    nested: 'Nested Objects'
  },
  preview: {
    input: 'Input Preview',
    output: 'Output Preview',
    rawCsv: 'Raw CSV',
    parsedCsv: 'Parsed CSV',
    jsonOutput: 'JSON Output',
    firstRows: 'First {count} rows',
    showAll: 'Show All'
  },
  actions: {
    convert: 'Convert',
    copy: 'Copy JSON',
    download: 'Download JSON',
    clear: 'Clear',
    uploadCsv: 'Upload CSV'
  },
  results: {
    rowsProcessed: '{count} rows processed',
    conversionComplete: 'Conversion complete',
    copied: 'JSON copied to clipboard',
    downloaded: 'JSON downloaded'
  },
  errors: {
    noData: 'No CSV data to convert',
    invalidCsv: 'Invalid CSV format',
    parsingFailed: 'Parsing failed: {error}',
    missingHeader: 'Header row is missing'
  }
} 