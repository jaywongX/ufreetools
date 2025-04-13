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
  },
  article: {
    title: "Symmetric Encryption: Comprehensive Data Security Tool",
    features: {
      title: "Understanding Symmetric Encryption and Its Capabilities",
      description: "The <strong>Symmetric Encryption</strong> tool is a powerful <strong>cryptographic utility</strong> that enables you to secure sensitive data through various industry-standard encryption algorithms. Unlike asymmetric encryption which uses key pairs, symmetric encryption utilizes a single <strong>secret key</strong> for both encryption and decryption processes. Our tool supports multiple algorithms including <strong>AES (Advanced Encryption Standard)</strong>, <strong>DES (Data Encryption Standard)</strong>, <strong>Triple DES</strong>, and <strong>SM4 (Chinese National Standard)</strong>.<br><br>The core functionality includes text and file encryption with configurable options such as <strong>encryption modes</strong> (CBC, ECB, CFB, OFB, CTR), <strong>padding methods</strong>, and flexible input/output formats. This <strong>data encryption tool</strong> provides a user-friendly interface to implement robust security measures without requiring extensive cryptographic knowledge, making advanced encryption accessible to everyone while maintaining high security standards.",
      useCases: {
        title: "Practical Applications of Symmetric Encryption",
        items: [
          "<strong>Secure File Sharing</strong>: Encrypt sensitive documents, spreadsheets, or media files before sharing them through potentially insecure channels. Recipients with the correct key can easily decrypt and access the original content, ensuring confidentiality during transmission.",
          "<strong>Password Storage and Management</strong>: Create encrypted storage for your passwords and authentication credentials. By encrypting this sensitive information with a master password, you can maintain a secure collection of login details while only needing to remember a single strong password.",
          "<strong>API Authentication</strong>: Generate and validate encrypted tokens for API authentication systems. Symmetric encryption provides a balance between security and performance that's ideal for handling authentication tokens in web applications and services.",
          "<strong>Database Field Encryption</strong>: Protect specific sensitive fields in databases without restructuring your entire system. The <strong>symmetric cipher</strong> allows selective encryption of critical information like personal identifiers, financial details, or private user data.",
          "<strong>Configuration Security</strong>: Encrypt application configuration files containing sensitive credentials such as database passwords, API keys, and service tokens. This prevents exposure of critical access information even if the configuration files are accidentally exposed.",
          "<strong>Secure Communication Channels</strong>: Implement end-to-end encrypted communication by generating symmetric keys for each session. This approach enables secure real-time messaging while maintaining performance for bandwidth-constrained applications."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about Symmetric Encryption",
      items: [
        {
          question: "What's the difference between AES, DES, Triple DES, and SM4 algorithms?",
          answer: "These are different <strong>symmetric encryption algorithms</strong> with varying security levels and performance characteristics. <strong>AES (Advanced Encryption Standard)</strong> is the current global standard, offering excellent security and performance with key sizes of 128, 192, or 256 bits. <strong>DES (Data Encryption Standard)</strong> is an older algorithm with a 56-bit key, now considered insecure for critical applications due to its vulnerability to brute force attacks. <strong>Triple DES</strong> enhances DES security by applying the algorithm three times with different keys, providing stronger protection but with slower performance. <strong>SM4</strong> is China's national standard block cipher algorithm with a 128-bit key size, designed as a counterpart to AES with comparable security. For most modern applications requiring security, AES is the recommended choice due to its optimal balance of strong security and efficiency."
        },
        {
          question: "What encryption mode should I choose for my application?",
          answer: "The <strong>encryption mode</strong> determines how the block cipher algorithm processes data blocks. <strong>ECB (Electronic Codebook)</strong> is simplest but least secure as identical plaintext blocks encrypt to identical ciphertext blocks, potentially revealing patterns. <strong>CBC (Cipher Block Chaining)</strong> adds security by making each encrypted block dependent on previous blocks, requiring an initialization vector (IV). <strong>CFB (Cipher Feedback)</strong>, <strong>OFB (Output Feedback)</strong>, and <strong>CTR (Counter)</strong> modes turn block ciphers into stream ciphers with different characteristics. For general-purpose encryption of sensitive data, CBC offers good security with reasonable performance when implemented correctly with a random IV. CTR mode is excellent for parallelizable implementations and avoids padding requirements. Modern cryptographic systems often prefer authenticated encryption modes like GCM (not directly available in this tool) for both confidentiality and data integrity."
        },
        {
          question: "Is this online encryption tool secure for sensitive data?",
          answer: "This <strong>browser-based encryption tool</strong> processes all data locally in your browser without sending any information to external servers, providing a basic level of confidentiality. However, for truly sensitive information, consider several factors: 1) The tool uses standard <strong>encryption libraries</strong> implemented in JavaScript, which may not have the same security guarantees as audited native implementations. 2) Browser environments face potential threats like browser extensions, malware, or memory inspection. 3) Key management remains critical - if you lose your encryption key, data recovery becomes impossible. For highly sensitive data or production systems, we recommend using dedicated encryption software or cryptographic libraries in controlled environments, with proper key management practices. This tool is most appropriate for educational purposes, occasional use, or encrypting moderately sensitive information."
        },
        {
          question: "How should I handle and share encryption keys securely?",
          answer: "Secure <strong>encryption key management</strong> is crucial for maintaining cryptographic security. Never share keys through the same channel as the encrypted data - this defeats the purpose of encryption since anyone intercepting both could decrypt your information. Instead: 1) Use a separate, secure communication channel for key exchange. 2) Consider key splitting, where different parts of the key are sent through different channels. 3) Employ secure key exchange protocols when possible. 4) For ongoing communications, consider using asymmetric encryption to securely exchange symmetric keys. 5) Implement key rotation practices for long-term security. 6) Store keys securely, never in plaintext, and ideally using specialized key management systems. 7) For maximum security of critical keys, consider hardware security modules (HSMs) or specialized key management services. Remember that the security of your encrypted data is only as strong as your key management practices."
        },
        {
          question: "How do I ensure my encrypted data maintains integrity and hasn't been tampered with?",
          answer: "Standard <strong>symmetric encryption</strong> provides confidentiality but doesn't inherently guarantee data integrity. To verify your encrypted data hasn't been modified: 1) Use authenticated encryption modes when available. While this tool primarily offers traditional modes (CBC, ECB, etc.), modern cryptographic systems prefer authenticated encryption like AES-GCM that provides both confidentiality and integrity verification. 2) Implement a separate integrity check by calculating a cryptographic hash (like SHA-256) or HMAC of your encrypted data and storing it securely. Before decryption, recalculate and compare this value to detect tampering. 3) For critical applications, consider using digital signatures alongside encryption. 4) Always verify the full ciphertext was received by checking its length and structure before decryption. 5) If possible, include version information and other metadata in your encryption scheme to prevent downgrade attacks. These measures help ensure both the confidentiality and integrity of your sensitive information across potentially untrusted channels."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the Symmetric Encryption Tool",
      steps: [
        "<strong>Select an encryption algorithm</strong>: Choose from AES (recommended for most applications), DES, Triple DES, or SM4 (Chinese standard) based on your security requirements and compatibility needs. AES provides the best balance of security and performance for modern applications.",
        "<strong>Choose the mode of operation</strong>: Select an <strong>encryption mode</strong> from the available options (CBC, ECB, CFB, OFB, CTR). For general security purposes, CBC mode is recommended as it provides good security when used with a random initialization vector (IV).",
        "<strong>Configure padding method</strong>: If your selected mode requires padding (like CBC or ECB), choose between PKCS7 (standard) or Zero Padding. This setting determines how the last block is filled when your data length isn't a multiple of the block size.",
        "<strong>Generate or enter your encryption key</strong>: Either enter a custom key or use the \"Generate Random\" button to create a cryptographically strong key. For AES, the key length will be 16, 24, or 32 bytes depending on the desired strength. Select the appropriate input format (string, hex, or Base64) for your key.",
        "<strong>Provide an initialization vector (IV) if required</strong>: For modes other than ECB, you'll need an IV. Click \"Generate Random\" to create a secure random IV, or enter your own. The IV doesn't need to be secret but should be random and unique for each encryption operation.",
        "<strong>Enter the data to encrypt</strong>: Type or paste the text you want to encrypt in the input field. Select the appropriate input format (string for normal text, or hex/Base64 for already encoded data). For decryption, provide the ciphertext in the format it was originally output (typically hex or Base64).",
        "<strong>Process and use the result</strong>: Click the \"Encrypt\" or \"Decrypt\" button to process your data. The result will be displayed in the specified output format. Use the copy button to easily transfer the result to another application or document. For encryption, make sure to safely store both the key and IV (if used) as they'll be required for decryption."
      ]
    },
    conclusion: "The Symmetric Encryption tool offers a powerful yet accessible way to protect your sensitive information using industry-standard cryptographic algorithms. By following proper security practices and understanding the options available, you can effectively implement strong encryption for a wide range of applications, from securing personal files to implementing more complex security systems. While this browser-based tool provides convenience and flexibility for many encryption needs, remember that security-critical applications may require dedicated cryptographic solutions with proper key management infrastructure. Whether you're looking to add a layer of privacy to your personal data or exploring cryptographic concepts, this tool provides a practical introduction to the essential security technique of symmetric encryption."
  }
} 