export default {
  title: "RSA Key Pair Generator: Create Secure Cryptographic Keys Online",
  intro: "The <strong>RSA Key Pair Generator</strong> is a powerful online tool that allows you to generate cryptographically secure RSA public and private key pairs with customizable key lengths ranging from 256 to 16384 bits. RSA (Rivest-Shamir-Adleman) is one of the most widely used asymmetric encryption algorithms in the world, forming the backbone of secure communications across the internet and enterprise systems. Our tool makes creating these essential cryptographic components simple, accessible, and secure.",
  
  featuresTitle: "Key Features of Our RSA Key Pair Generator",
  feature1: "<strong>Flexible Key Size Options</strong>: Generate RSA keys from 256 to 16384 bits to meet your specific security requirements.",
  feature2: "<strong>Multiple Output Formats</strong>: Export your keys in industry-standard formats including PEM, PKCS#8, hexadecimal, and Base64.",
  feature3: "<strong>Batch Generation</strong>: Create multiple key pairs simultaneously for testing or deployment purposes.",
  feature4: "<strong>Component Visualization</strong>: Inspect the mathematical components of your keys including modulus, exponents, prime factors, and CRT parameters.",
  feature5: "<strong>Client-Side Processing</strong>: All key generation happens in your browser - your sensitive cryptographic material never leaves your device.",
  
  useCasesTitle: "Practical Applications of RSA Key Pairs",
  
  useCase1Title: "Secure Communications and Data Encryption",
  useCase1Desc: "RSA key pairs are fundamental to establishing secure communication channels over insecure networks. The public key can be freely shared to allow others to encrypt messages that only you, with your private key, can decrypt. This <strong>RSA encryption</strong> system underpins technologies like SSL/TLS for HTTPS websites, secure email systems, and virtual private networks (VPNs).",
  
  useCase2Title: "Digital Signatures and Document Authentication",
  useCase2Desc: "RSA enables <strong>digital signature</strong> capabilities, where you sign a document with your private key, allowing anyone with your public key to verify that the document was indeed signed by you and hasn't been tampered with. This is widely used in code signing certificates, financial transactions, legal documents, and blockchain technologies.",
  
  useCase3Title: "Identity Verification and Access Control",
  useCase3Desc: "RSA key pairs provide a robust mechanism for <strong>secure authentication</strong> systems. SSH (Secure Shell) uses RSA keys for remote server login without passwords. Client certificates in environments like mutual TLS authentication also rely on RSA key pairs to verify client identities securely.",
  
  useCase4Title: "Secure API Communication and Token Signing",
  useCase4Desc: "Modern applications and microservices frequently use RSA keys for <strong>securing API communications</strong> and signing authentication tokens such as JWTs (JSON Web Tokens). The asymmetric nature of RSA allows for secure validation of tokens across distributed systems without sharing secret keys.",
  
  relatedToolsText: "You might also find these related cryptography tools useful:",
  relatedTool1: "Hash Calculator - Generate and verify hash values for data integrity",
  relatedTool2: "Unified Credit Code Generator - Create valid Chinese business registration codes",
  
  tutorialTitle: "How to Use the RSA Key Pair Generator",
  
  step1Title: "Step 1: Choose Your Key Size",
  step1Desc: "Begin by selecting the desired key length in bits. For general security purposes, a 2048-bit key is recommended as the minimum standard. For applications requiring higher security, choose 4096-bit or larger keys. Remember that larger keys provide better security but require more computational resources to generate and use.",
  
  step2Title: "Step 2: Select Output Format",
  step2Desc: "Choose your preferred output format from the dropdown menu. PEM is the most widely compatible format and is recognizable by the '-----BEGIN RSA PRIVATE KEY-----' header. PKCS#8 is a more modern format supported by most current systems. Hexadecimal and Base64 encodings are useful for specific programming or systems integration needs.",
  
  step3Title: "Step 3: Specify Number of Key Pairs",
  step3Desc: "If you need multiple key pairs, adjust the number using the input field. This is particularly useful for testing environments or when deploying multiple secure systems simultaneously.",
  
  step4Title: "Step 4: Generate and Secure Your Keys",
  step4Desc: "Click the 'Generate Key Pairs' button and wait for the process to complete. For larger key sizes, this may take a few moments. Once generated, you can view, copy, or export your keys. Be sure to store your private keys securely and never share them with unauthorized parties.",
  
  faqTitle: "Frequently Asked Questions about RSA Key Pairs",
  
  faq1Question: "What are RSA key pairs and why do I need them?",
  faq1Answer: "RSA key pairs consist of a public key and a private key, which form the foundation of asymmetric encryption. The public key is used to encrypt data or verify signatures, while the private key decrypts data or creates signatures. You need RSA key pairs to enable secure communications, data encryption, digital signatures, and authentication.",
  
  faq2Question: "What RSA key size should I choose?",
  faq2Answer: "For security purposes, a minimum of 2048 bits is currently recommended for RSA keys. For general use, 2048 bits provides adequate security; for sensitive data or high-security systems, 4096 bits or larger is advisable. Longer keys provide stronger security but require more computational resources.",
  
  faq3Question: "What's the difference between PEM and PKCS#8 formats?",
  faq3Answer: "PEM and PKCS#8 are common formats for storing and transmitting RSA keys. PEM uses BASE64 encoding and typically starts with '-----BEGIN RSA PRIVATE KEY-----', while PKCS#8 is a more general format that can hold various types of private keys and starts with '-----BEGIN PRIVATE KEY-----'. Most modern systems support PKCS#8, but some legacy systems may only support traditional PEM format.",
  
  faq4Question: "How should I securely store my RSA private keys?",
  faq4Answer: "RSA private keys must be protected from unauthorized access. Recommended secure storage methods include password managers, encrypted storage devices, hardware security modules (HSMs), or key management systems. Private key files should be encrypted with strong passwords and have appropriate access permissions set. Creating backups is important, but ensure they are equally protected.",
  
  faq5Question: "What specific applications can I use my generated RSA key pairs for?",
  faq5Answer: "RSA key pairs are widely used in many security scenarios: SSL/TLS certificates for HTTPS websites; SSH for secure remote login; digital signatures to verify file or code authenticity; secure email communication (S/MIME); enterprise VPN and authentication systems; blockchain and cryptocurrency wallets; and API authentication and secure token generation.",
  
  referencesTitle: "References and Further Reading",
  reference1: "NIST Special Publication 800-57: Recommendation for Key Management",
  reference2: "RFC 8017: PKCS #1: RSA Cryptography Specifications Version 2.2",
  reference3: "FIPS 186-5: Digital Signature Standard (DSS)",
  
  conclusionTitle: "Conclusion",
  conclusionText: "The <strong>RSA Key Pair Generator</strong> provides a convenient and secure method for creating the cryptographic keys essential to modern digital security. Whether you're securing web communications, implementing authentication systems, or signing sensitive documents, properly generated RSA key pairs form the foundation of these security measures. By using our tool, you can quickly generate keys of appropriate strength with the correct formatting for your specific application needs, all while ensuring that your cryptographic material remains private and secure."
}
