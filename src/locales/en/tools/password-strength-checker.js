export default {
  name: 'Password Strength Checker',
  description: 'Check and analyze password strength with detailed security metrics',

  input: {
    title: 'Enter Password',
    placeholder: 'Type or paste your password',
    showPassword: 'Show Password',
    hidePassword: 'Hide Password',
    clear: 'Clear',
    generate: 'Generate Password',
    check: 'Check Strength',
    empty: 'Enter a password to check',
    disclaimer: 'Enter any password to assess its security strength. Your password will not be stored or sent to any server.'
  },

  results: {
    title: 'Password Analysis',
    strength: 'Strength',
    score: 'Score',
    entropy: 'Entropy',
    crackTime: 'Estimated Crack Time',
    very_weak: 'Very Weak',
    weak: 'Weak',
    fair: 'Fair',
    good: 'Good',
    strong: 'Strong',
    very_strong: 'Very Strong',
    feedback: 'Feedback',
    suggestions: 'Improvement Suggestions',
    warnings: 'Detected Issues',
    noWarnings: 'No warnings detected',
    noSuggestions: 'No suggestions available'
  },

  details: {
    title: 'Detailed Analysis',
    length: 'Password Length',
    charset: 'Character Diversity',
    patterns: 'Patterns Used',
    uniqueChars: 'Unique Characters',
    uppercase: 'Uppercase Letters',
    lowercase: 'Lowercase Letters',
    numbers: 'Numbers',
    symbols: 'Symbols',
    repetitions: 'Repetitions',
    sequences: 'Sequences',
    dictionary: 'Dictionary Words',
    leaked: 'Previously Exposed',
    reused: 'Reused Pattern'
  },

  patterns: {
    dictionary: 'Dictionary word',
    sequence: 'Sequential characters',
    repeat: 'Repeated characters',
    spatial: 'Spatial pattern (keyboard)',
    date: 'Date pattern',
    year: 'Year pattern',
    common: 'Common password',
    name: 'Name pattern',
    reversal: 'Reversed word',
    leet: 'Leetspeak substitution',
    predictable: 'Predictable pattern'
  },

  crackTimes: {
    instantly: 'Instantly',
    seconds: 'In seconds',
    minutes: 'In minutes',
    hours: 'In hours',
    days: 'In days',
    months: 'In months',
    years: 'In years',
    centuries: 'In centuries',
    forever: 'Practically forever'
  },

  suggestions: {
    addWords: 'Add more words or characters',
    addSymbols: 'Include symbols',
    addNumbers: 'Include numbers',
    upperLower: 'Mix uppercase and lowercase',
    avoidPatterns: 'Avoid keyboard patterns and repeated characters',
    avoidCommon: 'Avoid dictionary-based or common passwords, even if you substitute letters with numbers (e.g., "e" with "3")',
    avoidPersonal: 'Avoid personal information',
    avoidDictionary: 'Avoid dictionary words',
    usePassphrase: 'Consider using a phrase, unrelated word combinations, or acronyms to create a stronger password that is easier to remember',
    increaseLonger: 'Make your password longer',
    avoidSequence: 'Avoid sequential patterns',
    avoidRepeated: 'Avoid repeated characters',
    avoidDates: 'Avoid dates and years',
    addMoreChars: 'Increase password length to at least 12 characters. Each additional character exponentially increases difficulty to crack',
    addTypes: 'Add {types} to increase password complexity',
    useManager: 'Use a password manager to generate and manage strong passwords, using different passwords for each site'
  },

  generator: {
    title: 'Password Generator',
    length: 'Length',
    options: 'Options',
    uppercase: 'Include Uppercase Letters',
    lowercase: 'Include Lowercase Letters',
    numbers: 'Include Numbers',
    symbols: 'Include Symbols',
    excludeSimilar: 'Exclude Similar Characters',
    excludeAmbiguous: 'Exclude Ambiguous Characters',
    generate: 'Generate Password',
    passphrase: 'Generate Passphrase',
    wordCount: 'Number of Words',
    separator: 'Word Separator',
    capitalize: 'Capitalize Words',
    includeNumber: 'Include a Number',
    includeSymbol: 'Include a Symbol'
  },

  common: {
    copy: 'Copy to Clipboard',
    save: 'Save to History',
    clear: 'Clear',
    refresh: 'Refresh',
    copied: 'Copied to clipboard',
    saved: 'Saved to history',
    history: 'History',
    noHistory: 'No history available',
    common: 'common'
  },

  breach: {
    title: 'Data Breach Check',
    description: 'Check if your password has appeared in known data breaches',
    disclaimer: 'Your password is never sent over the network. Only a partial hash is checked.',
    checkButton: 'Check for Breaches',
    safe: 'Not found in known breaches',
    found: 'Found in {count} data breaches!',
    warning: 'This password has been exposed in data breaches and should never be used.',
    checking: 'Checking breaches...'
  },

  settings: {
    title: 'Settings',
    algorithm: 'Strength Algorithm',
    history: 'Save History',
    clearHistory: 'Clear History',
    breachCheck: 'Check for Breaches',
    timeout: 'Clear after Timeout',
    timeoutDuration: 'Timeout Duration (seconds)',
    clipboard: 'Clear Clipboard after Copy',
    language: 'Language'
  },

  score: {
    none: 'Not Rated'
  },

  descriptions: {
    none: 'Unable to assess password strength',
    veryWeak: 'This password is very easy to guess or crack, extremely insecure.',
    weak: 'This password has low security and may be easily cracked.',
    fair: 'This password has some security but still has room for improvement.',
    good: 'This is a relatively secure password that is difficult to crack.',
    veryStrong: 'This is a very secure password that is almost impossible to crack.'
  },

  length: {
    none: 'None',
    tooShort: 'Too Short',
    acceptable: 'Acceptable',
    good: 'Good',
    excellent: 'Excellent'
  },

  lengthMessage: {
    none: 'No password entered',
    needMore: 'At least {min} characters needed',
    better: '{min} or more characters would be more secure',
    good: 'Great! Longer passwords are harder to crack',
    excellent: 'Excellent length!'
  },

  complexity: {
    none: 'None',
    veryLow: 'Very Low',
    fair: 'Fair',
    good: 'Good',
    excellent: 'Excellent'
  },

  issues: {
    tooShort: 'Password is too short (less than 8 characters)',
    noUppercase: 'No uppercase letters',
    noLowercase: 'No lowercase letters',
    noNumbers: 'No numbers',
    noSymbols: 'No special symbols',
    hasSequence: 'Contains common keyboard sequences (e.g., "qwerty" or "123456")',
    hasRepeated: 'Contains repeated characters (e.g., "aaa" or "111")',
    commonPassword: 'Uses a common or easily guessable password'
  },

  characters: 'characters',

  tips: {
    title: 'Password Security Tips',
    length: 'Use passwords with at least 12 characters',
    mix: 'Mix uppercase, lowercase, numbers, and special symbols',
    avoid: 'Avoid common words, phrases, or personal information',
    unique: 'Don\'t use the same password across multiple sites',
    manager: 'Consider using a password manager to generate and store complex passwords'
  }
}; 