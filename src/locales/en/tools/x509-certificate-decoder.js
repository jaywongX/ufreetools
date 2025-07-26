export default {
  name: 'X.509 Certificate Decoder',
  description: 'Free online X.509 certificate decoder tool. Parse and analyze SSL/TLS certificates, view certificate details, check validity, extract public keys, and export reports.',

  instructions: {
    title: 'Certificate Decoder',
    description: 'Upload a certificate file or paste a PEM-encoded certificate to view its details.'
  },

  dropzone: {
    title: 'Drag and drop your certificate here',
    formats: 'Supports .crt, .cer, .pem, and .der files'
  },

  buttons: {
    browse: 'Browse Files',
    decode: 'Decode Certificate',
    loadSample: 'Load Sample',
    downloadPdf: 'Download PDF Report',
    downloadTxt: 'Download Text Report',
    downloadHtml: 'Download HTML Report',
    downloadJson: 'Download JSON Report',
    copyBasic: 'Copy Basic Info',
    copySubject: 'Copy Subject/Issuer',
    copyAll: 'Copy All Info',
    copyValue: 'Copy Value',
    downloadKey: 'Download Key',
    exportPem: 'Export PEM',
    downloadCert: 'Download Certificate',
  },

  input: {
    paste: 'Or paste certificate data:',
    placeholder: 'Paste your PEM-encoded certificate (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)'
  },

  loading: 'Decoding certificate...',

  error: {
    title: 'Error decoding certificate',
    invalidFormat: 'Invalid certificate format',
    invalidBase64: 'Not a valid base64-encoded certificate',
    invalidStructure: 'Invalid certificate data structure',
    invalidDer: 'Invalid DER format certificate',
    invalidAsn1: 'Invalid certificate: cannot parse ASN.1 data',
    unsupportedType: 'Unsupported data type for certificate',
    failedParse: 'Failed to parse certificate data',
    invalidP12: 'Invalid PKCS#12 file format',
    invalidP12Password: 'Invalid PKCS#12 password',
    noCertificatesInP12: 'No certificates found in PKCS#12 file',
    unableToProcessP12: 'Unable to process PKCS#12 file'
  },

  guide: {
    title: 'How to use this tool',
    step1: 'Upload your X.509 certificate file (.crt, .cer, .pem, or .der) or paste the certificate data in the text area below.',
    step2: 'The tool automatically detects the format (PEM or DER) and decodes it.',
    step3: 'View detailed certificate information including subject, issuer, validity, extensions, and public key data.',
    step4: 'You can download a report of the certificate details in PDF or TXT format using the buttons at the bottom.'
  },

  tabs: {
    basic: 'Basic Information',
    subject: 'Subject & Issuer',
    extensions: 'Extensions',
    publicKey: 'Public Key',
    fingerprints: 'Fingerprints',
    raw: 'Raw Certificate'
  },

  results: {
    title: 'Certificate Details',
    serialNumber: 'Serial Number',
    version: 'Version',
    sigAlg: 'Signature Algorithm',
    validFrom: 'Valid From',
    validTo: 'Valid To',
    subject: 'Subject',
    issuer: 'Issuer',
    extensions: 'Extensions',
    publicKey: 'Public Key',
    algorithm: 'Algorithm',
    keySize: 'Key Size',
    keyValue: 'Key Value',
    fingerprints: 'Fingerprints',
    rawCertificate: 'Raw Certificate',
    field: 'Field',
    value: 'Value',
    critical: 'Critical',
    noExtensions: 'No extensions found in this certificate.',
    validity: 'Certificate Validity',
    expiresIn: 'Expires in {days} days',
    visualization: 'Certificate Visualization',
    daysRemaining: 'days remaining',
    valid: 'Valid',
    expired: 'Expired',
    expiringSoon: 'Expiring Soon',
    fieldDescriptions: 'Field Descriptions',
    certificateUsage: 'Certificate Usage',
    certificateChain: 'Certificate Chain',
    signatureValue: 'Signature Value',
    notAvailable: 'Not available',
    noSpecificUsage: 'No specific usage specified',
    signatureError: 'Error parsing signature value',
    keyDetails: 'Key Details',
    enhancedView: 'Enhanced View',
    endEntity: 'End-Entity',
    intermediate: 'Intermediate',
    rootCA: 'Root CA',
    endEntityCert: 'End-Entity Certificate',
    intermediateCert: 'Intermediate Certificate',
    rootCert: 'Root Certificate Authority',
    issuedBy: 'Issued by',
    unknownIssuer: 'Unknown issuer',
    notYetValid: 'Not yet valid'
  },

  report: {
    title: 'X.509 Certificate Report',
    generatedOn: 'Generated on'
  },

  extensions: {
    subjectKeyIdentifier: 'Subject Key Identifier',
    keyUsage: 'Key Usage',
    subjectAltName: 'Subject Alternative Name',
    basicConstraints: 'Basic Constraints',
    crlDistributionPoints: 'CRL Distribution Points',
    certificatePolicies: 'Certificate Policies',
    authorityKeyIdentifier: 'Authority Key Identifier',
    extKeyUsage: 'Extended Key Usage',
    authorityInfoAccess: 'Authority Information Access',
    ctPrecertificateScts: 'CT Precertificate SCTs'
  },

  usage: {
    serverAuth: 'Server Authentication',
    clientAuth: 'Client Authentication',
    codeSigning: 'Code Signing',
    emailProtection: 'Email Protection',
    timeStamping: 'Time Stamping',
    ocspSigning: 'OCSP Signing'
  },

  customOID: {
    title: 'Custom OID Lookup',
    placeholder: 'Enter OID, e.g., 2.5.29.15',
    lookup: 'Lookup',
    result: 'Result',
    value: 'Value',
    notFound: 'No information found for this OID',
    foundButComplex: 'OID found but value is complex',
    unknownName: 'Unknown OID name',
    complexValue: 'Complex value, cannot display directly'
  },

  descriptions: {
    serialNumber: 'A unique identifier for the certificate assigned by the certificate authority',
    version: 'The X.509 certificate format version, typically V3',
    sigAlg: 'The algorithm used to generate the certificate signature',
    validFrom: 'The date and time when the certificate becomes valid',
    validTo: 'The date and time when the certificate expires',
    subject: 'Information about the entity the certificate is issued to',
    issuer: 'Information about the certificate authority that issued the certificate',
    publicKey: 'The certificate holder\'s public key information',
    extensions: 'Additional fields containing information about certificate usage'
  },

  messages: {
    copiedToClipboard: 'Copied to clipboard',
    copyError: 'Failed to copy to clipboard'
  },

  pkcs12: {
    passwordPrompt: 'Please enter the password for the PKCS#12 file',
    noPassword: 'No password'
  },

  keyUsages: {
    digitalSignature: 'Digital Signature',
    nonRepudiation: 'Non Repudiation',
    keyEncipherment: 'Key Encipherment',
    dataEncipherment: 'Data Encipherment',
    keyAgreement: 'Key Agreement',
    keyCertSign: 'Key Certificate Sign',
    crlSign: 'CRL Sign',
    encipherOnly: 'Encipher Only',
    decipherOnly: 'Decipher Only'
  }
};