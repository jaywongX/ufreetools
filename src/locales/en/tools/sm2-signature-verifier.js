export default {
  name: "SM2 Signature and Verification",
  description: "Sign data with SM2 private keys and verify signatures with public keys, supporting multiple hash algorithms",
  keyInput: "Key Input",
  privateKey: "Private Key (for Signing)",
  publicKey: "Public Key (for Verification)",
  privateKeyPlaceholder: "Enter your SM2 private key in hex format",
  publicKeyPlaceholder: "Enter your SM2 public key in hex format",
  generateKeyPair: "Generate Key Pair",
  clear: "Clear",
  keyGenError: "Error generating key pair",
  hashAlgorithm: "Hash Algorithm",
  processMode: "Processing Mode",
  originalData: "Original Data",
  preHashed: "Pre-Hashed",
  sign: "Sign",
  verify: "Verify",
  dataToSign: "Data to Sign",
  dataToSignPlaceholder: "Enter text or data to sign",
  preHashedDataToSign: "Pre-Hashed Data to Sign",
  preHashedDataToSignPlaceholder: "Enter hex-encoded hash value",
  dataToVerify: "Data to Verify",
  dataToVerifyPlaceholder: "Enter text or data to verify",
  preHashedDataToVerify: "Pre-Hashed Data to Verify",
  preHashedDataToVerifyPlaceholder: "Enter hex-encoded hash value",
  signatureToVerify: "Signature to Verify",
  signatureToVerifyPlaceholder: "Enter the signature to verify",
  inputFormat: "Input Format",
  outputFormat: "Output Format",
  signatureFormat: "Signature Format",
  text: "Text",
  hex: "Hex",
  base64: "Base64",
  signature: "Signature",
  copySignature: "Copy Signature",
  signatureCopied: "Signature copied to clipboard",
  copyError: "Error copying to clipboard",
  signError: "Error creating signature",
  verifyError: "Error verifying signature",
  invalidInputData: "Invalid input data",
  unsupportedInputFormat: "Unsupported input format",
  unsupportedHashAlgorithm: "Unsupported hash algorithm",
  waitingForVerification: "Enter data and signature to verify",
  verificationSuccess: "Verification successful! The signature is valid.",
  verificationFailed: "Verification failed! The signature is invalid.",
  preHashedMustBeHex: "Pre-hashed input must be in hex format",
  idParameter: "ID Parameter",
  idValue: "ID Value",
  idPlaceholder: "Enter ID value (default: 1234567812345678)",
  idDescription: "SM2 algorithm uses an ID value for signature generation and verification. Default is 1234567812345678.",
  signatureComponents: "Signature Components (R and S values)",
  invalidKeyFormat: "Invalid key format",
  invalidSignatureFormat: "Invalid signature format",
  formatError: "Format error",
  signatureHashMismatch: "Signature hash mismatch - verify that data and hash algorithm match those used during signing",
  copy: "Copy",
  export: "Export",
  signatureExported: "Signature exported to file",
  exportError: "Error exporting signature",
  privateKeyType: "PRIVATE KEY",
  publicKeyType: "PUBLIC KEY", 
  signatureType: "SIGNATURE",
  derEncodingFailed: "Failed to encode signature in DER format",
  invalidIdFormat: "Invalid ID format",
  invalidDerFormat: "Invalid DER format",
  invalidSignatureLength: "Invalid signature length for DER encoding",
  zValue: "Pre-processed hash value",
  zValueFormula: "Z Value Formula",
  showDetails: "Show Details",
  hideDetails: "Hide Details",
  zCalculationFailed: "Z value calculation failed",
  invalidPublicKeyFormat: "Invalid public key format",
  importPfx: "Import PFX/P12",
  enterPin: "Enter PIN/Password",
  pinPlaceholder: "Enter password for PFX file",
  cancel: "Cancel",
  confirm: "Confirm",
  fileReadError: "Error reading file",
  pfxImportSuccess: "PFX file imported successfully",
  pfxImportError: "Error importing PFX file",
  noPrivateKeyFound: "No private key found in PFX file",
  invalidPrivateKeyFormat: "Invalid private key format in PFX file",
  privateKeyExtractionFailed: "Failed to extract private key",
  pkcs8ParseError: "Error parsing PKCS#8 structure",
  rsaKeyNotSupported: "RSA key detected. This tool only supports SM2 keys.",
  rsaCertNotSupported: "RSA certificate detected. This tool only supports SM2 certificates.",
  failedToDerivePublicKey: "Failed to derive public key from private key",
  article: {
    title: "SM2 Digital Signature Tool - Secure Online Signature Creation and Verification",
    introduction: {
        title: "What is SM2 Digital Signature?",
        p1: "SM2 digital signature is a cryptographic algorithm developed as part of China's commercial cryptography standards. Our <strong>SM2 digital signature verification tool</strong> provides a user-friendly interface for creating and verifying digital signatures using the SM2 elliptic curve algorithm, which offers robust security equivalent to 256-bit RSA while using smaller key sizes.",
        p2: "This online SM2 signature tool is specifically designed to solve the challenge of securely signing and verifying digital data without installing specialized software. Whether you're a developer implementing SM2 signature verification in your application, a security professional validating digital certificates, or a business needing to comply with Chinese cryptographic standards, our tool provides an efficient solution.",
        p3: "With the increasing global adoption of SM2 encryption standards, particularly in regions that require compliance with Chinese regulations, having access to a reliable <strong>SM2 digital signature generator and verifier</strong> is essential for international businesses and security professionals."
    },
    applications: {
        title: "Real-World Applications of SM2 Signatures",
        p1: "SM2 signature verification has numerous practical applications across various industries where data integrity and authentication are critical:",
        scenario1: {
        title: "Financial Technology and Banking",
        description: "In financial services, <strong>SM2 signature verification for online banking</strong> helps secure transactions and maintain compliance with regulations. Banks operating in regions that require SM cryptography standards use SM2 signatures to authenticate transaction requests, verify customer identities, and secure inter-bank communications. The ability to quickly verify an SM2 signature ensures that financial documents haven't been tampered with and originate from legitimate sources."
        },
        scenario2: {
        title: "Government and Public Sector",
        description: "Government agencies implementing <strong>secure SM2 cryptography for official documents</strong> rely on digital signatures to validate the authenticity of electronic records. Our tool supports the verification of signatures on digital certificates, official communications, and legal documents. This is particularly valuable for international organizations dealing with Chinese government entities that require compliance with national cryptographic standards."
        },
        scenario3: {
        title: "Cross-Border E-commerce and International Trade",
        description: "Businesses engaged in <strong>SM2 digital signature verification for cross-border trade</strong> use cryptographic signatures to secure contracts, verify shipping manifests, and authenticate customs documentation. Our tool enables businesses to easily implement SM2 signature verification processes without requiring specialized knowledge of the underlying cryptographic principles, facilitating smoother international operations while maintaining high security standards."
        }
    },
    tutorial: {
        title: "How to Use the SM2 Signature Tool",
        intro: "Follow this step-by-step guide to create and verify SM2 digital signatures using our online tool:",
        step1: {
        title: "Step 1: Key Management",
        description: "Begin by entering your SM2 private key (for signing) and public key (for verification). You can paste existing keys in various formats (HEX, PEM, Base64, or DER) or generate a new key pair directly in the tool by clicking the 'Generate Key Pair' button. For security, all cryptographic operations are performed locally in your browser - your keys are never transmitted to our servers."
        },
        step2: {
        title: "Step 2: Configure ID Parameter",
        description: "Enter the ID parameter, which is a unique identifier used in the SM2 signature algorithm. The default value is '1234567812345678', but you can customize it based on your specific requirements. You can enter the ID in Text, HEX, or Base64 format, depending on your preference."
        },
        step3: {
        title: "Step 3: Create a Signature",
        description: "In the signing section, enter the data you want to sign and select the appropriate input format (Text, HEX, or Base64). Click the 'Sign' button to generate the signature. The tool will display both the complete signature and its components (R and S values). You can select your preferred output format (DER, HEX, Base64, or PEM) and easily copy or export the signature."
        },
        step4: {
        title: "Step 4: Verify a Signature",
        description: "To verify a signature, enter the original data in the verification section along with the signature you want to verify. Select the appropriate formats for both the data and signature, then click 'Verify'. The tool will instantly check if the signature is valid for the given data and public key, displaying a clear success or failure message along with detailed error information if applicable."
        }
    },
    specifications: {
        title: "Technical Specifications",
        p1: "Our SM2 signature tool implements the SM2 elliptic curve digital signature algorithm as defined in the GM/T 0003-2012 standard published by the State Cryptography Administration of China. The tool fully complies with these standards while providing additional features for ease of use.",
        p2: "Key technical features include:",
        feature1: "Fixed use of SM3 hash algorithm (256-bit) as required by the standard",
        feature2: "Support for custom ID parameter with multiple input formats (Text/HEX/Base64)",
        feature3: "Multiple signature output formats (DER/HEX/Base64/PEM) for compatibility with various systems",
        feature4: "Complete signature component display (R and S values) for technical verification",
        feature5: "Support for various key formats (PEM/HEX/Base64/DER) for flexible key management",
        feature6: "Detailed error reporting for troubleshooting verification issues"
    },
    faq: {
        title: "Frequently Asked Questions",
        q1: "What's the difference between SM2 signatures and other digital signature algorithms?",
        a1: "SM2 digital signatures are based on elliptic curve cryptography (ECC) and are part of China's commercial cryptographic standards. Compared to RSA signatures, <strong>SM2 signature encryption</strong> offers equivalent security with smaller key sizes, making it more efficient. Unlike international standards like ECDSA, SM2 uses a different curve and incorporates the signer's identity (ID) into the signature generation process, adding an extra layer of security. SM2 is particularly important for applications that must comply with Chinese regulations or operate within China's cybersecurity framework.",
        
        q2: "Is the SM2 signature tool secure for sensitive data?",
        a2: "Yes, our <strong>secure SM2 signature verification tool</strong> performs all cryptographic operations directly in your browser using client-side JavaScript. Your private keys and sensitive data never leave your device or get transmitted to our servers. The implementation follows the SM2 digital signature standard (GM/T 0003-2012) and uses SM3 for hashing as required by the specification. For highly sensitive enterprise applications, we recommend performing an additional review of any online tool, including ours, before use in production environments.",
        
        q3: "Why does the ID parameter matter in SM2 signatures?",
        a3: "The ID parameter is a unique feature of the <strong>SM2 digital signature algorithm with custom ID</strong> that differentiates it from other ECC-based signature schemes. It acts as an additional input to the signature generation process, essentially binding the signer's identity to the signature. This prevents certain types of attacks and adds a layer of authentication. In most implementations, including our tool, a default value of '1234567812345678' is used when a specific ID isn't required, but organizations often use custom IDs related to user identities or system identifiers for enhanced security and traceability.",
        
        q4: "Can I use SM2 signatures for international business outside China?",
        a4: "Absolutely. While SM2 originated as part of China's cryptographic standards, <strong>international adoption of SM2 signatures</strong> is growing, particularly for businesses with operations in China or partnerships with Chinese entities. Our tool facilitates cross-border cryptographic operations by supporting multiple input and output formats that are compatible with various international systems. For businesses engaged in international trade, using SM2 signatures can help ensure compliance with Chinese regulatory requirements while maintaining strong cryptographic security that meets global standards.",
        
        q5: "What should I do if signature verification fails?",
        a5: "If you encounter a <strong>SM2 signature verification error</strong>, check the following common issues: 1) Ensure you're using the correct public key that corresponds to the private key used for signing; 2) Verify that the ID parameter matches the one used during signature generation; 3) Confirm that the data being verified is identical to what was originally signed, including the format (Text/HEX/Base64); 4) Check that the signature format (DER/HEX/Base64/PEM) is correctly selected. Our tool provides detailed error messages to help diagnose specific issues. For persistent problems, you might need to regenerate the signature or check if the key pair is valid."
    },
    related: {
        title: "Related Cryptographic Tools",
        description: "Enhance your security toolkit with these complementary cryptographic utilities:",
        tool1: "<a href='https://www.ufreetools.com/tool/rsa-signature-verifier' target='_blank'>RSA Signature Verifier</a> - Create and verify digital signatures using the widely-adopted RSA algorithm.",
        tool2: "<a href='https://www.ufreetools.com/tool/hash-calculator' target='_blank'>Hash Calculator</a> - Generate secure hash values using various algorithms including SM3.",
        tool3: "<a href='https://www.ufreetools.com/tool/x509-certificate-decoder' target='_blank'>Certificate Decoder</a> - Decode and examine X.509 certificates including those using SM2 cryptography."
    }
  },
} 