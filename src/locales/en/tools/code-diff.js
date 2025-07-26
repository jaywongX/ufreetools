export default {
  name: 'Code Diff',
  description: 'Compare two pieces of code and highlight the differences',

  options: {
    title: 'Options',
    ignoreCase: 'Ignore Case',
    ignoreWhitespace: 'Ignore Whitespace',
    trimWhitespace: 'Trim Whitespace',
    diffMode: 'Diff Mode',
    diffModes: {
      chars: 'Character',
      words: 'Word',
      lines: 'Line',
      sentences: 'Sentence',
      json: 'JSON'
    },
    diffStyle: 'Diff Style',
    diffStyles: {
      split: 'Split View',
      inline: 'Inline View'
    },
    context: 'Context Lines',
    wrap: 'Wrap Text',
    languages: {
      plaintext: 'Plain Text',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },

  inputs: {
    original: 'Original Code',
    modified: 'Modified Code',
    placeholderOriginal: 'Enter original code here...',
    placeholderModified: 'Enter modified code here...'
  },

  actions: {
    compare: 'Compare',
    clear: 'Clear',
    swap: 'Swap',
    copy: 'Copy Diff',
    download: 'Download Diff',
    upload: 'Upload Files'
  },

  results: {
    title: 'Diff Results',
    changes: 'Changes',
    additions: 'Additions',
    deletions: 'Deletions',
    unchanged: 'Unchanged',
    noChanges: 'No differences found - the two texts are identical',
    loading: 'Generating diff...'
  },

  upload: {
    originalFile: 'Original File',
    modifiedFile: 'Modified File',
    dropOriginal: 'Drag original file here or click to browse',
    dropModified: 'Drag modified file here or click to browse'
  },

  messages: {
    copied: 'Copied to clipboard!',
    inputRequired: 'Please enter text in both input fields',
    diffGenerated: 'Diff generated successfully',
    error: 'Error generating diff',
    fileError: 'Error reading file'
  },

  tips: {
    title: 'Usage Tips',
    compareOptions: 'Adjust comparison options to suit your needs - ignoring whitespace can be helpful for code comparisons.',
    diffModes: 'Different diff modes provide varying levels of detail in the comparison.',
    largeFiles: 'For large files, line-based comparison is more efficient.',
    jsonMode: 'Use JSON mode for comparing structured data - it will normalize and compare object structures.'
  }
}; 