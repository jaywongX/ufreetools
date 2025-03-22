export default {
  name: 'JWT Decoder',
  description: 'Decode and verify JSON Web Tokens',
  sections: {
    input: 'JWT Token',
    header: 'Header',
    payload: 'Payload',
    signature: 'Signature',
    verification: 'Verification'
  },
  options: {
    displayFormat: 'Display Format',
    verifySignature: 'Verify Signature',
    algorithm: 'Algorithm',
    secretKey: 'Secret Key',
    publicKey: 'Public Key'
  },
  formats: {
    prettify: 'Prettified JSON',
    raw: 'Raw JSON',
    decoded: 'Decoded Values'
  },
  actions: {
    decode: 'Decode',
    verify: 'Verify',
    copy: 'Copy',
    clear: 'Clear'
  },
  claims: {
    iss: 'Issuer',
    sub: 'Subject',
    aud: 'Audience',
    exp: 'Expiration Time',
    nbf: 'Not Before',
    iat: 'Issued At',
    jti: 'JWT ID'
  },
  messages: {
    copied: 'Copied to clipboard!',
    decodeSuccess: 'JWT decoded successfully',
    decodeError: 'Error decoding JWT',
    invalidJwt: 'Invalid JWT format',
    verified: 'Signature verified',
    notVerified: 'Signature verification failed',
    expired: 'Token has expired',
    notActive: 'Token is not active yet'
  }
} 