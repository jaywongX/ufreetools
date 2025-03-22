export default {
  name: 'Sensitive Word Filter',
  description: 'Detect and filter sensitive words in text, supporting custom word libraries and filtering rules',
  input: {
    title: 'Input Text',
    placeholder: 'Enter the text to be checked...',
    loadSample: 'Load Sample',
    clearInput: 'Clear Input',
    uploadFile: 'Upload Text File'
  },
  output: {
    title: 'Filtered Text',
    original: 'Original Text',
    filtered: 'Filtered Text',
    statistics: 'Statistics',
    copyOutput: 'Copy Filtered Text',
    clearOutput: 'Clear Output',
    download: 'Download Filtered Text'
  },
  options: {
    title: 'Filter Options',
    filterMode: 'Filter Mode',
    caseSensitive: 'Case Sensitive',
    wholeWordOnly: 'Whole Word Only',
    customReplacement: 'Custom Replacement',
    replacementChar: 'Replacement Character',
    highlightWords: 'Highlight Words',
    customDictionary: 'Custom Dictionary',
    importDictionary: 'Import Dictionary',
    exportDictionary: 'Export Dictionary'
  },
  filterModes: {
    replace: 'Replace Words',
    highlight: 'Highlight Words',
    remove: 'Remove Words',
    detect: 'Detect Only'
  },
  dictionary: {
    title: 'Word Dictionary',
    add: 'Add Word',
    remove: 'Remove',
    clear: 'Clear Dictionary',
    wordInput: 'Enter a word to add',
    categories: 'Categories',
    severity: 'Severity',
    bulkAdd: 'Bulk Add',
    search: 'Search Dictionary'
  },
  categories: {
    profanity: 'Profanity',
    slurs: 'Slurs',
    adult: 'Adult Content',
    offensive: 'Offensive',
    violence: 'Violence',
    discrimination: 'Discrimination',
    personal: 'Personal Information',
    custom: 'Custom'
  },
  severityLevels: {
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    critical: 'Critical'
  },
  statistics: {
    totalWords: 'Total Words',
    sensitiveWords: 'Sensitive Words',
    uniqueSensitiveWords: 'Unique Sensitive Words',
    severityBreakdown: 'Severity Breakdown',
    categoryBreakdown: 'Category Breakdown',
    cleanlinessScore: 'Cleanliness Score'
  },
  filterOptions: {
    title: 'Filter Mode',
    modes: {
      asterisk: 'Replace with *',
      custom: 'Custom replacement character',
      remove: 'Remove sensitive words'
    },
    replaceChar: {
      title: 'Replacement Character',
      placeholder: 'Enter replacement character'
    }
  },
  customWords: {
    title: 'Custom Sensitive Word Library',
    addWord: 'Add Word',
    addPrompt: 'Please enter the sensitive word to add:',
    removeWord: 'Remove'
  },
  actions: {
    filter: 'Start Filtering',
    reset: 'Reset',
    processing: 'Processing...',
    clearAll: 'Clear All',
    copyFiltered: 'Copy Filtered',
    downloadReport: 'Download Report',
    resetSettings: 'Reset Settings'
  },
  results: {
    title: 'Filter Results',
    tabs: {
      filteredResult: 'Filtered Result',
      detectionReport: 'Detection Report'
    },
    filteredText: {
      title: 'Filtered Text',
      copy: 'Copy Result',
      empty: 'No filtered text to display'
    },
    statistics: {
      detectedCount: 'Detected Sensitive Words',
      retentionRate: 'Text Retention Rate',
      totalWords: 'Total Character Count'
    },
    detectedWords: {
      title: 'Detected Sensitive Words',
      empty: 'No sensitive words detected'
    }
  },
  messages: {
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed, please copy manually',
    noInput: 'Please enter text to filter',
    inputTooLong: 'Input text is too long',
    wordAdded: 'Word added to sensitive word library',
    wordExists: 'This word already exists in the library',
    wordRemoved: 'Word removed from library',
    filterSuccess: 'Text filtered successfully',
    noSensitiveWords: 'No sensitive words found',
    dictionaryCleared: 'Dictionary cleared',
    dictionaryImported: 'Dictionary imported',
    dictionaryExported: 'Dictionary exported',
    emptyText: 'Please enter text to filter'
  }
} 