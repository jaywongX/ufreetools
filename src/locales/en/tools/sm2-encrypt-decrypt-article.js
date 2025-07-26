export default {
  title: 'SM2 Encryption and Decryption: Complete Guide',
  introduction: {
    title: 'What is SM2 Encryption and How Does it Work?',
    p1: 'SM2 encryption is a powerful public key cryptographic algorithm developed as part of China\'s commercial cryptography standards. Created by the Chinese Commercial Cryptography Administration Office, SM2 encryption offers security comparable to RSA-2048 but with shorter key lengths and improved performance, making it ideal for secure digital communications and data protection.',
    p2: 'Unlike symmetric encryption methods, SM2 uses a pair of keys: a public key for encryption that can be freely shared, and a private key for decryption that must be kept secret. This asymmetric approach solves the key distribution problem found in traditional encryption methods, allowing parties to communicate securely without a pre-shared secret.',
    p3: 'Our SM2 encryption tool provides a user-friendly interface to generate key pairs, encrypt sensitive information, and decrypt SM2-encrypted messages without requiring specialized cryptographic knowledge. This makes advanced encryption technology accessible to everyone from cybersecurity professionals to individuals concerned about data privacy.'
  },
  useCases: {
    title: 'SM2 Encryption Applications and Use Cases',
    item1: 'Secure communication in banking and financial systems, especially in regions where SM2 is a regulatory standard',
    item2: 'Protection of sensitive government and military communications',
    item3: 'Digital signature systems for document authentication and non-repudiation',
    item4: 'Securing data in transit for e-commerce platforms and online services',
    item5: 'Implementation in digital certificate systems and PKI infrastructure for identity verification'
  },
  guide: {
    title: 'How to Use the SM2 Encryption and Decryption Tool',
    step1: {
      title: 'Step 1: Key Management',
      description: 'Begin by setting up your encryption keys. You have three options:',
      option1: 'Click "Generate New Keys" to create a fresh SM2 key pair',
      option2: 'Import existing keys by clicking the "Import Key" button',
      option3: 'Click "Load Sample" to try the tool with pre-generated keys'
    },
    step2: {
      title: 'Step 2: Prepare Your Data',
      description: 'For encryption or decryption, you\'ll need to input your data:',
      option1: 'Select the input format (Text, Hex, Base64, or File)',
      option2: 'For encryption, enter your plaintext in the input field',
      option3: 'For decryption, input the ciphertext you want to decrypt',
      option4: 'When using file mode, drag and drop your file or click to select it'
    },
    step3: {
      title: 'Step 3: Configure Encryption Settings',
      description: 'Before processing your data, configure these important settings:',
      option1: 'Choose the ciphertext format (C1C2C3 or C1C3C2) - Chinese applications typically use C1C3C2',
      option2: 'Select your preferred output format (Text, Hex, or Base64)'
    },
    step4: {
      title: 'Step 4: Process and Retrieve Results',
      description: 'Click the "Encrypt" or "Decrypt" button to process your data. Once complete, you can copy the result to your clipboard, download it as a file, or view the detailed components of the ciphertext (C1, C2, and C3 parts) when encrypting.'
    }
  },
  faq: {
    title: 'Frequently Asked Questions About SM2 Encryption',
    q1: 'What are the advantages of SM2 encryption over other encryption algorithms?',
    a1: 'SM2 encryption offers several advantages including shorter key lengths (256-bit) while providing security equivalent to RSA-2048, faster processing times for encryption and decryption operations, and compliance with Chinese regulatory standards. It\'s also designed to be resistant to quantum computing attacks, making it a forward-looking encryption solution.',
    q2: 'What\'s the difference between C1C2C3 and C1C3C2 ciphertext formats?',
    a2: 'Both formats contain the same three components but arranged differently. C1 represents the elliptic curve point, C2 is the actual encrypted data, and C3 is a hash value used for integrity verification. C1C2C3 is the original standard format, while C1C3C2 is more commonly used in Chinese applications and systems. Our tool supports both formats for maximum compatibility.',
    q3: 'Is SM2 encryption suitable for sensitive personal or business data?',
    a3: 'Yes, SM2 encryption is suitable for protecting sensitive data as it provides strong cryptographic security. However, for highly sensitive enterprise applications, we recommend implementing SM2 encryption with proper key management systems and protocols. While our online tool is convenient, sensitive production environments should use locally installed cryptographic libraries with secure key storage.',
    q4: 'How can I verify that my SM2 encryption is working correctly?',
    a4: 'You can verify your SM2 implementation by encrypting a sample message, then decrypting it to confirm you get the original plaintext back. Our tool provides a "Load Sample" option that demonstrates this process automatically. For production systems, consider using test vectors from the SM2 standard documentation to validate your implementation.',
    q5: 'Can SM2 encrypted data be decrypted without the private key?',
    a5: 'No, properly implemented SM2 encryption cannot be decrypted without the corresponding private key. The security of SM2 relies on the elliptic curve discrete logarithm problem, which is computationally infeasible to solve with current technology. This is why it\'s critical to keep your private key secure and never share it with unauthorized parties.'
  },
  comparison: {
    title: 'SM2 vs. Other Encryption Algorithms',
    p1: 'SM2 encryption belongs to the family of elliptic curve cryptography (ECC) algorithms, similar to ECDSA but with specific parameters defined by Chinese standards. Compared to RSA, SM2 offers equivalent security with significantly shorter key lengths (256-bit SM2 keys provide security similar to 2048-bit RSA keys), resulting in faster operations and lower resource requirements.',
    p2: 'For applications requiring compliance with Chinese cryptographic standards, SM2 is the preferred choice over international algorithms like RSA or ECDSA. Its performance advantages make it particularly suitable for resource-constrained environments like smart cards, IoT devices, and mobile applications where processing power and memory are limited.',
    p3: 'While SM2 is gaining international recognition, RSA remains more widely supported in global software and hardware. For comparison with another popular asymmetric encryption method, check out our',
    linkText: 'RSA Encryption and Decryption Tool'
  },
  references: {
    title: 'References and Further Reading',
    link1: 'Wikipedia -SM2',
    link2: 'SM2 Elliptic Curve public Key Cryptography algorithm',
    link3: 'The SM2 elliptic curve public key cryptography algorithm recommends curve parameters'
  },
  relatedTools: {
    title: 'Related Cryptographic Tools',
    tool1: 'RSA Encryption and Decryption Tool',
    tool2: 'Hash Calculator',
    tool3: 'Symmetric Encryption Tool',
    tool4: 'Secure Password Generator'
  }
}
