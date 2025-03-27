export default {
  name: 'UUID Generator',
  description: 'Generate random UUIDs and GUIDs with customizable options, useful for database keys, temporary filenames, etc.',
  options: {
    version: 'UUID Version',
    quantity: 'Quantity',
    format: 'Format Options',
    includeDash: 'Include Hyphens (-)',
    generateCount: 'Number of UUIDs'
  },
  versions: {
    v1: 'Version 1 (Time-based)',
    v4: 'Version 4 (Random)',
    v5: 'Version 5 (Namespace)',
    custom: 'Custom'
  },
  quantities: {
    single: 'Single',
    five: '5 UUIDs',
    ten: '10 UUIDs',
    twenty: '20 UUIDs'
  },
  formats: {
    default: 'Default',
    base64: 'Base64',
    binary: 'Binary',
    hex: 'Hexadecimal',
    noDash: 'No Hyphens'
  },
  actions: {
    generate: 'Generate UUID',
    copy: 'Copy',
    copyAll: 'Copy All',
    clear: 'Clear Results',
    download: 'Download as TXT'
  },
  messages: {
    copied: 'Copied to clipboard!',
    generated: 'UUIDs generated successfully',
    tooMany: 'Maximum allowed quantity is 1000',
    invalidVersion: 'Invalid UUID version',
    invalidNamespace: 'Invalid namespace UUID',
    copyFailed: 'Copy failed'
  }
} 