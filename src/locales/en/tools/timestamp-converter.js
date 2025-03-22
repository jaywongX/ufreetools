export default {
  name: 'Timestamp Converter',
  description: 'Convert between timestamps and human-readable dates with support for multiple formats and timezones',
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
    clear: 'Clear',
    refresh: 'Refresh',
    switch: 'Switch'
  },
  messages: {
    copied: 'Copied to clipboard!',
    convertSuccess: 'Conversion successful',
    convertError: 'Error converting timestamp',
    invalidInput: 'Invalid input format',
    invalidFormat: 'Invalid format string'
  },
  timeUnits: {
    milliseconds: 'Milliseconds',
    seconds: 'Seconds',
    minutes: 'Minutes',
    hours: 'Hours',
    days: 'Days'
  },
  labels: {
    unixTimestamp: 'Unix Timestamp (seconds)',
    dateTime: 'Date Time',
    inputValue: 'Input Value',
    unitConversion: 'Time Unit Conversion',
    timeUnitLabel: 'Time Unit'
  },
  placeholders: {
    enterTimestamp: 'Enter Unix timestamp',
    enterValue: 'Enter a numeric value'
  },
  info: {
    aboutTimestamp: 'About Unix Timestamp',
    timestampDescription: 'A Unix timestamp represents the number of seconds that have elapsed since January 1, 1970 (UTC). It is widely used in computer systems and applications for time representation.',
    commonUsage: 'Common Uses:',
    usages: {
      database: 'Database timestamp records',
      api: 'Time representation in API communications',
      logging: 'Log entries',
      filesystem: 'File system timestamps'
    }
  }
} 