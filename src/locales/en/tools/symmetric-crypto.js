export default {
  name: 'Symmetric Encryption',
  description: 'Securely encrypt and decrypt text and files using various symmetric encryption algorithms, including AES, DES, and SM4',
  encryption: {
    title: 'Encryption / Decryption',
    plaintext: 'Plaintext',
    plaintextPlaceholder: 'Enter text to encrypt',
    ciphertext: 'Ciphertext',
    ciphertextPlaceholder: 'Encrypted data will appear here',
    encrypt: 'Encrypt',
    decrypt: 'Decrypt',
    decrypted: 'Decrypted Text',
    decryptedPlaceholder: 'Decrypted data will appear here',
    encryptSuccess: 'Encryption successful',
    decryptSuccess: 'Decryption successful',
    encryptError: 'Encryption failed: {error}',
    decryptError: 'Decryption failed: {error}'
  },
  algorithm: {
    title: 'Select Algorithm',
    aes: 'AES',
    des: 'DES',
    tripledes: 'Triple DES',
    sm4: 'SM4 (Chinese Standard)',
    "3des": 'Triple DES'
  },
  mode: {
    title: 'Mode of Operation',
    ecb: 'ECB - Electronic Codebook Mode',
    cbc: 'CBC - Cipher Block Chaining Mode',
    cfb: 'CFB - Cipher Feedback Mode',
    ofb: 'OFB - Output Feedback Mode',
    ctr: 'CTR - Counter Mode'
  },
  padding: {
    title: 'Padding Method',
    pkcs7: 'PKCS7',
    zeroPadding: 'Zero Padding',
    zeropadding: 'Zero Padding'
  },
  operation: {
    title: 'Operation Type',
    encrypt: 'Encrypt',
    decrypt: 'Decrypt'
  },
  key: {
    title: 'Key',
    label: 'Key',
    placeholder: 'Enter {keySize} key',
    placeholderString: 'Enter {keySize} string key (auto-padded)',
    placeholderHex: 'Enter {keySize} HEX key (auto-padded)',
    placeholderBase64: 'Enter {keySize} Base64 key (auto-padded)',
    generateRandom: 'Generate Random',
    sizeHint: '{keySize}',
    autoFillHint: 'Keys shorter than required length will be zero-padded, longer keys will be truncated'
  },
  iv: {
    title: 'Initialization Vector (IV)',
    label: 'Initialization Vector (IV)',
    placeholder: 'Enter {blockSize} IV',
    placeholderString: 'Enter {blockSize} string IV (auto-padded)',
    placeholderHex: 'Enter {blockSize} HEX IV (auto-padded)',
    placeholderBase64: 'Enter {blockSize} Base64 IV (auto-padded)',
    generateRandom: 'Generate Random',
    sizeHint: '{blockSize}',
    autoFillHint: 'IVs shorter than required length will be zero-padded, longer IVs will be truncated'
  },
  input: {
    title: 'Content to Encrypt',
    titleDecrypt: 'Content to Decrypt',
    clear: 'Clear',
    placeholder: 'Enter text to encrypt',
    placeholderDecrypt: 'Enter {format} format text to decrypt'
  },
  inputFormat: {
    title: 'Input Format',
    string: 'String',
    hex: 'HEX',
    base64: 'Base64'
  },
  output: {
    title: 'Encryption Result',
    titleDecrypt: 'Decryption Result',
    copyResult: 'Copy Result',
    copied: 'Copied'
  },
  outputFormat: {
    title: 'Output Format',
    string: 'String',
    hex: 'HEX',
    base64: 'Base64'
  },
  error: {
    title: 'Error',
    invalidHex: 'Key must be in HEX format',
    invalidIvHex: 'IV must be in HEX format',
    invalidHexInput: 'Invalid HEX format input',
    invalidBase64: 'Invalid Base64 format input',
    unsupportedAlgorithm: 'Unsupported algorithm',
    decryptionFailed: 'Decryption failed: {message}',
    copyFailed: 'Copy failed, please copy manually',
    unknownError: 'An error occurred during processing',
    invalidHexFormat: 'Invalid HEX format',
    invalidBase64Format: 'Invalid Base64 format',
    emptyBase64: 'Invalid Base64 encoding',
    decryptFailed: 'Decryption failed: '
  },
  info: {
    title: 'Algorithm Information',
    algorithms: {
      aes: 'AES: Advanced Encryption Standard, can use 128, 192, or 256-bit keys',
      des: 'DES: Data Encryption Standard, uses 56-bit keys, lower security',
      tripledes: '3DES: Triple DES, uses three 56-bit DES keys for higher security',
      sm4: 'SM4: Chinese National Standard, block cipher algorithm with 128-bit keys',
      "3des": '3DES: Triple DES, uses three 56-bit DES keys for higher security'
    },
    modes: {
      title: 'Operation Modes Information',
      ecb: 'ECB: Electronic Codebook Mode, encrypts blocks independently, not recommended for sensitive data',
      cbc: 'CBC: Cipher Block Chaining Mode, each block depends on the previous one, more secure',
      cfb: 'CFB: Cipher Feedback Mode, transforms block ciphers into stream ciphers',
      ofb: 'OFB: Output Feedback Mode, also a stream cipher mode, uses same operation for encryption and decryption',
      ctr: 'CTR: Counter Mode, encrypts each block using an incrementing counter, allows parallel processing'
    }
  },
  buttons: {
    process: 'Encrypt',
    processDecrypt: 'Decrypt'
  },
  file: {
    title: 'File Encryption',
    select: 'Select File',
    drop: 'or drop file here',
    encrypt: 'Encrypt File',
    decrypt: 'Decrypt File',
    download: 'Download Result',
    selected: 'Selected: {name}',
    size: 'Size: {size}',
    maxSize: 'Maximum size: 100MB',
    encryptingFile: 'Encrypting file...',
    decryptingFile: 'Decrypting file...',
    downloadReady: 'Ready for download',
    fileTooBig: 'File is too large. Maximum allowed size is 100MB.'
  },
  options: {
    title: 'Options',
    autoDecrypt: 'Auto-decrypt after encryption',
    includeMeta: 'Include algorithm metadata in output',
    kdf: 'Key Derivation Function',
    pbkdf2: 'PBKDF2',
    scrypt: 'scrypt',
    argon2: 'Argon2id',
    salt: 'Salt (for key derivation)',
    saltPlaceholder: 'Enter salt in hex or leave for random',
    autoClear: 'Auto-clear sensitive data',
    saveSettings: 'Save settings'
  },
  security: {
    title: 'Security Information',
    description: 'About encryption security',
    warning: 'Warning',
    ecbInsecure: 'ECB mode is not recommended for secure applications as it does not hide data patterns well.',
    useModern: 'For sensitive data, use AES-256 with GCM or CBC mode.',
    keyWarning: 'Protect your encryption keys. If lost, data cannot be recovered.',
    browserWarning: 'Browser-based encryption is convenient but may not be suitable for highly sensitive data.',
    learnMore: 'Learn more about encryption'
  },
  messages: {
    noAlgorithm: 'Please select an encryption algorithm',
    noKey: 'Please enter an encryption key or password',
    invalidKeyLength: 'Invalid key length for selected algorithm',
    invalidIv: 'Invalid IV length for selected algorithm and mode',
    noData: 'Please enter data to encrypt/decrypt',
    padError: 'Padding error - the key or data may be incorrect',
    fileSuccess: 'File processed successfully',
    fileError: 'Error processing file: {error}',
    clipboardError: 'Error copying to clipboard: {error}',
    invalidFormat: 'Invalid input format'
  }
} 