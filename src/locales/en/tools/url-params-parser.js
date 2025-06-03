export default {
  name: 'URL Parameters Parser',
  description: 'Parse, analyze, and manipulate URL parameters and query strings',
  input: {
    title: 'URL Input',
    url: 'URL',
    urlPlaceholder: 'https://example.com/path?param1=value1&param2=value2 or param1=value1&param2=value2',
    parse: 'Use Current Page URL',
    clear: 'Clear',
    examples: 'Load Example',
    parseFromClipboard: 'Paste from Clipboard',
    history: 'History'
  },
  params: {
    title: 'Parameters List',
    name: 'Parameter Name',
    value: 'Parameter Value',
    decoded: 'Decoded Value',
    type: 'Type',
    actions: 'Actions',
    add: 'Add Parameter',
    remove: 'Remove',
    edit: 'Edit',
    copy: 'Copy as Text',
    sort: 'Sort Method',
    encode: 'Encode',
    decode: 'Decode',
    noParams: 'No URL parameters detected',
    noMatchingParams: 'No matching parameters found',
    modified: 'Modified',
    original: 'Original',
    search: 'Search parameters...'
  },
  results: {
    title: 'URL Parts',
    parsed: 'URL Parts',
    protocol: 'Protocol',
    domain: 'Hostname',
    port: 'Port',
    path: 'Path',
    queryString: 'Query String',
    fragment: 'Fragment (Hash)',
    constructed: 'Constructed URL',
    copyUrl: 'Copy URL',
    openUrl: 'Open URL',
    shareUrl: 'Share URL',
    shortenUrl: 'Shorten URL',
    encoded: 'Encoded URL',
    decoded: 'Decoded URL'
  },
  tools: {
    title: 'Tools',
    buildQuery: 'Build Query',
    compareUrls: 'Compare URLs',
    validateUrl: 'Validate URL',
    trackingRemoval: 'Remove Tracking Parameters',
    convertToCode: 'Convert to Code',
    diffTool: 'Parameter Diff',
    baseConversion: 'Base Conversion',
    jsonToQuery: 'JSON to Query String',
    queryToJson: 'Query String to JSON'
  },
  visualization: {
    title: 'Visualization',
    tree: 'Tree View',
    table: 'Parameters Table',
    json: 'JSON Format',
    raw: 'Raw View',
    hierarchical: 'Hierarchical View',
    nested: 'Nested Parameters',
    auto: 'Auto Detect',
    fullUrl: 'Full URL',
    queryOnly: 'Query String Only',
    hideJson: 'Hide JSON',
    viewAsJson: 'View as JSON'
  },
  types: {
    string: 'String',
    number: 'Number',
    boolean: 'Boolean',
    array: 'Array',
    object: 'Object',
    date: 'Date',
    email: 'Email',
    ip: 'IP Address',
    color: 'Color',
    unknown: 'Unknown'
  },
  settings: {
    title: 'Settings',
    detectTypes: 'Parse Mode',
    decodeAutomatically: 'URL Decoding',
    decodeAuto: 'Auto Decode',
    decodeOnce: 'Decode Once',
    decodeTwice: 'Decode Twice',
    noDecode: 'No Decoding',
    encodeAutomatically: 'Encode special characters',
    preserveCase: 'Preserve parameter case',
    sortAlphabetically: 'Sort parameters alphabetically',
    sortDefault: 'Default Order',
    sortNameAsc: 'Parameter Name Ascending',
    sortNameDesc: 'Parameter Name Descending',
    sortValueAsc: 'Parameter Value Ascending',
    sortValueDesc: 'Parameter Value Descending',
    arrayFormat: 'Array format',
    objectFormat: 'Object format',
    emptyValues: 'Empty values',
    defaultProtocol: 'Default protocol'
  },
  codes: {
    title: 'Export Options',
    javascript: 'JavaScript (URLSearchParams)',
    python: 'Python',
    php: 'PHP',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    go: 'Go',
    copyCode: 'Copy',
    copyJson: 'Copy JSON',
    jsComment1: 'Create URLSearchParams object',
    jsComment2: 'Get query string',
    jsComment3: 'Add to URL',
    phpComment1: 'Parameters array',
    phpComment2: 'Build query string',
    phpComment3: 'Complete URL',
    pythonComment1: 'Using urllib.parse',
    pythonComment2: 'Parameters dictionary',
    pythonComment3: 'Build query string',
    pythonComment4: 'Complete URL'
  },
  messages: {
    parsed: 'URL parsed successfully',
    noUrl: 'Please enter a URL',
    invalidUrl: 'Invalid URL or query string format',
    copied: 'Copied to clipboard',
    paramAdded: 'Parameter added',
    paramRemoved: 'Parameter removed',
    trackingRemoved: 'Tracking parameters removed',
    urlOpened: 'URL opened in new tab',
    urlShortened: 'URL shortened',
    error: 'Error: {message}',
    importSuccess: 'URL imported successfully',
    exportSuccess: 'Data exported successfully',
    clipboardError: 'Unable to read from clipboard. Please ensure you have granted clipboard permissions, or paste content manually.',
    copyFailed: 'Copy failed, please try manually'
  },
  article: {
    title: "URL Parameters Parser: Complete Guide to Query String Analysis",
    features: {
      title: "Understanding URL Parameters and Query Strings",
      description: "The <strong>URL Parameters Parser</strong> is a comprehensive tool designed to decode, analyze, and manipulate URL query strings and parameters. Query strings are the portions of URLs that follow the question mark (?) and contain data in name-value pairs, typically used to pass information between web pages or in API requests.<br><br>Our <strong>query string analyzer</strong> breaks down complex URLs into their component parts, automatically detecting and parsing parameters while providing multiple visualization formats. It supports both standard URL parsing and specialized query string analysis, with features for parameter extraction, value inspection, and code generation for popular programming languages.",
      useCases: {
        title: "Practical Applications for URL Parameter Analysis",
        items: [
          "<strong>Web Analytics and UTM Tracking</strong>: Digital marketers frequently work with URLs containing multiple UTM parameters (like utm_source, utm_medium, utm_campaign). Our <strong>URL query decoder</strong> makes it easy to analyze these tracking parameters, verify they're correctly configured, and troubleshoot tracking issues across marketing campaigns.",
          
          "<strong>API Debugging and Development</strong>: When working with REST APIs that use query parameters, developers can use this tool to inspect request URLs, verify parameter formatting, and ensure proper encoding of special characters. The <strong>URL parameter extractor</strong> helps isolate specific values that might be causing errors or unexpected behavior.",
          
          "<strong>SEO Analysis and URL Structure Optimization</strong>: Search engine optimization professionals can examine URL structures to ensure they follow best practices. By parsing query strings, they can identify potential issues with parameter duplication, excessive parameters, or values that might prevent proper indexing by search engines.",
          
          "<strong>E-commerce Filter and Search Analysis</strong>: Online shopping sites often use complex query strings to represent product filters, sorting options, and search criteria. The <strong>query parameter parser</strong> helps developers and analysts understand how these parameters interact and affect product listings.",
          
          "<strong>Web Application Testing</strong>: QA engineers can use this tool to extract parameters from test scenarios, modify values to create edge cases, and generate new URLs for systematic testing of web applications that rely on query string parameters.",
          
          "<strong>Educational Purposes</strong>: Students and developers learning about URL structure and HTTP communications can use the visualizations and code examples to better understand how parameters are formatted, encoded, and utilized in different programming contexts."
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions About URL Parameters",
      items: [
        {
          question: "What's the difference between URL parameters and query strings?",
          answer: "While often used interchangeably, these terms have subtle differences:<br><br><strong>Query String</strong>: The entire portion of a URL after the question mark (?) that contains all parameters. For example, in <code>https://example.com/search?q=coffee&page=2</code>, the query string is <code>q=coffee&page=2</code>.<br><br><strong>URL Parameters</strong>: The individual name-value pairs within the query string. In the example above, there are two URL parameters: <code>q=coffee</code> and <code>page=2</code>.<br><br>Our <strong>URL parameters parser</strong> analyzes both the complete query string and breaks it down into individual parameters, showing you both the big picture and the granular details."
        },
        {
          question: "Why do some URL parameters appear encoded with %20 or + symbols?",
          answer: "URL encoding (also called percent-encoding) is necessary because URLs can only contain certain ASCII characters. Special characters, spaces, and non-ASCII characters must be encoded to be safely included in URLs.<br><br>Common URL encoding examples:<br>• Spaces become <code>%20</code> or <code>+</code><br>• Question marks become <code>%3F</code><br>• Ampersands become <code>%26</code><br>• Equal signs become <code>%3D</code><br><br>Our <strong>URL decoder</strong> automatically handles this encoding, displaying both raw and decoded values so you can understand the actual content being transmitted. When parameters contain special characters like spaces, emoji, or international characters, URL encoding prevents them from breaking the URL structure."
        },
        {
          question: "Can I analyze complex nested parameters or JSON in query strings?",
          answer: "Yes, our <strong>URL query parser</strong> handles advanced parameter formats:<br><br>1. <strong>Array-style parameters</strong> like <code>colors[]=red&colors[]=blue</code> or <code>colors=red,blue</code><br><br>2. <strong>Nested object notation</strong> like <code>filter[price][min]=10&filter[price][max]=50</code><br><br>3. <strong>JSON-encoded values</strong> in parameters like <code>data=&#123;&quot;name&quot;:&quot;John&quot;,&quot;age&quot;:30&#125;</code><br><br>The tool automatically detects these complex structures and provides specialized views for them. For JSON values, it offers a formatted view option that makes nested data more readable. This is particularly useful for API endpoints that accept complex filtering, sorting, or configuration options through the URL."
        },
        {
          question: "How can I use the generated code snippets in my applications?",
          answer: "The code generation feature provides ready-to-use snippets for working with the analyzed URL parameters in different programming languages:<br><br>1. <strong>For frontend development</strong>: Use the JavaScript (URLSearchParams) code to extract or manipulate parameters in browser-based applications.<br><br>2. <strong>For backend processing</strong>: Use the Python, PHP, or other server-side language snippets to parse incoming request URLs or construct new URLs with the same parameter structure.<br><br>3. <strong>For API integration</strong>: Use the appropriate language snippet as a starting point when building requests to APIs that require the same parameter structure.<br><br>Each code snippet shows the proper way to construct, modify, and extract URL parameters using the standard libraries of each language, following best practices for URL handling and encoding."
        },
        {
          question: "Are there any limitations to what types of URLs I can analyze?",
          answer: "While our <strong>URL parameter analyzer</strong> is designed to handle most standard URLs and query strings, there are a few limitations to be aware of:<br><br>1. <strong>URL Length</strong>: Extremely long URLs (over 100,000 characters) might cause performance issues, though most practical URLs are well below this limit.<br><br>2. <strong>Non-Standard Formats</strong>: Some applications use custom parameter formats that don't follow standard conventions. The tool attempts to parse these, but might not visualize their structure optimally.<br><br>3. <strong>Hash-Based Parameters</strong>: Parameters in the URL fragment/hash portion (after #) are analyzed separately from regular query parameters.<br><br>4. <strong>Multiple Encoding Layers</strong>: Occasionally, parameters may be encoded multiple times. The tool offers a \"Decode Twice\" option for these scenarios, but extremely complex layered encoding might require specialized handling.<br><br>For most web development, digital marketing, and API testing purposes, these limitations rarely come into play, and the tool handles common URL formats used across the web."
        }
      ]
    },
    guide: {
      title: "How to Use the URL Parameters Parser: Step-by-Step Guide",
      step1: "<strong>Enter a URL or query string</strong>: In the URL input field, paste a complete URL (like https://example.com/page?param=value) or just the query string portion (param=value). You can also click \"Use Current Page URL\" to analyze the URL of the page you're currently on, or \"Paste from Clipboard\" to quickly insert copied content.",
      step2: "<strong>Select parsing options</strong>: Choose the appropriate parsing mode based on your input. \"Auto Detect\" works well for most cases, automatically determining if you've entered a full URL or just a query string. For URL decoding, you can select options like \"Decode Once\" for standard URLs or \"Decode Twice\" for doubly-encoded parameters.",
      step3: "<strong>Review the extracted parameters</strong>: After parsing, the tool displays all detected parameters in the table view. You can see each parameter's name, value, and perform actions like copying individual parameters. Use the search filter to quickly find specific parameters in complex URLs.",
      step4: "<strong>Explore different visualization options</strong>: Switch between different views using the tabs below the results section. The \"Parameters Table\" shows all parameters in a structured list, \"JSON Format\" displays parameters as a JSON object, and \"URL Parts\" breaks down the entire URL structure including protocol, domain, path, and query string.",
      step5: "<strong>Analyze complex parameter values</strong>: For parameters containing JSON or structured data, click \"View as JSON\" to see a formatted representation. This makes it easier to understand nested data structures that might be encoded within a single parameter value.",
      step6: "<strong>Sort and filter parameters</strong>: Use the sorting options to arrange parameters by name or value in ascending or descending order. This is particularly helpful when working with URLs containing many parameters, allowing you to organize them logically.",
      step7: "<strong>Export and use the results</strong>: In the \"Export Options\" tab, you can view and copy generated code snippets in JavaScript, Python, PHP, and other languages. These snippets show how to work with the same parameters programmatically, saving development time when implementing similar functionality in your applications."
    },
    conclusion: "The URL Parameters Parser simplifies the often complex task of working with query strings and URL parameters, providing developers, marketers, and analysts with a powerful tool for understanding and manipulating web addresses. By breaking down URLs into their component parts and offering multiple visualization options, it bridges the gap between raw URLs and structured data. Whether you're debugging a complex API call, analyzing marketing campaign parameters, or learning about web development, this tool provides valuable insights into how data is passed through URLs in the modern web ecosystem."
  }
} 