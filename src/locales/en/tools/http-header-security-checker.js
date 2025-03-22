export default {
  name: 'HTTP Header Security Checker',
  description: 'Analyze and evaluate the security of HTTP response headers',
  input: {
    title: 'Enter URL or Headers',
    url: 'URL',
    urlPlaceholder: 'Enter a URL to check (e.g., https://example.com)',
    headers: 'Or paste HTTP headers directly',
    headersPlaceholder: 'Paste raw HTTP headers here...',
    options: 'Scan Options',
    followRedirects: 'Follow Redirects',
    includeSubresources: 'Check Subresources (CSS, JS, etc.)',
    timeout: 'Timeout (seconds)',
    checkButton: 'Check Headers'
  },
  results: {
    title: 'Security Header Analysis',
    overview: 'Overview',
    score: 'Security Score',
    scanned: 'URL Scanned',
    date: 'Scan Date',
    headers: {
      title: 'Headers Found',
      name: 'Header',
      value: 'Value',
      status: 'Status'
    },
    missing: {
      title: 'Missing Security Headers',
      description: 'These recommended security headers were not found:'
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
      description: 'Consider adding the following headers to improve security:'
    }
  },
  headers: {
    strictTransportSecurity: {
      name: 'Strict-Transport-Security',
      description: 'Enforces HTTPS connections instead of HTTP',
      recommendation: 'Add "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"'
    },
    xContentTypeOptions: {
      name: 'X-Content-Type-Options',
      description: 'Prevents MIME type sniffing',
      recommendation: 'Add "X-Content-Type-Options: nosniff"'
    },
    xFrameOptions: {
      name: 'X-Frame-Options',
      description: 'Protects against clickjacking attacks',
      recommendation: 'Add "X-Frame-Options: DENY" or "SAMEORIGIN"'
    },
    contentSecurityPolicy: {
      name: 'Content-Security-Policy',
      description: 'Controls resources the user agent is allowed to load',
      recommendation: 'Add a Content-Security-Policy header with appropriate directives'
    },
    referrerPolicy: {
      name: 'Referrer-Policy',
      description: 'Controls information included in the Referer header',
      recommendation: 'Add "Referrer-Policy: no-referrer-when-downgrade" or stricter'
    },
    permissionsPolicy: {
      name: 'Permissions-Policy',
      description: 'Controls which browser features and APIs can be used',
      recommendation: 'Add a Permissions-Policy header with appropriate restrictions'
    }
  },
  status: {
    good: 'Good',
    warning: 'Warning',
    bad: 'Bad',
    info: 'Info',
    notApplicable: 'N/A'
  },
  actions: {
    export: 'Export Report',
    copyHeaders: 'Copy Headers',
    copyRecommendations: 'Copy Recommendations',
    scan: 'New Scan',
    share: 'Share Results'
  },
  messages: {
    scanning: 'Scanning {url}...',
    completed: 'Scan completed',
    error: 'Error: {message}',
    timeout: 'Request timed out',
    invalidUrl: 'Invalid URL',
    copied: 'Copied to clipboard',
    exportComplete: 'Report exported successfully'
  }
} 