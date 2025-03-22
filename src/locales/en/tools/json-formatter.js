export default {
  name: 'JSON Formatter',
  description: 'Online JSON formatting and validation tool, supporting compression and beautification',
  options: {
    indent: 'Indentation',
    sort: 'Sort Keys',
    compress: 'Compress',
    beautify: 'Beautify'
  },
  actions: {
    format: 'Format JSON',
    compress:'Compress',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download',
    transferMeaning:"Transfer meaning",
    contraposition:"Contraposition",
  },
  messages: {
    invalidJson: 'Invalid JSON syntax',
    copied: 'Copied to clipboard!',
    empty: 'Please enter JSON content'
  }
} 