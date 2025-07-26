export default {
  name: 'HMAC Calculator',
  description: 'Compute HMAC (Hash-based Message Authentication Code) for data using a key',
  title: 'HMAC Message Authentication Code Calculator',
  intro: 'Generate message authentication codes using a key, with support for multiple hash algorithms and output formats',

  input: {
    title: 'Input',
    message: 'Message',
    messagePlaceholder: 'Enter the message to authenticate',
    key: 'Key',
    keyLabel: 'Key (Secret Key)',
    keyPlaceholder: 'Enter HMAC key',
    messageLabel: 'Message',
    messageLongPlaceholder: 'Enter the message to compute HMAC',
    file: 'File',
    text: 'Text',
    fileSelect: 'Select File',
    fileDrop: 'Or drag and drop file here',
    fileSelected: 'Selected file: {name}',
    clearFile: 'Clear File',
    encoding: 'Input Encoding',
    keyEncoding: 'Key Encoding',
    outputFormat: 'Output Format',
    inputType: 'Input Type',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'Hexadecimal',
    binary: 'Binary',
    calculate: 'Calculate HMAC',
    calculating: 'Calculating...',
    clear: 'Clear All'
  },

  algorithms: {
    title: 'Algorithms',
    label: 'Hash Algorithm',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'HMAC Result',
    digest: 'HMAC Digest',
    outputLabel: 'HMAC Result',
    copy: 'Copy',
    copied: 'Copied!',
    noResult: 'Enter a message and key to calculate HMAC',
    calculating: 'Calculating...',
    placeholder: 'HMAC result will be displayed here',
    useExample: 'Use Example',
    jsExample: 'JavaScript Example:'
  },

  validation: {
    title: 'HMAC Validation',
    hmacToVerify: 'HMAC to Verify',
    verifyPlaceholder: 'Enter HMAC to verify',
    verify: 'Verify HMAC',
    valid: 'HMAC is valid',
    invalid: 'HMAC is invalid',
    verifying: 'Verifying...'
  },

  options: {
    title: 'Options',
    uppercase: 'Uppercase Output',
    showDetails: 'Show Technical Details',
    autoUpdate: 'Auto Update',
    truncate: 'Truncate Output',
    truncateLength: 'Truncate Length'
  },

  details: {
    title: 'Technical Details',
    algorithm: 'Algorithm',
    keyLength: 'Key Length',
    blockSize: 'Block Size',
    outputLength: 'Output Length',
    execution: 'Execution Time',
    ms: 'Milliseconds'
  },

  messages: {
    noMessage: 'Please enter a message',
    noKey: 'Please enter a key',
    invalidEncoding: 'Invalid encoding format',
    processingError: 'Processing error: {error}',
    success: 'HMAC calculation successful',
    invalidKey: 'Invalid key format for the selected encoding',
    fileTooBig: 'File too large. Maximum size is 5MB',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed, please copy manually',
    invalidHex: 'Key is not in valid hexadecimal format',
    invalidBase64: 'Key is not in valid Base64 format'
  },

  security: {
    title: 'Security Notes',
    keyStorage: 'Never share your key',
    keyStrength: 'Use strong and unique keys for each application',
    recommendation: 'For security-critical applications, use at least HMAC-SHA256',
    warning: 'HMAC-MD5 and HMAC-SHA1 may not be suitable for high-security applications'
  }
};