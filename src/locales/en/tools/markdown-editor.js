export default {
  name: 'Markdown Editor',
  description: 'Edit and preview Markdown documents with real-time rendering',
  options: {
    mode: 'Mode',
    syntaxHighlighting: 'Syntax Highlighting',
    autoSave: 'Auto Save',
    lineNumbers: 'Line Numbers',
    spellCheck: 'Spell Check',
    wordWrap: 'Word Wrap'
  },
  modes: {
    split: 'Split View',
    edit: 'Edit Only',
    preview: 'Preview Only'
  },
  actions: {
    bold: 'Bold',
    italic: 'Italic',
    heading: 'Heading',
    link: 'Link',
    image: 'Image',
    list: 'List',
    quote: 'Quote',
    code: 'Code',
    table: 'Table',
    preview: 'Preview',
    copy: 'Copy',
    clear: 'Clear',
    download: 'Download Markdown',
    downloadHTML: 'Download HTML',
    upload: 'Upload Markdown'
  },
  messages: {
    copied: 'Copied to clipboard!',
    saved: 'Document saved',
    uploadSuccess: 'Document uploaded successfully',
    uploadError: 'Error uploading document',
    wordCount: '{count} words',
    charCount: '{count} characters'
  }
} 