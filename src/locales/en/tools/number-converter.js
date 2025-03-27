export default {
  name: 'Number Converter',
  description: 'Convert numbers between different numeral systems and formats',
  input: {
    title: 'Enter Number',
    placeholder: 'Enter a number to convert',
    fromBase: 'From Base',
    toBase: 'To Base',
    customBase: 'Custom Base'
  },
  bases: {
    binary: 'Binary (Base 2)',
    octal: 'Octal (Base 8)',
    decimal: 'Decimal (Base 10)',
    hexadecimal: 'Hexadecimal (Base 16)',
    base32: 'Base 32',
    base36: 'Base 36',
    base58: 'Base 58',
    base64: 'Base 64',
    custom: 'Custom Base'
  },
  options: {
    signed: 'Signed',
    bitLength: 'Bit Length',
    byteOrder: 'Byte Order',
    formatOutput: 'Format Output',
    separator: 'Separator',
    prefix: 'Add Prefix',
    uppercase: 'Uppercase'
  },
  byteOrders: {
    littleEndian: 'Little Endian',
    bigEndian: 'Big Endian'
  },
  bitLengths: {
    '8': '8-bit',
    '16': '16-bit',
    '32': '32-bit',
    '64': '64-bit',
    custom: 'Custom'
  },
  output: {
    title: 'Conversion Result',
    binary: 'Binary',
    octal: 'Octal',
    decimal: 'Decimal',
    hexadecimal: 'Hexadecimal',
    custom: 'Custom Base',
    all: 'All Conversions'
  },
  actions: {
    convert: 'Convert',
    clear: 'Clear',
    copy: 'Copy Result',
    swap: 'Swap Bases'
  },
  bitConverters: {
    title: 'Bit Converters',
    ieee754: 'IEEE 754 Floating Point',
    twosComplement: "Two's Complement",
    bitMask: 'Bit Mask',
    bitField: 'Bit Field Extractor'
  },
  calculators: {
    title: 'Calculations',
    add: 'Add',
    subtract: 'Subtract',
    multiply: 'Multiply',
    divide: 'Divide',
    modulo: 'Modulo',
    power: 'Power'
  },
  messages: {
    invalidInput: 'Invalid number for the selected base',
    outOfRange: 'Number out of range for the selected bit length',
    copied: 'Conversion copied to clipboard',
    conversionComplete: 'Conversion complete'
  }
} 