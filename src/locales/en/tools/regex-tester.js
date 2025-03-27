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
  }
} 