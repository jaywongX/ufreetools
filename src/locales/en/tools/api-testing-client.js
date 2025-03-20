export default {
  name: 'API Testing Client',
  description: 'Test and debug RESTful APIs with request builder and response viewer',
  request: {
    method: 'Method',
    url: 'URL',
    params: 'Query Parameters',
    headers: 'Headers',
    body: 'Request Body',
    auth: 'Authorization',
    key: 'Key',
    value: 'Value',
    description: 'Description',
    addParam: 'Add Parameter',
    addHeader: 'Add Header',
    bodyType: 'Body Type',
    sendRequest: 'Send Request',
    clear: 'Clear',
    save: 'Save Request',
    copy: 'Copy as cURL',
    history: 'History',
    collections: 'Collections',
    import: 'Import',
    export: 'Export',
    cancel: 'Cancel'
  },
  methods: {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    patch: 'PATCH',
    options: 'OPTIONS',
    head: 'HEAD'
  },
  bodyTypes: {
    none: 'None',
    json: 'JSON',
    formData: 'Form Data',
    formUrlEncoded: 'Form URL Encoded',
    raw: 'Raw',
    binary: 'Binary'
  },
  authTypes: {
    none: 'None',
    basic: 'Basic Auth',
    bearer: 'Bearer Token',
    apiKey: 'API Key',
    oauth2: 'OAuth 2.0'
  },
  response: {
    status: 'Status',
    time: 'Time',
    size: 'Size',
    body: 'Response Body',
    headers: 'Response Headers',
    cookies: 'Cookies',
    pretty: 'Pretty',
    raw: 'Raw',
    preview: 'Preview',
    download: 'Download',
    copyBody: 'Copy Body',
    copyHeaders: 'Copy Headers'
  },
  validation: {
    urlRequired: 'URL is required',
    invalidUrl: 'Invalid URL format',
    invalidJson: 'Invalid JSON format',
    duplicateKey: 'Duplicate key'
  },
  messages: {
    requestSent: 'Request sent successfully',
    requestFailed: 'Request failed: {error}',
    requestCancelled: 'Request cancelled',
    copied: 'Copied to clipboard!',
    saved: 'Request saved to collections',
    importSuccess: 'Collection imported successfully',
    exportSuccess: 'Collection exported successfully',
    networkError: 'Network error: Could not connect to server',
    timeoutError: 'Request timed out'
  }
} 