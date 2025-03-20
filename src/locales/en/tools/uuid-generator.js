export default {
  name: 'UUID Generator',
  description: 'Generate random UUIDs and GUIDs with customizable options',
  options: {
    version: 'UUID Version',
    quantity: 'Quantity',
    format: 'Output Format',
    uppercase: 'Uppercase',
    braces: 'Include Braces',
    hyphens: 'Include Hyphens'
  },
  versions: {
    v1: 'Version 1 (Time-based)',
    v4: 'Version 4 (Random)',
    v5: 'Version 5 (Namespace)',
    custom: 'Custom'
  },
  formats: {
    default: 'Default',
    base64: 'Base64',
    binary: 'Binary',
    hex: 'Hexadecimal'
  },
  actions: {
    generate: 'Generate UUID',
    copy: 'Copy',
    copyAll: 'Copy All',
    clear: 'Clear',
    download: 'Download as TXT'
  },
  messages: {
    copied: 'Copied to clipboard!',
    generated: 'UUIDs generated successfully',
    tooMany: 'Maximum allowed quantity is 1000',
    invalidVersion: 'Invalid UUID version',
    invalidNamespace: 'Invalid namespace UUID'
  }
} 