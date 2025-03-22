export default {
  name: 'Hash Generator',
  description: 'Generate hash values from text or files using various algorithms',
  options: {
    algorithm: 'Algorithm',
    encoding: 'Output Encoding',
    uppercase: 'Uppercase Output',
    includeLength: 'Include Input Length'
  },
  algorithms: {
    md5: 'MD5',
    sha1: 'SHA-1',
    sha256: 'SHA-256',
    sha384: 'SHA-384',
    sha512: 'SHA-512',
    ripemd160: 'RIPEMD-160',
    sha3: 'SHA-3',
    blake2b: 'BLAKE2b',
    blake2s: 'BLAKE2s'
  },
  encodings: {
    hex: 'Hexadecimal',
    base64: 'Base64',
    base64url: 'Base64URL',
    binary: 'Binary'
  },
  actions: {
    generate: 'Generate Hash',
    generateAll: 'Generate All Hashes',
    copy: 'Copy Hash',
    copyAll: 'Copy All Hashes',
    clear: 'Clear',
    upload: 'Upload File'
  },
  messages: {
    copied: 'Copied to clipboard!',
    hashGenerated: 'Hash generated successfully',
    fileProcessed: 'File hashed successfully',
    inputRequired: 'Please enter text or upload a file',
    inputLength: 'Input length: {bytes} bytes',
    tableCopied: 'All hash values copied to clipboard'
  }
} 