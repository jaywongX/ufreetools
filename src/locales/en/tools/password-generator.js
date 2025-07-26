export default {
  name: 'Password Generator',
  description: 'Generate secure, random passwords with customizable options',

  options: {
    length: 'Password Length',
    quantity: 'Number of Passwords',
    includeLowercase: 'Lowercase Letters (a-z)',
    includeUppercase: 'Uppercase Letters (A-Z)',
    includeNumbers: 'Numbers (0-9)',
    includeSymbols: 'Symbols (!@#$%)',
    excludeSimilar: 'Exclude Similar Characters (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: 'Exclude Ambiguous Symbols ({}<>[]()\'"`\\)',
    requireAll: 'Require All Character Types',
    noConsecutive: 'No Consecutive Similar Characters',
    advancedOptions: 'Advanced Options',
    characterTypes: 'Character Types'
  },

  presets: {
    standard: 'Standard',
    strong: 'Strong',
    memorable: 'Memorable',
    pin: 'PIN',
    pronounceable: 'Pronounceable',
    custom: 'Custom',
    easyToRemember: 'Easy to Remember',
    balanced: 'Balanced',
    secure: 'Secure'
  },

  strength: {
    title: 'Password Strength',
    veryWeak: 'Very Weak',
    weak: 'Weak', 
    medium: 'Medium',
    strong: 'Strong',
    veryStrong: 'Very Strong',
    unknown: 'Unknown'
  },

  actions: {
    generate: 'Generate Passwords',
    regenerate: 'Regenerate',
    copy: 'Copy',
    copyAll: 'Copy All',
    clear: 'Clear',
    expand: 'Expand',
    collapse: 'Collapse'
  },

  messages: {
    copied: 'Copied to clipboard!',
    allCopied: 'All passwords copied to clipboard!',
    generated: 'Passwords generated successfully',
    invalidOptions: 'Please select at least one character type',
    tooManyPasswords: 'Maximum number of passwords is 100',
    clickToGenerate: 'Click the button above to generate passwords'
  },

  errors: {
    copyFailed: 'Failed to copy password: ',
    copyFailedManual: 'Copy failed, please copy manually'
  },

  results: {
    title: 'Generated Passwords'
  },

  units: {
    passwords: 'passwords'
  },

  tips: {
    title: 'Password Security Tips',
    useLength: 'Use passwords with at least 12 characters for better security',
    useDifferent: 'Use a different password for each website or service',
    changeRegularly: 'Change passwords for important accounts regularly',
    useManager: 'Consider using a password manager to securely store complex passwords',
    use2FA: 'Enable two-factor authentication for additional protection'
  }
}; 