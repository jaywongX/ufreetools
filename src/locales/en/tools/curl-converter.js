export default {
  name: 'cURL Converter',
  description: 'Convert cURL commands into code snippets in various programming languages',
  title: 'cURL to Code',
  subtitle: 'Convert cURL commands into multiple programming language codes for quick integration of HTTP requests into your projects',
  input: {
    title: 'cURL Command',
    placeholder: 'Enter a cURL command here, e.g.: curl -X POST https://api.example.com -H "Content-Type: application/json" -d "{"key":"value"}"',
    parse: 'Parse cURL',
    clear: 'Clear',
    examples: 'Example commands:',
    options: 'Parser Options',
    validateCommand: 'Validate Command',
    formatCurl: 'Format cURL'
  },
  options: {
    detectAuth: 'Auto-detect Authentication',
    resolveVariables: 'Resolve Environment Variables',
    processContinuations: 'Handle Line Continuation (\\)',
    followRedirects: 'Follow Redirects',
    preserveHeaders: 'Preserve All Headers',
    ignoreErrors: 'Ignore Parsing Errors',
    noDuplicateHeaders: 'No Duplicate Headers (Use the Last One)'
  },
  output: {
    title: 'Code Output',
    language: 'Target Language',
    copy: 'Copy',
    copyTooltip: 'Copy to Clipboard',
    download: 'Download',
    beautify: 'Beautify',
    codeTitle: '{language} Code',
    errorTitle: 'Conversion Error',
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
      curl: 'cURL (Formatted)',
      json: 'JSON (Request Object)',
      har: 'HAR (HTTP Archive)',
      javascript: 'JavaScript (Fetch)'
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
    insecureWarning: 'Warning: This command uses --insecure/-k (SSL verification is disabled)',
    verboseIgnored: 'Note: Verbose mode (-v) was ignored during conversion',
    unsupportedOptions: 'Unsupported Options',
    warnings: 'Warnings',
    info: 'Information'
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
    unsupportedMethod: 'Warning: Not all languages support the HTTP method {method}',
    curlRequired: 'The command must start with "curl "',
    copyFailed: 'Copy failed, please copy manually'
  },
  examples: {
    title: 'Example cURL Commands',
    basic: 'Basic GET Request',
    headers: 'Custom Headers',
    post: 'POST with JSON',
    formData: 'Form Data Submission',
    auth: 'Basic Authentication',
    complex: 'Complex Example',
    exampleCommands: {
      getRequest: 'GET Request',
      postJson: 'POST JSON',
      postForm: 'POST Form',
      withAuth: 'With Authentication',
      uploadFile: 'Upload File'
    }
  },
  actions: {
    convert: 'Convert',
    converting: 'Converting...'
  }
}