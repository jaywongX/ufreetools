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
  },
  article: {
    title: "Hash Calculator: Generate and Verify Cryptographic Hash Digests",
    features: {
      title: "Understanding Hash Functions and Their Applications",
      description: "The <strong>Hash Calculator</strong> is a versatile <strong>cryptographic tool</strong> designed to generate fixed-length digests (hash values) from any input data, whether text or files. This <strong>hash generator</strong> implements multiple industry-standard algorithms including MD5, SHA-1, SHA-256, SHA-512, and more advanced options like SHA3 and RIPEMD-160.<br><br>Unlike encryption, hash functions are one-way operations – they transform data into a unique <strong>hash digest</strong> that cannot be reversed to reveal the original input. A critical property of cryptographic hashes is that even a tiny change to the input creates a completely different output, making these <strong>hash algorithms</strong> excellent for verifying data integrity and detecting unauthorized modifications. Our <strong>online hash calculator</strong> provides a user-friendly interface for computing these mathematical fingerprints, allowing you to verify file integrity, check password security, or implement data validation systems with ease.",
      useCases: {
        title: "Practical Applications for Hash Functions",
        items: [
          "<strong>File Integrity Verification</strong>: Confirm that downloaded files haven't been corrupted or tampered with by comparing their <strong>hash values</strong> with those provided by the original source. This <strong>checksum verification</strong> ensures the exact bit-for-bit accuracy of files, particularly important for software distribution.",
          "<strong>Data Deduplication</strong>: Identify duplicate files regardless of filename by comparing their <strong>hash signatures</strong>. Storage systems use this technique to eliminate redundant data copies, optimizing storage efficiency without manually comparing file contents.",
          "<strong>Password Security</strong>: Store <strong>password hashes</strong> instead of actual passwords in authentication systems. This security practice ensures that even if a database is compromised, actual user passwords remain protected since the hash cannot be reversed.",
          "<strong>Digital Forensics</strong>: Create <strong>file fingerprints</strong> to establish evidence authenticity in digital investigations. Forensic experts use hash values to prove that evidence has not been modified during the investigation process.",
          "<strong>Blockchain Applications</strong>: Secure transaction records in distributed ledgers through <strong>cryptographic hashing</strong>. Each block in a blockchain contains the hash of the previous block, creating a chain of data that's extremely difficult to modify retroactively.",
          "<strong>Content Addressing</strong>: Generate unique identifiers for content in distributed systems using <strong>content hash values</strong>. This enables content-addressable storage where data can be retrieved based on what it contains rather than its location."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about Hash Functions",
      items: [
        {
          question: "What is the difference between MD5, SHA-1, and SHA-256?",
          answer: "These are different cryptographic hash algorithms that vary in terms of security and output length. MD5 produces a 128-bit (16-byte) hash value but is considered cryptographically broken as collisions have been found (different inputs producing the same hash). SHA-1 generates a 160-bit (20-byte) hash and, while stronger than MD5, is also no longer recommended for security-critical applications due to theoretical attacks. SHA-256, part of the SHA-2 family, creates a 256-bit (32-byte) hash and remains secure for most current applications. When using our hash calculator, we recommend choosing SHA-256 or stronger algorithms (SHA-512, SHA3) for security-sensitive purposes, while MD5 and SHA-1 may still be suitable for non-security applications like checksums and deduplication."
        },
        {
          question: "How secure are cryptographic hash functions?",
          answer: "The security of hash functions depends on specific algorithm properties: collision resistance (difficulty finding two inputs with the same hash), preimage resistance (impossibility of determining input from its hash), and second-preimage resistance (difficulty finding another input with the same hash as a given input). Modern algorithms like SHA-256, SHA-512, and SHA3 implemented in our hash generator are considered cryptographically secure, but older algorithms like MD5 and SHA-1 have known vulnerabilities. Security standards evolve over time as computational power increases and new attack methods are discovered. For applications requiring high security, always use the latest recommended hash functions (currently SHA-256 or stronger) and stay informed about cryptographic advancements."
        },
        {
          question: "Can I verify file integrity using the Hash Calculator?",
          answer: "Yes, our online hash calculator is perfect for file integrity verification. When downloading software, many providers publish hash checksums of their files. To verify integrity, simply select the downloaded file in our tool, choose the same hash algorithm the provider used (often SHA-256), calculate the hash, and compare it with the published value. If they match exactly, your file is intact and unmodified. This verification process protects against both accidental corruption during download and potential malicious tampering. The tool processes files locally in your browser, making it convenient even for large files while maintaining privacy and security."
        },
        {
          question: "Is this hash calculator suitable for password hashing?",
          answer: "While our hash calculator can demonstrate how password hashing works, for actual password storage implementations, specialized password-hashing functions like bcrypt, Argon2, or PBKDF2 should be used instead of raw hash functions. These specialized algorithms incorporate important security features such as salting (adding random data to each password before hashing) and key stretching (making the hashing process deliberately slow) to defend against rainbow table attacks and brute-force attempts. Our tool is excellent for educational purposes or testing general hash behavior, but production systems should implement purpose-built password hashing libraries with proper salting, stretching, and security best practices."
        },
        {
          question: "How do I compare or verify hashes of different formats?",
          answer: "Our hash calculator makes comparing hashes simple regardless of format differences. The tool displays results in multiple formats including lowercase hexadecimal (the most common format), uppercase hexadecimal, and Base64 encoding. To verify a hash: 1) Calculate the hash of your data, 2) Enter the hash you want to compare in the verification section, and 3) The tool will automatically compare them, handling case sensitivity appropriately. This verification works even if your reference hash is in a different case (upper vs lowercase) than the calculated hash. For cross-algorithm verification, you'll need to recalculate the hash using the same algorithm as your reference hash, as different algorithms produce fundamentally different outputs even for identical input data."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the Hash Calculator",
      steps: [
        "<strong>Select Input Type</strong>: Choose between 'Text' or 'File' input options depending on what you want to hash. Text input is ideal for strings, passwords, or small pieces of data, while file input allows processing entire files of any type.",
        "<strong>Choose the Hash Algorithm</strong>: Select the appropriate <strong>hash algorithm</strong> from the dropdown menu. For general purposes and high security, SHA-256 is recommended. For compatibility with specific systems, you might need to select MD5, SHA-1, or other algorithms.",
        "<strong>Enter Your Data</strong>: For text input, type or paste your text into the input field. For file input, click the upload area or drag and drop your file. The <strong>hash function</strong> will process this input to generate a unique digest.",
        "<strong>Set Encoding Options</strong>: If you're using text input, select the appropriate character encoding (UTF-8 is the most common and recommended for most texts). This ensures that the text is interpreted correctly before hashing.",
        "<strong>Generate the Hash</strong>: Click the 'Calculate Hash' button to process your input and generate the <strong>hash digest</strong>. The tool will compute the hash value using the selected algorithm and display the results.",
        "<strong>View and Copy Results</strong>: The calculated hash will be displayed in multiple formats (hexadecimal and Base64). Use the copy button next to each format to copy the hash value to your clipboard for use in other applications.",
        "<strong>Verify Hash (Optional)</strong>: To verify against an existing hash, enter the reference hash in the verification section below the results. The system will automatically compare it with your calculated hash and indicate whether they match."
      ]
    },
    conclusion: "The Hash Calculator provides a powerful yet accessible way to leverage cryptographic hash functions for a wide range of applications, from basic file integrity verification to advanced security implementations. By offering multiple industry-standard algorithms and a user-friendly interface, this tool bridges the gap between complex cryptographic concepts and practical everyday applications. Whether you're a developer implementing security features, an IT professional verifying software integrity, or simply curious about how hash functions work, this calculator gives you immediate access to robust cryptographic capabilities directly in your browser. Understanding and utilizing hash functions is becoming increasingly important in our digital world, where data integrity and security are paramount concerns across personal and professional domains."
  }
}