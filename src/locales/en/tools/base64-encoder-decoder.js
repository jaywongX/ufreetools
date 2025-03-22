export default {
  name: 'Base64 Encoder/Decoder',
  description: 'Encode or decode text and files to/from Base64 format',
  actions: {
    encode: 'Encode',
    decode: 'Decode',
    clear: 'Clear',
    copy: 'Copy',
    upload: 'Upload File',
    download: 'Download'
  },
  options: {
    title: 'Options',
    mode: 'Mode',
    textMode: 'Text',
    fileMode: 'File',
    urlSafe: 'URL-safe encoding',
    lineBreaks: 'Add line breaks every 76 characters',
    autoDetect: 'Auto-detect Base64 input'
  },
  input: {
    title: 'Input',
    placeholder: 'Enter text to encode or decode',
    dragDrop: 'Drag & drop files here or click to select',
    fileInfo: 'File: {name}, Size: {size}'
  },
  output: {
    title: 'Result',
    placeholder: 'Result will appear here',
    info: 'Length: {length} characters, Size: {size}'
  },
  messages: {
    copied: 'Copied to clipboard!',
    encodeSuccess: 'Text encoded successfully',
    decodeSuccess: 'Text decoded successfully',
    encodeError: 'Error encoding text',
    decodeError: 'Error decoding Base64',
    invalidBase64: 'Invalid Base64 input',
    emptyInput: 'Please enter text to encode/decode',
    fileTooLarge: 'File is too large (max {max}MB)',
    fileEncoded: 'File encoded successfully',
    fileDecoded: 'File decoded successfully'
  },
  tips: {
    title: 'Usage Tips',
    encoding: 'Base64 encoding increases data size by approximately 33%.',
    urlSafe: 'URL-safe Base64 replaces "+" with "-" and "/" with "_" for use in URLs.',
    binary: 'When encoding binary files, download the result rather than copying.',
    decoding: 'Not all text is valid Base64. Check for proper padding (ending with = or ==).'
  }
} 