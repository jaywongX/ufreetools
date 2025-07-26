export default {
  name: 'HTTP Header Security Checker',
  description: 'Analyze and evaluate the security of HTTP response headers',
  title: 'HTTP Header Security Checker',
  intro: 'Analyze the HTTP response headers of a website, detect security configurations such as CSP, HSTS, and provide improvement suggestions',

  input: {
    title: 'Enter URL or Headers',
    url: 'URL',
    urlPlaceholder: 'Enter the URL to check (e.g., https://example.com)',
    headers: 'Or paste HTTP headers directly',
    headersPlaceholder: 'Paste raw HTTP headers here...',
    options: 'Scan Options',
    followRedirects: 'Follow Redirects',
    includeSubresources: 'Check Subresources (CSS, JS, etc.)',
    timeout: 'Timeout (seconds)',
    checkButton: 'Check Headers',
    analyzing: 'Analyzing...'
  },

  results: {
    title: 'Security Header Analysis',
    overview: 'Overview',
    score: 'Security Score',
    totalScore: 'Total Score out of 100',
    scanned: 'Scanned URLs',
    date: 'Scan Date',
    headers: {
      title: 'Detected Headers',
      name: 'Header',
      value: 'Value',
      status: 'Status'
    },
    allHeaders: {
      title: 'All Response Headers',
      name: 'Name',
      value: 'Value',
      noData: 'No response header data available'
    },
    missing: {
      title: 'Missing Security Headers',
      description: 'The following recommended security headers were not found:'
    },
    issues: {
      title: 'Security Issues',
      critical: 'Critical',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      info: 'Info'
    },
    recommendations: {
      title: 'Recommendations',
      description: 'Consider adding the following headers to improve security:',
      example: 'Example Configuration'
    },
    rating: {
      unknown: 'Unknown',
      excellent: 'Excellent',
      good: 'Good',
      fair: 'Fair',
      poor: 'Poor',
      high_risk: 'High Risk',
      descriptions: {
        unknown: 'Unable to retrieve the site\'s security header information',
        excellent: 'The site has implemented all major security headers',
        good: 'The site has implemented most important security headers',
        fair: 'The site is missing some important security headers',
        poor: 'The site is missing multiple key security headers',
        high_risk: 'The site has almost no security header protections in place'
      }
    }
  },

  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: 'Enforces HTTPS connections instead of HTTP',
      recommendation: 'Add "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"',
      status: {
        good: 'Configured correctly',
        bad: 'Not configured',
        warning: 'Configuration can be improved'
      },
      recommendationConfigured: 'Existing configuration is implemented; ensure it includes a sufficiently long max-age and includeSubDomains',
      recommendationMissing: 'It is recommended to enable HSTS to ensure all communications are over HTTPS'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: 'Prevents MIME type sniffing',
      recommendation: 'Add "X-Content-Type-Options: nosniff"',
      status: {
        good: 'Configured correctly',
        bad: 'Not configured or misconfigured'
      },
      recommendationConfigured: 'Configuration is correct; keep current settings',
      recommendationMissing: 'It is recommended to set this header to "nosniff" value'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: 'Prevents the site from being embedded in an iframe, thus preventing clickjacking attacks',
      recommendation: 'Add "X-Frame-Options: DENY" or "SAMEORIGIN"',
      status: {
        good: 'Configured',
        bad: 'Not configured'
      },
      recommendationConfigured: 'Existing configuration is implemented; recommend using DENY or SAMEORIGIN',
      recommendationMissing: 'It is recommended to configure this header to DENY or SAMEORIGIN to prevent clickjacking'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: 'Controls which resources the user agent is allowed to load',
      recommendation: 'Add Content-Security-Policy header with appropriate directives',
      status: {
        good: 'Configured correctly',
        bad: 'Not configured',
        warning: 'Configuration can be improved'
      },
      recommendationConfigured: 'Existing configuration is implemented; ensure regular audits and updates of the policy',
      recommendationMissing: 'It is recommended to configure CSP to restrict resource origins, enhancing defense against XSS attacks'
    },
    xXssProtection: {
      name: 'X-XSS-Protection',
      description: 'This header enables XSS filtering in older browsers. In modern browsers, CSP is recommended instead.',
      recommendation: 'Although this header is replaced by CSP in modern browsers, it is still recommended to set it to "1; mode=block" for compatibility with older browsers',
      status: {
        enabled: 'Enabled',
        disabled: 'Disabled',
        notConfigured: 'Not configured (CSP is recommended for modern browsers)'
      }
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: 'Controls the information included in the Referer header',
      recommendation: 'Add "Referrer-Policy: no-referrer-when-downgrade" or a stricter policy',
      status: {
        good: 'Configured',
        bad: 'Not configured'
      },
      recommendationConfigured: 'Existing configuration is implemented; recommend using strict-origin or strict-origin-when-cross-origin',
      recommendationMissing: 'It is recommended to configure this header to control the transmission of referrer information'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: 'Controls which browser features and APIs can be used',
      recommendation: 'Add Permissions-Policy header with appropriate restrictions',
      status: {
        good: 'Configured',
        bad: 'Not configured'
      },
      recommendationConfigured: 'Existing configuration is implemented; ensure unnecessary features are restricted',
      recommendationMissing: 'It is recommended to configure this header to limit the browser features the site can use'
    }
  },

  status: {
    good: 'Good',
    warning: 'Warning',
    bad: 'Bad',
    info: 'Info',
    notApplicable: 'Not Applicable'
  },

  actions: {
    export: 'Export Report',
    copyHeaders: 'Copy Headers',
    copyRecommendations: 'Copy Recommendations',
    scan: 'New Scan',
    share: 'Share Results',
    analyze: 'Analyze Header Information'
  },

  emptyState: {
    line1: 'Enter a website URL to analyze the security configuration of HTTP response headers',
    line2: 'Get detailed evaluations and recommendations about CSP, HSTS, and other security headers'
  },

  messages: {
    scanning: 'Scanning {url}...',
    completed: 'Scan Completed',
    error: 'Error: {message}',
    timeout: 'Request Timed Out',
    invalidUrl: 'Invalid URL',
    invalidUrlFormat: 'Please enter a valid URL starting with http:// or https://',
    copied: 'Copied to Clipboard',
    exportComplete: 'Report Exported Successfully',
    httpWarning: 'Warning: Using HTTP may be insecure',
    noHeaders: 'No header information found',
    fetchError: 'Unable to fetch header information: {error}'
  }
};