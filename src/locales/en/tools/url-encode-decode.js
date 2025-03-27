export default {
  name: 'URL Encode Decode',
  description: 'URL encoding converts special characters into a format that is acceptable for URLs, commonly used for URL parameters and form submissions.',
  options: {
    operationType: 'Operation Type',
    encodeMode: 'Encoding Mode'
  },
  encodeOptions: {
    standard: 'Standard Encoding (encodeURI)',
    component: 'Component Encoding (encodeURIComponent)',
    full: 'Full Encoding (all characters)',
    standardDescription: 'Encodes the entire URL while preserving URL structure characters',
    componentDescription: 'Suitable for URL parameters, encodes all special characters',
    fullDescription: 'Encodes all non-alphanumeric characters, including spaces (as %20 not +)'
  },
  actions: {
    encode: 'URL Encode',
    decode: 'URL Decode',
    clear: 'Clear',
    copyResult: 'Copy Result'
  },
  input: {
    textToEncode: 'Text to Encode',
    textToDecode: 'Text to Decode',
    encodePlaceholder: 'Enter URL or text to encode...',
    decodePlaceholder: 'Enter URL or text to decode...'
  },
  output: {
    encodeResult: 'Encode Result',
    decodeResult: 'Decode Result'
  },
  messages: {
    copied: '(Copied!)',
    error: 'Error: {message}',
    decodeError: 'Unable to decode: "{text}"',
    copyFailed: 'Copy failed, please copy manually'
  },
  referenceTable: {
    title: 'Common URL Character Encoding Reference',
    showTable: 'Show Table',
    hideTable: 'Hide Table',
    character: 'Character',
    encoded: 'URL Encoded',
    description: 'Description',
    descriptions: {
      space: 'Space',
      exclamation: 'Exclamation Mark',
      doubleQuote: 'Double Quote',
      hash: 'Hash',
      dollar: 'Dollar Sign',
      percent: 'Percent Sign',
      ampersand: 'Ampersand',
      singleQuote: 'Single Quote',
      leftParenthesis: 'Left Parenthesis',
      rightParenthesis: 'Right Parenthesis',
      asterisk: 'Asterisk',
      plus: 'Plus Sign',
      comma: 'Comma',
      slash: 'Forward Slash',
      colon: 'Colon',
      semicolon: 'Semicolon',
      lessThan: 'Less Than',
      equals: 'Equals Sign',
      greaterThan: 'Greater Than',
      questionMark: 'Question Mark',
      at: 'At Sign',
      leftBracket: 'Left Bracket',
      backslash: 'Backslash',
      rightBracket: 'Right Bracket',
      caret: 'Caret',
      backtick: 'Backtick',
      leftBrace: 'Left Brace',
      pipe: 'Pipe',
      rightBrace: 'Right Brace',
      tilde: 'Tilde',
      chinese: 'UTF-8 Encoded Chinese'
    }
  }
} 