export default {
  name: 'HTTP Status Code Lookup',
  description: 'Query and understand HTTP response status codes and messages',

  search: {
    title: 'Search for Status Codes',
    placeholder: 'Enter a status code or search by description',
    button: 'Search',
    recent: 'Recent Searches',
    common: 'Common Status Codes',
    filter: {
      all: 'All Categories',
      informational: '1xx - Informational Responses',
      success: '2xx - Successful Responses',
      redirection: '3xx - Redirections',
      clientError: '4xx - Client Errors',
      serverError: '5xx - Server Errors'
    }
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
    searchError: 'An error occurred while searching for the status code',
    tryAgain: 'Try another search',
    example: 'Example',
    notes: 'Notes'
  },

  categories: {
    title: 'Categories',
    information: 'Informational Responses (1xx)',
    success: 'Successful Responses (2xx)',
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
      description: 'The server has received the request headers and the client should proceed to send the request body.',
      shortDescription: 'Continue sending the request',
      fullDescription: 'The server has received the initial part of the request, and the client should continue sending the remaining request.',
      notes: 'Typically used when the client wants to check if the server will accept the request before sending a large request body.'
    },
    '101': {
      message: 'Switching Protocols',
      description: 'The requester has asked the server to switch protocols, and the server has agreed to do so.',
      shortDescription: 'Switching Protocols',
      fullDescription: 'The server understands the client’s request and will notify the client via the Upgrade header to use a different protocol to complete this request.',
      notes: 'Commonly used in the WebSocket connection establishment process.'
    },
    '200': {
      message: 'OK',
      description: 'The request has succeeded. The meaning depends on the HTTP method.'
    },
    '201': {
      message: 'Created',
      description: 'The request has succeeded, and as a result, a new resource has been created.'
    },
    '204': {
      message: 'No Content',
      description: 'The server successfully processed the request but is not returning any content.'
    },
    '301': {
      message: 'Moved Permanently',
      description: 'The URL of the requested resource has been changed permanently. The new URL is given in the response.'
    },
    '302': {
      message: 'Found',
      description: 'The URL of the requested resource has been temporarily changed. The new URL is given in the response.'
    },
    '304': {
      message: 'Not Modified',
      description: 'There is no need to retransmit the resource since the client still has a previously-downloaded copy.'
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
      description: 'The server cannot find the requested resource.'
    },
    '500': {
      message: 'Internal Server Error',
      description: 'The server encountered a situation it does not know how to handle.'
    },
    '502': {
      message: 'Bad Gateway',
      description: 'The server, acting as a gateway or proxy, received an invalid response from an upstream server.'
    },
    '503': {
      message: 'Service Unavailable',
      description: 'The server is not ready to handle the request. Common reasons are server maintenance or overload.'
    }
  },

  tools: {
    title: 'Tools',
    checkUrl: 'Check URL Status',
    statusCodeFlow: 'Status Code Flowchart',
    apiTest: 'API Tester',
    debugger: 'Response Debugger',
    statusInspector: 'URL Status Checker'
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
    title: 'Details',
    history: 'History',
    browser: 'Browser Behavior',
    seo: 'SEO Impact',
    security: 'Security Impact',
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
  },

  category: {
    intro: 'HTTP status codes are responses from the server to the browser’s request, divided into five categories:',
    informational: '1xx (Informational) - The request is being processed.',
    success: '2xx (Success) - The request was successfully processed.',
    redirection: '3xx (Redirection) - Additional action needs to be taken to complete the request.',
    clientError: '4xx (Client Error) - The server cannot process the request.',
    serverError: '5xx (Server Error) - The server failed to process the request.'
  },

  codes: {
    '100': {
      shortDescription: 'Continue sending the request',
      description: 'The server has received the initial part of the request, and the client should continue sending the remaining request.',
      notes: 'Typically used when the client wants to check if the server will accept the request before sending a large request body.'
    },
    '101': {
      shortDescription: 'Switching Protocols',
      description: 'The server understands the client’s request and will notify the client via the Upgrade header to use a different protocol to complete this request.',
      notes: 'Commonly used in the WebSocket connection establishment process.'
    },
    '200': {
      shortDescription: 'Request successful',
      description: 'The request was successful, and the server has returned the requested content. This is the most common status code.',
      notes: 'All successful GET requests should return this status code.'
    },
    '201': {
      shortDescription: 'Created',
      description: 'The request was successful, and the server has created a new resource. Typically returned after a POST request.',
      notes: 'Should return the location (URI) of the newly created resource.'
    },
    '204': {
      shortDescription: 'No Content',
      description: 'The server successfully processed the request but does not need to return any entity content.',
      notes: 'Commonly used after successful DELETE requests or when only a client-side view reset is required.'
    },
    '301': {
      shortDescription: 'Moved Permanently',
      description: 'The requested resource has been permanently moved to a new location, and future references should use the new URL.',
      notes: 'Search engines update the resource URL, and browsers typically cache this redirection.'
    },
    '302': {
      shortDescription: 'Temporary Redirect',
      description: 'The requested resource is temporarily responding from a different URL, but the requester should continue using the original URL.',
      notes: 'Unlike 301, search engines do not update the resource link, and browsers may not cache this redirection.'
    },
    '304': {
      shortDescription: 'Not Modified',
      description: 'The resource has not been modified; the client can use its cached version. Often used in conditional GET requests.',
      notes: 'The server should not return a response body, which helps improve performance and reduce bandwidth consumption.'
    },
    '400': {
      shortDescription: 'Bad Request',
      description: 'The server cannot understand the format of the request, and the client should not resubmit the request without modification.',
      notes: 'Typically caused by incorrect request parameter formatting, missing necessary parameters, or invalid parameter values.'
    },
    '401': {
      shortDescription: 'Unauthorized',
      description: 'The request requires user authentication, such as when credentials are not provided or are invalid.',
      notes: 'The client should provide or re-provide correct authentication information.'
    },
    '403': {
      shortDescription: 'Forbidden',
      description: 'The server understands the request but refuses to execute it. Unlike 401, authentication will not help.',
      notes: 'Typically due to insufficient permissions, such as attempting to access content restricted to administrators.'
    },
    '404': {
      shortDescription: 'Not Found',
      description: 'The server cannot find the requested resource, possibly due to a misspelled URL or deletion of the resource.',
      notes: 'One of the most common error status codes; users should be clearly informed that the resource does not exist.'
    },
    '405': {
      shortDescription: 'Method Not Allowed',
      description: 'The request method specified in the request line is not allowed for the requested resource.',
      notes: 'The response must include an Allow header indicating valid request methods for the resource.'
    },
    '409': {
      shortDescription: 'Conflict',
      description: 'The request conflicts with the current state of the server, often occurring in PUT requests.',
      notes: 'Common when trying to create an already existing resource or concurrently editing the same resource.'
    },
    '429': {
      shortDescription: 'Too Many Requests',
      description: 'The user has sent too many requests within a given time period ("rate limiting").',
      notes: 'Should include a Retry-After header to inform the client when they can retry the request.'
    },
    '500': {
      shortDescription: 'Internal Server Error',
      description: 'The server encountered a situation it does not know how to handle, usually due to code errors or temporary issues.',
      notes: 'The most common server error status code; detailed error information and logs should be provided for debugging purposes.'
    },
    '502': {
      shortDescription: 'Bad Gateway',
      description: 'The server, acting as a gateway or proxy, received an invalid response from an upstream server.',
      notes: 'Common when using reverse proxies or load balancers, and the upstream service is unavailable or responds abnormally.'
    },
    '503': {
      shortDescription: 'Service Unavailable',
      description: 'The server is temporarily unavailable, usually due to overload or system maintenance.',
      notes: 'Should include a Retry-After header to indicate when the client should retry, helping to reduce server load.'
    },
    '504': {
      shortDescription: 'Gateway Timeout',
      description: 'The server, acting as a gateway or proxy, did not receive a timely response from an upstream server.',
      notes: 'Common when the proxied service takes too long to process or there are network connectivity issues.'
    }
  }
};