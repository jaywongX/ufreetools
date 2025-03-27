export default {
  name: 'HTTP Proxy Detector',
  description: 'Detect and analyze HTTP proxies and intermediary devices in your connection',
  title: 'Frontend Proxy Detector',
  intro: 'Detect if your network connection is using a proxy, analyzing X-Forwarded-For and other proxy-related HTTP headers',
  detection: {
    title: 'Proxy Detection',
    start: 'Start Detection',
    detecting: 'Detecting...',
    stop: 'Stop Detection',
    completed: 'Detection Completed',
    noProxies: 'No proxies detected',
    proxiesFound: 'Detected proxies: {count}'
  },
  options: {
    title: 'Detection Options',
    testUrl: 'Test URL',
    urlPlaceholder: 'Enter the URL to test (default: automatic)',
    testMethod: 'HTTP Method',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: 'Timeout (seconds)',
    parallel: 'Parallel Testing',
    techniques: 'Detection Techniques',
    headerAnalysis: 'Header Analysis',
    traceMethod: 'TRACE Method',
    viaHeader: 'Via Header Check',
    maxForwards: 'Max-Forwards Test',
    fingerprinting: 'Proxy Fingerprinting',
    timing: 'Timing Analysis',
    advanced: 'Advanced Options',
    apiSelection: 'Select API'
  },
  apis: {
    ipify: 'ipify API',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },
  results: {
    title: 'Detection Results',
    summary: 'Proxy Summary',
    headers: 'Full Request Headers',
    info: 'Proxy Information Explanation',
    detected: 'Proxy Detected',
    notDetected: 'No Proxy Detected',
    detectedDescription: 'Your request may have passed through one or more proxy servers',
    notDetectedDescription: 'Your request seems to have reached the target server directly without passing through a proxy',
    clientInfo: 'Client IP Information',
    remoteIp: 'Remote IP Address',
    location: 'Location',
    isp: 'ISP Provider',
    proxyHeaders: 'Proxy-related Header Information',
    details: 'Detailed Results',
    proxy: 'Proxy',
    type: 'Type',
    ip: 'IP Address',
    software: 'Software',
    confidence: 'Confidence',
    latency: 'Latency',
    headers: 'Modified Headers',
    fingerprint: 'Fingerprint',
    export: 'Export Results',
    clear: 'Clear Results',
    noData: 'No data available',
    originalRequest: 'Original Request',
    modifiedRequest: 'Modified Request',
    proxyChain: 'Proxy Chain',
    server: 'Server',
    notSet: 'Not Set'
  },
  types: {
    forward: 'Forward Proxy',
    reverse: 'Reverse Proxy',
    transparent: 'Transparent Proxy',
    anonymous: 'Anonymous Proxy',
    elite: 'High Anonymity Proxy',
    caching: 'Caching Proxy',
    gateway: 'Gateway',
    loadBalancer: 'Load Balancer',
    cdn: 'CDN',
    corporate: 'Corporate Proxy',
    unknown: 'Unknown Type'
  },
  headers: {
    title: 'Header Analysis',
    original: 'Original Headers',
    modified: 'Modified Headers',
    added: 'Added Headers',
    removed: 'Removed Headers',
    changed: 'Changed Headers',
    suspicious: 'Suspicious Headers',
    select: 'Select headers to analyze',
    name: 'Header Name',
    value: 'Value',
    all: 'All HTTP Request Headers',
    notFound: 'This header information was not found'
  },
  details: {
    title: 'Proxy Details',
    software: 'Software',
    version: 'Version',
    features: 'Features',
    modifications: 'Modifications',
    behavior: 'Behavior',
    security: 'Security Impact',
    recommendations: 'Recommendations'
  },
  map: {
    title: 'Connection Map',
    client: 'Your Client',
    target: 'Target Server',
    hop: 'Hop {n}',
    direct: 'Direct Connection',
    proxied: 'Proxied Connection',
    unknown: 'Unknown Path'
  },
  actions: {
    copyHeaders: 'Copy Request Headers',
    copyToClipboard: 'Copy to Clipboard'
  },
  messages: {
    startDetection: 'Starting proxy detection...',
    detectionComplete: 'Proxy detection completed',
    error: 'Detection failed: {message}',
    timeout: 'Detection timed out',
    exportComplete: 'Results exported successfully',
    noConnection: 'Unable to establish a connection',
    limitedResults: 'Results are limited due to restrictions',
    privateNetwork: 'Private network detected',
    publicNetwork: 'Public network detected',
    warning: 'Warning: {message}',
    proxyRemoved: 'A proxy may be removing detection headers',
    copied: 'Request headers copied to clipboard',
    copyFailed: 'Copy failed, please copy manually',
    unknown: 'Unknown error'
  },
  info: {
    description: 'An HTTP proxy is an intermediary server located between the client and the server, which processes HTTP requests for various purposes. Proxies can be set up by network providers, organizations, companies, or individuals.'
  },
  xff: {
    title: 'What is X-Forwarded-For?',
    description: 'X-Forwarded-For (XFF) is an HTTP header field that identifies the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer. When a request passes through a proxy, the server usually only sees the proxy server’s IP address, while the XFF header provides a way to trace back to the original client IP.',
    notFound: 'The X-Forwarded-For header was not found, indicating that the request may not have passed through a proxy or the proxy did not add this header.',
    format: {
      title: 'Format of the XFF Header',
      description: 'The standard format of the XFF header is a comma-separated list of IP addresses, with the leftmost IP being the original client, and subsequent IPs being the proxies traversed:'
    },
    related: {
      title: 'Other Related Proxy Headers',
      forwardedProto: 'Identifies the protocol used by the client to connect to the proxy (HTTP or HTTPS)',
      forwardedHost: 'Identifies the original hostname requested by the client',
      via: 'Indicates the proxy servers the request and response have passed through',
      forwarded: 'A newer standard header that includes both client and all proxy information'
    },
    importance: {
      title: 'Why Is Proxy Information Important?',
      security: 'Security and access control - Accurately identifying the client IP is important for preventing abuse and implementing IP-based access control',
      logging: 'Logging - For auditing and troubleshooting, logging the real client IP is more useful than the proxy IP',
      geolocation: 'Geolocation services - IP-based geolocation services require the real client IP to provide accurate results',
      content: 'Content customization - Some services offer localized content based on user geolocation'
    },
    security: {
      title: 'Security Considerations',
      description: 'It is important to note that the X-Forwarded-For header can be forged by clients. In high-security environments, only XFF information added by known proxy servers should be trusted, or other methods should be used to verify the client IP.'
    }
  },
  privacy: {
    title: 'Privacy Notice',
    description: 'During the detection process, your IP address and HTTP header information will be sent to third-party API services for analysis. These services may collect and store this information to provide their services.',
    suggestion: 'If you have privacy concerns, please select a different API provider or consider using a VPN service.'
  }
}