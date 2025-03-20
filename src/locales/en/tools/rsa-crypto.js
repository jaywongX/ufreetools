export default {
  name: 'RSA Encryption/Decryption',
  description: 'Encrypt and decrypt data using RSA public-key cryptography',
  keyOptions: {
    generateKey: 'Generate Key Pair',
    keySize: 'Key Size',
    keyFormat: 'Key Format',
    publicKey: 'Public Key',
    privateKey: 'Private Key',
    importKey: 'Import Keys'
  },
  encryptOptions: {
    padding: 'Padding Scheme',
    encoding: 'Output Encoding'
  },
  actions: {
    encrypt: 'Encrypt',
    decrypt: 'Decrypt',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download Keys',
    upload: 'Upload Key'
  },
  messages: {
    copied: 'Copied to clipboard!',
    encryptSuccess: 'Data encrypted successfully',
    decryptSuccess: 'Data decrypted successfully',
    encryptError: 'Error encrypting data',
    decryptError: 'Error decrypting data',
    invalidKey: 'Invalid key format',
    keyGenerated: 'RSA key pair generated successfully'
  }
} 