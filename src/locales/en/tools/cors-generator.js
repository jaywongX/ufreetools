export default {
  name: 'CORS Configuration Generator',
  description: 'Quickly create Cross-Origin Resource Sharing (CORS) configurations supporting multiple server environments',
  options: {
    title: 'CORS Options',
    allowedOrigins: {
      title: 'Allowed Origins (Access-Control-Allow-Origin)',
      allowAll: 'Allow all origins (*) <span class="text-yellow-500 text-xs ml-1">(Insecure, does not support credentials)</span>',
      specific: 'Specify allowed origins (Recommended)',
      addOrigin: 'Add Origin',
      placeholder: 'Enter origin (e.g., https://example.com)',
      wildcard: 'Allow subdomains (wildcard)',
      null: 'Allow null origin',
      remove: 'Remove domain'
    },
    allowedMethods: {
      title: 'Allowed HTTP Methods (Access-Control-Allow-Methods)',
      selectMethods: 'Select HTTP methods',
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE',
      patch: 'PATCH',
      head: 'HEAD',
      options: 'OPTIONS'
    },
    allowedHeaders: {
      title: 'Allowed Request Headers (Access-Control-Allow-Headers)',
      all: 'Allow all headers (*)',
      specific: 'Only specific headers',
      addHeader: 'Add Header',
      headerPlaceholder: 'Enter header name',
      common: 'Common request headers',
      custom: 'Custom headers',
      contentType: 'Content-Type',
      accept: 'Accept',
      authorization: 'Authorization',
      origin: 'Origin',
      xRequestedWith: 'X-Requested-With',
      contentDisposition: 'Content-Disposition',
      remove: 'Remove header'
    },
    exposedHeaders: {
      title: 'Exposed Response Headers (Access-Control-Expose-Headers)',
      description: 'Allow browser to access these response headers',
      addHeader: 'Add exposed header',
      headerPlaceholder: 'Enter header name'
    },
    credentials: {
      title: 'Allow Credentials (Access-Control-Allow-Credentials)',
      description: 'Allow cookies and authentication headers',
      allow: 'Allow credentials',
      warning: 'Can only be used with specific origins, cannot be used with wildcard (*)'
    },
    maxAge: {
      title: 'Preflight Cache Duration (Access-Control-Max-Age)',
      description: 'Duration for caching preflight request results (seconds)',
      seconds: 'Seconds',
      default: 'Default:',
      recommended: 'Recommended: 3600 (1 hour)'
    },
    serverType: {
      title: 'Server Type',
      apache: 'Apache (.htaccess)',
      nginx: 'Nginx',
      express: 'Express.js',
      springBoot: 'Spring Boot',
      php: 'PHP',
      flask: 'Flask (Python)',
      django: 'Django',
      rails: 'Ruby on Rails',
      aws: 'AWS S3/CloudFront',
      azure: 'Azure',
      iis: 'IIS (web.config)',
      jetty: 'Jetty',
      headers: 'HTTP Headers'
    }
  },
  output: {
    title: 'Generated Headers',
    instructions: 'Add these headers to your server responses:',
    copy: 'Copy Headers',
    test: 'Test Headers',
    downloadConfig: 'Download Configuration'
  },
  configs: {
    title: 'Configuration Examples',
    nginx: 'Nginx',
    apache: 'Apache (.htaccess)',
    express: 'Express.js',
    springBoot: 'Spring Boot',
    php: 'PHP',
    flask: 'Flask (Python)',
    django: 'Django',
    rails: 'Ruby on Rails',
    aws: 'AWS S3/CloudFront',
    azure: 'Azure',
    iis: 'IIS Web.config'
  },
  testing: {
    title: 'CORS Testing',
    description: 'Test if your CORS configuration works properly',
    originUrl: 'Origin URL',
    targetUrl: 'Target URL',
    method: 'Request Method',
    credentials: 'Include Credentials',
    headers: 'Custom Headers',
    addHeader: 'Add Header',
    testButton: 'Test CORS',
    results: 'Test Results',
    success: 'CORS Test Successful ✓',
    failure: 'CORS Test Failed ✗',
    details: 'Response Details',
    response: 'Response',
    logs: 'CORS Logs',
    errorDetails: 'Error Details'
  },
  presets: {
    title: 'Presets',
    api: 'API Server',
    assets: 'Static Assets (CDN)',
    auth: 'Authentication Service',
    publicAccess: 'Public Access',
    restrictive: 'Restrictive',
    load: 'Load Preset',
    save: 'Save Current as Preset'
  },
  tips: {
    title: 'CORS Tips',
    tip1: 'Cross-Origin Resource Sharing (CORS) is an HTTP-header-based mechanism that allows a server to indicate any other origins (domain, protocol, or port) from which a browser should permit loading of resources.',
    tip2: 'CORS protection is a security feature in modern browsers that blocks web pages from making requests to different domains than the one serving the web page, protecting users from cross-site request forgery attacks.',
    usage: {
      title: 'CORS Usage Scenarios:',
      tip1: 'Allow front-end JavaScript to access APIs from different domains',
      tip2: 'Support cross-origin Ajax or Fetch requests',
      tip3: 'Allow cross-origin access to fonts, CSS, or other resources',
      tip4: 'Set up inter-service communication in a microservices architecture'
    },
    safe: 'Security Tip: It is generally advisable to avoid using the "*" wildcard as the allowed origin and instead explicitly specify the domains you trust to reduce potential security risks.'
  },
  messages: {
    copied: 'Headers copied to clipboard',
    configDownloaded: 'Configuration downloaded',
    testStarted: 'CORS test started',
    testSucceeded: 'CORS request succeeded',
    testFailed: 'CORS request failed: {error}',
    presetSaved: 'Preset saved',
    presetLoaded: 'Preset loaded'
  },
  config: {
    title: 'Configuration',
    empty: 'Configure options to generate CORS settings',
    copied: 'Configuration copied to clipboard!',
    copy: 'Copy'
  },
  comments: {
    expressMiddleware: "// Use Express application middleware",
    applyGlobalCors: "// Apply CORS middleware globally",
    applySpecificRoute: "// Or apply to specific routes",
    applyRequest: "// Apply request",
    apacheAllowedOrigins: "# Allowed Origins",
    apacheAllowedMethods: "# Allowed HTTP Methods",
    apacheAllowedHeaders: "# Allowed HTTP Headers",
    apacheAllowedCredentials: "# Allowed Credentials",
    preflightCacheDuration: "# Preflight Cache Duration",
    handlePreflightRequest: "# Handling Preflight Requests",
    apacheExposeHeaders: "# Expose headers",
    nginxConfiguration: "# CORS Configuration\n# Add this configuration to your server or location block",
    nginxAllowedOrigins: "# Allowed Origins",
    nginxAllowedMethods: "# Allowed HTTP Methods",
    nginxAllowedHeaders: "# Allowed HTTP Headers",
    nginxAllowedCredentials: "# Allowed Credentials",
    nginxPreflightCacheDuration: "# Preflight Cache Duration",
    nginxExposeHeaders: '# Expose headers',
    nginxHandlePreflight: "# Handling Preflight Requests",
    httpHeadersConfiguration: "# CORS HTTP Headers Configuration",
    httpAllowedOrigins: "# Allowed Origins",
    httpAllowedMethods: "# Allowed HTTP Methods",
    httpAllowedHeaders: "# Allowed HTTP Headers",
    httpAllowedCredentials: "# Allowed Credentials",
    httpPreflightCacheDuration: "# Preflight Cache Duration",
    httpExposeHeaders: '# Expose headers',
  }
}