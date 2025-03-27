export default {
  name: 'JavaScript Obfuscator',
  description: 'Protect your JavaScript code by obfuscating it with various techniques',
  input: {
    title: 'Input JavaScript',
    placeholder: 'Enter or paste your JavaScript code here',
    loadSample: 'Load Sample',
    clearInput: 'Clear Input',
    uploadFile: 'Upload JS File'
  },
  output: {
    title: 'Obfuscated Code',
    copied: 'Code copied to clipboard',
    download: 'Download Obfuscated Code',
    copyOutput: 'Copy Code',
    clearOutput: 'Clear Output'
  },
  options: {
    title: 'Obfuscation Options',
    compact: 'Compact Code',
    selfDefending: 'Self Defending',
    controlFlowFlattening: 'Control Flow Flattening',
    controlFlowFlatteningThreshold: 'Control Flow Flattening Threshold',
    deadCodeInjection: 'Dead Code Injection',
    deadCodeInjectionThreshold: 'Dead Code Injection Threshold',
    debugProtection: 'Debug Protection',
    debugProtectionInterval: 'Debug Protection Interval',
    disableConsoleOutput: 'Disable Console Output',
    domainLock: 'Domain Lock',
    domainLockRedirectUrl: 'Domain Lock Redirect URL',
    identifierNamesGenerator: 'Identifier Names Generator',
    identifiersPrefix: 'Identifiers Prefix',
    renameGlobals: 'Rename Globals',
    reservedNames: 'Reserved Names',
    reservedStrings: 'Reserved Strings',
    rotateStringArray: 'Rotate String Array',
    seed: 'Seed',
    shuffleStringArray: 'Shuffle String Array',
    sourceMap: 'Source Map',
    sourceMapBaseUrl: 'Source Map Base URL',
    sourceMapFileName: 'Source Map File Name',
    splitStrings: 'Split Strings',
    splitStringsChunkLength: 'Split Strings Chunk Length',
    stringArray: 'String Array',
    stringArrayEncoding: 'String Array Encoding',
    stringArrayThreshold: 'String Array Threshold',
    target: 'Target',
    transformObjectKeys: 'Transform Object Keys',
    unicodeEscapeSequence: 'Unicode Escape Sequence'
  },
  presets: {
    title: 'Presets',
    low: 'Low Obfuscation',
    medium: 'Medium Obfuscation',
    high: 'High Obfuscation',
    custom: 'Custom'
  },
  actions: {
    obfuscate: 'Obfuscate',
    reset: 'Reset Options',
    savePreset: 'Save Preset',
    loadPreset: 'Load Preset'
  },
  messages: {
    obfuscationSuccess: 'Code obfuscated successfully',
    obfuscationFailed: 'Obfuscation failed: {error}',
    emptyCode: 'Please enter JavaScript code to obfuscate',
    uploadSuccess: 'File uploaded successfully',
    presetSaved: 'Preset saved',
    presetLoaded: 'Preset loaded'
  },
  help: {
    title: 'Option Help',
    stringArrayDesc: 'Moves string literals to a special array and replaces them with array calls',
    controlFlowDesc: 'Enables code control flow flattening, making it harder to follow logic',
    deadCodeDesc: 'Injects random dead code to confuse attackers',
    selfDefendingDesc: 'Makes the output resilient against format alterations'
  }
} 