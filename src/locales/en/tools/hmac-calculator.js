export default {
  name: 'HMAC Calculator',
  description: 'Calculate HMAC (Hash-based Message Authentication Code) for your data',
  input: {
    title: 'Input',
    message: 'Message',
    messagePlaceholder: 'Enter message to authenticate',
    key: 'Secret Key',
    keyPlaceholder: 'Enter your secret key',
    file: 'File',
    text: 'Text',
    fileSelect: 'Select File',
    fileDrop: 'or drop file here',
    fileSelected: 'Selected file: {name}',
    clearFile: 'Clear File',
    encoding: 'Input Encoding',
    keyEncoding: 'Key Encoding',
    outputFormat: 'Output Format',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'Hex',
    binary: 'Binary',
    calculate: 'Calculate HMAC',
    clear: 'Clear All'
  },
  algorithms: {
    title: 'Algorithm',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160'
  },
  result: {
    title: 'HMAC Result',
    digest: 'HMAC Digest',
    copy: 'Copy',
    copied: 'Copied!',
    noResult: 'Enter message and key to calculate HMAC',
    calculating: 'Calculating...'
  },
  validation: {
    title: 'HMAC Validation',
    hmacToVerify: 'HMAC to verify',
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
    ms: 'ms'
  },
  messages: {
    noMessage: 'Please enter a message',
    noKey: 'Please enter a secret key',
    invalidEncoding: 'Invalid encoding format',
    processingError: 'Error processing: {error}',
    success: 'HMAC calculated successfully',
    invalidKey: 'Invalid key format for selected encoding',
    fileTooBig: 'File is too large. Maximum size is 5MB'
  },
  security: {
    title: 'Security Notes',
    keyStorage: 'Never share your secret key',
    keyStrength: 'Use a strong, unique key for each application',
    recommendation: 'For security-critical applications, use at least HMAC-SHA256',
    warning: 'HMAC-MD5 and HMAC-SHA1 may not be suitable for high-security applications'
  }
} 