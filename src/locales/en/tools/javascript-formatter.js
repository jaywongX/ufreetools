export default {
  name: 'JavaScript Formatter',
  description: 'Online JavaScript formatting and validation tool, supporting compression and beautification',
  options: {
    indent: 'Indentation',
    quotes: 'Quote Style',
    semicolons: 'Semicolons',
    trailingComma: 'Trailing Commas'
  },
  actions: {
    format: 'Format JavaScript',
    minify: 'Minify',
    beautify: 'Beautify',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download'
  },
  messages: {
    copied: 'Copied to clipboard!',
    formatSuccess: 'JavaScript formatted successfully',
    formatError: 'Error formatting JavaScript'
  }
} 