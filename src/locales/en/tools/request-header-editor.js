export default {
  name: 'Request Header Editor',
  description: 'Create, edit, and test HTTP request headers',
  editor: {
    title: 'Header Editor',
    headers: 'Request Headers',
    add: 'Add Header',
    bulk: 'Bulk Edit',
    import: 'Import Headers',
    export: 'Export Headers',
    clear: 'Clear All'
  },
  header: {
    name: 'Header Name',
    value: 'Value',
    description: 'Description',
    namePlaceholder: 'Enter header name',
    valuePlaceholder: 'Enter header value',
    actions: 'Actions',
    enabled: 'Enabled',
    duplicate: 'Duplicate',
    delete: 'Delete'
  },
  presets: {
    title: 'Presets',
    save: 'Save Current',
    load: 'Load Preset',
    delete: 'Delete Preset',
    presetName: 'Preset Name',
    namePlaceholder: 'Enter preset name',
    confirmDelete: 'Are you sure you want to delete this preset?',
    common: 'Common Headers',
    custom: 'Custom Presets'
  },
  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },
  test: {
    title: 'Test Headers',
    url: 'URL',
    urlPlaceholder: 'Enter URL to test headers',
    method: 'Method',
    send: 'Send Request',
    response: 'Response'
  },
  response: {
    title: 'Response',
    status: 'Status',
    headers: 'Response Headers',
    body: 'Body',
    time: 'Time',
    size: 'Size',
    loading: 'Loading...',
    noResponse: 'No response received'
  },
  options: {
    title: 'Options',
    followRedirects: 'Follow Redirects',
    timeout: 'Timeout (seconds)',
    validateSSL: 'Validate SSL Certificate',
    sendCredentials: 'Send Credentials'
  },
  formats: {
    title: 'Export Format',
    raw: 'Raw Text',
    json: 'JSON',
    curl: 'cURL Command',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP'
  },
  guides: {
    title: 'Header Guides',
    description: 'Learn about common HTTP headers and their usage',
    securityHeaders: 'Security Headers',
    cachingHeaders: 'Caching Headers',
    corsHeaders: 'CORS Headers',
    authenticationHeaders: 'Authentication Headers'
  },
  messages: {
    headerAdded: 'Header added',
    headerDeleted: 'Header deleted',
    headersCleared: 'All headers cleared',
    presetSaved: 'Preset saved',
    presetLoaded: 'Preset loaded',
    presetDeleted: 'Preset deleted',
    requestSent: 'Request sent',
    requestFailed: 'Request failed: {error}',
    copied: 'Copied to clipboard',
    importSuccess: 'Headers imported successfully',
    exportSuccess: 'Headers exported successfully',
    invalidUrl: 'Invalid URL'
  }
} 