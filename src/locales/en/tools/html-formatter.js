export default {
  name: 'HTML Formatter',
  description: 'Format and beautify HTML code for better readability',
  formatMode: 'Format Mode',
  beautify: 'Beautify',
  minify: 'Minify',
  formatOptions: 'Format Options',
  removeComments: 'Remove Comments',
  preserveComments: 'Preserve Comments',
  showLineNumbers: 'Show Line Numbers',
  helpText: 'HTML beautify/minify tool helps developers quickly organize or optimize HTML code to improve readability or reduce file size.',
  input: 'HTML Input',
  inputPlaceholder: 'Paste or type HTML code here...',
  examples: 'Examples',
  exampleNames: {
    simple: 'Simple HTML',
    complex: 'Complex HTML Page'
  },
  beautifiedResult: 'Beautified Result',
  minifiedResult: 'Minified Result',
  stats: {
    chars: 'Characters',
    lines: 'Lines',
    reduction: 'Reduced by {chars} characters ({percent}%)'
  },
  indentOptions: {
    spaces: '{count} Spaces',
    tab: 'Tab Indentation'
  },
  errorMessages: {
    emptyInput: 'Please enter HTML code to process',
    processingFailed: 'Failed to process HTML: {message}'
  },
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