export default {
  name: 'Hexadecimal Case Converter',
  description: 'Convert and format hexadecimal strings between uppercase and lowercase, with different prefixes, separators, and grouping options',

  input: {
    title: 'Input Hexadecimal',
    placeholder: 'Enter hexadecimal value...'
  },

  output: {
    title: 'Converted Result',
    placeholder: 'Converted result will appear here...'
  },

  prefix: {
    title: 'Prefix',
    none: 'None',
  },

  format: {
    title: 'Case Format',
    uppercase: 'UPPERCASE',
    lowercase: 'lowercase'
  },

  separator: {
    title: 'Separator',
    none: 'None',
    space: 'Space',
    comma: 'Comma',
    colon: 'Colon',
    semicolon: 'Semicolon'
  },

  grouping: {
    title: 'Grouping (bytes)',
    none: 'None'
  },

  actions: {
    copy: 'Copy',
    clear: 'Clear',
    convert: 'Convert'
  },

  messages: {
    copied: 'Copied to clipboard',
    copyFailed: 'Failed to copy',
    invalidHex: 'Invalid hexadecimal value'
  },

  examples: {
    title: 'Examples',
    example1: {
      title: 'Hello World in Hex',
    },
    example2: {
      title: 'ASCII Hello with 0x Prefix',
    },
    example3: {
      title: 'DEADBEEF (Common Debug Value)',
    },
    example4: {
      title: 'MAC Address Format',
    }
  },

  tips: {
    title: 'Tips',
    tip1: 'Hexadecimal values use characters 0-9 and A-F (or a-f)',
    tip2: 'Different prefixes are used in different contexts: 0x in programming, # in colors, etc.',
    tip3: 'Use grouping and separators for better readability of long hex strings',
    tip4: 'MAC addresses typically use colon separators with 1-byte grouping'
  }
};