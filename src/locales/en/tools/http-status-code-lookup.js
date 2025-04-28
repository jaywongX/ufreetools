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
  },
  article: {
    title: "HTTP Status Code Reference Guide - Understanding Web Response Codes",
    intro: {
      title: "What are HTTP Status Codes and Why Are They Important?",
      p1: "<b>HTTP status codes</b> are standardized response codes issued by web servers to indicate the outcome of a client's request. These three-digit numerical codes are grouped into five classes, each serving a specific purpose in web communication. Our HTTP status code lookup tool provides instant access to detailed information about these codes, helping developers, webmasters, and IT professionals troubleshoot web-related issues efficiently.",
      p2: "Understanding <b>HTTP response codes</b> is crucial for anyone working with websites or web applications. These codes communicate whether an HTTP request has been successfully completed, requires additional action, or has encountered an error. By quickly identifying the meaning behind status codes like 404 Not Found or 500 Internal Server Error, you can diagnose problems faster and implement effective solutions to improve user experience and website functionality.",
      p3: "Our comprehensive <b>status code reference</b> tool goes beyond basic definitions by providing detailed explanations, common causes, and recommended actions for each code. Whether you're debugging a website, optimizing SEO performance, or developing APIs, this tool serves as your go-to resource for interpreting server responses and maintaining smooth web operations."
    },
    useCases: {
      title: "Practical Applications of HTTP Status Code Knowledge",
      case1: "<b>Website Troubleshooting</b>: When users report issues accessing certain pages, HTTP status codes can quickly pinpoint whether the problem is a missing resource (404), server error (5xx), or permission issue (403). Our tool helps you understand these errors and implement the appropriate fix.",
      case2: "<b>SEO Optimization</b>: Search engines use status codes to understand your website's health. Proper management of redirects (301 vs 302) and error pages significantly impacts your search rankings. Use our tool to ensure your site implements status codes correctly for optimal SEO performance.",
      case3: "<b>API Development and Testing</b>: REST APIs rely heavily on HTTP status codes to communicate response states. Developers can use our reference to implement the most appropriate status codes for their API endpoints, ensuring clear communication between services.",
      case4: "<b>Server Configuration</b>: System administrators use status codes to diagnose configuration issues with web servers, load balancers, and proxies. Our detailed explanations help identify whether errors originate from server settings, network issues, or application code.",
      case5: "<b>Web Application Security</b>: Security professionals analyze unusual status code patterns to detect potential attacks or vulnerabilities. Understanding the security implications of different status codes helps in implementing proper access controls and protection mechanisms."
    },
    tutorial: {
      title: "How to Use the HTTP Status Code Lookup Tool",
      intro: "Our HTTP status code reference tool is designed to be intuitive and efficient. Follow these simple steps to quickly find the information you need about any HTTP status code:",
      step1: {
        title: "Step 1: Enter Search Terms",
        description: "Begin by entering either a specific status code number (like 404 or 500) or descriptive keywords (such as 'not found' or 'server error') in the search box at the top of the tool. The search is designed to match both code numbers and descriptions, giving you flexibility in how you search."
      },
      step2: {
        title: "Step 2: Filter by Category (Optional)",
        description: "If you want to browse codes within a specific category, use the dropdown menu to filter results. You can choose between informational responses (1xx), successful responses (2xx), redirects (3xx), client errors (4xx), or server errors (5xx). This filtering option is particularly helpful when you want to explore related status codes."
      },
      step3: {
        title: "Step 3: Review the Status Code List",
        description: "After searching or filtering, review the list of matching status codes. Each entry shows the code number, name, and a brief description. The color-coding helps you quickly identify the category of each status code: blue for informational, green for success, yellow for redirects, red for client errors, and purple for server errors."
      },
      step4: {
        title: "Step 4: Expand for Detailed Information",
        description: "Click on any status code entry to expand it and view comprehensive details. The expanded view provides a full description of the code's purpose, example HTTP responses, and practical notes about when this code appears and how to handle it. This detailed information helps you fully understand the implications of each status code in real-world scenarios."
      }
    },
    common: {
      title: "Most Important HTTP Status Codes Explained",
      intro: "While there are dozens of HTTP status codes defined in various specifications, a handful of codes are encountered most frequently during web development and troubleshooting. Here's a deeper look at the most significant codes you should understand:",
      code1: {
        title: "200 OK - The Foundation of Successful Responses",
        description: "The <b>200 OK status code</b> indicates that a request has been successfully processed by the server. This is the standard response for successful HTTP requests, particularly GET requests that retrieve data. A properly functioning website should generate 200 responses for most user interactions. However, if a page returns 200 but still displays incorrectly, the issue likely lies in the content or client-side code rather than server communication."
      },
      code2: {
        title: "404 Not Found - Managing Missing Resources",
        description: "The <b>404 Not Found status code</b> occurs when the requested resource doesn't exist on the server. This commonly happens with broken links, mistyped URLs, or content that has been removed. From an SEO perspective, excessive 404 errors can negatively impact your site's ranking. Best practices include implementing custom 404 pages with helpful navigation options, regularly checking for broken links, and setting up proper 301 redirects for permanently moved content."
      },
      code3: {
        title: "500 Internal Server Error - Handling Server-Side Issues",
        description: "A <b>500 Internal Server Error status code</b> indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. This is a generic server-side error that can be caused by misconfiguration, script errors, or resource limitations. When troubleshooting 500 errors, check server logs for specific error messages, review recent code changes, and verify server resource availability. For developers, implementing detailed error logging and monitoring is essential for quickly resolving these server-side problems."
      },
      code4: {
        title: "301 vs 302 Redirects - Strategic SEO Considerations",
        description: "The difference between <b>301 (Permanent Redirect)</b> and <b>302 (Temporary Redirect)</b> status codes is crucial for SEO strategy. A 301 redirect signals to search engines that content has permanently moved, transferring most of the original page's ranking power to the new URL. In contrast, a 302 redirect indicates a temporary move, which doesn't pass the same SEO value. Using the wrong redirect type can significantly impact your search visibility, so it's important to choose the appropriate redirect based on whether the content relocation is permanent or temporary."
      }
    },
    faq: {
      title: "Frequently Asked Questions About HTTP Status Codes",
      q1: "What's the difference between 4xx and 5xx status codes?",
      a1: "The main difference between <b>4xx and 5xx status codes</b> relates to where the error originates. 4xx status codes indicate client-side errors, meaning the problem is with the request itself. Examples include trying to access non-existent resources (404), providing invalid authentication (401), or lacking proper permissions (403). The client needs to modify the request to resolve these issues.<br><br>In contrast, 5xx status codes indicate server-side errors, meaning the server failed to fulfill a valid request. These could be due to server misconfiguration, application errors, or resource limitations. Examples include internal server errors (500), bad gateways (502), or service unavailability (503). Server-side intervention is typically required to fix these problems, and the client generally cannot resolve them by modifying their request.",
      
      q2: "How do HTTP status codes affect SEO and search rankings?",
      a2: "<b>HTTP status codes significantly influence SEO performance</b> and how search engines index your website. Search engine crawlers use these codes to determine how to handle the pages they discover:<br><br>• 200 (OK) signals that content is available for indexing<br>• 301 (Permanent Redirect) transfers ranking signals to the new URL<br>• 302 (Temporary Redirect) maintains ranking with the original URL while following the redirect<br>• 404 (Not Found) can negatively impact rankings if too many exist<br>• 410 (Gone) tells search engines to remove the content from indexes<br>• 500-level errors may prevent indexing and harm rankings if persistent<br>• 503 (Service Unavailable) with a Retry-After header tells search engines to return later<br><br>Properly implementing status codes ensures that search engines correctly understand your site structure, which directly impacts your search visibility and ranking potential.",
      
      q3: "What HTTP status code should I use for a temporarily unavailable page?",
      a3: "For <b>temporarily unavailable pages</b>, the most appropriate status code is <b>503 Service Unavailable</b>. This code specifically indicates that the server is temporarily unable to handle the request due to maintenance, overload, or other temporary conditions. What makes 503 particularly valuable for temporary outages is the ability to include a Retry-After header, which tells clients and search engines when to attempt accessing the resource again.<br><br>Using 503 during planned maintenance periods or temporary outages has several advantages over other error codes:<br><br>• Search engines won't deindex your content, unlike with persistent 404 or 500 errors<br>• User agents are explicitly informed that the issue is temporary<br>• It helps maintain your SEO equity during maintenance windows<br>• The Retry-After header helps manage crawl traffic during the downtime<br><br>For maximum effectiveness, pair the 503 response with a user-friendly maintenance page explaining the situation and expected resolution time.",
      
      q4: "How should I handle redirects for SEO-friendly website migrations?",
      a4: "For <b>SEO-friendly website migrations</b>, proper implementation of redirects is crucial to preserve search rankings and user experience. The recommended approach involves these key steps:<br><br>1. <b>Use 301 permanent redirects</b> for all moved content, as this transfers approximately 90-99% of the ranking power to the new URLs<br>2. Implement <b>one-to-one redirects</b> from old URLs to their direct equivalent new URLs, rather than redirecting everything to your homepage<br>3. Create a <b>comprehensive redirect map</b> documenting all old URLs and their corresponding new destinations<br>4. Set up <b>server-side redirects</b> (via .htaccess, web.config, or server configurations) rather than relying on JavaScript or meta refreshes<br>5. <b>Preserve URL structures</b> where possible to minimize the need for redirects<br>6. <b>Test all redirects</b> before launching to ensure they function correctly and don't create redirect chains or loops<br><br>Additionally, keep these redirects in place for at least a year after migration to ensure search engines and bookmarked links continue to find your content correctly.",
      
      q5: "What does a 304 Not Modified status code mean?",
      a5: "A <b>304 Not Modified status code</b> indicates that the resource has not been modified since the last time it was requested, based on the conditional headers sent by the client. This is actually a positive status code that helps optimize web performance through efficient caching.<br><br>When a browser already has a cached version of a resource, it can send conditional requests with headers like If-Modified-Since or If-None-Match (with ETags). If the server determines the resource hasn't changed, it responds with a 304 status instead of sending the entire resource again. This process:<br><br>• Reduces bandwidth usage for both client and server<br>• Improves page load times by using cached resources<br>• Decreases server load by avoiding unnecessary data transfers<br>• Enhances user experience with faster subsequent page visits<br><br>You'll commonly see 304 responses for static assets like images, CSS, JavaScript files, and occasionally for HTML content that hasn't changed. This status code is a key component of an effective web caching strategy.",
      
      q6: "How can I debug unusual or custom HTTP status codes?",
      a6: "Debugging <b>unusual or custom HTTP status codes</b> requires a systematic approach and specialized tools. Start by using these methods to gather detailed information:<br><br>1. <b>Use browser developer tools</b>: Examine the Network tab to see the exact status code and response headers<br>2. <b>Deploy HTTP inspection tools</b> like Postman, cURL, or specialized HTTP debuggers that provide detailed request and response analysis<br>3. <b>Check server logs</b> for more context about why the unusual status code was generated<br>4. <b>Review application code</b> that handles responses, especially if using frameworks that might implement custom status codes<br>5. <b>Consult API documentation</b> if the status code comes from a third-party service<br><br>For non-standard status codes, remember that:<br>• Custom codes in the 9xx range are completely non-standard and specific to certain applications<br>• Codes in standard ranges (1xx-5xx) but not in the official registry may be from newer specifications or vendor extensions<br>• Some services use standard codes but in non-standard ways, requiring service-specific documentation<br><br>Our HTTP status code lookup tool can help with standard codes, but for truly custom codes, you'll need to consult the specific documentation for the application or service you're interacting with."
    },
    relatedTools: {
      title: "Explore More Web Development Tools",
      description: "Enhance your web development workflow with these complementary tools:",
      tool1: {
        name: "HTTP Header Security Checker",
        url: "https://www.ufreetools.com/tool/http-header-security-checker",
        description: "Analyze and assess the security of HTTP response headers."
      },
      tool2: {
        name: "HTTP Proxy Detector",
        url: "https://www.ufreetools.com/tool/http-proxy-detector",
        description: "Detect if your connection is using HTTP proxies and analyze proxy-related headers for security verification."
      },
      tool3: {
        name: "URL Parameter Parser",
        url: "https://www.ufreetools.com/tool/url-params-parser",
        description: "Parse, analyze, and manipulate URL parameters and query strings."
      },
      tool4: {
        name: "JSON Formatter & Validator",
        url: "https://www.ufreetools.com/tool/json-formatter",
        description: "Format, validate, and beautify JSON data for API development and debugging."
      }
    },
    resources: {
      title: 'Resources',
      resource1: {
        name: "MDN Web Docs - HTTP Status Codes",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
        description: "The most comprehensive and up-to-date reference for HTTP status codes, with detailed explanations and web standards compliance information."
      },
      resource2: {
        name: "IANA HTTP Status Code Registry",
        url: "https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml",
        description: "The official Internet Assigned Numbers Authority registry of HTTP status codes, which serves as the definitive source for standardized codes."
      },
      resource3: {
        name: "RFC 7231 - HTTP/1.1 Semantics: Status Codes",
        url: "https://tools.ietf.org/html/rfc7231#section-6",
        description: "The official HTTP/1.1 specification that defines the semantics and usage of standard HTTP status codes."
      }
    }
  }
}