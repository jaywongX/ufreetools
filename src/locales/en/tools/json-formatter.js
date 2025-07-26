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
    compress: 'Compress',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download',
    transferMeaning: 'Escape',
    contraposition: 'Unescape'
  },

  messages: {
    invalidJson: 'Invalid JSON syntax',
    copied: 'Copied to clipboard!',
    empty: 'Please enter JSON content',
    formatTip: 'Property list will be displayed after formatting or compressing JSON',
    formatSuccess: 'JSON formatted successfully',
    compressSuccess: 'JSON compressed successfully',
    escapeSuccess: 'JSON escaped successfully',
    unescapeSuccess: 'JSON unescaped successfully',
    copyFailed: 'Copy failed, please copy manually'
  },

  labels: {
    jsonData: 'JSON Data',
    propertyList: 'Property List',
    clickToCopy: '(Click value to copy)'
  },

  placeholders: {
    jsonInput: 'Paste your JSON data...'
  }
}; 