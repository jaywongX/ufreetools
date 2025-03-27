export default {
  name: 'Code Formatter',
  description: 'Format and beautify code in various languages',
  languages: {
    title: 'Language',
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    json: 'JSON',
    sql: 'SQL',
    xml: 'XML',
    markdown: 'Markdown'
  },
  options: {
    title: 'Options',
    indent: 'Indentation',
    tabSize: 'Tab Size',
    insertSpaces: 'Insert Spaces',
    formatSelection: 'Format Selection',
    formatOnType: 'Format On Type',
    removeComments: 'Remove comments',
    mangle: 'Mangle variable names',
    lineBreak: 'Line break style'
  },
  actions: {
    beautify: 'Beautify',
    minify: 'Minify',
    format: 'Format',
    copy: 'Copy Result',
    clear: 'Clear',
    download: 'Download',
    paste: 'Paste from clipboard',
    loadSample: 'Load sample code'
  },
  messages: {
    formatSuccess: 'Code formatted successfully',
    formatError: 'Error formatting code',
    copied: 'Copied to clipboard!',
    languageChangeWarning: 'Changing language will reset your code. Continue?'
  },
  errors: {
    emptyCode: 'Please enter code to format',
    invalidJson: 'Invalid JSON',
    jsCompressionError: 'JavaScript compression error'
  },
  input: 'Input',
  output: 'Output',
  placeholders: {
    input: 'Paste your code here...',
    output: 'Formatted code will appear here...'
  },
  characters: 'characters',
  space: 'Space',
  spaces: 'spaces',
  auto: 'Auto',
  tips: {
    title: 'Usage Tips',
    selectLanguage: 'Select the appropriate language for your code for best formatting results.',
    beautifyMinify: 'Use "Beautify" for readable, indented code or "Minify" to reduce file size.',
    customizeOptions: 'Customize formatting options using the settings panel below.',
    keyboard: 'Press Tab key in the editor to insert indentation.'
  }
} 