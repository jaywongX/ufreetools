export default {
  name: 'Sensitive Word Filter',
  description: 'Filter, detect, and replace sensitive words in text content',
  input: {
    title: 'Input Text',
    placeholder: 'Enter or paste text to check for sensitive words...',
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
  actions: {
    filter: 'Filter Text',
    clearAll: 'Clear All',
    copyFiltered: 'Copy Filtered',
    downloadReport: 'Download Report',
    resetSettings: 'Reset Settings'
  },
  messages: {
    filterSuccess: 'Text filtered successfully',
    noSensitiveWords: 'No sensitive words found',
    wordAdded: 'Word added to dictionary',
    wordRemoved: 'Word removed from dictionary',
    dictionaryCleared: 'Dictionary cleared',
    dictionaryImported: 'Dictionary imported',
    dictionaryExported: 'Dictionary exported',
    emptyText: 'Please enter text to filter'
  }
} 