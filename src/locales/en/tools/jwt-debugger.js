export default {
  name: 'JWT Debugger',
  description: 'Parse, verify and debug JWT tokens online',
  sections: {
    encoded: 'Encoded JWT',
    decoded: 'Decoded JWT',
    header: 'Header',
    payload: 'Payload',
    signature: 'Signature',
    verification: 'Verification'
  },
  actions: {
    decode: 'Decode',
    verify: 'Verify Signature',
    copy: 'Copy',
    share: 'Share Token',
    generateToken: 'Generate Token',
    generateRandomToken: 'Random Token',
    clear: 'Clear',
    generateRandomPayload: 'Generate Random Payload',
    generateRandomKey: 'Generate Random Key',
    generateKeyPair: 'Generate Key Pair'
  },
  messages: {
    invalidToken: 'Invalid JWT format',
    copied: 'Copied to clipboard!',
    copyFailed: 'Copy failed, please copy manually',
    verificationSuccess: 'Signature verified successfully',
    verificationFailed: 'Signature verification failed',
    keyGenerated: 'Key pair generated successfully',
    keyGenerationFailed: 'Failed to generate key pair',
    tokenGenerated: 'Token generated successfully',
    tokenGenerationFailed: 'Failed to generate token',
    randomTokenGenerated: 'Random token generated and parsed successfully',
    certUploadSuccess: 'Certificate uploaded successfully',
    certFormatInvalid: 'Invalid certificate format',
    certReadFailed: 'Failed to read certificate',
    tokenFormatError: 'Invalid token format, JWT should contain three parts separated by dots',
    tokenHeaderMissingAlg: 'Token header is missing algorithm (alg) field',
    tokenHeaderInvalid: 'Invalid token header format',
    tokenVerificationFailed: 'Token format verification failed',
    tokenExpired: 'Token has expired. Expiration time: {time}',
    tokenNotEffective: 'Token is not yet valid. Valid from: {time}',
    tokenIssuedInFuture: 'Token issue time is in the future. Issue time: {time}',
    algorithmNotSupported: 'Algorithm not supported',
    randomSecretGenerated: 'Random secret key generated successfully',
    randomSecretGenerationFailed: 'Failed to generate random secret key',
    randomPayloadGenerated: 'Random payload generated',
    randomPayloadGenerationFailed: 'Failed to generate random payload',
    contentCleared: 'All content cleared',
    tokenDecodeSuccess: 'Token decoded successfully',
    tokenDecodeFailed: 'Failed to decode token',
    pleaseInputKey: 'Please enter a key',
    pleaseGenerateKeyPair: 'Please generate {type} key pair first',
    pleaseInputVerificationKey: 'Please enter verification key',
    pleaseInputPublicKey: 'Please enter verification public key',
    pleaseInputToken: 'Please enter token to verify',
    payloadFormatError: 'Payload format error, please check JSON format',
    invalidTimestamp: 'Invalid timestamp'
  },
  placeholders: {
    secretKey: 'Enter secret key',
    privateKey: 'Enter or generate private key',
    publicKey: 'Enter or generate public key',
    payload: 'Enter JSON formatted payload',
    token: 'Enter or generate JWT token',
    verificationSecretKey: 'Enter verification key',
    verificationPublicKey: 'Enter verification public key'
  },
  labels: {
    algorithm: 'Algorithm',
    secretKey: 'Secret Key',
    privateKey: 'Private Key',
    publicKey: 'Public Key',
    certificate: 'Certificate (Optional)',
    payload: 'Payload',
    token: 'Token',
    verificationPublicKey: 'Verification Public Key',
    tokenResult: 'Token Decode Result',
    verifyToken: 'Verify Token',
    tokenDecoded: 'Token uses {alg} algorithm signature',
    timestamp: 'Timestamp Interpretation',
    issuedAt: 'Issued at (iat)',
    expiration: 'Expiration time (exp)',
    notBefore: 'Not valid before (nbf)',
    tokenFormat: 'No Content',
    tokenFormatDesc: 'Decode result will be displayed here after entering or generating a JWT token',
    uploadCert: 'Drag and drop certificate file or click to select',
    certName: 'Certificate Name',
    sm3Fingerprint: 'SM3 Fingerprint (x5t#sm3)',
    certUploadNote: 'After uploading certificate, "x5t#sm3" field will be added to JWT header',
    secondsTimestamp: 'seconds timestamp',
    millisecondsTimestamp: 'milliseconds timestamp'
  },
  buttons: {
    cancel: 'Cancel',
    verify: 'Verify',
    clearCert: 'Clear',
    generateToken: 'Generate Token',
    decodeToken: 'Decode Token',
    verifyToken: 'Verify Token',
    close: 'Close'
  },
  verification: {
    success: 'Verification Successful',
    failure: 'Verification Failed',
    validMessage: 'Token signature is valid.',
    invalidMessage: 'Token signature verification failed.'
  },
  errors: {
    noToken: 'Please enter a token to verify',
    invalidToken: 'Invalid token format',
    noSecretKey: 'Please provide a secret key',
    noPublicKey: 'Please provide a verification public key',
    invalidSignature: 'Invalid signature',
    verificationFailed: 'Token verification failed'
  },
  article: {
    title: "JWT Debugger: Decode, Verify and Debug JSON Web Tokens",
    features: {
      title: "Understanding JWT Debugging",
      description: "The <strong>JWT Debugger</strong> is a specialized <strong>token analysis tool</strong> designed for developers and security professionals to inspect, validate, and troubleshoot JSON Web Tokens (JWTs). This <strong>online JWT decoder</strong> allows you to paste any JWT and instantly see its decoded header, payload, and signature components in a human-readable format.<br><br>Beyond simple <strong>token decoding</strong>, the tool offers comprehensive verification capabilities to confirm whether a token's signature is valid using the appropriate secret key or public key. The <strong>JWT verification tool</strong> supports all standard JWT algorithms including HS256, RS256, ES256, and others, ensuring compatibility with modern authentication systems. For developers building or maintaining applications with token-based authentication, this <strong>JWT debugging utility</strong> provides essential insights into token structure, expiration status, and security claims.",
      useCases: {
        title: "Practical Applications for JWT Debugging",
        items: [
          "<strong>API Authentication Troubleshooting</strong>: When API calls fail with authentication errors, developers can use the <strong>JWT validation tool</strong> to inspect tokens and identify issues such as expired tokens, invalid signatures, or incorrect claims",
          "<strong>Identity Provider Integration</strong>: During integration with OAuth or OpenID Connect services, the <strong>token inspector</strong> helps verify that identity tokens contain the expected claims and are properly signed",
          "<strong>Security Auditing</strong>: Security professionals can examine <strong>authentication tokens</strong> to ensure they contain appropriate permissions, reasonable expiration times, and follow security best practices",
          "<strong>Custom JWT Generation</strong>: When implementing custom authentication systems, developers can use the tool to create and test <strong>encoded JWT tokens</strong> with specific claims and signature algorithms",
          "<strong>Bearer Token Debugging</strong>: Front-end developers working with <strong>bearer authentication</strong> can validate that tokens used in application headers are correctly formatted and contain necessary data",
          "<strong>Microservice Authentication</strong>: Teams building microservice architectures can verify that <strong>service tokens</strong> pass the correct authorization information between services and maintain proper security boundaries"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about JWT Debugging",
      items: [
        {
          question: "Is it safe to paste my JWT into this online debugger?",
          answer: "Yes, our JWT debugger is designed with security in mind. All token processing happens entirely within your browser using client-side JavaScript, which means your tokens are never sent to any server for decoding or validation. The JWT decoder doesn't store your tokens, secret keys, or payload data in any way. However, as a security best practice, we recommend only using test tokens rather than production tokens containing sensitive information. If you're working with highly sensitive authentication systems, consider using a local JWT debugging tool in your secure development environment instead of any online token validation service."
        },
        {
          question: "What's the difference between the header, payload, and signature in a JWT?",
          answer: "A JSON Web Token consists of three distinct parts separated by dots: header, payload, and signature. The header typically contains the token type ('JWT') and the signing algorithm being used (like 'HS256' or 'RS256'). The payload contains the claims or assertions, which are statements about an entity (typically the user) and additional data. Common claims include user ID, expiration time, and issuer. The signature is created by combining the encoded header and payload with a secret key using the algorithm specified in the header. This signature verifies that the message wasn't altered and, with certain algorithms, authenticates the sender. Our token decoder displays all three sections clearly to help you understand and debug your authentication tokens."
        },
        {
          question: "How can I verify if my JWT signature is valid?",
          answer: "To verify a JWT signature using our token validation tool, enter your token in the input field and provide the appropriate secret key or public key (depending on the algorithm used). For HMAC-based algorithms like HS256, you'll need the same secret key that was used to create the token. For RSA or ECDSA algorithms like RS256 or ES256, you'll need the corresponding public key that matches the private key used for signing. The JWT debugger will then compute a signature based on the header and payload using your provided key, and compare it with the signature in your token. If they match, the signature is valid, confirming the token hasn't been tampered with and was indeed signed by a trusted party possessing the correct private key or secret."
        },
        {
          question: "Why might a JWT validation fail even with the correct secret key?",
          answer: "There are several reasons why JWT verification might fail even with the correct secret key in our token decoder. Common issues include: token expiration (check the 'exp' claim in the payload), the token not being valid yet (check the 'nbf' claim), using the wrong algorithm (ensure the algorithm specified in the header matches the one you're using for verification), token tampering (even a small change to the header or payload will cause signature verification failure), incorrect key format (ensure your key is in the correct format, especially for RSA and ECDSA keys), or encoding issues (if your secret contains special characters). The JWT debugger provides detailed error messages to help identify the specific reason for validation failures, making it easier to troubleshoot authentication token problems."
        },
        {
          question: "Can I generate new JWTs with this tool?",
          answer: "Yes, our JWT debugger includes token generation capabilities. To create a new JWT, you can specify the desired payload (the claims you want to include), select an appropriate signing algorithm (such as HS256, RS256, etc.), and provide the necessary signing key. For symmetric algorithms like HS256, you'll need to provide a secret key. For asymmetric algorithms like RS256, you'll need a private key for signing. The tool can even help generate random keys if needed. After configuring these options, the token encoder will generate a valid JWT that you can use for testing or implementation. This feature is particularly useful for developers implementing JWT-based authentication who need to create sample tokens with specific claims for testing purposes."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the JWT Debugger",
      steps: [
        "Enter your <strong>JSON Web Token</strong> into the token input field at the top of the debugger. You can paste a complete JWT (including all three parts separated by dots) that you've received from an authentication system or API",
        "Click the <strong>Decode</strong> button to immediately see the decoded components of your token. The JWT decoder will display the header and payload sections in a formatted JSON view for easy reading",
        "Review the <strong>Header section</strong>, which typically shows the token type ('typ') and signing algorithm ('alg'). This information indicates how the token was created and how its signature should be verified",
        "Examine the <strong>Payload section</strong>, which contains all the claims or data stored in the token. Pay special attention to expiration ('exp'), issuance time ('iat'), and subject ('sub') claims that determine validity",
        "To verify the token's signature, enter the appropriate <strong>verification key</strong> in the designated field. Use a secret key for symmetric algorithms (HS256) or a public key for asymmetric algorithms (RS256/ES256)",
        "Click the <strong>Verify Signature</strong> button to check if the token's signature is valid. The JWT validator will indicate whether verification succeeded or failed, along with relevant details",
        "For <strong>generating new tokens</strong>, click the 'Generate Token' option, specify your desired payload as JSON, select an algorithm, provide the signing key (or generate one), and the tool will create a properly formatted JWT for your use"
      ]
    },
    conclusion: "The JWT Debugger serves as an essential tool for developers working with modern authentication systems, providing comprehensive capabilities for token inspection, validation, and generation. By offering clear visibility into token structure and verification status, it helps streamline debugging processes and ensure the security of JWT implementations. Whether you're troubleshooting authentication issues, integrating with identity providers, or designing new token-based systems, this tool simplifies the complex process of working with JWTs. As authentication tokens continue to be a cornerstone of web application security, having a reliable JWT debugging utility in your development toolkit becomes increasingly valuable for maintaining secure, properly functioning authentication flows."
  }
} 