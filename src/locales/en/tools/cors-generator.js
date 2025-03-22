export default {
  name: 'CORS Policy Generator',
  description: 'Generate and test Cross-Origin Resource Sharing (CORS) headers',
  options: {
    title: 'CORS Options',
    allowedOrigins: {
      title: 'Allowed Origins',
      all: 'Allow all origins (*)  - Not recommended for production',
      specific: 'Specific origins only',
      addOrigin: 'Add Origin',
      originPlaceholder: 'Enter origin (e.g., https://example.com)',
      wildcard: 'Allow subdomains (wildcards)',
      null: 'Allow null origin'
    },
    allowedMethods: {
      title: 'Allowed Methods',
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
      title: 'Allowed Headers',
      all: 'Allow all requested headers (*)',
      specific: 'Specific headers only',
      addHeader: 'Add Header',
      headerPlaceholder: 'Enter header name',
      common: 'Add common headers'
    },
    exposedHeaders: {
      title: 'Exposed Headers',
      description: 'Headers the browser is allowed to access',
      addHeader: 'Add Exposed Header',
      headerPlaceholder: 'Enter header name'
    },
    credentials: {
      title: 'Allow Credentials',
      description: 'Allow cookies and authentication to be sent cross-origin',
      allow: 'Allow credentials',
      warning: 'Warning: Only enable this if you need to send cookies or authentication'
    },
    maxAge: {
      title: 'Max Age',
      description: 'How long (in seconds) browsers should cache preflight responses',
      seconds: 'seconds',
      recommended: 'Recommended: 3600 (1 hour)'
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
    title: 'CORS Test',
    description: 'Test if your CORS configuration works correctly',
    originUrl: 'Origin URL',
    targetUrl: 'Target URL',
    method: 'Request Method',
    credentials: 'Include Credentials',
    headers: 'Custom Headers',
    addHeader: 'Add Header',
    testButton: 'Test CORS',
    results: 'Test Results',
    success: 'CORS test successful ✓',
    failure: 'CORS test failed ✗',
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
    security: 'Security Considerations',
    debugging: 'Debugging CORS Issues',
    browsers: 'Browser Compatibility',
    viewMore: 'View CORS Guide'
  },
  messages: {
    copied: 'Headers copied to clipboard',
    configDownloaded: 'Configuration downloaded',
    testStarted: 'CORS test started',
    testSucceeded: 'CORS request succeeded',
    testFailed: 'CORS request failed: {error}',
    presetSaved: 'Preset saved',
    presetLoaded: 'Preset loaded'
  }
} 