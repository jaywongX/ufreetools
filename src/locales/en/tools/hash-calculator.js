export default {
  name: 'Online Hash Calculator | Supports SHA-256, MD5, SHA3, BLAKE3, SM3 & More',
  description: 'Supporting over 30 hash algorithms including SHA-256, MD5, SHA3, BLAKE3, SM3, CRC32, RIPEMD, KECCAK, SHAKE, and more — this free online tool helps you generate hash values for any text or file.',

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
    upperHexFormat: 'Uppercase Hexadecimal Format',
    hashValue: 'Hash Value',
    allHashesTitle: 'All Hash Algorithm Results',
    hexFormat: 'Hexadecimal Format',
    algorithm: 'Algorithm',
    digest: 'Digest',
    export: 'Export CSV',
    calculating: 'Calculating...',
    copyToClipboard: 'Copy to clipboard',
    allHashesTitle: 'All Hash Results',
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
    hmacMode: 'Enable HMAC Mode',
    autoVerify: 'Auto Verify Hashes',
    autoCalculate: 'Auto Calculate',
    showAllHashes: 'Show All Hash Algorithms Hash Values'
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
    processingError: 'Error processing file: {error}',
    algorithmNotAvailable: 'Algorithm not available. Please install the required library.'
  },

  security: {
    warning: 'Using hash tools on an insecure HTTP connection poses security risks'
  },

  algorithmDetails: {
    title: 'About Hash Algorithms',
    usage: 'Common Usage',
    safe: 'Security',
    md2: {
      name: 'MD2 (128-bit)',
      description: 'MD2 is a widely used hash function that produces a 128-bit (16-byte) hash value, typically represented as a 32-character hexadecimal number.',
      usage: 'File integrity checks, storing passwords (insecure)',
      security: 'Proven to lack collision resistance; should not be used in security-sensitive contexts.'
    },
    md4: {
      name: 'MD4 (128-bit)',
      description: 'MD4 is a widely used hash function that produces a 128-bit (16-byte) hash value, typically represented as a 32-character hexadecimal number.',
      usage: 'File integrity checks, storing passwords (insecure)',
      security: 'Proven to lack collision resistance; should not be used in security-sensitive contexts.'
    },
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
    sha224: {
      name: 'SHA-224 (224-bit)',
      description: 'SHA-224 is a member of the SHA-2 family, generating a 224-bit (28-byte) hash value.',
      usage: 'Suitable for scenarios requiring strong security but with space constraints',
      security: 'Provides good security, is a truncated version of SHA-256'
    },
    sha256: {
      name: 'SHA-256 (256-bit)',
      description: 'SHA-256 belongs to the SHA-2 family and produces a 256-bit (32-byte) hash value, typically represented as a 64-character hexadecimal number.',
      usage: 'Digital signatures, digital certificates, password storage, blockchain',
      security: 'Currently considered secure and widely used in high-security scenarios.'
    },
    dsha256: {
      name: 'Double SHA-256',
      description: 'Double SHA-256 is the encryption hash function of executing SHA-256 twice consecutively, namely SHA-256(SHA-256(x)). ',
      usage: 'Used for block hashing, transaction ID and address generation in Bitcoin and many other cryptocurrencies',
      security: 'Provides the same security guarantee as the standard SHA-256, but adds an additional security layer, making it more difficult to calculate the original input in reverse through collisions. '
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
    sha512_224: {
      name: 'SHA-512/224 (224-bit)',
      description: 'SHA-512/224 is a variant of SHA-512 with output truncated to 224 bits.',
      usage: 'Provides a hash with the same length as SHA-224 but based on SHA-512 internal structure',
      security: 'Better performance for longer data while maintaining strong security'
    },
    sha512_256: {
      name: 'SHA-512/256 (256-bit)',
      description: 'SHA-512/256 is a variant of SHA-512 with output truncated to 256 bits.',
      usage: 'Provides better performance than SHA-256 on 64-bit systems',
      security: 'Comparable security to SHA-256, but more efficient on certain hardware'
    },
    sha3_224: {
      name: 'SHA3-224 (224-bit)',
      description: 'SHA3-224 is part of the SHA-3 standard, providing a 224-bit output.',
      usage: 'Suitable for medium security scenarios requiring resistance to quantum computing',
      security: 'Certified secure hash algorithm by NIST, provides good security assurance'
    },
    sha3_256: {
      name: 'SHA3-256 (256-bit)',
      description: 'SHA3-256 is part of the SHA-3 standard and has a completely different internal structure from the SHA-2 series.',
      usage: 'Long-term security applications resistant to quantum computing threats',
      security: 'Designed to resist future potential attacks, including quantum computing attacks.'
    },
    sha3_384: {
      name: 'SHA3-384 (384-bit)',
      description: 'SHA3-384 is part of the SHA-3 standard, providing a 384-bit output.',
      usage: 'Scenarios requiring high security and resistance to quantum computing',
      security: 'Provides stronger security than SHA3-256, suitable for sensitive data applications'
    },
    sha3_512: {
      name: 'SHA3-512 (512-bit)',
      description: 'SHA3-512 is the algorithm in the SHA-3 standard that provides the highest level of security.',
      usage: 'Scenarios requiring extremely high security and resistance to quantum computing',
      security: 'Provides the highest level of security assurance and is the safest algorithm in the SHA-3 series.'
    },
    sm3: {
      name: 'SM3 (256-bit)',
      description: 'SM3 is a cryptographic hash standard issued by the Chinese National Cryptographic Administration, producing a 256-bit output.',
      usage: 'Chinese commercial cryptographic applications, digital certificates, and e-government systems',
      security: 'Design similar to SHA-2 but optimized for attack resistance, widely used in China'
    },
    ripemd160: {
      name: 'RIPEMD-160 (160-bit)',
      description: 'RIPEMD-160 is a hash function developed by the European RIPE project, producing a 160-bit hash value.',
      usage: 'Bitcoin address generation, blockchain applications',
      security: 'More secure than SHA-1 of the same length but less commonly used.'
    },
    crc32: {
      name: 'CRC32 (32-bit)',
      description: 'CRC32 is a cyclic redundancy check function commonly used for error detection.',
      usage: 'Data integrity verification, network communications, data transmission validation',
      security: 'Not suitable for cryptographic security purposes, primarily used for error detection rather than security protection'
    },
    murmur3_x86_32: {
      name: 'MurmurHash3 x86 (32-bit)',
      description: 'MurmurHash3 is a non-encrypted hash function, renowned for its high performance and low collision rate. The 32-bit version is suitable for applications that require speed and space efficiency. ',
      usage: 'Hash table, Bloom Filter, Cache system, Data sharding',
      security: 'Non-encryption algorithm, not suitable for security applications, but performs well in performance-critical scenarios'
    },
    murmur3_x86_128: {
      name: 'MurmurHash3 x86 (128 bits)',
      description: 'The 128-bit variant of MurmurHash3 offers a larger hash space and a lower collision probability, making it suitable for large-scale datasets. ',
      usage: 'Large hash tables, data deduplication, consistent hashing in distributed systems, content addressing storage',
      security: 'Like the 32-bit version, it is a non-encrypted algorithm, but has a lower collision probability and is suitable for application scenarios that require high uniqueness.'
    },
    murmur3_x64_128: {
      name: 'MurmurHash3 x64 (128 bits)',
      description: 'The 128-bit variant of MurmurHash3 offers a larger hash space and a lower collision probability, making it suitable for large-scale datasets. ',
      usage: 'Large hash tables, data deduplication, consistent hashing in distributed systems, content addressing storage',
      security: 'Like the 32-bit version, it is a non-encrypted algorithm, but has a lower collision probability and is suitable for application scenarios that require high uniqueness.'
    },
    keccak224: {
      name: 'Keccak-224 (224-bit)',
      description: 'Keccak-224 is the original algorithm that SHA-3 was based on, producing a 224-bit hash value.',
      usage: 'Ethereum and other blockchain applications, cryptographic systems',
      security: 'Provides strong security and is more commonly used in blockchain technologies than the standardized SHA-3 variant'
    },
    keccak256: {
      name: 'Keccak-256 (256-bit)',
      description: 'Keccak-256 is the most widely used variant of the Keccak family, producing a 256-bit hash value.',
      usage: 'Ethereum smart contracts, blockchain transactions, digital signatures',
      security: 'Widely trusted in blockchain applications and differs slightly from the standardized SHA3-256'
    },
    keccak384: {
      name: 'Keccak-384 (384-bit)',
      description: 'Keccak-384 is a variant of the Keccak family, producing a 384-bit hash value.',
      usage: 'Applications requiring higher security than Keccak-256',
      security: 'Provides very strong security assurance but is less commonly used than Keccak-256'
    },
    keccak512: {
      name: 'Keccak-512 (512-bit)',
      description: 'Keccak-512 is the longest standard algorithm in the Keccak family, producing a 512-bit hash value.',
      usage: 'High-security applications requiring maximum collision resistance',
      security: 'Provides maximum security in the Keccak family, suitable for the most sensitive data'
    },
    blake2b: {
      name: 'BLAKE2b (512-bit)',
      description: 'BLAKE2b is a high-speed cryptographic hash function optimized for 64-bit platforms.',
      usage: 'Fast file integrity checking, content-addressed storage, digital signatures',
      security: 'Provides both high security and excellent performance, faster than MD5 while being cryptographically secure'
    },
    blake2s: {
      name: 'BLAKE2s (256-bit)',
      description: 'BLAKE2s is a variant of BLAKE2 optimized for 8-to-32-bit platforms.',
      usage: 'Resource-constrained environments, embedded systems, hardware implementations',
      security: 'Offers strong security in a lightweight package, suitable for environments with memory constraints'
    },
    blake3: {
      name: 'BLAKE3 (256-bit)',
      description: 'BLAKE3 is a fast and secure cryptographic hash function optimized for modern CPUs.',
      usage: 'High-performance hash computations, cryptographic applications, data integrity verification',
      security: 'Provides strong security and excellent performance, faster than MD5 while being cryptographically secure'
    },
    shake128: {
      name: 'SHAKE128 (128-bit)',
      description: 'SHAKE128 is part of the SHA-3 family, capable of producing variable-length outputs, defaulting to 256-bit hashes.',
      usage: 'Cryptographic applications requiring variable-length outputs, key derivation functions',
      security: 'Provides good security, is a NIST-recognized secure hash algorithm'
    },
    shake256: {
      name: 'SHAKE256 (256-bit)',
      description: 'SHAKE256 is part of the SHA-3 family, capable of producing variable-length outputs, defaulting to 512-bit hashes.',
      usage: 'High-security applications requiring longer hash outputs, key derivation functions',
      security: 'Provides stronger security than SHAKE128, suitable for sensitive data applications'
    },
    cshake128: {
      name: 'cSHAKE128 (Customizable Variable Length)',
      description: 'cSHAKE128 is a customizable version of SHAKE128, supporting custom strings and function names, capable of producing variable-length outputs.',
      usage: 'Scenarios requiring customized hash parameters, NIST standard key derivation functions, cryptographic protocols',
      security: 'Provides security comparable to SHAKE128 while supporting application-level customization'
    },
    cshake256: {
      name: 'cSHAKE256 (Customizable Variable Length)',
      description: 'cSHAKE256 is a customizable version of SHAKE256, supporting custom strings and function names, capable of producing variable-length outputs.',
      usage: 'High-security custom hash scenarios, NIST-certified derivation functions, cryptographic protocols',
      security: 'Provides strong security assurance comparable to SHAKE256 while allowing application-level parametrized customization'
    },
  },

  listGroups: {
    common: 'Common',
    sha2: 'SHA-2 Family',
    sha3: 'SHA-3 Family',
    other: 'Other Algorithms'
  },

  metaTitle: 'Online Hash Calculator - Generate & Verify Cryptographic Hashes',
  metaDescription: 'Free online hash calculator tool to generate and verify cryptographic hashes for text or files. Supports multiple algorithms including {algorithms}.'
};