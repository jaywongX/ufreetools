export default {
  name: 'CSS Formatter',
  description: 'Format and beautify CSS code for better readability',
  options: {
    indentSize: 'Indent Size',
    indentWithTabs: 'Indent With Tabs',
    convertQuotes: 'Convert Quotes',
    sortSelectors: 'Sort Selectors',
    sortProperties: 'Sort Properties',
    compressColors: 'Compress Colors',
    expandShorthand: 'Expand Shorthand Properties'
  },
  actions: {
    format: 'Format CSS',
    minify: 'Minify',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download',
    upload: 'Upload File'
  },
  messages: {
    copied: 'Copied to clipboard!',
    formatSuccess: 'CSS formatted successfully',
    formatError: 'Error formatting CSS',
    invalidCss: 'Invalid CSS syntax'
  }
} 