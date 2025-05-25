export default {
    name: "RSA Signature and Verification",
    description: "Sign data with RSA private keys and verify signatures with public keys, supporting multiple formats and algorithms",
    keyInput: "Key Input",
    privateKey: "Private Key (for Signing)",
    publicKey: "Public Key (for Verification)",
    privateKeyPlaceholder: "Enter your RSA private key in the selected format",
    publicKeyPlaceholder: "Enter your RSA public key or certificate in the selected format",
    generateKeyPair: "Generate Key Pair",
    extractFromCert: "Extract from Certificate",
    clear: "Clear",
    keySize: "Key Size",
    hashAlgorithm: "Hash Algorithm",
    paddingScheme: "Padding Scheme",
    keyFormat: "Key Format",
    inputFormat: "Input Format",
    processMode: "Processing Mode",
    originalData: "Original Data",
    preProcessed: "Pre-Hashed",
    sign: "Sign",
    verify: "Verify",
    dataToSign: "Data to Sign",
    dataToSignPlaceholder: "Enter the text or data you want to sign",
    preProcessedDataToSign: "Pre-Hashed Data to Sign",
    preProcessedDataToSignPlaceholder: "Enter hash value in hexadecimal format",
    preprocessOnly: "Preprocess Only (Get Hash Digest)",
    preprocessedData: "Preprocessed Data",
    hashDigest: "Hash Digest (Step 1)",
    paddedData: "Padded Data (Step 2)",
    showDetailed: "Show Details",
    showSimple: "Show Simple",
    signButton: "Sign Data",
    signature: "Signature",
    dataToVerify: "Data to Verify",
    dataToVerifyPlaceholder: "Enter the original text or data that was signed",
    preProcessedDataToVerify: "Pre-Hashed Data to Verify",
    preProcessedDataToVerifyPlaceholder: "Enter hash value in hexadecimal format",
    signatureToVerify: "Signature to Verify",
    signatureToVerifyPlaceholder: "Enter the signature you want to verify in the selected format",
    verifyButton: "Verify Signature",
    verificationResult: "Verification Result",
    notVerifiedYet: "Not verified yet",
    signatureValid: "SIGNATURE VALID ✓",
    signatureInvalid: "SIGNATURE INVALID ✗",
    copy: "Copy",
    copied: "Copied to clipboard",
    copyFailed: "Failed to copy to clipboard",
    generatingKeys: "Generating keys...",
    keysGenerated: "{bits}-bit RSA key pair generated in {time} seconds",
    keyGenerationFailed: "Failed to generate key pair",
    notValidCertificate: "Input is not a valid X.509 certificate",
    publicKeyExtracted: "Public key extracted from certificate",
    extractionFailed: "Failed to extract public key from certificate",
    preprocessingError: "Error during preprocessing",
    paddingError: "Error applying padding",
    invalidPrivateKey: "Invalid private key format",
    invalidPublicKey: "Invalid public key format",
    invalidInputData: "Invalid input data format",
    invalidSignature: "Invalid signature format",
    invalidVerificationData: "Invalid verification data format",
    signatureCreated: "Signature created successfully",
    signingFailed: "Failed to create signature",
    verificationSuccess: "Signature verified successfully",
    verificationFailed: "Signature verification failed",
    verificationError: "Error during verification",
    noSignatureToExport: "No signature to export",
    signatureExported: "Signature exported as {format} file",
    signatureImported: "Signature imported successfully",
    signatureImportFailed: "Failed to import signature",
    article:{
        title: "RSA Signature Verification Tool: Secure Digital Signatures for Data Integrity",
        
        introduction: {
            title: "What is RSA Signature Verification?",
            p1: "RSA signature verification is a cryptographic process that ensures data integrity, authenticity, and non-repudiation in digital communications. Our RSA Signature Verifier tool allows you to sign data using RSA private keys and verify signatures using corresponding public keys, providing a secure way to validate that information hasn't been tampered with during transmission.",
            p2: "In an era where data security is paramount, RSA digital signatures have become the industry standard for securing electronic documents, software distributions, and secure communications. This tool implements the PKCS#1 v1.5 and PSS padding schemes, supporting various hash algorithms including SHA-1, SHA-256, SHA-384, and SHA-512.",
            p3: "Whether you're a developer testing cryptographic implementations, a security professional verifying digital signatures, or someone learning about public key cryptography, our RSA signature verification tool offers a user-friendly interface with comprehensive features for all your digital signature needs.",
            p4: "The RSA signature verification process works by creating a cryptographic hash of your data, which is then encrypted with the sender's private key. Anyone with access to the corresponding public key can verify the signature, confirming both the data's integrity and the sender's identity."
        },
        
        useCases: {
            title: "Common Applications of RSA Signature Verification",
            case1: "Verifying the authenticity of software downloads and updates to prevent malware distribution",
            case2: "Validating digital certificates in secure web communications (HTTPS)",
            case3: "Ensuring the integrity of electronic documents and contracts in legal and business contexts",
            case4: "Implementing secure message authentication in communication protocols and applications"
        },
        
        tutorial: {
            title: "How to Use the RSA Signature Verifier Tool",
            step1: {
            title: "Step 1: Prepare Your Keys",
            description: "Before signing or verifying, you'll need RSA keys:",
            option1: "Generate a new key pair directly in the tool by clicking the 'Generate Key Pair' button and selecting your desired key size (2048-bit or higher is recommended for security)",
            option2: "Import existing keys in various formats (PEM, DER, HEX, or Base64)"
            },
            step2: {
            title: "Step 2: Configure Signature Settings",
            description: "Select the appropriate settings for your signature operation:",
            option1: "Hash Algorithm: Choose from SHA-1, SHA-256, SHA-384, or SHA-512 (SHA-256 or higher recommended)",
            option2: "Padding Scheme: Select between PKCS#1 v1.5 (most common) or PSS (more modern and secure)",
            option3: "Input Format: Specify whether your input is plain text, hexadecimal, or Base64-encoded"
            },
            step3: {
            title: "Step 3: Sign or Verify Data",
            description: "Depending on your needs:",
            option1: "To sign: Enter your data in the signing section, then click 'Sign Data' to generate a signature",
            option2: "To verify: Enter the original data and the signature in the verification section, then click 'Verify Signature'"
            },
            step4: {
            title: "Step 4: View Results and Export (if needed)",
            description: "After signing, you can copy the signature or export it in various formats (Base64, HEX, DER, PEM). For verification, the tool will display whether the signature is valid or invalid."
            },
            note: "Note: For advanced users, the tool also shows detailed preprocessing information, including hash digests and padded data, helping you understand each step of the RSA signature process."
        },
        
        faq: {
            title: "Frequently Asked Questions about RSA Signatures",
            q1: "What's the difference between PKCS#1 v1.5 and PSS padding schemes?",
            a1: "PKCS#1 v1.5 is the traditional padding scheme for RSA signatures, widely supported across systems but with known theoretical vulnerabilities. PSS (Probabilistic Signature Scheme) is a more modern approach with provable security properties and randomized padding, making it more resistant to certain cryptographic attacks. For most applications, either scheme provides adequate security when used with strong hash algorithms and proper key lengths.",
            
            q2: "Which hash algorithm should I use for RSA signatures?",
            a2: "For modern applications, we recommend using at least SHA-256 for adequate security. SHA-1 is considered cryptographically weak and should only be used for legacy compatibility. SHA-384 or SHA-512 provide additional security margin for highly sensitive applications or when signing large volumes of data.",
            
            q3: "What key size is recommended for secure RSA signatures?",
            a3: "As of 2023, a minimum of 2048 bits is recommended for RSA keys, with 3072 or 4096 bits preferred for long-term security. Keys smaller than 2048 bits are considered vulnerable to factorization attacks with modern computing resources. Note that larger key sizes will increase processing time for signature operations.",
            
            q4: "Can I use this tool for pre-hashed data?",
            a4: "Yes, our tool supports signing and verifying pre-hashed data. This is useful when you've already computed a hash digest using an external tool or when working with large files where you want to compute the hash separately. Simply select the 'Pre-Hashed' option and provide the hash value in hexadecimal format.",
            
            q5: "Is it safe to use this online tool for sensitive signatures?",
            a5: "This tool processes all data entirely in your browser - no information is sent to our servers. However, for highly sensitive or production cryptographic operations, we recommend using dedicated security hardware (like HSMs) or established cryptographic libraries in a controlled environment.",
            a5_extra: "For educational purposes, testing, or non-critical applications, this tool provides a convenient and secure way to work with RSA signatures."
        },
        
        resources: {
            title: "Related Tools and Resources",
            description: "Enhance your cryptographic workflow with these complementary tools:",
            tool1: "Hash Generator - Create hash digests using various algorithms",
            tool2: "Base64 Encoder/Decoder - Convert between raw data and Base64 format",
            tool3: "JWT Debugger - Parse, verify, and debug JSON Web Tokens that use RSA signatures",
            
            external: {
            title: "External Resources",
            resource1: "RFC 8017 - PKCS #1: RSA Cryptography Specifications Version 2.2",
            resource2: "NIST FIPS 186-4 - Digital Signature Standard (DSS)"
            }
        },
        
        conclusion: {
            title: "Conclusion",
            p1: "RSA signature verification remains a cornerstone of modern cryptographic security, providing robust mechanisms for ensuring data integrity and authenticity. Our RSA Signature Verifier tool makes this powerful technology accessible to everyone, from cryptography novices to security professionals.",
            p2: "Whether you're signing code, verifying document authenticity, or learning about public key cryptography, this tool provides a comprehensive set of features for working with RSA signatures in a secure, browser-based environment. Start using the RSA Signature Verifier today to protect your digital assets and communications."
        }
    }
}