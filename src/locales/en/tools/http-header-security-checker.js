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
  },
  article: {
    title: "HTTP Header Security Checker: Enhance Your Website's Security Posture",
    features: {
      title: "Understanding HTTP Header Security",
      description: "The <strong>HTTP Header Security Checker</strong> is a specialized tool designed to analyze and evaluate the <strong>security headers</strong> of any website. <strong>Security headers</strong> are special HTTP response headers that your server can set to provide an additional layer of <strong>security</strong> by helping to protect against common web vulnerabilities like Cross-Site Scripting (XSS), clickjacking, and other code injection attacks.<br><br>Our tool scans for critical <strong>security headers</strong> including Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Content-Type-Options, X-Frame-Options, and others. It evaluates existing <strong>header configurations</strong>, identifies missing <strong>security headers</strong>, and provides a comprehensive <strong>security score</strong> with actionable recommendations to improve your website's <strong>security posture</strong>.",
      useCases: {
        title: "Common Applications of the HTTP Header Security Checker",
        items: [
          "Web developers conducting security audits of newly developed websites before deployment",
          "Security professionals performing penetration testing and vulnerability assessments",
          "System administrators verifying server security configurations across multiple domains",
          "DevOps teams implementing continuous security monitoring in CI/CD pipelines",
          "Website owners validating their security posture after implementing recommended headers",
          "Security consultants demonstrating the need for improved security measures to clients",
          "Compliance officers ensuring websites meet industry security standards and regulations"
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions about HTTP Header Security",
      items: [
        {
          question: "What are HTTP security headers and why are they important?",
          answer: "HTTP security headers are special directives sent from the server to the browser that control how the browser should behave when handling your website's content. They are crucial because they provide an additional layer of security against common web vulnerabilities like XSS, CSRF, clickjacking, and code injection attacks. Properly configured security headers can significantly enhance your website's security posture with minimal effort."
        },
        {
          question: "Which security headers should every website implement?",
          answer: "At minimum, every modern website should implement: Content-Security-Policy (CSP) to prevent XSS attacks, Strict-Transport-Security (HSTS) to enforce HTTPS, X-Content-Type-Options to prevent MIME-type sniffing, X-Frame-Options to prevent clickjacking, and Referrer-Policy to control information in referrer headers. Our security header checker automatically evaluates these essential headers and more."
        },
        {
          question: "How is the security score calculated?",
          answer: "The security score is calculated based on the presence and correct configuration of critical security headers. Major security headers like Content-Security-Policy and HSTS each contribute up to 20 points, while other headers like X-Content-Type-Options and X-Frame-Options contribute 10-15 points each. We also evaluate the quality of the implementation, not just the presence of headers, for a maximum score of 100 points."
        },
        {
          question: "Can I use this tool to check websites I don't own?",
          answer: "Yes, you can use the HTTP Header Security Checker to analyze any publicly accessible website. The tool only examines HTTP response headers, which are publicly available information sent by web servers. However, we recommend using it primarily on websites you own or have permission to test."
        },
        {
          question: "How do I implement the security headers recommended by this tool?",
          answer: "Implementation depends on your web server or platform. For Apache, you can add headers in your .htaccess file. For Nginx, you add them in your server configuration. Many content management systems have plugins for security headers. The HTTP Header Security Checker provides example configurations that you can adapt to your specific environment."
        }
      ]
    },
    guide: {
      title: "How to Use the HTTP Header Security Checker",
      steps: [
        "Enter the complete URL of the website you want to check in the URL input field (must include http:// or https://)",
        "For advanced checks, consider enabling options like 'Follow Redirects' if the site uses redirection",
        "Click the 'Check Headers' button to initiate the security analysis",
        "Review the security score and overall rating at the top of the results section",
        "Examine the detailed breakdown of detected security headers, each marked with a status indicator (good, warning, or bad)",
        "Click on any security header to expand and view detailed information, including its current value, purpose, and specific recommendations",
        "View the complete list of all HTTP response headers returned by the server in the 'All Response Headers' section",
        "Implement the recommended security headers on your web server based on the suggestions provided, then run the checker again to verify improvements"
      ]
    },
    conclusion: "Regularly checking and updating your website's security headers is a fundamental practice in web security maintenance. With the HTTP Header Security Checker, you can easily identify weaknesses in your current configuration and implement the necessary improvements to enhance your defense against common web attacks. Remember that security headers are just one aspect of a comprehensive security strategy, but they provide significant protection with relatively little implementation effort."
  }
}