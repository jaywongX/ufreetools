export default {
  name: 'Code Obfuscator',
  description: 'Obfuscate JavaScript and CSS code to enhance security and protect intellectual property',

  languages: {
    title: 'Select Language',
    javascript: 'JavaScript',
    css: 'CSS'
  },

  options: {
    title: 'Obfuscation Options',
    javascript: {
      compact: 'Compact Output (Remove Whitespace)',
      controlFlowFlattening: 'Control Flow Flattening',
      deadCodeInjection: 'Dead Code Injection',
      debugProtection: 'Debug Protection',
      selfDefending: 'Self Defending (Prevent Formatting)',
      stringArray: 'String Array',
      renameGlobals: 'Rename Globals',
      renameProperties: 'Rename Properties',
      mangle: 'Mangle Variable Names',
      stringArrayEncoding: 'String Array Encoding',
      stringArrayThreshold: 'String Array Threshold',
      unicodeEscapeSequence: 'Unicode Escape Sequence'
    },
    css: {
      compact: 'Compact Output',
      renameSelectors: 'Rename Selectors',
      preserveImportant: 'Preserve !important',
      restructure: 'Restructure Rules',
      keepVendorPrefixes: 'Keep Vendor Prefixes',
      removeComments: 'Remove Comments'
    }
  },

  input: {
    title: 'Input Code',
    placeholder: 'Enter code to obfuscate...',
    clear: 'Clear',
    paste: 'Paste',
    upload: 'Upload File'
  },

  output: {
    title: 'Obfuscated Result',
    placeholder: 'Obfuscated code will appear here...',
    copy: 'Copy',
    download: 'Download',
    stats: {
      original: 'Original Size',
      obfuscated: 'Obfuscated Size',
      ratio: 'Compression Ratio'
    },
    increase: 'Increase',
    decrease: 'Decrease',
  },

  actions: {
    obfuscate: 'Obfuscate',
    clear: 'Clear'
  },

  messages: {
    copied: 'Copied to clipboard',
    copyFailed: 'Copy failed, please copy manually',
    processing: 'Processing...',
    error: 'Obfuscation error',
    emptyInput: 'Please enter code to obfuscate',
    invalidInput: 'Invalid input code',
    uploadError: 'File upload failed',
    fileTooLarge: 'File is too large (max 2MB)'
  },

  tips: {
    title: 'Usage Tips',
    tip1: 'Code obfuscation makes reverse engineering harder but cannot completely prevent code from being cracked',
    tip2: 'Enabling more obfuscation options will increase code size and runtime overhead',
    tip3: 'Some obfuscation options may affect code debuggability',
    tip4: 'It is recommended to backup original code before obfuscation',
    tip5: 'For large projects, consider using professional obfuscation tools'
  },

  demo: {
    title: 'Demo',
    function: 'Function demo',
    class: 'Class demo',
    simple: 'simple style',
    animation: 'Animation effect',
  }
}; 