export default {
  name: 'RSA Cryptography',
  description: 'Generate RSA key pairs, encrypt/decrypt data, and create/verify digital signatures',
  tabs: {
    title: 'Function Selection',
    keyGeneration: 'Key Generation',
    encryptDecrypt: 'Encrypt/Decrypt',
    signVerify: 'Sign/Verify'
  },
  keyGeneration: {
    title: 'RSA Key Pair Generation',
    keyLength: 'Key Length',
    keySizes: {
      size512: '512 bits (Not recommended for security)',
      size1024: '1024 bits (Basic security)',
      size2048: '2048 bits (Recommended)',
      size4096: '4096 bits (High security)'
    },
    generateButton: 'Generate Key Pair',
    generating: 'Generating...',
    publicKey: 'Public Key',
    privateKey: 'Private Key',
    exportPublicKey: 'Export Public Key',
    exportPrivateKey: 'Export Private Key',
    copy: 'Copy',
    info: {
      title: 'About RSA Key Pairs',
      description: 'RSA is an asymmetric encryption algorithm that uses a pair of keys:',
      points: {
        0: 'Public Key: Can be shared safely with anyone, used to encrypt data or verify signatures.',
        1: 'Private Key: Must be kept secure, never shared, used to decrypt data or create signatures.'
      },
      keyLengthTitle: 'Key length determines the security level:',
      keyLengthPoints: {
        0: '512 bits - No longer secure, for testing only',
        1: '1024 bits - Weak, not recommended for sensitive data',
        2: '2048 bits - Current recommended standard',
        3: '4096 bits - Higher security, but slower processing'
      }
    }
  },
  encryptDecrypt: {
    title: 'Encryption and Decryption',
    encryptMode: 'Encryption Mode',
    decryptMode: 'Decryption Mode',
    encryptDescription: 'Use public key to encrypt data that only the private key holder can decrypt.',
    decryptDescription: 'Use private key to decrypt data previously encrypted with your public key.',
    keyLabel: {
      encrypt: 'Public Key',
      decrypt: 'Private Key'
    },
    dataLabel: {
      encrypt: 'Data to Encrypt',
      decrypt: 'Data to Decrypt'
    },
    keyPlaceholder: 'Paste RSA key',
    dataPlaceholder: {
      encrypt: 'Enter text to encrypt',
      decrypt: 'Enter data to decrypt (Base64 format)'
    },
    processButton: {
      encrypt: 'Encrypt Data',
      decrypt: 'Decrypt Data'
    },
    processing: 'Processing...',
    resultLabel: {
      encrypt: 'Encryption Result',
      decrypt: 'Decryption Result'
    },
    info: {
      title: 'About RSA Encryption & Decryption',
      description: 'RSA is an asymmetric encryption algorithm that works as follows:',
      points: {
        0: 'Encryption: Use the recipient\'s public key to encrypt data, ensuring only they can decrypt it.',
        1: 'Decryption: The recipient uses their private key to decrypt the data.',
        2: 'RSA encryption has data length limitations and is not suitable for directly encrypting large files.',
        3: 'For large data, typically symmetric encryption (like AES) is used for the data, and RSA to encrypt the symmetric key.'
      }
    },
    encrypt: 'Encrypt',
    decrypt: 'Decrypt'
  },
  signVerify: {
    title: 'Signature and Verification',
    signMode: 'Signature Mode',
    verifyMode: 'Verification Mode',
    signDescription: 'Use private key to sign data, proving authenticity and integrity of the data.',
    verifyDescription: 'Use public key to verify signature, confirming data integrity and sender identity.',
    keyLabel: {
      sign: 'Private Key',
      verify: 'Public Key'
    },
    dataLabel: 'Data',
    hashAlgorithm: 'Hash Algorithm',
    hashOptions: {
      sha1: 'SHA-1 (Not recommended for security)',
      sha256: 'SHA-256 (Recommended)',
      sha512: 'SHA-512 (High security)',
      md5: 'MD5 (For testing only, insecure)'
    },
    signatureLabel: 'Signature (Base64 format)',
    signaturePlaceholder: 'Enter signature data',
    processButton: {
      sign: 'Generate Signature',
      verify: 'Verify Signature'
    },
    processing: 'Processing...',
    signatureResult: 'Signature Result (Base64 format)',
    verificationSuccess: 'Signature Verification Successful',
    verificationFailure: 'Signature Verification Failed',
    verificationSuccessMessage: 'Data is intact and from the expected sender.',
    verificationFailureMessage: 'Data may have been tampered with, or signature was not created with the corresponding private key.',
    info: {
      title: 'About RSA Signatures & Verification',
      description: 'RSA signatures are a digital signing technique used to verify message authenticity and integrity:',
      points: {
        0: 'Signing process: The sender uses their private key to encrypt a hash of the message, creating a digital signature.',
        1: 'Verification process: The recipient uses the sender\'s public key to decrypt the signature and compares it with the message hash.',
        2: 'A successful verification confirms the message was indeed sent by the private key owner and hasn\'t been altered.',
        3: 'Signatures don\'t encrypt the message, they only verify its origin and integrity. For privacy, encryption is needed too.'
      }
    },
    signButton: 'Sign',
    verifyButton: 'Verify',
    signatureValue: 'Signature Value',
    verificationResult: {
      success: 'Verification successful! The signature is valid, data is intact and from a trusted source.',
      failed: 'Verification failed! The signature is invalid, data may be tampered with or from an untrusted source.'
    },
    dataPlaceholder: 'Enter data to sign or verify',
    keyPlaceholder: 'Paste RSA key'
  },
  messages: {
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed, please copy manually',
    keygenError: 'Error generating key pair: {error}',
    encryptError: 'Encryption failed. Please check your public key and input data. RSA encryption has data length limitations.',
    decryptError: 'Decryption failed. Please ensure the private key is correct and input data is valid encrypted text.',
    signError: 'Signature generation failed. Please check your private key and input data.',
    verifyError: 'Verification failed. Please check your keys and input data.',
    processingError: 'Operation failed. Please check your key and input data.'
  }
} 