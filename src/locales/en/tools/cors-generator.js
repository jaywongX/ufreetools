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
  },
  article: {
    title: "Complete Guide to CORS Configuration Generator - Secure Cross-Origin Resource Sharing Setup",
    intro: {
      title: "Understanding CORS Configuration and Its Critical Role in Web Security",
      p1: "<b>Cross-Origin Resource Sharing (CORS)</b> is a fundamental security mechanism implemented in all modern browsers that controls how web pages in one domain can request and interact with resources hosted on another domain. Our CORS Configuration Generator tool simplifies the complex process of creating appropriate CORS headers and server configurations, ensuring your web applications can securely communicate across different domains while maintaining proper security boundaries. By generating precisely tailored CORS settings, this tool helps developers implement proper access controls that protect sensitive data while enabling legitimate cross-origin functionality.",
      p2: "<b>Proper CORS configuration is essential</b> for modern web applications that leverage distributed architectures, third-party APIs, and microservices. Without correct CORS settings, browsers will block cross-origin requests by default as a security measure, preventing many common web application architectures from functioning correctly. Our generator creates standardized configurations for various server environments including Node.js/Express, Apache, Nginx, and raw HTTP headers, allowing developers to implement consistent CORS policies regardless of their backend technology stack. This streamlines development workflows and reduces the potential for security misconfigurations that could expose applications to cross-site request forgery (CSRF) and data theft vulnerabilities.",
      p3: "<b>CORS policy generation requires careful consideration</b> of various security parameters including allowed origins, HTTP methods, headers, credentials handling, and caching directives. Manual configuration is error-prone and can lead to either overly restrictive policies that break functionality or dangerously permissive settings that compromise security. Our tool guides users through each configuration option with clear explanations and secure defaults, helping developers make informed decisions about their CORS implementation. The resulting configurations balance security requirements with cross-origin functionality needs, providing immediate value for front-end developers, API architects, and security engineers working on modern web applications."
    },
    useCases: {
      title: "Practical Applications of the CORS Configuration Generator",
      case1: "<b>API Gateway and Microservices Architecture</b>: Organizations developing distributed systems using API gateways and microservices frequently require precise CORS configurations to ensure secure communication between frontend applications and backend services. API architects use our CORS generator to develop standardized header configurations that can be consistently implemented across multiple service endpoints. This approach allows microservices to remain properly isolated while still permitting legitimate cross-origin requests from authorized client applications. For example, a financial technology company might configure their payment processing API to accept requests only from specific frontend domains while blocking all other cross-origin requests. Our generator creates configurations that maintain these security boundaries without requiring developers to manually craft complex header rules for each service.",
      case2: "<b>Third-Party API Integration and SaaS Applications</b>: Companies offering API services and SaaS platforms need to enable third-party integrations while maintaining security boundaries through proper CORS configurations. Platform engineers use our generator to create configurations that selectively permit cross-origin access based on partner domains and subscription status. For instance, a marketing analytics platform might configure their data API to accept requests from their customers' domains while preventing unauthorized access. The generator helps create precisely scoped CORS policies that can be dynamically adjusted as customer relationships evolve, ensuring that API access remains both secure and business-aligned. This capability is especially valuable in partner ecosystem scenarios where API providers must balance openness for integration with security requirements.",
      case3: "<b>Secure Content Delivery Networks (CDNs) and Asset Hosting</b>: Organizations hosting static assets like fonts, stylesheets, images, and JavaScript libraries on dedicated CDNs require appropriate CORS settings to make these resources accessible to their web applications. DevOps engineers use our generator to create configurations that allow specific applications to access CDN-hosted resources while preventing unauthorized usage by other domains. For example, a publishing company hosting premium fonts would configure CORS headers to allow only their own websites to use these assets. The generator creates configurations specific to CDN environments and edge servers, optimizing for both security and performance by setting appropriate caching directives alongside access controls. This ensures that static resources remain protected while still being efficiently delivered to authorized applications.",
      case4: "<b>Development and Testing Environments</b>: Software development teams working with multiple environments (development, staging, production) need flexible CORS configurations that adapt to different security requirements across the development lifecycle. Frontend developers use our generator to create environment-specific configurations that permit cross-origin access during development and testing while implementing stricter controls in production. For example, a development environment might permit localhost origins for local testing, while production environments would restrict access to only verified production domains. The generator helps create these graduated security policies without requiring extensive manual reconfiguration, streamlining the development workflow while maintaining appropriate security boundaries at each stage. This approach prevents security shortcuts during development from persisting into production environments.",
      case5: "<b>Multi-Region and International Web Applications</b>: Global organizations operating applications across multiple geographic regions often deploy services to region-specific domains and subdomains that must securely communicate with each other. System architects use our generator to create CORS configurations that permit cross-origin requests between an organization's various regional domains while blocking external requests. For example, a multinational corporation might need to allow api.us.example.com to receive requests from app.eu.example.com. The generator creates precise origin specifications that account for these complex domain relationships while maintaining security boundaries against external domains. These configurations ensure that geographically distributed components of the same application can function cohesively while maintaining protection against cross-origin threats from unauthorized sources."
    },
    tutorial: {
      title: "How to Generate Secure CORS Configurations",
      intro: "Follow this step-by-step guide to create properly secured CORS configurations tailored to your specific requirements:",
      step1: {
        title: "Step 1: Configure Allowed Origins",
        description: "Begin by specifying which domains are permitted to access your resources through the <b>Allowed Origins</b> section. For maximum security, avoid using the wildcard (*) option which allows any domain to access your resources. Instead, select the \"Specify allowed origins\" option and add each trusted domain individually. For example, enter \"https://yourtrustedapp.com\" to permit only that specific domain. Remember to include the protocol (https://) and be mindful that subdomains are considered separate origins (app.example.com and api.example.com are different origins). If you need to support development environments, you can add development domains like \"http://localhost:3000\" alongside production domains. After adding all trusted domains, double-check for typos as even minor errors will cause legitimate requests to be blocked by browsers."
      },
      step2: {
        title: "Step 2: Specify Allowed HTTP Methods",
        description: "Next, select the HTTP methods your API or resources should accept from cross-origin requests in the <b>Allowed HTTP Methods</b> section. Following the principle of least privilege, only enable methods that your application actually needs. For read-only resources, consider limiting to GET and OPTIONS (OPTIONS is required for preflight requests). For resources that accept updates, selectively enable POST, PUT, PATCH, or DELETE based on your API's actual requirements. Be particularly cautious when enabling methods that modify data (POST, PUT, PATCH, DELETE) as these require additional security considerations. The OPTIONS method should typically remain enabled as browsers use this for preflight requests to verify permission before making actual cross-origin requests with other methods. Your selection here directly impacts what operations cross-origin clients can perform on your resources."
      },
      step3: {
        title: "Step 3: Configure Headers and Credentials",
        description: "In the <b>Allowed Headers</b> section, specify which HTTP request headers should be permitted in cross-origin requests. Enable common headers needed by your application like 'Content-Type' for specifying request formats, 'Authorization' for authentication tokens, and any custom headers your application requires. For credential-based authentication (cookies, HTTP authentication, or client-side certificates), configure the <b>Allow Credentials</b> option appropriately. Important: When allowing credentials, you cannot use the wildcard (*) for allowed origins – you must specify explicit origins. Next, set an appropriate <b>Preflight Cache Duration</b> to reduce the number of preflight requests. The recommended value of 3600 seconds (one hour) balances performance with the flexibility to update CORS policies when needed. Finally, if your API returns custom headers that client applications need to access, add these to the <b>Exposed Headers</b> section."
      },
      step4: {
        title: "Step 4: Generate and Implement Server Configuration",
        description: "After configuring all CORS parameters, select your target server environment from the format options (Node.js/Express, Apache, Nginx, or HTTP Headers). Review the generated configuration code to ensure it matches your requirements. Copy the configuration using the 'Copy' button and implement it in your server environment according to your platform's documentation. For Node.js applications, install the 'cors' package and apply the configuration to your Express application. For Apache servers, add the generated directives to your .htaccess file or server configuration. For Nginx, include the directives in your server or location block. After implementation, thoroughly test your CORS configuration using cross-origin requests to verify that legitimate requests are permitted while unauthorized origins remain blocked. Consider using browser developer tools to inspect the CORS headers returned by your server and debug any issues."
      }
    },
    corsDetails: {
      title: "Technical Details of CORS Implementation",
      intro: "Understanding the underlying mechanisms of CORS helps create more effective and secure configurations:",
      preflight: {
        title: "Preflight Requests and Their Role",
        description: "<b>Preflight requests are a critical security mechanism</b> in the CORS protocol that browsers use to check whether they have permission to perform specific cross-origin requests before actually sending them. When a request might modify server data (like POST or PUT requests) or uses non-simple headers, browsers automatically send an OPTIONS request to the server first. This preflight request includes headers indicating the HTTP method and headers the actual request intends to use. The server must respond with appropriate Access-Control-Allow-* headers indicating whether the intended request is permitted. This preflight mechanism provides an important security checkpoint that prevents potentially dangerous cross-origin requests from being sent to servers that haven't explicitly opted-in to receiving them. Our CORS Configuration Generator automatically creates the necessary server-side handling for these preflight requests across all supported server platforms, ensuring your server correctly responds to these browser security checks with the permissions you've specified."
      },
      security: {
        title: "Security Implications of CORS Settings",
        description: "<b>CORS configurations directly impact the security posture</b> of your web applications by controlling which external domains can interact with your API endpoints and resources. Overly permissive CORS settings—particularly using the wildcard origin (*)—can expose your application to cross-site request forgery attacks where malicious sites make unauthorized requests to your API using the user's authenticated session. When using the Access-Control-Allow-Credentials: true header, it's especially critical to specify exact allowed origins rather than wildcards, as allowing credentials with wildcard origins would create severe security vulnerabilities. The principle of least privilege should guide your CORS configuration: only allow the specific origins, methods, and headers that your application legitimately requires for functionality. Our generator encourages security best practices by providing clear warnings about potentially insecure configurations and offering secure defaults that protect your resources while enabling necessary cross-origin functionality. This approach helps prevent common security misconfigurations that could lead to data exposure or unauthorized actions."
      },
      headers: {
        title: "Essential CORS Headers Explained",
        description: "<b>Each CORS header serves a specific security function</b> in controlling cross-origin access to your resources. Access-Control-Allow-Origin specifies which domains can access your resources and is the most fundamental CORS header—browsers strictly enforce this origin matching. Access-Control-Allow-Methods declares which HTTP methods external domains can use when requesting your resources, allowing you to restrict cross-origin requests to read-only operations if desired. Access-Control-Allow-Headers controls which HTTP headers can be included in cross-origin requests, letting you permit specific headers like Authorization while blocking others. Access-Control-Allow-Credentials determines whether browsers can send cookies or authentication information with cross-origin requests, which is essential for maintaining authenticated sessions across origins. Access-Control-Max-Age specifies how long browsers should cache the preflight response, optimizing performance by reducing preflight requests. Access-Control-Expose-Headers allows you to make specific response headers visible to cross-origin clients, which is necessary when clients need to access custom headers in your API responses. Our generator creates appropriate combinations of these headers based on your specific requirements, ensuring a complete and coherent CORS configuration."
      }
    },
    faq: {
      title: "Frequently Asked Questions About CORS Configuration",
      q1: "What is the difference between CORS and traditional same-origin policy?",
      a1: "<b>The Same-Origin Policy (SOP) and Cross-Origin Resource Sharing (CORS)</b> work together to create a secure web browsing environment, though they serve different purposes. Same-Origin Policy is the default security mechanism in browsers that restricts how documents or scripts from one origin can interact with resources from another origin. This is a restrictive baseline that blocks cross-origin requests by default. CORS, on the other hand, is a controlled relaxation of this policy—it provides a structured way for servers to declare which origins should be permitted to access their resources despite the Same-Origin Policy restrictions. While SOP is a browser-enforced restriction, CORS is implemented through HTTP headers that servers send to tell browsers which cross-origin requests should be allowed as exceptions to SOP. Our CORS generator creates the server-side configurations that enable these controlled exceptions to the Same-Origin Policy. Without proper CORS headers, browsers will enforce SOP and block cross-origin requests even if your server is technically capable of handling them. This is why CORS configuration is essential for modern web applications that need to share resources across different domains.",
      
      q2: "Why can't I use wildcard (*) origins when credentials are enabled?",
      a2: "<b>Browsers strictly prohibit using wildcard origins with credentials</b> as a critical security measure to prevent serious vulnerabilities. If browsers allowed the combination of Access-Control-Allow-Origin: * with Access-Control-Allow-Credentials: true, it would create a dangerous scenario where any website could make authenticated requests to your API using the user's credentials (cookies, HTTP authentication, or client certificates). This would effectively nullify the protection that Same-Origin Policy provides against cross-site request forgery (CSRF) attacks. For example, if this combination were allowed, a malicious site could make requests to your banking API with the user's authentication cookies, potentially transferring funds or accessing sensitive information. To prevent this vulnerability, all major browsers enforce a strict rule: when Access-Control-Allow-Credentials is set to true, the Access-Control-Allow-Origin header must specify an exact origin rather than a wildcard. Our CORS generator enforces this security constraint by disabling the credentials option when wildcard origins are selected, and conversely, disabling wildcard origins when credentials are enabled. This ensures that your generated configurations will always comply with this critical browser security requirement.",
      
      q3: "How do CORS preflight requests impact API performance?",
      a3: "<b>CORS preflight requests can significantly impact API performance</b> because they add an additional HTTP request (OPTIONS) before the actual data request for many cross-origin scenarios. Each preflight request creates latency as browsers must wait for the OPTIONS response before proceeding with the actual request. This effectively doubles the number of HTTP requests and server round-trips for non-simple cross-origin requests. The performance impact is particularly noticeable in applications with frequent API calls or high-latency connections. To mitigate this performance penalty, the Access-Control-Max-Age header is crucial—it instructs browsers to cache the preflight results for a specified duration (in seconds), preventing additional preflight requests for the same resource within that timeframe. Our generator recommends setting this value to 3600 seconds (one hour) as a reasonable default that balances performance optimization with the flexibility to update CORS policies when needed. For high-traffic applications, you might consider increasing this value further (up to 86400 seconds/24 hours, though browsers may impose their own upper limits). Additionally, for maximum performance in production environments, ensure your server responds quickly to OPTIONS requests and consider implementing specific optimization routes for handling preflight requests with minimal processing overhead.",
      
      q4: "How do I properly test if my CORS configuration is working correctly?",
      a4: "<b>Testing CORS configurations requires a methodical approach</b> since incorrect configurations often manifest as vague browser error messages that can be difficult to diagnose. The most effective testing strategy involves creating a simple cross-origin test client hosted on a different domain than your API. This could be a basic HTML page with JavaScript that makes various types of requests to your API endpoints. Using Chrome or Firefox's developer tools (Network tab), observe both the preflight OPTIONS requests and the subsequent actual requests. Verify that OPTIONS requests receive 200 or 204 responses with the correct Access-Control-Allow-* headers. Test various scenarios including different HTTP methods, custom headers, and requests with credentials to ensure your configuration handles all your application's requirements. Common testing issues include forgetting that localhost:3000 and localhost:8080 are considered different origins by browsers, or missing protocol differences (http vs https). If you're seeing CORS errors, check that your allowed origins exactly match the requesting page's origin (including protocol, domain, and port), verify that your server is actually sending the CORS headers in its responses (not just in the configuration), and ensure preflight requests are being handled correctly. Our generator produces configurations for common server environments, but you may need to adapt them for your specific server setup.",
      
      q5: "What are the security risks of overly permissive CORS policies?",
      a5: "<b>Overly permissive CORS policies can introduce serious security vulnerabilities</b> by weakening the protection that same-origin policy provides against cross-site attacks. The most significant risk comes from configuring Access-Control-Allow-Origin: * combined with Access-Control-Allow-Credentials: true (though browsers prevent this specific combination, misconfigured proxies might not). Even without credentials, excessively open CORS policies can expose sensitive APIs and data to unauthorized websites. For example, if an internal administration API allows any origin, malicious sites could make requests to it and potentially access sensitive data or operations. Another common risk is improper Origin validation—such as naive string matching that approves any origin containing a trusted domain (allowing attacker.com/evil.yourcompany.com instead of just yourcompany.com). Additionally, misconfigured CORS can enable cross-site request forgery attacks if the policy allows untrusted origins to make state-changing requests. To mitigate these risks, follow the principle of least privilege by allowing only the specific origins, methods, and headers your application legitimately needs. For internal APIs, never use wildcard origins. Regularly audit your CORS configurations as part of security reviews, and consider implementing additional authentication mechanisms beyond CORS for sensitive operations. Our generator creates configurations that encourage these security best practices while still enabling necessary cross-origin functionality."
    },
    relatedTools: {
      title: "Explore Related Web Development Tools",
      description: "Enhance your web development workflow with these complementary tools:",
      tool1: {
        name: "JSON Formatter and Validator",
        url: "https://www.ufreetools.com/tool/json-formatter",
        description: "Format, validate and beautify JSON data for your API responses and requests."
      },
      tool2: {
        name: "HTTP Status Code Reference",
        url: "https://www.ufreetools.com/tool/http-status-code-lookup",
        description: "Comprehensive guide to HTTP status codes for proper API response handling."
      },
      tool3: {
        name: "JWT Debugger",
        url: "https://www.ufreetools.com/tool/jwt-debugger",
        description: "Parse, verify and debug JWT tokens online."
      },
      tool4: {
        name: "URL Encoder/Decoder",
        url: "https://www.ufreetools.com/tool/url-encode-decode",
        description: "Encode or decode URL components for"
      }
    },
    resources: {
      title: "Authoritative Resources on CORS and Web Security",
      resource1: {
      name: "MDN Web Docs: Cross-Origin Resource Sharing (CORS)",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
      description: "Mozilla's comprehensive guide to understanding and implementing CORS with detailed explanations of all headers and browser behaviors."
      },
      resource2: {
        name: "W3C CORS Specification",
        url: "https://www.w3.org/TR/cors/",
        description: "The official W3C specification that defines the Cross-Origin Resource Sharing standard implemented by browsers."
      },
      resource3: {
        name: "CORS Misconfiguration | Application Security Cheat Sheet",
        url: "https://0xn3va.gitbook.io/cheat-sheets/web-application/cors-misconfiguration",
        description: "Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain.  It extends and adds flexibility to the same-origin policy (SOP)."
      }
    }
  }
}