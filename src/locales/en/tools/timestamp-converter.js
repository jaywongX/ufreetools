export default {
  name: 'Timestamp Converter',
  description: 'Convert between timestamps and human-readable dates',
  options: {
    inputType: 'Input Type',
    outputFormat: 'Output Format',
    timezone: 'Timezone',
    includeTime: 'Include Time',
    format: 'Format String'
  },
  inputTypes: {
    timestamp: 'Unix Timestamp',
    milliseconds: 'Unix Milliseconds',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: 'Date String'
  },
  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'Locale Format',
    relative: 'Relative Time',
    custom: 'Custom Format'
  },
  actions: {
    convert: 'Convert',
    nowTimestamp: 'Current Timestamp',
    nowDate: 'Current Date',
    copy: 'Copy',
    clear: 'Clear'
  },
  messages: {
    copied: 'Copied to clipboard!',
    convertSuccess: 'Conversion successful',
    convertError: 'Error converting timestamp',
    invalidInput: 'Invalid input format',
    invalidFormat: 'Invalid format string'
  }
} 