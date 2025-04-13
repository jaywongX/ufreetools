export default {
  name: 'Request Header Editor',
  description: 'Create, edit, and test HTTP request headers',
  editor: {
    title: 'Header Editor',
    headers: 'Request Headers',
    add: 'Add Header',
    bulk: 'Bulk Edit',
    import: 'Import Headers',
    export: 'Export Headers',
    clear: 'Clear All',
    importError: 'Import Error'
  },
  header: {
    name: 'Header Name',
    value: 'Value',
    description: 'Description',
    namePlaceholder: 'Enter header name',
    valuePlaceholder: 'Enter header value',
    actions: 'Actions',
    enabled: 'Enabled',
    duplicate: 'Duplicate',
    delete: 'Delete',
    noHeaders: 'No headers, click "Add" button or load a template to start',
    bulkPlaceholder: 'Paste headers, format: \'name: value\', one per line, or paste raw header text'
  },
  presets: {
    title: 'Presets',
    save: 'Save Current',
    load: 'Load Preset',
    delete: 'Delete Preset',
    presetName: 'Preset Name',
    namePlaceholder: 'Enter preset name',
    confirmDelete: 'Are you sure you want to delete this preset?',
    common: 'Common Headers',
    custom: 'Custom Presets'
  },
  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },
  test: {
    title: 'Test Headers',
    url: 'URL',
    urlPlaceholder: 'Enter URL to test headers',
    method: 'Method',
    send: 'Send Request',
    response: 'Response'
  },
  response: {
    title: 'Response',
    status: 'Status',
    headers: 'Response Headers',
    body: 'Body',
    time: 'Time',
    size: 'Size',
    loading: 'Loading...',
    noResponse: 'Add headers to see preview',
    headerCount: 'headers'
  },
  options: {
    title: 'Options',
    followRedirects: 'Follow Redirects',
    timeout: 'Timeout (seconds)',
    validateSSL: 'Validate SSL Certificate',
    sendCredentials: 'Send Credentials'
  },
  formats: {
    title: 'Export Format',
    raw: 'Raw Text',
    json: 'JSON',
    curl: 'cURL Command',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },
  guides: {
    title: 'Header Guides',
    description: 'Learn about common HTTP headers and their usage',
    securityHeaders: 'Security Headers',
    cachingHeaders: 'Caching Headers',
    corsHeaders: 'CORS Headers',
    authenticationHeaders: 'Authentication Headers',
    commonValues: 'Common Values'
  },
  actions: {
    copy: 'Copy',
    format: 'Format',
    validate: 'Validate',
    clear: 'Clear'
  },
  messages: {
    headerAdded: 'Header added',
    headerDeleted: 'Header deleted',
    headersCleared: 'All headers cleared',
    presetSaved: 'Preset saved',
    presetLoaded: 'Preset loaded',
    presetDeleted: 'Preset deleted',
    requestSent: 'Request sent',
    requestFailed: 'Request failed: {error}',
    copied: 'Copied to clipboard',
    importSuccess: 'Headers imported successfully',
    exportSuccess: 'Headers exported successfully',
    invalidUrl: 'Invalid URL',
    pleaseEnterHeader: 'Please enter header text',
    invalidHeader: 'Could not parse any valid headers, please use "name: value" format',
    invalidHeaderName: 'Invalid header name: {error}',
    copyFailed: 'Copy failed, please copy manually'
  },
  article: {
    title: "HTTP Request Header Editor: Complete Guide",
    features: {
      title: "Understanding HTTP Request Headers and Their Importance",
      description: "The <strong>HTTP Request Header Editor</strong> is a powerful tool designed to help developers, testers, and API enthusiasts create, modify, and validate HTTP headers for web requests. These headers are critical components of HTTP communication that carry important metadata between clients and servers, controlling aspects like authentication, content negotiation, caching behavior, and more.<br><br>Our <strong>header editor tool</strong> provides an intuitive interface that makes it easy to build complex header sets, test different configurations, and export the results in various formats for implementation in your applications. Whether you're debugging API issues, developing new integrations, or learning about web protocols, this tool streamlines the process of working with HTTP headers.",
      useCases: {
        title: "Practical Applications for HTTP Header Editing",
        items: [
          "<strong>API Authentication Testing</strong>: When working with APIs that require authentication tokens or keys in headers (like OAuth, JWT, or API keys), our <strong>request header builder</strong> allows you to quickly construct and test different authentication scenarios without modifying your application code.",
          
          "<strong>Cross-Origin Resource Sharing (CORS) Debugging</strong>: For web applications that need to make cross-origin requests, configuring and testing the right combination of Origin, Access-Control, and preflight headers is crucial. This <strong>HTTP header tool</strong> helps identify and resolve CORS issues by allowing you to experiment with different header configurations.",
          
          "<strong>Content Negotiation</strong>: Modern web services support multiple content types, languages, and encodings. Using headers like Accept, Accept-Language, and Accept-Encoding, you can test how a server responds to different client preferences and ensure your application correctly implements content negotiation.",
          
          "<strong>Cache Control Optimization</strong>: Properly configured caching headers can dramatically improve application performance. With our <strong>header management tool</strong>, you can experiment with various Cache-Control directives, ETag configurations, and conditional request headers to find the optimal caching strategy for your resources.",
          
          "<strong>Security Header Configuration</strong>: Implementing security headers like Content-Security-Policy, Strict-Transport-Security, and X-Content-Type-Options is essential for modern web applications. This tool allows you to build and validate these complex security headers before implementing them in production.",
          
          "<strong>API Client Generation</strong>: After finalizing your header set, you can export ready-to-use code snippets in multiple programming languages, making it easy to implement the exact same headers in your application code, curl commands, or API testing tools."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions About HTTP Headers",
      items: [
        {
          question: "What are HTTP request headers and why are they important?",
          answer: "HTTP request headers are key-value pairs sent from a client (like a browser or API client) to a server as part of an HTTP request. They provide essential metadata about the request, the client's capabilities, and preferences.<br><br>These headers are important because they:<br><br>• Control <strong>authentication and authorization</strong> mechanisms<br>• Manage <strong>caching behavior</strong> for improved performance<br>• Enable <strong>content negotiation</strong> (format, language, encoding)<br>• Configure <strong>cross-origin requests</strong> and security policies<br>• Provide <strong>client context</strong> like user agent and referrer information<br><br>Without proper headers, many modern web features would not function correctly, APIs would lack security controls, and web performance would suffer significantly."
        },
        {
          question: "What is the difference between common headers like Content-Type, Authorization, and Accept?",
          answer: "These three headers serve distinct purposes in HTTP communication:<br><br><strong>Content-Type</strong>: Specifies the media type of the resource in the request body (when sending data) or what type of content the client can understand (when requesting data). Common values include:<br>• <code>application/json</code> for JSON data<br>• <code>application/x-www-form-urlencoded</code> for form data<br>• <code>multipart/form-data</code> for file uploads<br><br><strong>Authorization</strong>: Contains credentials for authenticating the client with the server. Common formats include:<br>• <code>Bearer eyJhbGc...</code> for JWT/OAuth tokens<br>• <code>Basic dXNlcm5hbWU6cGFzc3dvcmQ=</code> for basic authentication<br>• <code>ApiKey 12345abcde...</code> for API key authentication<br><br><strong>Accept</strong>: Indicates what content types the client can process in the response. This enables servers to deliver the most appropriate format when multiple options are available. Examples:<br>• <code>application/json</code> to receive JSON data<br>• <code>text/html</code> to receive HTML content<br>• <code>*/*</code> to accept any content type<br><br>Using these headers correctly ensures proper data exchange, secure authentication, and optimal content delivery between clients and servers."
        },
        {
          question: "How can I test if my headers are working correctly?",
          answer: "Testing HTTP headers effectively involves several approaches:<br><br>1. <strong>Use our Header Editor Tool</strong> to construct your header set and export it as a cURL command or code snippet, which you can run directly.<br><br>2. <strong>Browser Developer Tools</strong>: Most browsers include network inspection tools that show all request headers and server responses. Check that your headers are being sent as expected and examine how the server responds.<br><br>3. <strong>Online API Testing Services</strong>: Tools like Postman or Insomnia allow you to set custom headers and examine the complete request/response cycle.<br><br>4. <strong>Echo Services</strong>: Use endpoints like httpbin.org that reflect your request details back to you, making it easy to verify header transmission.<br><br>5. <strong>Server Logs</strong>: If you have access to your server logs, they typically record incoming request headers, allowing you to verify receipt.<br><br>When testing, watch for these common issues:<br>• Incorrect header case (though HTTP headers are case-insensitive, some implementations may be strict)<br>• Missing or malformed authorization tokens<br>• Content-Type mismatches between what you declare and what you send<br>• CORS headers not properly configured for cross-origin requests"
        },
        {
          question: "Can I save and reuse header configurations for different projects?",
          answer: "While our current online tool doesn't implement persistent storage for privacy reasons, there are several ways to save and reuse your header configurations:<br><br>1. <strong>Export as Code</strong>: Use the export feature to generate code snippets in your preferred language (JavaScript, Python, cURL, etc.). These snippets can be saved in your project repositories or documentation.<br><br>2. <strong>Copy as Raw Text</strong>: The raw header format can be copied and saved in text files, documentation systems, or team wikis for future reference.<br><br>3. <strong>Browser Extensions</strong>: Several browser extensions for Chrome, Firefox, and other browsers allow saving and managing sets of headers for different domains and projects.<br><br>4. <strong>API Management Platforms</strong>: Tools like Postman or Insomnia provide workspace features to organize and save different request configurations, including headers.<br><br>5. <strong>Environment Variables</strong>: For development workflows, consider defining headers as environment variables in your .env files or CI/CD pipelines.<br><br>For teams working on APIs or complex web applications, we recommend maintaining a central repository of standard header configurations for different environments (development, testing, production) to ensure consistency across your development workflow."
        },
        {
          question: "What are the most common HTTP header mistakes to avoid?",
          answer: "When working with HTTP headers, watch out for these common pitfalls:<br><br>1. <strong>Security header omissions</strong>: Failing to include critical security headers like Content-Security-Policy, X-Content-Type-Options, and Strict-Transport-Security can leave applications vulnerable to attacks.<br><br>2. <strong>Incorrect Content-Type</strong>: Mismatching the Content-Type header with the actual content format leads to parsing errors. Always ensure your header accurately reflects the data format you're sending.<br><br>3. <strong>Authorization header leakage</strong>: Sending authentication tokens to third-party services or logging them can create security risks. Be careful about where your headers are being sent.<br><br>4. <strong>Missing CORS headers</strong>: For applications serving resources to different origins, failing to properly configure Access-Control-Allow-* headers will cause cross-origin requests to fail.<br><br>5. <strong>Redundant or contradictory headers</strong>: Setting multiple headers that control the same behavior with different values creates unpredictable results, as server behavior varies.<br><br>6. <strong>Case sensitivity issues</strong>: While HTTP header names are technically case-insensitive, some implementations might handle them strictly. Maintain consistent casing in your applications.<br><br>7. <strong>Overly permissive headers</strong>: Headers like Access-Control-Allow-Origin: * or broad Content-Security-Policy directives can create security vulnerabilities if used inappropriately.<br><br>8. <strong>Ignoring header size limits</strong>: Some servers restrict the total size of HTTP headers (often 8KB). Very large cookies or authorization tokens can exceed these limits."
        }
      ]
    },
    guide: {
      title: "How to Use the HTTP Request Header Editor: A Step-by-Step Guide",
      step1: "<strong>Add headers to your collection</strong>: Click the \"Add Header\" button to create a new header entry. Each header consists of a name (like \"Content-Type\" or \"Authorization\") and a value. You can add as many headers as needed for your request. For common headers, you can also use the \"Common Headers\" preset button to quickly add frequently used headers.",
      step2: "<strong>Enter header names and values</strong>: For each header, enter the appropriate name and value. Header names should follow HTTP conventions (like \"Content-Type\" or \"Authorization\") while values will vary based on the header's purpose. The tool will automatically validate your entries to ensure they're formatted correctly.",
      step3: "<strong>Use bulk edit for multiple headers</strong>: If you need to add several headers at once, use the bulk edit textarea at the bottom of the editor panel. Paste headers in the \"name: value\" format, with one header per line. This is especially useful when copying headers from other tools or documentation.",
      step4: "<strong>Leverage header guides for reference</strong>: If you're unsure about which values to use for common headers, refer to the Header Guides section on the right side of the tool. Click on headers like Content-Type or Authorization to see common values and click on them to add them to your collection.",
      step5: "<strong>Choose your preferred export format</strong>: Once you've configured your headers, select the desired export format from the dropdown menu. Options include Raw Text for simple copying, cURL for command-line requests, and various programming languages like JavaScript, Python, and more.",
      step6: "<strong>Review the formatted output</strong>: The tool will generate formatted code or text based on your headers and selected export format. This output is ready to use in your application code, API testing tools, or documentation.",
      step7: "<strong>Copy the result to your clipboard</strong>: Click the \"Copy\" button to copy the formatted output to your clipboard. You can then paste it directly into your code editor, terminal, or any other tool where you need to implement these headers."
    },
    conclusion: "The HTTP Request Header Editor simplifies the complex process of creating, testing, and implementing HTTP headers for web developers and API integrators. By providing an intuitive interface and supporting multiple export formats, it bridges the gap between understanding HTTP header concepts and implementing them correctly in applications. As web security and performance requirements continue to evolve, properly configured headers become increasingly important. This tool helps ensure your applications follow best practices for HTTP communication, security, and performance optimization."
  }
} 