export default {
  name: 'Regular Expression Tester',
  description: 'Test and validate regular expressions, view matches in real-time',
  options: {
    flags: 'Flags',
    global: 'Global (g)',
    caseInsensitive: 'Case insensitive (i)',
    multiline: 'Multiline (m)',
    dotAll: 'Dot matches newline (s)',
    unicode: 'Unicode (u)',
    sticky: 'Sticky (y)'
  },
  labels: {
    pattern: 'Regex Pattern',
    testString: 'Test String',
    matches: 'Matches',
    groups: 'Groups',
    noMatches: 'No matches found'
  }
} 