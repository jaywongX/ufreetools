export default {
  name: 'Base64 Converter',
  description: 'Encode and decode Base64 text and files',
  options: {
    mode: 'Mode',
    outputFormat: 'Output Format',
    lineBreaks: 'Line Breaks',
    urlSafe: 'URL-Safe Base64'
  },
  modes: {
    encode: 'Encode',
    decode: 'Decode',
    fileEncode: 'Encode File',
    fileDecode: 'Decode to File'
  },
  formats: {
    text: 'Text',
    hex: 'Hexadecimal',
    binary: 'Binary'
  },
  actions: {
    convert: 'Convert',
    swap: 'Swap Input/Output',
    copy: 'Copy Result',
    clear: 'Clear',
    download: 'Download Result',
    upload: 'Upload File'
  },
  messages: {
    copied: 'Copied to clipboard!',
    encodeSuccess: 'Encoded to Base64 successfully',
    decodeSuccess: 'Decoded from Base64 successfully',
    invalidBase64: 'Invalid Base64 input',
    fileEncoded: 'File encoded successfully',
    fileDecoded: 'File decoded successfully'
  }
} 