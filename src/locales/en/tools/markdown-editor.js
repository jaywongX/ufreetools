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
    strikethrough: 'Strikethrough',
    heading: 'Heading',
    link: 'Link',
    image: 'Image',
    list: 'List',
    quote: 'Quote',
    code: 'Code',
    table: 'Table',
    hr: 'Horizontal Rule',
    preview: 'Preview',
    copy: 'Copy',
    clear: 'Clear',
    download: 'Download Markdown',
    downloadHTML: 'Download HTML',
    upload: 'Upload Markdown'
  },
  messages: {
    copied: 'Content copied to clipboard!',
    copyError: 'Copy failed, please copy manually',
    clearConfirm: 'Are you sure you want to clear the editor content?',
    templateConfirm: 'Applying the template will replace the current content. Continue?',
    templateApplied: 'Applied "{name}" template',
    saved: 'Document saved',
    uploadSuccess: 'Document uploaded successfully',
    uploadError: 'Error uploading document',
    wordCount: '{count} words',
    charCount: '{count} characters'
  },
  placeholder: 'Enter your Markdown content here...',
  templates: {
    title: 'Quick Templates',
    apply: 'Apply Template',
    confirm: 'Apply Template'
  },
  dialogs: {
    clear: {
      title: 'Clear Editor',
      message: 'Are you sure you want to clear the editor content?'
    },
    template: {
      title: 'Apply Template',
      message: 'Applying the template will replace the current content. Continue?'
    }
  }
} 