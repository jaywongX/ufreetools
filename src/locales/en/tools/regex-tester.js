export default {
  name: 'Regular Expression Tester',
  description: 'Test and debug regular expressions with real-time highlighting and explanation',

  actions: {
    test: 'Test',
    clear: 'Clear',
    showExamples: 'Show Examples',
    hideExamples: 'Hide Examples',
    copy: 'Copy'
  },

  sections: {
    examples: 'Common Regular Expression Examples',
    pattern: 'Regular Expression Pattern',
    input: 'Test String',
    results: 'Match Results',
    flags: 'Flags'
  },

  flags: {
    g: 'Global match (g)',
    i: 'Case-insensitive (i)',
    m: 'Multiline (m)',
    s: 'Dot all (s)',
    u: 'Unicode (u)',
    y: 'Sticky (y)'
  },

  errors: {
    emptyRegex: 'Please enter a regular expression',
    emptyTestString: 'Please enter a test string',
    invalidRegex: 'Invalid regular expression'
  },

  messages: {
    matchesFound: '{count} matches found',
    noMatches: 'No matches found',
    copied: 'Copied to clipboard!'
  },

  placeholders: {
    pattern: 'Enter regular expression pattern',
    testString: 'Enter text to test against the pattern'
  },

  tips: {
    title: 'Usage Tips',
    pattern: 'Enter your regular expression pattern without the surrounding slashes.',
    flags: 'Use flags to modify pattern matching behavior (g: global, i: case-insensitive, m: multiline).',
    examples: 'Click "Show Examples" to see and use common regex patterns.',
    testing: 'After entering your pattern and test string, click "Test" to see matches.'
  },

  options: {
    flags: 'Flags',
    global: 'Global match (g)',
    caseInsensitive: 'Case-insensitive (i)',
    multiline: 'Multiline (m)',
    dotAll: 'Dot all (s)',
    unicode: 'Unicode (u)',
    sticky: 'Sticky (y)'
  },

  labels: {
    pattern: 'Regular Expression',
    testString: 'Test String',
    matches: 'Matches',
    groups: 'Groups',
    noMatches: 'No matches found'
  },

  match: 'Match',
  position: 'Position',
  group: 'Group',
  resultsWillAppearHere: 'Regular expression match results will appear here...',
  regexError: 'Regular expression error: {message}',
  emailAddress: 'Email Address',
  phoneNumber: 'Phone Number (China)',
  ipAddress: 'IP Address',
  dateFormat: 'Date (yyyy-mm-dd)',
  chineseCharacters: 'Chinese Characters',
  phoneNumberExample: 'Contact: 13912345678\nWeChat: 18887654321\nLandline: 010-12345678',
  urlExample: 'Visit https://example.com\nOr http://www.domain.org/path?query=value',
  ipAddressExample: 'Server address: 192.168.1.1\nDNS: 8.8.8.8, 114.114.114.114',
  dateFormatExample: 'Start date: 2023-01-15\nEnd date: 2023-02-28\nInvalid date: 2023-13-45',
  chineseCharactersExample: 'Hello世界！你好，World!'
}; 