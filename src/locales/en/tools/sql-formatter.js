export default {
  name: 'SQL Formatter',
  description: 'Online SQL formatting and validation tool, supporting compression and beautification',
  options: {
    indent: 'Indentation',
    uppercase: 'Uppercase Keywords',
    lineBreak: 'Line Break Style',
    tabSize: 'Tab Size'
  },
  actions: {
    format: 'Format SQL',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download'
  },
  messages: {
    copied: 'Copied to clipboard!',
    formatSuccess: 'SQL formatted successfully',
    formatError: 'Error formatting SQL'
  }
} 