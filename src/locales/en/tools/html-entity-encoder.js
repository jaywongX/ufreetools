export default {
  name: 'HTML Entity Encoder',
  description: 'Convert between HTML text and entity encoding',
  title: 'HTML Entity Encoder/Decoder',
  intro: 'HTML entity encoding is used to convert special characters into a format safe for HTML, commonly used to prevent XSS attacks or display HTML source code.',
  operation: {
    title: 'Operation Type',
    encode: 'HTML Entity Encode',
    decode: 'HTML Entity Decode'
  },
  mode: {
    title: 'Encoding Mode',
    named: 'Named Entities (&amp;lt;)',
    decimal: 'Decimal Entities (&amp;#60;)',
    hex: 'Hexadecimal Entities (&amp;#x3C;)',
    full: 'Full Encoding (all characters)'
  },
  input: {
    encodeTitle: 'Text to Encode',
    decodeTitle: 'Text to Decode',
    encodePlaceholder: 'Enter the HTML or text you want to encode...',
    decodePlaceholder: 'Enter the HTML entity text you want to decode...',
    clear: 'Clear'
  },
  output: {
    encodeTitle: 'Encoded Result',
    decodeTitle: 'Decoded Result',
    copy: 'Copy Result',
    copied: '(Copied!}',
    preview: 'Preview Effect',
    showSource: 'Show Source Code'
  },
  reference: {
    title: 'Entity Reference',
    commonReferenceTables: 'Common HTML Entity Reference Tables',
    show: 'Show Table',
    hide: 'Hide Table',
    description: {
      named: 'Uses named format such as &amp;lt; for < (only applies to common HTML entities)',
      decimal: 'Uses decimal format such as &amp;#60; for <',
      hex: 'Uses hexadecimal format such as &amp;#x3C; for <',
      full: 'Encodes all non-alphanumeric characters, including spaces, line breaks, etc.'
    },
    table: {
      char: 'Character',
      named: 'Named Entity',
      decimal: 'Decimal Entity',
      description: 'Description'
    },
    entities: {
      lt: 'Less-than sign',
      gt: 'Greater-than sign',
      amp: 'Ampersand',
      quot: 'Double quotation mark',
      apos: 'Apostrophe',
      copy: 'Copyright symbol',
      reg: 'Registered trademark',
      trade: 'Trademark symbol',
      nbsp: 'Non-breaking space',
      cent: 'Cent sign',
      pound: 'Pound sign',
      euro: 'Euro sign',
      yen: 'Yen/RMB sign',
      sect: 'Section sign',
      minus: 'Minus sign',
      times: 'Multiplication sign',
      divide: 'Division sign',
      deg: 'Degree sign',
      plusmn: 'Plus-minus sign',
      frac14: 'One-quarter fraction'
    }
  },
  messages: {
    copySuccess: 'Copied to clipboard',
    copyError: 'Copy failed, please copy manually',
    encodeSuccess: 'Encoding completed',
    decodeSuccess: 'Decoding completed',
    invalidInput: 'Invalid input text'
  }
}