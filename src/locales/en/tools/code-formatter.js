export default {
  name: 'Code Formatter',
  description: 'Online code formatting and validation tool, supporting multiple languages',
  languages: {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    html: 'HTML',
    css: 'CSS',
    json: 'JSON',
    xml: 'XML',
    sql: 'SQL',
    graphql: 'GraphQL'
  },
  options: {
    indentSize: 'Indent Size',
    tabWidth: 'Tab Width',
    useTabs: 'Use Tabs',
    semi: 'Semicolons',
    singleQuote: 'Single Quotes',
    trailingComma: 'Trailing Commas',
    bracketSpacing: 'Bracket Spacing',
    arrowParens: 'Arrow Function Parentheses'
  },
  actions: {
    format: 'Format Code',
    copy: 'Copy Formatted Code',
    download: 'Download',
    settings: 'Formatting Settings'
  },
  messages: {
    copied: 'Copied to clipboard!',
    formatSuccess: 'Code formatted successfully',
    formatError: 'Error formatting code'
  }
} 