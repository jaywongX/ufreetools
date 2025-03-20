export default {
  name: 'Diff Viewer',
  description: 'Compare text and code files to find differences',
  options: {
    viewMode: 'View Mode',
    highlightLanguage: 'Syntax Highlighting',
    ignoreWhitespace: 'Ignore Whitespace',
    ignoreCase: 'Ignore Case',
    contextLines: 'Context Lines',
    lineNumbers: 'Line Numbers',
    wordDiff: 'Word-level Diff'
  },
  viewModes: {
    split: 'Split View',
    unified: 'Unified View',
    side: 'Side by Side'
  },
  sections: {
    original: 'Original',
    modified: 'Modified',
    diff: 'Differences'
  },
  actions: {
    compare: 'Compare',
    swap: 'Swap Sides',
    copy: 'Copy',
    copyDiff: 'Copy Diff',
    clear: 'Clear',
    download: 'Download Diff',
    uploadOriginal: 'Upload Original',
    uploadModified: 'Upload Modified'
  },
  messages: {
    copied: 'Copied to clipboard!',
    diffGenerated: 'Diff generated successfully',
    identical: 'Files are identical',
    linesAdded: '{count} lines added',
    linesRemoved: '{count} lines removed',
    linesChanged: '{count} lines changed',
    diffSummary: '{added} additions, {removed} removals, {changed} changes'
  }
} 