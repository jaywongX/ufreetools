export default {
  name: 'CSV to JSON Converter',
  description: 'Convert CSV data to JSON format with customizable options',

  options: {
    delimiter: 'Delimiter',
    quote: 'Quote Character',
    header: 'First row as header',
    dynamicTyping: 'Dynamic Typing',
    dynamicTypingDescription: 'Convert numeric strings to numbers, "true/false" to booleans, etc.',
    skipEmptyLines: 'Skip empty lines',
    comments: 'Comment character',
    outputFormat: 'Output Format',
    indentation: 'Indentation',
    encoding: 'Encoding',
    newline: 'Newline Character',
    title: 'Conversion Options'
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
    keyed: 'Key-Value Object',
    nested: 'Nested Object'
  },

  preview: {
    input: 'Input...',
    output: 'Output...',
    rawCsv: 'Raw CSV',
    parsedCsv: 'Parsed CSV',
    jsonOutput: 'JSON Output',
    firstRows: 'First {count} Rows',
    showAll: 'Show All'
  },

  actions: {
    convert: 'Convert',
    copy: 'Copy JSON',
    download: 'Download JSON',
    clear: 'Clear',
    uploadCsv: 'Upload CSV',
    swap: 'Swap Input/Output',
    loadExample: 'Load Example',
    clearInput: 'Clear Input',
    formatOutput: 'Format Output',
    copyResult: 'Copy Result',
    downloadResult: 'Download Result',
    paste: 'Paste',
    showOptions: 'Show Options',
    hideOptions: 'Hide Options',
    uploadJson: 'Upload JSON'
  },

  results: {
    rowsProcessed: 'Processed {count} Rows',
    conversionComplete: 'Conversion Complete',
    copied: 'Copied to Clipboard',
    downloaded: 'Downloaded',
    error: 'Error'
  },

  errors: {
    noData: 'No CSV data to convert',
    invalidCsv: 'Invalid CSV format',
    parsingFailed: 'Parsing failed: {error}',
    missingHeader: 'Missing header row',
    invalidJson: 'Invalid JSON format',
    formatFailed: 'Formatting failed: {error}',
    copyFailed: 'Copy failed, please copy manually',
    downloadFailed: 'Download failed',
    pasteError: 'Unable to paste from clipboard',
    conversionFailed: 'Conversion failed'
  },

  conversion: {
    title: 'Conversion Direction',
    csvToJson: {
      title: 'CSV to JSON',
      delimiterLabel: 'Delimiter',
      headerLabel: 'First row as header',
      dynamicTypingLabel: 'Dynamic Typing',
      skipEmptyLinesLabel: 'Skip empty lines',
      convertButton: 'Convert CSV to JSON'
    },
    jsonToCsv: {
      title: 'JSON to CSV',
      delimiterLabel: 'Delimiter',
      headerLabel: 'Include header row',
      quotesLabel: 'Add quotes to all fields',
      nestedModeLabel: 'Select nested data processing mode',
      flat: 'Flatten processing',
      stringify: 'Convert to string',
      ignore: 'Ignore processing',
      convertButton: 'Convert JSON to CSV'
    }
  },

  stats: {
    processed: 'Processed Data Rows',
    fields: 'Number of Fields/Columns',
    inputSize: 'Input Size Before Conversion',
    outputSize: 'Output Size After Conversion',
    title: 'Conversion Statistics'
  },

  messages: {
    copied: 'Copied to Clipboard',
    download: 'Downloaded',
    error: 'Error'
  },

  formatBytes: {
    bytes: 'Bytes',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  }
};