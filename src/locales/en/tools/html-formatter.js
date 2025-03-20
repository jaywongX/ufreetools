export default {
  name: 'HTML Formatter',
  description: 'Format and beautify HTML code for better readability',
  options: {
    indentSize: 'Indent Size',
    wrapLength: 'Wrap Line Length',
    indentInnerHtml: 'Indent Inner HTML',
    preserveNewlines: 'Preserve Newlines',
    maxPreserveNewlines: 'Max Consecutive Newlines',
    wrapAttributes: 'Wrap Attributes',
    sortAttributes: 'Sort Attributes',
    sortClassNames: 'Sort Class Names'
  },
  actions: {
    format: 'Format HTML',
    minify: 'Minify',
    clear: 'Clear',
    copy: 'Copy',
    download: 'Download',
    upload: 'Upload File'
  },
  messages: {
    copied: 'Copied to clipboard!',
    formatSuccess: 'HTML formatted successfully',
    formatError: 'Error formatting HTML',
    invalidHtml: 'Invalid HTML syntax'
  }
} 