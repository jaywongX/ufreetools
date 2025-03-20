export default {
  name: 'URL Encoder/Decoder',
  description: 'Encode and decode URLs and URL components',
  options: {
    mode: 'Mode',
    encodeType: 'Encoding Type',
    charset: 'Character Set',
    spaceAsPlus: 'Encode Space as +'
  },
  modes: {
    encode: 'Encode',
    decode: 'Decode',
    component: 'Component'
  },
  encodeTypes: {
    full: 'Full URL',
    component: 'URL Component',
    query: 'Query String',
    path: 'Path Segment'
  },
  actions: {
    process: 'Process',
    swap: 'Swap Input/Output',
    copy: 'Copy',
    clear: 'Clear',
    parse: 'Parse URL'
  },
  messages: {
    copied: 'Copied to clipboard!',
    encodeSuccess: 'URL encoded successfully',
    decodeSuccess: 'URL decoded successfully',
    invalidUrl: 'Invalid URL format',
    components: 'URL Components',
    protocol: 'Protocol',
    host: 'Host',
    port: 'Port',
    path: 'Path',
    query: 'Query',
    hash: 'Hash'
  }
} 