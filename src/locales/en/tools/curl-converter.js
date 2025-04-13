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
  },
  article: {
    title: "cURL Converter: Transform Command Line Requests into Code",
    features: {
      title: "Understanding cURL Conversion and Its Applications",
      description: "The <strong>cURL Converter</strong> is a powerful utility that transforms cURL commands into executable code snippets for multiple programming languages. This tool bridges the gap between API documentation, terminal-based testing, and actual implementation, enabling developers to quickly integrate HTTP requests into their projects without manually translating syntax.<br><br>At its core, the <strong>cURL to code converter</strong> parses the command-line syntax of cURL (including headers, request methods, authentication, data payloads, and other options) and generates equivalent code that performs the same HTTP request in your preferred programming language. The tool supports popular languages including Python, JavaScript, PHP, Java, Ruby, Go, and C#, allowing developers to seamlessly move from testing APIs in the terminal to implementing them in production code. Whether you're working with RESTful services, GraphQL endpoints, or legacy SOAP APIs, this <strong>HTTP request generator</strong> handles the syntactical translation work, significantly reducing development time and eliminating syntax errors.",
      useCases: {
        title: "Practical Applications for cURL Conversion",
        items: [
          "<strong>API Integration Acceleration</strong>: When integrating third-party APIs, developers often begin by testing endpoints with cURL commands provided in documentation. The <strong>cURL command parser</strong> allows you to convert these example requests directly into your project's programming language, accelerating integration and ensuring exact replication of the documented request format. This eliminates potential errors in manually translating API call specifications and reduces integration time from hours to minutes for complex APIs.",
          "<strong>Cross-Language Development</strong>: Development teams working across multiple technology stacks can use the <strong>HTTP request code generator</strong> to share API interaction patterns. A backend developer can verify an API endpoint with cURL, then use the converter to provide frontend developers with ready-to-use JavaScript code that performs the identical request, ensuring consistency across system components while respecting language-specific best practices.",
          "<strong>API Documentation Creation</strong>: Technical writers and API developers can generate consistent code examples across multiple languages from a single validated cURL command. This ensures all code samples in documentation perform identical requests, maintaining consistency while providing language-specific implementations that follow idiomatic patterns and best practices for each supported language.",
          "<strong>Legacy System Modernization</strong>: When upgrading legacy applications, developers frequently need to replicate existing HTTP interactions in modern codebases. By capturing current API requests using browser developer tools (which can export as cURL), then converting to modern programming languages, the <strong>cURL translator</strong> facilitates migrating functionality while maintaining exact API communication patterns.",
          "<strong>Debugging and Troubleshooting</strong>: When API requests fail within applications, developers can extract the problematic request as a cURL command (often available in server logs or through monitoring tools), test and modify it directly in the terminal until it works correctly, then use the converter to generate fixed code that resolves the issue in the application codebase.",
          "<strong>Educational and Learning Tool</strong>: Programming instructors and students can use the <strong>request code generator</strong> to understand how HTTP requests are structured across different programming languages. By comparing generated code for the same request across multiple languages, developers can better understand language-specific HTTP client implementations, helping them learn new programming languages through practical examples."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about cURL Conversion",
      items: [
        {
          question: "What exactly is cURL and why would I need to convert it to code?",
          answer: "cURL (Client URL) is a command-line tool and library for transferring data with URLs using various protocols. Developers frequently use cURL commands to test API endpoints, debug HTTP requests, and document API interactions because of its ubiquity and simplicity. However, when implementing these tested requests in actual applications, the cURL syntax must be translated into the programming language being used. The <strong>cURL converter tool</strong> automates this translation process, eliminating manual syntax errors and saving significant development time. Rather than deciphering how to transform cURL's specific options (like -H for headers or -d for data) into language-specific constructs, the converter handles these translations automatically, ensuring the generated code performs an identical HTTP request while following language-specific conventions and best practices."
        },
        {
          question: "How accurate is the converted code compared to the original cURL command?",
          answer: "The <strong>cURL to code translator</strong> produces highly accurate conversion results that functionally replicate the original cURL command while respecting language-specific idioms. The converter preserves all essential request components including URL, HTTP method, headers, query parameters, request body (in various formats), authentication credentials, and common options like redirect following and SSL verification. For supported languages, the conversion maintains semantic equivalence, meaning the generated code will make an HTTP request identical to what the original cURL command would perform.<br><br>That said, certain advanced or obscure cURL features might not have direct equivalents in all programming languages. In these edge cases, the converter implements the closest possible functionality or provides comments in the generated code noting any differences. For critical production implementations, it's always recommended to validate the generated code with actual testing, especially when using specialized cURL options like custom SSL certificates, specific networking configurations, or unusual authentication mechanisms."
        },
        {
          question: "Which programming languages are supported by the converter?",
          answer: "The <strong>HTTP request code generator</strong> supports conversion to multiple mainstream programming languages and libraries commonly used for API interactions. Currently supported targets include:<br><br>• <strong>Python</strong>: Both the popular requests library and the standard http.client<br>• <strong>JavaScript/Node.js</strong>: Multiple variants including Fetch API (browser and Node.js), Axios, and the Request library<br>• <strong>PHP</strong>: Native cURL functions and the Guzzle HTTP client<br>• <strong>Java</strong>: Java 11+ HttpClient and OkHttp library<br>• <strong>Go</strong>: Standard library HTTP client<br>• <strong>Ruby</strong>: Native Net::HTTP<br>• <strong>C#</strong>: HttpClient implementations<br>• <strong>PowerShell</strong>: Invoke-WebRequest<br>• <strong>Rust</strong>: reqwest client<br><br>Each language conversion is optimized to produce idiomatic code following the best practices and conventions of the target language and library, rather than merely translating syntax literally. This approach ensures the generated code is not just functional but also maintainable and aligned with how experienced developers in each language ecosystem would naturally write HTTP client code."
        },
        {
          question: "Can the converter handle complex cURL commands with multiple options?",
          answer: "Yes, the <strong>cURL command parser</strong> handles complex commands with multiple options and sophisticated request structures. The converter supports:<br><br>• <strong>Authentication methods</strong>: Including Basic Auth, Bearer tokens, API keys, and OAuth implementations<br>• <strong>Custom headers</strong>: Multiple headers with any values, including content-type specifications<br>• <strong>Request bodies</strong>: JSON, form data, multipart forms, binary data, and text payloads<br>• <strong>HTTP methods</strong>: All standard methods (GET, POST, PUT, DELETE, PATCH, etc.)<br>• <strong>URL parameters</strong>: Both in-URL and as separate arguments<br>• <strong>File uploads</strong>: Converting file upload syntax for supported languages<br>• <strong>SSL/TLS options</strong>: Certificate verification settings<br>• <strong>Proxy configurations</strong>: When supported by target languages<br>• <strong>Cookies</strong>: Both sending and storing cookies<br><br>The tool can process commands with line continuations (backslashes), quotation variations, and complex nested structures like JSON payloads or nested form fields. Even commands extracted directly from browser developer tools or tools like Postman, which often generate very verbose cURL commands with numerous options, can be successfully converted to clean, efficient code in your target language."
        },
        {
          question: "How can I ensure the generated code follows best practices for my language?",
          answer: "The <strong>request code generator</strong> is designed to produce not just functional code, but code that follows language-specific idioms and best practices. For each supported language, the converter implements several optimizations:<br><br>• <strong>Library selection</strong>: Uses the most appropriate and widely-adopted HTTP client libraries for each language (e.g., requests for Python, Axios for Node.js)<br>• <strong>Error handling</strong>: Includes language-appropriate error checking and exception handling patterns<br>• <strong>Resource management</strong>: Properly handles connection closures and resource cleanup when applicable<br>• <strong>Modern syntax</strong>: Utilizes modern language features where appropriate (async/await in JavaScript, try-with-resources in Java)<br>• <strong>Readability</strong>: Formats code with proper indentation and meaningful variable names<br>• <strong>Maintainability</strong>: Structures the generated code to be easily understandable and modifiable<br><br>While the generated code follows general best practices, you may need to make minor adjustments to align with your specific project's coding standards or to integrate with existing code structures. The converter provides a solid foundation that implements the HTTP request correctly while following language conventions, allowing you to focus on integrating the functionality into your application rather than wrestling with HTTP client syntax."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Using the cURL Converter",
      steps: [
        "<strong>Enter your cURL command</strong>: Start by pasting or typing your cURL command into the input field. You can use commands from API documentation, browser developer tools, Postman exports, or any valid cURL command you've created. If you're new to cURL, you can click one of the example commands below the input area to see how different types of requests are formatted.",
        "<strong>Select your target language</strong>: Choose the programming language you want to convert the cURL command to from the language selection panel. The tool supports multiple languages and libraries commonly used for API interactions, such as Python, JavaScript, PHP, Java, and more. Select the one that matches your project's technology stack.",
        "<strong>Click the Convert button</strong>: After entering your command and selecting your target language, click the 'Convert' button to process the cURL command. The tool will parse the command, identify all its components (method, URL, headers, data, options), and generate equivalent code in your chosen language.",
        "<strong>Review the generated code</strong>: Examine the output in the code display area. The converted code will include all necessary imports/requires, proper HTTP client initialization, request configuration with appropriate headers and body formatting, and basic response handling. The code is formatted for readability with proper indentation and meaningful variable names.",
        "<strong>Copy the code to your project</strong>: Once you're satisfied with the generated code, click the 'Copy' button to copy it to your clipboard. You can then paste it directly into your development environment or code editor. The code is ready to use with minimal or no modifications, depending on your specific project requirements.",
        "<strong>Modify as needed for your application</strong>: While the generated code is functionally complete, you may want to integrate it with your application's error handling, logging, or data processing systems. Feel free to modify variable names, add comments, or wrap the code in functions/methods that fit your application's architecture.",
        "<strong>Test the implemented request</strong>: After integrating the code into your project, test the HTTP request to ensure it functions as expected. The converted code should produce the same request and receive the same response as the original cURL command, but it's always good practice to verify, especially for business-critical API interactions."
      ]
    },
    conclusion: "The cURL Converter stands as an indispensable bridge between API exploration and implementation, dramatically streamlining the development process for applications that interact with web services. By automating the translation of command-line HTTP requests into clean, idiomatic code across multiple programming languages, it eliminates a significant source of errors and frustration in API integration work. This tool not only saves valuable development time but also ensures consistency between tested API calls and their implementation in production code. Whether you're a seasoned developer working with complex microservices architectures or a beginner learning to interact with your first REST API, the cURL Converter provides a reliable shortcut that transforms manual syntax translation into a single-click operation, allowing you to focus on building application logic rather than wrestling with HTTP client syntax."
  }
}