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
    noConsecutive: 'No Consecutive Similar Characters'
  },
  presets: {
    standard: 'Standard',
    strong: 'Strong',
    memorable: 'Memorable',
    pin: 'PIN',
    pronounceable: 'Pronounceable',
    custom: 'Custom'
  },
  strength: {
    veryWeak: 'Very Weak',
    weak: 'Weak', 
    medium: 'Medium',
    strong: 'Strong',
    veryStrong: 'Very Strong'
  },
  actions: {
    generate: 'Generate Passwords',
    regenerate: 'Regenerate',
    copy: 'Copy',
    copyAll: 'Copy All',
    clear: 'Clear'
  },
  messages: {
    copied: 'Copied to clipboard!',
    generated: 'Passwords generated successfully',
    invalidOptions: 'Please select at least one character type',
    tooManyPasswords: 'Maximum number of passwords is 100'
  }
} 