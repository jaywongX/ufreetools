export default {
  name: 'SQL Formatter',
  description: 'Online SQL formatting and validation tool, supporting compression and beautification',
  options: {
    language: 'SQL Dialect',
    indent: 'Indentation Style',
    spaceCount: 'Space Count',
    keywordCase: 'Keyword Case',
    uppercase: 'Uppercase Keywords',
    lineBreak: 'Line Break Style',
    tabSize: 'Tab Size'
  },
  languages: {
    standard: 'Standard SQL',
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    tsql: 'T-SQL (SQL Server)',
    oracle: 'Oracle PL/SQL'
  },
  indentOptions: {
    spaces: 'Spaces',
    tabs: 'Tabs'
  },
  spaceOptions: {
    two: '2 spaces',
    four: '4 spaces'
  },
  caseOptions: {
    preserve: 'Preserve original',
    upper: 'UPPERCASE',
    lower: 'lowercase'
  },
  actions: {
    format: 'Format SQL',
    minify: 'Minify SQL',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download'
  },
  messages: {
    copied: 'Copied to clipboard!',
    formatSuccess: 'SQL formatted successfully',
    formatError: 'Error formatting SQL'
  },
  placeholders: {
    input: 'Enter SQL query here...',
    output: 'Formatted SQL will appear here...'
  },
  output: 'Formatted Result',
  tips: {
    title: 'Usage Tips',
    dialect: 'Select the appropriate SQL dialect for accurate formatting.',
    formatting: 'Customize indentation style and space count to match your preferred coding style.',
    keywords: 'Choose whether to preserve, uppercase, or lowercase SQL keywords.',
    copy: 'Use the copy button to quickly copy the formatted SQL to your clipboard.'
  }
} 