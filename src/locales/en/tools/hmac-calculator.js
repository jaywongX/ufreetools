export default {
  name: 'HMAC Calculator',
  description: 'Compute HMAC (Hash-based Message Authentication Code) for data using a key',
  title: 'HMAC Message Authentication Code Calculator',
  intro: 'Generate message authentication codes using a key, with support for multiple hash algorithms and output formats',
  input: {
    title: 'Input',
    message: 'Message',
    messagePlaceholder: 'Enter the message to authenticate',
    key: 'Key',
    keyLabel: 'Key (Secret Key)',
    keyPlaceholder: 'Enter HMAC key',
    messageLabel: 'Message',
    messageLongPlaceholder: 'Enter the message to compute HMAC',
    file: 'File',
    text: 'Text',
    fileSelect: 'Select File',
    fileDrop: 'Or drag and drop file here',
    fileSelected: 'Selected file: {name}',
    clearFile: 'Clear File',
    encoding: 'Input Encoding',
    keyEncoding: 'Key Encoding',
    outputFormat: 'Output Format',
    inputType: 'Input Type',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'Hexadecimal',
    binary: 'Binary',
    calculate: 'Calculate HMAC',
    calculating: 'Calculating...',
    clear: 'Clear All'
  },
  algorithms: {
    title: 'Algorithms',
    label: 'Hash Algorithm',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },
  result: {
    title: 'HMAC Result',
    digest: 'HMAC Digest',
    outputLabel: 'HMAC Result',
    copy: 'Copy',
    copied: 'Copied!',
    noResult: 'Enter a message and key to calculate HMAC',
    calculating: 'Calculating...',
    placeholder: 'HMAC result will be displayed here',
    useExample: 'Use Example',
    jsExample: 'JavaScript Example:'
  },
  validation: {
    title: 'HMAC Validation',
    hmacToVerify: 'HMAC to Verify',
    verifyPlaceholder: 'Enter HMAC to verify',
    verify: 'Verify HMAC',
    valid: 'HMAC is valid',
    invalid: 'HMAC is invalid',
    verifying: 'Verifying...'
  },
  options: {
    title: 'Options',
    uppercase: 'Uppercase Output',
    showDetails: 'Show Technical Details',
    autoUpdate: 'Auto Update',
    truncate: 'Truncate Output',
    truncateLength: 'Truncate Length'
  },
  details: {
    title: 'Technical Details',
    algorithm: 'Algorithm',
    keyLength: 'Key Length',
    blockSize: 'Block Size',
    outputLength: 'Output Length',
    execution: 'Execution Time',
    ms: 'Milliseconds'
  },
  messages: {
    noMessage: 'Please enter a message',
    noKey: 'Please enter a key',
    invalidEncoding: 'Invalid encoding format',
    processingError: 'Processing error: {error}',
    success: 'HMAC calculation successful',
    invalidKey: 'Invalid key format for the selected encoding',
    fileTooBig: 'File too large. Maximum size is 5MB',
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed, please copy manually',
    invalidHex: 'Key is not in valid hexadecimal format',
    invalidBase64: 'Key is not in valid Base64 format'
  },
  security: {
    title: 'Security Notes',
    keyStorage: 'Never share your key',
    keyStrength: 'Use strong and unique keys for each application',
    recommendation: 'For security-critical applications, use at least HMAC-SHA256',
    warning: 'HMAC-MD5 and HMAC-SHA1 may not be suitable for high-security applications'
  },
  article: {
    title: "HMAC Calculator: Hash-Based Message Authentication Code Generation Tool",
    features: {
      title: "Understanding HMAC and Its Importance",
      description: "The <strong>HMAC Calculator</strong> is a specialized <strong>cryptographic tool</strong> designed to generate Hash-based Message Authentication Codes (HMACs), which provide a way to verify both the integrity and authenticity of messages. Unlike simple hash functions, HMAC incorporates a <strong>secret key</strong> into the hashing process, creating a <strong>keyed hash</strong> that only someone possessing the same key can reproduce.<br><br>This <strong>HMAC generator</strong> supports multiple industry-standard algorithms including SHA-256, SHA-512, MD5, and SM3, allowing users to select the appropriate level of security for their specific needs. The tool handles various input formats (plain text, hexadecimal, or Base64) and produces output in your preferred encoding format. Our <strong>message authentication code calculator</strong> provides a straightforward interface for implementing this essential security mechanism, whether you're a developer testing API authentication or a security professional verifying message integrity.",
      useCases: {
        title: "Practical Applications for HMAC",
        items: [
          "<strong>API Authentication</strong>: Secure your API endpoints by implementing HMAC-based authentication. The <strong>HMAC signing process</strong> allows servers to verify that incoming requests are legitimate and haven't been tampered with during transmission.",
          "<strong>Data Integrity Verification</strong>: Ensure the integrity of stored data or transferred files by computing <strong>HMAC checksums</strong>. This allows you to detect any unauthorized modifications to your data, providing an additional security layer beyond simple hash verification.",
          "<strong>Secure Cookie Validation</strong>: Protect web application cookies from tampering by incorporating <strong>HMAC signatures</strong>. This prevents users from modifying cookie values and potentially gaining unauthorized access or privileges.",
          "<strong>Password Storage</strong>: Create more secure password verification systems by using HMACs with unique keys for each user, creating a <strong>keyed password digest</strong> that provides better protection than standard hash functions.",
          "<strong>Digital Signature Verification</strong>: Implement simplified digital signature schemes for authentication and non-repudiation. The <strong>HMAC authentication</strong> process provides cryptographic proof that a message was created by someone with access to the shared secret key.",
          "<strong>Blockchain Transaction Verification</strong>: Verify the authenticity of blockchain transactions and messages using <strong>HMAC cryptographic verification</strong>, ensuring that only authorized parties can create valid transaction signatures."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about HMAC",
      items: [
        {
          question: "What is the difference between HMAC and a regular hash function?",
          answer: "A regular hash function (like SHA-256 or MD5) only provides data integrity verification - confirming that data hasn't changed. However, an HMAC (Hash-based Message Authentication Code) combines a cryptographic hash function with a secret key to provide both data integrity AND authentication. This means HMACs verify not only that the message hasn't been altered, but also that it was created by someone possessing the correct secret key. This additional security layer makes HMAC significantly more resistant to various cryptographic attacks, including collision and length extension attacks that can compromise regular hash functions. Our HMAC generator tool implements this enhanced security approach, making it suitable for applications requiring verified message authenticity."
        },
        {
          question: "Which HMAC algorithm should I choose for my application?",
          answer: "For most modern security applications, HMAC-SHA256 is the recommended standard choice as it provides an excellent balance of security and performance. For applications with stricter security requirements or longer-term security needs, consider HMAC-SHA384 or HMAC-SHA512, which offer increased resistance against future attacks at the cost of slightly lower performance. Avoid HMAC-MD5 and HMAC-SHA1 for new applications as these underlying hash algorithms have known vulnerabilities. For applications in Chinese markets requiring compliance with local standards, HMAC-SM3 is available. The most important factor is to select an algorithm that meets your specific security requirements while considering compatibility with other systems and performance constraints."
        },
        {
          question: "Is it safe to use this online HMAC calculator for sensitive data?",
          answer: "Our HMAC calculator performs all cryptographic operations directly in your browser using JavaScript, which means your sensitive data and keys never leave your device or get transmitted to our servers. While this provides a basic level of security, we still recommend using this online HMAC generator primarily for testing, learning, and non-critical applications. For production environments or highly sensitive data, we advise implementing HMAC functionality directly in your application code using established cryptographic libraries, where you have complete control over key management and data handling. If you must use this calculator with sensitive information, consider disconnecting from the internet while using the tool and clearing your browser history afterward."
        },
        {
          question: "How should I manage the secret keys used for HMAC?",
          answer: "Proper key management is crucial for HMAC security. First, generate cryptographically strong random keys with sufficient length (at least 32 bytes/256 bits for HMAC-SHA256). Store these keys securely, using dedicated key management systems or secure key vaults in production environments. Never hardcode keys in source code or configuration files. Implement key rotation policies to periodically change keys, and establish separate keys for different applications or environments. When transmitting keys, always use secure channels with proper encryption. Remember that the security of your HMAC implementation is only as strong as your key management practices - even the most secure algorithm can be compromised if keys are handled improperly."
        },
        {
          question: "How can I use the HMAC results in my programming projects?",
          answer: "Most programming languages and frameworks provide built-in support for HMAC calculations. After using our HMAC calculator to verify your expected results, you can implement the same functionality in your code. For JavaScript/Node.js, use the crypto module's createHmac function. In Python, utilize the hmac module. Java developers can use the Mac class from javax.crypto. PHP offers the hash_hmac function. Our tool provides code examples showing how to reproduce the same HMAC results in JavaScript. When implementing HMAC authentication, typically you would calculate the HMAC of your message on both the sender and receiver sides using the shared secret key, then compare the results to verify authenticity. The exact implementation details will depend on your specific application requirements and the programming language you're using."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the HMAC Calculator",
      steps: [
        "<strong>Select the Hash Algorithm</strong>: Choose the appropriate <strong>HMAC algorithm</strong> for your security needs. Click on one of the available options (SHA-256, SHA-1, SHA-384, SHA-512, MD5, or SM3), with SHA-256 recommended for most applications as it provides a good balance of security and performance.",
        "<strong>Enter Your Secret Key</strong>: Input the <strong>secret key</strong> in the designated field. Select the appropriate input encoding format (text, hexadecimal, or Base64) from the dropdown menu according to how your key is formatted. For security applications, use a strong, random key with sufficient length.",
        "<strong>Provide the Message</strong>: Enter the message you want to authenticate in the message input area. Just like the key, select the appropriate input encoding format (text, hexadecimal, or Base64) that matches your message format. The message can be any data you want to verify later.",
        "<strong>Choose Output Format</strong>: Select your preferred output format for the <strong>HMAC digest</strong>. Options include hexadecimal (most common), Base64 (more compact), Base64URL (web-safe), or binary. This determines how the final hash value will be represented.",
        "<strong>Generate the HMAC</strong>: Click the \"Calculate HMAC\" button to process your inputs and generate the <strong>message authentication code</strong>. The system will combine your secret key and message using the selected algorithm to create a unique hash value.",
        "<strong>Copy Your Result</strong>: Once the calculation is complete, the resulting <strong>HMAC digest</strong> will be displayed in the result area. Use the copy button to copy this value to your clipboard for use in your application.",
        "<strong>Implement in Your Code</strong>: Reference the JavaScript example provided below the result to see how to implement the same <strong>HMAC calculation</strong> in your own code. This example shows the exact code needed to reproduce the same result programmatically."
      ]
    },
    conclusion: "The HMAC Calculator is an essential tool for developers and security professionals looking to implement robust authentication and data integrity verification in their systems. By providing a straightforward interface for generating these cryptographic codes, it simplifies the process of testing and implementing HMAC-based security measures across various applications. Whether you're securing API communications, verifying the integrity of data, or implementing authentication systems, understanding and correctly applying HMAC is crucial for maintaining strong security practices. As digital threats continue to evolve, using proper message authentication techniques like HMAC remains a fundamental component of modern security architecture, helping to ensure that communications remain both private and verifiably authentic."
  }
}