export default {
  name: 'LaTeX Formula Generator',
  description: 'Generate and export LaTeX mathematical formulas in real-time',

  // UI text
  input: 'Input LaTeX code',

  output: 'Preview result',
  renderButton: 'Render Formula',
  exportButton: 'Export as Image',
  copyButton: 'Copy LaTeX Code',

  // Settings
  settings: {
    title: 'Settings',
    fontSize: 'Font Size',
    textColor: 'Text Color',
    backgroundColor: 'Background Color',
    displayMode: 'Display Mode',
    displayModeInline: 'Inline Mode',
    displayModeBlock: 'Block Mode'
  },

  // Examples
  examples: {
    title: 'Examples',
    basic: 'Basic Formulas',
    fraction: 'Fractions',
    superscript: 'Superscript/Subscript',
    integral: 'Integrals',
    matrix: 'Matrices',
    more: 'More Examples'
  },

  // Messages
  copied: 'Copied to clipboard',

  errorTitle: 'Rendering Error',
  errorMessage: 'Please check your LaTeX syntax'
}; 