export default {
  name: 'cURL Converter',
  description: 'Convert cURL commands to code snippets in different programming languages',
  input: {
    title: 'cURL Command',
    placeholder: 'Enter or paste a cURL command here...',
    parse: 'Parse cURL',
    clear: 'Clear',
    examples: 'Examples',
    options: 'Parser Options',
    validateCommand: 'Validate Command',
    formatCurl: 'Format cURL'
  },
  options: {
    detectAuth: 'Auto-detect authorization',
    resolveVariables: 'Resolve environment variables',
    processContinuations: 'Process line continuations (\\)',
    followRedirects: 'Follow redirects',
    preserveHeaders: 'Preserve all headers',
    ignoreErrors: 'Ignore parsing errors',
    noDuplicateHeaders: 'No duplicate headers (use last)'
  },
  output: {
    title: 'Code Output',
    language: 'Language',
    copy: 'Copy',
    download: 'Download',
    beautify: 'Beautify',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: 'Browser (fetch)',
      curl: 'cURL (formatted)',
      json: 'JSON (request object)',
      har: 'HAR (HTTP Archive)'
    }
  },
  request: {
    title: 'Request Details',
    method: 'Method',
    url: 'URL',
    headers: 'Headers',
    body: 'Body',
    auth: 'Authentication',
    options: 'Options',
    cookie: 'Cookies',
    queryParams: 'Query Parameters',
    formData: 'Form Data',
    visualize: 'Visualize'
  },
  visualization: {
    title: 'Request Visualization',
    request: 'Request',
    response: 'Response',
    headers: 'Headers',
    body: 'Body',
    timing: 'Timing',
    raw: 'Raw'
  },
  analysis: {
    title: 'Command Analysis',
    insecureWarning: 'Warning: This command is using --insecure/-k (SSL verification disabled)',
    verboseIgnored: 'Note: Verbose mode (-v) is ignored in conversion',
    unsupportedOptions: 'Unsupported options',
    warnings: 'Warnings',
    info: 'Info'
  },
  messages: {
    parsing: 'Parsing cURL command...',
    parseFailed: 'Failed to parse cURL command: {error}',
    parseSuccess: 'cURL command parsed successfully',
    copied: 'Code copied to clipboard',
    downloaded: 'Code downloaded',
    invalidCurl: 'Invalid cURL command',
    emptyCurl: 'Please enter a cURL command',
    validCurl: 'Valid cURL command',
    unknownOption: 'Unknown option: {option}',
    unsupportedMethod: 'Warning: HTTP method {method} might not be supported by all languages'
  },
  examples: {
    title: 'Example cURL Commands',
    basic: 'Basic GET Request',
    headers: 'Custom Headers',
    post: 'POST with JSON',
    formData: 'Form Data Submission',
    auth: 'Basic Authentication',
    complex: 'Complex Example'
  }
} 