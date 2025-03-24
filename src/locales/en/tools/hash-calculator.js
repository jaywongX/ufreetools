export default {
  name: 'Hash Calculator',
  description: 'Generate and verify hash digests for text or files using various algorithms',
  input: {
    title: 'Input',
    text: 'Text Input',
    file: 'File Input',
    textPlaceholder: 'Enter the text to calculate the hash here...',
    fileSelect: 'Select File',
    fileDrop: 'Drop file here or click to upload',
    fileSelected: 'Selected file: {name}',
    fileSize: '{size}',
    removeFile: 'Remove File',
    localProcessing: 'The file will be processed locally and not uploaded to the server',
    encoding: 'Encoding',
    selectAlgorithm: 'Select Hash Algorithm',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    latin1: 'Latin1',
    calculate: 'Calculate Hash',
    calculating: 'Calculating...',
    clear: 'Clear Input',
    hashValue: 'Hash Value'
  },
  algorithms: {
    title: 'Algorithms',
    selectAll: 'Select All',
    deselectAll: 'Deselect All',
    md5: 'MD5',
    sha1: 'SHA-1',
    sha224: 'SHA-224',
    sha256: 'SHA-256',
    sha384: 'SHA-384',
    sha512: 'SHA-512',
    sha3_224: 'SHA3-224',
    sha3_256: 'SHA3-256',
    sha3_384: 'SHA3-384',
    sha3_512: 'SHA3-512',
    ripemd160: 'RIPEMD-160',
    blake2b: 'BLAKE2b',
    blake2s: 'BLAKE2s',
    blake3: 'BLAKE3',
    keccak224: 'Keccak-224',
    keccak256: 'Keccak-256',
    keccak384: 'Keccak-384',
    keccak512: 'Keccak-512',
    whirlpool: 'Whirlpool',
    crc32: 'CRC32',
    hmac: 'HMAC Options',
    key: 'HMAC Key',
    keyPlaceholder: 'Enter HMAC key'
  },
  results: {
    title: 'Hash Results',
    algorithm: 'Algorithm',
    digest: 'Digest',
    noInput: 'Enter text or select a file to calculate the hash',
    calculating: 'Calculating...',
    copy: 'Copy',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed, please copy manually',
    copyAll: 'Copy All',
    download: 'Download Results',
    fileInfo: 'File Information',
    fileName: 'Name',
    fileSize: 'Size',
    fileType: 'Type',
    lastModified: 'Last Modified',
    hexFormat: 'Hexadecimal Format',
    base64Format: 'Base64 Format',
    upperHexFormat: 'Uppercase Hexadecimal Format'
  },
  verification: {
    title: 'Hash Verification',
    inputVerifyHash: 'Enter the hash to verify',
    placeholder: 'Enter the hash for comparison...',
    paste: 'Paste hash for verification',
    matches: 'Hash matches!',
    doesNotMatch: 'Hash does not match',
    notFound: 'Algorithm not found',
    verify: 'Verify',
    autoDetect: 'Auto-detect Algorithm',
    result: 'Verification Result'
  },
  options: {
    title: 'Options',
    uppercase: 'Uppercase Output',
    showTiming: 'Show Calculation Time',
    autoCalculate: 'Auto Calculate',
    formatOutput: 'Format Long Output',
    binaryOutput: 'Binary View (For Non-Text Files)',
    compareHashes: 'Compare Hashes',
    hmacMode: 'Enable HMAC Mode'
  },
  tools: {
    title: 'Tools',
    batchProcessing: 'Batch Processing',
    fileHashTool: 'File Hash Directory',
    hashIdentifier: 'Hash Type Identifier',
    hmacGenerator: 'HMAC Generator',
    checksumVerifier: 'Checksum Verifier',
    passwordHasher: 'Password Hasher'
  },
  batchTool: {
    title: 'Batch Processing',
    addFiles: 'Add Files',
    processFiles: 'Process Files',
    clearAll: 'Clear All',
    fileName: 'Filename',
    algorithm: 'Algorithm',
    status: 'Status',
    actions: 'Actions',
    waiting: 'Waiting',
    processing: 'Processing',
    complete: 'Complete',
    failed: 'Failed',
    remove: 'Remove',
    filesSelected: '{count} files selected',
    exportResults: 'Export Results',
    selectAlgorithm: 'Select Algorithm for All Files'
  },
  messages: {
    fileTooBig: 'File is too large. Maximum allowed size is 100MB.',
    hashCalculated: 'Hash calculated successfully',
    invalidInput: 'Invalid input',
    readError: 'Failed to read file',
    processingError: 'Error processing file: {error}'
  },
  security: {
    warning: 'Using hash tools on an insecure HTTP connection poses security risks'
  },
  algorithmDetails: {
    title: 'About Hash Algorithms',
    usage: 'Common Usage',
    safe: 'Security',
    md5: {
      name: 'MD5 (128-bit)',
      description: 'MD5 is a widely used hash function that produces a 128-bit (16-byte) hash value, typically represented as a 32-character hexadecimal number.',
      usage: 'File integrity checks, storing passwords (insecure)',
      security: 'Proven to lack collision resistance; should not be used in security-sensitive contexts.'
    },
    sha1: {
      name: 'SHA-1 (160-bit)',
      description: 'SHA-1 is a cryptographic hash function that produces a 160-bit (20-byte) hash value, typically represented as a 40-character hexadecimal number.',
      usage: 'Version control systems (e.g., Git), file integrity verification',
      security: 'Proven to have collision attack vulnerabilities; not recommended for security-critical applications.'
    },
    sha256: {
      name: 'SHA-256 (256-bit)',
      description: 'SHA-256 belongs to the SHA-2 family and produces a 256-bit (32-byte) hash value, typically represented as a 64-character hexadecimal number.',
      usage: 'Digital signatures, digital certificates, password storage, blockchain',
      security: 'Currently considered secure and widely used in high-security scenarios.'
    },
    sha384: {
      name: 'SHA-384 (384-bit)',
      description: 'SHA-384 is a truncated version of SHA-512, producing a 384-bit (48-byte) hash value.',
      usage: 'Scenarios requiring higher security than SHA-256',
      security: 'Provides stronger security than SHA-256 with no known attack methods.'
    },
    sha512: {
      name: 'SHA-512 (512-bit)',
      description: 'SHA-512 is the longest standard algorithm in the SHA-2 family, producing a 512-bit (64-byte) hash value.',
      usage: 'Applications requiring the highest level of security',
      security: 'Provides the highest level of security with no known effective attacks.'
    },
    sha3_256: {
      name: 'SHA3-256 (256-bit)',
      description: 'SHA3-256 is part of the SHA-3 standard and has a completely different internal structure from the SHA-2 series.',
      usage: 'Long-term security applications resistant to quantum computing threats',
      security: 'Designed to resist future potential attacks, including quantum computing attacks.'
    },
    sha3_512: {
      name: 'SHA3-512 (512-bit)',
      description: 'SHA3-512 is the algorithm in the SHA-3 standard that provides the highest level of security.',
      usage: 'Scenarios requiring extremely high security and resistance to quantum computing',
      security: 'Provides the highest level of security assurance and is the safest algorithm in the SHA-3 series.'
    },
    ripemd160: {
      name: 'RIPEMD-160 (160-bit)',
      description: 'RIPEMD-160 is a hash function developed by the European RIPE project, producing a 160-bit hash value.',
      usage: 'Bitcoin address generation, blockchain applications',
      security: 'More secure than SHA-1 of the same length but less commonly used.'
    }
  }
}