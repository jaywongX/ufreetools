export default {
  name: 'URL Parser',
  description: 'Parse, analyze and manipulate URLs with interactive visualization',
  input: {
    label: 'Enter URL',
    placeholder: 'https://example.com/path?query=value#fragment',
    parse: 'Parse URL',
    clear: 'Clear',
    examples: 'Examples'
  },
  components: {
    protocol: 'Protocol',
    username: 'Username',
    password: 'Password',
    hostname: 'Hostname',
    port: 'Port',
    path: 'Path',
    query: 'Query Parameters',
    fragment: 'Fragment',
    origin: 'Origin',
    baseURL: 'Base URL'
  },
  query: {
    key: 'Key',
    value: 'Value',
    addParam: 'Add Parameter',
    removeParam: 'Remove',
    decoded: 'Decoded'
  },
  path: {
    segment: 'Segment',
    value: 'Value',
    index: 'Index'
  },
  operations: {
    build: 'Build URL',
    normalize: 'Normalize',
    resolve: 'Resolve',
    encode: 'Encode',
    decode: 'Decode'
  },
  output: {
    title: 'Parsed URL',
    copy: 'Copy',
    visualization: 'URL Visualization',
    relativeTo: 'Relative to:',
    encoded: 'Encoded',
    decoded: 'Decoded',
    percent: 'Percent Encoding'
  },
  messages: {
    copied: 'Copied to clipboard',
    invalidURL: 'Invalid URL format',
    parseSuccess: 'URL parsed successfully',
    enterURL: 'Please enter a URL to parse'
  }
} 