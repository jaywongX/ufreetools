export default {
  name: 'HTML Entity Encoder',
  description: 'Online HTML entity encoding tool, supporting multiple encoding formats',
  options: {
    encodeType: 'Encoding Type',
    encodeNonASCII: 'Encode Non-ASCII Characters',
    encodeReserved: 'Encode Reserved Characters'
  },
  actions: {
    encode: 'Encode',
    decode: 'Decode',
    clear: 'Clear',
    copy: 'Copy',
    swap: 'Swap Input/Output'
  },
  messages: {
    copied: 'Copied to clipboard!',
    inputRequired: 'Please enter some text to encode/decode'
  }
} 