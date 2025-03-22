export default {
  name: 'HTTP Status Code Lookup',
  description: 'Look up and understand HTTP response status codes and messages',
  search: {
    title: 'Find Status Code',
    placeholder: 'Enter status code or search by description',
    button: 'Look Up',
    recent: 'Recent Searches',
    common: 'Common Status Codes'
  },
  results: {
    title: 'Status Code Information',
    code: 'Status Code',
    type: 'Type',
    message: 'Standard Message',
    description: 'Description',
    spec: 'Specification',
    references: 'References',
    examples: 'Examples',
    noResults: 'No results found',
    searchError: 'Error searching for status code',
    tryAgain: 'Try another search'
  },
  categories: {
    title: 'Categories',
    information: 'Informational Responses (1xx)',
    success: 'Success Responses (2xx)',
    redirection: 'Redirection Messages (3xx)',
    clientError: 'Client Error Responses (4xx)',
    serverError: 'Server Error Responses (5xx)',
    unofficial: 'Unofficial Codes',
    internet: 'Internet Information Services',
    nginx: 'Nginx',
    cloudflare: 'Cloudflare',
    aws: 'AWS'
  },
  statusInfo: {
    '100': {
      message: 'Continue',
      description: 'The server has received the request headers, and the client should proceed to send the request body.'
    },
    '101': {
      message: 'Switching Protocols',
      description: 'The requester has asked the server to switch protocols and the server has agreed to do so.'
    },
    '200': {
      message: 'OK',
      description: 'The request has succeeded. The meaning of success depends on the HTTP method.'
    },
    '201': {
      message: 'Created',
      description: 'The request has succeeded and a new resource has been created as a result.'
    },
    '204': {
      message: 'No Content',
      description: 'The server successfully processed the request, but is not returning any content.'
    },
    '301': {
      message: 'Moved Permanently',
      description: 'The URL of the requested resource has been changed permanently. The new URL is given in the response.'
    },
    '302': {
      message: 'Found',
      description: 'The URL of the requested resource has been changed temporarily. The new URL is given in the response.'
    },
    '304': {
      message: 'Not Modified',
      description: 'There is no need to retransmit the resource, as the client still has a previously-downloaded copy.'
    },
    '400': {
      message: 'Bad Request',
      description: 'The server could not understand the request due to invalid syntax.'
    },
    '401': {
      message: 'Unauthorized',
      description: 'The client must authenticate itself to get the requested response.'
    },
    '403': {
      message: 'Forbidden',
      description: 'The client does not have access rights to the content.'
    },
    '404': {
      message: 'Not Found',
      description: 'The server can not find the requested resource.'
    },
    '500': {
      message: 'Internal Server Error',
      description: 'The server has encountered a situation it doesn\'t know how to handle.'
    },
    '502': {
      message: 'Bad Gateway',
      description: 'The server, while acting as a gateway or proxy, received an invalid response from the upstream server.'
    },
    '503': {
      message: 'Service Unavailable',
      description: 'The server is not ready to handle the request. Common causes are a server that is down for maintenance or is overloaded.'
    }
  },
  tools: {
    title: 'Tools',
    checkUrl: 'Check URL Status',
    statusCodeFlow: 'Status Code Flow Chart',
    apiTest: 'API Tester',
    debugger: 'Response Debugger',
    statusInspector: 'URL Status Inspector'
  },
  features: {
    title: 'Features',
    overview: 'Status Code Overview',
    comparison: 'Status Code Comparison',
    troubleshooting: 'Troubleshooting Guide',
    bestPractices: 'Best Practices',
    codeExamples: 'Code Examples'
  },
  details: {
    title: 'Detailed Information',
    history: 'History',
    browser: 'Browser Behavior',
    seo: 'SEO Impact',
    security: 'Security Implications',
    bestPractices: 'Best Practices',
    alternatives: 'Alternative Status Codes',
    commonErrors: 'Common Errors'
  },
  codeExamples: {
    title: 'Code Examples',
    nodejs: 'Node.js',
    python: 'Python',
    php: 'PHP',
    java: 'Java',
    go: 'Go',
    copyCode: 'Copy Code',
    response: 'Response Example',
    request: 'Request Example'
  }
} 