export default {
  title: 'X.509 Certificate Decoder: Analyze and Validate SSL/TLS Certificates',
  introduction: {
    title: 'What is an X.509 Certificate Decoder?',
    p1: 'An <strong>X.509 certificate decoder</strong> is a powerful tool that helps security professionals, web developers, and IT administrators analyze digital certificates used in SSL/TLS protocols. Our free online X.509 certificate decoder tool provides a comprehensive analysis of certificate components, validity status, and security features without requiring any software installation.',
    p2: 'Digital certificates are essential for secure web communications, establishing trusted connections between browsers and servers. However, troubleshooting certificate issues requires understanding their complex structure and encoded data. The X.509 certificate decoder simplifies this process by parsing raw certificate data into human-readable information, enabling quick identification of problems and verification of certificate authenticity.'
  },
  useCases: {
    title: 'Common Use Cases for Certificate Decoding',
    case1: '<strong>SSL/TLS Certificate Verification</strong>: Validate the authenticity and integrity of website certificates before deployment.',
    case2: '<strong>Certificate Expiration Monitoring</strong>: Check the validity period and expiration dates to prevent unexpected service outages.',
    case3: '<strong>Certificate Path Validation</strong>: Examine certificate chains to ensure proper trust relationships between certificates.',
    case4: '<strong>Certificate Configuration Troubleshooting</strong>: Identify misconfiguration issues in certificates causing browser warnings or connection problems.',
    case5: '<strong>Digital Signature Verification</strong>: Inspect certificate signature algorithms and public key parameters for security assessment.'
  },
  faq: {
    title: 'Frequently Asked Questions about X.509 Certificates',
    q1: 'What information can I extract from an X.509 certificate?',
    a1: 'Using our <strong>X.509 certificate decoder</strong>, you can extract comprehensive information including issuer details, subject information, validity period, public key parameters, extensions (like Subject Alternative Names), digital signature algorithm, and certificate fingerprints. The tool also provides visual indicators for certificate health and expiration status, making it easy to identify certificates that need renewal.',
    q2: 'How do I know if my certificate is trusted by browsers?',
    a2: 'A certificate is typically trusted by browsers if it\'s issued by a recognized Certificate Authority (CA) and forms a valid trust chain. Our decoder tool helps you visualize the certificate chain and verify each certificate\'s validity. Key indicators include the certificate issuer (should be a trusted CA), valid dates (not expired), proper basic constraints (for intermediate certificates), and appropriate key usage extensions. Browser trust also depends on the certificate not being revoked, which can be checked via OCSP or CRL information in the certificate.',
    q3: 'What\'s the difference between PEM and DER certificate formats?',
    a3: 'PEM (Privacy Enhanced Mail) and DER (Distinguished Encoding Rules) are two common formats for X.509 certificates. <strong>PEM format</strong> is Base64 encoded, begins with "-----BEGIN CERTIFICATE-----", and is human-readable text. It\'s commonly used in web servers and email. <strong>DER format</strong> is binary encoded and not human-readable, but it\'s more compact. Our certificate decoder tool supports both formats automatically, detecting and parsing the appropriate format without requiring manual selection.',
    q4: 'How can I check if my certificate supports specific TLS features?',
    a4: 'To check TLS feature support in your certificate, examine the <strong>Extended Key Usage</strong> and <strong>Key Usage</strong> extensions with our certificate decoder. For server authentication (web servers), look for the "Server Authentication" (1.3.6.1.5.5.7.3.1) value in Extended Key Usage. The Key Usage extension indicates allowed operations like digital signature or key encipherment. Additionally, review the signature algorithm to ensure it uses modern, secure algorithms (like SHA-256 with RSA or ECDSA) rather than deprecated ones (like SHA-1 or MD5).',
    q5: 'What should I do if my certificate is expiring soon?',
    a5: 'If our <strong>certificate decoder</strong> shows your certificate is expiring soon (typically within 30 days), you should promptly renew it through your certificate provider or Certificate Authority. The renewal process generally involves: 1) Generating a new Certificate Signing Request (CSR), 2) Submitting it to your CA, 3) Completing validation requirements, and 4) Installing the new certificate on your server. We recommend initiating this process at least 2-4 weeks before expiration to avoid service disruptions or security warnings for users.'
  },
  tutorial: {
    title: 'How to Use the X.509 Certificate Decoder',
    step1: {
      title: 'Upload or Paste Your Certificate',
      content: 'Start by either uploading your certificate file (.crt, .cer, .pem, or .der) using the file uploader, or paste the PEM-encoded certificate text directly in the input box. Our tool supports drag-and-drop functionality for easy file uploading. If you don\'t have a certificate to analyze, you can click the "Load Sample" button to see how the tool works with a demonstration certificate.'
    },
    step2: {
      title: 'Decode the Certificate',
      content: 'Once your certificate is loaded, click the "Decode Certificate" button. Our tool will automatically detect the format (PEM or DER) and parse the certificate data. The processing happens entirely in your browser, ensuring your certificate data never leaves your device - making it a secure option for analyzing sensitive certificates.'
    },
    step3: {
      title: 'Analyze Certificate Details',
      content: 'After decoding, the tool will display comprehensive certificate information organized in easy-to-navigate tabs. The "Basic Information" tab shows essential details like validity period, serial number, and signature algorithm. The visual indicators clearly show if the certificate is valid, expiring soon, or already expired. You can explore more detailed information in specialized tabs for Subject &amp; Issuer, Extensions, Public Key, and more.'
    },
    step4: {
      title: 'Export and Download Reports',
      content: 'To save or share your certificate analysis, use the export functions at the bottom of the results section. You can download a comprehensive report in multiple formats (PDF, TXT, HTML, or JSON) or copy specific sections to your clipboard. These reports are valuable for documentation, compliance purposes, or sharing with team members during troubleshooting.'
    }
  },
  resources: {
    title: 'Additional Resources',
    intro: 'Expand your knowledge about X.509 certificates and related security topics with these valuable resources:',
    relatedTools: 'Related Security Tools',
    tool1: 'Hash Generator - Create cryptographic hashes for data verification',
    tool2: 'Base64 Encoder/Decoder - Convert between binary and Base64 formats',
    tool3: 'JWT Decoder - Analyze JSON Web Tokens used in authentication',
    externalLinks: 'External References',
    external1: 'IETF RFC 5280 - Internet X.509 Public Key Infrastructure Certificate',
    external2: 'Wikipedia - X.509 Certificate Standard Overview',
    external3: 'SSL.com - What is an X.509 Certificate?'
  },
  conclusion: {
    title: 'Conclusion',
    content: 'The <strong>X.509 certificate decoder</strong> is an essential tool for anyone working with digital certificates and secure communications. By providing clear, detailed information about certificate structure and validity, our tool helps you ensure your SSL/TLS implementations are secure and error-free. Whether you\'re a security professional conducting an audit, a web developer troubleshooting HTTPS issues, or an IT administrator managing certificate deployments, this decoder simplifies certificate analysis and enhances your security practices.'
  }
}
