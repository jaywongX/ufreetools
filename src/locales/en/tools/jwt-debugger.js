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
    share: 'Share Token'
  },
  messages: {
    invalidToken: 'Invalid JWT format',
    copied: 'Copied to clipboard!',
    verificationSuccess: 'Signature verified successfully',
    verificationFailed: 'Signature verification failed'
  }
} 