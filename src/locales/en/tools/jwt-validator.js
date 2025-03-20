export default {
  name: 'JWT Token Validator',
  description: 'Validate, decode and inspect JSON Web Tokens (JWT)',
  tokenInput: {
    title: 'Enter JWT Token',
    placeholder: 'Paste your JWT token here',
    validate: 'Validate',
    clear: 'Clear',
    sample: 'Load Sample Token'
  },
  secretInput: {
    title: 'Verification Secret (optional)',
    placeholder: 'Enter secret key to verify signature',
    keyType: 'Key Type',
    algorithm: 'Algorithm'
  },
  decoded: {
    title: 'Decoded Token',
    header: 'Header',
    payload: 'Payload',
    signature: 'Signature',
    raw: 'Raw Data'
  },
  keyTypes: {
    secret: 'Shared Secret',
    publicKey: 'Public Key',
    certificate: 'Certificate',
    jwk: 'JWK'
  },
  fields: {
    issuer: 'Issuer (iss)',
    subject: 'Subject (sub)',
    audience: 'Audience (aud)',
    expiration: 'Expiration (exp)',
    notBefore: 'Not Before (nbf)',
    issuedAt: 'Issued At (iat)',
    jwtId: 'JWT ID (jti)',
    type: 'Type (typ)',
    algorithm: 'Algorithm (alg)'
  },
  validation: {
    valid: 'Token is valid',
    invalid: 'Token is invalid',
    expired: 'Token has expired',
    notActive: 'Token is not active yet',
    signatureValid: 'Signature is valid',
    signatureInvalid: 'Signature is invalid',
    signatureNotVerified: 'Signature not verified (no secret provided)',
    invalidFormat: 'Invalid JWT format'
  },
  tokenAnalysis: {
    title: 'Token Analysis',
    status: 'Status',
    expiresIn: 'Expires in',
    expired: 'Expired',
    validFor: 'Valid for',
    issuedAgo: 'Issued',
    expiry: 'Expiry',
    age: 'Age',
    scope: 'Scope',
    permissions: 'Permissions'
  },
  actions: {
    verify: 'Verify Signature',
    copy: 'Copy',
    view: 'View JSON',
    download: 'Download',
    share: 'Share',
    timestamp: 'Convert Timestamps'
  },
  messages: {
    copied: 'Copied to clipboard',
    invalidToken: 'Invalid JWT format',
    errorDecoding: 'Error decoding token: {error}'
  }
} 