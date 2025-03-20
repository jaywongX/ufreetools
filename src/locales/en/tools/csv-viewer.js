export default {
  name: 'CSV Viewer & Editor',
  description: 'View, edit and format CSV files with support for various delimiters',
  options: {
    delimiter: 'Delimiter',
    hasHeader: 'First Row as Header',
    quoteChar: 'Quote Character',
    escapeChar: 'Escape Character',
    skipEmptyLines: 'Skip Empty Lines',
    encoding: 'File Encoding'
  },
  delimiters: {
    comma: 'Comma (,)',
    semicolon: 'Semicolon (;)',
    tab: 'Tab (\\t)',
    pipe: 'Pipe (|)',
    custom: 'Custom'
  },
  actions: {
    parse: 'Parse CSV',
    toJSON: 'Convert to JSON',
    toTSV: 'Convert to TSV',
    toExcel: 'Export to Excel',
    copy: 'Copy',
    clear: 'Clear',
    download: 'Download',
    upload: 'Upload CSV'
  },
  messages: {
    copied: 'Copied to clipboard!',
    parseSuccess: 'CSV parsed successfully',
    parseError: 'Error parsing CSV',
    rowCount: '{count} rows parsed',
    columnCount: '{count} columns detected',
    selectDelimiter: 'Please select a delimiter',
    conversionSuccess: 'Conversion successful'
  }
} 