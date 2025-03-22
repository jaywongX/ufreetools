export default {
  name: 'RegEx Generator',
  description: 'Generate regular expressions from natural language descriptions',
  input: {
    title: 'Describe Your Pattern',
    placeholder: 'E.g., "Match email addresses" or "Find URLs in text"',
    examples: 'Examples',
    advancedMode: 'Advanced Mode',
    simpleMode: 'Simple Mode'
  },
  matches: {
    title: 'Should Match',
    placeholder: 'Enter text that should match',
    addExample: 'Add Example',
    removeExample: 'Remove'
  },
  nonMatches: {
    title: 'Should Not Match',
    placeholder: 'Enter text that should not match',
    addExample: 'Add Example',
    removeExample: 'Remove'
  },
  commonPatterns: {
    title: 'Common Patterns',
    email: 'Email Address',
    url: 'URL',
    ipAddress: 'IP Address',
    date: 'Date (YYYY-MM-DD)',
    time: '24-hour Time (HH:MM)',
    phoneNumber: 'Phone Number',
    zipCode: 'ZIP Code',
    username: 'Username',
    password: 'Strong Password',
    creditCard: 'Credit Card Number',
    hexColor: 'Hex Color Code'
  },
  components: {
    title: 'Pattern Components',
    charSets: 'Character Sets',
    anchors: 'Anchors',
    groups: 'Groups',
    quantifiers: 'Quantifiers',
    escapes: 'Escape Sequences',
    operators: 'Operators',
    backrefs: 'Backreferences'
  },
  options: {
    title: 'RegEx Options',
    caseInsensitive: 'Case Insensitive (i)',
    multiline: 'Multiline (m)',
    dotAll: 'Dot All (s)',
    unicode: 'Unicode (u)',
    sticky: 'Sticky (y)',
    global: 'Global (g)'
  },
  output: {
    title: 'Generated RegEx',
    pattern: 'Pattern',
    flags: 'Flags',
    explanation: 'Explanation',
    testResults: 'Test Results',
    matchesFound: '{count} matches found',
    noMatches: 'No matches found',
    matchGroups: 'Match Groups'
  },
  testString: {
    title: 'Test String',
    placeholder: 'Enter text to test the regular expression',
    test: 'Test',
    matchHighlight: 'Highlight Matches'
  },
  actions: {
    generate: 'Generate RegEx',
    copy: 'Copy RegEx',
    copyRaw: 'Copy Raw Pattern',
    copyCode: 'Copy as Code',
    download: 'Download',
    visualize: 'Visualize',
    reset: 'Reset'
  },
  languages: {
    javascript: 'JavaScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    ruby: 'Ruby',
    golang: 'Go'
  },
  messages: {
    copied: 'Copied to clipboard',
    generating: 'Generating regular expression...',
    generationSuccess: 'Regular expression generated successfully',
    generationFailed: 'Failed to generate regular expression: {error}',
    emptyDescription: 'Please enter a pattern description'
  }
} 