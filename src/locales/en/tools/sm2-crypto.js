export default {
  name: 'SM2 Crypto',
  description: 'Generate key pairs, encrypt/decrypt data and create/verify signatures using SM2 cryptography',
  tabs: {
    title: 'Function Selection',
    keyGeneration: 'Key Generation',
    encryptDecrypt: 'Encrypt/Decrypt',
    signVerify: 'Sign/Verify'
  },
  keyGeneration: {
    title: 'SM2 Key Pair Generation',
    generateButton: 'Generate Key Pair',
    generating: 'Generating...',
    publicKey: 'Public Key',
    privateKey: 'Private Key',
    exportPublicKey: 'Export Public Key',
    exportPrivateKey: 'Export Private Key',
    copy: 'Copy',
    info: {
      title: 'About SM2 Key Pairs',
      description: 'SM2 is an elliptic curve cryptography algorithm released by the Chinese National Cryptography Administration:',
      points: [
        'Public Key: Can be shared with others, used to encrypt data or verify signatures',
        'Private Key: Must be kept secure, used to decrypt data or create signatures'
      ],
      features: 'SM2 Algorithm Features:',
      featuresList: [
        'Based on 256-bit elliptic curve, security equivalent to RSA 3072-bit',
        'Fast execution, short keys',
        'Chinese national standard (GB/T 32918 series), suitable for commercial cryptography in China',
        'Integrates encryption, signature, and key exchange functions'
      ],
      securityTip: 'Security Tip: Never share your private key with anyone, keep your key pair secure.'
    }
  },
  encryptDecrypt: {
    title: 'Operation Type',
    encrypt: 'Encrypt',
    decrypt: 'Decrypt',
    keyLabel: {
      encrypt: 'Public Key',
      decrypt: 'Private Key'
    },
    dataLabel: {
      encrypt: 'Data to Encrypt',
      decrypt: 'Data to Decrypt'
    },
    keyPlaceholder: 'Paste SM2 key',
    dataPlaceholder: {
      encrypt: 'Enter text to encrypt',
      decrypt: 'Enter ciphertext to decrypt'
    },
    processButton: {
      encrypt: 'Encrypt',
      decrypt: 'Decrypt'
    },
    processing: 'Processing...',
    resultLabel: {
      encrypt: 'Encryption Result',
      decrypt: 'Decryption Result'
    },
    info: {
      title: 'SM2 Encryption/Decryption Instructions',
      usage: 'How to use SM2 encryption/decryption:',
      points: [
        'Encryption: Use the recipient\'s public key to encrypt data that only they can decrypt',
        'Decryption: Use your private key to decrypt data encrypted with your public key'
      ],
      limitations: 'Limitations:',
      limitationsList: [
        'SM2 algorithm has plaintext length limitations, suitable for short messages, keys or sensitive data',
        'For long text encryption, consider using symmetric encryption (like SM4) first, then encrypt the symmetric key with SM2'
      ],
      note: 'Note: SM2 encrypted data format is not compatible with RSA, ensure the recipient supports SM2 algorithm.'
    }
  },
  signVerify: {
    title: 'Operation Type',
    sign: 'Sign',
    verify: 'Verify',
    keyLabel: {
      sign: 'Private Key',
      verify: 'Public Key'
    },
    dataLabel: 'Data to {operation}',
    signatureLabel: 'Signature',
    signatureValue: 'Generated Signature',
    keyPlaceholder: 'Paste SM2 key',
    dataPlaceholder: 'Enter original data text',
    signaturePlaceholder: 'Enter signature to verify',
    processButton: {
      sign: 'Generate Signature',
      verify: 'Verify Signature'
    },
    processing: 'Processing...',
    verificationSuccess: 'Signature verification successful! Data is intact and unaltered.',
    verificationFailed: 'Signature verification failed! Data may have been tampered with or signature is incorrect.',
    info: {
      title: 'SM2 Signature/Verification Instructions',
      mainUses: 'Main uses of SM2 digital signatures:',
      usesList: [
        'Data Integrity: Ensure data hasn\'t been altered during transmission',
        'Authentication: Verify data truly comes from the claimed sender',
        'Non-repudiation: Sender cannot deny sending the message'
      ],
      usage: 'How to use:',
      usageList: [
        'Signing: Use your private key to generate a signature for your data',
        'Verification: Use the sender\'s public key to verify the signature\'s authenticity'
      ],
      note: 'Note: SM2 signatures use China\'s cryptographic standards, which are not compatible with international signature algorithms, requiring the recipient to support SM2 algorithm.'
    }
  },
  messages: {
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed, please copy manually',
    keygenError: 'Error generating key pair: {error}',
    processError: 'Operation failed. Please check your key and input data.',
    emptyKey: 'Please enter a key',
    emptyData: 'Please enter data to process'
  }
} 