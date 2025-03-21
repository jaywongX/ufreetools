export default {
  name: 'Markdown to HTML',
  description: 'Convert Markdown text to HTML with customizable options',
  input: {
    title: 'Input Markdown',
    placeholder: 'Enter or paste your Markdown text here...',
    loadSample: 'Load Sample',
    clearInput: 'Clear Input',
    uploadFile: 'Upload Markdown File'
  },
  output: {
    title: 'HTML Output',
    copied: 'HTML copied to clipboard',
    download: 'Download HTML',
    copyOutput: 'Copy HTML',
    clearOutput: 'Clear Output',
    previewTab: 'Preview',
    htmlTab: 'HTML'
  },
  options: {
    title: 'Conversion Options',
    headerIds: 'Auto Header IDs',
    gfm: 'GitHub Flavored Markdown',
    tables: 'Tables',
    breaks: 'Line Breaks',
    smartLists: 'Smart Lists',
    smartypants: 'Smartypants',
    xhtml: 'XHTML',
    highlight: 'Syntax Highlighting',
    sanitize: 'Sanitize HTML',
    footnotes: 'Footnotes',
    taskLists: 'Task Lists',
    emoji: 'Emoji Support',
    includeStyle: 'Include Default CSS'
  },
  styles: {
    title: 'Style Options',
    theme: 'Theme',
    codeTheme: 'Code Theme',
    customCSS: 'Custom CSS',
    fontSize: 'Font Size',
    lineHeight: 'Line Height',
    enableCustom: 'Enable Custom Styling'
  },
  themes: {
    default: 'Default',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: 'Dark Mode',
    custom: 'Custom'
  },
  codeThemes: {
    default: 'Default',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },
  actions: {
    convert: 'Convert to HTML',
    clearAll: 'Clear All',
    copyHtml: 'Copy HTML',
    saveAsHtml: 'Save as HTML',
    generateToc: 'Generate Table of Contents'
  },
  messages: {
    conversionSuccess: 'Markdown converted successfully',
    conversionFailed: 'Failed to convert Markdown: {error}',
    emptyInput: 'Please enter some Markdown to convert',
    copied: 'HTML copied to clipboard',
    tocGenerated: 'Table of contents generated'
  }
} 