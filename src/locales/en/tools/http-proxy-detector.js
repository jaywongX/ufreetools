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
    description: 'X-Forwarded-For (XFF) is an HTTP header field that identifies the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer. When a request passes through a proxy, the server usually only sees the proxy server\'s IP address, while the XFF header provides a way to trace back to the original client IP.',
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
  },
  article: {
    title: "HTTP Proxy Detector - Identify and Analyze Network Proxies",
    intro: {
      title: "What is HTTP Proxy Detection?",
      p1: "<b>HTTP proxy detection</b> is the process of identifying if your internet connection is passing through one or more intermediary servers known as proxies. Our HTTP proxy detector tool analyzes your network requests to identify proxy signatures by examining HTTP headers like X-Forwarded-For, Via, and other indicators that reveal the presence of proxies in your connection path.",
      p2: "Proxies are intermediary servers that sit between your device and the websites you visit. They can be used for various legitimate purposes such as improving performance through caching, implementing access controls, or providing anonymity. However, proxies can also pose security concerns when used without your knowledge or consent. Our <b>proxy detection tool</b> helps you identify hidden proxies in your network, enabling better security awareness and troubleshooting.",
      p3: "When you connect through an <b>HTTP proxy server</b>, certain information about your browsing activity may be visible to the proxy operator. This online proxy detector tool empowers you with the knowledge of whether your connection is direct or passes through one or more proxy layers, giving you greater control over your online privacy and security."
    },
    useCases: {
      title: "Practical Applications of Proxy Detection",
      case1: "<b>Network Troubleshooting</b>: When experiencing connectivity issues, detecting proxies can help identify if an intermediary server is causing problems. IT professionals often need to verify proxy configurations to diagnose network issues.",
      case2: "<b>Security Verification</b>: Ensure your private browsing isn't passing through unauthorized proxy servers that could be monitoring or modifying your traffic. Organizations can use proxy detection to verify that corporate security policies are properly implemented.",
      case3: "<b>Website Developers</b>: Web developers need to understand how their content is being delivered to users, especially when using content delivery networks (CDNs) or load balancers that function as proxies. Testing for proper header handling is essential for security and analytics.",
      case4: "<b>Geo-restriction Verification</b>: Check if your VPN or proxy service is properly masking your location for accessing region-restricted content. Our tool helps verify if geo-location bypass measures are functioning correctly.",
      case5: "<b>Corporate Environment Checks</b>: For employees working in corporate environments, verify the presence and configuration of company proxies that may affect your internet access or application functionality. This is particularly important when troubleshooting application connectivity issues."
    },
    tutorial: {
      title: "How to Detect HTTP Proxies in Your Connection",
      intro: "Follow this step-by-step guide to effectively use our HTTP proxy detector tool and understand your network configuration:",
      step1: {
        title: "Step 1: Start the Detection Process",
        description: "Begin by clicking the <b>\"Start Detection\"</b> button on the tool interface. The detector will immediately start analyzing your connection by making requests to specialized API endpoints. By default, the tool automatically selects the most reliable detection method, but you can choose between different APIs using the dropdown selector for more thorough testing."
      },
      step2: {
        title: "Step 2: Review the Summary Results",
        description: "Once detection is complete, the <b>\"Proxy Summary\"</b> tab will show you whether proxies were detected in your connection. Look for the green checkmark indicating a direct connection or a yellow warning icon showing that proxies were found. The summary will also display your detected IP address and location information, which can help verify if your actual location is being masked."
      },
      step3: {
        title: "Step 3: Examine Proxy Headers in Detail",
        description: "Click on the <b>\"Full Request Headers\"</b> tab to see all HTTP headers from your request. Pay special attention to headers like X-Forwarded-For, Via, and Forwarded, which indicate proxy usage. The X-Forwarded-For header is particularly important as it contains a chain of IP addresses showing the path your request took through various proxies. You can copy all headers to clipboard using the button at the bottom of this section for further analysis."
      },
      step4: {
        title: "Step 4: Understand the Proxy Information",
        description: "For a deeper understanding of what the detected headers mean, visit the <b>\"Proxy Information Explanation\"</b> tab. This section explains the purpose of different proxy-related headers and how they impact your connection security. Use this knowledge to determine if the detected proxies are expected (like your corporate network proxy) or potentially unwanted intermediaries."
      }
    },
    techniques: {
      title: "Understanding HTTP Proxy Detection Techniques",
      intro: "Our tool employs multiple methods to accurately detect proxies in your network connection. Here's an overview of the key techniques used:",
      method1: {
        title: "Header Analysis",
        description: "The most common detection method examines HTTP headers like X-Forwarded-For, Via, and Forwarded that are typically added by proxy servers. These headers often contain information about the client's original IP address and the proxy chain."
      },
      method2: {
        title: "IP Comparison",
        description: "Our tool compares the IP address seen by the server with the expected client IP. Discrepancies between these IPs often indicate the presence of a proxy. This method is particularly effective for detecting transparent proxies."
      },
      method3: {
        title: "Timing Analysis",
        description: "By analyzing response times, we can sometimes detect proxies since they typically add latency to network requests. Caching proxies may show inconsistent timing patterns depending on whether content is cached."
      },
      method4: {
        title: "Server-Side Detection",
        description: "Our APIs perform server-side checks that can identify certain types of proxies based on port scanning, known proxy IP databases, and behavioral patterns in the HTTP request."
      }
    },
    faq: {
      title: "Frequently Asked Questions About HTTP Proxy Detection",
      q1: "Why should I check if my connection uses a proxy?",
      a1: "Checking for proxies is important for several reasons: <b>security awareness</b> (knowing if your traffic is being monitored), <b>privacy concerns</b> (understanding who might have access to your browsing data), <b>troubleshooting network issues</b> (identifying if proxies are causing connection problems), and <b>verifying VPN functionality</b> (ensuring your privacy tools are working correctly). Regular proxy detection helps maintain awareness of your network's security posture.",
      
      q2: "Can the HTTP proxy detector tool identify all types of proxies?",
      a2: "While our HTTP proxy detector is highly effective at identifying conventional proxies through header analysis, some advanced proxy types may be harder to detect. <b>Transparent proxies</b> that don't modify headers can sometimes be identified through IP discrepancies. <b>Anonymous proxies</b> designed to hide their presence may be detected through timing analysis or server-side techniques. However, <b>high-anonymity proxies</b> specifically designed to avoid detection might not be identified by client-side tools. For more thorough detection, we recommend using multiple API options in our tool.",
      
      q3: "Is using a proxy illegal or harmful to my computer?",
      a3: "Using proxies is generally legal in most countries and not harmful to your computer. Proxies serve many legitimate purposes including <b>improving internet performance</b> through caching, <b>enhancing privacy</b> by masking your IP address, <b>accessing geo-restricted content</b>, and <b>implementing security policies</b> in corporate environments. However, the legality depends on how the proxy is used—activities like bypassing copyright restrictions or terms of service violations through proxies may be problematic. Always ensure you're using proxies in compliance with local laws and service terms.",
      
      q4: "What's the difference between a proxy and a VPN?",
      a4: "While both proxies and VPNs route your traffic through intermediate servers, they differ significantly in several ways: <b>VPNs encrypt all traffic</b> between your device and the VPN server, while most proxies don't offer encryption. VPNs typically route <b>all internet traffic</b> from your device through their servers, whereas proxies often only handle traffic from specific applications or protocols. VPNs generally provide <b>better privacy protection</b> and security features compared to standard proxies. Our proxy detector may identify your VPN connection as a proxy since both technologies modify your connection path.",
      
      q5: "Why does my company use a proxy server, and should I be concerned?",
      a5: "Companies implement proxy servers for several legitimate reasons: <b>content filtering</b> (restricting access to certain websites), <b>bandwidth optimization</b> (caching frequently accessed content), <b>security enhancement</b> (scanning for malware or vulnerabilities), <b>monitoring employee activity</b> (ensuring compliance with acceptable use policies), and <b>providing remote access</b> to internal resources. While corporate proxies are generally not a privacy concern, it's important to remember that your online activities on company networks may be monitored. If our proxy detector identifies a corporate proxy, this is typically normal for enterprise environments.",
      
      q6: "How do Content Delivery Networks (CDNs) relate to proxies?",
      a6: "Content Delivery Networks (CDNs) function similarly to <b>reverse proxies</b> and may be detected by our tool. CDNs distribute website content across global server networks to improve loading speeds and reliability. When you access a website using a CDN, your request is typically routed to the nearest CDN server rather than the origin server. This appears as a proxy in your connection because the CDN server acts as an intermediary. Unlike traditional proxies that might be concerning from a privacy perspective, CDNs are implemented by website owners to improve user experience and are a normal part of modern web infrastructure."
    },
    relatedTools: {
      title: "Related Network Analysis Tools",
      description: "Explore these additional tools to gain even more insights into your network configuration and security:",
      tool1: {
        name: "HTTP Header Security Checker",
        url: "https://www.ufreetools.com/tool/http-header-security-checker",
        description: "Analyze the HTTP response headers of a website, detect CSP, HSTS, and provide improvement suggestions"
      },
      tool2: {
        name: "Request Header Editor",
        url: "https://www.ufreetools.com/tool/request-header-editor",
        description: "Create, edit, and test HTTP request headers"
      },
      tool3: {
        name: "HTTP Status Code Lookup",
        url: "https://www.ufreetools.com/tool/http-status-code-lookup",
        description: "Lookup and understand HTTP response status codes and messages"
      },
      tool4: {
        name: "URL Parameter Parser",
        url: "https://www.ufreetools.com/tool/url-params-parser",
        description: "Parse, analyze, and manipulate URL parameters and query strings"
      }
    },
    resources: {
      title: "Learn More About Proxies and Network Security",
      resource1: {
        name: "OWASP Testing Guide",
        url: "https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf",
        description: "The Open Web Application Security Project (OWASP) is a worldwide free and open com- munity focused on improving the security of application software."
      },
      resource2: {
        name: "HTTP Headers - MDN Web Docs",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
        description: "Mozilla Developer Network's detailed documentation on HTTP headers, including those related to proxies and forwarding."
      },
      resource3: {
        name: "Internet Engineering Task Force (IETF) - HTTP Forwarded Header",
        url: "https://tools.ietf.org/html/rfc7239",
        description: "The official RFC 7239 document defining the Forwarded HTTP header, which standardizes information added by proxies."
      }
    }
  }
}