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
  },
  article: {
    title: 'Sensitive Word Filter: Comprehensive Text Content Filtering Tool',
    functionality: {
      title: 'Tool Functionality and Features',
      description: 'The <strong>Sensitive Word Filter</strong> is a powerful text processing tool designed to identify and filter out sensitive, inappropriate, or offensive content from your text. It uses advanced pattern matching algorithms to detect potentially problematic words and phrases, then automatically replaces or removes them according to your preferences. This text filtering tool supports custom dictionaries, multiple filtering modes, and provides detailed statistical analysis of detected sensitive content.'
    },
    useCases: {
      title: 'Practical Applications and Usage Scenarios',
      list: [
        '<strong>Content Moderation for Websites</strong>: Automatically screen user-generated content like comments, forum posts, and reviews to maintain a safe and respectful online environment.',
        '<strong>Educational Materials Review</strong>: Ensure teaching materials and student submissions are free from inappropriate language for classroom or educational platforms.',
        '<strong>Customer Service Content Screening</strong>: Filter outgoing communications to verify they maintain professional standards and avoid potentially offensive language.',
        '<strong>Social Media Management</strong>: Review and clean up content before publishing on social media platforms to prevent policy violations.',
        '<strong>Text Data Preparation</strong>: Clean text datasets for machine learning and analysis by removing offensive or biased language.',
        '<strong>Corporate Communication Compliance</strong>: Verify internal and external communications adhere to corporate language policies and professional standards.'
      ]
    },
    faq: {
      title: 'Frequently Asked Questions about Sensitive Word Filtering',
      items: [
        {
          question: 'How accurate is the sensitive word detection?',
          answer: 'The <strong>sensitive word detection</strong> system employs precise pattern matching algorithms with very high accuracy. However, context-aware filtering (understanding the meaning behind words) remains challenging. The tool allows you to review detected words and customize the dictionary to improve accuracy for your specific needs.'
        },
        {
          question: 'Can I create and save my own custom word libraries?',
          answer: 'Yes, the <strong>custom word library</strong> feature allows you to add your own sensitive words that are specific to your content needs. You can easily add words to the filter, and they will be applied during the filtering process.'
        },
        {
          question: 'What filtering modes are available?',
          answer: 'The tool offers multiple <strong>text filtering modes</strong>: replacing sensitive words with asterisks (*), using custom replacement characters, or completely removing the sensitive words from the text. You can select the mode that best suits your requirements.'
        },
        {
          question: 'Will this tool work with different languages?',
          answer: 'Yes, the <strong>multilingual sensitive word filter</strong> works with various languages, though its effectiveness may vary depending on the language. The tool primarily focuses on character pattern matching, which works across different writing systems.'
        },
        {
          question: 'How can I process large amounts of text?',
          answer: 'For <strong>bulk text filtering</strong>, simply paste your content into the input area. The tool is optimized to handle large text volumes efficiently, though extremely large texts may take more processing time. For very large documents, consider processing them in sections.'
        }
      ]
    },
    tutorial: {
      title: 'Step-by-Step Guide to Using the Sensitive Word Filter',
      steps: [
        '<strong>Input your text</strong>: Start by entering or pasting the text you want to filter in the input text area.',
        '<strong>Configure filter options</strong>: Select your preferred filtering mode (replace with asterisks, custom character, or remove words).',
        '<strong>Customize your sensitive word library</strong> (optional): Add specific words you want to detect and filter by clicking the "Add Word" button.',
        '<strong>Start filtering</strong>: Click the "Start Filtering" button to process your text and detect sensitive content.',
        '<strong>Review the results</strong>: Examine the filtered text in the "Filtered Result" tab and check the statistical breakdown in the "Detection Report" tab.',
        '<strong>Copy or save results</strong>: Copy the filtered text to your clipboard for use in your applications or documents.'
      ]
    }
  }
} 