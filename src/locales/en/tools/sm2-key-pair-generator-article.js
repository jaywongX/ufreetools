export default {
    title: "SM2 Key Pair Generator: A Complete Guide to Chinese Cryptographic Standard",
    introTitle: "What is SM2 Key Pair Generator and Why Use It?",
    introPara1: "The <strong>SM2 Key Pair Generator</strong> is a specialized cryptographic tool that creates secure public and private key pairs based on China's national standard cryptographic algorithm (GB/T 32918-2016). Unlike international standards like RSA or ECC, SM2 is specifically designed and approved by Chinese regulatory authorities, making it essential for organizations operating within China's regulatory framework.",
    introPara2: "Our <strong>SM2 key generation tool</strong> allows users to easily generate cryptographically secure SM2 key pairs without requiring specialized knowledge of the underlying algorithms. The tool supports various output formats including PEM, HEX, and Base64, making it versatile for different development and security environments.",
    
    useCaseTitle: "Key Applications and Use Cases",
    useCase1: "<strong>Financial services compliance</strong>: Banks and fintech companies operating in China need to use SM2 encryption for regulatory compliance when securing financial transactions and customer data.",
    useCase2: "<strong>Government and enterprise information systems</strong>: Chinese government agencies and large enterprises must implement SM2 for secure communications, document signing, and identity verification.",
    useCase3: "<strong>Cross-border e-commerce</strong>: Businesses engaging in trade with China often need to implement SM2 cryptography for secure data exchange and regulatory compliance.",
    useCase4: "<strong>Mobile application security</strong>: Developers creating apps for the Chinese market need SM2 key pairs for secure authentication and data protection mechanisms.",
    standardInfo: "The SM2 algorithm is part of the ShangMi (SM) suite of cryptographic algorithms that includes SM2 (public key cryptography), SM3 (hashing), and SM4 (symmetric encryption). These standards are increasingly important as China continues to develop its own cybersecurity framework independent of international standards.",
    
    tutorialTitle: "How to Use the SM2 Key Pair Generator",
    tutorialIntro: "Following this step-by-step guide will help you generate secure SM2 key pairs quickly and efficiently. Each generated key pair includes both the public and private components necessary for encryption, decryption, signing, and verification operations.",
    
    step1Title: "Step 1: Select Key Parameters",
    step1Desc: "The SM2 standard uses a fixed key length of 256 bits, which provides strong security while maintaining good performance. This is pre-selected in our tool and cannot be changed as it follows the official standard.",
    
    step2Title: "Step 2: Choose Output Format",
    step2Desc: "Select your preferred output format:<ul><li><strong>PEM</strong>: The standard format for cryptographic certificates and keys, easily recognized by most systems and applications.</li><li><strong>HEX</strong>: Hexadecimal representation, useful for direct implementation in code.</li><li><strong>Base64</strong>: Compact representation that's often used in web applications and API communications.</li></ul>",
    
    step3Title: "Step 3: Specify Number of Key Pairs",
    step3Desc: "Decide how many key pairs you need. This is particularly useful for testing or when setting up multiple secure channels.",
    
    step4Title: "Step 4: Generate and Manage Keys",
    step4Desc: "Click the 'Generate Key Pairs' button and wait for the process to complete. Once generated, you can view, copy, or export your keys. Make sure to store your private keys securely and never share them with unauthorized parties.",
    
    relatedToolsTitle: "Related Cryptographic Tools",
    relatedToolsDesc: "For comprehensive security implementation, you might want to explore these complementary tools:",
    relatedTool1: "RSA Key Pair Generator - Generate RSA keys for international cryptographic standards",
    relatedTool2: "Hash Calculator - Calculate various hash values including SM3 for data integrity verification",
    
    faqTitle: "Frequently Asked Questions about SM2 Cryptography",
    faq1Question: "What is the difference between SM2 and other public key cryptography algorithms like RSA?",
    faq1Answer: "SM2 is an elliptic curve-based public key cryptography algorithm developed by Chinese authorities. Compared to RSA, SM2 offers comparable security with shorter key lengths (256 bits vs 2048+ bits for RSA), resulting in better performance. The main distinction is that SM2 is specifically required for regulatory compliance in China, while RSA is more widely used internationally. The mathematical foundations also differ: SM2 is based on elliptic curve cryptography, while RSA relies on the difficulty of factoring large prime numbers.",
    
    faq2Question: "Is SM2 encryption secure for international business applications?",
    faq2Answer: "Yes, SM2 provides strong cryptographic security that meets international standards. With its 256-bit key length, it offers security equivalent to RSA 3072-bit keys. SM2 has undergone extensive cryptanalysis by Chinese authorities and is considered secure against known attacks. However, for international interoperability, some organizations might prefer widely adopted international standards like RSA or ECDSA. The choice often depends on your specific compliance requirements and where your application will be deployed.",
    
    faq3Question: "How can I verify that my SM2 key pair is working correctly?",
    faq3Answer: "To test your SM2 key pair, you can perform a simple encryption and decryption test: encrypt a test message with the public key and then decrypt it with the corresponding private key. If the decrypted message matches the original, your key pair is working correctly. Alternatively, you can sign a message with the private key and verify the signature using the public key. Our tool ensures that all generated key pairs are mathematically valid according to the SM2 standard specifications.",
    
    faq4Question: "Can SM2 keys be used with standard SSL/TLS implementations?",
    faq4Answer: "SM2 support in SSL/TLS depends on the specific implementation. China has developed a variant called TLCP (Transport Layer Cryptography Protocol) that uses SM2/SM3/SM4 algorithms instead of the international standards. Major browsers within China often support these standards. For international systems, you may need specialized libraries or configurations to enable SM2 support. OpenSSL versions 1.1.1 and later include support for SM2 cryptography, making integration more straightforward for many systems.",
    
    faq5Question: "What are the key components x, y, and d in the SM2 key pair?",
    faq5Answer: "In SM2 key pairs, these components represent important mathematical values:<ul><li><strong>x and y</strong>: These are the coordinates of a point on the elliptic curve that represents your public key. Together, they form the complete public key that can be shared openly.</li><li><strong>d</strong>: This is your private key, a large random number that must be kept secret. It's used in decryption and signing operations.</li></ul>Unlike RSA which has multiple components like p, q, d, e, n, the SM2 private key is simpler with just the scalar value d, while the public key consists of the point coordinates (x,y).",
    
    resourcesTitle: "Additional Resources",
    resourcesDesc: "To learn more about SM2 cryptography and Chinese cryptographic standards, these authoritative sources provide valuable information:",
    resource1: "GB/T 32918-2016 - Official SM2 Standard Publication (Chinese)",
    resource2: "State Cryptography Administration of China - Official regulatory documents",
    resource3: "ISO/IEC 14888-3:2018 - International standard referencing SM2 signature algorithms",
    
    conclusionTitle: "Conclusion",
    conclusionPara: "The <strong>SM2 Key Pair Generator</strong> provides a user-friendly way to create cryptographically secure keys that comply with Chinese national standards. Whether you're developing applications for the Chinese market, implementing secure communication channels, or meeting regulatory requirements, our tool simplifies the complex process of SM2 key generation. By supporting multiple output formats and providing comprehensive key management features, this <strong>SM2 cryptography tool</strong> helps organizations implement strong security measures while maintaining compliance with Chinese cryptographic regulations."
}
