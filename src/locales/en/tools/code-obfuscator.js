export default {
  name: 'Code Obfuscator',
  description: 'Obfuscate code to protect intellectual property and prevent reverse engineering',
  input: {
    title: 'Input Code',
    placeholder: 'Enter or paste your code here...',
    uploadFile: 'Upload File',
    loadSample: 'Load Sample'
  },
  options: {
    language: 'Language',
    obfuscationLevel: 'Obfuscation Level',
    preserveComments: 'Preserve Comments',
    reuseNames: 'Reuse Names',
    encodeStrings: 'Encode Strings',
    transformObjectKeys: 'Transform Object Keys',
    controlFlowFlattening: 'Control Flow Flattening',
    deadCodeInjection: 'Dead Code Injection',
    selfDefending: 'Self Defending Code'
  },
  languages: {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    html: 'HTML',
    css: 'CSS',
    php: 'PHP',
    python: 'Python'
  },
  levels: {
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    extreme: 'Extreme'
  },
  output: {
    title: 'Obfuscated Code',
    copied: 'Code copied to clipboard',
    download: 'Download Obfuscated Code'
  },
  actions: {
    obfuscate: 'Obfuscate',
    copy: 'Copy Code',
    download: 'Download',
    clear: 'Clear'
  },
  messages: {
    obfuscationSuccess: 'Code obfuscated successfully',
    obfuscationFailed: 'Failed to obfuscate code: {error}',
    emptyCode: 'Please enter code to obfuscate',
    invalidLanguage: 'Unsupported language',
    fileSizeExceeded: 'File size exceeds the limit'
  }
} 